import { Header, Section, SegaPrint, graphMake, salesPerSoftwareUnitForecast } from "../../utils/segment_data_logic";
import softwareSales2023 from "./Software_Sales/software_sales_fy3_2023.json"
import softwareSales2022 from "./Software_Sales/software_sales_fy3_2022.json";
import softwareSales2021 from "./Software_Sales/software_sales_fy3_2021.json";
import softwareSales2020 from "./Software_Sales/software_sales_fy3_2020.json";
import { salesOrUnitsJSON } from "../bandaiNamco/software_sales_bandai_namco";
import type { EarningsJSONV2 } from "../generalTables/consolidated_earnings_general";
import { generalSalesPerSoftwareUnitListV2Map } from "../../utils/segment_data_logic";

export type collectionJSON = {
    fiscalYear: string,
    currentQuarter: number,
    fullGameSales: salesOrUnitsJSON,
    fullGameUnits: salesOrUnitsJSON,
};

// const collection: collectionJSON[] = [
//     softwareSales2023,
//     softwareSales2022,
//     softwareSales2021,
//     softwareSales2020,
//     undefinedData,
// ];

const collectionV2 = new Map<number, EarningsJSONV2>();

collectionV2.set(collectionV2.size, softwareSales2023)
collectionV2.set(collectionV2.size, softwareSales2022)
collectionV2.set(collectionV2.size, softwareSales2021)
collectionV2.set(collectionV2.size, softwareSales2020)

export const softwareSalesList = new Map<number, string>();

export const softwareSalesGraphList = new Map();

collectionV2.forEach((value, key, map) => {

    softwareSalesList.set(key, generalSalesPerSoftwareUnitListV2Map(value, map.get(key+1), 41, "Billion", "One Thousand"))
})

collectionV2.clear();

const forecastsMake = (obj: salesOrUnitsJSON, units: string): Section[] => {

    // had to use different type assertion due to issue with keys not being recognised...
    let forecasts: Section[] = [
        {
            name: obj.name,
            region: "Group Total",
            units: (units === "units") ? "units" : "currency",
            period: "Forecast", 
            cmlPeriod: "1st Quarter",
            value: obj?.forecastThisFY,
            notes: obj?.notes,
        } as Section,
        {
            name: obj.name,
            region: "Group Total",
            units: (units === "units") ? "units" : "currency",
            period: "FCST Revision 1",
            cmlPeriod: "First Half",
            value: obj?.forecastRevision1,
            notes: obj?.notes,
        } as Section,
        {
            name: obj.name,
            region: "Group Total",
            units: (units === "units") ? "units" : "currency",
            period: "FCST Revision 2",
            cmlPeriod: "1st 3 Qtrs",
            value: obj?.forecastRevision2,
            notes: obj?.notes,
        } as Section,
        {
            name: obj.name,
            region: "Group Total",
            units: (units === "units") ? "units" : "currency",
            period: "FCST Revision 3",
            cmlPeriod: "1st 3 Qtrs",
            value: obj?.forecastRevision3,
            notes: obj?.notes,
        } as Section,
        {
            name: obj.name,
            region: "Group Total",
            units: (units === "units") ? "units" : "currency",
            period: "Forecast",
            cmlPeriod: "Cml.",
            value: obj?.forecastNextFY,
            notes: obj?.notes,
        } as Section,
    ].filter(elem => elem.value !== undefined)

    return forecasts
};


// export const salesMake = (obj: {"data":salesOrUnitsJSON}, forecast?: boolean): Section[] => {
//     if (forecast === true) {
//         return forecastsMake(obj.fullGameSales,"currency")
//     }

