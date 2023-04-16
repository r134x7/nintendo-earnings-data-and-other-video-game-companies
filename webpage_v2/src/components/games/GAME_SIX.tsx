import { Code, SimpleGrid, Button } from "@mantine/core";
import { useSingleMessage } from "../../utils/table_design_logic";
import { usePrompt } from "../../utils/game_design_logic";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useInterval, useHotkeys } from "@mantine/hooks";
import { spacer, printTextBlock, liner } from "../../utils/table_design_logic";
import { UnitTypeTwo } from "../../classes/UnitsTypeTwo";

const player = new Map<number, UnitTypeTwo>([
    [0, new UnitTypeTwo("player","x",0,0,10,3)]
])

// const player = new UnitTypeTwo("player","x",0,0,10,3) 

const enemyBodies = [
    "\\(-_-)/",
    "\\(o_o)/",
    "\\(x_o)/",
]

const enemies = new Map<number, UnitTypeTwo>()

const stage = new Map<number, string>([
    [0, "_".repeat(40)]
])

// let backgroundLayer1: string = ".. -- .. ---- ... ...---- --... ..--- .."

// Can't use this string since phones won't render the text.
// let backgroundLayer1: string = "‿‿.‿.‿,‿‿‿,‿,‿.‿‿‿.‿.‿,‿‿,‿."
let backgroundLayer1: string = "\u203F\u203F.\u203F.\u203F,\u203F\u203F\u203F,\u203F,\u203F.\u203F\u203F\u203F.\u203F.\u203F,\u203F\u203F,\u203F."
// "\u203F".split(/(?:)/u); // source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
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

    const timeDisplay = liner(printTextBlock(`Time: ${6000 - stageSet.seconds} | Score: ${stageSet.score} | Jump On Top!`,42),"=","both",true)

    // [←] [→] 
    let message = useSingleMessage("Keyboard controls (keys can be held): [\u2190]: Move left, [\u2192]: Move right, [f]: Jump. Screen buttons are touch-only.", 42, "=", 80)

    const gameOverOne = usePrompt(`${enemyBodies[0]} ${enemyBodies[1]} ${enemyBodies[2]} Game Over`,40,"=",80,(stageSet.seconds >= 6000) ? true : false, (stageSet.seconds < 6000) ? true : false) + "\n";

    const gameOverTwo = usePrompt(`\\(^_^)/ \\(^o^)/ \\(x_^)/ Game Over`,40,"=",80,(stageSet.seconds >= 6000 && stageSet.score >= 500) ? true : false, (stageSet.seconds < 6000) ? true : false) + "\n";

    return (
        <div>
            <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000", fontFamily: "Roboto"}} block>
                {(stageSet.seconds >= 6000 && stageSet.score < 500) 
                    ? gameOverOne 
                    : (stageSet.seconds >= 6000 && stageSet.score >= 500)
                    ? gameOverTwo
                    : stageSet.field + "\n"}
                {timeDisplay}
                {message}
            </Code>
            <SimpleGrid mt={"lg"} verticalSpacing={"xl"} cols={2}>
                {stageSet.buttonLeft}
                {stageSet.buttonRight}
                {stageSet.buttonJump}
                {stageSet.buttonJump}
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
    // const [gate, setGate] = useState(false);
    const [score, setScore] = useState(0);
    const [multiplier, setMultiplier] = useState(1);

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

            return [backgroundLayer.split(/(?:)/u).reduce((acc, next, index) => {
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

            let maxPositionX = 0;

            // player.forEach((value, key) => allUnits.push(value))

            // enemies.forEach((value, key) => allUnits.push(value))

            enemies.forEach((value, key) => {
                if (value.getY() === Math.floor(11 - i)) {
                    allUnits.push(value)
                }

                if (value.getX() >= maxPositionX) {
                    maxPositionX = value.getX()
                }
            })

            player.forEach((value, key) => {
                if (value.getX() > maxPositionX && value.getY() === Math.floor(11 - i)) {
                    allUnits.push(value)
                } else {
                    allUnits.unshift(value)
                }
            })

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

    const buttonLeft = (
                <Button variant="outline" radius={"lg"} color="red" onTouchMove={moveLeft} 
                fullWidth>
                  Rub Left
                </Button>
    )

    const buttonRight = (
                <Button variant="outline" radius={"lg"} color="red" onTouchMove={moveRight} fullWidth>
                  Rub Right
                </Button>
    )

    const buttonJump = (
                <Button variant="outline" radius={"lg"} color="red" onTouchStart={doubleJump} fullWidth>
                  Jump
                </Button>
    )

    function enemyGenerate(gen: number, count: number): void {

        if (enemies.size === gen) {
            return
        } else {
            enemies.set(count, new UnitTypeTwo(`x${count}`, enemyBodies[count % 3], Math.floor(Math.random() * 35), count % 9,5,1))
            enemyGenerate(gen, count + 1)
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

        if (seconds > (6000)) {
            interval.stop();
            return
        }

        // if (enemies.size === 0) {
        //     setGate(true);
        // }

        // if ((player.get(0)?.getX() ?? 0) > 40 && gate) {

        //     // change stage here
        //     setGate(false)
        //     // create new enemies here using recursion with Map<>
        // }

        /* 
        relying on a side effect to reset jump count to avoid player pressing jump and it not working.
        */
        if (player.get(0)?.getY() === 0) {
            setJumpCount(0);
            setMultiplier(1);
            player.get(0)?.setBody("x")
        }

        if (enemies.size > 0) {

            enemies.forEach((value, key) => {
                if ((player.get(0)?.getY() ?? 0) - value.getY() === 1 && (player.get(0)?.getX() ?? 0) - value.getX() >= 0 && (player.get(0)?.getX() ?? 0) - value.getX() < 5) {
                    player.get(0)?.attackOpponent(value)
                    player.get(0)?.setBody("vXv")
                    setScore(score + (1 * multiplier))
                    setMultiplier(multiplier + 1)
                    player.get(0)?.jumpAction(3,0,3,0,11,100,100)
                }

                if (value.getHp() <= 0) {
                    enemies.delete(key);
                }
            })

        } else if (enemies.size === 0 ) {
            enemyGenerate(Math.floor(Math.random() * 15),0)
        }

        interval.start()

        setField(getField);
    }, [seconds, jumpCount])

    return {
        field,
        seconds,
        buttonJump,
        buttonLeft,
        buttonRight,
        score,
    } 
} 
