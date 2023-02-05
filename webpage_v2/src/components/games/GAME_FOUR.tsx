import { Code, Space, SimpleGrid, Button } from "@mantine/core";
import { useInterval, useHotkeys } from "@mantine/hooks";
import { useState, useEffect } from "react";
import { liner, spacer, printTextBlock } from "../../utils/table_design_logic";
import { usePrompt } from "../../utils/table_design_logic";

import gameFourScript from "../../gameScript/gameFour/script.json"


export default function GAME_FOUR() {

    useHotkeys([
        ["ArrowDown", () => runAction()],
        // ["ArrowUp", () => up()],
        // ["ArrowLeft", () => left()],
        ["ArrowRight", () => next()],
    ]);


    // const [action, setAction] = useState("");

    const [lineOne, setLineOne] = useState(0);
    const [lineTwo, setLineTwo] = useState(-1); // set to minus one so that the text doesn't start at the same time as line one.

    const [nameOne, SetNameOne] = useState(gameFourScript.characterNames[0]);

    const [nameTwo, SetNameTwo] = useState(gameFourScript.characterNames[1]);

    const printNameOne = liner(printTextBlock(nameOne,30),"=","top",true,30)

    const [lifePointsTwo, setLifePointsTwo] = useState(2200)

    const printNameTwo = liner(printTextBlock(nameTwo,25) + `${spacer((nameTwo === gameFourScript.characterNames[2]) ? "" : `LP: ${lifePointsTwo}`,13,"left")}|` ,"=","top",true,40)

    const [resetValue, setResetValue] = useState(false);
    const [resetValue2, setResetValue2] = useState(false);

    const textBlockOne = callPrompt(gameFourScript?.playerOneBox?.[lineOne] ?? "",resetValue);

    const textBlockTwo = callPrompt(gameFourScript?.playerTwoBox?.[lineTwo] ?? "",resetValue2);


    function callPrompt(text: string, reset: Boolean) {
        // I can't put reset into the parameter to not use a ternary condition because it breaks...
        return (!reset) 
            ? usePrompt(text,40,"=",30,true,false)
            : usePrompt(text,40,"=",30,false,true)
    }

    function next() {
        // need to set conditions for when it is at a particular line so that it returns void
        if (lineOne === 4) {
            return
        }


        if (lineOne === lineTwo) {
            setResetValue(true)
            
            setTimeout(() => {
                setLineOne(lineOne+1)
                setResetValue(false);
            }, 1)
        } else {
            setResetValue2(true)
            
            setTimeout(() => {
                setLineTwo(lineTwo+1)
                setResetValue2(false);

                if (lineTwo === 8) {
                    return SetNameTwo(gameFourScript.characterNames[2])
                }
            }, 1)
        }
    }

    const [miss, setMiss] = useState(100);

    const [remove, setRemove] = useState(false);

    function runAction() {
        if (remove === true) {
            return
        };

        setResetValue(true)
        setResetValue2(true)
        // need to set lifepoints value here...
        // when attacking, need to randomise chance, probably start at a 100% chance and have it go down by 5% each draw and then .01% as it goes down to from 1%
        let drawCard = Math.ceil(Math.random() * 100);

        if (drawCard > (100 - miss)) {
            setLifePointsTwo(lifePointsTwo - 1500)
            setMiss(miss - 5)
            setLineOne(6)
        } else if (drawCard < (100 - miss) && lifePointsTwo > 0) {
            // set lose condition here
            setRemove(true)
            // need to set lose scene here.
        } else {
            // disable drawing card and advance to next line...
            setRemove(true)
            setLineOne(9) // to get to specific line.
            setLineTwo(8)
        }
        
        setTimeout(() => {
            setResetValue(false)
            setResetValue2(false);
        }, 1)
    }


    // const playerOne = gameFourScript.playerOneBox?.[lineOne] ?? "Nil";

    // const splitOne = (playerOne + " ").split("");

    // const [textOne, setTextOne] = useState("");

    // const [textBlockOne, setTextBlockOne] = useState("");

    // const playerTwo = gameFourScript.playerTwoBox?.[lineTwo] ?? "Nil";

    // const splitTwo = (playerTwo + " ").split("");

    // const [textTwo, setTextTwo] = useState("");

    // const [textBlockTwo, setTextBlockTwo] = useState("");

    // const [seconds, setSeconds] = useState(0);
    // const interval = useInterval(() => setSeconds((s) => s + 1), 50);

    // useEffect(() => {
    //     if (playerOne === "Nil") {
    //         interval.stop();
    //         return
    //     }

    //     if (seconds === splitOne.length && lineOne === lineTwo) {
    //         interval.stop();
    //         setTimeout(() => {
    //             setSeconds(0);
    //             setLineOne(lineOne+1)
    //             setTextTwo("")
    //             setTextBlockTwo("")
    //             if (lineTwo === 9) {
    //                 SetNameTwo(gameFourScript.characterNames[2])
    //             } else if (lineTwo > 2 && lineTwo < 8) {
    //                 setLifePointsTwo(lifePointsTwo - 1500)
    //             } else if (lineTwo === 8) {
    //                 setLifePointsTwo(lifePointsTwo - 3000)
    //             }
    //           }, 2000)
    //     } else if (seconds === splitTwo.length && lineOne !== lineTwo) {
    //         interval.stop();
    //         setTimeout(() => {
    //             setSeconds(0);
    //             setLineTwo(lineTwo+1)
    //             setTextOne("")
    //             setTextBlockOne("")
    //             // if (lineTwo === 9) {
    //             //     SetNameTwo(gameFourScript.characterNames[2])
    //             // }
    //           }, 2000)
    //     } else if (lineOne === lineTwo) {
    //         interval.start();

    //         setTextOne(textOne + splitOne[seconds])

    //         setTextBlockOne(liner(printTextBlock(textOne + " ".repeat(playerOne.length-textOne.length),40),"−","both",true,40))
    //     } else {
    //         interval.start();

    //         setTextTwo(textTwo + splitTwo[seconds])

    //         setTextBlockTwo(liner(printTextBlock(textTwo + " ".repeat(playerTwo.length-textTwo.length),40),"−","both",true,40))
    //     }

    // }, [seconds])

    return (
        <div>
            <Code style={{backgroundColor: `rgba(0, 255, 255,0.2)`}} block>
                {printNameOne}
                {textBlockOne}
            </Code>
            <Space h="xl" />
            <Code style={{backgroundColor:(lineTwo > 8) ? "rgba(200, 200, 200, 0.2)" : `rgba(75, 0, 130, .20)`}} block>
                {printNameTwo}
                {textBlockTwo}
            </Code>
            <SimpleGrid cols={2}>
                <Button variant="outline" radius={"lg"} color="red" onClick={next} fullWidth>
                   Next 
                </Button>
                <Button variant="outline" radius={"lg"} color="red" onClick={runAction} fullWidth>
                   Draw Card!
                </Button>
            </SimpleGrid>
            <Space h="xl" />
            Dialogue source: https://www.youtube.com/watch?v=-9NBvsmQ2Ik
        </div>
    )
}