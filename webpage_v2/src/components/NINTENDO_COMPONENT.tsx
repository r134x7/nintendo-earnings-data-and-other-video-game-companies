import { useState } from "react";
import { Code, SegmentedControl, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { nintendoLinks } from "../data/generalTables/data_sources_general";
import { nintendoConsolidatedEarningsList, nintendoConsolidatedEarningsGraphList} from "../data/generalTables/consolidated_earnings_general";
import { fyMillionSellerTitlesList, fyMillionSellerTitlesGraphList } from "../data/nintendo/fy_million_seller_titles_nintendo";
import { globalHardwareSoftwareMobileList, globalHardwareSoftwareMobileGraphList } from "../data/nintendo/global_hardware_software_mobile_nintendo";
import { keySalesIndicatorsList, keySalesIndicatorsGraphList } from "../data/nintendo/key_sales_indicators_nintendo";
import { regionalHardwareSoftwareList } from "../data/nintendo/regional_hardware_software_nintendo";
import { topSellingTitlesList, topSellingTitlesGraphList } from "../data/nintendo/top_selling_titles_nintendo";
import { consolidatedSalesInformationList, consolidatedSalesInformationGraphList } from "../data/nintendo/consolidated_sales_information_nintendo";

import GRAPH_NINTENDO_KPI from "../data/nintendo/Graphs/GRAPH_NINTENDO_KPI";
import GRAPH_NINTENDO_TOP_SELLING_TITLES from "../data/nintendo/Graphs/GRAPH_NINTENDO_TOP_SELLING_TITLES_SWITCH";
import GRAPH_NINTENDO_FY_MILLION_SELLER_TITLES from "../data/nintendo/Graphs/GRAPH_NINTENDO_FY_MILLION_SELLER_TITLES";
import GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE from "../data/nintendo/Graphs/GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE";
import GRAPH_CONSOLIDATED_EARNINGS from "../data/generalGraphs/GRAPH_CONSOLIDATED_EARNINGS";

import {cite, citeCopy} from "../utils/copySetCitation";

export default function NINTENDO_COMPONENT(props: {setIndex: number; yearLength: number}) {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    const componentListNew = Array.from({length: props.yearLength}, (elem, index) => {

        return [
            { 
                name: "Data Sources",
                value: nintendoLinks?.[index],
            },
            {
                name: "Consolidated Operating Results",
                value: nintendoConsolidatedEarningsList?.[index],
                graph: <GRAPH_CONSOLIDATED_EARNINGS setData={nintendoConsolidatedEarningsGraphList[index]} />
            },
            {
                name: "Consolidated Sales Information",
                value: consolidatedSalesInformationList?.[index],
                graph: <GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE setData={consolidatedSalesInformationGraphList[index]} />
            },
            {
                name: "Global Hardware/Software Units",
                value: globalHardwareSoftwareMobileList?.[index],
                graph: <GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE setData={globalHardwareSoftwareMobileGraphList[index]} />
            },
            {
                name: "Key Sales Indicators",
                value: keySalesIndicatorsList?.[index],
                graph: <GRAPH_NINTENDO_KPI setData={keySalesIndicatorsGraphList[index]} />
            },
            {
                name: "FY Million-Seller Titles",
                value: fyMillionSellerTitlesList?.[index],
                graph: <GRAPH_NINTENDO_FY_MILLION_SELLER_TITLES setData={fyMillionSellerTitlesGraphList[index]} /> 
            },
            {
                name: "Regional Hardware/Software Units",
                value: regionalHardwareSoftwareList?.[index],
            },
            {
                name: "Top Selling Titles",
                value: topSellingTitlesList?.[index],
                graph: <GRAPH_NINTENDO_TOP_SELLING_TITLES setData={topSellingTitlesGraphList[index]} />
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
                    : <Code onCopy={e => citeCopy(e, cite)} style={{backgroundColor: `${state.colour}`}} block>{selectData(value)}</Code>
            }
            {selectGraph(value)}
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
        
    );
}
