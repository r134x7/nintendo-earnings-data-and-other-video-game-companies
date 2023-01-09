import { printTextBlock, liner, spacer, border } from "./table_design_logic";

export type Series = {
    title: string,
    numberOfTitles: number,
    releaseDate: string,
    value: number,
    valueLastFY: number,
    valueLastTwoFYs: number,
    rank?: number,
    miscellaneous?: string,
};

export type Header = {
    capcomHeader: "Capcom - Game Series Data",
    secondHeader: "First Appearance and Rank",
    thirdHeader: "Number of Titles by Hardware SKU",
    fourthHeader: "Units",
    fiscalYear: string,
    fiscalYearYoY: string,
    ltd: "Life-To-Date",
    summaryHeader: string,
};

const printRank = (seriesIP: Series) => {

    let ranking: string = ` Rank ${seriesIP.rank} `;

    return (blockLength: number) => {

        return (ranking.length >= blockLength)
            ? ranking
            : ranking + " ".repeat(blockLength - ranking.length); 
    }; 
};

const printNumberOfTitles = (seriesIP: Series) => {

    let titleCount: string = " Number of Titles: " + seriesIP.numberOfTitles.toString();

    return (blockLength: number) => {

        return (titleCount.length >= blockLength)
            ? titleCount
            : titleCount + " ".repeat(blockLength - titleCount.length);
    }
}

const printReleaseDate = (seriesIP: Series) => {

    let releaseDate: string = seriesIP.releaseDate;

    return (blockLength: number) => {

        return (releaseDate.length >= blockLength)
            ? releaseDate + "|" + printRank(seriesIP)(11)
            : releaseDate + " ".repeat(blockLength - releaseDate.length - printRank(seriesIP)(11).length - 1) + "|" + printRank(seriesIP)(11); // not the best solution since I am having to hardcode printRank length...
    };
};

const printCmlValue = (seriesIP: Series) => {

        let CmlValue: string = `${(seriesIP.value - seriesIP.valueLastFY).toFixed(2)}M`

        return (blockLength: number) => 
               (header: Header) => {
                    return (CmlValue.length >= blockLength)
                        ? header.fiscalYear + CmlValue + "|"
                        : header.fiscalYear + " ".repeat(blockLength - CmlValue.length) + CmlValue + "|";
        };
};

const printCmlYoY = (seriesIP: Series) => {

        let FYCmlYoY = (seriesIP.valueLastFY === 0)
                ? "New!"
                : ((seriesIP.value - seriesIP.valueLastFY) === 0 && (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs) === 0)
                ? "N/A"
                : ((seriesIP.value - seriesIP.valueLastFY) >=  (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs) && !((seriesIP.valueLastFY - seriesIP.valueLastTwoFYs) < 0))
                ? `+${((
                    ((seriesIP.value - seriesIP.valueLastFY) / (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs)) - 1) * 100).toFixed(2)}%` 
                : `${((
                    ((seriesIP.value - seriesIP.valueLastFY) / (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs)) - 1) * 100).toFixed(2)}%` 

        return (blockLength: number) =>
               (header: Header) => {

                return (FYCmlYoY.length >= blockLength) 
                    ? header.fiscalYearYoY + FYCmlYoY + "|"
                    : header.fiscalYearYoY + " ".repeat(blockLength - FYCmlYoY.length) + FYCmlYoY + "|"
            };
    };

const printLTDValue = (seriesIP: Series) => {

        let printLTDValue: string = `${seriesIP.value}M`
       
        return (blockLength: number) => 
               (header: Header) => {

            return (printLTDValue.length >= blockLength)
            ? header.ltd + printLTDValue + "|"
            : header.ltd + " ".repeat(blockLength - printLTDValue.length) + printLTDValue + "|";
        };
};

const printSeriesName = (seriesIP: Series) => {

    return (blockLength: number) => {
       return (!seriesIP.miscellaneous) 
            ? "+"+"−".repeat(blockLength)+"+\n" + printTextBlock(seriesIP.title, blockLength) + "\n+" + "−".repeat(blockLength) + "+\n|" + printReleaseDate(seriesIP)(blockLength) + "|\n+" + "−".repeat(blockLength) + "+\n|" + printNumberOfTitles(seriesIP)(blockLength) + "|"
            : "+"+"−".repeat(blockLength)+"+\n" + printTextBlock(seriesIP.title, blockLength) + "\n+" + "−".repeat(blockLength) + "+\n|" + printReleaseDate(seriesIP)(blockLength) + "|\n+" + "−".repeat(blockLength) + "+\n" + printTextBlock(seriesIP.miscellaneous, blockLength);
    };
};

export const printSeriesOutput = (seriesIP: Series) => {

    return (header: Header) =>
           (blockLength: number) =>
           (valueLength: number) =>
           (shortLineLength: number) => {

                return printSeriesName(seriesIP)(blockLength) + "\n" + printDoubleLine(blockLength) + "\n" + printCmlValue(seriesIP)(valueLength)(header) + "\n" + printCmlYoY(seriesIP)(valueLength)(header) + "\n" + printLTDValue(seriesIP)(valueLength)(header) + "\n" + printLine(shortLineLength) 
    };
};

const printLine = (lineLength: number) => "+" + "−".repeat(lineLength) + "+"; 

const printDoubleLine = (lineLength: number) => "+" + "=".repeat(lineLength) + "+"; 

