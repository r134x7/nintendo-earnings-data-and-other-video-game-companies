import { useState, useEffect } from "react";
import { Code, SegmentedControl, Space, TextInput, Select, Button } from "@mantine/core";
import { useSelector } from "react-redux";
import { printJapan, printGlobal, printOverseas } from "../../data/nintendo/Nintendo_Cumulative_Data/mst_cml_data";
import { cumulativeEarningsListNintendo } from "../../data/generalTables/consolidated_earnings_cml_data";
import { printGlobalHardwareSoftware, printGlobalSalesPerHardwareUnit } from "../../data/nintendo/Nintendo_Cumulative_Data/global_hardware_software_cml_data";
import { printJapanHardwareSoftware, printAmericasHardwareSoftware, printEuropeHardwareSoftware, printOtherHardwareSoftware } from "../../data/nintendo/Nintendo_Cumulative_Data/regional_hardware_software_cml_data";
import { printTopSellingTitles } from "../../data/nintendo/Nintendo_Cumulative_Data/top_selling_titles_cml_data";
import { printConsolidatedSalesInfo } from "../../data/nintendo/Nintendo_Cumulative_Data/consolidated_sales_information_cml_data";
import { filterTitles, printTextBlock, liner, filterTextAddToSetCml } from "../../utils/table_design_logic";
import type { titleSet } from "../../data/capcom/game_series_sales_capcom_cml_data";

import {cite, citeCopy} from "../../utils/copySetCitation";

export default function NINTENDO_CML() {

    const [value, setValue] = useState("");

    const [titleValue, setTitleValue] = useState("");
    const [titlesLength, setTitlesLength] = useState(0)
    const [platformValue, setPlatformValue] = useState<string | null>("All" ?? "All");
    const [regionValue, setRegionValue] = useState<string | null>("All" ?? "All");

    const state: any = useSelector(state => state);

    const allHardwareSoftwareHeader = "+−−−−−−−−−−−−−−−−−−−−+\n| Nintendo Co., Ltd. |\n+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n| All Regions: Hardware & Software Units |\n+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n";

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

    // let hardwareSoftwarePlatformFilter = hardwareSoftwareRegionFilter.filter(elem => {
    //     if (platformValue === "All") {
    //         return elem
    //     } else if (platformValue === elem.titleList.)
    // })

    let consolidatedSalesInformationFilter = filterTitles<titleSet>(printConsolidatedSalesInfo.titleList, titleValue);

    let hardwareSoftwareTitleFilter = hardwareSoftwareRegionFilter.flatMap(elem => filterTitles<titleSet>(elem.titleList, titleValue))
    // let hardwareSoftwareTitleFilter = filterTitles<titleSet>(hardwareSoftwareRegionFilter[0].titleList, titleValue)

    let predictText = new Set<string>();

    filterTextAddToSetCml(consolidatedSalesInformationFilter, value, "Nintendo Consolidated Sales Information - Cumulative", titleValue, predictText);

    filterTextAddToSetCml(hardwareSoftwareTitleFilter, value, "Nintendo Hardware/Software - Cumulative", titleValue, predictText);

    let consolidatedSalesInformationReduce = consolidatedSalesInformationFilter.reduce((acc, next) => acc + next.table,"");

    let hardwareSoftwareTitleReduce = hardwareSoftwareTitleFilter.reduce((acc, next) => acc + next.table,"");

    let completeConsolidatedSalesInformation = printConsolidatedSalesInfo.header + printConsolidatedSalesInfo.date + consolidatedSalesInformationReduce + printConsolidatedSalesInfo.footer 

    let completehardwareSoftware = (regionValue === "All") 
    ? allHardwareSoftwareHeader + hardwareSoftwareRegionFilter[0].date + hardwareSoftwareTitleReduce + hardwareSoftwareRegionFilter[0].footer
    : hardwareSoftwareRegionFilter[0].header + hardwareSoftwareRegionFilter[0].date + hardwareSoftwareTitleReduce + hardwareSoftwareRegionFilter[0].footer;

    const textInputValues = [
        {
           value: "Nintendo Consolidated Sales Information - Cumulative",
           placeholder: "Search specific platforms",
           label: `Platform Search - Number of Platforms shown: ${titlesLength}`,
           description: "Clear field to show all platforms", 
        },
        {
           value: "Nintendo Hardware/Software - Cumulative",
           placeholder: "Search specific platforms",
           label: `Platform Search - Number of Platforms shown: ${titlesLength}`,
           description: "Clear field to show all platforms", 
        },
    ].filter(elem => elem.value === value);
    
    useEffect(() => {

        switch (value) {
            case "Nintendo Consolidated Sales Information - Cumulative":
                setTitlesLength(consolidatedSalesInformationFilter.length)
                break;

            case "Nintendo Hardware/Software - Cumulative":
                setTitlesLength(hardwareSoftwareTitleFilter.length)
                break;
        
            default:
                break;
        }

    }, [titleValue, value, platformValue, regionValue])


    const componentList = [
        {
            name: "Nintendo Consolidated Operating Results - Cumulative",
            value: cumulativeEarningsListNintendo
        },
        {
            name: "Nintendo Consolidated Sales Information - Cumulative",
            value: completeConsolidatedSalesInformation
        },
        {
            name: "Nintendo Sales Per Hardware Unit - Cumulative",
            value: printGlobalSalesPerHardwareUnit
        },
        {
            name: "Nintendo Hardware/Software - Cumulative",
            value: completehardwareSoftware
        },
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
                {(value === "Nintendo Hardware/Software - Cumulative")
                    ? <Select
                        data={[
                         "All",
                         "Global",
                         "Japan",
                         "The Americas",
                         "Europe",
                         "Other",
                     ]}
                    defaultValue={"All"} 
                    label="Select all or one region:"
                    radius="xl"
                    value={regionValue}
                    onChange={setRegionValue}
                  /> 
                    : undefined
                }
                {(value === "Nintendo Consolidated Sales Information - Cumulative" || value === "Nintendo Hardware/Software - Cumulative" )
                    ? <>
                        <TextInput
                        placeholder={textInputValues[0].placeholder}
                        label={textInputValues[0].label}
                        description={textInputValues[0].description}
                        radius="xl"
                        value={titleValue}
                        onChange={e => {
                            setTitleValue(e.target.value)
                        }}
                        />  
                        {(predictText.size > 0 && titleValue !== predictText.values().next().value) ? liner(printTextBlock("Nearest single word search: (To use, click on a word)",40),"−","both",true,40) : undefined }
                        { (predictText.size > 0 && titleValue !== predictText.values().next().value)
                        ? [...predictText].flatMap((elem, index) => {
                            if (index > 4) {
                                return []
                            } else {
                                return ( <Button 
                                key={elem}
                                onClick={() => setTitleValue(elem)}
                                radius={"xl"}
                                ml={"sm"} mb={"sm"} variant="subtle" compact>
                                    <Code style={{border:"solid", borderWidth:"1px", borderRadius:"16px", backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} >
                                        {elem}
                                    </Code>
                                </Button>
                                )
                            }
                            })
                        : (titleValue === predictText.values().next().value || titlesLength === 0) 
                            ? <Button 
                                    onClick={() => setTitleValue("")}
                                    radius={"xl"}
                                    m={"sm"} variant="subtle" compact>
                                        <Code style={{border:"solid", borderWidth:"1px", borderRadius:"16px", backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} >
                                            {"Clear Search"}
                                        </Code>
                                    </Button> 
                            : undefined
                        }
                        <br/>
                        </>  
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
