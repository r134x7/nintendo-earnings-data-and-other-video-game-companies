// export type Section = {
//     units: "units" | "percentage" | "currency" | "NaN" ,
//     period: " 1st Quarter " | " 2nd Quarter " | " 3rd Quarter " | " 4th Quarter " | " Last FY Cumulative "
//     cmlPeriod: " 1st Quarter " | " First Half  " | " First Three Quarters " | "Cml. ",
//     name: string,
//     region: "Japan" | "The Americas" | "Europe" | "Other" | "Global"
//     value: number,
// }

export type Section = {
    units: "units" | "percentage" | "currency" | "NaN" ,
    period: " 1st Quarter " | " 2nd Quarter " | " 3rd Quarter " | " 4th Quarter " | " Last FY Cumulative "
    cmlPeriod: " 1st Quarter " | " First Half  " | " First Three Quarters " | "Cml. ",
    name: string,
    regionA: "Global",
    regionB: "Japan", 
    regionC: "The Americas",
    regionD: "Europe" | "Other",
    regionE: "Other",
    valueA: number,
    valueB: number,
    valueC: number,
    valueD: number,
    valueE: number,
}

export type Header = {
    switchHeader: "| Nintendo Switch Regional Data |",
    fiscalYear: string,
    fiscalYearCml: string,
    units: "| Units  |",
    yearOnYear: "| YoY%   |",
    globalPercentage: "| Global%|",
    ltd: " Life-To-Date ",
}

const header: Header = {
    switchHeader: "| Nintendo Switch Regional Data |",
    fiscalYear: " FY3/2022 ",
    fiscalYearCml: " FY3/22 Cumulative ",
    globalPercentage: "| Global%|",
    units: "| Units  |",
    yearOnYear: "| YoY%   |",
    ltd: " Life-To-Date ",
}

// const nintendoSwitchOGWW: Section[] = [
//     {
//         name: " Switch ",
//         region: "Global",
//         period: " 1st Quarter ",
//         cmlPeriod: " 1st Quarter ",
//         units: "units",
//         value: 1000,
//     },
//     {
//         name: " Switch ",
//         region: "Global",
//         period: " 2nd Quarter ", 
//         cmlPeriod: " First Half  ",
//         units: "units",
//         value: 2000,
//     },
//     {
//         name: " Switch ",
//         region: "Global",
//         period: " 3rd Quarter ",
//         cmlPeriod: " First Three Quarters ",
//         units: "units",
//         value: 3000,
//     },
//     {
//         name: " Switch ",
//         region: "Global",
//         period: " 4th Quarter ", 
//         cmlPeriod: "Cml. ",
//         units: "units",
//         value: 4000,
//     },
//     {
//         name: " Switch ",
//         region: "Global",
//         period: " Last FY Cumulative ",
//         cmlPeriod: "Cml. ",
//         units: "units",
//         value: 500,
//     },
// ]

const nintendoSwitchOGRegions: Section[] = [
    {
        name: " Switch ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        regionA: "Global", 
        valueA: 1000,
        regionB: "Japan", 
        valueB: 100,
        regionC: "The Americas", 
        valueC: 100,
        regionD: "Europe", 
        valueD: 100,
        regionE: "Other",
        valueE: 100,
    },
    {
        name: " Switch ",
        period: " 2nd Quarter ", 
        cmlPeriod: " First Half  ",
        units: "units",
        regionA: "Global", 
        valueA: 2000,
        regionB: "Japan", 
        valueB: 200,
        regionC: "The Americas", 
        valueC: 200,
        regionD: "Europe", 
        valueD: 200,
        regionE: "Other",
        valueE: 200,
    },
    {
        name: " Switch ",
        period: " 3rd Quarter ",
        cmlPeriod: " First Three Quarters ",
        units: "units",
        regionA: "Global", 
        valueA: 3000,
        regionB: "Japan", 
        valueB: 300,
        regionC: "The Americas", 
        valueC: 300,
        regionD: "Europe", 
        valueD: 300,
        regionE: "Other",
        valueE: 300,
    },
    {
        name: " Switch ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        regionA: "Global", 
        valueA: 4000,
        regionB: "Japan", 
        valueB: 400,
        regionC: "The Americas", 
        valueC: 400,
        regionD: "Europe", 
        valueD: 400,
        regionE: "Other",
        valueE: 400,
    },
    {
        name: " Switch ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        regionA: "Global", 
        valueA: 500,
        regionB: "Japan", 
        valueB: 100,
        regionC: "The Americas", 
        valueC: 100,
        regionD: "Europe", 
        valueD: 100,
        regionE: "Other",
        valueE: 100,
    },
]

const nintendoSwitchOGRegionsLastFY: Section[] = [
    {
        name: " Switch ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        regionA: "Global", 
        valueA: 40,
        regionB: "Japan", 
        valueB: 10,
        regionC: "The Americas", 
        valueC: 10,
        regionD: "Europe", 
        valueD: 10,
        regionE: "Other",
        valueE: 10,
    },
    {
        name: " Switch ",
        period: " 2nd Quarter ", 
        cmlPeriod: " First Half  ",
        units: "units",
        regionA: "Global", 
        valueA: 80,
        regionB: "Japan", 
        valueB: 20,
        regionC: "The Americas", 
        valueC: 20,
        regionD: "Europe", 
        valueD: 20,
        regionE: "Other",
        valueE: 20,
    },
    {
        name: " Switch ",
        period: " 3rd Quarter ",
        cmlPeriod: " First Three Quarters ",
        units: "units",
        regionA: "Global", 
        valueA: 120,
        regionB: "Japan", 
        valueB: 30,
        regionC: "The Americas", 
        valueC: 30,
        regionD: "Europe", 
        valueD: 30,
        regionE: "Other",
        valueE: 30,
    },
    {
        name: " Switch ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        regionA: "Global", 
        valueA: 160,
        regionB: "Japan", 
        valueB: 40,
        regionC: "The Americas", 
        valueC: 40,
        regionD: "Europe", 
        valueD: 40,
        regionE: "Other",
        valueE: 40,
    },
]

