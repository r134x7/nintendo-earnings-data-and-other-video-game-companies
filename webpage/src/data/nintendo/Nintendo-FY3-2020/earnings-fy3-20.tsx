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
        {quarter: 172111},  // first quarter
        {quarter: 443967},  // second quarter
        {quarter: 1022668}, // third quarter
        {quarter: 1308519}, // fourth quarter
    ]

    const netSalesLastFy: Quarter[] = [
        {quarter: 168157}, // first quarter
        {quarter: 388905},  // second quarter
        {quarter: 997295},  // third quarter
        {quarter: 1200560}, // fourth quarter
    ]

    const netSalesForecasts: Forecasts[] = [ // any forecast revisions need to be placed between current and next
        {forecast: 1250000}, // current Fiscal Year Forecast
        {forecast: 1250000}, // first forecast revision
        // {forecast: 0}, // second forecast revision
        {forecast: 1200000}, // next Fiscal Year Forecast
    ]

    const operatingIncome: Quarter[] = [
        {quarter: 27428}, // first quarter
        {quarter: 94222}, // second quarter
        {quarter: 262930}, // third quarter
        {quarter: 352370}, // fourth quarter
    ]
    
    const operatingIncomeLastFY: Quarter[] = [
          {quarter: 30535},  // first quarter
          {quarter: 61405},  // second quarter
          {quarter: 220029}, // third quarter
          {quarter: 249701}, // fourth quarter
    ]
    
    const operatingIncomeForecasts: Forecasts[] = [ // forecast revisions need to be placed between current and next
          {forecast: 260000}, // current Fiscal Year Forecast
          {forecast: 300000}, // first forecast revision
          // {forecast: 0}, // second forecast revision
          {forecast:  300000}, // next Fiscal Year Forecast
    ]

    const netIncome: Quarter[] = [
        {quarter: 16604}, // first quarter
        {quarter: 62018}, // second quarter
        {quarter: 196389}, // third quarter
        {quarter: 258641}, // fourth quarter
    ]
    
    const netIncomeLastFY: Quarter[] = [
          {quarter: 30600}, // first quarter
          {quarter: 64576},  // second quarter
          {quarter: 168785}, // third quarter
          {quarter: 194009}, // fourth quarter
    ]
    
    const netIncomeForecasts: Forecasts[] = [ // forecast revisions need to be placed between current and next
        {forecast: 180000}, // current Fiscal Year Forecast
        {forecast: 210000}, // first forecast revision
        // {forecast: 0}, // second forecast revision
        {forecast: 200000}, // next Fiscal Year Forecast
    ]

    const header: Header = {
        companyName: " Nintendo Co., Ltd.",
        netSales: " Net Sales ",
        operatingIncome: " Operating Income ",
        operatingMargin: " Operating Margin ",
        netIncome: " Net Income ",
        yearOnYearPercentage: "    YoY% ",
        fiscalYear: "FY3/2020 ",
        title: " Consolidated Operating Results   ",
    }

    const rowCumulativesApplied: RowCumulatives[] =[
        {cumulative: " First Half  "},
        {cumulative: " 1st 3 Qtrs  "},
        {cumulative: " FY3/20 Cml. "},
    ]

    const rowForecastsApplied: RowForecasts[] = [
        {forecast: " FY3/20 Forecast "},
        {forecast: " FCST Revision 1 "},
        {forecast: " FCST Revision 2 "},
        {forecast: " FCST Revision 3 "},
        {forecast: " FY3/21 Forecast "},
    ]

    const collection = [
        netSales,
        netSalesLastFy,
        operatingIncome,
        operatingIncomeLastFY,
        netIncome,
        netIncomeLastFY
    ]

    export const [netSalesDifference, netSalesLastFYDifference, operatingIncomeDifference, operatingIncomeLastFYDifference, netIncomeDifference, netIncomeLastFYDifference] = collection.map((elem) => {
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
            netSalesLastFYDifference,
            operatingIncomeLastFYDifference,
    ]

    export const [operatingMarginQuarters, operatingMarginCumulative, operatingMarginQuartersLastFY] = opMarginCollection.map((elem, index, array) => {
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
