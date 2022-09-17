import { 
    Titles,
    Header,
    quarterlyCalculation,
    printHead,
    printBody,
} from "../../../utils/top_selling_titles_logic";

const currentQuarter = 4;

const title1: Titles[] = [
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 1st Quarter         ",
        value: 0
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 2nd Quarter         ",
        value: 0
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 3rd Quarter         ",
        value: 0
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 4th Quarter         ",
        value: 2.76,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " Q4 Last FY ",
        value: 0
    },
]

const header: Header = {
    switchHeader: "| Switch - Top Selling Titles    |",
    units: "| Units                          |",
    fiscalYear: "| FY3/17 Cumulative   |",
}

const collection = [
    title1,
] as const;

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

export const [
    title1Difference, 
] = sortedCollection.map((elem) => {
    return quarterlyCalculation(elem)
})

const printOne = printHead(header)

const title1arrays = [
    title1Difference,
    title1Difference,
    sortedCollection[0],
    header,
    currentQuarter,
] as const;

const [printTwo] = [
    title1arrays,
].map((elem) => {
    return printBody(...elem)
})

export const printTopSellingSwitchTitles = 
`${printOne}
${printTwo}`;
