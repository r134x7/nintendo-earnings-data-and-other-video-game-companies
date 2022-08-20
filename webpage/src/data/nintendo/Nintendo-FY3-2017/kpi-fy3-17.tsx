import {
    Header,
    Footer,
    printHead,
    printBody,
    KPDIndicators,
} from "../../../utils/kpi-logic"

const currentQuarter = 4;

export const proportionOfOverseasSalesQtr: KPDIndicators[] = [
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 1st Quarter       ",
        value: 72.3,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 2nd Quarter       ",
        value: 70.1,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 3rd Quarter       ",
        value: 71.2,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 4th Quarter       ",
        value: 77.4,
    },
]

const proportionOfOverseasSalesCml: KPDIndicators[] = [
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Half          ",
        value: 71.1,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Three Quarters",
        value: 71.2,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " FY3/17 Cumulative ",
        value: 73.4,
    },
]

export const proportionOfHardwareSalesQtr: KPDIndicators[] = [
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 1st Quarter       ",
        value: 41.9,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 2nd Quarter       ",
        value: 56.1,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 3rd Quarter       ",
        value: 44.2,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 4th Quarter       ",
        value: 67.3,
    },
]

const proportionOfHardwareSalesCml: KPDIndicators[] = [
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Half          ",
        value: 49.7,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Three Quarters",
        value: 46.6,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " FY3/17 Cumulative ",
        value: 54.0,
    },
]

export const proportionOfFirstPartySoftwareSalesQtr: KPDIndicators[] = [
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 1st Quarter       ",
        value: 83.4,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 2nd Quarter       ",
        value: 71.4,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 3rd Quarter       ",
        value: 93.9,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 4th Quarter       ",
        value: 85.7,
    },
]

const proportionOfFirstPartySoftwareSalesCml: KPDIndicators[] = [
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Half          ",
        value: 77.7,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Three Quarters",
        value: 87.5,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " FY3/17 Cumulative ",
        value: 87.0,
    },
]

export const digitalSalesQtr: KPDIndicators[] = [
    {
        category: "quarterly",
        units: "currency",
        quarter: " 1st Quarter       ",
        value: 7.8,
    },
    {
        category: "quarterly",
        units: "currency",
        quarter: " 2nd Quarter       ",
        value: 6.9,
    },
    {
        category: "quarterly",
        units: "currency",
        quarter: " 3rd Quarter       ",
        value: 8.3,
    },
    {
        category: "quarterly",
        units: "currency",
        quarter: " 4th Quarter       ",
        value: 9.4,
    },
]

const digitalSalesCml: KPDIndicators[] = [
    {
        category: "cumulative",
        units: "currency",
        quarter: " 1st Half          ",
        value: 14.7,
    },
    {
        category: "cumulative",
        units: "currency",
        quarter: " 1st Three Quarters",
        value: 23.1,
    },
    {
        category: "cumulative",
        units: "currency",
        quarter: " FY3/17 Cumulative ",
        value: 32.5,
    },
]

export const proportionOfDigitalSalesQtr: KPDIndicators[] = [
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 1st Quarter       ",
        value: 22.5,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 2nd Quarter       ",
        value: 21.7,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 3rd Quarter       ",
        value: 9.0,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 4th Quarter       ",
        value: 17.7,
    },
]

const proportionOfDigitalSalesCml: KPDIndicators[] = [
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Half          ",
        value: 22.1,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Three Quarters",
        value: 14.5,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " FY3/17 Cumulative ",
        value: 15.3,
    },
]

const header: Header = {
    companyName: " Nintendo Co., Ltd.",
    section: "| Proportion of overseas sales |",
    fiscalYear: "| FY3/2017 |",
    title: "| Key/Digital Sales Indicators |",
}

const [headerTwo, headerThree, headerFour, headerFive]: Header[] = [
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
]

const footer: Footer = {
    section: "|(※ Proportion of overseas (outside of Japan)\n| sales to total sales)"
}

const [footerTwo, footerThree, footerFour, footerFive]: Footer[] = [
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

    const printOne = printHead(header)

    const [printTwo, printThree, printFour, printFive, printSix] = [
    proportionOfOverseasSalesArrays, proportionOfHardwareSalesArrays, proportionOfFirstPartySoftwareSalesArrays, digitalSalesArrays, proportionOfDigitalSalesArrays].map((elem, index, array) => {

            return printBody(...elem)
    })

export const printKPI = `${printOne}
${printTwo}
${printThree}
${printFour}
${printFive}
${printSix}
+${"-".repeat(30)+"+"}
###`;