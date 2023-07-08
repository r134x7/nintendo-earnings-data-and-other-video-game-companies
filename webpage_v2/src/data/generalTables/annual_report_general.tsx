import { thisFYCalculation, type AnnualReportTitle, type AnnualReportValue, printReleaseDate, printAnnualReportValue, printCumulativeYoY, printRank, printSeriesName } from "../../utils/annual_report_logic";
import { dateLabel, liner, border, spacer, printTextBlock, headerPrint, type titleSet } from "../../utils/table_design_logic";
import { HeaderV2 } from "../../utils/segment_data_logic";
import { searchTitles } from "../capcom/platinum_titles_Capcom";

import bandaiNamcoAnnualReport2022 from "../bandaiNamco/Annual_Report/annual_report_fy3_2022.json";
import bandaiNamcoAnnualReport2021 from "../bandaiNamco/Annual_Report/annual_report_fy3_2021.json";
import bandaiNamcoAnnualReport2020 from "../bandaiNamco/Annual_Report/annual_report_fy3_2020.json";
import bandaiNamcoAnnualReport2019 from "../bandaiNamco/Annual_Report/annual_report_fy3_2019.json";

import squareEnixAnnualReport2022 from "../squareEnix/Annual_Report/annual_report_fy3_2022.json";
import squareEnixAnnualReport2021 from "../squareEnix/Annual_Report/annual_report_fy3_2021.json";
import squareEnixAnnualReport2020 from "../squareEnix/Annual_Report/annual_report_fy3_2020.json";
import squareEnixAnnualReport2019 from "../squareEnix/Annual_Report/annual_report_fy3_2019.json";
import squareEnixAnnualReport2018 from "../squareEnix/Annual_Report/annual_report_fy3_2018.json";
import squareEnixAnnualReport2017 from "../squareEnix/Annual_Report/annual_report_fy3_2017.json";
import squareEnixAnnualReport2016 from "../squareEnix/Annual_Report/annual_report_fy3_2016.json";
import squareEnixAnnualReport2015 from "../squareEnix/Annual_Report/annual_report_fy3_2015.json";
import squareEnixAnnualReport2014 from "../squareEnix/Annual_Report/annual_report_fy3_2014.json";
import squareEnixAnnualReport2013 from "../squareEnix/Annual_Report/annual_report_fy3_2013.json";
import squareEnixAnnualReport2012 from "../squareEnix/Annual_Report/annual_report_fy3_2012.json";
import squareEnixAnnualReport2011 from "../squareEnix/Annual_Report/annual_report_fy3_2011.json";
import squareEnixAnnualReport2010 from "../squareEnix/Annual_Report/annual_report_fy3_2010.json";

import segaAnnualReport2022 from "../sega/Annual_Report/annual_report_fy3_2022.json";
import segaAnnualReport2021 from "../sega/Annual_Report/annual_report_fy3_2021.json";
import segaAnnualReport2020 from "../sega/Annual_Report/annual_report_fy3_2020.json";
import segaAnnualReport2019 from "../sega/Annual_Report/annual_report_fy3_2019.json";
import segaAnnualReport2018 from "../sega/Annual_Report/annual_report_fy3_2018.json";
import segaAnnualReport2017 from "../sega/Annual_Report/annual_report_fy3_2017.json";
import segaAnnualReport2016 from "../sega/Annual_Report/annual_report_fy3_2016.json";
import segaAnnualReport2015 from "../sega/Annual_Report/annual_report_fy3_2015.json";
import segaAnnualReport2014 from "../sega/Annual_Report/annual_report_fy3_2014.json";
import segaAnnualReport2013 from "../sega/Annual_Report/annual_report_fy3_2013.json";

