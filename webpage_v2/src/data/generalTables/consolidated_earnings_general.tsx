import {
    Header,
    EarningsV2,
    forecastOutput,
    operatingMarginCalculationV2,
    printForecastValuesV2,
    printQuarterValuesV2,
    printCumulativeValuesV2,
    printReduceSection,
    printYoYV2,
    qtrOrCmlOutput,
    printSectionHeaderV2,
    quarterlyCalculationV2,
    yearOnYearCalculationV2,
    EarningsValue,
} from "../../utils/general_earnings_logic";
import { headerPrint, dateLabel, liner, border, spacer, globImport } from "../../utils/table_design_logic";

export type EarningsJSONV2 = {
    currentQuarter: number,
    companyName: string,
    fiscalYear: string,
    data: EarningsMakeV2[],
};

export type EarningsMakeV2 = {
        name: string,
        units: string,
        Q1CmlValue: number | string,
        Q2CmlValue: number | string,
        Q3CmlValue: number | string,
        Q4CmlValue: number | string,
        forecastThisFY?: number | null | string,
        forecastRevision1?: number | null,
        forecastRevision2?: number | null,
        forecastRevision3?: number | null,
        forecastNextFY?: number | null | string, 
        footnotes?: string,
}; 

export function nothingCheck(
    value: number | string | null | undefined, 
    kind: "Quarter" | "Cumulative" | "Forecast",
    units: "units" | "currency" | "percentage",
    qtrPeriod: "1st Quarter" | "2nd Quarter" | "3rd Quarter" | "4th Quarter",
    cmlPeriod: "1st Quarter" | "First Half" | "First Three Quarters" | "FY Cumulative", 
    forecastPeriod: "Current FY FCST" | "FCST Revision 1" | "FCST Revision 2" | "FCST Revision 3" | "Next FY FCST", 
    thisFY: string | undefined,
    ): EarningsValue {

    switch (typeof value) {
        case ("number"):
            
            if (kind === "Cumulative") {
                return {
                    kind: "Cumulative",
                    period: cmlPeriod, 
                    thisFY: thisFY + " Cml.",
                    units: units,
                    value: value as number
                } satisfies EarningsValue 
            } else if (kind === "Forecast") {
                return {
                    kind: "Forecast",
                    period: forecastPeriod,
                    units: units,
                    thisFY: thisFY + " Forecast",
                    nextFY: thisFY?.slice(0,4) + (Number(thisFY?.slice(-4)) + 1).toString() + " Forecast",
                    value: value as number
                } satisfies EarningsValue
            } else {
                return {
                    kind: "Quarter",
                    period: qtrPeriod,
                    units: units,
                    value: value as number
                } satisfies EarningsValue
            }
            

        default:
            // all types that are not a number
            return { kind: "Nothing" };
    }
}

const collectionNintendoV2 = globImport(new Map<number, EarningsJSONV2>(), import.meta.glob("../nintendo/Consolidated_Earnings/*.json", { import: "default", eager: true }), "YearDescSort");

export const collectionCapcomV2 = globImport(new Map<number, EarningsJSONV2>(), import.meta.glob("../capcom/Consolidated_Earnings/*.json", { import: "default", eager: true }), "Descending");

const collectionBandaiNamcoV2 = globImport(new Map<number, EarningsJSONV2>(), import.meta.glob("../bandaiNamco/Consolidated_Earnings/*.json", { import: "default", eager: true }), "Descending");

const collectionSegaSammyV2 = globImport(new Map<number, EarningsJSONV2>(), import.meta.glob("../sega/Consolidated_Earnings/*.json", { import: "default", eager: true }), "Descending");

const collectionKoeiTecmoV2 = globImport(new Map<number, EarningsJSONV2>(), import.meta.glob("../koeiTecmo/Consolidated_Earnings/*.json", { import: "default", eager: true }), "Descending");

const collectionSquareEnixV2 = globImport(new Map<number, EarningsJSONV2>(), import.meta.glob("../squareEnix/Consolidated_Earnings/*.json", { import: "default", eager: true }), "Descending");

