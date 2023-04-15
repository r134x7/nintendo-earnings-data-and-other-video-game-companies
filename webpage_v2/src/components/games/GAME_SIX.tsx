import { Code, SimpleGrid } from "@mantine/core";
import { useSingleMessage } from "../../utils/table_design_logic";
import { usePrompt } from "../../utils/game_design_logic";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useInterval, useHotkeys } from "@mantine/hooks";
import { spacer } from "../../utils/table_design_logic";
import { UnitTypeTwo } from "../../classes/UnitsTypeTwo";

const player = new Map<number, UnitTypeTwo>([
    [0, new UnitTypeTwo("player","x",0,0,10,3)]
])

// const player = new UnitTypeTwo("player","x",0,0,10,3) 

const enemies = new Map<number, UnitTypeTwo>([
    [0, new UnitTypeTwo("some guy","\(-_-)/",39,0,5,1)]
])

const stage = new Map<number, string>([
    [0, "_".repeat(40)]
])

// let backgroundLayer1: string = ".. -- .. ---- ... ...---- --... ..--- .."

let backgroundLayer1: string = "‿‿.‿.‿,‿‿‿,‿,‿.‿‿‿.‿.‿,‿‿,‿."

// let backgroundLayer2: string = ", , / , / , // , / ,, / ,,, , / , / , //"
// let backgroundLayer2: string = " /  /  //  /  /  /  /  // /  /  / // / /"
let backgroundLayer2: string = " /   //  / //   /   //   /   //  /   // "

// let backgroundLayer3: string = "/ , // ,, / , / , / , / , // , // ,, /"
let backgroundLayer3: string = " //   /   //  /   //  /   //  /  //   / "

// let backgroundLayer4 = backgroundLayer2;

// let clouds: string =
// `
//  o
// (_)
// `
// let background: string = ".. -- .. ---- ... ...---- --... ..--- .." + "\n" + ".. -- .. ---- ... ...---- --... ..--- .."


export default function GAME_SIX() {
    
    const state: any = useSelector(state => state);

    const stageSet = useTimedStageGameSix(stage.get(0) ?? "ERROR",17);


    return (
        <div>
            <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
                {stageSet}
            </Code>
            <SimpleGrid mt={"lg"} verticalSpacing={"xl"} cols={2}>
            </SimpleGrid>
        </div>
    )
}

//putting specific game logic into the same file this time but separate function
export function useTimedStageGameSix (level: string, milliseconds: number) {

    useHotkeys([
        // ["ArrowDown", () => down()],
        // ["ArrowUp", () => up()],
        ["ArrowLeft", () => moveLeft()],
        // ["ArrowLeft", () => player.setXLeft()],
        ["ArrowRight", () => moveRight()],
        ["f", () => doubleJump()],
        // ["d", () => strikeThrough()],
    ]);

    const [field, setField] = useState("");
    const [seconds, setSeconds] = useState(0);
    const [jumpCount, setJumpCount] = useState(0);

    const interval = useInterval(() => setSeconds((s) => s + 1), milliseconds);

    function doubleJump() {

        if (jumpCount === 0) {
            player.get(0)?.jumpAction(5,0,5,0,11,100,100)
            setJumpCount(jumpCount + 1);
        } else if (jumpCount === 1) {
            player.get(0)?.jumpAction(7,0,7,0,11,100,200)
            setJumpCount(jumpCount + 1);
        } 
    }

    function screenDisplay(): string {


        let shiftCharLayer1: string[] = [""];
        let shiftCharLayer2: string[] = [""];
        let shiftCharLayer3: string[] = [""];

        function reduceBackground(backgroundLayer: string, shiftChar: string[]): string {

            return [backgroundLayer.split("").reduce((acc, next, index, array) => {
                if (index === 0) {
                    shiftChar.push(next)
                    return acc
                } else if (index !== 0) {
                    return acc + next
                }

                return acc
            }, "")].concat(shiftChar).join("")

        }

        let backgroundLocal1 = reduceBackground(backgroundLayer1, shiftCharLayer1)

        let backgroundLocal2 = reduceBackground(backgroundLayer2, shiftCharLayer2)

        let backgroundLocal3 = reduceBackground(backgroundLayer3, shiftCharLayer3)
        
        let testBackground = (seconds % 75 === 0) ? backgroundLayer2 : backgroundLayer3;

        if (seconds % 33 === 0) {
            backgroundLayer1 = backgroundLocal1;
        }

        if (seconds % 25 === 0) {
            backgroundLayer2 = backgroundLocal2;
            backgroundLayer3 = backgroundLocal3;
        }

        
        //probably reuse Game Five yField 
        // need to use the method to put both player and enemies on the same x position.
        let playerScreen: string = Array.from({length: 12}, (v,i) => {

            let allUnits: UnitTypeTwo[] = [];

            player.forEach((value, key) => allUnits.push(value))

            enemies.forEach((value, key) => allUnits.push(value))


            // 0, 3, 6, 9
            // 11 - i should solve the upside down display...
            let reduceAllUnits: string = allUnits.reduce((acc, next) => {
                if (next.getY() === Math.floor(11 - i)) {

                        if (acc.length === 0) {
                          return  acc + (" ".repeat(next.getX()) + next.getBody())
                        } else {
                            return acc + (" ".repeat((next.getX() - acc.length < 0) ? 1 : next.getX() - acc.length) + next.getBody())
                        }
                } else {
                    return acc
                }
            }, "")

            return (reduceAllUnits.length === 0)
                ? spacer(" ", 40,"left")
                : spacer(reduceAllUnits, 40, "left")
        }).reduce((acc, next) => acc + "\n" + next);

        return backgroundLayer1 + "\n" + backgroundLayer2 + "\n" + testBackground + "\n" + playerScreen
    }

    const getField = screenDisplay();

    function moveRight() {
        if ((player.get(0)?.getX() ?? 40) > 40) {
            return
        } else {
            return player.get(0)?.setXRight();
        }
    }

    function moveLeft() {
        if ((player.get(0)?.getX() ?? 1) < 1) {
            return
        } else {
            return player.get(0)?.setXLeft();
        }
    }

    // accidentally discovered kirby's floating jump
    // function jump(height: number, up: number, down: number) {

    //     if (down === 0) {
    //         return
    //     } else if (up !== height) {
    //             if ((player.get(0)?.getY() ?? 0) < 11) {
    //                 player.get(0)?.setYUp();
    //             }

    //         setTimeout(() => {
    //             jump(height, up + 1, down)
    //         }, 100);
    //         // jump(height, up + 1, down)
    //     } else {
    //             if ((player.get(0)?.getY() ?? 0) > 0) {
    //                 player.get(0)?.setYDown();
    //             }
    //         setTimeout(() => {
    //             jump(height, up, down -1)
    //         }, 200);
    //     }
    // }

    useEffect(() => {

        /* 
        relying on a side effect to reset jump count to avoid player pressing jump and it not working.
        */
        if (player.get(0)?.getY() === 0) {
            setJumpCount(0)
        }

        interval.start()

        setField(getField);
    }, [seconds, jumpCount])

    return field;
} 
