import { 
    Titles,
    Header,
    quarterlyCalculation,
    printHead,
    printBody,
} from "../../../utils/top_selling_titles_logic";

const currentQuarter = 2;

const title1: Titles[] = [
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 1st Quarter         ",
        value: 46.82,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 2nd Quarter         ",
        value: 48.41,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 3rd Quarter         ",
        value: 48.41,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 4th Quarter         ",
        value: 48.41,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " Q4 Last FY ",
        value: 45.33,
    },
]

const title2: Titles[] = [
    {
        title: " Super Mario Odyssey ",
        period: " 1st Quarter         ",
        value: 23.93,
    },
    {
        title: " Super Mario Odyssey ",
        period: " 2nd Quarter         ",
        value: 24.40,
    },
    {
        title: " Super Mario Odyssey ",
        period: " 3rd Quarter         ",
        value: 24.40,
    },
    {
        title: " Super Mario Odyssey ",
        period: " 4th Quarter         ",
        value: 24.40,
    },
    {
        title: " Super Mario Odyssey ",
        period: " Q4 Last FY",
        value: 23.50,
    },
]

const title3: Titles[] = [
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 1st Quarter         ",
        value: 27.14,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 2nd Quarter         ",
        value: 27.79,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 3rd Quarter         ",
        value: 27.79,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 4th Quarter         ",
        value: 27.79,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " Q4 Last FY ",
        value: 26.55,
    },
]

const title4: Titles[] = [
    {
        title: " Pokémon Brilliant Diamond / Pokémon Shining Pearl ",
        period: " 1st Quarter         ",
        value: 14.79,
    },
    {
        title: " Pokémon Brilliant Diamond / Pokémon Shining Pearl ",
        period: " 2nd Quarter         ",
        value: 14.92,
    },
    {
        title: " Pokémon Brilliant Diamond / Pokémon Shining Pearl ",
        period: " 3rd Quarter         ",
        value: 14.92,
    },
    {
        title: " Pokémon Brilliant Diamond / Pokémon Shining Pearl ",
        period: " 4th Quarter         ",
        value: 14.92,
    },
    {
        title: " Pokémon Brilliant Diamond / Pokémon Shining Pearl ",
        period: " Q4 Last FY",
        value: 14.65
    },
]

const title5: Titles[] = [
    {
        title: " Animal Crossing: New Horizons  ",
        period: " 1st Quarter         ",
        value: 39.38,
    },
    {
        title: " Animal Crossing: New Horizons  ",
        period: " 2nd Quarter         ",
        value: 40.17,
    },
    {
        title: " Animal Crossing: New Horizons  ",
        period: " 3rd Quarter         ",
        value: 40.17,
    },
    {
        title: " Animal Crossing: New Horizons  ",
        period: " 4th Quarter         ",
        value: 40.17,
    },
    {
        title: " Animal Crossing: New Horizons  ",
        period: " Q4 Last FY",
        value: 38.64,
    },
]

const title6: Titles[] = [
    {
        title: " Pokémon Sword / Pokémon Shield ",
        period: " 1st Quarter         ",
        value: 24.50,
    },
    {
        title: " Pokémon Sword / Pokémon Shield ",
        period: " 2nd Quarter         ",
        value: 25.37,
    },
    {
        title: " Pokémon Sword / Pokémon Shield ",
        period: " 3rd Quarter         ",
        value: 25.37,
    },
    {
        title: " Pokémon Sword / Pokémon Shield ",
        period: " 4th Quarter         ",
        value: 25.37,
    },
    {
        title: " Pokémon Sword / Pokémon Shield ",
        period: " Q4 Last FY",
        value: 24.27,
    },
]

const title7: Titles[] = [
    {
        title: " Pokémon Let's Go Pikachu / Pokémon Let's Go Eevee ",
        period: " 1st Quarter         ",
        value: 14.66,
    },
    {
        title: " Pokémon Let's Go Pikachu / Pokémon Let's Go Eevee ",
        period: " 2nd Quarter         ",
        value: 14.81,
    },
    {
        title: " Pokémon Let's Go Pikachu / Pokémon Let's Go Eevee ",
        period: " 3rd Quarter         ",
        value: 14.81,
    },
    {
        title: " Pokémon Let's Go Pikachu / Pokémon Let's Go Eevee ",
        period: " 4th Quarter         ",
        value: 14.81,
    },
    {
        title: " Pokémon Let's Go Pikachu / Pokémon Let's Go Eevee ",
        period: " Q4 Last FY",
        value: 14.65,
    },
]

