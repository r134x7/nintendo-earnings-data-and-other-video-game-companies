export type Earnings = {
    type: "currency" | "percentage",
    quarter: string,
    value: number,
}

// export type EarningsForecast = {
//     type: "currency" | "percentage",
//     quarter: string,
//     value: number,    
// }

// export type Quarter = {
//     quarter: number,
// }

// export type Forecasts = {
//     forecast: number,
// }

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

// type RowQuarters = {
//     quarter: string,
// }

// export type RowCumulatives = {
//     cumulative: string,
// }

// export type RowForecasts = {
//     forecast: string,
// }


// const rowQuartersApplied: RowQuarters[] = [
//     {quarter: " 1st Quarter "},
//     {quarter: " 2nd Quarter "},
//     {quarter: " 3rd Quarter "},
//     {quarter: " 4th Quarter "},
// ]

// export function quarterlyCalculation(quarters: Quarter[]) {
export function quarterlyCalculation(quarters: EarningsQuarter[]) {
    
    const calc = quarters.map((elem, index, array) => {
         return (index === 0) ? elem : { value: elem.value - array[index-1].value} // Finally figured out how to do it correctly with its own parameters
        //  return (index === 0) ? elem : { quarter: elem.quarter - array[index-1].quarter} // Finally figured out how to do it correctly with its own parameters
      })
    
    return calc
}

export function cumulativeCalculation(quarters: EarningsQuarter[]) {
// export function cumulativeCalculation(quarters: Quarter[]) {

    const calc = quarters.filter((elem, index, array) => {
        return elem !== array[0]
    })

    return calc
    
}

// export function yearOnYearCalculation(thisFY: Quarter[], lastFY: Quarter[]) {
export function yearOnYearCalculation(thisFY: Quarter[], lastFY: EarningsQuarter[]) {

    const calc = thisFY.map((elem, index) => {

        return (lastFY[index].quarter < 0)
                ? {quarter: Number(
                    ((((elem.quarter / lastFY[index].quarter) -1)* -1) * 100).toFixed(2)
                    )
                  }
                : {quarter: Number(
                    (((elem.quarter / lastFY[index].quarter) -1) * 100).toFixed(2)
                    )
                  }; // .toFixed(2) to round the number by two decimal points regardless of Number will output a string, whole thing needs to be wrapped in Number to change type back from string to number  
    })

   return calc
}

export function operatingMarginCalculation(netSalesLocal: Quarter[], opIncomeLocal: Quarter[]) {

    const calc = opIncomeLocal.map((elem, index) => {
        return (netSalesLocal[index].quarter !== 0) 
                  ? {quarter: Number(
                        (((elem.quarter / netSalesLocal[index].quarter)) * 100).toFixed(2)
                     )} // .toFixed(2) to round the number by two decimal points regardless of Number will output a string, whole thing needs to be wrapped in Number to change type back from string to number 
                  : {quarter: 0} // to prevent infinity calculations
    })
   
   return calc
}

export function operatingMarginForecastCalculation(netSalesLocal: Forecasts[], opIncomeLocal: Forecasts[]) {

    const calc = opIncomeLocal.map((elem, index) => {
        return (netSalesLocal[index].forecast !== 0) 
                  ? {forecast: Number(
                        (((elem.forecast / netSalesLocal[index].forecast)) * 100).toFixed(2)
                     )} // .toFixed(2) to round the number by two decimal points regardless of Number will output a string, whole thing needs to be wrapped in Number to change type back from string to number 
                  : {forecast: 0} // to prevent infinity calculations
    })

    return calc

}

// export const currentQuarter = 4; // Set to 1, 2, 3 or 4.

