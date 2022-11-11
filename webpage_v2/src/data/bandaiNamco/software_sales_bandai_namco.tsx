import { Header, Section, BandaiNamcoPrint, } from "../../utils/segment_data_logic";
import softwareSales2022 from "./Software_Sales/software_sales_fy3_2022.json";
import undefinedData from "./Software_Sales/undefinedData.json";

const collection = [
    softwareSales2022,
    undefinedData,
] as const;

const salesHomeVideoGameMake = (obj: {"homeVideoGameSales": {
    name: string;
    units: string;
    Q1CmlValue: number;
    Q2CmlValue: number;
    Q3CmlValue: number;
    Q4CmlValue: number;
}}): Section[] => {

    let salesHomeVideoGame: Section[] = [
        {
            name: obj.homeVideoGameSales.name,
            region: " Group Total ",
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: (obj.homeVideoGameSales.units === "NaN") ? "NaN" : "currency",
            value: obj.homeVideoGameSales.Q1CmlValue // billion yen
        },
        {
            name: obj.homeVideoGameSales.name,
            region: " Group Total ",
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: (obj.homeVideoGameSales.units === "NaN") ? "NaN" : "currency",
            value: obj.homeVideoGameSales.Q2CmlValue // billion yen
        },
        {
            name: obj.homeVideoGameSales.name,
            region: " Group Total ",
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: (obj.homeVideoGameSales.units === "NaN") ? "NaN" : "currency",
            value: obj.homeVideoGameSales.Q3CmlValue // billion yen
        },
        {
            name: obj.homeVideoGameSales.name,
            region: " Group Total ",
            period: " 4th Quarter ",
            cmlPeriod: "Cml. ",
            units: (obj.homeVideoGameSales.units === "NaN") ? "NaN" : "currency",
            value: obj.homeVideoGameSales.Q4CmlValue // billion yen
        },
    ];

    return salesHomeVideoGame
};

const unitsmake = (obj: {"homeVideoGameUnits": {
    name: string;
    units: string;
    Q1CmlValue: number;
    Q2CmlValue: number;
    Q3CmlValue: number;
    Q4CmlValue: number;
}}): Section[] => {

    let units: Section[] = [
        {
            name: obj.homeVideoGameUnits.name,
            region: " Group Total ",
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: (obj.homeVideoGameUnits.units === "NaN") ? "NaN" : "units",
            value: obj.homeVideoGameUnits.Q1CmlValue // billion yen
        },
        {
            name: obj.homeVideoGameUnits.name,
            region: " Group Total ",
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: (obj.homeVideoGameUnits.units === "NaN") ? "NaN" : "units",
            value: obj.homeVideoGameUnits.Q2CmlValue // billion yen
        },
        {
            name: obj.homeVideoGameUnits.name,
            region: " Group Total ",
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: (obj.homeVideoGameUnits.units === "NaN") ? "NaN" : "units",
            value: obj.homeVideoGameUnits.Q3CmlValue // billion yen
        },
        {
            name: obj.homeVideoGameUnits.name,
            region: " Group Total ",
            period: " 4th Quarter ",
            cmlPeriod: "Cml. ",
            units: (obj.homeVideoGameUnits.units === "NaN") ? "NaN" : "units",
            value: obj.homeVideoGameUnits.Q4CmlValue // billion yen
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

    let unitsThisFY: Section[] = unitsmake(elem);
    let unitsLastFY: Section[] = unitsmake(array[index+1]);

    return BandaiNamcoPrint(salesThisFY, salesLastFY, unitsThisFY, unitsLastFY, header, elem.currentQuarter)
}).filter(elem => elem !== "undefined")
