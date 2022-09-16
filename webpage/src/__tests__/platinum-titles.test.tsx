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
    summaryHeader: string,
}

const currentQuarter = 4;

const title1: Titles[] = [
    {
        title: " Monster Hunter: World ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 17.3,
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
        value: 17.1,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
    {
        title: " Monster Hunter: World ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 15.70,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
]

const title3: Titles[] = [
    {
        title: " Ghosts’n Goblins ",
        releaseDate: " Jun 1986 ",
        platforms: " NES ",
        period: " 1st Quarter  ",
        value: 1.64,
    },
    {
        title: " Ghosts’n Goblins ",
        releaseDate: " Jun 1986 ",
        platforms: " NES ",
        period: " 2nd Quarter  ",
        value: 1.64,
    },
    {
        title: " Ghosts’n Goblins ",
        releaseDate: " Jun 1986 ",
        platforms: " NES ",
        period: " 3rd Quarter  ",
        value: 1.64,
    },
    {
        title: " Ghosts’n Goblins ",
        releaseDate: " Jun 1986 ",
        platforms: " NES ",
        period: " 4th Quarter  ",
        value: 1.64,
    },
    {
        title: " Ghosts’n Goblins ",
        releaseDate: " Jun 1986 ",
        platforms: " NES ",
        period: " Last FY Total ",
        value: 1.64,
    },
    {
        title: " Ghosts’n Goblins ",
        releaseDate: " Jun 1986 ",
        platforms: " NES ",
        period: " Total at Two FYs prior ",
        value: 1.64,
    },
]

const title2: Titles[] = [
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jun 1986 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 9.8,
    },
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jun 1986 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 2nd Quarter  ",
        value: 10.2,
    },
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jun 1986 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 3rd Quarter  ",
        value: 10.6,
    },
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jun 1986 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 4th Quarter  ",
        value: 10.8,
    },
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jun 1986 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Last FY Total ",
        value: 9.0,
    },
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jun 1986 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 7.5,
    },
]

const header: Header = {
    capcomHeader: "| Capcom - Platinum Titles       |",
    secondHeader: "| Title                          |",
    thirdHeader: "| Platform                       |",
    fourthHeader: "| Release Date and Rank          |",
    fifthHeader: "| Units                          |",
    fiscalYear: "| FY3/22 Cumulative  |",
    fiscalYearYoY: "| FY3/22 Cml. YoY%   |",
    ltd: "| Life-To-Date       |",
    summaryHeader: "| FY3/22 Cml. |   Units |    %    |",
}

const miscInfo: string[] = [
    "###",
    "NES: Nintendo Entertainment System, \nGB: Game Boy, \nSNES: Super Nintendo Entertainment System,",
    "GBA: Game Boy Advance, \n3DS: Nintendo 3DS, \nGC: Nintendo GameCube, \nMD: Mega Drive/Genesis,",
    "DC: DreamCast, \nPS: PlayStation®, \nPS2: PlayStation®2, \nPS3: PlayStation®3, \nPS4: PlayStation®4,",
    "PSP: PSP® (PlayStation®Portable), \nPSV: PlayStation®Vita, \nDL: Full-game download, \nNSW: Nintendo Switch",
    "\n[DL (Full-game download) includes all \ndigital download units for each platform.]",
]

