import { Code, Space, SimpleGrid, Button } from "@mantine/core";
import { useEffect, useState } from "react";
import { useSingleMessage } from "../../utils/table_design_logic";
import { timedStage, usePrompt } from "../../utils/game_design_logic";
import gameFiveScript from "../../gameScript/gameFive/script.json";
import { useSelector } from "react-redux";
import { useHotkeys } from "@mantine/hooks";

const stageOne = "-------------------|---------------------======|===|=|=|===|==|===|====|===|===================||||||||||||||||||||||||||||||||||||||||"
// need to create walls and put in the logic for them...
// have to find the position of the wall to apply logic to stop the player
/* there is a lot of whitespace, would need to come up with a new function that 
removes whitespace as the player moves but doesn't cause the field to be moved
*/
const stageTwo = 
`                       
                        −−−−−−−−−−−−−−−−−−−−−−−−−
                        |
−−−−−−−−−−−−−−−−−−−−−−−−−
`;

export default function GAME_FIVE() {

    const state: any = useSelector(state => state);

    // const [line, setLine] = useState(0);

    // const [action, setAction] = useState("");

    // useHotkeys([
    //     ["ArrowDown", () => runAction()],
    //     // ["ArrowUp", () => up()],
    //     // ["ArrowLeft", () => left()],
    //     ["ArrowRight", () => next()],
    // ]);

    // const [resetValue, setResetValue] = useState(false);
    // const [resetValue2, setResetValue2] = useState(false);

    // function next() {
    //     setResetValue(true)
        
    //     setTimeout(() => {
    //         setLine(line+1)
    //         setResetValue(false);
    //     }, 1)
    // }

    // function runAction() {
    //     setResetValue2(true)
        
    //     setTimeout(() => {
    //         setAction("You attacked for X damage!")
    //         setResetValue2(false);
    //     }, 1)
    // }

    // const messageBox = callPrompt(gameFiveScript?.loading?.[line] ?? "No more content past here...",resetValue);

    // const contextBox = callPrompt(action ?? "No more content past here...",resetValue2);

    // // need to think of making a function to call useSingleMessage whenever a que occurs...........
    // function callPrompt(text: string, reset: Boolean) {
    //     // I can't put reset into the parameter to not use a ternary condition because it breaks...
    //     return (!reset) 
    //         ? usePrompt(text,40,"=",80,true,false)
    //         : usePrompt(text,40,"=",80,false,true)
    // }

    let message = useSingleMessage("Using the Left or Right Arrows on your keyboard, you can move left or right. The field changes when you move into the right direction until there is nothing left. The Left and Right buttons are Touch-only and react when touchscreen movement occurs. A timer will stop the game at around 100 seconds.", 42, "=", 80)


    
    let stage = timedStage(stageOne,17)

    return (
        <div>
            <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
            {/* {messageBox}
            {contextBox} */}
            {stage[0] + "\n"}
            {message}
            </Code>
            <SimpleGrid cols={2}>
                {stage[1]}
                {stage[2]}
                {/* <Button variant="outline" radius={"lg"} color="red" onMouseDown={} fullWidth>
                   Next 
                </Button>
                <Button variant="outline" radius={"lg"} color="red"  fullWidth>
                   Action
                </Button> */}
            </SimpleGrid>
        </div>
    )
}