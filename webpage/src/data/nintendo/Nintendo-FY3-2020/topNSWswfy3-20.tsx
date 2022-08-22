import { 
    Titles,
    Header,
    quarterlyCalculation,
    printHead,
    printBody,
} from "../../../utils/top-selling-titles-logic";

const currentQuarter = 4;

const title1: Titles[] = [
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 1st Quarter         ",
        value: 17.89,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 2nd Quarter         ",
        value: 19.01,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 3rd Quarter         ",
        value: 22.96,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 4th Quarter         ",
        value: 24.77,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " Q4 Last FY ",
        value: 16.69,
    },
]

const title2: Titles[] = [
    {
        title: " Super Mario Odyssey ",
        period: " 1st Quarter         ",
        value: 14.94
    },
    {
        title: " Super Mario Odyssey ",
        period: " 2nd Quarter         ",
        value: 15.38
    },
    {
        title: " Super Mario Odyssey ",
        period: " 3rd Quarter         ",
        value: 16.59
    },
    {
        title: " Super Mario Odyssey ",
        period: " 4th Quarter         ",
        value: 17.41
    },
    {
        title: " Super Mario Odyssey ",
        period: " Q4 Last FY",
        value: 14.44 
    },
]

const title3: Titles[] = [
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 1st Quarter         ",
        value: 13.61,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 2nd Quarter         ",
        value: 14.54,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 3rd Quarter         ",
        value: 16.34,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 4th Quarter         ",
        value: 17.41,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " Q4 Last FY ",
        value: 12.77,
    },
]

const title4: Titles[] = [
    {
        title: " Splatoon 2 ",
        period: " 1st Quarter         ",
        value: 9.02
    },
    {
        title: " Splatoon 2 ",
        period: " 2nd Quarter         ",
        value: 9.28
    },
    {
        title: " Splatoon 2 ",
        period: " 3rd Quarter         ",
        value: 9.81
    },
    {
        title: " Splatoon 2 ",
        period: " 4th Quarter         ",
        value: 10.13
    },
    {
        title: " Splatoon 2 ",
        period: " Q4 Last FY",
        value: 8.70
    },
]

const title5: Titles[] = [
    {
        title: " Animal Crossing: New Horizons  ",
        period: " 1st Quarter         ",
        value: 0
    },
    {
        title: " Animal Crossing: New Horizons  ",
        period: " 2nd Quarter         ",
        value: 0
    },
    {
        title: " Animal Crossing: New Horizons  ",
        period: " 3rd Quarter         ",
        value: 0
    },
    {
        title: " Animal Crossing: New Horizons  ",
        period: " 4th Quarter         ",
        value: 11.77
    },
    {
        title: " Animal Crossing: New Horizons  ",
        period: " Q4 Last FY",
        value: 0
    },
]

const title6: Titles[] = [
    {
        title: " Pokémon Sword / Pokémon Shield ",
        period: " 1st Quarter         ",
        value: 0
    },
    {
        title: " Pokémon Sword / Pokémon Shield ",
        period: " 2nd Quarter         ",
        value: 0
    },
    {
        title: " Pokémon Sword / Pokémon Shield ",
        period: " 3rd Quarter         ",
        value: 16.06
    },
    {
        title: " Pokémon Sword / Pokémon Shield ",
        period: " 4th Quarter         ",
        value: 17.37 
    },
    {
        title: " Pokémon Sword / Pokémon Shield ",
        period: " Q4 Last FY",
        value: 0
    },
]

const title7: Titles[] = [
    {
        title: " Pokémon Let's Go Pikachu / Pokémon Let's Go Eevee ",
        period: " 1st Quarter         ",
        value: 10.98
    },
    {
        title: " Pokémon Let's Go Pikachu / Pokémon Let's Go Eevee ",
        period: " 2nd Quarter         ",
        value: 11.28
    },
    {
        title: " Pokémon Let's Go Pikachu / Pokémon Let's Go Eevee ",
        period: " 3rd Quarter         ",
        value: 11.76
    },
    {
        title: " Pokémon Let's Go Pikachu / Pokémon Let's Go Eevee ",
        period: " 4th Quarter         ",
        value: 11.97
    },
    {
        title: " Pokémon Let's Go Pikachu / Pokémon Let's Go Eevee ",
        period: " Q4 Last FY",
        value: 10.63
    },
]

const title8: Titles[] = [
    {
        title: " New Super Mario Bros. U Deluxe ",
        period: " 1st Quarter         ",
        value: 4.10
    },
    {
        title: " New Super Mario Bros. U Deluxe ",
        period: " 2nd Quarter         ",
        value: 4.59
    },
    {
        title: " New Super Mario Bros. U Deluxe ",
        period: " 3rd Quarter         ",
        value: 5.85
    },
    {
        title: " New Super Mario Bros. U Deluxe ",
        period: " 4th Quarter         ",
        value: 6.60
    },
    {
        title: " New Super Mario Bros. U Deluxe ",
        period: " Q4 Last FY",
        value: 3.31
    },
]

const title9: Titles[] = [
    {
        title: " Super Mario Party ",
        period: " 1st Quarter         ",
        value: 6.99
    },
    {
        title: " Super Mario Party ",
        period: " 2nd Quarter         ",
        value: 7.59
    },
    {
        title: " Super Mario Party ",
        period: " 3rd Quarter         ",
        value: 9.12
    },
    {
        title: " Super Mario Party ",
        period: " 4th Quarter         ",
        value: 10.10
    },
    {
        title: " Super Mario Party ",
        period: " Q4 Last FY",
        value: 6.4
    },
]