export function typeReturn(typeValue: string | undefined): "units" | "currency" | "percentage" {

    switch (typeValue) {
        case "units":
            return "units"        
        
        case "currency":
            return "currency"

        case "percentage":
            return "percentage"
    
        default:
            // console.log("undefined typeValue");
            return "units"
    }
}

export function valuesMakeV2(obj: undefined | EarningsMakeV2, fiscalYear: string): EarningsV2 {

    let values: EarningsV2 = {
        name: obj?.name ?? "N/A",
        Q1QtrValue: nothingCheck(obj?.Q1CmlValue, "Quarter", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
        Q2QtrValue: quarterlyCalculationV2(
            nothingCheck(obj?.Q2CmlValue, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q1CmlValue, "Quarter", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear)
        ),
        Q3QtrValue: quarterlyCalculationV2(
            nothingCheck(obj?.Q3CmlValue, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q2CmlValue, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
        ),
        Q4QtrValue: quarterlyCalculationV2(
            nothingCheck(obj?.Q4CmlValue, "Quarter", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q3CmlValue, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q2CmlValue, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
        ),
        Q1CmlValue: nothingCheck(obj?.Q1CmlValue, "Cumulative", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
        Q2CmlValue: nothingCheck(obj?.Q2CmlValue, "Cumulative", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
        Q3CmlValue: nothingCheck(obj?.Q3CmlValue, "Cumulative", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
        Q4CmlValue: nothingCheck(obj?.Q4CmlValue, "Cumulative", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear),
        forecastThisFY: nothingCheck(obj?.forecastThisFY, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
        forecastRevision1: nothingCheck(obj?.forecastRevision1, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 1", fiscalYear),
        forecastRevision2: nothingCheck(obj?.forecastRevision2, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 2", fiscalYear),
        forecastRevision3: nothingCheck(obj?.forecastRevision3, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 3", fiscalYear),
        forecastNextFY: nothingCheck(obj?.forecastNextFY, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Next FY FCST", fiscalYear),
        footnotes: obj?.footnotes,
    }

    return values
}


export const nintendoConsolidatedEarningsList = new Map<number, string>();

export const nintendoConsolidatedEarningsGraphList = new Map();

collectionNintendoV2.forEach((value, key, map) => {

    nintendoConsolidatedEarningsList.set(key,consolidatedEarningsListV2Map(value, map.get(key+1),35))

    nintendoConsolidatedEarningsGraphList.set(key, consolidatedEarningsGraphListV2(value, map.get(key+1)))
});

collectionNintendoV2.clear();

export const capcomConsolidatedEarningsList = new Map<number, string>();

export const capcomConsolidatedEarningsGraphList = new Map();

collectionCapcomV2.forEach((value, key, map) => {

    capcomConsolidatedEarningsList.set(key, consolidatedEarningsListV2Map(value, map.get(key+1), 35))

    capcomConsolidatedEarningsGraphList.set(key, consolidatedEarningsGraphListV2(value, map.get(key+1)))
});

collectionCapcomV2.clear();

export const bandaiNamcoConsolidatedEarningsList = new Map<number, string>();

export const bandaiNamcoConsolidatedEarningsGraphList = new Map();

collectionBandaiNamcoV2.forEach((value, key, map) => {

    bandaiNamcoConsolidatedEarningsList.set(key, consolidatedEarningsListV2Map(value, map.get(key+1), 38))

    bandaiNamcoConsolidatedEarningsGraphList.set(key, consolidatedEarningsGraphListV2(value, map.get(key+1)))
})

collectionBandaiNamcoV2.clear();

export const koeiTecmoConsolidatedEarningsList = new Map<number, string>();

export const koeiTecmoConsolidatedEarningsGraphList = new Map();

collectionKoeiTecmoV2.forEach((value, key, map) => {

    koeiTecmoConsolidatedEarningsList.set(key, consolidatedEarningsListV2Map(value, map.get(key+1), 42))

    koeiTecmoConsolidatedEarningsGraphList.set(key, consolidatedEarningsGraphListV2(value, map.get(key+1)))
})

// must manually garbage collect Map() when keys/values no longer needed
collectionKoeiTecmoV2.clear()

export const segaConsolidatedEarningsList = new Map<number, string>();

export const segaConsolidatedEarningsGraphList = new Map();

collectionSegaSammyV2.forEach((value, key, map) => {

    segaConsolidatedEarningsList.set(key, consolidatedEarningsListV2Map(value, map.get(key+1), 38))

    segaConsolidatedEarningsGraphList.set(key, consolidatedEarningsGraphListV2(value, map.get(key+1)))
});

collectionSegaSammyV2.clear();

export const squareEnixConsolidatedEarningsList = new Map<number, string>();

export const squareEnixConsolidatedEarningsGraphList = new Map();

collectionSquareEnixV2.forEach((value, key, map) => {

    squareEnixConsolidatedEarningsList.set(key, consolidatedEarningsListV2Map(value, map.get(key+1), 42))

    squareEnixConsolidatedEarningsGraphList.set(key, consolidatedEarningsGraphListV2(value, map.get(key+1)))
});

collectionSquareEnixV2.clear();

function consolidatedEarningsListV2Map(collection: EarningsJSONV2, lastFYCollection: EarningsJSONV2 | undefined, headerLength: number): string {

        const currentQuarter = collection.currentQuarter;

        const makeDateLabel = dateLabel(collection?.fiscalYear ?? "N/A", collection?.currentQuarter ?? 4);

        const none: EarningsValue = { kind:"Nothing" };

        const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

        const header: Header = {
            companyName: collection.companyName,
            fiscalYear: collection.fiscalYear,
            title: (collection.companyName === "CAPCOM Co., Ltd." || collection.companyName === "SQUARE ENIX HOLDINGS CO., LTD.") ? "Consolidated Financial Results" : "Consolidated Operating Results",
        };

        const dataThisFY = getData(collection, collection.data.length);

        const dataLastFY = getData(lastFYCollection, collection.data.length);

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

        const printOne = headerPrint([
            header.companyName + " | " + header.fiscalYear,
            header.title
        ],headerLength) + "\n" + printDateLabel;

        const opMargin = new Map<number, EarningsV2>([
            [0,
                {
                    ...dataThisFY.get(1),
                    name: "Operating Margin",
                    Q1QtrValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q1QtrValue ?? none, dataThisFY.get(1)?.Q1QtrValue ?? none, "Quarter"),
                    Q2QtrValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q2QtrValue ?? none, dataThisFY.get(1)?.Q2QtrValue ?? none, "Quarter"),
                    Q3QtrValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q3QtrValue ?? none, dataThisFY.get(1)?.Q3QtrValue ?? none, "Quarter"),
                    Q4QtrValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q4QtrValue ?? none, dataThisFY.get(1)?.Q4QtrValue ?? none, "Quarter"),
                    Q1CmlValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q1CmlValue ?? none, dataThisFY.get(1)?.Q1CmlValue ?? none, "Cumulative"),
                    Q2CmlValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q2CmlValue ?? none, dataThisFY.get(1)?.Q2CmlValue ?? none, "Cumulative"),
                    Q3CmlValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q3CmlValue ?? none, dataThisFY.get(1)?.Q3CmlValue ?? none, "Cumulative"),
                    Q4CmlValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q4CmlValue ?? none, dataThisFY.get(1)?.Q4CmlValue ?? none, "Cumulative"),
                    forecastThisFY: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastThisFY ?? none, dataThisFY.get(1)?.forecastThisFY ?? none, "Forecast"), 
                    forecastRevision1: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastRevision1 ?? none, dataThisFY.get(1)?.forecastRevision1 ?? none, "Forecast"), 
                    forecastRevision2: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastRevision2 ?? none, dataThisFY.get(1)?.forecastRevision2 ?? none, "Forecast"), 
                    forecastRevision3: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastRevision3 ?? none, dataThisFY.get(1)?.forecastRevision3 ?? none, "Forecast"), 
                    forecastNextFY: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastNextFY ?? none, dataThisFY.get(1)?.forecastNextFY ?? none, "Forecast"), 
                } satisfies EarningsV2
            ]
        ]);

        const printEach = new Map<number, string>([
            [0, ""],
            [1, ""],
            [2, ""],
            [3, ""],
        ]);

        printEach.forEach((value, key, map) => {

            if (key === 2) {

                map.set(key, getPrintOpMarginOutput(opMargin, 0, false, currentQuarter))

            } else if (key > 2) {

                map.set(key, getPrintOutput(dataThisFY, percentagesThisFY, key-1, true, currentQuarter))

            } else {

                map.set(key, getPrintOutput(dataThisFY, percentagesThisFY, key, true, currentQuarter))
            }
        })

        return [printOne, ...printEach.values()].reduce((acc, next) => acc + "\n" + next)
};

