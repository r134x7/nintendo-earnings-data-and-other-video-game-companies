import { printTextBlock, border, liner, spacer } from "./table_design_logic";

export type Section = {
    units: "units" | "percentage" | "currency" | "NaN" ,
    period: "1st Quarter" | "2nd Quarter" | "3rd Quarter" | "4th Quarter" | "Last FY Cumulative",
    cmlPeriod: "1st Quarter" | "First Half" | "1st 3 Qtrs" | "Cml.",
    name: string,
    value: number,
    miscellaneous?: string,
    fiscalYear?: string,
}

export type Header = {
    firstHeader: "Sega Sammy",
    secondHeader: "Full Game Software Unit Sales",
    fiscalYear: string,
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

export const printSoftwareGeneral = (header: Header, sectionDifference: Section[], sectionDifferenceYoY: Section[], sectionCumulative: Section[], sectionCumulativeYoY: Section[], currentQuarter: number) => {

    const textBlock: string =  liner(printTextBlock(sectionDifference[0].name, 34),"−","both",true,34);
    const sectionHeader: string = textBlock + liner("|             |   Units |     YoY% |","−","bottom",true)

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
                : spacer(printSectionDifferenceYoY,9,"right");

            let printSection: string = `${(elem.value / 100).toFixed(2)}M`;

            let printSectionFixed: string = spacer(printSection,8,"right");

            let printLineCheck = sectionDifferenceYoYFixed.filter((secondElem, secondIndex) => secondIndex === index + 1 && secondElem.units !== "NaN"); // checks the next element for whether it is NaN so that printLineLength does a closing line correctly

            return (printSectionDifferenceYoYFixed === "NaN")
                    ? liner(border([
                        spacer(elem.period,12,"left"),
                        printSectionFixed,
                    ]),(array[index] === array.at(-1)) ? "=" : "−","bottom",true) 
                    : liner(border([
                        spacer(elem.period,12,"left"),
                        printSectionFixed,
                        printSectionDifferenceYoYFixed,
                    ]),(array[index] === array.at(-1)) ? "=" : "−","bottom",true) 
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
                    : spacer(printSectionCumulativeYoY,9,"right");

                let printCumulative: string = `${(elem.value / 100).toFixed(2)}M`;

                let printCumulativeFixed: string = spacer(printCumulative,8,"right");

                // let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX
                
            let printLineCheck = sectionCumulativeYoYFixed.filter((secondElem, secondIndex) => secondIndex === index + 1 && secondElem.units !== "NaN");

                let printPeriod: string = (currentQuarter === 4 && array[index] === array.at(-1))
                    ? `${header.fiscalYear} ${elem.cmlPeriod}`
                    : elem.cmlPeriod

                return (printSectionCumulativeYoYFixed === "NaN")
                    ? liner(border([
                        spacer(printPeriod,12,"left"),
                        printCumulativeFixed,
                    ]),"−","bottom",true) 
                    : liner(border([
                        spacer(printPeriod,12,"left"),
                        printCumulativeFixed,
                        printSectionCumulativeYoYFixed,
                    ]),"−","bottom",true)
            })
            : []

        const miscellaneousPrint = (sectionDifference[0].miscellaneous === undefined)
            ? [] 
            : liner(printTextBlock(sectionDifference[0].miscellaneous,34),"−","bottom",true,34);

        const penultimateCheck = (!miscellaneousPrint) 
        ? [sectionHeader, ...difference, ...cumulative].flat().reduce((prev, next) => prev + next)
        : [sectionHeader, ...difference, ...cumulative, miscellaneousPrint].flat().reduce((prev, next) => prev + next)

        return penultimateCheck 
    };
