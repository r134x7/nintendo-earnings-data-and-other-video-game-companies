export type Earnings = {
    category: "quarter" | "cumulative" | "forecast",
    units: "currency" | "percentage",
    name: string,
    cmlName?: string,
    value: number,
}

export type Header = {
    companyName: string,
    netSales: string,
    operatingIncome: string,
    operatingMargin: string,
    netIncome: string,
    yearOnYearPercentage: string,
    fiscalYear: string,
    title: string,
}

export function quarterlyCalculation(quarters: Earnings[]) {
        
    // calc needs to be defined as earnings to retain its type when making any changes
    const calc: Earnings[] = quarters.map((elem, index, array) => {
        return (index === 0) 
                ? elem
                : {...elem, value: elem.value - array[index-1].value}
    })
    
    return calc
}

export function cumulativeCalculation(quarters: Earnings[]) {

    // calc needs to be typed as Earnings[] or else it's not recognised as that type alias and then issues occur with function parameters down the line, source for solution: https://stackoverflow.com/questions/52423842/what-is-not-assignable-to-parameter-of-type-never-error-in-typescript
    const calc: Earnings[] = quarters.filter((elem, index, array) => { 
        return elem !== array[0]
    }).map((elem, index) => {
        return {...elem, category: "cumulative"}
    })

    return calc
}

export function yearOnYearCalculation(thisFY: Earnings[], lastFY: Earnings[]) {

        // calc needs to be defined as earnings to retain its type when making any changes
        const calc: Earnings[] = thisFY.map((elem, index) => {

            return (lastFY[index].value < 0)
                    ? {...elem, units: "percentage", value: Number(
                        ((((elem.value / lastFY[index].value) -1)* -1) * 100).toFixed(2)
                        )
                      }
                    : {...elem, units: "percentage", value: Number(
                        (((elem.value / lastFY[index].value) -1) * 100).toFixed(2)
                        )
                      }; // .toFixed(2) to round the number by two decimal points regardless of Number will output a string, whole thing needs to be wrapped in Number to change type back from string to number  
        })

       return calc
    }

export function operatingMarginCalculation(netSalesLocal: Earnings[], opIncomeLocal: Earnings[]) {

    const calc: Earnings[] = opIncomeLocal.map((elem, index) => {
        return (netSalesLocal[index].value !== 0) 
                  ? {...elem, units: "percentage", value: Number(
                        (((elem.value / netSalesLocal[index].value)) * 100).toFixed(2)
                     )} // .toFixed(2) to round the number by two decimal points regardless of Number will output a string, whole thing needs to be wrapped in Number to change type back from string to number 
                  : {...elem, units: "percentage", value: 0} // to prevent infinity calculations
    })
   
   return calc
}

