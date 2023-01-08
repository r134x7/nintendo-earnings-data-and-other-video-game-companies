import { Header, Section, SquareEnixPrint } from "../../utils/segment_data_logic";
import softwareSales2023 from "./Software_Sales/software_sales_fy3_2023.json";
import softwareSales2022 from "./Software_Sales/software_sales_fy3_2022.json";
import softwareSales2021 from "./Software_Sales/software_sales_fy3_2021.json";
import softwareSales2020 from "./Software_Sales/software_sales_fy3_2020.json";
import undefinedData from "./Software_Sales/undefinedData.json";

const collection = [
    softwareSales2023,
    softwareSales2022,
    softwareSales2021,
    softwareSales2020,
    undefinedData,
] as const;

const notes2021 = "\n" +
`+----------------------------------------+
|From Outline of Results Briefing held   | 
|on May 13, 2021:                        |
|We have also made a change to how we    |
|disclose our units sold. Whereas the    |
|download sales we disclosed previously  |
|only included titles launched in the    |
|past two years, we now include all sales|
|made during the relevant fiscal year,   |
|regardless of when a title may have been|
|released.                               |
|                                        |
|This change was prompted primarily by   |
|the fact that we are making many more   |
|sales from our back catalog than we had |
|in the past.                            |
+----------------------------------------+`;

const salesHDmake = (obj: {"hdGamesSales": {
    name: string;
    units: string;
    Q1CmlValue: number;
    Q2CmlValue: number;
    Q3CmlValue: number;
    Q4CmlValue: number;
}}): Section[] => {

    let salesHD: Section[] = [
        {
            name: obj.hdGamesSales.name,
            region: " Group Total ",
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: (obj.hdGamesSales.units === "NaN") ? "NaN" : "currency",
            value: obj.hdGamesSales.Q1CmlValue // billion yen
        },
        {
            name: obj.hdGamesSales.name,
            region: " Group Total ",
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: (obj.hdGamesSales.units === "NaN") ? "NaN" : "currency",
            value: obj.hdGamesSales.Q2CmlValue // billion yen
        },
        {
            name: obj.hdGamesSales.name,
            region: " Group Total ",
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: (obj.hdGamesSales.units === "NaN") ? "NaN" : "currency",
            value: obj.hdGamesSales.Q3CmlValue // billion yen
        },
        {
            name: obj.hdGamesSales.name,
            region: " Group Total ",
            period: " 4th Quarter ",
            cmlPeriod: "Cml. ",
            units: (obj.hdGamesSales.units === "NaN") ? "NaN" : "currency",
            value: obj.hdGamesSales.Q4CmlValue // billion yen
        },
    ];

    return salesHD
};


const salesMMOmake = (obj: {"mmoSales": {
    name: string;
    units: string;
    Q1CmlValue: number;
    Q2CmlValue: number;
    Q3CmlValue: number;
    Q4CmlValue: number;
}}): Section[] => {

    let salesMMO: Section[] = [
        {
            name: obj.mmoSales.name,
            region: " Group Total ",
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: (obj.mmoSales.units === "NaN") ? "NaN" : "currency",
            value: obj.mmoSales.Q1CmlValue // billion yen
        },
        {
            name: obj.mmoSales.name,
            region: " Group Total ",
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: (obj.mmoSales.units === "NaN") ? "NaN" : "currency",
            value: obj.mmoSales.Q2CmlValue // billion yen
        },
        {
            name: obj.mmoSales.name,
            region: " Group Total ",
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: (obj.mmoSales.units === "NaN") ? "NaN" : "currency",
            value: obj.mmoSales.Q3CmlValue // billion yen
        },
        {
            name: obj.mmoSales.name,
            region: " Group Total ",
            period: " 4th Quarter ",
            cmlPeriod: "Cml. ",
            units: (obj.mmoSales.units === "NaN") ? "NaN" : "currency",
            value: obj.mmoSales.Q4CmlValue // billion yen
        },
    ];

    return salesMMO
};

