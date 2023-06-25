import { useState, useEffect } from "react";
import { Code, SegmentedControl, Space, TextInput, Select, Button } from "@mantine/core";
import { useSelector } from "react-redux";
import { printOneAll, printJapan, printGlobal, printOverseas } from "../../data/nintendo/Nintendo_Cumulative_Data/mst_cml_data";
import { cumulativeEarningsListNintendo } from "../../data/generalTables/consolidated_earnings_cml_data";
import { printGlobalHardwareSoftware, printGlobalSalesPerHardwareUnit } from "../../data/nintendo/Nintendo_Cumulative_Data/global_hardware_software_cml_data";
import { printJapanHardwareSoftware, printAmericasHardwareSoftware, printEuropeHardwareSoftware, printOtherHardwareSoftware } from "../../data/nintendo/Nintendo_Cumulative_Data/regional_hardware_software_cml_data";
import { printTopSellingTitles } from "../../data/nintendo/Nintendo_Cumulative_Data/top_selling_titles_cml_data";
import { printConsolidatedSalesInfo } from "../../data/nintendo/Nintendo_Cumulative_Data/consolidated_sales_information_cml_data";
import { filterTitles, printTextBlock, liner, filterTextAddToSet } from "../../utils/table_design_logic";
import type { titleSet } from "../../data/capcom/game_series_sales_capcom_cml_data";

import {cite, citeCopy} from "../../utils/copySetCitation";
import { searchTitles } from "../../data/capcom/platinum_titles_Capcom";

