import { Header, Titles } from "../utils/fy-million-seller-titles-logic";


const title1: Titles[] = [
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 1st Quarter  ",
        regionA: "   Japan ",
        valueA: 20,
        regionB: " Overseas",
        valueB: 150,
        regionC: "   WW FY ",
        valueC: 169,
        regionD: "  WW LTD ",
        valueD: 3708,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 2nd Quarter  ",
        regionA: "   Japan ",
        valueA: 46,
        regionB: " Overseas",
        valueB: 289,
        regionC: "   WW FY ",
        valueC: 334,
        regionD: "  WW LTD ",
        valueD: 3874,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 3rd Quarter  ",
        regionA: "   Japan ",
        valueA: 86,
        regionB: " Overseas",
        valueB: 710,
        regionC: "   WW FY ",
        valueC: 796,
        regionD: "  WW LTD ",
        valueD: 4335,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 4th Quarter  ",
        regionA: "   Japan ",
        valueA: 116,
        regionB: " Overseas",
        valueB: 878,
        regionC: "   WW FY ",
        valueC: 994,
        regionD: "  WW LTD ",
        valueD: 4533,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " Last FY Total ",
        regionA: "   Japan ",
        valueA: 130,
        regionB: " Overseas",
        valueB: 932,
        regionC: "   WW FY ",
        valueC: 1062,
        regionD: "  WW LTD ",
        valueD: 3539,  
    },
]

const title2: Titles[] = [
    {
        title: " Pokémon Legends: Arceus ",
        period: " 1st Quarter  ",
        regionA: "   Japan ",
        valueA: 0,
        regionB: " Overseas",
        valueB: 0,
        regionC: "   WW FY ",
        valueC: 0,
        regionD: "  WW LTD ",
        valueD: 0
    },
    {
        title: " Pokémon Legends: Arceus ",
        period: " 2nd Quarter  ",
        regionA: "   Japan ",
        valueA: 0,
        regionB: " Overseas",
        valueB: 0,
        regionC: "   WW FY ",
        valueC: 0,
        regionD: "  WW LTD ",
        valueD: 0
    },
    {
        title: " Pokémon Legends: Arceus ",
        period: " 3rd Quarter  ",
        regionA: "   Japan ",
        valueA: 0,
        regionB: " Overseas",
        valueB: 0,
        regionC: "   WW FY ",
        valueC: 0,
        regionD: "  WW LTD ",
        valueD: 0
    },
    {
        title: " Pokémon Legends: Arceus ",
        period: " 4th Quarter  ",
        regionA: "   Japan ",
        valueA: 346,
        regionB: " Overseas",
        valueB: 917,
        regionC: "   WW FY ",
        valueC: 1264,
        regionD: "  WW LTD ",
        valueD: 1264
    },
    {
        title: " Pokémon Legends: Arceus ",
        period: " Last FY Total ",
        regionA: "   Japan ",
        valueA: 0,
        regionB: " Overseas",
        valueB: 0,
        regionC: "   WW FY ",
        valueC: 0,
        regionD: "  WW LTD ",
        valueD: 0
    },
]

