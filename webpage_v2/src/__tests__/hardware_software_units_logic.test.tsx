import { Header, Section } from "../utils/hardware_software_units_logic";

const header: Header = {
    switchHeader: "| Nintendo Switch   |",
    secondHeader:  "| Sales Units and Forecast     |",
    fiscalYear: " FY3/2022 ",
    nextFiscalYearShort: " FY3/23 ",
}

const nintendoSwitchPlatformSales: Section[] = [
    {
        name: " Switch Platform ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 1200000,
    },
    {
        name: " Switch Platform ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 2400000,
    },
    {
        name: " Switch Platform ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 3600000,
    },
    {
        name: " Switch Platform ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 4800000,
    },
    {
        name: " Switch Platform ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 200000,
    },
]

// you need... cumulative quarters 1-4, ltd at end of last fy...
// and last fy numbers: quarters 1-4 check earnings logic for reference

const switchOriginal: Section[] = [
    {
        name: " Hardware Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 331,
    },
    {
        name: " Hardware Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 645,
    },
    {
        name: " Hardware Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 1179,
    },
    {
        name: " Hardware Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 1356,
    },
    {
        name: " Hardware Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 6989,
    },
]

const hardwareTotalForecast: Section[] = [
    {
        name: " Software ",
        period: "Forecast ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 3333,
    },
    {
        name: " Software ",
        period: "Forecast ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 5555,
    }
]

const switchOriginalLastFY: Section[] = [
    {
        name: " Switch ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 305,
    },
    {
        name: " Switch ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 836,
    },
    {
        name: " Switch ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 1677,
    },
    {
        name: " Switch ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 2032,
    },
] 

const headerToMatch = 
`+------------------------------+
| Nintendo Switch   | FY3/2022 |
+------------------------------+
| Sales Units and Forecast     |
+------------------------------+`;

const switchToMatch = 
`+---------------------------------+
| Switch      |   Units |    YoY% |
+---------------------------------+
| 1st Quarter |   3.31M |  +8.52% |
+---------------------------------+
| 2nd Quarter |   3.14M | -40.87% |
+---------------------------------+
| 3rd Quarter |   5.34M |  -36.5% |
+---------------------------------+
| 4th Quarter |   1.77M | -50.14% |
+=================================+
| First Half  |   6.45M | -22.85% |
+---------------------------------+
| 1st 3 Qtrs  |  11.79M |  -29.7% |
+---------------------------------+
| FY3/22 Cml. |  13.56M | -33.27% |
+---------------------------------+
| Life-To-Date|  83.45M |
+-----------------------+`;

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
`+${"-".repeat(30)}+
${header.switchHeader}${header.fiscalYear}|
+${"-".repeat(30)}+
${header.secondHeader}
+${"-".repeat(30)}+`;

test("test to match header...", () => {

    expect(printHead(header)).toMatch(headerToMatch);
})

test("test quarterly calculation...", () => {

    const quarterly = quarterlyCalculation(switchOriginal)

    // console.log(quarterly);
    
})

test("test year on year calculation for quarters...", () => {

    const quarterly = quarterlyCalculation(switchOriginal).filter((elem, index, array) => index !== array.length-1)

    const quarterlyLastFY = quarterlyCalculation(switchOriginalLastFY)

    const quarterlyYoY = yearOnYearCalculation(quarterly, quarterlyLastFY)
    
    console.log(quarterlyYoY);
    
})

test("test year on year calculation for cumulative...", () => {

    const switchOriginalFiltered = switchOriginal.filter((elem, index, array) => index !== array.length-1)

    const cumulativeYoY = yearOnYearCalculation(switchOriginalFiltered, switchOriginalLastFY).filter((elem, index) => index !== 0)

    console.log(cumulativeYoY);
    
})

