import {
    Header,
    Section,
    printHead,
    printSection,
    quarterlyCalculation,
    yearOnYearCalculation,
} from "../../../utils/regional-hw-sw-logic";

const currentQuarter = 4;

const nintendoSwitchHardwareTotalRegions: Section[] = [
    {
        name: " Nintendo Switch Hardware Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        regionA: "Global", 
        valueA: 0,
        regionB: "Japan", 
        valueB: 0,
        regionC: "The Americas", 
        valueC: 0,
        regionD: "Other",
        valueD: 0,
        regionE: "Other",
        valueE: 0,
    },
    {
        name: " Nintendo Switch Hardware Total ",
        period: " 2nd Quarter ", 
        cmlPeriod: " First Half  ",
        units: "units",
        regionA: "Global", 
        valueA: 0,
        regionB: "Japan", 
        valueB: 0,
        regionC: "The Americas", 
        valueC: 0,
        regionD: "Other",
        valueD: 0,
        regionE: "Other",
        valueE: 0,
    },
    {
        name: " Nintendo Switch Hardware Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " First Three Quarters ",
        units: "units",
        regionA: "Global", 
        valueA: 0,
        regionB: "Japan", 
        valueB: 0,
        regionC: "The Americas", 
        valueC: 0,
        regionD: "Other",
        valueD: 0,
        regionE: "Other",
        valueE: 0,
    },
    {
        name: " Nintendo Switch Hardware Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        regionA: "Global", 
        valueA: 274,
        regionB: "Japan", 
        valueB: 60,
        regionC: "The Americas", 
        valueC: 120,
        regionD: "Other",
        valueD: 94,
        regionE: "Other",
        valueE: 0,
    },
    {
        name: " Nintendo Switch Hardware Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        regionA: "Global", 
        valueA: 0,
        regionB: "Japan", 
        valueB: 0,
        regionC: "The Americas", 
        valueC: 0,
        regionD: "Other",
        valueD: 0,
        regionE: "Other",
        valueE: 0,
    },
]

const nintendoSwitchHardwareTotalRegionsLastFY: Section[] = [
    {
        name: " Nintendo Switch Hardware Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        regionA: "Global", 
        valueA: 0,
        regionB: "Japan", 
        valueB: 0,
        regionC: "The Americas", 
        valueC: 0,
        regionD: "Other",
        valueD: 0,
        regionE: "Other",
        valueE: 0,
    },
    {
        name: " Nintendo Switch Hardware Total ",
        period: " 2nd Quarter ", 
        cmlPeriod: " First Half  ",
        units: "units",
        regionA: "Global", 
        valueA: 0,
        regionB: "Japan", 
        valueB: 0,
        regionC: "The Americas", 
        valueC: 0,
        regionD: "Other",
        valueD: 0,
        regionE: "Other",
        valueE: 0,
    },
    {
        name: " Nintendo Switch Hardware Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " First Three Quarters ",
        units: "units",
        regionA: "Global", 
        valueA: 0,
        regionB: "Japan", 
        valueB: 0,
        regionC: "The Americas", 
        valueC: 0,
        regionD: "Other",
        valueD: 0,
        regionE: "Other",
        valueE: 0,
    },
    {
        name: " Nintendo Switch Hardware Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        regionA: "Global", 
        valueA: 0,
        regionB: "Japan", 
        valueB: 0,
        regionC: "The Americas", 
        valueC: 0,
        regionD: "Other",
        valueD: 0,
        regionE: "Other",
        valueE: 0,
    },
]

const nintendoSwitchSoftwareTotalRegions: Section[] = [
    {
        name: " Nintendo Switch Software Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        regionA: "Global", 
        valueA: 0,
        regionB: "Japan", 
        valueB: 0,
        regionC: "The Americas", 
        valueC: 0,
        regionD: "Other",
        valueD: 0,
        regionE: "Other",
        valueE: 0,
    },
    {
        name: " Nintendo Switch Software Total ",
        period: " 2nd Quarter ", 
        cmlPeriod: " First Half  ",
        units: "units",
        regionA: "Global", 
        valueA: 0,
        regionB: "Japan", 
        valueB: 0,
        regionC: "The Americas", 
        valueC: 0,
        regionD: "Other",
        valueD: 0,
        regionE: "Other",
        valueE: 0,
    },
    {
        name: " Nintendo Switch Software Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " First Three Quarters ",
        units: "units",
        regionA: "Global", 
        valueA: 0,
        regionB: "Japan", 
        valueB: 0,
        regionC: "The Americas", 
        valueC: 0,
        regionD: "Other",
        valueD: 0,
        regionE: "Other",
        valueE: 0,
    },
    {
        name: " Nintendo Switch Software Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        regionA: "Global", 
        valueA: 546,
        regionB: "Japan", 
        valueB: 89,
        regionC: "The Americas", 
        valueC: 286,
        regionD: "Other",
        valueD: 171,
        regionE: "Other",
        valueE: 0,
    },
    {
        name: " Nintendo Switch Software Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        regionA: "Global", 
        valueA: 0,
        regionB: "Japan", 
        valueB: 0,
        regionC: "The Americas", 
        valueC: 0,
        regionD: "Other",
        valueD: 0,
        regionE: "Other",
        valueE: 0,
    },
]