const printSectionDifference = (sectionDifference: Quarter[], sectionYoY: Quarter[], currentQuarter: number) => { // to use Net Sales Difference, Operating Income Difference or Net Profit Difference

    return sectionDifference.filter((elem, index) => index < currentQuarter).map((elem, index) => {

        let printSectionDifferenceYoY: string = (sectionYoY[index].quarter > 0) 
                                ? `+${sectionYoY[index].quarter}% `
                                : `${sectionYoY[index].quarter}% `;
        let printSectionYoYFixed: string = (printSectionDifferenceYoY.length >= 9)
                                ? printSectionDifferenceYoY
                                : " ".repeat(9 - printSectionDifferenceYoY.length) + printSectionDifferenceYoY
        //  let x = `${elem.quarter.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })}M ` // cannot use currency settings as it creates border misalignment due to ¥ becoming wider. 
        let printSection: string = `¥${elem.quarter.toLocaleString("en")}M `; // this setting allows use of thousands separator ","
        let printSectionFixed: string = (printSection.length === 14)
                                  ? printSection
                                  : " ".repeat(14 - printSection.length) + printSection;
        let printQuarterRow: string = `${rowQuartersApplied[index].quarter}`;  
        return "|" + printQuarterRow + "|" + printSectionFixed + "|" + printSectionYoYFixed + "|" // old note, used "\n" at end here: must affix a new line \n, was also affixing tabs \t to align but realised I could adjust the template literal 
    }).reduce((prev, next, index, array) => {
        return (array[index] === array[currentQuarter -1])
                  ? prev + `\n+${"-".repeat(38)}+\n` + next
                  : prev + `\n+${"-".repeat(38)}+\n` + next 
    })   // sources for finding methods to convert numbers to strings with currency symbol and thousands separators: https://stackoverflow.com/questions/3753483/javascript-thousand-separator-string-format?noredirect=1&lq=1
    // mdn source with more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString

};

const printSectionCumulative = (sectionCumulative: Quarter[], sectionYoY: Quarter[], rowCumulativesApplied: RowCumulatives[], currentQuarter: number) => { // to use Cumulative(Net Sales or Operating Income or Net Profit)
    
    // filtered this way, the first half correctly appears at quarter 2.
    return  sectionCumulative.filter((elem, index) => (currentQuarter >= 2 && index < currentQuarter -1)).map((elem, index) => {
    
    let printSectionCmlYoY: string = (sectionYoY[index].quarter > 0) 
                            ? `+${sectionYoY[index].quarter}% `
                            : `${sectionYoY[index].quarter}% `;
    let printSectionCmlYoYFixed: string = (printSectionCmlYoY.length >= 9)
                            ? printSectionCmlYoY
                            : " ".repeat(9 - printSectionCmlYoY.length) + printSectionCmlYoY
    let printSectionCml: string = `¥${elem.quarter.toLocaleString("en")}M `; 
    let printSectionCmlFixed: string = (printSectionCml.length === 14)
                              ? printSectionCml
                              : " ".repeat(14 - printSectionCml.length) + printSectionCml;
    let printQuarterRow: string = `${rowCumulativesApplied[index].cumulative}`;  
    return "|" + printQuarterRow + "|" + printSectionCmlFixed + "|" + printSectionCmlYoYFixed + "|"
    }).reduce((prev, next, index, array) => {
    return (array[index] === array[currentQuarter -2])
            ? prev + `\n+${"-".repeat(38)}+\n` + next + `\n+${"-".repeat(38)}+\n`
            : prev + `\n+${"-".repeat(38)}+\n` + next 
  })
};

const printSectionForecast = (sectionForecast: Forecasts[], rowForecastsApplied: RowForecasts[], currentQuarter: number) => {
  
    return sectionForecast.filter((elem, index, array) => (currentQuarter < 4) ? index !== array.length-1 : elem).map((elem, index) => {
   
      let printForecast: string = `¥${elem.forecast.toLocaleString("en")}M `;
      let printForecastFixed: string = (printForecast.length === 14)
                                ? printForecast
                                : " ".repeat(14 - printForecast.length) + printForecast;
      let printQuarterRow = rowForecastsApplied.filter((elem, index, array) => 
              (currentQuarter < 4) 
                  ? index !== array.length-1 
                  : (currentQuarter >= 4 && sectionForecast.length === 2) 
                  ? index !== 1 && index !== 2 && index !== 3 
                  : (currentQuarter >= 4 && sectionForecast.length === 3) 
                  ? index !== 2 && index !== 3
                  : (currentQuarter >= 4 && sectionForecast.length === 4) 
                  ? index !== 3
                  : elem)
      
      let printQuarterRowFixed: string = `${printQuarterRow[index].forecast}`;
  
      return "|" + printQuarterRowFixed + "|" + printForecastFixed + "|"  
      }).reduce((prev, next, index, array) => {
      return (array[index] === array[currentQuarter -1])
                ? prev + `\n+${"-".repeat(32)}+\n` + next
                : prev + `\n+${"-".repeat(32)}+\n` + next 
  })
  }