export default function NINTENDO_CML() {

    const [value, setValue] = useState("");

    const [titleValue, setTitleValue] = useState("");
    const [titlesLength, setTitlesLength] = useState(0)
    const [platformValue, setPlatformValue] = useState<string | null>("All" ?? "All");
    const [regionValue, setRegionValue] = useState<string | null>("All" ?? "All");

    const [timePeriod, setTimePeriod] = useState(6);
    const [timePeriodValue, setTimePeriodValue] = useState<string | null>("FY Cumulative" ?? "FY Cumulative");

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

    let fyMillionSellersRegionFilter = [
        printGlobal,
        printJapan,
        printOverseas,
    ].filter(elem => {
        if (regionValue === "All") {
            return elem
        } else if (regionValue === elem.region) {
            return elem
        }
    })

    // let fyMillionSellersPlatformFilter = fyMillionSellersRegionFilter.filter(elem => {
    let fyMillionSellersPlatformFilter = fyMillionSellersRegionFilter.map(elem => {
        if (platformValue === "All") {
            return elem
        } else {
            // return elem.titleList.filter(elemII => elemII.platforms === platformValue)
            let platformFilter = elem.titleList.filter(elemII => elemII.platforms === platformValue)
            
            return {
                ...elem,
                titleList: platformFilter,
            }
        }
    })

    let topSellingTitlePlatformFilter = printTopSellingTitles.titleList.filter(elem => {
        if (platformValue === "All") {
            return elem
        } else if (platformValue === elem.platforms) {
            return elem
        }
    })

    // console.log(fyMillionSellersPlatformFilter);
    // console.log(hardwareSoftwareRegionFilter);
    
    // let hardwareSoftwarePlatformFilter = hardwareSoftwareRegionFilter.filter(elem => {
    //     if (platformValue === "All") {
    //         return elem
    //     } else if (platformValue === elem.titleList.)
    // })

    let consolidatedSalesInformationFilter = filterTitles<titleSet>(printConsolidatedSalesInfo.titleList, titleValue);

    let hardwareSoftwareTitleFilter = hardwareSoftwareRegionFilter.flatMap(elem => filterTitles<titleSet>(elem.titleList, titleValue));
    // let hardwareSoftwareTitleFilter = filterTitles<titleSet>(hardwareSoftwareRegionFilter[0].titleList, titleValue)

    let fyMillionSellersTitleFilter = fyMillionSellersPlatformFilter.flatMap(elem => filterTitles<searchTitles>(elem.titleList,titleValue));
    // let fyMillionSellersTitleFilter = filterTitles<searchTitles>(printGlobal.titleList, titleValue)

    let topSellingTitlesTitleFilter = filterTitles<searchTitles>(topSellingTitlePlatformFilter, titleValue);

    let platformListsFyMillionSellers = new Set<string>();

    printGlobal.titleList.map(elem => platformListsFyMillionSellers.add(elem.platforms));

    let platformListsTopSelling = new Set<string>();

    printTopSellingTitles.titleList.map(elem => platformListsTopSelling.add(elem.platforms));

    let predictText = new Set<string>();

    filterTextAddToSet(consolidatedSalesInformationFilter, value, "Nintendo Consolidated Sales Information - Cumulative", titleValue, predictText);

    filterTextAddToSet(hardwareSoftwareTitleFilter, value, "Nintendo Hardware/Software - Cumulative", titleValue, predictText);

    filterTextAddToSet(fyMillionSellersTitleFilter, value, "Nintendo FY Million-Seller Titles - Cumulative", titleValue, predictText);

    filterTextAddToSet(topSellingTitlesTitleFilter, value, "Nintendo Top Selling Titles - Cumulative", titleValue, predictText);

    let consolidatedSalesInformationReduce = consolidatedSalesInformationFilter.reduce((acc, next) => acc + next.table,"");

    let hardwareSoftwareTitleReduce = hardwareSoftwareTitleFilter.reduce((acc, next) => acc + next.table,"");

    let fyMillionSellersTitleReduce = fyMillionSellersTitleFilter.reduce((acc, next) => acc + next.table,"");

    let topSellingTitleReduce = topSellingTitlesTitleFilter.reduce((acc, next) => acc + next.table,"");

    let completeConsolidatedSalesInformation = printConsolidatedSalesInfo.header + printConsolidatedSalesInfo.date + consolidatedSalesInformationReduce + printConsolidatedSalesInfo.footer 

    let completehardwareSoftware = (regionValue === "All") 
    ? allHardwareSoftwareHeader + hardwareSoftwareRegionFilter[0].date + hardwareSoftwareTitleReduce + hardwareSoftwareRegionFilter[0].footer
    : (hardwareSoftwareRegionFilter?.[0]?.header ?? "ERROR") + (hardwareSoftwareRegionFilter?.[0]?.date ?? "ERROR") + (hardwareSoftwareTitleReduce ?? "ERROR") + (hardwareSoftwareRegionFilter?.[0]?.footer ?? "ERROR");

    let completeFyMillionSellers = (regionValue === "All") ? printOneAll + fyMillionSellersRegionFilter[0].date + fyMillionSellersTitleReduce
    : (fyMillionSellersRegionFilter?.[0]?.header ?? "ERROR") + (fyMillionSellersRegionFilter?.[0]?.date ?? "ERROR") + (fyMillionSellersTitleReduce ?? "ERROR");

    let completeTopSellingTitles = printTopSellingTitles.header + printTopSellingTitles.date + topSellingTitleReduce;

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
        {
            value: "Nintendo FY Million-Seller Titles - Cumulative",
            placeholder: "Search specific titles",
            label: `Title Search - Number of Titles shown: ${titlesLength}`,
            description: "Clear field to show all titles", 
        },
        {
           value: "Nintendo Top Selling Titles - Cumulative",
           placeholder: "Search specific titles",
           label: `Title Search - Number of Titles shown: ${titlesLength}`,
           description: "Clear field to show all titles", 
        },
    ].filter(elem => elem.value === value);
    
    useEffect(() => {

        switch (value) {
            case "Nintendo Consolidated Operating Results - Cumulative":
                if (timePeriodValue === "1st Quarter") {
                    setTimePeriod(0)
                } else if (timePeriodValue === "2nd Quarter") {
                    setTimePeriod(1)
                } else if (timePeriodValue === "3rd Quarter") {
                    setTimePeriod(2)
                } else if (timePeriodValue === "4th Quarter") {
                    setTimePeriod(3)
                } else if (timePeriodValue === "First Half") {
                    setTimePeriod(4)
                } else if (timePeriodValue === "First Three Quarters") {
                    setTimePeriod(5)
                } else if (timePeriodValue === "First Three Quarters") {
                    setTimePeriod(6)
                } else {
                    setTimePeriod(6)
                }
                break;

            case "Nintendo Consolidated Sales Information - Cumulative":
                setTitlesLength(consolidatedSalesInformationFilter.length)
                break;

            case "Nintendo Hardware/Software - Cumulative":
                setTitlesLength(hardwareSoftwareTitleFilter.length)
                break;

            case "Nintendo FY Million-Seller Titles - Cumulative":
                setTitlesLength(fyMillionSellersTitleFilter.length)
                break;

            case "Nintendo Top Selling Titles - Cumulative":
                setTitlesLength(topSellingTitlesTitleFilter.length)
                break;
        
            default:
                break;
        }

    }, [titleValue, value, platformValue, regionValue, timePeriodValue])


    const componentList = [
        {
            name: "Nintendo Consolidated Operating Results - Cumulative",
            value: cumulativeEarningsListNintendo[timePeriod]
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
        // {
        //     name: "Nintendo FY Million-Seller Titles Cml. - Japan",
        //     value: printJapan 
        // },
        // {
        //     name: "Nintendo FY Million-Seller Titles Cml. - Overseas",
        //     value: printOverseas, 
        // },
        // {
        //     name: "Nintendo FY Million-Seller Titles Cml. - Global",
        //     value: printGlobal,
        // },
        {
            name: "Nintendo FY Million-Seller Titles - Cumulative",
            value: completeFyMillionSellers,
        },
        {
            name: "Nintendo Top Selling Titles - Cumulative",
            value: completeTopSellingTitles,
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
                {(value === "Nintendo Hardware/Software - Cumulative" || value === "Nintendo FY Million-Seller Titles - Cumulative")
                    ? <Select
                        data={[
                         "All",
                     ].concat((value === "Nintendo Hardware/Software - Cumulative") ? ["Global","Japan","The Americas","Europe","Other",
                     ] : ["Global", "Japan", "Overseas"])}
                    defaultValue={"All"} 
                    label="Select all or one region:"
                    radius="xl"
                    value={regionValue}
                    onChange={setRegionValue}
                  /> 
                    : undefined
                }
                {(value === "Nintendo Top Selling Titles - Cumulative" || value === "Nintendo FY Million-Seller Titles - Cumulative")
                    ? <Select
                        data={[
                         "All",
                     ].concat((value === "Nintendo Top Selling Titles - Cumulative") ? [...platformListsTopSelling] : [...platformListsFyMillionSellers])}
                    defaultValue={"All"} 
                    label="Select all or one platform:"
                    radius="xl"
                    value={platformValue}
                    onChange={setPlatformValue}
                  /> 
                    : undefined
                }
                {(value === "Nintendo Consolidated Operating Results - Cumulative")
                    ? <Select
                        data={[
                         "1st Quarter",
                         "2nd Quarter",
                         "3rd Quarter",
                         "4th Quarter",
                         "First Half",
                         "First Three Quarters",
                         "FY Cumulative",
                     ]}
                    defaultValue={"FY Cumulative"} 
                    label="Select a time period:"
                    radius="xl"
                    value={timePeriodValue}
                    onChange={setTimePeriodValue}
                  /> 
                    : undefined
                }
                {(value === "Nintendo Consolidated Sales Information - Cumulative" || value === "Nintendo Hardware/Software - Cumulative" || value === "Nintendo Top Selling Titles - Cumulative" || value === "Nintendo FY Million-Seller Titles - Cumulative")
                    ? <>
                        <TextInput
                        placeholder={textInputValues[0].placeholder}
                        label={textInputValues[0].label}
                        description={textInputValues[0].description}
                        radius="xl"
                        value={titleValue}
                        onChange={e => {
                            setTitleValue(e.target.value.toLowerCase())
                        }}
                        />  
                        {(predictText.size > 0 && titleValue !== predictText.values().next().value) ? liner(printTextBlock("Nearest single word search: (To use, click on a word)",40),"−","both",true,40) : undefined }
                        { (predictText.size > 0 && titleValue !== predictText.values().next().value)
                        ? [...predictText].flatMap((elem, index) => {
                            if (index > 3) {
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
