export interface KPIQuarter {
    name: string,
    quarter: string,
    number: number,
    footer: string,
}

export interface KPICumulatives {
    name: string,
    quarter: string,
    number: number,
    footer: string,
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

}

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