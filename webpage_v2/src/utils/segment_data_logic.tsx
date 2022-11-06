export type Section = {
    region: " Group Total " | " Japan " | " Americas " | " Europe ",
    units: "units" | "percentage" | "currency" | "NaN" ,
    period: " 1st Quarter " | " 2nd Quarter " | " 3rd Quarter " | " 4th Quarter " | " Last FY Cumulative ",
    cmlPeriod: " 1st Quarter " | " First Half  " | " 1st 3 Qtrs  " | "Cml. ",
    name: string,
    value: number,
}

export type Header = {
    firstHeader: "| Bandai Namco   |" | "| Capcom         |" | "| Sega Sammy     |" | "| Koei Tecmo     |" | "| Square Enix    |",
    secondHeader: "| Segment Information |",
    fiscalYear: string,
}

export const undefinedData: Section[] = [
    {
        name: "undefined",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "NaN",
        value: 0, 
    },
    {
        name: "undefined",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "NaN",
        value: 0, 
    },
    {
        name: "undefined",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "NaN",
        value: 0, 
    },
    {
        name: "undefined",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "NaN",
        value: 0, 
    },
] 


const printHead = (header: Header) => 
`+${"-".repeat(27)}+
${header.firstHeader}${header.fiscalYear}|
+${"-".repeat(27)}+
${header.secondHeader}
+${"-".repeat(21)}+`;

function quarterlyCalculation(quarters: Section[]) {
        
    const calc: Section[] = quarters.map((elem, index, array) => {
        return (index === 0) // 1st Quarter or last FY number
                ? elem
                : {...elem, value: elem.value - array[index-1].value}
    })
    
    return calc
};

function yearOnYearCalculation(segmentThisFY: Section[], segmentLastFY: Section[]): Section[] {

    // const [thisFY, lastFY] = segment.filter(elem => elem.cmlPeriod === "Cml. ")

    const calc: Section[] = segmentThisFY.map((elem, index, array) => {

        return (segmentLastFY[index].value < 0)
                ? {...elem, units: "percentage", value: Number(
                    ((((elem.value / segmentLastFY[index].value) -1)* -1) * 100).toFixed(2)
                    )}
                : (segmentLastFY[index].value === 0)
                ? {...elem, units: "NaN", value: 0}
                :{...elem, units: "percentage", value: Number(
                    (((elem.value / segmentLastFY[index].value) -1) * 100).toFixed(2)
                    )}; // .toFixed(2) to round the number by two decimal points regardless of Number will output a string, whole thing needs to be wrapped in Number to change type back from string to number  
    })

    return calc

}

const printSalesHeaderSquareEnixHD = (): string => {

let x =
`+-----------------------+
| Digital Entertainment |
+-----------------------+
+---------------------------+
| HD Games    |    Sales    |
+---------------------------+`
    return x
};

const printSalesHeaderSquareEnixMMO = (): string => {

let x =
`+---------------------------+
| MMO         |    Sales    |
+---------------------------+`
    return x
};

const printSalesHeaderKoeiTecmo = (): string => {

let x =
`+-------------+
| Console     |-------------+
| Package & DL|    Sales    |
+---------------------------+`
    return x
};

const printSalesHeaderBandaiNamco = (): string => {

let x =
`+-------------+
| Home        |-------------+
| Video Game  |    Sales    |
+---------------------------+`
    return x
};

const printSalesHeaderSega = (): string => {

let x =
`+-------------+
|             |-------------+
| Full Games  |    Sales    |
+---------------------------+`
    return x
};

const printSalesHeaderCapcom = (): string => {

let x =
`+-------------+
| Consumer    |------------------------+
| Total       | Net Sales   |   YoY%   |
+--------------------------------------+`
    return x
};

const printSalesHeaderCapcomPhysical = (): string => {

let x =
`+-------------+
| Package     |------------------------+
| Total       | Net Sales   |   YoY%   |
+--------------------------------------+`
    return x
};

const printSalesHeaderCapcomDigital = (): string => {

let x =
`+-------------+
| Digital     |------------------------+
| Total       | Net Sales   |   YoY%   |
+--------------------------------------+`
    return x
};

