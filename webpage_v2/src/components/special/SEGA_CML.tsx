import { useEffect, useState } from "react";
import { Code, SegmentedControl, Space, TextInput, Select } from "@mantine/core";
import { useSelector } from "react-redux";
import { segaSammySalesPerSoftwareUnitCml } from "../../data/generalTables/sales_per_software_unit_cml";
import { cumulativeEarningsListSegaSammy } from "../../data/generalTables/consolidated_earnings_cml_data";
import { fyTitlesSegaSammy } from "../../data/sega/annual_report_cml_sega_data";
import { softwareCumulativeSegaSammy } from "../../data/sega/software_units_sega_cml_data";
import type { searchTitles } from "../../data/capcom/platinum_titles_Capcom";
import type { titleSet } from "../../data/capcom/game_series_sales_capcom_cml_data";

import {cite, citeCopy} from "../../utils/copySetCitation";

export default function SEGA_CML() {

    const [value, setValue] = useState("");

    const [titleValue, setTitleValue] = useState("");
    const [titlesLength, setTitlesLength] = useState(0)
    const [platformValue, setPlatformValue] = useState<string | null>("All" ?? "All");

    const state: any = useSelector(state => state);

    function filterTitles<T extends searchTitles | titleSet>(input: T[]) {

        return input.filter(elem => (titleValue === "") ? elem : elem.title.toLowerCase().includes(titleValue.toLowerCase()))
    }

    let filterSoftwareCumulative = filterTitles<titleSet>(softwareCumulativeSegaSammy.titleList);

    let softwareCumulativeReduce = filterSoftwareCumulative.reduce((acc, next) => acc + next.table,"");

    let softwareCumulativeList = softwareCumulativeSegaSammy.header + softwareCumulativeReduce;

    const textInputValues = [
        {
           value: "Sega Sammy Software Units - Cumulative",
           placeholder: "Search specific titles or game series",
           label: `Title/Series Search - Number of Titles/Series shown: ${titlesLength}`,
           description: "Clear field to show all titles of the selected platform", 
        },
        // {
        //    value: "Capcom FY Game Series - Cumulative",
        //    placeholder: "Search specific series",
        //    label: `Series Search - Number of game series shown: ${seriesListCheck}`,
        //    description: "Clear field to show all game series listed.", 
        // },
        // {
        //    value: "Capcom Software Platform Shipments - Cumulative",
        //    placeholder: "Search specific platform",
        //    label: `Platform Search - Sets of platforms shown: ${softwareShipmentsListCheck}`,
        //    description: "Clear field to show all platforms.", 
        // }
    ].filter(elem => elem.value === value);

    
    useEffect(() => {
        // setting up a setValue here rather than mutating a value outside the function... i.e. side effect
        if (value === "Sega Sammy Software Units - Cumulative") {
            setTitlesLength(filterSoftwareCumulative.length)
        }

    }, [titleValue])

    const componentList = [
        {
            name: "Sega Sammy Consolidated Operating Results - Cumulative",
            value: cumulativeEarningsListSegaSammy
        },
        {
            name: "Sega Sammy Sales Per Software Unit - Cumulative",
            value: segaSammySalesPerSoftwareUnitCml 
        },
        {
            name: "Sega Sammy Software Units - Cumulative",
            // value: softwareCumulativeSegaSammy
            value: softwareCumulativeList
        },
        {
            name: "Sega Sammy FY Series IP - Cumulative",
            value: fyTitlesSegaSammy
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
                {(value === "Sega Sammy Software Units - Cumulative")
                    ? <TextInput
                    placeholder={textInputValues[0].placeholder}
                    label={textInputValues[0].label}
                    description={textInputValues[0].description}
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
