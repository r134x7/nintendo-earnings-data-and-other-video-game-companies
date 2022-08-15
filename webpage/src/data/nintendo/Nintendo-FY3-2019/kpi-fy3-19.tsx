import {
    KPIQuarter,
    KPICumulative,
    Header,
    Footer,
    printHead,
    printProportionOfOverseasSales,
    printProportionOfHardwareSales,
    printProportionOfFirstPartySoftwareSales,
    printDigitalSales,
    printProportionOfDigitalSales,
    printProportionOfDLverPackagedSoftware,
} from "../../../utils/kpi-logic"

const currentQuarter = 4;

export const proportionOfOverseasSalesQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 76.6,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 78.7,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 77.7,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 78.7,
    },
]

const proportionOfOverseasSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 77.8,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 77.7,
    },
    {
        type: "percentage",
        quarter: " FY3/19 Cumulative ",
        value: 77.9,
    },
]

export const proportionOfHardwareSalesQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 51.7,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 62.4,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 61.2,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 51.1,
    },
]

const proportionOfHardwareSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 57.8,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 59.9,
    },
    {
        type: "percentage",
        quarter: " FY3/19 Cumulative ",
        value: 58.4,
    },
]

export const proportionOfFirstPartySoftwareSalesQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 82.9,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 71.0,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 89.8,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 80.3,
    },
]

const proportionOfFirstPartySoftwareSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 76.8,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 84.6,
    },
    {
        type: "percentage",
        quarter: " FY3/19 Cumulative ",
        value: 83.8,
    },
]

export const digitalSalesQtr: KPIQuarter[] = [
    {
        type: "currency",
        quarter: " 1st Quarter       ",
        value: 18.5,
    },
    {
        type: "currency",
        quarter: " 2nd Quarter       ",
        value: 20.6,
    },
    {
        type: "currency",
        quarter: " 3rd Quarter       ",
        value: 45.0,
    },
    {
        type: "currency",
        quarter: " 4th Quarter       ",
        value: 34.6,
    },
]

const digitalSalesCml: KPICumulative[] = [
    {
        type: "currency",
        quarter: " 1st Half          ",
        value: 39.1,
    },
    {
        type: "currency",
        quarter: " 1st Three Quarters",
        value: 84.2,
    },
    {
        type: "currency",
        quarter: " FY3/19 Cumulative ",
        value: 118.8,
    },
]

export const proportionOfDigitalSalesQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 24.2,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 26.0,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 19.6,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 37.2,
    },
]

const proportionOfDigitalSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 25.1,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 21.8,
    },
    {
        type: "percentage",
        quarter: " FY3/19 Cumulative ",
        value: 24.8,
    },
]

export const proportionOfDLverPackagedSoftwareQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 59.3,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 59.1,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 78.7,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 62.6,
    },
]

const proportionOfDLverPackagedSoftwareCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 59.2,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 69.6,
    },
    {
        type: "percentage",
        quarter: " FY3/22 Cumulative ",
        value: 67.6,
    },
]

const header: Header = {
    companyName: " Nintendo Co., Ltd.",
    proportionOfOverseasSales: "| Proportion of overseas sales |",
    proportionOfHardwareSales: "| Proportion of hardware sales |",
    proportionOfFirstPartySoftwareSales: "| Proportion of first party    |\n| software sales               |",
    digitalSales: "| Digital Sales                |",
    proportionOfDigitalSales: "| Proportion of Digital Sales  |",
    proportionOfDLverPackagedSoftware: "| Proportion of downloadable   |\n| versions of Packaged         |\n| Software Sales               |",
    fiscalYear: "| FY3/2019 |",
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

    const printOne = printHead(header)

    const printTwo = printProportionOfOverseasSales(header, footer, proportionOfOverseasSalesQtr, proportionOfOverseasSalesCml, currentQuarter)

    const printThree = printProportionOfHardwareSales(header, footer, proportionOfHardwareSalesQtr, proportionOfHardwareSalesCml, currentQuarter)

    const printFour = printProportionOfFirstPartySoftwareSales(header, footer, proportionOfFirstPartySoftwareSalesQtr, proportionOfFirstPartySoftwareSalesCml, currentQuarter)

    const printFive = printDigitalSales(header, footer, digitalSalesQtr, digitalSalesCml, currentQuarter)

    const printSix = printProportionOfDigitalSales(header, footer, proportionOfDigitalSalesQtr, proportionOfDigitalSalesCml, currentQuarter)

    const printSeven = printProportionOfDLverPackagedSoftware(header, footer, proportionOfDLverPackagedSoftwareQtr, proportionOfDLverPackagedSoftwareCml, currentQuarter)

export const printKPI = `${printOne}
${printTwo}
${printThree}
${printFour}
${printFive}
${printSix}
${printSeven}
+${"-".repeat(30)+"+"}
###`;