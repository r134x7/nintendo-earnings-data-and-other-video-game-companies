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

    const netSales: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 172111
        }, 
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            cmlName: " First Half  ",
            value: 443967
        }, 
        {
            category: "quarter",
            units: "currency", 
            cmlName: " 1st 3 Qtrs  ",          
            name: " 3rd Quarter ",
            value: 1022668
        },
        {
            category: "quarter",
            units: "currency", 
            cmlName: " FY3/20 Cml. ",         
            name: " 4th Quarter ",
            value: 1308519
        },
    ]

    const netSalesLastFy: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 168157
        }, // first quarter
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            value: 388905
        },  // second quarter
        {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ",
            value: 997295
        },  // third quarter
        {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ",
            value: 1200560
        }, // fourth quarter
    ]

    const netSalesForecasts: Earnings[] = [ // any forecast revisions need to be placed between current and next
        {
            category: "forecast",
            units: "currency",
            name: " FY3/20 Forecast ",
            value: 1250000
        },
        {
            category: "forecast",
            units: "currency",
            name: " FCST Revision 1 ",
            value: 1250000
        }, 
        {
            category: "forecast",
            units: "currency",
            name: " FY3/21 Forecast ",
            value: 1200000
        },
    ]

    const operatingIncome: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 27428
        }, 
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            cmlName: " First Half  ",
            value: 94222
        }, 
        {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ",
            cmlName: " 1st 3 Qtrs  ",
            value: 262930
        }, 
        {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ",
            cmlName: " FY3/20 Cml. ",
            value: 352370
        }, 
    ]
    
    const operatingIncomeLastFY: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 30535
        },  // first quarter
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            value: 61405
        },  // second quarter
        {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ",
            value: 220029
        }, // third quarter
        {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ",
            value: 249701
        }, // fourth quarter
    ]
    
    const operatingIncomeForecasts: Earnings[] = [ // forecast revisions need to be placed between current and next
        {
            category: "forecast",
            units: "currency",
            name: " FY3/20 Forecast ",
            value: 260000
        }, // current Fiscal Year Forecast
        {
            category: "forecast",
            units: "currency",
            name: " FCST Revision 1 ",
            value: 300000
        },
        {
            category: "forecast",
            units: "currency",
            name: " FY3/21 Forecast ",
            value:  300000
        }, // next Fiscal Year Forecast
    ]

    const netIncome: Earnings[] = [
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
            cmlName: " First Half  ",
            value: 62018
        }, // second quarter
        {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ",
            cmlName: " 1st 3 Qtrs  ",
            value: 196389
        }, // third quarter
        {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ",
            cmlName: " FY3/20 Cml. ",
            value: 258641
        }, // fourth quarter
    ]
    
    const netIncomeLastFY: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: 30600
        }, // first quarter
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            value: 64576
        },  // second quarter
        {
            category: "quarter",
            units: "currency",
            name: " 3rd Quarter ",
            value: 168785
        }, // third quarter
        {
            category: "quarter",
            units: "currency",
            name: " 4th Quarter ",
            value: 194009
        }, // fourth quarter
    ]
    
    const netIncomeForecasts: Earnings[] = [ // forecast revisions need to be placed between current and next
        {
            category: "forecast",
            units: "currency",
            name: " FY3/20 Forecast ",
            value: 180000
        }, // current Fiscal Year Forecast
        {
            category: "forecast",
            units: "currency",
            name: " FCST Revision 1 ",
            value: 210000
        },
        {
            category: "forecast",
            units: "currency",
            name: " FY3/21 Forecast ",
            value: 200000
        }, // next Fiscal Year Forecast
    ]

    const header: Header = {
        companyName: " Nintendo Co., Ltd.",
        // netSales: " Net Sales ",
        // operatingIncome: " Operating Income ",
        // operatingMargin: " Operating Margin ",
        // netIncome: " Net Income ",
        yearOnYearPercentage: "    YoY% ",
        fiscalYear: "FY3/2020 ",
        title: " Consolidated Operating Results   ",
        section: " Net Sales ",
        borderLineLengthBody: 38,
        borderLineLengthFooter: 32,
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

    const [printTwo, printThree, printFour, printFive] = [0, 1, 2, 3].map((elem, index, array) => {



        if (index === 0) {
            // let printHeader: Header = {
                // ...header, section: " Operating Income " 
            // }

            return printBody(
                header, 
                netSalesDifference,
                netSalesDifferenceYoy,
                netSalesCumulative,
                netSalesCumulativeYoy,
                netSalesForecasts, 
                currentQuarter
                )
        } else if (index === 1) {
            let printHeader: Header = {
                ...header, section: " Operating Income " 
            }

            return printBody(
                printHeader,
                operatingIncomeDifference,
                operatingIncomeDifferenceYoy,
                operatingIncomeCumulative,
                operatingIncomeCumulativeYoy,
                operatingIncomeForecasts,
                currentQuarter,
            )
        } else if (index === 2) {
            let printHeader: Header = {
                ...header, section: " Operating Margin " 
            }

            return printBody(
                printHeader,
                operatingMarginQuarters,
                [],
                operatingMarginCumulative,
                [],
                opMarginForecasts,
                currentQuarter
            )
        } else {
            let printHeader: Header = {
                ...header, section: " Net Income " 
            }

            return printBody(
                printHeader,
                netIncomeDifference,
                netIncomeDifferenceYoy,
                netIncomeCumulative,
                netIncomeCumulativeYoy,
                netIncomeForecasts,
                currentQuarter,
            )
        }
    })

    // const printTwo = printNetSales(header, netSalesDifference, netSalesDifferenceYoy, netSalesCumulative, netSalesCumulativeYoy, netSalesForecasts, currentQuarter)

    // const printThree = printOperatingIncome(header, operatingIncomeDifference, operatingIncomeDifferenceYoy, operatingIncomeCumulative, operatingIncomeCumulativeYoy, operatingIncomeForecasts, currentQuarter);

    // const printFour = printOpMargin(header, operatingMarginQuarters, operatingMarginCumulative, opMarginForecasts, currentQuarter)

    // const printFive = printNetIncome(header, netIncomeDifference, netIncomeDifferenceYoy, netIncomeCumulative, netIncomeCumulativeYoy, netIncomeForecasts, currentQuarter)

export const printEarnings = 
`${printOne}
${printTwo}
${printThree}
${printFour}
${printFive}
###`;
