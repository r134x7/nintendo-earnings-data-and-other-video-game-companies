import { Header, Section, KoeiTecmoPrint, undefinedData } from "../../../utils/segment_data_logic";

export const sales2022: Section[] = [
    {
        name: " Console Package & DL ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 10.068 // billion yen
    },
    {
        name: " Console Package & DL ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 15.885 // billion yen
    },
    {
        name: " Console Package & DL ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 23.297 // billion yen
    },
    {
        name: " Console Package & DL ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 30.771 // billion yen
    },
    // {
    //     name: " Console Package & DL ",
    //     region: " Group Total ",
    //     period: " Last FY Cumulative ",
    //     cmlPeriod: "Cml. ",
    //     units: "currency",
    //     value: 28.728 // billion yen
    // },
]

export const units2022: Section[] = [
    {
        name: " Console Package & DL ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 2450 // thousand
    },
    {
        name: " Console Package & DL ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 3650,
    },
    {
        name: " Console Package & DL ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 5700,
    },
    {
        name: " Console Package & DL ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 8130,
    },
    // {
    //     name: " Console Package & DL ",
    //     region: " Group Total ",
    //     period: " Last FY Cumulative ",
    //     cmlPeriod: "Cml. ",
    //     units: "units",
    //     value: 10110,
    // },
]

const header: Header = {
    fiscalYear: " FY3/2022 ",
    secondHeader: "| Segment Information |",
    firstHeader: "| Koei Tecmo     |",
}

export const printSalesPerSoftwareUnit = KoeiTecmoPrint(sales2022, undefinedData, units2022, undefinedData, header, 4);