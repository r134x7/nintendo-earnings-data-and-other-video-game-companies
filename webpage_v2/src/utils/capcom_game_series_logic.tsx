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
    fiscalYear?: string,
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

export const printNumberOfTitles = (seriesIP: Series, blockLength: number, ) => {
    return border([
        spacer("Number of Titles: " + seriesIP.numberOfTitles.toString(),blockLength-1,"left"),
    ])
}

export const printReleaseDate = (seriesIP: Series, blockLength: number) => {
    return border([
        spacer(seriesIP.releaseDate,blockLength-14,"left"),
        spacer((`Rank ${seriesIP.rank}`), 11,"left"),
    ])
};

const printCmlValue = (seriesIP: Series, blockLength: number, header: Header) => {
        return border([
            spacer(header.fiscalYear + " Cumulative",20, "left"),
            spacer(`${(seriesIP.value - seriesIP.valueLastFY).toFixed(2)}M`, blockLength, "right"),
        ],true)
};

const printCmlYoY = (seriesIP: Series, blockLength: number, header: Header) => {

        let FYCmlYoY = (seriesIP.valueLastFY === 0)
                ? "New!"
                : ((seriesIP.value - seriesIP.valueLastFY) === 0 && (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs) === 0)
                    ? "N/A"
                    : ((seriesIP.value - seriesIP.valueLastFY) >=  (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs) && !((seriesIP.valueLastFY - seriesIP.valueLastTwoFYs) < 0))
                        ? `+${((
                            ((seriesIP.value - seriesIP.valueLastFY) / (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs)) - 1) * 100).toFixed(2)}%` 
                        : `${((
                            ((seriesIP.value - seriesIP.valueLastFY) / (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs)) - 1) * 100).toFixed(2)}%` 
                        
        return border([
            spacer(header.fiscalYear + " Cml. YoY%",20, "left"),
            spacer(FYCmlYoY, blockLength, "right"),
        ],true)
    };

const printLTDValue = (seriesIP: Series, blockLength: number, header: Header) => {
        return liner(border([
            spacer(header.ltd,20, "left"),
            spacer(`${seriesIP.value}M`, blockLength, "right"),
        ]),"−","bottom")
};

const printSeriesName = (seriesIP: Series, blockLength: number) => {

    let seriesBlock = liner(printTextBlock(seriesIP.title, blockLength),"−","top",true, blockLength) +  liner(printReleaseDate(seriesIP, blockLength),"−","both",true,blockLength) + liner(printNumberOfTitles(seriesIP, blockLength),"=","bottom",true,blockLength) 

       return (!seriesIP.miscellaneous) 
            ? seriesBlock
            : seriesBlock + printTextBlock(seriesIP.miscellaneous, blockLength);
};

export const printSeriesOutput = (seriesIP: Series, header: Header, blockLength: number, valueLength: number, returnObject?: boolean) => {
        return (!returnObject) 
            ? printSeriesName(seriesIP, blockLength) + printCmlValue(seriesIP, valueLength, header) + printCmlYoY(seriesIP, valueLength, header) + printLTDValue(seriesIP,valueLength,header) 
            : {
                title: seriesIP.title,
                table: printSeriesName(seriesIP, blockLength) + printCmlValue(seriesIP, valueLength, header) + printCmlYoY(seriesIP, valueLength, header) + printLTDValue(seriesIP,valueLength,header) 
            }
};
