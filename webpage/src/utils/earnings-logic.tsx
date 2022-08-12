
interface Quarter {
    quarter: number,
}

interface Forecasts {
    forecast: number,
}
  
const netSales: Quarter[] = [
    {quarter: 307460},
    {quarter: 624272},
    {quarter: 1320219},
    {quarter: 1695344},
]

const netSalesLastFy: Quarter[] = [
    {quarter: 322647},    
    {quarter: 769524},
    {quarter: 1404463},
    {quarter: 1758910},
]

const netSalesForecasts: Forecasts[] = [ // forecast revisions need to be placed between current and next
    {forecast: 1600000}, // current Fiscal Year Forecast
    {forecast: 1620000}, // first forecast revision
    {forecast: 1650000}, // second forecast revision
    {forecast: 1700000}, // next Fiscal Year Forecast
]

const operatingIncome: Quarter[] = [
  {quarter: 101647}, 
  {quarter: 219959}, 
  {quarter: 472551}, 
  {quarter: 592760}, 
]

const operatingIncomeLastFY: Quarter[] = [
    {quarter: 144737}, 
    {quarter: 246687}, 
    {quarter: 329684}, 
    {quarter: 419526}, 
  ]

const operatingIncomeForecasts: Forecasts[] = [ // forecast revisions need to be placed between current and next
    {forecast: 500000}, // current Fiscal Year Forecast
    {forecast : 520000}, // first forecast revision
    {forecast: 560000}, // second forecast revision
    {forecast: 600000}, // next Fiscal Year Forecast
]

const netProfit: Quarter[] = [
    {quarter: 151647}, 
    {quarter: 239959}, 
    {quarter: 322551}, 
    {quarter: 452760}, 
  ]
  
 const netProfitLastFY: Quarter[] = [
      {quarter: 144737}, 
      {quarter: 246687}, 
      {quarter: 329684}, 
      {quarter: 419526}, 
    ]
  
const netIncomeForecasts: Forecasts[] = [ // forecast revisions need to be placed between current and next
        {forecast: 340000}, // current Fiscal Year Forecast
        {forecast: 350000}, // first forecast revision
        {forecast: 400000}, // second forecast revision
        {forecast: 420000}, // next Fiscal Year Forecast
]

interface Header {
    companyName: string,
    netSales: string,
    operatingIncome: string,
    operatingMargin: string,
    netProfit: string,
    yearOnYearPercentage: string,
    fiscalYear: string,
    title: string,
}

const header: Header = {
    companyName: " Nintendo Co., Ltd.",
    netSales: " Net Sales ",
    operatingIncome: " Operating Income ",
    operatingMargin: " Operating Margin ",
    netProfit: " Net Profit ",
    yearOnYearPercentage: "    YoY% ",
    fiscalYear: "FY3/2023 ",
    title: " Consolidated Operating Results   ",
}

interface Rows {
    firstQuarter: string,
    secondQuarter: string,
    thirdQuarter: string,
    fourthQuarter: string,
    firstHalf: string,
    firstThreeQuarters: string,
    fyCumulative: string,
    currentFYForecast: string,
    nextFYForecast: string,
    forecastRevisionOne: string,
    forecastRevisionTwo: string,
    forecastRevisionThree: string,
    lineBreak: string,
}

interface RowQuarters {
    quarter: string,
}

const rowQuartersApplied: RowQuarters[] = [
    {quarter: " 1st Quarter "},
    {quarter: " 2nd Quarter "},
    {quarter: " 3rd Quarter "},
    {quarter: " 4th Quarter "},
] 

interface RowCumulatives {
    cumulative: string,
}

const rowCumulativesApplied: RowCumulatives[] =[
    {cumulative: " First Half  "},
    {cumulative: " 1st 3 Qtrs  "},
    {cumulative: " FY3/23 Cml. "},
]

interface RowForecasts {
    forecast: string,
}

const rowForecastsApplied: RowForecasts[] = [
    {forecast: " FY3/23 Forecast "},
    {forecast: " FCST Revision 1 "},
    {forecast: " FCST Revision 2 "},
    {forecast: " FCST Revision 3 "},
    {forecast: " FY3/24 Forecast "},
] 

