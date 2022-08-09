import { useEffect, useState } from "react";
import { Text, Group, Button, Space, Collapse, Autocomplete, NativeSelect, ColorPicker, Anchor, Stack, Paper } from "@mantine/core"
import "../App.css";
import { useInterval } from "@mantine/hooks";
import { useDispatch } from "react-redux";
import { ADD_BACKGROUND_COLOUR } from "../features/backgroundReducer";
import NINTENDO_FY3_22 from "../components/NINTENDO_FY3_2022";

const yearsList: string[] = []; // empty array 
Array.from({length: 6}, (v, i) => i).map(x => x = 1).reduce((acc, curr) => yearsList.push("FY3/" + (acc + curr + 2016).toString()), 0) // yearsList gets an array containing years from 2017 to 2022

// const coloursList = ["rgba(52, 58, 64, 0.2)", "#2C2E33"]

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

    const [colour, setColour] = useState("rgb(0, 0, 0)")

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
            <Paper mb="md" shadow="sm" radius="xl" p="xs" withBorder>
            <Stack align="center">
                <Text className="fade" mt="md" style={{textAlign: "center"}} size="lg">Don't forget to visit Install Base where it has the latest Nintendo earnings data from me.</Text>
                    <Anchor className="fade" style={{textAlign: "center"}} mb="sm" href="https://www.installbaseforum.com/forums/threads/nintendo-fy3-2023-q1-earnings-release-switch-hardware-q1-3-43m-units-22-9-yoy-111-08m-units-ltd.967/" target="_blank" >
                        Nintendo FY3/2023 Q1 Earnings Release, Switch Hardware Q1 - 3.43M units ( -22.9% YoY), 111.08M units LTD
                    </Anchor>
            </Stack>
            </Paper>
            <Group position="center">

                <Autocomplete
                    mb="sm"
                    mr="md"
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

            </Group>

            {   (year === "FY3/2022")
                ? <NINTENDO_FY3_22 />
                : (year === "FY3/2021") 
                ? <Text>There is no data here yet, search FY3/2022 for data.</Text>
                : (year === "FY3/2020")
                ? <Text>There is no data here yet, search FY3/2022 for data.</Text>
                : (year === "FY3/2019")
                ? <Text>There is no data here yet, search FY3/2022 for data.</Text>
                : (year === "FY3/2018")
                ? <Text>There is no data here yet, search FY3/2022 for data.</Text>
                : (year === "FY3/2017")
                ? <Text>There is no data here yet, search FY3/2022 for data.</Text>
                : null
            }
        </div>

    );
}