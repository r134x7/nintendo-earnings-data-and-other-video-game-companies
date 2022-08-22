import { 
    Titles,
    quarterlyCalculation,
    printBody,
} from "../../../utils/top-selling-titles-logic";

const title1: Titles[] = [
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 1st Quarter         ",
        value: 37.08,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 2nd Quarter         ",
        value: 38.74,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 3rd Quarter         ",
        value: 43.35,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 4th Quarter         ",
        value: 45.33,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " Q4 Last FY ",
        value: 35.39,
    },
]

const title2: Titles[] = [
    {
        title: " Super Mario Odyssey ",
        period: " 1st Quarter         ",
        value: 21.40
    },
    {
        title: " Super Mario Odyssey ",
        period: " 2nd Quarter         ",
        value: 21.95
    },
    {
        title: " Super Mario Odyssey ",
        period: " 3rd Quarter         ",
        value: 23.02
    },
    {
        title: " Super Mario Odyssey ",
        period: " 4th Quarter         ",
        value: 23.50
    },
    {
        title: " Super Mario Odyssey ",
        period: " Q4 Last FY",
        value: 20.83
    },
]

const title3: Titles[] = [
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 1st Quarter         ",
        value: 23.20,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 2nd Quarter         ",
        value: 24.13,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 3rd Quarter         ",
        value: 25.80,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 4th Quarter         ",
        value: 26.55,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " Q4 Last FY ",
        value: 22.28,
    },
]

const title4: Titles[] = [
    {
        title: " Splatoon 2 ",
        period: " 1st Quarter         ",
        value: 12.45
    },
    {
        title: " Splatoon 2 ",
        period: " 2nd Quarter         ",
        value: 12.68
    },
    {
        title: " Splatoon 2 ",
        period: " 3rd Quarter         ",
        value: 12.68
    },
    {
        title: " Splatoon 2 ",
        period: " 4th Quarter         ",
        value: 12.68
    },
    {
        title: " Splatoon 2 ",
        period: " Q4 Last FY",
        value: 12.21
    },
]

const title5: Titles[] = [
    {
        title: " Animal Crossing: New Horizons  ",
        period: " 1st Quarter         ",
        value: 33.89
    },
    {
        title: " Animal Crossing: New Horizons  ",
        period: " 2nd Quarter         ",
        value: 34.85
    },
    {
        title: " Animal Crossing: New Horizons  ",
        period: " 3rd Quarter         ",
        value: 37.62
    },
    {
        title: " Animal Crossing: New Horizons  ",
        period: " 4th Quarter         ",
        value: 38.64
    },
    {
        title: " Animal Crossing: New Horizons  ",
        period: " Q4 Last FY",
        value: 32.63 
    },
]

const title6: Titles[] = [
    {
        title: " Pokémon Sword / Pokémon Shield ",
        period: " 1st Quarter         ",
        value: 21.85
    },
    {
        title: " Pokémon Sword / Pokémon Shield ",
        period: " 2nd Quarter         ",
        value: 22.64
    },
    {
        title: " Pokémon Sword / Pokémon Shield ",
        period: " 3rd Quarter         ",
        value: 23.90
    },
    {
        title: " Pokémon Sword / Pokémon Shield ",
        period: " 4th Quarter         ",
        value: 24.27
    },
    {
        title: " Pokémon Sword / Pokémon Shield ",
        period: " Q4 Last FY",
        value: 21.10
    },
]

const title7: Titles[] = [
    {
        title: " Pokémon Let's Go Pikachu / Pokémon Let's Go Eevee ",
        period: " 1st Quarter         ",
        value: 13.57
    },
    {
        title: " Pokémon Let's Go Pikachu / Pokémon Let's Go Eevee ",
        period: " 2nd Quarter         ",
        value: 13.83
    },
    {
        title: " Pokémon Let's Go Pikachu / Pokémon Let's Go Eevee ",
        period: " 3rd Quarter         ",
        value: 14.33
    },
    {
        title: " Pokémon Let's Go Pikachu / Pokémon Let's Go Eevee ",
        period: " 4th Quarter         ",
        value: 14.65
    },
    {
        title: " Pokémon Let's Go Pikachu / Pokémon Let's Go Eevee ",
        period: " Q4 Last FY",
        value: 13.28
    },
]

const title8: Titles[] = [
    {
        title: " Ring Fit Adventure ",
        period: " 1st Quarter         ",
        value: 11.26
    },
    {
        title: " Ring Fit Adventure ",
        period: " 2nd Quarter         ",
        value: 12.21
    },
    {
        title: " Ring Fit Adventure ",
        period: " 3rd Quarter         ",
        value: 13.53
    },
    {
        title: " Ring Fit Adventure ",
        period: " 4th Quarter         ",
        value: 14.09
    },
    {
        title: " Ring Fit Adventure ",
        period: " Q4 Last FY",
        value: 10.11
    },
]

const title9: Titles[] = [
    {
        title: " Super Mario Party ",
        period: " 1st Quarter         ",
        value: 15.72
    },
    {
        title: " Super Mario Party ",
        period: " 2nd Quarter         ",
        value: 16.48
    },
    {
        title: " Super Mario Party ",
        period: " 3rd Quarter         ",
        value: 17.39
    },
    {
        title: " Super Mario Party ",
        period: " 4th Quarter         ",
        value: 17.78
    },
    {
        title: " Super Mario Party ",
        period: " Q4 Last FY",
        value: 14.79
    },
]

const title10: Titles[] = [
    {
        title: " Super Smash Bros. Ultimate ",
        period: " 1st Quarter         ",
        value: 24.77
    },
    {
        title: " Super Smash Bros. Ultimate ",
        period: " 2nd Quarter         ",
        value: 25.71
    },
    {
        title: " Super Smash Bros. Ultimate ",
        period: " 3rd Quarter         ",
        value: 27.40
    },
    {
        title: " Super Smash Bros. Ultimate ",
        period: " 4th Quarter         ",
        value: 28.17
    },
    {
        title: " Super Smash Bros. Ultimate ",
        period: " Q4 Last FY",
        value: 23.84
    },
]

const title11: Titles[] = [
    {
        title: " Pokémon Brilliant Diamond / Pokémon Shining Pearl ",
        period: " 1st Quarter         ",
        value: 0
    },
    {
        title: " Pokémon Brilliant Diamond / Pokémon Shining Pearl ",
        period: " 2nd Quarter         ",
        value: 0
    },
    {
        title: " Pokémon Brilliant Diamond / Pokémon Shining Pearl ",
        period: " 3rd Quarter         ",
        value: 13.97
    },
    {
        title: " Pokémon Brilliant Diamond / Pokémon Shining Pearl ",
        period: " 4th Quarter         ",
        value: 14.65
    },
    {
        title: " Pokémon Brilliant Diamond / Pokémon Shining Pearl ",
        period: " Q4 Last FY",
        value: 0
    },
]