// const printOpMarginQuarters = (sectionMarginQuarters: Quarter[], currentQuarter: number) => {
const printOpMarginQuarters = (sectionMarginQuarters: EarningsQuarter[], currentQuarter: number) => {

    return sectionMarginQuarters.filter((elem, index) => index < currentQuarter).map((elem, index) => {
  
          let printSectionMarginQuarters: string = `${elem.quarter}% `;
          let printSectionMarginQuartersFixed: string = (printSectionMarginQuarters.length >= 9)
                                  ? printSectionMarginQuarters
                                  : " ".repeat(9 - printSectionMarginQuarters.length) + printSectionMarginQuarters
          let printQuarterRow = `${rowQuartersApplied[index].quarter}`;  
          return "|" + printQuarterRow + "|" + printSectionMarginQuartersFixed + "|"
      }).reduce((prev, next, index, array) => {
          return (array[index] === array[currentQuarter -1])
                    ? prev + `\n+${"-".repeat(23)}+\n` + next
                    : prev + `\n+${"-".repeat(23)}+\n` + next 
      })
  
  }

const printOpMarginCumulative = (sectionMarginCumalative: Quarter[], rowCumulativesApplied: RowCumulatives[], currentQuarter: number) => {
        
        return sectionMarginCumalative.filter((elem, index) => (currentQuarter >= 2 && index < currentQuarter -1)).map((elem, index) => {
  
          let printSectionMarginCumulative: string = `${elem.quarter}% `;
          let printSectionMarginCumulativeFixed: string = (printSectionMarginCumulative.length === 9)
                                  ? printSectionMarginCumulative
                                  : " ".repeat(9 - printSectionMarginCumulative.length) + printSectionMarginCumulative
          let printQuarterRow = `${rowCumulativesApplied[index].cumulative}`;  
          return "|" + printQuarterRow + "|" + printSectionMarginCumulativeFixed + "|"
      }).reduce((prev, next, index, array) => {
          return (array[index] === array[currentQuarter -2])
                    ? prev + `\n+${"-".repeat(23)}+\n` + next + `\n+${"-".repeat(27)}+\n`
                    : prev + `\n+${"-".repeat(23)}+\n` + next 
      })
  }

const printOpMarginForecasts = (sectionMarginForecasts: Forecasts[], rowForecastsApplied: RowForecasts[], currentQuarter: number) => {

    return sectionMarginForecasts.filter((elem, index, array) => (currentQuarter < 4) ? index !== array.length-1 : elem).map((elem, index) => {
   
      let printForecast: string = `${elem.forecast}% `;
      let printForecastFixed: string = (printForecast.length === 9)
                                ? printForecast
                                : " ".repeat(9 - printForecast.length) + printForecast;
      let printQuarterRow = rowForecastsApplied.filter((elem, index, array) => 
              (currentQuarter < 4) 
                  ? index !== array.length-1 
                  : (currentQuarter >= 4 && sectionMarginForecasts.length === 2) 
                  ? index !== 1 && index !== 2 && index !== 3 
                  : (currentQuarter >= 4 && sectionMarginForecasts.length === 3) 
                  ? index !== 2 && index !== 3
                  : (currentQuarter >= 4 && sectionMarginForecasts.length === 4) 
                  ? index !== 3
                  : elem)
      
      let printQuarterRowFixed: string = `${printQuarterRow[index].forecast}`;
  
      return "|" + printQuarterRowFixed + "|" + printForecastFixed + "|"  
      }).reduce((prev, next, index, array) => {
      return (array[index] === array[currentQuarter -1])
                ? prev + `\n+${"-".repeat(27)}+\n` + next
                : prev + `\n+${"-".repeat(27)}+\n` + next 
      })
}

export const printHead = (header: Header) => 
`+${"-".repeat(34)}+
|${header.companyName}|    ${header.fiscalYear} |
+${"-".repeat(34)}+
|${header.title}|
+${"-".repeat(34)}+`;
  
export const printNetSales = (header: Header, netSalesDifference: Quarter[], netSalesDifferenceYoy: Quarter[], netSalesCumulative: Quarter[], netSalesCumulativeYoy: Quarter[], netSalesForecasts: Forecasts[], rowCumulativesApplied: RowCumulatives[], rowForecastsApplied: RowForecasts[], currentQuarter: number) =>
`+${"-".repeat(38)}+
|${header.netSales}                 |${header.yearOnYearPercentage}|
+${"-".repeat(38)}+
${printSectionDifference(netSalesDifference, netSalesDifferenceYoy, currentQuarter)}
+${(currentQuarter > 1) ? "=".repeat(38)+"+\n" + printSectionCumulative(netSalesCumulative, netSalesCumulativeYoy, rowCumulativesApplied, currentQuarter) : "=".repeat(38)+"+" }${(currentQuarter === 2) ? `\n+${"-".repeat(38)}+\n` + printSectionForecast(netSalesForecasts, rowForecastsApplied, currentQuarter) : (currentQuarter === 1) ? `\n` + printSectionForecast(netSalesForecasts, rowForecastsApplied, currentQuarter) : printSectionForecast(netSalesForecasts, rowForecastsApplied, currentQuarter) }
+${"-".repeat(32)}+`;
  