test("print Section", () => {

    const currentQuarter = 4;

    const printSections = (sectionDifference: Section[], sectionDifferenceYoY: Section[], sectionCumulative: Section[], sectionCumulativeYoY: Section[], sectionForecasts: Section[], currentQuarter: number) => {

        const sectionHeader: string = (sectionDifference[0].name === " Hardware Total " || sectionDifference[0].name === " Software Total ")
            ? "+-------------+\n|" + sectionDifference[0].name.split("").slice(0,9).join("") + "    |-------------------+\n| Total       |   Units |    YoY% |\n+---------------------------------+" 
            : (sectionDifference[0].name === " Mobile ")
            ? `+------------------------+
            | Mobile, IP related     |---------+
            | income, etc.           |    YoY% |
            +----------------------------------+`
            : "+" + "-".repeat(33) + "+\n|" + sectionDifference[0].name + " ".repeat(13 - sectionDifference[0].name.length) + "|   Units |    YoY% |\n+" + "-".repeat(33) + "+"

        const sectionDifferenceYoYFixed = sectionDifferenceYoY.filter((elem, index, array) => {
            return index < currentQuarter && array[index].units !== "NaN"
        })

        const sectionCumulativeYoYFixed = sectionCumulativeYoY.filter((elem, index, array) => {
                return currentQuarter >= 2 && index < currentQuarter -1 && array[index].units !== "NaN"
        })

        const difference = sectionDifference.filter((elem, index, array) => {
            return index < currentQuarter && array[index].value !== 0
        }).map((elem, index) => {
            

            let printSectionDifferenceYoY: string = (sectionDifferenceYoYFixed.length === 0)
                ? "NaN"
                : (sectionDifferenceYoYFixed[index].value > 0)
                ? `+${sectionDifferenceYoYFixed[index].value}% `
                : `${sectionDifferenceYoYFixed[index].value}% `

            let printSectionDifferenceYoYFixed: string = (printSectionDifferenceYoY === "NaN")
                ? printSectionDifferenceYoY
                : (printSectionDifferenceYoY.length >= 9)
                ? printSectionDifferenceYoY
                : " ".repeat(9 - printSectionDifferenceYoY.length) + printSectionDifferenceYoY

            let printSection: string = (elem.units === "currency")
                ? `¥${elem.value.toLocaleString("en")}M`
                : `${(elem.value / 100).toFixed(2)}M `;

            let printSectionFixed: string = (printSection.length >= 9)
                ? printSection
                : " ".repeat(9 - printSection.length) + printSection;

            let printLine: string = (index === currentQuarter -1)
                ? "\n+" + "=".repeat(33) + "+"
                : "\n+" + "-".repeat(33) + "+"

            return (printSectionDifferenceYoYFixed === "NaN")
                    ? "|" + elem.period + "|" + printSectionFixed + "|" + printLine
                    : "|" + elem.period + "|" + printSectionFixed + "|" + printSectionDifferenceYoYFixed + "|" + printLine
            
        })

        const cumulative = (currentQuarter >= 2)
            ? sectionCumulative.filter((elem, index, array) => 
                currentQuarter >= 2 && index < currentQuarter -1 && array[index].value !== 0
            ).map((elem, index, array) => {
                
                let printSectionCumulativeYoY: string = (sectionCumulativeYoYFixed.length === 0)
                    ? "NaN"
                    : (sectionCumulativeYoYFixed[index].value > 0)
                    ? `+${sectionCumulativeYoYFixed[index].value}% `
                    : `${sectionCumulativeYoYFixed[index].value}% `

                let printSectionCumulativeYoYFixed: string = (printSectionCumulativeYoY === "NaN")
                    ? printSectionCumulativeYoY
                    : (printSectionCumulativeYoY.length >= 9)
                    ? printSectionCumulativeYoY
                    : " ".repeat(9 - printSectionCumulativeYoY.length) + printSectionCumulativeYoY

                let printCumulative: string = (elem.units === "currency")
                ? `¥${elem.value.toLocaleString("en")}M`
                : `${(elem.value / 100).toFixed(2)}M `;

                let printCumulativeFixed: string = (printCumulative.length >= 9)
                    ? printCumulative
                    : " ".repeat(9 - printCumulative.length) + printCumulative;

                let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX
                
                let printLine: string = "\n+" + "-".repeat(33) + "+"

                // let printPeriod: string = (currentQuarter === 4 && index === currentQuarter-2)
                let printPeriod: string = (currentQuarter === 4 && array[index] === array.at(-1))
                    ? `${shortFY}${elem.cmlPeriod}`
                    : elem.cmlPeriod

                return (printSectionCumulativeYoYFixed === "NaN")
                    ?  "|" + printPeriod + "|" + printCumulativeFixed + "|" + printLine
                    : "|" + printPeriod + "|" + printCumulativeFixed + "|" + printSectionCumulativeYoYFixed + "|" + printLine
            })
            : []

        const ltd: string = (currentQuarter === 1) 
                ? `${((sectionDifference[currentQuarter-1].value + sectionCumulative[sectionCumulative.length-1].value) / 100 ).toFixed(2)}M `
                : `${((sectionCumulative[currentQuarter-2].value + sectionCumulative[sectionCumulative.length-1].value) / 100 ).toFixed(2)}M `

        const ltdFixed: string = (ltd.length >= 9)
                ? ltd
                : " ".repeat(9 - ltd.length) + ltd
        
        const ltdPrint: string = "| Life-To-Date|" + ltdFixed + "|\n+" + "-".repeat(23) + "+"

        const forecast: string = (sectionDifference[0].name === " Hardware Total ")
            ? sectionForecasts.map((elem, index, array) => {

                let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX
                
                let printValue: string = `${elem.value / 100}M `
                let printValueFixed: string = (printValue.length >= 9)
                    ? printValue
                    : " ".repeat(9 - printValue.length) + printValue

                return (currentQuarter === 4 && index === array.length-1)
                    ? "|" + header.nextFiscalYearShort + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+" 
                    : (index === 0)
                    ? "+" + "-".repeat(27) + "+\n|" + shortFY + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+"
                    : "|" + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+" 
            }).reduce((prev, next) => prev + "\n" + next)
            : (sectionDifference[0].name === " Software Total ") 
            ? sectionForecasts.map((elem, index, array) => {

                let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX

                let printValue: string = `${elem.value / 100}M `
                let printValueFixed: string = (printValue.length >= 9)
                    ? printValue
                    : " ".repeat(9 - printValue.length) + printValue

                // let miscellaneous: string = "|(Software sales units include both\n|packaged and downloadable versions\n|of software.)"

                return (currentQuarter === 4 && index === array.length-1)
                    ? "|" + header.nextFiscalYearShort + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+" 
                    : (index === 0)
                    ? "+" + "-".repeat(27) + "+\n|" + shortFY + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+"
                    : "|" + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+" 
            }).concat(["|(Software sales units include both\n|packaged and downloadable versions\n|of software.)"]).reduce((prev, next) => prev + "\n" + next)
            : "shrug"


        const penultimateCheck = (sectionDifference[0].name === " Hardware Total " || sectionDifference[0].name === " Software Total")
            ? [sectionHeader, ...difference, ...cumulative, ltdPrint, forecast].filter((elem) => elem.length !== 0).reduce((prev, next) => prev + "\n" + next)
            : (sectionDifference[0].name === " Mobile ")
            ? [sectionHeader, ...difference, ...cumulative, ].filter((elem) => elem.length !== 0).reduce((prev, next) => prev + "\n" + next)
            : [sectionHeader, ...difference, ...cumulative, ltdPrint].filter((elem) => elem.length !== 0).reduce((prev, next) => prev + "\n" + next)

        return penultimateCheck // not done yet...
    }

    const quarterly = quarterlyCalculation(switchOriginal).filter((elem, index, array) => index !== array.length-1) // filters out last fy cumulative

    const quarterlyLastFY = quarterlyCalculation(switchOriginalLastFY)

    const quarterlyYoY = yearOnYearCalculation(quarterly, quarterlyLastFY) // uses the above variables 

    const switchOriginalFiltered = switchOriginal.filter((elem, index, array) => index !== array.length-1) // not going through quarterly calculation and filters out last fy cumulative

    const cumulativeYoY = yearOnYearCalculation(switchOriginalFiltered, switchOriginalLastFY).filter((elem, index) => index !== 0) // filter out the first quarter

    const switchOriginalCml = switchOriginal.filter((elem, index, array) => index !== 0) // filter out the first quarter for cumulative numbers

    const testRun = printSections(quarterly, quarterlyYoY, switchOriginalCml, cumulativeYoY, hardwareTotalForecast, currentQuarter)

    // console.log(testRun);

    // console.log(switchOriginal);
    // console.log(switchOriginalFiltered);
    // console.log(cumulativeYoY);
    // console.log(switchOriginalCml);
    
    
    expect(testRun).toMatch(switchToMatch)
})