//     let sales: Section[] = [
//         {
//             name: obj.fullGameSales.name,
//             region: "Group Total",
//             period: "1st Quarter",
//             cmlPeriod: "1st Quarter",
//             units: (obj.fullGameSales.units === "NaN") ? "NaN" : "currency",
//             value: obj.fullGameSales.Q1CmlValue, // billion yen
//             notes: obj.fullGameSales.notes
//         },
//         {
//             name: obj.fullGameSales.name,
//             region: "Group Total",
//             period: "2nd Quarter",
//             cmlPeriod: "First Half",
//             units: (obj.fullGameSales.units === "NaN") ? "NaN" : "currency",
//             value: obj.fullGameSales.Q2CmlValue, // billion yen
//             notes: obj.fullGameSales.notes
//         },
//         {
//             name: obj.fullGameSales.name,
//             region: "Group Total",
//             period: "3rd Quarter",
//             cmlPeriod: "1st 3 Qtrs",
//             units: (obj.fullGameSales.units === "NaN") ? "NaN" : "currency",
//             value: obj.fullGameSales.Q3CmlValue, // billion yen
//             notes: obj.fullGameSales.notes
//         },
//         {
//             name: obj.fullGameSales.name,
//             region: "Group Total",
//             period: "4th Quarter",
//             cmlPeriod: "Cml.",
//             units: (obj.fullGameSales.units === "NaN") ? "NaN" : "currency",
//             value: obj.fullGameSales.Q4CmlValue, // billion yen
//             notes: obj.fullGameSales.notes
//         },
//     ];

//     return sales
// };

export const unitsMake = (obj: {"fullGameUnits": salesOrUnitsJSON}, forecast?: true): Section[] => {
    if (forecast === true) {
        return forecastsMake(obj.fullGameUnits,"units")
    }

    let units: Section[] = [
        {
            name: obj.fullGameUnits.name,
            region: "Group Total",
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: (obj.fullGameUnits.units === "NaN") ? "NaN" : "units",
            value: obj.fullGameUnits.Q1CmlValue // billion yen
        },
        {
            name: obj.fullGameUnits.name,
            region: "Group Total",
            period: "2nd Quarter",
            cmlPeriod: "First Half",
            units: (obj.fullGameUnits.units === "NaN") ? "NaN" : "units",
            value: obj.fullGameUnits.Q2CmlValue // billion yen
        },
        {
            name: obj.fullGameUnits.name,
            region: "Group Total",
            period: "3rd Quarter",
            cmlPeriod: "1st 3 Qtrs",
            units: (obj.fullGameUnits.units === "NaN") ? "NaN" : "units",
            value: obj.fullGameUnits.Q3CmlValue // billion yen
        },
        {
            name: obj.fullGameUnits.name,
            region: "Group Total",
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: (obj.fullGameUnits.units === "NaN") ? "NaN" : "units",
            value: obj.fullGameUnits.Q4CmlValue // billion yen
        },
    ];

    return units 
};

// export const softwareSalesList: string[] = collection.flatMap((elem, index, array) => {
//     if (array[index] === array.at(-1)) {
//         return [] // for undefinedData in collection only
//     }

//     let header: Header = {
//         fiscalYear: elem.fiscalYear,
//         secondHeader: "| Segment Information |",
//         firstHeader: "| Sega Sammy     |",
//     };

//     let salesThisFY: Section[] = salesMake(elem);
//     let salesLastFY: Section[] = salesMake(array[index+1]);
//     let salesForecast: Section[] = (elem.fullGameSales?.forecastThisFY === undefined) ? [] : salesMake(elem,true);

//     let unitsThisFY: Section[] = unitsMake(elem);
//     let unitsLastFY: Section[] = unitsMake(array[index+1]);
//     let unitsForecast: Section[] = (elem.fullGameUnits?.forecastThisFY === undefined) ? [] : unitsMake(elem,true);

//     let printList = [
//         SegaPrint(salesThisFY, salesLastFY, unitsThisFY, unitsLastFY, header, elem.currentQuarter),
//         (salesForecast.length === 0 && unitsForecast.length === 0) ? [] : salesPerSoftwareUnitForecast(salesForecast, unitsForecast, header, elem.currentQuarter),
//     ].flat().reduce((acc, next) => acc + "\n" + next);

//     return printList
// });

// export const softwareSalesGraphList = collection.flatMap((elem, index, array) => {
//     if (array[index] === array.at(-1)) {
//         return [] // for undefinedData in collection only
//     }

//     let salesThisFY: Section[] = salesMake(elem);
//     let salesLastFY: Section[] = salesMake(array[index+1]);

//     let unitsThisFY: Section[] = unitsMake(elem);
//     let unitsLastFY: Section[] = unitsMake(array[index+1]);

//     return graphMake(salesThisFY, salesLastFY, unitsThisFY, unitsLastFY, elem.fullGameSales.name, elem.fiscalYear, elem.currentQuarter)
// });

