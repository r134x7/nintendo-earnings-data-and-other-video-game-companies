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

import { nothingCheck, typeReturn } from "./consolidated_earnings_general";

import { headerPrint, dateLabel, liner, border, spacer, globImport } from "../../utils/table_design_logic";

export type SegmentJSON = {
    currentQuarter: number,
    companyName: string,
    fiscalYear: string,
    data: SegmentData[],
};

export type SegmentData = {
        name: string,
        units: string,
        ID: string,
        Q1CmlValue: {
            netSales: number | string,
            operatingIncome: number | string,
        },
        Q2CmlValue: {
            netSales: number | string,
            operatingIncome: number | string,
        },
        Q3CmlValue: {
            netSales: number | string,
            operatingIncome: number | string,
        },
        Q4CmlValue: {
            netSales: number | string,
            operatingIncome: number | string,
        },
        forecastThisFY?: {
            netSales: number | string | null,
            operatingIncome: number | string | null,
        },
        forecastRevision1?: {
            netSales: number | string | null,
            operatingIncome: number | string | null,
        },
        forecastRevision2?: {
            netSales: number | string | null,
            operatingIncome: number | string | null,
        },
        forecastRevision3?: {
            netSales: number | string | null,
            operatingIncome: number | string | null,
        },
        forecastNextFY?: {
            netSales: number | string | null,
            operatingIncome: number | string | null,
        }, 
        footnotes?: string,
}; 

export type SegmentValue = {
        name: string,
        ID: string,
        Q1QtrValue: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
            operatingMargin: EarningsValue,
        },
        Q2QtrValue: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
            operatingMargin: EarningsValue,
        },
        Q3QtrValue: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
            operatingMargin: EarningsValue,
        },
        Q4QtrValue: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
            operatingMargin: EarningsValue,
        },
        Q1CmlValue: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
            operatingMargin: EarningsValue,
        },
        Q2CmlValue: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
            operatingMargin: EarningsValue,
        },
        Q3CmlValue: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
            operatingMargin: EarningsValue,
        },
        Q4CmlValue: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
            operatingMargin: EarningsValue,
        },
        forecastThisFY?: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
            operatingMargin: EarningsValue,
        },
        forecastRevision1?: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
            operatingMargin: EarningsValue,
        },
        forecastRevision2?: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
            operatingMargin: EarningsValue,
        },
        forecastRevision3?: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
            operatingMargin: EarningsValue,
        },
        forecastNextFY?: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
            operatingMargin: EarningsValue,
        }, 
        footnotes?: string,
}; 

const collectionBandaiNamco = globImport(new Map<number, SegmentJSON>(), import.meta.glob("../bandaiNamco/Segment_Earnings/*.json", { import: "default", eager: true }), "Descending");

