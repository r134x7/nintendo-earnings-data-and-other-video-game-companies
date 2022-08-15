import { KPIQuarter, KPICumulative, Header, Footer } from "../utils/kpi-logic";

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
    proportionOfHardwareSales: "|(※ Proportion of hardware\n|(including accessories) sales to total\n| dedicated video game platform sales)",
    proportionOfFirstPartySoftwareSales: "|(※ Proportion of first-party software sales\n| to total dedicated video game software sales)",
    digitalSales: "|(\"※ Digital sales include a) downloadable\n| versions of packaged software,\n|b) download-only software,\n|c) add-on content and\n|d) Nintendo Switch Online, etc.\n|＊\"Downloadable versions of packaged software\"\n| indicates the downloadable version of\n| software that is offered both physically\n| and digitally.\")",
    proportionOfDigitalSales: "|(※ Proportion of digital sales to total\n| dedicated video game software sales )",
    proportionOfDLverPackagedSoftware: "|(※ Proportion of downloadable versions of\n| packaged software sales to total digital\n| sales as indicated above: a/(a+b+c+d) )",
}

const proportionOfOverseasSalesQtr: KPIQuarter[] = [
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

const proportionOfOverseasSalesCml: KPICumulative[] = [
    {
        quarter: " 1st Half          ",
        value: 72.9,
    },
    {
        quarter: " 1st Three Quarters",
        value: 71.9,
    },
    {
        quarter: " FY3/22 Cumulative ",
        value: 70.9,
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

const printSectionQuarters = (sectionQuarter: KPIQuarter[], currentQuarter: number) => { 

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
                  ? prev + `\n` + next
                  : prev + `\n` + next 
    })

};

const printSectionCumulative = (sectionCumulative: KPICumulative[], currentQuarter: number) => { 
    
    return  sectionCumulative.filter((elem, index) => (currentQuarter >= 2 && index < currentQuarter -1)).map((elem, index) => {
    
    let printSectionCml: string = (sectionCumulative === digitalSales) 
        ? `¥${elem.value}B `
        : `${elem.value}% `; 
    let printSectionCmlFixed: string = (printSectionCml.length >= 10)
                              ? printSectionCml
                              : " ".repeat(10 - printSectionCml.length) + printSectionCml;
    return "|" + elem.quarter + "|" + printSectionCmlFixed + "|"
    }).reduce((prev, next, index, array) => {
    return (array[index] === array[currentQuarter -2])
            ? prev + `\n` + next 
            // + `\n+${"-".repeat(30)}+`
            : prev + `\n+${"-".repeat(30)}+\n` + next 
  })
};

const printproportionOfOverseasSales = (header: Header, footer: Footer, proportionOfOverseasSales: KPIQuarter[], proportionOfOverseasSalesCml: KPICumulative[], currentQuarter: number) => 
`+${"-".repeat(30)}+
|${header.proportionOfOverseasSales}|
+${"-".repeat(30)}+
${printSectionQuarters(proportionOfOverseasSales, currentQuarter)}
+${(currentQuarter > 1) ? "=".repeat(30)+"+\n" + printSectionCumulative(proportionOfOverseasSalesCml, currentQuarter) : "=".repeat(30)+"+" }
+${"-".repeat(30)+"+"}
${footer.proportionOfOverseasSales}`;

const printDigitalSales = (header: Header, footer: Footer, digitalSales: KPIQuarter[], currentQuarter: number) => 
`+${"-".repeat(30)}+
|${header.digitalSales}|
+${"-".repeat(30)}+
${printSectionQuarters(digitalSales, currentQuarter)}
+${"=".repeat(30)+"+"}
+${"-".repeat(30)+"+"}
${footer.digitalSales}`;

test('Print Section Quarters type A', () => {
    let currentQuarter = 1;

    const typeA = printproportionOfOverseasSales(header, footer, proportionOfOverseasSalesQtr, proportionOfOverseasSalesCml, currentQuarter)

let pythonOutput = 
`+------------------------------+
| Proportion of overseas sales |
+------------------------------+
| 1st Quarter       |    79.9% |
+==============================+
+------------------------------+
|(※ Proportion of overseas (outside of Japan)
| sales to total sales)`;
  
    expect(typeA).toMatch(pythonOutput);
  });

test("Print Section Quarters type B", () => {

    let currentQuarter = 1;

    const typeB = printDigitalSales(header, footer, digitalSales, currentQuarter)    

let pythonOutput = 
`+------------------------------+
| Digital Sales                |
+------------------------------+
| 1st Quarter       |   ¥79.9B |
+==============================+
+------------------------------+
|("※ Digital sales include a) downloadable
| versions of packaged software,
|b) download-only software,
|c) add-on content and
|d) Nintendo Switch Online, etc.
|＊"Downloadable versions of packaged software"
| indicates the downloadable version of
| software that is offered both physically
| and digitally.")`;

    expect(typeB).toMatch(pythonOutput);
})

test("Print Section Quarters type A Quarter 2", () => {
    let currentQuarter = 2;

    const typeA = printproportionOfOverseasSales(header, footer, proportionOfOverseasSalesQtr, proportionOfOverseasSalesCml, currentQuarter)

    let pythonOutput = 
`+------------------------------+
| Proportion of overseas sales |
+------------------------------+
| 1st Quarter       |    79.9% |
| 2nd Quarter       |    78.9% |
+==============================+
| 1st Half          |    72.9% |
+------------------------------+
|(※ Proportion of overseas (outside of Japan)
| sales to total sales)`;

    expect(typeA).toMatch(pythonOutput);
})

test("Print Section Quarters type A Quarter 3", () => {
    let currentQuarter = 3;

    const typeA = printproportionOfOverseasSales(header, footer, proportionOfOverseasSalesQtr, proportionOfOverseasSalesCml, currentQuarter)

    let pythonOutput = 
`+------------------------------+
| Proportion of overseas sales |
+------------------------------+
| 1st Quarter       |    79.9% |
| 2nd Quarter       |    78.9% |
| 3rd Quarter       |    77.9% |
+==============================+
| 1st Half          |    72.9% |
| 1st Three Quarters|    71.9% |
+------------------------------+
|(※ Proportion of overseas (outside of Japan)
| sales to total sales)`;

    expect(typeA).toMatch(pythonOutput);
})