const printSalesPerUnitHeaderSquareEnix = (): string => {

let x =
`|*MMO sales includes subscriptions
|**Sales might include:
| - Downloadable content purchases 
+====================================+
| Digital Ent.| Sales Per | Software |
| HD Games    |  Software |    Units |
| & MMO Total |      Unit |          |
+------------------------------------+`

    return x
}

const printSalesPerUnitHeaderKoeiTecmo = (): string => {

let x =
`|*Sales does not include:
| - Downloadable content purchases 
+====================================+
| Console     | Sales Per | Software |
| Package & DL|  Software |    Units |
| Total       |      Unit |          |
+------------------------------------+`

    return x
}

const printSalesPerUnitHeaderCapcom = (): string => {

let x =
`|*Sales includes:
| - Downloadable content purchases
+====================================+
| Consumer    | Sales Per | Software |
| Total/Total |  Software |    Units |
| Unit Sales  |      Unit |          |
+------------------------------------+`

    return x
}

const printSalesPerUnitHeaderCapcomPhysical = (): string => {

let x =
`+====================================+
| Package     | Sales Per | Software |
|Total/Package|  Software |    Units |
| Unit Sales  |      Unit |          |
+------------------------------------+`

    return x
}

const printSalesPerUnitHeaderCapcomDigital = (): string => {

let x =
`|*Sales includes:
| - Downloadable content purchases
+====================================+
| Digital     | Sales Per | Software |
|Total/Digital|  Software |    Units |
| Unit Sales  |      Unit |          |
+------------------------------------+`

    return x
}

const printSalesPerUnitHeaderSega = (): string => {

let x =
`|*Sales might include:
| - Downloadable content purchases 
+====================================+
|             | Sales Per | Software |
| Full Games  |  Software |    Units |
| Total       |      Unit |          |
+------------------------------------+`

    return x
}

const printSalesPerUnitHeaderBandaiNamco = (): string => {

let x =
`|*Sales might include:
| - Downloadable content purchases
+====================================+
| Home        | Sales Per | Software |
| Video Game  |  Software |    Units |
| Group Total |      Unit |          |
+------------------------------------+`

    return x
}

const printQtrSales = (segmentSales: Section[], segmentSalesLastFY: Section[], header: Header, currentQuarter: number): string[] => {

    const quarters = quarterlyCalculation(segmentSales);
    const quartersLastFY = quarterlyCalculation(segmentSalesLastFY);
    
    const yoyQuarters = printYoYSales(quarters, quartersLastFY)

        const sales = quarters.filter((elem, index, array) => {
            return index < currentQuarter && array[index].value !== 0
        }).map((elem, index, array) => {
            // values given are Billion yen, changing to Million yen
            let printSection: string = `¥${(elem.value * 1000).toLocaleString("en")}M `

            let printSectionFixed: string = (printSection.length >= 13)
                ? printSection
                : " ".repeat(13 - printSection.length) + printSection;
            
            let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX

            let printPeriod: string = elem.period;

           let printLine: string = (array[index] === array.at(-1))
                ? "\n+" + "=".repeat(38) + "+"
                : "\n+" + "-".repeat(38) + "+"
            
            return "|" + printPeriod + "|" + printSectionFixed + "|" + yoyQuarters[index] + "|" + printLine  
        })

        return sales

};

const printCmlSales = (segmentSales: Section[], segmentSalesLastFY: Section[], header: Header, currentQuarter: number): string[] => {

    const yoyCml = printYoYSales(segmentSales, segmentSalesLastFY).filter((elem, index) => index !== 0); // remove first quarter for cumulatives

        const sales = segmentSales.filter((elem, index, array) => {
            return index !== 0 && index < currentQuarter && array[index].value !== 0
        }).map((elem, index, array) => {
            // values given are Billion yen, changing to Million yen
            let printSection: string = `¥${(elem.value * 1000).toLocaleString("en")}M `

            let printSectionFixed: string = (printSection.length >= 13)
                ? printSection
                : " ".repeat(13 - printSection.length) + printSection;
            
            let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX

            let printPeriod: string = (currentQuarter === 4 && array[index] === array.at(-1))
                    ? `${shortFY}${elem.cmlPeriod}`
                    : elem.cmlPeriod

        //    let printLine: string = (array[index] === array.at(-1))
        //         ? "\n+" + "=".repeat(27) + "+"
        //         : "\n+" + "-".repeat(27) + "+"
            
           let printLine: string = "\n+" + "-".repeat(38) + "+";

            return "|" + printPeriod + "|" + printSectionFixed + "|" + yoyCml[index] + "|" + printLine  
        })

        return sales

};

