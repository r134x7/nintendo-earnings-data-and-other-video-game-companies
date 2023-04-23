import { useEffect, useState } from "react";
import { Code, SegmentedControl, Select, TextInput, Button } from "@mantine/core";
import { useSelector } from "react-redux";
import { allPlatinumTitlesList, fyPlatinumTitlesList, searchTitles } from "../data/capcom/platinum_titles_Capcom";
import { gameSeriesList } from "../data/capcom/game_series_sales_Capcom";
import { softwareSalesList, softwareSalesGraphList } from "../data/capcom/software_sales_Capcom";
import { platformSoftwareShipmentsList } from "../data/capcom/software_shipments_platform_Capcom";
import { capcomConsolidatedEarningsList, capcomConsolidatedEarningsGraphList } from "../data/generalTables/consolidated_earnings_general";
import { capcomLinks } from "../data/generalTables/data_sources_general";
import { filterTitles, printTextBlock, liner, filterTextAddToSetFY } from "../utils/table_design_logic";
import type { titleSet } from "../data/capcom/game_series_sales_capcom_cml_data";

import GRAPH_SOFTWARE_SALES from "../data/generalGraphs/GRAPH_SOFTWARE_SALES";
import GRAPH_CONSOLIDATED_EARNINGS from "../data/generalGraphs/GRAPH_CONSOLIDATED_EARNINGS";

import {cite, citeCopy} from "../utils/copySetCitation";

// let titleListCheckAll = 0;
// let titleListCheckFY = 0;
// let seriesListCheck = 0;
// let softwareShipmentsListCheck = 0;

