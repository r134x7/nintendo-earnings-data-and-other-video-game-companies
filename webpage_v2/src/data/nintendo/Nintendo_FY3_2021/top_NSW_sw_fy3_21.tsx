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
        value: 26.74,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 2nd Quarter         ",
        value: 28.99,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 3rd Quarter         ",
        value: 33.41,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 4th Quarter         ",
        value: 35.39,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " Q4 Last FY ",
        value: 24.77,
    },
]

const title2: Titles[] = [
    {
        title: " Super Mario Odyssey ",
        period: " 1st Quarter         ",
        value: 18.34
    },
    {
        title: " Super Mario Odyssey ",
        period: " 2nd Quarter         ",
        value: 18.99
    },
    {
        title: " Super Mario Odyssey ",
        period: " 3rd Quarter         ",
        value: 20.23
    },
    {
        title: " Super Mario Odyssey ",
        period: " 4th Quarter         ",
        value: 20.83
    },
    {
        title: " Super Mario Odyssey ",
        period: " Q4 Last FY",
        value: 17.41
    },
]

const title3: Titles[] = [
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 1st Quarter         ",
        value: 18.60,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 2nd Quarter         ",
        value: 19.74,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 3rd Quarter         ",
        value: 21.45,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 4th Quarter         ",
        value: 22.28,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " Q4 Last FY ",
        value: 17.41,
    },
]

const title4: Titles[] = [
    {
        title: " Splatoon 2 ",
        period: " 1st Quarter         ",
        value: 10.71
    },
    {
        title: " Splatoon 2 ",
        period: " 2nd Quarter         ",
        value: 11.27
    },
    {
        title: " Splatoon 2 ",
        period: " 3rd Quarter         ",
        value: 11.9
    },
    {
        title: " Splatoon 2 ",
        period: " 4th Quarter         ",
        value: 12.21
    },
    {
        title: " Splatoon 2 ",
        period: " Q4 Last FY",
        value: 10.13
    },
]

const title5: Titles[] = [
    {
        title: " Animal Crossing: New Horizons  ",
        period: " 1st Quarter         ",
        value: 22.40
    },
    {
        title: " Animal Crossing: New Horizons  ",
        period: " 2nd Quarter         ",
        value: 26.04
    },
    {
        title: " Animal Crossing: New Horizons  ",
        period: " 3rd Quarter         ",
        value: 31.18
    },
    {
        title: " Animal Crossing: New Horizons  ",
        period: " 4th Quarter         ",
        value: 32.63
    },
    {
        title: " Animal Crossing: New Horizons  ",
        period: " Q4 Last FY",
        value: 11.77
    },
]

const title6: Titles[] = [
    {
        title: " Pokémon Sword / Pokémon Shield ",
        period: " 1st Quarter         ",
        value: 18.22
    },
    {
        title: " Pokémon Sword / Pokémon Shield ",
        period: " 2nd Quarter         ",
        value: 19.02 
    },
    {
        title: " Pokémon Sword / Pokémon Shield ",
        period: " 3rd Quarter         ",
        value: 20.35
    },
    {
        title: " Pokémon Sword / Pokémon Shield ",
        period: " 4th Quarter         ",
        value: 21.10
    },
    {
        title: " Pokémon Sword / Pokémon Shield ",
        period: " Q4 Last FY",
        value: 17.37 
    },
]

const title7: Titles[] = [
    {
        title: " Pokémon Let's Go Pikachu / Pokémon Let's Go Eevee ",
        period: " 1st Quarter         ",
        value: 12.20
    },
    {
        title: " Pokémon Let's Go Pikachu / Pokémon Let's Go Eevee ",
        period: " 2nd Quarter         ",
        value: 12.49
    },
    {
        title: " Pokémon Let's Go Pikachu / Pokémon Let's Go Eevee ",
        period: " 3rd Quarter         ",
        value: 13.00
    },
    {
        title: " Pokémon Let's Go Pikachu / Pokémon Let's Go Eevee ",
        period: " 4th Quarter         ",
        value: 13.28
    },
    {
        title: " Pokémon Let's Go Pikachu / Pokémon Let's Go Eevee ",
        period: " Q4 Last FY",
        value: 11.97
    },
]

const title8: Titles[] = [
    {
        title: " New Super Mario Bros. U Deluxe ",
        period: " 1st Quarter         ",
        value: 7.44
    },
    {
        title: " New Super Mario Bros. U Deluxe ",
        period: " 2nd Quarter         ",
        value: 8.32
    },
    {
        title: " New Super Mario Bros. U Deluxe ",
        period: " 3rd Quarter         ",
        value: 9.82
    },
    {
        title: " New Super Mario Bros. U Deluxe ",
        period: " 4th Quarter         ",
        value: 10.44
    },
    {
        title: " New Super Mario Bros. U Deluxe ",
        period: " Q4 Last FY",
        value: 6.60
    },
]

const title9: Titles[] = [
    {
        title: " Super Mario Party ",
        period: " 1st Quarter         ",
        value: 10.94
    },
    {
        title: " Super Mario Party ",
        period: " 2nd Quarter         ",
        value: 12.1
    },
    {
        title: " Super Mario Party ",
        period: " 3rd Quarter         ",
        value: 13.82
    },
    {
        title: " Super Mario Party ",
        period: " 4th Quarter         ",
        value: 14.79
    },
    {
        title: " Super Mario Party ",
        period: " Q4 Last FY",
        value: 10.10
    },
]

const title10: Titles[] = [
    {
        title: " Super Smash Bros. Ultimate ",
        period: " 1st Quarter         ",
        value: 19.99
    },
    {
        title: " Super Smash Bros. Ultimate ",
        period: " 2nd Quarter         ",
        value: 21.10
    },
    {
        title: " Super Smash Bros. Ultimate ",
        period: " 3rd Quarter         ",
        value: 22.85
    },
    {
        title: " Super Smash Bros. Ultimate ",
        period: " 4th Quarter         ",
        value: 23.84
    },
    {
        title: " Super Smash Bros. Ultimate ",
        period: " Q4 Last FY",
        value: 18.84
    },
]

const header: Header = {
    switchHeader: "| Switch - Top Selling Titles    |",
    units: "| Units                          |",
    fiscalYear: "| FY3/21 Cumulative   |",
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
    title1Difference, title2Difference, title3Difference, title4Difference, title5Difference, title6Difference, title7Difference, title8Difference, title9Difference, title10Difference, 
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

const [printTwo, printThree, printFour, printFive, printSix, printSeven, printEight, printNine, printTen, printEleven] = [
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
].map((elem) => {
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
