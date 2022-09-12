import {
    Header,
    Footer,
    printHead,
    printBody,
    KPDIndicators,
} from "../../../utils/kpi-logic"

const currentQuarter = 1;

export const proportionOfOverseasSalesQtr: KPDIndicators[] = [
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 1st Quarter       ",
        value: 79.9,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 2nd Quarter       ",
        value: 0,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 3rd Quarter       ",
        value: 0,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 4th Quarter       ",
        value: 0,
    },
]

const proportionOfOverseasSalesCml: KPDIndicators[] = [
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Half          ",
        value: 0,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Three Quarters",
        value: 0,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " FY3/22 Cumulative ",
        value: 0,
    },
]

export const proportionOfHardwareSalesQtr: KPDIndicators[] = [
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 1st Quarter       ",
        value: 43.8,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 2nd Quarter       ",
        value: 0,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 3rd Quarter       ",
        value: 0,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 4th Quarter       ",
        value: 0,
    },
]

const proportionOfHardwareSalesCml: KPDIndicators[] = [
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Half          ",
        value: 0,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Three Quarters",
        value: 0,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " FY3/22 Cumulative ",
        value: 0,
    },
]

export const proportionOfFirstPartySoftwareSalesQtr: KPDIndicators[] = [
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 1st Quarter       ",
        value: 76.3,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 2nd Quarter       ",
        value: 0,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 3rd Quarter       ",
        value: 0,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 4th Quarter       ",
        value: 0,
    },
]

const proportionOfFirstPartySoftwareSalesCml: KPDIndicators[] = [
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Half          ",
        value: 0,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Three Quarters",
        value: 0,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " FY3/22 Cumulative ",
        value: 0,
    },
]

export const digitalSalesQtr: KPDIndicators[] = [
    {
        category: "quarterly",
        units: "currency",
        quarter: " 1st Quarter       ",
        value: 88.0,
    },
    {
        category: "quarterly",
        units: "currency",
        quarter: " 2nd Quarter       ",
        value: 0,
    },
    {
        category: "quarterly",
        units: "currency",
        quarter: " 3rd Quarter       ",
        value: 0,
    },
    {
        category: "quarterly",
        units: "currency",
        quarter: " 4th Quarter       ",
        value: 0,
    },
]

const digitalSalesCml: KPDIndicators[] = [
    {
        category: "cumulative",
        units: "currency",
        quarter: " 1st Half          ",
        value: 0,
    },
    {
        category: "cumulative",
        units: "currency",
        quarter: " 1st Three Quarters",
        value: 0,
    },
    {
        category: "cumulative",
        units: "currency",
        quarter: " FY3/22 Cumulative ",
        value: 0,
    },
]

export const proportionOfDigitalSalesQtr: KPDIndicators[] = [
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 1st Quarter       ",
        value: 53.0,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 2nd Quarter       ",
        value: 0,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 3rd Quarter       ",
        value: 0,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 4th Quarter       ",
        value: 0,
    },
]

const proportionOfDigitalSalesCml: KPDIndicators[] = [
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Half          ",
        value: 0,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Three Quarters",
        value: 0,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " FY3/22 Cumulative ",
        value: 0,
    },
]

export const proportionOfDLverPackagedSoftwareQtr: KPDIndicators[] = [
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 1st Quarter       ",
        value: 52.1,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 2nd Quarter       ",
        value: 0,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 3rd Quarter       ",
        value: 0,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 4th Quarter       ",
        value: 0,
    },
]

const proportionOfDLverPackagedSoftwareCml: KPDIndicators[] = [
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Half          ",
        value: 0,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Three Quarters",
        value: 0,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " FY3/22 Cumulative ",
        value: 0,
    },
]

const header: Header = {
    companyName: " Nintendo Co., Ltd.",
    section: "| Proportion of overseas sales |",
    fiscalYear: "| FY3/2023 |",
    title: "| Key/Digital Sales Indicators |",
}

const [headerTwo, headerThree, headerFour, headerFive, headerSix]: Header[] = [
    {
        ...header,
        section: "| Proportion of hardware sales |"
    },
    {
        ...header,
        section: "| Proportion of first party    |\n| software sales               |"
    },
    {
        ...header,
        section: "| Digital Sales                |"
    },
    {
        ...header,
        section: "| Proportion of Digital Sales  |"
    },
    {
        ...header,
        section: "| Proportion of downloadable   |\n| versions of Packaged         |\n| Software Sales               |"
    }
]

const footer: Footer = {
    section: "|(※ Proportion of overseas (outside of Japan)\n| sales to total sales)"
}

const [footerTwo, footerThree, footerFour, footerFive, footerSix]: Footer[] = [
    {
        section: "|(※ Proportion of hardware\n|(including accessories) sales to total\n| dedicated video game platform sales)"
    },
    {
        section: "|(※ Proportion of first-party software sales\n| to total dedicated video game software sales)" 
    },
    {
        section: "|(\"※ Digital sales include a) downloadable\n| versions of packaged software,\n|b) download-only software,\n|c) add-on content and\n|d) Nintendo Switch Online, etc.\n|＊\"Downloadable versions of packaged software\"\n| indicates the downloadable version of\n| software that is offered both physically\n| and digitally.\")"
    },
    {
        section: "|(※ Proportion of digital sales to total\n| dedicated video game software sales )" 
    },
    {
        section: "|(※ Proportion of downloadable versions of\n| packaged software sales to total digital\n| sales as indicated above: a/(a+b+c+d) )" 
    }
] 

    const proportionOfOverseasSalesArrays = [
        header, 
        footer, 
        proportionOfOverseasSalesQtr,
        proportionOfOverseasSalesCml, 
        currentQuarter 
    ] as const;

    const proportionOfHardwareSalesArrays = [
        headerTwo,
        footerTwo,
        proportionOfHardwareSalesQtr,
        proportionOfHardwareSalesCml,
        currentQuarter
    ] as const;

    const proportionOfFirstPartySoftwareSalesArrays = [
        headerThree,
        footerThree,
        proportionOfFirstPartySoftwareSalesQtr,
        proportionOfFirstPartySoftwareSalesCml,
        currentQuarter
    ] as const;

    const digitalSalesArrays = [
        headerFour,
        footerFour,
        digitalSalesQtr,
        digitalSalesCml,
        currentQuarter
    ] as const;

    const proportionOfDigitalSalesArrays = [
        headerFive,
        footerFive,
        proportionOfDigitalSalesQtr,
        proportionOfDigitalSalesCml,
        currentQuarter
    ] as const;

    const proportionOfDLverPackagedSoftwareArrays = [
        headerSix,
        footerSix,
        proportionOfDLverPackagedSoftwareQtr,
        proportionOfDLverPackagedSoftwareCml,
        currentQuarter
    ] as const;

    const printOne = printHead(header)

    const [printTwo, printThree, printFour, printFive, printSix, printSeven] = [
    proportionOfOverseasSalesArrays, proportionOfHardwareSalesArrays, proportionOfFirstPartySoftwareSalesArrays, digitalSalesArrays, proportionOfDigitalSalesArrays, proportionOfDLverPackagedSoftwareArrays].map((elem, index, array) => {

            return printBody(...elem)
    })

export const printKPI = `${printOne}
${printTwo}
${printThree}
${printFour}
${printFive}
${printSix}
${printSeven}
+${"-".repeat(30)+"+"}
###`;