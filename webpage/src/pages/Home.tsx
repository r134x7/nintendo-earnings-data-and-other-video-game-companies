import { useEffect, useState } from "react";
import { Text, Anchor, Stack, Paper } from '@mantine/core';
import { useInterval } from "@mantine/hooks";
import "../App.css" // have to import the css to get it to work

const Home = () => {

    const one = "Welcome to ggx2ac and the archives of Nintendo earnings data and other video game companies";
    const splitOne = one.split("");

    const [text, setText] = useState("");

    const [textColour, setTextColour] = useState({})

    const [seconds, setSeconds] = useState(0);
    
    const interval = useInterval(() => setSeconds((s) => s + 1), 80);

    useEffect(() => {
        
        if (seconds >= splitOne.length) { // LINE ONE
            setTextColour({ color: 'crimson', fontSize: 18, lineHeight: 1.4 });
            interval.stop();
        } else if (seconds <= splitOne.length + 1) {
            interval.start();
            setText(text + splitOne[seconds])
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [seconds]);

    return (

        <div>
            <Stack mb="md" align="center">
            <Paper shadow="sm" radius="lg" p="md" withBorder>
                <Text style={{textAlign: "center"}} sx={textColour} size="lg">{text}</Text>
            </Paper>
            </Stack>
            <Paper shadow="sm" radius="xl" p="md" withBorder>
            <Stack align="center">
                <Text className="fade" mt="md" style={{textAlign: "center"}} size="lg">Also visit Install Base, it's a place to discuss and elaborate on the business side of the game industry.</Text>
                    <Anchor className="fade" style={{textAlign: "center"}} mb="sm" href="https://www.installbaseforum.com/" target="_blank" >
                        https://www.installbaseforum.com/
                    </Anchor>
            </Stack>
            </Paper>        
        </div>
    );
};

export default Home;