export default function CAPCOM_COMPONENT(props: {setIndex: number; yearLength: number}) {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    const [titleValue, setTitleValue] = useState("");
    const [titlesLength, setTitlesLength] = useState(0);
    const [platformValue, setPlatformValue] = useState<string | null>("All" ?? "All");

    function filterPlatforms<T extends searchTitles>(input: T[]) {

        return input.filter(elem => {

            if (platformValue === "All") {
                return elem
            } else if (platformValue === elem.platforms) {
                return elem
            } else if ([...elem.platforms.matchAll(/\w+\s?\w+/g)].flat().filter(value => value === platformValue).length > 0) {
                return elem
            }

        })
    }

    /*
    steps: filter by platform => filter by title search => side effect: (mutate titles list length) => reduce titlesFilter => combine the headers, footers with the tables.
    */

    // reducing computations by only filtering the selected year and not filtering the other years. 
    let allPlatinumTitlesPlatformsFiltered = Array.from({length:allPlatinumTitlesList.length},(v,i) => {
        return (i === props.setIndex)
            ? filterPlatforms<searchTitles>(allPlatinumTitlesList[i].titleData)
            : allPlatinumTitlesList[i].titleData
    })

    let fyPlatinumTitlesPlatformsFiltered = Array.from({length:fyPlatinumTitlesList.length},(v,i) => {
        return (i === props.setIndex)
            ? filterPlatforms<searchTitles>(fyPlatinumTitlesList[i].titleData)
            : fyPlatinumTitlesList[i].titleData
    })

    let platformListsAll = new Set<string>();
    let platformListsFY = new Set<string>();
    // only way I could think of making sure I got lists for each year.
    // let platformLists = Array.from({length:allPlatinumTitlesList.length},(v,i) => {
    //     return new Set<string>()
    // })

    // allPlatinumTitlesList.map((elem, index) => elem.titleData.map(value => [...value.platforms.matchAll(/\w+\s?\w+/g)].flat().map(setValue => platformLists[index].add(setValue))))

    // more efficient method
    allPlatinumTitlesList?.[props.setIndex]?.titleData.map(elem => [...elem?.platforms.matchAll(/\w+\s?\w+/g)].flat().map(setValue => platformListsAll.add(setValue ?? "")));

    fyPlatinumTitlesList?.[props.setIndex]?.titleData.map(elem => [...elem?.platforms.matchAll(/\w+\s?\w+/g)].flat().map(setValue => platformListsFY.add(setValue ?? "")));

    let allTitlesFilter = allPlatinumTitlesPlatformsFiltered.map(elem => filterTitles<searchTitles>(elem,titleValue));

    let fyTitlesFilter = fyPlatinumTitlesPlatformsFiltered.map(elem => filterTitles<searchTitles>(elem, titleValue));

    let gameSeriesFilter = gameSeriesList.map(elem => filterTitles<titleSet>(elem.titleList, titleValue));

    let platformSoftwareShipmentsFilter = platformSoftwareShipmentsList.map(elem => filterTitles<titleSet>(elem.titleList, titleValue));

    let predictText = new Set<string>();

    filterTextAddToSetFY(allTitlesFilter, value, "All Platinum Titles", titleValue, false, props.setIndex, predictText);

    filterTextAddToSetFY(fyTitlesFilter, value, "FY Platinum Titles", titleValue, false, props.setIndex, predictText);

    filterTextAddToSetFY(gameSeriesFilter, value, "FY Game Series", titleValue, true, props.setIndex, predictText);

    filterTextAddToSetFY(platformSoftwareShipmentsFilter, value, "Software Platform Shipments", titleValue, true, props.setIndex, predictText);

    // // SIDE EFFECTS!!
    // titleListCheckAll = allTitlesFilter?.[props.setIndex]?.length ?? 0;

    // titleListCheckFY = fyTitlesFilter?.[props.setIndex]?.length ?? 0;

    // // due to altering the list later, the list is offset by +1, apply props.setIndex-1 
    // seriesListCheck = gameSeriesFilter?.[props.setIndex-1]?.length ?? 0;
    // // due to altering the list later, the list is offset by +1, apply props.setIndex-1 
    // softwareShipmentsListCheck = platformSoftwareShipmentsFilter?.[props.setIndex-1]?.length ?? 0;

    let allTitlesReduce: string[] = allTitlesFilter.map(elem => elem.reduce((acc,next) => acc + next.table,"")); 

    let fyTitlesReduce: string[] = fyTitlesFilter.map(elem => elem.reduce((acc, next) => acc + next.table,""));

    let gameSeriesReduce: string[] = gameSeriesFilter.map(elem => elem.reduce((acc, next) => acc + next.table,"")); 

    let platformSoftwareShipmentsReduce: string[] = platformSoftwareShipmentsFilter.map(elem => elem.reduce((acc, next) => acc + next.table,""));

    let completeAllTitlesList = allTitlesReduce.map((elem, index) => allPlatinumTitlesList[index].header + elem + allPlatinumTitlesList[index].fyNotes + allPlatinumTitlesList[index].platformNotes);

    let completeFYTitlesList = fyTitlesReduce.map((elem, index) => fyPlatinumTitlesList[index].header + elem + fyPlatinumTitlesList[index].fyNotes + fyPlatinumTitlesList[index].platformNotes);

    let completeGameSeriesList = gameSeriesReduce.map((elem, index) => gameSeriesList[index].header + elem);

    let completePlatformSoftwareShipmentsList = platformSoftwareShipmentsReduce.map((elem, index) => platformSoftwareShipmentsList[index].header + elem)

    const annualReportListAltered = [""].concat(completePlatformSoftwareShipmentsList); // to manage keeping the index values the same with softwareSalesList

    const gameSeriesListAltered = [""].concat(completeGameSeriesList); // to manage keeping the index values the same with softwareSalesList

    const textInputValues = [
        {
           value: "All Platinum Titles",
           placeholder: "Search specific titles",
           label: `Title Search - Number of Titles shown: ${titlesLength}`,
           description: "Clear field to show all titles of the selected platform", 
        },
        {
           value: "FY Platinum Titles",
           placeholder: "Search specific titles",
           label: `Title Search - Number of Titles shown: ${titlesLength}`,
           description: "Clear field to show all titles of the selected platform", 
        },
        {
           value: "FY Game Series",
           placeholder: "Search specific series",
           label: `Series Search - Number of game series shown: ${titlesLength}`,
           description: "Clear field to show all game series listed.", 
        },
        {
           value: "Software Platform Shipments",
           placeholder: "Search specific platform",
           label: `Platform Search - Sets of platforms shown: ${titlesLength}`,
           description: "Clear field to show all platforms.", 
        }
    ].filter(elem => elem.value === value);

    useEffect(() => {

        switch (value) {
            case "FY Game Series":
                // due to altering the list later, the list is offset by +1, apply props.setIndex-1 
                setTitlesLength(gameSeriesFilter?.[props.setIndex-1]?.length ?? 0)
                break;

            case "Software Platform Shipments":
                // due to altering the list later, the list is offset by +1, apply props.setIndex-1 
                setTitlesLength(platformSoftwareShipmentsFilter?.[props.setIndex-1]?.length ?? 0)
                break;

            case "FY Platinum Titles":
                setTitlesLength(fyTitlesFilter?.[props.setIndex]?.length ?? 0)
                break;

            case "All Platinum Titles":
                setTitlesLength(allTitlesFilter?.[props.setIndex]?.length ?? 0)
                break;
        
            default:
                break;
        }

    }, [value, titleValue, platformValue])

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
                value: annualReportListAltered[index] ? annualReportListAltered[index] : undefined, // can't use optional chaining on falsy values i.e. ""
            },
            {
                name: "FY Platinum Titles", 
                // value: fyPlatinumTitlesList?.[index],
                value: completeFYTitlesList?.[index],
            },
            {
                name: "All Platinum Titles", 
                // value: allPlatinumTitlesList?.[index],
                value: completeAllTitlesList?.[index],
            },
            {
                name: "FY Game Series", 
                value: gameSeriesListAltered[index] ? gameSeriesListAltered[index] : undefined, // can't use optional chaining on falsy values i.e. ""
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
                {(value === "All Platinum Titles" || value === "FY Platinum Titles")
                    ? <Select
                        data={[
                         "All",
                     ].concat((value === "All Platinum Titles") ? [...platformListsAll] : [...platformListsFY])}
                    defaultValue={"All"} 
                    label="Select all or one platform:"
                    radius="xl"
                    value={platformValue}
                    onChange={setPlatformValue}
                  /> 
                    : undefined
                }
                {(value === "All Platinum Titles" || value === "FY Platinum Titles" || value === "FY Game Series" || value === "Software Platform Shipments")
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
