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

    const quartersPrint = titleDifference.filter((elem, index) => {
        return index < currentQuarter && elem.value !== 0
    }).map((elem, index) => {
        if (!elem) {
            return []
        }

        let printValue: string = `${elem.value}M ` 
        let printValueFixed: string = (printValue.length >= 10)
            ? printValue
            : " ".repeat(10 - printValue.length) + printValue;

        return "|" + elem.period + "|" + printValueFixed + "|"
    });

    const printLTD = titleCumulative.filter((elem, index) => index === 0).map((elem, index, array) => {

       let printValue: string = `${titleCumulative[currentQuarter-1].value}M `
       
       let printValueFixed: string = (printValue.length === 10)
            ? printValue
            : " ".repeat(10 - printValue.length) + printValue;

        return header.ltd + printValueFixed + "|"
    });


    const printFYCml = titleCumulative


};



