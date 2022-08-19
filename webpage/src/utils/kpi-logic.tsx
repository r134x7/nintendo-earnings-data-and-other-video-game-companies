export type KPDIndicators = {
    category: "quarterly" | "cumulative", 
    units: "percentage" | "currency",
    quarter: string,
    value: number,
}

export type Header = {
    companyName: string,
    proportionOfOverseasSales: string,
    proportionOfHardwareSales: string,
    proportionOfFirstPartySoftwareSales: string,
    digitalSales: string,
    proportionOfDigitalSales: string,
    proportionOfDLverPackagedSoftware: string,
    fiscalYear: string,
    title: string,
}

export type Footer = {
    proportionOfOverseasSales: string,
    proportionOfHardwareSales: string,
    proportionOfFirstPartySoftwareSales: string,
    digitalSales: string,
    proportionOfDigitalSales: string,
    proportionOfDLverPackagedSoftware: string,
}

const printSectionQuarters = (sectionDifference: KPDIndicators[], currentQuarter: number) => { 

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
${header.proportionOfOverseasSales}
+${"-".repeat(30)}+
${printSectionQuarters(proportionOfOverseasSalesQtr, currentQuarter)}
+${(currentQuarter > 1) ? "=".repeat(30)+"+\n" + printSectionCumulative(proportionOfOverseasSalesCml, currentQuarter) : "=".repeat(30)+"+" }
+${"-".repeat(30)+"+"}
${footer.proportionOfOverseasSales}`;

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