export const printSections = (sectionDifference: Earnings[], sectionYoY: Earnings[], currentQuarter: number) => {
    
    return sectionDifference.filter((elem, index) => {
        return (elem.category === "quarter")
                ? index < currentQuarter
                : (elem.category === "cumulative")
                ? currentQuarter >= 2 && index < currentQuarter -1
                : elem
    }).map((elem, index) => {

        if (elem.category === "quarter" && elem.units === "currency") {
             let printSectionDifferenceYoY: string = (sectionYoY[index].value > 0) 
                                ? `+${sectionYoY[index].value}% `
                                : `${sectionYoY[index].value}% `;
        let printSectionYoYFixed: string = (printSectionDifferenceYoY.length >= 9)
                                ? printSectionDifferenceYoY
                                : " ".repeat(9 - printSectionDifferenceYoY.length) + printSectionDifferenceYoY
        //  let x = `${elem.quarter.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })}M ` // cannot use currency settings as it creates border misalignment due to ¥ becoming wider. 
        let printSection: string = `¥${elem.value.toLocaleString("en")}M `; // this setting allows use of thousands separator ","
        let printSectionFixed: string = (printSection.length === 14)
                                  ? printSection
                                  : " ".repeat(14 - printSection.length) + printSection;
        return "|" + elem.name + "|" + printSectionFixed + "|" + printSectionYoYFixed + "|" // old note, used "\n" at end here: must affix a new line \n, was also affixing tabs \t to align but realised I could adjust the template literal
        } else if (elem.category === "cumulative" && elem.units === "currency") {

            let printSectionCmlYoY: string = (sectionYoY[index].value > 0) 
                                    ? `+${sectionYoY[index].value}% `
                                    : `${sectionYoY[index].value}% `;
            let printSectionCmlYoYFixed: string = (printSectionCmlYoY.length >= 9)
                                    ? printSectionCmlYoY
                                    : " ".repeat(9 - printSectionCmlYoY.length) + printSectionCmlYoY
            let printSectionCml: string = `¥${elem.value.toLocaleString("en")}M `; 
            let printSectionCmlFixed: string = (printSectionCml.length === 14)
                                      ? printSectionCml
                                      : " ".repeat(14 - printSectionCml.length) + printSectionCml;
            return "|" + elem.cmlName + "|" + printSectionCmlFixed + "|" + printSectionCmlYoYFixed + "|"
        } else if (elem.category === "forecast" && elem.units === "currency") {
            
            let printForecast: string = `¥${elem.value.toLocaleString("en")}M `;
            let printForecastFixed: string = (printForecast.length === 14)
                                      ? printForecast
                                      : " ".repeat(14 - printForecast.length) + printForecast;

            return "|" + elem.name + "|" + printForecastFixed + "|"  
        } else if (elem.category === "quarter" && elem.units === "percentage") {

            let printSectionMarginQuarters: string = `${elem.value}% `;
          let printSectionMarginQuartersFixed: string = (printSectionMarginQuarters.length >= 9)
                                  ? printSectionMarginQuarters
                                  : " ".repeat(9 - printSectionMarginQuarters.length) + printSectionMarginQuarters

          return "|" + elem.name + "|" + printSectionMarginQuartersFixed + "|"
        } else if (elem.category === "cumulative" && elem.units === "percentage") {
            
          let printSectionMarginCumulative: string = `${elem.value}% `;
          let printSectionMarginCumulativeFixed: string = (printSectionMarginCumulative.length === 9)
                                  ? printSectionMarginCumulative
                                  : " ".repeat(9 - printSectionMarginCumulative.length) + printSectionMarginCumulative

          return "|" + elem.cmlName + "|" + printSectionMarginCumulativeFixed + "|"
        } else {
            let printForecast: string = `${elem.value}% `;
            let printForecastFixed: string = (printForecast.length === 9)
                                ? printForecast
                                : " ".repeat(9 - printForecast.length) + printForecast;
            
            return "|" + elem.name + "|" + printForecastFixed + "|"
        }
        
    
    }).reduce((prev, next, index, array) => {
        if (sectionDifference[index].category === "quarter" && sectionDifference[index].units === "currency") {

            return (array[index] === array[currentQuarter -1])
            ? prev + `\n+${"-".repeat(38)}+\n` + next
            : prev + `\n+${"-".repeat(38)}+\n` + next 
            // sources for finding methods to convert numbers to strings with currency symbol and thousands separators: https://stackoverflow.com/questions/3753483/javascript-thousand-separator-string-format?noredirect=1&lq=1
            // mdn source with more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
        } else if (sectionDifference[index].category === "cumulative" && sectionDifference[index].units === "currency") {

            return (array[index] === array[currentQuarter -2])
                ? prev + `\n+${"-".repeat(38)}+\n` + next + `\n+${"-".repeat(38)}+\n`
                : prev + `\n+${"-".repeat(38)}+\n` + next 

        } else if (sectionDifference[index].category === "forecast" && sectionDifference[index].units === "currency") {

            return (array[index] === array[currentQuarter -1])
            ? prev + `\n+${"-".repeat(32)}+\n` + next
            : prev + `\n+${"-".repeat(32)}+\n` + next
        } else if (sectionDifference[index].category === "quarter" && sectionDifference[index].units === "percentage") {

            return (array[index] === array[currentQuarter -1])
                    ? prev + `\n+${"-".repeat(23)}+\n` + next
                    : prev + `\n+${"-".repeat(23)}+\n` + next 
        } else if (sectionDifference[index].category === "cumulative" && sectionDifference[index].units === "percentage") {
            return (array[index] === array[currentQuarter -2])
                    ? prev + `\n+${"-".repeat(23)}+\n` + next + `\n+${"-".repeat(27)}+\n`
                    : prev + `\n+${"-".repeat(23)}+\n` + next 
        } else {
            
            return (array[index] === array[currentQuarter -1])
                ? prev + `\n+${"-".repeat(27)}+\n` + next
                : prev + `\n+${"-".repeat(27)}+\n` + next
        }
    })
}

export const printHead = (header: Header) => 
`+${"-".repeat(34)}+
|${header.companyName}|    ${header.fiscalYear} |
+${"-".repeat(34)}+
|${header.title}|
+${"-".repeat(34)}+`;

export const printNetSales = (header: Header, netSalesDifference: Earnings[], netSalesDifferenceYoy: Earnings[], netSalesCumulative: Earnings[], netSalesCumulativeYoy: Earnings[], netSalesForecasts: Earnings[], currentQuarter: number) =>
`+${"-".repeat(38)}+
|${header.netSales}                 |${header.yearOnYearPercentage}|
+${"-".repeat(38)}+
${printSections(netSalesDifference, netSalesDifferenceYoy, currentQuarter)}
+${(currentQuarter > 1) ? "=".repeat(38)+"+\n" + printSections(netSalesCumulative, netSalesCumulativeYoy, currentQuarter) : "=".repeat(38)+"+" }${(currentQuarter === 2) ? `\n+${"-".repeat(38)}+\n` + printSections(netSalesForecasts, [], currentQuarter) : (currentQuarter === 1) ? `\n` + printSections(netSalesForecasts, [], currentQuarter) : printSections(netSalesForecasts, [], currentQuarter) }
+${"-".repeat(32)}+`;
  
