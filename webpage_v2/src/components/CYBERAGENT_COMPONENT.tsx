import { useState } from "react";
import { Code, SegmentedControl } from "@mantine/core";
import { useSelector } from "react-redux";
import { cyberAgentSegmentEarningsList } from "../data/generalTables/segment_earnings_general";
import { cyberAgentConsolidatedEarningsList, cyberAgentConsolidatedEarningsGraphList } from "../data/generalTables/consolidated_earnings_general";
import { cyberAgentLinks } from "../data/generalTables/data_sources_general";
import type { BackgroundColours } from "../features/backgroundReducer";

import GRAPH_CONSOLIDATED_EARNINGS from "../data/generalGraphs/GRAPH_CONSOLIDATED_EARNINGS";

import {cite, citeCopy} from "../utils/copySetCitation";

export default function CYBERAGENT_COMPONENT(props: {setIndex: number; yearLength: number}) {

    const [value, setValue] = useState("");

    const stateColour = useSelector((state: BackgroundColours) => state.colour);
    const stateFontColor = useSelector((state: BackgroundColours) => state.fontColor);

    const componentListNew = Array.from({length: props.yearLength}, (elem, index) => {

        return [
            { 
                name: "Data Sources",
                value: cyberAgentLinks.get(index),
            },
            {
                name: "Consolidated Operating Results",
                value: cyberAgentConsolidatedEarningsList.get(index),
                graph: <GRAPH_CONSOLIDATED_EARNINGS setData={cyberAgentConsolidatedEarningsGraphList.get(index)} />
            },
            {
                name: "Segment Information",
                value: cyberAgentSegmentEarningsList.get(index),
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
                    : <Code onCopy={e => citeCopy(e, cite)} style={{backgroundColor:`${stateColour}`, color:(stateFontColor === "dark") ? "#fff" : "#000000"}} block>{selectData(value)}</Code>
            }
            {selectGraph(value)}
        </div>
        
    );
}
