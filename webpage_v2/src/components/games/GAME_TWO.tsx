import { Code, Button, SimpleGrid } from "@mantine/core";
import { useHotkeys, useInterval } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Field } from "../../classes/Field";
import { Unit } from "../../classes/Unit";

// need to try making a function here that spawns objects...
function ball(x: number, y: number) {
    return new Unit(objectField, x, y, 1, 0, (Math.floor(Math.random() * 2) === 1) ? "o" : "x")
}

const objectField = new Field(6,4);
const field = new Field(2,0);
const playerOne = new Unit(field, 0, 0, 3, 1, "X=----=O")

// const makeBall: Unit[] = Array.from({length: 7}, (elem, index) => {
//     return ball(index, 0)
// }) 
var makeBall = ball(0,4);

var score = 0;

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

        if (player.getAvatar === "X=----=O") {
            return (xPosition === player.getCurrentPositionX && yPosition === player.getCurrentPositionY)
            ? " " + player.getAvatar + " ".repeat(10 - (player.getAvatar.length + 1))
            : "          ";
        } else {
            return (xPosition === player.getCurrentPositionX && yPosition === player.getCurrentPositionY)
            ? " " + player.getAvatar + " "
            : "   ";
        }
    }

    const playerPosY = ifPlayerOnePositionX(playerOne);
    const playerPosX = playerPosY(0);

    const ballPos = ifPlayerOnePositionX(makeBall);
    const ballPosZeroX = ballPos(0);
    const ballPosOneX = ballPos(1);
    const ballPosTwoX = ballPos(2);
    const ballPosThreeX = ballPos(3);
    const ballPosFourX = ballPos(4);

// const visualField = () =>
// `_|${ballPosFourX(0)}       ${ballPosFourX(1)}
// _| ${ballPosThreeX(0)}   ${ballPosThreeX(1)}  ${ballPosThreeX(2)}    ${ballPosThreeX(3)}
// _|  ${ballPosTwoX(0)}   ${ballPosTwoX(1)}      ${ballPosTwoX(2)}    ${ballPosTwoX(3)}  ${ballPosTwoX(4)}   ${ballPosTwoX(5)}
// _|   ${ballPosOneX(0)} ${ballPosOneX(1)}        ${ballPosOneX(2)} ${ballPosOneX(3)}  ${ballPosOneX(4)}   ${ballPosOneX(5)} ${ballPosOneX(6)}
// _|    ${ballPosZeroX(0)}  ${ballPosZeroX(1)}  ${ballPosZeroX(2)}                      ${ballPosZeroX(4)}
// _|${playerPosX(0)}|${playerPosX(1)}|${playerPosX(2)}| PINEAPPLE
// ----------------------------------------`;

