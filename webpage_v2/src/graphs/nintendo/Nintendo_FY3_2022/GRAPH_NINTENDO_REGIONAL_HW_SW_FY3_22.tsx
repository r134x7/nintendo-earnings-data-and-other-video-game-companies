export {} // nothing below is used.

// import { useState } from "react";
// import { Pagination, Group, Switch } from "@mantine/core";
// import { useSelector } from "react-redux";
// import {
//         nintendoSwitchHardwareTotalRegionsFiltered,
//         nintendoSwitchHardwareTotalRegionsLastFY,
//         nintendoSwitchLiteRegionsFiltered,
//         nintendoSwitchLiteRegionsLastFY,
//         nintendoSwitchOGRegionsFiltered,
//         nintendoSwitchOGRegionsLastFY,
//         nintendoSwitchOLEDRegionsFiltered,
//         nintendoSwitchOLEDRegionsLastFY,
//         nintendoSwitchSoftwareTotalRegionsFiltered,
//         nintendoSwitchSoftwareTotalRegionsLastFY,
//         quarterSwitchHardwareTotalRegions,
//         quarterSwitchHardwareTotalRegionsLastFY,
//         quarterSwitchLiteRegions,
//         quarterSwitchLiteRegionsLastFY,
//         quarterSwitchOGRegions,
//         quarterSwitchOGRegionsLastFY,
//         quarterSwitchOLEDRegions,
//         quarterSwitchOLEDRegionsLastFY,
//         quarterSwitchSoftwareTotalRegions,
//         quarterSwitchSoftwareTotalRegionsLastFY,
// } from "../../../data/nintendo/Nintendo_FY3_2022/regional_hw_sw_fy3_22";

// import { Line, Bar } from "react-chartjs-2";
// import { Chart, registerables } from 'chart.js'; // required to actually get chart.js with react-chartjs-2 to work
// Chart.register(...registerables); // to get the package working, source: https://www.chartjs.org/docs/next/getting-started/integration.html

// export default function GRAPH_NINTENDO_REGIONAL_HW_SW_FY3_22() {

//     const state: any = useSelector(state => state);

//     const [activePage, setPage] = useState(1);
//     const [checked, setChecked] = useState(false);
//     const [barChecked, setBarChecked] = useState(false);

//     type Labels = {
//         currentFY: string,
//         lastFY: string,
//         MarchThisYear: string,
//         MarchLastYear: string,
//     }

//     const labels: Labels = {
//         currentFY: "FY3/2022",
//         lastFY: "FY3/2021",
//         MarchThisYear: "March 2022",
//         MarchLastYear: "March 2021"
//     }

//     const headerLabels = [
//         nintendoSwitchOGRegionsFiltered,
//         nintendoSwitchLiteRegionsFiltered,
//         nintendoSwitchOLEDRegionsFiltered,
//         nintendoSwitchHardwareTotalRegionsFiltered,
//         nintendoSwitchSoftwareTotalRegionsFiltered,
//     ].map((elem) => {
//         return elem.map((secondElem, secondIndex) => {
//             return (secondIndex === 0) 
//                     ? `${secondElem.name} ${labels.currentFY}`
//                     : []
//         }).filter((elem) => elem.length !== 0)
//     }) 

//     const headerLabelsLastFY = [
//         nintendoSwitchOGRegionsFiltered,
//         nintendoSwitchLiteRegionsFiltered,
//         nintendoSwitchOLEDRegionsFiltered,
//         nintendoSwitchHardwareTotalRegionsFiltered,
//         nintendoSwitchSoftwareTotalRegionsFiltered,
//     ].map((elem) => {
//         return elem.map((secondElem, secondIndex) => {
//             return (secondIndex === 0) 
//                     ? `${secondElem.name} ${labels.lastFY}`
//                     : []
//         }).filter((elem) => elem.length !== 0)
//     }) 

//     const graphQuartersRegionB = [
//         quarterSwitchOGRegions,
//         quarterSwitchLiteRegions,
//         quarterSwitchOLEDRegions,
//         quarterSwitchHardwareTotalRegions,
//         quarterSwitchSoftwareTotalRegions,
//     ].map((elem) => {
//         return elem.map((secondElem, secondIndex) => {
//             return secondElem.valueB / 100
//         })
//     }) 

