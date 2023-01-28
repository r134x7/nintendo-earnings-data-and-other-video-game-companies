import { Code, Space } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import { useState, useEffect } from "react";
import { liner, spacer, printTextBlock } from "../../utils/table_design_logic";
import gameFiveScript from "../../gameScript/gameFive/script.json";

export default function GAME_FIVE() {

    const [line, setLine] = useState(0);

    const intro = gameFiveScript.intro?.[line] ?? "Nil";

    const splitIntro = (intro + " ").split("");
    // I need to create a function to handle the script...

    const [text, setText] = useState("");

    const [textBlock, setTextBlock] = useState("");

    const [seconds, setSeconds] = useState(0);
    const interval = useInterval(() => setSeconds((s) => s + 1), 80);

    useEffect(() => {
        if (seconds === splitIntro.length) {
            interval.stop();
        } else {
            interval.start();

            setText(text + splitIntro[seconds])

            setTextBlock(liner(printTextBlock(text + " ".repeat(intro.length-text.length),40),"−","both",true,40))
        }

    }, [seconds])


    return (
        <div>
            <Code style={{backgroundColor: `rgba(0, 255, 255,0.2)`}} block>
            {textBlock}
            </Code>
            <Space h="xl" />
        </div>
    )
}