export const printOperatingIncome = (header: Header, operatingIncomeDifference: Quarter[], operatingIncomeDifferenceYoy: Quarter[], operatingIncomeCumulative: Quarter[], operatingIncomeCumulativeYoy: Quarter[], operatingIncomeForecasts: Forecasts[], rowCumulativesApplied: RowCumulatives[], rowForecastsApplied: RowForecasts[], currentQuarter: number) =>
`+${"-".repeat(38)}+
|${header.operatingIncome}          |${header.yearOnYearPercentage}|
+${"-".repeat(38)}+
${printSectionDifference(operatingIncomeDifference, operatingIncomeDifferenceYoy, currentQuarter)}
+${(currentQuarter > 1) ? "=".repeat(38)+"+\n" + printSectionCumulative(operatingIncomeCumulative, operatingIncomeCumulativeYoy, rowCumulativesApplied, currentQuarter) : "=".repeat(38)+"+" }${(currentQuarter === 2) ? `\n+${"-".repeat(38)}+\n` + printSectionForecast(operatingIncomeForecasts, rowForecastsApplied, currentQuarter) : (currentQuarter === 1) ? `\n` + printSectionForecast(operatingIncomeForecasts, rowForecastsApplied, currentQuarter) : printSectionForecast(operatingIncomeForecasts, rowForecastsApplied, currentQuarter) }
+${"-".repeat(32)}+`;
  
export const printOpMargin = (header: Header, operatingMarginQuarters: Quarter[], operatingMarginCumulative: Quarter[], opMarginForecasts: Forecasts[], rowCumulativesApplied: RowCumulatives[], rowForecastsApplied: RowForecasts[], currentQuarter: number) => 
`+${"-".repeat(23)}+
|${header.operatingMargin}     |
+${"-".repeat(23)}+
${printOpMarginQuarters(operatingMarginQuarters, currentQuarter)}
+${(currentQuarter > 1) ? "=".repeat(23)+"+\n" + printOpMarginCumulative(operatingMarginCumulative, rowCumulativesApplied, currentQuarter) : "=".repeat(23)+"+" }${(currentQuarter === 2) ? `\n+${"-".repeat(27)}+\n` + printOpMarginForecasts(opMarginForecasts, rowForecastsApplied, currentQuarter) : (currentQuarter === 1) ? `\n+${"-".repeat(27)}+\n` + printOpMarginForecasts(opMarginForecasts, rowForecastsApplied, currentQuarter) : printOpMarginForecasts(opMarginForecasts, rowForecastsApplied, currentQuarter) }
+${"-".repeat(27)}+`;

export const printNetIncome = (header: Header, netIncomeDifference: Quarter[], netIncomeDifferenceYoy: Quarter[], netIncomeCumulative: Quarter[], netIncomeCumulativeYoy: Quarter[], netIncomeForecasts: Forecasts[], rowCumulativesApplied: RowCumulatives[], rowForecastsApplied: RowForecasts[], currentQuarter: number) => 
`+${"-".repeat(38)}+
|${header.netIncome}                |${header.yearOnYearPercentage}|
+${"-".repeat(38)}+
${printSectionDifference(netIncomeDifference, netIncomeDifferenceYoy, currentQuarter)}
+${(currentQuarter > 1) ? "=".repeat(38)+"+\n" + printSectionCumulative(netIncomeCumulative, netIncomeCumulativeYoy, rowCumulativesApplied, currentQuarter) : "=".repeat(38)+"+" }${(currentQuarter === 2) ? `\n+${"-".repeat(38)}+\n` + printSectionForecast(netIncomeForecasts, rowForecastsApplied, currentQuarter) : (currentQuarter === 1) ? `\n` + printSectionForecast(netIncomeForecasts, rowForecastsApplied, currentQuarter) : printSectionForecast(netIncomeForecasts, rowForecastsApplied, currentQuarter) }
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

