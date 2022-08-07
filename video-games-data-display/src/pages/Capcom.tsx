import { useEffect, useState } from "react";
import { Text, Group, Button, Space, Collapse, Autocomplete, NativeSelect, ColorPicker, Stack, Paper, Anchor } from "@mantine/core"
import "../App.css";
import { useInterval } from "@mantine/hooks";
import { useDispatch } from "react-redux";
import { ADD_BACKGROUND_COLOUR } from "../features/backgroundReducer";

const yearsList: any = []; // empty array 
Array.from({length: 6}, (v, i) => i).map(x => x = 1).reduce((acc, curr) => yearsList.push("FY3/" + (acc + curr + 2016).toString()), 0) // yearsList gets an array containing years from 2017 to 2022

export default function Capcom() {

    const dispatch = useDispatch();

    const message = `Welcome, this is where you can find archived Capcom Platinum Titles data... when it becomes available.`;

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

    const [year, setYear] = useState("");

    const [colour, setColour] = useState("rgb(52, 58, 64)")

    useEffect(() => {
        const colourSplitReduce = colour.split("").reduce((acc, curr) => {
            return (curr === "b")
                ? acc + "ba"
                : (curr === ")")
                ? acc + ", .20)"
                : acc + curr
        }, "") // using reduce to create an rgba colour with 20% opacity so that the user only has to use an RGB slider.
               
        dispatch(ADD_BACKGROUND_COLOUR({
            colour: colourSplitReduce
        }))

    }, [colour])

    return (

        <div>
            <Stack mb="md" align="center">
            <Paper shadow="sm" radius="lg" p="md" withBorder>
                <Text style={{textAlign: "center"}} sx={textColour} size="lg">{text}</Text>
            </Paper>
            </Stack>
            <Paper mb="md" shadow="sm" radius="xl" p="md" withBorder>
            <Stack align="center">
                <Text className="fade" mt="md" style={{textAlign: "center"}} size="lg">You should head to Install Base where my Capcom Platinum Titles data can be seen.</Text>
                    <Anchor className="fade" style={{textAlign: "center"}} mb="sm" href="https://www.installbaseforum.com/forums/threads/capcom-platinum-titles-for-fy3-23-as-of-june-30th-2022-34-109-titles-had-sales-this-quarter-two-new-titles-appear.965/" target="_blank" >
                    https://www.installbaseforum.com/forums/threads/capcom-platinum-titles-for-fy3-23-as-of-june-30th-2022-34-109-titles-had-sales-this-quarter-two-new-titles-appear.965/
                    </Anchor>
            </Stack>
            </Paper>
        </div>

    );
}