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

const proportionOfOverseasSalesQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 76.5,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 76.9,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 78.6,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 74.0,
    },
]

const proportionOfOverseasSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 76.8,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 77.8,
    },
    {
        type: "percentage",
        quarter: " FY3/17 Cumulative ",
        value: 77.0,
    },
]

const proportionOfHardwareSalesQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 50.5,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 54.9,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 57.4,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 39.6,
    },
]

const proportionOfHardwareSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 53.2,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 55.6,
    },
    {
        type: "percentage",
        quarter: " FY3/17 Cumulative ",
        value: 52.2,
    },
]

const proportionOfFirstPartySoftwareSalesQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 74.1,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 76.0,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 87.4,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 85.1,
    },
]

const proportionOfFirstPartySoftwareSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 75.2,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 82.0,
    },
    {
        type: "percentage",
        quarter: " FY3/17 Cumulative ",
        value: 82.8,
    },
]

const digitalSalesQtr: KPIQuarter[] = [
    {
        type: "currency",
        quarter: " 1st Quarter       ",
        value: 30.6,
    },
    {
        type: "currency",
        quarter: " 2nd Quarter       ",
        value: 40.9,
    },
    {
        type: "currency",
        quarter: " 3rd Quarter       ",
        value: 53.2,
    },
    {
        type: "currency",
        quarter: " 4th Quarter       ",
        value: 79.2,
    },
]

const digitalSalesCml: KPICumulative[] = [
    {
        type: "currency",
        quarter: " 1st Half          ",
        value: 71.6,
    },
    {
        type: "currency",
        quarter: " 1st Three Quarters",
        value: 124.9,
    },
    {
        type: "currency",
        quarter: " FY3/17 Cumulative ",
        value: 204.1,
    },
]

const proportionOfDigitalSalesQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 38.3,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 34.8,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 22.3,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 48.5,
    },
]

const proportionOfDigitalSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 36.2,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 28.6,
    },
    {
        type: "percentage",
        quarter: " FY3/17 Cumulative ",
        value: 34.0,
    },
]

const proportionOfDLverPackagedSoftwareQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 56.4,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 64.5,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 71.7,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 76.9,
    },
]

const proportionOfDLverPackagedSoftwareCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 61.0,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 65.6,
    },
    {
        type: "percentage",
        quarter: " FY3/22 Cumulative ",
        value: 70.0,
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
    fiscalYear: "| FY3/2017 |",
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