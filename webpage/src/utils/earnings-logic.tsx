
interface Quarter {
    quarter: number,
}

interface Forecasts { // this type might have to change.
    currentFiscalYearForecast: number,
    nextFiscalYearForecast: number,
    firstForecastRevision?: number,
    secondForecastRevision?: number,
    thirdForecastRevision?: number,
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

const netSalesForecasts: Forecasts = {
    currentFiscalYearForecast: 1600000,
    nextFiscalYearForecast: 1700000,
    firstForecastRevision: 1620000,
    secondForecastRevision: 1650000,
}

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

const operatingIncomeForecasts: Forecasts = {
    currentFiscalYearForecast: 500000,
    nextFiscalYearForecast: 600000,
    firstForecastRevision: 520000,
    secondForecastRevision: 560000,
}

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
  
const netIncomeForecasts: Forecasts = {
        currentFiscalYearForecast: 340000,
        nextFiscalYearForecast: 420000,
        firstForecastRevision: 350000,
        secondForecastRevision: 400000,
}

// type Consolidated = Quarters | Forecasts;

interface Header {
    companyName: string,
    netSales: string,
    operatingIncome: string,
    netProfit: string,
    yearOnYearPercentage: string,
    fiscalYear: string,
    title: string,
}

const header: Header = {
    companyName: " Nintendo Co., Ltd.",
    netSales: " Net Sales ",
    operatingIncome: " Operating Income ",
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
    {forecast: " FY3/24 Forecast "},
    {forecast: " FCST Revision 1 "},
    {forecast: " FCST Revision 2 "},
    {forecast: " FCST Revision 3 "},
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

const opMarginForcasts = operatingMarginForecastCalculation(netSalesForecasts, operatingIncomeForecasts)

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

export function operatingMarginForecastCalculation(netSalesLocal: Forecasts, opIncomeLocal: Forecasts) {

    const operatingMarginForecasts: Forecasts = {
        currentFiscalYearForecast: Number(((opIncomeLocal.currentFiscalYearForecast / netSalesLocal.currentFiscalYearForecast) * 100).toFixed(2)),
        nextFiscalYearForecast: Number(((opIncomeLocal.nextFiscalYearForecast / netSalesLocal.nextFiscalYearForecast) * 100).toFixed(2)),
        firstForecastRevision: (netSalesLocal.firstForecastRevision !== undefined && opIncomeLocal.firstForecastRevision !== undefined) 
            ? Number(((opIncomeLocal.firstForecastRevision / netSalesLocal.firstForecastRevision) * 100).toFixed(2))
            : 0,
        secondForecastRevision: (netSalesLocal.secondForecastRevision !== undefined && opIncomeLocal.secondForecastRevision !== undefined) 
            ? Number(((opIncomeLocal.secondForecastRevision / netSalesLocal.secondForecastRevision) * 100).toFixed(2))
            : 0,
        thirdForecastRevision: (netSalesLocal.thirdForecastRevision !== undefined && opIncomeLocal.thirdForecastRevision !== undefined) 
            ? Number(((opIncomeLocal.thirdForecastRevision / netSalesLocal.thirdForecastRevision) * 100).toFixed(2))
            : 0,
    }

    return operatingMarginForecasts

}

const currentQuarter = 2; // Set to 1, 2, 3 or 4.
 function printMobile() {

    const printHead = `+${"-".repeat(34)}+
    |${header.companyName}|    ${header.fiscalYear} |
    +${"-".repeat(34)}+
    |${header.title}|
    +${"-".repeat(34)}+`;

    // the array needs to be filtered and then mapped...
    const printQuartersNetSalesDifference = netSalesDifference.filter((elem, index) => index < currentQuarter).map((elem, index) => {

        let printNetSalesYoY = (netSalesDifferenceYoy[index].quarter > 0) 
                                ? `+${netSalesDifferenceYoy[index].quarter}% `
                                : `${netSalesDifferenceYoy[index].quarter}% `;
        let printNetSalesYoYFixed = (printNetSalesYoY.length === 9)
                                ? printNetSalesYoY
                                : " ".repeat(9 - printNetSalesYoY.length) + printNetSalesYoY
        //  let x = `${elem.quarter.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })}M ` // cannot use currency settings as it creates border misalignment due to ¥ becoming wider. 
        let printNetSales = `¥${elem.quarter.toLocaleString("en")}M `; // this setting allows use of thousands separator ","
        let printNetSalesFixed = (printNetSales.length === 14)
                                  ? printNetSales
                                  : " ".repeat(14 - printNetSales.length) + printNetSales;
        let printQuarterRow = `${rowQuartersApplied[index].quarter}`;  
        return "|" + printQuarterRow + "|" + printNetSalesFixed + "|" + printNetSalesYoYFixed + "|"
    }) // sources for finding methods to convert numbers to strings with currency symbol and thousands separators: https://stackoverflow.com/questions/3753483/javascript-thousand-separator-string-format?noredirect=1&lq=1
    // mdn source with more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString 
 

    const printQuartersNetSales = `+${"-".repeat(38)}+
    |${header.netSales}                 |${header.yearOnYearPercentage}|
    +${"-".repeat(38)}+
    ${printQuartersNetSalesDifference[0]}
    ${(printQuartersNetSalesDifference[1]) ? printQuartersNetSalesDifference[1] : null}
    ${(printQuartersNetSalesDifference[2]) ? printQuartersNetSalesDifference[1] : null}
    `;

    const printAll = `${printHead}
    ${printQuartersNetSales}
    `;

  console.log(printAll)
}

printMobile();
// arrays to reference:
// [netSalesDifference, netSalesLastFYDifference, operatingIncomeDifference, operatingIncomeLastFYDifference, netProfitDifference, netProfitLastFYDifference]
// [netSalesDifferenceYoy, netSalesCumulativeYoy, operatingIncomeDifferenceYoy, operatingIncomeCumulativeYoy, netProfitDifferenceYoy, netProfitCumulativeYoy]
// [operatingMarginQuarters, operatingMarginCumulative]
// opMarginForcasts