const rows: Rows = {
    firstQuarter: " 1st Quarter ",
    secondQuarter:  " 2nd Quarter ",
    thirdQuarter: " 3rd Quarter ",
    fourthQuarter: " 4th Quarter ",
    firstHalf: " First Half  ",
    firstThreeQuarters: " 1st 3 Qtrs  ",
    fyCumulative: " FY3/23 Cml. ",
    currentFYForecast: " FY3/23 Forecast ",
    nextFYForecast: " FY3/24 Forecast ",
    forecastRevisionOne: " FCST Revision 1 ",
    forecastRevisionTwo: " FCST Revision 2 ",
    forecastRevisionThree: " FCST Revision 3 ",
    lineBreak: "###",
}

// need to avoid using for loops...
// try using array.map.filter.reduce
// rest pararmeters and spread syntax where needed
// template literals
// array or object destructuring

const collection = [
    netSales,
    netSalesLastFy,
    operatingIncome,
    operatingIncomeLastFY,
    netProfit,
    netProfitLastFY
]

const [netSalesDifference, netSalesLastFYDifference, operatingIncomeDifference, operatingIncomeLastFYDifference, netProfitDifference, netProfitLastFYDifference] = collection.map((elem) => {
    return quarterlyCalculation(elem)
})

const [netSalesCumulative, netSalesLastFYCumulative, operatingIncomeCumulative, operatingIncomeLastFYCumlative,
netProfitCumulative, netProfitLastFYCumulative] = collection.map((elem) => {
    return cumulativeCalculation(elem)
})

const yearOnYearCollection = [
    netSalesDifference,
    netSalesLastFYDifference,
    netSalesCumulative,
    netSalesLastFYCumulative,
    operatingIncomeDifference,
    operatingIncomeLastFYDifference,
    operatingIncomeCumulative,
    operatingIncomeLastFYCumlative,
    netProfitDifference,
    netProfitLastFYDifference,
    netProfitCumulative,
    netProfitLastFYCumulative,
]

const [netSalesDifferenceYoy, netSalesCumulativeYoy, operatingIncomeDifferenceYoy, operatingIncomeCumulativeYoy, netProfitDifferenceYoy, netProfitCumulativeYoy] = yearOnYearCollection.map((elem, index, array) => {
    // need to use map and then filter, not the other way around. Input array of arrays of length 12, output array of arrays of length 12 and then filter to 6.

    return (index % 2 === 0) // this is so that it returns on even numbered indexes, i.e. 0,1 then 2,3 etc.
            ? yearOnYearCalculation(array[index], array[index+1])
            : [];
    }).filter((elem) => elem.length !== 0) // map creates empty arrays so filter removes them and then the array destructuring works correctly, note: elem is used and not array because the array contains 12 arrays! This also removes the issue of variable possibly being undefined had we not put in empty arrays since it would have automatically placed undefined.

const opMarginCollection = [
    netSalesDifference,
    operatingIncomeDifference,
    netSalesCumulative,
    operatingIncomeCumulative,
]

const [operatingMarginQuarters, operatingMarginCumulative] = opMarginCollection.map((elem, index, array) => {
    // Input array of arrays of length 4, output array of arrays of length 4 and then filter to 2.

    return (index % 2 === 0) // this is so that it returns on even numbered indexes, i.e. 0,1 then 2,3 etc.
            ? operatingMarginCalculation(array[index], array[index+1])
            : [];
    }).filter((elem) => elem.length !== 0) // map creates empty arrays so filter removes them and then the array destructuring works correctly, note: elem is used and not array because the array contains 12 arrays! This also removes the issue of variable possibly being undefined had we not put in empty arrays since it would have automatically placed undefined.

const opMarginForecasts = operatingMarginForecastCalculation(netSalesForecasts, operatingIncomeForecasts)

// need to make function for forecasts

export function quarterlyCalculation(quarters: Quarter[]) {
    
    const calc = quarters.map((elem, index, array) => {
         return (index === 0) ? elem : { quarter: elem.quarter - array[index-1].quarter} // Finally figured out how to do it correctly with its own parameters
      })
    
    return calc
}

