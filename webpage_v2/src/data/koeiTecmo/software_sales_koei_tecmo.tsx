import { Header, Section, KoeiTecmoPrint, graphMake } from "../../utils/segment_data_logic";
import softwareSales2023 from "./Software_Sales/software_sales_fy3_2023.json"
import softwareSales2022 from "./Software_Sales/software_sales_fy3_2022.json";
import softwareSales2021 from "./Software_Sales/software_sales_fy3_2021.json";
import softwareSales2020 from "./Software_Sales/software_sales_fy3_2020.json";
import softwareSales2019 from "./Software_Sales/software_sales_fy3_2019.json";
import undefinedData from "./Software_Sales/undefinedData.json";
import { salesOrUnitsJSON } from "../bandaiNamco/software_sales_bandai_namco";

export type collectionJSON = {
    fiscalYear: string,
    currentQuarter: number,
    consolePackageAndDLSales: salesOrUnitsJSON,
    consolePackageAndDLUnits: salesOrUnitsJSON,
};

const collection: collectionJSON[] = [
    softwareSales2023,
    softwareSales2022,
    softwareSales2021,
    softwareSales2020,
    softwareSales2019,
    undefinedData,
];

export const salesMake = (obj: {"consolePackageAndDLSales": salesOrUnitsJSON}): Section[] => {

    let sales: Section[] = [
        {
            name: obj.consolePackageAndDLSales.name,
            region: " Group Total",
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: (obj.consolePackageAndDLSales.units === "NaN") ? "NaN" : "currency",
            value: obj.consolePackageAndDLSales.Q1CmlValue, // billion yen
            notes: obj.consolePackageAndDLSales.notes
        },
        {
            name: obj.consolePackageAndDLSales.name,
            region: " Group Total",
            period: "2nd Quarter",
            cmlPeriod: "First Half",
            units: (obj.consolePackageAndDLSales.units === "NaN") ? "NaN" : "currency",
            value: obj.consolePackageAndDLSales.Q2CmlValue, // billion yen
            notes: obj.consolePackageAndDLSales.notes
        },
        {
            name: obj.consolePackageAndDLSales.name,
            region: " Group Total",
            period: "3rd Quarter",
            cmlPeriod: "1st 3 Qtrs",
            units: (obj.consolePackageAndDLSales.units === "NaN") ? "NaN" : "currency",
            value: obj.consolePackageAndDLSales.Q3CmlValue, // billion yen
            notes: obj.consolePackageAndDLSales.notes
        },
        {
            name: obj.consolePackageAndDLSales.name,
            region: " Group Total",
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: (obj.consolePackageAndDLSales.units === "NaN") ? "NaN" : "currency",
            value: obj.consolePackageAndDLSales.Q4CmlValue, // billion yen
            notes: obj.consolePackageAndDLSales.notes
        },
    ];

    return sales
};

export const unitsMake = (obj: {"consolePackageAndDLUnits": salesOrUnitsJSON}): Section[] => {

    let units: Section[] = [
        {
            name: obj.consolePackageAndDLUnits.name,
            region: " Group Total",
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: (obj.consolePackageAndDLUnits.units === "NaN") ? "NaN" : "units",
            value: obj.consolePackageAndDLUnits.Q1CmlValue // billion yen
        },
        {
            name: obj.consolePackageAndDLUnits.name,
            region: " Group Total",
            period: "2nd Quarter",
            cmlPeriod: "First Half",
            units: (obj.consolePackageAndDLUnits.units === "NaN") ? "NaN" : "units",
            value: obj.consolePackageAndDLUnits.Q2CmlValue // billion yen
        },
        {
            name: obj.consolePackageAndDLUnits.name,
            region: " Group Total",
            period: "3rd Quarter",
            cmlPeriod: "1st 3 Qtrs",
            units: (obj.consolePackageAndDLUnits.units === "NaN") ? "NaN" : "units",
            value: obj.consolePackageAndDLUnits.Q3CmlValue // billion yen
        },
        {
            name: obj.consolePackageAndDLUnits.name,
            region: " Group Total",
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: (obj.consolePackageAndDLUnits.units === "NaN") ? "NaN" : "units",
            value: obj.consolePackageAndDLUnits.Q4CmlValue // billion yen
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
        firstHeader: "| Koei Tecmo     |",
    };

    let salesThisFY: Section[] = salesMake(elem);
    let salesLastFY: Section[] = salesMake(array[index+1]);

    let unitsThisFY: Section[] = unitsMake(elem);
    let unitsLastFY: Section[] = unitsMake(array[index+1]);

    return KoeiTecmoPrint(salesThisFY, salesLastFY, unitsThisFY, unitsLastFY, header, elem.currentQuarter)
}).filter(elem => elem !== "undefined")

export const softwareSalesGraphList = collection.map((elem, index, array) => {
    if (array[index] === array.at(-1)) {
        return undefined // for undefinedData in collection only
    }

    let salesThisFY: Section[] = salesMake(elem);
    let salesLastFY: Section[] = salesMake(array[index+1]);

    let unitsThisFY: Section[] = unitsMake(elem);
    let unitsLastFY: Section[] = unitsMake(array[index+1]);

    return graphMake(salesThisFY, salesLastFY, unitsThisFY, unitsLastFY, elem.consolePackageAndDLSales.name, elem.fiscalYear, elem.currentQuarter)
}).filter(elem => elem !== undefined);
