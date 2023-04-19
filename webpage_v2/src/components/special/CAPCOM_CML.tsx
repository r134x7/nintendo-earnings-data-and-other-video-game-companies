import { useState } from "react";
import { Code, SegmentedControl, Space, TextInput, Select } from "@mantine/core";
import { useSelector } from "react-redux";
import { printSpecialList } from "../../data/capcom/platinum_titles_Capcom";
import { CapcomSalesPerSoftwareUnitCml } from "../../data/generalTables/sales_per_software_unit_cml";
import { cumulativeEarningsListCapcom } from "../../data/generalTables/consolidated_earnings_cml_data";
import { fyTitlesCapcom } from "../../data/capcom/game_series_sales_capcom_cml_data";
import { factBookCapcom } from "../../data/capcom/software_shipments_capcom_cml_data";

import {cite, citeCopy} from "../../utils/copySetCitation";

// mutating this variable is the only way I can get this to reliably work
let titleListCheck = 0;

export default function CAPCOM_CML() {

    const [value, setValue] = useState("");

    const [titleValue, setTitleValue] = useState("");
    const [platformValue, setPlatformValue] = useState<string | null>("All" ?? "All");

    const state: any = useSelector(state => state);

    let filteredPlatforms = printSpecialList.titleData.filter(elem => (platformValue === "" || platformValue === "All") ? elem : elem.platforms.includes((platformValue === "NES") 
        ? "NES"
        : platformValue === "SNES"
            ? "SNES" 
            : platformValue ?? "All"));

    let filterTitles = filteredPlatforms.filter(elem => (titleValue === "") ? elem : elem.title.toLowerCase().includes(titleValue))

    // forgot that I could have applied a useEffect but this method works fine
    titleListCheck = filterTitles.length;

    // this creates recursion because you are re-rendering here at this point at all times
    // setTitlesLength(filterTitles.length);
    
    let titlesReduce = filterTitles.reduce((acc, next) => acc + next.table, "");

    let completeSpecialList = printSpecialList.header + printSpecialList.date + titlesReduce + printSpecialList.platformsNote;

    // const [titlesLength, setTitlesLength] = useState(filterTitles.length); 

    const componentList = [
        {
            name: "Capcom Consolidated Financial Results - Cumulative",
            value: cumulativeEarningsListCapcom
        },
        {
            name: "Capcom Platinum Titles - Cumulative",
            // value: printSpecialList 
            value: completeSpecialList
        },
        {
            name: "Capcom Sales Per Software Unit - Cumulative",
            value: CapcomSalesPerSoftwareUnitCml
        },
        {
            name: "Capcom Software Platform Shipments - Cumulative",
            value: factBookCapcom 
        },
        {
            name: "Capcom FY Game Series - Cumulative",
            value: fyTitlesCapcom
        },
    ];

    const dataList = componentList.map(elem => elem.name);

    const selectDataComponent = (objList: {name: string, value: string}[]) =>
    (dataUsed: string): string => {

        let [dataSelected] = objList.filter(elem => dataUsed === elem.name)

        return (dataSelected) ? dataSelected.value : ""
    };

    const selectData = selectDataComponent(componentList);

    return (

        <div>  
            <SegmentedControl
                    fullWidth 
                    orientation="vertical"
                    value={value}
                    onChange={setValue}
                    data={dataList}
            />
            
            <Code onCopy={e => citeCopy(e, cite)} style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
                {(value === "Capcom Platinum Titles - Cumulative")
                    ? <Select
                        data={[
                         "All",
                         "NES",
                         "SNES",
                         "GB",
                         "GBA",
                         "3DS",
                         "GC",
                         "MD",
                         "DC",
                         "PS",
                         "PS2",
                         "PS3",
                         "PS4",
                         "PS5",
                         "PSP",
                         "DL",
                         "NSW",
                         "XSX",
                     ]}
                    defaultValue={"All"} 
                    label="Select all or one platform:"
                    radius="xl"
                    value={platformValue}
                    onChange={setPlatformValue}
                  /> 
                    : undefined
                }
                {(value === "Capcom Platinum Titles - Cumulative")
                    ? <TextInput
                    placeholder="Search specific titles (use lower case)"
                    label={`Title Search - Number of Titles shown: ${titleListCheck}`}
                    description="Clear field to show all titles of the selected platform"
                    radius="xl"
                    value={titleValue}
                    onChange={e => {
                        setTitleValue(e.target.value)
                    }}
                    />  
                    : undefined
                }
                {selectData(value)}
                </Code>
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
    );
}