const exampleTable = 
`+--------------------------------+
| Monster Hunter: World          |
+--------------------------------+
| PS4, Xbox One, PC, DL          |
+--------------------------------+
| Jan 2018           | Rank 1    |
+--------------------------------+
| 1st Quarter        |     0.20M |
| 2nd Quarter        |     0.20M |
| 3rd Quarter        |     0.30M |
| 4th Quarter        |     0.20M |
+================================+
| FY3/22 Cumulative  |     0.90M |
| FY3/22 Cml. YoY%   |   -35.71% |
| Life-To-Date       |    18.00M |
+--------------------------------+
|(* Excludes shipments of
| Monster Hunter World:
| Iceborne Master Edition)
+--------------------------------+
+--------------------------------+
| RESIDENT EVIL 7 biohazard      |
+--------------------------------+
| PS4, Xbox One, PC, DL          |
+--------------------------------+
| Jan 2017           | Rank 2    |
+--------------------------------+
| 1st Quarter        |     0.80M |
| 2nd Quarter        |     0.40M |
| 3rd Quarter        |     0.40M |
| 4th Quarter        |     0.20M |
+================================+
| FY3/22 Cumulative  |     1.80M |
| FY3/22 Cml. YoY%   |   +20.00% |
| Life-To-Date       |    10.80M |
+--------------------------------+`;

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

function labelTitles(titlesSorted: Titles[]) {

    const calc: Titles[] = titlesSorted.map((elem, index, array) => {
        // need to check cumulative figure, if the cumulative figure doesn't match the Last FY Total 
        return (array[4].value === 0 && array[5].value === 0) 
                ? {...elem, label: " New! "}
                : (array[4].value !== 0 && array[4].value !== array[5].value)
                ? {...elem, label: " Recurring "}
                : {...elem, label: " Sporadic "}
    })
    
    return calc
}

// newCollection, recurringCollection, sporadicCollection...
// use the sorted titles, label them, map the New/.../... titles, filter out zero length arrays... map again...
// when mapping again, need to return elem[3] - elem[4] to get FY cumulative number
// then create a summary by reducing to sum up the units

const printSummaryHead = (header: Header, newCollection: Titles[], recurringCollection: Titles[]) => {

    let printNew: string = `${newCollection.length} `
    let printNewFixed: string = (printNew.length >= 9)
        ? printNew
        : " ".repeat(9 - printNew.length) + printNew;

    let printRecurring: string = `${recurringCollection.length} `
    let printRecurringFixed: string = (printRecurring.length >= 9)
        ? printRecurring
        : " ".repeat(9 - printRecurring.length) + printRecurring;

    let printTotal: string = `${newCollection.length + recurringCollection.length} `
    let printTotalFixed: string = (printTotal.length >= 9)
    ? printTotal
    : " ".repeat(9 - printTotal.length) + printTotal;

    let printHeader: string = "+"+"-".repeat(23)+"+\n" + header.summaryHeader + "+"+"-".repeat(23)+"+"

    let printTitles: string = "\n+"+"-".repeat(23)+"+\n| Titles      |   Count |\n+" + "-".repeat(23)+"+" 

    let printNewRow: string = "\n| New!        |" + printNewFixed + "|"

    let printRecurringRow: string = "\n| Recurring   |" + printRecurringFixed + "|"

    let printTotalRow: string = "\n+"+"=".repeat(23) + "+\n| Total       |" + printTotalFixed + "|\n+"+"-".repeat(23) + "+"

    return printHeader + printTitles + printNewRow + printRecurringRow + printTotalRow
}
    