import capcomGameSeries2023 from "../capcom/Game_Series/game_series_fy3_2023.json";
import capcomGameSeries2022 from "../capcom/Game_Series/game_series_fy3_2022.json";
import capcomGameSeries2021 from "../capcom/Game_Series/game_series_fy3_2021.json";
import capcomGameSeries2020 from "../capcom/Game_Series/game_series_fy3_2020.json";
import capcomGameSeries2019 from "../capcom/Game_Series/game_series_fy3_2019.json";
import capcomGameSeries2018 from "../capcom/Game_Series/game_series_fy3_2018.json";
import capcomGameSeries2017 from "../capcom/Game_Series/game_series_fy3_2017.json";
import capcomGameSeries2016 from "../capcom/Game_Series/game_series_fy3_2016.json";
import capcomGameSeries2015 from "../capcom/Game_Series/game_series_fy3_2015.json";
import capcomGameSeries2014 from "../capcom/Game_Series/game_series_fy3_2014.json";
import capcomGameSeries2013 from "../capcom/Game_Series/game_series_fy3_2013.json";
import capcomGameSeries2012 from "../capcom/Game_Series/game_series_fy3_2012.json";
import capcomGameSeries2011 from "../capcom/Game_Series/game_series_fy3_2011.json";
import capcomGameSeries2010 from "../capcom/Game_Series/game_series_fy3_2010.json";

import capcomSoftwareShipmentsPlatform2022 from "../capcom/Fact_Book/software_shipments_platform_fy3_2022.json";
import capcomSoftwareShipmentsPlatform2021 from "../capcom/Fact_Book/software_shipments_platform_fy3_2021.json";
import capcomSoftwareShipmentsPlatform2020 from "../capcom/Fact_Book/software_shipments_platform_fy3_2020.json";
import capcomSoftwareShipmentsPlatform2019 from "../capcom/Fact_Book/software_shipments_platform_fy3_2019.json";
import capcomSoftwareShipmentsPlatform2018 from "../capcom/Fact_Book/software_shipments_platform_fy3_2018.json";
import capcomSoftwareShipmentsPlatform2017 from "../capcom/Fact_Book/software_shipments_platform_fy3_2017.json";
import capcomSoftwareShipmentsPlatform2016 from "../capcom/Fact_Book/software_shipments_platform_fy3_2016.json";
import capcomSoftwareShipmentsPlatform2015 from "../capcom/Fact_Book/software_shipments_platform_fy3_2015.json";
import capcomSoftwareShipmentsPlatform2014 from "../capcom/Fact_Book/software_shipments_platform_fy3_2014.json";
import capcomSoftwareShipmentsPlatform2013 from "../capcom/Fact_Book/software_shipments_platform_fy3_2013.json";
import capcomSoftwareShipmentsPlatform2012 from "../capcom/Fact_Book/software_shipments_platform_fy3_2012.json";
import capcomSoftwareShipmentsPlatform2011 from "../capcom/Fact_Book/software_shipments_platform_fy3_2011.json";

import { softwareUnitsCollection } from "../sega/software_units_sega";

export type SeriesJSON = {
    companyName: string,
    fiscalYear: string,
    series: SeriesMake[],
    footnotes?: string,
}

export type segaSoftwareSales = {
    fiscalYear: string,
    currentQuarter: number,
    softwareUnits: {
        name: string,
        ip: string,
        Q1CmlValue: number,
        Q2CmlValue: number,
        Q3CmlValue: number,
        Q4CmlValue: number,
        miscellaneous?: string,
    }[]
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
    | {
        kind?: "Capcom Game Series",
        title: string,
        numberOfTitles: number,
        releaseDate: string,
        value: number,
        valueLastFY: number | string | null,
        valueLastTwoFYs: number | string | null,
        footnotes?: string,
    }
    | { kind?: "Capcom Fact Book",
        title: string,
        skuNumber: number,
        value: number,
        valueLastFY: number | string | null,
        valueLastTwoFYs?: null,
        rank?: number,
        footnotes?: string,
      }

export type TitleData = {
    header: string;
    titleList: titleSet[];
    footnotes: string | undefined;
}

export type TitlePlatformData = {
    header: string;
    titleList: searchTitles[];
    footnotes: string | undefined;
}

const collectionBandaiNamco = new Map<number, SeriesJSON>();
    collectionBandaiNamco.set(collectionBandaiNamco.size, bandaiNamcoAnnualReport2022)
    collectionBandaiNamco.set(collectionBandaiNamco.size, bandaiNamcoAnnualReport2021)
    collectionBandaiNamco.set(collectionBandaiNamco.size, bandaiNamcoAnnualReport2020)
    collectionBandaiNamco.set(collectionBandaiNamco.size, bandaiNamcoAnnualReport2019)

const collectionSquareEnix = new Map<number, SeriesJSON>();
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2022)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2021)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2020)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2019)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2018)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2017)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2016)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2015)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2014)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2013)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2012)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2011)
    collectionSquareEnix.set(collectionSquareEnix.size, squareEnixAnnualReport2010)

