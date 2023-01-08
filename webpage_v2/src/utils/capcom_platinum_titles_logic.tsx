import { printTextBlock, border, liner, spacer } from "./table_design_logic";

export type Titles = {
    title: string,
    releaseDate: string,
    platforms: string,
    period: " 1st Quarter  " | " 2nd Quarter  " | " 3rd Quarter  " | " 4th Quarter  " | " Last FY Total " | " Total at Two FYs prior ",
    value: number,
    rank?: number,
    label?: " New! " | " Recurring " | " Sporadic ",
    miscellaneous?: string,
    fiscalYear?: string,
}

export type Header = {
    capcomHeader: "| Capcom - Platinum Titles       |",
    secondHeader: "| Title                          |",
    thirdHeader: "| Platform                       |",
    fourthHeader: "| Release Date and Rank          |",
    fifthHeader: "| Units                          |",
    fiscalYear: string,
    fiscalYearYoY: string,
    ltd: "| Life-To-Date       |",
    summaryHeader: string,
}

export function yearlyCalculation(years: Titles[]) {

   const calc: Titles[] = years.map((elem, index, array) => {
       return (index !== 0)
               ? {
                ...elem,
                value: Number((elem.value - array[index-1].value).toFixed(2))
               }
               : elem 
   })

   return calc
};

export function quarterlyCalculation(quarters: Titles[]) {
       
   const calc: Titles[] = quarters.map((elem, index, array) => {
       return (elem.period === " 1st Quarter  ")
               ? {
                ...elem, 
                value: Number((elem.value - array[4].value).toFixed(2))
               } // to subtract from the LTD figure last FY
               : (index < 4)
               ? {
                ...elem, 
                value: Number((elem.value - array[index-1].value).toFixed(2))
               }
               : elem // last fy Total and two Fys prior should be untouched
   })
   
   return calc
}

export function labelTitles(titlesSorted: Titles[]) {

    const calc: Titles[] = titlesSorted.map((elem, index, array) => {
        // need to check cumulative figure, if the cumulative figure doesn't match the Last FY Total 
        return (array[4].value === 0 && array[5].value === 0) 
                ? {...elem, label: " New! "}
                : (array[3].value !== array[4].value && array[4].value !== 0 && array[4].value !== array[5].value)
                ? {...elem, label: " Recurring "}
                : (array[3].value === array[4].value)
                ? elem // titles that haven't made sales this FY
                : {...elem, label: " Sporadic "}
    })
    
    return calc
}

export const printSummaryHead = (header: Header, newTitlesLocal: number[], recurringTitlesLocal: number[], sporadicTitlesLocal: number[]) => {

    let printNew: string = `${newTitlesLocal.length} `
    let printNewFixed: string = (printNew.length >= 9)
        ? printNew
        : " ".repeat(9 - printNew.length) + printNew;

    let printRecurring: string = `${recurringTitlesLocal.length} `
    let printRecurringFixed: string = (printRecurring.length >= 9)
        ? printRecurring
        : " ".repeat(9 - printRecurring.length) + printRecurring;

    let printSporadic: string = `${sporadicTitlesLocal.length} `
    let printSporadicFixed: string = (printSporadic.length >= 9)
        ? printSporadic
        : " ".repeat(9 - printSporadic.length) + printSporadic;

    let printTotal: string = `${newTitlesLocal.length + recurringTitlesLocal.length + sporadicTitlesLocal.length} `
    let printTotalFixed: string = (printTotal.length >= 9)
    ? printTotal
    : " ".repeat(9 - printTotal.length) + printTotal;

    let printHeader: string = "+"+"-".repeat(32)+"+\n" + header.capcomHeader

    let printTitles: string = "\n+"+"-".repeat(32)+"+\n| FY Titles   |   Count |\n+" + "-".repeat(23)+"+" 

    let printNewRow: string = "\n| New!        |" + printNewFixed + "|";

    let printRecurringRow: string = "\n| Recurring   |" + printRecurringFixed + "|";

    let printSporadicRow: string = "\n| Sporadic    |" + printSporadicFixed + "|";

    let printTotalRow: string = "\n+"+"=".repeat(23) + "+\n| Total       |" + printTotalFixed + "|\n+"+"-".repeat(23) + "+"

    return printHeader + printTitles + printNewRow + printRecurringRow + printSporadicRow + printTotalRow
}
 
