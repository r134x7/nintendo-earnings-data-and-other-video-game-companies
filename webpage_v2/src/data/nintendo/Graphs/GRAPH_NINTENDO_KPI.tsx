import { useState } from "react";
import { Pagination, Group, Switch } from "@mantine/core";
import { useSelector } from "react-redux";
import { KPDIndicators } from "../../../utils/kpi_logic";
import type { BackgroundColours } from "../../../features/backgroundReducer";

import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js'; // required to actually get chart.js with react-chartjs-2 to work
Chart.register(...registerables); // to get the package working, source: https://www.chartjs.org/docs/next/getting-started/integration.html

export default function GRAPH_NINTENDO_KPI(props:
    {setData: ({
        thisFY: string;
        lastFY: string;
        marchThisFY: string,
        marchLastFY: string,
        quarterValuesThisFY: KPDIndicators[][];
        quarterValuesLastFY: KPDIndicators[][];
        cumulativeValuesThisFY: KPDIndicators[][];
        cumulativeValuesLastFY: KPDIndicators[][];
    })}) {


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

    const kpiLabels = props.setData.quarterValuesThisFY.map(elem => {
        return elem.map((value, index) => (index === 0) ? value.name + " " + labels.currentFY : []).flat()
    });

    const kpiLabelsLastFY = props.setData.quarterValuesLastFY.map(elem => {
        return elem.map((value, index) => (index === 0) ? value.name + " " + labels.lastFY : []).flat()
    });

    const kpiYLabels = props.setData.quarterValuesThisFY.map(elem => {
        return elem.map((value, index) => (index === 0) ? value.units : []).flat()
    });

    // const kpiLabels = [
    //     `Proportion of overseas sales ${labels.currentFY}`,
    //     `Proportion of hardware sales ${labels.currentFY}`,
    //     `Proportion of first party software sales ${labels.currentFY}`,
    //     `Digital Sales ${labels.currentFY}`,
    //     `Proportion of Digital Sales ${labels.currentFY}`,
    //     `Proportion of downloadable versions of Packaged Software Sales ${labels.currentFY}`,
    // ]

    // const kpiLabelsLastFY = [
    //     `Proportion of overseas sales ${labels.lastFY}`,
    //     `Proportion of hardware sales ${labels.lastFY}`,
    //     `Proportion of first party software sales ${labels.lastFY}`,
    //     `Digital Sales ${labels.lastFY}`,
    //     `Proportion of Digital Sales ${labels.lastFY}`,
    //     `Proportion of downloadable versions of Packaged Software Sales ${labels.lastFY}`,
    // ]

    // const graphQuarters = [
    //     proportionOfOverseasSalesQtr.map((elem) => elem.value),
    //     proportionOfHardwareSalesQtr.map((elem) => elem.value),
    //     proportionOfFirstPartySoftwareSalesQtr.map((elem) => elem.value),
    //     digitalSalesQtr.map((elem) => elem.value),
    //     proportionOfDigitalSalesQtr.map((elem) => elem.value),
    //     proportionOfDLverPackagedSoftwareQtr.map((elem) => elem.value),
    // ]

    const graphQuarters = props.setData.quarterValuesThisFY.map((elem) => {
        return elem.map(value => value.value)
    });

    const graphQuartersLastFY = props.setData.quarterValuesLastFY.map((elem) => {
        return elem.map(value => value.value)
    })
 

    // const graphQuartersLastFY = [
    //     proportionOfOverseasSalesQtrLastFY.map((elem) => elem.value),
    //     proportionOfHardwareSalesQtrLastFY.map((elem) => elem.value),
    //     proportionOfFirstPartySoftwareSalesQtrLastFY.map((elem) => elem.value),
    //     digitalSalesQtrLastFY.map((elem) => elem.value),
    //     proportionOfDigitalSalesQtrLastFY.map((elem) => elem.value),
    //     proportionOfDLverPackagedSoftwareQtrLastFY.map((elem) => elem.value),
    // ]

    // const graphCumulative = [
    //     [proportionOfOverseasSalesQtr[0], ...proportionOfOverseasSalesCml].map((elem) => elem.value),
    //     [proportionOfHardwareSalesQtr[0], ...proportionOfHardwareSalesCml].map((elem) => elem.value),
    //     [proportionOfFirstPartySoftwareSalesQtr[0], ...proportionOfFirstPartySoftwareSalesCml].map((elem) => elem.value),
    //     [digitalSalesQtr[0], ...digitalSalesCml].map((elem, index) => elem.value - digitalSalesQtr[index].value),
    //     [proportionOfDigitalSalesQtr[0], ...proportionOfDigitalSalesCml].map((elem) => elem.value),
    //     [proportionOfDLverPackagedSoftwareQtr[0], ...proportionOfDLverPackagedSoftwareCml].map((elem) => elem.value),
    // ]

    const graphCumulativePartOne: number[][] = props.setData.quarterValuesThisFY.map((elem) => {
        return elem.filter((value, index) => index === 0).map(value => value.value)
    })

    const graphCumulativePartTwo: number[][] = props.setData.cumulativeValuesThisFY.map(elem => {
        return elem.map(value => value.value)
    })
    
    const graphCumulative: number[][] = Array.from({length: props.setData.quarterValuesThisFY.length}, (v,i) => {

        return graphCumulativePartOne[i].concat(graphCumulativePartTwo[i])
    }) 
    

    const graphCumulativeLastFYPartOne: number[][] = props.setData.quarterValuesLastFY.map((elem) => {
        return elem.filter((value, index) => index === 0).map(value => value.value)
    })

    const graphCumulativeLastFYPartTwo: number[][] = props.setData.cumulativeValuesLastFY.map(elem => {
        return elem.map(value => value.value)
    })
    
    const graphCumulativeLastFY: number[][] = Array.from({length: props.setData.quarterValuesLastFY.length}, (v,i) => {

        return graphCumulativeLastFYPartOne[i].concat(graphCumulativeLastFYPartTwo[i])
    }) 


    // const graphCumulativeLastFY = [
    //     [proportionOfOverseasSalesQtrLastFY[0], ...proportionOfOverseasSalesCmlLastFY].map((elem) => elem.value),
    //     [proportionOfHardwareSalesQtrLastFY[0], ...proportionOfHardwareSalesCmlLastFY].map((elem) => elem.value),
    //     [proportionOfFirstPartySoftwareSalesQtrLastFY[0], ...proportionOfFirstPartySoftwareSalesCmlLastFY].map((elem) => elem.value),
    //     [digitalSalesQtrLastFY[0], ...digitalSalesCmlLastFY].map((elem, index) => elem.value - digitalSalesQtrLastFY[index].value),
    //     [proportionOfDigitalSalesQtrLastFY[0], ...proportionOfDigitalSalesCmlLastFY].map((elem) => elem.value),
    //     [proportionOfDLverPackagedSoftwareQtrLastFY[0], ...proportionOfDLverPackagedSoftwareCmlLastFY].map((elem) => elem.value),
    // ]

    return (
        <div className="chart">
        {(checked === false && barChecked === false)
            ? (
                <Line
                    datasetIdKey="Key/Digital Sales Indicator"
                    data={{
                        labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                        datasets: [
                            {
                            data: graphQuarters[activePage-1],
                            label: `${kpiLabels[activePage-1]}[Quarter]`,
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
                            label: `${kpiLabels[activePage-1]}[Cumulative]`,
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
                            stacked: false,
                            // (activePage === 4)
                            //             ? true
                            //             : false,
                            title: {
                              display: true,
                            //   text: (activePage === 4)
                            //             ? "Billion yen (¥)"
                            //             : "Percentage (%)",
                              text: (activePage === 4)
                                        ? "Billion yen (¥)"
                                        : (kpiYLabels[activePage-1][0] === "currency")
                                        ? "Million yen (¥)"
                                        : "Percentage (%)",
                            },
                          },
                          x: {
                            stacked: false,
                            // (activePage === 4)
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
                    datasetIdKey="Key/Digital Sales Indicator"
                    data={{
                        labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                        datasets: [
                            {
                                data: graphQuarters[activePage-1],
                                label: `${kpiLabels[activePage-1]}[Quarter]`,
                                borderColor: "indigo",
                                backgroundColor: "red",
                                pointRadius: 6,
                                pointBorderColor: "black",
                                pointBorderWidth: 2,
                                stack: "stack 0",
                            },
                            {
                                data: graphCumulative[activePage-1],
                                label: `${kpiLabels[activePage-1]}[Cumulative]`,
                                borderColor: "rgba(75, 0, 130, .30)",
                                backgroundColor: "red",
                                pointRadius: 6,
                                pointBorderColor: "black",
                                pointBorderWidth: 2,
                                stack: "stack 0",
                            },
                            {
                                data: graphQuartersLastFY[activePage-1],
                                label: `${kpiLabelsLastFY[activePage-1]}[Quarter]`,
                                borderColor: "orange",
                                backgroundColor: "cyan",
                                pointRadius: 6,
                                pointBorderColor: "black",
                                pointBorderWidth: 2,
                                stack: "stack 1",
                            },
                            {
                                data: graphCumulativeLastFY[activePage-1],
                                label: `${kpiLabelsLastFY[activePage-1]}[Cumulative]`,
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
                            stacked: false,
                            // (activePage === 4)
                            //             ? true
                            //             : false,
                            title: {
                              display: true,
                            //   text: (activePage === 4)
                            //             ? "Billion yen (¥)"
                            //             : "Percentage (%)",
                              text: (activePage === 4)
                                        ? "Billion yen (¥)"
                                        : (kpiYLabels[activePage-1][0] === "currency")
                                        ? "Million yen (¥)"
                                        : "Percentage (%)",
                            },
                          },
                          x: {
                            stacked: false,
                            // (activePage === 4)
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
                    datasetIdKey="Key/Digital Sales Indicator"
                    data={{
                        labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                        datasets: [
                            {
                            data: graphQuarters[activePage-1],
                            label: `${kpiLabels[activePage-1]}[Quarter]`,
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
                            label: `${kpiLabels[activePage-1]}[Cumulative]`,
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
                            stacked: false,
                            // (activePage === 4)
                            //             ? true
                            //             : false,
                            title: {
                              display: true,
                            //   text: (activePage === 4)
                            //             ? "Billion yen (¥)"
                            //             : "Percentage (%)",
                              text: (activePage === 4)
                                        ? "Billion yen (¥)"
                                        : (kpiYLabels[activePage-1][0] === "currency")
                                        ? "Million yen (¥)"
                                        : "Percentage (%)",
                            },
                          },
                          x: {
                            stacked: false,
                            // (activePage === 4)
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
                datasetIdKey="Key/Digital Sales Indicator"
                data={{
                    labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                    datasets: [
                        {
                            data: graphQuarters[activePage-1],
                            label: `${kpiLabels[activePage-1]}[Quarter]`,
                            borderColor: "black",
                            backgroundColor: "indigo",
                            borderWidth: 2,
                            stack: "0", 
                            // (activePage === 4)
                            //         ? "stack 0"
                            //         : "0",
                        },
                        {
                            data: graphCumulative[activePage-1],
                            label: `${kpiLabels[activePage-1]}[Cumulative]`,
                            borderColor: "black",
                            backgroundColor: "rgba(75, 0, 130, .20)",
                            borderWidth: 2,
                            stack: "1", 
                            // (activePage === 4)
                            //         ? "stack 0"
                            //         : "1",
                        },
                        {
                            data: graphQuartersLastFY[activePage-1],
                            label: `${kpiLabelsLastFY[activePage-1]}[Quarter]`,
                            borderColor: "black",
                            backgroundColor: "orange",
                            borderWidth: 2,
                            stack: (activePage === 4)
                                    ? "stack 1"
                                    : "2",
                        },
                        {
                            data: graphCumulativeLastFY[activePage-1],
                            label: `${kpiLabelsLastFY[activePage-1]}[Cumulative]`,
                            borderColor: "black",
                            backgroundColor: "rgba(255, 165, 0, 0.2)",
                            borderWidth: 2,
                            stack: "3",
                            // (activePage === 4)
                            //         ? "stack 1"
                            //         : "3",
                        },
                    ], 
                }}

                options={{
                 scales: {
                    y: {
                            stacked: false,
                            // (activePage === 4)
                            //             ? true
                            //             : false,
                        title: {
                          display: true,
                              text: (activePage === 4)
                                        ? "Billion yen (¥)"
                                        : (kpiYLabels[activePage-1][0] === "currency")
                                        ? "Million yen (¥)"
                                        : "Percentage (%)",
                            },
                      },
                      x: {
                            stacked: false,
                            // (activePage === 4)
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
                            <Switch onLabel="ON" offLabel="OFF" size="md" checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />
            </Group>
        </div>

    )
}