const collectionSega = new Map<number, SeriesJSON>();
    collectionSega.set(collectionSega.size, segaAnnualReport2022)
    collectionSega.set(collectionSega.size, segaAnnualReport2021)
    collectionSega.set(collectionSega.size, segaAnnualReport2020)
    collectionSega.set(collectionSega.size, segaAnnualReport2019)
    collectionSega.set(collectionSega.size, segaAnnualReport2018)
    collectionSega.set(collectionSega.size, segaAnnualReport2017)
    collectionSega.set(collectionSega.size, segaAnnualReport2016)
    collectionSega.set(collectionSega.size, segaAnnualReport2015)
    collectionSega.set(collectionSega.size, segaAnnualReport2014)
    collectionSega.set(collectionSega.size, segaAnnualReport2013)

const collectionCapcomGameSeries = new Map<number, SeriesJSON>();
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2023)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2022)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2021)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2020)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2019)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2018)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2017)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2016)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2015)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2014)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2013)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2012)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2011)
    collectionCapcomGameSeries.set(collectionCapcomGameSeries.size, capcomGameSeries2010)

const collectionCapcomFactBook = new Map<number, SeriesJSON>();
    collectionCapcomFactBook.set(collectionCapcomFactBook.size, capcomSoftwareShipmentsPlatform2022)
    collectionCapcomFactBook.set(collectionCapcomFactBook.size, capcomSoftwareShipmentsPlatform2021)
    collectionCapcomFactBook.set(collectionCapcomFactBook.size, capcomSoftwareShipmentsPlatform2020)
    collectionCapcomFactBook.set(collectionCapcomFactBook.size, capcomSoftwareShipmentsPlatform2019)
    collectionCapcomFactBook.set(collectionCapcomFactBook.size, capcomSoftwareShipmentsPlatform2018)
    collectionCapcomFactBook.set(collectionCapcomFactBook.size, capcomSoftwareShipmentsPlatform2017)
    collectionCapcomFactBook.set(collectionCapcomFactBook.size, capcomSoftwareShipmentsPlatform2016)
    collectionCapcomFactBook.set(collectionCapcomFactBook.size, capcomSoftwareShipmentsPlatform2015)
    collectionCapcomFactBook.set(collectionCapcomFactBook.size, capcomSoftwareShipmentsPlatform2014)
    collectionCapcomFactBook.set(collectionCapcomFactBook.size, capcomSoftwareShipmentsPlatform2013)
    collectionCapcomFactBook.set(collectionCapcomFactBook.size, capcomSoftwareShipmentsPlatform2012)
    collectionCapcomFactBook.set(collectionCapcomFactBook.size, capcomSoftwareShipmentsPlatform2011)

export const bandaiNamcoAnnualReport = new Map<number, { header: string, titleList: titleSet[]}>(); 

collectionBandaiNamco.forEach((value, key, map) => {

    bandaiNamcoAnnualReport.set(key, annualReportMap(value, 38, "General"))
})

export const squareEnixAnnualReport = new Map<number, { header: string, titleList: titleSet[], footnotes?: string}>();

collectionSquareEnix.forEach((value, key, map) => {

    squareEnixAnnualReport.set(key, annualReportMap(value, 42, "General"))
})

export const segaAnnualReport = new Map<number, { header: string, titleList: searchTitles[]}>();

collectionSega.forEach((value, key, map) => {

    segaAnnualReport.set(key, annualReportMap(value, 38, "Sega") as TitlePlatformData)
})

export const capcomGameSeries = new Map<number, { header: string, titleList: titleSet[], footnotes?: string}>();

collectionCapcomGameSeries.forEach((value, key, map) => {

    capcomGameSeries.set(key, annualReportMap(value, 28, "Capcom Game Series"))
})

export const capcomFactBook = new Map<number, { header: string, titleList: titleSet[], footnotes?: string}>();

