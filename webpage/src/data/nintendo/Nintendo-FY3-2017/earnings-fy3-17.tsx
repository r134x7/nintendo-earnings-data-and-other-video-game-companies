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
            value: 61969
        },
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            cmlName: " First Half  ",
            value: 136812
        },
        {
            category: "quarter",
            units: "currency", 
            name: " 3rd Quarter ",
            cmlName: " 1st 3 Qtrs  ",          
            value: 311121
        },
        {
            category: "quarter",
            units: "currency", 
            name: " 4th Quarter ",
            cmlName: " FY3/17 Cml. ",         
            value: 489095
        },
    ]

    const netSalesLastFy: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 90223
        },
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            value: 204182
        },
        {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ",
            value: 425664
        },
        {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ",
            value: 504459
        },
    ]

    const netSalesForecasts: Earnings[] = [
        {
            category: "forecast",
            units: "currency",
            name: " FY3/17 Forecast ",
            value: 500000
        },
        {
            category: "forecast",
            units: "currency",
            name: " FCST Revision 1 ",
            value: 470000
        },
        {
            category: "forecast",
            units: "currency",
            name: " FCST Revision 2 ",
            value: 470000
        },
        {
            category: "forecast",
            units: "currency",
            name: " FY3/18 Forecast ",
            value: 750000
        },
    ]

    const operatingIncome: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: -5134
        },
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            cmlName: " First Half  ",
            value: -5947
        },
        {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ",
            cmlName: " 1st 3 Qtrs  ",          
            value: 26315
        },
        {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ",
            cmlName: " FY3/17 Cml. ",         
            value: 29362
        },
    ]

    const operatingIncomeLastFY: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 1149
        },
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            value: 8977
        },
        {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ",
            value: 42485
        },
        {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ",
            value: 32881
        },
    ]

    const operatingIncomeForecasts: Earnings[] = [
        {
            category: "forecast",
            units: "currency",
            name: " FY3/17 Forecast ",
            value: 45000
        },
        {
            category: "forecast",
            units: "currency",
            name: " FCST Revision 1 ",
            value: 30000
        },
        {
            category: "forecast",
            units: "currency",
            name: " FCST Revision 2 ",
            value: 20000
        },
        {
            category: "forecast",
            units: "currency",
            name: " FY3/18 Forecast ",
            value: 65000
        },
    ]

    const netIncome: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: -24534  
        },
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            cmlName: " First Half  ",
            value: 38299 
        },
        {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ",
            cmlName: " 1st 3 Qtrs  ",          
            value: 102969
        },
        {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ",
            cmlName: " FY3/17 Cml. ",         
            value: 102574
        },
    ]

    const netIncomeLastFY: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 8284 
        },
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            value: 11466
        },
        {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ",
            value: 40558
        },
        {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ",
            value: 16505
        },
    ]

    const netIncomeForecasts: Earnings[] = [
        {
            category: "forecast",
            units: "currency",
            name: " FY3/17 Forecast ",
            value: 35000
        },
        {
            category: "forecast",
            units: "currency",
            name: " FCST Revision 1 ",
            value: 50000
        },
        {
            category: "forecast",
            units: "currency",
            name: " FCST Revision 2 ",
            value: 90000
        },
        {
            category: "forecast",
            units: "currency",
            name: " FY3/18 Forecast ",
            value: 45000
        },
    ]

    const header: Header = {
        companyName: " Nintendo Co., Ltd.",
        // netSales: " Net Sales ",
        // operatingIncome: " Operating Income ",
        // operatingMargin: " Operating Margin ",
        // netIncome: " Net Income ",
        section: " Net Sales ",
        yearOnYearPercentage: "    YoY% ",
        fiscalYear: "FY3/2017 ",
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
        // Input array of arrays of length 8, output array of arrays of length 8 and then filter to 4.
    
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
