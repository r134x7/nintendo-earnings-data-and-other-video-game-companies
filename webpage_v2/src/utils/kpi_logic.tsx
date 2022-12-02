export type KPDIndicators = {
    name: string,
    category: "quarterly" | "cumulative", 
    units: "percentage" | "currency" | "NaN",
    quarter: string,
    value: number,
    miscellaneous?: string,
}

export type Header = {
    companyName: string,
    section: "| Proportion of overseas sales |\n+--------------------------------------------------+\n|               Proportion |      Sales |    YoY%  |" | 
    "| Proportion of hardware sales |\n+--------------------------------------------------+\n|               Proportion |      Sales |    YoY%  |" | 
    "| Proportion of first party    |\n| software sales               |\n+--------------------------------------------------+\n|               Proportion |      Sales |    YoY%  |" | 
    "| Digital Sales                |\n+--------------------------------------------------+\n|                    Sales |      Sales |    YoY%  |" | 
    "| Proportion of Digital Sales  |\n+--------------------------------------------------+\n|               Proportion |      Sales |    YoY%  |" | 
    "| Proportion of downloadable   |\n| versions of Packaged         |\n| Software Sales               |\n+--------------------------------------------------+\n|               Proportion |      Sales |    YoY%  |" | "| Proportion of software sales |\n+--------------------------------------------------+\n|               Proportion |      Sales |    YoY%  |" | "| Proportion of physical software sales |\n+--------------------------------------------------+\n|               Proportion |      Sales |    YoY%  |",
    fiscalYear: string,
    title: string,
}

export type Footer = {
   section: "|(※ Proportion of overseas (outside of Japan)\n| sales to total sales)" | "|(※ Proportion of hardware\n|(including accessories) sales to total\n| dedicated video game platform sales)" | "|(※ Proportion of first-party software sales\n| to total dedicated video game software sales)" | "|(\"※ Digital sales include a) downloadable\n| versions of packaged software,\n|b) download-only software,\n|c) add-on content and\n|d) Nintendo Switch Online, etc.\n|＊\"Downloadable versions of packaged software\"\n| indicates the downloadable version of\n| software that is offered both physically\n| and digitally.\")" | "|(※ Proportion of digital sales to total\n| dedicated video game software sales )" | "|(※ Proportion of downloadable versions of\n| packaged software sales to total digital\n| sales as indicated above: a/(a+b+c+d) )" | "|(※ Proportion of software (including\n|digital sales) sales to total dedicated\n|video game platform sales)|" |  "|(※ Proportion of physical software sales\n|to total dedicated\n|video game platform software sales)|", 
}


export function quarterlyCalculation(quarters: KPDIndicators[]) {
        
    const calc: KPDIndicators[] = quarters.map((elem, index, array) => {
        return (index === 0) // 1st Quarter 
                ? elem
                : {...elem, value: elem.value - array[index-1].value}
    })
    
    return calc
}

export function yearOnYearCalculation(thisFY: KPDIndicators[], lastFY: KPDIndicators[]) {
// console.log(lastFY[0]);

        const calc: KPDIndicators[] = thisFY.map((elem, index) => {

            return (lastFY[index].value < 0)
                    ? {...elem, units: "percentage", value: Number(
                        ((((elem.value / lastFY[index].value) -1)* -1) * 100).toFixed(2)
                        )
                      }
                    : (lastFY[index].value === 0)
                    ? {...elem, units: "NaN", value: 0}
                    :{...elem, units: "percentage", value: Number(
                        (((elem.value / lastFY[index].value) -1) * 100).toFixed(2)
                        )
                      };
        })

       return calc
    }

