import { thisFYCalculation, type AnnualReportTitle, type AnnualReportValue, printReleaseDate, printAnnualReportValue, printCumulativeYoY, printRank, printSeriesName } from "../../utils/annual_report_logic";
import { dateLabel, liner, border, spacer, printTextBlock, headerPrint } from "../../utils/table_design_logic";
import { HeaderV2 } from "../../utils/segment_data_logic";

import bandaiNamcoAnnualReport2022 from "../bandaiNamco/Annual_Report/annual_report_fy3_2022.json";
import bandaiNamcoAnnualReport2021 from "../bandaiNamco/Annual_Report/annual_report_fy3_2021.json";
import bandaiNamcoAnnualReport2020 from "../bandaiNamco/Annual_Report/annual_report_fy3_2020.json";
import bandaiNamcoAnnualReport2019 from "../bandaiNamco/Annual_Report/annual_report_fy3_2019.json";
import { titleSet } from "../capcom/game_series_sales_capcom_cml_data";

export type SeriesJSON = {
    companyName: string,
    fiscalYear: string,
    series: SeriesMake[],
}

// export type GeneralSeriesMake = {
//     title: string,
//     releaseDate: string,
//     fyEndMonth: string,
//     value: number,
//     valueLastFY: number | string | null,
//     valueLastTwoFYs: number | string | null,
//     footnotes?: string,
// }

// export type SegaSeriesMake = {
//     title: string,
//     firstReleaseYear: string,
//     platforms: string,
//     totalEditions: number,
//     ipType: string,
//     units: string,
//     value: number,
//     valueLastFY: number | string | null,
//     valueLastTwoFYs: number | string | null,
//     footnotes?: string,
// }

export type SeriesMake = 
    | {
        kind?: "General",
        title: string,
        releaseDate: string, //
        fyEndMonth: string, //
        value: number,
        valueLastFY: number | string | null,
        valueLastTwoFYs: number | string | null,
        footnotes?: string,
    }
    | {
        kind?: "Sega",
        title: string,
        firstReleaseYear: string, //
        platforms: string, //
        totalEditions: number, //
        ipType: string, //
        units: string, //
        value: number,
        valueLastFY: number | string | null,
        valueLastTwoFYs: number | string | null,
        footnotes?: string,
    }

const collectionBandaiNamco = new Map<number, SeriesJSON>();
    collectionBandaiNamco.set(collectionBandaiNamco.size, bandaiNamcoAnnualReport2022)
    collectionBandaiNamco.set(collectionBandaiNamco.size, bandaiNamcoAnnualReport2021)
    collectionBandaiNamco.set(collectionBandaiNamco.size, bandaiNamcoAnnualReport2020)
    collectionBandaiNamco.set(collectionBandaiNamco.size, bandaiNamcoAnnualReport2019)

export const bandaiNamcoAnnualReport = new Map<number, { header: string, titleList: titleSet[] }>(); 

collectionBandaiNamco.forEach((value, key, map) => {

    bandaiNamcoAnnualReport.set(key, annualReportMap(value, 38))
})

export function annualReportNothingCheck(
    value: number| string | null | undefined,
    units: "units" | "currency" | "percentage",
    fiscalYear: string,
): AnnualReportValue {

    switch (typeof value) {
        case "number":
           
            return {
                kind: "Annual Report",
                fiscalYear: fiscalYear,
                units: units,
                value: value,
            }
    
        default:
            return { kind: "Nothing" };
    }

}

export function getIPType(value: string): "Acquired IP" | "Developed in-house IP" | "Licensed third party IP" | "Undefined" {

    switch (value) {
        case "Acquired IP":
            return "Acquired IP" 
    
        case "Developed in-house IP":
            return "Developed in-house IP"
        
        case "Licensed third party IP":
            return "Licensed third party IP" 
    
        default:
            return "Undefined"
    }
}

