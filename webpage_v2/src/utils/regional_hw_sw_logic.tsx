import { liner, border, spacer, infiniteCheck, printTextBlock } from "./table_design_logic"

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
                    valueA: Number((infiniteCheck(elem.valueA) - infiniteCheck(array[index-1].valueA)).toFixed(2)),
                    valueB: Number((infiniteCheck(elem.valueB) - infiniteCheck(array[index-1].valueB)).toFixed(2)),
                    valueC: Number((infiniteCheck(elem.valueC) - infiniteCheck(array[index-1].valueC)).toFixed(2)),
                    valueD: Number((infiniteCheck(elem.valueD) - infiniteCheck(array[index-1].valueD)).toFixed(2)),
                    valueE: Number((infiniteCheck(elem.valueE) - infiniteCheck(array[index-1].valueE)).toFixed(2)),
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
                        ((((infiniteCheck(elem.valueB) / infiniteCheck(lastFY[index].valueB)) -1)* -1) * 100).toFixed(2)),
                        valueC: Number(
                        ((((infiniteCheck(elem.valueC) / infiniteCheck(lastFY[index].valueC)) -1)* -1) * 100).toFixed(2)),
                        valueD: Number(
                        ((((infiniteCheck(elem.valueD) / infiniteCheck(lastFY[index].valueD)) -1)* -1) * 100).toFixed(2)),
                        valueE: Number(
                        ((((infiniteCheck(elem.valueE) / infiniteCheck(lastFY[index].valueE)) -1)* -1) * 100).toFixed(2)),
                      }
                    : (lastFY[index].valueA === 0)
                    ? {
                        ...elem, 
                        units: "NaN", 
                    }
                    : {
                        ...elem, 
                        units: "percentage", 
                        valueB: Number(
                        (((infiniteCheck(elem.valueB) / infiniteCheck(lastFY[index].valueB)) -1) * 100).toFixed(2)
                        ),
                        valueC: Number(
                        (((infiniteCheck(elem.valueC) / infiniteCheck(lastFY[index].valueC)) -1) * 100).toFixed(2)
                        ),
                        valueD: Number(
                        (((infiniteCheck(elem.valueD) / infiniteCheck(lastFY[index].valueD)) -1) * 100).toFixed(2)
                        ),
                        valueE: Number(
                        (((infiniteCheck(elem.valueE) / infiniteCheck(lastFY[index].valueE)) -1) * 100).toFixed(2)
                        ), // added valueE here to deal with a different issue regarding FY3/2019 making the previous conditions useless
                      }; // .toFixed(2) to round the number by two decimal points regardless of Number will output a string, whole thing needs to be wrapped in Number to change type back from string to number  
        })

       return calc
    }

const simpleDivideUnits = (valueLocal: number) => {
    return (valueLocal === Infinity)
                ? `< 0.01M`
                : (valueLocal === -Infinity)
                    ? `< −0.01M`
                    : `${(valueLocal / 100).toFixed(2)}M `;
}

const simpleYoYPrint = (sectionElem: Section, sectionValue: number) => {
    return (sectionElem.units === "NaN")
                ? "NaN"
                : (sectionValue > 999)
                    ? `+${(sectionValue).toFixed(0)}% `
                    : (sectionValue > 0)
                        ? `+${sectionValue}%`
                        : `${sectionValue}%`
}

const simpleDivideWW = (regionValue: number, globalValue: number) => {
    return `${((infiniteCheck(regionValue) / globalValue) * 100).toFixed(2)}% `
}

export const printHead = (header: Header) => 
`+${"−".repeat(45)}+
${header.switchHeader} ${header.fiscalYear} |
+${"−".repeat(45)}+`;