const visualField = () =>
`_|${ballPosFourX(0)}      ${ballPosFourX(1)} 
_| ${ballPosThreeX(0)}    ${ballPosThreeX(1)}${ballPosThreeX(2)}     ${ballPosThreeX(3)} 
_|  ${ballPosTwoX(0)}  ${ballPosTwoX(1)}  ${ballPosTwoX(2)}   ${ballPosTwoX(3)}  ${ballPosTwoX(4)}    ${ballPosTwoX(5)} 
_|   ${ballPosOneX(0)}${ballPosOneX(1)}    ${ballPosOneX(2)} ${ballPosOneX(3)}    ${ballPosOneX(4)} ${ballPosOneX(5)}  ${ballPosOneX(6)} 
_|    ${ballPosZeroX(0)}       ${ballPosZeroX(2)}        ${ballPosZeroX(4)}
_|${playerPosX(0)}|${playerPosX(1)}|${playerPosX(2)}|###|
----------------------------------------`;

    const [playerField, setPlayerField] = useState(visualField);

    const [seconds, setSeconds] = useState(0);

    const speedTimer = () => {
        return (seconds <= 30)
                ? 750
                : (seconds > 25 && seconds <= 50)
                ? 500
                : (seconds > 50 && seconds <= 100)
                ? 250
                : (seconds > 100 && seconds <= 200)
                ? 100
                : (seconds > 200 && seconds <= 400)
                ? 80
                : (seconds > 400 && seconds <= 800)
                ? 60
                : 40 
    }

    const interval = useInterval(() => setSeconds((s) => s + 1), speedTimer());

    useEffect(() => {
        if (seconds === 0) {
            interval.start();
        } else if (seconds > 0 && playerOne.getHitPoints > 0) {
            interval.toggle()
            interval.start()
        } 

        if (playerOne.getHitPoints === 0) {
            console.log(seconds);
            return interval.stop();
        } else {
            // interval.start();
            objectPathSet();
            console.log(seconds);
            // console.log(`x: ${makeBall.getCurrentPositionX}, y: ${makeBall.getCurrentPositionY}`);
            setPlayerField(visualField);
            setHitPoints(displayHP);
        }
    }, [playerOne.getHitPoints, seconds])

    // need to create object path...
    const objectPathDown1 = () => {
        if (makeBall.getCurrentPositionY === 0 && playerOne.getCurrentPositionX === 0) {
            makeBall.incrementPositionXPlus()
            makeBall.incrementPositionYPlus()
            return
        } else if (makeBall.getCurrentPositionY === 0 && playerOne.getCurrentPositionX !== 0) {
            playerOne.attackOpponent(playerOne)
            return makeBall = ball(0,4)
        }
        // if it gets to zero and it matches player position then it goes up...
        // on each second it uses...
        return makeBall.incrementPositionYMinus()
    }

    const objectPathUp1 = () => {
        if (makeBall.getCurrentPositionY === 4) {
            makeBall.incrementPositionXPlus()
            makeBall.incrementPositionYMinus()
            return
        }

        return makeBall.incrementPositionYPlus()
    }

    const objectPathDown2 = () => {
        if (makeBall.getCurrentPositionY === 0 && playerOne.getCurrentPositionX === 1) {
            makeBall.incrementPositionXPlus()
            makeBall.incrementPositionYPlus()
            return
        } else if (makeBall.getCurrentPositionY === 0 && playerOne.getCurrentPositionX !== 1) {
            playerOne.attackOpponent(playerOne)
            return makeBall = ball(0,4)
        }

        return makeBall.incrementPositionYMinus()
    }

    const objectPathUp2 = () => {
        if (makeBall.getCurrentPositionY === 3) {
            makeBall.incrementPositionXPlus()
            makeBall.incrementPositionYMinus()
            return
        }

        return makeBall.incrementPositionYPlus()
    }

    const objectPathDown3 = () => {
        if (makeBall.getCurrentPositionY === 0 && playerOne.getCurrentPositionX === 2) {
            makeBall.incrementPositionXPlus()
            makeBall.incrementPositionYPlus()
            return
        } else if (makeBall.getCurrentPositionY === 0 && playerOne.getCurrentPositionX !== 2) {
            playerOne.attackOpponent(playerOne)
            return makeBall = ball(0,4)
        }

        return makeBall.incrementPositionYMinus()
    }

    const objectPathUp3 = () => {
        if (makeBall.getCurrentPositionY === 2) {
            makeBall.incrementPositionXPlus()
            makeBall.incrementPositionYMinus()
            return
        }

        return makeBall.incrementPositionYPlus()
    }

    const objectPathSet = () => {
        if (makeBall.getCurrentPositionX === 0) {
            return objectPathDown1()
        } else if (makeBall.getCurrentPositionX === 1) {
            return objectPathUp1()
        } else if (makeBall.getCurrentPositionX === 2) {
            return objectPathDown2()
        } else if (makeBall.getCurrentPositionX === 3) {
            return objectPathUp2()
        } else if (makeBall.getCurrentPositionX === 4) {
            return objectPathDown3()
        } else if (makeBall.getCurrentPositionX === 5) {
            return objectPathUp3()
        } else {
            makeBall.incrementPositionYPlus();
            score += 10;
            return makeBall = ball(0,4)
        }

    }

    const speed = (speedTimer() === 750)
                    ? "Slowest"
                    : (speedTimer() === 500)  
                    ? "Slower"
                    : (speedTimer() === 250)
                    ? "Slow"
                    : (speedTimer() === 100)
                    ? "Not Slow"
                    : (speedTimer() === 80)
                    ? "Fast"
                    : (speedTimer() === 60)
                    ? "Faster"
                    : "Fastest"



const displayHP = () => 
`------------------------------
| Player: ${playerOne.getHitPoints}HP${" ".repeat(31 - (14 + playerOne.getHitPoints.toString().length))}|
| Score: ${score} points${" ".repeat(31- (18 + score.toString().length))}|
| Speed: ${speed}${" ".repeat(20-(speed.length))}|
------------------------------
`;

const [hitPoints, setHitPoints] = useState(displayHP);

const gameOverOne = 
`--------------------------------
| You struggled.               |
|                              |
| Game Over                    |
--------------------------------`; 

const gameOverTwo =
`--------------------------------
| You struggled against time.  |
|                              |
| Game Over!                   |
--------------------------------`; 

    return (
        <div>
            <Code block>
                {(playerOne.getHitPoints <= 0 && seconds > 800) ? gameOverTwo : (playerOne.getHitPoints <= 0) ? gameOverOne : playerField}
                <br />
                {hitPoints}
            </Code>
            {(playerOne.getHitPoints <= 0)
            ? <></>
            :
            <SimpleGrid cols={2}>
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