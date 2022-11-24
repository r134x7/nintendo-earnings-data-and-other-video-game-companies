import { 
    quarterlyCalculation, 
    cumulativeCalculation, 
    operatingMarginCalculation,
    yearOnYearCalculation,
    Header,
    printHead,
    printBody,
    Earnings,
    } from "../../utils/earnings_logic";

import consolidatedEarnings2023 from "./Consolidated_Earnings/consolidated_earnings_fy3_2023.json";
import consolidatedEarnings2022 from "./Consolidated_Earnings/consolidated_earnings_fy3_2022.json";
import consolidatedEarnings2021 from "./Consolidated_Earnings/consolidated_earnings_fy3_2021.json";
import consolidatedEarnings2020 from "./Consolidated_Earnings/consolidated_earnings_fy3_2020.json";
import consolidatedEarnings2019 from "./Consolidated_Earnings/consolidated_earnings_fy3_2019.json";
import consolidatedEarnings2018 from "./Consolidated_Earnings/consolidated_earnings_fy3_2018.json";
import consolidatedEarnings2017 from "./Consolidated_Earnings/consolidated_earnings_fy3_2017.json";
import consolidatedEarnings2016 from "./Consolidated_Earnings/consolidated_earnings_fy3_2016.json";
import { netSales } from "./Nintendo_FY3_2023/earnings_fy3_2023";

const collection = [
    consolidatedEarnings2023,
    consolidatedEarnings2022,
    consolidatedEarnings2021,
    consolidatedEarnings2020,
    consolidatedEarnings2019,
    consolidatedEarnings2018,
    consolidatedEarnings2017,
    consolidatedEarnings2016,
] as const;

const valuesMake = (obj: undefined | {
    Q1CmlValue: number,
    Q2CmlValue: number,
    Q3CmlValue: number,
    Q4CmlValue: number,
}, cmlName: string): Earnings[] => {

    let values: Earnings[] = [
        {
            category: "quarter",
            units: "currency",
            name: " 1st Quarter ",
            value: (!obj) ? 0 : obj.Q1CmlValue
        },
        {
            category: "quarter",
            units: "currency",
            name: " 2nd Quarter ",
            cmlName: " First Half  ",
            value: (!obj) ? 0 : obj.Q2CmlValue 
        },
        {
            category: "quarter",
            units: "currency", 
            name: " 3rd Quarter ",
            cmlName: " 1st 3 Qtrs  ",          
            value: (!obj) ? 0 : obj.Q3CmlValue 
        },
        {
            category: "quarter",
            units: "currency", 
            name: " 4th Quarter ",
            cmlName: cmlName,         
            value: (!obj) ? 0 : obj.Q4CmlValue 
        },
    ]

    return values 
};

const forecastMake = (obj: {
    Q1CmlValue: number,
    Q2CmlValue: number,
    Q3CmlValue: number,
    Q4CmlValue: number,
    forecastThisFY?: number,
    forecastRevision1?: number,
    forecastRevision2?: number,
    forecastRevision3?: number,
    forecastNextFY?: number
}, forecastLabelThisFY: string, forecastLabelNextFY: string): Earnings[] => {

    let forecasts: Earnings[] = [
        {
            name: forecastLabelThisFY,
            value: obj?.forecastThisFY,
        },
        {
            name: " FCST Revision 1 ",
            value: obj?.forecastRevision1,
        },
        {
            name: " FCST Revision 2 ",
            value: obj?.forecastRevision2,
        },
        {
            name: " FCST Revision 3 ",
            value: obj?.forecastRevision3,
        },
        {
            name: forecastLabelNextFY,
            value: obj?.forecastNextFY,
        },
    ].filter(elem => elem.value !== undefined).map(elem => {

        return {
            category: "forecast",
            units: "currency",
            name: elem.name,
            value: elem.value as number, // type assertion, filter has already removed undefined values.
        }
    })

    return forecasts
}


