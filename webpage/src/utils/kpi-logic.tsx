export interface KPIQuarter {
    type: "percentage" | "currency",
    quarter: string,
    value: number,
}

export interface KPICumulative {
    type: "percentage" | "currency",
    quarter: string,
    value: number,
}

export interface Header {
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

export interface Footer {
    proportionOfOverseasSales: string,
    proportionOfHardwareSales: string,
    proportionOfFirstPartySoftwareSales: string,
    digitalSales: string,
    proportionOfDigitalSales: string,
    proportionOfDLverPackagedSoftware: string,
}

const printSectionQuarters = (sectionQuarter: KPIQuarter[], currentQuarter: number) => { 

    return sectionQuarter.filter((elem, index) => index < currentQuarter).map((elem, index) => {

        let printSection: string = (elem.type === "currency") 
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