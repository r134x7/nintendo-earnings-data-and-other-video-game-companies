import { useEffect, useState } from "react";
import { Group, SegmentedControl, Autocomplete, Anchor, Stack, Code} from "@mantine/core"
import "../App.css";
import { useInterval } from "@mantine/hooks";
import { useSelector } from "react-redux";
import SEGA_COMPONENT from "../components/SEGA_COMPONENT";
import SEGA_CML from "../components/special/SEGA_CML";

import { liner, printTextBlock } from "../utils/table_design_logic";

const currentYear = 2023;

const yearsList = Array.from({length: 19}, (elem, index) => 
                    {
                            return "FY3/" + (currentYear - index)
                    }) 

export default function Sega() {

    const linkOther = liner(printTextBlock("While you're here, you can head to Install Base to read about the mysterious Sega Super Genesis 32.",40),"=","top",true,40);

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

    const state: any = useSelector(state => state);

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
            <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
                {textBlock}
            </Code>
            </Stack>
            <Stack align="center">
            <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
                {linkOther}
                    <Anchor className="fade" style={{textAlign: "center"}} mb="sm" href="https://www.installbaseforum.com/forums/threads/ggx2ac-and-the-mysterious-case-of-the-sega-trademark-super-genesis-32.915/" target="_blank" >
                    <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
                        {liner(printTextBlock("Link to Install Base Forum thread",36),"=","both",true,36)}
                    </Code>
                </Anchor>
            </Code>
            </Stack>
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