//     const graphQuartersRegionC = [
//         quarterSwitchOGRegions,
//         quarterSwitchLiteRegions,
//         quarterSwitchOLEDRegions,
//         quarterSwitchHardwareTotalRegions,
//         quarterSwitchSoftwareTotalRegions,
//     ].map((elem) => {
//         return elem.map((secondElem, secondIndex) => {
//             return secondElem.valueC / 100
//         })
//     }) 

//     const graphQuartersRegionD = [
//         quarterSwitchOGRegions,
//         quarterSwitchLiteRegions,
//         quarterSwitchOLEDRegions,
//         quarterSwitchHardwareTotalRegions,
//         quarterSwitchSoftwareTotalRegions,
//     ].map((elem) => {
//         return elem.map((secondElem, secondIndex) => {
//             return secondElem.valueD / 100
//         })
//     }) 

//     const graphQuartersRegionE = [
//         quarterSwitchOGRegions,
//         quarterSwitchLiteRegions,
//         quarterSwitchOLEDRegions,
//         quarterSwitchHardwareTotalRegions,
//         quarterSwitchSoftwareTotalRegions,
//     ].map((elem) => {
//         return elem.map((secondElem, secondIndex) => {
//             return secondElem.valueE / 100
//         })
//     }) 

//     const graphQuartersRegionBLastFY = [
//         quarterSwitchOGRegionsLastFY,
//         quarterSwitchLiteRegionsLastFY,
//         quarterSwitchOLEDRegionsLastFY,
//         quarterSwitchHardwareTotalRegionsLastFY,
//         quarterSwitchSoftwareTotalRegionsLastFY,
//     ].map((elem) => {
//         return elem.map((secondElem, secondIndex) => {
//             return secondElem.valueB
//         })
//     }) 

//     const graphQuartersRegionCLastFY = [
//         quarterSwitchOGRegionsLastFY,
//         quarterSwitchLiteRegionsLastFY,
//         quarterSwitchOLEDRegionsLastFY,
//         quarterSwitchHardwareTotalRegionsLastFY,
//         quarterSwitchSoftwareTotalRegionsLastFY,
//     ].map((elem) => {
//         return elem.map((secondElem, secondIndex) => {
//             return secondElem.valueC
//         })
//     }) 

//     const graphQuartersRegionDLastFY = [
//         quarterSwitchOGRegionsLastFY,
//         quarterSwitchLiteRegionsLastFY,
//         quarterSwitchOLEDRegionsLastFY,
//         quarterSwitchHardwareTotalRegionsLastFY,
//         quarterSwitchSoftwareTotalRegionsLastFY,
//     ].map((elem) => {
//         return elem.map((secondElem, secondIndex) => {
//             return secondElem.valueD
//         })
//     }) 

//     const graphQuartersRegionELastFY = [
//         quarterSwitchOGRegionsLastFY,
//         quarterSwitchLiteRegionsLastFY,
//         quarterSwitchOLEDRegionsLastFY,
//         quarterSwitchHardwareTotalRegionsLastFY,
//         quarterSwitchSoftwareTotalRegionsLastFY,
//     ].map((elem) => {
//         return elem.map((secondElem, secondIndex) => {
//             return secondElem.valueE
//         })
//     }) 

//     const graphCumulativeRegionB = [
//         nintendoSwitchOGRegionsFiltered,
//         nintendoSwitchLiteRegionsFiltered,
//         nintendoSwitchOLEDRegionsFiltered,
//         nintendoSwitchHardwareTotalRegionsFiltered,
//         nintendoSwitchSoftwareTotalRegionsFiltered,
//     ].map((elem) => {
//         return elem.map((secondElem, secondIndex) => {
//             return secondElem.valueB
//         })
//     })

//     const graphCumulativeRegionC = [
//         nintendoSwitchOGRegionsFiltered,
//         nintendoSwitchLiteRegionsFiltered,
//         nintendoSwitchOLEDRegionsFiltered,
//         nintendoSwitchHardwareTotalRegionsFiltered,
//         nintendoSwitchSoftwareTotalRegionsFiltered,
//     ].map((elem) => {
//         return elem.map((secondElem, secondIndex) => {
//             return secondElem.valueC
//         })
//     })