const title10: Titles[] = [
    {
        title: " Super Smash Bros. Ultimate ",
        period: " 1st Quarter         ",
        value: 14.73
    },
    {
        title: " Super Smash Bros. Ultimate ",
        period: " 2nd Quarter         ",
        value: 15.71
    },
    {
        title: " Super Smash Bros. Ultimate ",
        period: " 3rd Quarter         ",
        value: 17.68
    },
    {
        title: " Super Smash Bros. Ultimate ",
        period: " 4th Quarter         ",
        value: 18.84
    },
    {
        title: " Super Smash Bros. Ultimate ",
        period: " Q4 Last FY",
        value: 13.81
    },
]

const title11: Titles[] = [
    {
        title: " 1-2-Switch ",
        period: " 1st Quarter         ",
        value: 3.01
    },
    {
        title: " 1-2-Switch ",
        period: " 2nd Quarter         ",
        value: 3.01
    },
    {
        title: " 1-2-Switch ",
        period: " 3rd Quarter         ",
        value: 3.01
    },
    {
        title: " 1-2-Switch ",
        period: " 4th Quarter         ",
        value: 3.01
    },
    {
        title: " 1-2-Switch ",
        period: " Q4 Last FY",
        value: 2.97
    },
]

const title12: Titles[] = [
    {
        title: " Mario Tennis Aces ",
        period: " 1st Quarter         ",
        value: 2.75
    },
    {
        title: " Mario Tennis Aces ",
        period: " 2nd Quarter         ",
        value: 2.75
    },
    {
        title: " Mario Tennis Aces ",
        period: " 3rd Quarter         ",
        value: 2.75
    },
    {
        title: " Mario Tennis Aces ",
        period: " 4th Quarter         ",
        value: 2.75
    },
    {
        title: " Mario Tennis Aces ",
        period: " Q4 Last FY",
        value: 2.64
    },
]

const title13: Titles[] = [
    {
        title: " The Legend of Zelda: Link's Awakening ",
        period: " 1st Quarter         ",
        value: 0
    },
    {
        title: " The Legend of Zelda: Link's Awakening ",
        period: " 2nd Quarter         ",
        value: 3.13
    },
    {
        title: " The Legend of Zelda: Link's Awakening ",
        period: " 3rd Quarter         ",
        value: 3.13
    },
    {
        title: " The Legend of Zelda: Link's Awakening ",
        period: " 4th Quarter         ",
        value: 3.13
    },
    {
        title: " The Legend of Zelda: Link's Awakening ",
        period: " Q4 Last FY",
        value: 0
    },
]

const title14: Titles[] = [
    {
        title: " Super Mario Maker 2 ",
        period: " 1st Quarter         ",
        value: 2.42
    },
    {
        title: " Super Mario Maker 2 ",
        period: " 2nd Quarter         ",
        value: 3.93
    },
    {
        title: " Super Mario Maker 2 ",
        period: " 3rd Quarter         ",
        value: 3.93
    },
    {
        title: " Super Mario Maker 2 ",
        period: " 4th Quarter         ",
        value: 3.93
    },
    {
        title: " Super Mario Maker 2 ",
        period: " Q4 Last FY",
        value: 0
    },
]

const title15: Titles[] = [
    {
        title: " Luigi's Mansion 3 ",
        period: " 1st Quarter         ",
        value: 0
    },
    {
        title: " Luigi's Mansion 3 ",
        period: " 2nd Quarter         ",
        value: 0 
    },
    {
        title: " Luigi's Mansion 3 ",
        period: " 3rd Quarter         ",
        value: 5.37
    },
    {
        title: " Luigi's Mansion 3 ",
        period: " 4th Quarter         ",
        value: 5.37
    },
    {
        title: " Luigi's Mansion 3 ",
        period: " Q4 Last FY",
        value: 0
    },
]

const header: Header = {
    switchHeader: "| Switch - Top Selling Titles    |",
    units: "| Units                          |",
    fiscalYear: "| FY3/20 Cumulative   |",
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
    title11,
    title12,
    title13,
    title14,
    title15,
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
    title1Difference, title2Difference, title3Difference, title4Difference, title5Difference, title6Difference, title7Difference, title8Difference, title9Difference, title10Difference, title11Difference, title12Difference, title13Difference, title14Difference, title15Difference, 
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

const title11arrays = [
    title11Difference,
    title11Difference,
    sortedCollection[10],
    header,
    currentQuarter,
] as const;

const title12arrays = [
    title12Difference,
    title12Difference,
    sortedCollection[11],
    header,
    currentQuarter,
] as const;

const title13arrays = [
    title13Difference,
    title13Difference,
    sortedCollection[12],
    header,
    currentQuarter,
] as const;

const title14arrays = [
    title14Difference,
    title14Difference,
    sortedCollection[13],
    header,
    currentQuarter,
] as const;

const title15arrays = [
    title15Difference,
    title15Difference,
    sortedCollection[14],
    header,
    currentQuarter,
] as const;


const [printTwo, printThree, printFour, printFive, printSix, printSeven, printEight, printNine, printTen, printEleven, printTwelve, printThirteen, printFourteen, printFifteen, printSixteen, ] = [
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
    title11arrays,
    title12arrays,
    title13arrays,
    title14arrays,
    title15arrays,
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
${printEleven}
${printTwelve}
${printThirteen}
${printFourteen}
${printFifteen}
${printSixteen}`;