export const printSummary = (header: Header, regionNew: number[], regionRecurring: number[], ) => {

    // const regionHeaders: string[] = [header.japanSummaryHeader, header.overseasSummaryHeader, header.globalFYSummaryHeader, header.globalLTDSummaryHeader]

    return regionNew.map((elem, index, array) => {

        let printRegionHeader: string = "\n+"+"-".repeat(33)+"+\n|" + header.summaryHeader + "\n+" + "-".repeat(33) + "+\n"

        let TotalUnits: number = Number((elem + regionRecurring[index]).toFixed(2)) 

        let printTotalUnits: string = `${(elem + regionRecurring[index]).toFixed(2)}M `
        let printTotalUnitsFixed: string = (printTotalUnits.length >= 9)
            ? printTotalUnits
            : " ".repeat(9 - printTotalUnits.length) + printTotalUnits;
        
        let printNewUnits: string = `${elem.toFixed(2)}M `
        let printNewUnitsFixed: string = (printNewUnits.length >= 9)
                ? printNewUnits
                : " ".repeat(9 - printNewUnits.length) + printNewUnits;

        let printNewPercentages: string = `${((elem / TotalUnits) * 100).toFixed(2)}% `
        let printNewPercentagesFixed: string = (printNewPercentages.length >= 9)
            ? printNewPercentages
            : " ".repeat(9 - printNewPercentages.length) + printNewPercentages;

        let printRecurringUnits: string = `${regionRecurring[index].toFixed(2)}M `
        let printRecurringUnitsFixed: string = (printRecurringUnits.length >= 9)
            ? printRecurringUnits
            : " ".repeat(9 - printRecurringUnits.length) + printRecurringUnits;
        
        let printRecurringPercentages: string = `${((regionRecurring[index] / TotalUnits) * 100).toFixed(2)}% `
        let printRecurringPercentagesFixed: string = (printRecurringPercentages.length >= 9)
            ? printRecurringPercentages
            : " ".repeat(9 - printRecurringPercentages.length) + printRecurringPercentages;

        let printRows: string = "| New!        |" + printNewUnitsFixed + "|" + printNewPercentagesFixed + "|\n| Recurring   |" + printRecurringUnitsFixed + "|" + printRecurringPercentagesFixed + "|\n+" + "=".repeat(33) + "+\n| Total       |" + printTotalUnitsFixed + "|\n+" + "-".repeat(23) + "+\n" 

        return printRegionHeader + printRows
    }).reduce((prev, next) => prev + next)

}


const printHead = (header: Header) => 
`+${"-".repeat(32)}+
${header.capcomHeader}
+${"-".repeat(32)}+
${header.secondHeader}
+${"-".repeat(32)}+
${header.thirdHeader}
+${"-".repeat(32)}+
${header.fourthHeader}
+${"-".repeat(32)}+
${header.fifthHeader}
+${"-".repeat(32)}+`;

