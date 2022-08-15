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
    proportionOfOverseasSales: string,
    proportionOfHardwareSales: string,
    proportionOfFirstPartySoftwareSales: string,
    digitalSales: string,
    proportionOfDigitalSales: string,
    proportionOfDLverPackagedSoftware: string,
}

const footer: Footer = {
    proportionOfOverseasSales: "|(※ Proportion of overseas (outside of Japan)\n| sales to total sales)",
    proportionOfHardwareSales: "|(※ Proportion of hardware  \n|(including accessories) sales to total \n| dedicated video game platform sales)",
    proportionOfFirstPartySoftwareSales: "|(※ Proportion of first-party software sales\n| to total dedicated video game software sales)",
    digitalSales: "|(\"※ Digital sales include a) downloadable \n| versions of packaged software, \n|b) download-only software,\n|c) add-on content and \n|d) Nintendo Switch Online, etc. \n＊\"Downloadable versions of packaged software\"\n| indicates the downloadable version of\n| software that is offered both physically\n and digitally.\")",
    proportionOfDigitalSales: "|(※ Proportion of digital sales to total\n| dedicated video game software sales )",
    proportionOfDLverPackagedSoftware: "|(※ Proportion of downloadable versions of \n| packaged software sales to total digital \n| sales as indicated above: a/(a+b+c+d) )",
}

