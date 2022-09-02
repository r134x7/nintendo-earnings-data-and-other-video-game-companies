export type Section = {
    units: "units" | "percentage" | "currency" | "NaN" ,
    period: " 1st Quarter " | " 2nd Quarter " | " 3rd Quarter " | " 4th Quarter " | " Last FY Cumulative "
    cmlPeriod: " 1st Quarter " | " First Half  " | " 1st 3 Qtrs  " | "Cml. ",
    name: string,
    region: "Japan" | "The Americas" | "Europe" | "Other" | "Global"
    value: number,
}

export type Header = {
    switchHeader: "| Nintendo Switch Regional Data |",
    fiscalYear: string,
    fiscalYearCml: string,
}

const nintendoSwitchOGWW: Section[] = [
    {
        name: " Switch ",
        region: "Global",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 1000,
    },
    {
        name: " Switch ",
        region: "Global",
        period: " 2nd Quarter ", 
        cmlPeriod: " First Half  ",
        units: "units",
        value: 2000,
    },
    {
        name: " Switch ",
        region: "Global",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 3000,
    },
    {
        name: " Switch ",
        region: "Global",
        period: " 4th Quarter ", 
        cmlPeriod: "Cml. ",
        units: "units",
        value: 4000,
    },
    {
        name: " Switch ",
        region: "Global",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 500,
    },
]

const nintendoSwitchOGJapan: Section[] = [
    {
        name: " Switch ",
        region: "Japan", 
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 100,
    },
    {
        name: " Switch ",
        region: "Japan", 
        period: " 2nd Quarter ", 
        cmlPeriod: " First Half  ",
        units: "units",
        value: 200,
    },
    {
        name: " Switch ",
        region: "Japan", 
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 300,
    },
    {
        name: " Switch ",
        region: "Japan", 
        period: " 4th Quarter ", 
        cmlPeriod: "Cml. ",
        units: "units",
        value: 400,
    },
    {
        name: " Switch ",
        region: "Japan", 
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 100,
    },
]

const nintendoSwitchOGJapan: Section[] = [
    {
        name: " Switch ",
        region: "Japan", 
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 100,
    },
    {
        name: " Switch ",
        region: "Japan", 
        period: " 2nd Quarter ", 
        cmlPeriod: " First Half  ",
        units: "units",
        value: 200,
    },
    {
        name: " Switch ",
        region: "Japan", 
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 300,
    },
    {
        name: " Switch ",
        region: "Japan", 
        period: " 4th Quarter ", 
        cmlPeriod: "Cml. ",
        units: "units",
        value: 400,
    },
    {
        name: " Switch ",
        region: "Japan", 
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 100,
    },
]