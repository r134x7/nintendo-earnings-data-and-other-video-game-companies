import { Header, Section, SegaPrint } from "../../../utils/segment_data_logic";
import {
    sales2022,
    units2022,
} from "../Sega_FY3_2022/software_sales_fy3_2022";

export const sales2023: Section[] = [
    {
        name: " Full Games ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 9.9 // billion yen
    },
    {
        name: " Full Games ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 22.3 // billion yen
    },
    {
        name: " Full Games ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 22.3 // billion yen
    },
    {
        name: " Full Games ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 22.3 // billion yen
    },
    // {
    //     name: " Full Games ",
    //     region: " Group Total ",
    //     period: " Last FY Cumulative ",
    //     cmlPeriod: "Cml. ",
    //     units: "currency",
    //     value: 65.8 // billion yen
    // },
]

export const units2023: Section[] = [
    {
        name: " Full Games ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 5140 // thousand
    },
    {
        name: " Full Games ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 10140,
    },
    {
        name: " Full Games ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 10140,
    },
    {
        name: " Full Games ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 10140,
    },
    // {
    //     name: " Full Games ",
    //     region: " Group Total ",
    //     period: " Last FY Cumulative ",
    //     cmlPeriod: "Cml. ",
    //     units: "currency",
    //     value: 27200,
    // },
]

const header: Header = {
    fiscalYear: " FY3/2023 ",
    secondHeader: "| Segment Information |",
    firstHeader: "| Sega Sammy     |",
}

export const printSalesPerSoftwareUnit = SegaPrint(sales2023, sales2022, units2023, units2022, header, 2);