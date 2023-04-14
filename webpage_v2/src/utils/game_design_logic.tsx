import { useInterval, useHotkeys } from "@mantine/hooks";
import { useState, useEffect } from "react";
import { Button } from "@mantine/core";
import { printTextBlock, spacer, liner, border, useSingleMessage } from "./table_design_logic";

export type timedStage = {
    field: string,
    buttonLeft: JSX.Element,
    buttonRight: JSX.Element,
    buttonJump: JSX.Element,
    buttonStrike: JSX.Element,
    timeDisplay: string,
    seconds: number,
    koCount: number,
}

export function usePrompt(textInput: string, blockLength: number, borderStyle: "=" | "−", milliseconds: number, start: Boolean, reset: Boolean): string {

    let splitText = textInput.split("");

    const [text, setText] = useState("");
    const [textBlock, setTextBlock] = useState("");
    const [seconds, setSeconds] = useState(0);

    const interval = useInterval(() => setSeconds((s) => s + 1), milliseconds);

    useEffect(() => {
        if (reset === true) {
            setText("");
            // setTextBlock("");
            setTextBlock(liner(printTextBlock(text,blockLength), borderStyle,"both",true,blockLength))
            setSeconds(0);
        }

        if (seconds === splitText.length + 1) {
            interval.stop();
        } else if (start === true) {
            interval.start();
            
            setText(text + splitText[seconds])

            setTextBlock(liner(printTextBlock(text + " ".repeat(textInput.length - text.length),blockLength), borderStyle,"both",true,blockLength))
        }

    }, [seconds, start, reset])

    return textBlock;
};

