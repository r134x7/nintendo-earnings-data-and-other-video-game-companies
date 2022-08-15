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
        value: 77.9,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 78.7,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 79.6,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 78.2,
    },
]

const proportionOfOverseasSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 78.3,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 79.0,
    },
    {
        type: "percentage",
        quarter: " FY3/22 Cumulative ",
        value: 78.8,
    },
]

export const proportionOfHardwareSalesQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 47.6,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 45.2,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 53.9,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 41.5,
    },
]

const proportionOfHardwareSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 46.5,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 50.4,
    },
    {
        type: "percentage",
        quarter: " FY3/22 Cumulative ",
        value: 48.4,
    },
]

export const proportionOfFirstPartySoftwareSalesQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 72.3,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 68.9,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 84.1,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 82.3,
    },
]

const proportionOfFirstPartySoftwareSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 70.6,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 77.7,
    },
    {
        type: "percentage",
        quarter: " FY3/22 Cumulative ",
        value: 78.8,
    },
]

export const digitalSalesQtr: KPIQuarter[] = [
    {
        type: "currency",
        quarter: " 1st Quarter       ",
        value: 75.9,
    },
    {
        type: "currency",
        quarter: " 2nd Quarter       ",
        value: 68.2,
    },
    {
        type: "currency",
        quarter: " 3rd Quarter       ",
        value: 110.8,
    },
    {
        type: "currency",
        quarter: " 4th Quarter       ",
        value: 104.6,
    },
]

const digitalSalesCml: KPICumulative[] = [
    {
        type: "currency",
        quarter: " 1st Half          ",
        value: 144.2,
    },
    {
        type: "currency",
        quarter: " 1st Three Quarters",
        value: 255.0,
    },
    {
        type: "currency",
        quarter: " FY3/22 Cumulative ",
        value: 359.6,
    },
]

export const proportionOfDigitalSalesQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 46.9,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 43.2,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 35.3,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 49.5,
    },
]

const proportionOfDigitalSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 45.1,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 40.2,
    },
    {
        type: "percentage",
        quarter: " FY3/22 Cumulative ",
        value: 42.6,
    },
]

export const proportionOfDLverPackagedSoftwareQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 52.1,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 49.1,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 56.3,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 63.9,
    },
]

const proportionOfDLverPackagedSoftwareCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 50.7,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 53.1,
    },
    {
        type: "percentage",
        quarter: " FY3/22 Cumulative ",
        value: 56.2,
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