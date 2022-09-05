export type Section = {
    units: "units" | "percentage" | "currency" | "NaN" ,
    period: " 1st Quarter " | " 2nd Quarter " | " 3rd Quarter " | " 4th Quarter " | " Last FY Cumulative "
    cmlPeriod: " 1st Quarter " | " First Half  " | " First Three Quarters " | "Cml. ",
    name: string,
    region: "Japan" | "The Americas" | "Europe" | "Other" | "Global"
    value: number,
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

const nintendoSwitchOGWW: Section[] = [
    {
        name: " Switch ",
        region: "Global",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 1000,
    },
    {
        name: " Switch ",
        region: "Global",
        period: " 2nd Quarter ", 
        cmlPeriod: " First Half  ",
        units: "units",
        value: 2000,
    },
    {
        name: " Switch ",
        region: "Global",
        period: " 3rd Quarter ",
        cmlPeriod: " First Three Quarters ",
        units: "units",
        value: 3000,
    },
    {
        name: " Switch ",
        region: "Global",
        period: " 4th Quarter ", 
        cmlPeriod: "Cml. ",
        units: "units",
        value: 4000,
    },
    {
        name: " Switch ",
        region: "Global",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 500,
    },
]

const nintendoSwitchOGJapan: Section[] = [
    {
        name: " Switch ",
        region: "Japan", 
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 100,
    },
    {
        name: " Switch ",
        region: "Japan", 
        period: " 2nd Quarter ", 
        cmlPeriod: " First Half  ",
        units: "units",
        value: 200,
    },
    {
        name: " Switch ",
        region: "Japan", 
        period: " 3rd Quarter ",
        cmlPeriod: " First Three Quarters ",
        units: "units",
        value: 300,
    },
    {
        name: " Switch ",
        region: "Japan", 
        period: " 4th Quarter ", 
        cmlPeriod: "Cml. ",
        units: "units",
        value: 400,
    },
    {
        name: " Switch ",
        region: "Japan", 
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 100,
    },
]

const nintendoSwitchOGJapanLastFY: Section[] = [
    {
        name: " Switch ",
        region: "Japan", 
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 10,
    },
    {
        name: " Switch ",
        region: "Japan", 
        period: " 2nd Quarter ", 
        cmlPeriod: " First Half  ",
        units: "units",
        value: 20,
    },
    {
        name: " Switch ",
        region: "Japan", 
        period: " 3rd Quarter ",
        cmlPeriod: " First Three Quarters ",
        units: "units",
        value: 30,
    },
    {
        name: " Switch ",
        region: "Japan", 
        period: " 4th Quarter ", 
        cmlPeriod: "Cml. ",
        units: "units",
        value: 40,
    },
]

const nintendoSwitchOGAmericas: Section[] = [
    {
        name: " Switch ",
        region: "The Americas", 
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 100,
    },
    {
        name: " Switch ",
        region: "The Americas", 
        period: " 2nd Quarter ", 
        cmlPeriod: " First Half  ",
        units: "units",
        value: 200,
    },
    {
        name: " Switch ",
        region: "The Americas", 
        period: " 3rd Quarter ",
        cmlPeriod: " First Three Quarters ",
        units: "units",
        value: 300,
    },
    {
        name: " Switch ",
        region: "The Americas", 
        period: " 4th Quarter ", 
        cmlPeriod: "Cml. ",
        units: "units",
        value: 400,
    },
    {
        name: " Switch ",
        region: "The Americas", 
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 100,
    },
]

const nintendoSwitchOGAmericasLastFY: Section[] = [
    {
        name: " Switch ",
        region: "The Americas", 
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 10,
    },
    {
        name: " Switch ",
        region: "The Americas", 
        period: " 2nd Quarter ", 
        cmlPeriod: " First Half  ",
        units: "units",
        value: 20,
    },
    {
        name: " Switch ",
        region: "The Americas", 
        period: " 3rd Quarter ",
        cmlPeriod: " First Three Quarters ",
        units: "units",
        value: 30,
    },
    {
        name: " Switch ",
        region: "The Americas", 
        period: " 4th Quarter ", 
        cmlPeriod: "Cml. ",
        units: "units",
        value: 40,
    },
]


const nintendoSwitchOGEurope: Section[] = [
    {
        name: " Switch ",
        region: "Europe", 
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 100,
    },
    {
        name: " Switch ",
        region: "Europe", 
        period: " 2nd Quarter ", 
        cmlPeriod: " First Half  ",
        units: "units",
        value: 200,
    },
    {
        name: " Switch ",
        region: "Europe", 
        period: " 3rd Quarter ",
        cmlPeriod: " First Three Quarters ",
        units: "units",
        value: 300,
    },
    {
        name: " Switch ",
        region: "Europe", 
        period: " 4th Quarter ", 
        cmlPeriod: "Cml. ",
        units: "units",
        value: 400,
    },
    {
        name: " Switch ",
        region: "Europe", 
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 100,
    },
]

const nintendoSwitchOGEuropeLastFY: Section[] = [
    {
        name: " Switch ",
        region: "Europe", 
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 10,
    },
    {
        name: " Switch ",
        region: "Europe", 
        period: " 2nd Quarter ", 
        cmlPeriod: " First Half  ",
        units: "units",
        value: 20,
    },
    {
        name: " Switch ",
        region: "Europe", 
        period: " 3rd Quarter ",
        cmlPeriod: " First Three Quarters ",
        units: "units",
        value: 30,
    },
    {
        name: " Switch ",
        region: "Europe", 
        period: " 4th Quarter ", 
        cmlPeriod: "Cml. ",
        units: "units",
        value: 40,
    },
]


const nintendoSwitchOGOther: Section[] = [
    {
        name: " Switch ",
        region: "Other", 
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 100,
    },
    {
        name: " Switch ",
        region: "Other", 
        period: " 2nd Quarter ", 
        cmlPeriod: " First Half  ",
        units: "units",
        value: 200,
    },
    {
        name: " Switch ",
        region: "Other", 
        period: " 3rd Quarter ",
        cmlPeriod: " First Three Quarters ",
        units: "units",
        value: 300,
    },
    {
        name: " Switch ",
        region: "Other", 
        period: " 4th Quarter ", 
        cmlPeriod: "Cml. ",
        units: "units",
        value: 400,
    },
    {
        name: " Switch ",
        region: "Other", 
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 100,
    },
]

const nintendoSwitchOGOtherLastFY: Section[] = [
    {
        name: " Switch ",
        region: "Other", 
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 10,
    },
    {
        name: " Switch ",
        region: "Other", 
        period: " 2nd Quarter ", 
        cmlPeriod: " First Half  ",
        units: "units",
        value: 20,
    },
    {
        name: " Switch ",
        region: "Other", 
        period: " 3rd Quarter ",
        cmlPeriod: " First Three Quarters ",
        units: "units",
        value: 30,
    },
    {
        name: " Switch ",
        region: "Other", 
        period: " 4th Quarter ", 
        cmlPeriod: "Cml. ",
        units: "units",
        value: 40,
    },
]

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

function quarterlyCalculation(quarters: Section[]) {
        
    const calc: Section[] = quarters.map((elem, index, array) => {
        return (index === 0 || quarters[index].period === " Last FY Cumulative ") // 1st Quarter or last FY number
                ? elem
                : {...elem, value: elem.value - array[index-1].value}
    })
    
    return calc
}

function yearOnYearCalculation(thisFY: Section[], lastFY: Section[]) {

        const calc: Section[] = thisFY.map((elem, index) => {

            return (lastFY[index].value < 0)
                    ? {...elem, units: "percentage", value: Number(
                        ((((elem.value / lastFY[index].value) -1)* -1) * 100).toFixed(2)
                        )
                      }
                    : (lastFY[index].value === 0)
                    ? {...elem, units: "NaN", value: 0}
                    :{...elem, units: "percentage", value: Number(
                        (((elem.value / lastFY[index].value) -1) * 100).toFixed(2)
                        )
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

    const sectionDifferenceYoYFixed = sectionDifferenceYoY.filter((elem, index, array) => {
        return (currentQuarter === 1)
            ? elem.period === " 1st Quarter "
            : (currentQuarter === 2)
            ? elem.period === " 1st Quarter " || elem.period === " 2nd Quarter "
            : (currentQuarter === 3)
            ? elem.period !== " 4th Quarter " 
            : elem
    }) 
}