export function getData(dataCollectionThisFY: EarningsJSONV2 | undefined, dataThisFYLengthForLastFY: number): Map<number, EarningsV2> {

    const dataMap = new Map<number, EarningsV2>();

        if (!dataCollectionThisFY) {
            for (let index = 0; index < dataThisFYLengthForLastFY; index++) {
                dataMap.set(index, valuesMakeV2(undefined, ""))
            }
        } else {
            for (let index = 0; index < dataCollectionThisFY.data.length; index++) {
                dataMap.set(index, valuesMakeV2(dataCollectionThisFY.data[index], dataCollectionThisFY.fiscalYear))
            }
        }

        return dataMap;
}

function getPrintOutput(values: Map<number, EarningsV2>, yoyValues: Map<number, EarningsV2>, key: number, useYoYHeader: boolean, currentQuarter: number): string {

    const none: EarningsValue = { kind:"Nothing" };

    let sectionHeader = printSectionHeaderV2(values.get(key) as EarningsV2, useYoYHeader);

    let quarters = [
        values.get(key)?.Q1QtrValue ?? none,
        values.get(key)?.Q2QtrValue ?? none,
        values.get(key)?.Q3QtrValue ?? none,
        values.get(key)?.Q4QtrValue ?? none,
    ].map(elem => printQuarterValuesV2(elem, currentQuarter, 13)); 

    let quarterPercentages = [
        yoyValues.get(key)?.Q1QtrValue ?? none,
        yoyValues.get(key)?.Q2QtrValue ?? none,
        yoyValues.get(key)?.Q3QtrValue ?? none,
        yoyValues.get(key)?.Q4QtrValue ?? none, 
    ].map(elem => printYoYV2(elem, currentQuarter, 12)); 

    let cumulatives = [
        values.get(key)?.Q2CmlValue ?? none,
        values.get(key)?.Q3CmlValue ?? none,
        values.get(key)?.Q4CmlValue ?? none,
    ].map(elem => printCumulativeValuesV2(elem, currentQuarter, 13)); 

    let cumulativePercentages = [
        yoyValues.get(key)?.Q2CmlValue ?? none,
        yoyValues.get(key)?.Q3CmlValue ?? none,
        yoyValues.get(key)?.Q4CmlValue ?? none,
    ].map(elem => printYoYV2(elem, currentQuarter, 12));

    let forecasts = [
        values.get(key)?.forecastThisFY ?? none,
        values.get(key)?.forecastRevision1 ?? none,
        values.get(key)?.forecastRevision2 ?? none,
        values.get(key)?.forecastRevision3 ?? none,
        values.get(key)?.forecastNextFY ?? none,
    ].map(elem => printForecastValuesV2(elem, 13)); 

    return printReduceSection(
        sectionHeader,
        qtrOrCmlOutput(quarters,quarterPercentages,false),
        qtrOrCmlOutput(cumulatives,cumulativePercentages,false),
        forecastOutput(forecasts),
    )
}

