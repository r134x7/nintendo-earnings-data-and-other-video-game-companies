import { 
    quarterlyCalculation, 
    cumulativeCalculation, 
    operatingMarginCalculation, operatingMarginForecastCalculation, 
    yearOnYearCalculation,
    Quarter,
    Forecasts,
    Header,
    RowCumulatives,
    RowForecasts,
    printHead,
    printNetIncome,
    printNetSales,
    printOpMargin,
    printOperatingIncome,
    } from "../../../utils/earnings-logic"

    const currentQuarter = 4;

    const netSales: Quarter[] = [
        {quarter: 154069},  // first quarter
        {quarter: 374041},  // second quarter
        {quarter: 857012}, // third quarter
        {quarter: 1055682}, // fourth quarter
    ]

    const netSalesLastFy: Quarter[] = [
        {quarter: 61969}, // first quarter
        {quarter: 136812}, // second quarter
        {quarter: 311121}, // third quarter
        {quarter: 489095}, // fourth quarter
    ]

    const netSalesForecasts: Forecasts[] = [ // any forecast revisions need to be placed between current and next
        {forecast: 750000}, // current Fiscal Year Forecast
        {forecast: 960000}, // first forecast revision
        {forecast: 1020000}, // second forecast revision
        {forecast: 1200000}, // next Fiscal Year Forecast
    ]

    const operatingIncome: Quarter[] = [
        {quarter: 16208}, // first quarter
        {quarter: 39961}, // second quarter
        {quarter: 156462}, // third quarter
        {quarter: 177557}, // fourth quarter
    ]
    
    const operatingIncomeLastFY: Quarter[] = [
          {quarter: -5134}, // first quarter
          {quarter: -5947}, // second quarter
          {quarter: 26315}, // third quarter
          {quarter: 29362}, // fourth quarter
    ]
    
    const operatingIncomeForecasts: Forecasts[] = [ // forecast revisions need to be placed between current and next
          {forecast: 65000}, // current Fiscal Year Forecast
          {forecast: 120000}, // first forecast revision
          {forecast: 160000}, // second forecast revision
          {forecast: 225000}, // next Fiscal Year Forecast
    ]

    const netIncome: Quarter[] = [
        {quarter: 21260}, // first quarter
        {quarter: 51503}, // second quarter
        {quarter: 135165}, // third quarter
        {quarter: 139590}, // fourth quarter
    ]
    
    const netIncomeLastFY: Quarter[] = [
          {quarter: -24534},// first quarter
          {quarter: 38299},  // second quarter
          {quarter: 102969}, // third quarter
          {quarter: 102574}, // fourth quarter
    ]
    
    const netIncomeForecasts: Forecasts[] = [ // forecast revisions need to be placed between current and next
            {forecast: 45000}, // current Fiscal Year Forecast
            {forecast: 85000}, // first forecast revision
            {forecast: 120000}, // second forecast revision
            {forecast: 165000}, // next Fiscal Year Forecast
    ]

    const header: Header = {
        companyName: " Nintendo Co., Ltd.",
        netSales: " Net Sales ",
        operatingIncome: " Operating Income ",
        operatingMargin: " Operating Margin ",
        netIncome: " Net Profit ",
        yearOnYearPercentage: "    YoY% ",
        fiscalYear: "FY3/2018 ",
        title: " Consolidated Operating Results   ",
    }

    const rowCumulativesApplied: RowCumulatives[] =[
        {cumulative: " First Half  "},
        {cumulative: " 1st 3 Qtrs  "},
        {cumulative: " FY3/18 Cml. "},
    ]

    const rowForecastsApplied: RowForecasts[] = [
        {forecast: " FY3/18 Forecast "},
        {forecast: " FCST Revision 1 "},
        {forecast: " FCST Revision 2 "},
        {forecast: " FCST Revision 3 "},
        {forecast: " FY3/19 Forecast "},
    ]

    const collection = [
        netSales,
        netSalesLastFy,
        operatingIncome,
        operatingIncomeLastFY,
        netIncome,
        netIncomeLastFY
    ]

    const [netSalesDifference, netSalesLastFYDifference, operatingIncomeDifference, operatingIncomeLastFYDifference, netIncomeDifference, netIncomeLastFYDifference] = collection.map((elem) => {
        return quarterlyCalculation(elem)
    })

    const [netSalesCumulative, netSalesLastFYCumulative, operatingIncomeCumulative, operatingIncomeLastFYCumlative,
        netIncomeCumulative, netIncomeLastFYCumulative] = collection.map((elem) => {
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
        netIncomeDifference,
        netIncomeLastFYDifference,
        netIncomeCumulative,
        netIncomeLastFYCumulative,
    ]

    const [netSalesDifferenceYoy, netSalesCumulativeYoy, operatingIncomeDifferenceYoy, operatingIncomeCumulativeYoy, netIncomeDifferenceYoy, netIncomeCumulativeYoy] = yearOnYearCollection.map((elem, index, array) => {
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

    const printOne = printHead(header)

    const printTwo = printNetSales(header, netSalesDifference, netSalesDifferenceYoy, netSalesCumulative, netSalesCumulativeYoy, netSalesForecasts, rowCumulativesApplied, rowForecastsApplied, currentQuarter)

    const printThree = printOperatingIncome(header, operatingIncomeDifference, operatingIncomeDifferenceYoy, operatingIncomeCumulative, operatingIncomeCumulativeYoy, operatingIncomeForecasts, rowCumulativesApplied, rowForecastsApplied, currentQuarter);

    const printFour = printOpMargin(header, operatingMarginQuarters, operatingMarginCumulative, opMarginForecasts, rowCumulativesApplied, rowForecastsApplied, currentQuarter)

    const printFive = printNetIncome(header, netIncomeDifference, netIncomeDifferenceYoy, netIncomeCumulative, netIncomeCumulativeYoy, netIncomeForecasts, rowCumulativesApplied, rowForecastsApplied, currentQuarter)

export const printEarnings = 
`${printOne}
${printTwo}
${printThree}
${printFour}
${printFive}
###`;
