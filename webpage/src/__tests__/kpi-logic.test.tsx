import { KPIQuarter } from "../utils/kpi-logic";

const proportionOfOverseasSales: KPIQuarter[] = [
    {
        name: " Proportion of overseas sales ",
        quarter: " 1st Quarter ",
        number: 79.9,
    },
    {
        name: " Proportion of overseas sales ",
        quarter: " 2nd Quarter ",
        number: 78.9,
    },
    {
        name: " Proportion of overseas sales ",
        quarter: " 3rd Quarter ",
        number: 77.9,
    },
    {
        name: " Proportion of overseas sales ",
        quarter: " 4th Quarter ",
        number: 76.9,
    },
]

const digitalSales: KPIQuarter[] = [
    {
        name: " Digital Sales ",
        quarter: " 1st Quarter ",
        number: 79.9,
    },
    {
        name: " Digital Sales ",
        quarter: " 2nd Quarter ",
        number: 78.9,
    },
    {
        name: " Digital Sales ",
        quarter: " 3rd Quarter ",
        number: 77.9,
    },
    {
        name: " Digital Sales ",
        quarter: " 4th Quarter ",
        number: 76.9,
    },
]

const currentQuarter = 4;

const printSectionQuarters = (sectionQuarter: KPIQuarter[], currentQuarter: number) => { // to use Net Sales Difference, Operating Income Difference or Net Profit Difference

    return sectionDifference.filter((elem, index) => index < currentQuarter).map((elem, index) => {

        let printSectionDifferenceYoY: string = (sectionYoY[index].quarter > 0) 
                                ? `+${sectionYoY[index].quarter}% `
                                : `${sectionYoY[index].quarter}% `;
        let printSectionYoYFixed: string = (printSectionDifferenceYoY.length >= 9)
                                ? printSectionDifferenceYoY
                                : " ".repeat(9 - printSectionDifferenceYoY.length) + printSectionDifferenceYoY
        //  let x = `${elem.quarter.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })}M ` // cannot use currency settings as it creates border misalignment due to ¥ becoming wider. 
        let printSection: string = `¥${elem.quarter.toLocaleString("en")}M `; // this setting allows use of thousands separator ","
        let printSectionFixed: string = (printSection.length === 14)
                                  ? printSection
                                  : " ".repeat(14 - printSection.length) + printSection;
        let printQuarterRow: string = `${rowQuartersApplied[index].quarter}`;  
        return "|" + printQuarterRow + "|" + printSectionFixed + "|" + printSectionYoYFixed + "|" // old note, used "\n" at end here: must affix a new line \n, was also affixing tabs \t to align but realised I could adjust the template literal 
    }).reduce((prev, next, index, array) => {
        return (array[index] === array[currentQuarter -1])
                  ? prev + `\n+${"-".repeat(38)}+\n` + next
                  : prev + `\n+${"-".repeat(38)}+\n` + next 
    })

};