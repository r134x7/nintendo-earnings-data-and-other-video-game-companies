import { useState } from "react";
import { Code, SegmentedControl, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { softwareSalesList } from "../data/squareEnix/software_sales_square_enix";
import { annualReportList } from "../data/squareEnix/annual_report_square_enix";
import { squareEnixConsolidatedEarningsList, squareEnixConsolidatedEarningsGraphList } from "../data/generalTables/consolidated_earnings_general";
import { squareEnixLinks } from "../data/generalTables/data_sources_general";

import GRAPH_CONSOLIDATED_EARNINGS from "../data/generalGraphs/GRAPH_CONSOLIDATED_EARNINGS";

export default function SQUARE_ENIX_COMPONENT(props: {setIndex: number; yearLength: number}) {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    const annualReportListAltered = [""].concat(annualReportList); // to manage keeping the index values the same with softwareSalesList

    const componentListNew = Array.from({length: props.yearLength}, (elem, index) => {

        return [
            { 
                name: "Data Sources",
                value: squareEnixLinks[index]? squareEnixLinks[index] : undefined,
            },
            {
                name: "Consolidated Financial Results",
                value: squareEnixConsolidatedEarningsList[index]? squareEnixConsolidatedEarningsList[index] : undefined,
                graph: squareEnixConsolidatedEarningsGraphList[index]? <GRAPH_CONSOLIDATED_EARNINGS setData={squareEnixConsolidatedEarningsGraphList[index]} /> : undefined
            },
            {
                name: "Software Sales",
                value: softwareSalesList[index]? softwareSalesList[index] : undefined,
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
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
        
    );
}
