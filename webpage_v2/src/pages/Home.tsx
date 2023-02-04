import { useEffect, useState } from "react";
import { Anchor, Stack, Code } from '@mantine/core';
import { useInterval } from "@mantine/hooks";
import "../App.css" // have to import the css to get it to work
import { useSelector } from "react-redux";

import { liner, printTextBlock, useSingleMessage } from "../utils/table_design_logic";

const Home = () => {

    const state: any = useSelector(state => state);

    const nintendoStatus = liner(printTextBlock("Nintendo page status",32),"=","top",true,32) + liner(printTextBlock("Latest update: Data added for Top Selling Titles from FY3/2012 to FY3/2023, special page also added. Added Consolidated Sales Information from FY3/2004 to FY3/2023. Moved Mobile Income data to Consolidated Sales Information and, added special page.",40),"−","both",true,40) + liner(printTextBlock("Future update planned: Notes section.",40),"−","bottom",true,40);

    const capcomStatus = liner(printTextBlock("Capcom page status",32),"=","top",true,32) + liner(printTextBlock("Latest update: Platinum Titles updated to December 31st 2022. 3rd Quarter Earnings release data for FY3/2023 added.",40),"−","both",true,40) + liner(printTextBlock("Future update planned: Notes section.",40),"−","bottom",true,40);

    const segaStatus = liner(printTextBlock("Sega page status",32),"=","top",true,32) + liner(printTextBlock("Latest update: Consolidated Operating Results from FY3/2005 to FY3/2023 added. Added Consolidated Operating Results, FY Series IP and Software Units to special page.",40),"−","both",true,40) + liner(printTextBlock("Future update planned: Notes section.",40),"−","bottom",true,40);

    const bandaiNamcoStatus = liner(printTextBlock("Bandai Namco page status",32),"=","top",true,32) + liner(printTextBlock("Latest update: Consolidated Operating Results from FY3/2006 to FY3/2023 added. Added Consolidated Operating Results and FY Series IP to special page.",40),"−","both",true,40);

    const koeiTecmoStatus = liner(printTextBlock("Koei Tecmo page status",32),"=","top",true,32) + liner(printTextBlock("Latest update: 3rd Quarter Earnings release data for FY3/2023 added.",40),"−","both",true,40);

    const squareEnixStatus = liner(printTextBlock("Square Enix page status",32),"=","top",true,32) + liner(printTextBlock("Latest update: Consolidated Financial Results from FY3/2004 to FY3/2023 added. Added Consolidated Financial Results and FY Series IP to special page.",40),"−","both",true,40);

    const eventsStatus = liner(printTextBlock("Events page status",32),"=","top",true,32) + liner(printTextBlock("Page update: Updated calendar for 20 of 22 companies from January to February 2023.",40),"−","both",true,40);

    const gamesStatus = liner(printTextBlock("Games page status",32),"=","top",true,32) + liner(printTextBlock("Four of five games available to play.",40),"−","both",true,40);

    const linkOther = liner(printTextBlock("Also, visit Install Base. It's a place to discuss and elaborate on the business side of the video game industry.",40),"=","top",true,40);

    const message = "Welcome to ggx2ac + archives: Nintendo earnings data and other video game companies ";

    const makeText = useSingleMessage(message, 40, "−", 80);
    // const splitMessage = message.split("");

    // const [textBlock, setTextBlock] = useState("");

    // const [text, setText] = useState("");
    // // const [textColour, setTextColour] = useState({});
    // const [seconds, setSeconds] = useState(0);
    
    // const interval = useInterval(() => setSeconds((s) => s + 1), 80);

    // useEffect(() => {
    //     if (seconds === splitMessage.length) {
    //         interval.stop();
    //     } else {
    //         interval.start();

    //         setText(text + splitMessage[seconds])

    //         setTextBlock(liner(printTextBlock(text + " ".repeat(message.length-text.length),40),"−","both",true,40))
    //     }

    // }, [seconds])

    return (

        <div>
            <Stack mb="md" align="center">
            <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
                {makeText}
            </Code>
            </Stack>

            <Stack mb="md" align="center">
            <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
                {linkOther}
                <Anchor className="fade" style={{textAlign: "center"}} mb="sm" href="https://www.installbaseforum.com/" target="_blank" >
                    <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
                        {liner(printTextBlock("https://www.installbaseforum.com/",36),"−","both",true,36)}
                    </Code>
                </Anchor>
            </Code>
            </Stack>

            <Stack align="center">
                <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
                    {nintendoStatus}
                    {capcomStatus}
                    {segaStatus}
                    {bandaiNamcoStatus}
                    {koeiTecmoStatus}
                    {squareEnixStatus}
                    {eventsStatus}
                    {gamesStatus}
                </Code>
            </Stack>
        </div>
    );
};

export default Home;