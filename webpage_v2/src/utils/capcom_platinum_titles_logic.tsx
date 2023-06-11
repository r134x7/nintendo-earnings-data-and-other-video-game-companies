import { printTextBlock, border, liner, spacer, headerPrint } from "./table_design_logic";

export type Titles = {
    title: string,
    releaseDate: string,
    platforms: string,
    period: "1st Quarter" | "2nd Quarter" | "3rd Quarter" | "4th Quarter" | "Last FY Total" | "Total at Two FYs prior",
    value: number,
    rank?: number,
    label?: "New!" | "Recurring" | "Sporadic",
    miscellaneous?: string,
    fiscalYear?: string,
}

export type Header = {
    capcomHeader: "Capcom - Platinum Titles",
    secondHeader: "Title",
    thirdHeader: "Platform",
    fourthHeader: "Release Date and Rank",
    fifthHeader: "Units",
    fiscalYear: string,
    fiscalYearYoY: string,
    ltd: "Life-To-Date",
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
       return (elem.period === "1st Quarter")
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
                ? {...elem, label: "New!"}
                : (array[3].value !== array[4].value && array[4].value !== 0 && array[4].value !== array[5].value)
                ? {...elem, label: "Recurring"}
                : (array[3].value === array[4].value)
                ? elem // titles that haven't made sales this FY
                : {...elem, label: "Sporadic"}
    })
    
    return calc
}

export const printSummaryHead = (header: Header, newTitlesLocal: number[], recurringTitlesLocal: number[], sporadicTitlesLocal: number[]) => {

    let printNew: string = border([
        spacer("New!",12,"left"),
        spacer(`${newTitlesLocal.length}`,8,"right")
    ],true);

    let printRecurring: string = border([
        spacer("Recurring",12,"left"),
        spacer(`${recurringTitlesLocal.length}`,8,"right")
    ],true);
 
    let printSporadic: string = border([
        spacer("Sporadic",12,"left"),
        spacer(`${sporadicTitlesLocal.length}`,8,"right")
    ],true);
 
    let printTotal: string = liner(border([
        spacer("Total",12,"left"),
        spacer(`${newTitlesLocal.length + recurringTitlesLocal.length + sporadicTitlesLocal.length}`,8,"right")
    ]),"=","both");

    let printHeader: string =  headerPrint([header.capcomHeader],28) + "\n"

    let printTitles: string = liner("| FY Titles   |   Count |","−","both",true); 

    return printHeader + printTitles + printNew + printRecurring + printSporadic + printTotal
}
 
export const printSummary = (header: Header, newSumLocal: number, recurringSumLocal: number, sporadicSumLocal: number) => {

        let printSummaryHeader: string = liner(border([header.summaryHeader]),"−","both",true) 

        let TotalUnits: number = Number((newSumLocal + recurringSumLocal + sporadicSumLocal).toFixed(2)) 

        let printTotalUnits: string = `${(newSumLocal + recurringSumLocal + sporadicSumLocal).toFixed(2)}M`

        let printTotalUnitsFixed: string = liner(border([
            spacer("Total",12,"left"),
            spacer(printTotalUnits,8,"right")
        ]),"=","bottom",true);
        
        let printNewUnits: string = `${newSumLocal.toFixed(2)}M`;

        let printNewPercentages: string = `${((newSumLocal / TotalUnits) * 100).toFixed(2)}%`

        let printNewUnitsFixed: string = border([
            spacer("New!",12,"left"),
            spacer(printNewUnits,8,"right"),
            spacer(printNewPercentages,8,"right"),
        ],true);

        let printRecurringUnits: string = `${recurringSumLocal.toFixed(2)}M`
        
        let printRecurringPercentages: string = `${((recurringSumLocal / TotalUnits) * 100).toFixed(2)}%`

        let printRecurringUnitsFixed: string = border([
            spacer("Recurring",12,"left"),
            spacer(printRecurringUnits,8,"right"),
            spacer(printRecurringPercentages,8,"right"),
        ],true);

        let printSporadicUnits: string = `${sporadicSumLocal.toFixed(2)}M`;

        let printSporadicPercentages: string = `${((sporadicSumLocal / TotalUnits) * 100).toFixed(2)}%`;

        let printSporadicUnitsFixed: string = liner(border([
            spacer("Sporadic",12,"left"),
            spacer(printSporadicUnits,8,"right"),
            spacer(printSporadicPercentages,8,"right"),
        ]),"=","bottom",true);

        return printSummaryHeader + printNewUnitsFixed + printRecurringUnitsFixed + printSporadicUnitsFixed + printTotalUnitsFixed 
}