const printNewSections = (proportionDifference: KPDIndicators[], sectionDifference: KPDIndicators[], yearOnYearValues: KPDIndicators[], currentQuarter: number): string => {

    let yoyPrint = yearOnYearValues.filter((elem, index) => { 
            return (elem.category === "quarterly")
                ? index < currentQuarter
                : currentQuarter >= 2 && index < currentQuarter -1         
    }).map((elem, index) => {

        if (elem.category === "quarterly") {
            // need to change any billions to millions
            
            let printSection: string = `${elem.value}% `; 

            let printSectionFixed: string = (printSection.length >= 10)
                                      ? printSection
                                      : " ".repeat(10 - printSection.length) + printSection;
            // return "|" + elem.quarter + "|" + printSectionFixed + "|"
            let objectReturn: {period: string, value: string} = {
                period: elem.quarter,
                value: printSectionFixed,
            }

            return objectReturn
        } else {

            let printSectionCml: string = `${elem.value}% `; 
    
                let printSectionCmlFixed: string = (printSectionCml.length >= 10)
                              ? printSectionCml
                              : " ".repeat(10 - printSectionCml.length) + printSectionCml;
            // return "|" + elem.quarter + "|" + printSectionCmlFixed + "|"
            let objectReturn = {
                period: elem.quarter,
                value: printSectionCmlFixed
            }

            return objectReturn
        }
    })

    let salesPrint = sectionDifference.filter((elem, index) => { 
            return (elem.category === "quarterly")
                ? index < currentQuarter
                : currentQuarter >= 2 && index < currentQuarter -1         
    }).map((elem, index) => {

        if (elem.category === "quarterly") {
            // need to change any billions to millions
            
            let printSection: string = (elem.units === "currency") 
                ? `¥${elem.value.toLocaleString("en")}M `
                : `${elem.value}% `; 
            let printSectionFixed: string = (printSection.length >= 12)
                                      ? printSection
                                      : " ".repeat(12 - printSection.length) + printSection;
            // return "|" + elem.quarter + "|" + printSectionFixed + "|"
            let objectReturn: {period: string, value: string} = {
                period: elem.quarter,
                value: printSectionFixed,
            }

            return objectReturn
        } else {

            let printSectionCml: string = (elem.units === "currency") 
                ? `¥${elem.value.toLocaleString("en")}M `
                : `${elem.value}% `; 
    
                let printSectionCmlFixed: string = (printSectionCml.length >= 12)
                              ? printSectionCml
                              : " ".repeat(12 - printSectionCml.length) + printSectionCml;
            // return "|" + elem.quarter + "|" + printSectionCmlFixed + "|"
            let objectReturn = {
                period: elem.quarter,
                value: printSectionCmlFixed
            }

            return objectReturn
        }
    })

    let proportionPrint = proportionDifference.filter((elem, index) => { 
            return (elem.category === "quarterly")
                ? index < currentQuarter
                : currentQuarter >= 2 && index < currentQuarter -1         
    }).map((elem, index) => {

        if (elem.category === "quarterly") {
            
            let printSection: string = (elem.units === "currency") 
                ? `¥${elem.value}B `
                : `${elem.value}% `; 
            let printSectionFixed: string = (printSection.length >= 10)
                                      ? printSection
                                      : " ".repeat(10 - printSection.length) + printSection;
            
            let objectReturn: {period: string, value: string} = {
                period: elem.quarter,
                value: printSectionFixed
            }

            return objectReturn
            // return "|" + elem.quarter + "|" + printSectionFixed + "|"
        } else {

            let printSectionCml: string = (elem.units === "currency") 
                ? `¥${elem.value}B `
                : `${elem.value}% `; 
    
                let printSectionCmlFixed: string = (printSectionCml.length >= 10)
                              ? printSectionCml
                              : " ".repeat(10 - printSectionCml.length) + printSectionCml;

            
            let objectReturn: {period: string, value: string} = {
                period: elem.quarter,
                value: printSectionCmlFixed
            }

            return objectReturn
            // return "|" + elem.quarter + "|" + printSectionCmlFixed + "|"
        }
    })

    let printAll = Array.from({length: salesPrint.length}, (v, i) => {

        return (!proportionPrint[i]) 
            ? "|" + salesPrint[i].period + "|" + salesPrint[i].value + "|" + yoyPrint[i].value + "|"
            : "|" + salesPrint[i].period + "|" + proportionPrint[i].value + "|" + salesPrint[i].value + "|" + yoyPrint[i].value + "|"  
    });

    let printAllReduce = printAll.reduce((prev, next, index, array) => {

        if (sectionDifference[index].category === "quarterly" ) {
            
            return (array[index] === array[currentQuarter -1])
                      ? prev + `\n` + next
                      : prev + `\n` + next 
        } else {

            return (array[index] === array[currentQuarter -2])
                    ? prev + `\n` + next 
                    : prev + `\n` + next 
        }
    })
    
    return printAllReduce

};

