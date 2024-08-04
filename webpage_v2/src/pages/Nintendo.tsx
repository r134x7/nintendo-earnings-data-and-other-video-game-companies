import { useState } from "react";
import { Group, SegmentedControl, Select, Anchor, Stack, Code } from "@mantine/core"
import { useSelector } from "react-redux";
import NINTENDO_CML from "../components/special/NINTENDO_CML";
import NINTENDO_COMPONENT from "../components/NINTENDO_COMPONENT";
import type { BackgroundColours } from "../features/backgroundReducer";

import { liner, printTextBlock, useSingleMessage } from "../utils/table_design_logic";

const currentYear = 2025;
const yearRange = currentYear - 1981;

const yearsList = Array.from({length: yearRange + 1}, (elem, index) => 
                    {
                            return (currentYear - index <= 1989) 
                                ? "FY8/" + (currentYear - index)
                                : "FY3/" + (currentYear - index)
                    }) // FY3/2017 to FY3/2023 at length: 7

// const coloursList = ["rgba(52, 58, 64, 0.2)", "#2C2E33"]

export default function Nintendo() {

    const linkOther = liner(printTextBlock("For more in-depth historical data, visit Install Base and look at Celine's thread, link:",40),"=","top",true,40);

    const message = `Nintendo (They publish playing cards), this is where you can find archived Nintendo earnings data.`;

    const makeText = useSingleMessage(message, 40, "−", 80);

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

        return (yearIndexed >= 0) ? <NINTENDO_COMPONENT setIndex={yearIndexed} yearLength={yearsLength} /> : null
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
                    <Anchor className="fade" style={{textAlign: "center"}} mb="sm" href="https://www.installbaseforum.com/forums/threads/nintendo-software-and-hardware-sales-data-from-1983-to-present.170/" target="_blank" >
                    <Code style={{backgroundColor:`${stateColour}`, color:(stateFontColor === "dark") ? "#fff" : "#000000", padding: 0}} block>
                        {liner(printTextBlock("[Install Base]: Nintendo software and hardware sales data from 1983 to present",36),"=","both",true,36)}
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
                    description={`Fiscal Year ending ${(Number(year?.slice(4,8))) <= 1989 ? "August" : "March"} ${(Number(year?.slice(4,8))) ? year?.slice(4,8) : "" }.`}
                    radius="xl"
                    size="md"
                    data={yearsList}
                    value={year} 
                    onChange={setYear}
                />
            </Group>
                : <NINTENDO_CML />
            }

            {   (value === "Data by Fiscal Year" && typeof year === "string")
                ? selectYear(year)
                : null
            }
        </div>

    );
}