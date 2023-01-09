import { printTextBlock, border, liner, spacer } from "./table_design_logic";

export type Section = {
    units: "units" | "percentage" | "currency" | "NaN" ,
    period: " 1st Quarter " | " 2nd Quarter " | " 3rd Quarter " | " 4th Quarter " | " Last FY Cumulative ",
    cmlPeriod: " 1st Quarter " | " First Half  " | " 1st 3 Qtrs  " | "Cml.",
    name: string,
    value: number,
    miscellaneous?: string,
}

export type Header = {
    firstHeader: "| Sega Sammy        |",
    secondHeader: "| Full Game Software Unit Sales|",
    fiscalYear: string,
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
`+${"−".repeat(30)}+
${header.firstHeader}${header.fiscalYear}|
+${"−".repeat(30)}+
${header.secondHeader}
+${"−".repeat(30)}+`;

export const printSoftwareGeneral = (header: Header, sectionDifference: Section[], sectionDifferenceYoY: Section[], sectionCumulative: Section[], sectionCumulativeYoY: Section[], currentQuarter: number) => {

    const textBlock: string | never[] = "+---------------------------------+\n" + printTextBlock(sectionDifference[0].name)(33);
    const sectionHeader: string = textBlock + "\n+---------------------------------+\n|             |   Units |    YoY% |\n+---------------------------------+"

     const sectionDifferenceYoYFixed = sectionDifferenceYoY.filter((elem, index, array) => {
         return index < currentQuarter 
     })

    const sectionCumulativeYoYFixed = sectionCumulativeYoY.filter((elem, index) => index !== 0).filter((elem, index, array) => {
        
            return currentQuarter >= 2 && index < currentQuarter-1
    }) // had to do two separate filters, first removes first quarter...
    
    const difference = sectionDifference.filter((elem, index, array) => {
        return index < currentQuarter && array[index].value !== 0
    }).map((elem, index, array) => {

            let printSectionDifferenceYoY: string = (sectionDifferenceYoYFixed[index].units === "NaN")
                ? "NaN"
                : (sectionDifferenceYoYFixed[index].value > 0)
                ? `+${sectionDifferenceYoYFixed[index].value}%`
                : `${sectionDifferenceYoYFixed[index].value}%`

            let printSectionDifferenceYoYFixed: string = (printSectionDifferenceYoY === "NaN")
                ? printSectionDifferenceYoY
                : (printSectionDifferenceYoY.length >= 9)
                ? printSectionDifferenceYoY
                : " ".repeat(9 - printSectionDifferenceYoY.length) + printSectionDifferenceYoY

            let printSection: string = `${(elem.value / 100).toFixed(2)}M`;

            let lineSpace: number = 9;

            let printSectionFixed: string = (printSection.length >= lineSpace)
                ? printSection
                : " ".repeat(lineSpace - printSection.length) + printSection;

            let printLineCheck = sectionDifferenceYoYFixed.filter((secondElem, secondIndex) => secondIndex === index + 1 && secondElem.units !== "NaN"); // checks the next element for whether it is NaN so that printLineLength does a closing line correctly

            let lineLengths: {long: number, short: number} = { long: 33, short: 23}

            let printLineLength: number = (printLineCheck.length === 0 && printSectionDifferenceYoY === "NaN")
                ? lineLengths.short
                : lineLengths.long 

            let printLine: string = (array[index] === array.at(-1))
                ? "\n+" + "=".repeat(printLineLength) + "+"
                : "\n+" + "−".repeat(printLineLength) + "+"

            return (printSectionDifferenceYoYFixed === "NaN")
                    ? "|" + elem.period + "|" + printSectionFixed + "|" + printLine
                    : "|" + elem.period + "|" + printSectionFixed + "|" + printSectionDifferenceYoYFixed + "|" + printLine
            
        });

    const cumulative = (currentQuarter >= 2)
            ? sectionCumulative.filter((elem, index, array) => 
                currentQuarter >= 2 && index < currentQuarter -1 && array[index].value !== 0 // filtering out first quarter and last fy cml or else undefined type errors from arrays below not being equal lengths
            ).map((elem, index, array) => {
                
                let printSectionCumulativeYoY: string = (sectionCumulativeYoYFixed[index].units === "NaN")
                    ? "NaN"
                    : (sectionCumulativeYoYFixed[index].value > 0)
                    ? `+${sectionCumulativeYoYFixed[index].value}%`
                    : `${sectionCumulativeYoYFixed[index].value}%`

                let printSectionCumulativeYoYFixed: string = (printSectionCumulativeYoY === "NaN")
                    ? printSectionCumulativeYoY
                    : (printSectionCumulativeYoY.length >= 9)
                    ? printSectionCumulativeYoY
                    : " ".repeat(9 - printSectionCumulativeYoY.length) + printSectionCumulativeYoY

                let printCumulative: string = `${(elem.value / 100).toFixed(2)}M`;

                let lineSpace: number = 9;

                let printCumulativeFixed: string = (printCumulative.length >= lineSpace)
                    ? printCumulative
                    : " ".repeat(lineSpace - printCumulative.length) + printCumulative;

                let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX
                
            let printLineCheck = sectionCumulativeYoYFixed.filter((secondElem, secondIndex) => secondIndex === index + 1 && secondElem.units !== "NaN");

            let lineLengths: {long: number, short: number} = { long: 33, short: 23}

            let printLineLength: number = 
            (printLineCheck.length === 0 && printSectionCumulativeYoY === "NaN")
                ? lineLengths.short 
                : lineLengths.long    

                let printLine: string = "\n+" + "−".repeat(printLineLength) + "+"

                let printPeriod: string = (currentQuarter === 4 && array[index] === array.at(-1))
                    ? `${shortFY}${elem.cmlPeriod} `
                    : elem.cmlPeriod

                return (printSectionCumulativeYoYFixed === "NaN")
                    ?  "|" + printPeriod + "|" + printCumulativeFixed + "|" + printLine
                    : "|" + printPeriod + "|" + printCumulativeFixed + "|" + printSectionCumulativeYoYFixed + "|" + printLine
            })
            : []

        // const ltd: string = (currentQuarter === 1) 
        //         ? `${((sectionDifference[currentQuarter-1].value + sectionCumulative[sectionCumulative.length-1].value) / 100 ).toFixed(2)}M`
        //         : `${((sectionCumulative[currentQuarter-2].value + sectionCumulative[sectionCumulative.length-1].value) / 100 ).toFixed(2)}M`

        // const ltdFixed: string = (ltd.length >= 9)
        //         ? ltd
        //         : " ".repeat(9 - ltd.length) + ltd
        
        // const ltdPrint: string = "| Life-To-Date|" + ltdFixed + "|\n+" + "−".repeat(23) + "+"

        const miscellaneousPrint = sectionDifference[0].miscellaneous;

        const penultimateCheck = (!miscellaneousPrint) 
        ? [sectionHeader, ...difference, ...cumulative].filter((elem) => elem.length !== 0).reduce((prev, next) => prev + "\n" + next)
        : [sectionHeader, ...difference, ...cumulative, miscellaneousPrint].filter((elem) => elem.length !== 0).reduce((prev, next) => prev + "\n" + next)

        return penultimateCheck 
    };