const title3: Titles[] = [
    {
        title: " Pokémon Brilliant Diamond / Pokémon Shining Pearl ",
        period: " 1st Quarter  ",
        regionA: "   Japan ",
        valueA: 0,
        regionB: " Overseas",
        valueB: 0,
        regionC: "   WW FY ",
        valueC: 0,
        regionD: "  WW LTD ",
        valueD: 0,
    },
    {
        title: " Pokémon Brilliant Diamond / Pokémon Shining Pearl ",
        period: " 2nd Quarter  ",
        regionA: "   Japan ",
        valueA: 0,
        regionB: " Overseas",
        valueB: 0,
        regionC: "   WW FY ",
        valueC: 0,
        regionD: "  WW LTD ",
        valueD: 0,
    },
    {
        title: " Pokémon Brilliant Diamond / Pokémon Shining Pearl ",
        period: " 3rd Quarter  ", 
        regionA: "   Japan ",
        valueA: 379,
        regionB: " Overseas",
        valueB: 1018,
        regionC: "   WW FY ",
        valueC: 1397,
        regionD: "  WW LTD ",
        valueD: 1397,
    },
    {
        title: " Pokémon Brilliant Diamond / Pokémon Shining Pearl ",
        period: " 4th Quarter  ",
        regionA: "   Japan ",
        valueA: 385,
        regionB: " Overseas",
        valueB: 1080,
        regionC: "   WW FY ",
        valueC: 1465,
        regionD: "  WW LTD ",
        valueD: 1465,
    },
    {
        title: " Pokémon Brilliant Diamond / Pokémon Shining Pearl ",
        period: " Last FY Total ",
        regionA: "   Japan ",
        valueA: 0,
        regionB: " Overseas",
        valueB: 0,
        regionC: "   WW FY ",
        valueC: 0,
        regionD: "  WW LTD ",
        valueD: 0,
    },
]

const header: Header = {
    switchHeader: "| Nintendo Switch FY Million-Seller Titles |",
    secondHeader: "| Title and Rank                           |",
    thirdHeader: "| Units                                    |",
    areaHeader: "| Area         |   Japan | Overseas|",
    globalHeader: "| Global       |   WW FY |  WW LTD |", 
    fiscalYear: " FY3/22 ",
    switchSummaryHeader: "| Nintendo Switch FY    |\n| Million-Seller Titles |\n",
    japanSummaryHeader: "| Japan                 |",
    overseasSummaryHeader: "| Overseas              |",
    globalFYSummaryHeader: "| Global FY             |",
    globalLTDSummaryHeader: "| Global LTD            |",
}

const headerToMatch = 
`+------------------------------------------+
| Nintendo Switch FY Million-Seller Titles |
+------------------------------------------+
+------------------------------------------+
| Title and Rank                           |
+------------------------------------------+
| Units                                    |
+------------------------------------------+`;

const rank1TitleToMatch =
`+------------------------------------------+
| Pokémon Brilliant Diamond /    |         |
| Pokémon Shining Pearl          | Rank 1  |
+------------------------------------------+
| Area         |   Japan | Overseas|
+----------------------------------+
| 3rd Quarter  |   3.79M |  10.18M |
| 4th Quarter  |   0.06M |   0.62M |
+==================================+
| FY3/22 Cml.  |   3.85M |   10.8M |
| FY3/22 YoY%  |    New! |    New! |
| Area/WW FY % |  26.28% |  73.72% |
+----------------------------------+
| Global       |   WW FY |  WW LTD |
+----------------------------------+
| 3rd Quarter  |  13.97M |  13.97M |
| 4th Quarter  |   0.68M |  14.65M |
+==================================+
| FY3/22 Cml.  |  14.65M |  14.65M |
| FY3/22 YoY%  |    New! |    New! |
| WW FY/LTD %  | 100.00% |   0.00% |
+----------------------------------+`;

const rank2TitleToMatch = 
`+------------------------------------------+
| Pokémon Legends: Arceus        | Rank 2  |
+------------------------------------------+
| Area         |   Japan | Overseas|
+----------------------------------+
| 4th Quarter  |   3.46M |   9.17M |
+==================================+
| FY3/22 Cml.  |   3.46M |   9.17M |
| FY3/22 YoY%  |    New! |    New! |
| Area/WW FY % |  27.37% |  72.55% |
+----------------------------------+
| Global       |   WW FY |  WW LTD |
+----------------------------------+
| 4th Quarter  |  12.64M |  12.64M |
+==================================+
| FY3/22 Cml.  |  12.64M |  12.64M |
| FY3/22 YoY%  |    New! |    New! |
| WW FY/LTD %  | 100.00% |   0.00% |
+----------------------------------+`;

