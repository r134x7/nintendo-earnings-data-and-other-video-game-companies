import { useInterval } from "@mantine/hooks";
import { useState, useEffect } from "react";

export const printTextBlock = (text: string | undefined, blockLength: number): string | undefined => {
    // to make liner work by not printing.
    if (text === undefined) {
        return undefined;
    }
        let textSplit: string[] = text.split(" ");
         
        let arrayCheckText = 0; // a mutating variable for splicing textSplit below in textReduce

        let printText: string = Array.from({length:Math.ceil((text.length + textSplit.length)/blockLength)}, (v,i) => {

            let textSplice = textSplit.slice(arrayCheckText)

            let nextCheckAlert = false;
            
            let textReduce = textSplice.reduce((prev, next) => 
            {
                if (nextCheckAlert) { // if this isn't here and next is small enough to pass the next if statement then words end up missing due to the arrayCheckText + increment
                    return prev
                }

                let nextCheck = prev + " " + next + " ";
                
                if (nextCheck.length > blockLength) {
                    nextCheckAlert = true;
                    return prev // repeat prev until reduce finishes
                } 
                
                arrayCheckText++ 

                return prev + " " + next
                
            }, "")

            let textFixed = (textReduce.length >= blockLength || textReduce.length === 0) // latter condition is to return an empty array
                ? textReduce
                : textReduce + " ".repeat(blockLength - textReduce.length)
                
            // need to use flat not filter to prevent never[] type issue
            return (textFixed.length === 0) 
                ? []
                : "|" + textFixed + "|"

        }).flat().reduce((prev, next) => prev + "\n" + next)
        
        return printText
};

export const spacer = (text: string, length: number, align: "left" | "right"): string => {
        return (text.length >= length)
            ? text
            : (align === "right")
                ? " ".repeat(length - text.length) + text + " "
                : " " + text + " ".repeat(length - text.length)
    };

export const border = (textArray: string[], newLine?: true): string => {
        let setText = (textArray.length < 2)
            ? "|" + textArray[0] + "|"
            : textArray.reduce((acc, next, index) => {
            return (index === textArray.length-1)
                ? acc + "|" + next + "|"
                : acc + "|" + next 
        }, "")

        return (newLine === undefined)
            ? setText
            : setText + "\n";
    };

export const liner = (text: string | undefined, lineStyle: "−" | "=" | "#", position: "top" | "bottom" | "both", newLine?: true, lineLengthCustom?: number): string => {
    // to make printTextBlock miscChecks simpler.
    if (text === undefined) {
        return "";
    }
        let line = (lineLengthCustom === undefined) 
            ? `+${lineStyle.repeat(text.length-2)}+`
            : `+${lineStyle.repeat(lineLengthCustom)}+`; 

        let setPosition = (position === "top")
            ? line + "\n" + text
            : (position === "bottom")
                ? text + "\n" + line
                : line + "\n" + text + "\n" + line;

        return (newLine === undefined)
            ? setPosition
            : setPosition + "\n";
    };

export const headerPrint = (headerArray: string[], blockLength: number) => {
    return Array.from({length:headerArray.length}, (v,i) => {

        return (i === headerArray.length-1)
            ? liner(border([spacer(headerArray[i], blockLength, "left")]), "−","both")
            : liner(border([spacer(headerArray[i], blockLength, "left")]), "−","top", true)
    }).reduce((acc, next) => acc + next);
};

export const dateLabel = (latestFiscalYear: string, currentQuarter: number) => {
    
    let fiscalYear = latestFiscalYear.slice(4);
    let lastYear = (Number(fiscalYear) - 1).toString();

    let fyEndingMarchDates = [
        `June 30th, ${lastYear}`,
        `September 30th, ${lastYear}`,
        `December 31st, ${lastYear}`,
        `March 31st, ${fiscalYear}`,
    ].filter((elem, index) => index === currentQuarter - 1);

    return `Data as of ${fyEndingMarchDates}`
};

export function useSingleMessage(textInput: string, blockLength: number, borderStyle: "=" | "−", milliseconds: number): string {

    let splitText = textInput.split("");

    const [text, setText] = useState("");
    const [textBlock, setTextBlock] = useState("");
    const [seconds, setSeconds] = useState(0);

    const interval = useInterval(() => setSeconds((s) => s + 1), milliseconds);

    useEffect(() => {
        if (seconds === splitText.length + 1) {
            interval.stop();
        } else {
            interval.start();
            
            setText(text + splitText[seconds])

            setTextBlock(liner(printTextBlock(text + " ".repeat(textInput.length - text.length),blockLength), borderStyle,"both",true,blockLength))
        }

    }, [seconds])

    return textBlock;
};

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