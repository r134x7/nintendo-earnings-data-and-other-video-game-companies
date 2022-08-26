import { useEffect, useState } from "react";
import { Text, Group, Button, Space, Collapse, Autocomplete, NativeSelect, ColorPicker, Anchor, Stack, Paper } from "@mantine/core"
import "../App.css";
import { useInterval } from "@mantine/hooks";
import { useSelector, useDispatch } from "react-redux";
import { ADD_BACKGROUND_COLOUR } from "../features/backgroundReducer";
import NINTENDO_FY3_17 from "../components/NINTENDO_FY3_2017";
import NINTENDO_FY3_18 from "../components/NINTENDO_FY3_2018";
import NINTENDO_FY3_19 from "../components/NINTENDO_FY3_2019";
import NINTENDO_FY3_20 from "../components/NINTENDO_FY3_2020";
import NINTENDO_FY3_21 from "../components/NINTENDO_FY3_2021";
import NINTENDO_FY3_22 from "../components/NINTENDO_FY3_2022";
import NINTENDO_CML from "../components/NINTENDO_CML";

const yearsList = Array.from({length: 7}, (elem, index) => 
                    {
                      return (index === 0)
                            ? "Special Page"
                            : "FY3/" + (index + 2016)
                    }) // creates an array of length 6 and iterates through the array

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
                    dropdownPosition="bottom"
                    mb="sm"
                    mr="md"
                    placeholder="Select"
                    label="Select Fiscal Year from 2017 to 2022, (or visit the special page)."
                    description={`Fiscal Year ending March ${(Number(year.slice(4,8))) ? year.slice(4,8) : "" }. (Type in the last two digits of the year to search quicker except 2020.)`}
                    radius="xl"
                    size="md"
                    limit={5}
                    data={yearsList}
                    value={year} 
                    onChange={setYear}
                />
                
                <Paper style={{backgroundColor: state.colour}} p="xs" radius="xl" withBorder>
                <Text size="sm" >
                Colour: {state.colour}
                </Text>    
                <ColorPicker 
                        withPicker={false}
                        mb="sm" 
                        swatchesPerRow={7} 
                        format="rgb" 
                        swatches={[
                            "rgb(0, 0, 0)", 
                            "rgb(0, 255, 255)", 
                            "rgb(0, 128, 128)",
                            "rgb(0, 0, 255)", 
                            "rgb(75, 0, 130)", 
                            "rgb(135, 30, 135)", 
                            "rgb(255, 0, 255)", 
                            "rgb(86, 29, 37)",
                            "rgb(173, 255, 47)",
                            "rgb(127, 184, 0)",
                            "rgb(0, 255, 0)", 
                            "rgb(128, 128, 128)",
                            "rgb(255, 0, 0)",
                            "rgb(227, 24, 9)",
                            "rgb(220, 20, 60)", 
                            "rgb(212, 81, 19)", 
                            "rgb(255, 165, 0)", 
                            "rgb(255, 215, 0)",
                            "rgb(200, 200, 200)",
                            "rgb(255, 196, 235)",
                            "rgb(255, 255, 255)", 
                        ]}
                        value={colour} 
                        onChange={setColour}
                        />
                        </Paper>

            </Group>

            {   (year === "FY3/2022")
                ? <NINTENDO_FY3_22 />
                : (year === "FY3/2021") 
                ? <NINTENDO_FY3_21 />
                : (year === "FY3/2020")
                ? <NINTENDO_FY3_20 />
                : (year === "FY3/2019")
                ? <NINTENDO_FY3_19 />
                : (year === "FY3/2018")
                ? <NINTENDO_FY3_18 />
                : (year === "FY3/2017")
                ? <NINTENDO_FY3_17 />
                : (year === "Special Page")
                ? <NINTENDO_CML />
                : null
            }
            
            { (year !== "")
                ? (
                <Group position="center">
                    <Space h="xl" />
                    <Paper style={{backgroundColor: state.colour}} p="xs" radius="xl" withBorder>
                        <Text size="sm" >
                        Colour: {state.colour}
                        </Text>    
                    <ColorPicker 
                        withPicker={false}
                        mb="sm" 
                        swatchesPerRow={7} 
                        format="rgb" 
                        swatches={[
                            "rgb(0, 0, 0)", 
                            "rgb(0, 255, 255)", 
                            "rgb(0, 128, 128)",
                            "rgb(0, 0, 255)", 
                            "rgb(75, 0, 130)", 
                            "rgb(135, 30, 135)", 
                            "rgb(255, 0, 255)", 
                            "rgb(86, 29, 37)",
                            "rgb(173, 255, 47)",
                            "rgb(127, 184, 0)",
                            "rgb(0, 255, 0)", 
                            "rgb(128, 128, 128)",
                            "rgb(255, 0, 0)",
                            "rgb(227, 24, 9)",
                            "rgb(220, 20, 60)", 
                            "rgb(212, 81, 19)", 
                            "rgb(255, 165, 0)", 
                            "rgb(255, 215, 0)",
                            "rgb(200, 200, 200)",
                            "rgb(255, 196, 235)",
                            "rgb(255, 255, 255)", 
                        ]}
                        value={colour} 
                        onChange={setColour}
                        />
                        </Paper>
                </Group>
                ) : (
                    null
                )
            }
        </div>

    );
}