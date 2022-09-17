import { 
    quarterlyCalculation, 
    cumulativeCalculation, 
    operatingMarginCalculation,
    yearOnYearCalculation,
    Header,
    printHead,
    printBody,
    Earnings,
    } from "../../../utils/earnings_logic"

    const currentQuarter = 1;

    export const netSales: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 307460 
        },  // first quarter
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            cmlName: " First Half  ",
            value: 307460 
        },  // second quarter
        {
            category: "quarter",
            units: "currency", 
            name: " 3rd Quarter ",
            cmlName: " 1st 3 Qtrs  ",          
            value: 307460 
        }, // third quarter
        {
            category: "quarter",
            units: "currency", 
            name: " 4th Quarter ",
            cmlName: " FY3/22 Cml. ",         
            value: 307460 
        }, // fourth quarter
    ]

    export const netSalesLastFY: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 322647
        },  // first quarter
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            cmlName: " First Half  ",
            value: 624272
        },  // second quarter
        {
            category: "quarter",
            units: "currency", 
            name: " 3rd Quarter ",
            cmlName: " 1st 3 Qtrs  ",          
            value: 1320219
        }, // third quarter
        {
            category: "quarter",
            units: "currency", 
            name: " 4th Quarter ",
            cmlName: " FY3/22 Cml. ",         
            value: 1695344
        }, // fourth quarter
    ]

    const netSalesForecasts: Earnings[] = [ // any forecast revisions need to be placed between current and next
        {
            category: "forecast",
            units: "currency",
            name: " FY3/23 Forecast ",
            value: 1600000
        }, // current Fiscal Year Forecast
        // {
        //     category: "forecast",
        //     units: "currency",
        //     name: " FCST Revision 1 ",
        //     value: 1600000
        // }, // first forecast revision
        // {
        //     category: "forecast",
        //     units: "currency",
        //     name: " FCST Revision 2 ",
        //     value: 1650000
        // }, // second forecast revision
        // {
        //     category: "forecast",
        //     units: "currency",
        //     name: " FY3/23 Forecast ",
        //     value: 1600000
        // }, // next Fiscal Year Forecast
    ]

    export const operatingIncome: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 101647 
        }, // first quarter
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            cmlName: " First Half  ",
            value: 101647 
        }, // second quarter
        {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ",
            cmlName: " 1st 3 Qtrs  ",
            value: 101647 
        }, // third quarter
        {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ",
            cmlName: " FY3/22 Cml. ",
            value: 101647 
        }, // fourth quarter
    ]
    
    export const operatingIncomeLastFY: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 119752
        }, // first quarter
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            cmlName: " First Half  ",
            value: 219959
        }, // second quarter
        {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ",
            cmlName: " 1st 3 Qtrs  ",
            value: 472551
        }, // third quarter
        {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ",
            cmlName: " FY3/22 Cml. ",
            value: 592760
        }, // fourth quarter
    ]
    
    const operatingIncomeForecasts: Earnings[] = [ // forecast revisions need to be placed between current and next
          {
            category: "forecast",
            units: "currency",
            name: " FY3/23 Forecast ",
            value: 500000
        }, // current Fiscal Year Forecast
        //   {
        //     category: "forecast",
        //     units: "currency",
        //     name: " FCST Revision 1 ",
        //     value: 520000
        // }, // first forecast revision
        //   {
        //     category: "forecast",
        //     units: "currency",
        //     name: " FCST Revision 2 ",
        //     value: 560000
        // }, // second forecast revision
        //   {
        //     category: "forecast",
        //     units: "currency",
        //     name: " FY3/23 Forecast ",
        //     value: 500000
        // }, // next Fiscal Year Forecast
    ]

    export const netIncome: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 118984 
        }, // first quarter
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            cmlName: " First Half  ",
            value: 118984 
        }, // second quarter
        {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ",
            cmlName: " 1st 3 Qtrs  ",          
            value: 118984 
        }, // third quarter
        {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ",
            cmlName: " FY3/22 Cml. ",         
            value: 118984 
        }, // fourth quarter
    ]
    
    export const netIncomeLastFY: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 92747
        }, // first quarter
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            cmlName: " First Half  ",
            value: 171834
        }, // second quarter
        {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ",
            cmlName: " 1st 3 Qtrs  ",          
            value: 367387
        }, // third quarter
        {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ",
            cmlName: " FY3/22 Cml. ",         
            value: 477691
        }, // fourth quarter
    ]
    
    const netIncomeForecasts: Earnings[] = [ // forecast revisions need to be placed between current and next
        {
            category: "forecast",
            units: "currency",
            name: " FY3/22 Forecast ",
            value: 480000
        }, // current Fiscal Year Forecast
        // {
        //     category: "forecast",
        //     units: "currency",
        //     name: " FCST Revision 1 ",
        //     value: 350000
        // }, // first forecast revision
        // {
        //     category: "forecast",
        //     units: "currency",
        //     name: " FCST Revision 2 ",
        //     value: 400000
        // }, // second forecast revision
        // {
        //     category: "forecast",
        //     units: "currency",
        //     name: " FY3/23 Forecast ",
        //     value: 340000
        // }, // next Fiscal Year Forecast
    ]

    const header: Header = {
        companyName: " Nintendo Co., Ltd.",
        yearOnYearPercentage: "|    YoY% |",
        fiscalYear: "FY3/2023 ",
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

    export const [netSalesCumulative, netSalesLastFYCumulative, operatingIncomeCumulative, operatingIncomeLastFYCumulative,
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
        operatingIncomeLastFYCumulative,
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
            netSalesLastFYCumulative,
            operatingIncomeLastFYCumulative,
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
