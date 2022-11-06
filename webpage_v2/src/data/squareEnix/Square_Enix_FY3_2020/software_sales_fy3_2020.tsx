import { Header, Section, SquareEnixPrint, undefinedData } from "../../../utils/segment_data_logic";

export const salesHD2020: Section[] = [
    {
        name: " HD Games ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 7.9 // billion yen
    },
    {
        name: " HD Games ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 18.7 // billion yen
    },
    {
        name: " HD Games ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 27.1 // billion yen
    },
    {
        name: " HD Games ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 42.0 // billion yen
    },
    // {
    //     name: " HD Games ",
    //     region: " Group Total ",
    //     period: " Last FY Cumulative ",
    //     cmlPeriod: "Cml. ",
    //     units: "currency",
    //     value: 93.5 // billion yen
    // },
]

export const salesMMO2020: Section[] = [
    {
        name: " MMO ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 8.8 // billion yen
    },
    {
        name: " MMO ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 22.4 // billion yen
    },
    {
        name: " MMO ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 31.0 // billion yen
    },
    {
        name: " MMO ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 40.1 // billion yen
    },
    // {
    //     name: " MMO ",
    //     region: " Group Total ",
    //     period: " Last FY Cumulative ",
    //     cmlPeriod: "Cml. ",
    //     units: "currency",
    //     value: 27.1 // billion yen
    // },
]

export const salesHDandMMO2020: Section[] = [
    {
        name: " HD Games and MMO ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: Number((salesHD2020[0].value + salesMMO2020[0].value).toFixed(1)) // billion yen
    },
    {
        name: " HD Games and MMO ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: Number((salesHD2020[1].value + salesMMO2020[1].value).toFixed(1)) // billion yen
    },
    {
        name: " HD Games and MMO ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: Number((salesHD2020[2].value + salesMMO2020[2].value).toFixed(1)) // billion yen
    },
    {
        name: " HD Games and MMO ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: Number((salesHD2020[3].value + salesMMO2020[3].value).toFixed(1)) // billion yen
    },
    // {
    //     name: " HD Games and MMO ",
    //     region: " Group Total ",
    //     period: " Last FY Cumulative ",
    //     cmlPeriod: "Cml. ",
    //     units: "currency",
    //     value: Number((salesHD2020[4].value + salesMMO2020[4].value).toFixed(1)) // billion yen
    // },
]

export const units2020: Section[] = [
    {
        name: " HD Games & MMO ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 3250 // thousand
    },
    {
        name: " HD Games & MMO ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 8650,
    },
    {
        name: " HD Games & MMO ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 13620,
    },
    {
        name: " HD Games & MMO ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 18090,
    },
    // {
    //     name: " HD Games & MMO ",
    //     region: " Group Total ",
    //     period: " Last FY Cumulative ",
    //     cmlPeriod: "Cml. ",
    //     units: "units",
    //     value: 26620,
    // },
]

const header: Header = {
    fiscalYear: " FY3/2020 ",
    secondHeader: "| Segment Information |",
    firstHeader: "| Square Enix    |", 
}

export const printSalesPerSoftwareUnit = SquareEnixPrint(salesHD2020, undefinedData, salesMMO2020, undefinedData, salesHDandMMO2020, undefinedData, units2020, undefinedData, header, 4);