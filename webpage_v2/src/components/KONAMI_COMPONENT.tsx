import { useState, useEffect } from "react";
import { Code, SegmentedControl, TextInput, Button } from "@mantine/core";
import { useSelector } from "react-redux";
import { konamiAnnualReport } from "../data/generalTables/annual_report_general";
import { konamiSegmentEarningsList } from "../data/generalTables/segment_earnings_general";
import { konamiConsolidatedEarningsList, konamiConsolidatedEarningsGraphList} from "../data/generalTables/consolidated_earnings_general";
import { konamiLinks } from "../data/generalTables/data_sources_general";
import type { BackgroundColours } from "../features/backgroundReducer";
import { printTextBlock, liner, titleSetSearchFeatures } from "../utils/table_design_logic";

import GRAPH_CONSOLIDATED_EARNINGS from "../data/generalGraphs/GRAPH_CONSOLIDATED_EARNINGS";

import {cite, citeCopy} from "../utils/copySetCitation";

export default function KONAMI_COMPONENT(props: {setIndex: number; yearLength: number}) {

    const [value, setValue] = useState("");

    const stateColour = useSelector((state: BackgroundColours) => state.colour);
    const stateFontColor = useSelector((state: BackgroundColours) => state.fontColor);

    const [titleValue, setTitleValue] = useState("");
    const [titlesLength, setTitlesLength] = useState(0);

    // let correctFyForAnnualReports = -1;

    // let annualReportIndex = konamiAnnualReport.get(props.setIndex + correctFyForAnnualReports);

    let predictText = new Set<string>();

    let annualReportCall = titleSetSearchFeatures(konamiAnnualReport.get(props.setIndex), "FY Series IP/Titles", value, titleValue, predictText);

    const textInputValues = [
        {
           value: annualReportCall.sectionTitle,
           placeholder: "Search specific series/titles",
           label: `Series Search - Number of game series/titles shown: ${titlesLength}`,
           description: "Clear field to show all game series/titles listed.", 
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
                value: konamiLinks.get(index),
            },
            {
                name: "Consolidated Operating Results",
                value: konamiConsolidatedEarningsList.get(index),
                graph: <GRAPH_CONSOLIDATED_EARNINGS setData={konamiConsolidatedEarningsGraphList.get(index)} />
            },
            {
                name: "Segment Information",
                value: konamiSegmentEarningsList.get(index),
            },
            {
                name: "FY Series IP/Titles",
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
                    : <Code onCopy={e => citeCopy(e, cite)} style={{backgroundColor:`${stateColour}`, color:(stateFontColor === "dark") ? "#fff" : "#000000"}} block>
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
                                    <Code style={{border:"solid", borderWidth:"1px", borderRadius:"16px", backgroundColor:`${stateColour}`, color:(stateFontColor === "dark") ? "#fff" : "#000000"}} >
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
                                    <Code style={{border:"solid", borderWidth:"1px", borderRadius:"16px", backgroundColor:`${stateColour}`, color:(stateFontColor === "dark") ? "#fff" : "#000000"}} >
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
