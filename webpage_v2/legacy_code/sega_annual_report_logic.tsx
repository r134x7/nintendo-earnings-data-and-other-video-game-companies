import { printTextBlock, border, liner, spacer } from "../src/utils/table_design_logic"

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
    fiscalYear?: string,
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

        let printMisc1: string | undefined = printTextBlock(seriesIP?.miscellaneous1, 44);

        let printMisc2: string | undefined = printTextBlock(seriesIP?.miscellaneous2, 44)

        let printUnits: string = liner(printTextBlock(seriesIP?.units,44),(!printMisc1 && !printMisc2) ? "=" : "−","bottom",(!printMisc1 && !printMisc2) ? true : undefined,44)

        let printMiscFlatFilter: string = [printMisc1, printMisc2].flatMap((value, index, array) => {
            // do not use value over array in return statement else it gets first value in string...
            return array?.[index] ?? []; 
        }).reduce((acc, next) => acc + "\n" + next, "");

        let printMiscCheck = (!printMisc1 && !printMisc2) 
            ? "" 
            : liner(printMiscFlatFilter,"=","bottom",true,44)

        let printUnitsFixedLine: string = printUnits + printMiscCheck;

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
        ]);

        let printValues = liner(printCmlValue + printFYCmlYoYFixed + printLTDValue, "−", "bottom", true, 34)

    return printTitleNameFixed + printUnitsFixedLine + printValues
}
