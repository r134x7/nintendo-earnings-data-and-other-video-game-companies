import {
    Header,
    Titles,
    labelTitles,
    printSummary,
    printSummaryHead,
    printTitles,
    quarterlyCalculation,
} from "../../../utils/capcom_platinum_titles_logic";

const currentQuarter = 4;

const title1: Titles[] = [
    {
        title: " Monster Hunter: World ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 17.3,
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
        value: 17.1,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
    {
        title: " Monster Hunter: World ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 15.70,
        miscellaneous: "(* Excludes shipments of \n Monster Hunter World: \n Iceborne Master Edition)",
    },
]

const title2: Titles[] = [
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jan 2017 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 9.8,
    },
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jan 2017 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 2nd Quarter  ",
        value: 10.2,
    },
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jan 2017 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 3rd Quarter  ",
        value: 10.6,
    },
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jan 2017 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 4th Quarter  ",
        value: 10.8,
    },
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jan 2017 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Last FY Total ",
        value: 9.0,
    },
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jan 2017 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 7.5,
    },
]

const title3: Titles[] = [
    {
        title: " Resident Evil 2 ",
        releaseDate: " Jan 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 8.6,
    },
    {
        title: " Resident Evil 2 ",
        releaseDate: " Jan 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 2nd Quarter  ",
        value: 8.9,
    },
    {
        title: " Resident Evil 2 ",
        releaseDate: " Jan 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 3rd Quarter  ",
        value: 9.3,
    },
    {
        title: " Resident Evil 2 ",
        releaseDate: " Jan 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 4th Quarter  ",
        value: 9.6,
    },
    {
        title: " Resident Evil 2 ",
        releaseDate: " Jan 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Last FY Total ",
        value: 8.1,
    },
    {
        title: " Resident Evil 2 ",
        releaseDate: " Jan 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 6.6
    },
]

const title4: Titles[] = [
    {
        title: " Monster Hunter World: Iceborne ", 
        releaseDate: " Sep 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 8.2,
    },
    {
        title: " Monster Hunter World: Iceborne ", 
        releaseDate: " Sep 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 2nd Quarter  ",
        value: 8.5,
    },
    {
        title: " Monster Hunter World: Iceborne ", 
        releaseDate: " Sep 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 3rd Quarter  ",
        value: 8.8,
    },
    {
        title: " Monster Hunter World: Iceborne ", 
        releaseDate: " Sep 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 4th Quarter  ",
        value: 9.2,
    },
    {
        title: " Monster Hunter World: Iceborne ", 
        releaseDate: " Sep 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Last FY Total ",
        value: 7.7,
    },
    {
        title: " Monster Hunter World: Iceborne ", 
        releaseDate: " Sep 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 5.2,
    },
]

const title5: Titles[] = [
    {
        title: " Resident Evil 5 ", 
        releaseDate: " Mar 2009 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 1st Quarter  ",
        value: 7.9,
    },
    {
        title: " Resident Evil 5 ", 
        releaseDate: " Mar 2009 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 2nd Quarter  ",
        value: 8.0,
    },
    {
        title: " Resident Evil 5 ", 
        releaseDate: " Mar 2009 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 3rd Quarter  ",
        value: 8.1,
    },
    {
        title: " Resident Evil 5 ", 
        releaseDate: " Mar 2009 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 4th Quarter  ",
        value: 8.2,
    },
    {
        title: " Resident Evil 5 ", 
        releaseDate: " Mar 2009 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Last FY Total ",
        value: 7.8,
    },
    {
        title: " Resident Evil 5 ", 
        releaseDate: " Mar 2009 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Total at Two FYs prior ",
        value: 7.6,
    },
]

const title6: Titles[] = [
    {
        title: " Resident Evil 6 ", 
        releaseDate: " Oct 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 1st Quarter  ",
        value: 7.9,
    },
    {
        title: " Resident Evil 6 ", 
        releaseDate: " Oct 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 2nd Quarter  ",
        value: 8.0,
    },
    {
        title: " Resident Evil 6 ", 
        releaseDate: " Oct 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 3rd Quarter  ",
        value: 8.1,
    },
    {
        title: " Resident Evil 6 ", 
        releaseDate: " Oct 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 4th Quarter  ",
        value: 8.2,
    },
    {
        title: " Resident Evil 6 ", 
        releaseDate: " Oct 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Last FY Total ",
        value: 7.8,
    },
    {
        title: " Resident Evil 6 ", 
        releaseDate: " Oct 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Total at Two FYs prior ",
        value: 7.5,
    },
]

const title7: Titles[] = [
    {
        title: " Monster Hunter Rise ", 
        releaseDate: " NSW, PC, DL ",
        platforms: " Mar 2021 ",
        period: " 1st Quarter  ",
        value: 7.3,
    },
    {
        title: " Monster Hunter Rise ", 
        releaseDate: " NSW, PC, DL ",
        platforms: " Mar 2021 ",
        period: " 2nd Quarter  ",
        value: 7.5,
    },
    {
        title: " Monster Hunter Rise ", 
        releaseDate: " NSW, PC, DL ",
        platforms: " Mar 2021 ",
        period: " 3rd Quarter  ",
        value: 7.7,
    },
    {
        title: " Monster Hunter Rise ", 
        releaseDate: " NSW, PC, DL ",
        platforms: " Mar 2021 ",
        period: " 4th Quarter  ",
        value: 9.0,
    },
    {
        title: " Monster Hunter Rise ", 
        releaseDate: " NSW, PC, DL ",
        platforms: " Mar 2021 ",
        period: " Last FY Total ",
        value: 4.8,
    },
    {
        title: " Monster Hunter Rise ", 
        releaseDate: " NSW, PC, DL ",
        platforms: " Mar 2021 ",
        period: " Total at Two FYs prior ",
        value: 0,
    },
]

const title8: Titles[] = [
    {
        title: "", 
        releaseDate: "",
        platforms: "",
        period: " 1st Quarter  ",
        value: 0,
    },
    {
        title: "", 
        releaseDate: "",
        platforms: "",
        period: " 2nd Quarter  ",
        value: 0,
    },
    {
        title: "", 
        releaseDate: "",
        platforms: "",
        period: " 3rd Quarter  ",
        value: 0,
    },
    {
        title: "", 
        releaseDate: "",
        platforms: "",
        period: " 4th Quarter  ",
        value: 0,
    },
    {
        title: "", 
        releaseDate: "",
        platforms: "",
        period: " Last FY Total ",
        value: 0,
    },
    {
        title: "", 
        releaseDate: "",
        platforms: "",
        period: " Total at Two FYs prior ",
        value:0,
    },
]

const title0: Titles[] = [
    {
        title: "", 
        releaseDate: "",
        platforms: "",
        period: " 1st Quarter  ",
        value: 0,
    },
    {
        title: "", 
        releaseDate: "",
        platforms: "",
        period: " 2nd Quarter  ",
        value: 0,
    },
    {
        title: "", 
        releaseDate: "",
        platforms: "",
        period: " 3rd Quarter  ",
        value: 0,
    },
    {
        title: "", 
        releaseDate: "",
        platforms: "",
        period: " 4th Quarter  ",
        value: 0,
    },
    {
        title: "", 
        releaseDate: "",
        platforms: "",
        period: " Last FY Total ",
        value: 0,
    },
    {
        title: "", 
        releaseDate: "",
        platforms: "",
        period: " Total at Two FYs prior ",
        value:0,
    },
]