function getPrintOpMarginOutput(value: Map<number, EarningsV2>, key: number, useYoYHeader: boolean, currentQuarter: number): string {

    const none: EarningsValue = { kind:"Nothing" };

    let sectionHeader = printSectionHeaderV2(value.get(key) as EarningsV2, useYoYHeader);

    let quarters = [
        value.get(key)?.Q1QtrValue ?? none,
        value.get(key)?.Q2QtrValue ?? none,
        value.get(key)?.Q3QtrValue ?? none,
        value.get(key)?.Q4QtrValue ?? none,
    ].map(elem => printQuarterValuesV2(elem, currentQuarter, 13)); 
                
    let cumulatives = [
        value.get(key)?.Q2CmlValue ?? none,
        value.get(key)?.Q3CmlValue ?? none,
        value.get(key)?.Q4CmlValue ?? none,
    ].map(elem => printCumulativeValuesV2(elem, currentQuarter, 13));

    let forecasts = [
        value.get(key)?.forecastThisFY ?? none,
        value.get(key)?.forecastRevision1 ?? none,
        value.get(key)?.forecastRevision2 ?? none,
        value.get(key)?.forecastRevision3 ?? none,
        value.get(key)?.forecastNextFY ?? none,
    ].map(elem => printForecastValuesV2(elem, 13))

    return printReduceSection(
        sectionHeader,
        qtrOrCmlOutput(quarters,[],true),
        qtrOrCmlOutput(cumulatives,[],true),
        forecastOutput(forecasts),
    )
}

    // function takeMapGetValue(inputValue: Map<number, EarningsV2>): Map<number, EarningsV2> {

    //     const atomicMap = new Map<string, EarningsValue | string | undefined>();

    //     // Use Object.entries to create key-value pairs [key, value] i.e. a tuple!
    //     Object.entries(inputValue.get(1) as EarningsV2).map(elem => atomicMap.set(elem[0], elem[1]))

    //     atomicMap.forEach((value, key, map) => {
            
    //     })

    // }

