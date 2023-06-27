import { printTextBlock, border, liner, spacer, dateLabel, headerPrint  } from "./table_design_logic";
import { printQuarterValuesV2, 
    printYoYV2, 
    printCumulativeValuesV2,
    printForecastValuesV2,
    yearOnYearCalculationV2,
    type EarningsV2, 
    type EarningsValue } from "./general_earnings_logic";
import { valuesMakeV2, nothingCheck, EarningsMakeV2, EarningsJSONV2, getData } from "../data/generalTables/consolidated_earnings_general";

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

export type HeaderV2 = {
    companyName: string;
    fiscalYear: string;
    title: string;
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

// check later

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

function generalSalesHeaderV2(
    periodColumnLength: number,
    salesColumnLength: number,
    unitsColumnLength: number,
    salesPerSoftwareUnitLength: number) {
// 13 || 17, 13, 10, 11
    return liner(
        border([
            spacer("",periodColumnLength,"right"),
            spacer("",salesColumnLength,"right"),
            spacer("",unitsColumnLength,"right"),
            spacer("Sales Per",salesPerSoftwareUnitLength,"right"),
        ], true).concat(
            border([
                spacer("",periodColumnLength,"right"),
                spacer("",salesColumnLength,"right"),
                spacer("Software",unitsColumnLength,"right"),
                spacer("Software",salesPerSoftwareUnitLength,"right"),
            ], true),
            border([
                spacer("",periodColumnLength,"right"),
                spacer("Sales",salesColumnLength,"right"),
                spacer("Units",unitsColumnLength,"right"),
                spacer("Unit",salesPerSoftwareUnitLength,"right"),
            ], true)
        )
    ,"−","both",true)

}

const forecastSalesHeader = 
`+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
|                 |             |          | Sales Per |
|                 |             | Software |  Software |
|                 |       Sales |    Units |      Unit |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n`;

const squareEnixSalesHeader =
`+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
|             |    Sales    |   YoY%   |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n`;

function printSalesAndYoY(
    quarterSales: EarningsValue[],
    quarterYoY: EarningsValue[],
    cumulativeSales: EarningsValue[],
    cumulativeYoY: EarningsValue[],
    currentQuarter: number,
    textLength: number,
): string[] {

    const quarters = quarterSales.map((elem, index) => printQuarterValuesV2(elem, currentQuarter, textLength).concat(printYoYV2(quarterYoY[index], currentQuarter, textLength, true)))

    const cumulatives = cumulativeSales.map((elem, index) => printCumulativeValuesV2(elem, currentQuarter, textLength).concat(printYoYV2(cumulativeYoY[index], currentQuarter, textLength, true)))

    return quarters.concat(cumulatives)
}

function millionFix(value: number, changeFrom: "Billion" | "Million" | "Hundred Thousand" | "Ten Thousand" | "One Thousand"): number {

    switch (changeFrom) {
        case "Billion":
            return value * 1000

        case "Million":
            return value
        
        case "Hundred Thousand":
            return value / 10

        case "Ten Thousand":
            return value / 100

        case "One Thousand":
            return value / 1000
    
        default:
            // console.log("ERROR from: " + value)
            return value
    }    

            // sales has to be converted from billion yen to million yen. units has to be converted from thousands to millions
            // let calculateSalesPerSoftware: number = Number(((elem.value * 1000) / (segmentUnits[index].value / 1000)).toFixed(0))
}

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

const printForecastSalesPerSWUnit = (segmentSales: Section[], segmentUnits: Section[], header: Header, currentQuarter: number): string[] => {

        const sales = segmentSales.map((elem, index, array) => {
            // values given are Billion yen, changing to Million yen
            let printSection: string = `¥${(elem.value * 1000).toLocaleString("en")}M`

            return printSection
        })

        const salesPerSoftwareUnit = segmentSales.flatMap((elem, index, array) => {
            if (elem.value === 0) {
                return []
            };
            // sales has to be converted from billion yen to million yen. units has to be converted from thousands to millions
            let calculateSalesPerSoftware: number = Number(((elem.value * 1000) / (segmentUnits[index].value / 1000)).toFixed(0))

            let printsegmentSalesPerSoftware: string = (isNaN(calculateSalesPerSoftware)) 
                    ? "N/A"
                    : `¥${calculateSalesPerSoftware.toLocaleString("en")}`
            
            let printSoftwareUnits: string = `${segmentUnits[index].value / 1000}M`

            // let printSoftwareUnits: string = `${segmentUnits[index].value.toLocaleString("en")}k `
            let periodCondition: string = (currentQuarter === 4 && index === array.length-1 && array.length === 1)
                ? `${header.fiscalYear.slice(0,4) + (Number(header.fiscalYear.slice(4)) + 1).toString()} ${elem.period}`
                : (currentQuarter === 4 && index === array.length-1 && elem.period === "Forecast")
                    ? `${header.fiscalYear.slice(0,4) + (Number(header.fiscalYear.slice(4)) + 1).toString()} ${elem.period}`
                    : (index === 0)
                        ? `${header.fiscalYear} ${elem.period}`
                        : elem.period

            return liner(border([
                    spacer(periodCondition,16,"left"),
                    spacer(sales[index],12,"right"),
                    spacer(printSoftwareUnits,9,"right"),
                    spacer(printsegmentSalesPerSoftware,10,"right"),
                ]),(array[index] === array.at(-1))?"=":"−","bottom",true)
        })

        return salesPerSoftwareUnit
}

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

export function generalSalesPerSoftwareUnitListV2Map(collectionThisFY: EarningsJSONV2, collectionLastFY: EarningsJSONV2 | undefined, headerLength: number): string {

    const currentQuarter = collectionThisFY.currentQuarter;

    const none: EarningsValue = { kind:"Nothing" };

    const makeHeader: HeaderV2 = {
        companyName: collectionThisFY.companyName,
        fiscalYear: collectionThisFY.fiscalYear,
        title: "Segment Information - Software Sales",
    } 

    const makeDateLabel = dateLabel(makeHeader.fiscalYear, currentQuarter);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

    const printOne = headerPrint([
        makeHeader.companyName + " | " + makeHeader.fiscalYear,
        makeHeader.title
    ],headerLength) + "\n" + printDateLabel;

    const dataThisFY = getData(collectionThisFY, collectionThisFY.data.length);

    const dataLastFY = getData(collectionLastFY, collectionThisFY.data.length);

    const percentagesThisFY = new Map<number, EarningsV2>();

        dataThisFY.forEach((value, key, map) => {
            percentagesThisFY.set(key, {
                ...value,
                Q1QtrValue: yearOnYearCalculationV2(value.Q1QtrValue, dataLastFY.get(key)?.Q1QtrValue ?? none, "Quarter"),
                Q2QtrValue: yearOnYearCalculationV2(value.Q2QtrValue, dataLastFY.get(key)?.Q2QtrValue ?? none, "Quarter"),
                Q3QtrValue: yearOnYearCalculationV2(value.Q3QtrValue, dataLastFY.get(key)?.Q3QtrValue ?? none, "Quarter"),
                Q4QtrValue: yearOnYearCalculationV2(value.Q4QtrValue, dataLastFY.get(key)?.Q4QtrValue ?? none, "Quarter"),
                Q1CmlValue: yearOnYearCalculationV2(value.Q1CmlValue, dataLastFY.get(key)?.Q1CmlValue ?? none, "Cumulative"),
                Q2CmlValue: yearOnYearCalculationV2(value.Q2CmlValue, dataLastFY.get(key)?.Q2CmlValue ?? none, "Cumulative"),
                Q3CmlValue: yearOnYearCalculationV2(value.Q3CmlValue, dataLastFY.get(key)?.Q3CmlValue ?? none, "Cumulative"),
                Q4CmlValue: yearOnYearCalculationV2(value.Q4CmlValue, dataLastFY.get(key)?.Q4CmlValue ?? none, "Cumulative"),
                forecastThisFY: yearOnYearCalculationV2(value.forecastThisFY, dataLastFY.get(key)?.forecastThisFY ?? none, "Forecast"),
                forecastRevision1: yearOnYearCalculationV2(value.forecastRevision1, dataLastFY.get(key)?.forecastRevision1 ?? none, "Forecast"),
                forecastRevision2: yearOnYearCalculationV2(value.forecastRevision2, dataLastFY.get(key)?.forecastRevision2 ?? none, "Forecast"),
                forecastRevision3: yearOnYearCalculationV2(value.forecastRevision3, dataLastFY.get(key)?.forecastRevision3 ?? none, "Forecast"),
                forecastNextFY: yearOnYearCalculationV2(value.forecastNextFY, dataLastFY.get(key)?.forecastNextFY ?? none, "Forecast"),
            } satisfies EarningsV2
            )
        });



    const salesHeader = generalSalesHeaderV2(13, 13, 10, 11);

    // need millionFix
    const printAll = new Map<number, string[]>();

    dataThisFY.forEach((value, key, map) => {

        printAll.set(key, printSalesAndYoY(
            [
                map.get(0)?.Q1QtrValue ?? none,
                map.get(0)?.Q2QtrValue ?? none,
                map.get(0)?.Q3QtrValue ?? none,
                map.get(0)?.Q4QtrValue ?? none,
            ],
            [
                percentagesThisFY.get(0)?.Q1QtrValue ?? none,
                percentagesThisFY.get(0)?.Q2QtrValue ?? none,
                percentagesThisFY.get(0)?.Q3QtrValue ?? none,
                percentagesThisFY.get(0)?.Q4QtrValue ?? none,
            ],
            [
                map.get(0)?.Q2CmlValue ?? none,
                map.get(0)?.Q3CmlValue ?? none,
                map.get(0)?.Q4CmlValue ?? none,
            ],
            [
                percentagesThisFY.get(0)?.Q2CmlValue ?? none,
                percentagesThisFY.get(0)?.Q3CmlValue ?? none,
                percentagesThisFY.get(0)?.Q4CmlValue ?? none,
            ],
            currentQuarter,
            13
        ))
        
    })

    console.log(printAll)

}

export const SegaPrint = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {
    
    const head = printHead(header);

    const makeDateLabel = dateLabel(header.fiscalYear, currentQuarter);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

    const salesUnitsBlock = [
        liner(printTextBlock(salesData[0].name, 32),"−","top",true,32),
        generalSalesHeader,
        ...printQtrSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        liner(printTextBlock(salesData[0]?.notes, 50),"−","bottom",true,50)
        ].flat();

    return [head, printDateLabel, ...salesUnitsBlock].reduce((prev, next) => prev + next); 
};

export const BandaiNamcoPrint = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {
    
    const head = printHead(header);

    const makeDateLabel = dateLabel(header.fiscalYear, currentQuarter);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

    const salesUnitsBlock = [
        liner(printTextBlock(salesData[0].name, 32),"−","top",true),
        generalSalesHeader,
        ...printQtrSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        liner(printTextBlock(salesData[0]?.notes, 50),"−","bottom",true,50)
        ].flat();

    return [head, printDateLabel, ...salesUnitsBlock].reduce((prev, next) => prev + next); 
};

export const CapcomPrint = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {
    
    const head = printHead(header);

    const makeDateLabel = dateLabel(header.fiscalYear, currentQuarter);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

    const salesUnitsBlock = [
        liner(printTextBlock(salesData[0].name, 40),"−","top",true,40),
        generalSalesHeader,
        ...printQtrSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        liner(printTextBlock(salesData[0]?.notes, 50),"−","bottom",true,50)
        ].flat();

    return [head, printDateLabel, ...salesUnitsBlock].reduce((prev, next) => prev + next); 
};

export const salesPerSoftwareUnitForecast = (salesData: Section[], salesUnits: Section[], header: Header, currentQuarter: number) => {

    const salesUnitsBlock = [
        liner(printTextBlock(salesData[0].name + " Forecast", 40),"−","top",true,40),
        forecastSalesHeader,
        ...printForecastSalesPerSWUnit(salesData, salesUnits, header, currentQuarter),
        liner(printTextBlock(salesData[0]?.notes, 50),"−","bottom",true,50)
        ].flat();

    return [...salesUnitsBlock].reduce((prev, next) => prev + next); 
};

export const CapcomPrintPhysical = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {

    const salesUnitsBlock = [
        liner(printTextBlock(salesData[0].name, 32),"−","top",true,32),
        generalSalesHeader,
        ...printQtrSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        liner(printTextBlock(salesData[0]?.notes, 50),"−","bottom",true,50)
        ].flat();

    return [...salesUnitsBlock].reduce((prev, next) => prev + next); 
};

export const CapcomPrintDigital = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {

    const salesUnitsBlock = [
        liner(printTextBlock(salesData[0].name, 32),"−","top",true,32),
        generalSalesHeader,
        ...printQtrSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        liner(printTextBlock(salesData[0]?.notes, 50),"−","bottom",true,50)
        ].flat();

    return [...salesUnitsBlock].reduce((prev, next) => prev + next); 
};

export const KoeiTecmoPrint = (salesData: Section[], salesDataLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number) => {
    
    const head = printHead(header);

    const makeDateLabel = dateLabel(header.fiscalYear, currentQuarter);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

    const salesUnitsBlock = [
        liner(printTextBlock(salesData[0].name, 32),"−","top",true),
        generalSalesHeader,
        ...printQtrSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        ...printCmlSalesPerSWUnit(salesData, salesDataLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
        liner(printTextBlock(salesData[0]?.notes, 50),"−","bottom",true,50)
        ].flat();

    return [head, printDateLabel, ...salesUnitsBlock].reduce((prev, next) => prev + next); 
};

export const SquareEnixPrint = (salesHDGames: Section[], salesHDGamesLastFY: Section[], salesMMO: Section[], salesMMOLastFY: Section[], salesHDandMMO: Section[], salesHDandMMOLastFY: Section[], salesUnits: Section[], salesUnitsLastFY: Section[], header: Header, currentQuarter: number): string => {
    
    const head = printHead(header);

    const makeDateLabel = dateLabel(header.fiscalYear, currentQuarter);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

    const salesDataBlock = [
        liner(printTextBlock(salesHDGames[0].name, 32),"−","top",true,32),
        squareEnixSalesHeader,
        ...printQtrSales(salesHDGames, salesHDGamesLastFY, header, currentQuarter),
        ...printCmlSales(salesHDGames, salesHDGamesLastFY, header, currentQuarter),
        liner(printTextBlock(salesHDGames[0]?.notes, 38),"−","bottom",true,38),
        liner(printTextBlock(salesMMO[0].name, 32),"−","top",true,32),
        squareEnixSalesHeader,
        ...printQtrSales(salesMMO, salesMMOLastFY, header, currentQuarter),
        ...printCmlSales(salesMMO, salesMMOLastFY, header, currentQuarter),
        liner(printTextBlock(salesMMO[0]?.notes, 38),"−","bottom",true,38),
    ].flat();

    const salesUnitsBlock = [
            liner(printTextBlock(salesHDandMMO[0].name, 32),"−","top",true,32),
            generalSalesHeader,
            ...printQtrSalesPerSWUnit(salesHDandMMO, salesHDandMMOLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
            ...printCmlSalesPerSWUnit(salesHDandMMO, salesHDandMMOLastFY, salesUnits, salesUnitsLastFY, header, currentQuarter),
            liner(printTextBlock(salesHDandMMO[0]?.notes, 50),"−","bottom",true,50)
        ].flat();

    return [head, printDateLabel, ...salesDataBlock, ...salesUnitsBlock].reduce((prev, next) => prev + next); 
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
