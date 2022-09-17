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
        value: 10.35,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 2nd Quarter         ",
        value: 11.71,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 3rd Quarter         ",
        value: 15.02,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 4th Quarter         ",
        value: 16.69,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " Q4 Last FY ",
        value: 9.22,
    },
]

const title2: Titles[] = [
    {
        title: " Super Mario Odyssey ",
        period: " 1st Quarter         ",
        value: 11.17
    },
    {
        title: " Super Mario Odyssey ",
        period: " 2nd Quarter         ",
        value: 12.17
    },
    {
        title: " Super Mario Odyssey ",
        period: " 3rd Quarter         ",
        value: 13.76
    },
    {
        title: " Super Mario Odyssey ",
        period: " 4th Quarter         ",
        value: 14.44
    },
    {
        title: " Super Mario Odyssey ",
        period: " Q4 Last FY",
        value: 10.41
    },
]

const title3: Titles[] = [
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 1st Quarter         ",
        value: 9.32,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 2nd Quarter         ",
        value: 10.28,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 3rd Quarter         ",
        value: 11.06,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 4th Quarter         ",
        value: 12.77,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " Q4 Last FY ",
        value: 8.48,
    },
]

const title4: Titles[] = [
    {
        title: " Splatoon 2 ",
        period: " 1st Quarter         ",
        value: 6.76
    },
    {
        title: " Splatoon 2 ",
        period: " 2nd Quarter         ",
        value: 7.47
    },
    {
        title: " Splatoon 2 ",
        period: " 3rd Quarter         ",
        value: 8.27 
    },
    {
        title: " Splatoon 2 ",
        period: " 4th Quarter         ",
        value: 8.70
    },
    {
        title: " Splatoon 2 ",
        period: " Q4 Last FY",
        value: 6.02
    },
]

const title5: Titles[] = [
    {
        title: " Donkey Kong Country: Tropical Freeze ",
        period: " 1st Quarter         ",
        value: 1.40
    },
    {
        title: " Donkey Kong Country: Tropical Freeze ",
        period: " 2nd Quarter         ",
        value: 1.67
    },
    {
        title: " Donkey Kong Country: Tropical Freeze ",
        period: " 3rd Quarter         ",
        value: 1.67
    },
    {
        title: " Donkey Kong Country: Tropical Freeze ",
        period: " 4th Quarter         ",
        value: 1.67
    },
    {
        title: " Donkey Kong Country: Tropical Freeze ",
        period: " Q4 Last FY",
        value: 0
    },
]

const title6: Titles[] = [
    {
        title: " Pokémon Let's Go Pikachu/Eevee ",
        period: " 1st Quarter         ",
        value: 0
    },
    {
        title: " Pokémon Let's Go Pikachu/Eevee ",
        period: " 2nd Quarter         ",
        value: 0
    },
    {
        title: " Pokémon Let's Go Pikachu/Eevee ",
        period: " 3rd Quarter         ",
        value: 10.00
    },
    {
        title: " Pokémon Let's Go Pikachu/Eevee ",
        period: " 4th Quarter         ",
        value: 10.63
    },
    {
        title: " Pokémon Let's Go Pikachu/Eevee ",
        period: " Q4 Last FY",
        value: 0
    },
]

const title7: Titles[] = [
    {
        title: " New Super Mario Bros. U Deluxe ",
        period: " 1st Quarter         ",
        value: 0
    },
    {
        title: " New Super Mario Bros. U Deluxe ",
        period: " 2nd Quarter         ",
        value: 0
    },
    {
        title: " New Super Mario Bros. U Deluxe ",
        period: " 3rd Quarter         ",
        value: 0
    },
    {
        title: " New Super Mario Bros. U Deluxe ",
        period: " 4th Quarter         ",
        value: 3.31
    },
    {
        title: " New Super Mario Bros. U Deluxe ",
        period: " Q4 Last FY",
        value: 0
    },
]

const title8: Titles[] = [
    {
        title: " Xenoblade Chronicles 2 ",
        period: " 1st Quarter         ",
        value: 1.42
    },
    {
        title: " Xenoblade Chronicles 2 ",
        period: " 2nd Quarter         ",
        value: 1.53
    },
    {
        title: " Xenoblade Chronicles 2 ",
        period: " 3rd Quarter         ",
        value: 1.53
    },
    {
        title: " Xenoblade Chronicles 2 ",
        period: " 4th Quarter         ",
        value: 1.53
    },
    {
        title: " Xenoblade Chronicles 2 ",
        period: " Q4 Last FY",
        value: 1.31
    },
]

