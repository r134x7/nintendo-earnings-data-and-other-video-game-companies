import { useState } from "react";
import { Code, SegmentedControl, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { segaSoftwareUnitsList, segaSoftwareUnitsGraphList } from "../data/sega/software_units_sega"
import { softwareSalesList, softwareSalesGraphList } from "../data/sega/software_sales_sega";
import { annualReportList } from "../data/sega/annual_report_sega";
import { segaConsolidatedEarningsList, segaConsolidatedEarningsGraphList } from "../data/generalTables/consolidated_earnings_general";
import { segaLinks } from "../data/generalTables/data_sources_general";

import GRAPH_SOFTWARE_SALES from "../data/generalGraphs/GRAPH_SOFTWARE_SALES";
import GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE from "../data/nintendo/Graphs/GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE";
import GRAPH_CONSOLIDATED_EARNINGS from "../data/generalGraphs/GRAPH_CONSOLIDATED_EARNINGS";

export default function SEGA_COMPONENT(props: {setIndex: number; yearLength: number}) {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    const annualReportListAltered = [""].concat(annualReportList); // to manage keeping the index values the same with softwareSalesList

    const componentListNew = Array.from({length: props.yearLength}, (elem, index) => {

        return [
            { 
                name: "Data Sources",
                value: segaLinks[index]? segaLinks[index] : undefined,
            },
            {
                name: "Consolidated Operating Results",
                value: segaConsolidatedEarningsList[index]? segaConsolidatedEarningsList[index] : undefined,
                graph: segaConsolidatedEarningsGraphList[index]? <GRAPH_CONSOLIDATED_EARNINGS setData={segaConsolidatedEarningsGraphList[index]} /> : undefined
            },
            {
                name: "Software Sales",
                value: softwareSalesList[index]? softwareSalesList[index] : undefined,
                graph: softwareSalesGraphList[index]? <GRAPH_SOFTWARE_SALES setData={softwareSalesGraphList[index]} /> : undefined
            },
            {
                name: "Software Units",
                value: segaSoftwareUnitsList[index]? segaSoftwareUnitsList[index] : undefined,
                graph: segaSoftwareUnitsGraphList[index]? <GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE setData={segaSoftwareUnitsGraphList[index]} /> : undefined
            },
            {
                name: "FY Series IP",
                value: annualReportListAltered[index]? annualReportListAltered[index] : undefined,
            },
        ].filter(elem => elem.value !== undefined);
    })

    const dataList = componentListNew[props.setIndex].map(elem => elem.name);

    const selectDataComponent = (objList: {name: string, value: string | JSX.Element | undefined}[]) =>
    (dataUsed: string): string | JSX.Element | undefined => {

        let [dataSelected] = objList.filter(elem => dataUsed === elem.name)

        return (dataSelected) ? dataSelected.value : ""
    };

    const selectGraphComponent = (objList: {name: string, value: string | JSX.Element | undefined, graph?: JSX.Element | undefined}[]) =>
    (dataUsed: string): JSX.Element | undefined => {

        let [dataSelected] = objList.filter(elem => dataUsed === elem.name)

        return (dataSelected) ? dataSelected.graph : undefined
    };

    const selectGraph = selectGraphComponent(componentListNew[props.setIndex]);

    const selectData = selectDataComponent(componentListNew[props.setIndex]);

    return (

        <div>  
            <SegmentedControl
                    fullWidth 
                    orientation="vertical"
                    value={value}
                    onChange={setValue}
                    data={dataList}
            />
            
            {
                (value === "Data Sources")
                    ? selectData(value)
                    : <Code style={{backgroundColor: `${state.colour}`}} block>{selectData(value)}</Code>
            }
            {selectGraph(value)}
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
        
    );
}
