export type Titles = {
    title: string,
    releaseDate: string,
    platforms: string,
    period: " 1st Quarter  " | " 2nd Quarter  " | " 3rd Quarter  " | " 4th Quarter  " | " Last FY Total " | " Total at Two FYs prior ",
    value: number,
    rank?: number,
    label?: " New! " | " Recurring " | " Sporadic ",
    miscellaneous?: string,
}

export type Header = {
    capcomHeader: "| Capcom - Platinum Titles       |",
    secondHeader: "| Title                          |",
    thirdHeader: "| Platform                       |",
    fourthHeader: "| Release Date and Rank          |",
    fifthHeader: "| Units                          |",
    fiscalYear: string,
    fiscalYearYoY: string,
    ltd: "| Life-To-Date       |",
}

const currentQuarter = 4;

const title1: Titles[] = [
    {
        title: " Monster Hunter: World ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 18.3,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
    {
        title: " Monster Hunter: World ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 2nd Quarter  ",
        value: 17.5,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
    {
        title: " Monster Hunter: World ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 3rd Quarter  ",
        value: 17.8,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
    {
        title: " Monster Hunter: World ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 4th Quarter  ",
        value: 18.0,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
    {
        title: " Monster Hunter: World ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Last FY Total ",
        value: 18.0,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
    {
        title: " Monster Hunter: World ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 17.10,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
]

const title2: Titles[] = [
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 11.0,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 2nd Quarter  ",
        value: 10.2,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 3rd Quarter  ",
        value: 10.6,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 4th Quarter  ",
        value: 10.6,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Last FY Total ",
        value: 10.8,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 9.0,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
]

function quarterlyCalculation(quarters: Titles[]) {
       
   const calc: Titles[] = quarters.map((elem, index, array) => {
       return (elem.period === " 1st Quarter  ")
               ? {
                ...elem, 
                value: Number((elem.value - array[4].value).toFixed(2))
               } // to subtract from the LTD figure last FY
               : (index < 4)
               ? {
                ...elem, 
                value: Number((elem.value - array[index-1].value).toFixed(2))
               }
               : elem // last fy Total and two Fys prior should be untouched
   })
   
   return calc
}

const header: Header = {
    capcomHeader: "| Capcom - Platinum Titles       |",
    secondHeader: "| Title                          |",
    thirdHeader: "| Platform                       |",
    fourthHeader: "| Release Date and Rank          |",
    fifthHeader: "| Units                          |",
    fiscalYear: "| FY3/23 Cumulative  |",
    fiscalYearYoY: "| FY3/22 Cml. YoY%   |",
    ltd: "| Life-To-Date       |",
}

const printHead = (header: Header) => 
`+${"-".repeat(42)}+
${header.capcomHeader}
+${"-".repeat(42)}+
${header.secondHeader}
+${"-".repeat(42)}+
${header.thirdHeader}
+${"-".repeat(42)}+
${header.fourthHeader}
+${"-".repeat(42)}+
${header.fifthHeader}
+${"-".repeat(42)}+`;

const printTitles = (header: Header, titleDifference: Titles[], titleCumulative: Titles[], currentQuarter: number) => {

    const titleHeader = titleDifference.filter((elem, index) => index === 0).map((elem, index, array) => {

        let printRank: string = ` Rank ${elem.rank} `
        let printRankFixed: string = (printRank.length >= 9)
                ? printRank
                : printRank + " ".repeat(9 - printRank.length);

        let printTitleName: string = (elem.title.length > 32)
        ? elem.title.split(" ").reduce((prev, next, index, array) => {

            let nextCheck = prev + next + " ";
            
            if (nextCheck.length > 31 && prev.length <= 31) {
                return prev + " ".repeat(32 - prev.length) + `|         |\n| ` + next
            } else if (index === array.length-1) {
                return prev + next + " ".repeat(77 - prev.length)
            } else {
                return prev + " " + next
            }
        })
        : (elem.title.length < 32)
        ? elem.title + " ".repeat(32 - elem.title.length) 
        : elem.title

        let printTitleNameFixed: string = "+"+"-".repeat(42)+"+\n|" + printTitleName + "|" + printRankFixed + "|\n+"+"-".repeat(42)+"+"

        
        
    })

    const namePending = titleDifference.filter((elem, index) => {
        return index < 4
    }).map((elem, index, array) => {
        
        let printValue: string = `${elem.value}M ` 
        let printValueFixed: string = (printValue.length >= 9)
            ? printValue
            : " ".repeat(9 - printValue.length) + printValue;

        let printCmlValueA: string =  `${titleCumulative[currentQuarter-1].valueA}M `
        let printCmlValueAFixed: string = (printCmlValueA.length >= 9)
            ? printCmlValueA
            : " ".repeat(9 - printCmlValueA.length) + printCmlValueA;

        let printCmlValueB: string =  `${titleCumulative[currentQuarter-1].valueB}M `
        let printCmlValueBFixed: string = (printCmlValueB.length >= 9)
            ? printCmlValueB
            : " ".repeat(9 - printCmlValueB.length) + printCmlValueB;
        
        let printFYCml: string = "+" + "=".repeat(34) + "+\n|" + header.fiscalYear + "Cml.  |" + printCmlValueAFixed + "|" + printCmlValueBFixed + "|"

        let printRegionAWWPercentage: string = `${((titleCumulative[currentQuarter-1].valueA / titleCumulative[currentQuarter-1].valueC) * 100).toFixed(2)}% `
        let printRegionAWWPercentageFixed: string = (printRegionAWWPercentage.length >= 9)
            ? printRegionAWWPercentage
            :  " ".repeat(9 - printRegionAWWPercentage.length) + printRegionAWWPercentage;

        let printRegionBWWPercentage: string = `${((titleCumulative[currentQuarter-1].valueB / titleCumulative[currentQuarter-1].valueC) * 100).toFixed(2)}% `
        let printRegionBWWPercentageFixed: string = (printRegionBWWPercentage.length >= 9)
            ? printRegionBWWPercentage
            : " ".repeat(9 - printRegionBWWPercentage.length) + printRegionBWWPercentage;

        let printRegionAYoY: string = (titleCumulative[4].valueA === 0)
            ? ` New! `
            : `${((((titleCumulative[3].valueA / titleCumulative[4].valueA) - 1) * 100) > 0) ? "+" : ""}${(((titleCumulative[3].valueA / titleCumulative[4].valueA) - 1) * 100).toFixed(2)}% ` 
        let printRegionAYoYFixed: string = (printRegionAYoY.length >= 9)
            ? printRegionAYoY
            :  " ".repeat(9 - printRegionAYoY.length) + printRegionAYoY;

        let printRegionBYoY: string = (titleCumulative[4].valueB === 0)
            ? ` New! `
            : `${((((titleCumulative[3].valueB / titleCumulative[4].valueB) - 1) * 100) > 0) ? "+" : ""}${(((titleCumulative[3].valueB / titleCumulative[4].valueB) - 1) * 100).toFixed(2)}% ` 
        let printRegionBYoYFixed: string = (printRegionBYoY.length >= 9)
            ? printRegionBYoY
            :  " ".repeat(9 - printRegionBYoY.length) + printRegionBYoY;

        let printFYCmlYoY: string = "\n|" + header.fiscalYear + "YoY%  |" + printRegionAYoYFixed + "|" + printRegionBYoYFixed + "|"

        if (index === 0 && elem.valueC === 0) {
            return printTitleNameFixed + "\n" + printAreaHeader 
        } else if (index !== 0 && elem.valueC === 0) {
            return [] // array.length 0 filtering
        } else {
            return (currentQuarter === 1)
                    ? printTitleNameFixed + "\n" + printAreaHeader + "\n|" + elem.period + "|" + printValueAFixed + "|" + printValueBFixed + "|\n" + printFYCml + "\n| Area/WW FY % |" + printRegionAWWPercentageFixed + "|" + printRegionBWWPercentageFixed + "|"
                    : (index === 0 && currentQuarter !== 1)
                    ? printTitleNameFixed + "\n" + printAreaHeader + "\n|" + elem.period + "|" + printValueAFixed + "|" + printValueBFixed + "|"
                    : (index === 3)
                    ? "|" + elem.period + "|" + printValueAFixed + "|" + printValueBFixed + "|\n" + printFYCml + printFYCmlYoY + "\n| Area/WW FY % |" + printRegionAWWPercentageFixed + "|" + printRegionBWWPercentageFixed + "|"
                    : (index === currentQuarter-1 )
                    ? "|" + elem.period + "|" + printValueAFixed + "|" + printValueBFixed + "|\n" + printFYCml + "\n| Area/WW FY % |" + printRegionAWWPercentageFixed + "|" + printRegionBWWPercentageFixed + "|"
                    : "|" + elem.period + "|" + printValueAFixed + "|" + printValueBFixed + "|"
        }
    }).filter((elem) => elem.length !== 0).reduce((prev, next, index, array) => {
        return prev + "\n" + next
    })

};