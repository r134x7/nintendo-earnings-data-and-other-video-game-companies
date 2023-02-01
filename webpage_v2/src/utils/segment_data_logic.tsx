import { printTextBlock, border, liner, spacer } from "./table_design_logic";;

export type Section = {
    region: "Group Total" | "Japan" | "Americas" | "Europe",
    units: "units" | "percentage" | "currency" | "NaN" | "salesPerSoftwareUnit",
    period: "1st Quarter" | "2nd Quarter" | "3rd Quarter" | "4th Quarter" | "Last FY Cumulative" | "Forecast" | "FCST Revision 1" | "FCST Revision 2" | "FCST Revision 3",
    cmlPeriod: "1st Quarter" | "First Half" | "1st 3 Qtrs" | "Cml.",
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
        region: "Group Total",
        period: "1st Quarter",
        cmlPeriod: "1st Quarter",
        units: "NaN",
        value: 0, 
    },
    {
        name: "undefined",
        region: "Group Total",
        period: "2nd Quarter",
        cmlPeriod: "First Half",
        units: "NaN",
        value: 0, 
    },
    {
        name: "undefined",
        region: "Group Total",
        period: "3rd Quarter",
        cmlPeriod: "1st 3 Qtrs",
        units: "NaN",
        value: 0, 
    },
    {
        name: "undefined",
        region: "Group Total",
        period: "4th Quarter",
        cmlPeriod: "Cml.",
        units: "NaN",
        value: 0, 
    },
] 


const printHead = (header: Header) => 
`+${"−".repeat(27)}+
${header.firstHeader} ${header.fiscalYear} |
+${"−".repeat(27)}+
${header.secondHeader}
+${"−".repeat(21)}+\n`;

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

const generalSalesHeader = 
`+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
|             |             |          | Sales Per |
|             |             | Software |  Software |
|             |       Sales |    Units |      Unit |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n`;

const squareEnixSalesHeader =
`+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
|             |    Sales    |   YoY%   |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n`;

const printQtrSales = (segmentSales: Section[], segmentSalesLastFY: Section[], header: Header, currentQuarter: number): string[] => {

    const quarters = quarterlyCalculation(segmentSales);
    const quartersLastFY = quarterlyCalculation(segmentSalesLastFY);
    
    const yoyQuarters = printYoYSales(quarters, quartersLastFY)

        const sales = quarters.filter((elem, index, array) => {
            return index < currentQuarter && array[index].value !== 0
        }).map((elem, index, array) => {
            // values given are Billion yen, changing to Million yen
            let printSection: string = `¥${(elem.value * 1000).toLocaleString("en")}M`

            return (quartersLastFY[index].units === "NaN") 
                ? liner(border([
                    spacer(elem.period,12,"left"),
                    spacer(printSection,12,"right"),
                ]),(array[index] === array.at(-1))?"=":"−","bottom",true)
                : liner(border([
                    spacer(elem.period,12,"left"),
                    spacer(printSection,12,"right"),
                    spacer(yoyQuarters[index],10,"right"),
                ]),(array[index] === array.at(-1))?"=":"−","bottom",true)
        })

        return sales

};

const printCmlSales = (segmentSales: Section[], segmentSalesLastFY: Section[], header: Header, currentQuarter: number): string[] => {

        const yoyCml = printYoYSales(segmentSales, segmentSalesLastFY).filter((elem, index) => index !== 0); // remove first quarter for cumulatives

        const sales = segmentSales.filter((elem, index, array) => {
            return index !== 0 && index < currentQuarter && array[index].value !== 0
        }).map((elem, index, array) => {
            // values given are Billion yen, changing to Million yen
            let printSection: string = `¥${(elem.value * 1000).toLocaleString("en")}M`

            let printPeriod: string = (currentQuarter === 4 && array[index] === array.at(-1))
                    ? `${header.fiscalYear} ${elem.cmlPeriod}`
                    : elem.cmlPeriod

            return (segmentSalesLastFY[index].units === "NaN") 
                ? liner(border([
                    spacer(printPeriod,12,"left"),
                    spacer(printSection,12,"right"),
                ]),(array[index] === array.at(-1))?"=":"−","bottom",true)
                : liner(border([
                    spacer(printPeriod,12,"left"),
                    spacer(printSection,12,"right"),
                    spacer(yoyCml[index],10,"right"),
                ]),(array[index] === array.at(-1))?"=":"−","bottom",true)
        })

        return sales
};

