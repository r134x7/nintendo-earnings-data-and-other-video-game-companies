export type Series = {
    title: string,
    firstReleaseYear: string,
    platforms: string,
    totalEditions: number,
    units: string,
    value: number,
    valueLastFY: number,
    valueLastTwoFYs: number,
    ipType: " Acquired IP " | " Developed in-house IP " | " Licensed third party IP ",
    rank?: number,
    miscellaneous1?: string,
    miscellaneous2?: string,
}

export type Header = {
    segaHeader: "| Sega Sammy - IP Series Data    |",
    secondHeader: "| IP Title                       |",
    thirdHeader: "| IP Type                        |",
    fourthHeader: "| Platforms                      |",
    fifthHeader: "| Total Editions                 |"
    sixthHeader: "| First Appearance and Rank      |",
    seventhHeader: "| Units                          |",
    fiscalYear: string,
    fiscalYearYoY: string,
    ltd: "| Life-To-Date       |",
    summaryHeader: string,
}

export const printHead = (header: Header) =>
`+${"-".repeat(32)}+
${header.segaHeader}
+${"-".repeat(32)}+
${header.secondHeader}
+${"-".repeat(32)}+
${header.thirdHeader}
+${"-".repeat(32)}+
${header.fourthHeader}
+${"-".repeat(32)}+
${header.fifthHeader}
+${"-".repeat(32)}+
${header.sixthHeader}
+${"-".repeat(32)}+`;

const printTextBlock = (text: string, blockLength: number) => {

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
};

export const printSeries = (header: Header, seriesIP: Series) => {

        let printRank: string = ` Rank ${seriesIP.rank} `
        let printRankFixed: string = (printRank.length >= 11)
                ? printRank
                : printRank + " ".repeat(11 - printRank.length);

        let printTitleName: string = (seriesIP.title.length > 44)
        ? seriesIP.title.split(" ").reduce((prev, next, index, array) => 
        {

            let nextCheck = prev + next + " ";
            
            if (nextCheck.length > 43 && prev.length <= 43) {
                return prev + " ".repeat(44 - prev.length) + `|\n| ` + next
            } else if (index === array.length-1) {
                return prev + next + " ".repeat(89 - prev.length)
            } else {
                return prev + " " + next
            }
        })
        : (seriesIP.title.length < 44)
        ? seriesIP.title + " ".repeat(44 - seriesIP.title.length) 
        : seriesIP.title

        let printPlatforms: string | never[] = printTextBlock(seriesIP.platforms, 44)

        let printFirstYear: string = "| First Year:" + seriesIP.firstReleaseYear
        
        let printReleaseDateFixed: string = (seriesIP.totalEditions !== 0)
            ? "| Total Editions: " + seriesIP.totalEditions +  " ".repeat(44 - (seriesIP.totalEditions.toString().length + " Total Editions: ".length)) + "|\n+" + "-".repeat(44) + "+\n" + printFirstYear + " ".repeat(33 - printFirstYear.length) + "|"
            : printFirstYear + " ".repeat(33 - printFirstYear.length) + "|"
        
        let printIPType: string = seriesIP.ipType + " ".repeat(44 - seriesIP.ipType.length)

        let printTitleNameFixed: string = "+"+"-".repeat(44)+"+\n|" + printTitleName + "|\n+" + "-".repeat(44) + "+\n|" + printIPType + "|\n+" + "-".repeat(44) + "+\n" + printPlatforms + "\n+" + "-".repeat(44) + "+\n" + printReleaseDateFixed + printRankFixed + "|"

        let printUnits: string = "| " + seriesIP.units + " ".repeat(43 - seriesIP.units.length) + "|";

        let printMisc1: string | never[] = (!seriesIP.miscellaneous1)
            ? [] 
            : printTextBlock(seriesIP.miscellaneous1, 44)

        let printMisc2: string | never[] = (!seriesIP.miscellaneous2)
            ? [] 
            : printTextBlock(seriesIP.miscellaneous2, 44)

        let printMiscFlatFilter: string[] = [printMisc1, printMisc2].filter(elem => elem.length !== 0).flat()

        let printUnitsFixed: string = (printMiscFlatFilter.length === 0)
            ? printUnits
            : printUnits + "\n" + printMiscFlatFilter.reduce((prev, next) => prev + "\n" + next);

        let printCmlValue: string = `${(seriesIP.value - seriesIP.valueLastFY).toFixed(2)}M `

        let printCmlValueFixed: string = (printCmlValue.length >= 11)
            ? printCmlValue
            : " ".repeat(11 - printCmlValue.length) + printCmlValue;

        let printFYCmlYoY = (seriesIP.valueLastFY === 0)
                ? " New! "
                : ((seriesIP.value - seriesIP.valueLastFY) === 0 && (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs) === 0)
                ? "N/A "
                : ((seriesIP.value - seriesIP.valueLastFY) >=  (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs) && !((seriesIP.valueLastFY - seriesIP.valueLastTwoFYs) < 0))
                ? `+${((
                    ((seriesIP.value - seriesIP.valueLastFY) / (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs)) - 1) * 100).toFixed(2)}% ` 
                : `${((
                    ((seriesIP.value - seriesIP.valueLastFY) / (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs)) - 1) * 100).toFixed(2)}% ` 

        let printFYCmlYoYFixed: string = (printFYCmlYoY.length >= 11) 
                ? header.fiscalYearYoY + printFYCmlYoY + "|"
                : header.fiscalYearYoY + " ".repeat(11 - printFYCmlYoY.length) + printFYCmlYoY + "|"
                
        
        let printLTDValue: string = `${seriesIP.value}M `
       
        let printLTDValueFixed: string = (printLTDValue.length >= 11)
            ? printLTDValue
            : " ".repeat(11 - printLTDValue.length) + printLTDValue;

        let printLine: string = "+" + "-".repeat(44) + "+";
        let printLineEnd: string = "+" + "-".repeat(32) + "+";
        let printDoubleLine: string = "+" + "=".repeat(44) + "+";

    return printTitleNameFixed + "\n" + printDoubleLine + "\n" + printUnitsFixed + "\n" + printLine + "\n" + header.fiscalYear + printCmlValueFixed + "|\n" + printFYCmlYoYFixed + "\n" + header.ltd + printLTDValueFixed + "|\n" + printLineEnd
}
