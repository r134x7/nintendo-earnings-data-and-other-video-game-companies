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
        valueA: 20,
        regionB: " Overseas",
        valueB: 161,
        regionC: "   WW FY ",
        valueC: 181,
        regionD: "  WW LTD ",
        valueD: 1028,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ",
        period: " 3rd Quarter  ",
        regionA: "   Japan ",
        valueA: 37,
        regionB: " Overseas",
        valueB: 284,
        regionC: "   WW FY ",
        valueC: 321,
        regionD: "  WW LTD ",
        valueD: 1168,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ",
        period: " 4th Quarter  ",
        regionA: "   Japan ",
        valueA: 47,
        regionB: " Overseas",
        valueB: 383,
        regionC: "   WW FY ",
        valueC: 430,
        regionD: "  WW LTD ",
        valueD: 1277,
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
        valueA: 17,
        regionB: " Overseas",
        valueB: 96,
        regionC: "   WW FY ",
        valueC: 113,
        regionD: "  WW LTD ",
        valueD: 1035,
    },
    {
        title: " Mario Kart 8 Deluxe ", 
        period: " 2nd Quarter  ",
        regionA: "   Japan ",
        valueA: 40,
        regionB: " Overseas",
        valueB: 209,
        regionC: "   WW FY ",
        valueC: 249,
        regionD: "  WW LTD ",
        valueD: 1171,
    },
    {
        title: " Mario Kart 8 Deluxe ", 
        period: " 3rd Quarter  ",
        regionA: "   Japan ",
        valueA: 71,
        regionB: " Overseas",
        valueB: 509,
        regionC: "   WW FY ",
        valueC: 580,
        regionD: "  WW LTD ",
        valueD: 1502,
    },
    {
        title: " Mario Kart 8 Deluxe ", 
        period: " 4th Quarter  ",
        regionA: "   Japan ",
        valueA: 89,
        regionB: " Overseas",
        valueB: 657,
        regionC: "   WW FY ",
        valueC: 747,
        regionD: "  WW LTD ",
        valueD: 1669,
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
        valueA: 47,
        regionB: " Overseas",
        valueB: 98,
        regionC: "   WW FY ",
        valueC: 145,
        regionD: "  WW LTD ",
        valueD: 747,
    },
    {
        title: " Splatoon 2 ",
        period: " 3rd Quarter  ",
        regionA: "   Japan ",
        valueA: 72,
        regionB: " Overseas",
        valueB: 153,
        regionC: "   WW FY ",
        valueC: 225,
        regionD: "  WW LTD ",
        valueD: 827,
    },
    {
        title: " Splatoon 2 ",
        period: " 4th Quarter  ",
        regionA: "   Japan ",
        valueA: 83,
        regionB: " Overseas",
        valueB: 186,
        regionC: "   WW FY ",
        valueC: 269,
        regionD: "  WW LTD ",
        valueD: 870,
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
        valueA: 15,
        regionB: " Overseas",
        valueB: 162,
        regionC: "   WW FY ",
        valueC: 176,
        regionD: "  WW LTD ",
        valueD: 1217,
    },
    {
        title: " Super Mario Odyssey ",
        period: " 3rd Quarter  ",
        regionA: "   Japan ",
        valueA: 29,
        regionB: " Overseas",
        valueB: 306,
        regionC: "   WW FY ",
        valueC: 335,
        regionD: "  WW LTD ",
        valueD: 1376,
    },
    {
        title: " Super Mario Odyssey ",
        period: " 4th Quarter  ",
        regionA: "   Japan ",
        valueA: 34,
        regionB: " Overseas",
        valueB: 370,
        regionC: "   WW FY ",
        valueC: 404,
        regionD: "  WW LTD ",
        valueD: 1444,
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
        valueA: 33,
        regionB: " Overseas",
        valueB: 83,
        regionC: "   WW FY ",
        valueC: 116,
        regionD: "  WW LTD ",
        valueD: 242,
    },
    {
        title: " Kirby Star Allies ",
        period: " 4th Quarter  ",
        regionA: "   Japan ",
        valueA: 36,
        regionB: " Overseas",
        valueB: 94,
        regionC: "   WW FY ",
        valueC: 130,
        regionD: "  WW LTD ",
        valueD: 256,
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

const title10: Titles[] = [
    {
        title: " Donkey Kong Country: Tropical Freeze ",
        period: " 1st Quarter  ",
        regionA: "   Japan ",
        valueA: 24,
        regionB: " Overseas",
        valueB: 116,
        regionC: "   WW FY ",
        valueC: 140,
        regionD: "  WW LTD ",
        valueD: 140,
    },
    {
        title: " Donkey Kong Country: Tropical Freeze ",
        period: " 2nd Quarter  ",
        regionA: "   Japan ",
        valueA: 26,
        regionB: " Overseas",
        valueB: 141,
        regionC: "   WW FY ",
        valueC: 167,
        regionD: "  WW LTD ",
        valueD: 167,
    },
    {
        title: " Donkey Kong Country: Tropical Freeze ",
        period: " 3rd Quarter  ",
        regionA: "   Japan ",
        valueA: 28,
        regionB: " Overseas",
        valueB: 179,
        regionC: "   WW FY ",
        valueC: 208,
        regionD: "  WW LTD ",
        valueD: 208,
    },
    {
        title: " Donkey Kong Country: Tropical Freeze ",
        period: " 4th Quarter  ",
        regionA: "   Japan ",
        valueA: 29,
        regionB: " Overseas",
        valueB: 196,
        regionC: "   WW FY ",
        valueC: 225,
        regionD: "  WW LTD ",
        valueD: 225,
    },
    {
        title: " Donkey Kong Country: Tropical Freeze ",
        period:" Last FY Total ", 
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

const title11: Titles[] = [
    {
        title: " Mario Tennis Aces ",
        period: " 1st Quarter  ",
        regionA: "   Japan ",
        valueA: 30,
        regionB: " Overseas",
        valueB: 108,
        regionC: "   WW FY ",
        valueC: 138,
        regionD: "  WW LTD ",
        valueD: 138,
    },
    {
        title: " Mario Tennis Aces ",
        period: " 2nd Quarter  ",
        regionA: "   Japan ",
        valueA: 46,
        regionB: " Overseas",
        valueB: 170,
        regionC: "   WW FY ",
        valueC: 216,
        regionD: "  WW LTD ",
        valueD: 216,
    },
    {
        title: " Mario Tennis Aces ",
        period: " 3rd Quarter  ",
        regionA: "   Japan ",
        valueA: 52,
        regionB: " Overseas",
        valueB: 200,
        regionC: "   WW FY ",
        valueC: 253,
        regionD: "  WW LTD ",
        valueD: 253,
    },
    {
        title: " Mario Tennis Aces ",
        period: " 4th Quarter  ",
        regionA: "   Japan ",
        valueA: 55,
        regionB: " Overseas",
        valueB: 209,
        regionC: "   WW FY ",
        valueC: 264,
        regionD: "  WW LTD ",
        valueD: 264,
    },
    {
        title: " Mario Tennis Aces ",
        period:" Last FY Total ", 
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

const title12: Titles[] = [
    {
        title: " Super Smash Bros. Ultimate ",
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
        title: " Super Smash Bros. Ultimate ",
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
        title: " Super Smash Bros. Ultimate ",
        period: " 3rd Quarter  ",
        regionA: "   Japan ",
        valueA: 317,
        regionB: " Overseas",
        valueB: 892,
        regionC: "   WW FY ",
        valueC: 1208,
        regionD: "  WW LTD ",
        valueD: 1208,
    },
    {
        title: " Super Smash Bros. Ultimate ",
        period: " 4th Quarter  ",
        regionA: "   Japan ",
        valueA: 353,
        regionB: " Overseas",
        valueB: 1028,
        regionC: "   WW FY ",
        valueC: 1381,
        regionD: "  WW LTD ",
        valueD: 1381,
    },
    {
        title: " Super Smash Bros. Ultimate ",
        period:" Last FY Total ", 
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
const title13: Titles[] = [
    {
        title: " Pokémon: Let's Go, Pikachu! / Pokémon: Let's Go, Eevee! ",
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
        title: " Pokémon: Let's Go, Pikachu! / Pokémon: Let's Go, Eevee! ",
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
        title: " Pokémon: Let's Go, Pikachu! / Pokémon: Let's Go, Eevee! ",
        period: " 3rd Quarter  ",
        regionA: "   Japan ",
        valueA: 185,
        regionB: " Overseas",
        valueB: 816,
        regionC: "   WW FY ",
        valueC: 1000,
        regionD: "  WW LTD ",
        valueD: 1000,
    },
    {
        title: " Pokémon: Let's Go, Pikachu! / Pokémon: Let's Go, Eevee! ",
        period: " 4th Quarter  ",
        regionA: "   Japan ",
        valueA: 193,
        regionB: " Overseas",
        valueB: 870,
        regionC: "   WW FY ",
        valueC: 1063,
        regionD: "  WW LTD ",
        valueD: 1063,
    },
    {
        title: " Pokémon: Let's Go, Pikachu! / Pokémon: Let's Go, Eevee! ",
        period:" Last FY Total ", 
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
const title14: Titles[] = [
    {
        title: " Super Mario Party ",
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
        title: " Super Mario Party ",
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
        title: " Super Mario Party ",
        period: " 3rd Quarter  ",
        regionA: "   Japan ",
        valueA: 105,
        regionB: " Overseas",
        valueB: 425,
        regionC: "   WW FY ",
        valueC: 530,
        regionD: "  WW LTD ",
        valueD: 530,
    },
    {
        title: " Super Mario Party ",
        period: " 4th Quarter  ",
        regionA: "   Japan ",
        valueA: 122,
        regionB: " Overseas",
        valueB: 518,
        regionC: "   WW FY ",
        valueC: 640,
        regionD: "  WW LTD ",
        valueD: 640,
    },
    {
        title: " Super Mario Party ",
        period:" Last FY Total ", 
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
const title15: Titles[] = [
    {
        title: " Octopath Traveler ",
        period: " 1st Quarter  ",
        regionA: "   Japan ",
        valueA: 0,
        regionB: " Overseas",
        valueB: 0,
        regionC: "   WW FY ",
        valueC: 0,
        regionD: "  WW LTD ",
        valueD: 0,
        miscellaneous: "*This title is licensed to be sold as a Nintendo product overseas."
    },
    {
        title: " Octopath Traveler ",
        period: " 2nd Quarter  ",
        regionA: "   Japan ",
        valueA: 0,
        regionB: " Overseas",
        valueB: 0,
        regionC: "   WW FY ",
        valueC: 0,
        regionD: "  WW LTD ",
        valueD: 0,
        miscellaneous: "*This title is licensed to be sold as a Nintendo product overseas."
    },
    {
        title: " Octopath Traveler ",
        period: " 3rd Quarter  ",
        regionA: "   Japan ",
        valueA: 0,
        regionB: " Overseas",
        valueB: 108,
        regionC: "   WW FY ",
        valueC: 108,
        regionD: "  WW LTD ",
        valueD: 108,
        miscellaneous: "*This title is licensed to be sold as a Nintendo product overseas."
    },
    {
        title: " Octopath Traveler ",
        period: " 4th Quarter  ",
        regionA: "   Japan ",
        valueA: 0,
        regionB: " Overseas",
        valueB: 117,
        regionC: "   WW FY ",
        valueC: 117,
        regionD: "  WW LTD ",
        valueD: 117,
        miscellaneous: "*This title is licensed to be sold as a Nintendo product overseas."
    },
    {
        title: " Octopath Traveler ",
        period:" Last FY Total ", 
        regionA: "   Japan ",
        valueA: 0,
        regionB: " Overseas",
        valueB: 0,
        regionC: "   WW FY ",
        valueC: 0,
        regionD: "  WW LTD ",
        valueD: 0,
        miscellaneous: "*This title is licensed to be sold as a Nintendo product overseas."
    },
]
const title16: Titles[] = [
    {
        title: " Nintendo Labo Toy-Con 01: Variety Kit ",
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
        title: " Nintendo Labo Toy-Con 01: Variety Kit ",
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
        title: " Nintendo Labo Toy-Con 01: Variety Kit ",
        period: " 3rd Quarter  ",
        regionA: "   Japan ",
        valueA: 32,
        regionB: " Overseas",
        valueB: 74,
        regionC: "   WW FY ",
        valueC: 106,
        regionD: "  WW LTD ",
        valueD: 106,
    },
    {
        title: " Nintendo Labo Toy-Con 01: Variety Kit ",
        period: " 4th Quarter  ",
        regionA: "   Japan ",
        valueA: 33,
        regionB: " Overseas",
        valueB: 76,
        regionC: "   WW FY ",
        valueC: 109,
        regionD: "  WW LTD ",
        valueD: 109,
    },
    {
        title: " Nintendo Labo Toy-Con 01: Variety Kit ",
        period:" Last FY Total ", 
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
const title17: Titles[] = [
    {
        title: " Captain Toad: Treasure Tracker ",
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
        title: " Captain Toad: Treasure Tracker ",
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
        title: " Captain Toad: Treasure Tracker ",
        period: " 3rd Quarter  ",
        regionA: "   Japan ",
        valueA: 23,
        regionB: " Overseas",
        valueB: 83,
        regionC: "   WW FY ",
        valueC: 105,
        regionD: "  WW LTD ",
        valueD: 105,
    },
    {
        title: " Captain Toad: Treasure Tracker ",
        period: " 4th Quarter  ",
        regionA: "   Japan ",
        valueA: 24,
        regionB: " Overseas",
        valueB: 94,
        regionC: "   WW FY ",
        valueC: 118,
        regionD: "  WW LTD ",
        valueD: 118,
    },
    {
        title: " Captain Toad: Treasure Tracker ",
        period:" Last FY Total ", 
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

const title18: Titles[] = [
    {
        title: " Yoshi's Crafted World ",
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
        title: " Yoshi's Crafted World ",
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
        title: " Yoshi's Crafted World ",
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
        title: " Yoshi's Crafted World ",
        period: " 4th Quarter  ",
        regionA: "   Japan ",
        valueA: 14,
        regionB: " Overseas",
        valueB: 96,
        regionC: "   WW FY ",
        valueC: 111,
        regionD: "  WW LTD ",
        valueD: 111,
    },
    {
        title: " Yoshi's Crafted World ",
        period:" Last FY Total ", 
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
// there are no titles between 18 and 22
const title22: Titles[] = [
    {
        title: " New Super Mario Bros. Deluxe ",
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
        title: " New Super Mario Bros. Deluxe ",
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
        title: " New Super Mario Bros. Deluxe ",
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
        title: " New Super Mario Bros. Deluxe ",
        period: " 4th Quarter  ",
        regionA: "   Japan ",
        valueA: 69,
        regionB: " Overseas",
        valueB: 263,
        regionC: "   WW FY ",
        valueC: 331,
        regionD: "  WW LTD ",
        valueD: 331,
    },
    {
        title: " New Super Mario Bros. Deluxe ",
        period:" Last FY Total ", 
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
    fiscalYear: " FY3/19 ",
    switchSummaryHeader: "| Nintendo Switch FY    |\n| Million-Seller Titles |\n",
    japanSummaryHeader: "| Japan                           |",
    overseasSummaryHeader: "| Overseas                        |",
    globalFYSummaryHeader: "| Global FY                       |",
    globalLTDSummaryHeader: "| Global LTD                      |",
}

export const collection = [
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
    title16,
    title17,
    title18,
    title22
] as const;

const filteredCollection = collection.filter((elem, index, array) => {
    return array[index][3].valueC !== 0
})

const sortedCollection = filteredCollection.map((elem, index, array) => {
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

export const sortedTitles = sortedCollection.map((elem) => {
        return decimateCalculation(elem)
    })

// export const [
//     title1Sorted,
//     title2Sorted,
//     title3Sorted,
//     title4Sorted,
//     title5Sorted,
//     title6Sorted,
//     title7Sorted,
//     title8Sorted,
//     title9Sorted,
// ] = sortedTitles 

export const differenceTitles = sortedCollection.map((elem) => {
    return decimateCalculation(elem)
}).map((elem) => {
    return quarterlyCalculation(elem)
})

// export const [
//     title1Difference,
//     title2Difference,
//     title3Difference,
//     title4Difference,
//     title5Difference,
//     title6Difference,
//     title7Difference,
//     title8Difference,
//     title9Difference,
// ] = differenceTitles 

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
// const [print2, print3, print4, print5, print6, print7, print8, print9, print10] = differenceTitles.map((elem, index) => {
//     return printTitles(header, elem, sortedTitles[index], currentQuarter)
// })
const printListedTitles = differenceTitles.map((elem, index) => {
    return printTitles(header, elem, sortedTitles[index], currentQuarter)
}) as string[];

const printSummaryOne = printSummaryHead(header, newCollection, recurringCollection)

const printSummaryTwo = printSummary(header, newSummary, recurringSummary)

export const printFYMillionSellerTitles = [printOne, ...printListedTitles, printSummaryOne, printSummaryTwo].reduce((prev, next) => prev + "\n" + next )


// `${printOne}
// ${print2}
// ${print3}
// ${print4}
// ${print5}
// ${print6}
// ${print7}
// ${print8}
// ${print9}
// ${print10}
// ${printSummaryOne}
// ${printSummaryTwo}`;