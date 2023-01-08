import { Header, Section, BandaiNamcoPrint, graphMake} from "../../utils/segment_data_logic";
import softwareSales2023 from "./Software_Sales/software_sales_fy3_2023.json"
import softwareSales2022 from "./Software_Sales/software_sales_fy3_2022.json";
import softwareSales2021 from "./Software_Sales/software_sales_fy3_2021.json";
import softwareSales2020 from "./Software_Sales/software_sales_fy3_2020.json";
import softwareSales2019 from "./Software_Sales/software_sales_fy3_2019.json";
import undefinedData from "./Software_Sales/undefinedData.json";

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
    notes?: string,
}

const collection = [
    softwareSales2023,
    softwareSales2022,
    softwareSales2021,
    softwareSales2020,
    softwareSales2019,
    undefinedData,
] as const;

export const salesHomeVideoGameMake = (obj: {"softwareSales": salesOrUnitsJSON }): Section[] => {

    let salesHomeVideoGame: Section[] = [
        {
            name: obj.softwareSales.name,
            region: " Group Total ",
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: (obj.softwareSales.units === "NaN") ? "NaN" : "currency",
            value: obj.softwareSales.Q1CmlValue, // billion yen
            notes: obj.softwareSales.notes
        },
        {
            name: obj.softwareSales.name,
            region: " Group Total ",
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: (obj.softwareSales.units === "NaN") ? "NaN" : "currency",
            value: obj.softwareSales.Q2CmlValue, // billion yen
            notes: obj.softwareSales.notes
        },
        {
            name: obj.softwareSales.name,
            region: " Group Total ",
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: (obj.softwareSales.units === "NaN") ? "NaN" : "currency",
            value: obj.softwareSales.Q3CmlValue, // billion yen
            notes: obj.softwareSales.notes
        },
        {
            name: obj.softwareSales.name,
            region: " Group Total ",
            period: " 4th Quarter ",
            cmlPeriod: "Cml.",
            units: (obj.softwareSales.units === "NaN") ? "NaN" : "currency",
            value: obj.softwareSales.Q4CmlValue, // billion yen
            notes: obj.softwareSales.notes
        },
    ];

    return salesHomeVideoGame
};

export const unitsMake = (obj: {"softwareUnits": salesOrUnitsJSON }): Section[] => {

    let units: Section[] = [
        {
            name: obj.softwareUnits.name,
            region: " Group Total ",
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: (obj.softwareUnits.units === "NaN") ? "NaN" : "units",
            value: obj.softwareUnits.Q1CmlValue // billion yen
        },
        {
            name: obj.softwareUnits.name,
            region: " Group Total ",
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: (obj.softwareUnits.units === "NaN") ? "NaN" : "units",
            value: obj.softwareUnits.Q2CmlValue // billion yen
        },
        {
            name: obj.softwareUnits.name,
            region: " Group Total ",
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: (obj.softwareUnits.units === "NaN") ? "NaN" : "units",
            value: obj.softwareUnits.Q3CmlValue // billion yen
        },
        {
            name: obj.softwareUnits.name,
            region: " Group Total ",
            period: " 4th Quarter ",
            cmlPeriod: "Cml.",
            units: (obj.softwareUnits.units === "NaN") ? "NaN" : "units",
            value: obj.softwareUnits.Q4CmlValue // billion yen
        },
    ];

    return units 
};

export const softwareSalesList: string[] = collection.map((elem, index, array) => {
    if (array[index] === array.at(-1)) {
        return "undefined" // for undefinedData in collection only
    }

    let header: Header = {
        fiscalYear: elem.fiscalYear,
        secondHeader: "| Segment Information |",
        firstHeader: "| Bandai Namco   |",
    };

    let salesThisFY: Section[] = salesHomeVideoGameMake(elem);
    let salesLastFY: Section[] = salesHomeVideoGameMake(array[index+1]);

    let unitsThisFY: Section[] = unitsMake(elem);
    let unitsLastFY: Section[] = unitsMake(array[index+1]);

    return BandaiNamcoPrint(salesThisFY, salesLastFY, unitsThisFY, unitsLastFY, header, elem.currentQuarter)
}).filter(elem => elem !== "undefined")

export const softwareSalesGraphList = collection.map((elem, index, array) => {
    if (array[index] === array.at(-1)) {
        return undefined // for undefinedData in collection only
    }

    let salesThisFY: Section[] = salesHomeVideoGameMake(elem);
    let salesLastFY: Section[] = salesHomeVideoGameMake(array[index+1]);

    let unitsThisFY: Section[] = unitsMake(elem);
    let unitsLastFY: Section[] = unitsMake(array[index+1]);

    return graphMake(salesThisFY, salesLastFY, unitsThisFY, unitsLastFY, elem.softwareSales.name, elem.fiscalYear, elem.currentQuarter)
}).filter(elem => elem !== undefined);

