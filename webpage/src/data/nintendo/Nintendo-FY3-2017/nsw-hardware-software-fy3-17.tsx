import { isArrayLiteralExpression } from "typescript";
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

const filteredCollection = [
    nintendoSwitchHardwareTotal,
    nintendoSwitchSoftwareTotal,
] as const;

const [quarterHardwareTotal, quarterHardwareTotalLastFY, quarterSoftwareTotal, quarterSoftwareTotalLastFY] = quarterlyCollection.map((elem, index) => {

    return (index % 2 === 0)
            ? quarterlyCalculation(elem).filter((elem, index, array) => index !== array.length-1) // filter out last fy cumulative
            : quarterlyCalculation(elem)
    // return quarterlyCalculation(elem).filter((elem, index, array) => index !== array.length-1) // filters out last fy cumulative
})

const [nintendoSwitchHardwareTotalFiltered, nintendoSwitchSoftwareTotalFiltered] = filteredCollection.map((elem) => {
    return elem.filter((secondElem, index, array) => {
        return index !== array.length-1 
    })
})

const yearOnYearCollection = [
    quarterHardwareTotal,
    quarterHardwareTotalLastFY,
    quarterSoftwareTotal,
    quarterSoftwareTotalLastFY,
    nintendoSwitchHardwareTotalFiltered,
    nintendoSwitchHardwareTotalLastFY,
    nintendoSwitchSoftwareTotalFiltered,
    nintendoSwitchSoftwareTotalLastFY,
] as const;

const [quarterlySwitchHardwareTotalYoy, quarterlySwitchSoftwareTotalYoy, cumulativeSwitchHardwareTotalYoy, cumulativeSwitchSoftwareTotalYoy] = yearOnYearCollection.map((elem, index, array) => {
    return (index % 2 === 0)
            ? yearOnYearCalculation(array[index], array[index+1])
            : [];
}).filter((elem) => elem.length !== 0) // filter out zero length arrays


// const nintendoSwitchHardwareTotalCml = nintendoSwitchHardwareTotal.filter((elem, index, array) => index !== 0)

// const nintendoSwitchSoftwareTotalCml = nintendoSwitchSoftwareTotal.filter((elem, index, array) => index !== 0)

const [nintendoSwitchHardwareTotalCml, nintendoSwitchSoftwareTotalCml] = [
    nintendoSwitchHardwareTotal,
    nintendoSwitchSoftwareTotal,
].map((elem) => {
    return elem.filter((secondElem, index, array) => {
        return index !== 0 // filter out first quarters
    })
})

// export const cmlCollection = [
//    nintendoSwitchHardwareTotalCml,
//    nintendoSwitchSoftwareTotalCml, 
// ] as const;

const printOne = printHead(header)

const printTwo = printSections(header, quarterHardwareTotal, quarterlySwitchHardwareTotalYoy, nintendoSwitchHardwareTotalCml, cumulativeSwitchHardwareTotalYoy, nintendoSwitchHardwareTotalForecast, currentQuarter)

const printThree = printSections(header, quarterSoftwareTotal, quarterlySwitchSoftwareTotalYoy, nintendoSwitchSoftwareTotalCml, cumulativeSwitchSoftwareTotalYoy, nintendoSwitchSoftwareTotalForecast, currentQuarter)

export const printHarwareSoftware = 
`${printOne}
${printTwo}
${printThree}`;