export function useTimedStage(level: string, milliseconds: number): timedStage {

    const [field, setField] = useState("");
    const [seconds, setSeconds] = useState(0);
    const [startPoint, setStartPoint] = useState(0);
    const [endPoint, setEndPoint] = useState(40)
    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);
    const [avatar, setAvatar] = useState("x");
    // const [enemy, setEnemy] = useState("O###H");
    // need to make an array containing map...
    // const [enemy, setEnemy] = useState<Map<number, [string, number, number]>>(new Map([
    //     // key, [avatar, Xpos, Ypos]
    //     [0, ["O###H", 0, 0]],
    // ]));
    // probably won't need to use reactivity...
    // key, [avatar, Xpos, Ypos]
    const enemy: Map<number, [string, number, number]> = new Map([ [0, ["O###H", 0, 0]], ])
    // const [enemyPosX, setEnemyPosX] = useState(0);
    // const [enemyPosY, setEnemyPosY] = useState(0);
    const [gate, setGate] = useState(false);
    const [koCount, setKOCount] = useState(0)

    const interval = useInterval(() => setSeconds((s) => s + 1), milliseconds);

    // const [buttonHold, setButtonHold] = useState(false);
    // const mouseInterval = useInterval(() => setButtonHold((s) => s + 1), 60)
    // let enemyVisual = spacer(" ".repeat(enemyPosX) + enemy,40,"left")
    
    // let playerVisual = spacer(" ".repeat(positionX) + avatar,40,"left");

    // take in the whole level and try to split level into 40 chars per screen view or each call of the function...
    // let splitLevel = playerVisual + "\n" + level.split("").filter((elem, index) => {
    //     return index <= endPoint && index >= startPoint
    // }).reduce((acc, next) => acc + next, "");

    let splitLevel = level.split("").filter((elem, index) => {
        return index <= endPoint && index >= startPoint
    }).reduce((acc, next) => acc + next, "");


    function yField(playerY: number, level: string) {

        let enemyArray: [string, number][] = []; 

        enemy.forEach((value, key) => {

            let [bodyStr, posX, posY] = value

            // [string, posY] tuple 
            return enemyArray.push([spacer(" ".repeat(posX) + bodyStr,40,"left"), posY])
        })

        let playerVis = spacer(" ".repeat(positionX) + avatar,40,"left");

        // let enemyVis = spacer(" ".repeat(enemyPosX) + enemy,40,"left");

        let blank = spacer(" ",40,"left");

        return Array.from({length: 12}, (v,i) => {

            // 0, 3, 6, 9
            // 11 - i should solve the upside down display...
            if ((11 - i) % 3 === 0) {
                return level
                // 1, 4, 7, 10...
            } else if ((11 - i) % 3 === 1) {
                // Math.floor returns 0, 1, 2, 3...
                return (playerY === Math.floor((11 - i)/3)) ? playerVis : blank
            } else {

                let reduceAllEnemies: string = enemyArray.reduce((acc, next,) => {
                    return (next[1] === Math.floor((11 - i)/3))
                        ? next[0]
                        : ""
                }, "")

                // return (enemyY === Math.floor((11 - i)/3)) ? enemyVis : blank
                return (reduceAllEnemies.length === 0) ? blank : reduceAllEnemies
            }
        }).reduce((acc, next) => acc + "\n" + next)
    };

    // the field was inverted on the Y axis
    // let displayField = yField(positionY, enemyPosY, splitLevel);
    let displayField = yField(positionY, splitLevel);
    // let wall = (level.at(position+1) === "|") ? true : false;

    // let jump = false;
    // endPoint - (40 - position) + 1

    // need to create functions since using same commands for keys and buttons
    function moveLeft() {
             if (positionX > 0 && (level.at(endPoint - (40 - positionX) - 1) !== "|" /*|| jump !== false */)) {
                setAvatar((avatar === "x") ? "+" : "x")
                setPositionX(positionX-1)
             } else {
                setAvatar((avatar === "x") ? "+" : "x")
                setPositionX(positionX)
             }
    }

    function moveRight() {
             if (positionX < 41 && (level.at(endPoint - (40 - positionX) + 1) !== "|" /*|| jump !== false */)) {
                setAvatar((avatar === "x") ? "+" : "x")
                setPositionX(positionX+1)
             } else {
                setAvatar((avatar === "x") ? "+" : "x")
                setPositionX(positionX)
             }
    }

    function jumpOver() {
           if (level.at(endPoint - (40 - positionX) + 1) === "|") {
                setAvatar((avatar === "x") ? "+" : "x")
                setPositionX(positionX+2)
           } else if (level.at(endPoint - (40 - positionX) - 1) === "|") {
                setAvatar((avatar === "x") ? "+" : "x")
                setPositionX(positionX-2)
           }
    }

    function strikeThrough() {
        // if at a wall...
        // jump up or down..............
        // depending on which side you are on...
        if (level.at(endPoint - (40 - positionX) + 1) === "|" && positionY < 3) {
            setPositionY(positionY + 1);
            // I am guessing Position Y will not have the new value yet, therefore, I add + 1 to the position Y condition below which seems to fix the issue of odd enemy damage happening
            // if ((positionX - enemyPosX < 5) && ((positionY + 1) - enemyPosY === 1)) {
            //     setEnemy(enemy.slice(1))
            // }
            enemy.forEach((value, key) => {
                // value: bodyStr, xPos, yPos
                if ((positionX - value[1] < 5) && ((positionY + 1) - value[2] === 1)) {
                    enemy.set(key,[value[0].slice(1),value[1],value[2]] )
                }

                if (value[0].length === 0) {
                    enemy.delete(key);
                }
            })
        } else if (level.at(endPoint - (40 - positionX) - 1) === "|" && positionY > 0) {
            setPositionY(positionY - 1);
            // if ( (positionX - enemyPosX < 5) /* positionX === enemyPosX */ && ((positionY - 1) - enemyPosY === 0) /* positionY < enemyPosY */ ) {
            //     setEnemy(enemy.slice(1))
            // }
            enemy.forEach((value, key) => {
                // value: bodyStr, xPos, yPos
                if ((positionX - value[1] < 5) && ((positionY - 1) - value[2] === 0)) {
                    enemy.set(key,[value[0].slice(1),value[1],value[2]]);
                }

                if (value[0].length === 0) {
                    enemy.delete(key);
                }
            })
        }
    }

    useHotkeys([
        // ["ArrowDown", () => down()],
        // ["ArrowUp", () => up()],
        ["ArrowLeft", () => moveLeft()],
        ["ArrowRight", () => moveRight()],
        ["f", () => jumpOver()],
        ["d", () => strikeThrough()],
    ]);

    function rubRight() {
        // let delayedPosition = position;
        // using setTimeout helps to reduce speed of movement but bug occurs where stages are skipped...
        // setTimeout(() => {
            moveRight();
        // }, 100);
    }

    function rubLeft() {
        moveLeft();
    }

    function touchJump() {
        jumpOver();
    }

    function rubStrike() {
        strikeThrough();
    }

    const buttonLeft = (
                <Button variant="outline" radius={"lg"} color="red" onTouchMove={rubLeft} 
                fullWidth>
                  Rub Left
                </Button>
    )

    const buttonRight = (
                <Button variant="outline" radius={"lg"} color="red" onTouchMove={rubRight} fullWidth>
                  Rub Right
                </Button>
    )

    const buttonJump = (
                <Button variant="outline" radius={"lg"} color="red" onTouchStart={touchJump} fullWidth>
                  Jump Over
                </Button>
    )

    const buttonStrike = (
                <Button variant="outline" radius={"lg"} color="red" onTouchStart={rubStrike} fullWidth>
                  Wall Strike
                </Button>
    )

    const timeDisplay = liner(printTextBlock(`Time: ${6000 - seconds} | Enemies: ${enemy.size} | ${gate ? "Go right!": `Enemies: ${3 - koCount}`}`,40),"=","both",true)

    // const gameOverOne = usePrompt("You struggled and lost to time. Game Over",40,"=",80,((6000 - seconds) <= 0) ? true : false, ((6000 - seconds)> 0) ? true : false);

    // const gameOverTwo = usePrompt("You struggled to win. Game Over!",40,"=",80,(koCount === 3) ? true : false, (koCount < 3) ? true : false);

    // function gameOver() {

    //     if ((6000 - seconds) <= 0) {
    //         return useSingleMessage("You struggled and lost to time. Game Over",40,"=",80)
    //         // return usePrompt("You struggled and lost to time. Game Over",40,"=",80,((6000 - seconds) <= 0) ? true : false, ((6000 - seconds)> 0) ? true : false);
    //     } else if (koCount === 1) {
    //         return useSingleMessage("You struggled to win. Game Over!",40,"=",80)
    //         // return printTextBlock("You struggled to win. Game Over!",40)
    //         // return usePrompt("You struggled to win. Game Over!",40,"=",80,(koCount === 1) ? true : false, (koCount < 3) ? true : false);
    //     }
        
    //     return ""
    // }

    function enemyGenerate(gen: number, count: number): void {

        if (enemy.size === gen) {
            return
        } else {
            enemy.set(count,["O###H", 0, count])
            enemyGenerate(gen, count + 1)
        }
    }

    useEffect(() => {
        // if (position > endPoint) {
            // causes player to go off field but it doesn't crash
        // console.log(seconds);
        // 999 seconds / 50 (milliseconds setting) = 20000 // rounded up
        if (seconds > (6000) || koCount === 3) {
            interval.stop();
            return
        }

        // was enemy.length when it was a single enemy
        if (enemy.size === 0) {
            setGate(true)
        }

        // if (enemyPosX > 40) {
        //     setEnemyPosX(0)
        //     setEnemyPosY((enemyPosY === 2) ? 0 : enemyPosY+1)
        // } else {
        //     setEnemyPosX(enemyPosX+1)
        // }

        enemy.forEach((value, key) => {
            if (value[1] > 40) {
                enemy.set(key, [value[0], 0, (value[2] === 2 ? 0 : value[2] + 1)])
            } else {
                enemy.set(key, [value[0], value[1] + 1, value[2]])
            }
        })

        if (positionX > 40 && gate) {
            // interval.stop();
            // setTimeout(() => {

                setStartPoint(endPoint)
                setEndPoint(endPoint + 40)
                setPositionX(0)
                setGate(false)
                setKOCount(koCount + 1)
                // setEnemy("O##########H")
                enemyGenerate(koCount + 1, 0)
            // }, 100);

        } else {
            interval.start();
            
            // setField(splitLevel)
            setField(displayField)
        }

    }, [seconds, startPoint, endPoint])

    // return field;
    // need to put the prompt in here and then return it
    return { 
        field,
        buttonLeft,
        buttonRight,
        buttonJump,
        buttonStrike,
        timeDisplay,
        seconds,
        koCount,
    };
    // return [
    //     field, // 0
    //     buttonLeft, // 1
    //     buttonRight, // 2
    //     buttonJump, // 3
    //     buttonStrike, // 4
    //     timeDisplay, // 5
    //     seconds, // 6
    //     koCount, // 7
    // ];
};
/*
the enemy moves fast... 

xxxxxxxxxxxxxxxxxxx
----|---------|------- // three...
O|||||)
xxxxxxxxxxxxxxxxxxx
----|---------|------- // two...
       O####H
xxxxxxxxxxxxxxxxxxx
----|---------|------- // one...
ooooooooooooooooooo
xxxxxxxxxxxxxxxxxxx
----|---------|------- // zero...
*/