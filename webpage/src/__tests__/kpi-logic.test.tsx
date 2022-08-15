import { KPIQuarter, Header, Footer } from "../utils/kpi-logic";

const header: Header = {
    companyName: " Nintendo Co., Ltd.",
    proportionOfOverseasSales: " Proportion of overseas sales ",
    proportionOfHardwareSales: " Proportion of hardware sales ",
    proportionOfFirstPartySoftwareSales: "| Proportion of first party    |\n| software sales               |",
    digitalSales: " Digital Sales                ",
    proportionOfDigitalSales: " Proportion of Digital Sales  ",
    proportionOfDLverPackagedSoftware: "| Proportion of downloadable   |\n| versions of Packaged         |\n| Software Sales               |",
    fiscalYear: "FY3/2017 ",
    title: "   Key/Digital Sales Indicators   ",
}

const footer: Footer = {
    proportionOfOverseasSales: "|(※ Proportion of overseas (outside of Japan)\n| sales to total sales)",
    proportionOfHardwareSales: "|(※ Proportion of hardware  \n|(including accessories) sales to total \n| dedicated video game platform sales)",
    proportionOfFirstPartySoftwareSales: "|(※ Proportion of first-party software sales\n| to total dedicated video game software sales)",
    digitalSales: "|(\"※ Digital sales include a) downloadable \n| versions of packaged software, \n|b) download-only software,\n|c) add-on content and \n|d) Nintendo Switch Online, etc. \n＊\"Downloadable versions of packaged software\"\n| indicates the downloadable version of\n| software that is offered both physically\n and digitally.\")",
    proportionOfDigitalSales: "|(※ Proportion of digital sales to total\n| dedicated video game software sales )",
    proportionOfDLverPackagedSoftware: "|(※ Proportion of downloadable versions of \n| packaged software sales to total digital \n| sales as indicated above: a/(a+b+c+d) )",
}

const proportionOfOverseasSales: KPIQuarter[] = [
    {
        quarter: " 1st Quarter       ",
        value: 79.9,
    },
    {
        quarter: " 2nd Quarter       ",
        value: 78.9,
    },
    {
        quarter: " 3rd Quarter       ",
        value: 77.9,
    },
    {
        quarter: " 4th Quarter       ",
        value: 76.9,
    },
]

const digitalSales: KPIQuarter[] = [
    {
        quarter: " 1st Quarter       ",
        value: 79.9,
    },
    {
        quarter: " 2nd Quarter       ",
        value: 78.9,
    },
    {
        quarter: " 3rd Quarter       ",
        value: 77.9,
    },
    {
        quarter: " 4th Quarter       ",
        value: 76.9,
    },
]

// const currentQuarter = 1;

const printSectionQuarters = (sectionQuarter: KPIQuarter[], currentQuarter: number) => { // to use Net Sales Difference, Operating Income Difference or Net Profit Difference

    return sectionQuarter.filter((elem, index) => index < currentQuarter).map((elem, index) => {

        let printSection: string = (sectionQuarter === digitalSales) 
            ? `¥${elem.value}B `
            : `${elem.value}% `; 
        let printSectionFixed: string = (printSection.length >= 10)
                                  ? printSection
                                  : " ".repeat(10 - printSection.length) + printSection;
        return "|" + elem.quarter + "|" + printSectionFixed + "|"
    }).reduce((prev, next, index, array) => {
        return (array[index] === array[currentQuarter -1])
                  ? prev + `\n+${"-".repeat(38)}+\n` + next
                  : prev + `\n+${"-".repeat(38)}+\n` + next 
    })

};

const printproportionOfOverseasSales = (header: Header, footer: Footer, proportionOfOverseasSales: KPIQuarter[], currentQuarter: number) => 
`+${"-".repeat(30)}+
|${header.proportionOfOverseasSales}|
+${"-".repeat(30)}+
${printSectionQuarters(proportionOfOverseasSales, currentQuarter)}
+${"=".repeat(30)+"+"}
+${"-".repeat(30)+"+"}
${footer.proportionOfOverseasSales}
`;

test('Print Section Quarters type A', () => {
    let currentQuarter = 1;

    const typeA = printproportionOfOverseasSales(header, footer, proportionOfOverseasSales, currentQuarter)

let pythonOutput = 
`+------------------------------+
| Proportion of overseas sales |
+------------------------------+
| 1st Quarter       |    79.9% |
+==============================+
+------------------------------+
|(※ Proportion of overseas (outside of Japan)
| sales to total sales)
`;
  
    expect(typeA).toMatch(pythonOutput);
  });