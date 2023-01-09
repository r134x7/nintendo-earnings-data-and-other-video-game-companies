import { spacer, border, liner, printTextBlock } from "./table_design_logic";

export type Series = {
    title: string,
    skuNumber: number,
    value: number,
    valueLastFY: number,
    rank?: number,
    miscellaneous?: string,
};

export type Header = {
    firstHeader: "Capcom - Fact Book Data", 
    secondHeader: "Units shipped by Platform",
    thirdHeader: "SKU and Rank",
    fourthHeader: "Units",
    fiscalYear: string,
    fiscalYearYoY: string,
};

const printRankAndSKU = (seriesIP: Series, blockLength: number) => {
    return  border([spacer(`SKU sum: ${seriesIP.skuNumber} | Rank ${seriesIP.rank}`, blockLength, "left")]);
};

const printCmlValue = (seriesIP: Series, blockLength: number, header: Header) => {
        return border([
            spacer(header.fiscalYear, 20, "left"),
            spacer(`${(seriesIP.value).toFixed(2)}M`, 20, "right"),
        ])
};

const printCmlYoY = (seriesIP: Series, blockLength: number, header: Header) => {

        let FYCmlYoY = (seriesIP.valueLastFY === 0)
                ? "New!"
                : (seriesIP.value >= seriesIP.valueLastFY)
                ? `+${((
                    ((seriesIP.value / seriesIP.valueLastFY)) - 1) * 100).toFixed(2)}%` 
                : `${((
                    ((seriesIP.value / seriesIP.valueLastFY)) - 1) * 100).toFixed(2)}%` 

        return border([
            spacer(header.fiscalYear, 20, "left"),
            spacer(FYCmlYoY, 20, "right"),
        ])
    };

const printSeriesName = (seriesIP: Series) => {

    return (blockLength: number) => {
       return (!seriesIP.miscellaneous) 
            ? "+"+"−".repeat(blockLength)+"+\n" + printTextBlock(seriesIP.title, blockLength) + "\n+" + "−".repeat(blockLength) + "+\n|" + printRankAndSKU(seriesIP, blockLength) + "|"
            : "+"+"−".repeat(blockLength)+"+\n" + printTextBlock(seriesIP.title, blockLength) + "\n+" + "−".repeat(blockLength) + "+\n|" + printRankAndSKU(seriesIP, blockLength) + "|\n+" + "−".repeat(blockLength) + "+\n" + printTextBlock(seriesIP.miscellaneous, blockLength);
    };
};

export const printSeriesOutput = (seriesIP: Series, header: Header, blockLength: number, valueLength: number) => {
        return printSeriesName(seriesIP)(blockLength) + "\n" + "\n" + printCmlValue(seriesIP, valueLength, header) + "\n" + printCmlYoY(seriesIP, valueLength, header)
};
