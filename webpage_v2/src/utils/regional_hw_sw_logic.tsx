import { liner, border, spacer } from "./table_design_logic"

export type Section = {
    units: "units" | "percentage" | "currency" | "NaN" ,
    period: "1st Quarter" | "2nd Quarter" | "3rd Quarter" | "4th Quarter" | "Last FY Cumulative"
    cmlPeriod: "1st Quarter" | "First Half" | "First Three Quarters" | "Cml.",
    name: string,
    regionA: "Global",
    regionB: "Japan", 
    regionC: "The Americas" | "Overseas",
    regionD: "Europe" | "Other", // due to change in data shown from FY3/XX...
    regionE: "Other",
    valueA: number,
    valueB: number,
    valueC: number,
    valueD: number,
    valueE: number,
    dataShift?: boolean, // to deal with YoY% for FY3/19...
    fiscalYear?: string,
}

export type Header = {
    switchHeader: "Nintendo Co., Ltd. Regional Data",
    fiscalYear: string,
    fiscalYearCml: string,
    units: "| Units  |",
    yearOnYear: "| YoY%   |",
    globalPercentage: "| Global%|",
    ltd: "Life-To-Date",
}

export function quarterlyCalculation(quarters: Section[]) {
       
   const calc: Section[] = quarters.map((elem, index, array) => {
    //    return (elem.period !== "1st Quarter  " && elem.period !== " Last FY Total ")
       return (elem.period !== "1st Quarter" && elem.period !== "Last FY Cumulative")
               ? {
                ...elem, 
                valueA: Number((elem.valueA - array[index-1].valueA).toFixed(2)),
                valueB: Number((elem.valueB - array[index-1].valueB).toFixed(2)),
                valueC: Number((elem.valueC - array[index-1].valueC).toFixed(2)),
                valueD: Number((elem.valueD - array[index-1].valueD).toFixed(2)),
                valueE: Number((elem.valueE - array[index-1].valueE).toFixed(2)),
                }
               : elem
   })
   
   return calc
}

export function yearOnYearCalculation(thisFY: Section[], lastFY: Section[]) {

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
                    : (lastFY[index].valueA === 0) // || lastFY[index].dataShift === true) // won't need dataShift here most likely
                    ? {
                        ...elem, 
                        units: "NaN", 
                    }
                    // : (lastFY[index].valueE !== 0)
                    // ? {
                    //     ...elem, 
                    //     units: "percentage", 
                    //     valueB: Number(
                    //     (((elem.valueB / lastFY[index].valueB) -1) * 100).toFixed(2)
                    //     ),
                    //     valueC: Number(
                    //     (((elem.valueC / lastFY[index].valueC) -1) * 100).toFixed(2)
                    //     ),
                    //     valueD: Number(
                    //     (((elem.valueD / lastFY[index].valueD) -1) * 100).toFixed(2)
                    //     ),
                    //     valueE: Number(
                    //     (((elem.valueE / lastFY[index].valueE) -1) * 100).toFixed(2)
                    //     ),
                    //   }
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
                        valueE: Number(
                        (((elem.valueE / lastFY[index].valueE) -1) * 100).toFixed(2)
                        ), // added valueE here to deal with a different issue regarding FY3/2019 making the previous conditions useless
                      }; // .toFixed(2) to round the number by two decimal points regardless of Number will output a string, whole thing needs to be wrapped in Number to change type back from string to number  
        })

       return calc
    }

export const printHead = (header: Header) => 
`+${"−".repeat(45)}+
${header.switchHeader} ${header.fiscalYear} |
+${"−".repeat(45)}+`;

