import { thisFYCalculation, type AnnualReportTitle, type AnnualReportValue } from "../../utils/annual_report_logic";

import bandaiNamcoAnnualReport2022 from "../bandaiNamco/Annual_Report/annual_report_fy3_2022.json";
import bandaiNamcoAnnualReport2021 from "../bandaiNamco/Annual_Report/annual_report_fy3_2021.json";
import bandaiNamcoAnnualReport2020 from "../bandaiNamco/Annual_Report/annual_report_fy3_2020.json";
import bandaiNamcoAnnualReport2019 from "../bandaiNamco/Annual_Report/annual_report_fy3_2019.json";

export type SeriesJSON = {
    companyName: string,
    fiscalYear: string,
    series: SeriesMake[],
}

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


export type SeriesMakeGeneral = {
        title: string,
        releaseDate: string,
        fyEndMonth: string,
        value: number,
        valueLastFY: number | string | null,
        valueLastTwoFYs: number | string | null,
        footnotes?: string,
    }

export type SeriesMakeSega = {
    title: string,
    firstReleaseYear: number,
    platforms: string,
    totalEditions: number,
    ipType: string,
    units: string,
    value: number,
    valueLastFY: number,
    valueLastTwoFYs: number,
    footnotes?: string,
}

const collectionBandaiNamco = new Map<number, SeriesJSON>();
    collectionBandaiNamco.set(collectionBandaiNamco.size, bandaiNamcoAnnualReport2022)
    collectionBandaiNamco.set(collectionBandaiNamco.size, bandaiNamcoAnnualReport2021)
    collectionBandaiNamco.set(collectionBandaiNamco.size, bandaiNamcoAnnualReport2020)
    collectionBandaiNamco.set(collectionBandaiNamco.size, bandaiNamcoAnnualReport2019)

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

        const getObject = (!obj)
            ? undefined
            : {
                ...obj,
                kind: "General",
                fyEndMonth: obj.kind === "General" ? obj.fyEndMonth : "ERROR",
                releaseDate: obj.kind === "General" ? obj.releaseDate : "ERROR",
            } satisfies SeriesMake

        const values: AnnualReportTitle = {
            kind: "General",
            title: obj?.title ?? "ERROR",
            releaseDate: getObject?.releaseDate ?? "ERROR",
            fyEndMonth: getObject?.fyEndMonth ?? "ERROR",
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
                firstReleaseYear: obj.kind === "Sega" ? obj.firstReleaseYear : "ERROR",
                ipType: obj.kind === "Sega" ? obj.ipType : "ERROR",
                platforms: obj.kind === "Sega" ? obj.platforms : "ERROR",
                totalEditions: obj.kind === "Sega" ? obj.totalEditions : 0,
                units: obj.kind === "Sega" ? obj.units : "ERROR",
            } satisfies SeriesMake

        const values: AnnualReportTitle = {
            kind: "Sega",
            title: obj?.title ?? "ERROR",
            ipType: getIPType(getObject?.ipType ?? "ERROR"),
            platforms: getObject?.platforms ?? "ERROR",
            releaseDate: getObject?.firstReleaseYear ?? "ERROR",
            totalEditions: getObject?.totalEditions ?? 0,
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