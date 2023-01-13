import { useEffect, useState } from "react";
import { Text, Anchor, Stack, Paper, List} from '@mantine/core';
import { useInterval } from "@mantine/hooks";
import "../App.css" // have to import the css to get it to work

const Home = () => {

    const one = "Welcome to ggx2ac + archives: Nintendo earnings data and other video game companies";
    const splitOne = one.split("");

    const [text, setText] = useState("");
    const [textColour, setTextColour] = useState({});
    const [seconds, setSeconds] = useState(0);
    
    const interval = useInterval(() => setSeconds((s) => s + 1), 80);

    useEffect(() => {
        
        if (seconds >= splitOne.length) { // LINE ONE
            setTextColour({ color: '#40bfb2', fontSize: 18, lineHeight: 1.4, textAlign: "center" });
            // setBorderColour({ color: 'crimson', fontSize: 21, lineHeight: 1.4 });
            interval.stop();
        } else if (seconds <= splitOne.length + 1) {
            interval.start();
            // setBorder(border + splitTwo[seconds])
            setText(text + splitOne[seconds] 
                // + " ".repeat(86 - seconds)
                )
        }
        
    }, [seconds]);

    return (

        <div>
            <Stack mb="md" align="center">
            <Paper shadow="sm" radius="lg" p="md" withBorder>
                <Text 
                sx={textColour} size="lg">{text}</Text>
            </Paper>
            </Stack>
            <Paper shadow="sm" radius="xl" p="md" withBorder>
            <Stack align="center">
                <Text className="fade" mt="md" style={{textAlign: "center"}} size="lg">Also visit Install Base, it's a place to discuss and elaborate on the business side of the video game industry.</Text>
                    <Anchor className="fade" style={{textAlign: "center"}} mb="sm" href="https://www.installbaseforum.com/" target="_blank" >
                        https://www.installbaseforum.com/
                    </Anchor>
            </Stack>
            </Paper>        
            <Paper mt="sm" shadow="sm" radius="xl" p="md" withBorder>
            <Stack align="center">
                <Text className="fade" mt="md" style={{textAlign: "center"}} size="lg">Status</Text>
                <List listStyleType="disc">
                    {/* <List.Item>Nintendo -</List.Item> */}
                    <Text>Nintendo -</Text>
                    <List withPadding listStyleType="disc">
                        <List.Item>Latest update: Data added for Top Selling Titles from FY3/2012 to FY3/2023, special page also added. Added Consolidated Sales Information from FY3/2004 to FY3/2023. Moved Mobile Income data to Consolidated Sales Information and, added special page.</List.Item>
                        <List.Item>Future update planned: Notes section.</List.Item>
                    </List>
                    <Text>Capcom -</Text>
                    <List withPadding listStyleType="disc">
                        <List.Item>Latest update: Platinum Titles from FY3/2006 to FY3/2023 added (with some data missing, see footnotes at end of some tables). Added sales per software unit cumulative to special page.</List.Item>
                        <List.Item>Future update planned: Notes section.</List.Item>
                    </List>
                    <Text>Sega Sammy -</Text>
                    <List withPadding listStyleType="disc">
                        <List.Item>Latest update: Consolidated Operating Results from FY3/2005 to FY3/2023 added. Added Consolidated Operating Results added to special page.</List.Item>
                        <List.Item>Future update planned: Notes section.</List.Item>
                    </List>
                    <Text>Bandai Namco -</Text>
                    <List withPadding listStyleType="disc">
                        <List.Item>Latest update: Consolidated Operating Results from FY3/2006 to FY3/2023 added. Added Consolidated Operating Results added to special page.</List.Item>
                    </List>
                    <Text>Koei Tecmo -</Text>
                    <List withPadding listStyleType="disc">
                        <List.Item>Latest update: Consolidated Operating Results from FY3/2019 to FY3/2023 added. Added Special page.</List.Item>
                    </List>
                    <Text>Square Enix -</Text>
                    <List withPadding listStyleType="disc">
                        <List.Item>Latest update: Consolidated Financial Results from FY3/2004 to FY3/2023 added. Added Consolidated Financial Results added to special page.</List.Item>
                    </List>
                    <Text>Events -</Text>
                    <List withPadding listStyleType="disc">
                        <List.Item>Page update: Updated calendar for 9 of 22 companies from January to February 2022.</List.Item>
                    </List>
                    <Text>Games -</Text>
                    <List withPadding listStyleType="disc">
                        <List.Item>Latest update: Two games available to play.</List.Item>
                    </List>
                </List>
            </Stack>
            </Paper>        
        </div>
    );
};

export default Home;