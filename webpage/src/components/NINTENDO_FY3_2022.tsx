import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { printEarnings } from "../data/nintendo/Nintendo-FY3-2022/earnings-fy3-22";
import { printKPI } from "../data/nintendo/Nintendo-FY3-2022/kpi-fy3-22";
import { printTopSellingSwitchTitles } from "../data/nintendo/Nintendo-FY3-2022/topNSWswfy3-22";
import { printFYMillionSellerTitles } from "../data/nintendo/Nintendo-FY3-2022/mst-fy3-22";
import { printHardwareSoftware } from "../data/nintendo/Nintendo-FY3-2022/nsw-hardware-software-fy3-22";
import { printRegions } from "../data/nintendo/Nintendo-FY3-2022/regional-hw-sw-fy3-22";
import GRAPH_NINTENDO_EARNINGS_FY3_22 from "../graphs/nintendo/Nintendo-FY3-2022/GRAPH_NINTENDO_EARNINGS_FY3_22";
import GRAPH_NINTENDO_KPI_FY3_22 from "../graphs/nintendo/Nintendo-FY3-2022/GRAPH_NINTENDO_KPI_FY3_22";
import GRAPH_NINTENDO_TOP_SELLING_TITLES_SWITCH_FY3_22 from "../graphs/nintendo/Nintendo-FY3-2022/GRAPH_NINTENDO_TOP_SELLING_TITLES_SWITCH_FY3_22";
import GRAPH_NINTENDO_NSW_HW_SW_FY3_22 from "../graphs/nintendo/Nintendo-FY3-2022/GRAPH_NINTENDO_NSW_HW_SW_FY3_22";

export default function NINTENDO_FY3_22() {

    const [data, setData] = useState("");
    const [value, setValue] = useState("");
    const [sources, setSources] = useState(<></>)

    const state: any = useSelector(state => state);

    useEffect(() => {
        (value === "Consolidated Operating Results")
            ? setData(consolidatedOperatingResults)
            : (value === "Global Hardware/Software units, Mobile/IP related income")
            ? setData(nintendoHardwareSoftwareMobile)
            : (value === "Key/Digital Sales Indicator")
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
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2021/210805e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2021/210805e.pdf
                    </Anchor>
                        1st Quarter Financial Results Explanatory Material:
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2021/210805_3e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2021/210805_3e.pdf
                    </Anchor>
                
                        2nd Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2021/211104e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2021/211104e.pdf
                    </Anchor>
                        2nd Quarter Financial Results Explanatory Material:
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2021/211104_4e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2021/211104_4e.pdf
                    </Anchor>
                
                        3rd Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2022/220203e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2022/220203e.pdf
                    </Anchor>
                        3rd Quarter Financial Results Explanatory Material:
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2022/220203_4e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2022/220203_4e.pdf
                    </Anchor>
                
                        4th Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2022/220510e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2022/220510e.pdf
                    </Anchor>
                        4th Quarter Financial Results Explanatory Material:
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2022/220510_7e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2022/220510_7e.pdf
                    </Anchor>
                </Stack>  
            </Text> 
        )
    };

    const consolidatedOperatingResults = printEarnings;

    const topSellingTitles = printTopSellingSwitchTitles;

    const regionalHWSW = printRegions;

    const fyMillionSellers = printFYMillionSellerTitles;

    const keyIndicators = printKPI;

    const nintendoHardwareSoftwareMobile = printHardwareSoftware;

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
                            "Key/Digital Sales Indicator", 
                            "FY Million-Seller Titles", 
                            "Regional Hardware/Software units", 
                            "Top Selling Titles",]}
            />
            
            {sources}
            <Code style={{backgroundColor: `${state.colour}`}} block>{data}</Code>
            {(value === "Consolidated Operating Results")
                ? <GRAPH_NINTENDO_EARNINGS_FY3_22 />
                : (value === "Global Hardware/Software units, Mobile/IP related income")
                ? <GRAPH_NINTENDO_NSW_HW_SW_FY3_22 />
                : (value === "Key/Digital Sales Indicator")
                ? <GRAPH_NINTENDO_KPI_FY3_22 />
                : (value === "Top Selling Titles")
                ? <GRAPH_NINTENDO_TOP_SELLING_TITLES_SWITCH_FY3_22 />
                : null
            }
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
        
    );
}
