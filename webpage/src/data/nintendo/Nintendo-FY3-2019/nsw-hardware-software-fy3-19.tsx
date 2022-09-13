import {
    Section,
    Header,
    printHead,
    printSections,
    printSalesHardware,
    quarterlyCalculation,
    yearOnYearCalculation
} from "../../../utils/hardware-software-units-logic";

const currentQuarter = 4;

const nintendoSwitchPlatformSales: Section[] = [
    {
        name: " Switch Platform ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 129587,
    },
    {
        name: " Switch Platform ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 305696,
    },
    {
        name: " Switch Platform ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 849994,
    },
    {
        name: " Switch Platform ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 1027937,
    },
    {
        name: " Switch Platform ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 864360,
    },
]

const nintendoSwitchHardwareTotal: Section[] = [
    {
        name: " Hardware Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 188,
    },
    {
        name: " Hardware Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 507,
    },
    {
        name: " Hardware Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 1449,
    },
    {
        name: " Hardware Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 1695,
    },
    {
        name: " Hardware Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 1779,
    },
]

const nintendoSwitchHardwareTotalForecast: Section[] = [
    {
        name: " Hardware Total ",
        period: "Forecast ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 2000,
    },
    {
        name: " Hardware Total ",
        period: " FCST Revision 1 ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 1700,
    },
    // {
    //     name: " Hardware Total ",
    //     period: " FCST Revision 2 ",
    //     cmlPeriod: " 1st 3 Qtrs  ",
    //     units: "units",
    //     value: 1500,
    // },
    {
        name: " Hardware Total ",
        period: "Forecast ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 1800,
    },
]

export const nintendoSwitchHardwareTotalLastFY: Section[] = [
    {
        name: " Hardware Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 197,
    },
    {
        name: " Hardware Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 489,
    },
    {
        name: " Hardware Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 1213,
    },
    {
        name: " Hardware Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 1505,
    },
]

const nintendoSwitchSoftwareTotal: Section[] = [
    {
        name: " Software Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 1796,
    },
    {
        name: " Software Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 4213,
    },
    {
        name: " Software Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 9464,
    },
    {
        name: " Software Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 11855,
    },
    {
        name: " Software Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 6897,
    },
]

const nintendoSwitchSoftwareTotalForecast: Section[] = [
    {
        name: " Software Total ",
        period: "Forecast ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 10000,
    },
    {
        name: " Software Total ",
        period: " FCST Revision 1 ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 11000,
    },
    // {
    //     name: " Software Total ",
    //     period:" FCST Revision 2 ",
    //     cmlPeriod: " 1st 3 Qtrs  ",
    //     units: "units",
    //     value: 5300,
    // },
    {
        name: " Software Total ",
        period: "Forecast ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 12500,
    }
]

export const nintendoSwitchSoftwareTotalLastFY: Section[] = [
    {
        name: " Software Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 814,
    },
    {
        name: " Software Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 2202,
    },
    {
        name: " Software Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 4710,
    },
    {
        name: " Software Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 6351,
    },
]

const nintendoMobile: Section[] = [
    {
        name: " Mobile ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 9097,
    },
    {
        name: " Mobile ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 18766,
    },
    {
        name: " Mobile ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 33384,
    },
    {
        name: " Mobile ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 46008,
    },
    {
        name: " Mobile ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 0, // no value needed for mobile since no LTD
    },
]

export const nintendoMobileLastFY: Section[] = [
    {
        name: " Mobile ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 9062,
    },
    {
        name: " Mobile ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 17925,
    },
    {
        name: " Mobile ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 29101,
    },
    {
        name: " Mobile ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 39320,
    },
]

const header: Header = {
    fiscalYear: " FY3/2019 ",
    nextFiscalYearShort: " FY3/20 ",
    switchHeader: "| Nintendo Switch   |",
    secondHeader: "| Sales Units and Forecast     |",
}

export const quarterlyCollection = [
    nintendoSwitchHardwareTotal,
    nintendoSwitchHardwareTotalLastFY,
    nintendoSwitchSoftwareTotal,
    nintendoSwitchSoftwareTotalLastFY,
    nintendoMobile,
    nintendoMobileLastFY,
] as const;

const filteredCollection = [
    nintendoSwitchHardwareTotal,
    nintendoSwitchSoftwareTotal,
    nintendoMobile,
] as const;

export const [quarterHardwareTotal, quarterHardwareTotalLastFY, quarterSoftwareTotal, quarterSoftwareTotalLastFY, quarterNintendoMobile, quarterNintendoMobileLastFY] = quarterlyCollection.map((elem, index) => {

    return (index % 2 === 0)
            ? quarterlyCalculation(elem).filter((elem, index, array) => index !== array.length-1) // filter out last fy cumulative
            : quarterlyCalculation(elem) // last FY numbers...
})

export const [nintendoSwitchHardwareTotalFiltered, nintendoSwitchSoftwareTotalFiltered, nintendoMobileFiltered] = filteredCollection.map((elem) => {
    return elem.filter((secondElem, index, array) => {
        return index !== array.length-1 
    })
})

const yearOnYearCollection = [
    quarterHardwareTotal,
    quarterHardwareTotalLastFY,
    quarterSoftwareTotal,
    quarterSoftwareTotalLastFY,
    quarterNintendoMobile,
    quarterNintendoMobileLastFY,
    nintendoSwitchHardwareTotalFiltered,
    nintendoSwitchHardwareTotalLastFY,
    nintendoSwitchSoftwareTotalFiltered,
    nintendoSwitchSoftwareTotalLastFY,
    nintendoMobileFiltered,
    nintendoMobileLastFY,
] as const;

const [quarterlySwitchHardwareTotalYoy, quarterlySwitchSoftwareTotalYoy, quarterlyMobileYoy,cumulativeSwitchHardwareTotalYoy, cumulativeSwitchSoftwareTotalYoy, cumulativeMobileYoy] = yearOnYearCollection.map((elem, index, array) => {
    return (index % 2 === 0)
            ? yearOnYearCalculation(array[index], array[index+1])
            : [];
}).filter((elem) => elem.length !== 0) // filter out zero length arrays


const [nintendoSwitchHardwareTotalCml, nintendoSwitchSoftwareTotalCml, nintendoMobileCml] = [
    nintendoSwitchHardwareTotal,
    nintendoSwitchSoftwareTotal, 
    nintendoMobile,
].map((elem) => {
    return elem.filter((secondElem, index, array) => {
        return index !== 0 // filter out first quarters
    })
})

const printOne = printHead(header)

const printOnePointFive = printSalesHardware(header, nintendoSwitchPlatformSales, nintendoSwitchHardwareTotal, currentQuarter)

const printTwo = printSections(header, quarterHardwareTotal, quarterlySwitchHardwareTotalYoy, nintendoSwitchHardwareTotalCml, cumulativeSwitchHardwareTotalYoy, nintendoSwitchHardwareTotalForecast, currentQuarter)

const printThree = printSections(header, quarterSoftwareTotal, quarterlySwitchSoftwareTotalYoy, nintendoSwitchSoftwareTotalCml, cumulativeSwitchSoftwareTotalYoy, nintendoSwitchSoftwareTotalForecast, currentQuarter)

const printFour = printSections(header, quarterNintendoMobile, quarterlyMobileYoy, nintendoMobileCml, cumulativeMobileYoy, nintendoSwitchHardwareTotalForecast, currentQuarter)

export const printHardwareSoftware = 
`${printOne}
${printOnePointFive}
${printTwo}
${printThree}
${printFour}`;