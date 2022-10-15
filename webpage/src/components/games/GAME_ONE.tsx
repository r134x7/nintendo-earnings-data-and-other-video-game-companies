import { Field } from "../../classes/Field";
import { Unit } from "../../classes/Unit";
import { useState, useEffect, useMemo } from "react";
import { Code, Button } from "@mantine/core";

export default function GAME_ONE() {

    const field = new Field(2,2);

    const playerOne = new Unit(field, 0, 0, 100, 10, "X");
    const playerTwo = new Unit(field, field.getX, field.getY, 100, 10, "O");

    // need to think how to set up a field visually...
    // need to think how to put the players on the field...

    // const ifPlayerOnePositionX = Array.from({length:field.getX+1}, (v,i) => i);
    // const ifPlayerOnePositionY = Array.from({length:field.getY+1}, (v,i) => i);
    // console.log([ifPlayerOnePositionX[0], ifPlayerOnePositionY[2]]);

    const ifPlayerPositionXY = 
        // (xGrid: number[]) => 
        // (yGrid: number[]) => 
        (player: Unit) => 
        (xPosition: number, yPosition: number) => {
            return (xPosition === player.getCurrentPositionX && yPosition === player.getCurrentPositionY)
                ? "    " + player.getAvatar + "    "
                : "         "
        }

    
    const playerOnePosition = ifPlayerPositionXY(playerOne);
    const playerTwoPosition = ifPlayerPositionXY(playerTwo);

const visualField = () =>
`-------------------------------
|${playerOnePosition(0,0)}|${playerOnePosition(1,0)}|${playerOnePosition(2,0)}|
|${playerTwoPosition(0,0)}|${playerTwoPosition(1,0)}|${playerTwoPosition(2,0)}|
-------------------------------
|${playerOnePosition(0,1)}|${playerOnePosition(1,1)}|${playerOnePosition(2,1)}|
|${playerTwoPosition(0,1)}|${playerTwoPosition(1,1)}|${playerTwoPosition(2,1)}|
-------------------------------
|${playerOnePosition(0,2)}|${playerOnePosition(1,2)}|${playerOnePosition(2,2)}|
|${playerTwoPosition(0,2)}|${playerTwoPosition(1,2)}|${playerTwoPosition(2,2)}|
-------------------------------`;

const displayHP = () => 
`------------------------------
| Player One: ${playerOne.getHitPoints}HP${" ".repeat(29 - (16 + playerOne.getHitPoints.toString().length))}|
| Player Two: ${playerTwo.getHitPoints}HP${" ".repeat(29 - (16 + playerTwo.getHitPoints.toString().length))}|
------------------------------
`;

    const [playerField, setPlayerField] = useState(visualField);

    const [hitPoints, setHitPoints] = useState(displayHP);


    const right = () => {
            playerOne.incrementPositionXPlus()
            console.log(playerOne.getCurrentPositionX);
            setPlayerField(visualField);
    }

    const left = () => {
            playerOne.incrementPositionXMinus()
            console.log(playerOne.getCurrentPositionX);
            setPlayerField(visualField);
    }

    const up = () => {
            playerOne.incrementPositionYPlus()
            console.log(playerOne.getCurrentPositionX);
            setPlayerField(visualField);
    }

    const down = () => {
            playerOne.incrementPositionYMinus()
            console.log(playerOne.getCurrentPositionX);
            setPlayerField(visualField);
    }
    // useEffect(() => {

    // }, [visualField, displayHP]) 
    // create buttons to move player
    // check the useCallback hook

    return (
        <div>
            <Code block>
                {playerField}
                <br />
                {hitPoints}
            </Code>
            <Button variant="outline" radius={"lg"} color="red" onClick={left}>
               Left 
            </Button>
            <Button variant="outline" radius={"lg"} color="red" onClick={up}>
                Up
            </Button>
            <Button variant="outline" radius={"lg"} color="red" onClick={right}>
                Right
            </Button>
            <Button variant="outline" radius={"lg"} color="red" onClick={down}>
                Down
            </Button>
        </div>
    )
}