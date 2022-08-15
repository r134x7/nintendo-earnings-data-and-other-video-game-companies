export interface KPIQuarter {
    quarter: string,
    value: number,
}

export interface KPICumulatives {
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