// const printYoYSales = (segmentSales: Section[], segmentSalesLastFY: Section[], header: Header, currentQuarter: number): string[] => {
const printYoYSales = (segmentSales: Section[], segmentSalesLastFY: Section[]): string[] => {

    const yoy = yearOnYearCalculation(segmentSales, segmentSalesLastFY);

    let printSection: string[] = yoy.map((elem) => {

        return (elem.value > 0)
                   ? `+${(elem.value)}% `
                   : `${(elem.value)}% `
    })

    let printSectionFixed: string[] = printSection.map((elem) => {
        return (elem.length >= 10) // changed from 13
            ? elem 
            : " ".repeat(10 - elem.length) + elem;
    }) 

    return printSectionFixed
            
    // let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX

    // let printPeriod: string = `${shortFY}${yoy.cmlPeriod}`

    // let printPeriod: string = ` ${yoy[yoy.length-1].cmlPeriod}YoY%   `;
            
    // let printLine: string = "\n+" + "-".repeat(27) + "+";

    // return "|" + printPeriod + "|" + printSectionFixed + "|" + printLine  

};

// const printYoYSales = (segmentSales: Section[], header: Header, currentQuarter: number): string => {

//     const yoy = yearOnYearCalculation(segmentSales);

//     let printSection: string = (yoy.value > 0)
//             ? `+${(yoy.value)}% `
//             : `${(yoy.value)}% `

//     let printSectionFixed: string = (printSection.length >= 13)
//         ? printSection
//         : " ".repeat(13 - printSection.length) + printSection;
            
//     let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX

//     // let printPeriod: string = `${shortFY}${yoy.cmlPeriod}`

//     let printPeriod: string = ` ${yoy.cmlPeriod}YoY%   `;
            
//     let printLine: string = "\n+" + "-".repeat(27) + "+";

//     return "|" + printPeriod + "|" + printSectionFixed + "|" + printLine  

// };

const printQtrSalesPerSWUnit = (segmentSales: Section[], segmentUnits: Section[], header: Header, currentQuarter: number): string[] => {

    const salesQuarters = quarterlyCalculation(segmentSales);
    const salesUnits = quarterlyCalculation(segmentUnits); 

        const salesPerSoftwareUnit = salesQuarters.filter((elem, index, array) => {
            return index < currentQuarter && array[index].value !== 0
        }).map((elem, index, array) => { 
            // sales has to be converted from billion yen to million yen. units has to be converted from thousands to millions
            let calculateSalesPerSoftware: number = Number(((elem.value * 1000) / (salesUnits[index].value / 1000)).toFixed(0))

            let printsegmentSalesPerSoftware: string = `¥${calculateSalesPerSoftware.toLocaleString("en")} `
            
            let printsegmentSalesPerSoftwareFixed: string = (printsegmentSalesPerSoftware.length >= 11)
                ? printsegmentSalesPerSoftware
                : " ".repeat(11 - printsegmentSalesPerSoftware.length) + printsegmentSalesPerSoftware;
            
            let printSoftwareUnits: string = `${salesUnits[index].value / 1000}M `

            // let printSoftwareUnits: string = `${segmentUnits[index].value.toLocaleString("en")}k `
            let printSoftwareUnitsFixed: string = (printSoftwareUnits.length >= 10)
                    ? printSoftwareUnits
                    : " ".repeat(10 - printSoftwareUnits.length) + printSoftwareUnits 

            let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX

            let printPeriod: string = elem.period;

           let printLine: string = (array[index] === array.at(-1))
                ? "\n+" + "=".repeat(36) + "+"
                : "\n+" + "-".repeat(36) + "+"

            return "|" + printPeriod + "|" + printsegmentSalesPerSoftwareFixed + "|" + printSoftwareUnitsFixed + "|" + printLine
        })

        return salesPerSoftwareUnit
}


