import { useInterval, useHotkeys } from "@mantine/hooks";
import { useState, useEffect } from "react";
import { Button } from "@mantine/core";
import { printTextBlock, spacer, liner, border, useSingleMessage } from "./table_design_logic";

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

export function useTimedStage(level: string, milliseconds: number) {

    const [field, setField] = useState("");
    const [seconds, setSeconds] = useState(0);
    const [startPoint, setStartPoint] = useState(0);
    const [endPoint, setEndPoint] = useState(40)
    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);
    const [avatar, setAvatar] = useState("x");
    const [enemy, setEnemy] = useState("O###H");
    const [enemyPosX, setEnemyPosX] = useState(0);
    const [enemyPosY, setEnemyPosY] = useState(0);
    const [gate, setGate] = useState(false);

    const interval = useInterval(() => setSeconds((s) => s + 1), milliseconds);

    // const [buttonHold, setButtonHold] = useState(false);
    // const mouseInterval = useInterval(() => setButtonHold((s) => s + 1), 60)
    let enemyVisual = spacer(" ".repeat(enemyPosX) + enemy,40,"left")
    
    let playerVisual = spacer(" ".repeat(positionX) + avatar,40,"left");

    // take in the whole level and try to split level into 40 chars per screen view or each call of the function...
    // let splitLevel = playerVisual + "\n" + level.split("").filter((elem, index) => {
    //     return index <= endPoint && index >= startPoint
    // }).reduce((acc, next) => acc + next, "");

    let splitLevel = level.split("").filter((elem, index) => {
        return index <= endPoint && index >= startPoint
    }).reduce((acc, next) => acc + next, "");


    function yField(playerY: number, enemyY: number, level: string) {

        let playerVis = spacer(" ".repeat(positionX) + avatar,40,"left");

        let enemyVis = spacer(" ".repeat(enemyPosX) + enemy,40,"left");

        let blank = spacer(" ",40,"left");

        return Array.from({length: 12}, (v,i) => {
            // 0, 3, 6, 9
            if (i % 3 === 0) {
                return level
                // 1, 4, 7, 10...
            } else if (i % 3 === 1) {
                // Math.floor returns 0, 1, 2, 3...
                return (playerY === Math.floor(i/3)) ? playerVis : blank
            } else {
                return (enemyY === Math.floor(i/3)) ? enemyVis : blank
            }
        }).reduce((acc, next) => acc + "\n" + next)
    };

    // the field is inverted on the Y axis!
    let displayField = yField(positionY, enemyPosY, splitLevel);
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
            if (positionX === enemyPosX && positionY > enemyPosY) {
                setEnemy(enemy.slice(1))
            }
        } else if (level.at(endPoint - (40 - positionX) - 1) === "|" && positionY > 0) {
            setPositionY(positionY - 1);
            if (positionX === enemyPosX && positionY < enemyPosY) {
                setEnemy(enemy.slice(1))
            }
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
                <Button variant="outline" radius={"lg"} color="red" onTouchMove={rubStrike} fullWidth>
                  Rub Strike
                </Button>
    )

    useEffect(() => {
        // if (position > endPoint) {
            // causes player to go off field but it doesn't crash
        // console.log(seconds);
        // 999 seconds / 50 (milliseconds setting) = 20000 // rounded up
        if (seconds > (6000)) {
            interval.stop();
            return
        }

        if (enemy.length === 0) {
            setGate(true)
        }

        if (enemyPosX > 40) {
            setEnemyPosX(0)
            setEnemyPosY((enemyPosY === 2) ? 0 : enemyPosY+1)
        } else {
            setEnemyPosX(enemyPosX+1)
        }

        if (positionX > 40 && gate) {
            // interval.stop();
            // setTimeout(() => {

                setStartPoint(endPoint)
                setEndPoint(endPoint + 40)
                setPositionX(0)
                setGate(false)
            // }, 100);

        } else {
            interval.start();
            
            // setField(splitLevel)
            setField(displayField)
        }

    }, [seconds, startPoint, endPoint])

    // return field;
    // need to put the prompt in here and then return it
    return [
        field,
        buttonLeft,
        buttonRight,
        buttonJump,
        buttonStrike,
    ];
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