export function segmentValuesMake(obj: undefined | SegmentData, fiscalYear: string): SegmentValue {

    let values: SegmentValue = {
        name: obj?.name ?? "N/A",
        ID: obj?.ID ?? "N/A",
        Q1QtrValue: {
            netSales: nothingCheck(obj?.Q1CmlValue.netSales, "Quarter", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
            operatingIncome: nothingCheck(obj?.Q1CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
            operatingMargin: operatingMarginCalculationV2(nothingCheck(obj?.Q1CmlValue.netSales, "Quarter", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear), nothingCheck(obj?.Q1CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear), "Quarter")
        },
        Q2QtrValue: {
            netSales: quarterlyCalculationV2(
            nothingCheck(obj?.Q2CmlValue.netSales, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q1CmlValue.netSales, "Quarter", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear)),
            operatingIncome: quarterlyCalculationV2(
            nothingCheck(obj?.Q2CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q1CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear)),
            operatingMargin: operatingMarginCalculationV2(quarterlyCalculationV2(
            nothingCheck(obj?.Q2CmlValue.netSales, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q1CmlValue.netSales, "Quarter", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear)), quarterlyCalculationV2(
            nothingCheck(obj?.Q2CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q1CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear)), "Quarter")
        },
        Q3QtrValue: {
          netSales: quarterlyCalculationV2(
            nothingCheck(obj?.Q3CmlValue.netSales, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q2CmlValue.netSales, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear)),
          operatingIncome: quarterlyCalculationV2(
            nothingCheck(obj?.Q3CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q2CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear)),  
            operatingMargin: operatingMarginCalculationV2(quarterlyCalculationV2(
            nothingCheck(obj?.Q3CmlValue.netSales, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q2CmlValue.netSales, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear)), quarterlyCalculationV2(
            nothingCheck(obj?.Q3CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q2CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear)), "Quarter")
        }, 
        Q4QtrValue: {
            netSales: quarterlyCalculationV2(
            nothingCheck(obj?.Q4CmlValue.netSales, "Quarter", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q3CmlValue.netSales, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q2CmlValue.netSales, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear)),
            operatingIncome: quarterlyCalculationV2(
            nothingCheck(obj?.Q4CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q3CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q2CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear)),
            operatingMargin: operatingMarginCalculationV2(quarterlyCalculationV2(
            nothingCheck(obj?.Q4CmlValue.netSales, "Quarter", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q3CmlValue.netSales, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q2CmlValue.netSales, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear)), quarterlyCalculationV2(
            nothingCheck(obj?.Q4CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q3CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q2CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear)), "Quarter")
        },
        Q1CmlValue: {
            netSales: nothingCheck(obj?.Q1CmlValue.netSales, "Cumulative", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
            operatingIncome: nothingCheck(obj?.Q1CmlValue.operatingIncome, "Cumulative", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
            operatingMargin: operatingMarginCalculationV2(nothingCheck(obj?.Q1CmlValue.netSales, "Cumulative", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear), nothingCheck(obj?.Q1CmlValue.operatingIncome, "Cumulative", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear), "Cumulative")
        }, 
        Q2CmlValue: {
            netSales: nothingCheck(obj?.Q2CmlValue.netSales, "Cumulative", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
            operatingIncome: nothingCheck(obj?.Q2CmlValue.operatingIncome, "Cumulative", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
            operatingMargin: operatingMarginCalculationV2(nothingCheck(obj?.Q2CmlValue.netSales, "Cumulative", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear), nothingCheck(obj?.Q2CmlValue.operatingIncome, "Cumulative", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear), "Cumulative")
        },
        Q3CmlValue: {
            netSales: nothingCheck(obj?.Q3CmlValue.netSales, "Cumulative", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            operatingIncome: nothingCheck(obj?.Q3CmlValue.operatingIncome, "Cumulative", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            operatingMargin: operatingMarginCalculationV2(nothingCheck(obj?.Q3CmlValue.netSales, "Cumulative", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear), nothingCheck(obj?.Q3CmlValue.operatingIncome, "Cumulative", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear), "Cumulative")
        },
        Q4CmlValue: {
            netSales: nothingCheck(obj?.Q4CmlValue.netSales, "Cumulative", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear),
            operatingIncome: nothingCheck(obj?.Q4CmlValue.operatingIncome, "Cumulative", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear),
            operatingMargin: operatingMarginCalculationV2(nothingCheck(obj?.Q4CmlValue.netSales, "Cumulative", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear), nothingCheck(obj?.Q4CmlValue.operatingIncome, "Cumulative", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear), "Cumulative")
        },
        forecastThisFY: {
            netSales: nothingCheck(obj?.forecastThisFY?.netSales, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
            operatingIncome: nothingCheck(obj?.forecastThisFY?.operatingIncome, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
            operatingMargin: operatingMarginCalculationV2(nothingCheck(obj?.forecastThisFY?.netSales, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear), nothingCheck(obj?.forecastThisFY?.operatingIncome, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear), "Forecast")
        },
        forecastRevision1: {
            netSales: nothingCheck(obj?.forecastRevision1?.netSales, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 1", fiscalYear),
            operatingIncome: nothingCheck(obj?.forecastRevision1?.operatingIncome, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 1", fiscalYear),
            operatingMargin: operatingMarginCalculationV2(nothingCheck(obj?.forecastRevision1?.netSales, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 1", fiscalYear), nothingCheck(obj?.forecastRevision1?.operatingIncome, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 1", fiscalYear), "Forecast")
        },
        forecastRevision2: {
            netSales: nothingCheck(obj?.forecastRevision2?.netSales, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 2", fiscalYear),
            operatingIncome: nothingCheck(obj?.forecastRevision2?.operatingIncome, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 2", fiscalYear),
            operatingMargin: operatingMarginCalculationV2(nothingCheck(obj?.forecastRevision2?.netSales, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 2", fiscalYear), nothingCheck(obj?.forecastRevision2?.operatingIncome, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 2", fiscalYear), "Forecast")
        },
        forecastRevision3: {
            netSales: nothingCheck(obj?.forecastRevision3?.netSales, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 3", fiscalYear),
            operatingIncome: nothingCheck(obj?.forecastRevision3?.operatingIncome, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 3", fiscalYear),
            operatingMargin: operatingMarginCalculationV2(nothingCheck(obj?.forecastRevision3?.netSales, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 3", fiscalYear), nothingCheck(obj?.forecastRevision3?.operatingIncome, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 3", fiscalYear), "Forecast")
        },
        forecastNextFY: {
            netSales: nothingCheck(obj?.forecastNextFY?.netSales, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Next FY FCST", fiscalYear),
            operatingIncome: nothingCheck(obj?.forecastNextFY?.operatingIncome, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Next FY FCST", fiscalYear),
            operatingMargin: operatingMarginCalculationV2(nothingCheck(obj?.forecastNextFY?.netSales, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Next FY FCST", fiscalYear), nothingCheck(obj?.forecastNextFY?.operatingIncome, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Next FY FCST", fiscalYear), "Forecast") 
        },
        footnotes: obj?.footnotes,
    }

    return values
}

export function getSegmentData(dataCollectionThisFY: SegmentJSON | undefined, dataThisFYLengthForLastFY: number): Map<number, SegmentValue> {

    const dataMap = new Map<number, SegmentValue>();

        if (!dataCollectionThisFY) {
            for (let index = 0; index < dataThisFYLengthForLastFY; index++) {
                dataMap.set(index, segmentValuesMake(undefined, ""))
            }
        } else {
            for (let index = 0; index < dataCollectionThisFY.data.length; index++) {
                dataMap.set(index, segmentValuesMake(dataCollectionThisFY.data[index], dataCollectionThisFY.fiscalYear))
            }
        }

        return dataMap;
}


export const bandaiNamcoSegmentEarningsList = new Map<number, string>();

function segmentListMap(collection: SegmentJSON, lastFYCollection: SegmentJSON | undefined, headerLength: number): string {

        const currentQuarter = collection.currentQuarter;

        const makeDateLabel = dateLabel(collection?.fiscalYear ?? "N/A", collection?.currentQuarter ?? 4);

        const none: EarningsValue = { kind:"Nothing" };

        const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

        const header: Header = {
            companyName: collection.companyName,
            fiscalYear: collection.fiscalYear,
            title: "Segment Information",
        };

        const dataThisFY = getSegmentData(collection, collection.data.length);

        const dataLastFY = getSegmentData(lastFYCollection, collection.data.length);

        const percentagesThisFY = new Map<number, SegmentValue>(); 
        dataThisFY.forEach((value, key, map) => {
            percentagesThisFY.set(key, {
                ...value,
                Q1QtrValue: {
                    netSales: yearOnYearCalculationV2(value.Q1QtrValue.netSales, dataLastFY.get(key)?.Q1QtrValue?.netSales ?? none, "Quarter"),
                    operatingIncome: yearOnYearCalculationV2(value.Q1QtrValue.operatingIncome, dataLastFY.get(key)?.Q1QtrValue.operatingIncome ?? none, "Quarter"),
                    operatingMargin: none,
                },
                Q2QtrValue: {
                    netSales: yearOnYearCalculationV2(value.Q2QtrValue.netSales, dataLastFY.get(key)?.Q2QtrValue.netSales ?? none, "Quarter"),
                    operatingIncome: yearOnYearCalculationV2(value.Q2QtrValue.operatingIncome, dataLastFY.get(key)?.Q2QtrValue.operatingIncome ?? none, "Quarter"),
                    operatingMargin: none,
                },
                Q3QtrValue: {
                    netSales: yearOnYearCalculationV2(value.Q3QtrValue.netSales, dataLastFY.get(key)?.Q3QtrValue.netSales ?? none, "Quarter"),
                    operatingIncome: yearOnYearCalculationV2(value.Q3QtrValue.operatingIncome, dataLastFY.get(key)?.Q3QtrValue.operatingIncome ?? none, "Quarter"),
                    operatingMargin: none,
                }, 
                Q4QtrValue: {
                    netSales: yearOnYearCalculationV2(value.Q4QtrValue.netSales, dataLastFY.get(key)?.Q4QtrValue.netSales ?? none, "Quarter"),
                    operatingIncome: yearOnYearCalculationV2(value.Q4QtrValue.operatingIncome, dataLastFY.get(key)?.Q4QtrValue.operatingIncome ?? none, "Quarter"),
                    operatingMargin: none,
                },
                Q1CmlValue: {
                    netSales: yearOnYearCalculationV2(value.Q1CmlValue.netSales, dataLastFY.get(key)?.Q1CmlValue.netSales ?? none, "Cumulative"),
                    operatingIncome: yearOnYearCalculationV2(value.Q1CmlValue.operatingIncome, dataLastFY.get(key)?.Q1CmlValue.operatingIncome ?? none, "Cumulative"),
                    operatingMargin: none,
                },
                Q2CmlValue: {
                    netSales: yearOnYearCalculationV2(value.Q2CmlValue.netSales, dataLastFY.get(key)?.Q2CmlValue.netSales ?? none, "Cumulative"),
                    operatingIncome: yearOnYearCalculationV2(value.Q2CmlValue.operatingIncome, dataLastFY.get(key)?.Q2CmlValue.operatingIncome ?? none, "Cumulative"),
                    operatingMargin: none,
                },
                Q3CmlValue: {
                    netSales: yearOnYearCalculationV2(value.Q3CmlValue.netSales, dataLastFY.get(key)?.Q3CmlValue.netSales ?? none, "Cumulative"),
                    operatingIncome: yearOnYearCalculationV2(value.Q3CmlValue.operatingIncome, dataLastFY.get(key)?.Q3CmlValue.operatingIncome ?? none, "Cumulative"),
                    operatingMargin: none,
                },
                Q4CmlValue: {
                    netSales: yearOnYearCalculationV2(value.Q4CmlValue.netSales, dataLastFY.get(key)?.Q4CmlValue.netSales ?? none, "Cumulative"),
                    operatingIncome: yearOnYearCalculationV2(value.Q4CmlValue.operatingIncome, dataLastFY.get(key)?.Q4CmlValue.operatingIncome ?? none, "Cumulative"),
                    operatingMargin: none,
                },
                forecastThisFY: {
                    netSales: yearOnYearCalculationV2(value.forecastThisFY?.netSales ?? none, dataLastFY.get(key)?.forecastThisFY?.netSales ?? none, "Forecast"),
                    operatingIncome: yearOnYearCalculationV2(value.forecastThisFY?.operatingIncome ?? none, dataLastFY.get(key)?.forecastThisFY?.operatingIncome ?? none, "Forecast"),
                    operatingMargin: none,
                },
                forecastRevision1: {
                    netSales: yearOnYearCalculationV2(value.forecastRevision1?.netSales ?? none, dataLastFY.get(key)?.forecastRevision1?.netSales ?? none, "Forecast"),
                    operatingIncome: yearOnYearCalculationV2(value.forecastRevision1?.operatingIncome ?? none, dataLastFY.get(key)?.forecastRevision1?.operatingIncome ?? none, "Forecast"),
                    operatingMargin: none,
                },
                forecastRevision2: {
                    netSales: yearOnYearCalculationV2(value.forecastRevision2?.netSales ?? none, dataLastFY.get(key)?.forecastRevision2?.netSales ?? none, "Forecast"),
                    operatingIncome: yearOnYearCalculationV2(value.forecastRevision2?.operatingIncome ?? none, dataLastFY.get(key)?.forecastRevision2?.operatingIncome ?? none, "Forecast"),
                    operatingMargin: none,
                },
                forecastRevision3: {
                    netSales: yearOnYearCalculationV2(value.forecastRevision3?.netSales ?? none, dataLastFY.get(key)?.forecastRevision3?.netSales?? none, "Forecast"),
                    operatingIncome: yearOnYearCalculationV2(value.forecastRevision3?.netSales ?? none, dataLastFY.get(key)?.forecastRevision3?.operatingIncome ?? none, "Forecast"),
                    operatingMargin: none,
                },
                forecastNextFY: {
                    netSales: yearOnYearCalculationV2(value.forecastNextFY?.netSales ?? none, dataLastFY.get(key)?.forecastNextFY?.netSales ?? none, "Forecast"),
                    operatingIncome: yearOnYearCalculationV2(value.forecastNextFY?.operatingIncome ?? none, dataLastFY.get(key)?.forecastNextFY?.operatingIncome ?? none, "Forecast"),
                    operatingMargin: none,
                } 
            } //satisfies SegmentValue 
            )
        });

        const printOne = headerPrint([
            header.companyName + " | " + header.fiscalYear,
            header.title
        ],headerLength) + "\n" + printDateLabel;

        const opMargin = new Map<number, SegmentValue>([
            [0,
                {
                    ...dataThisFY.get(1),
                    name: "Operating Margin",
                    Q1QtrValue: {
                        netSales: operatingMarginCalculationV2(dataThisFY.get(0)?.Q1QtrValue.netSales ?? none, dataThisFY.get(1)?.Q1QtrValue ?? none, "Quarter"),
                        operatingIncome: operatingMarginCalculationV2(dataThisFY.get(0)?.Q1QtrValue ?? none, dataThisFY.get(1)?.Q1QtrValue ?? none, "Quarter"),
                    },
                    Q2QtrValue: {
                        netSales: operatingMarginCalculationV2(dataThisFY.get(0)?.Q2QtrValue ?? none, dataThisFY.get(1)?.Q2QtrValue ?? none, "Quarter"),
                        operatingIncome: operatingMarginCalculationV2(dataThisFY.get(0)?.Q2QtrValue ?? none, dataThisFY.get(1)?.Q2QtrValue ?? none, "Quarter"),
                    },
                    Q3QtrValue: {
                        netSales: operatingMarginCalculationV2(dataThisFY.get(0)?.Q3QtrValue ?? none, dataThisFY.get(1)?.Q3QtrValue ?? none, "Quarter"),
                        operatingIncome: operatingMarginCalculationV2(dataThisFY.get(0)?.Q3QtrValue ?? none, dataThisFY.get(1)?.Q3QtrValue ?? none, "Quarter"),
                    }, 
                    Q4QtrValue: {
                        netSales: operatingMarginCalculationV2(dataThisFY.get(0)?.Q4QtrValue ?? none, dataThisFY.get(1)?.Q4QtrValue ?? none, "Quarter"),
                        operatingIncome: operatingMarginCalculationV2(dataThisFY.get(0)?.Q4QtrValue ?? none, dataThisFY.get(1)?.Q4QtrValue ?? none, "Quarter"),
                    }, 
                    Q1CmlValue: {
                        netSales: operatingMarginCalculationV2(dataThisFY.get(0)?.Q1CmlValue ?? none, dataThisFY.get(1)?.Q1CmlValue ?? none, "Cumulative"),
                        operatingIncome: operatingMarginCalculationV2(dataThisFY.get(0)?.Q1CmlValue ?? none, dataThisFY.get(1)?.Q1CmlValue ?? none, "Cumulative"),
                    },
                    Q2CmlValue: {
                        netSales: operatingMarginCalculationV2(dataThisFY.get(0)?.Q2CmlValue ?? none, dataThisFY.get(1)?.Q2CmlValue ?? none, "Cumulative"),
                        operatingIncome: operatingMarginCalculationV2(dataThisFY.get(0)?.Q2CmlValue ?? none, dataThisFY.get(1)?.Q2CmlValue ?? none, "Cumulative"),
                    },
                    Q3CmlValue: {
                        netSales: operatingMarginCalculationV2(dataThisFY.get(0)?.Q3CmlValue ?? none, dataThisFY.get(1)?.Q3CmlValue ?? none, "Cumulative"),
                        operatingIncome: operatingMarginCalculationV2(dataThisFY.get(0)?.Q3CmlValue ?? none, dataThisFY.get(1)?.Q3CmlValue ?? none, "Cumulative"),
                    },
                    Q4CmlValue: {
                        netSales: operatingMarginCalculationV2(dataThisFY.get(0)?.Q4CmlValue ?? none, dataThisFY.get(1)?.Q4CmlValue ?? none, "Cumulative"),
                        operatingIncome: operatingMarginCalculationV2(dataThisFY.get(0)?.Q4CmlValue ?? none, dataThisFY.get(1)?.Q4CmlValue ?? none, "Cumulative"),
                    },
                    forecastThisFY: {
                        netSales: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastThisFY ?? none, dataThisFY.get(1)?.forecastThisFY ?? none, "Forecast"),
                        operatingIncome: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastThisFY ?? none, dataThisFY.get(1)?.forecastThisFY ?? none, "Forecast"),
                    }, 
                    forecastRevision1: {
                        netSales: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastRevision1 ?? none, dataThisFY.get(1)?.forecastRevision1 ?? none, "Forecast"),
                        operatingIncome: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastRevision1 ?? none, dataThisFY.get(1)?.forecastRevision1 ?? none, "Forecast"),
                    } 
                    forecastRevision2: {
                        netSales: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastRevision2 ?? none, dataThisFY.get(1)?.forecastRevision2 ?? none, "Forecast"),
                        operatingIncome: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastRevision2 ?? none, dataThisFY.get(1)?.forecastRevision2 ?? none, "Forecast"),
                    } 
                    forecastRevision3: {
                        netSales: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastRevision3 ?? none, dataThisFY.get(1)?.forecastRevision3 ?? none, "Forecast"),
                        operatingIncome: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastRevision3 ?? none, dataThisFY.get(1)?.forecastRevision3 ?? none, "Forecast"),
                    } 
                    forecastNextFY: {
                        netSales: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastNextFY ?? none, dataThisFY.get(1)?.forecastNextFY ?? none, "Forecast"),
                        operatingIncome: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastNextFY ?? none, dataThisFY.get(1)?.forecastNextFY ?? none, "Forecast"),
                    } 
                } //satisfies SegmentValue
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
