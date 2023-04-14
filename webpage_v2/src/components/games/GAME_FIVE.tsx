import { Code, SimpleGrid } from "@mantine/core";
import { useSingleMessage } from "../../utils/table_design_logic";
import { useTimedStage, usePrompt } from "../../utils/game_design_logic";
import { useSelector } from "react-redux";

const stageOne = "-------------------|---------------------======|=====|=====|==|===|====|===|===================||||||===||||||========================="
// need to create walls and put in the logic for them...
// have to find the position of the wall to apply logic to stop the player
/* there is a lot of whitespace, would need to come up with a new function that 
removes whitespace as the player moves but doesn't cause the field to be moved
*/
const stageTwo = 
`                        |−−−−−−−−−−−−−−−−−−−−−−−−−
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

    let message = useSingleMessage("Keyboard controls (keys can be held): [Left Arrow]: Move left, [Right Arrow]: Move right, [f]: Jump over, [d]: Wall Strike. Screen buttons are touch-only.", 42, "=", 80)

    let stage = useTimedStage(stageOne,17)

    const gameOverOne = usePrompt("You struggled and lost to time. Game Over",40,"=",80,(stage.seconds >= 6000) ? true : false, (stage.seconds < 6000) ? true : false) + "\n";

    const gameOverTwo = usePrompt("You struggled to win. Game Over!",40,"=",80,(stage.koCount === 3) ? true : false, (stage.koCount < 3) ? true : false) + "\n";

    return (
        <div>
            <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
            {/* {messageBox}
            {contextBox} */}
            {(stage.seconds >= 6000) ? gameOverOne : (stage.koCount === 3) ? gameOverTwo : stage.field + "\n"}
            {stage.timeDisplay}
            {message}
            </Code>
            <SimpleGrid mt={"lg"} verticalSpacing={"xl"} cols={2}>
                {stage.buttonJump}
                {stage.buttonRight}
                {stage.buttonStrike}
                {stage.buttonLeft}
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