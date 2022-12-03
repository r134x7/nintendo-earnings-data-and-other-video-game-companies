import {
    Earnings,
    Header,
    printOpMargin,
    operatingMarginCalculation,
    quarterlyCalculation,
    printAll,
    printHead,
} from "../../utils/general_earnings_logic";

import consolidatedEarnings2023 from "./Consolidated_Earnings/consolidated_earnings_fy3_2023.json";
import consolidatedEarnings2022 from "./Consolidated_Earnings/consolidated_earnings_fy3_2022.json";
import consolidatedEarnings2021 from "./Consolidated_Earnings/consolidated_earnings_fy3_2021.json";
import consolidatedEarnings2020 from "./Consolidated_Earnings/consolidated_earnings_fy3_2020.json";
import consolidatedEarnings2019 from "./Consolidated_Earnings/consolidated_earnings_fy3_2019.json";
import consolidatedEarnings2018 from "./Consolidated_Earnings/consolidated_earnings_fy3_2018.json";
import consolidatedEarnings2017 from "./Consolidated_Earnings/consolidated_earnings_fy3_2017.json";
import consolidatedEarnings2016 from "./Consolidated_Earnings/consolidated_earnings_fy3_2016.json";

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
    name: string,
    Q1CmlValue: number,
    Q2CmlValue: number,
    Q3CmlValue: number,
    Q4CmlValue: number,
}): Earnings[] => {

    let values: Earnings[] = [
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "quarter",
            units: "currency",
            period: "1st Quarter",
            value: (!obj) ? 0 : obj.Q1CmlValue
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "quarter",
            units: "currency",
            period: "2nd Quarter",
            value: (!obj) ? 0 : obj.Q2CmlValue 
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "quarter",
            units: "currency", 
            period: "3rd Quarter",
            value: (!obj) ? 0 : obj.Q3CmlValue 
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "quarter",
            units: "currency", 
            period: "4th Quarter",
            value: (!obj) ? 0 : obj.Q4CmlValue 
        },
    ];

    return values 
};

const forecastMake = (obj: {
    name: string,
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
            name: obj.name,
            forecastPeriod: forecastLabelThisFY,
            value: obj?.forecastThisFY,
        },
        {
            name: obj.name,
            forecastPeriod: " FCST Revision 1 ",
            value: obj?.forecastRevision1,
        },
        {
            name: obj.name,
            forecastPeriod: " FCST Revision 2 ",
            value: obj?.forecastRevision2,
        },
        {
            name: obj.name,
            forecastPeriod: " FCST Revision 3 ",
            value: obj?.forecastRevision3,
        },
        {
            name: obj.name,
            forecastPeriod: forecastLabelNextFY,
            value: obj?.forecastNextFY,
        },
    ].filter(elem => elem.value !== undefined).map(elem => {

        return {
            category: "forecast",
            units: "currency",
            name: elem.name,
            period: "1st Quarter",
            forecastPeriod: elem.forecastPeriod, 
            value: elem.value as number, // type assertion, filter has already removed undefined values.
        };
    });

    return forecasts
};

