import { Header, Section, KoeiTecmoPrint } from "../../utils/segment_data_logic";
import softwareSales2023 from "./Software_Sales/software_sales_fy3_2023.json"
import softwareSales2022 from "./Software_Sales/software_sales_fy3_2022.json";
import softwareSales2021 from "./Software_Sales/software_sales_fy3_2021.json";
import undefinedData from "./Software_Sales/undefinedData.json";

const collection = [
    softwareSales2023,
    softwareSales2022,
    softwareSales2021,
    undefinedData,
] as const;

const salesMake = (obj: {"consolePackageAndDLSales": {
    name: string;
    units: string;
    Q1CmlValue: number;
    Q2CmlValue: number;
    Q3CmlValue: number;
    Q4CmlValue: number;
}}): Section[] => {

    let sales: Section[] = [
        {
            name: obj.consolePackageAndDLSales.name,
            region: " Group Total ",
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: (obj.consolePackageAndDLSales.units === "NaN") ? "NaN" : "currency",
            value: obj.consolePackageAndDLSales.Q1CmlValue // billion yen
        },
        {
            name: obj.consolePackageAndDLSales.name,
            region: " Group Total ",
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: (obj.consolePackageAndDLSales.units === "NaN") ? "NaN" : "currency",
            value: obj.consolePackageAndDLSales.Q2CmlValue // billion yen
        },
        {
            name: obj.consolePackageAndDLSales.name,
            region: " Group Total ",
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: (obj.consolePackageAndDLSales.units === "NaN") ? "NaN" : "currency",
            value: obj.consolePackageAndDLSales.Q3CmlValue // billion yen
        },
        {
            name: obj.consolePackageAndDLSales.name,
            region: " Group Total ",
            period: " 4th Quarter ",
            cmlPeriod: "Cml. ",
            units: (obj.consolePackageAndDLSales.units === "NaN") ? "NaN" : "currency",
            value: obj.consolePackageAndDLSales.Q4CmlValue // billion yen
        },
    ];

    return sales
};

const unitsmake = (obj: {"consolePackageAndDLUnits": {
    name: string;
    units: string;
    Q1CmlValue: number;
    Q2CmlValue: number;
    Q3CmlValue: number;
    Q4CmlValue: number;
}}): Section[] => {

    let units: Section[] = [
        {
            name: obj.consolePackageAndDLUnits.name,
            region: " Group Total ",
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: (obj.consolePackageAndDLUnits.units === "NaN") ? "NaN" : "units",
            value: obj.consolePackageAndDLUnits.Q1CmlValue // billion yen
        },
        {
            name: obj.consolePackageAndDLUnits.name,
            region: " Group Total ",
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: (obj.consolePackageAndDLUnits.units === "NaN") ? "NaN" : "units",
            value: obj.consolePackageAndDLUnits.Q2CmlValue // billion yen
        },
        {
            name: obj.consolePackageAndDLUnits.name,
            region: " Group Total ",
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: (obj.consolePackageAndDLUnits.units === "NaN") ? "NaN" : "units",
            value: obj.consolePackageAndDLUnits.Q3CmlValue // billion yen
        },
        {
            name: obj.consolePackageAndDLUnits.name,
            region: " Group Total ",
            period: " 4th Quarter ",
            cmlPeriod: "Cml. ",
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

    let unitsThisFY: Section[] = unitsmake(elem);
    let unitsLastFY: Section[] = unitsmake(array[index+1]);

    return KoeiTecmoPrint(salesThisFY, salesLastFY, unitsThisFY, unitsLastFY, header, elem.currentQuarter)
}).filter(elem => elem !== "undefined")
