import { useState } from "react";
import { Pagination, Group, Switch } from "@mantine/core";
import { useSelector } from "react-redux";
import { EarningsValue } from "../../utils/general_earnings_logic";
import type { BackgroundColours } from "../../features/backgroundReducer";

import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js'; // required to actually get chart.js with react-chartjs-2 to work
Chart.register(...registerables); // to get the package working, source: https://www.chartjs.org/docs/next/getting-started/integration.html

export default function GRAPH_CONSOLIDATED_EARNINGS(props:
    {setData: ({
        thisFY: string;
        lastFY: string;
        marchThisFY: string,
        marchLastFY: string,
        qtrNetSalesThisFY: EarningsValue[] | undefined[],
        qtrOperatingIncomeThisFY: EarningsValue[] | undefined[],
        qtrOpMarginThisFY: EarningsValue[] | undefined[],
        qtrNetIncomeThisFY: EarningsValue[] | undefined[],
        cmlNetSalesThisFY: EarningsValue[] | undefined[],
        cmlOperatingIncomeThisFY: EarningsValue[] | undefined[],
        cmlOpMarginThisFY: EarningsValue[] | undefined[],
        cmlNetIncomeThisFY: EarningsValue[] | undefined[],
        qtrNetSalesLastFY: EarningsValue[] | undefined[],
        qtrOperatingIncomeLastFY: EarningsValue[] | undefined[],
        qtrOpMarginLastFY: EarningsValue[] | undefined[],
        qtrNetIncomeLastFY: EarningsValue[] | undefined[],
        cmlNetSalesLastFY: EarningsValue[] | undefined[],
        cmlOperatingIncomeLastFY: EarningsValue[] | undefined[],
        cmlOpMarginLastFY: EarningsValue[] | undefined[],
        cmlNetIncomeLastFY: EarningsValue[] | undefined[],
    } 
    | undefined)
    }) {

    const stateColour = useSelector((state: BackgroundColours) => state.colour);
    const stateFontColor = useSelector((state: BackgroundColours) => state.fontColor);

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
       props.setData?.qtrNetSalesThisFY.map((elem) => (elem?.kind === "Quarter") ? elem.value : -1),
       props.setData?.qtrOperatingIncomeThisFY.map((elem) => (elem?.kind === "Quarter") ? elem.value : -1),
       props.setData?.qtrOpMarginThisFY.map((elem) => (elem?.kind === "Quarter") ? elem.value : -1),
       props.setData?.qtrNetIncomeThisFY.map((elem) => (elem?.kind === "Quarter") ? elem.value : -1),
    ]

    const graphQuartersLastFY = [
       props.setData?.qtrNetSalesLastFY.map((elem) => (elem?.kind === "Quarter") ? elem.value : -1),
       props.setData?.qtrOperatingIncomeLastFY.map((elem) => (elem?.kind === "Quarter") ? elem.value : -1),
       props.setData?.qtrOpMarginLastFY.map((elem) => (elem?.kind === "Quarter") ? elem.value : -1),
       props.setData?.qtrNetIncomeLastFY.map((elem) => (elem?.kind === "Quarter") ? elem.value : -1),
    ]

    const graphCumulative = [
       props.setData?.cmlNetSalesThisFY.map((elem) => (elem?.kind === "Cumulative") ? elem.value : -1),
       props.setData?.cmlOperatingIncomeThisFY.map((elem) => (elem?.kind === "Cumulative") ? elem.value : -1),
       props.setData?.cmlOpMarginThisFY.map((elem) => (elem?.kind === "Cumulative") ? elem.value : -1), 
       props.setData?.cmlNetIncomeThisFY.map((elem) => (elem?.kind === "Cumulative") ? elem.value : -1),
    ]

    const graphCumulativeLastFY = [
       props.setData?.cmlNetSalesLastFY.map((elem) => (elem?.kind === "Cumulative") ? elem.value : -1),
       props.setData?.cmlOperatingIncomeLastFY.map((elem) => (elem?.kind === "Cumulative") ? elem.value : -1),
       props.setData?.cmlOpMarginLastFY.map((elem) => (elem?.kind === "Cumulative") ? elem.value : -1), 
       props.setData?.cmlNetIncomeLastFY.map((elem) => (elem?.kind === "Cumulative") ? elem.value : -1),
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
                            borderColor: stateColour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
                                return (curr === ".")
                                        ? acc + "1)"
                                        : acc + curr;
                                }),
                            backgroundColor: stateColour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
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
                            borderColor: stateColour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
                                return (curr === ".")
                                        ? acc + ".3)"
                                        : acc + curr;
                                }),
                            backgroundColor: stateColour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
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
                            // stacked: (activePage !== 3)
                            //             ? true
                            //             : false,
                            title: {
                              display: true,
                              text: (activePage !== 3)
                                        ? "Million yen (¥)"
                                        : "Percentage (%)",
                            },
                          },
                          x: {
                            // stacked: (activePage !== 3)
                            //             ? true
                            //             : false,
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
                            // stacked: (activePage !== 3)
                            //             ? true
                            //             : false,
                            title: {
                              display: true,
                              text: (activePage !== 3)
                                        ? "Million yen (¥)"
                                        : "Percentage (%)",
                            },
                          },
                          x: {
                            // stacked: (activePage !== 3)
                            //             ? true
                            //             : false,
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
                            backgroundColor: stateColour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
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
                            backgroundColor: stateColour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
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
                            // stacked: (activePage !== 3)
                            //             ? true
                            //             : false,
                            title: {
                              display: true,
                              text: (activePage !== 3)
                                        ? "Million yen (¥)"
                                        : "Percentage (%)",
                            },
                          },
                          x: {
                            // stacked: (activePage !== 3)
                            //             ? true
                            //             : false,
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
                            // stack: (activePage !== 3)
                            //         ? "stack 0"
                            //         : "0",
                            stack: "0",
                        },
                        {
                            data: graphCumulative[activePage-1],
                            label: `${consolidatedOperatingResultsLabels[activePage-1]}[Cumulative]`,
                            borderColor: "black",
                            backgroundColor: "rgba(75, 0, 130, .20)",
                            borderWidth: 2,
                            // stack: (activePage !== 3)
                            //         ? "stack 0"
                            //         : "1",
                            stack: "1",
                        },
                        {
                            data: graphQuartersLastFY[activePage-1],
                            label: `${consolidatedOperatingResultsLabelsLastFY[activePage-1]}[Quarter]`,
                            borderColor: "black",
                            backgroundColor: "orange",
                            borderWidth: 2,
                            // stack: (activePage !== 3)
                            //         ? "stack 1"
                            //         : "2",
                            stack: "2",
                        },
                        {
                            data: graphCumulativeLastFY[activePage-1],
                            label: `${consolidatedOperatingResultsLabelsLastFY[activePage-1]}[Cumulative]`,
                            borderColor: "black",
                            backgroundColor: "rgba(255, 165, 0, 0.2)",
                            borderWidth: 2,
                            // stack: (activePage !== 3)
                            //         ? "stack 1"
                            //         : "3",
                            stack: "3",
                        },
                    ], 
                }}

                options={{
                 scales: {
                    y: {
                            // stacked: (activePage !== 3)
                            //             ? true
                            //             : false,
                        title: {
                          display: true,
                          text: (activePage !== 3)
                                        ? "Million yen (¥)"
                                        : "Percentage (%)",
                        },
                      },
                    x: {
                            // stacked: (activePage !== 3)
                            //             ? true
                            //             : false,
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