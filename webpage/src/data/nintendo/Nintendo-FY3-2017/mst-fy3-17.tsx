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
        valueA: 39,
        regionB: " Overseas",
        valueB: 237,
        regionC: "   WW FY ",
        valueC: 276,
        regionD: "  WW LTD ",
        valueD: 276,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ",
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
    fiscalYear: " FY3/17 ",
    switchSummaryHeader: "| Nintendo Switch FY    |\n| Million-Seller Titles |\n",
    japanSummaryHeader: "| Japan                           |",
    overseasSummaryHeader: "| Overseas                        |",
    globalFYSummaryHeader: "| Global FY                       |",
    globalLTDSummaryHeader: "| Global LTD                      |",
}

const collection = [
    title1,
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

export const [
    title1Sorted,
] = sortedCollection.map((elem) => {
    return decimateCalculation(elem)
})

export const [
    title1Difference,
] = sortedCollection.map((elem) => {
    return decimateCalculation(elem)
}).map((elem) => {
    return quarterlyCalculation(elem)
})

const decimatedCollection = sortedCollection.map((elem) => {
        return decimateCalculation(elem)
    })

const labelCollection = decimatedCollection.map((elem) => {
        return labelTitles(elem)
    })

const newCollection = labelCollection.filter((elem, index) => elem[index].label === " New! ").map((elem, index) => { // do not use this method on arrays lengths longer than 5, see test for better method.
        return elem[3] // 4th quarter
    })
    
const recurringCollection = labelCollection.filter((elem, index) => elem[index].label === " Recurring ").map((elem, index) => {
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

const printTwo = printTitles(header, title1Difference, title1Sorted, currentQuarter)

const printSummaryOne = printSummaryHead(header, newCollection, recurringCollection)

const printSummaryTwo = printSummary(header, newSummary, recurringSummary)

export const printFYMillionSellerTitles = 
`${printOne}
${printTwo}
${printSummaryOne}
${printSummaryTwo}`;