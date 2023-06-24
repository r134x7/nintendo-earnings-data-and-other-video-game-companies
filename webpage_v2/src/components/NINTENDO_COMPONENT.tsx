import { useState, useEffect } from "react";
import { Code, SegmentedControl, TextInput, Button, Select } from "@mantine/core";
import { useSelector } from "react-redux";
import { nintendoLinks } from "../data/generalTables/data_sources_general";
import { nintendoConsolidatedEarningsList, nintendoConsolidatedEarningsGraphList} from "../data/generalTables/consolidated_earnings_general";
import { fyMillionSellerTitlesListAllHeaders, fyMillionSellerTitlesList, fyMillionSellerTitlesGraphList } from "../data/nintendo/fy_million_seller_titles_nintendo";
import { globalHardwareSoftwareList, globalHardwareSoftwareGraphList } from "../data/nintendo/global_hardware_software_mobile_nintendo";
import { keySalesIndicatorsList, keySalesIndicatorsGraphList } from "../data/nintendo/key_sales_indicators_nintendo";
import { regionalHardwareSoftwareList } from "../data/nintendo/regional_hardware_software_nintendo";
import { topSellingTitlesListAllHeaders, topSellingTitlesList, topSellingTitlesGraphList } from "../data/nintendo/top_selling_titles_nintendo";
import { consolidatedSalesInformationList, consolidatedSalesInformationGraphList } from "../data/nintendo/consolidated_sales_information_nintendo";
import { printTextBlock, liner, platformSearchFeatures, titleSetSearchFeatures } from "../utils/table_design_logic";

import GRAPH_NINTENDO_KPI from "../data/nintendo/Graphs/GRAPH_NINTENDO_KPI";
import GRAPH_NINTENDO_TOP_SELLING_TITLES from "../data/nintendo/Graphs/GRAPH_NINTENDO_TOP_SELLING_TITLES_SWITCH";
import GRAPH_NINTENDO_FY_MILLION_SELLER_TITLES from "../data/nintendo/Graphs/GRAPH_NINTENDO_FY_MILLION_SELLER_TITLES";
import GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE from "../data/nintendo/Graphs/GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE";
import GRAPH_CONSOLIDATED_EARNINGS from "../data/generalGraphs/GRAPH_CONSOLIDATED_EARNINGS";

import {cite, citeCopy} from "../utils/copySetCitation";

