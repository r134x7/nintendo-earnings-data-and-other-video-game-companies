import { useEffect, useState } from "react";
import { Text, Button, Space, Collapse, Autocomplete, NativeSelect, ColorPicker } from "@mantine/core"
import "../App.css";
import { useInterval } from "@mantine/hooks";
import { useDispatch } from "react-redux";
import { ADD_BACKGROUND_COLOUR } from "../features/backgroundReducer";
import NINTENDO_FY3_22 from "../components/NINTENDO_FY3_2022";

const yearsList: any = []; // empty array 
Array.from({length: 6}, (v, i) => i).map(x => x = 1).reduce((acc, curr) => yearsList.push("FY3/" + (acc + curr + 2016).toString()), 0) // yearsList gets an array containing years from 2017 to 2022


// const coloursList = ["gray", "blue", "cyan", "dark", "grape", "green", "indigo", "lime", "orange", "pink", "red", "teal", "violet", "yellow"]
const coloursList = ["rgba(52, 58, 64, 0.2)", "#2C2E33"]



export default function Nintendo() {

    const dispatch = useDispatch();

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
            <Text mb="sm" style={{textAlign: "center"}} sx={textColour} size="lg">{text}</Text>
            <Autocomplete
                mb="sm"
                placeholder="Select"
                label="Select Fiscal Year"
                description={`Fiscal Year ending March ${(Number(year.slice(4,8))) ? year.slice(4,8) : "" }. (Type in the last two digits of the year to search quicker except 2020.)`}
                radius="xl"
                size="md"
                limit={yearsList.length}
                data={yearsList}
                value={year} 
                onChange={setYear}
            />

            <ColorPicker 
                    mb="sm" 
                    swatchesPerRow={7} 
                    format="rgb" 
                    value={colour} 
                    onChange={setColour}
                    />

            {(year === "FY3/2022")
                ? <NINTENDO_FY3_22 />
                : null}
        </div>

    );
}