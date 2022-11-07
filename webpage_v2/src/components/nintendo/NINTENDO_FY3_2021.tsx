import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Space, Card } from "@mantine/core";
import { useSelector } from "react-redux";
import { printEarnings } from "../../data/nintendo/Nintendo_FY3_2021/earnings_fy3_2021";
import { printKPI } from "../../data/nintendo/Nintendo_FY3_2021/kpi_fy3_2021";
import { printTopSellingSwitchTitles } from "../../data/nintendo/Nintendo_FY3_2021/top_NSW_sw_fy3_2021";
import { printFYMillionSellerTitles } from "../../data/nintendo/Nintendo_FY3_2021/mst_fy3_2021";
import { printHardwareSoftware } from "../../data/nintendo/Nintendo_FY3_2021/nsw_hardware_software_fy3_2021";
import { printRegions } from "../../data/nintendo/Nintendo_FY3_2021/regional_hw_sw_fy3_2021";
import GRAPH_NINTENDO_EARNINGS_FY3_2021 from "../../graphs/nintendo/Nintendo_FY3_2021/GRAPH_NINTENDO_EARNINGS_FY3_2021";
import GRAPH_NINTENDO_KPI_FY3_2021 from "../../graphs/nintendo/Nintendo_FY3_2021/GRAPH_NINTENDO_KPI_FY3_2021";
import GRAPH_NINTENDO_TOP_SELLING_TITLES_SWITCH_FY3_2021 from "../../graphs/nintendo/Nintendo_FY3_2021/GRAPH_NINTENDO_TOP_SELLING_TITLES_SWITCH_FY3_2021";
import GRAPH_NINTENDO_MST_FY3_2021 from "../../graphs/nintendo/Nintendo_FY3_2021/GRAPH_NINTENDO_MST_FY3_2021";
import GRAPH_NINTENDO_NSW_HW_SW_FY3_2021 from "../../graphs/nintendo/Nintendo_FY3_2021/GRAPH_NINTENDO_NSW_HW_SW_FY3_2021";

export default function NINTENDO_FY3_2021() {

    const [value, setValue] = useState("");
    const [sources, setSources] = useState(<></>)

    const state: any = useSelector(state => state);

    useEffect(() => {

        (value === "Data Sources")
            ? setSources(DATA_SOURCES)
            : setSources(<></>)

    }, [value])

    const componentList = [
        {
            name: "Consolidated Operating Results", 
            value: printEarnings,
        },
        {
            name: "Global Hardware/Software units, Mobile/IP related income", 
            value: printHardwareSoftware,
        },
        {
            name: "Key/Digital Sales Indicators", 
            value: printKPI,
        },
        {
            name: "FY Million-Seller Titles", 
            value: printFYMillionSellerTitles,
        },
        {
            name: "Regional Hardware/Software units", 
            value: printRegions,
        },
        {
            name: "Top Selling Titles",
            value: printTopSellingSwitchTitles,
        },
    ];

    const graphList = [
        {
            name: "Consolidated Operating Results", 
            value: <GRAPH_NINTENDO_EARNINGS_FY3_2021 />,
        },
        {
            name: "Global Hardware/Software units, Mobile/IP related income", 
            value: <GRAPH_NINTENDO_NSW_HW_SW_FY3_2021 />,
        },
        {
            name: "Key/Digital Sales Indicators", 
            value: <GRAPH_NINTENDO_KPI_FY3_2021 />,
        },
        {
            name: "FY Million-Seller Titles", 
            value: <GRAPH_NINTENDO_MST_FY3_2021 /> ,
        },
        {
            name: "Top Selling Titles",
            value: <GRAPH_NINTENDO_TOP_SELLING_TITLES_SWITCH_FY3_2021 />,
        },
    ]

    const dataList = ["Data Sources"].concat(componentList.map(elem => elem.name));

    const selectDataComponent = (objList: {name: string, value: string | JSX.Element}[]) =>
    (dataUsed: string): string | JSX.Element => {

        let [dataSelected] = objList.filter(elem => dataUsed === elem.name)

        return (dataSelected) ? dataSelected.value : ""
    };

    const selectData = selectDataComponent(componentList);
    const selectGraph = selectDataComponent(graphList);


    function DATA_SOURCES() {

        return (
        <Card shadow="sm" p="sm" radius="md" withBorder  style={{margin: "1em"}}>
            <Text style={{overflowWrap: "anywhere"}}>
                <Stack align="center">
                        1st Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2020/200806e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2020/200806e.pdf
                    </Anchor>
                        1st Quarter Financial Results Explanatory Material:
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2020/200806_2e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2020/200806_2e.pdf
                    </Anchor>
                
                        2nd Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2020/201105e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2020/201105e.pdf
                    </Anchor>
                        2nd Quarter Financial Results Explanatory Material:
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2020/201105_5e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2020/201105_5e.pdf
                    </Anchor>
                
                        3rd Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2021/210201e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2021/210201e.pdf
                    </Anchor>
                        3rd Quarter Financial Results Explanatory Material:
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2021/210201_4e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2021/210201_4e.pdf
                    </Anchor>
                
                        4th Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2021/210506e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2021/210506e.pdf
                    </Anchor>
                        4th Quarter Financial Results Explanatory Material:
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2021/210506_4e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2021/210506_4e.pdf
                    </Anchor>
                </Stack>  
            </Text> 
        </Card>
        )
    };

    const consolidatedOperatingResults = printEarnings;

    const nintendoHardwareSoftwareMobile = printHardwareSoftware;
    
    const keyIndicators = printKPI;

    const fyMillionSellers = printFYMillionSellerTitles;

    const regionalHWSW = printRegions;

    const topSellingTitles = printTopSellingSwitchTitles; 

    return (

        <div>  
            <SegmentedControl
                    fullWidth 
                    orientation="vertical"
                    value={value}
                    onChange={setValue}
                    data={dataList}
            />
            
            {sources}
            <Code style={{backgroundColor: `${state.colour}`}} block>{selectData(value)}</Code>
            {selectGraph(value)}
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
    );
}
