import { Header, Section, SquareEnixPrint } from "../../../utils/segment_data_logic";
import {
    salesHD2021,
    salesHDandMMO2021,
    salesMMO2021,
    units2021,
} from "../Square_Enix_FY3_2021/software_sales_fy3_2021";

export const salesHD2022: Section[] = [
    {
        name: " HD Games ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 25.1 // billion yen
    },
    {
        name: " HD Games ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 39.5 // billion yen
    },
    {
        name: " HD Games ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 65.5 // billion yen
    },
    {
        name: " HD Games ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 87.1 // billion yen
    },
    // {
    //     name: " HD Games ",
    //     region: " Group Total ",
    //     period: " Last FY Cumulative ",
    //     cmlPeriod: "Cml. ",
    //     units: "currency",
    //     value: 96.6 // billion yen
    // },
]

export const salesMMO2022: Section[] = [
    {
        name: " MMO ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 11.6 // billion yen
    },
    {
        name: " MMO ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 27.7 // billion yen
    },
    {
        name: " MMO ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 48.2 // billion yen
    },
    {
        name: " MMO ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 62.2 // billion yen
    },
    // {
    //     name: " MMO ",
    //     region: " Group Total ",
    //     period: " Last FY Cumulative ",
    //     cmlPeriod: "Cml. ",
    //     units: "currency",
    //     value: 39.8 // billion yen
    // },
]

export const salesHDandMMO2022: Section[] = [
    {
        name: " HD Games and MMO ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: Number((salesHD2022[0].value + salesMMO2022[0].value).toFixed(1)) // billion yen
    },
    {
        name: " HD Games and MMO ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: Number((salesHD2022[1].value + salesMMO2022[1].value).toFixed(1)) // billion yen
    },
    {
        name: " HD Games and MMO ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: Number((salesHD2022[2].value + salesMMO2022[2].value).toFixed(1)) // billion yen
    },
    {
        name: " HD Games and MMO ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: Number((salesHD2022[3].value + salesMMO2022[3].value).toFixed(1)) // billion yen
    },
    // {
    //     name: " HD Games and MMO ",
    //     region: " Group Total ",
    //     period: " Last FY Cumulative ",
    //     cmlPeriod: "Cml. ",
    //     units: "currency",
    //     value: Number((salesHD2022[4].value + salesMMO2022[4].value).toFixed(1)) // billion yen
    // },
]

export const units2022: Section[] = [
    {
        name: " HD Games & MMO ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 9880 // thousand
    },
    {
        name: " HD Games & MMO ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 17220,
    },
    {
        name: " HD Games & MMO ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 29450,
    },
    {
        name: " HD Games & MMO ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 39130,
    },
    // {
    //     name: " HD Games & MMO ",
    //     region: " Group Total ",
    //     period: " Last FY Cumulative ",
    //     cmlPeriod: "Cml. ",
    //     units: "units",
    //     value: 49900,
    // },
]

const header: Header = {
    fiscalYear: " FY3/2022 ",
    secondHeader: "| Segment Information |",
    firstHeader: "| Square Enix    |", 
}

export const printSalesPerSoftwareUnit = SquareEnixPrint(salesHD2022, salesHD2021, salesMMO2022, salesMMO2021, salesHDandMMO2022, salesHDandMMO2021, units2022, units2021, header, 4);