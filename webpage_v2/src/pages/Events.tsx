import { useEffect, useState } from "react";
import { Text, Anchor, Stack, Paper, Code } from '@mantine/core';
import { useInterval } from "@mantine/hooks";
import "../App.css" // have to import the css to get it to work
import EVENTS_CALENDAR from "../components/EVENTS_CALENDAR";

import { liner, printTextBlock } from "../utils/table_design_logic";

const Home = () => {

    const message = "This is where you can use the calendar to find some upcoming events. ";

    const splitMessage = message.split("");

    const [text, setText] = useState("");

    // const [textColour, setTextColour] = useState({});

    const [textBlock, setTextBlock] = useState("");

    const [seconds, setSeconds] = useState(0);
    
    const interval = useInterval(() => setSeconds((s) => s + 1), 80);

    useEffect(() => {
        if (seconds === splitMessage.length) {
            interval.stop();
        } else {
            interval.start();

            setText(text + splitMessage[seconds])

            setTextBlock(liner(printTextBlock(text + " ".repeat(message.length-text.length),40),"−","both",true,40))
        }

    }, [seconds])

    return (

        <div>
            <Stack mb="md" align="center">
            <Code style={{backgroundColor: `rgba(0, 255, 255,0.2)`}} block>{textBlock}</Code>
            </Stack>
            <Paper shadow="sm" radius="xl" p="md" withBorder>
            <Stack align="center">
                <Text className="fade" mt="md" style={{textAlign: "center"}} size="lg">You'll want to head to Install Base, where events such as Earnings Results are discussed.</Text>
                    <Anchor className="fade" style={{textAlign: "center"}} mb="sm" href="https://www.installbaseforum.com/" target="_blank" >
                        https://www.installbaseforum.com/
                    </Anchor>
            </Stack>
            </Paper>

            <EVENTS_CALENDAR />        
        </div>
    );
};

export default Home;