import { Code, Button, SimpleGrid } from "@mantine/core";
import { useHotkeys, useInterval } from "@mantine/hooks";
import { useState } from "react";
import { Field } from "../../classes/Field";
import { Unit } from "../../classes/Unit";

// need to try making a function here that spawns objects...
function ball() {
    return new Unit(objectField, 0, 4, 1, 0, "Pizza")
}

const objectField = new Field(6,4);
const field = new Field(2,0);
const playerOne = new Unit(field, 0, 0, 3, 1, "X=----=O")

const makeBall = ball();
// const makeBall = new Unit(objectField, 0, 3, 1, 0, "Pizza")
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
            ? " " + player.getAvatar + " ".repeat(10 - (player.getAvatar.length + 1))
            : "          "
        }

    const playerPosY = ifPlayerOnePositionX(playerOne);
    const playerPosX = playerPosY(0);

    const ballPos = ifPlayerOnePositionX(makeBall);
    const ballPosZeroX = ballPos(0);
    const ballPosOneX = ballPos(1);
    const ballPosTwoX = ballPos(2);
    const ballPosThreeX = ballPos(3);
    const ballPosFourX = ballPos(4);

const visualField = () =>
`_|${ballPosFourX(0)}       ${ballPosFourX(1)}
_| ${ballPosThreeX(0)}   ${ballPosThreeX(1)}  ${ballPosThreeX(2)}    ${ballPosThreeX(3)}
_|  ${ballPosTwoX(0)}   ${ballPosTwoX(1)}      ${ballPosTwoX(2)}    ${ballPosTwoX(3)}  ${ballPosTwoX(4)}   ${ballPosTwoX(5)}
_|   ${ballPosOneX(0)} ${ballPosOneX(1)}        ${ballPosOneX(2)} ${ballPosOneX(3)}  ${ballPosOneX(4)}   ${ballPosOneX(5)} ${ballPosOneX(6)}
_|    ${ballPosZeroX(0)}  ${ballPosZeroX(1)}  ${ballPosZeroX(2)}                      ${ballPosZeroX(4)}
_|${playerPosX(0)}|${playerPosX(1)}|${playerPosX(2)}| PINEAPPLE
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