collectionCapcomFactBook.forEach((value, key, map) => {

    capcomFactBook.set(key, annualReportMap(value, 28, "Capcom Fact Book"))
})

collectionBandaiNamco.clear();
collectionSquareEnix.clear();
collectionSega.clear();
collectionCapcomGameSeries.clear();
collectionCapcomFactBook.clear();

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

export function annualReportValuesMake(obj: undefined | SeriesMake, fiscalYear: string, 
    kind: "General" | "Sega" | "Capcom Game Series" | "Capcom Fact Book"): AnnualReportTitle {

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
    } else if (kind === "Sega") {

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
            units: getObject?.kind === "Sega" ? getObject.units : "ERROR",
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
    } else if (kind === "Capcom Game Series") {

        const getObj = (!obj) ? undefined : {
            ...obj,
            kind: "Capcom Game Series",
        } as SeriesMake // the simplest way to deal with this issue

        const values: AnnualReportTitle = {
            kind: "Capcom Game Series",
            title: obj?.title ?? "ERROR",
            releaseDate: getObj?.kind === "Capcom Game Series" ? getObj.releaseDate : "ERROR", 
            numberOfTitles: getObj?.kind === "Capcom Game Series" ? getObj.numberOfTitles : 0,
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

        const getObj = (!obj) ? undefined : {
            ...obj,
            kind: "Capcom Fact Book",
        } as SeriesMake // the simplest way to deal with this issue

        const values: AnnualReportTitle = {
            kind: "Capcom Fact Book",
            title: obj?.title ?? "ERROR",
            skuNumber: getObj?.kind === "Capcom Fact Book" ? getObj.skuNumber : 0,
            footnotes: obj?.footnotes,
            valueLTD: annualReportNothingCheck(obj?.value, "units", fiscalYear),
            valueLastFY: annualReportNothingCheck(obj?.valueLastFY, "units", fiscalYear),
            valueLastTwoFYs: annualReportNothingCheck(obj?.valueLastTwoFYs, "units", fiscalYear),
            valueThisFY: annualReportNothingCheck(obj?.value, "units", fiscalYear),
        }

        return values
    }
}

export function getAnnualReportData(dataCollectionThisFY: SeriesJSON, kind: "General" | "Sega" | "Capcom Game Series" | "Capcom Fact Book"): Map<number, AnnualReportTitle> {

    const dataMap = new Map<number, AnnualReportTitle>();

    for (let index = 0; index < dataCollectionThisFY.series.length; index++) {
       dataMap.set(index, annualReportValuesMake(dataCollectionThisFY.series[index], dataCollectionThisFY.fiscalYear, kind)) 
    }

    return dataMap;
}