export const printSection = (header: Header, sectionDifference: Section[], sectionDifferenceYoY: Section[], sectionCumulative: Section[], sectionCumulativeYoY: Section[], currentQuarter: number) => {

    // const sectionHeader: string = (sectionDifference[currentQuarter-1].valueE !== 0) // changed index from [3] to currentQuarter or else the wrong header occurs... 
    //     ? "+" + "−".repeat(44) + "+\n| " + sectionDifference[0].name + " ".repeat(43 - sectionDifference[0].name.length) + "|\n+" + "−".repeat(44) + "+\n|        | Japan  |The     | Europe | Other  |\n|        |        |Americas|        |        |\n+" +  "−".repeat(44) + "+"
    //     : "+" + "−".repeat(44) + "+\n| " + sectionDifference[0].name + " ".repeat(43 - sectionDifference[0].name.length) + "|\n+" + "−".repeat(44) + "+\n|        | Japan  |The     | Other  |        |\n|        |        |Americas|        |        |\n+" +  "−".repeat(44) + "+"
    const sectionHeader: string = liner(printTextBlock(sectionDifference[0].name,47),"−","both",true,47) + liner(border([
        spacer("",11,"right"),
        spacer("Units",9,"right"),
        spacer("Global%",9,"right"),
        spacer("YoY%",11,"right"),
    ]),"−","bottom",true) 

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


        let printSectionDifferenceWWPerJapan: string | never[] = (elem.valueB === 0) ? [] : simpleDivideWW(elem.valueB, elem.valueA); //`${((elem.valueB / elem.valueA) * 100).toFixed(2)}% `;
        
        let printSectionDifferenceWWPerAmericas: string | never[] = (elem.valueC === 0) ? [] : simpleDivideWW(elem.valueC, elem.valueA); //`${((elem.valueC / elem.valueA) * 100).toFixed(2)}% `;

        let printSectionDifferenceWWPerEurope: string | never[] = (elem.valueD === 0) ? [] : simpleDivideWW(elem.valueD, elem.valueA); //`${((elem.valueD / elem.valueA) * 100).toFixed(2)}% `;

        let printSectionDifferenceWWPerOther: string | never[] = (elem.valueE === 0) ? [] : simpleDivideWW(elem.valueE, elem.valueA); //`${((elem.valueE / elem.valueA) * 100).toFixed(2)}% `;

        let printSectionDifferenceYoYJapan: string | never[] = (sectionDifferenceYoYFixed[index].units === "NaN") ? [] : simpleYoYPrint(sectionDifferenceYoYFixed[index], sectionDifferenceYoYFixed[index].valueB);
        
        let printSectionDifferenceYoYAmericas: string | never[] = (sectionDifferenceYoYFixed[index].units === "NaN") ? [] : simpleYoYPrint(sectionDifferenceYoYFixed[index], sectionDifferenceYoYFixed[index].valueC); 

        let printSectionDifferenceYoYEurope: string | never[] = (sectionDifferenceYoYFixed[index].units === "NaN") ? [] : simpleYoYPrint(sectionDifferenceYoYFixed[index], sectionDifferenceYoYFixed[index].valueD);

        let printSectionDifferenceYoYOther: string | never[] = (sectionDifferenceYoYFixed[index].units === "NaN") ? [] : simpleYoYPrint(sectionDifferenceYoYFixed[index], sectionDifferenceYoYFixed[index].valueE);
        
        let printSectionJapan: string | never[] = (elem.valueB === 0) ? [] : simpleDivideUnits(elem.valueB); //`${(elem.valueB / 100).toFixed(2)}M `;

        let printSectionAmericas: string | never[] = (elem.valueC === 0) ? [] : simpleDivideUnits(elem.valueC); //`${(elem.valueC / 100).toFixed(2)}M `;

        let printSectionEurope: string | never[] = (elem.valueD === 0) ? [] : simpleDivideUnits(elem.valueD); //`${(elem.valueD / 100).toFixed(2)}M `;

        let printSectionOther: string | never[] = (elem.valueE === 0) ? [] : simpleDivideUnits(elem.valueE); //`${(elem.valueE / 100).toFixed(2)}M `;

        let printPeriod: string = liner(border([spacer(elem.period,46,"left")]),"−","both",true)

        let printFirstRow: string = border([
            elem.regionB,
            printSectionJapan,
            printSectionDifferenceWWPerJapan,  
            printSectionDifferenceYoYJapan,
        ].map((elem, index, array) => {
            return spacer((typeof elem === "string") ? elem : "",(index === 0) 
                ? 11 
                : (index === array.length - 1)
                    ? 11
                    : 9,"right")
        }),true)

        let printSecondRow: string = border([
            elem.regionC,
            printSectionAmericas,
            printSectionDifferenceWWPerAmericas,  
            printSectionDifferenceYoYAmericas,
        ].map((elem, index, array) => {
            return spacer((typeof elem === "string") ? elem : "",(index === 0) 
                ? 11 
                : (index === array.length - 1)
                    ? 11
                    : 9,"right")
        }),true)

        let printThirdRow: string = border([
            elem.regionD,
            printSectionEurope,
            printSectionDifferenceWWPerEurope,  
            printSectionDifferenceYoYEurope,
        ].map((elem, index, array) => {
            return spacer((typeof elem === "string") ? elem : "",(index === 0 || index === array.length - 1)
                    ? 11
                    : 9,"right")
        }),(elem.valueE === 0) ? undefined : true)

        let printFourthRow: string | never[] = (elem.valueE === 0) 
            ? [] 
            : border([
                elem.regionE,
                printSectionOther,
                printSectionDifferenceWWPerOther,  
                printSectionDifferenceYoYOther,
            ].map((elem, index, array) => {
                return spacer((typeof elem === "string") ? elem : "",(index === 0 || index === array.length - 1)
                        ? 11
                        : 9,"right")
            }))

        // need to filter out (printSectionDifferenceYoYJapanFixed === "NaN" && elem.valueE !== 0) 
        return printPeriod + liner([
            printFirstRow,
            printSecondRow,
            printThirdRow,
            printFourthRow,
        ].flat().reduce((acc, next) => acc + next),"−","bottom",undefined,47);

        // return (printSectionDifferenceYoYJapanFixed === "NaN" && elem.valueE !== 0)
        //         ? printPeriod + header.units + printSectionJapanFixed + "|" + printSectionAmericasFixed + "|" + printSectionEuropeFixed + "|" + printSectionOtherFixed + "|\n" + header.globalPercentage +  printSectionDifferenceWWPerJapanFixed + "|" + printSectionDifferenceWWPerAmericasFixed + "|" + printSectionDifferenceWWPerEuropeFixed + "|" + printSectionDifferenceWWPerOtherFixed + "|" + printLine 
        //         : (printSectionDifferenceYoYJapanFixed === "NaN" && elem.valueE === 0)
        //             ? printPeriod + header.units + printSectionJapanFixed + "|" + printSectionAmericasFixed + "|" + printSectionEuropeFixed + "|\n" + header.globalPercentage +  printSectionDifferenceWWPerJapanFixed + "|" + printSectionDifferenceWWPerAmericasFixed + "|" + printSectionDifferenceWWPerEuropeFixed + "|" + printLine
        //             : (elem.valueE !== 0)
        //                 ? printPeriod + header.units + printSectionJapanFixed + "|" + printSectionAmericasFixed + "|" + printSectionEuropeFixed + "|" + printSectionOtherFixed + "|\n" + header.yearOnYear + printSectionDifferenceYoYJapanFixed + "|" + printSectionDifferenceYoYAmericasFixed + "|" + printSectionDifferenceYoYEuropeFixed + "|" + printSectionDifferenceYoYOtherFixed + "|\n" + header.globalPercentage +  printSectionDifferenceWWPerJapanFixed + "|" + printSectionDifferenceWWPerAmericasFixed + "|" + printSectionDifferenceWWPerEuropeFixed + "|" + printSectionDifferenceWWPerOtherFixed + "|" + printLine
        //                 : printPeriod + header.units + printSectionJapanFixed + "|" + printSectionAmericasFixed + "|" + printSectionEuropeFixed + "|\n" + header.yearOnYear + printSectionDifferenceYoYJapanFixed + "|" + printSectionDifferenceYoYAmericasFixed + "|" + printSectionDifferenceYoYEuropeFixed + "|\n" + header.globalPercentage +  printSectionDifferenceWWPerJapanFixed + "|" + printSectionDifferenceWWPerAmericasFixed + "|" + printSectionDifferenceWWPerEuropeFixed + "|" + printLine
            
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
            
            let printSectionCumulativeWWPerJapan: string = simpleDivideWW(elem.valueB, elem.valueA); //`${((elem.valueB / elem.valueA) * 100).toFixed(2)}% `;

            let printSectionCumulativeWWPerAmericas: string = simpleDivideWW(elem.valueC, elem.valueA); //`${((elem.valueC / elem.valueA) * 100).toFixed(2)}% `;

            let printSectionCumulativeWWPerEurope: string = simpleDivideWW(elem.valueD, elem.valueA); //`${((elem.valueD / elem.valueA) * 100).toFixed(2)}% `;

            let printSectionCumulativeWWPerOther: string = simpleDivideWW(elem.valueE, elem.valueA); //`${((elem.valueE / elem.valueA) * 100).toFixed(2)}% `;

            let [printSectionCumulativeWWPerJapanFixed, printSectionCumulativeWWPerAmericasFixed, printSectionCumulativeWWPerEuropeFixed, printSectionCumulativeWWPerOtherFixed]: string[] = [printSectionCumulativeWWPerJapan, printSectionCumulativeWWPerAmericas, printSectionCumulativeWWPerEurope, printSectionCumulativeWWPerOther].map((value) => {
                return (value.length >= 8)
                    ? value 
                    : " ".repeat(8 - value.length) + value;
            })

            let printSectionCumulativeYoYJapan: string = simpleYoYPrint(sectionCumulativeYoYFixed[index], sectionCumulativeYoYFixed[index].valueB);

            let printSectionCumulativeYoYAmericas: string = simpleYoYPrint(sectionCumulativeYoYFixed[index], sectionCumulativeYoYFixed[index].valueC);

            let printSectionCumulativeYoYEurope: string = simpleYoYPrint(sectionCumulativeYoYFixed[index], sectionCumulativeYoYFixed[index].valueD);

            let printSectionCumulativeYoYOther: string = simpleYoYPrint(sectionCumulativeYoYFixed[index], sectionCumulativeYoYFixed[index].valueE);

            // let printSectionCumulativeYoYJapan: string = (sectionCumulativeYoYFixed[index].units === "NaN")
            //     ? "NaN"
            //     : (sectionCumulativeYoYFixed[index].valueB > 999)
            //         ? `+${(sectionCumulativeYoYFixed[index].valueB).toFixed(0)}% `
            //         : (sectionCumulativeYoYFixed[index].valueB > 0)
            //             ? `+${sectionCumulativeYoYFixed[index].valueB}% `
            //             : `${sectionCumulativeYoYFixed[index].valueB}% `;

            // let printSectionCumulativeYoYAmericas: string = (sectionCumulativeYoYFixed[index].units === "NaN")
            //     ? "NaN"
            //     : (sectionCumulativeYoYFixed[index].valueC > 999)
            //         ? `+${(sectionCumulativeYoYFixed[index].valueC).toFixed(0)}% `
            //         : (sectionCumulativeYoYFixed[index].valueC > 0)
            //             ? `+${sectionCumulativeYoYFixed[index].valueC}% `
            //             : `${sectionCumulativeYoYFixed[index].valueC}% `;

            // let printSectionCumulativeYoYEurope: string = (sectionCumulativeYoYFixed[index].units === "NaN")
            //     ? "NaN"
            //     : (sectionCumulativeYoYFixed[index].valueD > 999)
            //         ? `+${(sectionCumulativeYoYFixed[index].valueD).toFixed(0)}% `
            //         : (sectionCumulativeYoYFixed[index].valueD > 0)
            //             ? `+${sectionCumulativeYoYFixed[index].valueD}% `
            //             : `${sectionCumulativeYoYFixed[index].valueD}% `;

            // let printSectionCumulativeYoYOther: string = (sectionCumulativeYoYFixed[index].units === "NaN")
            //     ? "NaN"
            //     : (sectionCumulativeYoYFixed[index].valueE > 999)
            //         ? `+${(sectionCumulativeYoYFixed[index].valueE).toFixed(0)}% `
            //         : (sectionCumulativeYoYFixed[index].valueE > 0)
            //             ? `+${sectionCumulativeYoYFixed[index].valueE}% `
            //             : `${sectionCumulativeYoYFixed[index].valueE}% `;

            let [printSectionCumulativeYoYJapanFixed, printSectionCumulativeYoYAmericasFixed, printSectionCumulativeYoYEuropeFixed, printSectionCumulativeYoYOtherFixed]: string[] = [printSectionCumulativeYoYJapan, printSectionCumulativeYoYAmericas, printSectionCumulativeYoYEurope, printSectionCumulativeYoYOther].map((value) => {
                return (value === "NaN")
                    ? value
                    : (value.length >= 8)
                        ? value
                        : " ".repeat(7 - value.length) + value + " ";
            })

            let printCumulativeJapan: string = simpleDivideUnits(elem.valueB); //`${(elem.valueB / 100).toFixed(2)}M `;

            let printCumulativeAmericas: string = simpleDivideUnits(elem.valueC); //`${(elem.valueC / 100).toFixed(2)}M `;

            let printCumulativeEurope: string = simpleDivideUnits(elem.valueD); //`${(elem.valueD / 100).toFixed(2)}M `;

            let printCumulativeOther: string = simpleDivideUnits(elem.valueE); //`${(elem.valueE / 100).toFixed(2)}M `;

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
                ? `${(((infiniteCheck(sectionDifference[currentQuarter-1].valueB) + sectionCumulative[sectionCumulative.length-1].valueB)) / ((infiniteCheck(sectionDifference[currentQuarter-1].valueA) + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `
                : `${(((infiniteCheck(sectionCumulative[currentQuarter-2].valueB) + sectionCumulative[sectionCumulative.length-1].valueB)) / ((infiniteCheck(sectionCumulative[currentQuarter-2].valueA) + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `;

        let printSectionLTDWWPerAmericas: string = (currentQuarter === 1) 
                ? `${(((infiniteCheck(sectionDifference[currentQuarter-1].valueC) + sectionCumulative[sectionCumulative.length-1].valueC)) / ((infiniteCheck(sectionDifference[currentQuarter-1].valueA) + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `
                : `${(((infiniteCheck(sectionCumulative[currentQuarter-2].valueC) + sectionCumulative[sectionCumulative.length-1].valueC)) / ((infiniteCheck(sectionCumulative[currentQuarter-2].valueA) + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `;

        let printSectionLTDWWPerEurope: string = (currentQuarter === 1) 
                ? `${(((infiniteCheck(sectionDifference[currentQuarter-1].valueD) + sectionCumulative[sectionCumulative.length-1].valueD)) / ((infiniteCheck(sectionDifference[currentQuarter-1].valueA) + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `
                : `${(((infiniteCheck(sectionCumulative[currentQuarter-2].valueD) + sectionCumulative[sectionCumulative.length-1].valueD)) / ((infiniteCheck(sectionCumulative[currentQuarter-2].valueA) + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `;

        let printSectionLTDWWPerOther: string = (currentQuarter === 1) 
                ? `${(((infiniteCheck(sectionDifference[currentQuarter-1].valueE) + sectionCumulative[sectionCumulative.length-1].valueE)) / ((infiniteCheck(sectionDifference[currentQuarter-1].valueA) + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `
                : `${(((infiniteCheck(sectionCumulative[currentQuarter-2].valueE) + sectionCumulative[sectionCumulative.length-1].valueE)) / ((infiniteCheck(sectionCumulative[currentQuarter-2].valueA) + sectionCumulative[sectionCumulative.length-1].valueA)) * 100 ).toFixed(2)}% `;

        let [printSectionLTDWWPerJapanFixed, printSectionLTDWWPerAmericasFixed, printSectionLTDWWPerEuropeFixed, printSectionLTDWWPerOtherFixed]: string[] = [printSectionLTDWWPerJapan, printSectionLTDWWPerAmericas, printSectionLTDWWPerEurope, printSectionLTDWWPerOther].map((value) => {                
            return (value.length >= 8)
                    ? value 
                    : " ".repeat(8 - value.length) + value;
        })


    const ltdJapan: string = (currentQuarter === 1) 
                ? `${((infiniteCheck(sectionDifference[currentQuarter-1].valueB) + sectionCumulative[sectionCumulative.length-1].valueB) / 100 ).toFixed(2)}M`
                : `${((infiniteCheck(sectionCumulative[currentQuarter-2].valueB) + sectionCumulative[sectionCumulative.length-1].valueB) / 100 ).toFixed(2)}M `;

    const ltdAmericas: string = (currentQuarter === 1) 
                ? `${((infiniteCheck(sectionDifference[currentQuarter-1].valueC) + sectionCumulative[sectionCumulative.length-1].valueC) / 100 ).toFixed(2)}M`
                : `${((infiniteCheck(sectionCumulative[currentQuarter-2].valueC) + sectionCumulative[sectionCumulative.length-1].valueC) / 100 ).toFixed(2)}M `;

    const ltdEurope: string = (currentQuarter === 1) 
                ? `${((infiniteCheck(sectionDifference[currentQuarter-1].valueD) + sectionCumulative[sectionCumulative.length-1].valueD) / 100 ).toFixed(2)}M`
                : `${((infiniteCheck(sectionCumulative[currentQuarter-2].valueD) + sectionCumulative[sectionCumulative.length-1].valueD) / 100 ).toFixed(2)}M `;

    const ltdOther: string = (currentQuarter === 1) 
                ? `${((infiniteCheck(sectionDifference[currentQuarter-1].valueE) + sectionCumulative[sectionCumulative.length-1].valueE) / 100 ).toFixed(2)}M`
                : `${((infiniteCheck(sectionCumulative[currentQuarter-2].valueE) + sectionCumulative[sectionCumulative.length-1].valueE) / 100 ).toFixed(2)}M `;

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
/* 
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
| Nintendo Switch Hardware Total             |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
|            | Units   | Global %|      YoY% |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−-−−−−−−−--+
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−-−−−−−−−--−-+
| 1st Quarter                                | 
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−-−−−−−−−−---+
| Japan      | 221.16M |  26.07% | -1132.92% |
|The Americas| 221.16M |  26.07% | -1132.92% |
| Europe     | 221.16M |  26.07% | -1132.92% |
| Other      | 221.16M |  26.07% | -1132.92% |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−-−−−−−−−--−-+
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−-−−−−−−−--−-+
| 2nd Quarter                                | 
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−-−−−−−−−−---+
| Japan      | 221.16M |  26.07% | -1132.92% |
|The Americas|
| Europe     |
| Other      |
+−−−−−−−−−−−−-−-−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
*/