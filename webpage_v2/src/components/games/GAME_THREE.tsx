import { Code, Button, SimpleGrid } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { useState } from "react";
import { Field } from "../../classes/Field";
import { Unit } from "../../classes/Unit";
import { liner, border, spacer, usePrompt } from "../../utils/table_design_logic";

// need to figure out how to have a reactive map...

// reusing code from game one
    // Objects need to be placed outside the function to retain state...
function makeField (xLengthField: number, yLengthField: number) {
    return new Field(xLengthField,yLengthField);
};

    const xLength = (length: number) => Math.ceil(Math.random() * length) // can't make it too long for mobile
    const yLength = (length: number) => Math.ceil(Math.random() * length)

    var field = makeField(xLength(3),yLength(5));

function makePlayer (map: Field, startPositionX: number, startPositionY: number, hp: number, attack: number, char: string) {
    return new Unit(map, startPositionX, startPositionY, hp, attack, char)
}; 

    var playerOneHP = 100;
    var playerOneAtt = 10;
    var playerOneAvatar = "X"

    var playerTwoHP = 100;
    var playerTwoAtt = 10;
    var playerTwoAvatar = "O"

    var playerOne = makePlayer(field, 0, 0, playerOneHP, playerOneAtt, playerOneAvatar);
    var playerTwo = makePlayer(field, field.getX, field.getY, playerTwoHP, playerTwoAtt, playerTwoAvatar);


function difficulty (attacks: number) {
    return Math.ceil(Math.random() * attacks)
};

    var levelSetting = 1;

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

const visualField = (xLengthLocal: number, yLengthLocal: number): string => {

    let mapArray: string[] = Array.from({length:yLengthLocal+1},(v,i) => {

        let p1: string = Array.from({length:xLengthLocal+1},(w,j) => {
            return playerOnePosition(j,i);
        }).reduce((acc, next) => acc + next)

        let p2: string = Array.from({length:xLengthLocal+1},(w,j) => {
            return playerTwoPosition(j,i);
        }).reduce((acc, next) => acc + next)

        let mapLines = "−".repeat(12 * (xLengthLocal +1)); 

        return (i === yLengthLocal) 
            ? mapLines + "\n" + p1 + "\n" + p2 + "\n" + mapLines 
            : mapLines + "\n" + p1 + "\n" + p2 + "\n"
    });
    
    return mapArray.reduce((acc,next) => acc + next)

};

const displayHP = (): string => liner(border([
spacer(`Player X: ${playerOne.getHitPoints}HP`,29,"left")
]),"−","top",true) + border([
spacer(`CPU O: ${playerTwo.getHitPoints}HP`,29,"left")
],true) + liner(border([
spacer(`Difficulty Level: ${levelSetting}`,29,"left")
]),"−","bottom");

    const [playerField, setPlayerField] = useState(visualField(field.getX,field.getY));

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

            for (let index = 0; index < levelSetting; index++) {
                cpu()
            }

            setPlayerField(visualField(field.getX,field.getY))
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

            for (let index = 0; index < levelSetting; index++) {
                cpu()
            }

            setPlayerField(visualField(field.getX,field.getY))
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

            for (let index = 0; index < levelSetting; index++) {
                cpu()
            }

            setPlayerField(visualField(field.getX,field.getY))
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

            for (let index = 0; index < levelSetting; index++) {
                cpu()
            }

            setPlayerField(visualField(field.getX,field.getY))
            setHitPoints(displayHP);
    }

    const resetMove = () => {
        playerOne.incrementPositionYMinus()
        playerTwo.incrementPositionYMinus() 
        playerTwo.incrementPositionYMinus() 
        playerTwo.incrementPositionXPlus()
        playerTwo.incrementPositionXPlus()
        playerTwo.attackOpponent(playerOne)
        playerOne.attackOpponent(playerTwo)

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

const gameOverOne = usePrompt("You struggled and lost. Game Over",40,"=",80,(playerOne.getHitPoints <= 0) ? true : false, (playerOne.getHitPoints > 0) ? true : false);

function nextLevel () {

    levelSetting++

    field = makeField(xLength(3),yLength(5));

    playerOneHP = playerOneHP + 20;
    playerOneAtt = playerOneAtt + 5;
    // purposely making use of implicit type conversion.
    playerOneAvatar = "X+" + (levelSetting-1);

    playerOne = makePlayer(field, 0, 0, playerOneHP, playerOneAtt, playerOneAvatar);

    playerTwoHP = playerTwoHP + 10;

    playerTwo = makePlayer(field, field.getX, field.getY, playerTwoHP, 10, "O");

    setPlayerField(visualField(field.getX,field.getY))

    return playerField
};

function reset () {

    field = makeField(xLength(3),yLength(5));

    playerOneHP = 100;
    playerOneAtt = 10;
    playerOneAvatar = "X";

    playerOne = makePlayer(field, 0, 0, playerOneHP, playerOneAtt, playerOneAvatar);

    playerTwoHP = 100;

    playerTwo = makePlayer(field, field.getX, field.getY, playerTwoHP, 10, "O");

    return resetMove()
}


    return (
        <div>
            <Code block>
                {(playerTwo.getHitPoints <= 0) ? nextLevel() : (playerOne.getHitPoints <= 0) ? gameOverOne : playerField}
                <br />
                {hitPoints}
            </Code>
            { (playerOne.getHitPoints <= 0 || playerTwo.getHitPoints <= 0) ?
            <>
            <Button variant="outline" radius={"lg"} color="red"  onClick={reset} fullWidth>
                Reset</Button>
            </>
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