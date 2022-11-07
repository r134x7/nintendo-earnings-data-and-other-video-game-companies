import { useState } from "react";
import { Pagination, Group, Switch } from "@mantine/core";
import { useSelector } from "react-redux";
import {
        differenceTitles,
        sortedTitles,
} from "../../../data/nintendo/Nintendo_FY3_2019/mst_fy3_2019";
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js'; // required to actually get chart.js with react-chartjs-2 to work
Chart.register(...registerables); // to get the package working, source: https://www.chartjs.org/docs/next/getting-started/integration.html

export default function GRAPH_NINTENDO_MST_FY3_2019() {

    const state: any = useSelector(state => state);

    const [activePage, setPage] = useState(1);
    const [secondDataRef, setSecondDataRef] = useState(2);
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

    const headerLabels = sortedTitles.map((elem) => {
        return elem.map((secondElem, secondIndex) => {
            return (secondIndex === 0) 
                    ? `${secondElem.title} ${labels.currentFY}`
                    : []
        }).filter((elem) => elem.length !== 0)
    }) // trying to not have to manually list many titles...

    const graphQuartersRegionA = differenceTitles.map((elem) => {
        return elem.map((secondElem, secondIndex) => {
            return secondElem.valueA
        })
    })

    const graphQuartersRegionB = differenceTitles.map((elem) => {
        return elem.map((secondElem, secondIndex) => {
            return secondElem.valueB
        })
    })

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
                    datasetIdKey="FY Million-Seller Titles"
                    data={{
                        labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                        datasets: [
                            {
                            data: graphQuartersRegionA[activePage-1],
                            label: `${headerLabels[activePage-1]}[Japan]`,
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
                            data: graphQuartersRegionB[activePage-1],
                            label: `${headerLabels[activePage-1]}[Overseas]`,
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
                            type: "logarithmic",
                            title: {
                              display: true,
                              text: "Units in Millions",
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
                    datasetIdKey="FY Million-Seller Titles"
                    data={{
                        labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                        datasets: [
                            {
                                data: graphQuartersRegionA[activePage-1],
                                label: `${headerLabels[activePage-1]}[Japan]`,
                                borderColor: "indigo",
                                backgroundColor: "red",
                                pointRadius: 6,
                                pointBorderColor: "black",
                                pointBorderWidth: 2,
                                stack: "stack 0",
                            },
                            {
                                data: graphQuartersRegionB[activePage-1],
                                label: `${headerLabels[activePage-1]}[Overseas]`,
                                borderColor: "rgba(75, 0, 130, .30)",
                                backgroundColor: "red",
                                pointRadius: 6,
                                pointBorderColor: "black",
                                pointBorderWidth: 2,
                                stack: "stack 0",
                            },
                            {
                                data: graphQuartersRegionA[secondDataRef-1],
                                label: `${headerLabels[secondDataRef-1]}[Japan]`,
                                borderColor: "orange",
                                backgroundColor: "cyan",
                                pointRadius: 6,
                                pointBorderColor: "black",
                                pointBorderWidth: 2,
                                stack: "stack 1",
                            },
                            {
                                data: graphQuartersRegionB[secondDataRef-1],
                                label: `${headerLabels[secondDataRef-1]}[Overseas]`,
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
                            type: "logarithmic",
                            title: {
                              display: true,
                              text: "Units in Millions",
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
                    datasetIdKey="FY Million-Seller Titles"
                    data={{
                        labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                        datasets: [
                            {
                            data: graphQuartersRegionA[activePage-1],
                            label: `${headerLabels[activePage-1]}[Japan]`,
                            backgroundColor: state.colour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
                                return (curr === ".")
                                        ? acc + ".80)"
                                        : acc + curr;
                            }),
                            borderColor: "black",
                            borderWidth: 2,
                            },
                            {
                            data: graphQuartersRegionB[activePage-1],
                            label: `${headerLabels[activePage-1]}[Overseas]`,
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
                            type: "logarithmic",
                            title: {
                              display: true,
                              text: "Units in Millions",
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
                datasetIdKey="FY Million-Seller Titles"
                data={{
                    labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                    datasets: [
                        {
                            data: graphQuartersRegionA[activePage-1],
                            label: `${headerLabels[activePage-1]}[Japan]`,
                            borderColor: "black",
                            backgroundColor: "indigo",
                            borderWidth: 2,
                            stack: "stack 0"
                        },
                        {
                            data: graphQuartersRegionB[activePage-1],
                            label: `${headerLabels[activePage-1]}[Overseas]`,
                            borderColor: "black",
                            backgroundColor: "rgba(75, 0, 130, .20)",
                            borderWidth: 2,
                            stack: "stack 0"
                        },
                        {
                            data: graphQuartersRegionA[secondDataRef-1],
                            label: `${headerLabels[secondDataRef-1]}[Japan]`,
                            borderColor: "black",
                            backgroundColor: "orange",
                            borderWidth: 2,
                            stack: "stack 1"
                        },
                        {
                            data: graphQuartersRegionB[secondDataRef-1],
                            label: `${headerLabels[secondDataRef-1]}[Overseas]`,
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
                            type: "logarithmic",
                        title: {
                          display: true,
                              text: "Units in Millions",
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
                    <Pagination page={activePage} onChange={setPage} total={headerLabels.length} color="teal" size="sm" radius="md" />
                        <Switch onLabel="BAR" offLabel="BAR" size="md" checked={barChecked} onChange={(event) => setBarChecked(event.currentTarget.checked)} />
                            <Switch onLabel="ON" offLabel="OFF" size="md" checked={checked} onChange={bothOff} />
                        {(checked === true) 
                        ? <Pagination mr="xl" page={secondDataRef} onChange={setSecondDataRef} total={headerLabels.length} color="red" size="sm" radius="md" />
                        : null}
            </Group>
        </div>

    )
}