const fyMillionSellersToMatch = 
`+------------------------------------------+
| Nintendo Switch FY Million-Seller Titles |
+------------------------------------------+
+------------------------------------------+
| Title and Rank                           |
+------------------------------------------+
| Units                                    |
+------------------------------------------+
+------------------------------------------+
| Pokémon Brilliant Diamond /    |         |
| Pokémon Shining Pearl          | Rank 1  |
+------------------------------------------+
| Area         |   Japan | Overseas|
+----------------------------------+
| 3rd Quarter  |   3.79M |  10.18M |
| 4th Quarter  |   0.06M |   0.62M |
+==================================+
| FY3/22 Cml.  |   3.85M |   10.8M |
| FY3/22 YoY%  |    New! |    New! |
| Area/WW FY % |  26.28% |  73.72% |
+----------------------------------+
| Global       |   WW FY |  WW LTD |
+----------------------------------+
| 3rd Quarter  |  13.97M |  13.97M |
| 4th Quarter  |   0.68M |  14.65M |
+==================================+
| FY3/22 Cml.  |  14.65M |  14.65M |
| FY3/22 YoY%  |    New! |    New! |
| WW FY/LTD %  | 100.00% |   0.00% |
+----------------------------------+
+------------------------------------------+
| Pokémon Legends: Arceus        | Rank 2  |
+------------------------------------------+
| Area         |   Japan | Overseas|
+----------------------------------+
| 4th Quarter  |   3.46M |   9.17M |
+==================================+
| FY3/22 Cml.  |   3.46M |   9.17M |
| FY3/22 YoY%  |    New! |    New! |
| Area/WW FY % |  27.37% |  72.55% |
+----------------------------------+
| Global       |   WW FY |  WW LTD |
+----------------------------------+
| 4th Quarter  |  12.64M |  12.64M |
+==================================+
| FY3/22 Cml.  |  12.64M |  12.64M |
| FY3/22 YoY%  |    New! |    New! |
| WW FY/LTD %  | 100.00% |   0.00% |
+----------------------------------+
+------------------------------------------+
| Mario Kart 8 Deluxe            | Rank 3  |
+------------------------------------------+
| Area         |   Japan | Overseas|
+----------------------------------+
| 1st Quarter  |    0.2M |    1.5M |
| 2nd Quarter  |   0.26M |   1.39M |
| 3rd Quarter  |    0.4M |   4.21M |
| 4th Quarter  |    0.3M |   1.68M |
+==================================+
| FY3/22 Cml.  |   1.16M |   8.78M |
| FY3/22 YoY%  | -10.77% |  -5.79% |
| Area/WW FY % |  11.67% |  88.33% |
+----------------------------------+
| Global       |   WW FY |  WW LTD |
+----------------------------------+
| 1st Quarter  |   1.69M |  37.08M |
| 2nd Quarter  |   1.65M |  38.74M |
| 3rd Quarter  |   4.62M |  43.35M |
| 4th Quarter  |   1.98M |  45.33M |
+==================================+
| FY3/22 Cml.  |   9.94M |  45.33M |
| FY3/22 YoY%  |  -6.40% | +28.09% |
| WW FY/LTD %  |  21.93% |  78.07% |
+----------------------------------+`;

const collection = [
    title1,
    title2,
    title3,
] as const;

const currentQuarter = 4;

const sortedCollection = collection.map((elem, index, array) => {
            return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
    }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
        return (a[currentQuarter-1].valueC > b[currentQuarter-1].valueC)
            ? 1
            : (a[currentQuarter-1].valueC < b[currentQuarter-1].valueC)
            ? -1
            : 0 // 4th quarter WW FY is index 11
    }).map((elem, index) => {
        // x is a nested map so that the actual elements of the array can be accessed, the level above is arrays being the elements since it is a collection of arrays
        const x: Titles[] = [...elem].map((elemTwo) => {
            return {...elemTwo, rank: index+1} 
        })
        return x // x which is the returned array is now returned to the array of arrays
    })