function consolidatedEarningsGraphListV2(collection: EarningsJSONV2, lastFYCollection: EarningsJSONV2 | undefined) {

    const none: EarningsValue = { kind:"Nothing" };

    let dataThisFY = getData(collection, collection.data.length);

    let dataLastFY = getData(lastFYCollection, collection.data.length);


    // opmargin
        const opMargin = new Map<number, EarningsV2>([
            [0,
                {
                    ...dataThisFY.get(1),
                    name: "Operating Margin",
                    Q1QtrValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q1QtrValue ?? none, dataThisFY.get(1)?.Q1QtrValue ?? none, "Quarter"),
                    Q2QtrValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q2QtrValue ?? none, dataThisFY.get(1)?.Q2QtrValue ?? none, "Quarter"),
                    Q3QtrValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q3QtrValue ?? none, dataThisFY.get(1)?.Q3QtrValue ?? none, "Quarter"),
                    Q4QtrValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q4QtrValue ?? none, dataThisFY.get(1)?.Q4QtrValue ?? none, "Quarter"),
                    Q1CmlValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q1CmlValue ?? none, dataThisFY.get(1)?.Q1CmlValue ?? none, "Cumulative"),
                    Q2CmlValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q2CmlValue ?? none, dataThisFY.get(1)?.Q2CmlValue ?? none, "Cumulative"),
                    Q3CmlValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q3CmlValue ?? none, dataThisFY.get(1)?.Q3CmlValue ?? none, "Cumulative"),
                    Q4CmlValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q4CmlValue ?? none, dataThisFY.get(1)?.Q4CmlValue ?? none, "Cumulative"),
                    forecastThisFY: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastThisFY ?? none, dataThisFY.get(1)?.forecastThisFY ?? none, "Forecast"), 
                    forecastRevision1: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastRevision1 ?? none, dataThisFY.get(1)?.forecastRevision1 ?? none, "Forecast"), 
                    forecastRevision2: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastRevision2 ?? none, dataThisFY.get(1)?.forecastRevision2 ?? none, "Forecast"), 
                    forecastRevision3: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastRevision3 ?? none, dataThisFY.get(1)?.forecastRevision3 ?? none, "Forecast"), 
                    forecastNextFY: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastNextFY ?? none, dataThisFY.get(1)?.forecastNextFY ?? none, "Forecast"), 
                } satisfies EarningsV2
            ],
            [1,
                {
                    ...dataLastFY.get(1),
                    name: "Operating Margin",
                    Q1QtrValue: operatingMarginCalculationV2(dataLastFY.get(0)?.Q1QtrValue ?? none, dataLastFY.get(1)?.Q1QtrValue ?? none, "Quarter"),
                    Q2QtrValue: operatingMarginCalculationV2(dataLastFY.get(0)?.Q2QtrValue ?? none, dataLastFY.get(1)?.Q2QtrValue ?? none, "Quarter"),
                    Q3QtrValue: operatingMarginCalculationV2(dataLastFY.get(0)?.Q3QtrValue ?? none, dataLastFY.get(1)?.Q3QtrValue ?? none, "Quarter"),
                    Q4QtrValue: operatingMarginCalculationV2(dataLastFY.get(0)?.Q4QtrValue ?? none, dataLastFY.get(1)?.Q4QtrValue ?? none, "Quarter"),
                    Q1CmlValue: operatingMarginCalculationV2(dataLastFY.get(0)?.Q1CmlValue ?? none, dataLastFY.get(1)?.Q1CmlValue ?? none, "Cumulative"),
                    Q2CmlValue: operatingMarginCalculationV2(dataLastFY.get(0)?.Q2CmlValue ?? none, dataLastFY.get(1)?.Q2CmlValue ?? none, "Cumulative"),
                    Q3CmlValue: operatingMarginCalculationV2(dataLastFY.get(0)?.Q3CmlValue ?? none, dataLastFY.get(1)?.Q3CmlValue ?? none, "Cumulative"),
                    Q4CmlValue: operatingMarginCalculationV2(dataLastFY.get(0)?.Q4CmlValue ?? none, dataLastFY.get(1)?.Q4CmlValue ?? none, "Cumulative"),
                    forecastThisFY: operatingMarginCalculationV2(dataLastFY.get(0)?.forecastThisFY ?? none, dataLastFY.get(1)?.forecastThisFY ?? none, "Forecast"), 
                    forecastRevision1: operatingMarginCalculationV2(dataLastFY.get(0)?.forecastRevision1 ?? none, dataLastFY.get(1)?.forecastRevision1 ?? none, "Forecast"), 
                    forecastRevision2: operatingMarginCalculationV2(dataLastFY.get(0)?.forecastRevision2 ?? none, dataLastFY.get(1)?.forecastRevision2 ?? none, "Forecast"), 
                    forecastRevision3: operatingMarginCalculationV2(dataLastFY.get(0)?.forecastRevision3 ?? none, dataLastFY.get(1)?.forecastRevision3 ?? none, "Forecast"), 
                    forecastNextFY: operatingMarginCalculationV2(dataLastFY.get(0)?.forecastNextFY ?? none, dataLastFY.get(1)?.forecastNextFY ?? none, "Forecast"), 
                } satisfies EarningsV2
            ]
        ]);

    let thisFY: string = collection.fiscalYear;
    let lastFY: string = thisFY.slice(0, 4) + (Number(thisFY.slice(-4)) - 1).toString();

    let marchThisFY: string = "March " + thisFY.slice(4);
    let marchLastFY: string = "March " + lastFY.slice(4);

    return {
        thisFY: thisFY,
        lastFY: lastFY,
        marchThisFY: marchThisFY,
        marchLastFY: marchLastFY,
        qtrNetSalesThisFY: [
            dataThisFY.get(0)?.Q1QtrValue,
            dataThisFY.get(0)?.Q2QtrValue,
            dataThisFY.get(0)?.Q3QtrValue,
            dataThisFY.get(0)?.Q4QtrValue,
        ],
        qtrOperatingIncomeThisFY: [
            dataThisFY.get(1)?.Q1QtrValue,
            dataThisFY.get(1)?.Q2QtrValue,
            dataThisFY.get(1)?.Q3QtrValue,
            dataThisFY.get(1)?.Q4QtrValue,
        ],
        qtrOpMarginThisFY: [
            opMargin.get(0)?.Q1QtrValue,
            opMargin.get(0)?.Q2QtrValue,
            opMargin.get(0)?.Q3QtrValue,
            opMargin.get(0)?.Q4QtrValue,
        ],
        qtrNetIncomeThisFY: [
            dataThisFY.get(2)?.Q1QtrValue,
            dataThisFY.get(2)?.Q2QtrValue,
            dataThisFY.get(2)?.Q3QtrValue,
            dataThisFY.get(2)?.Q4QtrValue,
        ],
        cmlNetSalesThisFY: [
            dataThisFY.get(0)?.Q1CmlValue,
            dataThisFY.get(0)?.Q2CmlValue,
            dataThisFY.get(0)?.Q3CmlValue,
            dataThisFY.get(0)?.Q4CmlValue,
        ],
        cmlOperatingIncomeThisFY: [
            dataThisFY.get(1)?.Q1CmlValue,
            dataThisFY.get(1)?.Q2CmlValue,
            dataThisFY.get(1)?.Q3CmlValue,
            dataThisFY.get(1)?.Q4CmlValue,
        ],
        cmlOpMarginThisFY: [
            opMargin.get(0)?.Q1CmlValue,
            opMargin.get(0)?.Q2CmlValue,
            opMargin.get(0)?.Q3CmlValue,
            opMargin.get(0)?.Q4CmlValue,
        ],
        cmlNetIncomeThisFY: [
            dataThisFY.get(2)?.Q1CmlValue,
            dataThisFY.get(2)?.Q2CmlValue,
            dataThisFY.get(2)?.Q3CmlValue,
            dataThisFY.get(2)?.Q4CmlValue,
        ],
        qtrNetSalesLastFY: [
            dataLastFY.get(0)?.Q1QtrValue,
            dataLastFY.get(0)?.Q2QtrValue,
            dataLastFY.get(0)?.Q3QtrValue,
            dataLastFY.get(0)?.Q4QtrValue,
        ],
        qtrOperatingIncomeLastFY: [
            dataLastFY.get(1)?.Q1QtrValue,
            dataLastFY.get(1)?.Q2QtrValue,
            dataLastFY.get(1)?.Q3QtrValue,
            dataLastFY.get(1)?.Q4QtrValue,
        ],
        qtrOpMarginLastFY: [
            opMargin.get(1)?.Q1QtrValue,
            opMargin.get(1)?.Q2QtrValue,
            opMargin.get(1)?.Q3QtrValue,
            opMargin.get(1)?.Q4QtrValue,
        ],
        qtrNetIncomeLastFY: [
            dataLastFY.get(2)?.Q1QtrValue,
            dataLastFY.get(2)?.Q2QtrValue,
            dataLastFY.get(2)?.Q3QtrValue,
            dataLastFY.get(2)?.Q4QtrValue,
        ],
        cmlNetSalesLastFY: [
            dataLastFY.get(0)?.Q1CmlValue,
            dataLastFY.get(0)?.Q2CmlValue,
            dataLastFY.get(0)?.Q3CmlValue,
            dataLastFY.get(0)?.Q4CmlValue,
        ],
        cmlOperatingIncomeLastFY: [
            dataLastFY.get(1)?.Q1CmlValue,
            dataLastFY.get(1)?.Q2CmlValue,
            dataLastFY.get(1)?.Q3CmlValue,
            dataLastFY.get(1)?.Q4CmlValue,
        ],
        cmlOpMarginLastFY: [
            opMargin.get(1)?.Q1CmlValue,
            opMargin.get(1)?.Q2CmlValue,
            opMargin.get(1)?.Q3CmlValue,
            opMargin.get(1)?.Q4CmlValue,
        ],
        cmlNetIncomeLastFY: [
            dataLastFY.get(2)?.Q1CmlValue,
            dataLastFY.get(2)?.Q2CmlValue,
            dataLastFY.get(2)?.Q3CmlValue,
            dataLastFY.get(2)?.Q4CmlValue,
        ],
    };
}

