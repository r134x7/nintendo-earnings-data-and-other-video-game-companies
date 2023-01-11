import { printTextBlock, border, liner, spacer } from "./table_design_logic";

export type Section = {
    units: "units" | "percentage" | "currency" | "NaN" ,
    period: "1st Quarter" | "2nd Quarter" | "3rd Quarter" | "4th Quarter" | "Last FY Cumulative" | "Forecast" | "FCST Revision 1" | "FCST Revision 2" | "FCST Revision 3"
    cmlPeriod: "1st Quarter" | "First Half" | "1st 3 Qtrs" | "Cml.",
    name: string,
    value: number,
    fiscalYear?: string,
    hardwareReference?: string[],
}

export type Header = {
    switchHeader: "Nintendo Co., Ltd.",
    firstHeader: "Global Hardware and Software" | "Consolidated",
    secondHeader: "Sales Units and Forecasts" | "Sales Information",
    fiscalYear: string,
    nextFiscalYearShort: string,
}

export function quarterlyCalculation(quarters: Section[]) {
        
    const calc: Section[] = quarters.map((elem, index, array) => {
        return (index === 0 || quarters[index].period === "Last FY Cumulative") // 1st Quarter or last FY number
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

export const printSections = (header: Header, sectionDifference: Section[], sectionDifferenceYoY: Section[], sectionCumulative: Section[], sectionCumulativeYoY: Section[], sectionForecasts: Section[], currentQuarter: number) => {

    let unitsCheck = sectionDifference[0].units; 

    const sectionHeader: string = liner(printTextBlock(sectionDifference[0].name,33),"−","top",true,33) + liner(border([
        spacer("",12,"left"),
        spacer(`${(unitsCheck === "currency") ? "Sales":"Units"}`,(unitsCheck === "currency") ? 12 : 10,"right"),
        spacer("YoY%",10,"right")
    ]),"−","both",true,(unitsCheck === "currency") ? 39 : 37)

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
        };

            // let printSectionDifferenceYoY: string = (sectionDifferenceYoYFixed.length === 0)
            let printSectionDifferenceYoY: string = (sectionDifferenceYoYFixed[index].units === "NaN")
                ? "NaN"
                : (sectionDifferenceYoYFixed[index].value > 0)
                ? `+${sectionDifferenceYoYFixed[index].value}%`
                : `${sectionDifferenceYoYFixed[index].value}%`

            let printSectionDifferenceYoYFixed: string = (printSectionDifferenceYoY === "NaN")
                ? printSectionDifferenceYoY
                : spacer(printSectionDifferenceYoY,10,"right"); 

            let printSection: string = (elem.units === "currency")
                ? `¥${elem.value.toLocaleString("en")}M`
                : `${(elem.value / 100).toFixed(2)}M`;

            let lineSpace: number = (elem.units === "currency")
                ? 12
                : 10

            let printSectionFixed: string = spacer(printSection,lineSpace,"right"); 

            let printLineCheck = sectionDifferenceYoYFixed.filter((secondElem, secondIndex) => secondIndex === index + 1 && secondElem.units !== "NaN"); // checks the next element for whether it is NaN so that printLineLength does a closing line correctly

            let lineLengths: {long: number, short: number} = (elem.units === "currency")
                ? { long: 36, short: 26}
                : { long: 33, short: 23}

            let printLineLength: number = 
            // (printSectionDifferenceYoY === "NaN")
            (printLineCheck.length === 0 && printSectionDifferenceYoY === "NaN")
                ? lineLengths.short
                : lineLengths.long 

            return (printSectionDifferenceYoYFixed === "NaN")
                    ? liner(border([
                            spacer(elem.period,12,"left"),
                            printSectionFixed,
                            spacer("",10,"left"),
                        ]), (array[index] === array.at(-1)) ?"=":"−","bottom", true)
                    : liner(border([
                            spacer(elem.period,12,"left"),
                            printSectionFixed,
                            printSectionDifferenceYoYFixed,
                        ]),(array[index] === array.at(-1)) ?"=":"−","bottom",true)
        });

    const cumulative = (currentQuarter >= 2)
            ? sectionCumulative.filter((elem, index, array) => 
                currentQuarter >= 2 && index < currentQuarter -1 //&& array[index].value !== 0 // filtering out first quarter and last fy cml or else undefined type errors from arrays below not being equal lengths
            ).flatMap((elem, index, array) => {
                if (elem.value === 0) {
                    return [] // must return an array to flatten it
                }
                
                let printSectionCumulativeYoY: string = (sectionCumulativeYoYFixed[index].units === "NaN")
                    ? "NaN"
                    : (sectionCumulativeYoYFixed[index].value > 0)
                    ? `+${sectionCumulativeYoYFixed[index].value}%`
                    : `${sectionCumulativeYoYFixed[index].value}%`

                let printSectionCumulativeYoYFixed: string = (printSectionCumulativeYoY === "NaN")
                    ? printSectionCumulativeYoY
                    : spacer(printSectionCumulativeYoY,10,"right")

                let printCumulative: string = (elem.units === "currency")
                ? `¥${elem.value.toLocaleString("en")}M`
                : `${(elem.value / 100).toFixed(2)}M`;

                let lineSpace: number = (elem.units === "currency")
                    ? 12
                    : 10

                let printCumulativeFixed: string = spacer(printCumulative,lineSpace,"right")

            let printLineCheck = sectionCumulativeYoYFixed.filter((secondElem, secondIndex) => secondIndex === index + 1 && secondElem.units !== "NaN");

            let lineLengths: {long: number, short: number} = (elem.units === "currency")
                ? { long: 36, short: 26}
                : { long: 33, short: 23}

            let printLineLength: number = 
            (printLineCheck.length === 0 && printSectionCumulativeYoY === "NaN")
                ? lineLengths.short 
                : lineLengths.long    

                let printPeriod: string = (currentQuarter === 4 && array[index] === array.at(-1))
                    ? `${header.fiscalYear} ${elem.cmlPeriod}`
                    : elem.cmlPeriod

                return (printSectionCumulativeYoYFixed === "NaN")
                    ? liner(border([
                        spacer(printPeriod,12,"left"),
                        printCumulativeFixed,
                        spacer("",10,"left"),
                    ]),"−","bottom",true)
                    : liner(border([
                        spacer(printPeriod,12,"left"),
                        printCumulativeFixed,
                        printSectionCumulativeYoYFixed,
                    ]),"−","bottom",true)
            })
            : []

        const ltd: string = (currentQuarter === 1) 
                ? `${((sectionDifference[currentQuarter-1].value + sectionCumulative[sectionCumulative.length-1].value) / 100 ).toFixed(2)}M`
                : `${((sectionCumulative[currentQuarter-2].value + sectionCumulative[sectionCumulative.length-1].value) / 100 ).toFixed(2)}M`

        const ltdPrint: string = liner(border([
            spacer(" Life-To-Date",12,"left"),
            spacer(ltd,10,"right"),
        ]),"−","bottom",true,25) 

        const forecast: string = sectionForecasts.map((elem, index, array) => {
                
                let printValue: string = `${elem.value / 100}M`
                        // I really need to name these conditions...
                return (currentQuarter === 4 && index === array.length-1 && array.length === 1) // next fiscal year label condition
                    ? liner(border([
                        spacer(`${header.nextFiscalYearShort} ${elem.period}`,12,"left"),
                        spacer(printValue,9,"right"),
                    ]),"−","both",true) 
                    : (currentQuarter === 4 && index === array.length-1 && elem.period === "Forecast") // next fiscal year label condition
                    ? liner(border([
                        spacer(`${header.nextFiscalYearShort} ${elem.period}`,12,"left"),
                        spacer(printValue,9,"right"),
                    ]),"−","bottom",true) 
                    : (index === 0) // current fiscal year label condition
                    ? liner(border([
                        spacer(`${header.fiscalYear} ${elem.period}`,12,"left"),
                        spacer(printValue,9,"right"),
                    ]),"−","both",true)
                    : liner(border([ // forecast revision conditions
                        spacer(elem.period,16,"left"),
                        spacer(printValue,9,"right"),
                    ]),"−","bottom",true)
            }).concat((sectionDifference[0].name === "Nintendo Switch Software Total") ? ["|(Software sales units include both\n|packaged and downloadable versions\n|of software.)"] : "###").reduce((prev, next) => prev + next)
            // I need to go back here and implement footnotes...

            const mobileFooter = "|(Includes income from smart-device\n|content and royalty income.)";

            const digitalSalesFooter = "|(Includes downloadable versions of\n|packaged software, download-only\n|software, add-on content and\n|Nintendo Switch Online*.)\n|*Nintendo Switch Online from FY3/2019"

        const penultimateCheck = (sectionDifference[0].name.split(" ").includes("Total") && sectionDifference[0].units === "units")
            ? [sectionHeader, ...difference, ...cumulative, ltdPrint, forecast].flat().reduce((prev, next) => prev + next)
            : (sectionDifference[0].name === "Mobile, IP related income, etc.")
            ? [sectionHeader, ...difference, ...cumulative, mobileFooter].flat().reduce((prev, next) => prev + next)
            : (sectionDifference[0].name === "Playing cards, etc." || sectionDifference[0].name === "Dedicated video game platform")
            ? [sectionHeader, ...difference, ...cumulative].flat().reduce((prev, next) => prev + next)
            : (sectionDifference[0].name === "Digital Sales")
            ? [sectionHeader, ...difference, ...cumulative, digitalSalesFooter].flat().reduce((prev, next) => prev + next)
            : (sectionDifference[0].units === "currency")
            ? [sectionHeader, ...difference, ...cumulative].flat().reduce((prev, next) => prev + next)
            : [sectionHeader, ...difference, ...cumulative, ltdPrint].flat().reduce((prev, next) => prev + next)

        return penultimateCheck 
    }