//     const graphCumulativeRegionD = [
//         nintendoSwitchOGRegionsFiltered,
//         nintendoSwitchLiteRegionsFiltered,
//         nintendoSwitchOLEDRegionsFiltered,
//         nintendoSwitchHardwareTotalRegionsFiltered,
//         nintendoSwitchSoftwareTotalRegionsFiltered,
//     ].map((elem) => {
//         return elem.map((secondElem, secondIndex) => {
//             return secondElem.valueD
//         })
//     })

//     const graphCumulativeRegionE = [
//         nintendoSwitchOGRegionsFiltered,
//         nintendoSwitchLiteRegionsFiltered,
//         nintendoSwitchOLEDRegionsFiltered,
//         nintendoSwitchHardwareTotalRegionsFiltered,
//         nintendoSwitchSoftwareTotalRegionsFiltered,
//     ].map((elem) => {
//         return elem.map((secondElem, secondIndex) => {
//             return secondElem.valueE
//         })
//     })

//     const graphCumulativeRegionBLastFY = [
//         nintendoSwitchOGRegionsLastFY,
//         nintendoSwitchLiteRegionsLastFY,
//         nintendoSwitchOLEDRegionsLastFY,
//         nintendoSwitchHardwareTotalRegionsLastFY,
//         nintendoSwitchSoftwareTotalRegionsLastFY,
//     ].map((elem) => {
//         return elem.map((secondElem, secondIndex) => {
//             return secondElem.valueB
//         })
//     })

//     const graphCumulativeRegionCLastFY = [
//         nintendoSwitchOGRegionsLastFY,
//         nintendoSwitchLiteRegionsLastFY,
//         nintendoSwitchOLEDRegionsLastFY,
//         nintendoSwitchHardwareTotalRegionsLastFY,
//         nintendoSwitchSoftwareTotalRegionsLastFY,
//     ].map((elem) => {
//         return elem.map((secondElem, secondIndex) => {
//             return secondElem.valueC
//         })
//     })

//     const graphCumulativeRegionDLastFY = [
//         nintendoSwitchOGRegionsLastFY,
//         nintendoSwitchLiteRegionsLastFY,
//         nintendoSwitchOLEDRegionsLastFY,
//         nintendoSwitchHardwareTotalRegionsLastFY,
//         nintendoSwitchSoftwareTotalRegionsLastFY,
//     ].map((elem) => {
//         return elem.map((secondElem, secondIndex) => {
//             return secondElem.valueD
//         })
//     })

//     const graphCumulativeRegionELastFY = [
//         nintendoSwitchOGRegionsLastFY,
//         nintendoSwitchLiteRegionsLastFY,
//         nintendoSwitchOLEDRegionsLastFY,
//         nintendoSwitchHardwareTotalRegionsLastFY,
//         nintendoSwitchSoftwareTotalRegionsLastFY,
//     ].map((elem) => {
//         return elem.map((secondElem, secondIndex) => {
//             return secondElem.valueE
//         })
//     })

