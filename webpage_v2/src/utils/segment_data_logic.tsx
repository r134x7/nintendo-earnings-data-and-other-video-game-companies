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
    salesPerSoftwareUnitLength: number,
    linerOffset: number) {
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
            ])
        )
    ,"−","both",true, periodColumnLength + salesColumnLength + unitsColumnLength + salesPerSoftwareUnitLength + linerOffset)

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


// doesn't work correctly
function printSalesAndYoY(
    quarterSales: EarningsValue[],
    quarterYoY: EarningsValue[],
    cumulativeSales: EarningsValue[],
    cumulativeYoY: EarningsValue[],
    currentQuarter: number,
    textLength: number,
    singleColumn: boolean
): string {

    const quarters = quarterSales.map((elem, index) =>
    liner( 
    printQuarterValuesV2(elem, currentQuarter, textLength,singleColumn)
    .concat("\n", printYoYV2(quarterYoY[index], currentQuarter, textLength, true))
    ,"−","bottom",undefined,50)
    );

    const cumulatives = cumulativeSales.map((elem, index) => 
    liner(
    printCumulativeValuesV2(elem, currentQuarter, textLength, singleColumn)
    .concat("\n",printYoYV2(cumulativeYoY[index], currentQuarter, textLength, true))
    ,"−","bottom",undefined,50)
    );

    return quarters.concat(cumulatives).reduce((acc, next) => acc + "\n" + next);
}

function millionFix(value: EarningsValue, changeFrom: "Billion" | "Million" | "Hundred Thousand" | "Ten Thousand" | "One Thousand"): EarningsValue {

    switch (changeFrom) {
        case "Billion":
            return (value.kind !== "Nothing")
                ? {
                    ...value,
                    value: value.value * 1000
                } satisfies EarningsValue
                : value

        case "Million":
            return (value.kind !== "Nothing")
                ? {
                    ...value,
                    value: value.value
                } satisfies EarningsValue
                : value
        
        case "Hundred Thousand":
            return (value.kind !== "Nothing")
                ? {
                    ...value,
                    value: value.value / 10
                } satisfies EarningsValue
                : value

        case "Ten Thousand":
            return (value.kind !== "Nothing")
                ? {
                    ...value,
                    value: value.value / 100
                } satisfies EarningsValue
                : value

        case "One Thousand":
            return (value.kind !== "Nothing")
                ? {
                    ...value,
                    value: value.value / 1000
                } satisfies EarningsValue
                : value
    
        default:
            // console.log("ERROR from: " + value)
            return value
    }    

            // sales has to be converted from billion yen to million yen. units has to be converted from thousands to millions
            // let calculateSalesPerSoftware: number = Number(((elem.value * 1000) / (segmentUnits[index].value / 1000)).toFixed(0))
}

