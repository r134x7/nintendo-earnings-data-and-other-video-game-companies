import { Code, Space, SimpleGrid, Button } from "@mantine/core";
import { useEffect, useState } from "react";
import { usePrompt, useSingleMessage } from "../../utils/table_design_logic";
import gameFiveScript from "../../gameScript/gameFive/script.json";
import { useSelector } from "react-redux";
import { useHotkeys } from "@mantine/hooks";

export default function GAME_FIVE() {

    const state: any = useSelector(state => state);

    const [line, setLine] = useState(0);

    useHotkeys([
        // ["ArrowDown", () => down()],
        // ["ArrowUp", () => up()],
        // ["ArrowLeft", () => left()],
        ["ArrowRight", () => next()],
    ]);

    // const [resetValue, setResetValue] = useState(false);

    function blank() {
        // return setResetValue(false)
        return true
    }

    // useEffect(() => {

    // },[line])
    const [resetValue, setResetValue] = useState(false);

    function next() {
        setResetValue(true)
        
        setTimeout(() => {
            setLine(line+1)
            setResetValue(false);
        }, 1)
    }

    const intro = callPrompt(gameFiveScript?.loading?.[line] ?? "No more content past here...",resetValue);

    // need to think of making a function to call useSingleMessage whenever a que occurs...........
    function callPrompt(text: string, reset: Boolean) {
        return (!reset) 
            ? usePrompt(text,40,"=",80,true,false)
            : usePrompt(text,40,"=",80,false,true)
    }
    

    return (
        <div>
            <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
            {intro}
            </Code>
            <SimpleGrid cols={1}>
                <Button variant="outline" radius={"lg"} color="red" onClick={next} fullWidth>
                   Next 
                </Button>
            </SimpleGrid>
        </div>
    )
}