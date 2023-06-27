import { Header, Section, BandaiNamcoPrint, graphMake, salesPerSoftwareUnitForecast, generalSalesPerSoftwareUnitListV2Map} from "../../utils/segment_data_logic";
import softwareSales2023 from "./Software_Sales/software_sales_fy3_2023.json"
import softwareSales2022 from "./Software_Sales/software_sales_fy3_2022.json";
import softwareSales2021 from "./Software_Sales/software_sales_fy3_2021.json";
import softwareSales2020 from "./Software_Sales/software_sales_fy3_2020.json";
import softwareSales2019 from "./Software_Sales/software_sales_fy3_2019.json";
import undefinedData from "./Software_Sales/undefinedData.json";
import { EarningsJSONV2 } from "../generalTables/consolidated_earnings_general";

export type collectionJSON = {
    fiscalYear: string,
    currentQuarter: number,
    softwareSales: salesOrUnitsJSON,
    softwareUnits: salesOrUnitsJSON,
};

export type salesOrUnitsJSON = {
    name: string,
    units: string,
    Q1CmlValue: number,
    Q2CmlValue: number,
    Q3CmlValue: number,
    Q4CmlValue: number,
    forecastThisFY?: number,
    forecastRevision1?: number,
    forecastRevision2?: number,
    forecastRevision3?: number,
    forecastNextFY?: number,
    notes?: string,
}

// const collection: collectionJSON[] = [
//     softwareSales2023,
//     softwareSales2022,
//     softwareSales2021,
//     softwareSales2020,
//     softwareSales2019,
//     undefinedData,
// ];

const yearRange = 2023 - 2019;
const keys = Array.from({length: yearRange + 1},(v, i) => yearRange - i);

const collectionV2 = new Map<number, EarningsJSONV2>([
    [keys.pop() ?? 0, softwareSales2023],
    [keys.pop() ?? 0, softwareSales2022],
    [keys.pop() ?? 0, softwareSales2021],
    [keys.pop() ?? 0, softwareSales2020],
    [keys.pop() ?? 0, softwareSales2019],
]);

export const softwareSalesList = new Map<number, string>();

export const softwareSalesGraphList = new Map();

collectionV2.forEach((value, key, map) => {

    softwareSalesList.set(key, generalSalesPerSoftwareUnitListV2Map(value, map.get(key+1), 38))
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

export const salesHomeVideoGameMake = (obj: {"softwareSales": salesOrUnitsJSON }, forecast?: boolean): Section[] => {
    if (forecast === true) {
        return forecastsMake(obj.softwareSales,"currency")
    }

    let salesHomeVideoGame: Section[] = [
        {
            name: obj.softwareSales.name,
            region: "Group Total",
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: (obj.softwareSales.units === "NaN") ? "NaN" : "currency",
            value: obj.softwareSales.Q1CmlValue, // billion yen
            notes: obj.softwareSales.notes
        },
        {
            name: obj.softwareSales.name,
            region: "Group Total",
            period: "2nd Quarter",
            cmlPeriod: "First Half",
            units: (obj.softwareSales.units === "NaN") ? "NaN" : "currency",
            value: obj.softwareSales.Q2CmlValue, // billion yen
            notes: obj.softwareSales.notes
        },
        {
            name: obj.softwareSales.name,
            region: "Group Total",
            period: "3rd Quarter",
            cmlPeriod: "1st 3 Qtrs",
            units: (obj.softwareSales.units === "NaN") ? "NaN" : "currency",
            value: obj.softwareSales.Q3CmlValue, // billion yen
            notes: obj.softwareSales.notes
        },
        {
            name: obj.softwareSales.name,
            region: "Group Total",
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: (obj.softwareSales.units === "NaN") ? "NaN" : "currency",
            value: obj.softwareSales.Q4CmlValue, // billion yen
            notes: obj.softwareSales.notes
        },
    ];

    return salesHomeVideoGame
};

export const unitsMake = (obj: {"softwareUnits": salesOrUnitsJSON }, forecast?: boolean): Section[] => {
    if (forecast === true) {
        return forecastsMake(obj.softwareUnits,"units")
    }

    let units: Section[] = [
        {
            name: obj.softwareUnits.name,
            region: "Group Total",
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: (obj.softwareUnits.units === "NaN") ? "NaN" : "units",
            value: obj.softwareUnits.Q1CmlValue // billion yen
        },
        {
            name: obj.softwareUnits.name,
            region: "Group Total",
            period: "2nd Quarter",
            cmlPeriod: "First Half",
            units: (obj.softwareUnits.units === "NaN") ? "NaN" : "units",
            value: obj.softwareUnits.Q2CmlValue // billion yen
        },
        {
            name: obj.softwareUnits.name,
            region: "Group Total",
            period: "3rd Quarter",
            cmlPeriod: "1st 3 Qtrs",
            units: (obj.softwareUnits.units === "NaN") ? "NaN" : "units",
            value: obj.softwareUnits.Q3CmlValue // billion yen
        },
        {
            name: obj.softwareUnits.name,
            region: "Group Total",
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: (obj.softwareUnits.units === "NaN") ? "NaN" : "units",
            value: obj.softwareUnits.Q4CmlValue // billion yen
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
//         firstHeader: "| Bandai Namco   |",
//     };

//     let salesThisFY: Section[] = salesHomeVideoGameMake(elem);
//     let salesLastFY: Section[] = salesHomeVideoGameMake(array[index+1]);
//     let salesForecast: Section[] = salesHomeVideoGameMake(elem,true);

//     let unitsThisFY: Section[] = unitsMake(elem);
//     let unitsLastFY: Section[] = unitsMake(array[index+1]);
//     let unitsForecast: Section[] = unitsMake(elem,true);

//     return BandaiNamcoPrint(salesThisFY, salesLastFY, unitsThisFY, unitsLastFY, header, elem.currentQuarter) + "\n" + salesPerSoftwareUnitForecast(salesForecast, unitsForecast, header, elem.currentQuarter)
// });

// export const softwareSalesGraphList = collection.flatMap((elem, index, array) => {
//     if (array[index] === array.at(-1)) {
//         return [] // for undefinedData in collection only
//     }

//     let salesThisFY: Section[] = salesHomeVideoGameMake(elem);
//     let salesLastFY: Section[] = salesHomeVideoGameMake(array[index+1]);

//     let unitsThisFY: Section[] = unitsMake(elem);
//     let unitsLastFY: Section[] = unitsMake(array[index+1]);

//     return graphMake(salesThisFY, salesLastFY, unitsThisFY, unitsLastFY, elem.softwareSales.name, elem.fiscalYear, elem.currentQuarter)
// });
