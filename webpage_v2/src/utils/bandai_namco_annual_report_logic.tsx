import { printTextBlock, border, liner, spacer} from "./table_design_logic";

export type Series = {
    title: string,
    releaseDate: string,
    fyEndMonth: string,
    value: number,
    valueLastFY: number,
    valueLastTwoFYs: number,
    rank?: number,
    miscellaneous?: string,
    fiscalYear?: string,
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

export const printReleaseDateAndRank = (seriesIP: Series, blockLength: number) => {

    let releaseDate: string = seriesIP.releaseDate + " to " + seriesIP.fyEndMonth;

    let ranking: string = `Rank ${seriesIP.rank}`;

    return border([
        spacer(releaseDate, blockLength-12,"left"),
        spacer(ranking, 9,"left")
    ])
};

const printCmlValue = (seriesIP: Series, blockLength: number, header: Header) => {

        let CmlValue: string = `${(seriesIP.value - seriesIP.valueLastFY).toFixed(2)}M`

        return border([
            spacer(`${header.fiscalYear} Cumulative`, `${header.fiscalYear} Cumulative`.length+1, "left"),
            spacer(CmlValue, blockLength, "right")
        ])
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
            spacer(header.fiscalYear + " Cml. YoY%", 20, "left"),
            spacer(FYCmlYoY, 11, "right")
        ])
    };

const printLTDValue = (seriesIP: Series, blockLength: number, header: Header) => {

        let printLTDValue: string = `${seriesIP.value}M`
        
        return border([
                    spacer(header.ltd, 20, "left"),
                    spacer(printLTDValue, 11, "right")
                ])
};

const printSeriesName = (seriesIP: Series, blockLength: number) => {
       return (!seriesIP.miscellaneous) 
            ? liner(printTextBlock(seriesIP.title, blockLength),"−","both", true, blockLength) + printReleaseDateAndRank(seriesIP, blockLength)
            : liner(printTextBlock(seriesIP.title, blockLength),"−","both", true, blockLength) + liner(printReleaseDateAndRank(seriesIP, blockLength), "−", "bottom", true) + printTextBlock(seriesIP.miscellaneous, blockLength);
};

export const printSeriesOutput = (seriesIP: Series, header: Header, blockLength: number, valueLength: number) => {
        return liner(printSeriesName(seriesIP, blockLength), "=", "bottom", true, blockLength) + printCmlValue(seriesIP, valueLength, header) + "\n" + printCmlYoY(seriesIP, valueLength, header) + "\n" + liner(printLTDValue(seriesIP, valueLength, header), "−", "bottom")
};
