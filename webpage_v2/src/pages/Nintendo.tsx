import { useEffect, useState } from "react";
import { Text, Group, SegmentedControl, Autocomplete, Anchor, Stack, Paper, Code} from "@mantine/core"
import "../App.css";
import { useInterval } from "@mantine/hooks";
import { useSelector, useDispatch } from "react-redux";
import { ADD_BACKGROUND_COLOUR } from "../features/backgroundReducer";
import NINTENDO_CML from "../components/special/NINTENDO_CML";
import NINTENDO_COMPONENT from "../components/NINTENDO_COMPONENT";

import { liner, printTextBlock } from "../utils/table_design_logic";

const currentYear = 2023;

const yearsList = Array.from({length: 20}, (elem, index) => 
                    {
                            return "FY3/" + (currentYear - index)
                    }) // FY3/2017 to FY3/2023 at length: 7

// const coloursList = ["rgba(52, 58, 64, 0.2)", "#2C2E33"]

export default function Nintendo() {

    const dispatch = useDispatch();

    const message = `Nintendo (They publish playing cards), this is where you can find archived Nintendo earnings data. `;

    // const border = "+" + "−".repeat(93) + "+";

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

    const [value, setValue] = useState("Data by Fiscal Year");
    const [year, setYear] = useState("");

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

        return (yearIndexed >= 0) ? <NINTENDO_COMPONENT setIndex={yearIndexed} yearLength={yearsLength} /> : null
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
            <Paper mb="md" shadow="sm" radius="xl" p="xs" withBorder>
            <Stack align="center">
                <Text className="fade" mt="md" style={{textAlign: "center"}} size="lg">For more in-depth historical data, visit Install Base and look at Celine's thread:</Text>
                    <Anchor className="fade" style={{textAlign: "center"}} mb="sm" href="https://www.installbaseforum.com/forums/threads/nintendo-software-and-hardware-sales-data-from-1983-to-present.170/" target="_blank" >
                     [ Install Base ]: Nintendo software and hardware sales data from 1983 to present
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
                    limit={3}
                    data={yearsList}
                    value={year} 
                    onChange={setYear}
                />
            </Group>
                : <NINTENDO_CML />
            }

            {   (value === "Data by Fiscal Year")
                ? selectYear(year)
                : null
            }
        </div>

    );
}