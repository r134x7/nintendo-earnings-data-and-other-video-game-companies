import { printTextBlock } from "./bandai_namco_annual_report_logic";

export type Section = {
    region: " Group Total " | " Japan " | " Americas " | " Europe ",
    units: "units" | "percentage" | "currency" | "NaN" | "salesPerSoftwareUnit",
    period: " 1st Quarter " | " 2nd Quarter " | " 3rd Quarter " | " 4th Quarter " | " Last FY Cumulative ",
    cmlPeriod: " 1st Quarter " | " First Half  " | " 1st 3 Qtrs  " | "Cml.",
    name: string,
    value: number,
    fiscalYear?: string,
    notes?: string,
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
        cmlPeriod: "Cml.",
        units: "NaN",
        value: 0, 
    },
] 


const printHead = (header: Header) => 
`+${"-".repeat(27)}+
${header.firstHeader} ${header.fiscalYear} |
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

const printLine = (blockLength: number): string => `+${"-".repeat(blockLength)}+`;

const generalSalesHeader = 
`+--------------------------------------------------+
|             |             |          | Sales Per |
|             |             | Software |  Software |
|             |       Sales |    Units |      Unit |
+--------------------------------------------------+`;

const squareEnixSalesHeader =
`+--------------------------------------+
|             |    Sales    |   YoY%   |
+--------------------------------------+`;

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

           let printLength: number = (quartersLastFY[index].units === "NaN")
                ? 27
                : 38

           let printLine: string = (array[index] === array.at(-1))
                ? "\n+" + "=".repeat(printLength) + "+"
                : "\n+" + "-".repeat(printLength) + "+"
            
            return (quartersLastFY[index].units === "NaN") 
                ? "|" + printPeriod + "|" + printSectionFixed + "|" + printLine  
                : "|" + printPeriod + "|" + printSectionFixed + "|" + yoyQuarters[index] + "|" + printLine  
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
            
            // let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX
            let shortFY: string = header.fiscalYear;

            let printPeriod: string = (currentQuarter === 4 && array[index] === array.at(-1))
                    ? `${shortFY} ${elem.cmlPeriod}`
                    : elem.cmlPeriod

        //    let printLine: string = (array[index] === array.at(-1))
        //         ? "\n+" + "=".repeat(27) + "+"
        //         : "\n+" + "-".repeat(27) + "+"
           let printLength: number = (segmentSalesLastFY[index].units === "NaN")
                ? 27
                : 38
            
           let printLine: string = "\n+" + "-".repeat(printLength) + "+";

            return (segmentSalesLastFY[index].units === "NaN") 
                ? "|" + printPeriod + "|" + printSectionFixed + "|" + printLine  
                : "|" + printPeriod + "|" + printSectionFixed + "|" + yoyCml[index] + "|" + printLine  
            // return "|" + printPeriod + "|" + printSectionFixed + "|" + yoyCml[index] + "|" + printLine  
        })

        return sales

};

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

// do not use this one...
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

const printQtrSalesPerSWUnit = (segmentSales: Section[], segmentSalesLastFY: Section[], segmentUnits: Section[], segmentUnitsLastFY: Section[], header: Header, currentQuarter: number): string[] => {

    const salesQuarters = quarterlyCalculation(segmentSales);
    const salesQuartersLastFY = quarterlyCalculation(segmentSalesLastFY);
    const salesUnits = quarterlyCalculation(segmentUnits); 
    const salesUnitsLastFY = quarterlyCalculation(segmentUnitsLastFY);

    const yoySalesPerUnit = printYoYSalesPerSoftwareUnit(salesQuarters, salesQuartersLastFY, salesUnits, salesUnitsLastFY)

        const sales = salesQuarters.filter((elem, index, array) => {
            return index < currentQuarter //&& array[index].value !== 0
        }).map((elem, index, array) => {
            // values given are Billion yen, changing to Million yen
            let printSection: string = `¥${(elem.value * 1000).toLocaleString("en")}M `

            let printSectionFixed: string = (printSection.length >= 13)
                ? printSection
                : " ".repeat(13 - printSection.length) + printSection;
            
        //     let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX

        //    let printPeriod: string = elem.period;

        //    let printLength: number = (salesQuartersLastFY[index].units === "NaN")
        //         ? 27
        //         : 38

        //    let printLine: string = (array[index] === array.at(-1))
        //         ? "\n+" + "=".repeat(printLength) + "+"
        //         : "\n+" + "-".repeat(printLength) + "+"
            
            return printSectionFixed
        })

        const salesPerSoftwareUnit = salesQuarters.filter((elem, index, array) => {
            return index < currentQuarter // && array[index].value !== 0
        }).flatMap((elem, index, array) => {
            if (elem.value === 0 && salesUnits[index].value === 0) {
                return []
            };
            // sales has to be converted from billion yen to million yen. units has to be converted from thousands to millions
            let calculateSalesPerSoftware: number = Number(((elem.value * 1000) / (salesUnits[index].value / 1000)).toFixed(0))

            let printsegmentSalesPerSoftware: string = (isNaN(calculateSalesPerSoftware)) 
                                                ? "N/A "
                                                : `¥${calculateSalesPerSoftware.toLocaleString("en")} `
            
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
                ? "\n+" + "=".repeat(50) + "+"
                : "\n+" + "-".repeat(50) + "+"

            return (salesQuartersLastFY[index].units === "NaN" || salesQuartersLastFY[index].value === 0)
                ? "|" + printPeriod + "|" + sales[index] + "|" + printSoftwareUnitsFixed + "|" + printsegmentSalesPerSoftwareFixed + "|" +  printLine
                : "|" + printPeriod + "|" + sales[index] + "|" + printSoftwareUnitsFixed + "|" + printsegmentSalesPerSoftwareFixed  +  "|\n" + yoySalesPerUnit[index] + printLine
        })

        return salesPerSoftwareUnit
}


const printCmlSalesPerSWUnit = (segmentSales: Section[], segmentSalesLastFY: Section[], segmentUnits: Section[], segmentUnitsLastFY: Section[], header: Header, currentQuarter: number): string[] => {

    const yoySalesPerUnit = printYoYSalesPerSoftwareUnit(segmentSales, segmentSalesLastFY, segmentUnits, segmentUnitsLastFY).filter((elem, index) => index !== 0); // remove first quarter for cumulatives;

        const sales = segmentSales.filter((elem, index, array) => {
            return index !== 0 && index < currentQuarter && array[index].value !== 0
        }).map((elem, index, array) => {
            // values given are Billion yen, changing to Million yen
            let printSection: string = `¥${(elem.value * 1000).toLocaleString("en")}M `

            let printSectionFixed: string = (printSection.length >= 13)
                ? printSection
                : " ".repeat(13 - printSection.length) + printSection;
            
            return printSectionFixed
        })

        const salesPerSoftwareUnit = segmentSales.filter((elem, index, array) => {
            return index !== 0 && index < currentQuarter && array[index].value !== 0
        }).map((elem, index, array) => { 
            // sales has to be converted from billion yen to million yen. units has to be converted from thousands to millions

            // index+1 is being used for segmentUnits since we don't want the firstQuarter value for: First Half to FY Cml.
            let calculateSalesPerSoftware: number = Number(((elem.value * 1000) / (segmentUnits[index+1].value / 1000)).toFixed(0))

            let printsegmentSalesPerSoftware: string = `¥${calculateSalesPerSoftware.toLocaleString("en")} `
            
            let printsegmentSalesPerSoftwareFixed: string = (printsegmentSalesPerSoftware.length >= 11)
                ? printsegmentSalesPerSoftware
                : " ".repeat(11 - printsegmentSalesPerSoftware.length) + printsegmentSalesPerSoftware;
            
            // index+1 is being used for segmentUnits since we don't want the firstQuarter value for: First Half to FY Cml.
            let printSoftwareUnits: string = `${segmentUnits[index+1].value / 1000}M `

            // let printSoftwareUnits: string = `${segmentUnits[index+1].value.toLocaleString("en")}k `
            let printSoftwareUnitsFixed: string = (printSoftwareUnits.length >= 10)
                    ? printSoftwareUnits
                    : " ".repeat(10 - printSoftwareUnits.length) + printSoftwareUnits 

            // let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX
            let shortFY: string = header.fiscalYear

            let printPeriod: string = (currentQuarter === 4 && array[index] === array.at(-1))
                    ? `${shortFY} ${elem.cmlPeriod}`
                    : elem.cmlPeriod

        //    let printLine: string = (array[index] === array.at(-1))
        //         ? "\n+" + "=".repeat(36) + "+"
        //         : "\n+" + "-".repeat(36) + "+"
            
        let printLine: string = "\n+" + "-".repeat(50) + "+";

            return (segmentSalesLastFY[index].units === "NaN")
                    ? "|" + printPeriod + "|" + sales[index] + "|" + printSoftwareUnitsFixed + "|" + printsegmentSalesPerSoftwareFixed + "|" + printLine
                    : "|" + printPeriod + "|" + sales[index] + "|" + printSoftwareUnitsFixed + "|" + printsegmentSalesPerSoftwareFixed + "|\n" + yoySalesPerUnit[index] + printLine
        })

        return salesPerSoftwareUnit
};

const printYoYSalesPerSoftwareUnit = (segmentSales: Section[], segmentSalesLastFY: Section[], segmentUnits: Section[], segmentUnitsLastFY: Section[]): string[] => {

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

    const yoySales = yearOnYearCalculation(segmentSales, segmentSalesLastFY);

    const yoySalesPerUnit = yearOnYearCalculation(salesPerUnitThisFY, salesPerUnitLastFY);  

    const yoyUnits = yearOnYearCalculation(segmentUnits, segmentUnitsLastFY);

    let printSalesYoY: string[] = yoySales.map((elem) => {
        return (elem.value > 0)
                    ? `+${(elem.value)}% `
                    : `${(elem.value)}% `
    }) 

    let printSalesPerUnitYoY: string[] = yoySalesPerUnit.map((elem) => {
        return (isNaN(elem.value))
                    ? "N/A "
                    : (elem.value > 0)
                    ? `+${(elem.value)}% `
                    : `${(elem.value)}% `

    }) 

    let printUnitsYoY: string[] = yoyUnits.map((elem) => {
        return (elem.value > 0)
                    ? `+${(elem.value)}% `
                    : `${(elem.value)}% `
    }) 

    let printSalesPerUnitFixed: string[] = printSalesPerUnitYoY.map((elem) => {
        return (elem.length >= 11)
                ? elem 
                : " ".repeat(11 - elem.length) + elem;
    }) 

    let printUnitsFixed: string[] = printUnitsYoY.map((elem) => {
        return (elem.length >= 10)
                    ? elem 
                    : " ".repeat(10 - elem.length) + elem;
    }) 
    
    let printSalesFixed: string[] = printSalesYoY.map((elem) => {
        return (elem.length >= 13)
                    ? elem 
                    : " ".repeat(13 - elem.length) + elem;
    }) 

    let printLine: string = "\n+" + "-".repeat(36) + "+";

    // let printPeriod: string = ` ${yoySalesPerUnit.cmlPeriod}YoY%   `;

    // return "|" + printPeriod + "|" + printSalesPerUnitFixed + "|" + printUnitsFixed + "|" + printLine
    let printArray: string[] = yoySalesPerUnit.map((elem, index) => {

        let printPeriod: string = `        YoY% `;

        return "|" + printPeriod + "|" + printSalesFixed[index] + "|" + printUnitsFixed[index] + "|" + printSalesPerUnitFixed[index] + "|"  
    }) 

    return printArray 
}

export const SegaPrint = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {
    
    const head = printHead(header);

    const salesUnitsBlock = [
        printLine(32),
        printTextBlock(salesData[0].name)(32),
        generalSalesHeader,
        ...printQtrSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        (salesData[0].notes === undefined) ? [] : printTextBlock(salesData[0].notes)(50) + "\n" + printLine(50),
        ].flat();

    return [head, ...salesUnitsBlock].reduce((prev, next) => prev + "\n" + next); 
};

export const BandaiNamcoPrint = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {
    
    const head = printHead(header);

    const salesUnitsBlock = [
        printLine(32),
        printTextBlock(salesData[0].name)(32),
        generalSalesHeader,
        ...printQtrSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        (salesData[0].notes === undefined) ? [] : printTextBlock(salesData[0].notes)(50) + "\n" + printLine(50),
        ].flat();

    return [head, ...salesUnitsBlock].reduce((prev, next) => prev + "\n" + next); 
};

export const CapcomPrint = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {
    
    const head = printHead(header);

    const salesUnitsBlock = [
        printLine(32),
        printTextBlock(salesData[0].name)(32),
        generalSalesHeader,
        ...printQtrSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        (salesData[0].notes === undefined) ? [] : printTextBlock(salesData[0].notes)(50) + "\n" + printLine(50),
        ].flat();

    return [head, ...salesUnitsBlock].reduce((prev, next) => prev + "\n" + next); 
};

export const CapcomPrintPhysical = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {

    const salesUnitsBlock = [
        printLine(32),
        printTextBlock(salesData[0].name)(32),
        generalSalesHeader,
        ...printQtrSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        (salesData[0].notes === undefined) ? [] : printTextBlock(salesData[0].notes)(50) + "\n" + printLine(50),
        ].flat();

    return [...salesUnitsBlock].reduce((prev, next) => prev + "\n" + next); 
};

export const CapcomPrintDigital = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {

    const salesUnitsBlock = [
        printLine(32),
        printTextBlock(salesData[0].name)(32),
        generalSalesHeader,
        ...printQtrSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        (salesData[0].notes === undefined) ? [] : printTextBlock(salesData[0].notes)(50) + "\n" + printLine(50),
        ].flat();

    return [...salesUnitsBlock].reduce((prev, next) => prev + "\n" + next); 
};

export const KoeiTecmoPrint = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {
    
    const head = printHead(header);

    const salesUnitsBlock = [
        printLine(32),
        printTextBlock(salesData[0].name)(32),
        generalSalesHeader,
        ...printQtrSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        (salesData[0].notes === undefined) ? [] : printTextBlock(salesData[0].notes)(50) + "\n" + printLine(50),
        ].flat();

    return [head, ...salesUnitsBlock].reduce((prev, next) => prev + "\n" + next); 
};

export const SquareEnixPrint = (salesHDGames: Section[], salesHDGamesLastFY: Section[], salesMMO: Section[], salesMMOLastFY: Section[], salesHDandMMO: Section[], salesHDandMMOLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number): string => {
    
    const head = printHead(header);

    const salesDataBlock = [
        printLine(32),
        printTextBlock(salesHDGames[0].name)(32),
        squareEnixSalesHeader,
        ...printQtrSales(salesHDGames, salesHDGamesLastFY, header, currentQuarter),
        ...printCmlSales(salesHDGames, salesHDGamesLastFY, header, currentQuarter),
        (salesHDGames[0].notes === undefined) ? [] : printTextBlock(salesHDGames[0].notes)(38) + "\n" + printLine(38),
        printLine(32),
        printTextBlock(salesMMO[0].name)(32),
        squareEnixSalesHeader,
        ...printQtrSales(salesMMO, salesMMOLastFY, header, currentQuarter),
        ...printCmlSales(salesMMO, salesMMOLastFY, header, currentQuarter),
        (salesMMO[0].notes === undefined) ? [] : printTextBlock(salesMMO[0].notes)(38) + "\n" + printLine(38),
    ].flat();

    const salesUnitsBlock = [
            printLine(32),
            printTextBlock(salesHDandMMO[0].name)(32),
            generalSalesHeader,
            ...printQtrSalesPerSWUnit(salesHDandMMO, salesHDandMMOLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
            ...printCmlSalesPerSWUnit(salesHDandMMO, salesHDandMMOLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
            (salesHDandMMO[0].notes === undefined) ? [] : printTextBlock(salesHDandMMO[0].notes)(50) + "\n" + printLine(50),
        ].flat();

    return [head, ...salesDataBlock, ...salesUnitsBlock].reduce((prev, next) => prev + "\n" + next); 

}

export const graphMake = (salesDataThisFY: Section[], salesDataLastFY: Section[], salesUnitsThisFY: Section[], salesUnitsLastFY: Section[], segmentName: string, fiscalYear: string, currentQuarter: number) => {

    let quartersSalesThisFY = quarterlyCalculation(salesDataThisFY);
    let quartersSalesLastFY = quarterlyCalculation(salesDataLastFY);

    let quartersUnitsThisFY = quarterlyCalculation(salesUnitsThisFY); 
    let quartersUnitsLastFY = quarterlyCalculation(salesUnitsLastFY);

    let quarterSalesPerSoftwareUnitThisFY: Section[] = quartersSalesThisFY.filter((elem, index, array) => {
            return index < currentQuarter 
        }).map((elem, index, array) => { 
            // sales has to be converted from billion yen to million yen. units has to be converted from thousands to millions
            let calculateSalesPerSoftware: number = Number(((elem.value * 1000) / (quartersUnitsThisFY[index].value / 1000)).toFixed(0))

            return { ...elem, units: "salesPerSoftwareUnit", value: calculateSalesPerSoftware}
        })

    let quarterSalesPerSoftwareUnitLastFY: Section[] = quartersSalesLastFY.filter((elem, index, array) => {
            return index < currentQuarter 
        }).map((elem, index, array) => { 
            // sales has to be converted from billion yen to million yen. units has to be converted from thousands to millions
            let calculateSalesPerSoftware: number = Number(((elem.value * 1000) / (quartersUnitsLastFY[index].value / 1000)).toFixed(0))

            return { ...elem, units: "salesPerSoftwareUnit", value: calculateSalesPerSoftware}
        })

    let cumulativeSalesPerSoftwareUnitThisFY: Section[] = salesDataThisFY.filter((elem, index, array) => {
            return index < currentQuarter 
        }).map((elem, index, array) => { 
            // sales has to be converted from billion yen to million yen. units has to be converted from thousands to millions
            let calculateSalesPerSoftware: number = Number(((elem.value * 1000) / (salesUnitsThisFY[index].value / 1000)).toFixed(0))

            return { ...elem, units: "salesPerSoftwareUnit", value: calculateSalesPerSoftware}
        })

    let cumulativeSalesPerSoftwareUnitLastFY: Section[]= salesDataLastFY.filter((elem, index, array) => {
            return index < currentQuarter 
        }).map((elem, index, array) => { 
            // sales has to be converted from billion yen to million yen. units has to be converted from thousands to millions
            let calculateSalesPerSoftware: number = Number(((elem.value * 1000) / (salesUnitsLastFY[index].value / 1000)).toFixed(0))

            return { ...elem, units: "salesPerSoftwareUnit", value: calculateSalesPerSoftware}
        })

    let thisFY: string = fiscalYear.slice(1, -1);
    let lastFY: string = thisFY.slice(0, 4) + (Number(thisFY.slice(-4)) - 1).toString();

    let marchThisFY: string = "March " + thisFY.slice(4);
    let marchLastFY: string = "March " + lastFY.slice(4);

    let quarterValuesThisFYList = [
        quartersSalesThisFY,
        quartersUnitsThisFY,
        quarterSalesPerSoftwareUnitThisFY,
    ];

    let quarterValuesLastFYList = [
        quartersSalesLastFY,
        quartersUnitsLastFY,
        quarterSalesPerSoftwareUnitLastFY,
    ];

    let cmlValuesThisFYList = [
        salesDataThisFY,
        salesUnitsThisFY,
        cumulativeSalesPerSoftwareUnitThisFY,
    ];

    let cmlValuesLastFYList = [
        salesDataLastFY,
        salesUnitsLastFY,
        cumulativeSalesPerSoftwareUnitLastFY,
    ];

    let graphData = {
        segmentName: segmentName,
        thisFY: thisFY,
        lastFY: lastFY,
        marchThisFY: marchThisFY,
        marchLastFY: marchLastFY,
        quarterValuesThisFY: quarterValuesThisFYList,
        quarterValuesLastFY: quarterValuesLastFYList,
        cumulativeValuesThisFY: cmlValuesThisFYList,
        cumulativeValuesLastFY: cmlValuesLastFYList,
    } 

        return graphData
};