//     return (
//         <div className="chart">
//         {(checked === false && barChecked === false)
//             ? (
//                 <Line
//                     datasetIdKey="Regional HW/SW Sales Units"
//                     data={{
//                         labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
//                         datasets: [
//                             {
//                             data: graphQuartersRegionB[activePage-1],
//                             label: `${headerLabels[activePage-1]}[Japan]`,
//                             borderColor: state.colour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
//                                 return (curr === ".")
//                                         ? acc + "1)"
//                                         : acc + curr;
//                                 }),
//                             backgroundColor: state.colour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
//                                     return (curr === ".")
//                                             ? acc + "1)"
//                                             : acc + curr;
//                                     }),
//                             pointRadius: 6,
//                             pointBorderColor: "black",
//                             pointBorderWidth: 2,
//                             },
//                             {
//                             data: graphQuartersRegionC[activePage-1],
//                             label: `${headerLabels[activePage-1]}[The Americas]`,
//                             borderColor: state.colour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
//                                 return (curr === ".")
//                                         ? acc + ".3)"
//                                         : acc + curr;
//                                 }),
//                             backgroundColor: state.colour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
//                                     return (curr === ".")
//                                             ? acc + ".3)"
//                                             : acc + curr;
//                                     }),
//                             pointRadius: 6,
//                             pointBorderColor: "red",
//                             pointBorderWidth: 2,
//                             },
//                             {
//                             data: graphQuartersRegionD[activePage-1],
//                             label: `${headerLabels[activePage-1]}[Europe]`,
//                             borderColor: state.colour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
//                                 return (curr === ".")
//                                         ? acc + ".3)"
//                                         : acc + curr;
//                                 }),
//                             backgroundColor: state.colour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
//                                     return (curr === ".")
//                                             ? acc + ".3)"
//                                             : acc + curr;
//                                     }),
//                             pointRadius: 6,
//                             pointBorderColor: "blue",
//                             pointBorderWidth: 2,
//                             },
//                             {
//                             data: graphQuartersRegionE[activePage-1],
//                             label: `${headerLabels[activePage-1]}[Other]`,
//                             borderColor: state.colour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
//                                 return (curr === ".")
//                                         ? acc + ".3)"
//                                         : acc + curr;
//                                 }),
//                             backgroundColor: state.colour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
//                                     return (curr === ".")
//                                             ? acc + ".3)"
//                                             : acc + curr;
//                                     }),
//                             pointRadius: 6,
//                             pointBorderColor: "green",
//                             pointBorderWidth: 2,
//                             },
//                         ], 
//                     }}

//                     options={{
//                      scales: {
//                         y: {
//                             stacked: true,
//                             type: "logarithmic",
//                             title: {
//                               display: true,
//                               text: "Units in Millions",
//                             },
//                           },
//                           x: {
//                             stacked: true,
//                               title: {
//                                   display: true,
//                                   text: `Quarters for Fiscal Year Ending ${labels.MarchThisYear}`,
//                                 },
//                             },
//                         }
//                     }}
//                 />
//             )
//             : (checked === true && barChecked === false) 
//             ? (
//                 <Line
//                     datasetIdKey="Regional HW/SW Sales Units"
//                     data={{
//                         labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
//                         datasets: [
//                             {
//                                 data: graphQuartersRegionB[activePage-1],
//                                 label: `${headerLabels[activePage-1]}[Quarter]`,
//                                 borderColor: "indigo",
//                                 backgroundColor: "red",
//                                 pointRadius: 6,
//                                 pointBorderColor: "black",
//                                 pointBorderWidth: 2,
//                                 stack: "stack 0",
//                             },
//                             {
//                                 data: graphQuartersRegionC[activePage-1],
//                                 label: `${headerLabels[activePage-1]}[Cumulative]`,
//                                 borderColor: "rgba(75, 0, 130, .30)",
//                                 backgroundColor: "red",
//                                 pointRadius: 6,
//                                 pointBorderColor: "black",
//                                 pointBorderWidth: 2,
//                                 stack: "stack 0",
//                             },
//                             {
//                                 data: graphQuartersRegionBLastFY[activePage-1],
//                                 label: `${headerLabelsLastFY[activePage-1]}[Quarter]`,
//                                 borderColor: "orange",
//                                 backgroundColor: "cyan",
//                                 pointRadius: 6,
//                                 pointBorderColor: "black",
//                                 pointBorderWidth: 2,
//                                 stack: "stack 1",
//                             },
//                             {
//                                 data: graphQuartersRegionCLastFY[activePage-1],
//                                 label: `${headerLabelsLastFY[activePage-1]}[Cumulative]`,
//                                 borderColor: "rgba(255, 165, 0, 0.3)",
//                                 backgroundColor: "cyan",
//                                 pointRadius: 6,
//                                 pointBorderColor: "black",
//                                 pointBorderWidth: 2,
//                                 stack: "stack 1",
//                             },
//                         ], 
//                     }}

