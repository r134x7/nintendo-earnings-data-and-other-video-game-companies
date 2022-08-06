import { useEffect, useState } from "react";
import { Text, Button, Space, Collapse } from "@mantine/core"
import "../App.css";
import { useInterval } from "@mantine/hooks";


export default function Nintendo() {

    const message = `Welcome, this is where you can find archived Nintendo earnings data.`;

    const splitMessage = message.split("");

    const [text, setText] = useState("");
    const [textColour, setTextColour] = useState({})

    const [seconds, setSeconds] = useState(0);
    const interval = useInterval(() => setSeconds((s) => s + 1), 120);

    useEffect(() => {
        if (seconds === splitMessage.length) {
            setTextColour({ color: 'crimson', fontSize: 18, lineHeight: 1.4 });
            interval.stop();
        } else {
            interval.start();
            setText(text + splitMessage[seconds])
        }


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [seconds])




    return (

        <div>
            <Text style={{textAlign: "center"}} sx={textColour} size="lg">{text}</Text>
        </div>

    );
}