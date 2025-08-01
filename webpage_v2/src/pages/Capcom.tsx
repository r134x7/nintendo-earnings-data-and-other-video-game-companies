import { useState } from "react";
import { Group, SegmentedControl, Anchor, Stack, Code, Select } from "@mantine/core"
import { useSelector } from "react-redux";
import CAPCOM_COMPONENT from "../components/CAPCOM_COMPONENT";
import CAPCOM_CML from "../components/special/CAPCOM_CML";
import type { BackgroundColours } from "../features/backgroundReducer";

import { liner, printTextBlock, useSingleMessage } from "../utils/table_design_logic";

const currentFiscalYear = 2026
const yearRange = currentFiscalYear - 1998;

const yearsList = Array.from({length: yearRange + 1}, (elem, index) => "FY3/" + (currentFiscalYear - index)) 

export default function Capcom() {

    const linkOther = liner(printTextBlock("While you're here, you can head to Install Base to read about the mysterious Sega Super Genesis 32.",40),"=","top",true,40);

    const message = `Capcom (They publish Remember Me), this is where you can find archived Capcom Platinum Titles data.`;

    const makeText = useSingleMessage(message,40,"−",80);

    const [value, setValue] = useState("Data by Fiscal Year");
    const [year, setYear] = useState<string | null>("");

    const stateColour = useSelector((state: BackgroundColours) => state.colour);
    const stateFontColor = useSelector((state: BackgroundColours) => state.fontColor);

    const selectYearComponentNew = (yearsList: string[]) => 
    (yearUsed: string): JSX.Element | null => {

        // let [yearSelected] = yearsList.filter(elem => yearUsed === elem);

        let [yearIndexed] = yearsList.map((elem, index) => {  
                                return (yearUsed === elem)
                                        ? index
                                        : -1
                               }).filter(elem => elem !== -1);
        
        let yearsLength = yearsList.length;

        return (yearIndexed >= 0) ? <CAPCOM_COMPONENT setIndex={yearIndexed} yearLength={yearsLength} /> : null
    };

    const selectYear = selectYearComponentNew(yearsList)    

    return (

        <div>
            <Stack mb="md" align="center">
            <Code style={{backgroundColor:`${stateColour}`, color:(stateFontColor === "dark") ? "#fff" : "#000000"}} block>
                {makeText}
            </Code>
            </Stack>
            <Stack align="center">
            <Code style={{backgroundColor:`${stateColour}`, color:(stateFontColor === "dark") ? "#fff" : "#000000"}} block>
                {linkOther}
                    <Anchor className="fade" style={{textAlign: "center"}} mb="sm" href="https://www.installbaseforum.com/forums/threads/ggx2ac-and-the-mysterious-case-of-the-sega-trademark-super-genesis-32.915/" target="_blank" >
                    <Code style={{backgroundColor:`${stateColour}`, color:(stateFontColor === "dark") ? "#fff" : "#000000"}} block>
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

                <Select
                    dropdownPosition="bottom"
                    mb="sm"
                    mr="md"
                    placeholder="Select"
                    label={`Select a Fiscal Year from ${currentFiscalYear - (yearsList.length-1)} to ${currentFiscalYear}.`}
                    description={`Fiscal Year ending March ${(Number(year?.slice(4,8))) ? year?.slice(4,8) : "" }.`}
                    radius="xl"
                    size="md"
                    data={yearsList}
                    value={year} 
                    onChange={setYear}
                />
            </Group>
                : <CAPCOM_CML />
            }

            {   (value === "Data by Fiscal Year" && typeof year === "string")
                ? selectYear(year)
                : null
            }
        </div>

    );
}