const printCmlSalesPerSWUnit = (segmentSales: Section[], segmentUnits: Section[], header: Header, currentQuarter: number): string[] => {

        const salesPerSoftwareUnit = segmentSales.filter((elem, index, array) => {
            return index !== 0 && index < currentQuarter && array[index].value !== 0
        }).map((elem, index, array) => { 
            // sales has to be converted from billion yen to million yen. units has to be converted from thousands to millions
            let calculateSalesPerSoftware: number = Number(((elem.value * 1000) / (segmentUnits[index+1].value / 1000)).toFixed(0))

            let printsegmentSalesPerSoftware: string = `¥${calculateSalesPerSoftware.toLocaleString("en")} `
            
            let printsegmentSalesPerSoftwareFixed: string = (printsegmentSalesPerSoftware.length >= 11)
                ? printsegmentSalesPerSoftware
                : " ".repeat(11 - printsegmentSalesPerSoftware.length) + printsegmentSalesPerSoftware;
            
            let printSoftwareUnits: string = `${segmentUnits[index+1].value / 1000}M `

            // let printSoftwareUnits: string = `${segmentUnits[index].value.toLocaleString("en")}k `
            let printSoftwareUnitsFixed: string = (printSoftwareUnits.length >= 10)
                    ? printSoftwareUnits
                    : " ".repeat(10 - printSoftwareUnits.length) + printSoftwareUnits 

            let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX

            let printPeriod: string = (currentQuarter === 4 && array[index] === array.at(-1))
                    ? `${shortFY}${elem.cmlPeriod}`
                    : elem.cmlPeriod

        //    let printLine: string = (array[index] === array.at(-1))
        //         ? "\n+" + "=".repeat(36) + "+"
        //         : "\n+" + "-".repeat(36) + "+"
            
        let printLine: string = "\n+" + "-".repeat(36) + "+";

            return "|" + printPeriod + "|" + printsegmentSalesPerSoftwareFixed + "|" + printSoftwareUnitsFixed + "|" + printLine
        })

        return salesPerSoftwareUnit
};

const printYoYSalesPerSoftwareUnit = (segmentSales: Section[], segmentSalesLastFY: Section[], segmentUnits: Section[], segmentUnitsLastFY: Section[], header: Header, currentQuarter: number): string[] => {

    // const filterUnits = segmentUnits.filter(elem => elem.cmlPeriod === "Cml. ");

    // const filterSales: Section[] = segmentSales.filter(elem => elem.cmlPeriod === "Cml. ").map((elem, index, array) => {

    //     return {...elem, value: Number(((elem.value * 1000) / (filterUnits[index].value / 1000)).toFixed(0))} 
    // });

    const salesPerUnitThisFY: Section[] = segmentSales.map((elem, index, array) => {

        return {...elem, value: Number(((elem.value * 1000) / (segmentUnits[index].value / 1000)).toFixed(0))} 
    });

    const salesPerUnitLastFY: Section[] = segmentSalesLastFY.map((elem, index, array) => {

        return {...elem, value: Number(((elem.value * 1000) / (segmentUnitsLastFY[index].value / 1000)).toFixed(0))} 
    });

    const yoySalesPerUnit = yearOnYearCalculation(salesPerUnitThisFY, salesPerUnitLastFY);  

    const yoyUnits = yearOnYearCalculation(segmentUnits, segmentUnitsLastFY);


    let printSalesPerUnitYoY: string[] = yoySalesPerUnit.map((elem) => {
        return (elem.value > 0)
                    ? `+${(elem.value)}% `
                    : `${(elem.value)}% `

    }) 

    let printUnitsYoY: string[] = yoyUnits.map((elem) => {
        return (elem.value > 0)
                    ? `+${(elem.value)}% `
                    : `${(elem.value)}% `
    }) 

    let printSalesFixed: string[] = printSalesPerUnitYoY.map((elem) => {
        return (elem.length >= 11)
                ? elem 
                : " ".repeat(11 - elem.length) + elem;
    }) 

    let printUnitsFixed: string[] = printUnitsYoY.map((elem) => {
        return (elem.length >= 10)
                    ? elem 
                    : " ".repeat(10 - elem.length) + elem;
    }) 

    let printLine: string = "\n+" + "-".repeat(36) + "+";

    // let printPeriod: string = ` ${yoySalesPerUnit.cmlPeriod}YoY%   `;

    // return "|" + printPeriod + "|" + printSalesFixed + "|" + printUnitsFixed + "|" + printLine
    let printArray: string[] = yoySalesPerUnit.map((elem, index) => {

        let printPeriod: string = ` ${elem.period}YoY%   `;

        return "|" + printPeriod + "|" + printSalesFixed[index] + "|" + printUnitsFixed[index] + "|" + printLine
    }) 

    return printArray 
}

