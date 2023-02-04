import { Code, Space } from "@mantine/core";
import { useState } from "react";
import { useSingleMessage } from "../../utils/table_design_logic";
import gameFiveScript from "../../gameScript/gameFive/script.json";
import { useSelector } from "react-redux";

export default function GAME_FIVE() {

    const state: any = useSelector(state => state);

    const [line, setLine] = useState(0);

    // const intro = gameFiveScript.intro?.[line] ?? "Nil";
    const intro = useSingleMessage(gameFiveScript.intro?.[line] ?? "Nil",40,"=",60);

    // need to think of making a function to call useSingleMessage whenever a que occurs...........
    

    return (
        <div>
            <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
            {intro}
            </Code>
            <Space h="xl" />
        </div>
    )
}