export const printOperatingIncome = (header: Header, operatingIncomeDifference: Earnings[], operatingIncomeDifferenceYoy: Earnings[], operatingIncomeCumulative: Earnings[], operatingIncomeCumulativeYoy: Earnings[], operatingIncomeForecasts: Earnings[], currentQuarter: number) =>
`+${"-".repeat(38)}+
|${header.operatingIncome}          |${header.yearOnYearPercentage}|
+${"-".repeat(38)}+
${printSections(operatingIncomeDifference, operatingIncomeDifferenceYoy, currentQuarter)}
+${(currentQuarter > 1) ? "=".repeat(38)+"+\n" + printSections(operatingIncomeCumulative, operatingIncomeCumulativeYoy, currentQuarter) : "=".repeat(38)+"+" }${(currentQuarter === 2) ? `\n+${"-".repeat(38)}+\n` + printSections(operatingIncomeForecasts, [], currentQuarter) : (currentQuarter === 1) ? `\n` + printSections(operatingIncomeForecasts, [], currentQuarter) : printSections(operatingIncomeForecasts, [], currentQuarter) }
+${"-".repeat(32)}+`;
  
export const printOpMargin = (header: Header, operatingMarginQuarters: Earnings[], operatingMarginCumulative: Earnings[], opMarginForecasts: Earnings[], currentQuarter: number) => 
`+${"-".repeat(23)}+
|${header.operatingMargin}     |
+${"-".repeat(23)}+
${printSections(operatingMarginQuarters, [], currentQuarter)}
+${(currentQuarter > 1) ? "=".repeat(23)+"+\n" + printSections(operatingMarginCumulative, [], currentQuarter) : "=".repeat(23)+"+" }${(currentQuarter === 2) ? `\n+${"-".repeat(27)}+\n` + printSections(opMarginForecasts, [], currentQuarter) : (currentQuarter === 1) ? `\n+${"-".repeat(27)}+\n` + printSections(opMarginForecasts, [], currentQuarter) : printSections(opMarginForecasts, [], currentQuarter) }
+${"-".repeat(27)}+`;

export const printNetIncome = (header: Header, netIncomeDifference: Earnings[], netIncomeDifferenceYoy: Earnings[], netIncomeCumulative: Earnings[], netIncomeCumulativeYoy: Earnings[], netIncomeForecasts: Earnings[], currentQuarter: number) => 
`+${"-".repeat(38)}+
|${header.netIncome}                |${header.yearOnYearPercentage}|
+${"-".repeat(38)}+
${printSections(netIncomeDifference, netIncomeDifferenceYoy, currentQuarter)}
+${(currentQuarter > 1) ? "=".repeat(38)+"+\n" + printSections(netIncomeCumulative, netIncomeCumulativeYoy, currentQuarter) : "=".repeat(38)+"+" }${(currentQuarter === 2) ? `\n+${"-".repeat(38)}+\n` + printSections(netIncomeForecasts, [], currentQuarter) : (currentQuarter === 1) ? `\n` + printSections(netIncomeForecasts, [], currentQuarter) : printSections(netIncomeForecasts, [], currentQuarter) }
+${"-".repeat(32)}+`;

// export const printAll = ( // this didn't work...
//     printHead: (header: Header) => string,
//     printNetSales: (header: Header, netSalesDifference: Quarter[], netSalesDifferenceYoy: Quarter[], netSalesCumulative: Quarter[], netSalesCumulativeYoy: Quarter[], netSalesForecasts: Forecasts[], rowCumulativesApplied: RowCumulatives[], rowForecastsApplied: RowForecasts[], currentQuarter: number) => string,
//     printOperatingIncome: (header: Header, operatingIncomeDifference: Quarter[], operatingIncomeDifferenceYoy: Quarter[], operatingIncomeCumulative: Quarter[], operatingIncomeCumulativeYoy: Quarter[], operatingIncomeForecasts: Forecasts[], rowCumulativesApplied: RowCumulatives[], rowForecastsApplied: RowForecasts[], currentQuarter: number) => string,
//     printOpMargin: (header: Header, operatingMarginQuarters: Quarter[], operatingMarginCumulative: Quarter[], opMarginForecasts: Forecasts[], rowCumulativesApplied: RowCumulatives[], rowForecastsApplied: RowForecasts[], currentQuarter: number) => string,
//     printNetIncome: (header: Header, netIncomeDifference: Quarter[], netIncomeDifferenceYoy: Quarter[], netIncomeCumulative: Quarter[], netIncomeCumulativeYoy: Quarter[], netIncomeForecasts: Forecasts[], rowCumulativesApplied: RowCumulatives[], rowForecastsApplied: RowForecasts[], currentQuarter: number) => string
//     ) => `${printHead}
// ${printNetSales}
// ${printOperatingIncome}
// ${printOpMargin}
// ${printNetIncome}
// ###`;

