export type Series = {
    title: string,
    skuNumber: number,
    value: number,
    valueLastFY: number,
    rank?: number,
    miscellaneous?: string,
};

export type Header = {
    firstHeader: "| Capcom - Fact Book Data        |", 
    secondHeader: "| Units shipped by Platform  |",
    thirdHeader: "| SKUs and Rank                  |",
    fourthHeader: "| Units                          |",
    fiscalYear: string,
    fiscalYearYoY: string,
};

export const printHead = (header: Header) =>
`+${"-".repeat(32)}+
${header.firstHeader}
+${"-".repeat(32)}+
${header.secondHeader}
+${"-".repeat(32)}+
${header.thirdHeader}
+${"-".repeat(32)}+
${header.fourthHeader}
+${"-".repeat(32)}+`;

const printRankAndSKU = (seriesIP: Series) => {

    let rankingAndSKU: string = ` SKU: ${seriesIP.skuNumber} | Rank ${seriesIP.rank} `;

    return (blockLength: number) => {

        return (rankingAndSKU.length >= blockLength)
            ? rankingAndSKU
            : rankingAndSKU + " ".repeat(blockLength - rankingAndSKU.length); 
    }; 
};

const printTextBlock = (text: string) => {

    return (blockLength: number) => {

        let textSplit: string[] = text.split(" ");
         
        let arrayCheckText = 0; // a mutating variable for splicing textSplit below in textReduce

        let printText: string | never[] = Array.from({length:Math.ceil((text.length + textSplit.length)/blockLength)}, (v,i) => {

            let textSplice = textSplit.slice(arrayCheckText)

            let nextCheckAlert = false;
            
            let textReduce = textSplice.reduce((prev, next) => 
            {
                if (nextCheckAlert) { // if this isn't here and next is small enough to pass the next if statement then words end up missing due to the arrayCheckText + increment
                    return prev
                }

                let nextCheck = prev + " " + next + " ";
                
                if (nextCheck.length > blockLength) {
                    nextCheckAlert = true;
                    return prev // repeat prev until reduce finishes
                } 
                
                arrayCheckText++ 

                return prev + " " + next
                
            }, "")

            let textFixed = (textReduce.length >= blockLength || textReduce.length === 0) // latter condition is to return an empty array
                ? textReduce
                : textReduce + " ".repeat(blockLength - textReduce.length)

            return (textFixed.length === 0) 
                ? []
                : "|" + textFixed + "|"

        }).filter(elem => elem.length !== 0).reduce((prev, next) => prev + "\n" + next)
        
        return printText
    }
};

const printCmlValue = (seriesIP: Series) => {

        let CmlValue: string = `${(seriesIP.value - seriesIP.valueLastFY).toFixed(2)}M `

        return (blockLength: number) => 
               (header: Header) => {
                    return (CmlValue.length >= blockLength)
                        ? header.fiscalYear + CmlValue + "|"
                        : header.fiscalYear + " ".repeat(blockLength - CmlValue.length) + CmlValue + "|";
        };
};

const printCmlYoY = (seriesIP: Series) => {

        let FYCmlYoY = (seriesIP.valueLastFY === 0)
                ? " New! "
                : (seriesIP.value >= seriesIP.valueLastFY)
                ? `+${((
                    ((seriesIP.value / seriesIP.valueLastFY)) - 1) * 100).toFixed(2)}% ` 
                : `${((
                    ((seriesIP.value / seriesIP.valueLastFY)) - 1) * 100).toFixed(2)}% ` 

        return (blockLength: number) =>
               (header: Header) => {

                return (FYCmlYoY.length >= blockLength) 
                    ? header.fiscalYearYoY + FYCmlYoY + "|"
                    : header.fiscalYearYoY + " ".repeat(blockLength - FYCmlYoY.length) + FYCmlYoY + "|"
            };
    };

const printSeriesName = (seriesIP: Series) => {

    return (blockLength: number) => {
       return (!seriesIP.miscellaneous) 
            ? "+"+"-".repeat(blockLength)+"+\n" + printTextBlock(seriesIP.title)(blockLength) + "\n+" + "-".repeat(blockLength) + "+\n|" + printRankAndSKU(seriesIP)(blockLength) + "|"
            : "+"+"-".repeat(blockLength)+"+\n" + printTextBlock(seriesIP.title)(blockLength) + "\n+" + "-".repeat(blockLength) + "+\n|" + printRankAndSKU(seriesIP)(blockLength) + "|\n+" + "-".repeat(blockLength) + "+\n" + printTextBlock(seriesIP.miscellaneous)(blockLength);
    };
};

export const printSeriesOutput = (seriesIP: Series) => {

    return (header: Header) =>
           (blockLength: number) =>
           (valueLength: number) =>
           (shortLineLength: number) => {

                return printSeriesName(seriesIP)(blockLength) + "\n" + printDoubleLine(blockLength) + "\n" + printCmlValue(seriesIP)(valueLength)(header) + "\n" + printCmlYoY(seriesIP)(valueLength)(header) + "\n" + printLine(shortLineLength) 
    };
};

const printLine = (lineLength: number) => "+" + "-".repeat(lineLength) + "+"; 

const printDoubleLine = (lineLength: number) => "+" + "=".repeat(lineLength) + "+"; 

