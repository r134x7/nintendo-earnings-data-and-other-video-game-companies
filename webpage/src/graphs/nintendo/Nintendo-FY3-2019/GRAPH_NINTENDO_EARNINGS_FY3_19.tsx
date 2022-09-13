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
         operatingMarginCumulative,
         operatingMarginCumulativeLastFY,
         netIncome,
         netIncomeLastFY,
         netSales,
         netSalesLastFY,
         operatingIncome,
         operatingIncomeLastFY,
        } from "../../../data/nintendo/Nintendo-FY3-2019/earnings-fy3-19"

import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js'; // required to actually get chart.js with react-chartjs-2 to work
Chart.register(...registerables); // to get the package working, source: https://www.chartjs.org/docs/next/getting-started/integration.html

export default function GRAPH_NINTENDO_EARNINGS_FY3_19() {

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
        currentFY: "FY3/2019",
        lastFY: "FY3/2018",
        MarchThisYear: "March 2019",
        MarchLastYear: "March 2018"
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

    const graphQuarters = [
        netSalesDifference.map((elem) => elem.value),
        operatingIncomeDifference.map((elem) => elem.value),
        operatingMarginQuarters.map((elem) => elem.value),
        netIncomeDifference.map((elem) => elem.value),
    ]

    const graphQuartersLastFY = [
        netSalesLastFYDifference.map((elem) => elem.value),
        operatingIncomeLastFYDifference.map((elem) => elem.value),
        operatingMarginQuartersLastFY.map((elem) => elem.value),
        netIncomeLastFYDifference.map((elem) => elem.value),
    ]

    const graphCumulative = [
        netSales.map((elem, index) => elem.value - netSalesDifference[index].value),
        operatingIncome.map((elem, index) => elem.value - operatingIncomeDifference[index].value),
        [operatingMarginQuarters[0] , ...operatingMarginCumulative].map((elem, index) => {
            return elem.value
        }),
        netIncome.map((elem, index) => elem.value - netIncomeDifference[index].value),
    ]

    const graphCumulativeLastFY = [
        netSalesLastFY.map((elem, index) => elem.value - netSalesLastFYDifference[index].value),
        operatingIncomeLastFY.map((elem, index) => elem.value - operatingIncomeLastFYDifference[index].value),
        [operatingMarginQuartersLastFY[0], ...operatingMarginCumulativeLastFY].map((elem, index) => {
            return elem.value
        }),

        netIncomeLastFY.map((elem, index) => elem.value - netIncomeLastFYDifference[index].value),
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
                            data: graphQuarters[activePage-1],
                            label: `${consolidatedOperatingResultsLabels[activePage-1]}[Quarter]`,
                            borderColor: state.colour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
                                return (curr === ".")
                                        ? acc + "1)"
                                        : acc + curr;
                                }),
                            backgroundColor: state.colour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
                                    return (curr === ".")
                                            ? acc + "1)"
                                            : acc + curr;
                                    }),
                            pointRadius: 6,
                            pointBorderColor: "black",
                            pointBorderWidth: 2,
                            },
                            {
                            data: graphCumulative[activePage-1],
                            label: `${consolidatedOperatingResultsLabels[activePage-1]}[Cumulative]`,
                            borderColor: state.colour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
                                return (curr === ".")
                                        ? acc + ".3)"
                                        : acc + curr;
                                }),
                            backgroundColor: state.colour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
                                    return (curr === ".")
                                            ? acc + ".3)"
                                            : acc + curr;
                                    }),
                            pointRadius: 6,
                            pointBorderColor: "black",
                            pointBorderWidth: 2,
                            },
                        ], 
                    }}

                    options={{
                     scales: {
                        y: {
                            stacked: (activePage !== 3)
                                        ? true
                                        : false,
                            title: {
                              display: true,
                              text: (activePage !== 3)
                                        ? "Million yen (¥)"
                                        : "Percentage (%)",
                            },
                          },
                          x: {
                            stacked: (activePage !== 3)
                                        ? true
                                        : false,
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
                                data: graphQuarters[activePage-1],
                                label: `${consolidatedOperatingResultsLabels[activePage-1]}[Quarter]`,
                                borderColor: "indigo",
                                backgroundColor: "red",
                                pointRadius: 6,
                                pointBorderColor: "black",
                                pointBorderWidth: 2,
                                stack: "stack 0",
                            },
                            {
                                data: graphCumulative[activePage-1],
                                label: `${consolidatedOperatingResultsLabels[activePage-1]}[Cumulative]`,
                                borderColor: "rgba(75, 0, 130, .30)",
                                backgroundColor: "red",
                                pointRadius: 6,
                                pointBorderColor: "black",
                                pointBorderWidth: 2,
                                stack: "stack 0",
                            },
                            {
                                data: graphQuartersLastFY[activePage-1],
                                label: `${consolidatedOperatingResultsLabelsLastFY[activePage-1]}[Quarter]`,
                                borderColor: "orange",
                                backgroundColor: "cyan",
                                pointRadius: 6,
                                pointBorderColor: "black",
                                pointBorderWidth: 2,
                                stack: "stack 1",
                            },
                            {
                                data: graphCumulativeLastFY[activePage-1],
                                label: `${consolidatedOperatingResultsLabelsLastFY[activePage-1]}[Cumulative]`,
                                borderColor: "rgba(255, 165, 0, 0.3)",
                                backgroundColor: "cyan",
                                pointRadius: 6,
                                pointBorderColor: "black",
                                pointBorderWidth: 2,
                                stack: "stack 1",
                            },
                        ], 
                    }}

                    options={{
                     scales: {
                        y: {
                            stacked: (activePage !== 3)
                                        ? true
                                        : false,
                            title: {
                              display: true,
                              text: (activePage !== 3)
                                        ? "Million yen (¥)"
                                        : "Percentage (%)",
                            },
                          },
                          x: {
                            stacked: (activePage !== 3)
                                        ? true
                                        : false,
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
                            data: graphQuarters[activePage-1],
                            label: `${consolidatedOperatingResultsLabels[activePage-1]}[Quarter]`,
                            backgroundColor: state.colour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
                                return (curr === ".")
                                        ? acc + ".80)"
                                        : acc + curr;
                            }),
                            borderColor: "black",
                            borderWidth: 2,
                            },
                            {
                            data: graphCumulative[activePage-1],
                            label: `${consolidatedOperatingResultsLabels[activePage-1]}[Cumulative]`,
                            backgroundColor: state.colour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
                                return (curr === ".")
                                        ? acc + ".20)"
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
                            stacked: (activePage !== 3)
                                        ? true
                                        : false,
                            title: {
                              display: true,
                              text: (activePage !== 3)
                                        ? "Million yen (¥)"
                                        : "Percentage (%)",
                            },
                          },
                          x: {
                            stacked: (activePage !== 3)
                                        ? true
                                        : false,
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
                            data: graphQuarters[activePage-1],
                            label: `${consolidatedOperatingResultsLabels[activePage-1]}[Quarter]`,
                            borderColor: "black",
                            backgroundColor: "indigo",
                            borderWidth: 2,
                            stack: (activePage !== 3)
                                    ? "stack 0"
                                    : "0",
                        },
                        {
                            data: graphCumulative[activePage-1],
                            label: `${consolidatedOperatingResultsLabels[activePage-1]}[Cumulative]`,
                            borderColor: "black",
                            backgroundColor: "rgba(75, 0, 130, .20)",
                            borderWidth: 2,
                            stack: (activePage !== 3)
                                    ? "stack 0"
                                    : "1",
                        },
                        {
                            data: graphQuartersLastFY[activePage-1],
                            label: `${consolidatedOperatingResultsLabelsLastFY[activePage-1]}[Quarter]`,
                            borderColor: "black",
                            backgroundColor: "orange",
                            borderWidth: 2,
                            stack: (activePage !== 3)
                                    ? "stack 1"
                                    : "2",
                        },
                        {
                            data: graphCumulativeLastFY[activePage-1],
                            label: `${consolidatedOperatingResultsLabelsLastFY[activePage-1]}[Cumulative]`,
                            borderColor: "black",
                            backgroundColor: "rgba(255, 165, 0, 0.2)",
                            borderWidth: 2,
                            stack: (activePage !== 3)
                                    ? "stack 1"
                                    : "3",
                        },
                    ], 
                }}

                options={{
                 scales: {
                    y: {
                            stacked: (activePage !== 3)
                                        ? true
                                        : false,
                        title: {
                          display: true,
                          text: (activePage !== 3)
                                        ? "Million yen (¥)"
                                        : "Percentage (%)",
                        },
                      },
                    x: {
                            stacked: (activePage !== 3)
                                        ? true
                                        : false,
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
                    <Pagination page={activePage} onChange={setPage} total={graphQuarters.length} color="teal" size="sm" radius="md" />
                        <Switch onLabel="BAR" offLabel="BAR" size="md" checked={barChecked} onChange={(event) => setBarChecked(event.currentTarget.checked)} />
                            <Switch onLabel="ON" offLabel="OFF" size="md" checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />
            </Group>
        </div>

    )
}