const nintendoSwitchSoftwareTotalRegionsLastFY: Section[] = [
    {
        name: " Nintendo Switch Software Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        regionA: "Global", 
        valueA: 0,
        regionB: "Japan", 
        valueB: 0,
        regionC: "The Americas", 
        valueC: 0,
        regionD: "Other",
        valueD: 0,
        regionE: "Other",
        valueE: 0,
    },
    {
        name: " Nintendo Switch Software Total ",
        period: " 2nd Quarter ", 
        cmlPeriod: " First Half  ",
        units: "units",
        regionA: "Global", 
        valueA: 0,
        regionB: "Japan", 
        valueB: 0,
        regionC: "The Americas", 
        valueC: 0,
        regionD: "Other",
        valueD: 0,
        regionE: "Other",
        valueE: 0,
    },
    {
        name: " Nintendo Switch Software Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " First Three Quarters ",
        units: "units",
        regionA: "Global", 
        valueA: 0,
        regionB: "Japan", 
        valueB: 0,
        regionC: "The Americas", 
        valueC: 0,
        regionD: "Other", 
        valueD: 0,
        regionE: "Other",
        valueE: 0,
    },
    {
        name: " Nintendo Switch Software Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        regionA: "Global", 
        valueA: 0,
        regionB: "Japan", 
        valueB: 0,
        regionC: "The Americas", 
        valueC: 0,
        regionD: "Other",
        valueD: 0,
        regionE: "Other",
        valueE: 0,
    },
]

const header: Header = {
    switchHeader: "| Nintendo Switch Regional Data   |",
    fiscalYear: " FY3/2017 ",
    fiscalYearCml: " FY3/17 Cumulative ",
    globalPercentage: "| Global%|",
    units: "| Units  |",
    yearOnYear: "| YoY%   |",
    ltd: " Life-To-Date ",
}

const quarterlyCollection = [
    nintendoSwitchHardwareTotalRegions,
    nintendoSwitchHardwareTotalRegionsLastFY,
    nintendoSwitchSoftwareTotalRegions,
    nintendoSwitchSoftwareTotalRegionsLastFY,
] as const;

const filteredCollection = [
    nintendoSwitchHardwareTotalRegions,
    nintendoSwitchSoftwareTotalRegions,
] as const;

const [
    quarterSwitchHardwareTotalRegions,
    quarterSwitchHardwareTotalRegionsLastFY,
    quarterSwitchSoftwareTotalRegions,
    quarterSwitchSoftwareTotalRegionsLastFY,
] = quarterlyCollection.map((elem, index) => {

        return (index % 2 === 0)
                ? quarterlyCalculation(elem).filter((elem, index, array) => index !== array.length-1) // filter out last fy cumulative
                : quarterlyCalculation(elem) // last FY numbers...
})

const [
    nintendoSwitchHardwareTotalRegionsFiltered,
    nintendoSwitchSoftwareTotalRegionsFiltered,
] = filteredCollection.map((elem) => {
        return elem.filter((secondElem, index, array) => {
            return index !== array.length-1
        })
    })


const yearOnYearCollection = [
        quarterSwitchHardwareTotalRegions,
        quarterSwitchHardwareTotalRegionsLastFY,
        quarterSwitchSoftwareTotalRegions,
        quarterSwitchSoftwareTotalRegionsLastFY,
        nintendoSwitchHardwareTotalRegionsFiltered,
        nintendoSwitchHardwareTotalRegionsLastFY,
        nintendoSwitchSoftwareTotalRegionsFiltered,
        nintendoSwitchSoftwareTotalRegionsLastFY,
] as const;

const [
        quarterSwitchHardwareTotalRegionsYoy,
        quarterSwitchSoftwareTotalRegionsYoy,
        cumulativeSwitchHardwareTotalRegionsYoy,
        cumulativeSwitchSoftwareTotalRegionsYoy,
] = yearOnYearCollection.map((elem, index, array) => {
    return (index % 2 === 0)
            ? yearOnYearCalculation(array[index], array[index+1])
            : [];
    }).filter((elem) => elem.length !== 0) // filter out zero length arrays... 
    
const [
        nintendoSwitchHardwareTotalRegionsCml,
        nintendoSwitchSoftwareTotalRegionsCml,
] = [
        nintendoSwitchHardwareTotalRegions,
        nintendoSwitchSoftwareTotalRegions,
    ].map((elem) => {
        return elem.filter((secondElem, index, array) => {
            return index !== 0 // filter out first quarters
        })
    })

const printOne = printHead(header)

const printHardware = printSection(header, quarterSwitchHardwareTotalRegions, quarterSwitchHardwareTotalRegionsYoy, nintendoSwitchHardwareTotalRegionsCml, cumulativeSwitchHardwareTotalRegionsYoy, currentQuarter)

const printSoftware = printSection(header, quarterSwitchSoftwareTotalRegions, quarterSwitchSoftwareTotalRegionsYoy, nintendoSwitchSoftwareTotalRegionsCml, cumulativeSwitchSoftwareTotalRegionsYoy, currentQuarter)

export const printRegions = 
`${printOne}
${printHardware}
${printSoftware}`;