// const nintendoSwitchOGJapan: Section[] = [
//     {
//         name: " Switch ",
//         region: "Japan", 
//         period: " 1st Quarter ",
//         cmlPeriod: " 1st Quarter ",
//         units: "units",
//         value: 100,
//     },
//     {
//         name: " Switch ",
//         region: "Japan", 
//         period: " 2nd Quarter ", 
//         cmlPeriod: " First Half  ",
//         units: "units",
//         value: 200,
//     },
//     {
//         name: " Switch ",
//         region: "Japan", 
//         period: " 3rd Quarter ",
//         cmlPeriod: " First Three Quarters ",
//         units: "units",
//         value: 300,
//     },
//     {
//         name: " Switch ",
//         region: "Japan", 
//         period: " 4th Quarter ", 
//         cmlPeriod: "Cml. ",
//         units: "units",
//         value: 400,
//     },
//     {
//         name: " Switch ",
//         region: "Japan", 
//         period: " Last FY Cumulative ",
//         cmlPeriod: "Cml. ",
//         units: "units",
//         value: 100,
//     },
// ]

// const nintendoSwitchOGJapanLastFY: Section[] = [
//     {
//         name: " Switch ",
//         region: "Japan", 
//         period: " 1st Quarter ",
//         cmlPeriod: " 1st Quarter ",
//         units: "units",
//         value: 10,
//     },
//     {
//         name: " Switch ",
//         region: "Japan", 
//         period: " 2nd Quarter ", 
//         cmlPeriod: " First Half  ",
//         units: "units",
//         value: 20,
//     },
//     {
//         name: " Switch ",
//         region: "Japan", 
//         period: " 3rd Quarter ",
//         cmlPeriod: " First Three Quarters ",
//         units: "units",
//         value: 30,
//     },
//     {
//         name: " Switch ",
//         region: "Japan", 
//         period: " 4th Quarter ", 
//         cmlPeriod: "Cml. ",
//         units: "units",
//         value: 40,
//     },
// ]

// const nintendoSwitchOGAmericas: Section[] = [
//     {
//         name: " Switch ",
//         region: "The Americas", 
//         period: " 1st Quarter ",
//         cmlPeriod: " 1st Quarter ",
//         units: "units",
//         value: 100,
//     },
//     {
//         name: " Switch ",
//         region: "The Americas", 
//         period: " 2nd Quarter ", 
//         cmlPeriod: " First Half  ",
//         units: "units",
//         value: 200,
//     },
//     {
//         name: " Switch ",
//         region: "The Americas", 
//         period: " 3rd Quarter ",
//         cmlPeriod: " First Three Quarters ",
//         units: "units",
//         value: 300,
//     },
//     {
//         name: " Switch ",
//         region: "The Americas", 
//         period: " 4th Quarter ", 
//         cmlPeriod: "Cml. ",
//         units: "units",
//         value: 400,
//     },
//     {
//         name: " Switch ",
//         region: "The Americas", 
//         period: " Last FY Cumulative ",
//         cmlPeriod: "Cml. ",
//         units: "units",
//         value: 100,
//     },
// ]

// const nintendoSwitchOGAmericasLastFY: Section[] = [
//     {
//         name: " Switch ",
//         region: "The Americas", 
//         period: " 1st Quarter ",
//         cmlPeriod: " 1st Quarter ",
//         units: "units",
//         value: 10,
//     },
//     {
//         name: " Switch ",
//         region: "The Americas", 
//         period: " 2nd Quarter ", 
//         cmlPeriod: " First Half  ",
//         units: "units",
//         value: 20,
//     },
//     {
//         name: " Switch ",
//         region: "The Americas", 
//         period: " 3rd Quarter ",
//         cmlPeriod: " First Three Quarters ",
//         units: "units",
//         value: 30,
//     },
//     {
//         name: " Switch ",
//         region: "The Americas", 
//         period: " 4th Quarter ", 
//         cmlPeriod: "Cml. ",
//         units: "units",
//         value: 40,
//     },
// ]


// const nintendoSwitchOGEurope: Section[] = [
//     {
//         name: " Switch ",
//         region: "Europe", 
//         period: " 1st Quarter ",
//         cmlPeriod: " 1st Quarter ",
//         units: "units",
//         value: 100,
//     },
//     {
//         name: " Switch ",
//         region: "Europe", 
//         period: " 2nd Quarter ", 
//         cmlPeriod: " First Half  ",
//         units: "units",
//         value: 200,
//     },
//     {
//         name: " Switch ",
//         region: "Europe", 
//         period: " 3rd Quarter ",
//         cmlPeriod: " First Three Quarters ",
//         units: "units",
//         value: 300,
//     },
//     {
//         name: " Switch ",
//         region: "Europe", 
//         period: " 4th Quarter ", 
//         cmlPeriod: "Cml. ",
//         units: "units",
//         value: 400,
//     },
//     {
//         name: " Switch ",
//         region: "Europe", 
//         period: " Last FY Cumulative ",
//         cmlPeriod: "Cml. ",
//         units: "units",
//         value: 100,
//     },
// ]

// const nintendoSwitchOGEuropeLastFY: Section[] = [
//     {
//         name: " Switch ",
//         region: "Europe", 
//         period: " 1st Quarter ",
//         cmlPeriod: " 1st Quarter ",
//         units: "units",
//         value: 10,
//     },
//     {
//         name: " Switch ",
//         region: "Europe", 
//         period: " 2nd Quarter ", 
//         cmlPeriod: " First Half  ",
//         units: "units",
//         value: 20,
//     },
//     {
//         name: " Switch ",
//         region: "Europe", 
//         period: " 3rd Quarter ",
//         cmlPeriod: " First Three Quarters ",
//         units: "units",
//         value: 30,
//     },
//     {
//         name: " Switch ",
//         region: "Europe", 
//         period: " 4th Quarter ", 
//         cmlPeriod: "Cml. ",
//         units: "units",
//         value: 40,
//     },
// ]


