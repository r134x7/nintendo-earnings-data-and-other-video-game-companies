import { useEffect, useState } from "react";
import { Anchor, Stack, Code } from '@mantine/core';
import { useInterval } from "@mantine/hooks";
import "../App.css" // have to import the css to get it to work
import { useSelector } from "react-redux";
import EVENTS_CALENDAR from "../components/EVENTS_CALENDAR";

import { liner, printTextBlock } from "../utils/table_design_logic";

const Home = () => {

    const state: any = useSelector(state => state);

    const linkOther = liner(printTextBlock("You'll want to head to Install Base, where events such as Earnings Results are discussed. Link:",40),"=","top",true,40);

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
            <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
                {textBlock}
            </Code>
            </Stack>
            <Stack align="center">
            <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
                {linkOther}
                    <Anchor className="fade" style={{textAlign: "center"}} mb="sm" href="https://www.installbaseforum.com/" target="_blank" >
                    <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000", padding:0}} block>
                        {liner(printTextBlock("https://www.installbaseforum.com/",40),"=","both",true,40)}
                    </Code>
                </Anchor>
            </Code>
            </Stack>

            <EVENTS_CALENDAR />        
        </div>
    );
};

export default Home;