export function annualReportValuesMake(obj: undefined | SeriesMake, fiscalYear: string, kind: "General" | "Sega"): AnnualReportTitle {

    if (kind === "General") {

        const getObj = (!obj) ? undefined : {
            ...obj,
            kind: "General",
        } as SeriesMake // the simplest way to deal with this issue

        const values: AnnualReportTitle = {
            kind: "General",
            title: obj?.title ?? "ERROR",
            // releaseDate: getObject?.releaseDate ?? "ERROR",
            releaseDate: getObj?.kind === "General" ? getObj.releaseDate : "ERROR", 
            // fyEndMonth: getObject?.fyEndMonth ?? "ERROR",
            fyEndMonth: (getObj?.kind === "General") ? getObj.fyEndMonth : "ERROR",
            footnotes: obj?.footnotes,
            valueLTD: annualReportNothingCheck(obj?.value, "units", fiscalYear),
            valueLastFY: annualReportNothingCheck(obj?.valueLastFY, "units", fiscalYear),
            valueLastTwoFYs: annualReportNothingCheck(obj?.valueLastTwoFYs, "units", fiscalYear),
            valueThisFY: thisFYCalculation(
                annualReportNothingCheck(obj?.value, "units", fiscalYear),
                annualReportNothingCheck(obj?.valueLastFY, "units", fiscalYear),
            )
        }

        return values
    } else {

        const getObject = (!obj)
            ? undefined
            : {
                ...obj,
                kind: "Sega",
            } as SeriesMake

        const values: AnnualReportTitle = {
            kind: "Sega",
            title: obj?.title ?? "ERROR",
            ipType: getIPType(getObject?.kind === "Sega" ? getObject.ipType : "ERROR"),
            platforms: getObject?.kind === "Sega" ? getObject?.platforms : "ERROR",
            releaseDate: getObject?.kind === "Sega" ? getObject?.firstReleaseYear : "ERROR",
            totalEditions: getObject?.kind === "Sega" ? getObject?.totalEditions : 0,
            footnotes: obj?.footnotes,
            valueLTD: annualReportNothingCheck(obj?.value, "units", fiscalYear),
            valueLastFY: annualReportNothingCheck(obj?.valueLastFY, "units", fiscalYear),
            valueLastTwoFYs: annualReportNothingCheck(obj?.valueLastTwoFYs, "units", fiscalYear),
            valueThisFY: thisFYCalculation(
                annualReportNothingCheck(obj?.value, "units", fiscalYear),
                annualReportNothingCheck(obj?.valueLastFY, "units", fiscalYear),
            )
        }

        return values
    }
}

function getAnnualReportData(dataCollectionThisFY: SeriesJSON, kind: "General" | "Sega"): Map<number, AnnualReportTitle> {

    const dataMap = new Map<number, AnnualReportTitle>();

    for (let index = 0; index < dataCollectionThisFY.series.length; index++) {
       dataMap.set(index, annualReportValuesMake(dataCollectionThisFY.series[index], dataCollectionThisFY.fiscalYear, kind)) 
    }

    return dataMap;
}

function annualReportMap(collection: SeriesJSON, headerLength: number) {

    const makeDateLabel = dateLabel(collection?.fiscalYear ?? "N/A", 4);

    const none: AnnualReportValue = { kind:"Nothing" };

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true);

    const header: HeaderV2 = {
        companyName: collection.companyName,
        fiscalYear: collection.fiscalYear,
        title: "IP Series Data",
    };

    const dataThisFY = getAnnualReportData(collection, "General");

    const sortedList = [...dataThisFY.values()].sort((b,a) => (a.valueThisFY > b.valueThisFY) ? 1 : (a.valueThisFY < b.valueThisFY) ? -1 : 0)

    const sortedMap = new Map<number, AnnualReportTitle>();

    for (let index = 0; index < sortedList.length; index++) {
       sortedMap.set(index, {
            ...sortedList[index],
            rank: index + 1,
       }) 
    }

    const printedSeries = new Map<number, titleSet[]>();

    sortedMap.forEach((value, key, map) => {

        const printValue: string = [
            printSeriesName(value, 42),
            printReleaseDate(value, 30),
            printRank(value, 9),
            printTextBlock(value.footnotes, 42) ?? "",
            printAnnualReportValue(value, 30, 12, "Cumulative", "noNewLine"),
            printCumulativeYoY(value, 30, 12),
            printAnnualReportValue(value, 30, 12, "LTD", "noNewLine"),
        ].reduce((acc, next) => acc + next, ""); 

        printedSeries.set(0, (printedSeries.get(0) ?? []).concat(
            {
                title: value.title,
                table: printValue,
            }
        ))
    })

    const printOne = headerPrint([
        header.companyName,
        header.title,
    ], 32) + "\n" + printDateLabel;

    return {
        header: printOne,
        // titleList: printedSeries.get(0),
        titleList: [...printedSeries.values()].flat()
    }
}