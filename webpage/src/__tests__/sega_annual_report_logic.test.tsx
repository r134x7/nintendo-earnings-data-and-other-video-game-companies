import { collection as collection2021 } from "../data/sega/Sega_FY3_2021/sega_annual_report_fy3_21";

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

//(Full games and F2P, Amusement Machines-registered IDs total (Total for registrations after IP acquisition))
const series2: Series = 
    {
        title: " Sonic the Hedgehog ",
        firstReleaseYear: " 1991 ",
        platforms: " Pachislot and Pachinko Machines, Consumer Games, Amusement Machines, Toys, etc.",
        totalEditions: 0,
        ipType: " Developed in-house IP ",
        units: "(Units and downloads*)",
        value: 1380.0,
        valueLastFY: 1140.0,
        valueLastTwoFYs: 920.0,
        miscellaneous1: "(Full games and F2P total)",
        miscellaneous2: "*Including downloads of free-to-play titles ",
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

        // let printPlatforms: string = (seriesIP.platforms.length > 32)
        // ? seriesIP.platforms.split(" ").reduce((prev, next, index, array) => 
        // {
        //     let nextCheck = prev + next + " ";
            
        //     if (nextCheck.length > 31 && prev.length <= 31) {
        //         return prev + " ".repeat(32 - prev.length) + `|\n| ` + next
        //     } else if (nextCheck.length > 31*2 && prev.length <= 31*2) {
        //         return prev + " ".repeat(67 - prev.length) + `|\n| ` + next
        //     } else if (index === array.length-1) {
        //         return prev + next + " ".repeat(98 - prev.length)
        //     } else {
        //         return prev + " " + next
        //     }
        // })
        // : (seriesIP.platforms.length < 32)
        // ? seriesIP.platforms + " ".repeat(32 - seriesIP.platforms.length) 
        // : seriesIP.platforms
//+--------------------------------------------+ // 1 44 1
        let lineCheck = 1;

        let splitCheck = seriesIP.platforms.split(" ")

            /* .............................. 
            need to... combine the arrays...... 
            where the length of the string is not longer
            than 44 and then a new array is made to hold
            another string that is 44 characters long... 
            and repeats.

            let's see... I take the string length, example 99
            and then I divide it by 44 and I have to round it up? and then create that many arrays
            */
        let s = seriesIP.platforms.split(" ");
        
        let arrayCheck = 0;

        let x = Array.from({length:Math.ceil(seriesIP.platforms.length/44)}, (v,i) => {

            let t = (s.at(arrayCheck) === s.at(-1)) 
                ? s.slice(arrayCheck-1)
                : s.slice(arrayCheck);
            
            let y = t.reduce((prev, next, index, array) => 
            {
                let nextCheck = prev + next + " ";

                // if (nextCheck.length >= 44 && prev.length < 44) {
                if (nextCheck.length > 43 && prev.length <= 43) {
                    return prev
                } 
                // else if (prev === " " && prev.length === 1) {
                //     arrayCheck++
                //     return prev + next
                // } 
                else {
                    arrayCheck++
                    // return (prev.length === 1) ? prev + next : prev + " " + next
                    return prev + " " + next
                }
            }, "")

            let z = (y.length >= 44)
                ? y
                : y + " ".repeat(44 - y.length)

            return "|" + z + "|"
        }).reduce((prev, next) => prev + "\n" + next)
        console.log(x);
        

        let printPlatforms: string = (seriesIP.platforms.length > 44) 
        ? seriesIP.platforms.split(" ").reduce((prev, next, index, array) => 
        {
            let nextCheck = prev + next + " ";

            if (nextCheck.length > 43*lineCheck && prev.length <= 43*lineCheck) {

                lineCheck++

                return prev + " ".repeat(45*(lineCheck-1) - prev.length) + "|\n| " + next
            } else if (index === array.length-1) {
                return prev + next 
                + " ".repeat(45*(lineCheck) - prev.length-2) 
                + "|"
            } else {
                return prev + " " + next
            }

        }, "|")
        : (seriesIP.platforms.length < 44)
        ? "| " + seriesIP.platforms + " ".repeat(43 - seriesIP.platforms.length) + "|" 
        : "| " + seriesIP.platforms + "|"

        // let printPlatforms: string = 
        //     (seriesIP.platforms.length > 32 && seriesIP.platforms.length < 65)
        //     ? seriesIP.platforms.split(" ").reduce((prev, next, index, array) => 
        //     {
        //         let nextCheck = prev + next + " ";
            
        //         if (nextCheck.length > 31 && prev.length <= 31) {
        //             // return prev + " ".repeat(33 - prev.length) + `|\n| ` + next
        //             return "|" + prev + " ".repeat(32 - prev.length) + `|\n| ` + next
        //         } else if (index === array.length-1) {
        //             return prev + next + " ".repeat(68 - prev.length) + "|"
        //             // return prev + next + " ".repeat(68 - prev.length) + "|"
        //         } else {
        //             return prev + " " + next
        //     }})
        //     : (seriesIP.platforms.length > 64 && seriesIP.platforms.length < 97)
        //     ? seriesIP.platforms.split(" ").reduce((prev, next, index, array) => 
        //     {
        //         let nextCheck = prev + next + " ";
            
        //         if (nextCheck.length > 31 && prev.length <= 31) {
        //             return "|" + prev + " ".repeat(32 - prev.length) + `|\n| ` + next
        //         } else if (nextCheck.length > 31*2 && prev.length <= 31*2) {
        //             return prev + " ".repeat(67 - prev.length) + `|\n| ` + next
        //         } else if (index === array.length-1) {
        //             return prev + next + " ".repeat(98 - prev.length) + "|"
        //         } else {
        //             return prev + " " + next
        //     }})
        //     : (seriesIP.platforms.length > 96 && seriesIP.platforms.length < 129)
        //     ? seriesIP.platforms.split(" ").reduce((prev, next, index, array) => 
        //     {
        //         let nextCheck = prev + next + " ";
            
        //         if (nextCheck.length > 31 && prev.length <= 31) {
        //             return "|" + prev + " ".repeat(32 - prev.length) + `|\n| ` + next
        //         } else if (nextCheck.length > 31*2 && prev.length <= 31*2) {
        //             return prev + " ".repeat(67 - prev.length) + `|\n| ` + next
        //         } else if (index === array.length-1) {
        //             return prev + next + " ".repeat(98 - prev.length) + "|"
        //         } else {
        //             return prev + " " + next
        //     }})
        //     : (seriesIP.platforms.length < 32)
        //     ? "|" + seriesIP.platforms + " ".repeat(32 - seriesIP.platforms.length) + "|" 
        //     : "|" + seriesIP.platforms + "|";


        let printReleaseDateFixed: string = (seriesIP.totalEditions !== 0)
            ? " Total Editions: " + seriesIP.totalEditions + "             |\n+" + "-".repeat(32) + "+\n| 1st Year:" + seriesIP.firstReleaseYear + " ".repeat(4)
            : " 1st Year:" + seriesIP.firstReleaseYear + " ".repeat(4)
        
        let printIPType: string = seriesIP.ipType + " ".repeat(32 - seriesIP.ipType.length)

        let printTitleNameFixed: string = "+"+"-".repeat(44)+"+\n|" + printTitleName + "|\n+" + "-".repeat(44) + "+\n|" + printIPType + "|\n+" + "-".repeat(44) + "+\n" + printPlatforms + "\n+" + "-".repeat(44) + "+\n|" + printReleaseDateFixed + "|" + printRankFixed + "|"

        let printUnits: string = "|" + seriesIP.units + " ".repeat(32 - seriesIP.units.length) + "|";

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
                    return "|" + prev + " ".repeat(32 - prev.length) + `|\n| ` + next
                } else if (nextCheck.length > 31*2 && prev.length <= 31*2) {
                    return prev + " ".repeat(67 - prev.length) + `|\n| ` + next
                } else if (index === array.length-1) {
                    return prev + next + " ".repeat(98 - prev.length) + "|"
                } else {
                    return prev + " " + next
            }})
            : (seriesIP.miscellaneous1.length > 96 && seriesIP.miscellaneous1.length < 129)
            ? seriesIP.miscellaneous1.split(" ").reduce((prev, next, index, array) => 
            {
                let nextCheck = prev + next + " ";
            
                if (nextCheck.length > 31 && prev.length <= 31) {
                    return "|" + prev + " ".repeat(32 - prev.length) + `|\n| ` + next
                } else if (nextCheck.length > 31*2 && prev.length <= 31*2) {
                    return prev + " ".repeat(67 - prev.length) + `|\n| ` + next
                } else if (index === array.length-1) {
                    return prev + next + " ".repeat(298 - prev.length) + "|"
                } else {
                    return prev + " " + next
            }})
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
                    return "|" + prev + " ".repeat(32 - prev.length) + `|\n| ` + next
                } else if (nextCheck.length > 31*2 && prev.length <= 31*2) {
                    return prev + " ".repeat(67 - prev.length) + `|\n| ` + next
                } else if (index === array.length-1) {
                    return prev + next + " ".repeat(98 - prev.length) + "|"
                } else {
                    return prev + " " + next
            }})
            : (seriesIP.miscellaneous2.length > 96 && seriesIP.miscellaneous2.length < 129)
            ? seriesIP.miscellaneous2.split(" ").reduce((prev, next, index, array) => 
            {
                let nextCheck = prev + next + " ";
            
                if (nextCheck.length > 31 && prev.length <= 31) {
                    return "|" + prev + " ".repeat(32 - prev.length) + `|\n| ` + next
                } else if (nextCheck.length > 31*2 && prev.length <= 31*2) {
                    return prev + " ".repeat(67 - prev.length) + `|\n| ` + next
                } else if (index === array.length-1) {
                    return prev + next + " ".repeat(98 - prev.length) + "|"
                } else {
                    return prev + " " + next
            }})
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

test("testing printSeries with all FY3/21 data...", () => {

    const sortedFYCollection: Series[] = collection2021.map((elem, index, array) => {
            return elem // forgot this is a filter...
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
    }).reduce((prev, next) => prev + "\n" + next);

    // console.log(x);
    
})