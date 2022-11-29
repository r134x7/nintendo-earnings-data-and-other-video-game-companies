import { useState } from "react";
import { Pagination, Group, Switch } from "@mantine/core";
import { useSelector } from "react-redux";
import { Section } from "../../../utils/hardware_software_units_logic";

import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js'; // required to actually get chart.js with react-chartjs-2 to work
Chart.register(...registerables); // to get the package working, source: https://www.chartjs.org/docs/next/getting-started/integration.html

export default function GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE(props:
    {setData: ({
        thisFY: string;
        lastFY: string;
        marchThisFY: string,
        marchLastFY: string,
        quarterValuesThisFY: Section[][];
        quarterValuesLastFY: Section[][];
        cumulativeValuesThisFY: Section[][];
        cumulativeValuesLastFY: Section[][];
    })}) {

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
        currentFY: props.setData?.thisFY as string,
        lastFY: props.setData?.lastFY as string,
        MarchThisYear: props.setData?.marchThisFY as string,
        MarchLastYear: props.setData?.marchLastFY as string,
    }

    // const headerLabels = [
    //     `Switch ${labels.currentFY}`,
    //     `Switch Lite ${labels.currentFY}`,
    //     `Switch OLED ${labels.currentFY}`,
    //     `Switch Hardware Total ${labels.currentFY}`,
    //     `Switch Software Total ${labels.currentFY}`,
    //     `Mobile, IP related income, etc. ${labels.currentFY}`,
    // ]

    const headerLabels = props.setData.quarterValuesThisFY.map((elem) => {

        switch (elem[0].name) {
            case " Switch ":
                return `Switch ${labels.currentFY}`
            case " Switch Lite ":
                return `Switch Lite ${labels.currentFY}`
            case " Switch OLED ":
                return `Switch OLED ${labels.currentFY}`
            case " Hardware Total ":
                return `Switch Hardware Total ${labels.currentFY}`
            case " Software Total ":
                return `Switch Software Total ${labels.currentFY}`
            case " Mobile ":
                return `Mobile, IP related income, etc. ${labels.currentFY}`
            case " Playing cards ":
                return `Playing cards, etc. ${labels.lastFY}`
            case " Dedicated video game platform ":
                return `Dedicated video game platform ${labels.lastFY}`
            case " Digital Sales ":
                return `Digital Sales in dedicated video game platform ${labels.lastFY}`
            default:
                return `Undefined ${labels.currentFY}`
        }
        // return elem[0].name + " " + labels.currentFY 
    });

    const headerLabelsLastFY = props.setData.quarterValuesLastFY.map((elem) => {

        switch (elem[0].name) {
            case " Switch ":
                return `Switch ${labels.lastFY}`
            case " Switch Lite ":
                return `Switch Lite ${labels.lastFY}`
            case " Switch OLED ":
                return `Switch OLED ${labels.lastFY}`
            case " Hardware Total ":
                return `Switch Hardware Total ${labels.lastFY}`
            case " Software Total ":
                return `Switch Software Total ${labels.lastFY}`
            case " Mobile ":
                return `Mobile, IP related income, etc. ${labels.lastFY}`
            case " Playing cards ":
                return `Playing cards, etc. ${labels.lastFY}`
            case " Dedicated video game platform ":
                return `Dedicated video game platform ${labels.lastFY}`
            case " Digital Sales ":
                return `Digital Sales in dedicated video game platform ${labels.lastFY}`
            default:
                return `Undefined ${labels.lastFY}`
        }
        // return elem[0].name + " " + labels.lastFY
    });


    // const headerLabelsLastFY = [
    //     `Switch ${labels.lastFY}`,
    //     `Switch Lite ${labels.lastFY}`,
    //     `Switch OLED ${labels.lastFY}`,
    //     `Switch Hardware Total ${labels.lastFY}`,
    //     `Switch Software Total ${labels.lastFY}`,
    //     `Mobile, IP related income, etc. ${labels.lastFY}`,
    // ]

    // const graphQuarters = [
    //     quarterSwitchOG.map((elem) => (elem.value / 100).toFixed(2)),
    //     quarterSwitchLite.map((elem) => (elem.value / 100).toFixed(2)),
    //     quarterSwitchOLED.map((elem) => (elem.value / 100).toFixed(2)),
    //     quarterHardwareTotal.map((elem) => (elem.value / 100).toFixed(2)),
    //     quarterSoftwareTotal.map((elem) => (elem.value / 100).toFixed(2)),
    //     quarterNintendoMobile.map((elem) => elem.value),
    // ]

    const graphQuarters = props.setData.quarterValuesThisFY.map((elem) => {
        return elem.map(value => {
            return (value.units === "units")
                    ? (value.value / 100).toFixed(2)
                    : value.value
        })
    });

    const graphQuartersLastFY = props.setData.quarterValuesLastFY.map((elem) => {
        return elem.map(value => {
            return (value.units === "units")
                    ? (value.value / 100).toFixed(2)
                    : value.value
        })
    });
 

    // const graphQuartersLastFY = [
    //     quarterSwitchOGLastFY.map((elem) => (elem.value / 100).toFixed(2)),
    //     quarterSwitchLiteLastFY.map((elem) => (elem.value / 100).toFixed(2)),
    //     quarterSwitchOLEDLastFY.map((elem) => (elem.value / 100).toFixed(2)),
    //     quarterHardwareTotalLastFY.map((elem) => (elem.value / 100).toFixed(2)),
    //     quarterSoftwareTotalLastFY.map((elem) => (elem.value / 100).toFixed(2)),
    //     quarterNintendoMobileLastFY.map((elem) => elem.value),
    // ]

    const graphCumulative = props.setData.cumulativeValuesThisFY.map((elem) => {
        return elem.map(value => {
            return (value.units === "units")
                    ? (value.value / 100).toFixed(2)
                    : value.value
        })
    });

    const graphCumulativeLastFY = props.setData.cumulativeValuesLastFY.map((elem) => {
        return elem.map(value => {
            return (value.units === "units")
                    ? (value.value / 100).toFixed(2)
                    : value.value
        })
    });


    // const graphCumulative = [
    //     nintendoSwitchOGFiltered.map((elem, index) => ((elem.value - quarterSwitchOG[index].value) / 100).toFixed(2)),
    //     nintendoSwitchLiteFiltered.map((elem, index) => ((elem.value - quarterSwitchLite[index].value) / 100).toFixed(2)),
    //     nintendoSwitchOLEDFiltered.map((elem, index) => ((elem.value - quarterSwitchOLED[index].value) / 100).toFixed(2)),
    //     nintendoSwitchHardwareTotalFiltered.map((elem, index) => ((elem.value - quarterHardwareTotal[index].value) / 100).toFixed(2)),
    //     nintendoSwitchSoftwareTotalFiltered.map((elem, index) => ((elem.value - quarterSoftwareTotal[index].value) / 100).toFixed(2)),
    //     nintendoMobileFiltered.map((elem, index) => ((elem.value - quarterNintendoMobile[index].value)).toFixed(2)),
    // ]

    // const graphCumulativeLastFY = [
    //     nintendoSwitchOGLastFY.map((elem, index) => ((elem.value - quarterSwitchOGLastFY[index].value) / 100).toFixed(2)),
    //     nintendoSwitchLiteLastFY.map((elem, index) => ((elem.value - quarterSwitchLiteLastFY[index].value) / 100).toFixed(2)),
    //     nintendoSwitchOLEDLastFY.map((elem, index) => ((elem.value - quarterSwitchOLEDLastFY[index].value) / 100).toFixed(2)),
    //     nintendoSwitchHardwareTotalLastFY.map((elem, index) => ((elem.value - quarterHardwareTotalLastFY[index].value) / 100).toFixed(2)),
    //     nintendoSwitchSoftwareTotalLastFY.map((elem, index) => ((elem.value - quarterSoftwareTotalLastFY[index].value) / 100).toFixed(2)),
    //     nintendoMobileLastFY.map((elem, index) => ((elem.value - quarterNintendoMobileLastFY[index].value)).toFixed(2)),

    // ]

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
                            // stacked: true,
                            title: {
                              display: true,
                              text: (activePage === graphQuarters.length)
                                        ? "Million yen (¥)"
                                        : "Units in Millions",
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
                            // stacked: true,
                            title: {
                              display: true,
                              text: (activePage === graphQuarters.length)
                                        ? "Million yen (¥)"
                                        : "Units in Millions",
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
                            // stacked: true,
                            title: {
                              display: true,
                              text: (activePage === graphQuarters.length)
                                        ? "Million yen (¥)"
                                        : "Units in Millions",
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
                          text: (activePage === graphQuarters.length)
                                        ? "Million yen (¥)"
                                        : "Units in Millions",
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