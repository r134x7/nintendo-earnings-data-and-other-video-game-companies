import { printTextBlock, border, liner, spacer, headerPrint } from "./table_design_logic";

export type Titles = {
    title: string,
    platform: string,
    period: "1st Quarter" | "2nd Quarter" | "3rd Quarter" | "4th Quarter" | "Last FY Total",
    regionA: "Japan", 
    valueA: number,
    regionB: "Overseas",
    valueB: number,
    regionC: "WW FY",
    valueC: number,
    regionD: "WW LTD",
    valueD: number,
    rank?: number,
    label?: "New!" | "Recurring",
    miscellaneous?: string,
    yearsCount?: number,
    fiscalYear?: string,
}

export type Header = {
    mainHeader: "Nintendo Fiscal Year Million-Seller Titles",
    platformHeader: string, // change this to a string
    secondHeader: "Title",
    thirdHeader: "Platform and Rank"
    fourthHeader: "Units",
    fiscalYear: string,
    areaHeader: "| Area         |    Japan | Overseas |",
    globalHeader: "| Global       | Global FY|Global LTD|",
    mainSummaryHeader: string,
    secondSummaryHeader: "FY Million-Seller",
    thirdSummaryHeader: "Titles Summary"
    japanSummaryHeader: "Japan",
    overseasSummaryHeader: "Overseas",
    globalFYSummaryHeader: "Global FY",
    globalLTDSummaryHeader: "Global LTD",
}

export function decimateCalculation(numbers: Titles[]) {

   const calc: Titles[] = numbers.map((elem) => {
       return {
        ...elem, 
        valueA: Number((elem.valueA / 100).toFixed(2)),
        valueB: Number((elem.valueB / 100).toFixed(2)),
        valueC: Number((elem.valueC / 100).toFixed(2)),
        valueD: Number((elem.valueD / 100).toFixed(2)),
        }
   })

   return calc
}

export function quarterlyCalculation(quarters: Titles[]) {
       
   const calc: Titles[] = quarters.map((elem, index, array) => {
       return (elem.period !== "1st Quarter" && elem.period !== "Last FY Total")
               ? {
                ...elem, 
                valueA: Number((elem.valueA - array[index-1].valueA).toFixed(2)),
                valueB: Number((elem.valueB - array[index-1].valueB).toFixed(2)),
                valueC: Number((elem.valueC - array[index-1].valueC).toFixed(2)),
                }
               : elem
   })
   
   return calc
}

