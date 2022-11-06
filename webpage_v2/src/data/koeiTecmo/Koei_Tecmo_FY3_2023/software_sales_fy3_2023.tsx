import { Header, Section, KoeiTecmoPrint } from "../../../utils/segment_data_logic";
import {
    sales2022,
    units2022,
} from "../Koei_Tecmo_FY3_2022/software_sales_fy3_2022";

export const sales2023: Section[] = [
    {
        name: " Console Package & DL ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 8.715 // billion yen
    },
    {
        name: " Console Package & DL ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 14.633 // billion yen
    },
    {
        name: " Console Package & DL ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 14.633 // billion yen
    },
    {
        name: " Console Package & DL ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 14.633 // billion yen
    },
    // {
    //     name: " Console Package & DL ",
    //     region: " Group Total ",
    //     period: " Last FY Cumulative ",
    //     cmlPeriod: "Cml. ",
    //     units: "currency",
    //     value: 30.771 // billion yen
    // },
]

export const units2023: Section[] = [
    {
        name: " Console Package & DL ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 3090 // thousand
    },
    {
        name: " Console Package & DL ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 4680,
    },
    {
        name: " Console Package & DL ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 4680,
    },
    {
        name: " Console Package & DL ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 4680,
    },
    // {
    //     name: " Console Package & DL ",
    //     region: " Group Total ",
    //     period: " Last FY Cumulative ",
    //     cmlPeriod: "Cml. ",
    //     units: "units",
    //     value: 8130,
    // },
]

const header: Header = {
    fiscalYear: " FY3/2023 ",
    secondHeader: "| Segment Information |",
    firstHeader: "| Koei Tecmo     |",
}

export const printSalesPerSoftwareUnit = KoeiTecmoPrint(sales2023, sales2022, units2023, units2022, header, 2);