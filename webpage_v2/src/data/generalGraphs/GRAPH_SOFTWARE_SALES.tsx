import { useState } from "react";
import { Pagination, Group, Switch } from "@mantine/core";
import { useSelector } from "react-redux";
import { EarningsV2, EarningsValue } from "../../utils/general_earnings_logic";
import type { BackgroundColours } from "../../features/backgroundReducer";

import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js'; // required to actually get chart.js with react-chartjs-2 to work
import { extractValue } from "../generalTables/sales_per_software_unit_cml";
Chart.register(...registerables); // to get the package working, source: https://www.chartjs.org/docs/next/getting-started/integration.html

export default function GRAPH_SOFTWARE_SALES(props:
    {setData: undefined | ({
        thisFY: string,
        lastFY: string,
        marchThisFY: string,
        marchLastFY: string,
        dataThisFY: Map<number, EarningsV2>,
        dataLastFY: Map<number, EarningsV2>,
    })
    }) {

        const state = useSelector((state: BackgroundColours) => state);

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
        currentFY: props.setData?.thisFY as string,
        lastFY: props.setData?.lastFY as string,
        MarchThisYear: props.setData?.marchThisFY as string,
        MarchLastYear: props.setData?.marchLastFY as string,
    }

    const headerLabels = [
        props.setData?.dataThisFY.get(0)?.name + " Net Sales " + labels.currentFY,
        props.setData?.dataThisFY.get(1)?.name + " Software Units " + labels.currentFY,
        props.setData?.dataThisFY.get(2)?.name + " Sales Per Software Unit " + labels.currentFY,
    ];

    const headerLabelsLastFY = [
        props.setData?.dataLastFY.get(0)?.name + " Net Sales " + labels.lastFY,
        props.setData?.dataLastFY.get(1)?.name + " Software Units " + labels.lastFY,
        props.setData?.dataLastFY.get(2)?.name + " Sales Per Software Unit " + labels.lastFY,
    ];

    const dataThisFY = props.setData?.dataThisFY as Map<number, EarningsV2>

    const dataLastFY = props.setData?.dataLastFY as Map<number, EarningsV2>

    const graphQuarters: number[][] = Array.from({length:3}, (v,i) => {
        // Number([]) returns 0......
        return [
            Number(extractValue(dataThisFY.get(i)?.Q1QtrValue as EarningsValue)),
            Number(extractValue(dataThisFY.get(i)?.Q2QtrValue as EarningsValue)),
            Number(extractValue(dataThisFY.get(i)?.Q3QtrValue as EarningsValue)),
            Number(extractValue(dataThisFY.get(i)?.Q4QtrValue as EarningsValue)),
        ]
    });

    const graphQuartersLastFY: number[][] = Array.from({length:3}, (v,i) => {
        // Number([]) returns 0......
        return [
            Number(extractValue(dataLastFY.get(i)?.Q1QtrValue as EarningsValue)),
            Number(extractValue(dataLastFY.get(i)?.Q2QtrValue as EarningsValue)),
            Number(extractValue(dataLastFY.get(i)?.Q3QtrValue as EarningsValue)),
            Number(extractValue(dataLastFY.get(i)?.Q4QtrValue as EarningsValue)),
        ]
    });

    const graphCumulative: number[][] = Array.from({length:3}, (v,i) => {
        // Number([]) returns 0......
        return [
            Number(extractValue(dataThisFY.get(i)?.Q1CmlValue as EarningsValue)),
            Number(extractValue(dataThisFY.get(i)?.Q2CmlValue as EarningsValue)),
            Number(extractValue(dataThisFY.get(i)?.Q3CmlValue as EarningsValue)),
            Number(extractValue(dataThisFY.get(i)?.Q4CmlValue as EarningsValue)),
        ]
    });

    const graphCumulativeLastFY: number[][] = Array.from({length:3}, (v,i) => {
        // Number([]) returns 0......
        return [
            Number(extractValue(dataLastFY.get(i)?.Q1CmlValue as EarningsValue)),
            Number(extractValue(dataLastFY.get(i)?.Q2CmlValue as EarningsValue)),
            Number(extractValue(dataLastFY.get(i)?.Q3CmlValue as EarningsValue)),
            Number(extractValue(dataLastFY.get(i)?.Q4CmlValue as EarningsValue)),
        ]
    });

    const bothOff = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (barChecked) {
            setChecked(event.currentTarget.checked)
            setBarChecked(event.currentTarget.checked)
            return
        }

        return setChecked(event.currentTarget.checked)
    };

    return (
        <div className="chart">
        {(checked === false && barChecked === false)
            ? (
                <Line
                    datasetIdKey="Sales Per Software Unit"
                    data={{
                        labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                        datasets: [
                            {
                            data: graphQuarters[activePage-1],
                            label: `${headerLabels[activePage-1]}[Quarter]`,
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
                            label: `${headerLabels[activePage-1]}[Cumulative]`,
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
                            // stacked: true,
                            title: {
                              display: true,
                              text: (activePage === 1)
                                        ? "Million yen (¥)"
                                        : (activePage === 2)
                                        ? "Units in Millions"
                                        : "Yen (¥)",
                            },
                          },
                          x: {
                            // stacked: true,
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
                    datasetIdKey="Sales Per Software Unit"
                    data={{
                        labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                        datasets: [
                            {
                                data: graphQuarters[activePage-1],
                                label: `${headerLabels[activePage-1]}[Quarter]`,
                                borderColor: "indigo",
                                backgroundColor: "red",
                                pointRadius: 6,
                                pointBorderColor: "black",
                                pointBorderWidth: 2,
                                stack: "stack 0",
                            },
                            {
                                data: graphCumulative[activePage-1],
                                label: `${headerLabels[activePage-1]}[Cumulative]`,
                                borderColor: "rgba(75, 0, 130, .30)",
                                backgroundColor: "red",
                                pointRadius: 6,
                                pointBorderColor: "black",
                                pointBorderWidth: 2,
                                stack: "stack 0",
                            },
                            {
                                data: graphQuartersLastFY[activePage-1],
                                label: `${headerLabelsLastFY[activePage-1]}[Quarter]`,
                                borderColor: "orange",
                                backgroundColor: "cyan",
                                pointRadius: 6,
                                pointBorderColor: "black",
                                pointBorderWidth: 2,
                                stack: "stack 1",
                            },
                            {
                                data: graphCumulativeLastFY[activePage-1],
                                label: `${headerLabelsLastFY[activePage-1]}[Cumulative]`,
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
                            // stacked: true,
                            title: {
                              display: true,
                              text: (activePage === 1)
                                        ? "Million yen (¥)"
                                        : (activePage === 2)
                                        ? "Units in Millions"
                                        : "Yen (¥)",
                            },
                          },
                          x: {
                            // stacked: true,
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
                    datasetIdKey="Sales Per Software Unit"
                    data={{
                        labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                        datasets: [
                            {
                            data: graphQuarters[activePage-1],
                            label: `${headerLabels[activePage-1]}[Quarter]`,
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
                            label: `${headerLabels[activePage-1]}[Cumulative]`,
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
                            // stacked: true,
                            title: {
                              display: true,
                              text: (activePage === 1)
                                        ? "Million yen (¥)"
                                        : (activePage === 2)
                                        ? "Units in Millions"
                                        : "Yen (¥)",
                            },
                          },
                          x: {
                            // stacked: true,
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
                datasetIdKey="Sales Per Software Unit"
                data={{
                    labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                    datasets: [
                        {
                            data: graphQuarters[activePage-1],
                            label: `${headerLabels[activePage-1]}[Quarter]`,
                            borderColor: "black",
                            backgroundColor: "indigo",
                            borderWidth: 2,
                            stack: "stack 0"
                            // stack: "stack 0"
                        },
                        {
                            data: graphCumulative[activePage-1],
                            label: `${headerLabels[activePage-1]}[Cumulative]`,
                            borderColor: "black",
                            backgroundColor: "rgba(75, 0, 130, .20)",
                            borderWidth: 2,
                            stack: "stack 1"
                            // stack: "stack 0"
                        },
                        {
                            data: graphQuartersLastFY[activePage-1],
                            label: `${headerLabelsLastFY[activePage-1]}[Quarter]`,
                            borderColor: "black",
                            backgroundColor: "orange",
                            borderWidth: 2,
                            stack: "stack 2"
                            // stack: "stack 1"
                        },
                        {
                            data: graphCumulativeLastFY[activePage-1],
                            label: `${headerLabelsLastFY[activePage-1]}[Cumulative]`,
                            borderColor: "black",
                            backgroundColor: "rgba(255, 165, 0, 0.2)",
                            borderWidth: 2,
                            stack: "stack 3"
                            // stack: "stack 1"
                        },
                    ], 
                }}

                options={{
                 scales: {
                    y: {
                        // stacked: true,
                        title: {
                          display: true,
                              text: (activePage === 1)
                                        ? "Million yen (¥)"
                                        : (activePage === 2)
                                        ? "Units in Millions"
                                        : "Yen (¥)",
                        },
                      },
                      x: {
                            // stacked: true,
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
                            <Switch onLabel="ON" offLabel="OFF" size="md" checked={checked} onChange={bothOff} />
            </Group>
        </div>

    )
}