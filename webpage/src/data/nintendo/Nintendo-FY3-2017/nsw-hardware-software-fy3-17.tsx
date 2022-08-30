import {
    Section,
    Header,
    printHead,
    printSections,
    quarterlyCalculation,
    yearOnYearCalculation
} from "../../../utils/hardware-software-units-logic";

const currentQuarter = 4;

const nintendoSwitchHardwareTotal: Section[] = [
    {
        name: " Hardware Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 0,
    },
    {
        name: " Hardware Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 0,
    },
    {
        name: " Hardware Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 0,
    },
    {
        name: " Hardware Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 274,
    },
    {
        name: " Hardware Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 0,
    },
]

const nintendoSwitchHardwareTotalForecast: Section[] = [
    {
        name: " Hardware Total ",
        period: "Forecast ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 1000,
    }
]

const nintendoSwitchHardwareTotalLastFY: Section[] = [
    {
        name: " Hardware Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 0,
    },
    {
        name: " Hardware Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 0,
    },
    {
        name: " Hardware Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 0,
    },
    {
        name: " Hardware Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 0,
    },
]

const nintendoSwitchSoftwareTotal: Section[] = [
    {
        name: " Software Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 0,
    },
    {
        name: " Software Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 0,
    },
    {
        name: " Software Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 0,
    },
    {
        name: " Software Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 546,
    },
    {
        name: " Software Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 0,
    },
]

const nintendoSwitchSoftwareTotalForecast: Section[] = [
    {
        name: " Software Total ",
        period: "Forecast ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 3500,
    }
]

const nintendoSwitchSoftwareTotalLastFY: Section[] = [
    {
        name: " Software Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 0,
    },
    {
        name: " Software Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 0,
    },
    {
        name: " Software Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 0,
    },
    {
        name: " Software Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 0,
    },
]

const header: Header = {
    fiscalYear: " FY3/2017 ",
    nextFiscalYearShort: " FY3/18 ",
    switchHeader: "| Nintendo Switch   |",
    secondHeader: "| Sales Units and Forecast     |",
}

export const quarterlyCollection = [
    nintendoSwitchHardwareTotal,
    nintendoSwitchHardwareTotalLastFY,
    nintendoSwitchSoftwareTotal,
    nintendoSwitchSoftwareTotalLastFY,
] as const;

const [quarterHardwareTotal, quarterHardwareTotalYoY, quarterSoftwareTotal, quarterSoftwareTotalYoY] = quarterlyCollection.map(elem => {
    quarterlyCalculation(elem).filter((elem, index, array) => index !== array.length-1) // filters out last fy cumulative
})


// last FY quarterly calculations here if...
// quarterly year on year calculations here if...

// filter out original again at last index for cmlYoY calculation if...
// yoy cml calculation if...

const nintendoSwitchHardwareTotalCml = nintendoSwitchHardwareTotal.filter((elem, index, array) => index !== 0)

const nintendoSwitchSoftwareTotalCml = nintendoSwitchSoftwareTotal.filter((elem, index, array) => index !== 0)

export const cmlCollection = [
   nintendoSwitchHardwareTotalCml,
   nintendoSwitchSoftwareTotalCml, 
] as const;

const printOne = printHead(header)

// const printTwo = printSections(header, quarterHardwareTotal, )
