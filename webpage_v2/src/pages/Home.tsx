import { Anchor, Stack, Code } from '@mantine/core';
import { useSelector } from "react-redux";

import { liner, printTextBlock, useSingleMessage } from "../utils/table_design_logic";

const Home = () => {

    const state: any = useSelector(state => state);

    const nintendoStatus = liner(printTextBlock("Nintendo page status",32),"=","top",true,32) + liner(printTextBlock("Latest update: Consolidated Operating Results in Special Page has been updated with data from all quarters. Consolidated Operating Results from 1981 to 2023 is now in the Date By Fiscal Year section.",40),"−","both",true,40) + liner(printTextBlock("Future update planned: Notes section.",40),"−","bottom",true,40);

    const capcomStatus = liner(printTextBlock("Capcom page status",32),"=","top",true,32) + liner(printTextBlock("Latest update: Added 1st Quarter earnings data for FY3/2024.",40),"−","both",true,40) + liner(printTextBlock("Future update planned: Notes section.",40),"−","bottom",true,40);

    const segaStatus = liner(printTextBlock("Sega page status",32),"=","top",true,32) + liner(printTextBlock("Latest update: Consolidated Operating Results in Special Page has been updated with data from all quarters.",40),"−","both",true,40) + liner(printTextBlock("Future update planned: Notes section.",40),"−","bottom",true,40);

    const bandaiNamcoStatus = liner(printTextBlock("Bandai Namco page status",32),"=","top",true,32) + liner(printTextBlock("Consolidated Operating Results in Special Page has been updated with data from all quarters.",40),"−","both",true,40);

    const koeiTecmoStatus = liner(printTextBlock("Koei Tecmo page status",32),"=","top",true,32) + liner(printTextBlock("Latest update: Consolidated Operating Results in Special Page has been updated with data from all quarters.",40),"−","both",true,40);

    const squareEnixStatus = liner(printTextBlock("Square Enix page status",32),"=","top",true,32) + liner(printTextBlock("Latest update: Consolidated Operating Results in Special Page has been updated with data from all quarters.",40),"−","both",true,40);

    const eventsStatus = liner(printTextBlock("Events page status",32),"=","top",true,32) + liner(printTextBlock("Page update: Updated calendar for 18 of 22 companies from July to August 2023.",40),"−","both",true,40);

    const gamesStatus = liner(printTextBlock("Games page status",32),"=","top",true,32) + liner(printTextBlock("Game Three Plus and Game Four is now playable.",40),"−","both",true,40);

    const linkOther = liner(printTextBlock("Also, visit Install Base. It's a place to discuss and elaborate on the business side of the video game industry.",40),"=","top",true,40);

    const message = "Welcome to ggx2ac + archives: Nintendo earnings data and other video game companies";

    const makeText = useSingleMessage(message, 40, "−", 80);

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