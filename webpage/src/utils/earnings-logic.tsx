
interface Quarter {
    quarter: number,
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

const operatingIncome: Quarter[] = [
  {quarter: 101647}, 
  {quarter: 219959}, 
  {quarter: 472551}, 
  {quarter: 592760}, 
]
  

interface Forecasts { // this type might have to change.
    currentFiscalYearForecast: number,
    nextFiscalYearForecast: number,
    firstForecastRevision?: number,
    secondForecastRevision?: number,
    thirdForecastRevision?: number,
}

// type Consolidated = Quarters | Forecasts;

const netSalesForecasts: Forecasts = {
    currentFiscalYearForecast: 1600000,
    nextFiscalYearForecast: 0,
}

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
    firstQuarterYoy: string,
    secondQuarterYoy: string,
    thirdQuarterYoy: string,
    fourthQuarterYoy: string,
    firstHalf: string,
    firstThreeQuarters: string,
    fyCumulative: string,
    firstHalfYoy: string,
    firstThreeQuartersYoy: string,
    fyCumulativeYoy: string,
    currentFYForecast: string,
    nextFYForecast: string,
    forecastRevisionOne: string,
    forecastRevisionTwo: string,
    forecastRevisionThree: string,
    lineBreak: string,
}

const rows: Rows = {
    firstQuarter: " 1st Quarter ",
    secondQuarter:  " 2nd Quarter ",
    thirdQuarter: " 3rd Quarter ",
    fourthQuarter: " 4th Quarter ",
    firstQuarterYoy:  " 1st Quarter YoY%  ",
    secondQuarterYoy: " 2nd Quarter YoY%  ",
    thirdQuarterYoy: " 3rd Quarter YoY%  ",
    fourthQuarterYoy:  " 4th Quarter YoY%  ",
    firstHalf: " First Half  ",
    firstThreeQuarters: " 1st 3 Qtrs  ",
    fyCumulative: " FY3/23 Cml. ",
    firstHalfYoy: " First Half YoY%   ",
    firstThreeQuartersYoy: " First 3 Qtrs YoY% ",
    fyCumulativeYoy: " FY3/23 Cml. YoY%  ",
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

// const netSalesDifference: Quarter[] = quarterlyCalculation(netSales);

// const operatingIncomeDifference: Quarter[] = quarterlyCalculation(operatingIncome);

const collection = [
    netSales,
    netSalesLastFy,
    operatingIncome,
]

const yearOnYearCollection = [
    netSales,
    netSalesLastFy,
]

const [netSalesDifference, netSalesLastFYDifference, operatingIncomeDifference] = collection.map((elem) => {
    return quarterlyCalculation(elem)
})

const [netSalesCumulative, netSalesLastFYCumulative, operatingIncomeCumulative] = collection.map((elem) => {
    return cumulativeCalculation(elem)
})

const yearOnYearQuarterNetSales = yearOnYearCalculation(netSalesDifference, netSalesLastFYDifference)

const yearOnYearCumulativeNetSales = yearOnYearCalculation(netSalesCumulative, netSalesLastFYCumulative)

const operatingMarginQuarters = operatingMarginCalculation(netSalesDifference, operatingIncomeDifference)

const operatingMarginCumulative = operatingMarginCalculation(netSalesCumulative, operatingIncomeCumulative)

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
        return (netSales[index].quarter !== 0) 
                  ? {quarter: Number(
                        (((elem.quarter / netSalesLocal[index].quarter)) * 100).toFixed(2)
                     )} // .toFixed(2) to round the number by two decimal points regardless of Number will output a string, whole thing needs to be wrapped in Number to change type back from string to number 
                  : {quarter: 0} // to prevent infinity calculations
    })
   
   return calc
}

const header_1 = [ " Nintendo Co., Ltd.", " Net Sales ", " Operating Income "," Operating Margin ", " Net Profit ", "    YoY% ", "FY3/2023 ", " Consolidated Operating Results   "]





export function printMobile() {

    return `
    +${"-".repeat(34)}+
    |${header.companyName}|    ${header.fiscalYear}|
    +${"-".repeat(34)}+
    |${header.title}|
    +${"-".repeat(34)}+
    
`;}