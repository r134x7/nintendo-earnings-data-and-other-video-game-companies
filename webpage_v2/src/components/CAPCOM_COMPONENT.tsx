import { useEffect, useState } from "react";
import { Code, SegmentedControl, Select, TextInput, Button } from "@mantine/core";
import { useSelector } from "react-redux";
import { allPlatinumTitlesList, fyPlatinumTitlesList } from "../data/capcom/platinum_titles_Capcom";
import { gameSeriesList } from "../data/capcom/game_series_sales_Capcom";
import { softwareSalesList, softwareSalesGraphList } from "../data/capcom/software_sales_Capcom";
import { platformSoftwareShipmentsList } from "../data/capcom/software_shipments_platform_Capcom";
import { capcomConsolidatedEarningsList, capcomConsolidatedEarningsGraphList } from "../data/generalTables/consolidated_earnings_general";
import { capcomLinks } from "../data/generalTables/data_sources_general";
import { printTextBlock, liner, titleSetSearchFeatures, platformSearchFeatures } from "../utils/table_design_logic";

import GRAPH_SOFTWARE_SALES from "../data/generalGraphs/GRAPH_SOFTWARE_SALES";
import GRAPH_CONSOLIDATED_EARNINGS from "../data/generalGraphs/GRAPH_CONSOLIDATED_EARNINGS";

import {cite, citeCopy} from "../utils/copySetCitation";

