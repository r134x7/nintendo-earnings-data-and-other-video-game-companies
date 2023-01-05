import { printTextBlock } from "./bandai_namco_annual_report_logic"

export type Section = {
    units: "units" | "percentage" | "currency" | "NaN" ,
    period: " 1st Quarter " | " 2nd Quarter " | " 3rd Quarter " | " 4th Quarter " | " Last FY Cumulative " | "Forecast" | " FCST Revision 1 " | " FCST Revision 2 " | " FCST Revision 3 "
    cmlPeriod: " 1st Quarter " | " First Half  " | " 1st 3 Qtrs  " | "Cml.",
    name: string,
    value: number,
    fiscalYear?: string,
}

export type Header = {
    switchHeader: "| Nintendo Co., Ltd. |",
    firstHeader: "| Global Hardware and Software  |" | "| Consolidated                  |",
    secondHeader: "| Sales Units and Forecasts     |" | "| Sales Information             |",
    fiscalYear: string,
    nextFiscalYearShort: string,
}

export function quarterlyCalculation(quarters: Section[]) {
        
    const calc: Section[] = quarters.map((elem, index, array) => {
        return (index === 0 || quarters[index].period === " Last FY Cumulative ") // 1st Quarter or last FY number
                ? elem
                : {...elem, value: elem.value - array[index-1].value}
    })
    
    return calc
}

