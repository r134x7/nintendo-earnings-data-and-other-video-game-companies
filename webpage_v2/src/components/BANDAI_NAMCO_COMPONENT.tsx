import { useState, useEffect } from "react";
import { Code, SegmentedControl, TextInput, Button } from "@mantine/core";
import { useSelector } from "react-redux";
import { softwareSalesList, softwareSalesGraphList } from "../data/bandaiNamco/software_sales_bandai_namco";
// import { annualReportList } from "../data/bandaiNamco/annual_report_bandai_namco";
import { bandaiNamcoAnnualReport } from "../data/generalTables/annual_report_general";
import { bandaiNamcoConsolidatedEarningsList, bandaiNamcoConsolidatedEarningsGraphList } from "../data/generalTables/consolidated_earnings_general";
import { bandaiNamcoLinks } from "../data/generalTables/data_sources_general";
import { printTextBlock, liner, titleSetSearchFeatures } from "../utils/table_design_logic";
import type { BackgroundColours } from "../features/backgroundReducer";

import GRAPH_SOFTWARE_SALES from "../data/generalGraphs/GRAPH_SOFTWARE_SALES";
import GRAPH_CONSOLIDATED_EARNINGS from "../data/generalGraphs/GRAPH_CONSOLIDATED_EARNINGS";

import {cite, citeCopy} from "../utils/copySetCitation";

export default function BANDAI_NAMCO_COMPONENT(props: {setIndex: number; yearLength: number}) {

    const [value, setValue] = useState("");

    const state = useSelector((state: BackgroundColours) => state);

    const [titleValue, setTitleValue] = useState("");
    const [titlesLength, setTitlesLength] = useState(0);

    let correctFyForAnnualReports = -1;
    
    // let annualReportIndex = annualReportList?.[props.setIndex + correctFyForAnnualReports]
    let annualReportIndex = bandaiNamcoAnnualReport.get(props.setIndex + correctFyForAnnualReports);

    let predictText = new Set<string>();

    let annualReportCall = titleSetSearchFeatures(annualReportIndex, "FY Series IP", value, titleValue, predictText);

    const textInputValues = [
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
                break;

            default:
                break;
        }

    }, [titleValue, value])

    const componentListNew = Array.from({length: props.yearLength}, (elem, index) => {

        return [
            { 
                name: "Data Sources",
                value: bandaiNamcoLinks.get(index),
            },
            {
                name: "Consolidated Operating Results",
                value: bandaiNamcoConsolidatedEarningsList.get(index),
                graph: <GRAPH_CONSOLIDATED_EARNINGS setData={bandaiNamcoConsolidatedEarningsGraphList.get(index)} />
            },
            {
                name: "Software Sales",
                value: softwareSalesList.get(index),
                graph: <GRAPH_SOFTWARE_SALES setData={softwareSalesGraphList.get(index)} />
            },
            {
                name: "FY Series IP",
                value: annualReportCall.table,
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
                        ? <>
                        <TextInput
                        placeholder={textInputValues[0].placeholder}
                        label={textInputValues[0].label}
                        description={textInputValues[0].description}
                        radius="xl"
                        value={titleValue}
                        onChange={e => {
                            setTitleValue(e.target.value.toLocaleLowerCase())
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
