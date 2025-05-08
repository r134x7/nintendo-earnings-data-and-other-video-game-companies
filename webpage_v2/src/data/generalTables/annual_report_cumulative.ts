import { type AnnualReportTitle, type AnnualReportValue, printReleaseDate, printAnnualReportValue, printRank, printSeriesName } from "../../utils/annual_report_logic";
import { dateLabel, liner, border, spacer, printTextBlock, headerPrint, type titleSet, globImport } from "../../utils/table_design_logic";
import { HeaderV2 } from "../../utils/segment_data_logic";
import { searchTitles } from "../capcom/platinum_titles_Capcom";
import { type SeriesJSON, getAnnualReportData, type TitlePlatformData, fullGameRatio } from "./annual_report_general";

import { softwareUnitsCollection } from "../sega/software_units_sega";

const collectionBandaiNamco = globImport(new Map<number, SeriesJSON>, import.meta.glob("../bandaiNamco/Annual_Report/*.json", { import: "default", eager: true }), "Ascending");

const collectionSquareEnix = globImport(new Map<number, SeriesJSON>, import.meta.glob("../squareEnix/Annual_Report/*.json", { import: "default", eager: true }), "Ascending");

const collectionSega = globImport(new Map<number, SeriesJSON>, import.meta.glob("../sega/Annual_Report/*.json", { import: "default", eager: true }), "Ascending");

const collectionCapcomGameSeries = globImport(new Map<number, SeriesJSON>, import.meta.glob("../capcom/Game_Series/*.json", { import: "default", eager: true }), "Ascending");

const collectionCapcomFactBook = globImport(new Map<number, SeriesJSON>, import.meta.glob("../capcom/Fact_Book/*.json", { import: "default", eager: true }), "Ascending");

const collectionCapcomUnitsHardware= globImport(new Map<number, SeriesJSON>, import.meta.glob("../capcom/Units_By_Hardware/*.json", { import: "default", eager: true }), "Ascending");

const collectionKonami = globImport(new Map<number, SeriesJSON>, import.meta.glob("../konami/Annual_Report/*.json", { import: "default", eager: true }), "Ascending");

const bandaiNamcoTitleChange = new Map<string, string>([
    // [new, old]
    ["Naruto-related", "Ultimate Ninja Storm"]
]);
export const bandaiNamcoAnnualReportCml = annualReportCumulative(collectionBandaiNamco, 28, "General", bandaiNamcoTitleChange); 

const segaTitleChange = new Map<string, string>([
    ["Shin Megami Tensei", "Megami Tensei"]
]);
export const segaAnnualReportCml = annualReportCumulative(collectionSega, 28, "Sega", segaTitleChange) as TitlePlatformData;

export const squareEnixAnnualReportCml = annualReportCumulative(collectionSquareEnix, 38, "General");

export const capcomGameSeriesCml = annualReportCumulative(collectionCapcomGameSeries, 38, "Capcom Game Series");

export const capcomFactBookCml = annualReportCumulative(collectionCapcomFactBook, 38, "Capcom Fact Book");

export const capcomUnitsHardwareCml = annualReportCumulative(collectionCapcomUnitsHardware, 38, "Capcom Fact Book");

export const konamiAnnualReportCml = annualReportCumulative(collectionKonami, 38, "General");

collectionBandaiNamco.clear();
bandaiNamcoTitleChange.clear();
collectionSquareEnix.clear();
collectionSega.clear();
segaTitleChange.clear();
collectionCapcomGameSeries.clear();
collectionCapcomFactBook.clear();
collectionCapcomUnitsHardware.clear();
collectionKonami.clear();

