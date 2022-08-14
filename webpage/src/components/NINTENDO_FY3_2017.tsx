import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Pagination, Group, Space, Switch } from "@mantine/core";
import { useSelector } from "react-redux";
import { printEarnings,
        netIncomeDifference,
        netIncomeLastFYDifference,
        netSalesDifference,
        netSalesLastFYDifference,
        operatingIncomeDifference,
        operatingIncomeLastFYDifference, } from "../data/nintendo/Nintendo-FY3-2017/earnings-fy3-17";

import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js'; // required to actually get chart.js with react-chartjs-2 to work
Chart.register(...registerables); // to get the package working, source: https://www.chartjs.org/docs/next/getting-started/integration.html

export default function NINTENDO_FY3_17() {

    const [data, setData] = useState("");
    const [value, setValue] = useState("");
    const [sources, setSources] = useState(<></>)

    const state: any = useSelector(state => state);

    const [activePage, setPage] = useState(1);
    const [secondDataRef, setSecondDataRef] = useState(2)
    const [checked, setChecked] = useState(false);
    const [barChecked, setBarChecked] = useState(false);

    

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

    const consolidatedOperatingResultsLabels = [
        "Net Sales",
        "Operating Income",
        "Net Income"
    ]

    const consolidatedOperatingResultsGraph = [
        netSalesDifference.map((elem) => elem.quarter),
        operatingIncomeDifference.map((elem) => elem.quarter),
        netIncomeDifference.map((elem) => elem.quarter),
    ]

    console.log(netIncomeDifference)

    const consolidatedOperatingResultsGraphLastFY = [
        netIncomeLastFYDifference,
        operatingIncomeLastFYDifference,
        netIncomeLastFYDifference
    ]

    const nintendoHardwareSoftwareMobile = "no data here at this time";
    
    const keyIndicators = "no data here at this time";

    const fyMillionSellers = "no data here at this time";

    const regionalHWSW = "no data here at this time";

    const topSellingTitles = "no data here at this time";

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
                            "Top Selling Titles",]}
            />
            
            {sources}
            <Code style={{backgroundColor: `${state.colour}`}} block>{data}</Code>
            <div className="chart">
            <Line
                    datasetIdKey="Consolidated Earnings"
                    data={{
                        labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                        datasets: [
                            {
                                data: consolidatedOperatingResultsGraph[activePage-1],
                                label: consolidatedOperatingResultsLabels[activePage-1],
                                borderColor: state.colour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
                                    return (curr === ".")
                                            ? acc + "1)"
                                            : acc + curr;
                                }),

                            },
                        ], 
                    }}

                    options={{
                        scales: {
                            y: {
                                title: {
                                  display: true,
                                  text: "Million yen (¥)",
                                },
                              },
                              x: {
                                  title: {
                                      display: true,
                                      text: "Quarters for Fiscal Year Ending March 2017",
                                    },
                                },
                            }
                        }}
                     />
                     <Group mt="md" position="center">
                   <Pagination page={activePage} onChange={setPage} total={consolidatedOperatingResultsGraph.length} color="teal" size="sm" radius="md" />
                </Group>
            </div>
        </div>
        
    );
}
