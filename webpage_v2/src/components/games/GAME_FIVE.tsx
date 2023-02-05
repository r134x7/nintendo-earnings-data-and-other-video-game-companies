import { Code, Space, SimpleGrid, Button } from "@mantine/core";
import { useEffect, useState } from "react";
import { usePrompt, useSingleMessage } from "../../utils/table_design_logic";
import gameFiveScript from "../../gameScript/gameFive/script.json";
import { useSelector } from "react-redux";
import { useHotkeys } from "@mantine/hooks";

export default function GAME_FIVE() {

    const state: any = useSelector(state => state);

    const [line, setLine] = useState(0);

    const [action, setAction] = useState("");

    useHotkeys([
        ["ArrowDown", () => runAction()],
        // ["ArrowUp", () => up()],
        // ["ArrowLeft", () => left()],
        ["ArrowRight", () => next()],
    ]);

    const [resetValue, setResetValue] = useState(false);
    const [resetValue2, setResetValue2] = useState(false);

    function next() {
        setResetValue(true)
        
        setTimeout(() => {
            setLine(line+1)
            setResetValue(false);
        }, 1)
    }

    function runAction() {
        setResetValue2(true)
        
        setTimeout(() => {
            setAction("You attacked for X damage!")
            setResetValue2(false);
        }, 1)
    }

    const messageBox = callPrompt(gameFiveScript?.loading?.[line] ?? "No more content past here...",resetValue);

    const contextBox = callPrompt(action ?? "No more content past here...",resetValue2);

    // need to think of making a function to call useSingleMessage whenever a que occurs...........
    function callPrompt(text: string, reset: Boolean) {
        // I can't put reset into the parameter to not use a ternary condition because it breaks...
        return (!reset) 
            ? usePrompt(text,40,"=",80,true,false)
            : usePrompt(text,40,"=",80,false,true)
    }
    

    return (
        <div>
            <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
            {messageBox}
            {contextBox}
            </Code>
            <SimpleGrid cols={2}>
                <Button variant="outline" radius={"lg"} color="red" onClick={next} fullWidth>
                   Next 
                </Button>
                <Button variant="outline" radius={"lg"} color="red" onClick={runAction} fullWidth>
                   Action
                </Button>
            </SimpleGrid>
        </div>
    )
}