//                     options={{
//                      scales: {
//                         y: {
//                             stacked: true,
//                             title: {
//                               display: true,
//                               text: (activePage === 6)
//                                         ? "Million yen (¥)"
//                                         : "Units in Millions",
//                             },
//                           },
//                           x: {
//                             stacked: true,
//                               title: {
//                                   display: true,
//                                   text: `Quarters for Fiscal Years Ending ${labels.MarchThisYear} and ${labels.MarchLastYear}`,
//                                 },
//                             },
//                         }
//                     }}
//                 />
//             )
//             : (checked === false && barChecked === true) 
//             ? (
//                 <Bar
//                     datasetIdKey="Regional HW/SW Sales Units"
//                     data={{
//                         labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
//                         datasets: [
//                             {
//                             data: graphQuartersRegionB[activePage-1],
//                             label: `${headerLabels[activePage-1]}[Quarter]`,
//                             backgroundColor: state.colour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
//                                 return (curr === ".")
//                                         ? acc + ".80)"
//                                         : acc + curr;
//                             }),
//                             borderColor: "black",
//                             borderWidth: 2,
//                             },
//                             {
//                             data: graphQuartersRegionC[activePage-1],
//                             label: `${headerLabels[activePage-1]}[Cumulative]`,
//                             backgroundColor: state.colour.split("").slice(0, -3).reduce((acc: string, curr: string) => {
//                                 return (curr === ".")
//                                         ? acc + ".20)"
//                                         : acc + curr;
//                             }),
//                             borderColor: "black",
//                             borderWidth: 2,
//                             },
//                         ], 
//                     }}

//                     options={{
//                      scales: {
//                         y: {
//                             stacked: true,
//                             title: {
//                               display: true,
//                               text: (activePage === 6)
//                                         ? "Million yen (¥)"
//                                         : "Units in Millions",
//                             },
//                           },
//                           x: {
//                             stacked: true,
//                               title: {
//                                   display: true,
//                                   text: `Quarters for Fiscal Year Ending ${labels.MarchThisYear}`,
//                                 },
//                             },
//                         }
//                     }}
//                 />
//             )
//             : (
//                 <Bar
//                 datasetIdKey="Regional HW/SW Sales Units"
//                 data={{
//                     labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter",],//array x-axis
//                     datasets: [
//                         {
//                             data: graphQuartersRegionB[activePage-1],
//                             label: `${headerLabels[activePage-1]}[Quarter]`,
//                             borderColor: "black",
//                             backgroundColor: "indigo",
//                             borderWidth: 2,
//                             stack: "stack 0"
//                         },
//                         {
//                             data: graphQuartersRegionC[activePage-1],
//                             label: `${headerLabels[activePage-1]}[Cumulative]`,
//                             borderColor: "black",
//                             backgroundColor: "rgba(75, 0, 130, .20)",
//                             borderWidth: 2,
//                             stack: "stack 0"
//                         },
//                         {
//                             data: graphQuartersRegionBLastFY[activePage-1],
//                             label: `${headerLabelsLastFY[activePage-1]}[Quarter]`,
//                             borderColor: "black",
//                             backgroundColor: "orange",
//                             borderWidth: 2,
//                             stack: "stack 1"
//                         },
//                         {
//                             data: graphQuartersRegionCLastFY[activePage-1],
//                             label: `${headerLabelsLastFY[activePage-1]}[Cumulative]`,
//                             borderColor: "black",
//                             backgroundColor: "rgba(255, 165, 0, 0.2)",
//                             borderWidth: 2,
//                             stack: "stack 1"
//                         },
//                     ], 
//                 }}

//                 options={{
//                  scales: {
//                     y: {
//                         stacked: true,
//                         title: {
//                           display: true,
//                           text: (activePage === 6)
//                                         ? "Million yen (¥)"
//                                         : "Units in Millions",
//                         },
//                       },
//                       x: {
//                             stacked: true,
//                           title: {
//                               display: true,
//                               text: `Quarters for Fiscal Years Ending ${labels.MarchThisYear} and ${labels.MarchLastYear}`,
//                             },
//                         },
//                     }
//                 }}
//             />
//             )}
//                 <Group mt="md" position="center">
//                     <Pagination page={activePage} onChange={setPage} total={headerLabels.length} color="teal" size="sm" radius="md" />
//                         <Switch onLabel="BAR" offLabel="BAR" size="md" checked={barChecked} onChange={(event) => setBarChecked(event.currentTarget.checked)} />
//                             <Switch onLabel="ON" offLabel="OFF" size="md" checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />
//             </Group>
//         </div>

//     )
// }