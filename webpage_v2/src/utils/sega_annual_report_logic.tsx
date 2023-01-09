import { printTextBlock, border, liner, spacer } from "./table_design_logic"

export type Series = {
    title: string,
    firstReleaseYear: string,
    platforms: string,
    totalEditions: number,
    units: string,
    value: number,
    valueLastFY: number,
    valueLastTwoFYs: number,
    ipType: "Acquired IP" | "Developed in-house IP" | "Licensed third party IP" | "Undefined",
    rank?: number,
    miscellaneous1?: string,
    miscellaneous2?: string,
}

export type Header = {
    segaHeader: "Sega Sammy - IP Series Data",
    secondHeader: "IP Title",
    thirdHeader: "IP Type",
    fourthHeader: "Platforms",
    fifthHeader: "Total Editions"
    sixthHeader: "First Appearance and Rank",
    seventhHeader: "Units",
    fiscalYear: string,
    fiscalYearYoY: string,
    ltd: "Life-To-Date",
    summaryHeader: string,
}

export const printSeries = (header: Header, seriesIP: Series) => {

        let printTitleName: string = liner(printTextBlock(seriesIP.title, 44), "−", "top", true, 44);

        let printPlatforms: string = liner(printTextBlock(seriesIP.platforms, 44), "−", "both", true, 44);

        let printFirstYearAndRankAndEditions: string = (seriesIP.totalEditions === 0) 
            ? liner(border([
                spacer("First Year: " + seriesIP.firstReleaseYear, 30, "left"),
                spacer(`Rank ${seriesIP.rank}`, 11, "left"),
            ]), "=", "bottom", true, 44)
            : liner(border([
                spacer("Total Editions: " + seriesIP.totalEditions, 43, "left")
            ]), "−", "bottom", true) + liner(border([
                spacer("First Year: " + seriesIP.firstReleaseYear, 30, "left"),
                spacer(`Rank ${seriesIP.rank}`, 11, "left"),
            ]), "=", "bottom", true, 44);

        let printIPType: string = liner(border([spacer(seriesIP.ipType, 43, "left")]),"−", "top", true)

        let printTitleNameFixed: string = printTitleName + printIPType + printPlatforms + printFirstYearAndRankAndEditions

        let printUnits: string = border([spacer(seriesIP.units, 43, "left")]);

        let printMisc1: string | never[] = (!seriesIP.miscellaneous1)
            ? [] 
            : printTextBlock(seriesIP.miscellaneous1, 44)

        let printMisc2: string | never[] = (!seriesIP.miscellaneous2)
            ? [] 
            : printTextBlock(seriesIP.miscellaneous2, 44)

        let printMiscFlatFilter: string[] = [printMisc1, printMisc2].flat()

        let printUnitsFixed: string = (printMiscFlatFilter.length === 0)
            ? printUnits
            : printUnits + "\n" + printMiscFlatFilter.reduce((prev, next) => prev + "\n" + next);

        let printCmlValue: string = border([
            spacer(header.fiscalYear + " Cumulative", 20, "left"),
            spacer(`${(seriesIP.value - seriesIP.valueLastFY).toFixed(2)}M`, 11, "right")
        ],true);

        let printFYCmlYoY = (seriesIP.valueLastFY === 0)
                ? "New!"
                : ((seriesIP.value - seriesIP.valueLastFY) === 0 && (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs) === 0)
                ? "N/A"
                : ((seriesIP.value - seriesIP.valueLastFY) >=  (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs) && !((seriesIP.valueLastFY - seriesIP.valueLastTwoFYs) < 0))
                ? `+${((
                    ((seriesIP.value - seriesIP.valueLastFY) / (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs)) - 1) * 100).toFixed(2)}%` 
                : `${((
                    ((seriesIP.value - seriesIP.valueLastFY) / (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs)) - 1) * 100).toFixed(2)}%` 

        let printFYCmlYoYFixed: string = border([
            spacer(header.fiscalYearYoY, 20, "left"),
            spacer(printFYCmlYoY, 11, "right"),
        ],true);
                
        let printLTDValue: string = border([
            spacer(header.ltd, 20, "left"),
            spacer(`${seriesIP.value}M`, 11, "right"),
        ],true);

        let printValues = liner(printCmlValue + printFYCmlYoYFixed + printLTDValue, "−", "bottom", undefined, 32)

    return printTitleNameFixed + printUnitsFixed + printValues
}
