import {
    Titles,
    Header,
    decimateCalculation,
    quarterlyCalculation,
    labelTitles,
    printHead,
    printTitles,
    printSummary,
    printSummaryHead,
} from "../../../utils/fy-million-seller-titles-logic";

const currentQuarter = 4;

const title1: Titles[] = [
    {
        title: " The Legend of Zelda: Breath of the Wild ",
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
        title: " The Legend of Zelda: Breath of the Wild ",
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
        title: " The Legend of Zelda: Breath of the Wild ",
        period: " 3rd Quarter  ",
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
        title: " The Legend of Zelda: Breath of the Wild ",
        period: " 4th Quarter  ",
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
        title: " The Legend of Zelda: Breath of the Wild ",
        period: " Last FY Total ",
        regionA: "   Japan ",
        valueA: 70,
        regionB: " Overseas",
        valueB: 501,
        regionC: "   WW FY ",
        valueC: 572,
        regionD: "  WW LTD ",
        valueD: 848,
    },
]

const title2: Titles[] = [
    {
        title: " Mario Kart 8 Deluxe ", 
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
        title: " Mario Kart 8 Deluxe ", 
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
        title: " Mario Kart 8 Deluxe ", 
        period: " 3rd Quarter  ",
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
        title: " Mario Kart 8 Deluxe ", 
        period: " 4th Quarter  ",
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
        title: " Mario Kart 8 Deluxe ", 
        period: " Last FY Total ", 
        regionA: "   Japan ",
        valueA: 168,
        regionB: " Overseas",
        valueB: 754,
        regionC: "   WW FY ",
        valueC: 922,
        regionD: "  WW LTD ",
        valueD: 922,
    },
]

const title3: Titles[] = [
    {
        title: " ARMS ",
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
        title: " ARMS ",
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
        title: " ARMS ",
        period: " 3rd Quarter  ",
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
        title: " ARMS ",
        period: " 4th Quarter  ",
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
        title: " ARMS ",
        period: " Last FY Total ",
        regionA: "   Japan ",
        valueA: 47,
        regionB: " Overseas",
        valueB: 138,
        regionC: "   WW FY ",
        valueC: 185,
        regionD: "  WW LTD ",
        valueD: 185,
    },
]

const title4: Titles[] = [
    {
        title: " Splatoon 2 ",
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
        title: " Splatoon 2 ",
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
        title: " Splatoon 2 ",
        period: " 3rd Quarter  ",
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
        title: " Splatoon 2 ",
        period: " 4th Quarter  ",
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
        title: " Splatoon 2 ",
        period: " Last FY Total ",
        regionA: "   Japan ",
        valueA: 261,
        regionB: " Overseas",
        valueB: 341,
        regionC: "   WW FY ",
        valueC: 602,
        regionD: "  WW LTD ",
        valueD: 602,
    },
]

const title5: Titles[] = [
    {
        title: " Super Mario Odyssey ",
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
        title: " Super Mario Odyssey ",
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
        title: " Super Mario Odyssey ",
        period: " 3rd Quarter  ",
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
        title: " Super Mario Odyssey ",
        period: " 4th Quarter  ",
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
        title: " Super Mario Odyssey ",
        period:" Last FY Total ", 
        regionA: "   Japan ",
        valueA: 191,
        regionB: " Overseas",
        valueB: 850,
        regionC: "   WW FY ",
        valueC: 1041,
        regionD: "  WW LTD ",
        valueD: 1041,
    },
]

const title6: Titles[] = [
    {
        title: " Xenoblade Chronicles 2 ",
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
        title: " Xenoblade Chronicles 2 ",
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
        title: " Xenoblade Chronicles 2 ",
        period: " 3rd Quarter  ",
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
        title: " Xenoblade Chronicles 2 ",
        period: " 4th Quarter  ",
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
        title: " Xenoblade Chronicles 2 ",
        period:" Last FY Total ", 
        regionA: "   Japan ",
        valueA: 31,
        regionB: " Overseas",
        valueB: 101,
        regionC: "   WW FY ",
        valueC: 131,
        regionD: "  WW LTD ",
        valueD: 131,
    },
]