function decimateCalculation(numbers: Titles[]) {

   const calc: Titles[] = numbers.map((elem) => {
       return {
        ...elem, 
        valueA: Number((elem.valueA / 100).toFixed(2)),
        valueB: Number((elem.valueB / 100).toFixed(2)),
        valueC: Number((elem.valueC / 100).toFixed(2)),
        valueD: Number((elem.valueD / 100).toFixed(2)),
        }
   })

   return calc
}


function quarterlyCalculation(quarters: Titles[]) {
       
   const calc: Titles[] = quarters.map((elem, index, array) => {
       return (elem.period !== " 1st Quarter  " && elem.period !== " Last FY Total ")
               ? {
                ...elem, 
                valueA: Number((elem.valueA - array[index-1].valueA).toFixed(2)),
                valueB: Number((elem.valueB - array[index-1].valueB).toFixed(2)),
                valueC: Number((elem.valueC - array[index-1].valueC).toFixed(2)),
                }
               : elem
   })
   
   return calc
}

const printHead = (header: Header) => 
`+${"-".repeat(42)}+
${header.switchHeader}
+${"-".repeat(42)}+
+${"-".repeat(42)}+
${header.secondHeader}
+${"-".repeat(42)}+
${header.thirdHeader}
+${"-".repeat(42)}+`;