// const nintendoSwitchOGOther: Section[] = [
//     {
//         name: " Switch ",
//         region: "Other", 
//         period: " 1st Quarter ",
//         cmlPeriod: " 1st Quarter ",
//         units: "units",
//         value: 100,
//     },
//     {
//         name: " Switch ",
//         region: "Other", 
//         period: " 2nd Quarter ", 
//         cmlPeriod: " First Half  ",
//         units: "units",
//         value: 200,
//     },
//     {
//         name: " Switch ",
//         region: "Other", 
//         period: " 3rd Quarter ",
//         cmlPeriod: " First Three Quarters ",
//         units: "units",
//         value: 300,
//     },
//     {
//         name: " Switch ",
//         region: "Other", 
//         period: " 4th Quarter ", 
//         cmlPeriod: "Cml. ",
//         units: "units",
//         value: 400,
//     },
//     {
//         name: " Switch ",
//         region: "Other", 
//         period: " Last FY Cumulative ",
//         cmlPeriod: "Cml. ",
//         units: "units",
//         value: 100,
//     },
// ]

// const nintendoSwitchOGOtherLastFY: Section[] = [
//     {
//         name: " Switch ",
//         region: "Other", 
//         period: " 1st Quarter ",
//         cmlPeriod: " 1st Quarter ",
//         units: "units",
//         value: 10,
//     },
//     {
//         name: " Switch ",
//         region: "Other", 
//         period: " 2nd Quarter ", 
//         cmlPeriod: " First Half  ",
//         units: "units",
//         value: 20,
//     },
//     {
//         name: " Switch ",
//         region: "Other", 
//         period: " 3rd Quarter ",
//         cmlPeriod: " First Three Quarters ",
//         units: "units",
//         value: 30,
//     },
//     {
//         name: " Switch ",
//         region: "Other", 
//         period: " 4th Quarter ", 
//         cmlPeriod: "Cml. ",
//         units: "units",
//         value: 40,
//     },
// ]

// will have to run similarly to the hardware software logic code...
// will need to look at mst code for WW percentages code...
// need to look at improving the aethetics of the tables..............

const oldTableDesign = 
`+--------------------------------------------+
| Nintendo Switch Regional Data   | FY3/2022 |
+--------------------------------------------+
+--------------------------------------------+
| Switch | Japan  |The     | Europe | Other  |
|        |        |Americas|        |        |
+--------------------------------------------+
|Q1 Units|  0.83M |  1.10M |  0.82M |  0.56M |
|Q1 YoY% | +5.06% |+54.93% | -1.20% |-23.29% |
|Q1 WW%  | 25.08% | 33.23% | 24.77% | 16.92% |
+--------------------------------------------+
|Q2 Units|  0.75M |  1.05M |  0.81M |  0.53M |
|Q2 YoY% |-34.21% |-44.15% |-39.10% |-44.21% |
|Q2 WW%  | 23.89% | 33.44% | 25.80% | 16.88% |
+--------------------------------------------+
|Q3 Units|  0.77M |  1.96M |  2.12M |  0.50M |
|Q3 YoY% |-63.16% |-34.88% | +0.95% |-58.68% |
|Q3 WW%  | 14.42% | 36.70% | 39.70% |  9.36% |
+--------------------------------------------+
|Q4 Units|  0.21M |  1.11M |  0.29M |  0.15M |
|Q4 YoY% |-72.37% |-24.49% |-61.84% |-73.21% |
|Q4 WW%  | 11.86% | 62.71% | 16.38% |  8.47% |
+============================================+
| First Half                                 |
+--------------------------------------------+
| Units  |  1.58M |  2.15M |  1.63M |  1.09M |
| YoY%   |-18.13% |-16.99% |-24.54% |-35.12% |
| Global%| 24.50% | 33.33% | 25.27% | 16.90% |
+--------------------------------------------+
| First Three Quarters                       |
+--------------------------------------------+
| Units  |  2.35M |  4.11M |  3.75M |  1.59M |
| YoY%   |-41.54% |-26.61% |-11.97% |-44.98% |
| WW%    | 19.93% | 34.86% | 31.81% | 13.49% |
+--------------------------------------------+
| FY3/22 Cumulative                          |
+--------------------------------------------+
| Units  |  2.56M |  5.22M |  4.04M |  1.74M |
| YoY%   |-46.44% |-26.17% |-19.52% |-49.57% |
| WW%    | 18.88% | 38.50% | 29.79% | 12.83% |
+--------------------------------------------+
| Life-To-Date                               |
+--------------------------------------------+
| Units  | 18.78M | 32.08M | 22.15M | 10.44M |
| WW%    | 22.50% | 38.44% | 26.54% | 12.51% |
+--------------------------------------------+`;

const alteredTableDesign = 
`+--------------------------------------------+
| Switch | Japan  |The     | Europe | Other  |
|        |        |Americas|        |        |
+--------------------------------------------+
| 1st Quarter                                |
+--------------------------------------------+
| Units  |  0.83M |  1.10M |  0.82M |  0.56M |
| YoY%   | +5.06% |+54.93% | -1.20% |-23.29% |
| WW%    | 25.08% | 33.23% | 24.77% | 16.92% |
+--------------------------------------------+
| 2nd Quarter                                |
+--------------------------------------------+
| Units  |  0.75M |  1.05M |  0.81M |  0.53M |
| YoY%   |-34.21% |-44.15% |-39.10% |-44.21% |
| WW%    | 23.89% | 33.44% | 25.80% | 16.88% |
+--------------------------------------------+
| 3rd Quarter                                |
+--------------------------------------------+
| Units  |  0.77M |  1.96M |  2.12M |  0.50M |
| YoY%   |-63.16% |-34.88% | +0.95% |-58.68% |
| WW%    | 14.42% | 36.70% | 39.70% |  9.36% |
+--------------------------------------------+
| 4th Quarter                                |
+--------------------------------------------+
| Units  |  0.21M |  1.11M |  0.29M |  0.15M |
| YoY%   |-72.37% |-24.49% |-61.84% |-73.21% |
| WW%    | 11.86% | 62.71% | 16.38% |  8.47% |
+============================================+
| First Half                                 |
+--------------------------------------------+
| Units  |  1.58M |  2.15M |  1.63M |  1.09M |
| YoY%   |-18.13% |-16.99% |-24.54% |-35.12% |
| WW%    | 24.50% | 33.33% | 25.27% | 16.90% |
+--------------------------------------------+
| First Three Quarters                       |
+--------------------------------------------+
| Units  |  2.35M |  4.11M |  3.75M |  1.59M |
| YoY%   |-41.54% |-26.61% |-11.97% |-44.98% |
| WW%    | 19.93% | 34.86% | 31.81% | 13.49% |
+--------------------------------------------+
| FY3/22 Cumulative                          |
+--------------------------------------------+
| Units  |  2.56M |  5.22M |  4.04M |  1.74M |
| YoY%   |-46.44% |-26.17% |-19.52% |-49.57% |
| WW%    | 18.88% | 38.50% | 29.79% | 12.83% |
+--------------------------------------------+
| Life-To-Date                               |
+--------------------------------------------+
| Units  | 18.78M | 32.08M | 22.15M | 10.44M |
| WW%    | 22.50% | 38.44% | 26.54% | 12.51% |
+--------------------------------------------+`;

