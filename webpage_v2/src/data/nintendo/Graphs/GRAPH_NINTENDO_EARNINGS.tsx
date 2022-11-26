import { useState } from "react";
import { Pagination, Group, Switch } from "@mantine/core";
import { useSelector } from "react-redux";
import { Earnings } from "../../../utils/earnings_logic";

import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js'; // required to actually get chart.js with react-chartjs-2 to work
Chart.register(...registerables); // to get the package working, source: https://www.chartjs.org/docs/next/getting-started/integration.html

export default function GRAPH_NINTENDO_EARNINGS(props:
    {setData: ({
        thisFY: string;
        lastFY: string;
        marchThisFY: string,
        marchLastFY: string,
        qtrNetSalesThisFY: Earnings[],
        qtrOperatingIncomeThisFY: Earnings[],
        qtrOpMarginThisFY: Earnings[],
        qtrNetIncomeThisFY: Earnings[],
        cmlNetSalesThisFY: Earnings[],
        cmlOperatingIncomeThisFY: Earnings[],
        cmlOpMarginThisFY: Earnings[],
        cmlNetIncomeThisFY: Earnings[],
        qtrNetSalesLastFY: Earnings[],
        qtrOperatingIncomeLastFY: Earnings[],
        qtrOpMarginLastFY: Earnings[],
        qtrNetIncomeLastFY: Earnings[],
        cmlNetSalesLastFY: Earnings[],
        cmlOperatingIncomeLastFY: Earnings[],
        cmlOpMarginLastFY: Earnings[],
        cmlNetIncomeLastFY: Earnings[],
    } 
    | undefined)
    }) {

    const state: any = useSelector(state => state);

    const [activePage, setPage] = useState(1);
    const [checked, setChecked] = useState(false);
    const [barChecked, setBarChecked] = useState(false);

    type Labels = {
        currentFY: string,
        lastFY: string,
        MarchThisYear: string,
        MarchLastYear: string,
    };

    const labels: Labels = {
        currentFY: props.setData?.thisFY as string,
        lastFY: props.setData?.lastFY as string,
        MarchThisYear: props.setData?.marchThisFY as string,
        MarchLastYear: props.setData?.marchLastFY as string,
    };

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
       props.setData?.qtrNetSalesThisFY.map((elem) => elem.value),
       props.setData?.qtrOperatingIncomeThisFY.map((elem) => elem.value),
       props.setData?.qtrOpMarginThisFY.map((elem) => elem.value),
       props.setData?.qtrNetIncomeThisFY.map((elem) => elem.value),
    ]

    const graphQuartersLastFY = [
       props.setData?.qtrNetSalesLastFY.map((elem) => elem.value),
       props.setData?.qtrOperatingIncomeLastFY.map((elem) => elem.value),
       props.setData?.qtrOpMarginLastFY.map((elem) => elem.value),
       props.setData?.qtrNetIncomeLastFY.map((elem) => elem.value),
    ]

    const graphCumulative = [
       props.setData?.cmlNetSalesThisFY.map((elem, index) => elem.value - (props.setData?.qtrNetSalesThisFY[index].value as number)),
       props.setData?.cmlOperatingIncomeThisFY.map((elem, index) => elem.value - (props.setData?.qtrOperatingIncomeThisFY[index].value as number)),
        [
            props.setData?.qtrOpMarginThisFY[0], 
            props.setData?.cmlOpMarginThisFY[1],
            props.setData?.cmlOpMarginThisFY[2],
            props.setData?.cmlOpMarginThisFY[3],
        ].map((elem, index) => {
            // return elem.value
            return (!elem?.value) ? 0 : elem?.value
            // return (index === 0)
            // ? 0
            // : (elem.value > operatingMarginQuarters[index].value)
            // ? elem.value - operatingMarginQuarters[index].value
            // // : - elem.value + operatingMarginQuarters[index].value
            // : - elem.value + operatingMarginQuarters[index].value // the least worst result to ensure accuracy
        }),
       props.setData?.cmlNetIncomeThisFY.map((elem, index) => elem.value - (props.setData?.qtrNetIncomeThisFY[index].value as number)),
    ]

    const graphCumulativeLastFY = [
       props.setData?.cmlNetSalesLastFY.map((elem, index) => elem.value - (props.setData?.qtrNetSalesLastFY[index].value as number)),
       props.setData?.cmlOperatingIncomeLastFY.map((elem, index) => elem.value - (props.setData?.qtrOperatingIncomeLastFY[index].value as number)),
        [
            props.setData?.qtrOpMarginLastFY[0], 
            props.setData?.cmlOpMarginLastFY[1],
            props.setData?.cmlOpMarginLastFY[2],
            props.setData?.cmlOpMarginLastFY[3],
        ].map((elem, index) => {
            return (!elem?.value) ? 0 : elem?.value
            // return (elem.value > operatingMarginQuartersLastFY[index].value)
            // ? elem.value - operatingMarginQuartersLastFY[index].value
            // // : - elem.value + operatingMarginQuarters[index].value
            // : 0 // the least worst result to ensure accuracy
        }),

       props.setData?.cmlNetIncomeLastFY.map((elem, index) => elem.value - (props.setData?.qtrNetIncomeLastFY[index].value as number)),
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
                            <Switch onLabel="ON" offLabel="OFF" size="md" checked={checked} onChange={bothOff} />
            </Group>
        </div>

    )
}