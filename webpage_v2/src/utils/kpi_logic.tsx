import { liner, border, spacer, printTextBlock } from "./table_design_logic"

import { type EarningsValue, type EarningsV2 } from "./general_earnings_logic";

export type KPDIndicators = {
    name: string,
    category: "quarterly" | "cumulative", 
    units: "percentage" | "currency" | "NaN",
    quarter: string,
    value: number,
    miscellaneous?: string,
    footnote?: string,
}

export type Header = {
    companyName: string,
    section: string,
    fiscalYear: string,
    title: string,
}

export type Footer = {
   section: string,
};

export function quarterlyCalculation(quarters: KPDIndicators[]) {
        
    const calc: KPDIndicators[] = quarters.map((elem, index, array) => {
        return (index === 0) // 1st Quarter 
                ? elem
                : {...elem, value: elem.value - array[index-1].value}
    })
    
    return calc
}

export function yearOnYearCalculation(thisFY: KPDIndicators[], lastFY: KPDIndicators[]) {

        const calc: KPDIndicators[] = thisFY.map((elem, index) => {

            return (lastFY[index].value < 0)
                    ? {...elem, units: "percentage", value: Number(
                        ((((elem.value / lastFY[index].value) -1)* -1) * 100).toFixed(2)
                        )
                      }
                    : (lastFY[index].value === 0)
                    ? {...elem, units: "NaN", value: 0}
                    : {...elem, units: "percentage", value: Number(
                        (((elem.value / lastFY[index].value) -1) * 100).toFixed(2)
                        )
                      };
        })

       return calc
    }

const printNewSections = (proportionDifference: KPDIndicators[], sectionDifference: KPDIndicators[], yearOnYearValues: KPDIndicators[], currentQuarter: number): string => {

    let yoyPrint = yearOnYearValues.filter((elem, index) => { 
            return (elem.category === "quarterly")
                ? index < currentQuarter
                : currentQuarter >= 2 && index < currentQuarter -1         
    }).map((elem, index) => {

        if (elem.category === "quarterly") {
            
            let printSection: string = (elem.units === "NaN")
                    ? "N/A"
                    : (elem.value > 0)
                        ? `+${elem.value}%`
                        : `${elem.value}%`; 

            let printSectionFixed: string = spacer(printSection,9,"right") 

            let objectReturn: {period: string, value: string} = {
                period: elem.quarter,
                value: printSectionFixed,
            }

            return objectReturn
        } else {

            let printSectionCml: string = (elem.units === "NaN")
                    ? "N/A"
                    : (elem.value > 0)
                        ? `+${elem.value}%`
                        : `${elem.value}%`; 
    
            let printSectionCmlFixed: string = spacer(printSectionCml,9,"right")

            let objectReturn = {
                period: elem.quarter,
                value: printSectionCmlFixed
            }

            return objectReturn
        }
    })

    let salesPrint = sectionDifference.filter((elem, index) => { 
            return (elem.category === "quarterly")
                ? index < currentQuarter
                : currentQuarter >= 2 && index < currentQuarter -1         
    }).map((elem, index) => {

        if (elem.category === "quarterly") {
            // need to change any billions to millions
            
            let printSection: string = (elem.units === "currency") 
                ? `¥${elem.value.toLocaleString("en")}M`
                : `${elem.value}%`; 

            let printSectionFixed: string = spacer(printSection,12,"right");

            let objectReturn: {period: string, value: string} = {
                period: elem.quarter,
                value: printSectionFixed,
            }

            return objectReturn
        } else {

            let printSectionCml: string = (elem.units === "currency") 
                ? `¥${elem.value.toLocaleString("en")}M`
                : `${elem.value}%`; 
    
            let printSectionCmlFixed: string = spacer(printSectionCml,12,"right"); 

            let objectReturn = {
                period: elem.quarter,
                value: printSectionCmlFixed
            }

            return objectReturn
        }
    })

    let proportionPrint = proportionDifference.filter((elem, index) => { 
            return (elem.category === "quarterly")
                ? index < currentQuarter
                : currentQuarter >= 2 && index < currentQuarter -1         
    }).map((elem, index) => {

        if (elem.category === "quarterly") {
            
            let printSection: string = (elem.units === "currency") 
                ? `¥${elem.value}B`
                : `${elem.value}%`; 

            let printSectionFixed: string = spacer(printSection,8,"right");
            
            let objectReturn: {period: string, value: string} = {
                period: elem.quarter,
                value: printSectionFixed
            }

            return objectReturn
        } else {

            let printSectionCml: string = (elem.units === "currency") 
                ? `¥${elem.value}B`
                : `${elem.value}%`; 
    
            let printSectionCmlFixed: string = spacer(printSectionCml,8,"right");             

            let objectReturn: {period: string, value: string} = {
                period: elem.quarter,
                value: printSectionCmlFixed
            }

            return objectReturn
        }
    })

    let printAll = Array.from({length: salesPrint.length}, (v, i) => {

        let text = border([
            spacer(salesPrint[i].period,14,"left"),
            salesPrint[i].value,
            yoyPrint[i].value,
        ],(i === salesPrint.length-1)? undefined : true)

        return (!proportionPrint[i]) 
            ? text
            : border([
                spacer(salesPrint[i].period,14,"left"),
                proportionPrint[i].value,
                salesPrint[i].value,
                yoyPrint[i].value,
            ],(i === salesPrint.length-1)? undefined : true)
    });

    let printAllReduce = printAll.reduce((prev, next, index, array) => {

        if (sectionDifference[index].category === "quarterly" ) {
            
            return (array[index] === array[currentQuarter -1])
                      ? prev + next
                      : prev + next 
        } else {

            return (array[index] === array[currentQuarter -2])
                    ? prev + next 
                    : prev + next 
        }
    })
    
    return printAllReduce
};

export const printNewBody = (header: Header, footer: Footer, quarterProportion: KPDIndicators[], cumulativeProportion: KPDIndicators[], quarterSales: KPDIndicators[], cumulativeSales: KPDIndicators[], quarterYoY: KPDIndicators[], cumulativeYoY: KPDIndicators[], currentQuarter: number) => {

    let text = liner(printNewSections(quarterProportion, quarterSales, quarterYoY, currentQuarter),"=","bottom",true,50)

    let quarterOne = (currentQuarter > 1)
        ? printNewSections(cumulativeProportion, cumulativeSales, cumulativeYoY, currentQuarter) + "\n"
        : "=".repeat(50)+"+" + "\n";

    return header.section + text + quarterOne + footer.section
};

// reusing EarningsV2 types should result in a lot of reusable functions.

function printIndicators(proportion: EarningsV2, sales: EarningsV2, yearOnYearValues: EarningsV2): string {


}

/*

print textblock
liner border spacer
find function that lets you print multiple columns
printQuarterValuesV2
printCumulativeValuesV2
printYoYV2

+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
| Proportion of Overseas Sales                     |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
|              Proportion |       Sales |     YoY% |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
| 1st Quarter   |   79.9% |   ¥245,661M |   -2.26% |
| 2nd Quarter   |   72.4% |   ¥253,048M |    +6.6% |
| 3rd Quarter   |   76.8% |   ¥490,141M |  -11.52% |
| 4th Quarter   |   80.6% |   ¥247,038M |  -15.79% |
+==================================================+
| 1st Half      |   75.9% |   ¥498,643M |   +2.01% |
| 1st 3/4       |   76.4% |   ¥989,516M |   -5.13% |
| FY3/2023 Cml. |   77.2% | ¥1,236,495M |   -7.44% |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
| *Proportion of overseas (outside of Japan) sales |
| to total sales                                   |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
*/