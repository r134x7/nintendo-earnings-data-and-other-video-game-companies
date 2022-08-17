import { useState } from "react";
import { Pagination, Group, Switch } from "@mantine/core";
import { useSelector } from "react-redux";
import { netIncomeDifference,
         netIncomeLastFYDifference,
         netSalesDifference,
         netSalesLastFYDifference,
         operatingIncomeDifference,
         operatingIncomeLastFYDifference,
         operatingMarginQuarters,
         operatingMarginQuartersLastFY,                        
        } from "../../../data/nintendo/Nintendo-FY3-2020/earnings-fy3-20"

import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js'; // required to actually get chart.js with react-chartjs-2 to work
Chart.register(...registerables); // to get the package working, source: https://www.chartjs.org/docs/next/getting-started/integration.html

export default function GRAPH_NINTENDO_EARNINGS_FY3_20() {

    const state: any = useSelector(state => state);

    const [activePage, setPage] = useState(1);
    const [checked, setChecked] = useState(false);
    const [barChecked, setBarChecked] = useState(false);

    type Labels = {
        currentFY: string,
        lastFY: string,
        MarchThisYear: string,
        MarchLastYear: string,
    }

    const labels: Labels = {
        currentFY: "FY3/2020",
        lastFY: "FY3/2019",
        MarchThisYear: "March 2020",
        MarchLastYear: "March 2019"
    }

    const consolidatedOperatingResultsLabels = [
        `Net Sales ${labels.currentFY}`,
        `Operating Income ${labels.currentFY}`,
        `Operating Margin ${labels.currentFY}`,
        `Net Income ${labels.currentFY}`,
    ]

    const consolidatedOperatingResultsLabelsLastFY = [
        `Net Sales ${labels.lastFY}`,
        `Operating Income ${labels.lastFY}`,
        `Operating Margin ${labels.lastFY}`,
        `Net Income ${labels.lastFY}`,
    ]

    const consolidatedOperatingResultsGraph = [
        netSalesDifference.map((elem) => elem.value),
        operatingIncomeDifference.map((elem) => elem.value),
        operatingMarginQuarters.map((elem) => elem.value),
        netIncomeDifference.map((elem) => elem.value),
    ]

    const consolidatedOperatingResultsGraphLastFY = [
        netSalesLastFYDifference.map((elem) => elem.value),
        operatingIncomeLastFYDifference.map((elem) => elem.value),
        operatingMarginQuartersLastFY.map((elem) => elem.value),
        netIncomeLastFYDifference.map((elem) => elem.value),
    ]

    return (
        <div className="chart">
        {(checked === false && barChecked === false)
            ? (
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
                              text: (activePage !== 3)
                                        ? "Million yen (¥)"
                                        : "Percentage (%)",
                            },
                          },
                          x: {
                              title: {
                                  display: true,
                                  text: `Quarters for Fiscal Year Ending ${labels.MarchThisYear}`,
                                },
                            },
                        }
                    }}
                />
            )
            : (checked === true && barChecked === false) 
            ? (
                <Line
                    datasetIdKey="Consolidated Earnings"
                    data={{
                        labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                        datasets: [
                            {
                                data: consolidatedOperatingResultsGraph[activePage-1],
                                label: consolidatedOperatingResultsLabels[activePage-1],
                                borderColor: "indigo",
                                backgroundColor: "red",

                            },
                            {
                                data: consolidatedOperatingResultsGraphLastFY[activePage-1],
                                label: consolidatedOperatingResultsLabelsLastFY[activePage-1],
                                borderColor: "orange",
                                backgroundColor: "black",
                            },
                        ], 
                    }}

                    options={{
                     scales: {
                        y: {
                            title: {
                              display: true,
                              text: (activePage !== 3)
                                        ? "Million yen (¥)"
                                        : "Percentage (%)",
                            },
                          },
                          x: {
                              title: {
                                  display: true,
                                  text: `Quarters for Fiscal Years Ending ${labels.MarchThisYear} and ${labels.MarchLastYear}`,
                                },
                            },
                        }
                    }}
                />
            )
            : (checked === false && barChecked === true) 
            ? (
                <Bar
                    datasetIdKey="Consolidated Earnings"
                    data={{
                        labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                        datasets: [
                            {
                            data: consolidatedOperatingResultsGraph[activePage-1],
                            label: consolidatedOperatingResultsLabels[activePage-1],
                            backgroundColor: state.colour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
                                return (curr === ".")
                                        ? acc + ".80)"
                                        : acc + curr;
                            }),
                            borderColor: "black",
                            borderWidth: 2,

                            },
                        ], 
                    }}

                    options={{
                     scales: {
                        y: {
                            title: {
                              display: true,
                              text: (activePage !== 3)
                                        ? "Million yen (¥)"
                                        : "Percentage (%)",
                            },
                          },
                          x: {
                              title: {
                                  display: true,
                                  text: `Quarters for Fiscal Year Ending ${labels.MarchThisYear}`,
                                },
                            },
                        }
                    }}
                />
            )
            : (
                <Bar
                datasetIdKey="Consolidated Earnings"
                data={{
                    labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                    datasets: [
                        {
                            data: consolidatedOperatingResultsGraph[activePage-1],
                            label: consolidatedOperatingResultsLabels[activePage-1],
                            borderColor: "black",
                            backgroundColor: "indigo",
                            borderWidth: 2,

                        },
                        {
                            data: consolidatedOperatingResultsGraphLastFY[activePage-1],
                            label: consolidatedOperatingResultsLabelsLastFY[activePage-1],
                            borderColor: "black",
                            backgroundColor: "orange",
                            borderWidth: 2,
                        },
                    ], 
                }}

                options={{
                 scales: {
                    y: {
                        title: {
                          display: true,
                          text: (activePage !== 3)
                                        ? "Million yen (¥)"
                                        : "Percentage (%)",
                        },
                      },
                      x: {
                          title: {
                              display: true,
                              text: `Quarters for Fiscal Years Ending ${labels.MarchThisYear} and ${labels.MarchLastYear}`,
                            },
                        },
                    }
                }}
            />
            )}
            <Group mt="md" position="center">
                <Pagination page={activePage} onChange={setPage} total={consolidatedOperatingResultsGraph.length} color="teal" size="sm" radius="md" />
                    <Switch onLabel="BAR" offLabel="BAR" size="md" checked={barChecked} onChange={(event) => setBarChecked(event.currentTarget.checked)} />
                        <Switch onLabel="ON" offLabel="OFF" size="md" checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />
            </Group>
        </div>
    )
}