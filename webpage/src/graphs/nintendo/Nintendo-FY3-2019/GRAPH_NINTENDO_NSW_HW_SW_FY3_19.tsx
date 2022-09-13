import { useState } from "react";
import { Pagination, Group, Switch } from "@mantine/core";
import { useSelector } from "react-redux";
import {
        nintendoMobileFiltered,
        nintendoMobileLastFY,
        nintendoSwitchHardwareTotalFiltered,
        nintendoSwitchHardwareTotalLastFY,
        nintendoSwitchSoftwareTotalFiltered,
        nintendoSwitchSoftwareTotalLastFY,
        quarterHardwareTotal,
        quarterHardwareTotalLastFY,
        quarterNintendoMobile,
        quarterNintendoMobileLastFY,
        quarterSoftwareTotal,
        quarterSoftwareTotalLastFY,
} from "../../../data/nintendo/Nintendo-FY3-2019/nsw-hardware-software-fy3-19"

import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js'; // required to actually get chart.js with react-chartjs-2 to work
Chart.register(...registerables); // to get the package working, source: https://www.chartjs.org/docs/next/getting-started/integration.html

export default function GRAPH_NINTENDO_NSW_HW_SW_FY3_19() {

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

    const headerLabels = [
        `Switch ${labels.currentFY}`,
        `Switch Lite ${labels.currentFY}`,
        `Switch Hardware Total ${labels.currentFY}`,
        `Switch Software Total ${labels.currentFY}`,
        `Mobile, IP related income, etc. ${labels.currentFY}`,
    ]

    const headerLabelsLastFY = [
        `Switch ${labels.lastFY}`,
        `Switch Lite ${labels.lastFY}`,
        `Switch Hardware Total ${labels.lastFY}`,
        `Switch Software Total ${labels.lastFY}`,
        `Mobile, IP related income, etc. ${labels.lastFY}`,
    ]

    const graphQuarters = [
        quarterHardwareTotal.map((elem) => (elem.value / 100).toFixed(2)),
        quarterSoftwareTotal.map((elem) => (elem.value / 100).toFixed(2)),
        quarterNintendoMobile.map((elem) => elem.value),
    ]

    const graphQuartersLastFY = [
        quarterHardwareTotalLastFY.map((elem) => (elem.value / 100).toFixed(2)),
        quarterSoftwareTotalLastFY.map((elem) => (elem.value / 100).toFixed(2)),
        quarterNintendoMobileLastFY.map((elem) => elem.value),
    ]

    const graphCumulative = [
        nintendoSwitchHardwareTotalFiltered.map((elem, index) => ((elem.value - quarterHardwareTotal[index].value) / 100).toFixed(2)),
        nintendoSwitchSoftwareTotalFiltered.map((elem, index) => ((elem.value - quarterSoftwareTotal[index].value) / 100).toFixed(2)),
        nintendoMobileFiltered.map((elem, index) => ((elem.value - quarterNintendoMobile[index].value)).toFixed(2)),
    ]

    const graphCumulativeLastFY = [
        nintendoSwitchHardwareTotalLastFY.map((elem, index) => ((elem.value - quarterHardwareTotalLastFY[index].value) / 100).toFixed(2)),
        nintendoSwitchSoftwareTotalLastFY.map((elem, index) => ((elem.value - quarterSoftwareTotalLastFY[index].value) / 100).toFixed(2)),
        nintendoMobileLastFY.map((elem, index) => ((elem.value - quarterNintendoMobileLastFY[index].value)).toFixed(2)),

    ]

    return (
        <div className="chart">
        {(checked === false && barChecked === false)
            ? (
                <Line
                    datasetIdKey="Global HW/SW Sales Units"
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
                            stacked: true,
                            title: {
                              display: true,
                              text: (activePage === 6)
                                        ? "Million yen (¥)"
                                        : "Units in Millions",
                            },
                          },
                          x: {
                            stacked: true,
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
                    datasetIdKey="Global HW/SW Sales Units"
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
                            stacked: true,
                            title: {
                              display: true,
                              text: (activePage === 6)
                                        ? "Million yen (¥)"
                                        : "Units in Millions",
                            },
                          },
                          x: {
                            stacked: true,
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
                    datasetIdKey="Global HW/SW Sales Units"
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
                            stacked: true,
                            title: {
                              display: true,
                              text: (activePage === 6)
                                        ? "Million yen (¥)"
                                        : "Units in Millions",
                            },
                          },
                          x: {
                            stacked: true,
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
                datasetIdKey="Global HW/SW Sales Units"
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
                        },
                        {
                            data: graphCumulative[activePage-1],
                            label: `${headerLabels[activePage-1]}[Cumulative]`,
                            borderColor: "black",
                            backgroundColor: "rgba(75, 0, 130, .20)",
                            borderWidth: 2,
                            stack: "stack 0"
                        },
                        {
                            data: graphQuartersLastFY[activePage-1],
                            label: `${headerLabelsLastFY[activePage-1]}[Quarter]`,
                            borderColor: "black",
                            backgroundColor: "orange",
                            borderWidth: 2,
                            stack: "stack 1"
                        },
                        {
                            data: graphCumulativeLastFY[activePage-1],
                            label: `${headerLabelsLastFY[activePage-1]}[Cumulative]`,
                            borderColor: "black",
                            backgroundColor: "rgba(255, 165, 0, 0.2)",
                            borderWidth: 2,
                            stack: "stack 1"
                        },
                    ], 
                }}

                options={{
                 scales: {
                    y: {
                        stacked: true,
                        title: {
                          display: true,
                          text: (activePage === 6)
                                        ? "Million yen (¥)"
                                        : "Units in Millions",
                        },
                      },
                      x: {
                            stacked: true,
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