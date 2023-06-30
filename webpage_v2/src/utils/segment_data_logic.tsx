import { printTextBlock, border, liner, spacer, dateLabel, headerPrint  } from "./table_design_logic";
import { printQuarterValuesV2, 
    printYoYV2, 
    printCumulativeValuesV2,
    printForecastValuesV2,
    yearOnYearCalculationV2,
    type EarningsV2, 
    type EarningsValue } from "./general_earnings_logic";
import { valuesMakeV2, nothingCheck, type EarningsMakeV2, type EarningsJSONV2, getData } from "../data/generalTables/consolidated_earnings_general";
import { extractValue } from "../data/generalTables/sales_per_software_unit_cml";

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

export type HeaderV2 = {
    companyName: string;
    fiscalYear: string;
    title: string;
}

const generalSalesHeader = 
`+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
|             |             |          | Sales Per |
|             |             | Software |  Software |
|             |       Sales |    Units |      Unit |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n`;

export function generalSalesHeaderV2(
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


function printSalesColumnOnly(
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

export function millionFix(value: EarningsValue, changeFrom: "Billion" | "Million" | "Hundred Thousand" | "Ten Thousand" | "One Thousand"): EarningsValue {

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

export function salesPerSoftwareUnitCalculation(sales: EarningsValue, units: EarningsValue): EarningsValue {
    // sales and units have to be the same units e.g. M 

    return (sales.kind !== "Nothing" && units.kind !== "Nothing")
        ? {
            ...sales,
            value: Number((sales.value / units.value).toFixed(0))
        } satisfies EarningsValue
        : { kind: "Nothing" }
}

export function generalSalesPerSoftwareUnitListV2Map(collectionThisFY: EarningsJSONV2, collectionLastFY: EarningsJSONV2 | undefined, headerLength: number, 
    salesRoundtoMillion: "Billion" | "Million" | "Hundred Thousand" | "Ten Thousand" | "One Thousand",
    unitsRoundtoMillion: "Billion" | "Million" | "Hundred Thousand" | "Ten Thousand" | "One Thousand",
    removeHeader?: boolean,
    salesOnly?: boolean,
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

    const printOne = (!removeHeader)
        ? headerPrint([
            makeHeader.companyName + " | " + makeHeader.fiscalYear,
            makeHeader.title
        ],headerLength) + "\n" + printDateLabel
        : ""

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

    const nameSalesHeader = liner(
            printTextBlock(dataThisFY.get(0)?.name, 50)
        ,"−","top",true,50) + generalSalesHeaderV2(12, 12, 9, 10, 7);

    const nameForecastHeader = liner(
        printTextBlock(dataThisFY.get(0)?.name + " Forecast", 54), "−", "top", true, 54) + generalSalesHeaderV2(16, 12, 9, 10, 7);

    const printQtrAndCml = new Map<number, string>();

    const printForecasts = new Map<number, string>();

    dataThisFY.forEach((value, key, map) => {

        const getTextLength = (key === 0) ? 12 : (key === 1) ? 11 : 11;

        printQtrAndCml.set(0, (printQtrAndCml.get(0) ?? "") + printQuarterValuesV2(value.Q1QtrValue,currentQuarter, getTextLength,(key === 0) ? false : true, (key === 2 ? "None" : undefined)))
            printQtrAndCml.set(1, (printQtrAndCml.get(1) ?? "") + printYoYV2(percentagesThisFY.get(key)?.Q1QtrValue ?? none,currentQuarter, getTextLength,(key === 0) ? true : false))

        printQtrAndCml.set(2, (printQtrAndCml.get(2) ?? "") + printQuarterValuesV2(value.Q2QtrValue,currentQuarter, getTextLength,(key === 0) ? false : true, (key === 2 ? "None" : undefined)))
            printQtrAndCml.set(3, (printQtrAndCml.get(3) ?? "") + printYoYV2(percentagesThisFY.get(key)?.Q2QtrValue ?? none,currentQuarter, getTextLength,(key === 0) ? true : false))

        printQtrAndCml.set(4, (printQtrAndCml.get(4) ?? "") + printQuarterValuesV2(value.Q3QtrValue,currentQuarter, getTextLength,(key === 0) ? false : true, (key === 2 ? "None" : undefined)))
            printQtrAndCml.set(5, (printQtrAndCml.get(5) ?? "") + printYoYV2(percentagesThisFY.get(key)?.Q3QtrValue ?? none,currentQuarter, getTextLength,(key === 0) ? true : false))

        printQtrAndCml.set(6, (printQtrAndCml.get(6) ?? "") + printQuarterValuesV2(value.Q4QtrValue,currentQuarter, getTextLength,(key === 0) ? false : true, (key === 2 ? "None" : undefined)))
            printQtrAndCml.set(7, (printQtrAndCml.get(7) ?? "") + printYoYV2(percentagesThisFY.get(key)?.Q4QtrValue ?? none,currentQuarter, getTextLength,(key === 0) ? true : false))

        printQtrAndCml.set(8, (printQtrAndCml.get(8) ?? "") + printCumulativeValuesV2(value.Q2CmlValue,currentQuarter, getTextLength,(key === 0) ? false : true, (key === 2 ? "None" : undefined)))
            printQtrAndCml.set(9, (printQtrAndCml.get(9) ?? "") + printYoYV2(percentagesThisFY.get(key)?.Q2CmlValue ?? none,currentQuarter, getTextLength,(key === 0) ? true : false))

        printQtrAndCml.set(10, (printQtrAndCml.get(10) ?? "") + printCumulativeValuesV2(value.Q3CmlValue,currentQuarter, getTextLength,(key === 0) ? false : true, (key === 2 ? "None" : undefined)))
            printQtrAndCml.set(11, (printQtrAndCml.get(11) ?? "") + printYoYV2(percentagesThisFY.get(key)?.Q3CmlValue ?? none,currentQuarter, getTextLength,(key === 0) ? true : false))

        printQtrAndCml.set(12, (printQtrAndCml.get(12) ?? "") + printCumulativeValuesV2(value.Q4CmlValue,currentQuarter, getTextLength,(key === 0) ? false : true, (key === 2 ? "None" : undefined)))
            printQtrAndCml.set(13, (printQtrAndCml.get(13) ?? "") + printYoYV2(percentagesThisFY.get(key)?.Q4CmlValue ?? none,currentQuarter, getTextLength,(key === 0) ? true : false))
        
        printForecasts.set(0, (printForecasts.get(0) ?? "") + printForecastValuesV2(value.forecastThisFY,getTextLength, (key === 0) ? false : true, (key === 2 ? "None" : undefined)))
        printForecasts.set(1, (printForecasts.get(1) ?? "") + printForecastValuesV2(value.forecastRevision1,getTextLength, (key === 0) ? false : true, (key === 2 ? "None" : undefined)))
        printForecasts.set(2, (printForecasts.get(2) ?? "") + printForecastValuesV2(value.forecastRevision2,getTextLength, (key === 0) ? false : true, (key === 2 ? "None" : undefined)))
        printForecasts.set(3, (printForecasts.get(3) ?? "") + printForecastValuesV2(value.forecastRevision3,getTextLength, (key === 0) ? false : true, (key === 2 ? "None" : undefined)))
        printForecasts.set(4, (printForecasts.get(4) ?? "") + printForecastValuesV2(value.forecastNextFY,getTextLength, (key === 0) ? false : true, (key === 2 ? "None" : undefined)))

    })

    function doubleLine(value: string) {
        let doubleLine: "=" | "−" = (value.includes("Cml.") 
            ? "=" 
            : value.includes("4th")
                ? "=" 
                : "−")

        return doubleLine
    }

    const mapAndReduceQtrCml: string = [...printQtrAndCml.values()]
        .flatMap((elem, index, array) => (index % 2 === 0 && elem.length !== 0) ? elem + (array[index+1].length === 0 ? "" : "\n" + array[index+1]) : [])
        .concat(printTextBlock(dataThisFY.get(0)?.footnotes, (salesOnly) ? 27 : 50) ?? [])
        .reduce((acc, next) => acc + liner(next,doubleLine(next),"bottom",true,(salesOnly) ? 27 : 50),"")

    const mapForecast: string[] = [...printForecasts.values()].flatMap((elem) => (elem.length !== 0) ? elem : []);

    const concatForecast = (mapForecast.length !== 0)
        ? mapForecast.concat(printTextBlock(dataThisFY.get(0)?.footnotes, 54) ?? [])
        : mapForecast
    
    const reduceForecast = concatForecast
        .reduce((acc, next, index, array) => acc + liner(next,(array[index] === array.at(-2) ? "=" : "−"),"bottom",true,54),"") 

    const finalForecast = (mapForecast.length !== 0)
        ? nameForecastHeader + reduceForecast
        : reduceForecast

    return [
        printOne, 
        nameSalesHeader, 
        mapAndReduceQtrCml,
        finalForecast,
        "###\n"
    ].reduce((acc, next) => acc + next);
}

export function graphMakeV2 (collectionThisFY: EarningsJSONV2, collectionLastFY: EarningsJSONV2 | undefined, salesRoundtoMillion: "Billion" | "Million" | "Hundred Thousand" | "Ten Thousand" | "One Thousand", unitsRoundtoMillion: "Billion" | "Million" | "Hundred Thousand" | "Ten Thousand" | "One Thousand") {

    const none: EarningsValue = { kind:"Nothing" };

    const dataThisFY = getData(collectionThisFY, collectionThisFY.data.length);

    const dataLastFY = getData(collectionLastFY, collectionThisFY.data.length);

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


    let thisFY: string = collectionThisFY.fiscalYear;
    let lastFY: string = thisFY.slice(0, 4) + (Number(thisFY.slice(-4)) - 1).toString();

    let marchThisFY: string = "March " + thisFY.slice(4);
    let marchLastFY: string = "March " + lastFY.slice(4);

    return {
        thisFY: thisFY,
        lastFY: lastFY,
        marchThisFY: marchThisFY,
        marchLastFY: marchLastFY,
        dataThisFY: dataThisFY,
        dataLastFY: dataLastFY,
    }
}

// export const graphMake = (salesDataThisFY: Section[], salesDataLastFY: Section[], salesUnitsThisFY: Section[], salesUnitsLastFY: Section[], segmentName: string, fiscalYear: string, currentQuarter: number) => {

//     let quartersSalesThisFY = quarterlyCalculation(salesDataThisFY);
//     let quartersSalesLastFY = quarterlyCalculation(salesDataLastFY);

//     let quartersUnitsThisFY = quarterlyCalculation(salesUnitsThisFY); 
//     let quartersUnitsLastFY = quarterlyCalculation(salesUnitsLastFY);

//     let quarterSalesPerSoftwareUnitThisFY: Section[] = quartersSalesThisFY.filter((elem, index, array) => {
//             return index < currentQuarter 
//         }).map((elem, index, array) => { 
//             // sales has to be converted from billion yen to million yen. units has to be converted from thousands to millions
//             let calculateSalesPerSoftware: number = Number(((elem.value * 1000) / (quartersUnitsThisFY[index].value / 1000)).toFixed(0))

//             return { ...elem, units: "salesPerSoftwareUnit", value: calculateSalesPerSoftware}
//         })

//     let quarterSalesPerSoftwareUnitLastFY: Section[] = quartersSalesLastFY.filter((elem, index, array) => {
//             return index < currentQuarter 
//         }).map((elem, index, array) => { 
//             // sales has to be converted from billion yen to million yen. units has to be converted from thousands to millions
//             let calculateSalesPerSoftware: number = Number(((elem.value * 1000) / (quartersUnitsLastFY[index].value / 1000)).toFixed(0))

//             return { ...elem, units: "salesPerSoftwareUnit", value: calculateSalesPerSoftware}
//         })

//     let cumulativeSalesPerSoftwareUnitThisFY: Section[] = salesDataThisFY.filter((elem, index, array) => {
//             return index < currentQuarter 
//         }).map((elem, index, array) => { 
//             // sales has to be converted from billion yen to million yen. units has to be converted from thousands to millions
//             let calculateSalesPerSoftware: number = Number(((elem.value * 1000) / (salesUnitsThisFY[index].value / 1000)).toFixed(0))

//             return { ...elem, units: "salesPerSoftwareUnit", value: calculateSalesPerSoftware}
//         })

//     let cumulativeSalesPerSoftwareUnitLastFY: Section[]= salesDataLastFY.filter((elem, index, array) => {
//             return index < currentQuarter 
//         }).map((elem, index, array) => { 
//             // sales has to be converted from billion yen to million yen. units has to be converted from thousands to millions
//             let calculateSalesPerSoftware: number = Number(((elem.value * 1000) / (salesUnitsLastFY[index].value / 1000)).toFixed(0))

//             return { ...elem, units: "salesPerSoftwareUnit", value: calculateSalesPerSoftware}
//         })

//     let thisFY: string = fiscalYear;
//     let lastFY: string = thisFY.slice(0, 4) + (Number(thisFY.slice(-4)) - 1).toString();

//     let marchThisFY: string = "March " + thisFY.slice(4);
//     let marchLastFY: string = "March " + lastFY.slice(4);

//     let quarterValuesThisFYList = [
//         quartersSalesThisFY,
//         quartersUnitsThisFY,
//         quarterSalesPerSoftwareUnitThisFY,
//     ];

//     let quarterValuesLastFYList = [
//         quartersSalesLastFY,
//         quartersUnitsLastFY,
//         quarterSalesPerSoftwareUnitLastFY,
//     ];

//     let cmlValuesThisFYList = [
//         salesDataThisFY,
//         salesUnitsThisFY,
//         cumulativeSalesPerSoftwareUnitThisFY,
//     ];

//     let cmlValuesLastFYList = [
//         salesDataLastFY,
//         salesUnitsLastFY,
//         cumulativeSalesPerSoftwareUnitLastFY,
//     ];

//     let graphData = {
//         segmentName: segmentName,
//         thisFY: thisFY,
//         lastFY: lastFY,
//         marchThisFY: marchThisFY,
//         marchLastFY: marchLastFY,
//         quarterValuesThisFY: quarterValuesThisFYList,
//         quarterValuesLastFY: quarterValuesLastFYList,
//         cumulativeValuesThisFY: cmlValuesThisFYList,
//         cumulativeValuesLastFY: cmlValuesLastFYList,
//     } 

//         return graphData
// };