export const printSummary = (header: Header, newSumLocal: number, recurringSumLocal: number, sporadicSumLocal: number) => {

        let printSummaryHeader: string = "\n+"+"-".repeat(33)+"+\n" + header.summaryHeader + "\n+" + "-".repeat(33) + "+\n"

        let TotalUnits: number = Number((newSumLocal + recurringSumLocal + sporadicSumLocal).toFixed(2)) 

        let printTotalUnits: string = `${(newSumLocal + recurringSumLocal + sporadicSumLocal).toFixed(2)}M `
        let printTotalUnitsFixed: string = (printTotalUnits.length >= 9)
            ? printTotalUnits
            : " ".repeat(9 - printTotalUnits.length) + printTotalUnits;
        
        let printNewUnits: string = `${newSumLocal.toFixed(2)}M `
        let printNewUnitsFixed: string = (printNewUnits.length >= 9)
                ? printNewUnits
                : " ".repeat(9 - printNewUnits.length) + printNewUnits;

        let printNewPercentages: string = `${((newSumLocal / TotalUnits) * 100).toFixed(2)}% `
        let printNewPercentagesFixed: string = (printNewPercentages.length >= 9)
            ? printNewPercentages
            : " ".repeat(9 - printNewPercentages.length) + printNewPercentages;

        let printRecurringUnits: string = `${recurringSumLocal.toFixed(2)}M `
        let printRecurringUnitsFixed: string = (printRecurringUnits.length >= 9)
            ? printRecurringUnits
            : " ".repeat(9 - printRecurringUnits.length) + printRecurringUnits;
        
        let printRecurringPercentages: string = `${((recurringSumLocal / TotalUnits) * 100).toFixed(2)}% `
        let printRecurringPercentagesFixed: string = (printRecurringPercentages.length >= 9)
            ? printRecurringPercentages
            : " ".repeat(9 - printRecurringPercentages.length) + printRecurringPercentages;

        let printSporadicUnits: string = `${sporadicSumLocal.toFixed(2)}M `;

        let printSporadicUnitsFixed: string = (printSporadicUnits.length >= 9)
            ? printSporadicUnits
            : " ".repeat(9 - printSporadicUnits.length) + printSporadicUnits;
        
        let printSporadicPercentages: string = `${((sporadicSumLocal / TotalUnits) * 100).toFixed(2)}% `
        let printSporadicPercentagesFixed: string = (printSporadicPercentages.length >= 9)
            ? printSporadicPercentages
            : " ".repeat(9 - printSporadicPercentages.length) + printSporadicPercentages;

        let printRows: string = "| New!        |" + printNewUnitsFixed + "|" + printNewPercentagesFixed + "|\n| Recurring   |" + printRecurringUnitsFixed + "|" + printRecurringPercentagesFixed + "|\n| Sporadic    |" + printSporadicUnitsFixed + "|" + printSporadicPercentagesFixed + "|\n+" + "=".repeat(33) + "+\n| Total       |" + printTotalUnitsFixed + "|\n+" + "-".repeat(23) + "+\n" 

        return printSummaryHeader + printRows

}

export const printHead = (header: Header) => 
`+${"-".repeat(32)}+
${header.capcomHeader}
+${"-".repeat(32)}+
${header.secondHeader}
+${"-".repeat(32)}+
${header.thirdHeader}
+${"-".repeat(32)}+
${header.fourthHeader}
+${"-".repeat(32)}+
${header.fifthHeader}
+${"-".repeat(32)}+`;

