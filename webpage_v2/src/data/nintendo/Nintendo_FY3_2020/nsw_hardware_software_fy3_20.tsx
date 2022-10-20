import {
    Section,
    Header,
    printHead,
    printSections,
    printSalesHardware,
    quarterlyCalculation,
    yearOnYearCalculation
} from "../../../utils/hardware_software_units_logic";

const currentQuarter = 4;

const nintendoSwitchPlatformSales: Section[] = [
    {
        name: " Switch Platform ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 152643,
    },
    {
        name: " Switch Platform ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 405588,
    },
    {
        name: " Switch Platform ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 957414,
    },
    {
        name: " Switch Platform ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 1219327,
    },
    {
        name: " Switch Platform ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 1892297,
    },
]

const nintendoSwitchOG: Section[] = [
    {
        name: " Switch ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 213,
    },
    {
        name: " Switch ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 498,
    },
    {
        name: " Switch ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 1256,
    },
    {
        name: " Switch ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 1483,
    },
    {
        name: " Switch ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 3474,
    },
]

export const nintendoSwitchOGLastFY: Section[] = [
    {
        name: " Switch ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 188,
    },
    {
        name: " Switch ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 507,
    },
    {
        name: " Switch ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 1449,
    },
    {
        name: " Switch ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 1695,
    },
]

const nintendoSwitchLite: Section[] = [
    {
        name: " Switch Lite ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 0,
    },
    {
        name: " Switch Lite ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 195,
    },
    {
        name: " Switch Lite ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 519,
    },
    {
        name: " Switch Lite ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 619,
    },
    {
        name: " Switch Lite ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 0,
    },
]

export const nintendoSwitchLiteLastFY: Section[] = [
    {
        name: " Switch Lite ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 0,
    },
    {
        name: " Switch Lite ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 0,
    },
    {
        name: " Switch Lite ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 0,
    },
    {
        name: " Switch Lite ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 0,
    },
]

const nintendoSwitchHardwareTotal: Section[] = [
    {
        name: " Hardware Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 213,
    },
    {
        name: " Hardware Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 693,
    },
    {
        name: " Hardware Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 1774,
    },
    {
        name: " Hardware Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 2103,
    },
    {
        name: " Hardware Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 3474,
    },
]

const nintendoSwitchHardwareTotalForecast: Section[] = [
    {
        name: " Hardware Total ",
        period: "Forecast ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 1800,
    },
    {
        name: " Hardware Total ",
        period: " FCST Revision 1 ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 1950,
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
        value: 1900,
    },
]

export const nintendoSwitchHardwareTotalLastFY: Section[] = [
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
]

const nintendoSwitchSoftwareTotal: Section[] = [
    {
        name: " Software Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 2262,
    },
    {
        name: " Software Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 5849,
    },
    {
        name: " Software Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 12313,
    },
    {
        name: " Software Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 16872,
    },
    {
        name: " Software Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 18752,
    },
]

const nintendoSwitchSoftwareTotalForecast: Section[] = [
    {
        name: " Software Total ",
        period: "Forecast ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 12500,
    },
    {
        name: " Software Total ",
        period: " FCST Revision 1 ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 14000,
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
        value: 14000,
    }
]

export const nintendoSwitchSoftwareTotalLastFY: Section[] = [
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
]

