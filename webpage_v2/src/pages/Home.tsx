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
                        <List.Item>Latest update: Earnings release data up to 2nd Quarter FY3/2023. Added data for playing cards, digital sales. New Key Sales Indicators.</List.Item>
                        <List.Item>Future update planned: Notes section.</List.Item>
                    </List>
                    <Text>Capcom -</Text>
                    <List withPadding listStyleType="disc">
                        <List.Item>Latest update: Platinum Titles list FY3/2023 updated, Software Sales from FY3/21 to FY3/23 updated (Now with Graphs), added Software Platform Shipments from FY3/21 to FY3/22.</List.Item>
                        <List.Item>Future update planned: Notes section.</List.Item>
                    </List>
                    <Text>Sega Sammy -</Text>
                    <List withPadding listStyleType="disc">
                        <List.Item>Latest update: Sales per Software Unit data from FY3/2020 to FY3/23 added (Now with Graphs), added Software Units.</List.Item>
                        <List.Item>Future update planned: Notes section.</List.Item>
                    </List>
                    <Text>Bandai Namco -</Text>
                    <List withPadding listStyleType="disc">
                        <List.Item>Latest update: Sales per Software Unit data from FY3/2019 to FY3/2023 added (Now with Graphs).</List.Item>
                    </List>
                    <Text>Koei Tecmo -</Text>
                    <List withPadding listStyleType="disc">
                        <List.Item>Latest update: Sales per Software Unit data from FY3/2019 to FY3/2023 added (Now with Graphs).</List.Item>
                    </List>
                    <Text>Square Enix -</Text>
                    <List withPadding listStyleType="disc">
                        <List.Item>Latest update: FY Series IP data and, Sales per Software Unit data from FY3/2020 to FY3/2023 added.</List.Item>
                    </List>
                    <Text>Events -</Text>
                    <List withPadding listStyleType="disc">
                        <List.Item>Page update: Updated calendar for 22 of 22 companies from October to November 2022.</List.Item>
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