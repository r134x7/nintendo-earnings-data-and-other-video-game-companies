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
        value: 300054,
    },
    {
        name: " Switch Platform ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 581808,
    },
    {
        name: " Switch Platform ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 1250479,
    },
    {
        name: " Switch Platform ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 1602725,
    },
    {
        name: " Switch Platform ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 4778029,
    },
]

const nintendoSwitchOG: Section[] = [
    {
        name: " Switch ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 331,
    },
    {
        name: " Switch ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 645,
    },
    {
        name: " Switch ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 1179,
    },
    {
        name: " Switch ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 1356,
    },
    {
        name: " Switch ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 6989,
    },
]

const nintendoSwitchOGLastFY: Section[] = [
    {
        name: " Switch ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 305,
    },
    {
        name: " Switch ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 836,
    },
    {
        name: " Switch ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 1677,
    },
    {
        name: " Switch ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 2032,
    },
]

const nintendoSwitchLite: Section[] = [
    {
        name: " Switch Lite ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 114,
    },
    {
        name: " Switch Lite ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 182,
    },
    {
        name: " Switch Lite ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 317,
    },
    {
        name: " Switch Lite ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 370,
    },
    {
        name: " Switch Lite ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 1470,
    },
]

const nintendoSwitchLiteLastFY: Section[] = [
    {
        name: " Switch Lite ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 262,
    },
    {
        name: " Switch Lite ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 417,
    },
    {
        name: " Switch Lite ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 733,
    },
    {
        name: " Switch Lite ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 851,
    },
]

const nintendoSwitchOLED: Section[] = [
    {
        name: " Switch OLED ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 0,
    },
    {
        name: " Switch OLED ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 0,
    },
    {
        name: " Switch OLED ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 399,
    },
    {
        name: " Switch OLED ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 580,
    },
    {
        name: " Switch OLED ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 0,
    },
]

const nintendoSwitchOLEDLastFY: Section[] = [
    {
        name: " Switch OLED ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 0,
    },
    {
        name: " Switch OLED ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 0,
    },
    {
        name: " Switch OLED ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 0,
    },
    {
        name: " Switch OLED ",
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
        value: 445,
    },
    {
        name: " Hardware Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 828,
    },
    {
        name: " Hardware Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 1895,
    },
    {
        name: " Hardware Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 2306,
    },
    {
        name: " Hardware Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 8459,
    },
]

const nintendoSwitchHardwareTotalForecast: Section[] = [
    {
        name: " Hardware Total ",
        period: "Forecast ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 2550,
    },
    {
        name: " Hardware Total ",
        period: " FCST Revision 1 ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 2400,
    },
    {
        name: " Hardware Total ",
        period: " FCST Revision 2 ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 2300,
    },
    {
        name: " Hardware Total ",
        period: "Forecast ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 2100,
    },
]

const nintendoSwitchHardwareTotalLastFY: Section[] = [
    {
        name: " Hardware Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 568,
    },
    {
        name: " Hardware Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 1253,
    },
    {
        name: " Hardware Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 2410,
    },
    {
        name: " Hardware Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 2883,
    },
]

const nintendoSwitchSoftwareTotal: Section[] = [
    {
        name: " Software Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 4529,
    },
    {
        name: " Software Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 9389,
    },
    {
        name: " Software Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 17929,
    },
    {
        name: " Software Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 23507,
    },
    {
        name: " Software Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 58711,
    },
]

const nintendoSwitchSoftwareTotalForecast: Section[] = [
    {
        name: " Software Total ",
        period: "Forecast ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 19000,
    },
    {
        name: " Software Total ",
        period: " FCST Revision 1 ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 20000,
    },
    {
        name: " Software Total ",
        period:" FCST Revision 2 ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 22000,
    },
    {
        name: " Software Total ",
        period: "Forecast ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 21000,
    }
]

const nintendoSwitchSoftwareTotalLastFY: Section[] = [
    {
        name: " Software Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 5043,
    },
    {
        name: " Software Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 10025,
    },
    {
        name: " Software Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 17610,
    },
    {
        name: " Software Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 23088,
    },
]

const nintendoMobile: Section[] = [
    {
        name: " Mobile ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 13199,
    },
    {
        name: " Mobile ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 25501,
    },
    {
        name: " Mobile ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 39825,
    },
    {
        name: " Mobile ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 53342,
    },
    {
        name: " Mobile ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 0, // no value needed for mobile since no LTD
    },
]

const nintendoMobileLastFY: Section[] = [
    {
        name: " Mobile ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 13278,
    },
    {
        name: " Mobile ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 26727,
    },
    {
        name: " Mobile ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 42011,
    },
    {
        name: " Mobile ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 57080,
    },
]

const header: Header = {
    fiscalYear: " FY3/2022 ",
    nextFiscalYearShort: " FY3/23 ",
    switchHeader: "| Nintendo Switch   |",
    secondHeader: "| Sales Units and Forecast     |",
}