const nintendoMobile: Section[] = [
    {
        name: " Mobile ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 10005,
    },
    {
        name: " Mobile ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 19964,
    },
    {
        name: " Mobile ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 36910,
    },
    {
        name: " Mobile ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 51295,
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
]

const header: Header = {
    fiscalYear: " FY3/2020 ",
    nextFiscalYearShort: " FY3/21 ",
    switchHeader: "| Nintendo Switch   |",
    secondHeader: "| Sales Units and Forecast     |",
}

export const quarterlyCollection = [
    nintendoSwitchOG,
    nintendoSwitchOGLastFY,
    nintendoSwitchLite,
    nintendoSwitchLiteLastFY,
    nintendoSwitchHardwareTotal,
    nintendoSwitchHardwareTotalLastFY,
    nintendoSwitchSoftwareTotal,
    nintendoSwitchSoftwareTotalLastFY,
    nintendoMobile,
    nintendoMobileLastFY,
] as const;

const filteredCollection = [
    nintendoSwitchOG,
    nintendoSwitchLite,
    nintendoSwitchHardwareTotal,
    nintendoSwitchSoftwareTotal,
    nintendoMobile,
] as const;

export const [quarterSwitchOG, quarterSwitchOGLastFY, quarterSwitchLite, quarterSwitchLiteLastFY, quarterHardwareTotal, quarterHardwareTotalLastFY, quarterSoftwareTotal, quarterSoftwareTotalLastFY, quarterNintendoMobile, quarterNintendoMobileLastFY] = quarterlyCollection.map((elem, index) => {

    return (index % 2 === 0)
            ? quarterlyCalculation(elem).filter((elem, index, array) => index !== array.length-1) // filter out last fy cumulative
            : quarterlyCalculation(elem) // last FY numbers...
})

export const [ nintendoSwitchOGFiltered, nintendoSwitchLiteFiltered, nintendoSwitchHardwareTotalFiltered, nintendoSwitchSoftwareTotalFiltered, nintendoMobileFiltered] = filteredCollection.map((elem) => {
    return elem.filter((secondElem, index, array) => {
        return index !== array.length-1 
    })
})

const yearOnYearCollection = [
    quarterSwitchOG,
    quarterSwitchOGLastFY,
    quarterSwitchLite,
    quarterSwitchLiteLastFY,
    quarterHardwareTotal,
    quarterHardwareTotalLastFY,
    quarterSoftwareTotal,
    quarterSoftwareTotalLastFY,
    quarterNintendoMobile,
    quarterNintendoMobileLastFY,
    nintendoSwitchOGFiltered,
    nintendoSwitchOGLastFY,
    nintendoSwitchLiteFiltered,
    nintendoSwitchLiteLastFY,
    nintendoSwitchHardwareTotalFiltered,
    nintendoSwitchHardwareTotalLastFY,
    nintendoSwitchSoftwareTotalFiltered,
    nintendoSwitchSoftwareTotalLastFY,
    nintendoMobileFiltered,
    nintendoMobileLastFY,
] as const;

const [quarterlySwitchOGYoy, quarterlySwitchLiteYoy, quarterlySwitchHardwareTotalYoy, quarterlySwitchSoftwareTotalYoy, quarterlyMobileYoy, cumulativeSwitchOGYoy, cumulativeSwitchLiteYoy, cumulativeSwitchHardwareTotalYoy, cumulativeSwitchSoftwareTotalYoy, cumulativeMobileYoy] = yearOnYearCollection.map((elem, index, array) => {
    return (index % 2 === 0)
            ? yearOnYearCalculation(array[index], array[index+1])
            : [];
}).filter((elem) => elem.length !== 0) // filter out zero length arrays


const [ nintendoSwitchOGCml, nintendoSwitchLiteCml, nintendoSwitchHardwareTotalCml, nintendoSwitchSoftwareTotalCml, nintendoMobileCml] = [
    nintendoSwitchOG,
    nintendoSwitchLite,
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

const printTwo = printSections(header, quarterSwitchOG, quarterlySwitchOGYoy, nintendoSwitchOGCml, cumulativeSwitchOGYoy, nintendoSwitchHardwareTotalForecast, currentQuarter)

const printThree = printSections(header, quarterSwitchLite, quarterlySwitchLiteYoy, nintendoSwitchLiteCml, cumulativeSwitchLiteYoy, nintendoSwitchHardwareTotalForecast, currentQuarter)

const printFour = printSections(header, quarterHardwareTotal, quarterlySwitchHardwareTotalYoy, nintendoSwitchHardwareTotalCml, cumulativeSwitchHardwareTotalYoy, nintendoSwitchHardwareTotalForecast, currentQuarter)

const printFive = printSections(header, quarterSoftwareTotal, quarterlySwitchSoftwareTotalYoy, nintendoSwitchSoftwareTotalCml, cumulativeSwitchSoftwareTotalYoy, nintendoSwitchSoftwareTotalForecast, currentQuarter)

const printSix = printSections(header, quarterNintendoMobile, quarterlyMobileYoy, nintendoMobileCml, cumulativeMobileYoy, nintendoSwitchHardwareTotalForecast, currentQuarter)

export const printHardwareSoftware = 
`${printOne}
${printOnePointFive}
${printTwo}
${printThree}
${printFour}
${printFive}
${printSix}`;