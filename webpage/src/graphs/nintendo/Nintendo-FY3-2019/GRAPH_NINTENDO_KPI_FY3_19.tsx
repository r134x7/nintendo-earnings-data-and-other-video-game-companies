import { useState } from "react";
import { Pagination, Group, Switch } from "@mantine/core";
import { useSelector } from "react-redux";
import {
    digitalSalesQtr as digitalSalesQtrLastFY,
    proportionOfDigitalSalesQtr as proportionOfDigitalSalesQtrLastFY,
    proportionOfFirstPartySoftwareSalesQtr as proportionOfFirstPartySoftwareSalesQtrLastFY,
    proportionOfHardwareSalesQtr as proportionOfHardwareSalesQtrLastFY,
    proportionOfOverseasSalesQtr as proportionOfOverseasSalesQtrLastFY,
   } from "../../../data/nintendo/Nintendo-FY3-2018/kpi-fy3-18"
import {
        digitalSalesQtr,
        proportionOfDigitalSalesQtr,
        proportionOfFirstPartySoftwareSalesQtr,
        proportionOfHardwareSalesQtr,
        proportionOfOverseasSalesQtr,
        proportionOfDLverPackagedSoftwareQtr,
       } from "../../../data/nintendo/Nintendo-FY3-2019/kpi-fy3-19"

import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js'; // required to actually get chart.js with react-chartjs-2 to work
Chart.register(...registerables); // to get the package working, source: https://www.chartjs.org/docs/next/getting-started/integration.html

export default function GRAPH_NINTENDO_KPI_FY3_19() {

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

    const kpiLabels = [
        `Proportion of overseas sales ${labels.currentFY}`,
        `Proportion of hardware sales ${labels.currentFY}`,
        `Proportion of first party software sales ${labels.currentFY}`,
        `Digital Sales ${labels.currentFY}`,
        `Proportion of Digital Sales ${labels.currentFY}`,
        `Proportion of downloadable versions of Packaged Software Sales ${labels.currentFY}`,
    ]

    const kpiLabelsLastFY = [
        `Proportion of overseas sales ${labels.lastFY}`,
        `Proportion of hardware sales ${labels.lastFY}`,
        `Proportion of first party software sales ${labels.lastFY}`,
        `Digital Sales ${labels.lastFY}`,
        `Proportion of Digital Sales ${labels.lastFY}`,
    ]

    const quartersGraph = [
        proportionOfOverseasSalesQtr.map((elem) => elem.value),
        proportionOfHardwareSalesQtr.map((elem) => elem.value),
        proportionOfFirstPartySoftwareSalesQtr.map((elem) => elem.value),
        digitalSalesQtr.map((elem) => elem.value),
        proportionOfDigitalSalesQtr.map((elem) => elem.value),
        proportionOfDLverPackagedSoftwareQtr.map((elem) => elem.value),
    ]

    const quartersGraphLastFY = [
        proportionOfOverseasSalesQtrLastFY.map((elem) => elem.value),
        proportionOfHardwareSalesQtrLastFY.map((elem) => elem.value),
        proportionOfFirstPartySoftwareSalesQtrLastFY.map((elem) => elem.value),
        digitalSalesQtrLastFY.map((elem) => elem.value),
        proportionOfDigitalSalesQtrLastFY.map((elem) => elem.value),
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
                                data: quartersGraph[activePage-1],
                                label: kpiLabels[activePage-1],
                                borderColor: "indigo",
                                backgroundColor: "red",

                            },
                            {
                                data: quartersGraphLastFY[activePage-1],
                                label: kpiLabelsLastFY[activePage-1],
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
                            data: quartersGraph[activePage-1],
                            label: kpiLabels[activePage-1],
                            borderColor: "black",
                            backgroundColor: "indigo",
                            borderWidth: 2,

                        },
                        {
                            data: quartersGraphLastFY[activePage-1],
                            label: kpiLabelsLastFY[activePage-1],
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
                    <Pagination page={activePage} onChange={setPage} total={quartersGraph.length} color="teal" size="sm" radius="md" />
                        <Switch onLabel="BAR" offLabel="BAR" size="md" checked={barChecked} onChange={(event) => setBarChecked(event.currentTarget.checked)} />
                            <Switch onLabel="ON" offLabel="OFF" size="md" checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />
            </Group>
        </div>

    )
}