export function consolidatedEarningsMapDataForAnimation(collection: EarningsJSONV2, lastFYCollection: EarningsJSONV2 | undefined) {

    // const currentQuarter = collection.currentQuarter;

    const makeDateLabel = dateLabel(collection?.fiscalYear ?? "N/A", collection?.currentQuarter ?? 4);

    const none: EarningsValue = { kind:"Nothing" };

    // const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

    const header: Header = {
        companyName: collection.companyName,
        fiscalYear: collection.fiscalYear,
        title: (collection.companyName === "CAPCOM Co., Ltd." || collection.companyName === "SQUARE ENIX HOLDINGS CO., LTD.") ? "Consolidated Financial Results" : "Consolidated Operating Results",
    };

    const dataThisFY = getData(collection, collection.data.length);

    const dataLastFY = getData(lastFYCollection, collection.data.length);

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

    // const printOne = headerPrint([
    //     header.companyName + " | " + header.fiscalYear,
    //     header.title
    // ],headerLength) + "\n" + printDateLabel;

    const opMargin = new Map<number, EarningsV2>([
        [0,
            {
                ...dataThisFY.get(1),
                name: "Operating Margin",
                Q1QtrValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q1QtrValue ?? none, dataThisFY.get(1)?.Q1QtrValue ?? none, "Quarter"),
                Q2QtrValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q2QtrValue ?? none, dataThisFY.get(1)?.Q2QtrValue ?? none, "Quarter"),
                Q3QtrValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q3QtrValue ?? none, dataThisFY.get(1)?.Q3QtrValue ?? none, "Quarter"),
                Q4QtrValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q4QtrValue ?? none, dataThisFY.get(1)?.Q4QtrValue ?? none, "Quarter"),
                Q1CmlValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q1CmlValue ?? none, dataThisFY.get(1)?.Q1CmlValue ?? none, "Cumulative"),
                Q2CmlValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q2CmlValue ?? none, dataThisFY.get(1)?.Q2CmlValue ?? none, "Cumulative"),
                Q3CmlValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q3CmlValue ?? none, dataThisFY.get(1)?.Q3CmlValue ?? none, "Cumulative"),
                Q4CmlValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q4CmlValue ?? none, dataThisFY.get(1)?.Q4CmlValue ?? none, "Cumulative"),
                forecastThisFY: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastThisFY ?? none, dataThisFY.get(1)?.forecastThisFY ?? none, "Forecast"), 
                forecastRevision1: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastRevision1 ?? none, dataThisFY.get(1)?.forecastRevision1 ?? none, "Forecast"), 
                forecastRevision2: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastRevision2 ?? none, dataThisFY.get(1)?.forecastRevision2 ?? none, "Forecast"), 
                forecastRevision3: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastRevision3 ?? none, dataThisFY.get(1)?.forecastRevision3 ?? none, "Forecast"), 
                forecastNextFY: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastNextFY ?? none, dataThisFY.get(1)?.forecastNextFY ?? none, "Forecast"), 
            } satisfies EarningsV2
        ]
    ]);


    return {
        date: makeDateLabel,
        header: header,
        dataThisFY: dataThisFY,
        dataLastFY: dataLastFY,
        opMargin: opMargin
    }
    // return [
    //     makeDateLabel,
    //     header,
    //     dataThisFY,
    //     dataLastFY,
    //     opMargin
    // ]
};