const printTitles = (header: Header, titleDifference: Titles[], titleCumulative: Titles[], currentQuarter: number) => {
        
    const regionAB = titleDifference.filter((elem, index) => {
        // return index < currentQuarter && elem.valueC !== 0
        return index !== 4
    }).map((elem, index, array) => {
        
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

        let printValueA: string = `${elem.valueA}M ` 
        let printValueAFixed: string = (printValueA.length >= 9)
            ? printValueA
            : " ".repeat(9 - printValueA.length) + printValueA;
        
        let printValueB: string = `${elem.valueB}M ` 
        let printValueBFixed: string = (printValueB.length >= 9)
            ? printValueB
            : " ".repeat(9 - printValueB.length) + printValueB;

        let printAreaHeader: string = header.areaHeader + "\n+"+"-".repeat(34)+"+"

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
            : `${(((titleCumulative[3].valueA / titleCumulative[4].valueA) - 1) * 100).toFixed(2)}% ` 
        let printRegionAYoYFixed: string = (printRegionAYoY.length >= 9)
            ? printRegionAYoY
            :  " ".repeat(9 - printRegionAYoY.length) + printRegionAYoY;

        let printRegionBYoY: string = (titleCumulative[4].valueB === 0)
            ? ` New! `
            : `${(((titleCumulative[3].valueB / titleCumulative[4].valueB) - 1) * 100).toFixed(2)}% `
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
        // return  (currentQuarter !== 4 && array.length === 1) 
                // ? printAreaHeader + "\n|" + elem.period + "|" + printValueAFixed + "|" + printValueBFixed + "|\n" + printFYCml + "\n| Area/WW FY % |" + printRegionAWWPercentageFixed + "|" + printRegionBWWPercentageFixed + "|"
        //         : (currentQuarter === 4 && array.length === 1)
                // ? printAreaHeader + "\n|" + elem.period + "|" + printValueAFixed + "|" + printValueBFixed + "|\n" + printFYCml + "\n| Area/WW FY % |" + printRegionAWWPercentageFixed + "|" + printRegionBWWPercentageFixed + "|"
        //         : (index === 0) 
                // ? printTitleNameFixed + "\n" + printAreaHeader + "\n|" + elem.period + "|" + printValueAFixed + "|" + printValueBFixed + "|"
        //         : (index === currentQuarter-1)
        //         ?  "|" + elem.period + "|" + printValueAFixed + "|" + printValueBFixed + "|\n" + printFYCml + "\n| Area/WW FY % |" + printRegionAWWPercentageFixed + "|" + printRegionBWWPercentageFixed + "|"
                // : "|" + elem.period + "|" + printValueAFixed + "|" + printValueBFixed + "|"
    }).filter((elem) => elem.length !== 0).reduce((prev, next, index, array) => {
        return prev + "\n" + next
    })

    const regionCD = titleDifference.filter((elem, index) => {
        // return index < currentQuarter && elem.valueC !== 0
        return index !== 4
    }).map((elem, index, array) => {
        
        let printValueC: string = `${elem.valueC}M ` 
        let printValueCFixed: string = (printValueC.length >= 9)
            ? printValueC
            : " ".repeat(9 - printValueC.length) + printValueC;
        
        let printValueD: string = `${elem.valueD}M ` 
        let printValueDFixed: string = (printValueD.length >= 9)
            ? printValueD
            : " ".repeat(9 - printValueD.length) + printValueD;

        let printGlobalHeader: string = "+"+"-".repeat(34)+"+\n" + header.globalHeader + "\n+"+"-".repeat(34)+"+"

        let printCmlValueC: string =  `${titleCumulative[currentQuarter-1].valueC}M `
        let printCmlValueCFixed: string = (printCmlValueC.length >= 9)
            ? printCmlValueC
            : " ".repeat(9 - printCmlValueC.length) + printCmlValueC;

        let printCmlValueD: string =  `${titleCumulative[currentQuarter-1].valueD}M `
        let printCmlValueDFixed: string = (printCmlValueD.length >= 9)
            ? printCmlValueD
            : " ".repeat(9 - printCmlValueD.length) + printCmlValueD;

        let printFYCml: string = "+" + "=".repeat(34) + "+\n|" + header.fiscalYear + "Cml.  |" + printCmlValueCFixed + "|" + printCmlValueDFixed + "|"
        
        let printRegionCWWPercentage: string = `${((titleCumulative[currentQuarter-1].valueC / titleCumulative[currentQuarter-1].valueD) * 100).toFixed(2)}% `
        let printRegionCWWPercentageFixed: string = (printRegionCWWPercentage.length >= 9)
            ? printRegionCWWPercentage
            :  " ".repeat(9 - printRegionCWWPercentage.length) + printRegionCWWPercentage;

        let printRegionDWWPercentage: string = `${( 100 - ((titleCumulative[currentQuarter-1].valueC / titleCumulative[currentQuarter-1].valueD) * 100)).toFixed(2)}% `
        let printRegionDWWPercentageFixed: string = (printRegionDWWPercentage.length >= 9)
            ? printRegionDWWPercentage
            :  " ".repeat(9 - printRegionDWWPercentage.length) + printRegionDWWPercentage;
        
        let printRegionCYoY: string = (titleCumulative[4].valueC === 0)
            ? ` New! `
            : `${(((titleCumulative[3].valueC / titleCumulative[4].valueC) - 1) * 100).toFixed(2)}% ` 
        let printRegionCYoYFixed: string = (printRegionCYoY.length >= 9)
            ? printRegionCYoY
            :  " ".repeat(9 - printRegionCYoY.length) + printRegionCYoY;

        let printRegionDYoY: string = (titleCumulative[4].valueD === 0)
            ? ` New! `
            : `+${(((titleCumulative[3].valueD / titleCumulative[4].valueD) - 1) * 100).toFixed(2)}% `
        let printRegionDYoYFixed: string = (printRegionDYoY.length >= 9)
            ? printRegionDYoY
            :  " ".repeat(9 - printRegionDYoY.length) + printRegionDYoY;

        let printFYCmlYoY: string = "\n|" + header.fiscalYear + "YoY%  |" + printRegionCYoYFixed + "|" + printRegionDYoYFixed + "|"
        
        if (index === 0 && elem.valueC === 0) {
            return printGlobalHeader 
        } else if (index !== 0 && elem.valueC === 0) {
            return [] // array.length 0 filtering
        } else {
            return (currentQuarter === 1)
                    ? printGlobalHeader + "\n|" + elem.period + "|" + printValueCFixed + "|" + printValueDFixed + "|\n" + printFYCml + "\n| WW FY/LTD %  |" + printRegionCWWPercentageFixed + "|" + printRegionDWWPercentageFixed + "|"
                    : (index === 0 && currentQuarter !== 1)
                    ? printGlobalHeader + "\n|" + elem.period + "|" + printValueCFixed + "|" + printValueDFixed + "|"
                    : (index === 3)
                    ? "|" + elem.period + "|" + printValueCFixed + "|" + printValueDFixed + "|\n" + printFYCml + printFYCmlYoY + "\n| WW FY/LTD %  |" + printRegionCWWPercentageFixed + "|" + printRegionDWWPercentageFixed + "|"
                    : (index === currentQuarter-1 )
                    ? "|" + elem.period + "|" + printValueCFixed + "|" + printValueDFixed + "|\n" + printFYCml + "\n| WW FY/LTD %  |" + printRegionCWWPercentageFixed + "|" + printRegionDWWPercentageFixed + "|"
                    : "|" + elem.period + "|" + printValueCFixed + "|" + printValueDFixed + "|"
        }
        // (currentQuarter === 1) 
                // ? printGlobalHeader + "\n|" + elem.period + "|" + printValueCFixed + "|" + printValueDFixed + "|\n" + printFYCml + "\n| Area/WW FY % |" + printRegionCWWPercentageFixed + "|" + printRegionDWWPercentageFixed + "|"
                // : (index === 0)
                // ? printGlobalHeader + "\n|" + elem.period + "|" + printValueCFixed + "|" + printValueDFixed + "|"
                // : (index === currentQuarter-1)
                // ?  "|" + elem.period + "|" + printValueCFixed + "|" + printValueDFixed + "|\n" + printFYCml + "\n| Area/WW FY % |" + printRegionCWWPercentageFixed + "|" + printRegionDWWPercentageFixed + "|"
                // : "|" + elem.period + "|" + printValueCFixed + "|" + printValueDFixed + "|"
    }).filter((elem) => elem.length !== 0).reduce((prev, next, index, array) => {
        return prev + "\n" + next
    })
    
    return [regionAB, regionCD].reduce((prev, next) => prev + "\n" + next + "\n+"+"-".repeat(34)+"+")
    
}

