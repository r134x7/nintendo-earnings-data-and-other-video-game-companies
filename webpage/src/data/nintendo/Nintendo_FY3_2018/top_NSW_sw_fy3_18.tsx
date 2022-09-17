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
        title: " Mario Kart 8 Deluxe ",
        period: " 1st Quarter         ",
        value: 3.54,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 2nd Quarter         ",
        value: 4.42,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 3rd Quarter         ",
        value: 7.33,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 4th Quarter         ",
        value: 9.22,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " Q4 Last FY ",
        value: 0,
    },
]

const title2: Titles[] = [
    {
        title: " Super Mario Odyssey ",
        period: " 1st Quarter         ",
        value: 0 
    },
    {
        title: " Super Mario Odyssey ",
        period: " 2nd Quarter         ",
        value: 0
    },
    {
        title: " Super Mario Odyssey ",
        period: " 3rd Quarter         ",
        value: 9.07
    },
    {
        title: " Super Mario Odyssey ",
        period: " 4th Quarter         ",
        value: 10.41
    },
    {
        title: " Super Mario Odyssey ",
        period: " Q4 Last FY",
        value: 0
    },
]

const title3: Titles[] = [
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 1st Quarter         ",
        value: 3.92,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 2nd Quarter         ",
        value: 4.70,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 3rd Quarter         ",
        value: 6.70,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 4th Quarter         ",
        value: 8.48,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " Q4 Last FY ",
        value: 2.76,
    },
]

const title4: Titles[] = [
    {
        title: " Splatoon 2 ",
        period: " 1st Quarter         ",
        value: 0
    },
    {
        title: " Splatoon 2 ",
        period: " 2nd Quarter         ",
        value: 3.61
    },
    {
        title: " Splatoon 2 ",
        period: " 3rd Quarter         ",
        value: 4.91
    },
    {
        title: " Splatoon 2 ",
        period: " 4th Quarter         ",
        value: 6.02
    },
    {
        title: " Splatoon 2 ",
        period: " Q4 Last FY",
        value: 0 
    },
]

const title5: Titles[] = [
    {
        title: " Xenoblade Chronicles 2 ",
        period: " 1st Quarter         ",
        value: 0
    },
    {
        title: " Xenoblade Chronicles 2 ",
        period: " 2nd Quarter         ",
        value: 0
    },
    {
        title: " Xenoblade Chronicles 2 ",
        period: " 3rd Quarter         ",
        value: 1.06
    },
    {
        title: " Xenoblade Chronicles 2 ",
        period: " 4th Quarter         ",
        value: 1.31
    },
    {
        title: " Xenoblade Chronicles 2 ",
        period: " Q4 Last FY",
        value: 0
    },
]

const title6: Titles[] = [
    {
        title: " ARMS ",
        period: " 1st Quarter         ",
        value: 1.18
    },
    {
        title: " ARMS ",
        period: " 2nd Quarter         ",
        value: 1.35
    },
    {
        title: " ARMS ",
        period: " 3rd Quarter         ",
        value: 1.61
    },
    {
        title: " ARMS ",
        period: " 4th Quarter         ",
        value: 1.85
    },
    {
        title: " ARMS ",
        period: " Q4 Last FY",
        value: 0
    },
]

const title7: Titles[] = [
    {
        title: " 1-2-Switch ",
        period: " 1st Quarter         ",
        value: 1.22
    },
    {
        title: " 1-2-Switch ",
        period: " 2nd Quarter         ",
        value: 1.37
    },
    {
        title: " 1-2-Switch ",
        period: " 3rd Quarter         ",
        value: 1.88
    },
    {
        title: " 1-2-Switch ",
        period: " 4th Quarter         ",
        value: 2.29
    },
    {
        title: " 1-2-Switch ",
        period: " Q4 Last FY",
        value: 0
    },
]

const title8: Titles[] = [
    {
        title: " Kirby Star Allies ",
        period: " 1st Quarter         ",
        value: 0
    },
    {
        title: " Kirby Star Allies ",
        period: " 2nd Quarter         ",
        value: 0
    },
    {
        title: " Kirby Star Allies ",
        period: " 3rd Quarter         ",
        value: 0
    },
    {
        title: " Kirby Star Allies ",
        period: " 4th Quarter         ",
        value: 1.26
    },
    {
        title: " Kirby Star Allies ",
        period: " Q4 Last FY",
        value: 0
    },
]

const header: Header = {
    switchHeader: "| Switch - Top Selling Titles    |",
    units: "| Units                          |",
    fiscalYear: "| FY3/18 Cumulative   |",
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
] as const;

export const sortedCollection = collection.map((elem, index, array) => {
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
    title1Sorted,
    title2Sorted,
    title3Sorted,
    title4Sorted,
    title5Sorted,
    title6Sorted,
    title7Sorted,
    title8Sorted,
] = sortedCollection

export const [
    title1Difference, title2Difference, title3Difference, title4Difference, title5Difference, title6Difference, title7Difference, title8Difference, 
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

const title2arrays = [
    title2Difference,
    title2Difference,
    sortedCollection[1],
    header,
    currentQuarter,
] as const;

const title3arrays = [
    title3Difference,
    title3Difference,
    sortedCollection[2],
    header,
    currentQuarter,
] as const;

const title4arrays = [
    title4Difference,
    title4Difference,
    sortedCollection[3],
    header,
    currentQuarter,
] as const;

const title5arrays = [
    title5Difference,
    title5Difference,
    sortedCollection[4],
    header,
    currentQuarter,
] as const;

const title6arrays = [
    title6Difference,
    title6Difference,
    sortedCollection[5],
    header,
    currentQuarter,
] as const;

const title7arrays = [
    title7Difference,
    title7Difference,
    sortedCollection[6],
    header,
    currentQuarter,
] as const;

const title8arrays = [
    title8Difference,
    title8Difference,
    sortedCollection[7],
    header,
    currentQuarter,
] as const;

const [printTwo, printThree, printFour, printFive, printSix, printSeven, printEight, printNine,] = [
    title1arrays,
    title2arrays,
    title3arrays,
    title4arrays,
    title5arrays,
    title6arrays,
    title7arrays,
    title8arrays,
].map((elem, index, array) => {
    return printBody(...elem)
})

export const printTopSellingSwitchTitles = 
`${printOne}
${printTwo}
${printThree}
${printFour}
${printFive}
${printSix}
${printSeven}
${printEight}
${printNine}`;