// function quarterlyCalculation(quarters: Section[]) {
        
//     const calc: Section[] = quarters.map((elem, index, array) => {
//         return (index === 0 || quarters[index].period === " Last FY Cumulative ") // 1st Quarter or last FY number
//                 ? elem
//                 : {...elem, value: elem.value - array[index-1].value}
//     })
    
//     return calc
// }

function quarterlyCalculation(quarters: Section[]) {
       
   const calc: Section[] = quarters.map((elem, index, array) => {
    //    return (elem.period !== " 1st Quarter  " && elem.period !== " Last FY Total ")
       return (elem.period !== " 1st Quarter " && elem.period !== " Last FY Cumulative ")
               ? {
                ...elem, 
                valueB: Number((elem.valueB - array[index-1].valueB).toFixed(2)),
                valueC: Number((elem.valueC - array[index-1].valueC).toFixed(2)),
                valueD: Number((elem.valueD - array[index-1].valueD).toFixed(2)),
                valueE: Number((elem.valueE - array[index-1].valueE).toFixed(2)),
                }
               : elem
   })
   
   return calc
}

// function yearOnYearCalculation(thisFY: Section[], lastFY: Section[]) {

//         const calc: Section[] = thisFY.map((elem, index) => {

//             return (lastFY[index].value < 0)
//                     ? {...elem, units: "percentage", value: Number(
//                         ((((elem.value / lastFY[index].value) -1)* -1) * 100).toFixed(2)
//                         )
//                       }
//                     : (lastFY[index].value === 0)
//                     ? {...elem, units: "NaN", value: 0}
//                     :{...elem, units: "percentage", value: Number(
//                         (((elem.value / lastFY[index].value) -1) * 100).toFixed(2)
//                         )
//                       }; // .toFixed(2) to round the number by two decimal points regardless of Number will output a string, whole thing needs to be wrapped in Number to change type back from string to number  
//         })

//        return calc
//     }

function yearOnYearCalculation(thisFY: Section[], lastFY: Section[]) {

        const calc: Section[] = thisFY.map((elem, index) => {
        // global number valueA helps to filter down
            return (lastFY[index].valueA < 0)
                    ? {
                        ...elem, 
                        units: "percentage", 
                        valueB: Number(
                        ((((elem.valueB / lastFY[index].valueB) -1)* -1) * 100).toFixed(2)),
                        valueC: Number(
                        ((((elem.valueC / lastFY[index].valueC) -1)* -1) * 100).toFixed(2)),
                        valueD: Number(
                        ((((elem.valueD / lastFY[index].valueD) -1)* -1) * 100).toFixed(2)),
                        valueE: Number(
                        ((((elem.valueE / lastFY[index].valueE) -1)* -1) * 100).toFixed(2)),
                      }
                    : (lastFY[index].valueA === 0)
                    ? {
                        ...elem, 
                        units: "NaN", 
                    }
                    : (lastFY[index].valueE !== 0)
                    ? {
                        ...elem, 
                        units: "percentage", 
                        valueB: Number(
                        (((elem.valueB / lastFY[index].valueB) -1) * 100).toFixed(2)
                        ),
                        valueC: Number(
                        (((elem.valueC / lastFY[index].valueC) -1) * 100).toFixed(2)
                        ),
                        valueD: Number(
                        (((elem.valueD / lastFY[index].valueD) -1) * 100).toFixed(2)
                        ),
                        valueE: Number(
                        (((elem.valueE / lastFY[index].valueE) -1) * 100).toFixed(2)
                        ),
                      }
                    : {
                        ...elem, 
                        units: "percentage", 
                        valueB: Number(
                        (((elem.valueB / lastFY[index].valueB) -1) * 100).toFixed(2)
                        ),
                        valueC: Number(
                        (((elem.valueC / lastFY[index].valueC) -1) * 100).toFixed(2)
                        ),
                        valueD: Number(
                        (((elem.valueD / lastFY[index].valueD) -1) * 100).toFixed(2)
                        ),
                      }; // .toFixed(2) to round the number by two decimal points regardless of Number will output a string, whole thing needs to be wrapped in Number to change type back from string to number  
        })

       return calc
    }

const printHead = (header: Header) => 
`+${"-".repeat(44)}+
${header.switchHeader}${header.fiscalYear}|
+${"-".repeat(44)}+`;

// have to print... platform... quarters, cumulatives, ltd, units, yoy, ww%
// would need to think of using concat() on the regions so that the issue of parameters is avoided... x.concat(y).concat(z) etc... then I should use the names for doing things...

