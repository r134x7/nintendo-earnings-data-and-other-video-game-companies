// creating a custom loading screen for lazy loading
import { Code, Stack } from "@mantine/core";
import { useSelector } from "react-redux";
import type { BackgroundColours } from "../features/backgroundReducer";

import { useSingleMessage } from "../utils/table_design_logic";

export default function LOADING_SCREEN() {

    const loadingText = useSingleMessage("Loading...",40, "=", 80, true);

    const stateColour = useSelector((state: BackgroundColours) => state.colour);
    const stateFontColor = useSelector((state: BackgroundColours) => state.fontColor);

    return (
        <>
            <Stack align="center" justify="center" style={{minHeight:"80vh"}}>
                <Code style={{backgroundColor:`${stateColour}`, color:(stateFontColor === "dark") ? "#fff" : "#000000"}} block>
                    {loadingText}
                </Code>
            </Stack>
        </>
    )
}
