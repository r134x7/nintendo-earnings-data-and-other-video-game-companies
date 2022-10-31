import { Header, Section, BandaiNamcoPrint } from "../../../utils/segment_data_logic";

const sales: Section[] = [
    {
        name: " Home video game ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 26.2 // billion yen
    },
    {
        name: " Home video game ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 55.7 // billion yen
    },
    {
        name: " Home video game ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 98.8 // billion yen
    },
    {
        name: " Home video game ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 174.4 // billion yen
    },
    {
        name: " Home video game ",
        region: " Group Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 118.1 // billion yen
    },
]

const units: Section[] = [
    {
        name: " Home video game ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 10066 // thousand
    },
    {
        name: " Home video game ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 19600,
    },
    {
        name: " Home video game ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 36220,
    },
    {
        name: " Home video game ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 56847,
    },
    {
        name: " Home video game ",
        region: " Group Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 41498,
    },
]

const header: Header = {
    fiscalYear: " FY3/2022 ",
    secondHeader: "| Segment Information |",
    firstHeader: "| Bandai Namco   |",
}

export const printSalesPerSoftwareUnit = BandaiNamcoPrint(sales, units, header, 4);