const salesHDandMMOmake= (obj: {"hdGamesSales": {
    name: string;
    units: string;
    Q1CmlValue: number;
    Q2CmlValue: number;
    Q3CmlValue: number;
    Q4CmlValue: number;
}, "mmoSales": {
    name: string;
    units: string;
    Q1CmlValue: number;
    Q2CmlValue: number;
    Q3CmlValue: number;
    Q4CmlValue: number;
}}): Section[] => {

    let salesHDandMMO: Section[] = [
        {
            name: " HD Games & MMO Sales ",
            region: " Group Total ",
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: (obj.hdGamesSales.units === "NaN") ? "NaN" : "currency",
            value: Number((obj.hdGamesSales.Q1CmlValue + obj.mmoSales.Q1CmlValue).toFixed(1)) // billion yen
        },
        {
            name: " HD Games & MMO Sales ",
            region: " Group Total ",
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: (obj.hdGamesSales.units === "NaN") ? "NaN" : "currency",
            value: Number((obj.hdGamesSales.Q2CmlValue + obj.mmoSales.Q2CmlValue).toFixed(1)) // billion yen
        },
        {
            name: " HD Games & MMO Sales ",
            region: " Group Total ",
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: (obj.hdGamesSales.units === "NaN") ? "NaN" : "currency",
            value: Number((obj.hdGamesSales.Q3CmlValue + obj.mmoSales.Q3CmlValue).toFixed(1)) // billion yen
        },
        {
            name: " HD Games & MMO Sales ",
            region: " Group Total ",
            period: " 4th Quarter ",
            cmlPeriod: "Cml. ",
            units: (obj.hdGamesSales.units === "NaN") ? "NaN" : "currency",
            value: Number((obj.hdGamesSales.Q4CmlValue + obj.mmoSales.Q4CmlValue).toFixed(1)) // billion yen
        },
    ];

    return salesHDandMMO
};

const unitsmake = (obj: {"hdGamesAndMMOUnits": {
    name: string;
    units: string;
    Q1CmlValue: number;
    Q2CmlValue: number;
    Q3CmlValue: number;
    Q4CmlValue: number;
}}): Section[] => {

    let units: Section[] = [
        {
            name: obj.hdGamesAndMMOUnits.name,
            region: " Group Total ",
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: (obj.hdGamesAndMMOUnits.units === "NaN") ? "NaN" : "units",
            value: obj.hdGamesAndMMOUnits.Q1CmlValue // billion yen
        },
        {
            name: obj.hdGamesAndMMOUnits.name,
            region: " Group Total ",
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: (obj.hdGamesAndMMOUnits.units === "NaN") ? "NaN" : "units",
            value: obj.hdGamesAndMMOUnits.Q2CmlValue // billion yen
        },
        {
            name: obj.hdGamesAndMMOUnits.name,
            region: " Group Total ",
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: (obj.hdGamesAndMMOUnits.units === "NaN") ? "NaN" : "units",
            value: obj.hdGamesAndMMOUnits.Q3CmlValue // billion yen
        },
        {
            name: obj.hdGamesAndMMOUnits.name,
            region: " Group Total ",
            period: " 4th Quarter ",
            cmlPeriod: "Cml. ",
            units: (obj.hdGamesAndMMOUnits.units === "NaN") ? "NaN" : "units",
            value: obj.hdGamesAndMMOUnits.Q4CmlValue // billion yen
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
        firstHeader: "| Square Enix    |", 
    };

    let salesHDThisFY: Section[] = salesHDmake(elem);
    let salesHDLastFY: Section[] = salesHDmake(array[index+1]);

    let salesMMOThisFY: Section[] = salesMMOmake(elem);
    let salesMMOLastFY: Section[] = salesMMOmake(array[index+1]);

    let salesHDandMMOThisFY: Section[] = salesHDandMMOmake(elem);
    let salesHDandMMOLastFY: Section[] = salesHDandMMOmake(array[index+1]);

    let unitsThisFY: Section[] = unitsmake(elem);
    let unitsLastFY: Section[] = unitsmake(array[index+1]);

    return (elem.fiscalYear === "FY3/2021")  
            ? SquareEnixPrint(salesHDThisFY, salesHDLastFY, salesMMOThisFY, salesMMOLastFY, salesHDandMMOThisFY, salesHDandMMOLastFY, unitsThisFY, unitsLastFY, header, elem.currentQuarter).concat(notes2021)
            : SquareEnixPrint(salesHDThisFY, salesHDLastFY, salesMMOThisFY, salesMMOLastFY, salesHDandMMOThisFY, salesHDandMMOLastFY, unitsThisFY, unitsLastFY, header, elem.currentQuarter)
}).filter(elem => elem !== "undefined")