export const SegaPrint = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {
    
    const head = printHead(header);

    const salesDataBlock = (currentQuarter === 4)
        ? [
        printSalesHeaderSega(),
        ...printQtrSales(salesData, salesDataLastFY, header, currentQuarter),
        ...printCmlSales(salesData, salesDataLastFY, header, currentQuarter),
        ]
        : [
        printSalesHeaderSega(),
        ...printQtrSales(salesData, salesDataLastFY, header, currentQuarter),
        ...printCmlSales(salesData, salesDataLastFY, header, currentQuarter),
        ];

    const salesUnitsBlock = (currentQuarter === 4)
        ? [
        printSalesPerUnitHeaderSega(),
        ...printQtrSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        printYoYSalesPerSoftwareUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ]
        : [
        printSalesPerUnitHeaderSega(),
        ...printQtrSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        ]; 

    return [head, ...salesDataBlock, ...salesUnitsBlock].reduce((prev, next) => prev + "\n" + next); 

}

export const BandaiNamcoPrint = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {
    
    const head = printHead(header);

    const salesDataBlock = (currentQuarter === 4)
        ? [
        printSalesHeaderBandaiNamco(),
        ...printQtrSales(salesData, salesDataLastFY, header, currentQuarter),
        ...printCmlSales(salesData, salesDataLastFY, header, currentQuarter),
        ]
        : [
        printSalesHeaderBandaiNamco(),
        ...printQtrSales(salesData, salesDataLastFY, header, currentQuarter),
        ...printCmlSales(salesData, salesDataLastFY, header, currentQuarter),
        ];

    const salesUnitsBlock = (currentQuarter === 4)
        ? [
        printSalesPerUnitHeaderBandaiNamco(),
        ...printQtrSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        printYoYSalesPerSoftwareUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ]
        : [
        printSalesPerUnitHeaderBandaiNamco(),
        ...printQtrSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        ]; 

    return [head, ...salesDataBlock, ...salesUnitsBlock].reduce((prev, next) => prev + "\n" + next); 

}

export const CapcomPrint = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {
    
    const head = printHead(header);

    const salesDataBlock = (currentQuarter === 4)
        ? [
        printSalesHeaderCapcom(),
        ...printQtrSales(salesData, salesDataLastFY, header, currentQuarter),
        ...printCmlSales(salesData, salesDataLastFY, header, currentQuarter),
        ]
        : [
        printSalesHeaderCapcom(),
        ...printQtrSales(salesData, salesDataLastFY, header, currentQuarter),
        ...printCmlSales(salesData, salesDataLastFY, header, currentQuarter),
        ];

    const salesUnitsBlock = (currentQuarter === 4)
        ? [
        printSalesPerUnitHeaderCapcom(),
        ...printQtrSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        printYoYSalesPerSoftwareUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ]
        : [
        printSalesPerUnitHeaderCapcom(),
        ...printQtrSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        ]; 

    return [head, ...salesDataBlock, ...salesUnitsBlock].reduce((prev, next) => prev + "\n" + next); 

}

