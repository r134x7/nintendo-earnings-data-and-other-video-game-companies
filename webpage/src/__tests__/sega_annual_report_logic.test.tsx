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
    thirdHeader: "| Platforms                      |",
    fourthHeader: "| Total Editions                 |"
    fifthHeader: "| First Appearance and Rank      |",
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
    thirdHeader: "| Platforms                      |",
    fourthHeader: "| Total Editions                 |",
    fifthHeader: "| First Appearance and Rank      |",
    sixthHeader: "| Units                          |",
    summaryHeader: " Placeholder ",
    fiscalYear:  "| FY3/22 Cumulative  |", 
    fiscalYearYoY: "| FY3/22 Cml. YoY%   |",
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

        console.log(seriesIP.platforms.length);
        
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

        let printReleaseDateFixed: string = seriesIP.firstReleaseYear + " ".repeat(10)

        let printTitleNameFixed: string = "+"+"-".repeat(32)+"+\n|" + printTitleName + "|\n+" + "-".repeat(32) + "+\n|" + printPlatforms + "|\n+" + "-".repeat(32) + "+\n|" + printReleaseDateFixed + "|" + printRankFixed + "|"

    
        let printValue: string = `${seriesIP.value}M `
       
        let printValueFixed: string = (printValue.length >= 11)
            ? printValue
            : " ".repeat(11 - printValue.length) + printValue;

        let printFYCmlYoY = (seriesIP.valueLastFY === 0)
                ? " New! "
                : ((seriesIP.value - seriesIP.valueLastFY) >  (seriesIP.valueLastFY - seriesIP.valueLastTwoFYs))
                ? `+${((
                    ((seriesIP.value - seriesIP.valueLastFY) / (seriesIP.value - seriesIP.value)) - 1) * 100).toFixed(2)}% ` 
                : `${((
                    ((seriesIP.value - seriesIP.valueLastFY) / (seriesIP.value - seriesIP.value)) - 1) * 100).toFixed(2)}% ` 

        let printFYCmlYoYFixed: string = (printFYCmlYoY.length >= 11) 
                ? header.fiscalYearYoY + printFYCmlYoY + "|"
                : header.fiscalYearYoY + " ".repeat(11 - printFYCmlYoY.length) + printFYCmlYoY + "|"
                
        let printLine: string = "+" + "-".repeat(32) + "+";
        let printDoubleLine: string = "+" + "=".repeat(32) + "+";

    return printTitleNameFixed + "\n" + printValueFixed + "\n" + printFYCmlYoYFixed
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

    console.log(x.reduce((prev, next) => prev + next));
    
})