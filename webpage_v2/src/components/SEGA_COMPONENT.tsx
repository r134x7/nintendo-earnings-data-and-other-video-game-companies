import { useEffect, useState } from "react";
import { Code, SegmentedControl, Select, TextInput, Button } from "@mantine/core";
import { useSelector } from "react-redux";
import { segaSoftwareUnitsList, segaSoftwareUnitsGraphList } from "../data/sega/software_units_sega"
import { softwareSalesList, softwareSalesGraphList } from "../data/sega/software_sales_sega";
import { annualReportList } from "../data/sega/annual_report_sega";
import { segaConsolidatedEarningsList, segaConsolidatedEarningsGraphList } from "../data/generalTables/consolidated_earnings_general";
import { segaLinks } from "../data/generalTables/data_sources_general";
import { filterTitles, printTextBlock, liner, filterTextAddToSet } from "../utils/table_design_logic";
import type { searchTitles } from "../data/capcom/platinum_titles_Capcom";
import type { titleSet } from "../data/capcom/game_series_sales_capcom_cml_data";

import GRAPH_SOFTWARE_SALES from "../data/generalGraphs/GRAPH_SOFTWARE_SALES";
import GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE from "../data/nintendo/Graphs/GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE";
import GRAPH_CONSOLIDATED_EARNINGS from "../data/generalGraphs/GRAPH_CONSOLIDATED_EARNINGS";

import {cite, citeCopy} from "../utils/copySetCitation";

export default function SEGA_COMPONENT(props: {setIndex: number; yearLength: number}) {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    const [titleValue, setTitleValue] = useState("");
    const [titlesLength, setTitlesLength] = useState(0);
    const [platformValue, setPlatformValue] = useState<string | null>("All" ?? "All");

    let annualReportListFiltered = Array.from({length:annualReportList.length},(v,i) => {
    // due to altering the list later, the list is offset by +1, apply props.setIndex-1 
        return (i === props.setIndex-1)
            ? annualReportList[i].titleData.filter(elem => {
                if (platformValue === "All") {
                    return elem
                } else if (platformValue === elem.platforms) {
                    return elem
                }
            })
            : annualReportList[i].titleData
    })

    let annualReportIPTypes = new Set<string>();

    // due to altering the list later, the list is offset by +1, apply props.setIndex-1 
    annualReportList?.[props.setIndex-1]?.titleData.map(elem => annualReportIPTypes.add(elem.platforms));

    let annualReportTitlesFilter = annualReportListFiltered.map(elem => filterTitles<searchTitles>(elem, titleValue))

    let predictText = new Set<string>();

    filterTextAddToSet(annualReportTitlesFilter, value, "FY Series IP", titleValue, true, props.setIndex, predictText);

    let annualReportReduce = annualReportTitlesFilter.map(elem => elem.reduce((acc,next) => acc + next.table,""));

    let completeAnnualReportList = annualReportReduce.map((elem, index) => annualReportList[index].header + elem);

    let softwareUnitsFilter = segaSoftwareUnitsList.map(elem => filterTitles<titleSet>(elem.titleList, titleValue));

    let softwareUnitsReduce = softwareUnitsFilter.map(elem => elem.reduce((acc, next) => acc + next.table,""));

    let completeSoftwareUnitsList = softwareUnitsReduce.map((elem, index) => segaSoftwareUnitsList[index].header + elem);

    const annualReportListAltered = [""].concat(completeAnnualReportList); // to manage keeping the index values the same with softwareSalesList

    const textInputValues = [
        {
           value: "Software Units",
           placeholder: "Search specific titles or game series",
           label: `Title/Series Search - Number of Titles/Series shown: ${titlesLength}`,
           description: "Clear field to show all titles of the selected platform", 
        },
        {
           value: "FY Series IP",
           placeholder: "Search specific series",
           label: `Series Search - Number of game series shown: ${titlesLength}`,
           description: "Clear field to show all game series listed.", 
        },
    ].filter(elem => elem.value === value);

    useEffect(() => {

        switch (value) {
            case "FY Series IP":
                // due to altering the list later, the list is offset by +1, apply props.setIndex-1 
                setTitlesLength(annualReportTitlesFilter?.[props.setIndex-1]?.length ?? 0)
                break;

            case "Software Units":
                setTitlesLength(softwareUnitsFilter?.[props.setIndex]?.length ?? 0)
                break;
        
            default:
                break;
        }

    }, [value, titleValue, platformValue])

    const componentListNew = Array.from({length: props.yearLength}, (elem, index) => {

        return [
            { 
                name: "Data Sources",
                value: segaLinks?.[index],
            },
            {
                name: "Consolidated Operating Results",
                value: segaConsolidatedEarningsList?.[index],
                graph: <GRAPH_CONSOLIDATED_EARNINGS setData={segaConsolidatedEarningsGraphList[index]} />
            },
            {
                name: "Software Sales",
                value: softwareSalesList?.[index],
                graph: <GRAPH_SOFTWARE_SALES setData={softwareSalesGraphList[index]} />
            },
            {
                name: "Software Units",
                // value: segaSoftwareUnitsList?.[index],
                value: completeSoftwareUnitsList?.[index],
                graph: <GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE setData={segaSoftwareUnitsGraphList[index]} />
            },
            {
                name: "FY Series IP",
                value: annualReportListAltered[index] ? annualReportListAltered[index] : undefined, // can't use optional chaining on falsy values i.e. ""
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
                        {(value === "FY Series IP")
                            ? <Select
                                data={[
                                 "All",
                             ].concat([...annualReportIPTypes])}
                            defaultValue={"All"} 
                            label="Select all or one IP Type:"
                            radius="xl"
                            value={platformValue}
                            onChange={setPlatformValue}
                          /> 
                            : undefined
                        }
                        {(value === "FY Series IP" || value === "Software Units")
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
            }
            {selectGraph(value)}
        </div>
        
    );
}
