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
    quarterlyCalculationV2,
    yearOnYearCalculationV2,
    EarningsValue,
} from "../../utils/general_earnings_logic";

import { nothingCheck, typeReturn } from "./consolidated_earnings_general";

import { headerPrint, dateLabel, liner, border, spacer, globImport, printTextBlock } from "../../utils/table_design_logic";

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

const collectionKonami = globImport(new Map<number, SegmentJSON>(), import.meta.glob("../konami/Segment_Earnings/*.json", { import: "default", eager: true }), "Descending");

const collectionCyberAgent = globImport(new Map<number, SegmentJSON>(), import.meta.glob("../cyberAgent/Segment_Earnings/*.json", { import: "default", eager: true }), "Descending");

const collectionKadokawa = globImport(new Map<number, SegmentJSON>(), import.meta.glob("../kadokawa/Segment_Earnings/*.json", { import: "default", eager: true }), "Descending");

export function segmentValuesMake(obj: undefined | SegmentData, fiscalYear: string, currentQuarter: number): SegmentValue {

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
            nothingCheck((currentQuarter < 2)? undefined : obj?.Q2CmlValue.netSales, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
            nothingCheck((currentQuarter < 2)? undefined : obj?.Q1CmlValue.netSales, "Quarter", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear)),
            operatingIncome: quarterlyCalculationV2(
            nothingCheck((currentQuarter < 2)? undefined : obj?.Q2CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
            nothingCheck((currentQuarter < 2)? undefined : obj?.Q1CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear)),
            operatingMargin: operatingMarginCalculationV2(quarterlyCalculationV2(
            nothingCheck((currentQuarter < 2)? undefined : obj?.Q2CmlValue.netSales, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
            nothingCheck((currentQuarter < 2)? undefined : obj?.Q1CmlValue.netSales, "Quarter", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear)), quarterlyCalculationV2(
            nothingCheck((currentQuarter < 2)? undefined : obj?.Q2CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
            nothingCheck((currentQuarter < 2)? undefined : obj?.Q1CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear)), "Quarter")
        },
        Q3QtrValue: {
          netSales: quarterlyCalculationV2(
            nothingCheck((currentQuarter < 3) ? undefined : obj?.Q3CmlValue.netSales, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck((currentQuarter < 3) ? undefined : obj?.Q2CmlValue.netSales, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear)),
          operatingIncome: quarterlyCalculationV2(
            nothingCheck((currentQuarter < 3) ? undefined : obj?.Q3CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck((currentQuarter < 3) ? undefined : obj?.Q2CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear)),  
            operatingMargin: operatingMarginCalculationV2(quarterlyCalculationV2(
            nothingCheck((currentQuarter < 3) ? undefined : obj?.Q3CmlValue.netSales, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck((currentQuarter < 3) ? undefined : obj?.Q2CmlValue.netSales, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear)), quarterlyCalculationV2(
            nothingCheck((currentQuarter < 3) ? undefined : obj?.Q3CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck((currentQuarter < 3) ? undefined : obj?.Q2CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear)), "Quarter")
        }, 
        Q4QtrValue: {
            netSales: quarterlyCalculationV2(
            nothingCheck((currentQuarter < 4) ? undefined : obj?.Q4CmlValue.netSales, "Quarter", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear),
            nothingCheck((currentQuarter < 4) ? undefined : obj?.Q3CmlValue.netSales, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck((currentQuarter < 4) ? undefined : obj?.Q2CmlValue.netSales, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear)),
            operatingIncome: quarterlyCalculationV2(
            nothingCheck((currentQuarter < 4) ? undefined : obj?.Q4CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear),
            nothingCheck((currentQuarter < 4) ? undefined : obj?.Q3CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck((currentQuarter < 4) ? undefined : obj?.Q2CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear)),
            operatingMargin: operatingMarginCalculationV2(quarterlyCalculationV2(
            nothingCheck((currentQuarter < 4) ? undefined : obj?.Q4CmlValue.netSales, "Quarter", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear),
            nothingCheck((currentQuarter < 4) ? undefined : obj?.Q3CmlValue.netSales, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck((currentQuarter < 4) ? undefined : obj?.Q2CmlValue.netSales, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear)), quarterlyCalculationV2(
            nothingCheck((currentQuarter < 4) ? undefined : obj?.Q4CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear),
            nothingCheck((currentQuarter < 4) ? undefined : obj?.Q3CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck((currentQuarter < 4) ? undefined : obj?.Q2CmlValue.operatingIncome, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear)), "Quarter")
        },
        Q1CmlValue: {
            netSales: nothingCheck(obj?.Q1CmlValue.netSales, "Cumulative", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
            operatingIncome: nothingCheck(obj?.Q1CmlValue.operatingIncome, "Cumulative", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
            operatingMargin: operatingMarginCalculationV2(nothingCheck(obj?.Q1CmlValue.netSales, "Cumulative", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear), nothingCheck(obj?.Q1CmlValue.operatingIncome, "Cumulative", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear), "Cumulative")
        }, 
        Q2CmlValue: {
            netSales: nothingCheck((currentQuarter < 2) ? undefined : obj?.Q2CmlValue.netSales, "Cumulative", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
            operatingIncome: nothingCheck((currentQuarter < 2) ? undefined : obj?.Q2CmlValue.operatingIncome, "Cumulative", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
            operatingMargin: operatingMarginCalculationV2(nothingCheck((currentQuarter < 2) ? undefined : obj?.Q2CmlValue.netSales, "Cumulative", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear), nothingCheck((currentQuarter < 2) ? undefined : obj?.Q2CmlValue.operatingIncome, "Cumulative", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear), "Cumulative")
        },
        Q3CmlValue: {
            netSales: nothingCheck((currentQuarter < 3) ? undefined : obj?.Q3CmlValue.netSales, "Cumulative", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            operatingIncome: nothingCheck((currentQuarter < 3) ? undefined : obj?.Q3CmlValue.operatingIncome, "Cumulative", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            operatingMargin: operatingMarginCalculationV2(nothingCheck((currentQuarter < 3) ? undefined : obj?.Q3CmlValue.netSales, "Cumulative", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear), nothingCheck((currentQuarter < 3) ? undefined : obj?.Q3CmlValue.operatingIncome, "Cumulative", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear), "Cumulative")
        },
        Q4CmlValue: {
            netSales: nothingCheck((currentQuarter < 4) ? undefined : obj?.Q4CmlValue.netSales, "Cumulative", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear),
            operatingIncome: nothingCheck((currentQuarter < 4) ? undefined : obj?.Q4CmlValue.operatingIncome, "Cumulative", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear),
            operatingMargin: operatingMarginCalculationV2(nothingCheck((currentQuarter < 4) ? undefined : obj?.Q4CmlValue.netSales, "Cumulative", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear), nothingCheck((currentQuarter < 4) ? undefined : obj?.Q4CmlValue.operatingIncome, "Cumulative", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear), "Cumulative")
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
                dataMap.set(index, segmentValuesMake(undefined, "", 0))
            }
        } else {
            for (let index = 0; index < dataCollectionThisFY.data.length; index++) {
                dataMap.set(index, segmentValuesMake(dataCollectionThisFY.data[index], dataCollectionThisFY.fiscalYear, dataCollectionThisFY.currentQuarter))
            }
        }

        return dataMap;
}


export const bandaiNamcoSegmentEarningsList = new Map<number, string>();

export const konamiSegmentEarningsList = new Map<number, string>();

export const cyberAgentSegmentEarningsList = new Map<number, string>();

export const kadokawaSegmentEarningsList = new Map<number, string>();

collectionBandaiNamco.forEach((value, key, map) => {

    bandaiNamcoSegmentEarningsList.set(key, segmentListMap(value, map.get(key+1), 38))
})

collectionBandaiNamco.clear();

collectionKonami.forEach((value, key, map) => {

    konamiSegmentEarningsList.set(key, segmentListMap(value, map.get(key+1), 38))
})

collectionKonami.clear();

collectionCyberAgent.forEach((value, key, map) => {

    cyberAgentSegmentEarningsList.set(key, segmentListMap(value, map.get(key+1), 38))
})

collectionCyberAgent.clear();

collectionKadokawa.forEach((value, key, map) => {

    kadokawaSegmentEarningsList.set(key, segmentListMap(value, map.get(key+1), 38))
})

collectionKadokawa.clear();

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

        const salesType = (header.companyName.includes("KONAMI"))
            ? "Revenue"
            : (header.companyName.includes("Else"))
             ? "Sales"
             : "Net Sales"

        const profitType = (header.companyName.includes("KONAMI"))
            ? "Business Profit"
            : (header.companyName.includes("CyberAgent"))
                ? "Segment Income"
                : "Operating Income"

        const marginType = (header.companyName.includes("KONAMI"))
            ? "Business Margin"
            : "Operating Margin"
             
        const dataThisFY = getSegmentData(collection, collection.data.length);

        const dataLastFY = getSegmentData(lastFYCollection, collection.data.length);

        const percentagesThisFY = new Map<number, SegmentValue>(); 
        dataThisFY.forEach((value, key, map) => {

            // because this was made using data that was in order and unchanging, it doesn't work when the order of data changes
            // in dataLastFY each value is a category of data, and there's less than 20 values
            // it won't take long to get the values by the Map Key and then run a filter to match the ID
            // turn the dataLastFY into a list to filter by ID
            // then you can match the ID with the value.ID
            
            let getLastFYDataByID = [...dataLastFY.values()].filter(elem => elem.ID === value.ID); // IDs are unique, either the list is empty or length: 1.
            // console.log(getLastFYDataByID);
            

            percentagesThisFY.set(key, {
                ...value,
                Q1QtrValue: {
                    netSales: yearOnYearCalculationV2(value.Q1QtrValue.netSales, getLastFYDataByID[0]?.Q1QtrValue?.netSales ?? none, "Quarter"),
                    operatingIncome: yearOnYearCalculationV2(value.Q1QtrValue.operatingIncome, getLastFYDataByID[0]?.Q1QtrValue.operatingIncome ?? none, "Quarter"),
                    operatingMargin: none,
                },
                Q2QtrValue: {
                    netSales: yearOnYearCalculationV2(value.Q2QtrValue.netSales, getLastFYDataByID[0]?.Q2QtrValue.netSales ?? none, "Quarter"),
                    operatingIncome: yearOnYearCalculationV2(value.Q2QtrValue.operatingIncome, getLastFYDataByID[0]?.Q2QtrValue.operatingIncome ?? none, "Quarter"),
                    operatingMargin: none,
                },
                Q3QtrValue: {
                    netSales: yearOnYearCalculationV2(value.Q3QtrValue.netSales, getLastFYDataByID[0]?.Q3QtrValue.netSales ?? none, "Quarter"),
                    operatingIncome: yearOnYearCalculationV2(value.Q3QtrValue.operatingIncome, getLastFYDataByID[0]?.Q3QtrValue.operatingIncome ?? none, "Quarter"),
                    operatingMargin: none,
                }, 
                Q4QtrValue: {
                    netSales: yearOnYearCalculationV2(value.Q4QtrValue.netSales, getLastFYDataByID[0]?.Q4QtrValue.netSales ?? none, "Quarter"),
                    operatingIncome: yearOnYearCalculationV2(value.Q4QtrValue.operatingIncome, getLastFYDataByID[0]?.Q4QtrValue.operatingIncome ?? none, "Quarter"),
                    operatingMargin: none,
                },
                Q1CmlValue: {
                    netSales: yearOnYearCalculationV2(value.Q1CmlValue.netSales, getLastFYDataByID[0]?.Q1CmlValue.netSales ?? none, "Cumulative"),
                    operatingIncome: yearOnYearCalculationV2(value.Q1CmlValue.operatingIncome, getLastFYDataByID[0]?.Q1CmlValue.operatingIncome ?? none, "Cumulative"),
                    operatingMargin: none,
                },
                Q2CmlValue: {
                    netSales: yearOnYearCalculationV2(value.Q2CmlValue.netSales, getLastFYDataByID[0]?.Q2CmlValue.netSales ?? none, "Cumulative"),
                    operatingIncome: yearOnYearCalculationV2(value.Q2CmlValue.operatingIncome, getLastFYDataByID[0]?.Q2CmlValue.operatingIncome ?? none, "Cumulative"),
                    operatingMargin: none,
                },
                Q3CmlValue: {
                    netSales: yearOnYearCalculationV2(value.Q3CmlValue.netSales, getLastFYDataByID[0]?.Q3CmlValue.netSales ?? none, "Cumulative"),
                    operatingIncome: yearOnYearCalculationV2(value.Q3CmlValue.operatingIncome, getLastFYDataByID[0]?.Q3CmlValue.operatingIncome ?? none, "Cumulative"),
                    operatingMargin: none,
                },
                Q4CmlValue: {
                    netSales: yearOnYearCalculationV2(value.Q4CmlValue.netSales, getLastFYDataByID[0]?.Q4CmlValue.netSales ?? none, "Cumulative"),
                    operatingIncome: yearOnYearCalculationV2(value.Q4CmlValue.operatingIncome, getLastFYDataByID[0]?.Q4CmlValue.operatingIncome ?? none, "Cumulative"),
                    operatingMargin: none,
                },
                forecastThisFY: {
                    netSales: yearOnYearCalculationV2(value.forecastThisFY?.netSales ?? none, getLastFYDataByID[0]?.forecastThisFY?.netSales ?? none, "Forecast"),
                    operatingIncome: yearOnYearCalculationV2(value.forecastThisFY?.operatingIncome ?? none, getLastFYDataByID[0]?.forecastThisFY?.operatingIncome ?? none, "Forecast"),
                    operatingMargin: none,
                },
                forecastRevision1: {
                    netSales: yearOnYearCalculationV2(value.forecastRevision1?.netSales ?? none, getLastFYDataByID[0]?.forecastRevision1?.netSales ?? none, "Forecast"),
                    operatingIncome: yearOnYearCalculationV2(value.forecastRevision1?.operatingIncome ?? none, getLastFYDataByID[0]?.forecastRevision1?.operatingIncome ?? none, "Forecast"),
                    operatingMargin: none,
                },
                forecastRevision2: {
                    netSales: yearOnYearCalculationV2(value.forecastRevision2?.netSales ?? none, getLastFYDataByID[0]?.forecastRevision2?.netSales ?? none, "Forecast"),
                    operatingIncome: yearOnYearCalculationV2(value.forecastRevision2?.operatingIncome ?? none, getLastFYDataByID[0]?.forecastRevision2?.operatingIncome ?? none, "Forecast"),
                    operatingMargin: none,
                },
                forecastRevision3: {
                    netSales: yearOnYearCalculationV2(value.forecastRevision3?.netSales ?? none, getLastFYDataByID[0]?.forecastRevision3?.netSales?? none, "Forecast"),
                    operatingIncome: yearOnYearCalculationV2(value.forecastRevision3?.netSales ?? none, getLastFYDataByID[0]?.forecastRevision3?.operatingIncome ?? none, "Forecast"),
                    operatingMargin: none,
                },
                forecastNextFY: {
                    netSales: yearOnYearCalculationV2(value.forecastNextFY?.netSales ?? none, getLastFYDataByID[0]?.forecastNextFY?.netSales ?? none, "Forecast"),
                    operatingIncome: yearOnYearCalculationV2(value.forecastNextFY?.operatingIncome ?? none, getLastFYDataByID[0]?.forecastNextFY?.operatingIncome ?? none, "Forecast"),
                    operatingMargin: none,
                } 
            } //satisfies SegmentValue 
            )
        });

        const printOne = headerPrint([
            header.companyName + " | " + header.fiscalYear,
            header.title
        ],headerLength) + "\n" + printDateLabel;

        const printEach = new Map<number, string>();

        // printEach.forEach((value, key, map) => {
        dataThisFY.forEach((value, key, map) => {

            // if (key === 2) {

            //     map.set(key, getPrintOpMarginOutput(opMargin, 0, false, currentQuarter))

            // } else if (key > 2) {

            //     map.set(key, getPrintOutput(dataThisFY, percentagesThisFY, key-1, true, currentQuarter))

            // } else {

            printEach.set(key, getSegmentPrintOutput(dataThisFY, percentagesThisFY, key, true, currentQuarter, "netSales", salesType)
            + getSegmentPrintOutput(dataThisFY, percentagesThisFY, key, true, currentQuarter, "operatingIncome", profitType) 
            + getSegmentPrintOutput(dataThisFY, percentagesThisFY, key, false, currentQuarter, "operatingMargin", marginType)
            )
            // }
        })

        return [printOne, ...printEach.values()].reduce((acc, next) => acc + "\n" + next)
};

function printSegmentHeader (value: EarningsV2 | SegmentValue, useYoY: boolean): string {

    let yoyHeader = spacer("YoY% |",12,"right");

    return (!useYoY)
        ? liner(printTextBlock(value.name,28),"−","both",true, 28)
        : liner(printTextBlock(value.name,28) + yoyHeader,"−","both",true,40) 
}

function getSegmentPrintOutput(values: Map<number, SegmentValue>, yoyValues: Map<number, SegmentValue>, key: number, useYoYHeader: boolean, currentQuarter: number, salesKey: "netSales" | "operatingIncome" | "operatingMargin", salesTitle?: string): string {

    const none: EarningsValue = { kind:"Nothing" };

    let salesType = liner(printTextBlock(salesTitle
        // (salesKey === "netSales")
        // ? salesTitle
        // : (salesKey === "operatingIncome")
        //     ? "Operating Income"
        //     : "Operating Margin"
    , (useYoYHeader) ? 40 : 28), "−", "top", "newLine")

    // let sectionHeader = printSegmentHeader(values.get(key) as SegmentValue, useYoYHeader);
    let sectionHeader = salesType + printSegmentHeader(values.get(key) as SegmentValue, useYoYHeader);

    let quarters = [
        values.get(key)?.Q1QtrValue[salesKey] ?? none,
        values.get(key)?.Q2QtrValue[salesKey] ?? none,
        values.get(key)?.Q3QtrValue[salesKey] ?? none,
        values.get(key)?.Q4QtrValue[salesKey] ?? none,
    ].map(elem => printQuarterValuesV2(elem, currentQuarter, 13)); 

    let quarterPercentages = [
        yoyValues.get(key)?.Q1QtrValue[salesKey] ?? none,
        yoyValues.get(key)?.Q2QtrValue[salesKey] ?? none,
        yoyValues.get(key)?.Q3QtrValue[salesKey] ?? none,
        yoyValues.get(key)?.Q4QtrValue[salesKey] ?? none, 
    ].map(elem => printYoYV2(elem, currentQuarter, 12)); 

    let cumulatives = [
        values.get(key)?.Q2CmlValue[salesKey] ?? none,
        values.get(key)?.Q3CmlValue[salesKey] ?? none,
        values.get(key)?.Q4CmlValue[salesKey] ?? none,
    ].map(elem => printCumulativeValuesV2(elem, currentQuarter, 13)); 

    let cumulativePercentages = [
        yoyValues.get(key)?.Q2CmlValue[salesKey] ?? none,
        yoyValues.get(key)?.Q3CmlValue[salesKey] ?? none,
        yoyValues.get(key)?.Q4CmlValue[salesKey] ?? none,
    ].map(elem => printYoYV2(elem, currentQuarter, 12));

    let forecasts = [
        values.get(key)?.forecastThisFY?.[salesKey] ?? none,
        values.get(key)?.forecastRevision1?.[salesKey] ?? none,
        values.get(key)?.forecastRevision2?.[salesKey] ?? none,
        values.get(key)?.forecastRevision3?.[salesKey] ?? none,
        values.get(key)?.forecastNextFY?.[salesKey] ?? none,
    ].map(elem => printForecastValuesV2(elem, 13)); 

    return printReduceSection(
        sectionHeader,
        qtrOrCmlOutput(quarters,quarterPercentages,false),
        qtrOrCmlOutput(cumulatives,cumulativePercentages,false),
        forecastOutput(forecasts),
        [liner(printTextBlock(values.get(key)?.footnotes, 40), "−", "both", "newLine", 40) ?? ""],
    ) + "\n"
}