export const printTitles = (header: Header, titleDifference: Titles[], titleCumulative: Titles[], currentQuarter: number) => {
        
    const regionAB = titleDifference.filter((elem, index) => {
        return index !== 4
    }).map((elem, index, array) => {
        
        let printPlatformAndRank: string = liner(border([
            spacer(elem.platform,30,"left"),
            spacer(`Rank ${elem.rank}`,9,"left"),
        ]),"−","bottom",true)
        
        let printTitleName = liner(printTextBlock(elem.title, 42),"−","both",true,42)

        let printTitleNameFixed: string = printTitleName + printPlatformAndRank

        let printValueA: string = spacer(`${elem.valueA}M`,9,"right"); 

        let printValueB: string = spacer(`${elem.valueB}M`,9,"right"); 

        let printValueAB: string = border([
            spacer(elem.period,13,"left"),
            printValueA,
            printValueB,
        ],true)
        
        let printAreaHeader: string = liner(spacer(header.areaHeader,10,"left"),"−","bottom",true)

        let printCmlValueA: string =  spacer(`${titleCumulative[currentQuarter-1].valueA}M`,9,"right")

        let printCmlValueB: string =  spacer(`${titleCumulative[currentQuarter-1].valueB}M`,9,"right")
        
        let printFYCml: string = liner(border([
            spacer(" " + header.fiscalYear + " Cml.",13,"left"),
            printCmlValueA,
            printCmlValueB
        ]),"=","top",true); 

        let printRegionAWWPercentage: string = `${((titleCumulative[currentQuarter-1].valueA / titleCumulative[currentQuarter-1].valueC) * 100).toFixed(2)}%`

        let printRegionAWWPercentageFixed: string = spacer(printRegionAWWPercentage,9,"right");

        let printRegionBWWPercentage: string = `${((titleCumulative[currentQuarter-1].valueB / titleCumulative[currentQuarter-1].valueC) * 100).toFixed(2)}%`

        let printRegionBWWPercentageFixed: string = spacer(printRegionBWWPercentage,9,"right");

        let printRegionABWWPercentagedFixed: string = border([
            spacer("Area/WW FY %",13,"left"),
            printRegionAWWPercentageFixed,
            printRegionBWWPercentageFixed,
        ],true) 

        let printRegionAYoY: string = (titleCumulative[4].valueA === 0)
            ? `New!`
            : `${((((titleCumulative[3].valueA / titleCumulative[4].valueA) - 1) * 100) > 0) ? "+" : ""}${(((titleCumulative[3].valueA / titleCumulative[4].valueA) - 1) * 100).toFixed(2)}%` 

        let printRegionAYoYFixed: string = spacer(printRegionAYoY,9,"right");

        let printRegionBYoY: string = (titleCumulative[4].valueB === 0)
            ? `New!`
            : `${((((titleCumulative[3].valueB / titleCumulative[4].valueB) - 1) * 100) > 0) ? "+" : ""}${(((titleCumulative[3].valueB / titleCumulative[4].valueB) - 1) * 100).toFixed(2)}%` 

        let printRegionBYoYFixed: string = spacer(printRegionBYoY,9,"right");

        let printFYCmlYoY: string = border([
            spacer(" " + header.fiscalYear + " YoY%",13,"left"),
            printRegionAYoYFixed,
            printRegionBYoYFixed,
        ],true) 

        if (index === 0 && elem.valueC === 0) {
            return printTitleNameFixed + printAreaHeader 
        } else if (index !== 0 && elem.valueC === 0) {
            return [] // flatten array
        } else {
            return (currentQuarter === 1)
                    ? printTitleNameFixed + printAreaHeader + printValueAB + printFYCml + printRegionABWWPercentagedFixed 
                    : (index === 0 && currentQuarter !== 1)
                    ? printTitleNameFixed + printAreaHeader + printValueAB
                    : (index === 3)
                    ? printValueAB + printFYCml + printFYCmlYoY + printRegionABWWPercentagedFixed 
                    : (index === currentQuarter-1)
                    ? printValueAB + printFYCml + printRegionABWWPercentagedFixed
                    : printValueAB
        }
    }).flat().reduce((prev, next, index, array) => {
        return prev + next
    })

    const regionCD = titleDifference.filter((elem, index) => {
        return index !== 4
    }).map((elem, index, array) => {
        
        let printValueC: string = spacer(`${elem.valueC}M`,9,"right"); 
        
        let printValueD: string = spacer(`${elem.valueD}M`,9,"right"); 

        let printValueCD: string = border([
            spacer(elem.period,13,"left"),
            printValueC,
            printValueD,
        ],true)

        let printGlobalHeader: string = liner(spacer(header.globalHeader,10,"left"),"−","both",true);

        let printCmlValueC: string =  spacer(`${titleCumulative[currentQuarter-1].valueC}M`,9,"right");

        let printCmlValueD: string =  spacer(`${titleCumulative[currentQuarter-1].valueD}M`,9,"right");

        let printFYCml: string = liner(border([
            spacer(" " + header.fiscalYear + " Cml.",13,"left"),
            printCmlValueC,
            printCmlValueD
        ]),"=","top",true); 
        
        let printRegionCWWPercentage: string = `${((titleCumulative[currentQuarter-1].valueC / titleCumulative[currentQuarter-1].valueD) * 100).toFixed(2)}%`

        let printRegionCWWPercentageFixed: string =  spacer(printRegionCWWPercentage,9,"right");  
        
        let printRegionDWWPercentage: string = `${( 100 - ((titleCumulative[currentQuarter-1].valueC / titleCumulative[currentQuarter-1].valueD) * 100)).toFixed(2)}%`

        let printRegionDWWPercentageFixed: string = spacer(printRegionDWWPercentage,9,"right");

        let printRegionCDWWPercentagedFixed: string = border([
            spacer("WW FY/LTD %",13,"left"),
            printRegionCWWPercentageFixed,
            printRegionDWWPercentageFixed,
        ]) 
        
        let printRegionCYoY: string = (titleCumulative[4].valueC === 0)
            ? `New!`
            : `${((((titleCumulative[3].valueC / titleCumulative[4].valueC) - 1) * 100) > 0) ? "+" : ""}${(((titleCumulative[3].valueC / titleCumulative[4].valueC) - 1) * 100).toFixed(2)}%` 

        let printRegionCYoYFixed: string = spacer(printRegionCYoY,9,"right");

        let printRegionDYoY: string = (titleCumulative[4].valueD === 0)
            ? `New!`
            : `${((((titleCumulative[3].valueD / titleCumulative[4].valueD) - 1) * 100) > 0) ? "+" : ""}${(((titleCumulative[3].valueD / titleCumulative[4].valueD) - 1) * 100).toFixed(2)}%` 

        let printRegionDYoYFixed: string = spacer(printRegionDYoY,9,"right");

        let printFYCmlYoY: string = border([
            spacer(" " + header.fiscalYear + " YoY%",13,"left"),
            printRegionCYoYFixed,
            printRegionDYoYFixed,
        ],true) 
        
        if (index === 0 && elem.valueC === 0) {
            return printGlobalHeader 
        } else if (index !== 0 && elem.valueC === 0) {
            return [] // array.length 0 filtering
        } else {
            return (currentQuarter === 1)
                    ? printGlobalHeader + printValueCD + printFYCml + printRegionCDWWPercentagedFixed
                    : (index === 0 && currentQuarter !== 1)
                    ? printGlobalHeader + printValueCD 
                    : (index === 3)
                    ? printValueCD + printFYCml + printFYCmlYoY + printRegionCDWWPercentagedFixed
                    : (index === currentQuarter-1 )
                    ? printValueCD + printFYCml + printRegionCDWWPercentagedFixed
                    : printValueCD
        }
    }).flat().reduce((prev, next, index, array) => {
        return prev + next
    })

    const penultimateCheck = [regionAB, regionCD].reduce((prev, next) => prev + next)
    
    return liner(penultimateCheck,"−","bottom",true,36) + liner(printTextBlock(titleDifference[0]?.miscellaneous,36),"−","bottom",true,36)
}

