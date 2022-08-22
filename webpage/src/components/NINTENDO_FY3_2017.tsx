import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Space} from "@mantine/core";
import { useSelector } from "react-redux";
import { printEarnings } from "../data/nintendo/Nintendo-FY3-2017/earnings-fy3-17";
import { printKPI } from "../data/nintendo/Nintendo-FY3-2017/kpi-fy3-17";
import { printTopSellingSwitchTitles } from "../data/nintendo/Nintendo-FY3-2017/topNSWswfy3-17";
import GRAPH_NINTENDO_EARNINGS_FY3_17 from "../graphs/nintendo/Nintendo-FY3-2017/GRAPH_NINTENDO_EARNINGS_FY3_17";
import GRAPH_NINTENDO_KPI_FY3_17 from "../graphs/nintendo/Nintendo-FY3-2017/GRAPH_NINTENDO_KPI_FY3_17";

export default function NINTENDO_FY3_17() {

    const [data, setData] = useState("");
    const [value, setValue] = useState("");
    const [sources, setSources] = useState(<></>)

    const state: any = useSelector(state => state);

    useEffect(() => {
        (value === "Consolidated Operating Results")
            ? setData(consolidatedOperatingResults)
            : (value === "WW Hardware/Software units, Mobile/IP related income")
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
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2016/160727e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2016/160727e.pdf
                    </Anchor>
                
                        2nd Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2016/161026e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2016/161026e.pdf
                    </Anchor>
                
                        3rd Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2017/170131e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2017/170131e.pdf
                    </Anchor>
                
                        4th Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2017/170427e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2017/170427e.pdf
                    </Anchor>
                        4th Quarter Supplementary Information:
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2017/170427_6e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2017/170427_6e.pdf
                    </Anchor>
                </Stack>  
            </Text> 
        )
    };

    const consolidatedOperatingResults = printEarnings;

    const nintendoHardwareSoftwareMobile = "no data here at this time";
    
    const keyIndicators = printKPI;

    const fyMillionSellers = "no data here at this time";

    const regionalHWSW = "no data here at this time";

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
                            "WW Hardware/Software units, Mobile/IP related income", 
                            "Key/Digital Sales Indicator", 
                            "FY Million-Seller Titles", 
                            "Regional Hardware/Software units", 
                            "Top Selling Titles",
                        ]}
            />
            
            {sources}
            <Code style={{backgroundColor: `${state.colour}`}} block>{data}</Code>
            {(value === "Consolidated Operating Results")
                ? <GRAPH_NINTENDO_EARNINGS_FY3_17 />
                : (value === "Key/Digital Sales Indicator")
                ? <GRAPH_NINTENDO_KPI_FY3_17 />
                : null
            }
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
        
    );
}
