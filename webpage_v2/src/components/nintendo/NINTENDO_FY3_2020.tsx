import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { printEarnings } from "../../data/nintendo/Nintendo_FY3_2020/earnings_fy3_2020";
import { printKPI } from "../../data/nintendo/Nintendo_FY3_2020/kpi_fy3_2020";
import { printTopSellingSwitchTitles } from "../../data/nintendo/Nintendo_FY3_2020/top_NSW_sw_fy3_2020";
import { printFYMillionSellerTitles } from "../../data/nintendo/Nintendo_FY3_2020/mst_fy3_2020";
import { printHardwareSoftware } from "../../data/nintendo/Nintendo_FY3_2020/nsw_hardware_software_fy3_2020";
import { printRegions } from "../../data/nintendo/Nintendo_FY3_2020/regional_hw_sw_fy3_2020";
import GRAPH_NINTENDO_EARNINGS_FY3_20 from "../../graphs/nintendo/Nintendo_FY3_2020/GRAPH_NINTENDO_EARNINGS_FY3_20";
import GRAPH_NINTENDO_KPI_FY3_20 from "../../graphs/nintendo/Nintendo_FY3_2020/GRAPH_NINTENDO_KPI_FY3_20";
import GRAPH_NINTENDO_TOP_SELLING_TITLES_SWITCH_FY3_20 from "../../graphs/nintendo/Nintendo_FY3_2020/GRAPH_NINTENDO_TOP_SELLING_TITLES_SWITCH_FY3_20";
import GRAPH_NINTENDO_MST_FY3_20 from "../../graphs/nintendo/Nintendo_FY3_2020/GRAPH_NINTENDO_MST_FY3_20";
import GRAPH_NINTENDO_NSW_HW_SW_FY3_20 from "../../graphs/nintendo/Nintendo_FY3_2020/GRAPH_NINTENDO_NSW_HW_SW_FY3_20";

export default function NINTENDO_FY3_2020() {

    const [data, setData] = useState("");
    const [value, setValue] = useState("");
    const [sources, setSources] = useState(<></>)

    const state: any = useSelector(state => state);

    useEffect(() => {
        (value === "Consolidated Operating Results")
            ? setData(consolidatedOperatingResults)
            : (value === "Global Hardware/Software units, Mobile/IP related income")
            ? setData(nintendoHardwareSoftwareMobile)
            : (value === "Key/Digital Sales Indicators")
            ? setData(keyIndicators)
            : (value === "FY Million-Seller Titles")
            ? setData(fyMillionSellers)
            : (value === "Regional Hardware/Software units")
            ? setData(regionalHWSW)
            : (value === "Top Selling Titles")
            ? setData(topSellingTitles)
            : setData("");

        (value === "Data Sources")
            ? setSources(DATA_SOURCES)
            : setSources(<></>)

    }, [value])

    function DATA_SOURCES() {

        return (
            <Text>
                <Stack align="center">
                        1st Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2019/190730e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2019/190730e.pdf
                    </Anchor>
                        1st Quarter Supplementary Information:
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2019/190730_2e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2019/190730_2e.pdf
                    </Anchor>
                
                        2nd Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2019/191031e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2019/191031e.pdf
                    </Anchor>
                        2nd Quarter Supplementary Information:
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2019/191031_3e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2019/191031_3e.pdf
                    </Anchor>
                
                        3rd Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2020/200130e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2020/200130e.pdf
                    </Anchor>
                        3rd Quarter Supplementary Information:
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2020/200130_3e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2020/200130_3e.pdf
                    </Anchor>
                
                        4th Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2020/200507e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2020/200507e.pdf
                    </Anchor>
                        4th Quarter Financial Results Explanatory Material:
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2020/200507_3e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2020/200507_3e.pdf
                    </Anchor>
                </Stack>  
            </Text> 
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
                    data={[ "Data Sources",
                            "Consolidated Operating Results", 
                            "Global Hardware/Software units, Mobile/IP related income", 
                            "Key/Digital Sales Indicators", 
                            "FY Million-Seller Titles", 
                            "Regional Hardware/Software units", 
                            "Top Selling Titles",]}
            />
            
            {sources}
            <Code style={{backgroundColor: `${state.colour}`}} block>{data}</Code>
            {(value === "Consolidated Operating Results")
                ? <GRAPH_NINTENDO_EARNINGS_FY3_20 />
                : (value === "Global Hardware/Software units, Mobile/IP related income")
                ? <GRAPH_NINTENDO_NSW_HW_SW_FY3_20 />
                : (value === "Key/Digital Sales Indicators")
                ? <GRAPH_NINTENDO_KPI_FY3_20 />
                : (value === "FY Million-Seller Titles")
                ? <GRAPH_NINTENDO_MST_FY3_20 /> 
                : (value === "Top Selling Titles")
                ? <GRAPH_NINTENDO_TOP_SELLING_TITLES_SWITCH_FY3_20 />
                : null
            }
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
        
    );
}
