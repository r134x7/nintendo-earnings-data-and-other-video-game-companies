import { Code, Button, SimpleGrid, Space } from "@mantine/core";
import { useHotkeys, useInterval } from "@mantine/hooks";
import { useState, useEffect } from "react";
import { Field } from "../../classes/Field";
import { Unit } from "../../classes/Unit";
import { liner, border, spacer, printTextBlock } from "../../utils/table_design_logic";

import gameFourScript from "../../gameScript/gameFour/script.json"


export default function GAME_FOUR() {

    const [lineOne, setLineOne] = useState(0);
    const [lineTwo, setLineTwo] = useState(0);

    const playerOne = gameFourScript.playerOneBox?.[lineOne] ?? "No lines here P1";
    console.log(playerOne);
    

    const splitOne = (playerOne + " ").split("");

    const [textOne, setTextOne] = useState("");

    const [textBlockOne, setTextBlockOne] = useState("");

    const playerTwo = gameFourScript.playerTwoBox?.[lineTwo] ?? "No lines here P2";
    console.log(playerTwo);
    

    const splitTwo = (playerTwo + " ").split("");

    const [textTwo, setTextTwo] = useState("");

    const [textBlockTwo, setTextBlockTwo] = useState("");

    const [seconds, setSeconds] = useState(0);
    const interval = useInterval(() => setSeconds((s) => s + 1), 80);

    useEffect(() => {
        if (seconds === splitOne.length && lineOne === lineTwo) {
            interval.stop();
            setTimeout(() => {
                setSeconds(0);
                setLineOne(lineOne+1)
                setTextTwo("")
                setTextBlockTwo("")
              }, 2100)
        } else if (seconds === splitTwo.length && lineOne !== lineTwo) {
            interval.stop();
            setTimeout(() => {
                setSeconds(0);
                setLineTwo(lineTwo+1)
                setTextOne("")
                setTextBlockOne("")
              }, 2100)
        } else if (lineOne === lineTwo) {
            interval.start();

            setTextOne(textOne + splitOne[seconds])

            setTextBlockOne(liner(printTextBlock(textOne + " ".repeat(playerOne.length-textOne.length),40),"−","both",true,40))
        } else {
            interval.start();

            setTextTwo(textTwo + splitTwo[seconds])

            setTextBlockTwo(liner(printTextBlock(textTwo + " ".repeat(playerTwo.length-textTwo.length),40),"−","both",true,40))
        }

    }, [seconds])

    return (
        <div>
            <Code style={{backgroundColor: `rgba(0, 255, 255,0.2)`}} block>{textBlockOne}</Code>
            <Space h="xl" />
            <Code style={{backgroundColor: `rgba(75, 0, 130, .20)`}} block>{textBlockTwo}</Code>
            <Space h="xl" />
            Dialogue source: https://www.youtube.com/watch?v=-9NBvsmQ2Ik
        </div>
    )
}