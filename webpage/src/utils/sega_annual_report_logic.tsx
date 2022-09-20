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

export const printSeries = (header: Header, seriesIP: Series) => {

        let printRank: string = ` Rank ${seriesIP.rank} `
        let printRankFixed: string = (printRank.length >= 11)
                ? printRank
                : printRank + " ".repeat(11 - printRank.length);

        let printTitleName: string = (seriesIP.title.length > 32)
        ? seriesIP.title.split(" ").reduce((prev, next, index, array) => 
        {

            let nextCheck = prev + next + " ";
            
            if (nextCheck.length > 31 && prev.length <= 31) {
                return prev + " ".repeat(32 - prev.length) + `|\n| ` + next
            } else if (index === array.length-1) {
                return prev + next + " ".repeat(67 - prev.length)
            } else {
                return prev + " " + next
            }
        })
        : (seriesIP.title.length < 32)
        ? seriesIP.title + " ".repeat(32 - seriesIP.title.length) 
        : seriesIP.title

        let printPlatforms: string = (seriesIP.platforms.length > 32)
        ? seriesIP.platforms.split(" ").reduce((prev, next, index, array) => 
        {
            let nextCheck = prev + next + " ";
            
            if (nextCheck.length > 31 && prev.length <= 31) {
                return prev + " ".repeat(32 - prev.length) + `|\n| ` + next
            } else if (nextCheck.length > 31*2 && prev.length <= 31*2) {
                return prev + " ".repeat(67 - prev.length) + `|\n| ` + next
            } else if (index === array.length-1) {
                return prev + next + " ".repeat(98 - prev.length)
            } else {
                return prev + " " + next
            }
        })
        : (seriesIP.platforms.length < 32)
        ? seriesIP.platforms + " ".repeat(32 - seriesIP.platforms.length) 
        : seriesIP.platforms

        let printReleaseDateFixed: string = (seriesIP.totalEditions !== 0)
            ? " Total Editions: " + seriesIP.totalEditions + "             |\n+" + "-".repeat(32) + "+\n| 1st Year:" + seriesIP.firstReleaseYear + " ".repeat(4)
            : " 1st Year:" + seriesIP.firstReleaseYear + " ".repeat(4)
        
        let printIPType: string = seriesIP.ipType + " ".repeat(32 - seriesIP.ipType.length)

        let printTitleNameFixed: string = "+"+"-".repeat(32)+"+\n|" + printTitleName + "|\n+" + "-".repeat(32) + "+\n|" + printIPType + "|\n+" + "-".repeat(32) + "+\n|" + printPlatforms + "|\n+" + "-".repeat(32) + "+\n|" + printReleaseDateFixed + "|" + printRankFixed + "|"

        let printUnits: string = "|" + seriesIP.units + " ".repeat(32 - seriesIP.units.length) + "|";

        // let printMisc1: string | never[] = (!seriesIP.miscellaneous1)
        //     ? []
        //     : (seriesIP.miscellaneous1.length > 32 && seriesIP.miscellaneous1.length < 65)
        //     ? seriesIP.miscellaneous1.split(" ").reduce((prev, next, index, array) => 
        //     {
        //         let nextCheck = prev + next + " ";
            
        //         if (nextCheck.length > 31 && prev.length <= 31) {
        //             return prev + " ".repeat(32 - prev.length) + `|\n| ` + next
        //         } else if (index === array.length-1) {
        //             return prev + next + " ".repeat(77 - prev.length)
        //         } else {
        //             return prev + " " + next
        //     }}, "|")
        //     : (seriesIP.miscellaneous1.length > 64 && seriesIP.miscellaneous1.length < 97)
        //     ? seriesIP.platforms.split(" ").reduce((prev, next, index, array) => 
        //     {
        //         let nextCheck = prev + next + " ";
            
        //         if (nextCheck.length > 31 && prev.length <= 31) {
        //             return prev + " ".repeat(32 - prev.length) + `|\n| ` + next
        //         } else if (nextCheck.length > 31*2 && prev.length <= 31*2) {
        //             return prev + " ".repeat(67 - prev.length) + `|\n| ` + next
        //         } else if (index === array.length-1) {
        //             return prev + next + " ".repeat(98 - prev.length)
        //         } else {
        //             return prev + " " + next
        //     }}, "|")
        //     : (seriesIP.miscellaneous1.length > 96 && seriesIP.miscellaneous1.length < 129)
        //     ? seriesIP.miscellaneous1.split(" ").reduce((prev, next, index, array) => 
        //     {
        //         let nextCheck = prev + next + " ";
            
        //         if (nextCheck.length > 31 && prev.length <= 31) {
        //             return prev + " ".repeat(32 - prev.length) + `|\n| ` + next
        //         } else if (nextCheck.length > 31*2 && prev.length <= 31*2) {
        //             return prev + " ".repeat(67 - prev.length) + `|\n| ` + next
        //         } else if (index === array.length-1) {
        //             return prev + next + " ".repeat(98 - prev.length)
        //         } else {
        //             return prev + " " + next
        //     }}, "|")
        //     : (seriesIP.miscellaneous1.length < 32)
        //     ? "|" + seriesIP.miscellaneous1 + " ".repeat(32 - seriesIP.miscellaneous1.length) + "|"
        //     : "|" + seriesIP.miscellaneous1 + "|"

        let printMisc1: string | never[] = (!seriesIP.miscellaneous1)
            ? [] 
            : (seriesIP.miscellaneous1.length > 32 && seriesIP.miscellaneous1.length < 65)
            ? seriesIP.miscellaneous1.split(" ").reduce((prev, next, index, array) => 
            {
                let nextCheck = prev + next + " ";
            
                if (nextCheck.length > 31 && prev.length <= 31) {
                    // return prev + " ".repeat(33 - prev.length) + `|\n| ` + next
                    return "|" + prev + " ".repeat(32 - prev.length) + `|\n| ` + next
                } else if (index === array.length-1) {
                    return prev + next + " ".repeat(68 - prev.length) + "|"
                    // return prev + next + " ".repeat(68 - prev.length) + "|"
                } else {
                    return prev + " " + next
            }})
            : (seriesIP.miscellaneous1.length > 64 && seriesIP.miscellaneous1.length < 97)
            ? seriesIP.miscellaneous1.split(" ").reduce((prev, next, index, array) => 
            {
                let nextCheck = prev + next + " ";
            
                if (nextCheck.length > 31 && prev.length <= 31) {
                    return prev + " ".repeat(32 - prev.length) + `|\n| ` + next
                } else if (nextCheck.length > 31*2 && prev.length <= 31*2) {
                    return prev + " ".repeat(67 - prev.length) + `|\n| ` + next
                } else if (index === array.length-1) {
                    return prev + next + " ".repeat(98 - prev.length) + "|"
                } else {
                    return prev + " " + next
            }}, "|")
            : (seriesIP.miscellaneous1.length > 96 && seriesIP.miscellaneous1.length < 129)
            ? seriesIP.miscellaneous1.split(" ").reduce((prev, next, index, array) => 
            {
                let nextCheck = prev + next + " ";
            
                if (nextCheck.length > 31 && prev.length <= 31) {
                    return prev + " ".repeat(32 - prev.length) + `|\n| ` + next
                } else if (nextCheck.length > 31*2 && prev.length <= 31*2) {
                    return prev + " ".repeat(67 - prev.length) + `|\n| ` + next
                } else if (index === array.length-1) {
                    return prev + next + " ".repeat(150 - prev.length) + "|"
                } else {
                    return prev + " " + next
            }}, "|")
            : (seriesIP.miscellaneous1.length > 128 && seriesIP.miscellaneous1.length < 161)
            ? seriesIP.miscellaneous1.split(" ").reduce((prev, next, index, array) => 
            {
                let nextCheck = prev + next + " ";
            
                if (nextCheck.length > 31 && prev.length <= 31) {
                    return prev + " ".repeat(32 - prev.length) + `|\n| ` + next
                } else if (nextCheck.length > 31*2 && prev.length <= 31*2) {
                    return prev + " ".repeat(67 - prev.length) + `|\n| ` + next
                } else if (nextCheck.length > 31*3 && prev.length <= 31*3) {
                    return prev + " ".repeat(99 - prev.length) + `|\n| ` + next
                } else if (index === array.length-1) {
                    return prev + next + " ".repeat(128 - prev.length) + "|"
                } else {
                    return prev + " " + next
            }}, "|")
            : (seriesIP.miscellaneous1.length < 32)
            ? "|" + seriesIP.miscellaneous1 + " ".repeat(32 - seriesIP.miscellaneous1.length) + "|" 
            : "|" + seriesIP.miscellaneous1 + "|";


        let printMisc2: string | never[] = (!seriesIP.miscellaneous2)
            ? [] 
            : (seriesIP.miscellaneous2.length > 32 && seriesIP.miscellaneous2.length < 65)
            ? seriesIP.miscellaneous2.split(" ").reduce((prev, next, index, array) => 
            {
                let nextCheck = prev + next + " ";
            
                if (nextCheck.length > 31 && prev.length <= 31) {
                    // return prev + " ".repeat(33 - prev.length) + `|\n| ` + next
                    return "|" + prev + " ".repeat(32 - prev.length) + `|\n| ` + next
                } else if (index === array.length-1) {
                    return prev + next + " ".repeat(68 - prev.length) + "|"
                    // return prev + next + " ".repeat(68 - prev.length) + "|"
                } else {
                    return prev + " " + next
            }})
            : (seriesIP.miscellaneous2.length > 64 && seriesIP.miscellaneous2.length < 97)
            ? seriesIP.miscellaneous2.split(" ").reduce((prev, next, index, array) => 
            {
                let nextCheck = prev + next + " ";
            
                if (nextCheck.length > 31 && prev.length <= 31) {
                    return prev + " ".repeat(32 - prev.length) + `|\n| ` + next
                } else if (nextCheck.length > 31*2 && prev.length <= 31*2) {
                    return prev + " ".repeat(67 - prev.length) + `|\n| ` + next
                } else if (index === array.length-1) {
                    return prev + next + " ".repeat(98 - prev.length) + "|"
                } else {
                    return prev + " " + next
            }}, "|")
            : (seriesIP.miscellaneous2.length > 96 && seriesIP.miscellaneous2.length < 129)
            ? seriesIP.miscellaneous2.split(" ").reduce((prev, next, index, array) => 
            {
                let nextCheck = prev + next + " ";
            
                if (nextCheck.length > 31 && prev.length <= 31) {
                    return prev + " ".repeat(32 - prev.length) + `|\n| ` + next
                } else if (nextCheck.length > 31*2 && prev.length <= 31*2) {
                    return prev + " ".repeat(67 - prev.length) + `|\n| ` + next
                } else if (index === array.length-1) {
                    return prev + next + " ".repeat(98 - prev.length) + "|"
                } else {
                    return prev + " " + next
            }}, "|")
            : (seriesIP.miscellaneous2.length < 32)
            ? "|" + seriesIP.miscellaneous2 + " ".repeat(32 - seriesIP.miscellaneous2.length) + "|" 
            : "|" + seriesIP.miscellaneous2 + "|";

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
                : ((seriesIP.value - seriesIP.valueLastFY) >  (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs))
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

        let printLine: string = "+" + "-".repeat(32) + "+";
        let printDoubleLine: string = "+" + "=".repeat(32) + "+";

    return printTitleNameFixed + "\n" + printDoubleLine + "\n" + printUnitsFixed + "\n" + printLine + "\n" + header.fiscalYear + printCmlValueFixed + "|\n" + printFYCmlYoYFixed + "\n" + header.ltd + printLTDValueFixed + "|\n" + printLine
}
