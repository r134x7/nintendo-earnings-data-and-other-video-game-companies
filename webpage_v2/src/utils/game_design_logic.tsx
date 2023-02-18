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

export function timedStage(level: string, milliseconds: number) {

    const [field, setField] = useState("");
    const [seconds, setSeconds] = useState(0);
    const [startPoint, setStartPoint] = useState(0);
    const [endPoint, setEndPoint] = useState(40)
    const [position, setPosition] = useState(0);
    const [avatar, setAvatar] = useState("x");

    const interval = useInterval(() => setSeconds((s) => s + 1), milliseconds);

    // const [buttonHold, setButtonHold] = useState(false);
    // const mouseInterval = useInterval(() => setButtonHold((s) => s + 1), 60)
    
    let playerVisual = spacer(" ".repeat(position) + avatar,40,"left")
    // take in the whole level and try to split level into 40 chars per screen view or each call of the function...
    let splitLevel = playerVisual + "\n" + level.split("").filter((elem, index) => {
        return index <= endPoint && index >= startPoint
    }).reduce((acc, next) => acc + next, "");

    // let wall = (level.at(position+1) === "|") ? true : false;

    // let jump = false;

    useHotkeys([
        // ["ArrowDown", () => down()],
        // ["ArrowUp", () => up()],
        ["ArrowLeft", () => {
             if (position > 0 && (level.at(position-1) !== "|" /*|| jump !== false */)) {
                setAvatar((avatar === "x") ? "+" : "x")
                setPosition(position-1)
             } else {
                setAvatar((avatar === "x") ? "+" : "x")
                setPosition(position)
             }
            // (position > 0) ? setPosition(position-1) : setPosition(position)
        }],
        ["ArrowRight", () => {
             if (position < 41 && (level.at(position+1) !== "|" /*|| jump !== false */)) {
                setAvatar((avatar === "x") ? "+" : "x")
                setPosition(position+1)
             } else {
                setAvatar((avatar === "x") ? "+" : "x")
                setPosition(position)
             }
        } 
        //(position < 41) ? setPosition(position+1) : setPosition(position)
        ],
        ["f", () => {
           if (level.at(position+1) === "|") {
                setAvatar((avatar === "x") ? "+" : "x")
                setPosition(position+2)
           } else if (level.at(position-1) === "|") {
                setAvatar((avatar === "x") ? "+" : "x")
                setPosition(position-2)
           }
            
        }],
    ]);

    // function buttonLeftClick() {
    //     setButtonHold(true);
    //     console.log(buttonHold);
        
        // if (position > 0 && buttonHold === true) {
        //     setPosition(position-1)
    //         // setButtonHold(false)
    //     } else if (position < 0 && buttonHold === true) {
    //         setPosition(position)
    //     }
    //     // (position > 0 && buttonHold === true) ? setPosition(position-1) : setPosition(position)
    // }

    function rubRight() {
        // let delayedPosition = position;
        // using setTimeout helps to reduce speed of movement but bug occurs where stages are skipped...
        // setTimeout(() => {
           setAvatar((avatar === "x") ? "+" : "x");
           (position < 41) ? setPosition(position+1) : setPosition(position);
        // }, 100);
    }

    function rubLeft() {
        setAvatar((avatar === "x") ? "+" : "x");
        (position > 0) ? setPosition(position-1) : setPosition(position);
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

    useEffect(() => {
        // if (position > endPoint) {
            // causes player to go off field but it doesn't crash
        // console.log(seconds);
        // 999 seconds / 50 (milliseconds setting) = 20000 // rounded up
        if (seconds > (6000)) {
            interval.stop();
            return
        }

        if (position > 40) {
            // interval.stop();
            // setTimeout(() => {

                setStartPoint(endPoint)
                setEndPoint(endPoint + 40)
                setPosition(0)
                
            // }, 100);

        } else {
            interval.start();
            
            setField(splitLevel)
        }

    }, [seconds, startPoint, endPoint])

    // return field;
    return [
        field,
        buttonLeft,
        buttonRight,
    ];
};