export const printTitles = (header: Header, titleDifference: Titles[], titleCumulative: Titles[], currentQuarter: number, returnObject?: boolean) => {

    const titleHeader = titleDifference.filter((elem, index, array) => {
       return (elem.fiscalYear === undefined) ? index === 0 : array[index] === array[array.length-1] 
    }).map((elem, index, array) => {

        let printTitleName: string = liner(printTextBlock(elem.title, 34),"−","both",true,34);

        let printPlatforms: string = liner(printTextBlock(elem.platforms, 34),"−","bottom",true,34);

        let printReleaseDateAndRank: string = liner(border([
            spacer(elem.releaseDate,20,"left"),
            spacer(`Rank ${elem.rank}`,11,"left"),
        ]),"−","bottom",true)

        let printTitleNameFixed: string = printTitleName + printPlatforms + printReleaseDateAndRank

        return printTitleNameFixed
    })

    const quartersPrint = titleDifference.filter((elem, index) => {
        return index < currentQuarter && elem.value !== 0
    }).map((elem, index) => {
        return border([
            spacer((elem.fiscalYear === undefined) ? elem.period : elem.fiscalYear + " Cumulative",20,"left"),
            spacer(`${elem.value}M`,11,"right"),
        ],true)
    });

    const printLTD = [""].map((elem, index, array) => {

       let printValue: string = (titleCumulative[0].fiscalYear === undefined) 
        ? `${titleCumulative[currentQuarter-1].value}M` 
        : `${titleCumulative[titleCumulative.length-1].value}M` 
       
        return liner(border([
            spacer(header.ltd,20,"left"),
            spacer(printValue,11,"right"),
        ]),(titleCumulative[0].fiscalYear === undefined) ? "−" : "=",(titleCumulative[0].fiscalYear === undefined) ? "bottom" : "both",true) 
    });

    const FYCmlFigure = titleDifference.filter((elem, index) => {
        return index < currentQuarter
    }).map((elem, index) => elem.value).reduce((prev, next) => prev + next)

    const printFYCml = [FYCmlFigure].filter(elem => elem !== 0).map((elem) => {

        let reducedFixed = Number(elem.toFixed(2))

        let reducedValue: string = `${reducedFixed}M`

        return (titleDifference[0].fiscalYear === undefined)
            ? liner(border([
                spacer(header.fiscalYear + " Cumulative",20,"left"),
                spacer(reducedValue,11,"right")
            ]),"=","top",true)
            : []
    }).flat() // was returning [][] making it not the same like the others when filtering to remove from the print with the new special data

    const printFYCmlYoY = (titleCumulative[0].fiscalYear !== undefined) 
    ? "NaN"
    : (currentQuarter === 4 && titleCumulative[4].value === 0)
        ? "New!"
        : (currentQuarter === 4 && (titleCumulative[3].value - titleCumulative[4].value) > (titleCumulative[4].value - titleCumulative[5].value))
            ? `+${((
                ((titleCumulative[3].value - titleCumulative[4].value) / (titleCumulative[4].value - titleCumulative[5].value)) - 1) * 100).toFixed(2)}%` 
            : (currentQuarter === 4 && (titleCumulative[3].value - titleCumulative[4].value) < (titleCumulative[4].value - titleCumulative[5].value))
                ? `${((
                    ((titleCumulative[3].value - titleCumulative[4].value) / (titleCumulative[4].value - titleCumulative[5].value)) - 1) * 100).toFixed(2)}%` 
                : "NaN" 
    
    const printFYCmlYoYFixed: string | never[] = (printFYCmlYoY === "NaN")
            ? []
            : border([
                spacer(header.fiscalYearYoY,20,"left"),
                spacer(printFYCmlYoY,11,"right"),
            ],true) 

    let checker = (titleDifference[0].fiscalYear === undefined) ? 0 : titleDifference.length-1

    let printMiscellaneous: string = liner(printTextBlock(titleDifference[checker]?.miscellaneous,34),"−","bottom",true,34)

    const lastCheck = [
        titleHeader,
        ...quartersPrint,
        printFYCml,
        printFYCmlYoYFixed,
        printLTD,
        printMiscellaneous,
    ].flat().reduce((prev, next) => {
        return prev + next
     })

    return (!returnObject) 
        ? lastCheck
        : { 
            title: titleDifference?.at(-1)?.title ?? "ERROR",
            platforms: titleDifference?.at(-1)?.platforms ?? "ERROR",
            table: lastCheck
          }
};

export function newTitleHighlight(header: Header, titleDifference: Titles[], titleCumulative: Titles[], currentQuarter: number, returnObject?: boolean) {
    
    /*
    How I want this to work...

    title | release date | platforms | ltd | New title for that fiscal year...
    */


    // const filterNew = titleCumulative.filter(elem => elem.label === "New!")
    // console.log(filterNew);
    console.log(titleCumulative);
    
}