function labelTitles(titlesSorted: Titles[]) {

    const calc: Titles[] = titlesSorted.map((elem, index, array) => {

        return (array[4].valueC === 0)
                ? {...elem, label: " New! "}
                : {...elem, label: " Recurring "}
    })

    return calc
}

// const printSummary = () => {

// }

test("sort titles by fiscal year cumulative", () => {

    // console.log(sortedCollection);
    
})

test("quarterly calculation", () => {

    // console.log(title1.length);
    const [
        title1Difference,
        title2Difference,
        title3Difference,
    ] = sortedCollection.map((elem) => {
        return quarterlyCalculation(elem)
    })

    // console.log(title1Difference);
    // console.log(title2Difference);
    // console.log(title3Difference);
    
}) 

test("print!", () => {

    const [
        title1Sorted,
        title2Sorted,
        title3Sorted,
    ] = sortedCollection.map((elem) => {
        return decimateCalculation(elem)
    })
    
    const [
        title1Difference,
        title2Difference,
        title3Difference,
    ] = sortedCollection.map((elem) => {
        return decimateCalculation(elem)
    }).map((elem) => {
        return quarterlyCalculation(elem)
    })
    
    // const test = printTitles(header, title1Difference, title1Sorted, currentQuarter)

    const printOne = printHead(header)

    const title1arrays = [
        header,
        title1Difference,
        title1Sorted,
        currentQuarter
    ] as const;

    const title2arrays = [
        header,
        title2Difference,
        title2Sorted,
        currentQuarter 
    ] as const;

    const title3arrays = [
        header,
        title3Difference,
        title3Sorted,
        currentQuarter
    ] as const;

    const [
        printTwo,
        printThree,
        printFour,
    ] = [
        title1arrays,
        title2arrays,
        title3arrays,
    ].map((elem, index, array) => {
        return printTitles(...elem)
    })

    // console.log(test);
    // console.log(title1Sorted);
const printFYMillionSellerTitles = 
`${printOne}
${printTwo}
${printThree}
${printFour}`;

// console.log(printFYMillionSellerTitles);

    
    expect(printFYMillionSellerTitles).toMatch(fyMillionSellersToMatch);
})