function annualReportCumulative(completeCollection: Map<number, SeriesJSON>, headerLength: number, 
    kind: "General" | "Sega" | "Capcom Game Series" | "Capcom Fact Book",
    changeTitle?: Map<string, string>
    ) {

        const makeDateLabel = dateLabel(completeCollection.get(completeCollection.size-1)?.fiscalYear ?? "N/A", 4);

        const none: AnnualReportValue = { kind:"Nothing" };

        const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true);

        const header: HeaderV2 = {
            companyName: completeCollection.get(completeCollection.size-1)?.companyName ?? "ERROR",
            fiscalYear: completeCollection.get(completeCollection.size-1)?.fiscalYear ?? "ERROR",
            title: (kind === "General" || kind == "Sega")
                ? "IP Series Data - Cumulative"
                : (kind === "Capcom Game Series")
                    ? "Game Series Data - Cumulative"
                    : "Fact Book: Units shipped by platform"
        };

        const makeData = new Map<number, AnnualReportTitle[]>();

        completeCollection.forEach((value, key, map) => {
            makeData.set(key, [...getAnnualReportData(value, kind).values()])
        })
        
        const setTitles = new Set<string>();
            [...makeData.values()].flat().map(elem => setTitles.add(elem.title));

        if (changeTitle !== undefined) {
            changeTitle.forEach((value, key, map) => {
                if (setTitles.has(value)) {
                    setTitles.delete(value)
                }
            })
        }

        const orderedData = new Map<number, AnnualReportTitle[]>();

        setTitles.forEach((value) => {

            let getIndex = orderedData.size;

            makeData.forEach((innerValue, key, map) => {

                orderedData.set(getIndex, (orderedData.get(getIndex) ?? []).concat(
                    // innerValue.filter(elem => elem.title === value)
                    innerValue.filter(elem => {

                        if (changeTitle !== undefined && changeTitle.has(value)) {

                            return elem.title === value || elem.title === changeTitle.get(value)
                        } else {
                            return elem.title === value
                        }
                    })
                ))

            })
        })

        const sortedLists = [...orderedData.values()].sort((next, prev) => {
            
            if (orderedData.get(0)?.at(0)?.kind === "Capcom Fact Book") {

                const getPrev = prev.reduce((acc, two) => acc + (two.valueThisFY.kind === "Annual Report" ? two.valueThisFY.value : 0), 0);
                const getNext = next.reduce((acc, two) => acc + (two.valueThisFY.kind === "Annual Report" ? two.valueThisFY.value : 0), 0);

                // console.log(getPrev);
                // console.log(getNext);
                
                
                    return (getPrev < getNext)
                        ? -1 
                        : (getPrev > getNext) 
                            ? 1 
                            : 0
            } else {

                const getPrev = prev[prev.length-1]
                const getNext = next[next.length-1]

                if (getPrev.valueLTD.kind === "Annual Report" && getNext.valueLTD.kind === "Annual Report") {

                    return (getPrev.valueLTD.value < getNext.valueLTD.value)
                        ? -1 
                        : (getPrev.valueLTD > getNext.valueLTD) 
                            ? 1 
                            : 0
                } else {
                    return 0
                }

            }


        })

        const sortedMap = new Map<number, AnnualReportTitle[]>();

        for (let index = 0; index < sortedLists.length; index++) {

           const toList = sortedLists[index]; 

           const toPop = toList.pop();

           const mutateLast = { ...toPop, rank: index + 1 } as AnnualReportTitle;

           sortedMap.set(index, 
                toList.concat(mutateLast)
           ) 
        }

        const printedSeries = new Map<number, titleSet[]>();

        sortedMap.forEach((value, key, map) => {

            const printValue = valuePrint(value, kind);

            const getLastValue = value.at(-1) as AnnualReportTitle;

            const makeObject = (value[value.length-1].kind === "Sega")
            ? {
                title: getLastValue.title,
                platforms: getLastValue.kind === "Sega" ? getLastValue.ipType : "ERROR",
                table: printValue,
            }
            : {
                title: getLastValue.title,
                table: printValue,
            } 

        printedSeries.set(0, (printedSeries.get(0) ?? []).concat(makeObject))
        })


        const printOne = headerPrint([
            header.companyName,
            header.title,
        ], headerLength) + "\n" + printDateLabel;

        let filterFootnotes = [...completeCollection.values()].flatMap((elem, index, array) => {
            if (elem.footnotes === array[index+1]?.footnotes) {
                return []
            } else {
                return elem.footnotes
            }
        }) 

        // let getFootnotes = [...completeCollection.values()].reduce((acc, next) => acc + 
        let getFootnotes = filterFootnotes.reduce((acc, next) => acc + 
            `${liner(printTextBlock(next,40),"=","both",true,40)}`, ""); 

    return {
        header: printOne,
        titleList: (kind === "Sega")
            ? [...printedSeries.values()].flat() as searchTitles[]
            : [...printedSeries.values()].flat() satisfies titleSet[],
        // footnotes: collection?.footnotes === undefined ? undefined : liner(printTextBlock(collection?.footnotes,40),"=","both",true,40)
        footnotes: getFootnotes
    }
}