export function cumulativeCalculation(quarters: Quarter[]) {

    const calc = quarters.filter((elem, index, array) => {
        return elem !== array[0]
    })

    return calc
    
}

export function yearOnYearCalculation(thisFY: Quarter[], lastFY: Quarter[]) {

    const calc = thisFY.map((elem, index) => {
        return {quarter: Number(
                        (((elem.quarter / lastFY[index].quarter) -1) * 100).toFixed(2)
                    )
                } // .toFixed(2) to round the number by two decimal points regardless of Number will output a string, whole thing needs to be wrapped in Number to change type back from string to number 
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

    // const operatingMarginForecasts: Forecasts = {
    //     currentFiscalYearForecast: Number(((opIncomeLocal.currentFiscalYearForecast / netSalesLocal.currentFiscalYearForecast) * 100).toFixed(2)),
    //     nextFiscalYearForecast: Number(((opIncomeLocal.nextFiscalYearForecast / netSalesLocal.nextFiscalYearForecast) * 100).toFixed(2)),
    //     firstForecastRevision: (netSalesLocal.firstForecastRevision !== undefined && opIncomeLocal.firstForecastRevision !== undefined) 
    //         ? Number(((opIncomeLocal.firstForecastRevision / netSalesLocal.firstForecastRevision) * 100).toFixed(2))
    //         : 0,
    //     secondForecastRevision: (netSalesLocal.secondForecastRevision !== undefined && opIncomeLocal.secondForecastRevision !== undefined) 
    //         ? Number(((opIncomeLocal.secondForecastRevision / netSalesLocal.secondForecastRevision) * 100).toFixed(2))
    //         : 0,
    //     thirdForecastRevision: (netSalesLocal.thirdForecastRevision !== undefined && opIncomeLocal.thirdForecastRevision !== undefined) 
    //         ? Number(((opIncomeLocal.thirdForecastRevision / netSalesLocal.thirdForecastRevision) * 100).toFixed(2))
    //         : 0,
    // }

    const calc = opIncomeLocal.map((elem, index) => {
        return (netSalesLocal[index].forecast !== 0) 
                  ? {forecast: Number(
                        (((elem.forecast / netSalesLocal[index].forecast)) * 100).toFixed(2)
                     )} // .toFixed(2) to round the number by two decimal points regardless of Number will output a string, whole thing needs to be wrapped in Number to change type back from string to number 
                  : {forecast: 0} // to prevent infinity calculations
    })

    return calc

}

const currentQuarter = 3; // Set to 1, 2, 3 or 4.

export function printMobile() {

const printHead = 
`+${"-".repeat(34)}+
|${header.companyName}|    ${header.fiscalYear} |
+${"-".repeat(34)}+
|${header.title}|
+${"-".repeat(34)}+`;

    // the array needs to be filtered and then mapped...
    const printQuartersNetSalesDifference = netSalesDifference.filter((elem, index) => index < currentQuarter).map((elem, index) => {

        let printNetSalesYoY: string = (netSalesDifferenceYoy[index].quarter > 0) 
                                ? `+${netSalesDifferenceYoy[index].quarter}% `
                                : `${netSalesDifferenceYoy[index].quarter}% `;
        let printNetSalesYoYFixed: string = (printNetSalesYoY.length === 9)
                                ? printNetSalesYoY
                                : " ".repeat(9 - printNetSalesYoY.length) + printNetSalesYoY
        //  let x = `${elem.quarter.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })}M ` // cannot use currency settings as it creates border misalignment due to ¥ becoming wider. 
        let printNetSales: string = `¥${elem.quarter.toLocaleString("en")}M `; // this setting allows use of thousands separator ","
        let printNetSalesFixed: string = (printNetSales.length === 14)
                                  ? printNetSales
                                  : " ".repeat(14 - printNetSales.length) + printNetSales;
        let printQuarterRow = `${rowQuartersApplied[index].quarter}`;  
        return "|" + printQuarterRow + "|" + printNetSalesFixed + "|" + printNetSalesYoYFixed + "|" // old note, used "\n" at end here: must affix a new line \n, was also affixing tabs \t to align but realised I could adjust the template literal 
    }).reduce((prev, next, index, array) => {
        return (array[index] === array[currentQuarter -1])
                  ? prev + `\n+${"-".repeat(38)}+\n` + next
                  : prev + `\n+${"-".repeat(38)}+\n` + next 
    })   // sources for finding methods to convert numbers to strings with currency symbol and thousands separators: https://stackoverflow.com/questions/3753483/javascript-thousand-separator-string-format?noredirect=1&lq=1
    // mdn source with more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString 
    
    const printCumulativeNetSales = () => {
    
          // filtered this way, the first half correctly appears at quarter 2.
          return  netSalesCumulative.filter((elem, index) => (currentQuarter >= 2 && index < currentQuarter -1)).map((elem, index) => {
          
          let printNetSalesCmlYoY: string = (netSalesCumulativeYoy[index].quarter > 0) 
                                  ? `+${netSalesCumulativeYoy[index].quarter}% `
                                  : `${netSalesCumulativeYoy[index].quarter}% `;
          let printNetSalesCmlYoYFixed: string = (printNetSalesCmlYoY.length === 9)
                                  ? printNetSalesCmlYoY
                                  : " ".repeat(9 - printNetSalesCmlYoY.length) + printNetSalesCmlYoY
          let printNetSalesCml: string = `¥${elem.quarter.toLocaleString("en")}M `; // this setting allows use of thousands separator ","
          let printNetSalesCmlFixed: string = (printNetSalesCml.length === 14)
                                    ? printNetSalesCml
                                    : " ".repeat(14 - printNetSalesCml.length) + printNetSalesCml;
          let printQuarterRow: string = `${rowCumulativesApplied[index].cumulative}`;  
          return "|" + printQuarterRow + "|" + printNetSalesCmlFixed + "|" + printNetSalesCmlYoYFixed + "|"
          }).reduce((prev, next, index, array) => {
          return (array[index] === array[currentQuarter -2])
                  ? prev + `\n+${"-".repeat(38)}+\n` + next + `\n+${"-".repeat(38)}+\n`
                  : prev + `\n+${"-".repeat(38)}+\n` + next 
        })
  };

  const printForecastNetSales = netSalesForecasts.filter((elem, index, array) => (currentQuarter < 4) ? index !== array.length-1 : elem).map((elem, index) => {
 
    let printForecast: string = `¥${elem.forecast.toLocaleString("en")}M `; // this setting allows use of thousands separator ","
    let printForecastFixed: string = (printForecast.length === 14)
                              ? printForecast
                              : " ".repeat(14 - printForecast.length) + printForecast;
    let printQuarterRow = rowForecastsApplied.filter((elem, index, array) => 
            (currentQuarter < 4) 
                ? index !== array.length-1 
                : (currentQuarter >= 4 && netSalesForecasts.length === 2) 
                ? index !== 1 && index !== 2 && index !== 3 
                : (currentQuarter >= 4 && netSalesForecasts.length === 3) 
                ? index !== 2 && index !== 3
                : (currentQuarter >= 4 && netSalesForecasts.length === 4) 
                ? index !== 3
                : elem)
    
    let printQuarterRowFixed: string = `${printQuarterRow[index].forecast}`;

    return "|" + printQuarterRowFixed + "|" + printForecastFixed + "|"  
    }).reduce((prev, next, index, array) => {
    return (array[index] === array[currentQuarter -1])
              ? prev + `\n+${"-".repeat(32)}+\n` + next
              : prev + `\n+${"-".repeat(32)}+\n` + next 
})

const printSectionDifference = (sectionDifference: Quarter[], sectionYoY: Quarter[]) => { // to use Net Sales Difference, Operating Income Difference or Net Profit Difference

    return sectionDifference.filter((elem, index) => index < currentQuarter).map((elem, index) => {

        let printSectionDifferenceYoY: string = (sectionYoY[index].quarter > 0) 
                                ? `+${sectionYoY[index].quarter}% `
                                : `${sectionYoY[index].quarter}% `;
        let printSectionYoYFixed: string = (printSectionDifferenceYoY.length === 9)
                                ? printSectionDifferenceYoY
                                : " ".repeat(9 - printSectionDifferenceYoY.length) + printSectionDifferenceYoY
        //  let x = `${elem.quarter.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })}M ` // cannot use currency settings as it creates border misalignment due to ¥ becoming wider. 
        let printSection: string = `¥${elem.quarter.toLocaleString("en")}M `; // this setting allows use of thousands separator ","
        let printSectionFixed: string = (printSection.length === 14)
                                  ? printSection
                                  : " ".repeat(14 - printSection.length) + printSection;
        let printQuarterRow = `${rowQuartersApplied[index].quarter}`;  
        return "|" + printQuarterRow + "|" + printSectionFixed + "|" + printSectionYoYFixed + "|" // old note, used "\n" at end here: must affix a new line \n, was also affixing tabs \t to align but realised I could adjust the template literal 
    }).reduce((prev, next, index, array) => {
        return (array[index] === array[currentQuarter -1])
                  ? prev + `\n+${"-".repeat(38)}+\n` + next
                  : prev + `\n+${"-".repeat(38)}+\n` + next 
    })   // sources for finding methods to convert numbers to strings with currency symbol and thousands separators: https://stackoverflow.com/questions/3753483/javascript-thousand-separator-string-format?noredirect=1&lq=1
    // mdn source with more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString

};

const printSectionCumulative = (sectionCumulative: Quarter[], sectionYoY: Quarter[]) => { // to use Cumulative(Net Sales or Operating Income or Net Profit)
    
    // filtered this way, the first half correctly appears at quarter 2.
    return  sectionCumulative.filter((elem, index) => (currentQuarter >= 2 && index < currentQuarter -1)).map((elem, index) => {
    
    let printSectionCmlYoY: string = (sectionYoY[index].quarter > 0) 
                            ? `+${sectionYoY[index].quarter}% `
                            : `${sectionYoY[index].quarter}% `;
    let printSectionCmlYoYFixed: string = (printSectionCmlYoY.length === 9)
                            ? printSectionCmlYoY
                            : " ".repeat(9 - printSectionCmlYoY.length) + printSectionCmlYoY
    let printSectionCml: string = `¥${elem.quarter.toLocaleString("en")}M `; // this setting allows use of thousands separator ","
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

const printSectionForecast = (sectionForecast: Forecasts[]) => {
  
  
    return sectionForecast.filter((elem, index, array) => (currentQuarter < 4) ? index !== array.length-1 : elem).map((elem, index) => {
   
      let printForecast: string = `¥${elem.forecast.toLocaleString("en")}M `; // this setting allows use of thousands separator ","
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

  const printOpMarginQuarters = (sectionMarginQuarters: Quarter[]) => {

    return sectionMarginQuarters.filter((elem, index) => index < currentQuarter).map((elem, index) => {
  
          let printSectionMarginQuarters: string = `${elem.quarter}% `;
          let printSectionMarginQuartersFixed: string = (printSectionMarginQuarters.length === 9)
                                  ? printSectionMarginQuarters
                                  : " ".repeat(9 - printSectionMarginQuarters.length) + printSectionMarginQuarters
          let printQuarterRow = `${rowQuartersApplied[index].quarter}`;  
          return "|" + printQuarterRow + "|" + printSectionMarginQuartersFixed + "|" // old note, used "\n" at end here: must affix a new line \n, was also affixing tabs \t to align but realised I could adjust the template literal 
      }).reduce((prev, next, index, array) => {
          return (array[index] === array[currentQuarter -1])
                    ? prev + `\n+${"-".repeat(23)}+\n` + next
                    : prev + `\n+${"-".repeat(23)}+\n` + next 
      })   // sources for finding methods to convert numbers to strings with currency symbol and thousands separators: https://stackoverflow.com/questions/3753483/javascript-thousand-separator-string-format?noredirect=1&lq=1
      // mdn source with more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
  
  }

  const printOpMarginCumulative = (sectionMarginCumalative: Quarter[]) => {
        
        return sectionMarginCumalative.filter((elem, index) => (currentQuarter >= 2 && index < currentQuarter -1)).map((elem, index) => {
  
          let printSectionMarginCumulative: string = `${elem.quarter}% `;
          let printSectionMarginCumulativeFixed: string = (printSectionMarginCumulative.length === 9)
                                  ? printSectionMarginCumulative
                                  : " ".repeat(9 - printSectionMarginCumulative.length) + printSectionMarginCumulative
          let printQuarterRow = `${rowCumulativesApplied[index].cumulative}`;  
          return "|" + printQuarterRow + "|" + printSectionMarginCumulativeFixed + "|" // old note, used "\n" at end here: must affix a new line \n, was also affixing tabs \t to align but realised I could adjust the template literal 
      }).reduce((prev, next, index, array) => {
          return (array[index] === array[currentQuarter -2])
                    ? prev + `\n+${"-".repeat(23)}+\n` + next + `\n+${"-".repeat(27)}+\n`
                    : prev + `\n+${"-".repeat(23)}+\n` + next 
      })
  }

const printOpMarginForecasts = (sectionMarginForecasts: Forecasts[]) => {

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
  
const printNetSales = 
`+${"-".repeat(38)}+
|${header.netSales}                 |${header.yearOnYearPercentage}|
+${"-".repeat(38)}+
${printSectionDifference(netSalesDifference, netSalesDifferenceYoy)}
+${(currentQuarter > 1) ? "=".repeat(38)+"+\n" + printSectionCumulative(netSalesCumulative, netSalesCumulativeYoy) : "=".repeat(38)+"+" }${(currentQuarter === 2) ? `\n+${"-".repeat(38)}+\n` + printSectionForecast(netSalesForecasts) : (currentQuarter === 1) ? `\n` + printSectionForecast(netSalesForecasts) : printSectionForecast(netSalesForecasts) }
+${"-".repeat(32)}+`;
  
const printQuarterOperatingIncome = 
`+${"-".repeat(38)}+
|${header.operatingIncome}                 |${header.yearOnYearPercentage}|
+${"-".repeat(38)}+
${printSectionDifference(netSalesDifference, netSalesDifferenceYoy)}
+${(currentQuarter > 1) ? "=".repeat(38)+"+\n" + printSectionCumulative(netSalesCumulative, netSalesCumulativeYoy) : "=".repeat(38)+"+" }${(currentQuarter === 2) ? `\n+${"-".repeat(38)}+\n` + printSectionForecast(netSalesForecasts) : (currentQuarter === 1) ? `\n` + printSectionForecast(netSalesForecasts) : printSectionForecast(netSalesForecasts) }
+${"-".repeat(32)}+`;
  
const printOpMargin = 
`+${"-".repeat(23)}+
|${header.operatingMargin}     |
+${"-".repeat(23)}+
${printOpMarginQuarters(operatingMarginQuarters)}
+${(currentQuarter > 1) ? "=".repeat(23)+"+\n" + printOpMarginCumulative(operatingMarginCumulative) : "=".repeat(23)+"+" }${(currentQuarter === 2) ? `\n+${"-".repeat(27)}+\n` + printOpMarginForecasts(opMarginForecasts) : (currentQuarter === 1) ? `\n+${"-".repeat(27)}+\n` + printOpMarginForecasts(opMarginForecasts) : printOpMarginForecasts(opMarginForecasts) }
+${"-".repeat(27)}+`;

console.log(printOpMargin)

const printAll = 
`${printHead}
${printNetSales}`;

console.log(printAll)
}

printMobile();
// arrays to reference:
// [netSalesDifference, netSalesLastFYDifference, operatingIncomeDifference, operatingIncomeLastFYDifference, netProfitDifference, netProfitLastFYDifference]
// [netSalesDifferenceYoy, netSalesCumulativeYoy, operatingIncomeDifferenceYoy, operatingIncomeCumulativeYoy, netProfitDifferenceYoy, netProfitCumulativeYoy]
// [operatingMarginQuarters, operatingMarginCumulative]
// opMarginForecasts