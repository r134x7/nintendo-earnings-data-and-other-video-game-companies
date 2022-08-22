export type Titles = {
    title: string,
    period: string,
    value: number,
    rank?: number,
}

export type Header = {
    switchHeader: string,
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
        
    return titleDifference.filter((elem, index) => {
        return index < currentQuarter && elem.value !== 0
    }).map((elem, index) => {

        let printRank: string = ` Rank ${elem.rank} `
        let printRankFixed: string = (printRank.length >= 10)
                ? printRank
                : " ".repeat(10 - printRank.length) + printRank;

        let printTitleName: string = (elem.title.length > 31)
        ? elem.title.split("").reduce((prev, next, index, array) => {

            if (prev.length === 31 && next === " ") {
                return prev + ` |          |\n|` + next
            } else if (index === elem.title.length-1) {
                return prev + next + " ".repeat(63 - elem.title.length)
            } else {
                return prev + next
            }
        })
        : (elem.title.length < 31)
        ? elem.title + " ".repeat(32 - elem.title.length) 
        : elem.title

        let printTitleNameFixed: string = "|" + printTitleName + "|" + printRankFixed + "|\n+"+"-".repeat(43)+"+"

        let printValue: string = `${elem.value}M ` 
        // let printValue: string = (elem.value !== 0) 
        //     ? `${elem.value}M `
        //     : ` N/A `
        let printValueFixed: string = (printValue.length >= 10)
            ? printValue
            : " ".repeat(10 - printValue.length) + printValue;

        return (index === 0) 
                ? printTitleNameFixed + "\n|" + elem.period + "|" + printValueFixed + "|" 
                : "|" + elem.period + "|" + printValueFixed + "|"
    }).reduce((prev, next, index, array) => {
        return prev + "\n" + next
    })
}

const printTitleLTD = (titleLTD: Titles[], currentQuarter: number) => {

    let printValue: string = `${titleLTD[currentQuarter-1].value}M `
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

    let reducedValue: string = `${reducedFixed}M `
    let reducedValueFixed: string = (reducedValue.length >= 10)
        ? reducedValue
        : " ".repeat(10 - reducedValue.length) + reducedValue; 

    return currentFY.fiscalYear + reducedValueFixed + "|"
}

export const printHead = (header: Header) =>
`+${"-".repeat(32)}+
${header.switchHeader}
+${"-".repeat(32)}+
+${"-".repeat(32)}+
${header.units}
+${"-".repeat(32)}+`;

export const printBody = (quarter: Titles[], FYCml: Titles[], LTD: Titles[], currentFY: Header, currentQuarter: number) => 
`+${"-".repeat(43)}+
${printTitles(quarter, currentQuarter)}
+${"=".repeat(32)}+
${printTitleFYCml(FYCml, currentFY, currentQuarter)}
${printTitleLTD(LTD, currentQuarter)}
+${"-".repeat(32)}+`;
