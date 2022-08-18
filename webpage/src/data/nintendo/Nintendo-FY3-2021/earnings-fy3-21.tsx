import { 
    quarterlyCalculation, 
    cumulativeCalculation, 
    operatingMarginCalculation,  
    yearOnYearCalculation,
    Header,
    printHead,
    printNetIncome,
    printNetSales,
    printOpMargin,
    printOperatingIncome,
    Earnings,
    } from "../../../utils/earnings-logic"

    const currentQuarter = 4;

    const netSales: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 358106
        },  // first quarter
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            cmlName: " First Half  ",
            value: 769524
        },  // second quarter
        {
            category: "quarter",
            units: "currency", 
            cmlName: " 1st 3 Qtrs  ",          
            name: " 3rd Quarter ",
            value: 1404463
        }, // third quarter
        {
            category: "quarter",
            units: "currency", 
            cmlName: " FY3/21 Cml. ",         
            name: " 4th Quarter ",
            value: 1758910
        }, // fourth quarter
    ]

    const netSalesLastFy: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 172111
        }, // first quarter
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            value: 443967
        },  // second quarter
        {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ",
            value: 1022668
        }, // third quarter
        {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ",
            value: 1308519
        }, // fourth quarter
    ]

    const netSalesForecasts: Earnings[] = [ // any forecast revisions need to be placed between current and next
        {
            category: "forecast",
            units: "currency",
            name: " FY3/21 Forecast ",
            value: 1200000
        }, // current Fiscal Year Forecast
        {
            category: "forecast",
            units: "currency",
            name: " FCST Revision 1 ",
            value: 1400000
        }, // first forecast revision
        {
            category: "forecast",
            units: "currency",
            name: " FCST Revision 2 ",
            value: 1600000
        }, // second forecast revision
        {
            category: "forecast",
            units: "currency",
            name: " FY3/22 Forecast ",
            value: 1600000
        }, // next Fiscal Year Forecast
    ]

    const operatingIncome: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 144737
        }, // first quarter
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            cmlName: " First Half  ",
            value: 291424
        }, // second quarter
        {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ",
            cmlName: " 1st 3 Qtrs  ",          
            value: 521108
        }, // third quarter
        {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ",
            cmlName: " FY3/21 Cml. ",         
            value: 640634
        }, // fourth quarter
    ]
    
    const operatingIncomeLastFY: Earnings[] = [
          {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 27428
        },  // first quarter
          {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            value: 94222
        },  // second quarter
          {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ",
            value: 262930
        }, // third quarter
          {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ",
            value: 352370
        }, // fourth quarter
    ]
    
    const operatingIncomeForecasts: Earnings[] = [ // forecast revisions need to be placed between current and next
          {
            category: "forecast",
            units: "currency",
            name: " FY3/21 Forecast ",
            value: 300000
        }, // current Fiscal Year Forecast
          {
            category: "forecast",
            units: "currency",
            name: " FCST Revision 1 ",
            value: 450000
        }, // first forecast revision
          {
            category: "forecast",
            units: "currency",
            name: " FCST Revision 2 ",
            value: 560000
        }, // second forecast revision
          {
            category: "forecast",
            units: "currency",
            name: " FY3/22 Forecast ",
            value: 500000
        }, // next Fiscal Year Forecast
    ]

    const netIncome: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 106482
        }, // first quarter
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            cmlName: " First Half  ",
            value: 213123
        }, // second quarter
        {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ",
            cmlName: " 1st 3 Qtrs  ",          
            value: 376665
        }, // third quarter
        {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ",
            cmlName: " FY3/21 Cml. ",         
            value: 480376
        }, // fourth quarter
    ]
    
    const netIncomeLastFY: Earnings[] = [
          {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 16604
        }, // first quarter
          {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            value: 62018
        },  // second quarter
          {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ",
            value: 196389
        }, // third quarter
          {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ",
            value: 258641
        }, // fourth quarter
    ]
    
    const netIncomeForecasts: Earnings[] = [ // forecast revisions need to be placed between current and next
        {
            category: "forecast",
            units: "currency",
            name: " FY3/21 Forecast ",
            value: 200000
        }, // current Fiscal Year Forecast
        {
            category: "forecast",
            units: "currency",
            name: " FCST Revision 1 ",
            value: 300000
        }, // first forecast revision
        {
            category: "forecast",
            units: "currency",
            name: " FCST Revision 2 ",
            value: 400000
        }, // second forecast revision
        {
            category: "forecast",
            units: "currency",
            name: " FY3/22 Forecast ",
            value: 340000
        }, // next Fiscal Year Forecast
    ]

    const header: Header = {
        companyName: " Nintendo Co., Ltd.",
        netSales: " Net Sales ",
        operatingIncome: " Operating Income ",
        operatingMargin: " Operating Margin ",
        netIncome: " Net Profit ",
        yearOnYearPercentage: "    YoY% ",
        fiscalYear: "FY3/2021 ",
        title: " Consolidated Operating Results   ",
    }

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
            netSalesForecasts,
            operatingIncomeForecasts
    ]

    export const [operatingMarginQuarters, operatingMarginCumulative, operatingMarginQuartersLastFY, opMarginForecasts] = opMarginCollection.map((elem, index, array) => {
        // Input array of arrays of length 4, output array of arrays of length 4 and then filter to 2.
    
        return (index % 2 === 0) // this is so that it returns on even numbered indexes, i.e. 0,1 then 2,3 etc.
                ? operatingMarginCalculation(array[index], array[index+1])
                : [];
        }).filter((elem) => elem.length !== 0) // map creates empty arrays so filter removes them and then the array destructuring works correctly, note: elem is used and not array because the array contains 12 arrays! This also removes the issue of variable possibly being undefined had we not put in empty arrays since it would have automatically placed undefined.

    const printOne = printHead(header)

    const printTwo = printNetSales(header, netSalesDifference, netSalesDifferenceYoy, netSalesCumulative, netSalesCumulativeYoy, netSalesForecasts, currentQuarter)

    const printThree = printOperatingIncome(header, operatingIncomeDifference, operatingIncomeDifferenceYoy, operatingIncomeCumulative, operatingIncomeCumulativeYoy, operatingIncomeForecasts, currentQuarter);

    const printFour = printOpMargin(header, operatingMarginQuarters, operatingMarginCumulative, opMarginForecasts, currentQuarter)

    const printFive = printNetIncome(header, netIncomeDifference, netIncomeDifferenceYoy, netIncomeCumulative, netIncomeCumulativeYoy, netIncomeForecasts, currentQuarter)

export const printEarnings = 
`${printOne}
${printTwo}
${printThree}
${printFour}
${printFive}
###`;
