import { Header, Section } from "../utils/segment_data_logic";

const testDataSales: Section[] = [
    {
        name: " Home video game ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 26.2 // billion yen
    },
    {
        name: " Home video game ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 55.7 // billion yen
    },
    {
        name: " Home video game ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 98.8 // billion yen
    },
    {
        name: " Home video game ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 174.4 // billion yen
    },
]

const testDataUnits: Section[] = [
    {
        name: " Home video game ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 10066 // thousand
    },
    {
        name: " Home video game ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 19600,
    },
    {
        name: " Home video game ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 36220,
    },
    {
        name: " Home video game ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 56847,
    },
]