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
        value: 77.9,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 2nd Quarter       ",
        value: 78.7,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 3rd Quarter       ",
        value: 79.6,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 4th Quarter       ",
        value: 78.2,
    },
]

const proportionOfOverseasSalesCml: KPDIndicators[] = [
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Half          ",
        value: 78.3,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Three Quarters",
        value: 79.0,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " FY3/22 Cumulative ",
        value: 78.8,
    },
]

export const proportionOfHardwareSalesQtr: KPDIndicators[] = [
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 1st Quarter       ",
        value: 47.6,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 2nd Quarter       ",
        value: 45.2,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 3rd Quarter       ",
        value: 53.9,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 4th Quarter       ",
        value: 41.5,
    },
]

const proportionOfHardwareSalesCml: KPDIndicators[] = [
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Half          ",
        value: 46.5,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Three Quarters",
        value: 50.4,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " FY3/22 Cumulative ",
        value: 48.4,
    },
]

export const proportionOfFirstPartySoftwareSalesQtr: KPDIndicators[] = [
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
        value: 68.9,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 3rd Quarter       ",
        value: 84.1,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 4th Quarter       ",
        value: 82.3,
    },
]

const proportionOfFirstPartySoftwareSalesCml: KPDIndicators[] = [
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Half          ",
        value: 70.6,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Three Quarters",
        value: 77.7,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " FY3/22 Cumulative ",
        value: 78.8,
    },
]

export const digitalSalesQtr: KPDIndicators[] = [
    {
        category: "quarterly",
        units: "currency",
        quarter: " 1st Quarter       ",
        value: 75.9,
    },
    {
        category: "quarterly",
        units: "currency",
        quarter: " 2nd Quarter       ",
        value: 68.2,
    },
    {
        category: "quarterly",
        units: "currency",
        quarter: " 3rd Quarter       ",
        value: 110.8,
    },
    {
        category: "quarterly",
        units: "currency",
        quarter: " 4th Quarter       ",
        value: 104.6,
    },
]

const digitalSalesCml: KPDIndicators[] = [
    {
        category: "cumulative",
        units: "currency",
        quarter: " 1st Half          ",
        value: 144.2,
    },
    {
        category: "cumulative",
        units: "currency",
        quarter: " 1st Three Quarters",
        value: 255.0,
    },
    {
        category: "cumulative",
        units: "currency",
        quarter: " FY3/22 Cumulative ",
        value: 359.6,
    },
]

export const proportionOfDigitalSalesQtr: KPDIndicators[] = [
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 1st Quarter       ",
        value: 46.9,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 2nd Quarter       ",
        value: 43.2,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 3rd Quarter       ",
        value: 35.3,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 4th Quarter       ",
        value: 49.5,
    },
]

const proportionOfDigitalSalesCml: KPDIndicators[] = [
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Half          ",
        value: 45.1,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Three Quarters",
        value: 40.2,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " FY3/22 Cumulative ",
        value: 42.6,
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
        value: 49.1,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 3rd Quarter       ",
        value: 56.3,
    },
    {
        category: "quarterly",
        units: "percentage",
        quarter: " 4th Quarter       ",
        value: 63.9,
    },
]

const proportionOfDLverPackagedSoftwareCml: KPDIndicators[] = [
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Half          ",
        value: 50.7,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " 1st Three Quarters",
        value: 53.1,
    },
    {
        category: "cumulative",
        units: "percentage",
        quarter: " FY3/22 Cumulative ",
        value: 56.2,
    },
]

const header: Header = {
    companyName: " Nintendo Co., Ltd.",
    section: "| Proportion of overseas sales |",
    fiscalYear: "| FY3/2022 |",
    title: "| Key/Digital Sales Indicators |",
}

const footer: Footer = {
    proportionOfOverseasSales: "|(※ Proportion of overseas (outside of Japan)\n| sales to total sales)",
    proportionOfHardwareSales: "|(※ Proportion of hardware\n|(including accessories) sales to total\n| dedicated video game platform sales)",
    proportionOfFirstPartySoftwareSales: "|(※ Proportion of first-party software sales\n| to total dedicated video game software sales)",
    digitalSales: "|(\"※ Digital sales include a) downloadable\n| versions of packaged software,\n|b) download-only software,\n|c) add-on content and\n|d) Nintendo Switch Online, etc.\n|＊\"Downloadable versions of packaged software\"\n| indicates the downloadable version of\n| software that is offered both physically\n| and digitally.\")",
    proportionOfDigitalSales: "|(※ Proportion of digital sales to total\n| dedicated video game software sales )",
    proportionOfDLverPackagedSoftware: "|(※ Proportion of downloadable versions of\n| packaged software sales to total digital\n| sales as indicated above: a/(a+b+c+d) )",
}

    const proportionOfOverseasSalesArrays = [
        header, 
        footer, 
        proportionOfOverseasSalesQtr,
        proportionOfOverseasSalesCml, 
        currentQuarter 
    ] as const;

    const proportionOfHardwareSalesArrays = [
        header,
        footer,
        proportionOfHardwareSalesQtr,
        proportionOfHardwareSalesCml,
        currentQuarter
    ] as const;

    const proportionOfFirstPartySoftwareSalesArrays = [
        header,
        footer,
        proportionOfFirstPartySoftwareSalesQtr,
        proportionOfFirstPartySoftwareSalesCml,
        currentQuarter
    ] as const;

    const digitalSalesArrays = [
        header,
        footer,
        digitalSalesQtr,
        digitalSalesCml,
        currentQuarter
    ] as const;

    const proportionOfDigitalSalesArrays = [
        header,
        footer,
        proportionOfDigitalSalesQtr,
        proportionOfDigitalSalesCml,
        currentQuarter
    ] as const;

    const proportionOfDLverPackagedSoftwareArrays = [
        header,
        footer,
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