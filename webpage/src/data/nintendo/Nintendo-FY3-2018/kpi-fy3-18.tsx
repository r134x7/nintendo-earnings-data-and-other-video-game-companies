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
        value: 73.9,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 2nd Quarter       ",
        value: 72.1,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 3rd Quarter       ",
        value: 76.1,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 4th Quarter       ",
        value: 77.8,
    },
]

const proportionOfOverseasSalesCml: KPDIndicators[] = [
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Half          ",
        value: 72.8,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Three Quarters",
        value: 74.7,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " FY3/18 Cumulative ",
        value: 75.3,
    },
]

export const proportionOfHardwareSalesQtr: KPDIndicators[] = [
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 1st Quarter       ",
        value: 61.0,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 2nd Quarter       ",
        value: 70.0,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 3rd Quarter       ",
        value: 66.4,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 4th Quarter       ",
        value: 61.3,
    },
]

const proportionOfHardwareSalesCml: KPDIndicators[] = [
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Half          ",
        value: 66.3,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Three Quarters",
        value: 66.3,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " FY3/18 Cumulative ",
        value: 65.4,
    },
]

export const proportionOfFirstPartySoftwareSalesQtr: KPDIndicators[] = [
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 1st Quarter       ",
        value: 87.3,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 2nd Quarter       ",
        value: 73.6,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 3rd Quarter       ",
        value: 88.9,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 4th Quarter       ",
        value: 84.9,
    },
]

const proportionOfFirstPartySoftwareSalesCml: KPDIndicators[] = [
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Half          ",
        value: 80.0,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Three Quarters",
        value: 85.4,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " FY3/18 Cumulative ",
        value: 85.3,
    },
]

export const digitalSalesQtr: KPDIndicators[] = [
    {
        category: "quarterly",
        units: "currency",
        quarter: " 1st Quarter       ",
        value: 11.0,
    },
    {
        category: "quarterly",
        units: "currency",
        quarter: " 2nd Quarter       ",
        value: 11.7,
    },
    {
        category: "quarterly",
        units: "currency",
        quarter: " 3rd Quarter       ",
        value: 20.3,
    },
    {
        category: "quarterly",
        units: "currency",
        quarter: " 4th Quarter       ",
        value: 17.6,
    },
]

const digitalSalesCml: KPDIndicators[] = [
    {
        category: "cumulative",
        units: "currency",
        quarter: " 1st Half          ",
        value: 22.8,
    },
    {
        category: "cumulative",
        units: "currency",
        quarter: " 1st Three Quarters",
        value: 43.1,
    },
    {
        category: "cumulative",
        units: "currency",
        quarter: " FY3/18 Cumulative ",
        value: 60.8,
    },
]

export const proportionOfDigitalSalesQtr: KPDIndicators[] = [
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 1st Quarter       ",
        value: 19.5,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 2nd Quarter       ",
        value: 18.6,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 3rd Quarter       ",
        value: 12.8,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 4th Quarter       ",
        value: 24.2,
    },
]

const proportionOfDigitalSalesCml: KPDIndicators[] = [
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Half          ",
        value: 19.1,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Three Quarters",
        value: 15.5,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " FY3/18 Cumulative ",
        value: 17.3,
    },
]

const header: Header = {
    companyName: " Nintendo Co., Ltd.",
    section: "| Proportion of overseas sales |",
    fiscalYear: "| FY3/2018 |",
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