import { useEffect, useState } from "react";
import { Text, Stack, Paper, Anchor, Code } from '@mantine/core';
import { useInterval } from "@mantine/hooks";
import "../App.css"

import { liner, printTextBlock } from "../utils/table_design_logic";

const NoMatch = () => {

    const message = "There is no page here, or is there?... ";
    const splitMessage = message.split("");

    const [text, setText] = useState("");

    const [textBlock, setTextBlock] = useState("");

    const [seconds, setSeconds] = useState(0);
    const interval = useInterval(() => setSeconds((s) => s + 1), 120);


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
        <div className="clamps">
            <Stack mb="md" align="center">
            <Code style={{backgroundColor: `rgba(0, 255, 255,0.2)`}} block>{textBlock}</Code>
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

export default NoMatch;