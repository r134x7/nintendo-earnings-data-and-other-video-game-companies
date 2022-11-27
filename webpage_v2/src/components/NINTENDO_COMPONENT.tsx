import { useState } from "react";
import { Code, SegmentedControl, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { dataSourcesList } from "../data/nintendo/Data_Sources/data_sources_full_list";
import { consolidatedEarningsList, consolidatedEarningsGraphList } from "../data/nintendo/consolidated_earnings_nintendo";
import { fyMillionSellerTitlesList, fyMillionSellerTitlesGraphList } from "../data/nintendo/fy_million_seller_titles_nintendo";
import { globalHardwareSoftwareMobileList } from "../data/nintendo/global_hardware_software_mobile_nintendo";
import { keySalesIndicatorsList, keySalesIndicatorsGraphList } from "../data/nintendo/key_sales_indicators_nintendo";
import { regionalHardwareSoftwareList } from "../data/nintendo/regional_hardware_software_nintendo";
import { topSellingTitlesList, topSellingTitlesGraphList } from "../data/nintendo/top_selling_titles_nintendo";

import GRAPH_NINTENDO_EARNINGS from "../data/nintendo/Graphs/GRAPH_NINTENDO_EARNINGS";
import GRAPH_NINTENDO_KPI from "../data/nintendo/Graphs/GRAPH_NINTENDO_KPI";
import GRAPH_NINTENDO_TOP_SELLING_TITLES from "../data/nintendo/Graphs/GRAPH_NINTENDO_TOP_SELLING_TITLES_SWITCH";
import GRAPH_NINTENDO_FY_MILLION_SELLER_TITLES from "../data/nintendo/Graphs/GRAPH_NINTENDO_FY_MILLION_SELLER_TITLES";

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
                graph: keySalesIndicatorsGraphList[index]? <GRAPH_NINTENDO_KPI setData={keySalesIndicatorsGraphList[index]} /> : undefined
            },
            {
                name: "FY Million-Seller Titles",
                value: fyMillionSellerTitlesList[index]? fyMillionSellerTitlesList[index] : undefined,
                graph: fyMillionSellerTitlesGraphList[index]? <GRAPH_NINTENDO_FY_MILLION_SELLER_TITLES setData={fyMillionSellerTitlesGraphList[index]} /> : undefined
            },
            {
                name: "Regional Hardware/Software units",
                value: regionalHardwareSoftwareList[index]? regionalHardwareSoftwareList[index] : undefined,
            },
            {
                name: "Top Selling Titles",
                value: topSellingTitlesList[index]? topSellingTitlesList[index] : undefined,
                graph: topSellingTitlesGraphList[index]? <GRAPH_NINTENDO_TOP_SELLING_TITLES setData={topSellingTitlesGraphList[index]} /> : undefined
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
