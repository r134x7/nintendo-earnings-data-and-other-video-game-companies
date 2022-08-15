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
    EarningsForecast,
    EarningsQuarter,
    } from "../../../utils/earnings-logic"

    const currentQuarter = 4;

    const netSales: EarningsQuarter[] = [
        {
            type: "currency",
            quarter: " 1st Quarter ",
            value: 61969
        },
        {
            type: "currency",
            quarter: " 2nd Quarter ",
            value: 136812
        },
        {
            type: "currency",
            quarter: " 3rd Quarter ",
            value: 311121
        },
        {
            type: "currency",
            quarter: " 4th Quarter ",
            value: 489095
        },
    ]

    const netSalesLastFy: EarningsQuarter[] = [
        {
            type: "currency",
            quarter: " 1st Quarter ",
            value: 90223
        },
        {
            type: "currency",
            quarter: " 2nd Quarter ",
            value: 204182
        },
        {
            type: "currency",
            quarter: " 3rd Quarter ",
            value: 425664
        },
        {
            type: "currency",
            quarter: " 4th Quarter ",
            value: 504459
        },
    ]

    const netSalesForecasts: EarningsQuarter[] = [
        {
            type: "currency",
            quarter: " FY3/17 Forecast ",
            value: 500000
        },
        {
            type: "currency",
            quarter: " FCST Revision 1 ",
            value: 470000
        },
        {
            type: "currency",
            quarter: " FCST Revision 2 ",
            value: 470000
        },
        {
            type: "currency",
            quarter: " FY3/18 Forecast ",
            value: 750000
        },
    ]

    // const netSales: Quarter[] = [
    //     {quarter: 61969},  // first quarter
    //     {quarter: 136812},  // second quarter
    //     {quarter: 311121}, // third quarter
    //     {quarter: 489095}, // fourth quarter
    // ]

    // const netSalesLastFy: Quarter[] = [
    //     {quarter: 90223}, // first quarter
    //     {quarter: 204182}, // second quarter
    //     {quarter: 425664}, // third quarter
    //     {quarter: 504459}, // fourth quarter
    // ]

    // const netSalesForecasts: Forecasts[] = [ // any forecast revisions need to be placed between current and next
    //     {forecast: 500000}, // current Fiscal Year Forecast
    //     {forecast: 470000}, // first forecast revision
    //     {forecast: 470000}, // second forecast revision
    //     {forecast: 750000}, // next Fiscal Year Forecast
    // ]

    const operatingIncome: EarningsQuarter[] = [
        {
            type: "currency",
            quarter: " 1st Quarter ",
            value: -5134
        },
        {
            type: "currency",
            quarter: " 2nd Quarter ",
            value: -5947
        },
        {
            type: "currency",
            quarter: " 3rd Quarter ",
            value: 26315
        },
        {
            type: "currency",
            quarter: " 4th Quarter ",
            value: 29362
        },
    ]

    const operatingIncomeLastFY: EarningsQuarter[] = [
        {
            type: "currency",
            quarter: " 1st Quarter ",
            value: 1149
        },
        {
            type: "currency",
            quarter: " 2nd Quarter ",
            value: 8977
        },
        {
            type: "currency",
            quarter: " 3rd Quarter ",
            value: 42485
        },
        {
            type: "currency",
            quarter: " 4th Quarter ",
            value: 32881
        },
    ]

    const operatingIncomeForecasts: EarningsQuarter[] = [
        {
            type: "currency",
            quarter: " FY3/17 Forecast ",
            value: 45000
        },
        {
            type: "currency",
            quarter: " FCST Revision 1 ",
            value: 30000
        },
        {
            type: "currency",
            quarter: " FCST Revision 2 ",
            value: 20000
        },
        {
            type: "currency",
            quarter: " FY3/18 Forecast ",
            value: 65000
        },
    ]

    // const operatingIncome: Quarter[] = [
    //     {quarter: -5134}, // first quarter
    //     {quarter: -5947}, // second quarter
    //     {quarter: 26315}, // third quarter
    //     {quarter: 29362}, // fourth quarter
    // ]
    
    // const operatingIncomeLastFY: Quarter[] = [
    //       {quarter: 1149}, // first quarter
    //       {quarter: 8977}, // second quarter
    //       {quarter: 42485}, // third quarter
    //       {quarter: 32881}, // fourth quarter
    // ]
    
    // const operatingIncomeForecasts: Forecasts[] = [ // forecast revisions need to be placed between current and next
    //       {forecast: 45000}, // current Fiscal Year Forecast
    //       {forecast: 30000}, // first forecast revision
    //       {forecast: 20000}, // second forecast revision
    //       {forecast: 65000}, // next Fiscal Year Forecast
    // ]

    const netIncome: EarningsQuarter[] = [
        {
            type: "currency",
            quarter: " 1st Quarter ",
            value: -24534  
        },
        {
            type: "currency",
            quarter: " 2nd Quarter ",
            value: 38299 
        },
        {
            type: "currency",
            quarter: " 3rd Quarter ",
            value: 102969
        },
        {
            type: "currency",
            quarter: " 4th Quarter ",
            value: 102574
        },
    ]

    const netIncomeLastFY: EarningsQuarter[] = [
        {
            type: "currency",
            quarter: " 1st Quarter ",
            value: 8284 
        },
        {
            type: "currency",
            quarter: " 2nd Quarter ",
            value: 11466
        },
        {
            type: "currency",
            quarter: " 3rd Quarter ",
            value: 40558
        },
        {
            type: "currency",
            quarter: " 4th Quarter ",
            value: 16505
        },
    ]

    const netIncomeForecasts: EarningsQuarter[] = [
        {
            type: "currency",
            quarter: " FY3/17 Forecast ",
            value: 35000
        },
        {
            type: "currency",
            quarter: " FCST Revision 1 ",
            value: 50000
        },
        {
            type: "currency",
            quarter: " FCST Revision 2 ",
            value: 90000
        },
        {
            type: "currency",
            quarter: " FY3/18 Forecast ",
            value: 45000
        },
    ]

    // const netIncome: Quarter[] = [
    //     {quarter: -24534}, // first quarter
    //     {quarter: 38299}, // second quarter
    //     {quarter: 102969}, // third quarter
    //     {quarter: 102574}, // fourth quarter
    // ]
    
    // const netIncomeLastFY: Quarter[] = [
    //       {quarter: 8284 }, // first quarter
    //       {quarter: 11466}, // second quarter
    //       {quarter: 40558}, // third quarter
    //       {quarter: 16505}, // fourth quarter
    // ]
    
    // const netIncomeForecasts: Forecasts[] = [ // forecast revisions need to be placed between current and next
    //         {forecast: 35000}, // current Fiscal Year Forecast
    //         {forecast: 50000}, // first forecast revision
    //         {forecast: 90000}, // second forecast revision
    //         {forecast: 45000}, // next Fiscal Year Forecast
    // ]

    const header: Header = {
        companyName: " Nintendo Co., Ltd.",
        netSales: " Net Sales ",
        operatingIncome: " Operating Income ",
        operatingMargin: " Operating Margin ",
        netIncome: " Net Income ",
        yearOnYearPercentage: "    YoY% ",
        fiscalYear: "FY3/2017 ",
        title: " Consolidated Operating Results   ",
    }

    const rowCumulativesApplied: RowCumulatives[] =[
        {cumulative: " First Half  "},
        {cumulative: " 1st 3 Qtrs  "},
        {cumulative: " FY3/17 Cml. "},
    ]

    const rowForecastsApplied: RowForecasts[] = [
        {forecast: " FY3/17 Forecast "},
        {forecast: " FCST Revision 1 "},
        {forecast: " FCST Revision 2 "},
        {forecast: " FCST Revision 3 "},
        {forecast: " FY3/18 Forecast "},
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
