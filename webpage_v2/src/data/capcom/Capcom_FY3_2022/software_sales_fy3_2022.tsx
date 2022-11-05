import { Header, Section, CapcomPrint, CapcomPrintPhysical, CapcomPrintDigital } from "../../../utils/segment_data_logic";

const sales: Section[] = [
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 43.0 // billion yen
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 57.8 // billion yen
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 67.4 // billion yen
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 83.3 // billion yen
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 68.8 // billion yen
    },
]

const units: Section[] = [
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 13300 // thousand
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 19800,
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 25800,
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 32600,
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 30100,
    },
]

const salesPhysical: Section[] = [
    {
        name: " Package ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 18.4 // billion yen
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 23.3 // billion yen
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 25.6 // billion yen
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 30.0 // billion yen
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 20.8 // billion yen
    },
]

const unitsPhysical: Section[] = [
    {
        name: " Package ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 4200, // thousand
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 5900,
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 7100,
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 8000,
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 6950,
    },
]

const salesDigital: Section[] = [
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 24.6 // billion yen
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 34.5 // billion yen
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 41.8 // billion yen
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 53.3 // billion yen
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 48.0 // billion yen
    },
]

const unitsDigital: Section[] = [
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 9100, // thousand
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 13900,
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 18700,
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 24600,
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 23150,
    },
]

const header: Header = {
    fiscalYear: " FY3/2022 ",
    secondHeader: "| Segment Information |",
    firstHeader: "| Capcom         |",
}

export const printSalesPerSoftwareUnit = CapcomPrint(sales, units, header, 4) + "\n" + CapcomPrintPhysical(salesPhysical, unitsPhysical, header, 4) + "\n" + CapcomPrintDigital(salesDigital, unitsDigital, header, 4);