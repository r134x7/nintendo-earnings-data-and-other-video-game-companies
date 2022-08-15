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
} from "../../../utils/kpi-logic"

const currentQuarter = 4;

export const proportionOfOverseasSalesQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 72.3,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 70.1,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 71.2,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 77.4,
    },
]

const proportionOfOverseasSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 71.1,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 71.2,
    },
    {
        type: "percentage",
        quarter: " FY3/17 Cumulative ",
        value: 73.4,
    },
]

export const proportionOfHardwareSalesQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 41.9,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 56.1,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 44.2,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 67.3,
    },
]

const proportionOfHardwareSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 49.7,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 46.6,
    },
    {
        type: "percentage",
        quarter: " FY3/17 Cumulative ",
        value: 54.0,
    },
]

export const proportionOfFirstPartySoftwareSalesQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 83.4,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 71.4,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 93.9,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 85.7,
    },
]

const proportionOfFirstPartySoftwareSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 77.7,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 87.5,
    },
    {
        type: "percentage",
        quarter: " FY3/17 Cumulative ",
        value: 87.0,
    },
]

export const digitalSalesQtr: KPIQuarter[] = [
    {
        type: "currency",
        quarter: " 1st Quarter       ",
        value: 7.8,
    },
    {
        type: "currency",
        quarter: " 2nd Quarter       ",
        value: 6.9,
    },
    {
        type: "currency",
        quarter: " 3rd Quarter       ",
        value: 8.3,
    },
    {
        type: "currency",
        quarter: " 4th Quarter       ",
        value: 9.4,
    },
]

const digitalSalesCml: KPICumulative[] = [
    {
        type: "currency",
        quarter: " 1st Half          ",
        value: 14.7,
    },
    {
        type: "currency",
        quarter: " 1st Three Quarters",
        value: 23.1,
    },
    {
        type: "currency",
        quarter: " FY3/17 Cumulative ",
        value: 32.5,
    },
]

export const proportionOfDigitalSalesQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 22.5,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 21.7,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 9.0,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 17.7,
    },
]

const proportionOfDigitalSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 22.1,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 14.5,
    },
    {
        type: "percentage",
        quarter: " FY3/17 Cumulative ",
        value: 15.3,
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

export const printKPI = `${printOne}
${printTwo}
${printThree}
${printFour}
${printFive}
${printSix}
+${"-".repeat(30)+"+"}
###`;