export const CapcomPrintPhysical = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {

    const salesDataBlock = (currentQuarter === 4)
        ? [
        printSalesHeaderCapcomPhysical(),
        ...printQtrSales(salesData, salesDataLastFY, header, currentQuarter),
        ...printCmlSales(salesData, salesDataLastFY, header, currentQuarter),
        ]
        : [
        printSalesHeaderCapcomPhysical(),
        ...printQtrSales(salesData, salesDataLastFY, header, currentQuarter),
        ...printCmlSales(salesData, salesDataLastFY, header, currentQuarter),
        ];

    const salesUnitsBlock = (currentQuarter === 4)
        ? [
        printSalesPerUnitHeaderCapcomPhysical(),
        ...printQtrSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        printYoYSalesPerSoftwareUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ]
        : [
        printSalesPerUnitHeaderCapcomPhysical(),
        ...printQtrSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        ]; 

    return [...salesDataBlock, ...salesUnitsBlock].reduce((prev, next) => prev + "\n" + next); 

}

export const CapcomPrintDigital = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {

    const salesDataBlock = (currentQuarter === 4)
        ? [
        printSalesHeaderCapcomDigital(),
        ...printQtrSales(salesData, salesDataLastFY, header, currentQuarter),
        ...printCmlSales(salesData, salesDataLastFY, header, currentQuarter),
        ]
        : [
        printSalesHeaderCapcomDigital(),
        ...printQtrSales(salesData, salesDataLastFY, header, currentQuarter),
        ...printCmlSales(salesData, salesDataLastFY, header, currentQuarter),
        ];

    const salesUnitsBlock = (currentQuarter === 4)
        ? [
        printSalesPerUnitHeaderCapcomDigital(),
        ...printQtrSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        printYoYSalesPerSoftwareUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ]
        : [
        printSalesPerUnitHeaderCapcomDigital(),
        ...printQtrSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        ]; 

    return [...salesDataBlock, ...salesUnitsBlock].reduce((prev, next) => prev + "\n" + next); 

}

export const KoeiTecmoPrint = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {
    
    const head = printHead(header);

    const salesDataBlock = (currentQuarter === 4)
        ? [
        printSalesHeaderKoeiTecmo(),
        ...printQtrSales(salesData, salesDataLastFY, header, currentQuarter),
        ...printCmlSales(salesData, salesDataLastFY, header, currentQuarter),
        ]
        : [
        printSalesHeaderKoeiTecmo(),
        ...printQtrSales(salesData, salesDataLastFY, header, currentQuarter),
        ...printCmlSales(salesData, salesDataLastFY, header, currentQuarter),
        ];

    const salesUnitsBlock = (currentQuarter === 4)
        ? [
        printSalesPerUnitHeaderKoeiTecmo(),
        ...printQtrSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        printYoYSalesPerSoftwareUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ]
        : [
        printSalesPerUnitHeaderKoeiTecmo(),
        ...printQtrSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        ]; 

    return [head, ...salesDataBlock, ...salesUnitsBlock].reduce((prev, next) => prev + "\n" + next); 

}

export const SquareEnixPrint = (salesHDGames: Section[], salesHDGamesLastFY: Section[], salesMMO: Section[], salesMMOLastFY: Section[], salesHDandMMO: Section[], salesHDandMMOLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {
    
    const head = printHead(header);

    const salesDataBlock = [
            printSalesHeaderSquareEnixHD(),
            ...printQtrSales(salesHDGames, salesHDGamesLastFY, header, currentQuarter),
            ...printCmlSales(salesHDGames, salesHDGamesLastFY, header, currentQuarter),
            printSalesHeaderSquareEnixMMO(),
            ...printQtrSales(salesMMO, salesMMOLastFY, header, currentQuarter),
            ...printCmlSales(salesMMO, salesHDGamesLastFY, header, currentQuarter),
        ];

    const salesUnitsBlock = [
            printSalesPerUnitHeaderSquareEnix(),
            ...printQtrSalesPerSWUnit(salesHDandMMO, salesUnits, header, currentQuarter),
            ...printCmlSalesPerSWUnit(salesHDandMMO, salesUnits, header, currentQuarter),
            printYoYSalesPerSoftwareUnit(salesHDandMMO, salesHDandMMOLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ];

    return [head, ...salesDataBlock, ...salesUnitsBlock].reduce((prev, next) => prev + "\n" + next); 

}