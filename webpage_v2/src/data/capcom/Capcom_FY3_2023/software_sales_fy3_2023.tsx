import { Header, Section, CapcomPrint, CapcomPrintPhysical, CapcomPrintDigital } from "../../../utils/segment_data_logic";

const sales: Section[] = [
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 19.2 // billion yen
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 34.9 // billion yen
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 34.9 // billion yen
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 34.9 // billion yen
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 83.3 // billion yen
    },
]

const units: Section[] = [
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 11700 // thousand
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 21300,
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 21300,
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 21300,
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 32600,
    },
]

const salesPhysical: Section[] = [
    {
        name: " Package ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 2.9 // billion yen
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 4.3 // billion yen
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 4.3 // billion yen
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 4.3 // billion yen
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 0 // billion yen
    },
]

const unitsPhysical: Section[] = [
    {
        name: " Package ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 1300, // thousand
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 1800,
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 1800,
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 1800,
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 0,
    },
]

const salesDigital: Section[] = [
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 16.3 // billion yen
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 30.6 // billion yen
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 30.6 // billion yen
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 30.6 // billion yen
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 0.0 // billion yen
    },
]

const unitsDigital: Section[] = [
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 10400, // thousand
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 19500,
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 19500,
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 19500,
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 0,
    },
]

const header: Header = {
    fiscalYear: " FY3/2023 ",
    secondHeader: "| Segment Information |",
    firstHeader: "| Capcom         |",
}

export const printSalesPerSoftwareUnit = CapcomPrint(sales, units, header, 2) + "\n" + CapcomPrintPhysical(salesPhysical, unitsPhysical, header, 2) + "\n" + CapcomPrintDigital(salesDigital, unitsDigital, header, 2);