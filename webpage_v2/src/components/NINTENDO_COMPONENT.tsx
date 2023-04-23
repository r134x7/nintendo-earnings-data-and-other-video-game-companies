import { useState, useEffect } from "react";
import { Code, SegmentedControl, TextInput, Button, Select } from "@mantine/core";
import { useSelector } from "react-redux";
import { nintendoLinks } from "../data/generalTables/data_sources_general";
import { nintendoConsolidatedEarningsList, nintendoConsolidatedEarningsGraphList} from "../data/generalTables/consolidated_earnings_general";
import { fyMillionSellerTitlesList, fyMillionSellerTitlesGraphList } from "../data/nintendo/fy_million_seller_titles_nintendo";
import { globalHardwareSoftwareList, globalHardwareSoftwareGraphList } from "../data/nintendo/global_hardware_software_mobile_nintendo";
import { keySalesIndicatorsList, keySalesIndicatorsGraphList } from "../data/nintendo/key_sales_indicators_nintendo";
import { regionalHardwareSoftwareList } from "../data/nintendo/regional_hardware_software_nintendo";
import { topSellingTitlesListAllHeaders, topSellingTitlesList, topSellingTitlesGraphList } from "../data/nintendo/top_selling_titles_nintendo";
import { consolidatedSalesInformationList, consolidatedSalesInformationGraphList } from "../data/nintendo/consolidated_sales_information_nintendo";
import type { searchTitles } from "../data/capcom/platinum_titles_Capcom";
import type { titleSet } from "../data/capcom/game_series_sales_capcom_cml_data";
import { printTextBlock, liner, filterTextAddToSetCml } from "../utils/table_design_logic";

import GRAPH_NINTENDO_KPI from "../data/nintendo/Graphs/GRAPH_NINTENDO_KPI";
import GRAPH_NINTENDO_TOP_SELLING_TITLES from "../data/nintendo/Graphs/GRAPH_NINTENDO_TOP_SELLING_TITLES_SWITCH";
import GRAPH_NINTENDO_FY_MILLION_SELLER_TITLES from "../data/nintendo/Graphs/GRAPH_NINTENDO_FY_MILLION_SELLER_TITLES";
import GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE from "../data/nintendo/Graphs/GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE";
import GRAPH_CONSOLIDATED_EARNINGS from "../data/generalGraphs/GRAPH_CONSOLIDATED_EARNINGS";

import {cite, citeCopy} from "../utils/copySetCitation";
import { filterTitles } from "../utils/table_design_logic";