const title8: Titles[] = [
    {
        title: " Ring Fit Adventure ",
        period: " 1st Quarter         ",
        value: 14.54,
    },
    {
        title: " Ring Fit Adventure ",
        period: " 2nd Quarter         ",
        value: 14.87,
    },
    {
        title: " Ring Fit Adventure ",
        period: " 3rd Quarter         ",
        value: 14.87,
    },
    {
        title: " Ring Fit Adventure ",
        period: " 4th Quarter         ",
        value: 14.87,
    },
    {
        title: " Ring Fit Adventure ",
        period: " Q4 Last FY",
        value: 14.09,
    },
]

const title9: Titles[] = [
    {
        title: " Super Mario Party ",
        period: " 1st Quarter         ",
        value: 18.06,
    },
    {
        title: " Super Mario Party ",
        period: " 2nd Quarter         ",
        value: 18.35,
    },
    {
        title: " Super Mario Party ",
        period: " 3rd Quarter         ",
        value: 18.35,
    },
    {
        title: " Super Mario Party ",
        period: " 4th Quarter         ",
        value: 18.35,
    },
    {
        title: " Super Mario Party ",
        period: " Q4 Last FY",
        value: 17.78,
    },
]

const title10: Titles[] = [
    {
        title: " Super Smash Bros. Ultimate ",
        period: " 1st Quarter         ",
        value: 28.82,
    },
    {
        title: " Super Smash Bros. Ultimate ",
        period: " 2nd Quarter         ",
        value: 29.53,
    },
    {
        title: " Super Smash Bros. Ultimate ",
        period: " 3rd Quarter         ",
        value: 29.53,
    },
    {
        title: " Super Smash Bros. Ultimate ",
        period: " 4th Quarter         ",
        value: 29.53,
    },
    {
        title: " Super Smash Bros. Ultimate ",
        period: " Q4 Last FY",
        value: 28.17,
    },
]

// const title11: Titles[] = [
//     {
//         title: "",
//         period: " 1st Quarter         ",
//         value: 0
//     },
//     {
//         title: "",
//         period: " 2nd Quarter         ",
//         value: 0
//     },
//     {
//         title: "",
//         period: " 3rd Quarter         ",
//         value: 0,
//     },
//     {
//         title: "",
//         period: " 4th Quarter         ",
//         value: 0,
//     },
//     {
//         title: "",
//         period: " Q4 Last FY",
//         value: 0
//     },
// ]

const header: Header = {
    switchHeader: "| Switch - Top Selling Titles    |",
    units: "| Units                          |",
    fiscalYear: "| FY3/23 Cumulative   |",
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
    title10,
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
    title1Sorted,
    title2Sorted,
    title3Sorted,
    title4Sorted,
    title5Sorted,
    title6Sorted,
    title7Sorted,
    title8Sorted,
    title9Sorted,
    title10Sorted,
] = sortedCollection

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
    title10Difference,
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

const title9arrays = [
    title9Difference,
    title9Difference,
    sortedCollection[8],
    header,
    currentQuarter,
] as const;

const title10arrays = [
    title10Difference,
    title10Difference,
    sortedCollection[9],
    header,
    currentQuarter,
] as const;

// const title11arrays = [
//     title11Difference,
//     title11Difference,
//     sortedCollection[10],
//     header,
//     currentQuarter,
// ] as const;

const [printTwo, printThree, printFour, printFive, printSix, printSeven, printEight, printNine, printTen, printEleven, ] = [
    title1arrays,
    title2arrays,
    title3arrays,
    title4arrays,
    title5arrays,
    title6arrays,
    title7arrays,
    title8arrays,
    title9arrays,
    title10arrays,
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
${printNine}
${printTen}
${printEleven}`;