const printYoYSales = (segmentSales: Section[], segmentSalesLastFY: Section[]): string[] => {

    const yoy = yearOnYearCalculation(segmentSales, segmentSalesLastFY);

    let printSection: string[] = yoy.map((elem) => {

        return (elem.value > 0)
                   ? `+${(elem.value)}%`
                   : `${(elem.value)}%`
    })

    let printSectionFixed: string[] = printSection.map((elem) => {
        return spacer(elem,9,"right")
    }) 

    return printSectionFixed
};

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
            let printSection: string = `¥${(elem.value * 1000).toLocaleString("en")}M`

            return printSection
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
                    ? "N/A"
                    : `¥${calculateSalesPerSoftware.toLocaleString("en")}`
            
            let printSoftwareUnits: string = `${salesUnits[index].value / 1000}M`

            // let printSoftwareUnits: string = `${segmentUnits[index].value.toLocaleString("en")}k `

            return (salesQuartersLastFY[index].units === "NaN" || salesQuartersLastFY[index].value === 0)
                ? liner(border([
                    spacer(elem.period,12,"left"),
                    spacer(sales[index],12,"right"),
                    spacer(printSoftwareUnits,9,"right"),
                    spacer(printsegmentSalesPerSoftware,10,"right"),
                ]),(array[index] === array.at(-1))?"=":"−","bottom",true)
                : liner(border([
                    spacer(elem.period,12,"left"),
                    spacer(sales[index],12,"right"),
                    spacer(printSoftwareUnits,9,"right"),
                    spacer(printsegmentSalesPerSoftware,10,"right"),
                ],true) + yoySalesPerUnit[index]
                ,(array[index] === array.at(-1))?"=":"−","bottom",true,50)
        })

        return salesPerSoftwareUnit
}


const printCmlSalesPerSWUnit = (segmentSales: Section[], segmentSalesLastFY: Section[], segmentUnits: Section[], segmentUnitsLastFY: Section[], header: Header, currentQuarter: number): string[] => {

    const yoySalesPerUnit = printYoYSalesPerSoftwareUnit(segmentSales, segmentSalesLastFY, segmentUnits, segmentUnitsLastFY).filter((elem, index) => index !== 0); // remove first quarter for cumulatives;

        const sales = segmentSales.filter((elem, index, array) => {
            return index !== 0 && index < currentQuarter && array[index].value !== 0
        }).map((elem, index, array) => {
            // values given are Billion yen, changing to Million yen
            let printSection: string = `¥${(elem.value * 1000).toLocaleString("en")}M`

            let printSectionFixed: string = spacer(printSection,12,"right")
            
            return printSectionFixed
        })

        const salesPerSoftwareUnit = segmentSales.filter((elem, index, array) => {
            return index !== 0 && index < currentQuarter && array[index].value !== 0
        }).map((elem, index, array) => { 
            // sales has to be converted from billion yen to million yen. units has to be converted from thousands to millions

            // index+1 is being used for segmentUnits since we don't want the firstQuarter value for: First Half to FY Cml.
            let calculateSalesPerSoftware: number = Number(((elem.value * 1000) / (segmentUnits[index+1].value / 1000)).toFixed(0))

            let printsegmentSalesPerSoftware: string = `¥${calculateSalesPerSoftware.toLocaleString("en")}`
            
            // index+1 is being used for segmentUnits since we don't want the firstQuarter value for: First Half to FY Cml.
            let printSoftwareUnits: string = `${segmentUnits[index+1].value / 1000}M`

            // let printSoftwareUnits: string = `${segmentUnits[index+1].value.toLocaleString("en")}k `

            let printPeriod: string = (currentQuarter === 4 && array[index] === array.at(-1))
                    ? `${header.fiscalYear} ${elem.cmlPeriod}`
                    : elem.cmlPeriod

            return (segmentSalesLastFY[index].units === "NaN")
                ? liner(border([
                    spacer(printPeriod,12,"left"),
                    spacer(sales[index],12,"right"),
                    spacer(printSoftwareUnits,9,"right"),
                    spacer(printsegmentSalesPerSoftware,10,"right"),
                ]),(array[index] === array.at(-1))?"=":"−","bottom",true)
                : liner(border([
                    spacer(printPeriod,12,"left"),
                    spacer(sales[index],12,"right"),
                    spacer(printSoftwareUnits,9,"right"),
                    spacer(printsegmentSalesPerSoftware,10,"right"),
                ],true) + yoySalesPerUnit[index]
                ,(array[index] === array.at(-1))?"=":"−","bottom",true,50)
        })

        return salesPerSoftwareUnit
};

const printYoYSalesPerSoftwareUnit = (segmentSales: Section[], segmentSalesLastFY: Section[], segmentUnits: Section[], segmentUnitsLastFY: Section[]): string[] => {

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
                    ? `+${(elem.value)}%`
                    : `${(elem.value)}%`
    }) 

    let printSalesPerUnitYoY: string[] = yoySalesPerUnit.map((elem) => {
        return (isNaN(elem.value))
                    ? "N/A"
                    : (elem.value > 0)
                    ? `+${(elem.value)}%`
                    : `${(elem.value)}%`

    }) 

    let printUnitsYoY: string[] = yoyUnits.map((elem) => {
        return (elem.value > 0)
                    ? `+${(elem.value)}%`
                    : `${(elem.value)}%`
    }) 

    let printSalesPerUnitFixed: string[] = printSalesPerUnitYoY.map((elem) => {
        return spacer(elem,10,"right");
    }) 

    let printUnitsFixed: string[] = printUnitsYoY.map((elem) => {
        return spacer(elem,9,"right");
    }) 
    
    let printSalesFixed: string[] = printSalesYoY.map((elem) => {
        return spacer(elem,12,"right");
    }) 

    let printArray: string[] = yoySalesPerUnit.map((elem, index) => {

        let printPeriod: string = spacer(`YoY%`,12,"right");

        return border([
            printPeriod,
            printSalesFixed[index],
            printUnitsFixed[index],
            printSalesPerUnitFixed[index],
        ]) 
    }) 

    return printArray 
}