const printSections = (sectionDifference: KPDIndicators[], currentQuarter: number) => { 

    return sectionDifference.filter((elem, index) => { 
            return (elem.category === "quarterly")
                ? index < currentQuarter
                : currentQuarter >= 2 && index < currentQuarter -1         
    }).map((elem, index) => {

        if (elem.category === "quarterly") {
            
            let printSection: string = (elem.units === "currency") 
                ? `¥${elem.value}B `
                : `${elem.value}% `; 
            let printSectionFixed: string = (printSection.length >= 10)
                                      ? printSection
                                      : " ".repeat(10 - printSection.length) + printSection;
            return "|" + elem.quarter + "|" + printSectionFixed + "|"
        } else {

            let printSectionCml: string = (elem.units === "currency") 
                ? `¥${elem.value}B `
                : `${elem.value}% `; 
    
                let printSectionCmlFixed: string = (printSectionCml.length >= 10)
                              ? printSectionCml
                              : " ".repeat(10 - printSectionCml.length) + printSectionCml;
            return "|" + elem.quarter + "|" + printSectionCmlFixed + "|"
        }
    }).reduce((prev, next, index, array) => {

        if (sectionDifference[index].category === "quarterly" ) {
            
            return (array[index] === array[currentQuarter -1])
                      ? prev + `\n` + next
                      : prev + `\n` + next 
        } else {

            return (array[index] === array[currentQuarter -2])
                    ? prev + `\n` + next 
                    : prev + `\n` + next 
        }
    })

};

// const printSectionCumulative = (sectionCumulative: KPICumulative[], currentQuarter: number) => { 
    
//     return  sectionCumulative.filter((elem, index) => (currentQuarter >= 2 && index < currentQuarter -1)).map((elem, index) => {
    
//     let printSectionCml: string = (elem.type === "currency") 
//         ? `¥${elem.value}B `
//         : `${elem.value}% `; 
//     let printSectionCmlFixed: string = (printSectionCml.length >= 10)
//                               ? printSectionCml
//                               : " ".repeat(10 - printSectionCml.length) + printSectionCml;
//     return "|" + elem.quarter + "|" + printSectionCmlFixed + "|"
//     }).reduce((prev, next, index, array) => {
//     return (array[index] === array[currentQuarter -2])
//             ? prev + `\n` + next 
//             : prev + `\n` + next 
//   })
// };

export const printHead = (header: Header) => 
`+${"-".repeat(30)}+
|${header.companyName}${header.fiscalYear}
+${"-".repeat(30)}+
${header.title}
+${"-".repeat(30)}+`;

export const printBody = (header: Header, footer: Footer, quarter: KPDIndicators[], cumulative: KPDIndicators[], currentQuarter: number) => 
`+${"-".repeat(30)}+
${header.section}
+${"-".repeat(30)}+
${printSections(quarter, currentQuarter)}
+${(currentQuarter > 1) ? "=".repeat(30)+"+\n" + printSections(cumulative, currentQuarter) : "=".repeat(30)+"+" }
+${"-".repeat(30)+"+"}
${footer.section}`;

export const printNewBody = (header: Header, footer: Footer, quarterProportion: KPDIndicators[], cumulativeProportion: KPDIndicators[], quarterSales: KPDIndicators[], cumulativeSales: KPDIndicators[], quarterYoY: KPDIndicators[], cumulativeYoY: KPDIndicators[], currentQuarter: number) =>
`+${"-".repeat(30)}+
${header.section}
+${"-".repeat(30)}+
${printNewSections(quarterProportion, quarterSales, quarterYoY, currentQuarter)}
+${(currentQuarter > 1) ? "=".repeat(30)+"+\n" + printNewSections(cumulativeProportion, cumulativeSales, cumulativeYoY, currentQuarter) : "=".repeat(30)+"+" }
+${"-".repeat(30)+"+"}
${footer.section}`;

