import { printTextBlock, border, liner, spacer } from "./table_design_logic";

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
    bandaiNamcoHeader: "Bandai Namco - IP Series Data" | "Square Enix  - IP Series Data",
    secondHeader: "First appearance to recent FY",
    thirdHeader: "Rank",
    fourthHeader: "Units",
    fiscalYear: string,
    fiscalYearYoY: string,
    ltd: "Life-To-Date",
    summaryHeader: string,
};

export const printHead = (header: Header) => {
    
    let headerArray = [
        header.bandaiNamcoHeader,
        header.secondHeader,
        header.thirdHeader,
        header.fourthHeader,
    ];

    return Array.from({length:headerArray.length}, (v,i) => {

        return (i === headerArray.length-1)
            ? liner(border([spacer(headerArray[i], 32, "left")]), "−","both")
            : liner(border([spacer(headerArray[i], 32, "left")]), "−","top", true)
    }).reduce((acc, next) => acc + next);
};

const printReleaseDateAndRank = (seriesIP: Series) => {

    let releaseDate: string = seriesIP.releaseDate + " to " + seriesIP.fyEndMonth;

    let ranking: string = `Rank ${seriesIP.rank}`;

    return (blockLength: number) => {
        return border([
            spacer(releaseDate, blockLength-12,"left"),
            spacer(ranking, 9,"left")
        ])
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
        };
};

const printSeriesName = (seriesIP: Series) => {

    return (blockLength: number) => {
       return (!seriesIP.miscellaneous) 
            ? liner(printTextBlock(seriesIP.title, blockLength),"−","both", true, blockLength) + printReleaseDateAndRank(seriesIP)(blockLength)
            : liner(printTextBlock(seriesIP.title, blockLength),"−","both", true, blockLength) + liner(printReleaseDateAndRank(seriesIP)(blockLength), "−", "bottom", true) + printTextBlock(seriesIP.miscellaneous, blockLength);
    };
};

export const printSeriesOutput = (seriesIP: Series) => {

    return (header: Header) =>
           (blockLength: number) =>
           (valueLength: number) =>
           (shortLineLength: number) => {

                return liner(printSeriesName(seriesIP)(blockLength), "=", "bottom", true, blockLength) + printCmlValue(seriesIP)(valueLength)(header) + "\n" + printCmlYoY(seriesIP)(valueLength)(header) + "\n" + liner(printLTDValue(seriesIP)(valueLength)(header), "−", "bottom")
    };
};
