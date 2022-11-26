import { useState } from "react";
import { Code, SegmentedControl, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { dataSourcesList } from "../data/nintendo/Data_Sources/data_sources_full_list";
import { consolidatedEarningsList } from "../data/nintendo/consolidated_earnings_nintendo";
import { fyMillionSellerTitlesList } from "../data/nintendo/fy_million_seller_titles_nintendo";
import { globalHardwareSoftwareMobileList } from "../data/nintendo/global_hardware_software_mobile_nintendo";
import { keySalesIndicatorsList } from "../data/nintendo/key_sales_indicators_nintendo";
import { regionalHardwareSoftwareList } from "../data/nintendo/regional_hardware_software_nintendo";
import { topSellingTitlesList } from "../data/nintendo/top_selling_titles_nintendo";

import GRAPH_NINTENDO_EARNINGS from "../data/nintendo/Graphs/GRAPH_NINTENDO_EARNINGS";
import { consolidatedEarningsGraphList } from "../data/nintendo/consolidated_earnings_nintendo";

export default function NINTENDO_COMPONENT(props: {setIndex: number; yearLength: number}) {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    const componentListNew = Array.from({length: props.yearLength}, (elem, index) => {

        return [
            { 
                name: "Data Sources",
                value: dataSourcesList[index]? dataSourcesList[index] : undefined,
            },
            {
                name: "Consolidated Operating Results",
                value: consolidatedEarningsList[index]? consolidatedEarningsList[index] : undefined,
                graph: consolidatedEarningsGraphList[index]? <GRAPH_NINTENDO_EARNINGS setData={consolidatedEarningsGraphList[index]} /> : undefined
            },
            {
                name: "Global Hardware/Software units, Mobile/IP related income",
                value: globalHardwareSoftwareMobileList[index]? globalHardwareSoftwareMobileList[index] : undefined,
            },
            {
                name: "Key/Digital Sales Indicators",
                value: keySalesIndicatorsList[index]? keySalesIndicatorsList[index] : undefined,
            },
            {
                name: "FY Million-Seller Titles",
                value: fyMillionSellerTitlesList[index]? fyMillionSellerTitlesList[index] : undefined,
            },
            {
                name: "Regional Hardware/Software units",
                value: regionalHardwareSoftwareList[index]? regionalHardwareSoftwareList[index] : undefined,
            },
            {
                name: "Top Selling Titles",
                value: topSellingTitlesList[index]? topSellingTitlesList[index] : undefined,
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

    const selectData = selectDataComponent(componentListNew[props.setIndex]);
    const selectGraph = selectGraphComponent(componentListNew[props.setIndex]);


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
