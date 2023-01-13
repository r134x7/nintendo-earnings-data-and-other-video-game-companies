import {
    Earnings,
    Header,
    printOpMargin,
    operatingMarginCalculation,
    quarterlyCalculation,
    printAll,
} from "../../utils/general_earnings_logic";
import { headerPrint } from "../../utils/table_design_logic";

import nintendoConsolidatedEarnings2023 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2023.json";
import nintendoConsolidatedEarnings2022 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2022.json";
import nintendoConsolidatedEarnings2021 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2021.json";
import nintendoConsolidatedEarnings2020 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2020.json";
import nintendoConsolidatedEarnings2019 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2019.json";
import nintendoConsolidatedEarnings2018 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2018.json";
import nintendoConsolidatedEarnings2017 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2017.json";
import nintendoConsolidatedEarnings2016 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2016.json";
import nintendoConsolidatedEarnings2015 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2015.json";
import nintendoConsolidatedEarnings2014 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2014.json";
import nintendoConsolidatedEarnings2013 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2013.json";
import nintendoConsolidatedEarnings2012 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2012.json";
import nintendoConsolidatedEarnings2011 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2011.json";
import nintendoConsolidatedEarnings2010 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2010.json";
import nintendoConsolidatedEarnings2009 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2009.json";
import nintendoConsolidatedEarnings2008 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2008.json";
import nintendoConsolidatedEarnings2007 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2007.json";
import nintendoConsolidatedEarnings2006 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2006.json";
import nintendoConsolidatedEarnings2005 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2005.json";
import nintendoConsolidatedEarnings2004 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2004.json";

import capcomEarnings2023 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2023.json";
import capcomEarnings2022 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2022.json";
import capcomEarnings2021 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2021.json";
import capcomEarnings2020 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2020.json";
import capcomEarnings2019 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2019.json";
import capcomEarnings2018 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2018.json";
import capcomEarnings2017 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2017.json";
import capcomEarnings2016 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2016.json";

import bandaiNamco2023 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2023.json";
import bandaiNamco2022 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2022.json";
import bandaiNamco2021 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2021.json";
import bandaiNamco2020 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2020.json";
import bandaiNamco2019 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2019.json";
import bandaiNamco2018 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2018.json";
import bandaiNamco2017 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2017.json";
import bandaiNamco2016 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2016.json";
import bandaiNamco2015 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2015.json";
import bandaiNamco2014 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2014.json";
import bandaiNamco2013 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2013.json";
import bandaiNamco2012 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2012.json";
import bandaiNamco2011 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2011.json";
import bandaiNamco2010 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2010.json";
import bandaiNamco2009 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2009.json";
import bandaiNamco2008 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2008.json";
import bandaiNamco2007 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2007.json";
import bandaiNamco2006 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2006.json";

import sega2023 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2023.json";
import sega2022 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2022.json";
import sega2021 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2021.json";
import sega2020 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2020.json";
import sega2019 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2019.json";
import sega2018 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2018.json";
import sega2017 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2017.json";
import sega2016 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2016.json";
import sega2015 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2015.json";
import sega2014 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2014.json";
import sega2013 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2013.json";
import sega2012 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2012.json";
import sega2011 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2011.json";
import sega2010 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2010.json";
import sega2009 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2009.json";
import sega2008 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2008.json";
import sega2007 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2007.json";
import sega2006 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2006.json";
import sega2005 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2005.json";

import koeiTecmo2023 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2023.json";
import koeiTecmo2022 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2022.json";
import koeiTecmo2021 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2021.json";
import koeiTecmo2020 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2020.json";
import koeiTecmo2019 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2019.json";
import koeiTecmo2018 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2018.json";

import squareEnix2023 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2023.json";
import squareEnix2022 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2022.json";
import squareEnix2021 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2021.json";
import squareEnix2020 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2020.json";
import squareEnix2019 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2019.json";
import squareEnix2018 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2018.json";
import squareEnix2017 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2017.json";
import squareEnix2016 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2016.json";
import squareEnix2015 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2015.json";
import squareEnix2014 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2014.json";
import squareEnix2013 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2013.json";
import squareEnix2012 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2012.json";
import squareEnix2011 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2011.json";
import squareEnix2010 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2010.json";
import squareEnix2009 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2009.json";
import squareEnix2008 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2008.json";
import squareEnix2007 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2007.json";
import squareEnix2006 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2006.json";
import squareEnix2005 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2005.json";
import squareEnix2004 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2004.json";

export type EarningsJSON = {
    currentQuarter: number,
    companyName: string,
    fiscalYear: string,
    data: EarningsMake[],
};

type EarningsMake = {
        name: string,
        Q1CmlValue: number,
        Q2CmlValue: number,
        Q3CmlValue: number,
        Q4CmlValue: number,
        forecastThisFY?: number | null,
        forecastRevision1?: number | null,
        forecastRevision2?: number | null,
        forecastRevision3?: number | null,
        forecastNextFY?: number | null, 
}; 