const title7: Titles[] = [
    {
        title: " Kirby Star Allies ",
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
        title: " Kirby Star Allies ",
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
        title: " Kirby Star Allies ",
        period: " 3rd Quarter  ",
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
        title: " Kirby Star Allies ",
        period: " 4th Quarter  ",
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
        title: " Kirby Star Allies ",
        period:" Last FY Total ", 
        regionA: "   Japan ",
        valueA: 50,
        regionB: " Overseas",
        valueB: 75,
        regionC: "   WW FY ",
        valueC: 126,
        regionD: "  WW LTD ",
        valueD: 126,
    },
]

const title8: Titles[] = [
    {
        title: " 1-2-Switch ",
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
        title: " 1-2-Switch ",
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
        title: " 1-2-Switch ",
        period: " 3rd Quarter  ",
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
        title: " 1-2-Switch ",
        period: " 4th Quarter  ",
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
        title: " 1-2-Switch ",
        period:" Last FY Total ", 
        regionA: "   Japan ",
        valueA: 32,
        regionB: " Overseas",
        valueB: 103,
        regionC: "   WW FY ",
        valueC: 134,
        regionD: "  WW LTD ",
        valueD: 229,
    },
]

const title9: Titles[] = [
    {
        title: " Pokkén Tournament DX ",
        period: " 1st Quarter  ",
        regionA: "   Japan ",
        valueA: 0,
        regionB: " Overseas",
        valueB: 0,
        regionC: "   WW FY ",
        valueC: 0,
        regionD: "  WW LTD ",
        valueD: 0,
        miscellaneous: "*This title is published by The Pokémon Company in the domestic market."
    },
    {
        title: " Pokkén Tournament DX ",
        period: " 2nd Quarter  ",
        regionA: "   Japan ",
        valueA: 0,
        regionB: " Overseas",
        valueB: 0,
        regionC: "   WW FY ",
        valueC: 0,
        regionD: "  WW LTD ",
        valueD: 0,
        miscellaneous: "*This title is published by The Pokémon Company in the domestic market."
    },
    {
        title: " Pokkén Tournament DX ",
        period: " 3rd Quarter  ",
        regionA: "   Japan ",
        valueA: 0,
        regionB: " Overseas",
        valueB: 0,
        regionC: "   WW FY ",
        valueC: 0,
        regionD: "  WW LTD ",
        valueD: 0,
        miscellaneous: "*This title is published by The Pokémon Company in the domestic market."
    },
    {
        title: " Pokkén Tournament DX ",
        period: " 4th Quarter  ",
        regionA: "   Japan ",
        valueA: 0,
        regionB: " Overseas",
        valueB: 0,
        regionC: "   WW FY ",
        valueC: 0,
        regionD: "  WW LTD ",
        valueD: 0,
        miscellaneous: "*This title is published by The Pokémon Company in the domestic market."
    },
    {
        title: " Pokkén Tournament DX ",
        period:" Last FY Total ", 
        regionA: "   Japan ",
        valueA: 0,
        regionB: " Overseas",
        valueB: 116,
        regionC: "   WW FY ",
        valueC: 116,
        regionD: "  WW LTD ",
        valueD: 116,
        miscellaneous: "*This title is published by The Pokémon Company in the domestic market."
    },
]

// const title0: Titles[] = [
//     {
//         title: "",
//         period: " 1st Quarter  ",
//         regionA: "   Japan ",
//         valueA: 0,
//         regionB: " Overseas",
//         valueB: 0,
//         regionC: "   WW FY ",
//         valueC: 0,
//         regionD: "  WW LTD ",
//         valueD: 0,
//     },
//     {
//         title: "",
//         period: " 2nd Quarter  ",
//         regionA: "   Japan ",
//         valueA: 0,
//         regionB: " Overseas",
//         valueB: 0,
//         regionC: "   WW FY ",
//         valueC: 0,
//         regionD: "  WW LTD ",
//         valueD: 0,
//     },
//     {
//         title: "",
//         period: " 3rd Quarter  ",
//         regionA: "   Japan ",
//         valueA: 0,
//         regionB: " Overseas",
//         valueB: 0,
//         regionC: "   WW FY ",
//         valueC: 0,
//         regionD: "  WW LTD ",
//         valueD: 0,
//     },
//     {
//         title: "",
//         period: " 4th Quarter  ",
//         regionA: "   Japan ",
//         valueA: 0,
//         regionB: " Overseas",
//         valueB: 0,
//         regionC: "   WW FY ",
//         valueC: 0,
//         regionD: "  WW LTD ",
//         valueD: 0,
//     },
//     {
//         title: "",
//         period:" Last FY Total ", 
//         regionA: "   Japan ",
//         valueA: 0,
//         regionB: " Overseas",
//         valueB: 0,
//         regionC: "   WW FY ",
//         valueC: 0,
//         regionD: "  WW LTD ",
//         valueD: 0,
//     },
// ]