export function labelTitles(titlesSorted: Titles[]) {

    const calc: Titles[] = titlesSorted.map((elem, index, array) => {
        
        return (array[4].valueC === 0)
                ? {...elem, label: "New!"}
                : {...elem, label: "Recurring"}
    })
    
    return calc
}

export const printSummaryHead = (header: Header, newCollection: Titles[], recurringCollection: Titles[]) => {

    let printNew: string = border([
        spacer("New!",12,"left"),
        spacer(`${newCollection.length}`,9,"right")
    ],true)

    let printRecurring: string = border([
        spacer("Recurring",12,"left"),
        spacer(`${recurringCollection.length}`,9,"right")
    ],true)

    let printTotal: string = liner(border([
        spacer("Total",12,"left"),
        spacer(`${newCollection.length + recurringCollection.length}`,9,"right")
    ]),"=","both")

    let printHeader: string = headerPrint([
        header.mainSummaryHeader,
        header.secondSummaryHeader,
        header.thirdSummaryHeader,
    ],23)

    let printTitles: string = liner(border([
        spacer("Titles",12,"left"),
        spacer("Count",9,"right"),
    ]),"−","both",true)

    return printHeader + "\n" + printTitles + printNew + printRecurring + printTotal
}
    
export const printSummary = (header: Header, regionNew: number[], regionRecurring: number[], ) => {

    const regionHeaders: string[] = [header.japanSummaryHeader, header.overseasSummaryHeader, header.globalFYSummaryHeader, header.globalLTDSummaryHeader]

    return regionNew.map((elem, index, array) => {

        let printRegionHeader: string = liner(border([
            spacer(regionHeaders[index],32,"left"),
        ]),"−","both",true) + liner(border([
            spacer(header.fiscalYear + " Cml.|   Units |    %    ",32,"left")
        ]),"−","bottom",true)

        let TotalUnits: number = Number((elem + regionRecurring[index]).toFixed(2)) 

        let printTotalUnits: string = liner(border([
            spacer("Total",12,"left"),
            spacer(`${(elem + regionRecurring[index]).toFixed(2)}M`,8,"right")
        ]),"−","bottom",true);
        
        let printNewUnits: string = border([
            spacer("New!",12,"left"),
            spacer(`${elem.toFixed(2)}M`,8,"right"),
            spacer(`${((elem / TotalUnits) * 100).toFixed(2)}%`,8,"right")
        ],true);
        
        let printRecurringUnits: string = liner(border([
            spacer("Recurring",12,"left"),
            spacer(`${regionRecurring[index].toFixed(2)}M`,8,"right"),
            spacer(`${((regionRecurring[index] / TotalUnits) * 100).toFixed(2)}%`,8,"right")
        ]),"=","bottom",true);

        let printRows: string = printNewUnits + printRecurringUnits + printTotalUnits

        return printRegionHeader + printRows
    }).reduce((prev, next) => prev + next)
}
