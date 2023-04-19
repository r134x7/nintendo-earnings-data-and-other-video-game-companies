import { useState } from "react";
import { Code, SegmentedControl, Space, TextInput, Select } from "@mantine/core";
import { useSelector } from "react-redux";
import { printSpecialList } from "../../data/capcom/platinum_titles_Capcom";
import { CapcomSalesPerSoftwareUnitCml } from "../../data/generalTables/sales_per_software_unit_cml";
import { cumulativeEarningsListCapcom } from "../../data/generalTables/consolidated_earnings_cml_data";
import { fyTitlesCapcom } from "../../data/capcom/game_series_sales_capcom_cml_data";
import { factBookCapcom } from "../../data/capcom/software_shipments_capcom_cml_data";

import type { searchTitles } from "../../data/capcom/platinum_titles_Capcom";
import type { titleSet } from "../../data/capcom/game_series_sales_capcom_cml_data";

import {cite, citeCopy} from "../../utils/copySetCitation";

/*
reminder: resident evil 4 wii edition platforms are not up to date on platinum titles cumulative... need to check code for that...
*/

// mutating this variable is the only way I can get this to reliably work
let titleListCheck = 0;
let seriesListCheck = 0;
let softwareShipmentsListCheck = 0;

export default function CAPCOM_CML() {

    const [value, setValue] = useState("");

    const [titleValue, setTitleValue] = useState("");
    const [platformValue, setPlatformValue] = useState<string | null>("All" ?? "All");

    const state: any = useSelector(state => state);

    // single word regex \w+, 
    // two word spaced regex \w+\s?\w+
    let filteredPlatforms = printSpecialList.titleData.filter(elem => {

        if (platformValue === "All") {
            return elem
        } else if (platformValue === elem.platforms) {
            return elem
        } else if ([...elem.platforms.matchAll(/\w+\s?\w+/g)].flat().filter(value => value === platformValue).length > 0) {
            return elem
        }

    })  

    function filterTitles<T extends searchTitles | titleSet>(input: T[]) {

        return input.filter(elem => (titleValue === "") ? elem : elem.title.toLowerCase().includes(titleValue.toLowerCase()))
    }

    let filterPlatinumTitles = filterTitles<searchTitles>(filteredPlatforms);
            
    // let filterTitles = filteredPlatforms.filter(elem => (titleValue === "") ? elem : elem.title.toLowerCase().includes(titleValue.toLowerCase()))
    
    // forgot that I could have applied a useEffect but this method works fine
    titleListCheck = filterPlatinumTitles.length;

    // this creates recursion because you are re-rendering here at this point at all times
    // setTitlesLength(filterPlatinumTitles.length);
    
    let titlesReduce = filterPlatinumTitles.reduce((acc, next) => acc + next.table, "");

    let completeSpecialList = printSpecialList.header + printSpecialList.date + titlesReduce + printSpecialList.platformsNote;

    // let fyTitlesFilter = fyTitlesCapcom.titleList.filter(elem => (titleValue === "") ? elem : elem.title.toLowerCase().includes(titleValue.toLowerCase()));

    let fyTitlesFilter = filterTitles<titleSet>(fyTitlesCapcom.titleList)

    seriesListCheck = fyTitlesFilter.length;

    let fyTitlesReduce = fyTitlesFilter.reduce((acc, next) => acc + next.table, "")

    let fyGameSeriesList = fyTitlesCapcom.header + fyTitlesReduce;

    // let softwareShipmentsFilter = factBookCapcom.titleList.filter(elem => (titleValue === "") ? elem : elem.title.toLowerCase().includes(titleValue.toLowerCase()));

    let softwareShipmentsFilter = filterTitles<titleSet>(factBookCapcom.titleList);

    softwareShipmentsListCheck = softwareShipmentsFilter.length;

    let softwareShipmentsReduce = softwareShipmentsFilter.reduce((acc, next) => acc + next.table,"");

    let softwareShipmentsList = factBookCapcom.header + softwareShipmentsReduce;

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
            // value: factBookCapcom 
            value: softwareShipmentsList
        },
        {
            name: "Capcom FY Game Series - Cumulative",
            // value: fyTitlesCapcom
            value: fyGameSeriesList
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
                         "DL",
                         "XSX",
                         "PS5",
                         "NSW",
                         "PS4",
                         "Xbox One",
                         "Wii U",
                         "3DS",
                         "PS3",
                         "Wii",
                         "Xbox 360",
                         "PSP",
                         "GC",
                         "PS2",
                         "GBA",
                         "DC",
                         "PS",
                         "SNES",
                         "MD",
                         "GB",
                         "NES",
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
                    placeholder="Search specific titles"
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
                {(value === "Capcom FY Game Series - Cumulative")
                    ? <TextInput
                    placeholder="Search specific series"
                    label={`Series Search - Number of game series shown: ${seriesListCheck}`}
                    description="Clear field to show all game series listed."
                    radius="xl"
                    value={titleValue}
                    onChange={e => {
                        setTitleValue(e.target.value)
                    }}
                    />  
                    : undefined
                }
                {(value === "Capcom Software Platform Shipments - Cumulative")
                    ? <TextInput
                    placeholder="Search specific platform"
                    label={`Platform Search - Groups of platforms shown: ${softwareShipmentsListCheck}`}
                    description="Clear field to show all platforms."
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
