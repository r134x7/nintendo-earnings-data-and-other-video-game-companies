import { Code, SimpleGrid } from "@mantine/core";
import { useSingleMessage } from "../../utils/table_design_logic";
import { usePrompt } from "../../utils/game_design_logic";
import { useSelector } from "react-redux";

export default function GAME_SIX() {
    
    const state: any = useSelector(state => state);


    return (
        <div>
            <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
            </Code>
            <SimpleGrid mt={"lg"} verticalSpacing={"xl"} cols={2}>
            </SimpleGrid>
        </div>
    )
}