test("sales per hardware unit function...", () => {

    const currentQuarter = 4;

    const printSalesHardware = (header: Header, sectionSales: Section[], sectionHardwareTotal: Section[], currentQuarter: number) => {

        const sectionHeader: string = "+" + "-".repeat(13) + "+\n| Switch      |-------------+\n| Platform    |    Sales    |\n+" + "-".repeat(27) + "+"

        const sectionHeaderTwo: string = "| Switch      |  Cumulative |\n| Platform    |       Sales |\n+" + "-".repeat(27) + "+"

        const sectionHeaderThree: string = "| Switch      | Sales Per | Hardware |\n| Platform    |  Hardware |    Units |\n|-------------| Unit Cml. |Cumulative|\n+" + "-".repeat(36) + "+"

        const sectionHardwareTotalFixed = sectionHardwareTotal.filter((elem, index, array) => {
            return index < currentQuarter && array[index].value !== 0
        }).map((elem, index, array) => {
            return ((elem.value + sectionHardwareTotal[sectionHardwareTotal.length-1].value) / 100)
        })

        const sales = sectionSales.filter((elem, index, array) => {
            return index < currentQuarter && array[index].value !== 0
        }).map((elem, index, array) => {

            let printSection: string = `¥${elem.value.toLocaleString("en")}M `

            let printSectionFixed: string = (printSection.length >= 13)
                ? printSection
                : " ".repeat(13 - printSection.length) + printSection;
            
            let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX

            let printPeriod: string = (currentQuarter === 4 && array[index] === array.at(-1))
                    ? `${shortFY}${elem.cmlPeriod}`
                    : elem.cmlPeriod

           let printLine: string = (array[index] === array.at(-1))
                ? "\n+" + "=".repeat(27) + "+"
                : "\n+" + "-".repeat(27) + "+"
            
            return "|" + printPeriod + "|" + printSectionFixed + "|" + printLine  
        })

        const cumulativeSales = sectionSales.filter((elem, index, array) => {
            return index < currentQuarter && array[index].value !== 0
        }).map((elem, index, array) => { 

            let printSectionLTD: string = `¥${(elem.value + sectionSales[sectionSales.length-1].value).toLocaleString("en")}M `

            let printSectionLTDFixed: string = (printSectionLTD.length >= 13)
                ? printSectionLTD
                : " ".repeat(13 - printSectionLTD.length) + printSectionLTD;
            
            let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX

            let printPeriod: string = (currentQuarter === 4 && array[index] === array.at(-1))
                    ? `${shortFY}${elem.cmlPeriod}`
                    : elem.cmlPeriod

           let printLine: string = (array[index] === array.at(-1))
                ? "\n+" + "=".repeat(36) + "+"
                : "\n+" + "-".repeat(27) + "+"
            
            return "|" + printPeriod + "|" + printSectionLTDFixed + "|" + printLine
        })

        const salesPerHardwareUnit = sectionSales.filter((elem, index, array) => {
            return index < currentQuarter && array[index].value !== 0
        }).map((elem, index, array) => { 

            let calculateSalesPerHardware: number = Number(((elem.value + sectionSales[sectionSales.length-1].value) / sectionHardwareTotalFixed[index]).toFixed(0))

            // let printSectionSalesPerHardware: string = `¥${((elem.value + sectionSales[sectionSales.length-1].value) / sectionHardwareTotalFixed[index]).toLocaleString("en")} `

            let printSectionSalesPerHardware: string = `¥${calculateSalesPerHardware.toLocaleString("en")} `
            
            let printSectionSalesPerHardwareFixed: string = (printSectionSalesPerHardware.length >= 11)
                ? printSectionSalesPerHardware
                : " ".repeat(11 - printSectionSalesPerHardware.length) + printSectionSalesPerHardware;
            
            let printHardwareUnits: string = `${sectionHardwareTotalFixed[index]}M `

            let printHardwareUnitsFixed: string = (printHardwareUnits.length >= 10)
                    ? printHardwareUnits
                    : " ".repeat(10 - printHardwareUnits.length) + printHardwareUnits 

            let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX

            let printPeriod: string = (currentQuarter === 4 && array[index] === array.at(-1))
                    ? `${shortFY}${elem.cmlPeriod}`
                    : elem.cmlPeriod

           let printLine: string = (array[index] === array.at(-1))
                ? "\n+" + "=".repeat(36) + "+"
                : "\n+" + "-".repeat(36) + "+"
            
            return "|" + printPeriod + "|" + printSectionSalesPerHardwareFixed + "|" + printHardwareUnitsFixed + "|" + printLine
        })
  
        const printIt = [sectionHeader, ...sales, sectionHeaderTwo, ...cumulativeSales, sectionHeaderThree, ...salesPerHardwareUnit].reduce((prev, next) => prev + "\n" + next)

        return printIt
    }

    console.log(printSalesHardware(header, nintendoSwitchPlatformSales, switchOriginal, currentQuarter));
    //
})