export type Titles = {
    title: string,
    releaseDate: string,
    platforms: string,
    period: " 1st Quarter  " | " 2nd Quarter  " | " 3rd Quarter  " | " 4th Quarter  " | " Last FY Total " | " Total at Two FYs prior ",
    value: number,
    rank?: number,
    label?: " New! " | " Recurring " | " Sporadic ",
    miscellaneous?: string,
}

export type Header = {
    switchHeader: "| Capcom - Platinum Titles       |",
    secondHeader: "| Title                          |",
    thirdHeader: "| Platform                       |",
    fourthHeader: "| Release Date and Rank          |",
    fifthHeader: "| Units                          |",
    fiscalYear: string,
    fiscalYearYoY: string,
    ltd: " Life-To-Date ",
}

const currentQuarter = 4;

const title1: Titles[] = [
    {
        title: " Monster Hunter: World ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 18.3,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
    {
        title: " Monster Hunter: World ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 2nd Quarter  ",
        value: 17.5,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
    {
        title: " Monster Hunter: World ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 3rd Quarter  ",
        value: 17.8,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
    {
        title: " Monster Hunter: World ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 4th Quarter  ",
        value: 18.0,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
    {
        title: " Monster Hunter: World ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Last FY Total ",
        value: 18.0,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
    {
        title: " Monster Hunter: World ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 17.10,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
]

const title2: Titles[] = [
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 11.0,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 2nd Quarter  ",
        value: 10.2,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 3rd Quarter  ",
        value: 10.6,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 4th Quarter  ",
        value: 10.6,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Last FY Total ",
        value: 10.8,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 9.0,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
]