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
        {quarter: 322647},  // first quarter
        {quarter: 624272},  // second quarter
        {quarter: 1320219}, // third quarter
        {quarter: 1695344}, // fourth quarter
    ]

    const netSalesLastFy: Quarter[] = [
        {quarter: 358106}, // first quarter
        {quarter: 769524},  // second quarter
        {quarter: 1404463}, // third quarter
        {quarter: 1758910}, // fourth quarter
    ]

    const netSalesForecasts: Forecasts[] = [ // any forecast revisions need to be placed between current and next
        {forecast: 1600000}, // current Fiscal Year Forecast
        {forecast: 1600000}, // first forecast revision
        {forecast: 1650000}, // second forecast revision
        {forecast: 1600000}, // next Fiscal Year Forecast
    ]

    const operatingIncome: Quarter[] = [
        {quarter: 119752}, // first quarter
        {quarter: 219959}, // second quarter
        {quarter: 472551}, // third quarter
        {quarter: 592760}, // fourth quarter
    ]
    
    const operatingIncomeLastFY: Quarter[] = [
          {quarter: 144737}, // first quarter
          {quarter: 291424}, // second quarter
          {quarter: 521108}, // third quarter
          {quarter: 640634}, // fourth quarter
    ]
    
    const operatingIncomeForecasts: Forecasts[] = [ // forecast revisions need to be placed between current and next
          {forecast: 500000}, // current Fiscal Year Forecast
          {forecast: 520000}, // first forecast revision
          {forecast: 560000}, // second forecast revision
          {forecast: 500000}, // next Fiscal Year Forecast
    ]

    const netIncome: Quarter[] = [
        {quarter: 92747}, // first quarter
        {quarter: 171834}, // second quarter
        {quarter: 367387}, // third quarter
        {quarter: 477691}, // fourth quarter
    ]
    
    const netIncomeLastFY: Quarter[] = [
          {quarter: 106482},// first quarter
          {quarter: 213123}, // second quarter
          {quarter: 376665}, // third quarter
          {quarter: 480376}, // fourth quarter
    ]
    
    const netIncomeForecasts: Forecasts[] = [ // forecast revisions need to be placed between current and next
        {forecast: 340000}, // current Fiscal Year Forecast
        {forecast: 350000}, // first forecast revision
        {forecast: 400000}, // second forecast revision
        {forecast: 340000}, // next Fiscal Year Forecast
    ]

    const header: Header = {
        companyName: " Nintendo Co., Ltd.",
        netSales: " Net Sales ",
        operatingIncome: " Operating Income ",
        operatingMargin: " Operating Margin ",
        netIncome: " Net Income ",
        yearOnYearPercentage: "    YoY% ",
        fiscalYear: "FY3/2022 ",
        title: " Consolidated Operating Results   ",
    }

    const rowCumulativesApplied: RowCumulatives[] =[
        {cumulative: " First Half  "},
        {cumulative: " 1st 3 Qtrs  "},
        {cumulative: " FY3/22 Cml. "},
    ]

    const rowForecastsApplied: RowForecasts[] = [
        {forecast: " FY3/22 Forecast "},
        {forecast: " FCST Revision 1 "},
        {forecast: " FCST Revision 2 "},
        {forecast: " FCST Revision 3 "},
        {forecast: " FY3/23 Forecast "},
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
