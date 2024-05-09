import { thisFYCalculation, type AnnualReportTitle, type AnnualReportValue, printReleaseDate, printAnnualReportValue, printCumulativeYoY, printRank, printSeriesName } from "../../utils/annual_report_logic";
import { dateLabel, liner, border, spacer, printTextBlock, headerPrint, type titleSet, globImport } from "../../utils/table_design_logic";
import { HeaderV2 } from "../../utils/segment_data_logic";
import { searchTitles } from "../capcom/platinum_titles_Capcom";

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

const collectionBandaiNamco = globImport(new Map<number, SeriesJSON>, import.meta.glob("../bandaiNamco/Annual_Report/*.json", { import: "default", eager: true }), "Descending");
 
const collectionSquareEnix = globImport(new Map<number, SeriesJSON>, import.meta.glob("../squareEnix/Annual_Report/*.json", { import: "default", eager: true }), "Descending");

const collectionSega = globImport(new Map<number, SeriesJSON>, import.meta.glob("../sega/Annual_Report/*.json", { import: "default", eager: true }), "Descending");

const collectionCapcomGameSeries = globImport(new Map<number, SeriesJSON>, import.meta.glob("../capcom/Game_Series/*.json", { import: "default", eager: true }), "Descending");

const collectionCapcomFactBook = globImport(new Map<number, SeriesJSON>, import.meta.glob("../capcom/Fact_Book/*.json", { import: "default", eager: true }), "Descending");

const collectionCapcomUnitsHardware = globImport(new Map<number, SeriesJSON>, import.meta.glob("../capcom/Units_By_Hardware/*.json", { import: "default", eager: true }), "Descending");;

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

export const capcomUnitsHardware = new Map<number, { header: string, titleList: titleSet[], footnotes?: string}>();

collectionCapcomUnitsHardware.forEach((value, key, map) => {

   capcomUnitsHardware.set(key, annualReportMap(value, 28, "Capcom Fact Book"))
})

collectionBandaiNamco.clear();
collectionSquareEnix.clear();
collectionSega.clear();
collectionCapcomGameSeries.clear();
collectionCapcomFactBook.clear();
collectionCapcomUnitsHardware.clear();

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