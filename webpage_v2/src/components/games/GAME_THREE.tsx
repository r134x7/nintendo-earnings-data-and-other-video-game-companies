import { Code, Button, SimpleGrid } from "@mantine/core";
import { useHotkeys, useInterval } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Field } from "../../classes/Field";
import { Unit } from "../../classes/Unit";
import { liner, border, spacer } from "../../utils/table_design_logic";

// need to figure out how to have a reactive map...

// reusing code from game one
    // Objects need to be placed outside the function to retain state...
    // need to have a list of fields...
    const xLength = Math.ceil(Math.random() * 5)
    const yLength = Math.ceil(Math.random() * 5)
    const field = new Field(xLength,yLength);

    const playerOne = new Unit(field, 0, 0, 100, 10, "X");
    const playerTwo = new Unit(field, field.getX, field.getY, 100, 10, "O");

export default function GAME_THREE() {

    useHotkeys([
        ["ArrowDown", () => down()],
        ["ArrowUp", () => up()],
        ["ArrowLeft", () => left()],
        ["ArrowRight", () => right()],
    ]);

    const ifPlayerPositionXY = 
        (player: Unit) => {
            return (xPosition: number, yPosition: number) => {
                
                return (xPosition === player.getCurrentPositionX && yPosition === player.getCurrentPositionY)
                ? border([
                    spacer(player.getAvatar,9,"left")
                ])
                : border([
                    spacer("",9,"left")
                ]);
            }
        }
    
    const playerOnePosition = ifPlayerPositionXY(playerOne);
    const playerTwoPosition = ifPlayerPositionXY(playerTwo);

// need to solve this...
// need parameters to create the map...
const visualField = (xLengthLocal: number, yLengthLocal: number) => {

    let lineCount = xLengthLocal + 1;

    let mapArray = Array.from({length:yLengthLocal},(v,i) => {

        let p1 = Array.from({length:xLengthLocal},(w,j) => {
            return playerOnePosition(j,i);
        })

        let p2 = Array.from({length:yLengthLocal},(w,j) => {
            return playerTwoPosition(j,i);
        })

        return 

    })
};
// `−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
// ${playerOnePosition(0,0)}${playerOnePosition(1,0)}${playerOnePosition(2,0)}
// ${playerTwoPosition(0,0)}${playerTwoPosition(1,0)}${playerTwoPosition(2,0)}
// −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
// ${playerOnePosition(0,1)}${playerOnePosition(1,1)}${playerOnePosition(2,1)}
// ${playerTwoPosition(0,1)}${playerTwoPosition(1,1)}${playerTwoPosition(2,1)}
// −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
// ${playerOnePosition(0,2)}${playerOnePosition(1,2)}${playerOnePosition(2,2)}
// ${playerTwoPosition(0,2)}${playerTwoPosition(1,2)}${playerTwoPosition(2,2)}
// −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−`;

const displayHP = () => 
`------------------------------
| Player X: ${playerOne.getHitPoints}HP${" ".repeat(31 - (16 + playerOne.getHitPoints.toString().length))}|
| CPU O: ${playerTwo.getHitPoints}HP${" ".repeat(34 - (16 + playerTwo.getHitPoints.toString().length))}|
------------------------------
`;

    const [playerField, setPlayerField] = useState(visualField);

    const [hitPoints, setHitPoints] = useState(displayHP);

    const thisPosition = () => console.log(`x: ${playerOne.getCurrentPositionX}, y: ${playerOne.getCurrentPositionY}`);
    
    const right = () => {
        if (playerOne.getHitPoints <= 0 || playerTwo.getHitPoints <= 0) {
            return
        }
            // playerOne.moveAttackPlusX(playerTwo)
            playerOne.incrementPositionXPlus()
            // thisPosition()
            playerOne.attackOpponent(playerTwo)
            cpu()
            cpu()
            cpu()
            setPlayerField(visualField)
            setHitPoints(displayHP);
    }

    const left = () => {
            // playerOne.moveAttackMinusX(playerTwo)
        if (playerOne.getHitPoints <= 0 || playerTwo.getHitPoints <= 0) {
            return
        }
            playerOne.incrementPositionXMinus()
            // thisPosition()
            playerOne.attackOpponent(playerTwo)
            cpu()
            cpu()
            cpu()
            setPlayerField(visualField)
            setHitPoints(displayHP);
    }

    const up = () => {
            // playerOne.moveAttackMinusY(playerTwo)
        if (playerOne.getHitPoints <= 0 || playerTwo.getHitPoints <= 0) {
            return
        }
            playerOne.incrementPositionYMinus()
            // thisPosition()
            playerOne.attackOpponent(playerTwo)
            cpu()
            cpu()
            cpu()
            setPlayerField(visualField)
            setHitPoints(displayHP);
    }

    const down = () => {
            // playerOne.moveAttackPlusY(playerTwo)
        if (playerOne.getHitPoints <= 0 || playerTwo.getHitPoints <= 0) {
            return
        }
            playerOne.incrementPositionYPlus()
            // thisPosition()
            playerOne.attackOpponent(playerTwo)
            cpu()
            cpu()
            cpu()
            setPlayerField(visualField)
            setHitPoints(displayHP);
    }

    const cpu = () => {

        let x = Math.floor(Math.random() * 4);

        (x === 0) 
        ? playerTwo.incrementPositionXMinus()
        : (x === 1)
        ? playerTwo.incrementPositionYMinus()
        : (x === 2)
        ? playerTwo.incrementPositionXPlus()
        : playerTwo.incrementPositionYPlus()

        playerTwo.attackOpponent(playerOne)
    }

const gameOverOne = 
`--------------------------------
| You struggled and lost.      |
|                              |
| Game Over                    |
--------------------------------`; 

const gameOverTwo = 
`--------------------------------
| You struggled to win.        |
|                              |
| Game Over!                   |
--------------------------------`; 

    return (
        <div>
            <Code block>
                {(playerTwo.getHitPoints <= 0) ? gameOverTwo : (playerOne.getHitPoints <= 0) ? gameOverOne : playerField}
                <br />
                {hitPoints}
            </Code>
            { (playerOne.getHitPoints <= 0 || playerTwo.getHitPoints <= 0) ?
            <></>
            : <SimpleGrid cols={2}>
            <Button variant="outline" radius={"lg"} color="red"  onClick={up} fullWidth>
                Up
            </Button>
            <Button variant="outline" radius={"lg"} color="red" onClick={down} fullWidth>
                Down
            </Button>
            <Button variant="outline" radius={"lg"} color="red" onClick={left} fullWidth>
               Left 
            </Button>
            <Button variant="outline" radius={"lg"} color="red" onClick={right} fullWidth>
                Right
            </Button>
            </SimpleGrid>
            }
        </div>
    )
}