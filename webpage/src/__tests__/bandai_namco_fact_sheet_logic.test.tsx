import { printTextBlock } from "../utils/sega_annual_report_logic";

export type Series = {
    title: string,
    releaseDate: string,
    fyEndMonth: string,
    value: number,
    valueLastFY: number,
    valueLastTwoFYs: number,
    rank?: number,
    miscellaneous?: string,
}

export type Header = {
    bandaiNamcoHeader: "| Bandai Namco - IP Series Data  |",
    secondHeader: "| First Appearance to recent FY |",
    thirdHeader: "| Rank                           |",
    fourthHeader: "| Units                          |",
    fiscalYear: string,
    fiscalYearYoY: string,
    ltd: "| Life-To-Date       |",
    summaryHeader: string,
}

export const printHead = (header: Header) =>
`+${"-".repeat(32)}+
${header.bandaiNamcoHeader}
+${"-".repeat(32)}+
${header.secondHeader}
+${"-".repeat(32)}+
${header.thirdHeader}
+${"-".repeat(32)}+
${header.fourthHeader}
+${"-".repeat(32)}+`;

const printRank = (seriesIP: Series, blockLength: number) => {
    let ranking: string = ` Rank ${seriesIP.rank} `;
    return (ranking.length >= blockLength)
            ? ranking
            : ranking + " ".repeat(blockLength - ranking.length);
}

const printReleaseDate = (seriesIP: Series, blockLength: number) => {
    let releaseDate: string = seriesIP.releaseDate + " to " + seriesIP.fyEndMonth;
    return (releaseDate.length >= blockLength)
        ? releaseDate
        : releaseDate + " ".repeat(blockLength - releaseDate.length);
}

const printSeries = (header: Header, seriesIP: Series) => {

        let rank: string = printRank(seriesIP, 11); 
    
        let printSeriesName: string | never[] = printTextBlock(seriesIP.title, 38);

        let printReleaseDate: string = seriesIP.releaseDate + " to " + seriesIP.fyEndMonth; 
        
        let printReleaseDateFixed: string = 
             "|" + printReleaseDate + " ".repeat(38 - printReleaseDate.length) + "|"
        
        let printTitleNameFixed: string = "+"+"-".repeat(44)+"+\n|" + printTitleName + "|\n+" + "-".repeat(44) + "+\n|" + printIPType + "|\n+" + "-".repeat(44) + "+\n" + printPlatforms + "\n+" + "-".repeat(44) + "+\n" + printReleaseDateFixed + printRankFixed + "|"

        let printUnits: string = "| " + seriesIP.units + " ".repeat(43 - seriesIP.units.length) + "|";

        let printMisc1: string | never[] = (!seriesIP.miscellaneous1)
            ? [] 
            : printTextBlock(seriesIP.miscellaneous1, 44)

        let printMisc2: string | never[] = (!seriesIP.miscellaneous2)
            ? [] 
            : printTextBlock(seriesIP.miscellaneous2, 44)

        let printMiscFlatFilter: string[] = [printMisc1, printMisc2].filter(elem => elem.length !== 0).flat()

        let printUnitsFixed: string = (printMiscFlatFilter.length === 0)
            ? printUnits
            : printUnits + "\n" + printMiscFlatFilter.reduce((prev, next) => prev + "\n" + next);

        let printCmlValue: string = `${(seriesIP.value - seriesIP.valueLastFY).toFixed(2)}M `

        let printCmlValueFixed: string = (printCmlValue.length >= 11)
            ? printCmlValue
            : " ".repeat(11 - printCmlValue.length) + printCmlValue;

        let printFYCmlYoY = (seriesIP.valueLastFY === 0)
                ? " New! "
                : ((seriesIP.value - seriesIP.valueLastFY) >=  (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs) && !((seriesIP.valueLastFY - seriesIP.valueLastTwoFYs) < 0))
                ? `+${((
                    ((seriesIP.value - seriesIP.valueLastFY) / (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs)) - 1) * 100).toFixed(2)}% ` 
                : `${((
                    ((seriesIP.value - seriesIP.valueLastFY) / (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs)) - 1) * 100).toFixed(2)}% ` 

        let printFYCmlYoYFixed: string = (printFYCmlYoY.length >= 11) 
                ? header.fiscalYearYoY + printFYCmlYoY + "|"
                : header.fiscalYearYoY + " ".repeat(11 - printFYCmlYoY.length) + printFYCmlYoY + "|"
                
        
        let printLTDValue: string = `${seriesIP.value}M `
       
        let printLTDValueFixed: string = (printLTDValue.length >= 11)
            ? printLTDValue
            : " ".repeat(11 - printLTDValue.length) + printLTDValue;

        let printLine: string = "+" + "-".repeat(44) + "+";
        let printLineEnd: string = "+" + "-".repeat(32) + "+";
        let printDoubleLine: string = "+" + "=".repeat(44) + "+";

    return printTitleNameFixed + "\n" + printDoubleLine + "\n" + printUnitsFixed + "\n" + printLine + "\n" + header.fiscalYear + printCmlValueFixed + "|\n" + printFYCmlYoYFixed + "\n" + header.ltd + printLTDValueFixed + "|\n" + printLineEnd
}