export const printSection = (header: Header, sectionDifference: Section[], sectionDifferenceYoY: Section[], sectionCumulative: Section[], sectionCumulativeYoY: Section[], currentQuarter: number) => {

    const sectionHeader: string = (sectionDifference[currentQuarter-1].valueE !== 0) // changed index from [3] to currentQuarter or else the wrong header occurs... 
        ? "+" + "−".repeat(44) + "+\n| " + sectionDifference[0].name + " ".repeat(43 - sectionDifference[0].name.length) + "|\n+" + "−".repeat(44) + "+\n|        | Japan  |The     | Europe | Other  |\n|        |        |Americas|        |        |\n+" +  "−".repeat(44) + "+"
        : "+" + "−".repeat(44) + "+\n| " + sectionDifference[0].name + " ".repeat(43 - sectionDifference[0].name.length) + "|\n+" + "−".repeat(44) + "+\n|        | Japan  |The     | Other  |        |\n|        |        |Americas|        |        |\n+" +  "−".repeat(44) + "+"

    const sectionDifferenceYoYFixed = sectionDifferenceYoY.filter((elem) => {
        return (currentQuarter === 1)
            ? elem.period === "1st Quarter"
            : (currentQuarter === 2)
            ? elem.period === "1st Quarter" || elem.period === "2nd Quarter"
            : (currentQuarter === 3)
            ? elem.period !== "4th Quarter" 
            : elem
    }) 

    const sectionCumulativeYoYFixed = sectionCumulativeYoY.filter((elem) => elem.period !== "1st Quarter").filter((elem) => {

        if (currentQuarter === 2) {
            return elem.cmlPeriod === "First Half"
        } else if (currentQuarter === 3) {
            return elem.cmlPeriod !== "Cml."
        } else if (currentQuarter === 4) {
            return elem
        }

        return !elem // see if this works... it should return an empty array on quarter 1...
    })

    const difference = sectionDifference.filter((elem, index, array) => {
        return (currentQuarter === 1)
            ? elem.period === "1st Quarter" && elem.valueA !== 0 
            : (currentQuarter === 2 )
            ? (elem.period === "1st Quarter" && elem.valueA !== 0) || (elem.period === "2nd Quarter" && elem.valueA !== 0)
            : (currentQuarter === 3)
            ? elem.period !== "4th Quarter" && elem.valueA !== 0
            : elem.valueA !== 0
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
            ? `+${sectionDifferenceYoYFixed[index].valueB}%`
            : `${sectionDifferenceYoYFixed[index].valueB}%`

        let printSectionDifferenceYoYAmericas: string = (sectionDifferenceYoYFixed[index].units === "NaN")
            ? "NaN"
            : (sectionDifferenceYoYFixed[index].valueC > 0)
            ? `+${sectionDifferenceYoYFixed[index].valueC}%`
            : `${sectionDifferenceYoYFixed[index].valueC}%`

        let printSectionDifferenceYoYEurope: string = (sectionDifferenceYoYFixed[index].units === "NaN")
            ? "NaN"
            : (sectionDifferenceYoYFixed[index].valueD > 0)
            ? `+${sectionDifferenceYoYFixed[index].valueD}%`
            : `${sectionDifferenceYoYFixed[index].valueD}%`

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
                : " ".repeat(7 - value.length) + value + " "
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

        // let printLineCheck = sectionDifferenceYoYFixed.filter((secondElem, secondIndex) => secondIndex === index + 1 && secondElem.units !== "NaN"); // checks the next element for whether it is NaN so that printLineLength does a closing line correctly

        // let printLineLength: number = 
        //     // (printSectionDifferenceYoY === "NaN")
        // (printLineCheck.length === 0 && printSectionDifferenceYoY === "NaN")
        //     ? 23
        //     : 33    

        let printLine: string = (array[index] === array.at(-1))
            ? "\n+" + "=".repeat(44) + "+"
            : "\n+" + "−".repeat(44) + "+"

        let printPeriod: string = liner(border([spacer(elem.period,43,"left")]),"−","both",true)

        return (printSectionDifferenceYoYJapanFixed === "NaN" && elem.valueE !== 0)
                ? printPeriod + header.units + printSectionJapanFixed + "|" + printSectionAmericasFixed + "|" + printSectionEuropeFixed + "|" + printSectionOtherFixed + "|\n" + header.globalPercentage +  printSectionDifferenceWWPerJapanFixed + "|" + printSectionDifferenceWWPerAmericasFixed + "|" + printSectionDifferenceWWPerEuropeFixed + "|" + printSectionDifferenceWWPerOtherFixed + "|" + printLine 
                : (printSectionDifferenceYoYJapanFixed === "NaN" && elem.valueE === 0)
                ? printPeriod + header.units + printSectionJapanFixed + "|" + printSectionAmericasFixed + "|" + printSectionEuropeFixed + "|\n" + header.globalPercentage +  printSectionDifferenceWWPerJapanFixed + "|" + printSectionDifferenceWWPerAmericasFixed + "|" + printSectionDifferenceWWPerEuropeFixed + "|" + printLine
                : (elem.valueE !== 0)
                ? printPeriod + header.units + printSectionJapanFixed + "|" + printSectionAmericasFixed + "|" + printSectionEuropeFixed + "|" + printSectionOtherFixed + "|\n" + header.yearOnYear + printSectionDifferenceYoYJapanFixed + "|" + printSectionDifferenceYoYAmericasFixed + "|" + printSectionDifferenceYoYEuropeFixed + "|" + printSectionDifferenceYoYOtherFixed + "|\n" + header.globalPercentage +  printSectionDifferenceWWPerJapanFixed + "|" + printSectionDifferenceWWPerAmericasFixed + "|" + printSectionDifferenceWWPerEuropeFixed + "|" + printSectionDifferenceWWPerOtherFixed + "|" + printLine
                : printPeriod + header.units + printSectionJapanFixed + "|" + printSectionAmericasFixed + "|" + printSectionEuropeFixed + "|\n" + header.yearOnYear + printSectionDifferenceYoYJapanFixed + "|" + printSectionDifferenceYoYAmericasFixed + "|" + printSectionDifferenceYoYEuropeFixed + "|\n" + header.globalPercentage +  printSectionDifferenceWWPerJapanFixed + "|" + printSectionDifferenceWWPerAmericasFixed + "|" + printSectionDifferenceWWPerEuropeFixed + "|" + printLine
            
    })

    const cumulative = (currentQuarter >= 2)
        ? sectionCumulative.filter((elem, index, array) => {
            // Below: filtering out first quarter and last fy cml or else undefined type errors from arrays below not being equal lengths
            return (currentQuarter === 2 && elem.period !== "Last FY Cumulative")
            ? elem.cmlPeriod === "First Half" && elem.valueA !== 0
            : (currentQuarter === 3 && elem.period !== "Last FY Cumulative")
            ? (elem.cmlPeriod === "First Half" && elem.valueA !== 0) || (elem.cmlPeriod === "First Three Quarters" && elem.valueA !== 0) 
            : (currentQuarter === 4 && elem.period !== "Last FY Cumulative")
            ? elem.cmlPeriod !== "1st Quarter" && elem.valueA !== 0
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
                : (sectionCumulativeYoYFixed[index].valueB > 999)
                ? `+${(sectionCumulativeYoYFixed[index].valueB).toFixed(0)}% `
                : (sectionCumulativeYoYFixed[index].valueB > 0)
                ? `+${sectionCumulativeYoYFixed[index].valueB}% `
                : `${sectionCumulativeYoYFixed[index].valueB}% `;

            let printSectionCumulativeYoYAmericas: string = (sectionCumulativeYoYFixed[index].units === "NaN")
                ? "NaN"
                : (sectionCumulativeYoYFixed[index].valueC > 999)
                ? `+${(sectionCumulativeYoYFixed[index].valueC).toFixed(0)}% `
                : (sectionCumulativeYoYFixed[index].valueC > 0)
                ? `+${sectionCumulativeYoYFixed[index].valueC}% `
                : `${sectionCumulativeYoYFixed[index].valueC}% `;

            let printSectionCumulativeYoYEurope: string = (sectionCumulativeYoYFixed[index].units === "NaN")
                ? "NaN"
                : (sectionCumulativeYoYFixed[index].valueD > 999)
                ? `+${(sectionCumulativeYoYFixed[index].valueD).toFixed(0)}% `
                : (sectionCumulativeYoYFixed[index].valueD > 0)
                ? `+${sectionCumulativeYoYFixed[index].valueD}% `
                : `${sectionCumulativeYoYFixed[index].valueD}% `;

            let printSectionCumulativeYoYOther: string = (sectionCumulativeYoYFixed[index].units === "NaN")
                ? "NaN"
                : (sectionCumulativeYoYFixed[index].valueE > 999)
                ? `+${(sectionCumulativeYoYFixed[index].valueE).toFixed(0)}% `
                : (sectionCumulativeYoYFixed[index].valueE > 0)
                ? `+${sectionCumulativeYoYFixed[index].valueE}% `
                : `${sectionCumulativeYoYFixed[index].valueE}% `;

            let [printSectionCumulativeYoYJapanFixed, printSectionCumulativeYoYAmericasFixed, printSectionCumulativeYoYEuropeFixed, printSectionCumulativeYoYOtherFixed]: string[] = [printSectionCumulativeYoYJapan, printSectionCumulativeYoYAmericas, printSectionCumulativeYoYEurope, printSectionCumulativeYoYOther].map((value) => {
                return (value === "NaN")
                    ? value
                    : (value.length >= 8)
                    ? value
                    : " ".repeat(7 - value.length) + value + " ";
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

            let printLine: string = "\n+" + "−".repeat(44) + "+"

            let printPeriod: string = (elem.cmlPeriod !== "Cml.")
                ? liner(border([spacer(elem.cmlPeriod,43,"left")]),"−","both",true)  
                : liner(border([spacer(header.fiscalYearCml,43,"left")]),"−","both",true);

            return (printSectionCumulativeYoYJapanFixed === "NaN" && elem.valueE !== 0)
                    ? printPeriod + header.units + printCumulativeJapanFixed + "|" + printCumulativeAmericasFixed + "|" + printCumulativeEuropeFixed + "|" + printCumulativeOtherFixed + "|\n" + header.globalPercentage +  printSectionCumulativeWWPerJapanFixed + "|" + printSectionCumulativeWWPerAmericasFixed + "|" + printSectionCumulativeWWPerEuropeFixed + "|" + printSectionCumulativeWWPerOtherFixed + "|" + printLine
                    : (printSectionCumulativeYoYJapanFixed === "NaN" && elem.valueE === 0)
                    ? printPeriod + header.units + printCumulativeJapanFixed + "|" + printCumulativeAmericasFixed + "|" + printCumulativeEuropeFixed + "|\n" + header.globalPercentage +  printSectionCumulativeWWPerJapanFixed + "|" + printSectionCumulativeWWPerAmericasFixed + "|" + printSectionCumulativeWWPerEuropeFixed + "|" + printLine
                    : (elem.valueE !== 0)
                    ? printPeriod + header.units + printCumulativeJapanFixed + "|" + printCumulativeAmericasFixed + "|" + printCumulativeEuropeFixed + "|" + printCumulativeOtherFixed + "|\n" + header.yearOnYear + printSectionCumulativeYoYJapanFixed + "|" + printSectionCumulativeYoYAmericasFixed + "|" + printSectionCumulativeYoYEuropeFixed + "|" + printSectionCumulativeYoYOtherFixed + "|\n" + header.globalPercentage +  printSectionCumulativeWWPerJapanFixed + "|" + printSectionCumulativeWWPerAmericasFixed + "|" + printSectionCumulativeWWPerEuropeFixed + "|" + printSectionCumulativeWWPerOtherFixed + "|" + printLine
                    : printPeriod + header.units + printCumulativeJapanFixed + "|" + printCumulativeAmericasFixed + "|" + printCumulativeEuropeFixed + "|\n" + header.yearOnYear + printSectionCumulativeYoYJapanFixed + "|" + printSectionCumulativeYoYAmericasFixed + "|" + printSectionCumulativeYoYEuropeFixed + "|\n" + header.globalPercentage +  printSectionCumulativeWWPerJapanFixed + "|" + printSectionCumulativeWWPerAmericasFixed + "|" + printSectionCumulativeWWPerEuropeFixed + "|" + printLine
            })
            : [];

        let printSectionLTDWWPerJapan: string = (currentQuarter === 1) 
                ? `${(((sectionDifference[currentQuarter-1].valueB + sectionCumulative[sectionCumulative.length-1].valueB)) / ((sectionDifference[currentQuarter-1].valueA + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `
                : `${(((sectionCumulative[currentQuarter-2].valueB + sectionCumulative[sectionCumulative.length-1].valueB)) / ((sectionCumulative[currentQuarter-2].valueA + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `;

        let printSectionLTDWWPerAmericas: string = (currentQuarter === 1) 
                ? `${(((sectionDifference[currentQuarter-1].valueC + sectionCumulative[sectionCumulative.length-1].valueC)) / ((sectionDifference[currentQuarter-1].valueA + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `
                : `${(((sectionCumulative[currentQuarter-2].valueC + sectionCumulative[sectionCumulative.length-1].valueC)) / ((sectionCumulative[currentQuarter-2].valueA + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `;

        let printSectionLTDWWPerEurope: string = (currentQuarter === 1) 
                ? `${(((sectionDifference[currentQuarter-1].valueD + sectionCumulative[sectionCumulative.length-1].valueD)) / ((sectionDifference[currentQuarter-1].valueA + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `
                : `${(((sectionCumulative[currentQuarter-2].valueD + sectionCumulative[sectionCumulative.length-1].valueD)) / ((sectionCumulative[currentQuarter-2].valueA + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `;

        let printSectionLTDWWPerOther: string = (currentQuarter === 1) 
                ? `${(((sectionDifference[currentQuarter-1].valueE + sectionCumulative[sectionCumulative.length-1].valueE)) / ((sectionDifference[currentQuarter-1].valueA + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `
                : `${(((sectionCumulative[currentQuarter-2].valueE + sectionCumulative[sectionCumulative.length-1].valueE)) / ((sectionCumulative[currentQuarter-2].valueA + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `;

        let [printSectionLTDWWPerJapanFixed, printSectionLTDWWPerAmericasFixed, printSectionLTDWWPerEuropeFixed, printSectionLTDWWPerOtherFixed]: string[] = [printSectionLTDWWPerJapan, printSectionLTDWWPerAmericas, printSectionLTDWWPerEurope, printSectionLTDWWPerOther].map((value) => {                
            return (value.length >= 8)
                    ? value 
                    : " ".repeat(8 - value.length) + value;
        })


    const ltdJapan: string = (currentQuarter === 1) 
                ? `${((sectionDifference[currentQuarter-1].valueB + sectionCumulative[sectionCumulative.length-1].valueB) / 100 ).toFixed(2)}M`
                : `${((sectionCumulative[currentQuarter-2].valueB + sectionCumulative[sectionCumulative.length-1].valueB) / 100 ).toFixed(2)}M `;

    const ltdAmericas: string = (currentQuarter === 1) 
                ? `${((sectionDifference[currentQuarter-1].valueC + sectionCumulative[sectionCumulative.length-1].valueC) / 100 ).toFixed(2)}M`
                : `${((sectionCumulative[currentQuarter-2].valueC + sectionCumulative[sectionCumulative.length-1].valueC) / 100 ).toFixed(2)}M `;

    const ltdEurope: string = (currentQuarter === 1) 
                ? `${((sectionDifference[currentQuarter-1].valueD + sectionCumulative[sectionCumulative.length-1].valueD) / 100 ).toFixed(2)}M`
                : `${((sectionCumulative[currentQuarter-2].valueD + sectionCumulative[sectionCumulative.length-1].valueD) / 100 ).toFixed(2)}M `;

    const ltdOther: string = (currentQuarter === 1) 
                ? `${((sectionDifference[currentQuarter-1].valueE + sectionCumulative[sectionCumulative.length-1].valueE) / 100 ).toFixed(2)}M`
                : `${((sectionCumulative[currentQuarter-2].valueE + sectionCumulative[sectionCumulative.length-1].valueE) / 100 ).toFixed(2)}M `;

    let [ltdJapanFixed, ltdAmericasFixed, ltdEuropeFixed, ltdOtherFixed]: string[] = [ltdJapan, ltdAmericas, ltdEurope, ltdOther].map((value) => {
            return (value.length >= 8)
                ? value 
                : " ".repeat(8 - value.length) + value;
            })

    let printLtdHeader: string = liner(border([spacer(header.ltd,43,"left")]),"−","both",true)  
        
    // const ltdPrint: string = "| Life-To-Date|" + ltdFixed + "|\n+" + "−".repeat(23) + "+";
    const ltdPrint: string = (sectionDifference[currentQuarter-1].valueE !== 0)
            ? printLtdHeader + header.units + ltdJapanFixed + "|" + ltdAmericasFixed + "|" + ltdEuropeFixed + "|" + ltdOtherFixed + "|\n" + header.globalPercentage +  printSectionLTDWWPerJapanFixed + "|" + printSectionLTDWWPerAmericasFixed + "|" + printSectionLTDWWPerEuropeFixed + "|" + printSectionLTDWWPerOtherFixed + "|\n+" + "−".repeat(44) + "+"
            : printLtdHeader + header.units + ltdJapanFixed + "|" + ltdAmericasFixed + "|" + ltdEuropeFixed + "|\n" + header.globalPercentage +  printSectionLTDWWPerJapanFixed + "|" + printSectionLTDWWPerAmericasFixed + "|" + printSectionLTDWWPerEuropeFixed + "|\n+" + "−".repeat(35) + "+";
        
    const penultimateCheck = [sectionHeader, ...difference, ...cumulative, ltdPrint, "###"].filter((elem) => elem.length !== 0).reduce((prev, next) => prev + "\n" + next)

        return penultimateCheck;
}