test("print, match header", () => {

    const printOne = printHead(header)

    expect(printOne).toMatch(headerToMatch)
})

test("print, match rank 1 title", () => {

    const [
        title1Sorted,
        title2Sorted,
        title3Sorted,
    ] = sortedCollection.map((elem) => {
        return decimateCalculation(elem)
    })
    
    const [
        title1Difference,
        title2Difference,
        title3Difference,
    ] = sortedCollection.map((elem) => {
        return decimateCalculation(elem)
    }).map((elem) => {
        return quarterlyCalculation(elem)
    })

    const title1arrays = [
        header,
        title1Difference,
        title1Sorted,
        currentQuarter
    ] as const;

    const title2arrays = [
        header,
        title2Difference,
        title2Sorted,
        currentQuarter 
    ] as const;

    const title3arrays = [
        header,
        title3Difference,
        title3Sorted,
        currentQuarter
    ] as const;

    const [
        printTwo,
        printThree,
        printFour,
    ] = [
        title1arrays,
        title2arrays,
        title3arrays,
    ].map((elem, index, array) => {
        return printTitles(...elem)
    })
    
    expect(printTwo).toMatch(rank1TitleToMatch)
})

test("print, match rank 2 title", () => {

    const [
        title1Sorted,
        title2Sorted,
        title3Sorted,
    ] = sortedCollection.map((elem) => {
        return decimateCalculation(elem)
    })
    
    const [
        title1Difference,
        title2Difference,
        title3Difference,
    ] = sortedCollection.map((elem) => {
        return decimateCalculation(elem)
    }).map((elem) => {
        return quarterlyCalculation(elem)
    })

    const title1arrays = [
        header,
        title1Difference,
        title1Sorted,
        currentQuarter
    ] as const;

    const title2arrays = [
        header,
        title2Difference,
        title2Sorted,
        currentQuarter 
    ] as const;

    const title3arrays = [
        header,
        title3Difference,
        title3Sorted,
        currentQuarter
    ] as const;

    const [
        printTwo,
        printThree,
        printFour,
    ] = [
        title1arrays,
        title2arrays,
        title3arrays,
    ].map((elem, index, array) => {
        return printTitles(...elem)
    })
    
    expect(printThree).toMatch(rank2TitleToMatch)
})

