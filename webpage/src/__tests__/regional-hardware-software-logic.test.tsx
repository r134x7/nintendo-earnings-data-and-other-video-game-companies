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
    regionD: "Europe",
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
}

const header: Header = {
    switchHeader: "| Nintendo Switch Regional Data |",
    fiscalYear: " FY3/2022 ",
    fiscalYearCml: " FY3/22 Cumulative ",
    globalPercentage: "| Global%|",
    units: "| Units  |",
    yearOnYear: "| YoY%   |",
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
        valueA: 0, // not used
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
        valueA: 0, // not used
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
        valueA: 0, // not used
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
        valueA: 0, // not used
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

function yearOnYearCalculation(thisFY: SectionRegions[], lastFY: SectionRegions[]) {

        const calc: SectionRegions[] = thisFY.map((elem, index) => {
        // this doesn't work if one value is a different sign or is not zero... 
            return (lastFY[index].valueA < 0)
                    ? {
                        ...elem, 
                        units: "percentage", 
                        valueA: Number(
                        ((((elem.valueA / lastFY[index].valueA) -1)* -1) * 100).toFixed(2)),
                        valueB: Number(
                        ((((elem.valueB / lastFY[index].valueB) -1)* -1) * 100).toFixed(2)),
                        valueC: Number(
                        ((((elem.valueC / lastFY[index].valueC) -1)* -1) * 100).toFixed(2)),
                        valueD: Number(
                        ((((elem.valueD / lastFY[index].valueD) -1)* -1) * 100).toFixed(2)),
                      }
                    : (lastFY[index].valueA === 0)
                    ? {
                        ...elem, 
                        units: "NaN", 
                    }
                    : (lastFY[index].valueD !== 0)
                    ? {
                        ...elem, 
                        units: "percentage", 
                        valueA: Number(
                        (((elem.valueA / lastFY[index].valueA) -1) * 100).toFixed(2)
                        ),
                        valueB: Number(
                        (((elem.valueB / lastFY[index].valueB) -1) * 100).toFixed(2)
                        ),
                        valueC: Number(
                        (((elem.valueC / lastFY[index].valueC) -1) * 100).toFixed(2)
                        ),
                        valueD: Number(
                        (((elem.valueD / lastFY[index].valueD) -1) * 100).toFixed(2)
                        ),
                      }
                    : {
                        ...elem, 
                        units: "percentage", 
                        valueA: Number(
                        (((elem.valueA / lastFY[index].valueA) -1) * 100).toFixed(2)
                        ),
                        valueB: Number(
                        (((elem.valueB / lastFY[index].valueB) -1) * 100).toFixed(2)
                        ),
                        valueC: Number(
                        (((elem.valueC / lastFY[index].valueC) -1) * 100).toFixed(2)
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

const printSection = (header: Header, sectionDifference: Section[], sectionDifferenceYoY: Section[], sectionCumulative: Section[], sectionCumulativeYoY: Section[], sectionGlobal: Section[], currentQuarter: number) => {

    const sectionHeader: string = "+" + "-".repeat(44) + "+\n|" + sectionDifference[0].name + "| Japan  |The     | Europe | Other  |\n|        |        |Americas|        |        |\n+" +  "-".repeat(44) + "+"

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

    console.log(sectionCumulativeYoYFixed);
    

    const difference = sectionDifference.filter((elem, index, array) => {
        return (currentQuarter === 1 && elem.value !== 0)
            ? elem.period === " 1st Quarter "
            : (currentQuarter === 2 && elem.value !== 0)
            ? elem.period === " 1st Quarter " || elem.period === " 2nd Quarter "
            : (currentQuarter === 3 && elem.value !== 0)
            ? elem.period !== " 4th Quarter "
            : elem
    }).map((elem, index, array) => {


        let printSectionDifferenceYoY: string = (sectionDifferenceYoYFixed[index].units === "NaN")
            ? "NaN"
            : (sectionDifferenceYoYFixed[index].value > 0)
            ? `+${sectionDifferenceYoYFixed[index].value}% `
            : `${sectionDifferenceYoYFixed[index].value}% `

        
        let printSectionDifferenceYoYFixed: string = (printSectionDifferenceYoY === "NaN")
            ? printSectionDifferenceYoY
            : (printSectionDifferenceYoY.length >= 9)
            ? printSectionDifferenceYoY
            : " ".repeat(9 - printSectionDifferenceYoY.length) + printSectionDifferenceYoY

        let printSection: string = `${(elem.value / 100).toFixed(2)}M `;

        let printSectionFixed: string = (printSection.length >= 9)
            ? printSection
            : " ".repeat(9 - printSection.length) + printSection;
 
        let printLineCheck = sectionDifferenceYoYFixed.filter((secondElem, secondIndex) => secondIndex === index + 1 && secondElem.units !== "NaN"); // checks the next element for whether it is NaN so that printLineLength does a closing line correctly

        let printLineLength: number = 
            // (printSectionDifferenceYoY === "NaN")
        (printLineCheck.length === 0 && printSectionDifferenceYoY === "NaN")
            ? 23
            : 33    

        let printLine: string = (array[index] === array.at(-1))
            ? "\n+" + "=".repeat(printLineLength) + "+"
            : "\n+" + "-".repeat(printLineLength) + "+"

        return (printSectionDifferenceYoYFixed === "NaN")
                ? "|" + elem.period + "|" + printSectionFixed + "|" + printLine
                : "|" + elem.period + "|" + printSectionFixed + "|" + printSectionDifferenceYoYFixed + "|" + printLine
            
    })

    const cumulative = (currentQuarter >= 2)
        ? sectionCumulative.filter((elem, index, array) => {
            // Below: filtering out first quarter and last fy cml or else undefined type errors from arrays below not being equal lengths
            return (currentQuarter === 2 && elem.value !== 0 && elem.period !== " Last FY Cumulative ")
            ? elem.cmlPeriod === " First Half  "
            : (currentQuarter === 3 && elem.value !== 0 && elem.period !== " Last FY Cumulative ")
            ? elem.cmlPeriod === " First Half  " || elem.cmlPeriod === " First Three Quarters " 
            : (currentQuarter === 4 && elem.value !== 0 && elem.period !== " Last FY Cumulative ")
            ? elem.cmlPeriod !== " 1st Quarter "
            : !elem // should return empty arrays...
        
        }).map((elem, index, array) => {
            // console.log(array.length);
            // console.log(sectionCumulativeYoYFixed.length);
            // console.log(array.length === sectionCumulativeYoYFixed.length);
            // console.log(array);
            console.log(elem, index);
            
            
            
            
                
            let printSectionCumulativeYoY: string = (sectionCumulativeYoYFixed[index].units === "NaN")
                ? "NaN"
                : (sectionCumulativeYoYFixed[index].value > 0)
                ? `+${sectionCumulativeYoYFixed[index].value}% `
                : `${sectionCumulativeYoYFixed[index].value}% `;

            let printSectionCumulativeYoYFixed: string = (printSectionCumulativeYoY === "NaN")
                ? printSectionCumulativeYoY
                : (printSectionCumulativeYoY.length >= 9)
                ? printSectionCumulativeYoY
                : " ".repeat(9 - printSectionCumulativeYoY.length) + printSectionCumulativeYoY;

            let printCumulative: string = `${(elem.value / 100).toFixed(2)}M `;

            let printCumulativeFixed: string = (printCumulative.length >= 9)
                ? printCumulative
                : " ".repeat(9 - printCumulative.length) + printCumulative;

            let printLineCheck = sectionCumulativeYoYFixed.filter((secondElem, secondIndex) => secondIndex === index + 1 && secondElem.units !== "NaN");

            let printLineLength: number = 
            (printLineCheck.length === 0 && printSectionCumulativeYoY === "NaN")
                ? 23
                : 33    

            let printLine: string = "\n+" + "-".repeat(printLineLength) + "+"

            return (printSectionCumulativeYoYFixed === "NaN")
                ?  "|" + elem.cmlPeriod + "|" + printCumulativeFixed + "|" + printLine
                : "|" + elem.cmlPeriod + "|" + printCumulativeFixed + "|" + printSectionCumulativeYoYFixed + "|" + printLine
            })
            : [];

    const ltd: string = (currentQuarter === 1) 
                ? `${((sectionDifference[currentQuarter-1].value + sectionCumulative[sectionCumulative.length-1].value) / 100 ).toFixed(2)}M `
                : `${((sectionCumulative[currentQuarter-2].value + sectionCumulative[sectionCumulative.length-1].value) / 100 ).toFixed(2)}M `;

    const ltdFixed: string = (ltd.length >= 9)
                ? ltd
                : " ".repeat(9 - ltd.length) + ltd;
        
    const ltdPrint: string = "| Life-To-Date|" + ltdFixed + "|\n+" + "-".repeat(23) + "+";
        
    const penultimateCheck = [sectionHeader, ...difference, ...cumulative, ltdPrint].filter((elem) => elem.length !== 0).reduce((prev, next) => prev + "\n" + next)

        return penultimateCheck;



}

test("printing section of Q4...", () => {

    const currentQuarter = 4;

    const quarterlyCollection = [
        nintendoSwitchOGJapan,
        nintendoSwitchOGJapanLastFY,
        nintendoSwitchOGAmericas,
        nintendoSwitchOGAmericasLastFY,
        nintendoSwitchOGEurope,
        nintendoSwitchOGEuropeLastFY,
        nintendoSwitchOGOther,
        nintendoSwitchOGOtherLastFY
    ] as const;

    const filteredCollection = [
        nintendoSwitchOGJapan,
        nintendoSwitchOGAmericas,
        nintendoSwitchOGEurope,
        nintendoSwitchOGOther,
    ] as const;

    const [
        quarterSwitchOGJapan,
        quarterSwitchOGJapanLastFY,
        quarterSwitchOGAmericas,
        quarterSwitchOGAmericasLastFY,
        quarterSwitchEurope,
        quarterSwitchEuropeLastFY,
        quarterSwitchOGOther,
        quarterSwitchOGOtherLastFY,
    ] = quarterlyCollection.map((elem, index) => {


        return (index % 2 === 0)
                ? quarterlyCalculation(elem).filter((elem, index, array) => index !== array.length-1) // filter out last fy cumulative
                : quarterlyCalculation(elem) // last FY numbers...
    })

    const [
        nintendoSwitchOGJapanFiltered,
        nintendoSwitchOGAmericasFiltered,
        nintendoSwitchOGEuropeFiltered,
        nintendoSwitchOGOtherFiltered,
    ] = filteredCollection.map((elem) => {
        return elem.filter((secondElem, index, array) => {
            return index !== array.length-1
        })
    })

    const yearOnYearCollection = [
        quarterSwitchOGJapan,
        quarterSwitchOGJapanLastFY,
        quarterSwitchOGAmericas,
        quarterSwitchOGAmericasLastFY,
        quarterSwitchEurope,
        quarterSwitchEuropeLastFY,
        quarterSwitchOGOther,
        quarterSwitchOGOtherLastFY,
        nintendoSwitchOGJapanFiltered,
        nintendoSwitchOGJapanLastFY,
        nintendoSwitchOGAmericasFiltered,
        nintendoSwitchOGAmericasLastFY,
        nintendoSwitchOGEuropeFiltered,
        nintendoSwitchOGEuropeLastFY,
        nintendoSwitchOGOtherFiltered,
        nintendoSwitchOGOtherLastFY
    ] as const;

    const [
        quarterSwitchOGJapanYoy,
        quarterSwitchOGAmericasYoy,
        quarterSwitchEuropeYoy,
        quarterSwitchOGOtherYoy,
        cumulativeSwitchOGJapanYoy,
        cumulativeSwitchOGAmericasYoy,
        cumulativeSwitchOGEuropeYoy,
        cumulativeSwitchOGOtherYoy,
    ] = yearOnYearCollection.map((elem, index, array) => {
    return (index % 2 === 0)
            ? yearOnYearCalculation(array[index], array[index+1])
            : [];
    }).filter((elem) => elem.length !== 0) // filter out zero length arrays

    const [
        nintendoSwitchOGJapanCml,
        nintendoSwitchOGAmericasCml,
        nintendoSwitchOGEuropeCml,
        nintendoSwitchOGOtherCml,
    ] = [
        nintendoSwitchOGJapan,
        nintendoSwitchOGAmericas,
        nintendoSwitchOGEurope,
        nintendoSwitchOGOther,
    ].map((elem) => {
        return elem.filter((secondElem, index, array) => {
            return index !== 0 // filter out first quarters
        })
    })

    console.log(printSection(header, 
        [
            ...quarterSwitchOGJapan, 
            ...quarterSwitchOGAmericas, 
            ...quarterSwitchEurope, 
            ...quarterSwitchOGOther
        ], 
        [
            ...quarterSwitchOGJapanYoy, 
            ...quarterSwitchOGAmericasYoy, 
            ...quarterSwitchEuropeYoy, 
            ...quarterSwitchOGOtherYoy
        ], 
        [
            ...nintendoSwitchOGJapanCml, 
            ...nintendoSwitchOGAmericasCml, 
            ...nintendoSwitchOGEuropeCml, 
            ...nintendoSwitchOGOtherCml
        ], 
        [
            ...cumulativeSwitchOGJapanYoy, 
            ...cumulativeSwitchOGAmericasYoy, 
            ...cumulativeSwitchOGEuropeYoy, 
            ...cumulativeSwitchOGOtherYoy
        ], 
        nintendoSwitchOGWW, currentQuarter));
    
})