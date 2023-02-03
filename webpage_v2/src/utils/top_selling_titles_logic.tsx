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

    let printPlatformAndRank: string = liner(border([
        spacer(titleDifference[0].platform,31,"left"),
        spacer(`Rank ${titleDifference[0].rank}`,9,"left")
    ]),"−","bottom",true);

    let printTitleName = liner(printTextBlock(titleDifference[0].title, 43),"−","both",true,43);

    let printTitleNameFixed: string = printTitleName + printPlatformAndRank 
        
    let titleValues = titleDifference.filter((elem, index) => {
        return index < currentQuarter && elem.value !== 0
    }).map((elem, index, array) => {
        return border([
            spacer(elem.period,20,"left"),
            spacer(`${elem.value}M`,9,"right")
        ],(index === array.length-1) ? undefined : true) 
    })

    let valueCheck = (titleValues.length === 0)
            ? [printTitleNameFixed]
            : [printTitleNameFixed, ...titleValues]

    return valueCheck.reduce((prev, next, index, array) => {
        return prev + next
    })
}

const printTitleLTD = (titleLTD: Titles[], currentQuarter: number) => {
    return border([
        spacer("Life-To-Date",20,"left"),
        spacer(`${titleLTD[currentQuarter-1].value}M`,9,"right")
    ]) 
}

const printTitleFYCml = (titleDifference: Titles[], currentFY: Header, currentQuarter: number) => {

    let reduced = titleDifference.filter((elem, index) => {
        return index < currentQuarter
    }).map((elem, index) => elem.value).reduce((prev, next) => prev + next)

    let reducedFixed = Number(reduced.toFixed(2))

    return border([
        spacer(currentFY.fiscalYear + " Cumulative",20,"left"),
        spacer(`${reducedFixed}M`,9,"right"),
    ],true) 
}

const miscellaneous = (titleDifference: Titles[]) => {
    return liner(printTextBlock(titleDifference[0]?.miscellaneous,32),"−","bottom",true,32) 
}

export const printBody = (quarter: Titles[], FYCml: Titles[], LTD: Titles[], currentFY: Header, currentQuarter: number) => {
    return printTitles(quarter, currentQuarter) + "\n" + liner(printTitleFYCml(FYCml, currentFY, currentQuarter) + printTitleLTD(LTD, currentQuarter),"=","both",true,32) + miscellaneous(quarter);
};