export const printSalesHardware = (header: Header, sectionSales: Section[], sectionHardwareTotal: Section[], currentQuarter: number) => {

        const sectionHeaderName: string  = liner(printTextBlock(sectionSales[0].name, 50),"−","top",true,50);

        const sectionHeaderThree: string = "+" + "−".repeat(50) + "+\n" + "|             |             | Hardware | Sales Per |\n|             |       Sales |    Units |  Hardware |\n|             |  Cumulative |Cumulative| Unit Cml. |\n+" + "−".repeat(50) + "+\n"

        const sectionHardwareTotalFixed = sectionHardwareTotal.filter((elem, index, array) => {
            return index < currentQuarter //&& array[index].value !== 0
        }).map((elem, index, array) => {
            // if (elem.value === 0) {
            //     return [] // can't filter out zeroes above because it will cause issues when doing salesPerHardwareUnit
            // };

            return (elem.value === 0) ? 0 : ((elem.value + sectionHardwareTotal[sectionHardwareTotal.length-1].value) / 100)
        })

        const salesPerHardwareUnit = sectionSales.filter((elem, index, array) => {
            return index < currentQuarter //&& array[index].value !== 0 
        }).flatMap((elem, index, array) => { 
            if (elem.value === 0) {
                return [] 
            };

            let printSectionLTD: string = spacer(`¥${(elem.value + sectionSales[sectionSales.length-1].value).toLocaleString("en")}M`,12,"right")

            let calculateSalesPerHardware: number = Number(((elem.value + sectionSales[sectionSales.length-1].value) / sectionHardwareTotalFixed[index]).toFixed(0))

            let printSectionSalesPerHardware: string = spacer(`¥${calculateSalesPerHardware.toLocaleString("en")}`,10,"right");
            
            let printHardwareUnits: string = spacer(`${sectionHardwareTotalFixed[index]}M`,9,"right")
            
            let printPeriod: string = (currentQuarter === 4 && array[index] === array.at(-1))
                    ? `${header.fiscalYear} ${elem.cmlPeriod}`
                    : elem.cmlPeriod

            return liner(border([
                spacer(printPeriod,12,"left"),
                printSectionLTD,
                printHardwareUnits,
                printSectionSalesPerHardware,
            ]),(array[index] === array.at(-1)) ? "=" : "−","bottom",true) 
        })
  
        const printIt = [ sectionHeaderName, sectionHeaderThree, ...salesPerHardwareUnit].reduce((prev, next) => prev + next)

        return printIt
    }
