import { useEffect, useState } from "react";
import { Text, Group, Space, Autocomplete, ColorPicker, Anchor, Stack, Paper} from "@mantine/core"
import "../App.css";
import { useInterval } from "@mantine/hooks";
import { useSelector, useDispatch } from "react-redux";
import { ADD_BACKGROUND_COLOUR } from "../features/backgroundReducer";

const yearsList = Array.from({length: 1}, (elem, index) => 
                    {
                            return "FY3/" + (2021 - index)
                    }) 

export default function Sega() {

    const dispatch = useDispatch();

    const message = `Bandai Namco (They publish Dark Souls) page, this is where you can find archived data... when it becomes available.`;

    const splitMessage = message.split("");

    const [text, setText] = useState("");
    const [textColour, setTextColour] = useState({})

    const [seconds, setSeconds] = useState(0);
    const interval = useInterval(() => setSeconds((s) => s + 1), 80);

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

    const [value, setValue] = useState("Data by Fiscal Year");
    const [year, setYear] = useState("");

    const [colour, setColour] = useState("rgb(0, 255, 255)")

    const state: any = useSelector(state => state);

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

    }, [colour, dispatch])

    return (

        <div>
            <Stack mb="md" align="center">
            <Paper shadow="sm" radius="lg" p="md" withBorder>
                <Text style={{textAlign: "center"}} sx={textColour} size="lg">{text}</Text>
            </Paper>
            </Stack>
            <Paper mb="md" shadow="sm" radius="xl" p="md" withBorder>
            <Stack align="center">
                <Text className="fade" mt="md" style={{textAlign: "center"}} size="lg">While you're here, read about the mysterious Sega Super Genesis 32.</Text>
                    <Anchor className="fade" style={{textAlign: "center"}} mb="sm" href="https://www.installbaseforum.com/forums/threads/ggx2ac-and-the-mysterious-case-of-the-sega-trademark-super-genesis-32.915/" target="_blank" >
                    ggx2ac and the mysterious case of the Sega trademark: Super Genesis 32
                    </Anchor>
            </Stack>
            </Paper>

        </div>

    );
}