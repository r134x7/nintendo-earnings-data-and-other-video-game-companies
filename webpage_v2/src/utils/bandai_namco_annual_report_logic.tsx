import { printTextBlock, border, liner, spacer, singleLiner } from "./table_design_logic";

export type Series = {
    title: string,
    releaseDate: string,
    fyEndMonth: string,
    value: number,
    valueLastFY: number,
    valueLastTwoFYs: number,
    rank?: number,
    miscellaneous?: string,
};

export type Header = {
    bandaiNamcoHeader: "| Bandai Namco - IP Series Data  |" | "| Square Enix  - IP Series Data  |",
    secondHeader: "| First appearance to recent FY  |",
    thirdHeader: "| Rank                           |",
    fourthHeader: "| Units                          |",
    fiscalYear: string,
    fiscalYearYoY: string,
    ltd: "Life-To-Date",
    summaryHeader: string,
};

export const printHead = (header: Header) =>
`+${"−".repeat(32)}+
${header.bandaiNamcoHeader}
+${"−".repeat(32)}+
${header.secondHeader}
+${"−".repeat(32)}+
${header.thirdHeader}
+${"−".repeat(32)}+
${header.fourthHeader}
+${"−".repeat(32)}+`;

// const printRank = (seriesIP: Series) => {

//     let ranking: string = ` Rank ${seriesIP.rank} `;

//     return (blockLength: number) => {

//         return (ranking.length >= blockLength)
//             ? ranking
//             : ranking + " ".repeat(blockLength - ranking.length); 
//     }; 
// };


const printReleaseDateAndRank = (seriesIP: Series) => {

    let releaseDate: string = seriesIP.releaseDate + " to " + seriesIP.fyEndMonth;

    let ranking: string = `Rank ${seriesIP.rank}`;

    return (blockLength: number) => {
        return border([
            spacer(releaseDate, blockLength-12,"left"),
            spacer(ranking, 9,"left")
        ])

        // return (releaseDate.length >= blockLength)
        //     ? releaseDate + "|" + printRank(seriesIP)(11)
        //     : releaseDate + " ".repeat(blockLength - releaseDate.length - printRank(seriesIP)(11).length - 1) + "|" + printRank(seriesIP)(11); // not the best solution since I am having to hardcode printRank length...
    };
};

const printCmlValue = (seriesIP: Series) => {

        let CmlValue: string = `${(seriesIP.value - seriesIP.valueLastFY).toFixed(2)}M`

        return (blockLength: number) => 
               (header: Header) => {
                return border([
                    spacer(`${header.fiscalYear} Cumulative`, `${header.fiscalYear} Cumulative`.length+1, "left"),
                    spacer(CmlValue, blockLength, "right")
                ])
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
                return border([
                    spacer(header.fiscalYear + " Cml. YoY%", 20, "left"),
                    spacer(FYCmlYoY, 11, "right")
                ])

                // return (FYCmlYoY.length >= blockLength) 
                //     ? header.fiscalYearYoY + FYCmlYoY + "|"
                //     : header.fiscalYearYoY + " ".repeat(blockLength - FYCmlYoY.length) + FYCmlYoY + "|"
            };
    };

const printLTDValue = (seriesIP: Series) => {

        let printLTDValue: string = `${seriesIP.value}M`
       
        return (blockLength: number) => 
               (header: Header) => {
                return border([
                    spacer(header.ltd, 20, "left"),
                    spacer(printLTDValue, 11, "right")
                ])

            // return (printLTDValue.length >= blockLength)
            // ? header.ltd + printLTDValue + "|"
            // : header.ltd + " ".repeat(blockLength - printLTDValue.length) + printLTDValue + "|";
        };
};

const printSeriesName = (seriesIP: Series) => {

    return (blockLength: number) => {
       return (!seriesIP.miscellaneous) 
            ? liner(printTextBlock(seriesIP.title, blockLength),"−","both") + "\n" + printReleaseDateAndRank(seriesIP)(blockLength)
            : liner(printTextBlock(seriesIP.title, blockLength),"−","both", blockLength) + "\n" + printReleaseDateAndRank(seriesIP)(blockLength) + "\n" + singleLiner(blockLength+2, "−") + "\n" + printTextBlock(seriesIP.miscellaneous, blockLength);
    };
};

export const printSeriesOutput = (seriesIP: Series) => {

    return (header: Header) =>
           (blockLength: number) =>
           (valueLength: number) =>
           (shortLineLength: number) => {

                return printSeriesName(seriesIP)(blockLength) + "\n" + singleLiner(blockLength+2,"=") + "\n" + printCmlValue(seriesIP)(valueLength)(header) + "\n" + printCmlYoY(seriesIP)(valueLength)(header) + "\n" + printLTDValue(seriesIP)(valueLength)(header) + "\n" + singleLiner(shortLineLength+4,"−")
    };
};