export const SegaPrint = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {
    
    const head = printHead(header);

    const salesUnitsBlock = [
        liner(printTextBlock(salesData[0].name, 32),"−","top",true,32),
        generalSalesHeader,
        ...printQtrSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        (salesData[0].notes === undefined) ? [] : liner(printTextBlock(salesData[0].notes, 50),"−","bottom",true,50)
        ].flat();

    return [head, ...salesUnitsBlock].reduce((prev, next) => prev + next); 
};

export const BandaiNamcoPrint = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {
    
    const head = printHead(header);

    const salesUnitsBlock = [
        liner(printTextBlock(salesData[0].name, 32),"−","top",true),
        generalSalesHeader,
        ...printQtrSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        (salesData[0].notes === undefined) ? [] : liner(printTextBlock(salesData[0].notes, 50),"−","bottom",true,50)
        ].flat();

    return [head, ...salesUnitsBlock].reduce((prev, next) => prev + next); 
};

export const CapcomPrint = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {
    
    const head = printHead(header);

    const salesUnitsBlock = [
        liner(printTextBlock(salesData[0].name, 32),"−","top",true),
        generalSalesHeader,
        ...printQtrSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        (salesData[0].notes === undefined) ? [] : liner(printTextBlock(salesData[0].notes, 50),"−","bottom",true,50)
        ].flat();

    return [head, ...salesUnitsBlock].reduce((prev, next) => prev + next); 
};

export const CapcomPrintPhysical = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {

    const salesUnitsBlock = [
        liner(printTextBlock(salesData[0].name, 32),"−","top",true),
        generalSalesHeader,
        ...printQtrSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        (salesData[0].notes === undefined) ? [] : liner(printTextBlock(salesData[0].notes, 50),"−","bottom",true,50)
        ].flat();

    return [...salesUnitsBlock].reduce((prev, next) => prev + next); 
};

export const CapcomPrintDigital = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {

    const salesUnitsBlock = [
        liner(printTextBlock(salesData[0].name, 32),"−","top",true),
        generalSalesHeader,
        ...printQtrSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        (salesData[0].notes === undefined) ? [] : liner(printTextBlock(salesData[0].notes, 50),"−","bottom",true,50)
        ].flat();

    return [...salesUnitsBlock].reduce((prev, next) => prev + next); 
};

export const KoeiTecmoPrint = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {
    
    const head = printHead(header);

    const salesUnitsBlock = [
        liner(printTextBlock(salesData[0].name, 32),"−","top",true),
        generalSalesHeader,
        ...printQtrSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        (salesData[0].notes === undefined) ? [] : liner(printTextBlock(salesData[0].notes, 50),"−","bottom",true,50)
        ].flat();

    return [head, ...salesUnitsBlock].reduce((prev, next) => prev + next); 
};

export const SquareEnixPrint = (salesHDGames: Section[], salesHDGamesLastFY: Section[], salesMMO: Section[], salesMMOLastFY: Section[], salesHDandMMO: Section[], salesHDandMMOLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number): string => {
    
    const head = printHead(header);

    const salesDataBlock = [
        liner(printTextBlock(salesHDGames[0].name, 32),"−","top",true,32),
        squareEnixSalesHeader,
        ...printQtrSales(salesHDGames, salesHDGamesLastFY, header, currentQuarter),
        ...printCmlSales(salesHDGames, salesHDGamesLastFY, header, currentQuarter),
        (salesHDGames[0].notes === undefined) ? [] : liner(printTextBlock(salesHDGames[0].notes, 38),"−","bottom",true,38),
        liner(printTextBlock(salesMMO[0].name, 32),"−","top",true,32),
        squareEnixSalesHeader,
        ...printQtrSales(salesMMO, salesMMOLastFY, header, currentQuarter),
        ...printCmlSales(salesMMO, salesMMOLastFY, header, currentQuarter),
        (salesMMO[0].notes === undefined) ? [] : liner(printTextBlock(salesMMO[0].notes, 38),"−","bottom",true,38),
    ].flat();

    const salesUnitsBlock = [
            liner(printTextBlock(salesHDandMMO[0].name, 32),"−","top",true,32),
            generalSalesHeader,
            ...printQtrSalesPerSWUnit(salesHDandMMO, salesHDandMMOLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
            ...printCmlSalesPerSWUnit(salesHDandMMO, salesHDandMMOLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
            (salesHDandMMO[0].notes === undefined) ? [] : liner(printTextBlock(salesHDandMMO[0].notes, 50),"−","bottom",true,50)
        ].flat();

    return [head, ...salesDataBlock, ...salesUnitsBlock].reduce((prev, next) => prev + next); 

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

    let thisFY: string = fiscalYear;
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