export const printTitles = (header: Header, titleDifference: Titles[], titleCumulative: Titles[], currentQuarter: number) => {

    const titleHeader = titleDifference.filter((elem, index, array) => {
       return (elem.fiscalYear === undefined) ? index === 0 : array[index] === array[array.length-1] 
    }).map((elem, index, array) => {

        let printRank: string = ` Rank ${elem.rank} `
        let printRankFixed: string = (printRank.length >= 11)
                ? printRank
                : printRank + " ".repeat(11 - printRank.length);

        let printTitleName: string | never[] = printTextBlock(elem.title)(32)
        // let printTitleName: string = (elem.title.length > 32)
        // ? elem.title.split(" ").reduce((prev, next, index, array) => {

        //     let nextCheck = prev + next + " ";
            
        //     if (nextCheck.length > 31 && prev.length <= 31) {
        //         return prev + " ".repeat(32 - prev.length) + `|\n| ` + next
        //     } else if (index === array.length-1) {
        //         return prev + next + " ".repeat(67 - prev.length)
        //     } else {
        //         return prev + " " + next
        //     }
        // })
        // : (elem.title.length < 32)
        // ? elem.title + " ".repeat(32 - elem.title.length) 
        // : elem.title

        let printPlatforms: string | never[] = printTextBlock(elem.platforms)(32)
        // let printPlatforms: string = (elem.platforms.length > 32)
        // ? elem.platforms.split(" ").reduce((prev, next, index, array) => {

        //     let nextCheck = prev + next + " ";
            
        //     if (nextCheck.length > 31 && prev.length <= 31) {
        //         return prev + " ".repeat(32 - prev.length) + `|\n| ` + next
        //     } else if (index === array.length-1) {
        //         return prev + next + " ".repeat(67 - prev.length)
        //     } else {
        //         return prev + " " + next
        //     }
        // })
        // : (elem.platforms.length+2 < 32) // had to change length to account for the spaces on both ends due to composition of string from json
        // ? " " + elem.platforms + " " + " ".repeat(32 - elem.platforms.length-2) 
        // : " " + elem.platforms + " ".repeat(32 - elem.platforms.length+1);

        let printReleaseDate: string = " " + elem.releaseDate;
        let printReleaseDateFixed: string = (printReleaseDate.length >= 20)
                ? printReleaseDate
                : printReleaseDate + " ".repeat(20 - printReleaseDate.length);


        let printTitleNameFixed: string = "+"+"-".repeat(32)+"+\n" + printTitleName + "\n+" + "-".repeat(32) + "+\n" + printPlatforms + "\n+" + "-".repeat(32) + "+\n|" + printReleaseDateFixed + "|" + printRankFixed + "|"

        return printTitleNameFixed
        
    })

    const quartersPrint = titleDifference.filter((elem, index) => {
        return index < currentQuarter && elem.value !== 0
    }).map((elem, index) => {

        let printValue: string = `${elem.value}M ` 
        let printValueFixed: string = (printValue.length >= 11)
            ? printValue
            : " ".repeat(11 - printValue.length) + printValue;

        let printPeriodFixed: string = (elem.fiscalYear === undefined) 
                ? "|" + elem.period + " ".repeat(6) + "|"
                : elem.fiscalYear

        return  printPeriodFixed + printValueFixed + "|"
    });

    const printLTD = [""].map((elem, index, array) => {

       let printValue: string = (titleCumulative[0].fiscalYear === undefined) ? `${titleCumulative[currentQuarter-1].value}M ` : `${titleCumulative[titleCumulative.length-1].value}M ` 
       
       let printValueFixed: string = (printValue.length >= 11)
            ? printValue
            : " ".repeat(11 - printValue.length) + printValue;

        let printLine: string = "|\n+" + "-".repeat(32) + "+";

        return header.ltd + printValueFixed + printLine
    });

    const FYCmlFigure = titleDifference.filter((elem, index) => {
        return index < currentQuarter
    }).map((elem, index) => elem.value).reduce((prev, next) => prev + next)

    const printFYCml = [FYCmlFigure].filter(elem => elem !== 0).map((elem) => {

        let reducedFixed = Number(elem.toFixed(2))

        let reducedValue: string = `${reducedFixed}M `
        let reducedValueFixed: string = (reducedValue.length >= 11)
            ? reducedValue
            : " ".repeat(11 - reducedValue.length) + reducedValue; 

        return (titleDifference[0].fiscalYear === undefined)
            ? header.fiscalYear + reducedValueFixed + "|"
            : []
    }).flat() // was returning [][] making it not the same like the others when filtering to remove from the print with the new special data

    const printFYCmlYoY = (titleCumulative[0].fiscalYear !== undefined) 
    ? "NaN"
    : (currentQuarter === 4 && titleCumulative[4].value === 0)
        ? " New! "
        : (currentQuarter === 4 && (titleCumulative[3].value - titleCumulative[4].value) > (titleCumulative[4].value - titleCumulative[5].value))
            ? `+${((
                ((titleCumulative[3].value - titleCumulative[4].value) / (titleCumulative[4].value - titleCumulative[5].value)) - 1) * 100).toFixed(2)}% ` 
            : (currentQuarter === 4 && (titleCumulative[3].value - titleCumulative[4].value) < (titleCumulative[4].value - titleCumulative[5].value))
                ? `${((
                    ((titleCumulative[3].value - titleCumulative[4].value) / (titleCumulative[4].value - titleCumulative[5].value)) - 1) * 100).toFixed(2)}% ` 
                : "NaN" 
    
    const printFYCmlYoYFixed: string | never[] = (printFYCmlYoY === "NaN")
            ? []
            : (printFYCmlYoY.length >= 11 
                ? header.fiscalYearYoY + printFYCmlYoY + "|"
                : header.fiscalYearYoY + " ".repeat(11 - printFYCmlYoY.length) + printFYCmlYoY + "|"
                )

    let printLine: string | never[] = (quartersPrint.length === 0) 
            ? [] 
            : "+" + "-".repeat(32) + "+";
    let printDoubleLine: string = "+" + "=".repeat(32) + "+";

    let checker = (titleDifference[0].fiscalYear === undefined) ? 0 : titleDifference.length-1

    let printMiscellaneous: string | never[] = (titleDifference[checker].miscellaneous)
                ? titleDifference[checker].miscellaneous as string
                : []

    const lastCheck = [
        titleHeader,
        printLine, 
        ...quartersPrint,
        printDoubleLine,
        printFYCml,
        printFYCmlYoYFixed,
        printLTD,
        printMiscellaneous,
    ].filter(elem => elem.length !== 0)
     .reduce((prev, next) => {
        return prev + "\n" + next
     })

    return lastCheck
};
