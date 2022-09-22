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

const printRank = (seriesIP: Series) => {

    let ranking: string = ` Rank ${seriesIP.rank} `;

    return (blockLength: number) => {

        return (ranking.length >= blockLength)
            ? ranking
            : ranking + " ".repeat(blockLength - ranking.length); 
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

const printReleaseDate = (seriesIP: Series) => {

    let releaseDate: string = seriesIP.releaseDate + " to " + seriesIP.fyEndMonth;

    return (blockLength: number) => {

        return (releaseDate.length >= blockLength)
            ? releaseDate
            : releaseDate + " ".repeat(blockLength - releaseDate.length);
    };
};

const printSeriesName = (seriesIP: Series) => {

    return (blockLength: number) => {
       return "+"+"-".repeat(blockLength)+"+\n|" + printTextBlock(seriesIP.title) + "|\n+" + "-".repeat(blockLength) + "+\n|" + printReleaseDate(seriesIP) + "|\n+" + "-".repeat(blockLength) + "+" 

    };
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
                : ((seriesIP.value - seriesIP.valueLastFY) >=  (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs) && !((seriesIP.valueLastFY - seriesIP.valueLastTwoFYs) < 0))
                ? `+${((
                    ((seriesIP.value - seriesIP.valueLastFY) / (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs)) - 1) * 100).toFixed(2)}% ` 
                : `${((
                    ((seriesIP.value - seriesIP.valueLastFY) / (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs)) - 1) * 100).toFixed(2)}% ` 

        return (blockLength: number) => {

            return (header: Header) => {

                return (FYCmlYoY.length >= blockLength) 
                    ? header.fiscalYearYoY + FYCmlYoY + "|"
                    : header.fiscalYearYoY + " ".repeat(blockLength - FYCmlYoY.length) + FYCmlYoY + "|"
            };
        };
    };

const printLTDValue = (seriesIP: Series) => {

        let printLTDValue: string = `${seriesIP.value}M `
       
        return (blockLength: number) => {

            return (printLTDValue.length >= blockLength)
            ? printLTDValue
            : " ".repeat(blockLength - printLTDValue.length) + printLTDValue;
        };
};

const printSeries = (header: Header, seriesIP: Series) => {

        let rank: string = printRank(seriesIP)(11); 
    
        let printTitleName: string = printSeriesName(seriesIP)(38);

        let printMisc1: string | never[] = (!seriesIP.miscellaneous)
            ? [] 
            : printTextBlock(seriesIP.miscellaneous)(44);

        let printMiscFlatFilter: string[] = [printMisc1].filter(elem => elem.length !== 0).flat();

        // let printUnitsFixed: string = (printMiscFlatFilter.length === 0)
        //     ? printUnits
        //     : printUnits + "\n" + printMiscFlatFilter.reduce((prev, next) => prev + "\n" + next);

        let CmlValue: string = printCmlValue(seriesIP)(11)(header); // composition

        let CmlYoY: string = printCmlYoY(seriesIP)(11)(header); // composition

        let ltdValue: string = printLTDValue(seriesIP)(11);

        const printSeriesOutput = (seriesIP: Series) => {

            return  (header: Header) =>
                    // (blockLength: number) =>
                    // (valueLength: number) =>
                    // (longLine: number) => 
                    // (shortLine: number) => 
                    {
                        return printSeriesName(seriesIP)(38) + "\n" + printDoubleLine(44) + "\n" + header.fiscalYear + printCmlValue(seriesIP)(11) + "\n" + header.
                    }
            }
        };

        const printLine = (lineLength: number) => "+" + "-".repeat(lineLength) + "+"; 

        const printDoubleLine = (lineLength: number) => "+" + "-".repeat(lineLength) + "+"; 

        // let printLine: string = "+" + "-".repeat(44) + "+";
        let printLineEnd: string = "+" + "-".repeat(32) + "+";
        // let printDoubleLine: string = "+" + "=".repeat(44) + "+";

    return printTitleNameFixed + "\n" + printDoubleLine + "\n" + header.fiscalYear + printCmlValueFixed + "|\n" + printFYCmlYoYFixed + "\n" + header.ltd + printLTDValueFixed + "|\n" + printLineEnd
}