const printTitles = (header: Header, titleDifference: Titles[], titleCumulative: Titles[], currentQuarter: number) => {

    const titleHeader = titleDifference.filter((elem, index) => index === 0).map((elem, index, array) => {

        let printRank: string = ` Rank ${elem.rank} `
        let printRankFixed: string = (printRank.length >= 11)
                ? printRank
                : printRank + " ".repeat(11 - printRank.length);

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

        let printPlatforms: string = (elem.platforms.length > 32)
        ? elem.platforms.split(" ").reduce((prev, next, index, array) => {

            let nextCheck = prev + next + " ";
            
            if (nextCheck.length > 31 && prev.length <= 31) {
                return prev + " ".repeat(32 - prev.length) + `|         |\n| ` + next
            } else if (index === array.length-1) {
                return prev + next + " ".repeat(77 - prev.length)
            } else {
                return prev + " " + next
            }
        })
        : (elem.platforms.length < 32)
        ? elem.platforms + " ".repeat(32 - elem.platforms.length) 
        : elem.platforms

        let printReleaseDateFixed: string = elem.releaseDate + " ".repeat(10)


        let printTitleNameFixed: string = "+"+"-".repeat(32)+"+\n|" + printTitleName + "|\n+" + "-".repeat(32) + "+\n|" + printPlatforms + "|\n+" + "-".repeat(32) + "+\n|" + printReleaseDateFixed + "|" + printRankFixed + "|"

        return printTitleNameFixed
        
    })

    const quartersPrint = titleDifference.filter((elem, index) => {
        return index < currentQuarter && elem.value !== 0
    }).map((elem, index) => {

        let printValue: string = `${elem.value}M ` 
        let printValueFixed: string = (printValue.length >= 11)
            ? printValue
            : " ".repeat(11 - printValue.length) + printValue;

        let printPeriodFixed: string = elem.period + " ".repeat(6)

        return "|" + printPeriodFixed + "|" + printValueFixed + "|"
    });

    const printLTD = [""].map((elem, index, array) => {

       let printValue: string = `${titleCumulative[currentQuarter-1].value}M `
       
       let printValueFixed: string = (printValue.length >= 11)
            ? printValue
            : " ".repeat(11 - printValue.length) + printValue;

        let printLine: string = "|\n+" + "-".repeat(32) + "+";

        return header.ltd + printValueFixed + printLine
    });

    const FYCmlFigure = titleDifference.filter((elem, index) => {
        return index < currentQuarter
    }).map((elem, index) => elem.value).reduce((prev, next) => prev + next)

    const printFYCml = [FYCmlFigure].filter(elem => elem !== 0).map((elem) => {

        let reducedFixed = Number(elem.toFixed(2))

        let reducedValue: string = `${reducedFixed}M `
        let reducedValueFixed: string = (reducedValue.length >= 11)
            ? reducedValue
            : " ".repeat(11 - reducedValue.length) + reducedValue; 

        return header.fiscalYear + reducedValueFixed + "|"
    })

    const printFYCmlYoY = (currentQuarter === 4 && titleCumulative[4].value === 0)
        ? " New! "
        : (currentQuarter === 4 && (titleCumulative[3].value - titleCumulative[4].value) > (titleCumulative[4].value - titleCumulative[5].value))
        ? `+${((
            ((titleCumulative[3].value - titleCumulative[4].value) / (titleCumulative[4].value - titleCumulative[5].value)) - 1) * 100).toFixed(2)}% ` 
        : (currentQuarter === 4 && (titleCumulative[3].value - titleCumulative[4].value) < (titleCumulative[4].value - titleCumulative[5].value))
        ? `${((
            ((titleCumulative[3].value - titleCumulative[4].value) / (titleCumulative[4].value - titleCumulative[5].value)) - 1) * 100).toFixed(2)}% ` 
        : "NaN" 
    
    const printFYCmlYoYFixed: string | never[] = (printFYCmlYoY === "NaN")
            ? []
            : (printFYCmlYoY.length >= 11 
                ? header.fiscalYearYoY + printFYCmlYoY + "|"
                : header.fiscalYearYoY + " ".repeat(11 - printFYCmlYoY.length) + printFYCmlYoY + "|"
                )

    let printLine: string | never[] = (quartersPrint.length === 0) 
            ? [] 
            : "+" + "-".repeat(32) + "+";
    let printDoubleLine: string = "+" + "=".repeat(32) + "+";

    const lastCheck = [
        titleHeader,
        printLine, 
        ...quartersPrint,
        printDoubleLine,
        printFYCml,
        printFYCmlYoYFixed,
        printLTD,
    ].filter(elem => elem.length !== 0)
     .reduce((prev, next) => {
        return prev + "\n" + next
     })

    return lastCheck
};

test("print header...", () => {

    console.log(printHead(header));
})

test("print titles...", () => {

    const collection = [
        title1,
        title2,
        title3,
    ] as const;

    // forgetting to sort beforehand...
    const sortedCollection = collection.map((elem, index, array) => {
            return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
    }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
        return (a[currentQuarter-1].value > b[currentQuarter-1].value)
            ? 1
            : (a[currentQuarter-1].value < b[currentQuarter-1].value)
            ? -1
            : 0
    }).map((elem, index) => {
        // x is a nested map so that the actual elements of the array can be accessed, the level above is arrays being the elements since it is a collection of arrays
        const x: Titles[] = [...elem].map((elemTwo) => {
            return {...elemTwo, rank: index+1} 
        })
        return x // x which is the returned array is now returned to the array of arrays
    })

    const differenceTitles = sortedCollection.map((elem) => {
        return quarterlyCalculation(elem)
    })

    const printListedTitles = differenceTitles.map((elem, index) => {
        return printTitles(header, elem, sortedCollection[index], currentQuarter)
    }) as string[];

    const printOne = printHead(header);

    const reducePrint = [printOne, ...printListedTitles, ...miscInfo].reduce((prev, next) => prev + "\n" + next)

    console.log(reducePrint);
    

})