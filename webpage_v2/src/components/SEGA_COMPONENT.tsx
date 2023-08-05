import { useEffect, useState } from "react";
import { Code, SegmentedControl, Select, TextInput, Button } from "@mantine/core";
import { useSelector } from "react-redux";
import { segaSoftwareUnitsList, segaSoftwareUnitsGraphList } from "../data/sega/software_units_sega"
import { softwareSalesList, softwareSalesGraphList } from "../data/sega/software_sales_sega";
// import { annualReportList } from "../data/sega/annual_report_sega";
import { segaAnnualReport } from "../data/generalTables/annual_report_general";
import { segaConsolidatedEarningsList, segaConsolidatedEarningsGraphList } from "../data/generalTables/consolidated_earnings_general";
import { segaLinks } from "../data/generalTables/data_sources_general";
import { printTextBlock, liner, platformSearchFeatures, titleSetSearchFeatures } from "../utils/table_design_logic";
import type { BackgroundColours } from "../features/backgroundReducer";

import GRAPH_SOFTWARE_SALES from "../data/generalGraphs/GRAPH_SOFTWARE_SALES";
import GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE from "../data/nintendo/Graphs/GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE";
import GRAPH_CONSOLIDATED_EARNINGS from "../data/generalGraphs/GRAPH_CONSOLIDATED_EARNINGS";

import {cite, citeCopy} from "../utils/copySetCitation";

export default function SEGA_COMPONENT(props: {setIndex: number; yearLength: number}) {

    const [value, setValue] = useState("");

    const state = useSelector((state: BackgroundColours) => state);

    const [titleValue, setTitleValue] = useState("");
    const [titlesLength, setTitlesLength] = useState(0);
    const [platformValue, setPlatformValue] = useState<string | null>("All" ?? "All");

    let correctFyForAnnualReports = -1;

    // let annualReportIndex = annualReportList?.[props.setIndex + correctFyForAnnualReports];
    let annualReportIndex = segaAnnualReport.get(props.setIndex + correctFyForAnnualReports);

    let annualReportInput = (annualReportIndex === undefined)
        ? undefined
        : [annualReportIndex]

    let softwareUnitsIndex = segaSoftwareUnitsList?.[props.setIndex];

    let annualReportIPTypes = new Set<string>();

    let predictText = new Set<string>();

    let annualReportCall = platformSearchFeatures(annualReportInput, annualReportIndex?.header ?? "ERROR", "FY Series IP", value, platformValue ?? "All", "Single", "Single", annualReportIPTypes, titleValue, predictText)

    let softwareUnitsCall = titleSetSearchFeatures(softwareUnitsIndex, "Software Units", value, titleValue, predictText)

    const textInputValues = [
        {
           value: softwareUnitsCall.sectionTitle,
           placeholder: "Search specific titles or game series",
           label: `Title/Series Search - Number of Titles/Series shown: ${titlesLength}`,
           description: "Clear field to show all titles of the selected platform", 
        },
        {
           value: annualReportCall.sectionTitle,
           placeholder: "Search specific series",
           label: `Series Search - Number of game series shown: ${titlesLength}`,
           description: "Clear field to show all game series listed.", 
        },
    ].filter(elem => elem.value === value);

    useEffect(() => {

        switch (value) {
            case annualReportCall.sectionTitle:
                setTitlesLength(annualReportCall.titlesLength.length)

                let platformReset1 = [...annualReportIPTypes].filter(elem => elem === platformValue)

                if ((platformReset1?.length ?? 0) === 0) {
                            setPlatformValue("All");
                }

                break;

            case softwareUnitsCall.sectionTitle:
                setTitlesLength(softwareUnitsCall.titlesLength.length)
                break;
        
            default:
                break;
        }

    }, [value, titleValue, platformValue, props.setIndex, annualReportIPTypes])

    const componentListNew = Array.from({length: props.yearLength}, (elem, index) => {

        return [
            { 
                name: "Data Sources",
                value: segaLinks.get(index),
            },
            {
                name: "Consolidated Operating Results",
                value: segaConsolidatedEarningsList.get(index),
                graph: <GRAPH_CONSOLIDATED_EARNINGS setData={segaConsolidatedEarningsGraphList.get(index)} />
            },
            {
                name: "Software Sales",
                value: softwareSalesList.get(index),
                graph: <GRAPH_SOFTWARE_SALES setData={softwareSalesGraphList.get(index)} />
            },
            {
                name: "Software Units",
                value: softwareUnitsCall.table,
                graph: <GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE setData={segaSoftwareUnitsGraphList[index]} />
            },
            {
                name: "FY Series IP",
                value: annualReportCall.table
                // value: annualReportListAltered[index] ? annualReportListAltered[index] : undefined, // can't use optional chaining on falsy values i.e. ""
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
                        {(value === annualReportCall.sectionTitle)
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
                        {(value === annualReportCall.sectionTitle || value === softwareUnitsCall.sectionTitle)
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