function annualReportMap(collection: SeriesJSON, headerLength: number, 
    kind: "General" | "Sega" | "Capcom Game Series" | "Capcom Fact Book"): TitleData | TitlePlatformData {

    const makeDateLabel = dateLabel(collection?.fiscalYear ?? "N/A", 4);

    const none: AnnualReportValue = { kind:"Nothing" };

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true);

    const header: HeaderV2 = {
        companyName: collection.companyName,
        fiscalYear: collection.fiscalYear,
        title: (kind === "General" || kind == "Sega")
            ? "IP Series Data"
            : (kind === "Capcom Game Series")
                ? "Game Series Data"
                : " Fact Book: Units shipped by platform "
    };

    const dataThisFY = getAnnualReportData(collection, kind);

    const sortedList = [...dataThisFY.values()].sort((prev, next) => {

        if (prev.valueThisFY.kind === "Annual Report" && next.valueThisFY.kind === "Annual Report") {

            // descending order
            return (prev.valueThisFY.value < next.valueThisFY.value) 
                ? 1 // sort prev after next
                : (prev.valueThisFY.value > next.valueThisFY.value) 
                    ? -1 // sort next after prev
                    : 0

        } else {
            return 0 // no change
        }
    })

    const sortedMap = new Map<number, AnnualReportTitle>();

    for (let index = 0; index < sortedList.length; index++) {
       sortedMap.set(index, {
            ...sortedList[index],
            rank: index + 1,
       }) 
    }

    const printedSeries = new Map<number, titleSet[]>()

    sortedMap.forEach((value, key, map) => {

        let getFullGameRatio = (value.kind === "Sega") 
            ? fullGameRatio(value, softwareUnitsCollection, collection.fiscalYear, "Year")
            : "";

        const printValue: string = [
            printSeriesName(value, 42),
            liner(printTextBlock(value.kind === "Capcom Game Series" ? "Number of Titles: " + value.numberOfTitles.toString() : undefined, 42),"−","bottom","newLine",42),
            liner(printTextBlock(value.kind === "Sega" ? "IP type: " + value.ipType : undefined,42),"−","bottom","newLine",42),
            liner(printTextBlock(value.kind === "Sega" ? "Platforms: " + value.platforms : undefined,42),"−","bottom","newLine",42),
            liner(printTextBlock(value.kind === "Sega" && value.totalEditions !== 0 ? "Total Editions: " + value.totalEditions.toString() : undefined,42),"−","bottom","newLine",42),
            liner(
                (value.kind === "Capcom Fact Book")
                ? printTextBlock(`SKU sum: ${value.skuNumber}`,31) + printRank(value, 9)
                : printReleaseDate(value, 30) + printRank(value, 9)
            ,"=","bottom","newLine"),
            liner(printTextBlock(value.kind === "Sega" ? "Measure: " + value.units : undefined,42),"−","bottom","newLine",42),
            liner(printTextBlock((value.kind === "Sega" && value.footnotes !== undefined) 
                ? "Consists of: " + value.footnotes
                : value.footnotes, 42),"=","bottom","newLine",42),
            liner(
                (value.kind === "Capcom Fact Book")
                    ? printAnnualReportValue(value, 27, 12, "Cumulative", "newLine") +
                    printCumulativeYoY(value, 27, 12, "noNewLine")
                    : printAnnualReportValue(value, 27, 12, "Cumulative", "newLine") +
                    printCumulativeYoY(value, 27, 12, "newLine") +
                    printAnnualReportValue(value, 27, 12, "LTD", "noNewLine")
            ,"−","bottom","newLine",42),
            getFullGameRatio,
        ].reduce((acc, next) => acc + next, ""); 

        const makeObject = (value.kind === "Sega")
            ? {
                title: value.title,
                platforms: value.ipType,
                table: printValue,
            }
            : {
                title: value.title,
                table: printValue,
            } 

        printedSeries.set(0, (printedSeries.get(0) ?? []).concat(makeObject))
    })

    const printOne = headerPrint([
        header.companyName,
        header.title,
    ], headerLength) + "\n" + printDateLabel;

    return {
        header: printOne,
        // titleList: printedSeries.get(0),
        titleList: (kind === "Sega")
            ? [...printedSeries.values()].flat() as searchTitles[]
            : [...printedSeries.values()].flat() satisfies titleSet[],
        footnotes: collection?.footnotes === undefined ? undefined : liner(printTextBlock(collection?.footnotes,40),"=","both",true,40)
    }
}

export function fullGameRatio(ip: AnnualReportTitle, softwareSales: segaSoftwareSales[], fiscalYear: string, output: "Year" | "Cumulative"): string {

    let nameSearch = softwareSales.filter((elem) => {
        // match by fiscalYear key
        // then go to software units and get Q4CmlValue
        // (full game units / ip series units ) * 100).toFixed(2)%
        
        return elem.fiscalYear === fiscalYear
    }).map((elem, index, array) => {

        let ipMatch = elem.softwareUnits.filter(value => value.ip === ip.title); // Should only have one match
        
        return ipMatch
    }).flat();
    
    if (nameSearch.length === 0) {
        // return undefined
        return ""
    } else {
        
        let calc: string = `${(((nameSearch[0].Q4CmlValue / 1000) / (ip.valueThisFY.kind === "Annual Report" ? ip.valueThisFY.value : 0)) * 100).toFixed(2)}%`

        let calcRow: string = border([
            spacer(fiscalYear + " Full Game / IP Series %", 33, "left"),
            spacer(calc, 9, "right"),
        ])

        let calcPrint: string = liner(border([
            spacer(fiscalYear + " Full Game / IP Series %", 33, "left"),
            spacer(calc, 9, "right"),
        ]),"=","both",true) + "###\n"

        return (output === "Cumulative")
            ? calcRow 
            : calcPrint
    };
};