const collectionNintendo: EarningsJSON[] = [
    nintendoConsolidatedEarnings2023,
    nintendoConsolidatedEarnings2022,
    nintendoConsolidatedEarnings2021,
    nintendoConsolidatedEarnings2020,
    nintendoConsolidatedEarnings2019,
    nintendoConsolidatedEarnings2018,
    nintendoConsolidatedEarnings2017,
    nintendoConsolidatedEarnings2016,
    nintendoConsolidatedEarnings2015,
    nintendoConsolidatedEarnings2014,
    nintendoConsolidatedEarnings2013,
    nintendoConsolidatedEarnings2012,
    nintendoConsolidatedEarnings2011,
    nintendoConsolidatedEarnings2010,
    nintendoConsolidatedEarnings2009,
    nintendoConsolidatedEarnings2008,
    nintendoConsolidatedEarnings2007,
    nintendoConsolidatedEarnings2006,
    nintendoConsolidatedEarnings2005,
    nintendoConsolidatedEarnings2004,
];

const collectionCapcom: EarningsJSON[] = [
    capcomEarnings2023,
    capcomEarnings2022,
    capcomEarnings2021,
    capcomEarnings2020,
    capcomEarnings2019,
    capcomEarnings2018,
    capcomEarnings2017,
    capcomEarnings2016,
];

const collectionBandaiNamco: EarningsJSON[] = [
    bandaiNamco2023,
    bandaiNamco2022,
    bandaiNamco2021,
    bandaiNamco2020,
    bandaiNamco2019,
    bandaiNamco2018,
    bandaiNamco2017,
    bandaiNamco2016,
    bandaiNamco2015,
    bandaiNamco2014,
    bandaiNamco2013,
    bandaiNamco2012,
    bandaiNamco2011,
    bandaiNamco2010,
    bandaiNamco2009,
    bandaiNamco2008,
    bandaiNamco2007,
    bandaiNamco2006,
];

const collectionSegaSammy: EarningsJSON[] = [
    sega2023,
    sega2022,
    sega2021,
    sega2020,
    sega2019,
    sega2018,
    sega2017,
    sega2016,
    sega2015,
    sega2014,
    sega2013,
    sega2012,
    sega2011,
    sega2010,
    sega2009,
    sega2008,
    sega2007,
    sega2006,
    sega2005,
];

const collectionKoeiTecmo: EarningsJSON[] = [
    koeiTecmo2023,
    koeiTecmo2022,
    koeiTecmo2021,
    koeiTecmo2020,
    koeiTecmo2019,
    koeiTecmo2018,
];

const collectionSquareEnix: EarningsJSON[] = [
    squareEnix2023,
    squareEnix2022,
    squareEnix2021,
    squareEnix2020,
    squareEnix2019,
    squareEnix2018,
    squareEnix2017,
    squareEnix2016,
    squareEnix2015,
    squareEnix2014,
    squareEnix2013,
    squareEnix2012,
    squareEnix2011,
    squareEnix2010,
    squareEnix2009,
    squareEnix2008,
    squareEnix2007,
    squareEnix2006,
    squareEnix2005,
    squareEnix2004,
];

const valuesMake = (obj: undefined | EarningsMake): Earnings[] => {

    let values: Earnings[] = [
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "cumulative",
            units: "currency",
            period: "1st Quarter",
            value: (!obj) ? 0 : obj.Q1CmlValue
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "cumulative",
            units: "currency",
            period: "2nd Quarter",
            value: (!obj) ? 0 : obj.Q2CmlValue 
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "cumulative",
            units: "currency", 
            period: "3rd Quarter",
            value: (!obj) ? 0 : obj.Q3CmlValue 
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "cumulative",
            units: "currency", 
            period: "4th Quarter",
            value: (!obj) ? 0 : obj.Q4CmlValue 
        },
    ];

    return values 
};