function valuePrint(value: AnnualReportTitle[], kind: "General" | "Sega" | "Capcom Game Series" | "Capcom Fact Book"): string {

    switch (kind) {
        case "General":

            return [
                printSeriesName(value.at(-1) as AnnualReportTitle, 42),
                liner(
                    printReleaseDate(value.at(-1) as AnnualReportTitle, 30) + printRank(value.at(-1) as AnnualReportTitle, 9)
                ,"=","bottom","newLine"),
                liner(
                    value.map((elem, index, array) => printAnnualReportValue(elem, 27, 12, "Cumulative", (elem === array.at(-1)) ? "noNewLine" : "newLine")).reduce((acc, next) => acc + next)
                , "−", "bottom", "newLine", 42),
                liner(
                printAnnualReportValue(value.at(-1) as AnnualReportTitle, 27, 12, "LTD (units)","noNewLine")
                , "−", "bottom", "newLine"),
                liner(printTextBlock(value.at(-1)?.footnotes, 42),"=","bottom","newLine", 42) ?? "",
            ].reduce((acc, next) => acc + next, "");

        case "Sega":

            // TypeScript doesn't handle lists well when trying to get a value from a list after using discriminated unions........
            const getSegaLastValue = value.at(-1) as AnnualReportTitle;

            const getFullGameRatios = value.map(elem => fullGameRatio(elem, softwareUnitsCollection, elem.valueLTD.kind === "Annual Report" ? elem.valueLTD.fiscalYear : "ERROR", "Cumulative")).filter(elem => elem.length !== 0).reduce((acc, next) => acc + (acc.length > 0 ? "\n" + next : next), "")

            return [
                printSeriesName(value.at(-1) as AnnualReportTitle, 42),
                liner(printTextBlock(`IP type: ${getSegaLastValue.kind === "Sega" ? getSegaLastValue.ipType : "ERROR"}`,42),"−","bottom","newLine",42),
                liner(printTextBlock(getSegaLastValue.kind === "Sega" ? "Platforms: " + getSegaLastValue.platforms : undefined,42),"−","bottom","newLine",42),
                liner(printTextBlock(getSegaLastValue.kind === "Sega" && getSegaLastValue.totalEditions !== 0 ? "Total Editions: " + getSegaLastValue.totalEditions.toString() : undefined,42),"−","bottom","newLine",42),
                liner(printReleaseDate(getSegaLastValue, 30) + printRank(getSegaLastValue, 9)
                ,"=","bottom","newLine"),
                liner(printTextBlock(getSegaLastValue.kind === "Sega" ? "Measure: " + getSegaLastValue.units : undefined,42),"−","bottom","newLine",42),
                liner(printTextBlock((getSegaLastValue.kind === "Sega" && getSegaLastValue.footnotes !== undefined) 
                    ? "Consists of: " + getSegaLastValue.footnotes
                    : undefined, 42),"=","bottom","newLine",42),
                liner(
                    value.map((elem, index, array) => printAnnualReportValue(elem, 27, 12, "Cumulative", (elem === array.at(-1)) ? "noNewLine" : "newLine")).reduce((acc, next) => acc + next)
                , "−", "bottom", "newLine", 42),
                liner(
                printAnnualReportValue(getSegaLastValue, 27, 12, "LTD","noNewLine")
                , "−", "bottom", "newLine"),
                liner((getFullGameRatios.length === 0 ? undefined : getFullGameRatios),"=","both","noNewLine",45),
                (getFullGameRatios.length === 0 ? "###\n" : "\n###\n"),
            ].reduce((acc, next) => acc + next, "");
        
        case "Capcom Game Series":

            const getCapcomGameSeriesLastValue = value.at(-1) as AnnualReportTitle;

            return [
                printSeriesName(getCapcomGameSeriesLastValue, 42),
                liner(printTextBlock(getCapcomGameSeriesLastValue.kind === "Capcom Game Series" ? "Number of Titles: " + getCapcomGameSeriesLastValue.numberOfTitles.toString() : undefined, 42),"−","bottom","newLine",42),
                liner(printReleaseDate(getCapcomGameSeriesLastValue, 30) + printRank(getCapcomGameSeriesLastValue, 9)
                ,"=","bottom","newLine"),
                liner(
                    value.map((elem, index, array) => printAnnualReportValue(elem, 27, 12, "Cumulative", (elem === array.at(-1)) ? "noNewLine" : "newLine")).reduce((acc, next) => acc + next)
                , "−", "bottom", "newLine", 42),
                liner(
                printAnnualReportValue(getCapcomGameSeriesLastValue, 27, 12, "LTD (units)","noNewLine")
                , "−", "bottom", "newLine")
            ].reduce((acc, next) => acc + next, "");
    
        case "Capcom Fact Book":

            const getCapcomFactBookLastValue = value.at(-1) as AnnualReportTitle;

            const getValueSum = value.reduce((acc, next) => acc + (next.valueThisFY.kind === "Annual Report" ? next.valueThisFY.value : 0), 0); 

            const getSKUsum = value.reduce((acc, next) => acc + (next.kind === "Capcom Fact Book" ? next.skuNumber : 0), 0)

            const createSum = {
                ...getCapcomFactBookLastValue,
                kind: "Capcom Fact Book",
                skuNumber: getSKUsum,
                valueThisFY: {
                    ...getCapcomFactBookLastValue.valueThisFY,
                    kind: "Annual Report",
                    value: getValueSum
                } as AnnualReportValue
            } satisfies AnnualReportTitle

            return [
                printSeriesName(getCapcomFactBookLastValue, 42),
                liner(
                    printTextBlock(`SKU sum: ${createSum.skuNumber}`,31) + printRank(getCapcomFactBookLastValue, 9)
                ,"=","bottom","newLine"),
                liner(
                    value.map((elem, index, array) => printAnnualReportValue(elem, 27, 12, "Cumulative", (elem === array.at(-1)) ? "noNewLine" : "newLine")).reduce((acc, next) => acc + next)
                , "−", "bottom", "newLine", 42),
                liner(
                printAnnualReportValue(createSum, 27, 12, "Sum (units)","noNewLine")
                , "−", "bottom", "newLine")
            ].reduce((acc, next) => acc + next, "");

        default:
            return ""
    }
}

