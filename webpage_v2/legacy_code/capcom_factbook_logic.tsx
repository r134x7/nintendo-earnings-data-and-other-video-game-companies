import { spacer, border, liner, printTextBlock } from "../src/utils/table_design_logic";

export type Series = {
    title: string,
    skuNumber: number,
    value: number,
    valueLastFY: number,
    rank?: number,
    miscellaneous?: string,
    fiscalYear?: string,
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
    return  border([spacer(`SKU sum: ${seriesIP.skuNumber} | Rank ${seriesIP.rank}`, blockLength-1, "left")]);
};

const printCmlValue = (seriesIP: Series, blockLength: number, header: Header) => {
        return border([
            spacer(header.fiscalYear + " Cumulative", 20, "left"),
            spacer(`${(seriesIP.value).toFixed(2)}M`, 9, "right"),
        ],true)
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
            spacer(header.fiscalYear + " Cml. YoY%", 20, "left"),
            spacer(FYCmlYoY, 9, "right"),
        ])
    };

const printSeriesName = (seriesIP: Series, blockLength: number) => {
       return (!seriesIP.miscellaneous) 
            ? liner(printTextBlock(seriesIP.title, blockLength), "−", "both", true, blockLength) + liner(printRankAndSKU(seriesIP, blockLength), "=","bottom",true)
            : liner(printTextBlock(seriesIP.title, blockLength), "−", "both", true, blockLength) + liner(printRankAndSKU(seriesIP, blockLength), "=","bottom",true) + liner(printTextBlock(seriesIP.miscellaneous, blockLength),"−","bottom",true,blockLength);
};

export const printSeriesOutput = (seriesIP: Series, header: Header, blockLength: number, valueLength: number, returnObject?: true) => {
        return (!returnObject)
            ? printSeriesName(seriesIP, blockLength) + printCmlValue(seriesIP, valueLength, header) + liner(printCmlYoY(seriesIP, valueLength, header),"−","bottom")
            : {
                title: seriesIP.title,
                table: printSeriesName(seriesIP, blockLength) + printCmlValue(seriesIP, valueLength, header) + liner(printCmlYoY(seriesIP, valueLength, header),"−","bottom") + "\n"
            }
};