export function yearOnYearCalculation(thisFY: Section[], lastFY: Section[]) {

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

export const printHead = (header: Header) => 
`+${"-".repeat(31)}+
${header.switchHeader} ${header.fiscalYear} |
+${"-".repeat(31)}+
${header.firstHeader}
+${"-".repeat(31)}+
${header.secondHeader}
+${"-".repeat(31)}+`;


export const printSections = (header: Header, sectionDifference: Section[], sectionDifferenceYoY: Section[], sectionCumulative: Section[], sectionCumulativeYoY: Section[], sectionForecasts: Section[], currentQuarter: number) => {

    // const sectionHeader: string = (sectionDifference[0].name === "Nintendo Switch Hardware Total" || sectionDifference[0].name === "Nintendo Switch Software Total")
    //         ? "+-------------+\n|" + sectionDifference[0].name.split("").slice(0,9).join("") + "    |-------------------+\n| Total       |   Units |    YoY% |\n+---------------------------------+" 
            // : (sectionDifference[0].name === "Mobile")
            // ? "+--------------------------+\n| Mobile, IP related       |---------+\n| income, etc.             |    YoY% |\n+------------------------------------+"
            // : (sectionDifference[0].name === "Playing cards")
            // ? "+--------------------------+\n| Playing cards, etc       |\n+------------------------------------+\n|             |     Sales  |    YoY% |\n+------------------------------------+"
            // : (sectionDifference[0].name === "Dedicated video game platform")
            // ? "+------------------------------------+\n| Dedicated video game platform      |\n+------------------------------------+\n|             |     Sales  |    YoY% |\n+------------------------------------+"
            // : (sectionDifference[0].name === "Digital Sales")
            // ? "+--------------------------+\n|Digital Sales in dedicated|---------+\n| video game platform      |    YoY% |\n+------------------------------------+"
    //         : "+" + "-".repeat(33) + "+\n|" + sectionDifference[0].name + " ".repeat(13 - sectionDifference[0].name.length) + "|   Units |    YoY% |\n+" + "-".repeat(33) + "+"
    const sectionHeader: string | never[] = (sectionDifference[0].name === "Mobile")
            ? "+--------------------------+\n| Mobile, IP related       |---------+\n| income, etc.             |    YoY% |\n+------------------------------------+"  
            : (sectionDifference[0].name === "Playing cards")
            ? "+--------------------------+\n| Playing cards, etc       |\n+------------------------------------+\n|             |     Sales  |    YoY% |\n+------------------------------------+"
            : (sectionDifference[0].name === "Dedicated video game platform")
            ? "+------------------------------------+\n| Dedicated video game platform      |\n+------------------------------------+\n|             |     Sales  |    YoY% |\n+------------------------------------+"
            : (sectionDifference[0].name === "Digital Sales")
            ? "+--------------------------+\n|Digital Sales in dedicated|---------+\n| video game platform      |    YoY% |\n+------------------------------------+"
            : (sectionDifference[0].units === "currency")
            ? "+" + "-".repeat(33) + "+\n" + printTextBlock(sectionCumulative[0].name)(33) + "\n+" + "-".repeat(36) + "+\n" + "|             |      Units |    YoY% |\n" + "+" + "-".repeat(36) + "+" 
            : "+" + "-".repeat(33) + "+\n" + printTextBlock(sectionCumulative[0].name)(33) + "\n+" + "-".repeat(33) + "+\n" + "|             |   Units |    YoY% |\n" + "+" + "-".repeat(33) + "+" 

     const sectionDifferenceYoYFixed = sectionDifferenceYoY.filter((elem, index, array) => {
        //  return index < currentQuarter && array[index].units !== "NaN"
         return index < currentQuarter 
     })

    const sectionCumulativeYoYFixed = sectionCumulativeYoY.filter((elem, index) => index !== 0).filter((elem, index, array) => {
        
            // return currentQuarter >= 2 && index < currentQuarter -1 && array[index].units !== "NaN"
            return currentQuarter >= 2 && index < currentQuarter-1
    }) // had to do two separate filters, first removes first quarter...
    
    const difference = sectionDifference.filter((elem, index, array) => {
        return index < currentQuarter //&& array[index].value !== 0
    }).flatMap((elem, index, array) => {
        if (elem.value === 0) {
            return [] // must return an array to flatten it
        }

            // let printSectionDifferenceYoY: string = (sectionDifferenceYoYFixed.length === 0)
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

            let printSection: string = (elem.units === "currency")
                ? `¥${elem.value.toLocaleString("en")}M `
                : `${(elem.value / 100).toFixed(2)}M `;

            let lineSpace: number = (elem.units === "currency")
                ? 12
                : 9

            let printSectionFixed: string = (printSection.length >= lineSpace)
                ? printSection
                : " ".repeat(lineSpace - printSection.length) + printSection;

            let printLineCheck = sectionDifferenceYoYFixed.filter((secondElem, secondIndex) => secondIndex === index + 1 && secondElem.units !== "NaN"); // checks the next element for whether it is NaN so that printLineLength does a closing line correctly

            let lineLengths: {long: number, short: number} = (elem.units === "currency")
                ? { long: 36, short: 26}
                : { long: 33, short: 23}

            let printLineLength: number = 
            // (printSectionDifferenceYoY === "NaN")
            (printLineCheck.length === 0 && printSectionDifferenceYoY === "NaN")
                ? lineLengths.short
                : lineLengths.long 
            // let printLine: string = (index === currentQuarter -1)
            let printLine: string = (array[index] === array.at(-1))
                ? "\n+" + "=".repeat(printLineLength) + "+"
                : "\n+" + "-".repeat(printLineLength) + "+"

            return (printSectionDifferenceYoYFixed === "NaN")
                    ? "|" + elem.period + "|" + printSectionFixed + "|" + printLine
                    : "|" + elem.period + "|" + printSectionFixed + "|" + printSectionDifferenceYoYFixed + "|" + printLine
            
        })

    const cumulative = (currentQuarter >= 2)
            ? sectionCumulative.filter((elem, index, array) => 
                currentQuarter >= 2 && index < currentQuarter -1 //&& array[index].value !== 0 // filtering out first quarter and last fy cml or else undefined type errors from arrays below not being equal lengths
            ).flatMap((elem, index, array) => {
                if (elem.value === 0) {
                    return [] // must return an array to flatten it
                }
                
                // let printSectionCumulativeYoY: string = (sectionCumulativeYoYFixed.length === 0)
                let printSectionCumulativeYoY: string = (sectionCumulativeYoYFixed[index].units === "NaN")
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
                ? `¥${elem.value.toLocaleString("en")}M `
                : `${(elem.value / 100).toFixed(2)}M `;

                let lineSpace: number = (elem.units === "currency")
                    ? 12
                    : 9

                let printCumulativeFixed: string = (printCumulative.length >= lineSpace)
                    ? printCumulative
                    : " ".repeat(lineSpace - printCumulative.length) + printCumulative;

                // let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX
                let shortFY: string = header.fiscalYear
                
            let printLineCheck = sectionCumulativeYoYFixed.filter((secondElem, secondIndex) => secondIndex === index + 1 && secondElem.units !== "NaN");

            let lineLengths: {long: number, short: number} = (elem.units === "currency")
                ? { long: 36, short: 26}
                : { long: 33, short: 23}

            let printLineLength: number = 
            (printLineCheck.length === 0 && printSectionCumulativeYoY === "NaN")
                ? lineLengths.short 
                : lineLengths.long    

                let printLine: string = "\n+" + "-".repeat(printLineLength) + "+"

                let printPeriod: string = (currentQuarter === 4 && array[index] === array.at(-1))
                    ? `${shortFY} ${elem.cmlPeriod}`
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

        const forecast: string = sectionForecasts.map((elem, index, array) => {
                
                // let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX
                let shortFY: string = header.fiscalYear;

                let printValue: string = `${elem.value / 100}M `
                let printValueFixed: string = (printValue.length >= 9)
                    ? printValue
                    : " ".repeat(9 - printValue.length) + printValue

                // let miscellaneous: string = "|(Software sales units include both\n|packaged and downloadable versions\n|of software.)"

                return (currentQuarter === 4 && index === array.length-1 && array.length === 1)
                    ? "+" + "-".repeat(27) + "+\n|" + header.nextFiscalYearShort + " " + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+" 
                    : (currentQuarter === 4 && index === array.length-1 && elem.period === "Forecast")
                    ? "|" + header.nextFiscalYearShort + " " + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+" 
                    : (index === 0)
                    ? "+" + "-".repeat(27) + "+\n|" + shortFY + " " + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+"
                    : "|" + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+" 
            }).concat((sectionDifference[0].name === "Nintendo Switch Software Total") ? ["|(Software sales units include both\n|packaged and downloadable versions\n|of software.)"] : "###").reduce((prev, next) => prev + "\n" + next)
        // (sectionDifference[0].name === "Nintendo Switch Hardware Total")
        //     ? sectionForecasts.map((elem, index, array) => {

        //         // let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX
        //         let shortFY: string = header.fiscalYear;
                
        //         let printValue: string = `${elem.value / 100}M `
        //         let printValueFixed: string = (printValue.length >= 9)
        //             ? printValue
        //             : " ".repeat(9 - printValue.length) + printValue

        //         return (currentQuarter === 4 && index === array.length-1 && array.length === 1)
        //             ? "+" + "-".repeat(27) + "+\n|" + header.nextFiscalYearShort + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+" 
        //             : (currentQuarter === 4 && index === array.length-1)
        //             ? "|" + header.nextFiscalYearShort + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+" 
        //             : (index === 0)
        //             ? "+" + "-".repeat(27) + "+\n|" + shortFY + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+"
        //             : "|" + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+" 
        //     }).reduce((prev, next) => prev + "\n" + next)
        //     : (sectionDifference[0].name === "Nintendo Switch Software Total") 
            // ? sectionForecasts.map((elem, index, array) => {

            //     // let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX
            //     let shortFY: string = header.fiscalYear;

            //     let printValue: string = `${elem.value / 100}M `
            //     let printValueFixed: string = (printValue.length >= 9)
            //         ? printValue
            //         : " ".repeat(9 - printValue.length) + printValue

            //     // let miscellaneous: string = "|(Software sales units include both\n|packaged and downloadable versions\n|of software.)"

            //     return (currentQuarter === 4 && index === array.length-1 && array.length === 1)
            //         ? "+" + "-".repeat(27) + "+\n|" + header.nextFiscalYearShort + " " + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+" 
            //         : (currentQuarter === 4 && index === array.length-1)
            //         ? "|" + header.nextFiscalYearShort + " " + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+" 
            //         : (index === 0)
            //         ? "+" + "-".repeat(27) + "+\n|" + shortFY + " " + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+"
            //         : "|" + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+" 
            // }).concat(["|(Software sales units include both\n|packaged and downloadable versions\n|of software.)"]).reduce((prev, next) => prev + "\n" + next)
            // : "shrug"

            const mobileFooter = "|(Includes income from smart-device\n|content and royalty income.)";

            const digitalSalesFooter = "|(Includes downloadable versions of\n|packaged software, download-only\n|software, add-on content and\n|Nintendo Switch Online*.)\n|*Nintendo Switch Online from FY3/2019"

        const penultimateCheck = (sectionDifference[0].name.split(" ").includes("Total") && sectionDifference[0].units === "units")
            ? [sectionHeader, ...difference, ...cumulative, ltdPrint, forecast].flat().reduce((prev, next) => prev + "\n" + next)
            : (sectionDifference[0].name === "Mobile")
            ? [sectionHeader, ...difference, ...cumulative, mobileFooter].flat().reduce((prev, next) => prev + "\n" + next)
            : (sectionDifference[0].name === "Playing cards" || sectionDifference[0].name === "Dedicated video game platform")
            ? [sectionHeader, ...difference, ...cumulative].flat().reduce((prev, next) => prev + "\n" + next)
            : (sectionDifference[0].name === "Digital Sales")
            ? [sectionHeader, ...difference, ...cumulative, digitalSalesFooter].flat().reduce((prev, next) => prev + "\n" + next)
            : (sectionDifference[0].units === "currency")
            ? [sectionHeader, ...difference, ...cumulative].flat().reduce((prev, next) => prev + "\n" + next)
            : [sectionHeader, ...difference, ...cumulative, ltdPrint].flat().reduce((prev, next) => prev + "\n" + next)

        return penultimateCheck 
    }

export const printSalesHardware = (header: Header, sectionSales: Section[], sectionHardwareTotal: Section[], currentQuarter: number) => {

        // const sectionHeader: string = "+" + "-".repeat(13) + "+\n| Switch      |-------------+\n| Platform    |    Sales    |\n+" + "-".repeat(27) + "+"

        // const sectionHeaderTwo: string = "| Switch      |  Cumulative |\n| Platform    |       Sales |\n+" + "-".repeat(27) + "+"

        const sectionHeaderThree: string = "+" + "-".repeat(50) + "+\n" + "| Nintendo    | Sales       | Hardware | Sales Per |\n| Switch      | Cumulative  |    Units |  Hardware |\n| Platform    |             |Cumulative| Unit Cml. |\n+" + "-".repeat(50) + "+"

        const sectionHardwareTotalFixed = sectionHardwareTotal.filter((elem, index, array) => {
            return index < currentQuarter && array[index].value !== 0
        }).map((elem, index, array) => {
            return ((elem.value + sectionHardwareTotal[sectionHardwareTotal.length-1].value) / 100)
        })

        // const sales = sectionSales.filter((elem, index, array) => {
        //     return index < currentQuarter && array[index].value !== 0
        // }).map((elem, index, array) => {

        //     let printSection: string = `¥${elem.value.toLocaleString("en")}M `

        //     let printSectionFixed: string = (printSection.length >= 13)
        //         ? printSection
        //         : " ".repeat(13 - printSection.length) + printSection;
            
        //     // let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX
        //     let shortFY: string = header.fiscalYear;

        //     let printPeriod: string = (currentQuarter === 4 && array[index] === array.at(-1))
        //             ? `${shortFY} ${elem.cmlPeriod}`
        //             : elem.cmlPeriod

        //    let printLine: string = (array[index] === array.at(-1))
        //         ? "\n+" + "=".repeat(27) + "+"
        //         : "\n+" + "-".repeat(27) + "+"
            
        //     return "|" + printPeriod + "|" + printSectionFixed + "|" + printLine  
        // })

        // const cumulativeSales = sectionSales.filter((elem, index, array) => {
        //     return index < currentQuarter && array[index].value !== 0
        // }).map((elem, index, array) => { 

        //     let printSectionLTD: string = `¥${(elem.value + sectionSales[sectionSales.length-1].value).toLocaleString("en")}M `

        //     let printSectionLTDFixed: string = (printSectionLTD.length >= 13)
        //         ? printSectionLTD
        //         : " ".repeat(13 - printSectionLTD.length) + printSectionLTD;
            
        //     // let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX
        //     let shortFY: string = header.fiscalYear;

        //     let printPeriod: string = (currentQuarter === 4 && array[index] === array.at(-1))
        //             ? `${shortFY} ${elem.cmlPeriod}`
        //             : elem.cmlPeriod

        //    let printLine: string = (array[index] === array.at(-1))
        //         ? "\n+" + "=".repeat(36) + "+"
        //         : "\n+" + "-".repeat(27) + "+"
            
        //     return "|" + printPeriod + "|" + printSectionLTDFixed + "|" + printLine
        // })

        const salesPerHardwareUnit = sectionSales.filter((elem, index, array) => {
            return index < currentQuarter && array[index].value !== 0
        }).map((elem, index, array) => { 

            let printSectionLTD: string = `¥${(elem.value + sectionSales[sectionSales.length-1].value).toLocaleString("en")}M `

            let printSectionLTDFixed: string = (printSectionLTD.length >= 13)
                ? printSectionLTD
                : " ".repeat(13 - printSectionLTD.length) + printSectionLTD;
            

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

            // let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX
            let shortFY: string = header.fiscalYear

            let printPeriod: string = (currentQuarter === 4 && array[index] === array.at(-1))
                    ? `${shortFY} ${elem.cmlPeriod}`
                    : elem.cmlPeriod

           let printLine: string = (array[index] === array.at(-1))
                ? "\n+" + "=".repeat(50) + "+"
                : "\n+" + "-".repeat(50) + "+"
            
            return "|" + printPeriod + "|" + printSectionLTDFixed + "|" +  printHardwareUnitsFixed + "|" +   printSectionSalesPerHardwareFixed + "|" + printLine
        })
  
        const printIt = [ sectionHeaderThree, ...salesPerHardwareUnit].reduce((prev, next) => prev + "\n" + next)

        return printIt
    }