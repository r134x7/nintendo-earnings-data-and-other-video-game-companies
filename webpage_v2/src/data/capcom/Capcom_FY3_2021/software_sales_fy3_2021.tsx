import { Header, Section, CapcomPrint } from "../../../utils/segment_data_logic";

const sales: Section[] = [
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 20.3 // billion yen
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 32.1 // billion yen
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 44.2 // billion yen
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 68.8 // billion yen
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 55.5 // billion yen
    },
]

const units: Section[] = [
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 9200, // thousand
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 13800,
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 19800,
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 30100,
    },
    {
        name: " Digital Contents ",
        region: " Group Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 25500,
    },
]


const salesPhysical: Section[] = [
    {
        name: " Package ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 0.6 // billion yen
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 0.73 // billion yen
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 0.99 // billion yen
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 2.08 // billion yen
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 1.29 // billion yen
    },
]

const unitsPhysical: Section[] = [
    {
        name: " Package ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 1850, // thousand
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 2400,
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 3600,
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 6950,
    },
    {
        name: " Package ",
        region: " Group Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 4950,
    },
]

const salesDigital: Section[] = [
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 1.43 // billion yen
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 2.48 // billion yen
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 3.43 // billion yen
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 4.8 // billion yen
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 4.26 // billion yen
    },
]

const unitsDigital: Section[] = [
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 7350, // thousand
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 11400,
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 16200,
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 23150,
    },
    {
        name: " Digital ",
        region: " Group Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 20550,
    },
]

const header: Header = {
    fiscalYear: " FY3/2021 ",
    secondHeader: "| Segment Information |",
    firstHeader: "| Capcom         |",
}

export const printSalesPerSoftwareUnit = CapcomPrint(sales, units, header, 4);