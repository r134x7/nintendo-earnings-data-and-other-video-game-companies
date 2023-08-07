import { liner, border, spacer, printTextBlock, headerPrint, dateLabel } from "./table_design_logic"
import { EarningsJSONV2, EarningsMakeV2, getData, nothingCheck, typeReturn } from "../data/generalTables/consolidated_earnings_general";

import { type EarningsValue, type EarningsV2,  } from "./general_earnings_logic";
import { type KeySalesIndicatorsCollectionV2 } from "../data/nintendo/key_sales_indicators_nintendo_v2";

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

function printIndicators(collectionThisFY: KeySalesIndicatorsCollectionV2, collectionLastFY: KeySalesIndicatorsCollectionV2 | undefined, headerLength: number,): string {


    const currentQuarter = collectionThisFY.currentQuarter;

    const none: EarningsValue = { kind:"Nothing" };

    // const makeHeader: HeaderV2 = {
    //     companyName: collectionThisFY.companyName,
    //     fiscalYear: collectionThisFY.fiscalYear,
    //     title: "Segment Information - Software Sales",
    // } 

    // const makeDateLabel = dateLabel(makeHeader.fiscalYear, currentQuarter);

    // const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

    // const printOne = (!removeHeader)
    //     ? headerPrint([
    //         makeHeader.companyName + " | " + makeHeader.fiscalYear,
    //         makeHeader.title
    //     ],headerLength) + "\n" + printDateLabel
    //     : ""

    const dataThisFY = getData(collectionThisFY, collectionThisFY.data.length);

    const dataLastFY = getData(collectionLastFY, collectionThisFY.data.length);
}

export function getDataV2<T extends EarningsJSONV2 | KeySalesIndicatorsCollectionV2>(dataCollectionThisFY: T | undefined, dataThisFYLengthForLastFY: number): Map<number, EarningsV2> {

    const dataMap = new Map<number, EarningsV2>();

        if (!dataCollectionThisFY) {
            for (let index = 0; index < dataThisFYLengthForLastFY; index++) {
                dataMap.set(index, valuesMakeV3(undefined, ""))
            }
        } else {

            if (Object.hasOwn(dataCollectionThisFY, "kpi")) {

                const { kpi } = dataCollectionThisFY as KeySalesIndicatorsCollectionV2;

                for (let index = 0; index < kpi.length; index++) {
                    // dataMap.set(index, valuesMakeV3(kpi[index], dataCollectionThisFY.fiscalYear))
                }

            } else if (Object.hasOwn(dataCollectionThisFY, "data")) {

                const { data } = dataCollectionThisFY as EarningsJSONV2;

                for (let index = 0; index < data.length; index++) {
                    dataMap.set(index, valuesMakeV3(data[index], dataCollectionThisFY.fiscalYear))
                }
            }

        }

        return dataMap;
}

export function valuesMakeV3<T extends EarningsMakeV2>(obj: T | undefined, fiscalYear: string): EarningsV2 {

    let values: EarningsV2 = {
        name: obj?.name ?? "N/A",
        Q1QtrValue: nothingCheck(obj?.Q1CmlValue, "Quarter", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
        Q2QtrValue: quarterlyCalculationV2(
            nothingCheck(obj?.Q2CmlValue, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q1CmlValue, "Quarter", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear)
        ),
        Q3QtrValue: quarterlyCalculationV2(
            nothingCheck(obj?.Q3CmlValue, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q2CmlValue, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
        ),
        Q4QtrValue: quarterlyCalculationV2(
            nothingCheck(obj?.Q4CmlValue, "Quarter", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q3CmlValue, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q2CmlValue, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
        ),
        Q1CmlValue: nothingCheck(obj?.Q1CmlValue, "Cumulative", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
        Q2CmlValue: nothingCheck(obj?.Q2CmlValue, "Cumulative", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
        Q3CmlValue: nothingCheck(obj?.Q3CmlValue, "Cumulative", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
        Q4CmlValue: nothingCheck(obj?.Q4CmlValue, "Cumulative", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear),
        forecastThisFY: nothingCheck(obj?.forecastThisFY, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
        forecastRevision1: nothingCheck(obj?.forecastRevision1, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 1", fiscalYear),
        forecastRevision2: nothingCheck(obj?.forecastRevision2, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 2", fiscalYear),
        forecastRevision3: nothingCheck(obj?.forecastRevision3, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 3", fiscalYear),
        forecastNextFY: nothingCheck(obj?.forecastNextFY, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Next FY FCST", fiscalYear),
        footnotes: obj?.footnotes,
    }

    return values
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