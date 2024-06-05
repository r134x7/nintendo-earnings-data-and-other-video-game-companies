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
        },
        Q2QtrValue: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
        },
        Q3QtrValue: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
        },
        Q4QtrValue: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
        },
        Q1CmlValue: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
        },
        Q2CmlValue: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
        },
        Q3CmlValue: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
        },
        Q4CmlValue: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
        },
        forecastThisFY?: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
        },
        forecastRevision1?: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
        },
        forecastRevision2?: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
        },
        forecastRevision3?: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
        },
        forecastNextFY?: {
            netSales: EarningsValue,
            operatingIncome: EarningsValue,
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
        },
        Q2QtrValue: {
            netSales: quarterlyCalculationV2(
            nothingCheck(obj?.Q2CmlValue.netSales, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q1CmlValue.netSales, "Quarter", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear)),
            operatingIncome: quarterlyCalculationV2(
            nothingCheck(obj?.Q2CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q1CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear)),
        },
        Q3QtrValue: {
          netSales: quarterlyCalculationV2(
            nothingCheck(obj?.Q3CmlValue.netSales, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q2CmlValue.netSales, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear)),
          operatingIncome: quarterlyCalculationV2(
            nothingCheck(obj?.Q3CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q2CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear)),  
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
        },
        Q1CmlValue: {
            netSales: nothingCheck(obj?.Q1CmlValue.netSales, "Cumulative", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
            operatingIncome: nothingCheck(obj?.Q1CmlValue.operatingIncome, "Cumulative", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
        }, 
        Q2CmlValue: {
            netSales: nothingCheck(obj?.Q2CmlValue.netSales, "Cumulative", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
            operatingIncome: nothingCheck(obj?.Q2CmlValue.operatingIncome, "Cumulative", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
        },
        Q3CmlValue: {
            netSales: nothingCheck(obj?.Q3CmlValue.netSales, "Cumulative", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            operatingIncome: nothingCheck(obj?.Q3CmlValue.operatingIncome, "Cumulative", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
        },
        Q4CmlValue: {
            netSales: nothingCheck(obj?.Q4CmlValue.netSales, "Cumulative", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear),
            operatingIncome:nothingCheck(obj?.Q4CmlValue.operatingIncome, "Cumulative", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear),
        },
        forecastThisFY: {
            netSales: nothingCheck(obj?.forecastThisFY?.netSales, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
            operatingIncome: nothingCheck(obj?.forecastThisFY?.operatingIncome, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
        },
        forecastRevision1: {
            netSales: nothingCheck(obj?.forecastRevision1?.netSales, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 1", fiscalYear),
            operatingIncome: nothingCheck(obj?.forecastRevision1?.operatingIncome, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 1", fiscalYear),
        },
        forecastRevision2: {
            netSales: nothingCheck(obj?.forecastRevision2?.netSales, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 2", fiscalYear),
            operatingIncome:nothingCheck(obj?.forecastRevision2?.operatingIncome, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 2", fiscalYear),
        },
        forecastRevision3: {
            netSales: nothingCheck(obj?.forecastRevision3?.netSales, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 3", fiscalYear),
            operatingIncome: nothingCheck(obj?.forecastRevision3?.operatingIncome, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 3", fiscalYear),
        },
        forecastNextFY: {
            netSales: nothingCheck(obj?.forecastNextFY?.netSales, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Next FY FCST", fiscalYear),
            operatingIncome:nothingCheck(obj?.forecastNextFY?.operatingIncome, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Next FY FCST", fiscalYear),
        },
        footnotes: obj?.footnotes,
    }

    return values
}
