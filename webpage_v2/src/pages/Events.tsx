import { Anchor, Stack, Code } from '@mantine/core';
import { useSelector } from "react-redux";
import EVENTS_CALENDAR from "../components/EVENTS_CALENDAR";
import type { BackgroundColours } from '../features/backgroundReducer';

import { liner, printTextBlock, useSingleMessage } from "../utils/table_design_logic";

const Home = () => {

    const stateColour = useSelector((state: BackgroundColours) => state.colour);
    const stateFontColor = useSelector((state: BackgroundColours) => state.fontColor);

    const linkOther = liner(printTextBlock("You'll want to head to Install Base, where events such as Earnings Results are discussed. Link:",40),"=","top",true,40);

    const message = "This is where you can use the calendar to find some upcoming events.";

    const makeText = useSingleMessage(message, 40, "−",80);

    return (

        <div>
            <Stack mb="md" align="center">
            <Code style={{backgroundColor:`${stateColour}`, color:(stateFontColor === "dark") ? "#fff" : "#000000"}} block>
                {makeText}
            </Code>
            </Stack>
            <Stack align="center">
            <Code style={{backgroundColor:`${stateColour}`, color:(stateFontColor === "dark") ? "#fff" : "#000000"}} block>
                {linkOther}
                    <Anchor className="fade" style={{textAlign: "center"}} href="https://www.installbaseforum.com/" target="_blank" >
                    <Code style={{backgroundColor:`${stateColour}`, color:(stateFontColor === "dark") ? "#fff" : "#000000"}} block>
                        {liner(printTextBlock("https://www.installbaseforum.com/",36),"=","both",true,36)}
                    </Code>
                </Anchor>
            </Code>
            </Stack>

            <EVENTS_CALENDAR />        
        </div>
    );
};

export default Home;