export const consolidatedEarningsList: string[] = collection.map((elem, index, array) => {

    if (index === array.length-1) {
        return ""
    };

    let currentQuarter: number = elem.currentQuarter;

    let header: Header = {
        companyName: "Nintendo Co., Ltd.",
        fiscalYear: elem.fiscalYear,
        title: "Consolidated Operating Results",
    };

    // let cmlName: string = " " + elem.fiscalYear.slice(0,4) + elem.fiscalYear.slice(-3) + "Cml.";

    let nextFY: string = (Number(elem.fiscalYear.slice(-3, -1)) + 1).toString();

    let forecastNameThisFY : string = " " + elem.fiscalYear.slice(0,4) + elem.fiscalYear.slice(-3) + "Forecast ";

    let forecastNameNextFY: string = " " + elem.fiscalYear.slice(0,4) + nextFY + " Forecast ";

    let dataThisFY: Earnings[][] = elem.data.map(value => valuesMake(value));

    let dataLastFY: Earnings[][] = (!array[index+1]) ? elem.data.map(value => valuesMake(undefined)) : array[index+1].data.map(value => valuesMake(value));

    let forecastData: Earnings[][] = elem.data.map(value => forecastMake(value, forecastNameThisFY, forecastNameNextFY));

    const printOne = printHead(header)(35);

    const opMarginSet = printOpMargin(header, dataThisFY[0], dataThisFY[1], forecastData[0], forecastData[1], currentQuarter);

    const printEach = Array.from({length: dataThisFY.length + 1}, (v, i) => {
        return (i === 2) 
                ? opMarginSet(11)(32)
                :(i === dataThisFY.length)
                ? printAll(header, dataThisFY[2], dataLastFY[2], forecastData[2], currentQuarter)(14)(10)(35)
                : printAll(header, dataThisFY[i], dataLastFY[i], forecastData[i], currentQuarter)(14)(10)(35);
    });

    return [printOne, ...printEach].reduce((acc, next) => acc + "\n" + next)

    // return printOne + "\n" + printTwo + "\n" + printThree + "\n" + printFour + "\n" + printFive + "\n###";

}).filter(elem => elem !== "");

export const consolidatedEarningsGraphList = collection.map((elem, index, array) => {

    if (index === array.length-1) {
        return undefined
    }

    let dataThisFY: Earnings[][] = elem.data.map(value => valuesMake(value));

    let dataLastFY: Earnings[][] = (!array[index+1]) ? elem.data.map(value => valuesMake(undefined)) : array[index+1].data.map(value => valuesMake(value));

    let quartersDataThisFY: Earnings[][] = dataThisFY.map(value => quarterlyCalculation(value));

    let quartersDataLastFY: Earnings[][] = dataLastFY.map(value => quarterlyCalculation(value));

    let quartersOpMarginsThisAndLastFY: Earnings[][] = [ operatingMarginCalculation(quartersDataThisFY[0], quartersDataThisFY[1]), operatingMarginCalculation(quartersDataLastFY[0], quartersDataLastFY[1])];
    
    let cumulativeOpMarginsThisAndLastFY: Earnings[][] = [
        operatingMarginCalculation(dataThisFY[0], dataThisFY[1]), operatingMarginCalculation(dataLastFY[0], dataLastFY[1])
    ];

    let thisFY: string = elem.fiscalYear.slice(0, -1);
    let lastFY: string = thisFY.slice(0, 4) + (Number(thisFY.slice(-4)) - 1).toString();

    let marchThisFY: string = "March " + thisFY.slice(4);
    let marchLastFY: string = "March " + lastFY.slice(4);

    const graphMake = {
        thisFY: thisFY,
        lastFY: lastFY,
        marchThisFY: marchThisFY,
        marchLastFY: marchLastFY,
        qtrNetSalesThisFY: quartersDataThisFY[0],
        qtrOperatingIncomeThisFY: quartersDataThisFY[1],
        qtrOpMarginThisFY: quartersOpMarginsThisAndLastFY[0],
        qtrNetIncomeThisFY: quartersDataThisFY[2],
        cmlNetSalesThisFY: dataThisFY[0],
        cmlOperatingIncomeThisFY: dataThisFY[1],
        cmlOpMarginThisFY: cumulativeOpMarginsThisAndLastFY[0],
        cmlNetIncomeThisFY: dataThisFY[2],
        qtrNetSalesLastFY: quartersDataLastFY[0],
        qtrOperatingIncomeLastFY: quartersDataLastFY[1],
        qtrOpMarginLastFY: quartersOpMarginsThisAndLastFY[1],
        qtrNetIncomeLastFY: quartersDataLastFY[2],
        cmlNetSalesLastFY: dataLastFY[0],
        cmlOperatingIncomeLastFY: dataLastFY[1],
        cmlOpMarginLastFY: cumulativeOpMarginsThisAndLastFY[1],
        cmlNetIncomeLastFY: dataLastFY[2],
    };

    return graphMake
}).filter(elem => elem !== undefined);