export default function NINTENDO_COMPONENT(props: {setIndex: number; yearLength: number}) {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    const [titleValue, setTitleValue] = useState("");
    const [titlesLength, setTitlesLength] = useState(0);
    const [platformValue, setPlatformValue] = useState<string | null>("All" ?? "All");
    const [regionValue, setRegionValue] = useState<string | null>("All" ?? "All");

    function filterPlatforms<T extends searchTitles>(input: T[]) {

        return input.filter(elem => {
            if (platformValue === "All") {
                return elem
            } else if (platformValue === elem.platforms) {
                return elem
            }
        })
    }

    
    let consolidatedSalesInformationIndex = consolidatedSalesInformationList?.[props.setIndex];

    let topSellingTitleIndex = topSellingTitlesList?.[props.setIndex];

    let topSellingTitlesAllPlatformsHeaderPickedIndex = topSellingTitlesListAllHeaders?.[props.setIndex];

    function topSellingTitlesSearchFeatures(input: {
        header: string;
        titleList: searchTitles[];
    }[], allHeader: string
    ) {
        if (input === undefined) {
            return {
                titlesLength: "",
                table: undefined,
            }
        }

        let topSellingTitlesPlatformsCombined = input.flatMap(elem => elem.titleList);

        let topSellingTitlesHeadersCombined = [{header: allHeader, platform: "All"}].concat(input.flatMap(elem => {

            return {
                header: elem.header,
                platform: elem.titleList[0].platforms
            }
        }));


        let TopSellingTitlesPlatformsFiltered = filterPlatforms<searchTitles>(topSellingTitlesPlatformsCombined);

        let topSellingTitlesTitleFilter = filterTitles<searchTitles>(TopSellingTitlesPlatformsFiltered, titleValue);
        
        topSellingTitlesPlatformsCombined.map(elem => platformListsTopSellingTitles.add(elem.platforms));

        filterTextAddToSetCml(topSellingTitlesTitleFilter, value, "Top Selling Titles", titleValue, predictText)

        let topSellingTitlesReduce: string = topSellingTitlesTitleFilter.reduce((acc, next) => acc + next.table,"");

        let [picked, empty] = topSellingTitlesHeadersCombined.filter(elem => elem.platform === platformValue)

        let completeTopSellingTitles = (picked?.header ?? "ERROR") + topSellingTitlesReduce;

        return {
            titlesLength: topSellingTitlesTitleFilter,
            table: completeTopSellingTitles,
        }
    }

    function consolidatedSalesInformationSearchFeatures(input: { header: string; titleList: titleSet[];}) {
        if (input === undefined) {
            return {
                titlesLength: "",
                table: undefined,
            }
        }

        let titlesFilter = filterTitles<titleSet>(input.titleList,titleValue)

        filterTextAddToSetCml(titlesFilter, value, "Consolidated Sales Information", titleValue, predictText)

        let titlesReduce = titlesFilter.reduce((acc, next) => acc + next.table,"");

        return {
            titlesLength: titlesFilter,
            table: titlesReduce,
        }
    }

    let platformListsTopSellingTitles = new Set<string>();

    let predictText = new Set<string>();

    let topSellingTitlesCall = topSellingTitlesSearchFeatures(topSellingTitleIndex, topSellingTitlesAllPlatformsHeaderPickedIndex);

    let consolidatedSalesInformationCall = consolidatedSalesInformationSearchFeatures(consolidatedSalesInformationIndex);

    
    const textInputValues = [
        {
           value: "Top Selling Titles",
           placeholder: "Search specific titles",
           label: `Title Search - Number of Titles shown: ${titlesLength}`,
           description: "Clear field to show all titles of the selected platform", 
        },
        {
           value: "Consolidated Sales Information",
           placeholder: "Search specific platform",
           label: `Platform Search - Sets of platforms shown: ${titlesLength}`,
           description: "Clear field to show all platforms.", 
        },
        // {
        //    value: "FY Platinum Titles",
        //    placeholder: "Search specific titles",
        //    label: `Title Search - Number of Titles shown: ${titlesLength}`,
        //    description: "Clear field to show all titles of the selected platform", 
        // },
        // {
        //    value: "FY Game Series",
        //    placeholder: "Search specific series",
        //    label: `Series Search - Number of game series shown: ${titlesLength}`,
        //    description: "Clear field to show all game series listed.", 
        // },
        // {
        //    value: "Software Platform Shipments",
        //    placeholder: "Search specific platform",
        //    label: `Platform Search - Sets of platforms shown: ${titlesLength}`,
        //    description: "Clear field to show all platforms.", 
        // }
    ].filter(elem => elem.value === value);

    useEffect(() => {

        switch (value) {
            case "Top Selling Titles":
                setTitlesLength(topSellingTitlesCall.titlesLength?.length ?? 0)
                break;

            case "Consolidated Sales Information":
                setTitlesLength(consolidatedSalesInformationCall.titlesLength?.length ?? 0)
                break;
        
            default:
                break;
        }

        let x = [...platformListsTopSellingTitles].filter(elem => elem === platformValue)

        if ((x?.length ?? 0) === 0) {
            setPlatformValue("All");
        }


    }, [value, titleValue, platformValue, regionValue, props.setIndex])

    const componentListNew = Array.from({length: props.yearLength}, (elem, index) => {

        return [
            { 
                name: "Data Sources",
                value: nintendoLinks?.[index],
            },
            {
                name: "Consolidated Operating Results",
                value: nintendoConsolidatedEarningsList?.[index],
                graph: <GRAPH_CONSOLIDATED_EARNINGS setData={nintendoConsolidatedEarningsGraphList[index]} />
            },
            {
                name: "Consolidated Sales Information",
                value: consolidatedSalesInformationCall.table,
                graph: <GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE setData={consolidatedSalesInformationGraphList[index]} />
            },
            {
                name: "Global Hardware/Software Units",
                value: globalHardwareSoftwareList?.[index],
                graph: <GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE setData={globalHardwareSoftwareGraphList[index]} />
            },
            {
                name: "Key Sales Indicators",
                value: keySalesIndicatorsList?.[index],
                graph: <GRAPH_NINTENDO_KPI setData={keySalesIndicatorsGraphList[index]} />
            },
            {
                name: "FY Million-Seller Titles",
                value: fyMillionSellerTitlesList?.[index],
                graph: <GRAPH_NINTENDO_FY_MILLION_SELLER_TITLES setData={fyMillionSellerTitlesGraphList[index]} /> 
            },
            {
                name: "Regional Hardware/Software Units",
                value: regionalHardwareSoftwareList?.[index],
            },
            {
                name: "Top Selling Titles",
                // value: topSellingTitlesList?.[index],
                value: topSellingTitlesCall.table,
                graph: <GRAPH_NINTENDO_TOP_SELLING_TITLES setData={topSellingTitlesGraphList[index]} />
            },
        ].filter(elem => elem.value !== undefined);
    })

    const dataList = componentListNew[props.setIndex].map(elem => elem.name);

    const selectDataComponent = (objList: {name: string, value: string | JSX.Element | undefined}[]) =>
    (dataUsed: string): string | JSX.Element | undefined => {

        let [dataSelected] = objList.filter(elem => dataUsed === elem.name)

        return dataSelected?.value || ""
    };

    const selectGraphComponent = (objList: {name: string, value: string | JSX.Element | undefined, graph?: JSX.Element | undefined}[]) =>
    (dataUsed: string): JSX.Element | undefined => {

        let [dataSelected] = objList.filter(elem => dataUsed === elem.name)

        return dataSelected?.graph
    };

    const selectData = selectDataComponent(componentListNew[props.setIndex]);
    const selectGraph = selectGraphComponent(componentListNew[props.setIndex]);

    function delayedReset() {
        /* removes SegmentedControl from the DOM
        *  it returns undefined first
        *  then activates setValue from the setTimeout
        *  to reset the value to ""
        */ 
            setTimeout(() => {
                setValue("")
            }, 10);
            return undefined
        }

    return (

        <div>  
            {
                (dataList.filter(elem => elem === value).length === 0 && value.length !== 0) 
                ?  delayedReset()
                : <SegmentedControl
                    fullWidth 
                    orientation="vertical"
                    value={value}
                    onChange={setValue}
                    data={dataList}
                />
            }

            {
                (value === "Data Sources")
                    ? selectData(value)
                    : <Code onCopy={e => citeCopy(e, cite)} style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
                {(value === "Top Selling Titles")
                    ? <Select
                        data={[
                         "All",
                     ].concat((value === "Top Selling Titles") ? [...platformListsTopSellingTitles] : ["Error"])}
                    defaultValue={"All"} 
                    label="Select all or one platform:"
                    radius="xl"
                    value={platformValue}
                    onChange={setPlatformValue}
                  /> 
                    : undefined
                }
                {(value === "Top Selling Titles" || value === "Consolidated Sales Information")
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
                            return <Button 
                            key={elem}
                            onClick={() => setTitleValue(elem)}
                            radius={"xl"}
                            ml={"sm"} mb={"sm"} variant="subtle" compact>
                                <Code style={{border:"solid", borderWidth:"1px", borderRadius:"16px", backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} >
                                    {elem}
                                </Code>
                            </Button>
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
            }
            {selectGraph(value)}
        </div>
        
    );
}
