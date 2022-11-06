import { Header, Section, SquareEnixPrint } from "../../../utils/segment_data_logic";
import {
    salesHD2020,
    salesHDandMMO2020,
    salesMMO2020,
    units2020,
} from "../Square_Enix_FY3_2020/software_sales_fy3_2020";

export const salesHD2021: Section[] = [
    {
        name: " HD Games ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 34.1 // billion yen
    },
    {
        name: " HD Games ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 57.8 // billion yen
    },
    {
        name: " HD Games ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 76.6 // billion yen
    },
    {
        name: " HD Games ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 96.6 // billion yen
    },
    // {
    //     name: " HD Games ",
    //     region: " Group Total ",
    //     period: " Last FY Cumulative ",
    //     cmlPeriod: "Cml. ",
    //     units: "currency",
    //     value: 42.0 // billion yen
    // },
]

export const salesMMO2021: Section[] = [
    {
        name: " MMO ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 10.1 // billion yen
    },
    {
        name: " MMO ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 20.9 // billion yen
    },
    {
        name: " MMO ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 29.5 // billion yen
    },
    {
        name: " MMO ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 39.8 // billion yen
    },
    // {
    //     name: " MMO ",
    //     region: " Group Total ",
    //     period: " Last FY Cumulative ",
    //     cmlPeriod: "Cml. ",
    //     units: "currency",
    //     value: 40.1 // billion yen
    // },
]

export const salesHDandMMO2021: Section[] = [
    {
        name: " HD Games and MMO ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: Number((salesHD2021[0].value + salesMMO2021[0].value).toFixed(1)) // billion yen
    },
    {
        name: " HD Games and MMO ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: Number((salesHD2021[1].value + salesMMO2021[1].value).toFixed(1)) // billion yen
    },
    {
        name: " HD Games and MMO ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: Number((salesHD2021[2].value + salesMMO2021[2].value).toFixed(1)) // billion yen
    },
    {
        name: " HD Games and MMO ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: Number((salesHD2021[3].value + salesMMO2021[3].value).toFixed(1)) // billion yen
    },
    // {
    //     name: " HD Games and MMO ",
    //     region: " Group Total ",
    //     period: " Last FY Cumulative ",
    //     cmlPeriod: "Cml. ",
    //     units: "currency",
    //     value: Number((salesHD2021[4].value + salesMMO2021[4].value).toFixed(1)) // billion yen
    // },
]

export const units2021: Section[] = [
    {
        name: " HD Games & MMO ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 6210 // thousand
    },
    {
        name: " HD Games & MMO ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 12080,
    },
    {
        name: " HD Games & MMO ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 15800,
    },
    {
        name: " HD Games & MMO ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 49900,
    },
    // {
    //     name: " HD Games & MMO ",
    //     region: " Group Total ",
    //     period: " Last FY Cumulative ",
    //     cmlPeriod: "Cml. ",
    //     units: "units",
    //     value: 33420,
    // },
]

const header: Header = {
    fiscalYear: " FY3/2021 ",
    secondHeader: "| Segment Information |",
    firstHeader: "| Square Enix    |", 
}

const notes = "\n" +
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

export const printSalesPerSoftwareUnit: string = SquareEnixPrint(salesHD2021, salesHD2020, salesMMO2021, salesMMO2020, salesHDandMMO2021, salesHDandMMO2020, units2021, units2020, header, 4).concat(notes);