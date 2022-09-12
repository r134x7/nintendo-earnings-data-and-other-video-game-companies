import { useState } from "react";
import { Pagination, Group, Switch } from "@mantine/core";
import { useSelector } from "react-redux";
import {
    digitalSalesQtr as digitalSalesQtrLastFY,
    proportionOfDigitalSalesQtr as proportionOfDigitalSalesQtrLastFY,
    proportionOfFirstPartySoftwareSalesQtr as proportionOfFirstPartySoftwareSalesQtrLastFY,
    proportionOfHardwareSalesQtr as proportionOfHardwareSalesQtrLastFY,
    proportionOfOverseasSalesQtr as proportionOfOverseasSalesQtrLastFY,
    proportionOfDLverPackagedSoftwareQtr as proportionOfDLverPackagedSoftwareQtrLastFY, 
    digitalSalesCml as digitalSalesCmlLastFY,
    proportionOfDLverPackagedSoftwareCml as proportionOfDLverPackagedSoftwareCmlLastFY,
    proportionOfDigitalSalesCml as proportionOfDigitalSalesCmlLastFY,
    proportionOfFirstPartySoftwareSalesCml as proportionOfFirstPartySoftwareSalesCmlLastFY,
    proportionOfHardwareSalesCml as proportionOfHardwareSalesCmlLastFY,
    proportionOfOverseasSalesCml as proportionOfOverseasSalesCmlLastFY, 
   } from "../../../data/nintendo/Nintendo-FY3-2021/kpi-fy3-21"
import {
        digitalSalesQtr,
        proportionOfDigitalSalesQtr,
        proportionOfFirstPartySoftwareSalesQtr,
        proportionOfHardwareSalesQtr,
        proportionOfOverseasSalesQtr,
        proportionOfDLverPackagedSoftwareQtr,
        digitalSalesCml,
        proportionOfDigitalSalesCml,
        proportionOfFirstPartySoftwareSalesCml,
        proportionOfHardwareSalesCml,
        proportionOfOverseasSalesCml,
        proportionOfDLverPackagedSoftwareCml,
       } from "../../../data/nintendo/Nintendo-FY3-2022/kpi-fy3-22"

import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js'; // required to actually get chart.js with react-chartjs-2 to work
Chart.register(...registerables); // to get the package working, source: https://www.chartjs.org/docs/next/getting-started/integration.html

export default function GRAPH_NINTENDO_KPI_FY3_22() {

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
        currentFY: "FY3/2022",
        lastFY: "FY3/2021",
        MarchThisYear: "March 2022",
        MarchLastYear: "March 2021"
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
        `Proportion of downloadable versions of Packaged Software Sales ${labels.lastFY}`,
    ]

    const graphQuarters = [
        proportionOfOverseasSalesQtr.map((elem) => elem.value),
        proportionOfHardwareSalesQtr.map((elem) => elem.value),
        proportionOfFirstPartySoftwareSalesQtr.map((elem) => elem.value),
        digitalSalesQtr.map((elem) => elem.value),
        proportionOfDigitalSalesQtr.map((elem) => elem.value),
        proportionOfDLverPackagedSoftwareQtr.map((elem) => elem.value),
    ]

    const graphQuartersLastFY = [
        proportionOfOverseasSalesQtrLastFY.map((elem) => elem.value),
        proportionOfHardwareSalesQtrLastFY.map((elem) => elem.value),
        proportionOfFirstPartySoftwareSalesQtrLastFY.map((elem) => elem.value),
        digitalSalesQtrLastFY.map((elem) => elem.value),
        proportionOfDigitalSalesQtrLastFY.map((elem) => elem.value),
        proportionOfDLverPackagedSoftwareQtrLastFY.map((elem) => elem.value),
    ]

    // const graphCumulative = [
    //     netSales.map((elem, index) => elem.value - netSalesDifference[index].value),
    //     operatingIncome.map((elem, index) => elem.value - operatingIncomeDifference[index].value),
    //     [operatingMarginQuarters[0] , ...operatingMarginCumulative].map((elem, index) => {
    //         return (elem.value > operatingMarginQuarters[index].value)
    //         ? elem.value - operatingMarginQuarters[index].value
    //         // : - elem.value + operatingMarginQuarters[index].value
    //         : 0 // the least worst result to ensure accuracy
    //     }),
    //     netIncome.map((elem, index) => elem.value - netIncomeDifference[index].value),
    // ]

    // const graphCumulativeLastFY = [
    //     netSalesLastFY.map((elem, index) => elem.value - netSalesLastFYDifference[index].value),
    //     operatingIncomeLastFY.map((elem, index) => elem.value - operatingIncomeLastFYDifference[index].value),
    //     [operatingMarginQuartersLastFY[0], ...operatingMarginCumulativeLastFY].map((elem, index) =>{
    //         return (elem.value > operatingMarginQuartersLastFY[index].value)
    //         ? elem.value - operatingMarginQuartersLastFY[index].value
    //         // : - elem.value + operatingMarginQuarters[index].value
    //         : 0 // the least worst result to ensure accuracy
    //     }),

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
            : (checked === true && barChecked === false) 
            ? (
                <Line
                    datasetIdKey="Consolidated Earnings"
                    data={{
                        labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                        datasets: [
                            {
                                data: graphQuarters[activePage-1],
                                label: kpiLabels[activePage-1],
                                borderColor: "indigo",
                                backgroundColor: "red",

                            },
                            {
                                data: graphQuartersLastFY[activePage-1],
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
                              text: (activePage === 4)
                                        ? "Billion yen (¥)"
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
                            data: graphQuarters[activePage-1],
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
            )
            : (
                <Bar
                datasetIdKey="Consolidated Earnings"
                data={{
                    labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
                    datasets: [
                        {
                            data: graphQuarters[activePage-1],
                            label: kpiLabels[activePage-1],
                            borderColor: "black",
                            backgroundColor: "indigo",
                            borderWidth: 2,

                        },
                        {
                            data: graphQuartersLastFY[activePage-1],
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
                          text: (activePage === 4)
                                        ? "Billion yen (¥)"
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
                    <Pagination page={activePage} onChange={setPage} total={graphQuarters.length} color="teal" size="sm" radius="md" />
                        <Switch onLabel="BAR" offLabel="BAR" size="md" checked={barChecked} onChange={(event) => setBarChecked(event.currentTarget.checked)} />
                            <Switch onLabel="ON" offLabel="OFF" size="md" checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />
            </Group>
        </div>

    )
}
