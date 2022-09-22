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

        return (blockLength: number) => {

            return (CmlValue.length >= blockLength)
                ? CmlValue
                : " ".repeat(blockLength - CmlValue.length) + CmlValue;
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

const printSeries = (header: Header, seriesIP: Series) => {

        let rank: string = printRank(seriesIP)(11); 
    
        // let printSeriesName: string | never[] = printTextBlock(seriesIP.title, 38);

        // let releaseDate: string = printReleaseDate(seriesIP, 38);
        
        // let printTitleNameFixed: string = "+"+"-".repeat(44)+"+\n|" + printSeriesName + "|\n+" + "-".repeat(44) + "+\n|" + releaseDate + "|\n+" + "-".repeat(44) + "+"
        
        let printTitleName: string = printSeriesName(seriesIP)(38);

        let printMisc1: string | never[] = (!seriesIP.miscellaneous)
            ? [] 
            : printTextBlock(seriesIP.miscellaneous)(44);

        let printMiscFlatFilter: string[] = [printMisc1].filter(elem => elem.length !== 0).flat();

        // let printUnitsFixed: string = (printMiscFlatFilter.length === 0)
        //     ? printUnits
        //     : printUnits + "\n" + printMiscFlatFilter.reduce((prev, next) => prev + "\n" + next);

        let CmlValue: string = printCmlValue(seriesIP)(11); // composition

        let CmlYoY: string = printCmlYoY(seriesIP)(11)(header); // composition

        // let printCmlValue: string = `${(seriesIP.value - seriesIP.valueLastFY).toFixed(2)}M `

        // let printCmlValueFixed: string = (printCmlValue.length >= 11)
            // ? printCmlValue
            // : " ".repeat(11 - printCmlValue.length) + printCmlValue;

        // let printFYCmlYoY = (seriesIP.valueLastFY === 0)
        //         ? " New! "
        //         : ((seriesIP.value - seriesIP.valueLastFY) >=  (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs) && !((seriesIP.valueLastFY - seriesIP.valueLastTwoFYs) < 0))
        //         ? `+${((
        //             ((seriesIP.value - seriesIP.valueLastFY) / (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs)) - 1) * 100).toFixed(2)}% ` 
        //         : `${((
        //             ((seriesIP.value - seriesIP.valueLastFY) / (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs)) - 1) * 100).toFixed(2)}% ` 

        // let printFYCmlYoYFixed: string = (printFYCmlYoY.length >= 11) 
        //         ? header.fiscalYearYoY + printFYCmlYoY + "|"
        //         : header.fiscalYearYoY + " ".repeat(11 - printFYCmlYoY.length) + printFYCmlYoY + "|"
                
        
        let printLTDValue: string = `${seriesIP.value}M `
       
        let printLTDValueFixed: string = (printLTDValue.length >= 11)
            ? printLTDValue
            : " ".repeat(11 - printLTDValue.length) + printLTDValue;

        let printLine: string = "+" + "-".repeat(44) + "+";
        let printLineEnd: string = "+" + "-".repeat(32) + "+";
        let printDoubleLine: string = "+" + "=".repeat(44) + "+";

    return printTitleNameFixed + "\n" + printDoubleLine + "\n" + printUnitsFixed + "\n" + printLine + "\n" + header.fiscalYear + printCmlValueFixed + "|\n" + printFYCmlYoYFixed + "\n" + header.ltd + printLTDValueFixed + "|\n" + printLineEnd
}