export default function CAPCOM_COMPONENT(props: {setIndex: number; yearLength: number}) {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    const [titleValue, setTitleValue] = useState("");
    const [titlesLength, setTitlesLength] = useState(0);
    const [platformValue, setPlatformValue] = useState<string | null>("All" ?? "All");

    /*
    steps: filter by platform => filter by title search => side effect: (mutate titles list length) => reduce titlesFilter => combine the headers, footers with the tables.
    */

    let correctFyForAnnualReports = -1;

    let allPlatinumTitlesIndex = allPlatinumTitlesList?.[props.setIndex];

    let allPlatinumTitlesObject = (allPlatinumTitlesIndex === undefined) ? undefined : [{
        header: allPlatinumTitlesIndex.header,
        titleList: allPlatinumTitlesIndex.titleData,
        summary: allPlatinumTitlesIndex.fyNotes,
    }];

    let fyPlatinumTitlesIndex = fyPlatinumTitlesList?.[props.setIndex];

    let newTitlesIndex = fyPlatinumTitlesList?.[props.setIndex]?.newTitles;

    let fyPlatinumTitlesObject = (fyPlatinumTitlesIndex === undefined) ? undefined : [{
        header: fyPlatinumTitlesIndex.header,
        titleList: fyPlatinumTitlesIndex.titleData,
        summary: fyPlatinumTitlesIndex.fyNotes,
    }];

    let gameSeriesIndex = gameSeriesList?.[props.setIndex];

    let annualReportIndex = platformSoftwareShipmentsList?.[props.setIndex + correctFyForAnnualReports];

    let platformListsAll = new Set<string>();
    let platformListsFY = new Set<string>();

    let predictText = new Set<string>();

    let allPlatinumTitlesCall = platformSearchFeatures(
        allPlatinumTitlesObject, allPlatinumTitlesIndex?.header, "All Platinum Titles", value, platformValue ?? "All", "Multi", "Many", platformListsAll, titleValue, predictText, allPlatinumTitlesIndex?.platformNotes);

    let fyPlatinumTitlesCall = platformSearchFeatures(fyPlatinumTitlesObject, fyPlatinumTitlesIndex?.header, "FY Platinum Titles", value, platformValue ?? "All", "Multi", "Many", platformListsFY, titleValue, predictText, fyPlatinumTitlesIndex?.platformNotes);

    let gameSeriesCall = titleSetSearchFeatures(gameSeriesIndex, "FY Game Series", value, titleValue, predictText);

    let annualReportCall = titleSetSearchFeatures(annualReportIndex, "Software Platform Shipments", value, titleValue, predictText);

    const textInputValues = [
        {
           value: (value === allPlatinumTitlesCall.sectionTitle) ? allPlatinumTitlesCall.sectionTitle : fyPlatinumTitlesCall.sectionTitle,
           placeholder: "Search specific titles",
           label: `Title Search - Number of Titles shown: ${titlesLength}`,
           description: "Clear field to show all titles of the selected platform", 
        },
        {
           value: gameSeriesCall.sectionTitle,
           placeholder: "Search specific series",
           label: `Series Search - Number of game series shown: ${titlesLength}`,
           description: "Clear field to show all game series listed.", 
        },
        {
           value: annualReportCall.sectionTitle,
           placeholder: "Search specific platform",
           label: `Platform Search - Sets of platforms shown: ${titlesLength}`,
           description: "Clear field to show all platforms.", 
        }
    ].filter(elem => elem.value === value);

    useEffect(() => {

        switch (value) {
            case gameSeriesCall.sectionTitle:
                setTitlesLength(gameSeriesCall.titlesLength.length)
                break;

            case annualReportCall.sectionTitle:
                setTitlesLength(annualReportCall.titlesLength.length)
                break;

            case fyPlatinumTitlesCall.sectionTitle:
                setTitlesLength(fyPlatinumTitlesCall.titlesLength.length)

                let platformReset1 = [...platformListsFY].filter(elem => elem === platformValue)

                if ((platformReset1?.length ?? 0) === 0) {
                            setPlatformValue("All");
                }

                break;

            case allPlatinumTitlesCall.sectionTitle:
                setTitlesLength(allPlatinumTitlesCall.titlesLength.length)

                let platformReset2 = [...platformListsAll].filter(elem => elem === platformValue)

                if ((platformReset2?.length ?? 0) === 0) {
                    setPlatformValue("All");
                }

                break;
        
            default:
                break;
        }

    }, [value, titleValue, platformValue, props.setIndex, platformListsAll, platformListsFY])

    const componentListNew = Array.from({length: props.yearLength}, (elem, index) => {

        return [
            { 
                name: "Data Sources",
                value: capcomLinks?.[index],
            },
            {
                name: "Consolidated Financial Results",
                value: capcomConsolidatedEarningsList?.[index],
                graph: <GRAPH_CONSOLIDATED_EARNINGS setData={capcomConsolidatedEarningsGraphList[index]} />
            },
            {
                name: "Software Sales",
                value: softwareSalesList?.[index],
                graph: <GRAPH_SOFTWARE_SALES setData={softwareSalesGraphList[index]} />
            },
            {
                name: "Software Platform Shipments", 
                value: annualReportCall.table
                // value: annualReportListAltered[index] ? annualReportListAltered[index] : undefined, // can't use optional chaining on falsy values i.e. ""
            },
            {
                name: "FY Platinum Titles", 
                value: fyPlatinumTitlesCall.table
            },
            {
                name: "All Platinum Titles", 
                value: allPlatinumTitlesCall.table
            },
            {
                name: "FY New Platinum Titles Highlight",
                value: newTitlesIndex,
            },
            {
                name: "FY Game Series", 
                value: gameSeriesCall.table
                // value: gameSeriesListAltered[index] ? gameSeriesListAltered[index] : undefined, // can't use optional chaining on falsy values i.e. ""
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

    const selectGraph = selectGraphComponent(componentListNew[props.setIndex]);
    const selectData = selectDataComponent(componentListNew[props.setIndex]);

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
                {(value === allPlatinumTitlesCall.sectionTitle || value === fyPlatinumTitlesCall.sectionTitle)
                    ? <Select
                        data={[
                         "All",
                     ].concat((value === allPlatinumTitlesCall.sectionTitle) ? [...platformListsAll] : [...platformListsFY])}
                    defaultValue={"All"} 
                    label="Select all or one platform:"
                    radius="xl"
                    value={platformValue}
                    onChange={setPlatformValue}
                  /> 
                    : undefined
                }
                {(value === allPlatinumTitlesCall.sectionTitle || value === fyPlatinumTitlesCall.sectionTitle || value === gameSeriesCall.sectionTitle || value === annualReportCall.sectionTitle)
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
            }
            {selectGraph(value)}
        </div>
        
    );
}