export const quarterlyCollection = [
    nintendoSwitchOG,
    nintendoSwitchOGLastFY,
    nintendoSwitchLite,
    nintendoSwitchLiteLastFY,
    nintendoSwitchOLED,
    nintendoSwitchOLEDLastFY,
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
    nintendoSwitchOLED,
    nintendoSwitchHardwareTotal,
    nintendoSwitchSoftwareTotal,
    nintendoMobile,
] as const;

const [
    quarterSwitchOG, 
    quarterSwitchOGLastFY, 
    quarterSwitchLite, 
    quarterSwitchLiteLastFY,
    quarterSwitchOLED,
    quarterSwitchOLEDLastFY, 
    quarterHardwareTotal, 
    quarterHardwareTotalLastFY, 
    quarterSoftwareTotal, 
    quarterSoftwareTotalLastFY, 
    quarterNintendoMobile, 
    quarterNintendoMobileLastFY
] = quarterlyCollection.map((elem, index) => {

    return (index % 2 === 0)
            ? quarterlyCalculation(elem).filter((elem, index, array) => index !== array.length-1) // filter out last fy cumulative
            : quarterlyCalculation(elem) // last FY numbers...
})

const [ 
    nintendoSwitchOGFiltered, 
    nintendoSwitchLiteFiltered,
    nintendoSwitchOLEDFiltered, 
    nintendoSwitchHardwareTotalFiltered, 
    nintendoSwitchSoftwareTotalFiltered, 
    nintendoMobileFiltered
] = filteredCollection.map((elem) => {
    return elem.filter((secondElem, index, array) => {
        return index !== array.length-1 
    })
})

const yearOnYearCollection = [
    quarterSwitchOG,
    quarterSwitchOGLastFY,
    quarterSwitchLite,
    quarterSwitchLiteLastFY,
    quarterSwitchOLED,
    quarterSwitchOLEDLastFY,
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
    nintendoSwitchOLEDFiltered,
    nintendoSwitchOLEDLastFY,
    nintendoSwitchHardwareTotalFiltered,
    nintendoSwitchHardwareTotalLastFY,
    nintendoSwitchSoftwareTotalFiltered,
    nintendoSwitchSoftwareTotalLastFY,
    nintendoMobileFiltered,
    nintendoMobileLastFY,
] as const;

const [
    quarterlySwitchOGYoy, 
    quarterlySwitchLiteYoy,
    quarterSwitchOLEDYoy, 
    quarterlySwitchHardwareTotalYoy, 
    quarterlySwitchSoftwareTotalYoy, 
    quarterlyMobileYoy, 
    cumulativeSwitchOGYoy, 
    cumulativeSwitchLiteYoy,
    cumulativeSwitchOLEDYoy, 
    cumulativeSwitchHardwareTotalYoy, 
    cumulativeSwitchSoftwareTotalYoy, 
    cumulativeMobileYoy
] = yearOnYearCollection.map((elem, index, array) => {
    return (index % 2 === 0)
            ? yearOnYearCalculation(array[index], array[index+1])
            : [];
}).filter((elem) => elem.length !== 0) // filter out zero length arrays


const [ 
    nintendoSwitchOGCml, 
    nintendoSwitchLiteCml,
    nintendoSwitchOLEDCml, 
    nintendoSwitchHardwareTotalCml, 
    nintendoSwitchSoftwareTotalCml, 
    nintendoMobileCml
] = [
    nintendoSwitchOG,
    nintendoSwitchLite,
    nintendoSwitchOLED,
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

const printFour = printSections(header, quarterSwitchOLED, quarterSwitchOLEDYoy, nintendoSwitchOLEDCml, cumulativeSwitchOLEDYoy, nintendoSwitchHardwareTotalForecast, currentQuarter)

const printFive = printSections(header, quarterHardwareTotal, quarterlySwitchHardwareTotalYoy, nintendoSwitchHardwareTotalCml, cumulativeSwitchHardwareTotalYoy, nintendoSwitchHardwareTotalForecast, currentQuarter)

const printSix = printSections(header, quarterSoftwareTotal, quarterlySwitchSoftwareTotalYoy, nintendoSwitchSoftwareTotalCml, cumulativeSwitchSoftwareTotalYoy, nintendoSwitchSoftwareTotalForecast, currentQuarter)

const printSeven = printSections(header, quarterNintendoMobile, quarterlyMobileYoy, nintendoMobileCml, cumulativeMobileYoy, nintendoSwitchHardwareTotalForecast, currentQuarter)

export const printHardwareSoftware = 
`${printOne}
${printOnePointFive}
${printTwo}
${printThree}
${printFour}
${printFive}
${printSix}
${printSeven}`;