import { useState } from "react";
import { Group, SegmentedControl, Select, Anchor, Stack, Code } from "@mantine/core"
import { useSelector } from "react-redux";
import KONAMI_COMPONENT from "../components/KONAMI_COMPONENT";
import KONAMI_CML from "../components/special/KONAMI_CML";
import type { BackgroundColours } from "../features/backgroundReducer";

import { liner, printTextBlock, useSingleMessage } from "../utils/table_design_logic";

const currentYear = 2024;
const yearRange = currentYear - 2013;

const yearsList = Array.from({length: yearRange + 1}, (elem, index) => "FY3/" + (currentYear - index)) 

export default function KoeiTecmo() {

    const linkOther = liner(printTextBlock("Also, visit Install Base. It's a place to discuss and elaborate on the business side of the video game industry.",40),"=","top",true,40);

    const message = `Konami (They publish Metal Gear Solid), this is where you can find archived data.`;

    const makeText = useSingleMessage(message,40,"−",80)

    const [year, setYear] = useState<string | null>("");
    const [value, setValue] = useState("Data by Fiscal Year");

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

        return (yearIndexed >= 0) ? <KONAMI_COMPONENT setIndex={yearIndexed} yearLength={yearsLength} /> : null
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
                    <Anchor className="fade" style={{textAlign: "center"}} mb="sm" href="https://www.installbaseforum.com/" target="_blank" >
                    <Code style={{backgroundColor:`${stateColour}`, color:(stateFontColor === "dark") ? "#fff" : "#000000"}} block>
                        {liner(printTextBlock("https://www.installbaseforum.com/",36),"=","both",true,36)}
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
                    label={`Select a Fiscal Year from ${currentYear - (yearsList.length-1)} to ${currentYear}.`}
                    description={`Fiscal Year ending March ${(Number(year?.slice(4,8))) ? year?.slice(4,8) : "" }.`}
                    radius="xl"
                    size="md"
                    data={yearsList}
                    value={year} 
                    onChange={setYear}
                />
            </Group>
                : <KONAMI_CML />
            }

            {   (value === "Data by Fiscal Year" && typeof year === "string")
                ? selectYear(year)
                : null
            }
        </div>

    );
}