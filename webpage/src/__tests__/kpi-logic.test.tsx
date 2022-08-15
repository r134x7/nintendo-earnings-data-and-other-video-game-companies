import { KPIQuarter } from "../utils/kpi-logic";

const proportionOfOverseasSales: KPIQuarter[] = [
    {
        name: " Proportion of overseas sales ",
        quarter: " 1st Quarter ",
        number: 79.9,
        footer: `(※ Proportion of overseas (outside of Japan)
        sales to total sales)`,
    },
    {
        name: " Proportion of overseas sales ",
        quarter: " 2nd Quarter ",
        number: 78.9,
        footer: `(※ Proportion of overseas (outside of Japan)
        sales to total sales)`,
    },
    {
        name: " Proportion of overseas sales ",
        quarter: " 3rd Quarter ",
        number: 77.9,
        footer: `(※ Proportion of overseas (outside of Japan)
        sales to total sales)`,
    },
    {
        name: " Proportion of overseas sales ",
        quarter: " 4th Quarter ",
        number: 76.9,
        footer: `(※ Proportion of overseas (outside of Japan)
        sales to total sales)`,
    },
]

const digitalSales: KPIQuarter[] = [
    {
        name: " Digital Sales ",
        quarter: " 1st Quarter ",
        number: 79.9,
        footer: `("※ Digital sales include a) downloadable
        versions of packaged software,
        b) download-only software,
        c) add-on content and
        d) Nintendo Switch Online, etc.
        ＊"Downloadable versions of packaged software"
        indicates the downloadable version of
        software that is offered both physically
        and digitally.")`,
    },
    {
        name: " Digital Sales ",
        quarter: " 2nd Quarter ",
        number: 78.9,
        footer: `("※ Digital sales include a) downloadable
        versions of packaged software,
        b) download-only software,
        c) add-on content and
        d) Nintendo Switch Online, etc.
        ＊"Downloadable versions of packaged software"
        indicates the downloadable version of
        software that is offered both physically
        and digitally.")`,
    },
    {
        name: " Digital Sales ",
        quarter: " 3rd Quarter ",
        number: 77.9,
        footer: `("※ Digital sales include a) downloadable
        versions of packaged software,
        b) download-only software,
        c) add-on content and
        d) Nintendo Switch Online, etc.
        ＊"Downloadable versions of packaged software"
        indicates the downloadable version of
        software that is offered both physically
        and digitally.")`,
    },
    {
        name: " Digital Sales ",
        quarter: " 4th Quarter ",
        number: 76.9,
        footer: `("※ Digital sales include a) downloadable
        versions of packaged software,
        b) download-only software,
        c) add-on content and
        d) Nintendo Switch Online, etc.
        ＊"Downloadable versions of packaged software"
        indicates the downloadable version of
        software that is offered both physically
        and digitally.")`,
    },
]

// const currentQuarter = 4;

const printSectionQuarters = (sectionQuarter: KPIQuarter[], currentQuarter: number) => { // to use Net Sales Difference, Operating Income Difference or Net Profit Difference

    return sectionQuarter.filter((elem, index) => index < currentQuarter).map((elem, index) => {

        let printSection: string = (sectionQuarter === digitalSales) 
            ? `¥${elem.quarter}B `
            : `${elem.quarter}% `; 
        let printSectionFixed: string = (printSection.length >= 10)
                                  ? printSection
                                  : " ".repeat(10 - printSection.length) + printSection;
        return "|" + elem.name + "|" + printSectionFixed + "|"
    }).reduce((prev, next, index, array) => {
        return (array[index] === array[currentQuarter -1])
                  ? prev + `\n+${"-".repeat(38)}+\n` + next
                  : prev + `\n+${"-".repeat(38)}+\n` + next 
    })

};

test('Print Section Quarters type A', () => {
    let currentQuarter = 1;

    const test = printSectionQuarters(proportionOfOverseasSales, currentQuarter)

let pythonOutput = 
`+------------------------------+
| Proportion of overseas sales |
+------------------------------+
| 1st Quarter       |    79.9% |
+==============================+
+------------------------------+
(※ Proportion of overseas (outside of Japan)
sales to total sales)
`;

    console.log(printSectionQuarters)
  
    expect(test).toMatch(pythonOutput);
  });