function salesPerSoftwareUnitCalculation(sales: EarningsValue, units: EarningsValue): EarningsValue {
    // sales and units have to be the same units e.g. M 

    return (sales.kind !== "Nothing" && units.kind !== "Nothing")
        ? {
            ...sales,
            value: Number((sales.value / units.value).toFixed(0))
        } satisfies EarningsValue
        : { kind: "Nothing" }
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

export function generalSalesPerSoftwareUnitListV2Map(collectionThisFY: EarningsJSONV2, collectionLastFY: EarningsJSONV2 | undefined, headerLength: number, 
    salesRoundtoMillion: "Billion" | "Million" | "Hundred Thousand" | "Ten Thousand" | "One Thousand",
    unitsRoundtoMillion: "Billion" | "Million" | "Hundred Thousand" | "Ten Thousand" | "One Thousand",
    ): string {

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
            } satisfies EarningsV2 );
        });

    dataThisFY.forEach((value, key, map) => {

        map.set(key, {
            ...value,
            Q1QtrValue: millionFix(value.Q1QtrValue,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            Q2QtrValue: millionFix(value.Q2QtrValue,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            Q3QtrValue: millionFix(value.Q3QtrValue,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            Q4QtrValue: millionFix(value.Q4QtrValue,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            Q1CmlValue: millionFix(value.Q1CmlValue,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            Q2CmlValue: millionFix(value.Q2CmlValue,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            Q3CmlValue: millionFix(value.Q3CmlValue,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            Q4CmlValue: millionFix(value.Q4CmlValue,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            forecastThisFY: millionFix(value.forecastThisFY,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            forecastRevision1: millionFix(value.forecastRevision1,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            forecastRevision2: millionFix(value.forecastRevision2,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            forecastRevision3: millionFix(value.forecastRevision3,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            forecastNextFY: millionFix(value.forecastNextFY,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
        } satisfies EarningsV2)

        dataLastFY.set(key, {
            name: dataLastFY.get(key)?.name ?? "Error",
            Q1QtrValue: millionFix(dataLastFY.get(key)?.Q1QtrValue ?? none,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            Q2QtrValue: millionFix(dataLastFY.get(key)?.Q2QtrValue ?? none,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            Q3QtrValue: millionFix(dataLastFY.get(key)?.Q3QtrValue ?? none,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            Q4QtrValue: millionFix(dataLastFY.get(key)?.Q4QtrValue ?? none,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            Q1CmlValue: millionFix(dataLastFY.get(key)?.Q1CmlValue ?? none,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            Q2CmlValue: millionFix(dataLastFY.get(key)?.Q2CmlValue ?? none,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            Q3CmlValue: millionFix(dataLastFY.get(key)?.Q3CmlValue ?? none,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            Q4CmlValue: millionFix(dataLastFY.get(key)?.Q4CmlValue ?? none,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            forecastThisFY: millionFix(dataLastFY.get(key)?.forecastThisFY ?? none,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            forecastRevision1: millionFix(dataLastFY.get(key)?.forecastRevision1 ?? none,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            forecastRevision2: millionFix(dataLastFY.get(key)?.forecastRevision2 ?? none,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            forecastRevision3: millionFix(dataLastFY.get(key)?.forecastRevision3 ?? none,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
            forecastNextFY: millionFix(dataLastFY.get(key)?.forecastNextFY ?? none,(key === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
        } satisfies EarningsV2)
    })

    // Sales Per Software Unit data has to be made after millionFix
    dataThisFY.set(dataThisFY.size, {
        name: "Sales Per Software Unit",
        Q1QtrValue: salesPerSoftwareUnitCalculation(dataThisFY.get(0)?.Q1QtrValue ?? none, dataThisFY.get(1)?.Q1QtrValue ?? none),
        Q2QtrValue: salesPerSoftwareUnitCalculation(dataThisFY.get(0)?.Q2QtrValue ?? none, dataThisFY.get(1)?.Q2QtrValue ?? none),
        Q3QtrValue: salesPerSoftwareUnitCalculation(dataThisFY.get(0)?.Q3QtrValue ?? none, dataThisFY.get(1)?.Q3QtrValue ?? none),
        Q4QtrValue: salesPerSoftwareUnitCalculation(dataThisFY.get(0)?.Q4QtrValue ?? none, dataThisFY.get(1)?.Q4QtrValue ?? none),
        Q1CmlValue: salesPerSoftwareUnitCalculation(dataThisFY.get(0)?.Q1CmlValue ?? none, dataThisFY.get(1)?.Q1CmlValue ?? none),
        Q2CmlValue: salesPerSoftwareUnitCalculation(dataThisFY.get(0)?.Q2CmlValue ?? none, dataThisFY.get(1)?.Q2CmlValue ?? none),
        Q3CmlValue: salesPerSoftwareUnitCalculation(dataThisFY.get(0)?.Q3CmlValue ?? none, dataThisFY.get(1)?.Q3CmlValue ?? none),
        Q4CmlValue: salesPerSoftwareUnitCalculation(dataThisFY.get(0)?.Q4CmlValue ?? none, dataThisFY.get(1)?.Q4CmlValue ?? none),
        forecastThisFY: salesPerSoftwareUnitCalculation(dataThisFY.get(0)?.forecastThisFY ?? none, dataThisFY.get(1)?.forecastThisFY ?? none),
        forecastRevision1: salesPerSoftwareUnitCalculation(dataThisFY.get(0)?.forecastRevision1 ?? none, dataThisFY.get(1)?.forecastRevision1 ?? none),
        forecastRevision2: salesPerSoftwareUnitCalculation(dataThisFY.get(0)?.forecastRevision2 ?? none, dataThisFY.get(1)?.forecastRevision2 ?? none),
        forecastRevision3: salesPerSoftwareUnitCalculation(dataThisFY.get(0)?.forecastRevision3 ?? none, dataThisFY.get(1)?.forecastRevision3 ?? none),
        forecastNextFY: salesPerSoftwareUnitCalculation(dataThisFY.get(0)?.forecastNextFY ?? none, dataThisFY.get(1)?.forecastNextFY ?? none),
        footnotes: dataThisFY.get(0)?.footnotes
    } satisfies EarningsV2);

    dataLastFY.set(dataLastFY.size, {
        name: "Sales Per Software Unit",
        Q1QtrValue: salesPerSoftwareUnitCalculation(dataLastFY.get(0)?.Q1QtrValue ?? none, dataLastFY.get(1)?.Q1QtrValue ?? none),
        Q2QtrValue: salesPerSoftwareUnitCalculation(dataLastFY.get(0)?.Q2QtrValue ?? none, dataLastFY.get(1)?.Q2QtrValue ?? none),
        Q3QtrValue: salesPerSoftwareUnitCalculation(dataLastFY.get(0)?.Q3QtrValue ?? none, dataLastFY.get(1)?.Q3QtrValue ?? none),
        Q4QtrValue: salesPerSoftwareUnitCalculation(dataLastFY.get(0)?.Q4QtrValue ?? none, dataLastFY.get(1)?.Q4QtrValue ?? none),
        Q1CmlValue: salesPerSoftwareUnitCalculation(dataLastFY.get(0)?.Q1CmlValue ?? none, dataLastFY.get(1)?.Q1CmlValue ?? none),
        Q2CmlValue: salesPerSoftwareUnitCalculation(dataLastFY.get(0)?.Q2CmlValue ?? none, dataLastFY.get(1)?.Q2CmlValue ?? none),
        Q3CmlValue: salesPerSoftwareUnitCalculation(dataLastFY.get(0)?.Q3CmlValue ?? none, dataLastFY.get(1)?.Q3CmlValue ?? none),
        Q4CmlValue: salesPerSoftwareUnitCalculation(dataLastFY.get(0)?.Q4CmlValue ?? none, dataLastFY.get(1)?.Q4CmlValue ?? none),
        forecastThisFY: salesPerSoftwareUnitCalculation(dataLastFY.get(0)?.forecastThisFY ?? none, dataLastFY.get(1)?.forecastThisFY ?? none),
        forecastRevision1: salesPerSoftwareUnitCalculation(dataLastFY.get(0)?.forecastRevision1 ?? none, dataLastFY.get(1)?.forecastRevision1 ?? none),
        forecastRevision2: salesPerSoftwareUnitCalculation(dataLastFY.get(0)?.forecastRevision2 ?? none, dataLastFY.get(1)?.forecastRevision2 ?? none),
        forecastRevision3: salesPerSoftwareUnitCalculation(dataLastFY.get(0)?.forecastRevision3 ?? none, dataLastFY.get(1)?.forecastRevision3 ?? none),
        forecastNextFY: salesPerSoftwareUnitCalculation(dataLastFY.get(0)?.forecastNextFY ?? none, dataLastFY.get(1)?.forecastNextFY ?? none),
    } satisfies EarningsV2);

    // console.log(dataThisFY);
    // console.log(dataLastFY.get(0)?.Q1CmlValue);
    // console.log(dataLastFY.get(1)?.Q1CmlValue);
    // console.log(dataLastFY.get(2)?.Q1CmlValue);
    // console.log("break");
    // console.log(dataThisFY.get(0)?.Q1CmlValue);
    // console.log(dataThisFY.get(1)?.Q1CmlValue);
    // console.log(dataThisFY.get(2)?.Q1CmlValue);
    
    
    
    percentagesThisFY.set(percentagesThisFY.size, {
        name: "Sales Per Software Unit",
        Q1QtrValue: yearOnYearCalculationV2(dataThisFY.get(dataThisFY.size-1)?.Q1QtrValue ?? none, dataLastFY.get(dataLastFY.size-1)?.Q1QtrValue ?? none, "Quarter"),
        Q2QtrValue: yearOnYearCalculationV2(dataThisFY.get(dataThisFY.size-1)?.Q2QtrValue ?? none, dataLastFY.get(dataLastFY.size-1)?.Q2QtrValue ?? none, "Quarter"),
        Q3QtrValue: yearOnYearCalculationV2(dataThisFY.get(dataThisFY.size-1)?.Q3QtrValue ?? none, dataLastFY.get(dataLastFY.size-1)?.Q3QtrValue ?? none, "Quarter"),
        Q4QtrValue: yearOnYearCalculationV2(dataThisFY.get(dataThisFY.size-1)?.Q4QtrValue ?? none, dataLastFY.get(dataLastFY.size-1)?.Q4QtrValue ?? none, "Quarter"),
        Q1CmlValue: yearOnYearCalculationV2(dataThisFY.get(dataThisFY.size-1)?.Q1CmlValue ?? none, dataLastFY.get(dataLastFY.size-1)?.Q1CmlValue ?? none, "Cumulative"),
        Q2CmlValue: yearOnYearCalculationV2(dataThisFY.get(dataThisFY.size-1)?.Q2CmlValue ?? none, dataLastFY.get(dataLastFY.size-1)?.Q2CmlValue ?? none, "Cumulative"),
        Q3CmlValue: yearOnYearCalculationV2(dataThisFY.get(dataThisFY.size-1)?.Q3CmlValue ?? none, dataLastFY.get(dataLastFY.size-1)?.Q3CmlValue ?? none, "Cumulative"),
        Q4CmlValue: yearOnYearCalculationV2(dataThisFY.get(dataThisFY.size-1)?.Q4CmlValue ?? none, dataLastFY.get(dataLastFY.size-1)?.Q4CmlValue ?? none, "Cumulative"),
        forecastThisFY: yearOnYearCalculationV2(dataThisFY.get(dataThisFY.size-1)?.forecastThisFY ?? none, dataLastFY.get(dataLastFY.size-1)?.forecastThisFY ?? none, "Forecast"),
        forecastRevision1: yearOnYearCalculationV2(dataThisFY.get(dataThisFY.size-1)?.forecastRevision1 ?? none, dataLastFY.get(dataLastFY.size-1)?.forecastRevision1 ?? none, "Forecast"),
        forecastRevision2: yearOnYearCalculationV2(dataThisFY.get(dataThisFY.size-1)?.forecastRevision2 ?? none, dataLastFY.get(dataLastFY.size-1)?.forecastRevision2 ?? none, "Forecast"),
        forecastRevision3: yearOnYearCalculationV2(dataThisFY.get(dataThisFY.size-1)?.forecastRevision3 ?? none, dataLastFY.get(dataLastFY.size-1)?.forecastRevision3 ?? none, "Forecast"),
        forecastNextFY: yearOnYearCalculationV2(dataThisFY.get(dataThisFY.size-1)?.forecastNextFY ?? none, dataLastFY.get(dataLastFY.size-1)?.forecastNextFY ?? none, "Forecast"),
    } satisfies EarningsV2)


    const nameHeader = liner(
            printTextBlock(dataThisFY.get(0)?.name, 50)
        ,"−","top",true,50)
    const salesHeader = nameHeader + generalSalesHeaderV2(12, 12, 9, 10, 7);

    // need millionFix
    const printQtrAndCml = new Map<number, string>();

    const printForecasts = new Map<number, string>();

    

    dataThisFY.forEach((value, key, map) => {

        const getTextLength = (key === 0) ? 12 : (key === 1) ? 11 : 11;

        printQtrAndCml.set(0, (printQtrAndCml.get(0) ?? "") + printQuarterValuesV2(value.Q1QtrValue,currentQuarter, getTextLength,(key === 0) ? false : true))
        printQtrAndCml.set(1, (printQtrAndCml.get(1) ?? "") + printYoYV2(percentagesThisFY.get(key)?.Q1QtrValue ?? none,currentQuarter, getTextLength,(key === 0) ? true : false))

        printQtrAndCml.set(2, (printQtrAndCml.get(2) ?? "") + printQuarterValuesV2(value.Q2QtrValue,currentQuarter, getTextLength,(key === 0) ? false : true))
        printQtrAndCml.set(3, (printQtrAndCml.get(3) ?? "") + printYoYV2(percentagesThisFY.get(key)?.Q2QtrValue ?? none,currentQuarter, getTextLength,(key === 0) ? true : false))

        printQtrAndCml.set(4, (printQtrAndCml.get(4) ?? "") + printQuarterValuesV2(value.Q3QtrValue,currentQuarter, getTextLength,(key === 0) ? false : true))
        printQtrAndCml.set(5, (printQtrAndCml.get(5) ?? "") + printYoYV2(percentagesThisFY.get(key)?.Q3QtrValue ?? none,currentQuarter, getTextLength,(key === 0) ? true : false))

        printQtrAndCml.set(6, (printQtrAndCml.get(6) ?? "") + printQuarterValuesV2(value.Q4QtrValue,currentQuarter, getTextLength,(key === 0) ? false : true))
        printQtrAndCml.set(7, (printQtrAndCml.get(7) ?? "") + printYoYV2(percentagesThisFY.get(key)?.Q4QtrValue ?? none,currentQuarter, getTextLength,(key === 0) ? true : false))

        printQtrAndCml.set(8, (printQtrAndCml.get(8) ?? "") + printCumulativeValuesV2(value.Q2CmlValue,currentQuarter, getTextLength,(key === 0) ? false : true))
        printQtrAndCml.set(9, (printQtrAndCml.get(9) ?? "") + printYoYV2(percentagesThisFY.get(key)?.Q2CmlValue ?? none,currentQuarter, getTextLength,(key === 0) ? true : false))

        printQtrAndCml.set(10, (printQtrAndCml.get(10) ?? "") + printCumulativeValuesV2(value.Q3CmlValue,currentQuarter, getTextLength,(key === 0) ? false : true))
        printQtrAndCml.set(11, (printQtrAndCml.get(11) ?? "") + printYoYV2(percentagesThisFY.get(key)?.Q3CmlValue ?? none,currentQuarter, getTextLength,(key === 0) ? true : false))

        printQtrAndCml.set(12, (printQtrAndCml.get(12) ?? "") + printCumulativeValuesV2(value.Q4CmlValue,currentQuarter, getTextLength,(key === 0) ? false : true))
        printQtrAndCml.set(13, (printQtrAndCml.get(13) ?? "") + printYoYV2(percentagesThisFY.get(key)?.Q4CmlValue ?? none,currentQuarter, getTextLength,(key === 0) ? true : false))
        
        printForecasts.set(0, (printForecasts.get(0) ?? "") + printForecastValuesV2(value.forecastThisFY,getTextLength))
        printForecasts.set(1, (printForecasts.get(1) ?? "") + printForecastValuesV2(value.forecastRevision1,getTextLength))
        printForecasts.set(2, (printForecasts.get(2) ?? "") + printForecastValuesV2(value.forecastRevision2,getTextLength))
        printForecasts.set(3, (printForecasts.get(3) ?? "") + printForecastValuesV2(value.forecastRevision3,getTextLength))
        printForecasts.set(4, (printForecasts.get(4) ?? "") + printForecastValuesV2(value.forecastNextFY,getTextLength))

    })

    printQtrAndCml.forEach((value, key, map) => {

        let doubleLine: "=" | "−" = (value.includes("Cml.") 
                ? "=" 
                : value.includes("4th")
                    ? "=" 
                    : "−")

        if (key % 2 === 0) {
            map.set(key, liner(
                value + "\n" + (map.get(key+1) ?? ""), doubleLine,"bottom",true,50
            ))
        } else {
           map.delete(key)
        }
    })

    printQtrAndCml.set(printQtrAndCml.size*3,
        liner(printTextBlock(dataThisFY.get(0)?.footnotes, 50),"−","bottom",true,50)
        )
    
    printForecasts.forEach((value, key, map) => {

        let doubleLine: "=" | "−" = (key === 4) ? "=" : "−";

        map.set(key, liner(value,"−","bottom",true,50))
    })

    printForecasts.set(printForecasts.size,
        liner(printTextBlock(dataThisFY.get(0)?.footnotes, 50),"−","bottom",true,50))
    
    return [printOne, salesHeader, ...printQtrAndCml.values(), ...printForecasts.values()].reduce((acc, next) => acc + next);

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
