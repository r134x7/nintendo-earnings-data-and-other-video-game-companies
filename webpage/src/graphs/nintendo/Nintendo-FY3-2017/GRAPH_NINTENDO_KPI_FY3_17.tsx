import { useState } from "react";
import { Pagination, Group, Switch } from "@mantine/core";
import { useSelector } from "react-redux";
import {
        digitalSalesQtr,
        proportionOfDigitalSalesQtr,
        proportionOfFirstPartySoftwareSalesQtr,
        proportionOfHardwareSalesQtr,
        proportionOfOverseasSalesQtr
       } from "../../../data/nintendo/Nintendo-FY3-2017/kpi-fy3-17"

import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js'; // required to actually get chart.js with react-chartjs-2 to work
Chart.register(...registerables); // to get the package working, source: https://www.chartjs.org/docs/next/getting-started/integration.html

export default function GRAPH_NINTENDO_KPI_FY3_17() {

    const state: any = useSelector(state => state);

    const [activePage, setPage] = useState(1);
    const [barChecked, setBarChecked] = useState(false);

    type Labels = {
        currentFY: string,
        MarchThisYear: string,
    }

    const labels: Labels = {
        currentFY: "FY3/2017",
        MarchThisYear: "March 2017",
    }

    const kpiLabels = [
        `Proportion of overseas sales ${labels.currentFY}`,
        `Proportion of hardware sales ${labels.currentFY}`,
        `Proportion of first party software sales ${labels.currentFY}`,
        `Digital Sales ${labels.currentFY}`,
        `Proportion of Digital Sales ${labels.currentFY}`,
    ]

    const quartersGraph = [
        proportionOfOverseasSalesQtr.map((elem) => elem.value),
        proportionOfHardwareSalesQtr.map((elem) => elem.value),
        proportionOfFirstPartySoftwareSalesQtr.map((elem) => elem.value),
        digitalSalesQtr.map((elem) => elem.value),
        proportionOfDigitalSalesQtr.map((elem) => elem.value),
    ]

    return (
        <div className="chart">
            {(barChecked === false)
                ? (
                    <Line
                        datasetIdKey="Consolidated Earnings"
                        data={{
                            labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                            datasets: [
                                {
                                data: quartersGraph[activePage-1],
                                label: kpiLabels[activePage-1],
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
                                  text: (activePage === 4)
                                            ? "Billion yen (¥)"
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
                                data: quartersGraph[activePage-1],
                                label: kpiLabels[activePage-1],
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
                                  text: (activePage === 4)
                                            ? "Billion yen (¥)"
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
                )}
                    <Group mt="md" position="center">
                        <Pagination page={activePage} onChange={setPage} total={quartersGraph.length} color="teal" size="sm" radius="md" />
                            <Switch onLabel="BAR" offLabel="BAR" size="md" checked={barChecked} onChange={(event) => setBarChecked(event.currentTarget.checked)} />
                </Group>
            </div>

    )
}
