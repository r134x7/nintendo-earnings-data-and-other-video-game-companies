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
        value: 76.3,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 78.6,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 77.7,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 76.6,
    },
]

const proportionOfOverseasSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 77.5,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 77.6,
    },
    {
        type: "percentage",
        quarter: " FY3/17 Cumulative ",
        value: 77.4,
    },
]

const proportionOfHardwareSalesQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 47.2,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 54.4,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 57.5,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 47.6,
    },
]

const proportionOfHardwareSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 51.1,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 54.0,
    },
    {
        type: "percentage",
        quarter: " FY3/17 Cumulative ",
        value: 52.7,
    },
]

const proportionOfFirstPartySoftwareSalesQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 82.5,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 81.2,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 81.1,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 71.1,
    },
]

const proportionOfFirstPartySoftwareSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 81.9,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 81.6,
    },
    {
        type: "percentage",
        quarter: " FY3/17 Cumulative ",
        value: 79.4,
    },
]

const digitalSalesQtr: KPIQuarter[] = [
    {
        type: "currency",
        quarter: " 1st Quarter       ",
        value: 101.0,
    },
    {
        type: "currency",
        quarter: " 2nd Quarter       ",
        value: 70.4,
    },
    {
        type: "currency",
        quarter: " 3rd Quarter       ",
        value: 84.4,
    },
    {
        type: "currency",
        quarter: " 4th Quarter       ",
        value: 88.1,
    },
]

const digitalSalesCml: KPICumulative[] = [
    {
        type: "currency",
        quarter: " 1st Half          ",
        value: 171.5,
    },
    {
        type: "currency",
        quarter: " 1st Three Quarters",
        value: 256.0,
    },
    {
        type: "currency",
        quarter: " FY3/17 Cumulative ",
        value: 344.1,
    },
]

const proportionOfDigitalSalesQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 55.6,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 38.9,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 32.1,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 49.6,
    },
]

const proportionOfDigitalSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 47.2,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 40.9,
    },
    {
        type: "percentage",
        quarter: " FY3/17 Cumulative ",
        value: 42.8,
    },
]

const proportionOfDLverPackagedSoftwareQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 67.7,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 57.8,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 48.6,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 60.9,
    },
]

const proportionOfDLverPackagedSoftwareCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 63.6,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 58.7,
    },
    {
        type: "percentage",
        quarter: " FY3/22 Cumulative ",
        value: 59.3,
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