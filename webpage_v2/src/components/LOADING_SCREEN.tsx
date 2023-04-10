// creating a custom loading screen for lazy loading
import { Code, Stack, Center } from "@mantine/core";
import "../App.css";
import { useSelector } from "react-redux";

import { useSingleMessage } from "../utils/table_design_logic";

export default function LOADING_SCREEN() {

    const loadingText = useSingleMessage("Loading...",40, "=", 80, true);

    const state: any = useSelector(state => state);

    return (
        <div>
            <Stack align="center" justify="center">
                <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
                    {loadingText}
                </Code>
            </Stack>
        </div>
    )
}