// export const printProportionOfOverseasSales = (header: Header, footer: Footer, proportionOfOverseasSalesQtr: KPIQuarter[], proportionOfOverseasSalesCml: KPICumulative[], currentQuarter: number) => 
// `+${"-".repeat(30)}+
// ${header.proportionOfOverseasSales}
// +${"-".repeat(30)}+
// ${printSectionQuarters(proportionOfOverseasSalesQtr, currentQuarter)}
// +${(currentQuarter > 1) ? "=".repeat(30)+"+\n" + printSectionCumulative(proportionOfOverseasSalesCml, currentQuarter) : "=".repeat(30)+"+" }
// +${"-".repeat(30)+"+"}
// ${footer.proportionOfOverseasSales}`;

// export const printProportionOfHardwareSales = (header: Header, footer: Footer, proportionOfHardwareSalesQtr: KPIQuarter[], proportionOfHardwareSalesCml: KPICumulative[], currentQuarter: number) => 
// `+${"-".repeat(30)}+
// ${header.proportionOfHardwareSales}
// +${"-".repeat(30)}+
// ${printSectionQuarters(proportionOfHardwareSalesQtr, currentQuarter)}
// +${(currentQuarter > 1) ? "=".repeat(30)+"+\n" + printSectionCumulative(proportionOfHardwareSalesCml, currentQuarter) : "=".repeat(30)+"+" }
// +${"-".repeat(30)+"+"}
// ${footer.proportionOfHardwareSales}`;

// export const printProportionOfFirstPartySoftwareSales = (header: Header, footer: Footer, proportionOfFirstPartySoftwareSalesQtr: KPIQuarter[], proportionOfFirstPartySoftwareSalesCml: KPICumulative[], currentQuarter: number) => 
// `+${"-".repeat(30)}+
// ${header.proportionOfFirstPartySoftwareSales}
// +${"-".repeat(30)}+
// ${printSectionQuarters(proportionOfFirstPartySoftwareSalesQtr, currentQuarter)}
// +${(currentQuarter > 1) ? "=".repeat(30)+"+\n" + printSectionCumulative(proportionOfFirstPartySoftwareSalesCml, currentQuarter) : "=".repeat(30)+"+" }
// +${"-".repeat(30)+"+"}
// ${footer.proportionOfFirstPartySoftwareSales}`;

// export const printDigitalSales = (header: Header, footer: Footer, digitalSalesQtr: KPIQuarter[], digitalSalesCml: KPICumulative[], currentQuarter: number) => 
// `+${"-".repeat(30)}+
// ${header.digitalSales}
// +${"-".repeat(30)}+
// ${printSectionQuarters(digitalSalesQtr, currentQuarter)}
// +${(currentQuarter > 1) ? "=".repeat(30)+"+\n" + printSectionCumulative(digitalSalesCml, currentQuarter) : "=".repeat(30)+"+" }
// +${"-".repeat(30)+"+"}
// ${footer.digitalSales}`;

// export const printProportionOfDigitalSales = (header: Header, footer: Footer, proportionOfDigitalSalesQtr: KPIQuarter[], proportionOfDigitalSalesCml: KPICumulative[], currentQuarter: number) => 
// `+${"-".repeat(30)}+
// ${header.proportionOfDigitalSales}
// +${"-".repeat(30)}+
// ${printSectionQuarters(proportionOfDigitalSalesQtr, currentQuarter)}
// +${(currentQuarter > 1) ? "=".repeat(30)+"+\n" + printSectionCumulative(proportionOfDigitalSalesCml, currentQuarter) : "=".repeat(30)+"+" }
// +${"-".repeat(30)+"+"}
// ${footer.proportionOfDigitalSales}`;

// export const printProportionOfDLverPackagedSoftware = (header: Header, footer: Footer, proportionOfDLverPackagedSoftwareQtr: KPIQuarter[], proportionOfDLverPackagedSoftwareCml: KPICumulative[], currentQuarter: number) => 
// `+${"-".repeat(30)}+
// ${header.proportionOfDLverPackagedSoftware}
// +${"-".repeat(30)}+
// ${printSectionQuarters(proportionOfDLverPackagedSoftwareQtr, currentQuarter)}
// +${(currentQuarter > 1) ? "=".repeat(30)+"+\n" + printSectionCumulative(proportionOfDLverPackagedSoftwareCml, currentQuarter) : "=".repeat(30)+"+" }
// +${"-".repeat(30)+"+"}
// ${footer.proportionOfDLverPackagedSoftware}`;