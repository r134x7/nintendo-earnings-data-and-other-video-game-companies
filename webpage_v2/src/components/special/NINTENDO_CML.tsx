import { useState, useEffect } from "react";
import { Code, SegmentedControl, Space, TextInput, Select } from "@mantine/core";
import { useSelector } from "react-redux";
import { printJapan, printGlobal, printOverseas } from "../../data/nintendo/Nintendo_Cumulative_Data/mst_cml_data";
import { cumulativeEarningsListNintendo } from "../../data/generalTables/consolidated_earnings_cml_data";
import { printGlobalHardwareSoftware, printGlobalSalesPerHardwareUnit } from "../../data/nintendo/Nintendo_Cumulative_Data/global_hardware_software_cml_data";
import { printJapanHardwareSoftware, printAmericasHardwareSoftware, printEuropeHardwareSoftware, printOtherHardwareSoftware } from "../../data/nintendo/Nintendo_Cumulative_Data/regional_hardware_software_cml_data";
import { printTopSellingTitles } from "../../data/nintendo/Nintendo_Cumulative_Data/top_selling_titles_cml_data";
import { printConsolidatedSalesInfo } from "../../data/nintendo/Nintendo_Cumulative_Data/consolidated_sales_information_cml_data";
import { filterTitles } from "../../utils/table_design_logic";
import type { titleSet } from "../../data/capcom/game_series_sales_capcom_cml_data";

import {cite, citeCopy} from "../../utils/copySetCitation";

export default function NINTENDO_CML() {

    const [value, setValue] = useState("");

    const [titleValue, setTitleValue] = useState("");
    const [titlesLength, setTitlesLength] = useState(0)
    const [platformValue, setPlatformValue] = useState<string | null>("All" ?? "All");
    const [regionValue, setRegionValue] = useState<string | null>("All" ?? "All");

    const state: any = useSelector(state => state);

    /*
    need to... filter by region, then by platform, then by title... filtering should be easy compared to capcom platforms
    */

    let hardwareSoftwareRegionFilter = [
      printGlobalHardwareSoftware,  
      printJapanHardwareSoftware,
      printAmericasHardwareSoftware,
      printEuropeHardwareSoftware,
      printOtherHardwareSoftware,
    ].filter(elem => {
        if (regionValue === "All") {
            return elem
        } else if (regionValue === elem.region) {
            return elem
        }
    });

    let consolidatedSalesInformationFilter = filterTitles<titleSet>(printConsolidatedSalesInfo.titleList, titleValue);

    let consolidatedSalesInformationReduce = consolidatedSalesInformationFilter.reduce((acc, next) => acc + next.table,"");

    let completeConsolidatedSalesInformation = printConsolidatedSalesInfo.header + printConsolidatedSalesInfo.date + consolidatedSalesInformationReduce + printConsolidatedSalesInfo.footer 

    const textInputValues = [
        {
           value: "Nintendo Consolidated Sales Information - Cumulative",
           placeholder: "Search specific platforms",
           label: `Platform Search - Number of Platforms shown: ${titlesLength}`,
           description: "Clear field to show all platforms", 
        },
        // {
        //    value: "Sega Sammy FY Series IP - Cumulative",
        //    placeholder: "Search specific series",
        //    label: `Series Search - Number of game series shown: ${titlesLength}`,
        //    description: "Clear field to show all game series listed.", 
        // },
    ].filter(elem => elem.value === value);
    
    useEffect(() => {

        switch (value) {
            case "Nintendo Consolidated Sales Information - Cumulative":
                setTitlesLength(consolidatedSalesInformationFilter.length)
                break;

            // case "Sega Sammy FY Series IP - Cumulative":
            //     setTitlesLength(filterIPTypeTitles.length)
            //     break;
        
            default:
                break;
        }

    }, [titleValue, value, platformValue])


    const componentList = [
        {
            name: "Nintendo Consolidated Operating Results - Cumulative",
            value: cumulativeEarningsListNintendo
        },
        {
            name: "Nintendo Consolidated Sales Information - Cumulative",
            value: completeConsolidatedSalesInformation
        },
        // {
        //     name: "Nintendo Sales Per Hardware Unit - Cumulative",
        //     value: printGlobalSalesPerHardwareUnit
        // },
        // {
        //     name: "Nintendo Hardware/Software Cumulative - Global",
        //     value: printGlobalHardwareSoftware
        // },
        // {
        //     name: "Nintendo Hardware/Software Cumulative - Japan",
        //     value: printJapanHardwareSoftware
        // },
        // {
        //     name: "Nintendo Hardware/Software Cml. - The Americas",
        //     value: printAmericasHardwareSoftware
        // },
        // {
        //     name: "Nintendo Hardware/Software Cumulative - Europe",
        //     value: printEuropeHardwareSoftware 
        // },
        // {
        //     name: "Nintendo Hardware/Software Cumulative - Other",
        //     value: printOtherHardwareSoftware 
        // },
        {
            name: "Nintendo FY Million-Seller Titles Cml. - Japan",
            value: printJapan 
        },
        {
            name: "Nintendo FY Million-Seller Titles Cml. - Overseas",
            value: printOverseas, 
        },
        {
            name: "Nintendo FY Million-Seller Titles Cml. - Global",
            value: printGlobal,
        },
        {
            name: "Nintendo Top Selling Titles - Cumulative",
            value: printTopSellingTitles,
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
                {(value === "Nintendo Consolidated Sales Information - Cumulative" )
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
