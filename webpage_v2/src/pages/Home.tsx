import { Anchor, Stack, Code } from '@mantine/core';
import { useSelector } from "react-redux";

import { liner, printTextBlock, useSingleMessage } from "../utils/table_design_logic";

const Home = () => {

    const state: any = useSelector(state => state);

    const nintendoStatus = liner(printTextBlock("Nintendo page status",32),"=","top",true,32) + liner(printTextBlock("Latest update: Region and/or Platform and/or title search feature and predictive single word search applied to Consolidated Sales Information, Global Hardware/Software Units, Key Sales Indicators, FY Million-Seller Titles, Regional Hardware/Software Units, Top Selling Titles, Nintendo Consolidated Sales Information - Cumulative, Nintendo Hardware/Software - Cumulative, Nintendo FY Million-Seller Titles - Cumulative and Nintendo Top Selling Titles - Cumulative.",40),"−","both",true,40) + liner(printTextBlock("Future update planned: Notes section.",40),"−","bottom",true,40);

    const capcomStatus = liner(printTextBlock("Capcom page status",32),"=","top",true,32) + liner(printTextBlock("Latest update: Platform and/or title search feature and predictive single word search applied to Software Platform Shipments, FY Platinum Titles, All Platinum Titles, FY Game Series, Capcom Platinum Titles - Cumulative, Capcom Software Platform Shipments - Cumulative, Capcom FY Game Series - Cumulative.",40),"−","both",true,40) + liner(printTextBlock("Future update planned: Notes section.",40),"−","bottom",true,40);

    const segaStatus = liner(printTextBlock("Sega page status",32),"=","top",true,32) + liner(printTextBlock("Latest update: IP Type and/or title search feature and predictive single word search applied to Software Sales, Software Units, Sega Sammy Software Units - Cumulative, Sega Sammy FY Series IP - Cumulative",40),"−","both",true,40) + liner(printTextBlock("Future update planned: Notes section.",40),"−","bottom",true,40);

    const bandaiNamcoStatus = liner(printTextBlock("Bandai Namco page status",32),"=","top",true,32) + liner(printTextBlock("Latest update: Title search feature and predictive single word search applied to FY Series IP, Bandai Namco FY Series IP - Cumulative.",40),"−","both",true,40);

    const koeiTecmoStatus = liner(printTextBlock("Koei Tecmo page status",32),"=","top",true,32) + liner(printTextBlock("Latest update: 3rd Quarter Earnings release data for FY3/2023 added.",40),"−","both",true,40);

    const squareEnixStatus = liner(printTextBlock("Square Enix page status",32),"=","top",true,32) + liner(printTextBlock("Latest update: Title search feature applied and predictive single word search to FY Series IP, Square Enix FY Series IP - Cumulative.",40),"−","both",true,40);

    const eventsStatus = liner(printTextBlock("Events page status",32),"=","top",true,32) + liner(printTextBlock("Page update: Updated calendar for 20 of 22 companies from April to May 2023.",40),"−","both",true,40);

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