const forecastMake = (obj: EarningsMake, forecastLabelThisFY: string, forecastLabelNextFY: string): Earnings[] => {

    let forecasts: Earnings[] = [
        {
            name: obj.name,
            forecastPeriod: forecastLabelThisFY,
            value: obj?.forecastThisFY,
        },
        {
            name: obj.name,
            forecastPeriod: "FCST Revision 1",
            value: obj?.forecastRevision1,
        },
        {
            name: obj.name,
            forecastPeriod: "FCST Revision 2",
            value: obj?.forecastRevision2,
        },
        {
            name: obj.name,
            forecastPeriod: "FCST Revision 3",
            value: obj?.forecastRevision3,
        },
        {
            name: obj.name,
            forecastPeriod: forecastLabelNextFY,
            value: obj?.forecastNextFY,
        },
    ].flatMap(elem => {
        if(elem.value === undefined || elem.value === null) {
            return []
        }

        return elem;
    }).map(elem => {

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

const consolidatedEarningsList = (collection: EarningsJSON[], headerLength: number): string[] => { 

return collection.map((elem, index, array) => {

    // if (index === array.length-1) {
    //     return ""
    // };

    let currentQuarter: number = elem.currentQuarter;

    let header: Header = {
        companyName: elem.companyName,
        fiscalYear: elem.fiscalYear,
        title: (elem.companyName === "CAPCOM Co., Ltd." || elem.companyName === "SQUARE ENIX HOLDINGS CO., LTD.") ? "Consolidated Financial Results" : "Consolidated Operating Results",
    };

    let nextFY: string = (Number(elem.fiscalYear.slice(-4)) + 1).toString();

    let forecastNameThisFY : string = elem.fiscalYear + " Forecast";

    let forecastNameNextFY: string = elem.fiscalYear.slice(0,4) + nextFY + " Forecast";

    let dataThisFY: Earnings[][] = elem.data.map(value => valuesMake(value));

    let dataLastFY: Earnings[][] = (!array[index+1]) ? elem.data.map(value => valuesMake(undefined)) : array[index+1].data.map(value => valuesMake(value));

    let forecastData: Earnings[][] = elem.data.map(value => forecastMake(value, forecastNameThisFY, forecastNameNextFY));

    const printOne = headerPrint([
        header.companyName + " | " + header.fiscalYear,
        header.title
    ],headerLength);
    
    // const opMarginSet = printOpMargin(header, dataThisFY[0], dataThisFY[1], forecastData[0], forecastData[1], currentQuarter);

    const printEach = Array.from({length: dataThisFY.length + 1}, (v, i) => {
        
        return (i === 2) 
                ? printOpMargin(header, dataThisFY[0], dataThisFY[1], forecastData[0], forecastData[1], currentQuarter,13)
                :(i > 2)
                ? printAll(header, dataThisFY[i-1], dataLastFY[i-1], forecastData[i-1], currentQuarter, 13)
                : printAll(header, dataThisFY[i], dataLastFY[i], forecastData[i], currentQuarter, 13);
    });

    return [printOne, ...printEach].reduce((acc, next) => acc + "\n" + next)

    }).filter(elem => elem !== "");
};

const consolidatedEarningsGraphList = (collection: EarningsJSON[]) => {
    
return collection.map((elem, index, array) => {

    // if (index === array.length-1) {
    //     return undefined
    // }

    let dataThisFY: Earnings[][] = elem.data.map(value => valuesMake(value));

    let dataLastFY: Earnings[][] = (!array[index+1]) ? elem.data.map(value => valuesMake(undefined)) : array[index+1].data.map(value => valuesMake(value));

    let quartersDataThisFY: Earnings[][] = dataThisFY.map(value => quarterlyCalculation(value));

    let quartersDataLastFY: Earnings[][] = dataLastFY.map(value => quarterlyCalculation(value));

    let quartersOpMarginsThisAndLastFY: Earnings[][] = [ operatingMarginCalculation(quartersDataThisFY[0], quartersDataThisFY[1]), operatingMarginCalculation(quartersDataLastFY[0], quartersDataLastFY[1])];
    
    let cumulativeOpMarginsThisAndLastFY: Earnings[][] = [
        operatingMarginCalculation(dataThisFY[0], dataThisFY[1]), operatingMarginCalculation(dataLastFY[0], dataLastFY[1])
    ];

    let thisFY: string = elem.fiscalYear;
    let lastFY: string = thisFY.slice(0, 4) + (Number(thisFY.slice(-4)) - 1).toString();

    let marchThisFY: string = "March " + thisFY.slice(4);
    let marchLastFY: string = "March " + lastFY.slice(4);
    // this will need a refactoring...
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
    }).filter(elem => elem !== undefined)
};

export const nintendoConsolidatedEarningsList = consolidatedEarningsList(collectionNintendo, 35);

export const nintendoConsolidatedEarningsGraphList = consolidatedEarningsGraphList(collectionNintendo);

export const capcomConsolidatedEarningsList = consolidatedEarningsList(collectionCapcom, 35);

export const capcomConsolidatedEarningsGraphList = consolidatedEarningsGraphList(collectionCapcom);

export const bandaiNamcoConsolidatedEarningsList = consolidatedEarningsList(collectionBandaiNamco, 38);

export const bandaiNamcoConsolidatedEarningsGraphList = consolidatedEarningsGraphList(collectionBandaiNamco);

export const koeiTecmoConsolidatedEarningsList = consolidatedEarningsList(collectionKoeiTecmo, 42);

export const koeiTecmoConsolidatedEarningsGraphList = consolidatedEarningsGraphList(collectionKoeiTecmo);

export const segaConsolidatedEarningsList = consolidatedEarningsList(collectionSegaSammy, 38);

export const segaConsolidatedEarningsGraphList = consolidatedEarningsGraphList(collectionSegaSammy);

export const squareEnixConsolidatedEarningsList = consolidatedEarningsList(collectionSquareEnix, 42);

export const squareEnixConsolidatedEarningsGraphList = consolidatedEarningsGraphList(collectionSquareEnix);