const printSection = (header: Header, sectionDifference: Section[], sectionDifferenceYoY: Section[], sectionCumulative: Section[], sectionCumulativeYoY: Section[], currentQuarter: number) => {

    const sectionHeader: string = (sectionDifference[3].valueE !== 0) // 4th quarter [3] is where a non-zero number is most likely to occur 
        ? "+" + "-".repeat(44) + "+\n|" + sectionDifference[0].name + "| Japan  |The     | Europe | Other  |\n|        |        |Americas|        |        |\n+" +  "-".repeat(44) + "+"
        : "+" + "-".repeat(44) + "+\n|" + sectionDifference[0].name + "| Japan  |The     | Other  |        |\n|        |        |Americas|        |        |\n+" +  "-".repeat(44) + "+"

    const sectionDifferenceYoYFixed = sectionDifferenceYoY.filter((elem) => {
        return (currentQuarter === 1)
            ? elem.period === " 1st Quarter "
            : (currentQuarter === 2)
            ? elem.period === " 1st Quarter " || elem.period === " 2nd Quarter "
            : (currentQuarter === 3)
            ? elem.period !== " 4th Quarter " 
            : elem
    }) 

    const sectionCumulativeYoYFixed = sectionCumulativeYoY.filter((elem) => elem.period !== " 1st Quarter ").filter((elem) => {

        if (currentQuarter === 2) {
            return elem.cmlPeriod === " First Half  "
        } else if (currentQuarter === 3) {
            return elem.cmlPeriod !== "Cml. "
        } else if (currentQuarter === 4) {
            return elem
        }

        return // see if this works... it should return an empty array on quarter 1...
    })

    const difference = sectionDifference.filter((elem, index, array) => {
        return (currentQuarter === 1 && elem.valueA !== 0)
            ? elem.period === " 1st Quarter "
            : (currentQuarter === 2 && elem.valueA !== 0)
            ? elem.period === " 1st Quarter " || elem.period === " 2nd Quarter "
            : (currentQuarter === 3 && elem.valueA !== 0)
            ? elem.period !== " 4th Quarter "
            : elem
    }).map((elem, index, array) => {

        let printSectionDifferenceWWPerJapan: string = `${((elem.valueB / elem.valueA) * 100).toFixed(2)}% `;

        let printSectionDifferenceWWPerAmericas: string = `${((elem.valueC / elem.valueA) * 100).toFixed(2)}% `;

        let printSectionDifferenceWWPerEurope: string = `${((elem.valueD / elem.valueA) * 100).toFixed(2)}% `;

        let printSectionDifferenceWWPerOther: string = `${((elem.valueE / elem.valueA) * 100).toFixed(2)}% `;

        let [printSectionDifferenceWWPerJapanFixed, printSectionDifferenceWWPerAmericasFixed, printSectionDifferenceWWPerEuropeFixed, printSectionDifferenceWWPerOtherFixed]: string[] = [printSectionDifferenceWWPerJapan, printSectionDifferenceWWPerAmericas, printSectionDifferenceWWPerEurope, printSectionDifferenceWWPerOther].map((value) => {
            return (value.length >= 8)
                ? value 
                : " ".repeat(8 - value.length) + value;
        })

        let printSectionDifferenceYoYJapan: string = (sectionDifferenceYoYFixed[index].units === "NaN")
            ? "NaN"
            : (sectionDifferenceYoYFixed[index].valueB > 0)
            ? `+${sectionDifferenceYoYFixed[index].valueB}% `
            : `${sectionDifferenceYoYFixed[index].valueB}% `

        let printSectionDifferenceYoYAmericas: string = (sectionDifferenceYoYFixed[index].units === "NaN")
            ? "NaN"
            : (sectionDifferenceYoYFixed[index].valueC > 0)
            ? `+${sectionDifferenceYoYFixed[index].valueC}% `
            : `${sectionDifferenceYoYFixed[index].valueC}% `

        let printSectionDifferenceYoYEurope: string = (sectionDifferenceYoYFixed[index].units === "NaN")
            ? "NaN"
            : (sectionDifferenceYoYFixed[index].valueD > 0)
            ? `+${sectionDifferenceYoYFixed[index].valueD}% `
            : `${sectionDifferenceYoYFixed[index].valueD}% `

        let printSectionDifferenceYoYOther: string = (sectionDifferenceYoYFixed[index].units === "NaN")
            ? "NaN"
            : (sectionDifferenceYoYFixed[index].valueE > 0)
            ? `+${sectionDifferenceYoYFixed[index].valueE}% `
            : `${sectionDifferenceYoYFixed[index].valueE}% `
        
        let [printSectionDifferenceYoYJapanFixed, printSectionDifferenceYoYAmericasFixed, printSectionDifferenceYoYEuropeFixed, printSectionDifferenceYoYOtherFixed]: string[] = [printSectionDifferenceYoYJapan, printSectionDifferenceYoYAmericas, printSectionDifferenceYoYEurope, printSectionDifferenceYoYOther].map((value) => {
            return (value === "NaN")
                ? value
                : (value.length >= 8)
                ? value
                : " ".repeat(8 - value.length) + value
        })
        
        let printSectionJapan: string = `${(elem.valueB / 100).toFixed(2)}M `;

        let printSectionAmericas: string = `${(elem.valueC / 100).toFixed(2)}M `;

        let printSectionEurope: string = `${(elem.valueD / 100).toFixed(2)}M `;

        let printSectionOther: string = `${(elem.valueE / 100).toFixed(2)}M `;

        let [printSectionJapanFixed, printSectionAmericasFixed, printSectionEuropeFixed, printSectionOtherFixed]: string[] = [printSectionJapan, printSectionAmericas, printSectionEurope, printSectionOther].map((value) => {
            return (value.length >= 8)
                ? value 
                : " ".repeat(8 - value.length) + value;
        })

        let printLineCheck = sectionDifferenceYoYFixed.filter((secondElem, secondIndex) => secondIndex === index + 1 && secondElem.units !== "NaN"); // checks the next element for whether it is NaN so that printLineLength does a closing line correctly

        // let printLineLength: number = 
        //     // (printSectionDifferenceYoY === "NaN")
        // (printLineCheck.length === 0 && printSectionDifferenceYoY === "NaN")
        //     ? 23
        //     : 33    

        let printLine: string = (array[index] === array.at(-1))
            ? "\n+" + "=".repeat(44) + "+"
            : "\n+" + "-".repeat(44) + "+"

        let printPeriod: string = "+" + "-".repeat(44) + "+\n|" + elem.period + " ".repeat(44 - elem.period.length) + "|\n+" + "-".repeat(44) + "+\n"  

        return (printSectionDifferenceYoYJapanFixed === "NaN" && elem.valueE !== 0)
                ? printPeriod + header.units + printSectionJapanFixed + "|" + printSectionAmericasFixed + "|" + printSectionEuropeFixed + "|" + printSectionOtherFixed + "|\n" + header.globalPercentage +  printSectionDifferenceWWPerJapanFixed + "|" + printSectionDifferenceWWPerAmericasFixed + "|" + printSectionDifferenceWWPerEuropeFixed + "|" + printSectionDifferenceWWPerOtherFixed + "|" 
                : (printSectionDifferenceYoYJapanFixed === "NaN" && elem.valueE === 0)
                ? header.units + printSectionJapanFixed + "|" + printSectionAmericasFixed + "|" + printSectionEuropeFixed + "|\n" + header.globalPercentage +  printSectionDifferenceWWPerJapanFixed + "|" + printSectionDifferenceWWPerAmericasFixed + "|" + printSectionDifferenceWWPerEuropeFixed + "|" 
                : (elem.valueE !== 0)
                ? printPeriod + header.units + printSectionJapanFixed + "|" + printSectionAmericasFixed + "|" + printSectionEuropeFixed + "|" + printSectionOtherFixed + "|\n" + header.yearOnYear + printSectionDifferenceYoYJapanFixed + "|" + printSectionDifferenceYoYAmericasFixed + "|" + printSectionDifferenceYoYEuropeFixed + "|" + printSectionDifferenceYoYOtherFixed + "|\n" + header.globalPercentage +  printSectionDifferenceWWPerJapanFixed + "|" + printSectionDifferenceWWPerAmericasFixed + "|" + printSectionDifferenceWWPerEuropeFixed + "|" + printSectionDifferenceWWPerOtherFixed + "|" + printLine
                : printPeriod + header.units + printSectionJapanFixed + "|" + printSectionAmericasFixed + "|" + printSectionEuropeFixed + "|\n" + header.yearOnYear + printSectionDifferenceYoYJapanFixed + "|" + printSectionDifferenceYoYAmericasFixed + "|" + printSectionDifferenceYoYEuropeFixed + "|\n" + header.globalPercentage +  printSectionDifferenceWWPerJapanFixed + "|" + printSectionDifferenceWWPerAmericasFixed + "|" + printSectionDifferenceWWPerEuropeFixed + "|" + printLine
            
    })

    const cumulative = (currentQuarter >= 2)
        ? sectionCumulative.filter((elem, index, array) => {
            // Below: filtering out first quarter and last fy cml or else undefined type errors from arrays below not being equal lengths
            return (currentQuarter === 2 && elem.valueA !== 0 && elem.period !== " Last FY Cumulative ")
            ? elem.cmlPeriod === " First Half  "
            : (currentQuarter === 3 && elem.valueA !== 0 && elem.period !== " Last FY Cumulative ")
            ? elem.cmlPeriod === " First Half  " || elem.cmlPeriod === " First Three Quarters " 
            : (currentQuarter === 4 && elem.valueA !== 0 && elem.period !== " Last FY Cumulative ")
            ? elem.cmlPeriod !== " 1st Quarter "
            : !elem // should return empty arrays...
        
        }).map((elem, index, array) => {
            
            let printSectionCumulativeWWPerJapan: string = `${((elem.valueB / elem.valueA) * 100).toFixed(2)}% `;

            let printSectionCumulativeWWPerAmericas: string = `${((elem.valueC / elem.valueA) * 100).toFixed(2)}% `;

            let printSectionCumulativeWWPerEurope: string = `${((elem.valueD / elem.valueA) * 100).toFixed(2)}% `;

            let printSectionCumulativeWWPerOther: string = `${((elem.valueE / elem.valueA) * 100).toFixed(2)}% `;

            let [printSectionCumulativeWWPerJapanFixed, printSectionCumulativeWWPerAmericasFixed, printSectionCumulativeWWPerEuropeFixed, printSectionCumulativeWWPerOtherFixed]: string[] = [printSectionCumulativeWWPerJapan, printSectionCumulativeWWPerAmericas, printSectionCumulativeWWPerEurope, printSectionCumulativeWWPerOther].map((value) => {
                return (value.length >= 8)
                    ? value 
                    : " ".repeat(8 - value.length) + value;
            })


            let printSectionCumulativeYoYJapan: string = (sectionCumulativeYoYFixed[index].units === "NaN")
                ? "NaN"
                : (sectionCumulativeYoYFixed[index].valueB > 0)
                ? `+${sectionCumulativeYoYFixed[index].valueB}% `
                : `${sectionCumulativeYoYFixed[index].valueB}% `;

            let printSectionCumulativeYoYAmericas: string = (sectionCumulativeYoYFixed[index].units === "NaN")
                ? "NaN"
                : (sectionCumulativeYoYFixed[index].valueC > 0)
                ? `+${sectionCumulativeYoYFixed[index].valueC}% `
                : `${sectionCumulativeYoYFixed[index].valueC}% `;

            let printSectionCumulativeYoYEurope: string = (sectionCumulativeYoYFixed[index].units === "NaN")
                ? "NaN"
                : (sectionCumulativeYoYFixed[index].valueD > 0)
                ? `+${sectionCumulativeYoYFixed[index].valueD}% `
                : `${sectionCumulativeYoYFixed[index].valueD}% `;

            let printSectionCumulativeYoYOther: string = (sectionCumulativeYoYFixed[index].units === "NaN")
                ? "NaN"
                : (sectionCumulativeYoYFixed[index].valueE > 0)
                ? `+${sectionCumulativeYoYFixed[index].valueE}% `
                : `${sectionCumulativeYoYFixed[index].valueE}% `;

            let [printSectionCumulativeYoYJapanFixed, printSectionCumulativeYoYAmericasFixed, printSectionCumulativeYoYEuropeFixed, printSectionCumulativeYoYOtherFixed]: string[] = [printSectionCumulativeYoYJapan, printSectionCumulativeYoYAmericas, printSectionCumulativeYoYEurope, printSectionCumulativeYoYOther].map((value) => {
                return (value === "NaN")
                    ? value
                    : (value.length >= 8)
                    ? value
                    : " ".repeat(8 - value.length) + value
            })

            let printCumulativeJapan: string = `${(elem.valueB / 100).toFixed(2)}M `;

            let printCumulativeAmericas: string = `${(elem.valueC / 100).toFixed(2)}M `;

            let printCumulativeEurope: string = `${(elem.valueD / 100).toFixed(2)}M `;

            let printCumulativeOther: string = `${(elem.valueE / 100).toFixed(2)}M `;

            let [printCumulativeJapanFixed, printCumulativeAmericasFixed, printCumulativeEuropeFixed, printCumulativeOtherFixed]: string[] = [printCumulativeJapan, printCumulativeAmericas, printCumulativeEurope, printCumulativeOther].map((value) => {
            return (value.length >= 8)
                ? value 
                : " ".repeat(8 - value.length) + value;
        })

            let printLineCheck = sectionCumulativeYoYFixed.filter((secondElem, secondIndex) => secondIndex === index + 1 && secondElem.units !== "NaN");

            // let printLineLength: number = 
            // (printLineCheck.length === 0 && printSectionCumulativeYoY === "NaN")
            //     ? 23
            //     : 33    

            let printLine: string = "\n+" + "-".repeat(44) + "+"

            // return (printSectionCumulativeYoYFixed === "NaN")
            //     ?  "|" + elem.cmlPeriod + "|" + printCumulativeFixed + "|" + printLine
            //     : "|" + elem.cmlPeriod + "|" + printCumulativeFixed + "|" + printSectionCumulativeYoYFixed + "|" + printLine

            let printPeriod: string = (elem.cmlPeriod !== "Cml. ")
                ? "+" + "-".repeat(44) + "+\n|" + elem.cmlPeriod + " ".repeat(44 - elem.cmlPeriod.length) + "|\n+" + "-".repeat(44) + "+\n"  
                : "+" + "-".repeat(44) + "+\n|" + header.fiscalYearCml + " ".repeat(44 - header.fiscalYearCml.length) + "|\n+" + "-".repeat(44) + "+\n";

            return (printSectionCumulativeYoYJapanFixed === "NaN" && elem.valueE !== 0)
                    ? printPeriod + header.units + printCumulativeJapanFixed + "|" + printCumulativeAmericasFixed + "|" + printCumulativeEuropeFixed + "|" + printCumulativeOtherFixed + "|\n" + header.globalPercentage +  printSectionCumulativeWWPerJapanFixed + "|" + printSectionCumulativeWWPerAmericasFixed + "|" + printSectionCumulativeWWPerEuropeFixed + "|" + printSectionCumulativeWWPerOtherFixed + "|" 
                    : (printSectionCumulativeYoYJapanFixed === "NaN" && elem.valueE === 0)
                    ? printPeriod + header.units + printCumulativeJapanFixed + "|" + printCumulativeAmericasFixed + "|" + printCumulativeEuropeFixed + "|\n" + header.globalPercentage +  printSectionCumulativeWWPerJapanFixed + "|" + printSectionCumulativeWWPerAmericasFixed + "|" + printSectionCumulativeWWPerEuropeFixed + "|"
                    : (elem.valueE !== 0)
                    ? printPeriod + header.units + printCumulativeJapanFixed + "|" + printCumulativeAmericasFixed + "|" + printCumulativeEuropeFixed + "|" + printCumulativeOtherFixed + "|\n" + header.yearOnYear + printSectionCumulativeYoYJapanFixed + "|" + printSectionCumulativeYoYAmericasFixed + "|" + printSectionCumulativeYoYEuropeFixed + "|" + printSectionCumulativeYoYOtherFixed + "|\n" + header.globalPercentage +  printSectionCumulativeWWPerJapanFixed + "|" + printSectionCumulativeWWPerAmericasFixed + "|" + printSectionCumulativeWWPerEuropeFixed + "|" + printSectionCumulativeWWPerOtherFixed + "|" + printLine
                    : printPeriod + header.units + printCumulativeJapanFixed + "|" + printCumulativeAmericasFixed + "|" + printCumulativeEuropeFixed + "|\n" + header.yearOnYear + printSectionCumulativeYoYJapanFixed + "|" + printSectionCumulativeYoYAmericasFixed + "|" + printSectionCumulativeYoYEuropeFixed + "|\n" + header.globalPercentage +  printSectionCumulativeWWPerJapanFixed + "|" + printSectionCumulativeWWPerAmericasFixed + "|" + printSectionCumulativeWWPerEuropeFixed + "|" + printLine
            })
            : [];

        let printSectionLTDWWPerJapan: string = (currentQuarter === 1) 
                ? `${(((sectionDifference[currentQuarter-1].valueB + sectionCumulative[sectionCumulative.length-1].valueB)) / ((sectionDifference[currentQuarter-1].valueA + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `
                : `${(((sectionCumulative[currentQuarter-2].valueB + sectionCumulative[sectionCumulative.length-1].valueB)) / ((sectionDifference[currentQuarter-1].valueA + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `

        let printSectionLTDWWPerAmericas: string = (currentQuarter === 1) 
                ? `${(((sectionDifference[currentQuarter-1].valueC + sectionCumulative[sectionCumulative.length-1].valueC)) / ((sectionDifference[currentQuarter-1].valueA + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `
                : `${(((sectionCumulative[currentQuarter-2].valueC + sectionCumulative[sectionCumulative.length-1].valueC)) / ((sectionDifference[currentQuarter-1].valueA + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `;

        let printSectionLTDWWPerEurope: string = (currentQuarter === 1) 
                ? `${(((sectionDifference[currentQuarter-1].valueD + sectionCumulative[sectionCumulative.length-1].valueD)) / ((sectionDifference[currentQuarter-1].valueA + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `
                : `${(((sectionCumulative[currentQuarter-2].valueD + sectionCumulative[sectionCumulative.length-1].valueD)) / ((sectionDifference[currentQuarter-1].valueA + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `;

        let printSectionLTDWWPerOther: string = (currentQuarter === 1) 
                ? `${(((sectionDifference[currentQuarter-1].valueE + sectionCumulative[sectionCumulative.length-1].valueE)) / ((sectionDifference[currentQuarter-1].valueA + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `
                : `${(((sectionCumulative[currentQuarter-2].valueE + sectionCumulative[sectionCumulative.length-1].valueE)) / ((sectionDifference[currentQuarter-1].valueA + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `;

        let [printSectionLTDWWPerJapanFixed, printSectionLTDWWPerAmericasFixed, printSectionLTDWWPerEuropeFixed, printSectionLTDWWPerOtherFixed]: string[] = [printSectionLTDWWPerJapan, printSectionLTDWWPerAmericas, printSectionLTDWWPerEurope, printSectionLTDWWPerOther].map((value) => {                
            return (value.length >= 8)
                    ? value 
                    : " ".repeat(8 - value.length) + value;
        })


    const ltdJapan: string = (currentQuarter === 1) 
                ? `${((sectionDifference[currentQuarter-1].valueB + sectionCumulative[sectionCumulative.length-1].valueB) / 100 ).toFixed(2)}M `
                : `${((sectionCumulative[currentQuarter-2].valueB + sectionCumulative[sectionCumulative.length-1].valueB) / 100 ).toFixed(2)}M `;

    const ltdAmericas: string = (currentQuarter === 1) 
                ? `${((sectionDifference[currentQuarter-1].valueC + sectionCumulative[sectionCumulative.length-1].valueC) / 100 ).toFixed(2)}M `
                : `${((sectionCumulative[currentQuarter-2].valueC + sectionCumulative[sectionCumulative.length-1].valueC) / 100 ).toFixed(2)}M `;

    const ltdEurope: string = (currentQuarter === 1) 
                ? `${((sectionDifference[currentQuarter-1].valueD + sectionCumulative[sectionCumulative.length-1].valueD) / 100 ).toFixed(2)}M `
                : `${((sectionCumulative[currentQuarter-2].valueD + sectionCumulative[sectionCumulative.length-1].valueD) / 100 ).toFixed(2)}M `;

    const ltdOther: string = (currentQuarter === 1) 
                ? `${((sectionDifference[currentQuarter-1].valueE + sectionCumulative[sectionCumulative.length-1].valueE) / 100 ).toFixed(2)}M `
                : `${((sectionCumulative[currentQuarter-2].valueE + sectionCumulative[sectionCumulative.length-1].valueE) / 100 ).toFixed(2)}M `;

    let [ltdJapanFixed, ltdAmericasFixed, ltdEuropeFixed, ltdOtherFixed]: string[] = [ltdJapan, ltdAmericas, ltdEurope, ltdOther].map((value) => {
            return (value.length >= 8)
                ? value 
                : " ".repeat(8 - value.length) + value;
            })

    let printLtdHeader: string = "+" + "-".repeat(44) + "+\n|" + header.ltd + " ".repeat(44 - header.ltd.length) + "|\n+" + "-".repeat(44) + "+\n"  
        
    // const ltdPrint: string = "| Life-To-Date|" + ltdFixed + "|\n+" + "-".repeat(23) + "+";
    const ltdPrint: string = (sectionDifference[currentQuarter-1].valueE !== 0)
            ? printLtdHeader + header.units + ltdJapanFixed + "|" + ltdAmericasFixed + "|" + ltdEuropeFixed + "|" + ltdOtherFixed + "|\n" + header.globalPercentage +  printSectionLTDWWPerJapanFixed + "|" + printSectionLTDWWPerAmericasFixed + "|" + printSectionLTDWWPerEuropeFixed + "|" + printSectionLTDWWPerOtherFixed + "|\n+" + "-".repeat(44) + "+"
            : printLtdHeader + header.units + ltdJapanFixed + "|" + ltdAmericasFixed + "|" + ltdEuropeFixed + "|\n" + header.globalPercentage +  printSectionLTDWWPerJapanFixed + "|" + printSectionLTDWWPerAmericasFixed + "|" + printSectionLTDWWPerEuropeFixed + "|" + printSectionLTDWWPerOtherFixed + "|\n+" + "-".repeat(36) + "+";
        
    const penultimateCheck = [sectionHeader, ...difference, ...cumulative, ltdPrint].filter((elem) => elem.length !== 0).reduce((prev, next) => prev + "\n" + next)

        return penultimateCheck;



}

