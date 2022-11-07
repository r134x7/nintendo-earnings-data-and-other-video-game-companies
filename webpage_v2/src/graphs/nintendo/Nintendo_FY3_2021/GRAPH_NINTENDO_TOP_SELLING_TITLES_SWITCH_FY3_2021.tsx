import { useState } from "react";
import { Pagination, Group, Switch } from "@mantine/core";
import { useSelector } from "react-redux";
import { title1Difference,
         title2Difference,
         title3Difference,
         title4Difference,
         title5Difference,
         title6Difference,
         title7Difference,
         title8Difference,
         title9Difference,
         title10Difference,
         title1Sorted,
         title2Sorted,
         title3Sorted,
         title4Sorted,
         title5Sorted,
         title6Sorted,
         title7Sorted,
         title8Sorted,
         title9Sorted,
         title10Sorted,
        } from "../../../data/nintendo/Nintendo_FY3_2021/top_NSW_sw_fy3_2021";

import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js'; // required to actually get chart.js with react-chartjs-2 to work
Chart.register(...registerables); // to get the package working, source: https://www.chartjs.org/docs/next/getting-started/integration.html

export default function GRAPH_NINTENDO_TOP_SELLING_TITLES_SWITCH_FY3_2021() {


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
        currentFY: "FY3/2021",
        lastFY: "FY3/2020",
        MarchThisYear: "March 2021",
        MarchLastYear: "March 2020"
    }

    const titleLabels = [
        title1Difference[0].title,
        title2Difference[0].title,
        title3Difference[0].title,
        title4Difference[0].title,
        title5Difference[0].title,
        title6Difference[0].title,
        title7Difference[0].title,
        title8Difference[0].title,
        title9Difference[0].title,
        title10Difference[0].title,
    ]

    const titleQuarters = [
        title1Difference.map((elem) => elem.value),
        title2Difference.map((elem) => elem.value),
        title3Difference.map((elem) => elem.value),
        title4Difference.map((elem) => elem.value),
        title5Difference.map((elem) => elem.value),
        title6Difference.map((elem) => elem.value),
        title7Difference.map((elem) => elem.value),
        title8Difference.map((elem) => elem.value),
        title9Difference.map((elem) => elem.value),
        title10Difference.map((elem) => elem.value),
    ]

    const titleCumulatives = [
        title1Sorted.map((elem, index) => elem.value - title1Difference[index].value), 
        title2Sorted.map((elem, index) => elem.value - title2Difference[index].value),
        title3Sorted.map((elem, index) => elem.value - title3Difference[index].value),
        title4Sorted.map((elem, index) => elem.value - title4Difference[index].value),
        title5Sorted.map((elem, index) => elem.value - title5Difference[index].value),
        title6Sorted.map((elem, index) => elem.value - title6Difference[index].value),
        title7Sorted.map((elem, index) => elem.value - title7Difference[index].value),
        title8Sorted.map((elem, index) => elem.value - title8Difference[index].value),
        title9Sorted.map((elem, index) => elem.value - title9Difference[index].value),
        title10Sorted.map((elem, index) => elem.value - title10Difference[index].value),
    ]

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
                    datasetIdKey="Top Selling Titles Switch"
                    data={{
                        labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                        datasets: [
                            {
                            data: titleQuarters[activePage-1],
                            label: `${titleLabels[activePage-1]}[Quarter]`,
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
                            data: titleCumulatives[activePage-1],
                            label: `${titleLabels[activePage-1]}[Cumulative]`,
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
                    datasetIdKey="Top Selling Titles Switch"
                    data={{
                        labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                        datasets: [
                            {
                                data: titleQuarters[activePage-1],
                                label: `${titleLabels[activePage-1]}[Quarter]`,
                                borderColor: "indigo",
                                backgroundColor: "red",
                                pointRadius: 6,
                                pointBorderColor: "black",
                                pointBorderWidth: 2,
                                stack: "stack 0",
                            },
                            {
                                data: titleCumulatives[activePage-1],
                                label: `${titleLabels[activePage-1]}[Cumulative]`,
                                borderColor: "rgba(75, 0, 130, .30)",
                                backgroundColor: "red",
                                pointRadius: 6,
                                pointBorderColor: "black",
                                pointBorderWidth: 2,
                                stack: "stack 0",
                            },
                            {
                                data: titleQuarters[secondDataRef-1],
                                label: `${titleLabels[secondDataRef-1]}[Quarter]`,
                                borderColor: "orange",
                                backgroundColor: "cyan",
                                pointRadius: 6,
                                pointBorderColor: "black",
                                pointBorderWidth: 2,
                                stack: "stack 1",
                            },
                            {
                                data: titleCumulatives[secondDataRef-1],
                                label: `${titleLabels[secondDataRef-1]}[Cumulative]`,
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
                                  text: `Quarters for Fiscal Year Ending ${labels.MarchThisYear}`,
                                },
                            },
                        }
                    }}
                />
            )
            : (checked === false && barChecked === true) 
            ? (
                <Bar
                    datasetIdKey="Top Selling Titles Switch"
                    data={{
                        labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                        datasets: [
                            {
                            data: titleQuarters[activePage-1],
                            label: `${titleLabels[activePage-1]}[Quarter]`,
                            backgroundColor: state.colour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
                                return (curr === ".")
                                        ? acc + ".80)"
                                        : acc + curr;
                            }),
                            borderColor: "black",
                            borderWidth: 2,
                            },
                            {
                            data: titleCumulatives[activePage-1],
                            label: `${titleLabels[activePage-1]}[Cumulative]`,
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
                datasetIdKey="Top Selling Titles Switch"
                data={{
                    labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                    datasets: [
                        {
                            data: titleQuarters[activePage-1],
                            label: `${titleLabels[activePage-1]}[Quarter]`,
                            borderColor: "black",
                            backgroundColor: "indigo",
                            borderWidth: 2,
                            stack: "stack 0",
                        },
                        {
                            data: titleCumulatives[activePage-1],
                            label: `${titleLabels[activePage-1]}[Cumulative]`,
                            borderColor: "black",
                            backgroundColor: "rgba(75, 0, 130, .20)",
                            borderWidth: 2,
                            stack: "stack 0",  
                        },
                        {
                            data: titleQuarters[secondDataRef-1],
                            label: `${titleLabels[secondDataRef-1]}[Quarter]`,
                            borderColor: "black",
                            backgroundColor: "orange",
                            borderWidth: 2,
                            stack: "stack 1",
                        },
                        {
                            data: titleCumulatives[secondDataRef-1],
                            label: `${titleLabels[secondDataRef-1]}[Cumulative]`,
                            borderColor: "black",
                            backgroundColor: "rgba(255, 165, 0, 0.2)",
                            borderWidth: 2,
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
                              text: `Quarters for Fiscal Year Ending ${labels.MarchThisYear}`,
                            },
                        },
                    }
                }}
            />
            )}
                <Group mt="md" position="center">
                    <Pagination page={activePage} onChange={setPage} total={titleLabels.length} color="teal" size="sm" radius="md" />
                        <Switch onLabel="BAR" offLabel="BAR" size="md" checked={barChecked} onChange={(event) => setBarChecked(event.currentTarget.checked)} />
                            <Switch onLabel="ON" offLabel="OFF" size="md" checked={checked} onChange={bothOff} />
                        {(checked === true) 
                        ? <Pagination mr="xl" page={secondDataRef} onChange={setSecondDataRef} total={titleLabels.length} color="red" size="sm" radius="md" />
                        : null}
            </Group>
        </div>

    )
}