const consolidatedEarningsList: string[] = collection.map((elem, index, array) => {

    let currentQuarter: number = elem.currentQuarter;

    let header: Header = {
        companyName: " Nintendo Co., Ltd.",
        yearOnYearPercentage: "|    YoY% |",
        fiscalYear: elem.fiscalYear,
        title: " Consolidated Operating Results   ",
        section: "| Net Sales                  ", 
        borderLineLengthBody: 38,
        borderLineLengthFooter: 32,
    };

    let [headerOperatingIncome, headerOpMargin, headerNetIncome]: Header[] = [
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
    ];

    let cmlName: string = " " + elem.fiscalYear.slice(0,4) + elem.fiscalYear.slice(-3) + "Cml. ";

    let nextFY: string = Number((elem.fiscalYear.slice(-3, -1)) + 1).toString();

    let forecastNameThisFY : string = " " + elem.fiscalYear.slice(0,4) + elem.fiscalYear.slice(-3) + "Forecast ";

    let forecastNameNextFY: string = " " + elem.fiscalYear.slice(0,4) + nextFY + "Forecast ";

    let netSalesThisFY: Earnings[] = valuesMake(elem.netSales, cmlName);
    let netSalesLastFY: Earnings[] = (!array[index+1].netSales) ? valuesMake(undefined, cmlName) : valuesMake(array[index+1].netSales, cmlName);

    let operatingIncomeThisFY: Earnings[] = valuesMake(elem.operatingIncome, cmlName);
    let operatingIncomeLastFY: Earnings[] = (!array[index+1].operatingIncome) ? valuesMake(undefined, cmlName) : valuesMake(array[index+1].operatingIncome, cmlName);

    let netIncomeThisFY: Earnings[] = valuesMake(elem.netIncome, cmlName);
    let netIncomeLastFY: Earnings[] = (!array[index+1].netIncome) ? valuesMake(undefined, cmlName) : valuesMake(array[index+1].netIncome, cmlName);

    let netSalesForecasts: Earnings[] = forecastMake(elem.netSales, forecastNameThisFY, forecastNameNextFY);
    let operatingIncomeForecasts: Earnings[] = forecastMake(elem.operatingIncome, forecastNameThisFY, forecastNameNextFY);
    let netIncomeForecasts: Earnings[] = forecastMake(elem.netIncome, forecastNameThisFY, forecastNameNextFY);

    const valueCollection = [
        netSalesThisFY,
        netSalesLastFY,
        operatingIncomeThisFY,
        operatingIncomeLastFY,
        netIncomeThisFY,
        netIncomeLastFY,
    ];

    const [
        netSalesDifference, 
        netSalesLastFYDifference, 
        operatingIncomeDifference, operatingIncomeLastFYDifference, 
        netIncomeDifference, 
        netIncomeLastFYDifference,
    ] = valueCollection.map((elem) => {
        return quarterlyCalculation(elem)
    });

    const [
        netSalesCumulative, 
        netSalesLastFYCumulative, 
        operatingIncomeCumulative,
        operatingIncomeLastFYCumulative,
        netIncomeCumulative, 
        netIncomeLastFYCumulative
    ] = valueCollection.map((elem) => {
            return cumulativeCalculation(elem)
    });

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
    ];

    const [
        netSalesDifferenceYoy, 
        netSalesCumulativeYoy, 
        operatingIncomeDifferenceYoy,
        operatingIncomeCumulativeYoy, 
        netIncomeDifferenceYoy, 
        netIncomeCumulativeYoy
    ] = yearOnYearCollection.map((elem, index, array) => {
        // need to use map and then filter, not the other way around. Input array of arrays of length 12, output array of arrays of length 12 and then filter to 6.
    
        return (index % 2 === 0) // this is so that it returns on even numbered indexes, i.e. 0,1 then 2,3 etc.
                ? yearOnYearCalculation(array[index], array[index+1])
                : [];
        }).filter((elem) => elem.length !== 0); // map creates empty arrays so filter removes them and then the array destructuring works correctly, note: elem is used and not array because the array contains 12 arrays! This also removes the issue of variable possibly being undefined had we not put in empty arrays since it would have automatically placed undefined.

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

    const [
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
        operatingMarginQuartersLastFY,
        operatingMarginCumulative,
        operatingMarginCumulativeLastFY,
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

    const printOne = printHead(header);

    const [printTwo, printThree, printFour, printFive] = [
    netSalesArrays, operatingIncomeArrays, opMarginArrays, netIncomeArrays ].map((elem, index, array) => {

            return printBody(...elem)
    });

    return printOne + "\n" + printTwo + "\n" + printThree + "\n" + printFour + "\n" + printFive + "\n###";

})