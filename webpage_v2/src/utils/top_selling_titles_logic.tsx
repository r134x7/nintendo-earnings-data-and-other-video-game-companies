import { printTextBlock, border, liner, spacer } from "./table_design_logic";

export type Titles = {
    title: string,
    platform: string,
    period: string,
    value: number,
    rank?: number,
    miscellaneous?: string,
    fiscalYear?: string,
}

export type Header = {
    mainHeader: string,
    platformHeader: string
    titles: string,
    platform: string,
    units: string,
    fiscalYear: string,
}

export function quarterlyCalculation(quarters: Titles[]) {
       
   const calc: Titles[] = quarters.map((elem, index, array) => {
       return (index === 0) 
               ? {...elem, value: Number((elem.value - array[4].value).toFixed(2))
               } // to subtract from the LTD figure last FY
               : (index !== 4 && index !== 0)
               ? {...elem, value: Number((elem.value - array[index-1].value).toFixed(2))}
               : elem // no changes to LTD figure last FY
   })
   
   return calc
}

const printTitles = (titleDifference: Titles[], currentQuarter: number) => {

    let printRank: string = ` Rank ${titleDifference[0].rank} `
    let printRankFixed: string = (printRank.length >= 10)
            ? printRank
            : " ".repeat(10 - printRank.length) + printRank;

    let printPlatformFixed: string = (titleDifference[0].platform.length >= 32)
            ? titleDifference[0].platform
            : " " + titleDifference[0].platform + " ".repeat(31 - titleDifference[0].platform.length)

    let printTitleName = printTextBlock(titleDifference[0].title, 43)

    let printTitleNameFixed: string = printTitleName + "\n+" +"−".repeat(43)+"+" + "\n|" + printPlatformFixed + "|" + printRankFixed + "|\n+"+"−".repeat(43)+"+"
    
        
    let titleValues = titleDifference.filter((elem, index) => {
        return index < currentQuarter && elem.value !== 0
    }).map((elem, index) => {

        // let printRank: string = ` Rank ${elem.rank} `
        // let printRankFixed: string = (printRank.length >= 10)
        //         ? printRank
        //         : " ".repeat(10 - printRank.length) + printRank;

        // let printPlatformFixed: string = (elem.platform.length >= 32)
        //         ? elem.platform
        //         : " " + elem.platform + " ".repeat(31 - elem.platform.length)

        // let printTitleName: string = (elem.title.length > 32)
        // ? elem.title.split(" ").reduce((prev, next, index, array) => {

        //     let nextCheck = prev + next + " ";
            
        //     if (nextCheck.length > 31 && prev.length <= 31) {
        //         return prev + " ".repeat(32 - prev.length) + `|          |\n| ` + next
        //     } else if (index === array.length-1) {
        //         return prev + next + " ".repeat(78 - prev.length)
        //     } else {
        //         return prev + " " + next
        //     }
        // })
        // : (elem.title.length < 32)
        // ? elem.title + " ".repeat(32 - elem.title.length) 
        // : elem.title
        // let printTitleName = printTextBlock(elem.title)(43)

        // let printTitleNameFixed: string = printTitleName + "\n+" +"−".repeat(43)+"+" + "\n|" + printPlatformFixed + "|" + printRankFixed + "|\n+"+"−".repeat(43)+"+"

        let printValue: string = `${elem.value}M` 
        // let printValue: string = (elem.value !== 0) 
        //     ? `${elem.value}M`
        //     : ` N/A `
        let printValueFixed: string = (printValue.length >= 10)
            ? printValue
            : " ".repeat(10 - printValue.length) + printValue;

        return "|" + elem.period + "|" + printValueFixed + "|"
        // return (index === 0) 
        //         ? printTitleNameFixed + "\n|" + elem.period + "|" + printValueFixed + "|" 
        //         : "|" + elem.period + "|" + printValueFixed + "|"
    })

    let valueCheck = (titleValues.length === 0)
            ? [ printTitleNameFixed ]
            : [ printTitleNameFixed, ...titleValues]

    return valueCheck.reduce((prev, next, index, array) => {
        return prev + "\n" + next
    })
}

const printTitleLTD = (titleLTD: Titles[], currentQuarter: number) => {

    let printValue: string = `${titleLTD[currentQuarter-1].value}M`
    let printValueFixed: string = (printValue.length === 10)
            ? printValue
            : " ".repeat(10 - printValue.length) + printValue;

        return "| Life-To-Date        |" + printValueFixed + "|"

}

const printTitleFYCml = (titleDifference: Titles[], currentFY: Header, currentQuarter: number) => {

    let reduced = titleDifference.filter((elem, index) => {
        return index < currentQuarter
    }).map((elem, index) => elem.value).reduce((prev, next) => prev + next)

    let reducedFixed = Number(reduced.toFixed(2))

    let reducedValue: string = `${reducedFixed}M`
    let reducedValueFixed: string = (reducedValue.length >= 10)
        ? reducedValue
        : " ".repeat(10 - reducedValue.length) + reducedValue; 

    return "| " + currentFY.fiscalYear + " Cumulative |" + reducedValueFixed + "|"
}

const miscellaneousLine = (titleDifference: Titles[]) => {
    
    let miscellaneousCheck: string | undefined = titleDifference[0].miscellaneous;

    let lastLine: string = "+" + "−".repeat(32) + "+"; 

    return (miscellaneousCheck === undefined)
            ? lastLine 
            : lastLine + "\n" + miscellaneousCheck + "\n" + lastLine;
}

export const printHead = (header: Header) =>
`+${"−".repeat(32)}+
${header.mainHeader}
+${"−".repeat(32)}+
${header.platformHeader}
+${"−".repeat(32)}+
+${"−".repeat(32)}+
${header.titles}
+${"−".repeat(32)}+
${header.platform}
+${"−".repeat(32)}+
${header.units}
+${"−".repeat(32)}+`;

export const printBody = (quarter: Titles[], FYCml: Titles[], LTD: Titles[], currentFY: Header, currentQuarter: number) => 
`+${"−".repeat(43)}+
${printTitles(quarter, currentQuarter)}
+${"=".repeat(32)}+
${printTitleFYCml(FYCml, currentFY, currentQuarter)}
${printTitleLTD(LTD, currentQuarter)}
${miscellaneousLine(quarter)}`;