const header: Header = {
    switchHeader: "| Nintendo Switch FY Million-Seller Titles |",
    secondHeader: "| Title and Rank                           |",
    thirdHeader: "| Units                                    |",
    areaHeader: "| Area         |   Japan | Overseas|",
    globalHeader: "| Global       |   WW FY |  WW LTD |",
    fiscalYear: " FY3/18 ",
    switchSummaryHeader: "| Nintendo Switch FY    |\n| Million-Seller Titles |\n",
    japanSummaryHeader: "| Japan                           |",
    overseasSummaryHeader: "| Overseas                        |",
    globalFYSummaryHeader: "| Global FY                       |",
    globalLTDSummaryHeader: "| Global LTD                      |",
}

const collection = [
    title1,
    title2,
    title3,
    title4,
    title5,
    title6,
    title7,
    title8,
    title9,
] as const;

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

const sortedTitles = sortedCollection.map((elem) => {
        return decimateCalculation(elem)
    })

export const [
    title1Sorted,
    title2Sorted,
    title3Sorted,
    title4Sorted,
    title5Sorted,
    title6Sorted,
    title7Sorted,
    title8Sorted,
    title9Sorted,
] = sortedTitles 


const differenceTitles = sortedCollection.map((elem) => {
    return decimateCalculation(elem)
}).map((elem) => {
    return quarterlyCalculation(elem)
})

export const [
    title1Difference,
    title2Difference,
    title3Difference,
    title4Difference,
    title5Difference,
    title6Difference,
    title7Difference,
    title8Difference,
    title9Difference,
] = differenceTitles 

const newCollection = sortedTitles.map((elem) => {
        return labelTitles(elem)
    }).map((elem) => {
        return elem.filter((secondElem) => {
            return secondElem.label === " New! "
        })
    }).filter((elem) => elem.length !== 0 // to filter out zero length arrays
    ).map((elem) => {
        return elem[3] // 4th quarter
    })

const recurringCollection = sortedTitles.map((elem) => {
        return labelTitles(elem)
    }).map((elem) => {
        return elem.filter((secondElem) => {
            return secondElem.label === " Recurring "
        })
    }).filter((elem) => elem.length !== 0 // to filter out zero length arrays
    ).map((elem) => {
        return elem[3] // 4th quarter
    })    

const newSummary = [newCollection, newCollection, newCollection, newCollection].map((elem, index, array) =>  {
    if (elem.length === 0) {
        return 0
    }
    
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

const recurringSummary = [recurringCollection, recurringCollection, recurringCollection, recurringCollection].map((elem, index, array) =>  {
    if (elem.length === 0) {
        return 0
    }

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


const printOne = printHead(header)

// const printTwo = printTitles(header, title1Difference, title1Sorted, currentQuarter)
const [print2, print3, print4, print5, print6, print7, print8, print9, print10] = differenceTitles.map((elem, index) => {
    return printTitles(header, elem, sortedTitles[index], currentQuarter)
})

const printSummaryOne = printSummaryHead(header, newCollection, recurringCollection)

const printSummaryTwo = printSummary(header, newSummary, recurringSummary)

export const printFYMillionSellerTitles = 
`${printOne}
${print2}
${print3}
${print4}
${print5}
${print6}
${print7}
${print8}
${print9}
${print10}
${printSummaryOne}
${printSummaryTwo}`;