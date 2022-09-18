export type Series = {
    title: string,
    firstReleaseYear: string,
    platforms: string,
    totalEditions: number,
    units: string,
    value: number,
    ipType: " Acquired IP " | " Developed in-house IP " | " Licensed third party IP ",
    rank?: number,
    miscellaneous?: string,
}

export type Header = {
    segaHeader: "| Sega Sammy - IP Series Data    |",
    secondHeader: "| IP Title                          |",
    thirdHeader: "| Platforms                      |",
    fourthHeader: "| Total Editions                 |"
    fifthHeader: "| First Appearance and Rank         |",
    sixthHeader: "| Units                          |",
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
    };


const header: Header = {
    segaHeader: "| Sega Sammy - IP Series Data    |",
    secondHeader: "| IP Title                          |",
    thirdHeader: "| Platforms                      |",
    fourthHeader: "| Total Editions                 |",
    fifthHeader: "| First Appearance and Rank         |",
    sixthHeader: "| Units                          |",
    summaryHeader: " Placeholder ",
    fiscalYear:  "| FY3/22 Cumulative  |", 
    fiscalYearYoY: "| FY3/22 Cml. YoY%   |",
    ltd: "| Life-To-Date       |",
}

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
                return prev + " ".repeat(32 - prev.length) + `|         |\n| ` + next
            } else if (index === array.length-1) {
                return prev + next + " ".repeat(77 - prev.length)
            } else {
                return prev + " " + next
            }
        })
        : (seriesIP.platforms.length < 32)
        ? seriesIP.platforms + " ".repeat(32 - seriesIP.platforms.length) 
        : seriesIP.platforms

        let printReleaseDateFixed: string = seriesIP.firstReleaseYear + " ".repeat(10)


        let printTitleNameFixed: string = "+"+"-".repeat(32)+"+\n|" + printTitleName + "|\n+" + "-".repeat(32) + "+\n|" + printPlatforms + "|\n+" + "-".repeat(32) + "+\n|" + printReleaseDateFixed + "|" + printRankFixed + "|"

        

}