import { Header, Section, SquareEnixPrint } from "../../../utils/segment_data_logic";
import softwareSales2023 from "../Software_Sales/software_sales_fy3_2023.json";
import softwareSales2022 from "../Software_Sales/software_sales_fy3_2022.json";
import softwareSales2021 from "../Software_Sales/software_sales_fy3_2021.json";
import softwareSales2020 from "../Software_Sales/software_sales_fy3_2020.json";
import undefinedData from "../Software_Sales/undefinedData.json";

const collection = [
    softwareSales2023,
    softwareSales2022,
    softwareSales2021,
    softwareSales2020,
    undefinedData,
] as const;

const salesHDtest = (obj: {"hdGamesSales": {
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


const salesMMOtest = (obj: {"mmoSales": {
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

const salesHDandMMOtest= (obj: {"hdGamesSales": {
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

const unitstest = (obj: {"hdGamesAndMMOUnits": {
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
            units: (obj.hdGamesAndMMOUnits.units === "NaN") ? "NaN" : "currency",
            value: obj.hdGamesAndMMOUnits.Q1CmlValue // billion yen
        },
        {
            name: obj.hdGamesAndMMOUnits.name,
            region: " Group Total ",
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: (obj.hdGamesAndMMOUnits.units === "NaN") ? "NaN" : "currency",
            value: obj.hdGamesAndMMOUnits.Q2CmlValue // billion yen
        },
        {
            name: obj.hdGamesAndMMOUnits.name,
            region: " Group Total ",
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: (obj.hdGamesAndMMOUnits.units === "NaN") ? "NaN" : "currency",
            value: obj.hdGamesAndMMOUnits.Q3CmlValue // billion yen
        },
        {
            name: obj.hdGamesAndMMOUnits.name,
            region: " Group Total ",
            period: " 4th Quarter ",
            cmlPeriod: "Cml. ",
            units: (obj.hdGamesAndMMOUnits.units === "NaN") ? "NaN" : "currency",
            value: obj.hdGamesAndMMOUnits.Q4CmlValue // billion yen
        },
    ];

    return units 
};

const otherTest: (string | undefined)[] = collection.map((elem, index, array) => {
    if (array[index] === array.at(-1)) {
        return undefined // for undefinedData in collection only
    }

    let header: Header = {
        fiscalYear: elem.fiscalYear,
        secondHeader: "| Segment Information |",
        firstHeader: "| Square Enix    |", 
    };

    let salesHDThisFY: Section[] = salesHDtest(elem);
    let salesHDLastFY: Section[] = salesHDtest(array[index+1]);

    let salesMMOThisFY: Section[] = salesMMOtest(elem);
    let salesMMOLastFY: Section[] = salesMMOtest(array[index+1]);

    let salesHDandMMOThisFY: Section[] = salesHDandMMOtest(elem);
    let salesHDandMMOLastFY: Section[] = salesHDandMMOtest(array[index+1]);

    let unitsThisFY: Section[] = unitstest(elem);
    let unitsLastFY: Section[] = unitstest(array[index+1]);

    return (elem.fiscalYear === " FY3/2021 ")  
            ? SquareEnixPrint(salesHDThisFY, salesHDLastFY, salesMMOThisFY, salesMMOLastFY, salesHDandMMOThisFY, salesHDandMMOLastFY, unitsThisFY, unitsLastFY, header, elem.currentQuarter).concat(notes2021)
            : SquareEnixPrint(salesHDThisFY, salesHDLastFY, salesMMOThisFY, salesMMOLastFY, salesHDandMMOThisFY, salesHDandMMOLastFY, unitsThisFY, unitsLastFY, header, elem.currentQuarter)
}).filter(elem => elem !== undefined)


// const something: string[] = collection.map((elem, index, array) => {

//     let salesHD: Section[] = [
//         {
//             name: elem.hdGamesSales.name,
//             region: " Group Total ",
//             period: " 1st Quarter ",
//             cmlPeriod: " 1st Quarter ",
//             units: (elem.hdGamesSales.units === "NaN") ? "NaN" : "currency",
//             value: elem.hdGamesSales.Q1CmlValue // billion yen
//         },
//         {
//             name: elem.hdGamesSales.name,
//             region: " Group Total ",
//             period: " 2nd Quarter ",
//             cmlPeriod: " First Half  ",
//             units: (elem.hdGamesSales.units === "NaN") ? "NaN" : "currency",
//             value: elem.hdGamesSales.Q2CmlValue // billion yen
//         },
//         {
//             name: elem.hdGamesSales.name,
//             region: " Group Total ",
//             period: " 3rd Quarter ",
//             cmlPeriod: " 1st 3 Qtrs  ",
//             units: (elem.hdGamesSales.units === "NaN") ? "NaN" : "currency",
//             value: elem.hdGamesSales.Q3CmlValue // billion yen
//         },
//         {
//             name: elem.hdGamesSales.name,
//             region: " Group Total ",
//             period: " 4th Quarter ",
//             cmlPeriod: "Cml. ",
//             units: (elem.hdGamesSales.units === "NaN") ? "NaN" : "currency",
//             value: elem.hdGamesSales.Q4CmlValue // billion yen
//         },
//     ];


//     let salesMMO: Section[] = [
//         {
//             name: elem.mmoSales.name,
//             region: " Group Total ",
//             period: " 1st Quarter ",
//             cmlPeriod: " 1st Quarter ",
//             units: (elem.mmoSales.units === "NaN") ? "NaN" : "currency",
//             value: elem.mmoSales.Q1CmlValue // billion yen
//         },
//         {
//             name: elem.mmoSales.name,
//             region: " Group Total ",
//             period: " 2nd Quarter ",
//             cmlPeriod: " First Half  ",
//             units: (elem.mmoSales.units === "NaN") ? "NaN" : "currency",
//             value: elem.mmoSales.Q2CmlValue // billion yen
//         },
//         {
//             name: elem.mmoSales.name,
//             region: " Group Total ",
//             period: " 3rd Quarter ",
//             cmlPeriod: " 1st 3 Qtrs  ",
//             units: (elem.mmoSales.units === "NaN") ? "NaN" : "currency",
//             value: elem.mmoSales.Q3CmlValue // billion yen
//         },
//         {
//             name: elem.mmoSales.name,
//             region: " Group Total ",
//             period: " 4th Quarter ",
//             cmlPeriod: "Cml. ",
//             units: (elem.mmoSales.units === "NaN") ? "NaN" : "currency",
//             value: elem.mmoSales.Q4CmlValue // billion yen
//         },
//     ];


//     let salesHDandMMO: Section[] = [
//         {
//             name: " HD Games and MMO ",
//             region: " Group Total ",
//             period: " 1st Quarter ",
//             cmlPeriod: " 1st Quarter ",
//             units: (elem.hdGamesSales.units === "NaN") ? "NaN" : "currency",
//             value: Number((salesHD[0].value + salesMMO[0].value).toFixed(1)) // billion yen
//         },
//         {
//             name: " HD Games and MMO ",
//             region: " Group Total ",
//             period: " 2nd Quarter ",
//             cmlPeriod: " First Half  ",
//             units: (elem.hdGamesSales.units === "NaN") ? "NaN" : "currency",
//             value: Number((salesHD[1].value + salesMMO[1].value).toFixed(1)) // billion yen
//         },
//         {
//             name: " HD Games and MMO ",
//             region: " Group Total ",
//             period: " 3rd Quarter ",
//             cmlPeriod: " 1st 3 Qtrs  ",
//             units: (elem.hdGamesSales.units === "NaN") ? "NaN" : "currency",
//             value: Number((salesHD[2].value + salesMMO[2].value).toFixed(1)) // billion yen
//         },
//         {
//             name: " HD Games and MMO ",
//             region: " Group Total ",
//             period: " 4th Quarter ",
//             cmlPeriod: "Cml. ",
//             units: (elem.hdGamesSales.units === "NaN") ? "NaN" : "currency",
//             value: Number((salesHD[3].value + salesMMO[3].value).toFixed(1)) // billion yen
//         },
//     ];


//     let units: Section[] = [
//         {
//             name: elem.hdGamesAndMMOUnits.name, 
//             region: " Group Total ",
//             period: " 1st Quarter ",
//             cmlPeriod: " 1st Quarter ",
//             units: (elem.hdGamesAndMMOUnits.units === "NaN") ? "NaN" : "units",
//             value: elem.hdGamesAndMMOUnits.Q1CmlValue // thousand
//         },
//         {
//             name: elem.hdGamesAndMMOUnits.name, 
//             region: " Group Total ",
//             period: " 2nd Quarter ",
//             cmlPeriod: " First Half  ",
//             units: (elem.hdGamesAndMMOUnits.units === "NaN") ? "NaN" : "units",
//             value: elem.hdGamesAndMMOUnits.Q2CmlValue,
//         },
//         {
//             name: elem.hdGamesAndMMOUnits.name, 
//             region: " Group Total ",
//             period: " 3rd Quarter ",
//             cmlPeriod: " 1st 3 Qtrs  ",
//             units: (elem.hdGamesAndMMOUnits.units === "NaN") ? "NaN" : "units",
//             value: elem.hdGamesAndMMOUnits.Q3CmlValue,
//         },
//         {
//             name: elem.hdGamesAndMMOUnits.name, 
//             region: " Group Total ",
//             period: " 4th Quarter ",
//             cmlPeriod: "Cml. ",
//             units: (elem.hdGamesAndMMOUnits.units === "NaN") ? "NaN" : "units",
//             value: elem.hdGamesAndMMOUnits.Q4CmlValue,
//         },
//     ];

//     let header: Header = {
//         fiscalYear: elem.fiscalYear,
//         secondHeader: "| Segment Information |",
//         firstHeader: "| Square Enix    |", 
//     };

//     return (elem.fiscalYear === " FY3/2021 ")  
//             ? SquareEnixPrint(salesHD, salesHD2020, salesMMO, salesMMO2020, salesHDandMMO, salesHDandMMO2020, units, units2020, header, elem.currentQuarter).concat(notes2021)
//             : SquareEnixPrint(salesHD, salesHD2020, salesMMO, salesMMO2020, salesHDandMMO, salesHDandMMO2020, units, units2020, header, elem.currentQuarter)
// })

export const salesHD2023: Section[] = [
    {
        name: " HD Games ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 12.0 // billion yen
    },
    {
        name: " HD Games ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 29.4 // billion yen
    },
    {
        name: " HD Games ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 99.9 // billion yen
    },
    {
        name: " HD Games ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 99.9 // billion yen
    },
]

export const salesMMO2023: Section[] = [
    {
        name: " MMO ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 14.1 // billion yen
    },
    {
        name: " MMO ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 28.6 // billion yen
    },
    {
        name: " MMO ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 99.9 // billion yen
    },
    {
        name: " MMO ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 99.9 // billion yen
    },
]

export const salesHDandMMO2023: Section[] = [
    {
        name: " HD Games and MMO ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: Number((salesHD2023[0].value + salesMMO2023[0].value).toFixed(1)) // billion yen
    },
    {
        name: " HD Games and MMO ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: Number((salesHD2023[1].value + salesMMO2023[1].value).toFixed(1)) // billion yen
    },
    {
        name: " HD Games and MMO ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: Number((salesHD2023[2].value + salesMMO2023[2].value).toFixed(1)) // billion yen
    },
    {
        name: " HD Games and MMO ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: Number((salesHD2023[3].value + salesMMO2023[3].value).toFixed(1)) // billion yen
    },
]

export const units2023: Section[] = [
    {
        name: " HD Games & MMO ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 4280 // thousand
    },
    {
        name: " HD Games & MMO ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 9410,
    },
    {
        name: " HD Games & MMO ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 99999,
    },
    {
        name: " HD Games & MMO ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 99999,
    },
]

const header: Header = {
    fiscalYear: " FY3/2023 ",
    secondHeader: "| Segment Information |",
    firstHeader: "| Square Enix    |", 
}

// export const printSalesPerSoftwareUnit = SquareEnixPrint(salesHD2023, salesHD2022, salesMMO2023, salesMMO2022, salesHDandMMO2023, salesHDandMMO2022, units2023, units2022, header, softwareSales2023.currentQuarter);

// export const printSalesPerSoftwareUnit: string = SquareEnixPrint(salesHD2021, salesHD2020, salesMMO2021, salesMMO2020, salesHDandMMO2021, salesHDandMMO2020, units2021, units2020, header, 4).concat(notes);
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