export default function NINTENDO_COMPONENT(props: {setIndex: number; yearLength: number}) {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    const [titleValue, setTitleValue] = useState("");
    const [titlesLength, setTitlesLength] = useState(0);
    const [platformValue, setPlatformValue] = useState<string | null>("All" ?? "All");

    let consolidatedSalesInformationIndex = consolidatedSalesInformationList?.[props.setIndex];

    let keySalesIndicatorsIndex = keySalesIndicatorsList?.[props.setIndex];

    let globalHardwareSoftwareIndex = globalHardwareSoftwareList?.[props.setIndex];

    let regionalHardwareSoftwareIndex = regionalHardwareSoftwareList?.[props.setIndex];

    let fyMillionSellerTitlesIndex = fyMillionSellerTitlesList?.[props.setIndex];

    let fyMillionSellerTitlesAllPlatformsHeaderPickedIndex = fyMillionSellerTitlesListAllHeaders?.[props.setIndex]; 

    let topSellingTitleIndex = topSellingTitlesList?.[props.setIndex];

    let topSellingTitlesAllPlatformsHeaderPickedIndex = topSellingTitlesListAllHeaders?.[props.setIndex];

    let platformListsTopSellingTitles = new Set<string>();

    let platformListsFYMillionSellers = new Set<string>();

    let platformListsGlobalHardwareSoftware = new Set<string>();

    let predictText = new Set<string>();

    let globalHardwareSoftwareCall = platformSearchFeatures(globalHardwareSoftwareIndex, globalHardwareSoftwareIndex[0].header, "Global Hardware/Software Units", value, platformValue ?? "All", "Single", "Single", platformListsGlobalHardwareSoftware, titleValue, predictText)

    let fyMillionSellerTitlesCall = platformSearchFeatures(fyMillionSellerTitlesIndex, fyMillionSellerTitlesAllPlatformsHeaderPickedIndex?.header, "FY Million-Seller Titles", value, platformValue ?? "All", "Single", "Single", platformListsFYMillionSellers, titleValue, predictText, fyMillionSellerTitlesAllPlatformsHeaderPickedIndex?.footnote)

    let topSellingTitlesCall = platformSearchFeatures(topSellingTitleIndex, topSellingTitlesAllPlatformsHeaderPickedIndex, "Top Selling Titles", value, platformValue ?? "All", "Single", "Single", platformListsTopSellingTitles, titleValue, predictText);

    let regionalHardwareSoftwareCall = titleSetSearchFeatures(regionalHardwareSoftwareIndex, "Regional Hardware/Software Units", value, titleValue, predictText);

    let consolidatedSalesInformationCall = titleSetSearchFeatures(consolidatedSalesInformationIndex, "Consolidated Sales Information", value, titleValue, predictText);

    let keySalesIndicatorsCall = titleSetSearchFeatures(keySalesIndicatorsIndex, "Key Sales Indicators", value, titleValue, predictText)
    
    const textInputValues = [
        {
           value: (value === topSellingTitlesCall.sectionTitle) ? topSellingTitlesCall.sectionTitle : fyMillionSellerTitlesCall.sectionTitle,
           placeholder: "Search specific titles",
           label: `Title Search - Number of Titles shown: ${titlesLength}`,
           description: "Clear field to show all titles of the selected platform", 
        },
        {
           value: (value === consolidatedSalesInformationCall.sectionTitle) ? consolidatedSalesInformationCall.sectionTitle : regionalHardwareSoftwareCall.sectionTitle,
           placeholder: "Search specific platform",
           label: `Platform Search - Sets of platforms shown: ${titlesLength}`,
           description: "Clear field to show all platforms.", 
        },
        {
           value: (value === keySalesIndicatorsCall.sectionTitle) ? keySalesIndicatorsCall.sectionTitle : globalHardwareSoftwareCall.sectionTitle,
           placeholder: "Search specific category",
           label: `Category Search - Sets of categories shown: ${titlesLength}`,
           description: "Clear field to show all categories.", 
        },
    ].filter(elem => elem.value === value);

    useEffect(() => {

        switch (value) {
            case topSellingTitlesCall.sectionTitle:
                setTitlesLength(topSellingTitlesCall.titlesLength?.length ?? 0)

                let platformReset1 = [...platformListsTopSellingTitles].filter(elem => elem === platformValue)

                if ((platformReset1?.length ?? 0) === 0) {
                            setPlatformValue("All");
                }

                break;

            case fyMillionSellerTitlesCall.sectionTitle:
                setTitlesLength(fyMillionSellerTitlesCall.titlesLength?.length ?? 0)

                let platformReset2 = [...platformListsFYMillionSellers].filter(elem => elem === platformValue)

                if ((platformReset2?.length ?? 0) === 0) {
                    setPlatformValue("All");
                }

                break;

            case globalHardwareSoftwareCall.sectionTitle:
                setTitlesLength(globalHardwareSoftwareCall.titlesLength?.length ?? 0)

                let platformReset3 = [...platformListsGlobalHardwareSoftware].filter(elem => elem === platformValue)

                if ((platformReset3?.length ?? 0) === 0) {
                    setPlatformValue("All");
                }

                break;

            case consolidatedSalesInformationCall.sectionTitle:
                setTitlesLength(consolidatedSalesInformationCall.titlesLength?.length ?? 0)
                break;

            case keySalesIndicatorsCall.sectionTitle:
                setTitlesLength(keySalesIndicatorsCall.titlesLength?.length ?? 0)
                break;

            case regionalHardwareSoftwareCall.sectionTitle:
                setTitlesLength(regionalHardwareSoftwareCall.titlesLength?.length ?? 0)
                break;
        
            default:
                break;
        }


    }, [value, titleValue, platformValue, props.setIndex, platformListsFYMillionSellers, platformListsTopSellingTitles])

    const componentListNew = Array.from({length: props.yearLength}, (elem, index) => {

        return [
            { 
                name: "Data Sources",
                value: nintendoLinks?.[index],
            },
            {
                name: "Consolidated Operating Results",
                // value: nintendoConsolidatedEarningsList?.[index],
                value: nintendoConsolidatedEarningsList.get(index),
                graph: <GRAPH_CONSOLIDATED_EARNINGS setData={nintendoConsolidatedEarningsGraphList.get(index)} />
            },
            {
                name: "Consolidated Sales Information",
                value: consolidatedSalesInformationCall.table,
                graph: <GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE setData={consolidatedSalesInformationGraphList[index]} />
            },
            {
                name: "Global Hardware/Software Units",
                value: globalHardwareSoftwareCall.table,
                graph: <GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE setData={globalHardwareSoftwareGraphList[index]} />
            },
            {
                name: "Key Sales Indicators",
                value: keySalesIndicatorsCall.table,
                graph: <GRAPH_NINTENDO_KPI setData={keySalesIndicatorsGraphList[index]} />
            },
            {
                name: "FY Million-Seller Titles",
                value: fyMillionSellerTitlesCall.table,
                graph: <GRAPH_NINTENDO_FY_MILLION_SELLER_TITLES setData={fyMillionSellerTitlesGraphList[index]} /> 
            },
            {
                name: "Regional Hardware/Software Units",
                value: regionalHardwareSoftwareCall.table,
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
                {(value === topSellingTitlesCall.sectionTitle || value === fyMillionSellerTitlesCall.sectionTitle || value === globalHardwareSoftwareCall.sectionTitle)
                    ? <Select
                        data={[
                         "All",
                     ].concat((value === topSellingTitlesCall.sectionTitle) 
                        ? [...platformListsTopSellingTitles] 
                        : (value === fyMillionSellerTitlesCall.sectionTitle)
                            ? [...platformListsFYMillionSellers]
                            : [...platformListsGlobalHardwareSoftware]
                            )}
                    defaultValue={"All"} 
                    label={(value === globalHardwareSoftwareCall.sectionTitle) ? "Select all or one category:" : "Select all or one platform:"}
                    radius="xl"
                    value={platformValue}
                    onChange={setPlatformValue}
                  /> 
                    : undefined
                }
                {(value === topSellingTitlesCall.sectionTitle || value === consolidatedSalesInformationCall.sectionTitle || value === keySalesIndicatorsCall.sectionTitle || value === fyMillionSellerTitlesCall.sectionTitle || value === regionalHardwareSoftwareCall.sectionTitle || value === globalHardwareSoftwareCall.sectionTitle)
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
