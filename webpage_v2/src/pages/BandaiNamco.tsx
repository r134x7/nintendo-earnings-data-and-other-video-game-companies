import { useState } from "react";
import { Group, SegmentedControl, Anchor, Stack, Code, Select, Autocomplete } from "@mantine/core"
import { useSelector } from "react-redux";
import BANDAI_NAMCO_COMPONENT from "../components/BANDAI_NAMCO_COMPONENT";
import BANDAI_NAMCO_CML from "../components/special/BANDAI_NAMCO_CML";

import { liner, printTextBlock, useSingleMessage } from "../utils/table_design_logic";

const currentYear = 2023;

const yearsList = Array.from({length: 18}, (elem, index) => 
                    {
                            return "FY3/" + (currentYear - index)
                    }) 

export default function BandaiNamco() {

    const linkOther = liner(printTextBlock("While you're here, you can head to Install Base to read about the mysterious Sega Super Genesis 32.",40),"=","top",true,40);

    const message = `Bandai Namco (They publish Dark Souls), this is where you can find archived Series IP data.`;

    const makeText = useSingleMessage(message,42,"−",80);

    const [value, setValue] = useState("Data by Fiscal Year");
    const [year, setYear] = useState<string>("");

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

        return (yearIndexed >= 0) ? <BANDAI_NAMCO_COMPONENT setIndex={yearIndexed} yearLength={yearsLength} /> : null
    };

    const selectYear = selectYearComponentNew(yearsList)    

    return (

        <div>
            <Stack mb="md" align="center">
            <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
                {makeText}
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

                {/* <Select */}
                <Autocomplete
                    dropdownPosition="bottom"
                    mb="sm"
                    mr="md"
                    placeholder="Select"
                    label={`Select a Fiscal Year from ${currentYear - (yearsList.length-1)} to ${currentYear}.`}
                    description={`Fiscal Year ending March ${(Number(year?.slice(4,8))) ? year?.slice(4,8) : "" }.`}
                    radius="xl"
                    size="md"
                    data={yearsList}
                    value={year} 
                    onChange={setYear}
                />
            </Group>
                : <BANDAI_NAMCO_CML />
            }

            {   (value === "Data by Fiscal Year" && typeof year === "string")
                ? selectYear(year)
                : null
            }
        </div>

    );
}