test("print summary", () => {
    
    const decimatedCollection = sortedCollection.map((elem) => {
        return decimateCalculation(elem)
    })
    
    const labelCollection = decimatedCollection.map((elem) => {
        return labelTitles(elem)
    })

    const newCollection = labelCollection.filter((elem, index) => elem[index].label === " New! ").map((elem, index) => {
        return elem[3] // 4th quarter
    })
    
    const recurringCollection = labelCollection.filter((elem, index) => elem[index].label === " Recurring ").map((elem, index) => {
        return elem[3] // 4th quarter
    })

    // const [japanNew, overseasNew, wwFYNew, wwLTDNew] =
    const newSummary = [newCollection, newCollection, newCollection, newCollection].map((elem, index, array) =>  {
        return elem.map((secondElem) => {
            return (index === 0)
                ? secondElem.valueA
                : (index === 1)
                ? secondElem.valueB
                : (index === 2)
                ? secondElem.valueC
                : secondElem.valueD
        }).reduce((prev, next) => prev + next)
    })

    // const [japanRecurring, overseasRecurring, wwFYRecurring, wwLTDRecurring] 
    const recurringSummary = [recurringCollection, recurringCollection, recurringCollection, recurringCollection].map((elem, index, array) =>  {
        return elem.map((secondElem) => {
            return (index === 0)
                ? secondElem.valueA
                : (index === 1)
                ? secondElem.valueB
                : (index === 2)
                ? secondElem.valueC
                : secondElem.valueD
        }).reduce((prev, next) => prev + next)
    })

    console.log(newCollection.length);
    console.log(recurringCollection.length);

    console.log(newSummary);
    console.log(recurringSummary);
    
    
    // console.log(japanNew);
    // console.log(overseasNew);
    // console.log(wwFYNew);
    // console.log(wwLTDNew);
    
    // console.log(japanRecurring);
    // console.log(overseasRecurring);
    // console.log(wwFYRecurring);
    // console.log(wwLTDRecurring);

const testData = 
`+-----------------------+
| Nintendo Switch FY    |
| Million-Seller Titles |
+-----------------------+
+-----------------------+
| Titles                |
+-----------------------+
| New!        |       2 |
| Recurring   |       1 |
+=======================+
| Total       |       3 |
+-----------------------+`
//| Million-Seller Titles |
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

    let printHeader: string = "+"+"-".repeat(23)+"+\n" + header.switchSummaryHeader + "+"+"-".repeat(23)+"+"

    let printTitles: string = "\n+"+"-".repeat(23)+"+\n| Titles                |\n+" + "-".repeat(23)+"+" 

    let printNewRow: string = "\n| New!        |" + printNewFixed + "|"

    let printRecurringRow: string = "\n| Recurring   |" + printRecurringFixed + "|"

    let printTotalRow: string = "\n+"+"=".repeat(23) + "+\n| Total       |" + printTotalFixed + "|\n+"+"-".repeat(23) + "+"

    return printHeader + printTitles + printNewRow + printRecurringRow + printTotalRow
}
    
const testHeader = printSummaryHead(header, newCollection, recurringCollection)

expect(testHeader).toMatch(testData)


const printSummary = (header: Header, regionNew: number[], regionRecurring: number[], ) => {

    return regionNew.map((elem, index, array) => {

        let printRegionHeader: string = "+"+"-".repeat(33)+"+\n|" + header.fiscalYear + "Cml. |   Units |    %    |\n+" + "-".repeat(33) + "+"

        let TotalUnits: number = Number((elem + regionRecurring[index]).toFixed(2)) 

        let printTotalUnits: string = `${(elem + regionRecurring[index]).toFixed(2)}`
        let printTotalUnitsFixed: string = (printTotalUnits.length >= 9)
            ? printTotalUnits
            : " ".repeat(9 - printTotalUnits.length) + printTotalUnits;
        
        let printNewUnits: string = `${elem.toFixed(2)} `
        let printNewUnitsFixed: string = (printNewUnits.length >= 9)
                ? printNewUnits
                : " ".repeat(9 - printNewUnits.length) + printNewUnits;

        let printNewPercentages: string = `${(elem / TotalUnits).toFixed(2)}% `
        let printNewPercentagesFixed: string = (printNewPercentages.length >= 9)
            ? printNewPercentages
            : " ".repeat(9 - printNewPercentages.length) + printNewPercentages;

        let printRecurringUnits: string = `${regionRecurring[index].toFixed(2)} `
        let printRecurringUnitsFixed: string = (printRecurringUnits.length)
            ? printRecurringUnits
            : " ".repeat(9 - printRecurringUnits.length) + printRecurringUnits;

        let printRows: string = "| New!        |" + printNewUnitsFixed + "|" + printNewPercentages + "|\n| Recurring   |" + printRecurringUnits + "|" + printRecurringPercentages + "|\n+" + "=".repeat(33) + "+\n| Total      |" + printTotalUnits + "|" 

    })

}

// console.log(printSummary(header, japanNew, japanRecurring));


})