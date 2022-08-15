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
        value: 73.9,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 72.1,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 76.1,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 77.8,
    },
]

const proportionOfOverseasSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 72.8,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 74.7,
    },
    {
        type: "percentage",
        quarter: " FY3/18 Cumulative ",
        value: 75.3,
    },
]

export const proportionOfHardwareSalesQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 61.0,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 70.0,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 66.4,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 61.3,
    },
]

const proportionOfHardwareSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 66.3,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 66.3,
    },
    {
        type: "percentage",
        quarter: " FY3/18 Cumulative ",
        value: 65.4,
    },
]

export const proportionOfFirstPartySoftwareSalesQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 87.3,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 73.6,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 88.9,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 84.9,
    },
]

const proportionOfFirstPartySoftwareSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 80.0,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 85.4,
    },
    {
        type: "percentage",
        quarter: " FY3/18 Cumulative ",
        value: 85.3,
    },
]

export const digitalSalesQtr: KPIQuarter[] = [
    {
        type: "currency",
        quarter: " 1st Quarter       ",
        value: 11.0,
    },
    {
        type: "currency",
        quarter: " 2nd Quarter       ",
        value: 11.7,
    },
    {
        type: "currency",
        quarter: " 3rd Quarter       ",
        value: 20.3,
    },
    {
        type: "currency",
        quarter: " 4th Quarter       ",
        value: 17.6,
    },
]

const digitalSalesCml: KPICumulative[] = [
    {
        type: "currency",
        quarter: " 1st Half          ",
        value: 22.8,
    },
    {
        type: "currency",
        quarter: " 1st Three Quarters",
        value: 43.1,
    },
    {
        type: "currency",
        quarter: " FY3/18 Cumulative ",
        value: 60.8,
    },
]

export const proportionOfDigitalSalesQtr: KPIQuarter[] = [
    {
        type: "percentage",
        quarter: " 1st Quarter       ",
        value: 19.5,
    },
    {
        type: "percentage",
        quarter: " 2nd Quarter       ",
        value: 18.6,
    },
    {
        type: "percentage",
        quarter: " 3rd Quarter       ",
        value: 12.8,
    },
    {
        type: "percentage",
        quarter: " 4th Quarter       ",
        value: 24.2,
    },
]

const proportionOfDigitalSalesCml: KPICumulative[] = [
    {
        type: "percentage",
        quarter: " 1st Half          ",
        value: 19.1,
    },
    {
        type: "percentage",
        quarter: " 1st Three Quarters",
        value: 15.5,
    },
    {
        type: "percentage",
        quarter: " FY3/18 Cumulative ",
        value: 17.3,
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
    fiscalYear: "| FY3/2018 |",
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