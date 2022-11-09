import { Header, Section, SquareEnixPrint, undefinedData } from "../../../utils/segment_data_logic";
import softwareSales2023 from "../Software_Sales/software_sales_fy3_2023.json";
import softwareSales2022 from "../Software_Sales/software_sales_fy3_2022.json";
import softwareSales2021 from "../Software_Sales/software_sales_fy3_2021.json";
import softwareSales2020 from "../Software_Sales/software_sales_fy3_2020.json";

const collection = [
    softwareSales2023,
    softwareSales2022,
    softwareSales2021,
    softwareSales2020,
] as const;

const something: string[] = collection.map((elem, index, array) => {

    let salesHD: Section[] = [
        {
            name: elem.hdGamesSales.name,
            region: " Group Total ",
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: "currency",
            value: elem.hdGamesSales.Q1CmlValue // billion yen
        },
        {
            name: elem.hdGamesSales.name,
            region: " Group Total ",
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: "currency",
            value: elem.hdGamesSales.Q2CmlValue // billion yen
        },
        {
            name: elem.hdGamesSales.name,
            region: " Group Total ",
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: "currency",
            value: elem.hdGamesSales.Q3CmlValue // billion yen
        },
        {
            name: elem.hdGamesSales.name,
            region: " Group Total ",
            period: " 4th Quarter ",
            cmlPeriod: "Cml. ",
            units: "currency",
            value: elem.hdGamesSales.Q4CmlValue // billion yen
        },
    ];


    let salesMMO: Section[] = [
        {
            name: elem.mmoSales.name,
            region: " Group Total ",
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: "currency",
            value: elem.mmoSales.Q1CmlValue // billion yen
        },
        {
            name: elem.mmoSales.name,
            region: " Group Total ",
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: "currency",
            value: elem.mmoSales.Q2CmlValue // billion yen
        },
        {
            name: elem.mmoSales.name,
            region: " Group Total ",
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: "currency",
            value: elem.mmoSales.Q3CmlValue // billion yen
        },
        {
            name: elem.mmoSales.name,
            region: " Group Total ",
            period: " 4th Quarter ",
            cmlPeriod: "Cml. ",
            units: "currency",
            value: elem.mmoSales.Q4CmlValue // billion yen
        },
    ];


    let salesHDandMMO: Section[] = [
        {
            name: " HD Games and MMO ",
            region: " Group Total ",
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: "currency",
            value: Number((salesHD[0].value + salesMMO[0].value).toFixed(1)) // billion yen
        },
        {
            name: " HD Games and MMO ",
            region: " Group Total ",
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: "currency",
            value: Number((salesHD[1].value + salesMMO[1].value).toFixed(1)) // billion yen
        },
        {
            name: " HD Games and MMO ",
            region: " Group Total ",
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: "currency",
            value: Number((salesHD[2].value + salesMMO[2].value).toFixed(1)) // billion yen
        },
        {
            name: " HD Games and MMO ",
            region: " Group Total ",
            period: " 4th Quarter ",
            cmlPeriod: "Cml. ",
            units: "currency",
            value: Number((salesHD[3].value + salesMMO[3].value).toFixed(1)) // billion yen
        },
    ];


    let units: Section[] = [
        {
            name: elem.hdGamesAndMMOUnits.name, 
            region: " Group Total ",
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: "units",
            value: elem.hdGamesAndMMOUnits.Q1CmlValue // thousand
        },
        {
            name: elem.hdGamesAndMMOUnits.name, 
            region: " Group Total ",
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: "units",
            value: elem.hdGamesAndMMOUnits.Q2CmlValue,
        },
        {
            name: elem.hdGamesAndMMOUnits.name, 
            region: " Group Total ",
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: "units",
            value: elem.hdGamesAndMMOUnits.Q3CmlValue,
        },
        {
            name: elem.hdGamesAndMMOUnits.name, 
            region: " Group Total ",
            period: " 4th Quarter ",
            cmlPeriod: "Cml. ",
            units: "units",
            value: elem.hdGamesAndMMOUnits.Q4CmlValue,
        },
    ];

    let header: Header = {
        fiscalYear: elem.fiscalYear,
        secondHeader: "| Segment Information |",
        firstHeader: "| Square Enix    |", 
    };

    return ()  SquareEnixPrint(salesHD2021, salesHD2020, salesMMO2021, salesMMO2020, salesHDandMMO2021, salesHDandMMO2020, units2021, units2020, header, 4).concat(notes);
})

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
