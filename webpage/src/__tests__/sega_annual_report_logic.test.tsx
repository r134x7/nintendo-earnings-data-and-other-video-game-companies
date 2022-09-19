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
    miscellaneous?: string,
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

// not going to need quarters...

const series1: Series = 
    {
        title: " Persona ",
        firstReleaseYear: " 1992 ",
        platforms: " Pachislot and Pachinko Machines, Consumer Games, Toys, etc.",
        totalEditions: 18,
        ipType: " Acquired IP ",
        units: "(Units and downloads)",
        value: 15.0,
        valueLastFY: 13.1,
        valueLastTwoFYs: 10.2,
    };


const series2: Series = 
    {
        title: " Sonic the Hedgehog ",
        firstReleaseYear: " 1991 ",
        platforms: " Pachislot and Pachinko Machines, Consumer Games, Amusement Machines, Toys, etc.",
        totalEditions: 0,
        ipType: " Developed in-house IP ",
        units: "(Units and downloads)(Full games and F2P total)",
        value: 1380.0,
        valueLastFY: 1140.0,
        valueLastTwoFYs: 920.0,
    };


const header: Header = {
    segaHeader: "| Sega Sammy - IP Series Data    |",
    secondHeader: "| IP Title                       |",
    thirdHeader: "| IP Type                        |",
    fourthHeader: "| Platforms                      |",
    fifthHeader: "| Total Editions                 |",
    sixthHeader: "| First Appearance and Rank      |",
    seventhHeader: "| Units                          |",
    summaryHeader: " Placeholder ",
    fiscalYear:  "| FY3/21 Cumulative  |", 
    fiscalYearYoY: "| FY3/21 Cml. YoY%   |",
    ltd: "| Life-To-Date       |",
}

const collection = [
    series1,
    series2,
] as const;

const printHead = (header: Header) =>
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

const printSeries = (header: Header, seriesIP: Series) => {

        let printRank: string = ` Rank ${seriesIP.rank} `
        let printRankFixed: string = (printRank.length >= 11)
                ? printRank
                : printRank + " ".repeat(11 - printRank.length);

        let printTitleName: string = (seriesIP.title.length > 32)
        ? seriesIP.title.split(" ").reduce((prev, next, index, array) => 
        {

            let nextCheck = prev + next + " ";
            
            if (nextCheck.length > 31 && prev.length <= 31) {
                return prev + " ".repeat(32 - prev.length) + `|         |\n| ` + next
            } else if (index === array.length-1) {
                return prev + next + " ".repeat(77 - prev.length)
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

    return printTitleNameFixed + "\n" + printDoubleLine + "\n" + header.fiscalYear + printCmlValueFixed + "|\n" + printFYCmlYoYFixed + "\n" + header.ltd + printLTDValueFixed + "|\n" + printLine
}

test("testing printHead function...", () => {

    console.log(printHead(header));
    
})

test("testing printSeries function...", () => {

    const sortedFYCollection: Series[] = collection.filter((elem, index, array) => {
            return elem.value - elem.valueLastFY !== 0
            // we need to create a new array that is identical to the original due to sort's mutating properties. filter titles that sold units this FY
    }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
        return (a.value - a.valueLastFY > b.value - b.valueLastFY)
            ? 1
            : (a.value - a.valueLastFY < b.value - b.valueLastFY)
            ? -1
            : 0
    }).map((elem, index) => {
        return {...elem, rank: index+1}
    })

    let x = sortedFYCollection.map((elem) => {
        return printSeries(header, elem)
    })

    console.log(x.reduce((prev, next) => prev + "\n" + next));
    
})