const title9: Titles[] = [
    {
        title: " Super Mario Party ",
        period: " 1st Quarter         ",
        value: 0
    },
    {
        title: " Super Mario Party ",
        period: " 2nd Quarter         ",
        value: 0
    },
    {
        title: " Super Mario Party ",
        period: " 3rd Quarter         ",
        value: 5.30
    },
    {
        title: " Super Mario Party ",
        period: " 4th Quarter         ",
        value: 6.40
    },
    {
        title: " Super Mario Party ",
        period: " Q4 Last FY",
        value: 0
    },
]

const title10: Titles[] = [
    {
        title: " Super Smash Bros. Ultimate ",
        period: " 1st Quarter         ",
        value: 0
    },
    {
        title: " Super Smash Bros. Ultimate ",
        period: " 2nd Quarter         ",
        value: 0
    },
    {
        title: " Super Smash Bros. Ultimate ",
        period: " 3rd Quarter         ",
        value: 12.08
    },
    {
        title: " Super Smash Bros. Ultimate ",
        period: " 4th Quarter         ",
        value: 13.81
    },
    {
        title: " Super Smash Bros. Ultimate ",
        period: " Q4 Last FY",
        value: 0
    },
]

const title11: Titles[] = [
    {
        title: " 1-2-Switch ",
        period: " 1st Quarter         ",
        value: 2.45
    },
    {
        title: " 1-2-Switch ",
        period: " 2nd Quarter         ",
        value: 2.64
    },
    {
        title: " 1-2-Switch ",
        period: " 3rd Quarter         ",
        value: 2.86
    },
    {
        title: " 1-2-Switch ",
        period: " 4th Quarter         ",
        value: 2.97
    },
    {
        title: " 1-2-Switch ",
        period: " Q4 Last FY",
        value: 2.29
    },
]

const title12: Titles[] = [
    {
        title: " Kirby Star Allies ",
        period: " 1st Quarter         ",
        value: 1.89
    },
    {
        title: " Kirby Star Allies ",
        period: " 2nd Quarter         ",
        value: 2.1
    },
    {
        title: " Kirby Star Allies ",
        period: " 3rd Quarter         ",
        value: 2.42
    },
    {
        title: " Kirby Star Allies ",
        period: " 4th Quarter         ",
        value: 2.42
    },
    {
        title: " Kirby Star Allies ",
        period: " Q4 Last FY",
        value: 1.26
    },
]

const title13: Titles[] = [
    {
        title: " ARMS ",
        period: " 1st Quarter         ",
        value: 2.01
    },
    {
        title: " ARMS ",
        period: " 2nd Quarter         ",
        value: 2.1
    },
    {
        title: " ARMS ",
        period: " 3rd Quarter         ",
        value: 2.1
    },
    {
        title: " ARMS ",
        period: " 4th Quarter         ",
        value: 2.1
    },
    {
        title: " ARMS ",
        period: " Q4 Last FY",
        value: 1.85
    },
]

const title14: Titles[] = [
    {
        title: " Mario Tennis Aces ",
        period: " 1st Quarter         ",
        value: 1.38
    },
    {
        title: " Mario Tennis Aces ",
        period: " 2nd Quarter         ",
        value: 2.16
    },
    {
        title: " Mario Tennis Aces ",
        period: " 3rd Quarter         ",
        value: 2.53
    },
    {
        title: " Mario Tennis Aces ",
        period: " 4th Quarter         ",
        value: 2.64
    },
    {
        title: " Mario Tennis Aces ",
        period: " Q4 Last FY",
        value: 0
    },
]

const header: Header = {
    switchHeader: "| Switch - Top Selling Titles    |",
    units: "| Units                          |",
    fiscalYear: "| FY3/19 Cumulative   |",
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
    title11Sorted,
    title12Sorted,
    title13Sorted,
    title14Sorted,
] = sortedCollection

export const [
    title1Difference, title2Difference, title3Difference, title4Difference, title5Difference, title6Difference, title7Difference, title8Difference, title9Difference, title10Difference, title11Difference, title12Difference, title13Difference, title14Difference, 
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


const [printTwo, printThree, printFour, printFive, printSix, printSeven, printEight, printNine, printTen, printEleven, printTwelve, printThirteen, printFourteen, printFifteen] = [
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
${printEleven}
${printTwelve}
${printThirteen}
${printFourteen}
${printFifteen}`;