test("printing section of Q4...", () => {

    const currentQuarter = 4;

    const quarterlyCollection = [
        nintendoSwitchOGRegions,
        nintendoSwitchOGRegionsLastFY,
    ] as const;

    const filteredCollection = [
        nintendoSwitchOGRegions,
    ] as const;

    const [
        quarterSwitchOGRegions,
        quarterSwitchOGRegionsLastFY,
    ] = quarterlyCollection.map((elem, index) => {

        return (index % 2 === 0)
                ? quarterlyCalculation(elem).filter((elem, index, array) => index !== array.length-1) // filter out last fy cumulative
                : quarterlyCalculation(elem) // last FY numbers...
    })

    const [
        nintendoSwitchOGRegionsFiltered,
    ] = filteredCollection.map((elem) => {
        return elem.filter((secondElem, index, array) => {
            return index !== array.length-1
        })
    })

    const yearOnYearCollection = [
        quarterSwitchOGRegions,
        quarterSwitchOGRegionsLastFY,
        nintendoSwitchOGRegionsFiltered,
        nintendoSwitchOGRegionsLastFY,
    ] as const;

    const [
        quarterSwitchOGRegionsYoy,
        cumulativeSwitchOGRegionsYoy,
    ] = yearOnYearCollection.map((elem, index, array) => {
    return (index % 2 === 0)
            ? yearOnYearCalculation(array[index], array[index+1])
            : [];
    }).filter((elem) => elem.length !== 0) // filter out zero length arrays... 
    
    const [
        nintendoSwitchOGRegionsCml,
    ] = [
        nintendoSwitchOGRegions,
    ].map((elem) => {
        return elem.filter((secondElem, index, array) => {
            return index !== 0 // filter out first quarters
        })
    })

    // console.log(quarterSwitchOGRegions);
    // console.log(quarterSwitchOGRegionsYoy);
    // console.log(nintendoSwitchOGRegionsCml);
    // console.log(cumulativeSwitchOGRegionsYoy);

    // console.log(printSection(header, quarterSwitchOGRegions, quarterSwitchOGRegionsYoy, nintendoSwitchOGRegionsCml, cumulativeSwitchOGRegionsYoy, currentQuarter));

    const printOne = printSection(header, quarterSwitchOGRegions, quarterSwitchOGRegionsYoy, nintendoSwitchOGRegionsCml, cumulativeSwitchOGRegionsYoy, currentQuarter)

    expect(printOne).toMatch(alteredTableDesign)
   
//| Japan  |The     | Europe | Other  |
})