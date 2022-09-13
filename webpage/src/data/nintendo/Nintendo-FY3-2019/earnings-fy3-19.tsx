import { 
    quarterlyCalculation, 
    cumulativeCalculation, 
    operatingMarginCalculation,
    yearOnYearCalculation,
    Header,
    printHead,
    printBody,
    Earnings, 
    } from "../../../utils/earnings-logic"

    const currentQuarter = 4;

    export const netSales: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 168157
        },  
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            cmlName: " First Half  ",
            value: 388905
        },  
        {
            category: "quarter",
            units: "currency", 
            cmlName: " 1st 3 Qtrs  ",          
            name: " 3rd Quarter ",
            value: 997295
        }, 
        {      
            category: "quarter",
            units: "currency", 
            cmlName: " FY3/19 Cml. ",         
            name: " 4th Quarter ",
            value: 1200560
        }, 
    ]

    export const netSalesLastFY: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 154069
        }, 
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            value: 374041
        },  
        {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ",
            value: 857012
        },  
        {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ",
            value: 1055682
        }, 
    ]

    const netSalesForecasts: Earnings[] = [ // any forecast revisions need to be placed between current and next
        {
            category: "forecast",
            units: "currency",
            name: " FY3/19 Forecast ",
            value: 1200000
        },
        {
            category: "forecast",
            units: "currency",
            name: " FY3/20 Forecast ",
            value: 1250000
        },
    ]

    export const operatingIncome: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 30535
        }, 
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            cmlName: " First Half  ",
            value: 61405
        }, 
        {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ",
            cmlName: " 1st 3 Qtrs  ",
            value: 220029
        }, 
        {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ",
            cmlName: " FY3/19 Cml. ",
            value: 249701
        }, 
    ]
    
    export const operatingIncomeLastFY: Earnings[] = [
          {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 16208
        },  
          {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ", 
            value: 39961
        },  
          {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ", 
            value: 156462
        }, 
          {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ", 
            value: 177557
        }, 
    ]
    
    const operatingIncomeForecasts: Earnings[] = [ // forecast revisions need to be placed between current and next
        {
            category: "forecast",
            units: "currency",
            name: " FY3/19 Forecast ",
            value: 225000
        },
        {
            category: "forecast",
            units: "currency",
            name: " FY3/20 Forecast ",
            value: 260000
        },
    ]

    export const netIncome: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 30600
        }, 
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            cmlName: " First Half  ",
            value: 64576
        }, 
        {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ",
            cmlName: " 1st 3 Qtrs  ",
            value:  168785
        }, 
        {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ",
            cmlName: " FY3/19 Cml. ",
            value: 194009
        }, 
    ]
    
    export const netIncomeLastFY: Earnings[] = [
          {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 21260
        }, 
          {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            value: 51503
        },  
          {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ",
            value: 135165
        }, 
          {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ",
            value: 139590
        }, 
    ]
    
    const netIncomeForecasts: Earnings[] = [ // value revisions need to be placed between current and next
        {
            category: "forecast",
            units: "currency",
            name: " FY3/19 Forecast ",
            value: 165000
        }, 
        {
            category: "forecast",
            units: "currency",
            name: " FY3/20 Forecast ",
            value: 180000
        }, 
    ]

    const header: Header = {
        companyName: " Nintendo Co., Ltd.",
        yearOnYearPercentage: "|    YoY% |",
        fiscalYear: "FY3/2019 ",
        title: " Consolidated Operating Results   ",
        section: "| Net Sales                  ",
        borderLineLengthBody: 38,
        borderLineLengthFooter: 32,
    }

    const [headerOperatingIncome, headerOpMargin, headerNetIncome]: Header[] = [
        {
            ...header, section: "| Operating Income           "
        },
        {
            ...header,
            yearOnYearPercentage: "|", 
            section: "| Operating Margin      ",
            borderLineLengthBody: 23, 
            borderLineLengthFooter: 27,  
        },
        {
            ...header, section: "| Net Income                 "
        },
    ] 

    const collection = [
        netSales,
        netSalesLastFY,
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
            operatingIncomeForecasts,
    ]

    export const [
        operatingMarginQuarters, 
        operatingMarginCumulative,
        operatingMarginQuartersLastFY,
        operatingMarginCumulativeLastFY,
        opMarginForecasts
    ] = opMarginCollection.map((elem, index, array) => {
        // Input array of arrays of length 4, output array of arrays of length 4 and then filter to 2.
    
        return (index % 2 === 0) // this is so that it returns on even numbered indexes, i.e. 0,1 then 2,3 etc.
                ? operatingMarginCalculation(array[index], array[index+1])
                : [];
        }).filter((elem) => elem.length !== 0) // map creates empty arrays so filter removes them and then the array destructuring works correctly, note: elem is used and not array because the array contains 12 arrays! This also removes the issue of variable possibly being undefined had we not put in empty arrays since it would have automatically placed undefined.

    const printOne = printHead(header)
    
    const netSalesArrays = [
        header, 
        netSalesDifference,
        netSalesDifferenceYoy,
        netSalesCumulative,
        netSalesCumulativeYoy,
        netSalesForecasts, 
        currentQuarter
    ] as const; // to create read-only tuple

    const operatingIncomeArrays = [
        headerOperatingIncome,
        operatingIncomeDifference,
        operatingIncomeDifferenceYoy,
        operatingIncomeCumulative,
        operatingIncomeCumulativeYoy,
        operatingIncomeForecasts,
        currentQuarter,
    ] as const; // to create read-only tuple;

    const opMarginArrays = [
        headerOpMargin,
        operatingMarginQuarters,
        operatingMarginQuarters, // couldn't use empty array, had to duplicate a parameter
        operatingMarginCumulative,
        operatingMarginCumulative, // couldn't use empty array, had to duplicate a parameter
        opMarginForecasts,
        currentQuarter 
    ] as const; // to create read-only tuple

    const netIncomeArrays = [
        headerNetIncome,
        netIncomeDifference,
        netIncomeDifferenceYoy,
        netIncomeCumulative,
        netIncomeCumulativeYoy,
        netIncomeForecasts,
        currentQuarter,
    ] as const; // to create read-only tuple

    const [printTwo, printThree, printFour, printFive] = [
    netSalesArrays, operatingIncomeArrays, opMarginArrays, netIncomeArrays ].map((elem, index, array) => {

            return printBody(...elem)
    })

export const printEarnings = 
`${printOne}
${printTwo}
${printThree}
${printFour}
${printFive}
###`;
