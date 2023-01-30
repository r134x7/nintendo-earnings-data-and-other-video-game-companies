import { useEffect, useState } from "react";
import { Text, Group, SegmentedControl, Autocomplete, Anchor, Stack, Paper, Code} from "@mantine/core"
import "../App.css";
import { useInterval } from "@mantine/hooks";
import { useSelector, useDispatch } from "react-redux";
import { ADD_BACKGROUND_COLOUR } from "../features/backgroundReducer";
import SEGA_COMPONENT from "../components/SEGA_COMPONENT";
import SEGA_CML from "../components/special/SEGA_CML";

import { liner, printTextBlock } from "../utils/table_design_logic";

const currentYear = 2023;

const yearsList = Array.from({length: 19}, (elem, index) => 
                    {
                            return "FY3/" + (currentYear - index)
                    }) 

export default function Sega() {

    const dispatch = useDispatch();

    const message = `Sega (They publish Hatsune Miku games), this is where you can find archived Sega Series IP data. `;

    const splitMessage = message.split("");

    const [text, setText] = useState("");

    const [textBlock, setTextBlock] = useState("");

    const [seconds, setSeconds] = useState(0);
    const interval = useInterval(() => setSeconds((s) => s + 1), 80);

    useEffect(() => {
        if (seconds === splitMessage.length) {
            interval.stop();
        } else {
            interval.start();

            setText(text + splitMessage[seconds])

            setTextBlock(liner(printTextBlock(text + " ".repeat(message.length-text.length),40),"−","both",true,40))
        }

    }, [seconds])

    const [year, setYear] = useState("");
    const [value, setValue] = useState("Data by Fiscal Year");

    const [colour, setColour] = useState("rgb(0, 255, 255)")

    const state: any = useSelector(state => state);

    useEffect(() => {
        const colourSplitReduce = colour.split("").reduce((acc, curr) => {
            return (curr === "b")
                ? acc + "ba"
                : (curr === ")")
                ? acc +", .20)"
                : acc + curr
        }, "") // using reduce to create an rgba colour with 20% opacity so that the user only has to use an RGB slider.
               
        dispatch(ADD_BACKGROUND_COLOUR({
            colour: colourSplitReduce
        }))

    }, [colour, dispatch])

    const selectYearComponentNew = (yearsList: string[]) => 
    (yearUsed: string): JSX.Element | null => {

        // let [yearSelected] = yearsList.filter(elem => yearUsed === elem);

        let [yearIndexed] = yearsList.map((elem, index) => {  
                                return (yearUsed === elem)
                                        ? index
                                        : -1
                               }).filter(elem => elem !== -1);

        let yearsLength = yearsList.length;

        return (yearIndexed >= 0) ? <SEGA_COMPONENT setIndex={yearIndexed} yearLength={yearsLength} /> : null
    };

    const selectYear = selectYearComponentNew(yearsList)    

    return (

        <div>
            <Stack mb="md" align="center">
            {/* <Paper shadow="sm" radius="lg" p="md" withBorder> */}
                {/* <Text style={{textAlign: "center"}} sx={borderColour} size="xl">{border}</Text> 
                <Text sx={textColour} size="lg">{text}</Text>
                <Text style={{textAlign: "center"}} sx={borderColour} size="xl">{border}</Text>  */}
            {/* </Paper> */}
            <Code style={{backgroundColor: `${state.colour}`}} block>{textBlock}</Code>
            </Stack>
            <Paper mb="md" shadow="sm" radius="xl" p="md" withBorder>
            <Stack align="center">
                <Text className="fade" mt="md" style={{textAlign: "center"}} size="lg">While you're here, read about the mysterious Sega Super Genesis 32.</Text>
                    <Anchor className="fade" style={{textAlign: "center"}} mb="sm" href="https://www.installbaseforum.com/forums/threads/ggx2ac-and-the-mysterious-case-of-the-sega-trademark-super-genesis-32.915/" target="_blank" >
                    ggx2ac and the mysterious case of the Sega trademark: Super Genesis 32
                    </Anchor>
            </Stack>
            </Paper>
            <SegmentedControl 
                mb="sm"
                mt="sm"
                fullWidth
                orientation="horizontal"
                value={value}
                onChange={setValue}
                data={[
                    "Data by Fiscal Year",
                    "Special Page",
                ]}
            />

            {
                (value === "Data by Fiscal Year")
                ? 
            <Group position="center">

                <Autocomplete
                    dropdownPosition="bottom"
                    mb="sm"
                    mr="md"
                    placeholder="Select"
                    label={`Select Fiscal Year from ${currentYear - (yearsList.length-1)} to ${currentYear}.`}
                    description={`Fiscal Year ending March ${(Number(year.slice(4,8))) ? year.slice(4,8) : "" }. (Type in the last two digits of the year to search quicker except 2020.)`}
                    radius="xl"
                    size="md"
                    limit={5}
                    data={yearsList}
                    value={year} 
                    onChange={setYear}
                />
            </Group>
                : <SEGA_CML />
            }

            {   (value === "Data by Fiscal Year")
                ? selectYear(year)
                : null
            }
        </div>

    );
}