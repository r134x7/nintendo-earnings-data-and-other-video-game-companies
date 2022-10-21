import { Code, Button, SimpleGrid } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { useState } from "react";
import { Field } from "../../classes/Field";
import { Unit } from "../../classes/Unit";

// need to try making a function here that spawns objects...
function ball() {
    return new Unit(objectField, 0, 3, 1, 0, "Pizza")
}

const objectField = new Field(2,3);
const field = new Field(2,0);
const playerOne = new Unit(field, 0, 0, 3, 1, "X=----=O")

// const makeBall = ball();
const makeBall = new Unit(objectField, 0, 0, 1, 0, "Pizza")
// this is where I need to think about holding an array of objects

export default function GAME_TWO() {

    const right = () => {
        // if (playerOne.getHitPoints <= 0 || playerTwo.getHitPoints <= 0) {
        //     return
        // }

            playerOne.incrementPositionXPlus()
            setPlayerField(visualField)
            // setHitPoints(displayHP);
    }

    const left = () => {
        // if (playerOne.getHitPoints <= 0 || playerTwo.getHitPoints <= 0) {
        //     return
        // }

            playerOne.incrementPositionXMinus()
            setPlayerField(visualField)
        //     setHitPoints(displayHP);
    }

    useHotkeys([
        ["ArrowLeft", () => left()],
        ["ArrowRight", () => right()],
    ]);

    const ifPlayerOnePositionX =
        (player: Unit) =>
        (yPosition: number) =>
        (xPosition: number) => {

            return (xPosition === player.getCurrentPositionX && yPosition === player.getCurrentPositionY)
            ? " " + player.getAvatar + " "
            : "          "
        }

    const playerPosY = ifPlayerOnePositionX(playerOne);
    const playerPosX = playerPosY(0);

    const ballPos = ifPlayerOnePositionX(makeBall);
    const ballPosZero = ballPos(0);
    const ballPosOne = ballPos(1);
    const ballPosTwo = ballPos(2);

const visualField = () =>
`_|${ballPosZero(3)}|${ballPosOne(3)}|${ballPosTwo(3)}|
_|${ballPosZero(2)}|${ballPosOne(2)}|${ballPosTwo(2)}|
_|${ballPosZero(1)}|${ballPosOne(1)}|${ballPosTwo(1)}|
_|${ballPosZero(0)}|${ballPosOne(0)}|${ballPosTwo(0)}|
_|${playerPosX(0)}|${playerPosX(1)}|${playerPosX(2)}|
----------------------------------------`;

    const [playerField, setPlayerField] = useState(visualField);

    return (
        <div>
            <Code block>
                {playerField}
            </Code>
            <SimpleGrid cols={2}>
                <Button variant="outline" radius={"lg"} color="red" onClick={left} fullWidth>
                   Left 
                </Button>
                <Button variant="outline" radius={"lg"} color="red" onClick={right} fullWidth>
                    Right
                </Button>
            </SimpleGrid>
        </div>
    )
}