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

const title0: Titles[] = [
    {
        title: " Street Fighter V ", 
        releaseDate: " Feb 2016 ",
        platforms: " PS4, PC, DL ",
        period: " 1st Quarter  ",
        value: 5.8,
    },
    {
        title: " Street Fighter V ", 
        releaseDate: " Feb 2016 ",
        platforms: " PS4, PC, DL ",
        period: " 2nd Quarter  ",
        value: 6.0,
    },
    {
        title: " Street Fighter V ", 
        releaseDate: " Feb 2016 ",
        platforms: " PS4, PC, DL ",
        period: " 3rd Quarter  ",
        value: 6.1,
    },
    {
        title: " Street Fighter V ", 
        releaseDate: " Feb 2016 ",
        platforms: " PS4, PC, DL ",
        period: " 4th Quarter  ",
        value: 6.2,
    },
    {
        title: " Street Fighter V ", 
        releaseDate: " Feb 2016 ",
        platforms: " PS4, PC, DL ",
        period: " Last FY Total ",
        value: 5.5,
    },
    {
        title: " Street Fighter V ", 
        releaseDate: " Feb 2016 ",
        platforms: " PS4, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 4.5,
    },
]

const title0: Titles[] = [
    {
        title: " Resident Evil Village ", 
        releaseDate: " May 2021 ",
        platforms: " PS4, PS5, Xbox One, XSX, PC, DL ",
        period: " 1st Quarter  ",
        value: 4.5,
    },
    {
        title: " Resident Evil Village ", 
        releaseDate: " May 2021 ",
        platforms: " PS4, PS5, Xbox One, XSX, PC, DL ",
        period: " 2nd Quarter  ",
        value: 4.8,
    },
    {
        title: " Resident Evil Village ", 
        releaseDate: " May 2021 ",
        platforms: " PS4, PS5, Xbox One, XSX, PC, DL ",
        period: " 3rd Quarter  ",
        value: 5.7,
    },
    {
        title: " Resident Evil Village ", 
        releaseDate: " May 2021 ",
        platforms: " PS4, PS5, Xbox One, XSX, PC, DL ",
        period: " 4th Quarter  ",
        value: 6.1,
    },
    {
        title: " Resident Evil Village ", 
        releaseDate: " May 2021 ",
        platforms: " PS4, PS5, Xbox One, XSX, PC, DL ",
        period: " Last FY Total ",
        value: 0,
    },
    {
        title: " Resident Evil Village ", 
        releaseDate: " May 2021 ",
        platforms: " PS4, PS5, Xbox One, XSX, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 0,
    },
]

const title0: Titles[] = [
    {
        title: " Resident Evil 3 ", 
        releaseDate: " Apr 2020 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 4.4,
    },
    {
        title: " Resident Evil 3 ", 
        releaseDate: " Apr 2020 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 2nd Quarter  ",
        value: 4.6,
    },
    {
        title: " Resident Evil 3 ", 
        releaseDate: " Apr 2020 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 3rd Quarter  ",
        value: 4.9,
    },
    {
        title: " Resident Evil 3 ", 
        releaseDate: " Apr 2020 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 4th Quarter  ",
        value: 5.2,
    },
    {
        title: " Resident Evil 3 ", 
        releaseDate: " Apr 2020 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Last FY Total ",
        value: 4.0,
    },
    {
        title: " Resident Evil 3 ", 
        releaseDate: " Apr 2020 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 0,
    },
]

const title0: Titles[] = [
    {
        title: " Monster Hunter Freedom 3 ", 
        releaseDate: " Dec 2010 ",
        platforms: " PSP, DL ",
        period: " 1st Quarter  ",
        value: 4.9,
    },
    {
        title: " Monster Hunter Freedom 3 ", 
        releaseDate: " Dec 2010 ",
        platforms: " PSP, DL ",
        period: " 2nd Quarter  ",
        value: 4.9,
    },
    {
        title: " Monster Hunter Freedom 3 ", 
        releaseDate: " Dec 2010 ",
        platforms: " PSP, DL ",
        period: " 3rd Quarter  ",
        value: 4.9,
    },
    {
        title: " Monster Hunter Freedom 3 ", 
        releaseDate: " Dec 2010 ",
        platforms: " PSP, DL ",
        period: " 4th Quarter  ",
        value: 4.9,
    },
    {
        title: " Monster Hunter Freedom 3 ", 
        releaseDate: " Dec 2010 ",
        platforms: " PSP, DL ",
        period: " Last FY Total ",
        value: 4.9,
    },
    {
        title: " Monster Hunter Freedom 3 ", 
        releaseDate: " Dec 2010 ",
        platforms: " PSP, DL ",
        period: " Total at Two FYs prior ",
        value: 4.9,
    },
]

const title0: Titles[] = [
    {
        title: " Devil May Cry 5 ", 
        releaseDate: " Mar 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 4.5,
    },
    {
        title: " Devil May Cry 5 ", 
        releaseDate: " Mar 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 2nd Quarter  ",
        value: 4.7,
    },
    {
        title: " Devil May Cry 5 ", 
        releaseDate: " Mar 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 3rd Quarter  ",
        value: 4.8,
    },
    {
        title: " Devil May Cry 5 ", 
        releaseDate: " Mar 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 4th Quarter  ",
        value: 5.0,
    },
    {
        title: " Devil May Cry 5 ", 
        releaseDate: " Mar 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Last FY Total ",
        value: 4.3,
    },
    {
        title: " Devil May Cry 5 ", 
        releaseDate: " Mar 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 3.5,
    },
]

const title0: Titles[] = [
    {
        title: " Monster Hunter Generations Ultimate ", 
        releaseDate: " Mar 2017 ",
        platforms: " 3DS, NSW, DL ",
        period: " 1st Quarter  ",
        value: 4.3,
    },
    {
        title: " Monster Hunter Generations Ultimate ", 
        releaseDate: " Mar 2017 ",
        platforms: " 3DS, NSW, DL ",
        period: " 2nd Quarter  ",
        value: 4.3,
    },
    {
        title: " Monster Hunter Generations Ultimate ", 
        releaseDate: " Mar 2017 ",
        platforms: " 3DS, NSW, DL ",
        period: " 3rd Quarter  ",
        value: 4.4,
    },
    {
        title: " Monster Hunter Generations Ultimate ", 
        releaseDate: " Mar 2017 ",
        platforms: " 3DS, NSW, DL ",
        period: " 4th Quarter  ",
        value: 4.4,
    },
    {
        title: " Monster Hunter Generations Ultimate ", 
        releaseDate: " Mar 2017 ",
        platforms: " 3DS, NSW, DL ",
        period: " Last FY Total ",
        value: 4.3,
    },
    {
        title: " Monster Hunter Generations Ultimate ", 
        releaseDate: " Mar 2017 ",
        platforms: " 3DS, NSW, DL ",
        period: " Total at Two FYs prior ",
        value: 3.6,
    },
]

const title0: Titles[] = [
    {
        title: " Monster Hunter Generations ", 
        releaseDate: " Nov 2015 ",
        platforms: " 3DS, DL ",
        period: " 1st Quarter  ",
        value: 4.3,
    },
    {
        title: " Monster Hunter Generations ", 
        releaseDate: " Nov 2015 ",
        platforms: " 3DS, DL ",
        period: " 2nd Quarter  ",
        value: 4.3,
    },
    {
        title: " Monster Hunter Generations ", 
        releaseDate: " Nov 2015 ",
        platforms: " 3DS, DL ",
        period: " 3rd Quarter  ",
        value: 4.3,
    },
    {
        title: " Monster Hunter Generations ", 
        releaseDate: " Nov 2015 ",
        platforms: " 3DS, DL ",
        period: " 4th Quarter  ",
        value: 4.3,
    },
    {
        title: " Monster Hunter Generations ", 
        releaseDate: " Nov 2015 ",
        platforms: " 3DS, DL ",
        period: " Last FY Total ",
        value: 4.3,
    },
    {
        title: " Monster Hunter Generations ", 
        releaseDate: " Nov 2015 ",
        platforms: " 3DS, DL ",
        period: " Total at Two FYs prior ",
        value: 4.3,
    },
]

const title0: Titles[] = [
    {
        title: " Monster Hunter 4 Ultimate ", 
        releaseDate: " Oct 2014 ",
        platforms: " 3DS, DL ",
        period: " 1st Quarter  ",
        value: 4.2,
    },
    {
        title: " Monster Hunter 4 Ultimate ", 
        releaseDate: " Oct 2014 ",
        platforms: " 3DS, DL ",
        period: " 2nd Quarter  ",
        value: 4.2,
    },
    {
        title: " Monster Hunter 4 Ultimate ", 
        releaseDate: " Oct 2014 ",
        platforms: " 3DS, DL ",
        period: " 3rd Quarter  ",
        value: 4.2,
    },
    {
        title: " Monster Hunter 4 Ultimate ", 
        releaseDate: " Oct 2014 ",
        platforms: " 3DS, DL ",
        period: " 4th Quarter  ",
        value: 4.2,
    },
    {
        title: " Monster Hunter 4 Ultimate ", 
        releaseDate: " Oct 2014 ",
        platforms: " 3DS, DL ",
        period: " Last FY Total ",
        value: 4.2,
    },
    {
        title: " Monster Hunter 4 Ultimate ", 
        releaseDate: " Oct 2014 ",
        platforms: " 3DS, DL ",
        period: " Total at Two FYs prior ",
        value: 4.2,
    },
]

const title0: Titles[] = [
    {
        title: " Monster Hunter 4 ", 
        releaseDate: " Sep 2013 ",
        platforms: " 3DS, DL ",
        period: " 1st Quarter  ",
        value: 4.1,
    },
    {
        title: " Monster Hunter 4 ", 
        releaseDate: " Sep 2013 ",
        platforms: " 3DS, DL ",
        period: " 2nd Quarter  ",
        value: 4.1,
    },
    {
        title: " Monster Hunter 4 ", 
        releaseDate: " Sep 2013 ",
        platforms: " 3DS, DL ",
        period: " 3rd Quarter  ",
        value: 4.1,
    },
    {
        title: " Monster Hunter 4 ", 
        releaseDate: " Sep 2013 ",
        platforms: " 3DS, DL ",
        period: " 4th Quarter  ",
        value: 4.1,
    },
    {
        title: " Monster Hunter 4 ", 
        releaseDate: " Sep 2013 ",
        platforms: " 3DS, DL ",
        period: " Last FY Total ",
        value: 4.1,
    },
    {
        title: " Monster Hunter 4 ", 
        releaseDate: " Sep 2013 ",
        platforms: " 3DS, DL ",
        period: " Total at Two FYs prior ",
        value: 4.1,
    },
]

const title0: Titles[] = [
    {
        title: " Monster Hunter Freedom Unite ", 
        releaseDate: " Mar 2008 ",
        platforms: " PSP, DL ",
        period: " 1st Quarter  ",
        value: 3.8,
    },
    {
        title: " Monster Hunter Freedom Unite ", 
        releaseDate: " Mar 2008 ",
        platforms: " PSP, DL ",
        period: " 2nd Quarter  ",
        value: 3.8,
    },
    {
        title: " Monster Hunter Freedom Unite ", 
        releaseDate: " Mar 2008 ",
        platforms: " PSP, DL ",
        period: " 3rd Quarter  ",
        value: 3.8,
    },
    {
        title: " Monster Hunter Freedom Unite ", 
        releaseDate: " Mar 2008 ",
        platforms: " PSP, DL ",
        period: " 4th Quarter  ",
        value: 3.8,
    },
    {
        title: " Monster Hunter Freedom Unite ", 
        releaseDate: " Mar 2008 ",
        platforms: " PSP, DL ",
        period: " Last FY Total ",
        value: 3.8,
    },
    {
        title: " Monster Hunter Freedom Unite ", 
        releaseDate: " Mar 2008 ",
        platforms: " PSP, DL ",
        period: " Total at Two FYs prior ",
        value: 3.8,
    },
]

const title0: Titles[] = [
    {
        title: " Street Fighter IV ", 
        releaseDate: "Feb 2009 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 1st Quarter  ",
        value: 3.4,
    },
    {
        title: " Street Fighter IV ", 
        releaseDate: "Feb 2009 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 2nd Quarter  ",
        value: 3.4,
    },
    {
        title: " Street Fighter IV ", 
        releaseDate: "Feb 2009 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 3rd Quarter  ",
        value: 3.4,
    },
    {
        title: " Street Fighter IV ", 
        releaseDate: "Feb 2009 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 4th Quarter  ",
        value: 3.4,
    },
    {
        title: " Street Fighter IV ", 
        releaseDate: "Feb 2009 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Last FY Total ",
        value: 3.4,
    },
    {
        title: " Street Fighter IV ", 
        releaseDate: "Feb 2009 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Total at Two FYs prior ",
        value: 3.4,
    },
]

const title0: Titles[] = [
    {
        title: " Resident Evil ", 
        releaseDate: " Nov 2014 ",
        platforms: " PS3, DL ",
        period: " 1st Quarter  ",
        value: 3.1,
    },
    {
        title: " Resident Evil ", 
        releaseDate: " Nov 2014 ",
        platforms: " PS3, DL ",
        period: " 2nd Quarter  ",
        value: 3.2,
    },
    {
        title: " Resident Evil ", 
        releaseDate: " Nov 2014 ",
        platforms: " PS3, DL ",
        period: " 3rd Quarter  ",
        value: 3.3,
    },
    {
        title: " Resident Evil ", 
        releaseDate: " Nov 2014 ",
        platforms: " PS3, DL ",
        period: " 4th Quarter  ",
        value: 3.4,
    },
    {
        title: " Resident Evil ", 
        releaseDate: " Nov 2014 ",
        platforms: " PS3, DL ",
        period: " Last FY Total ",
        value: 3.0,
    },
    {
        title: " Resident Evil ", 
        releaseDate: " Nov 2014 ",
        platforms: " PS3, DL ",
        period: " Total at Two FYs prior ",
        value: 2.6,
    },
]

const title0: Titles[] = [
    {
        title: " Resident Evil 0: HD Remaster ", 
        releaseDate: " Jan 2016 ",
        platforms: " PS3, PS4, Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 3.0,
    },
    {
        title: " Resident Evil 0: HD Remaster ", 
        releaseDate: " Jan 2016 ",
        platforms: " PS3, PS4, Xbox One, PC, DL ",
        period: " 2nd Quarter  ",
        value: 3.1,
    },
    {
        title: " Resident Evil 0: HD Remaster ", 
        releaseDate: " Jan 2016 ",
        platforms: " PS3, PS4, Xbox One, PC, DL ",
        period: " 3rd Quarter  ",
        value: 3.2,
    },
    {
        title: " Resident Evil 0: HD Remaster ", 
        releaseDate: " Jan 2016 ",
        platforms: " PS3, PS4, Xbox One, PC, DL ",
        period: " 4th Quarter  ",
        value: 3.3,
    },
    {
        title: " Resident Evil 0: HD Remaster ", 
        releaseDate: " Jan 2016 ",
        platforms: " PS3, PS4, Xbox One, PC, DL ",
        period: " Last FY Total ",
        value: 2.9,
    },
    {
        title: " Resident Evil 0: HD Remaster ", 
        releaseDate: " Jan 2016 ",
        platforms: " PS3, PS4, Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 2.5,
    },
]

const title0: Titles[] = [
    {
        title: " Dead Rising 2 ", 
        releaseDate: " Sep 2010 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " 1st Quarter  ",
        value: 3.1,
    },
    {
        title: " Dead Rising 2 ", 
        releaseDate: " Sep 2010 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " 2nd Quarter  ",
        value: 3.1,
    },
    {
        title: " Dead Rising 2 ", 
        releaseDate: " Sep 2010 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " 3rd Quarter  ",
        value: 3.1,
    },
    {
        title: " Dead Rising 2 ", 
        releaseDate: " Sep 2010 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " 4th Quarter  ",
        value: 3.1,
    },
    {
        title: " Dead Rising 2 ", 
        releaseDate: " Sep 2010 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " Last FY Total ",
        value: 3.1,
    },
    {
        title: " Dead Rising 2 ", 
        releaseDate: " Sep 2010 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 3.1,
    },
]

const title0: Titles[] = [
    {
        title: " Devil May Cry 4 ", 
        releaseDate: " Jan 2008 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 1st Quarter  ",
        value: 3.0,
    },
    {
        title: " Devil May Cry 4 ", 
        releaseDate: " Jan 2008 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 2nd Quarter  ",
        value: 3.0,
    },
    {
        title: " Devil May Cry 4 ", 
        releaseDate: " Jan 2008 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 3rd Quarter  ",
        value: 3.0,
    },
    {
        title: " Devil May Cry 4 ", 
        releaseDate: " Jan 2008 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 4th Quarter  ",
        value: 3.0,
    },
    {
        title: " Devil May Cry 4 ", 
        releaseDate: " Jan 2008 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Last FY Total ",
        value: 3.0,
    },
    {
        title: " Devil May Cry 4 ", 
        releaseDate: " Jan 2008 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Total at Two FYs prior ",
        value: 3.0,
    },
]

const title0: Titles[] = [
    {
        title: " Dead Rising 3 ", 
        releaseDate: " Nov 2013 ",
        platforms: " Xbox One, DL ",
        period: " 1st Quarter  ",
        value: 2.9,
    },
    {
        title: " Dead Rising 3 ", 
        releaseDate: " Nov 2013 ",
        platforms: " Xbox One, DL ",
        period: " 2nd Quarter  ",
        value: 3.0,
    },
    {
        title: " Dead Rising 3 ", 
        releaseDate: " Nov 2013 ",
        platforms: " Xbox One, DL ",
        period: " 3rd Quarter  ",
        value: 3.0,
    },
    {
        title: " Dead Rising 3 ", 
        releaseDate: " Nov 2013 ",
        platforms: " Xbox One, DL ",
        period: " 4th Quarter  ",
        value: 3.0,
    },
    {
        title: " Dead Rising 3 ", 
        releaseDate: " Nov 2013 ",
        platforms: " Xbox One, DL ",
        period: " Last FY Total ",
        value: 2.9,
    },
    {
        title: " Dead Rising 3 ", 
        releaseDate: " Nov 2013 ",
        platforms: " Xbox One, DL ",
        period: " Total at Two FYs prior ",
        value: 2.7,
    },
]

const title0: Titles[] = [
    {
        title: " Resident Evil Relevations 2 ", 
        releaseDate: " Mar 2015 ",
        platforms: " PS3, PS4, Xbox 360, Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 2.8,
    },
    {
        title: " Resident Evil Relevations 2 ", 
        releaseDate: " Mar 2015 ",
        platforms: " PS3, PS4, Xbox 360, Xbox One, PC, DL ",
        period: " 2nd Quarter  ",
        value: 2.8,
    },
    {
        title: " Resident Evil Relevations 2 ", 
        releaseDate: " Mar 2015 ",
        platforms: " PS3, PS4, Xbox 360, Xbox One, PC, DL ",
        period: " 3rd Quarter  ",
        value: 2.9,
    },
    {
        title: " Resident Evil Relevations 2 ", 
        releaseDate: " Mar 2015 ",
        platforms: " PS3, PS4, Xbox 360, Xbox One, PC, DL ",
        period: " 4th Quarter  ",
        value: 2.9,
    },
    {
        title: " Resident Evil Relevations 2 ", 
        releaseDate: " Mar 2015 ",
        platforms: " PS3, PS4, Xbox 360, Xbox One, PC, DL ",
        period: " Last FY Total ",
        value: 2.7,
    },
    {
        title: " Resident Evil Relevations 2 ", 
        releaseDate: " Mar 2015 ",
        platforms: " PS3, PS4, Xbox 360, Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 2.6,
    },
]

const title0: Titles[] = [
    {
        title: " Monster Hunter 3 Ultimate ", 
        releaseDate: " Dec 2011 ",
        platforms: " 3DS, DL ",
        period: " 1st Quarter  ",
        value: 2.6,
    },
    {
        title: " Monster Hunter 3 Ultimate ", 
        releaseDate: " Dec 2011 ",
        platforms: " 3DS, DL ",
        period: " 2nd Quarter  ",
        value: 2.6,
    },
    {
        title: " Monster Hunter 3 Ultimate ", 
        releaseDate: " Dec 2011 ",
        platforms: " 3DS, DL ",
        period: " 3rd Quarter  ",
        value: 2.6,
    },
    {
        title: " Monster Hunter 3 Ultimate ", 
        releaseDate: " Dec 2011 ",
        platforms: " 3DS, DL ",
        period: " 4th Quarter  ",
        value: 2.6,
    },
    {
        title: " Monster Hunter 3 Ultimate ", 
        releaseDate: " Dec 2011 ",
        platforms: " 3DS, DL ",
        period: " Last FY Total ",
        value: 2.6,
    },
    {
        title: " Monster Hunter 3 Ultimate ", 
        releaseDate: " Dec 2011 ",
        platforms: " 3DS, DL ",
        period: " Total at Two FYs prior ",
        value: 2.6,
    },
]

const title0: Titles[] = [
    {
        title: " Resident Evil: Operation Raccoon City ", 
        releaseDate: " Mar 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 1st Quarter  ",
        value: 2.6,
    },
    {
        title: " Resident Evil: Operation Raccoon City ", 
        releaseDate: " Mar 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 2nd Quarter  ",
        value: 2.6,
    },
    {
        title: " Resident Evil: Operation Raccoon City ", 
        releaseDate: " Mar 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 3rd Quarter  ",
        value: 2.6,
    },
    {
        title: " Resident Evil: Operation Raccoon City ", 
        releaseDate: " Mar 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 4th Quarter  ",
        value: 2.6,
    },
    {
        title: " Resident Evil: Operation Raccoon City ", 
        releaseDate: " Mar 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Last FY Total ",
        value: 2.5,
    },
    {
        title: " Resident Evil: Operation Raccoon City ", 
        releaseDate: " Mar 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Total at Two FYs prior ",
        value: 2.5,
    },
]

const title0: Titles[] = [
    {
        title: " DmC Devil May Cry ", 
        releaseDate: " Jan 2013 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 1st Quarter  ",
        value: 2.5,
    },
    {
        title: " DmC Devil May Cry ", 
        releaseDate: " Jan 2013 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 2nd Quarter  ",
        value: 2.5,
    },
    {
        title: " DmC Devil May Cry ", 
        releaseDate: " Jan 2013 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 3rd Quarter  ",
        value: 2.6,
    },
    {
        title: " DmC Devil May Cry ", 
        releaseDate: " Jan 2013 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 4th Quarter  ",
        value: 2.6,
    },
    {
        title: " DmC Devil May Cry ", 
        releaseDate: " Jan 2013 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Last FY Total ",
        value: 2.5,
    },
    {
        title: " DmC Devil May Cry ", 
        releaseDate: " Jan 2013 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Total at Two FYs prior ",
        value: 2.4,
    },
]

const title0: Titles[] = [
    {
        title: " Resident Evil 4 ", 
        releaseDate: " Aug 2016 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 1st Quarter  ",
        value: 2.3,
    },
    {
        title: " Resident Evil 4 ", 
        releaseDate: " Aug 2016 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 2nd Quarter  ",
        value: 2.4,
    },
    {
        title: " Resident Evil 4 ", 
        releaseDate: " Aug 2016 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 3rd Quarter  ",
        value: 2.5,
    },
    {
        title: " Resident Evil 4 ", 
        releaseDate: " Aug 2016 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 4th Quarter  ",
        value: 2.6,
    },
    {
        title: " Resident Evil 4 ", 
        releaseDate: " Aug 2016 ",
        platforms: " PS4, Xbox One, DL ",
        period: " Last FY Total ",
        value: 2.2,
    },
    {
        title: " Resident Evil 4 ", 
        releaseDate: " Aug 2016 ",
        platforms: " PS4, Xbox One, DL ",
        period: " Total at Two FYs prior ",
        value: 1.7,
    },
]

const title0: Titles[] = [
    {
        title: " Resident Evil 5 ", 
        releaseDate: " Jun 2016",
        platforms: " PS4, Xbox One, DL ",
        period: " 1st Quarter  ",
        value: 2.2,
    },
    {
        title: " Resident Evil 5 ", 
        releaseDate: " Jun 2016",
        platforms: " PS4, Xbox One, DL ",
        period: " 2nd Quarter  ",
        value: 2.3,
    },
    {
        title: " Resident Evil 5 ", 
        releaseDate: " Jun 2016",
        platforms: " PS4, Xbox One, DL ",
        period: " 3rd Quarter  ",
        value: 2.4,
    },
    {
        title: " Resident Evil 5 ", 
        releaseDate: " Jun 2016",
        platforms: " PS4, Xbox One, DL ",
        period: " 4th Quarter  ",
        value: 2.4,
    },
    {
        title: " Resident Evil 5 ", 
        releaseDate: " Jun 2016",
        platforms: " PS4, Xbox One, DL ",
        period: " Last FY Total ",
        value: 2.1,
    },
    {
        title: " Resident Evil 5 ", 
        releaseDate: " Jun 2016",
        platforms: " PS4, Xbox One, DL ",
        period: " Total at Two FYs prior ",
        value: 1.7,
    },
]

const title0: Titles[] = [
    {
        title: " Resident Evil 6 ", 
        releaseDate: " Mar 2016 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 1st Quarter  ",
        value: 2.3,
    },
    {
        title: " Resident Evil 6 ", 
        releaseDate: " Mar 2016 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 2nd Quarter  ",
        value: 2.3,
    },
    {
        title: " Resident Evil 6 ", 
        releaseDate: " Mar 2016 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 3rd Quarter  ",
        value: 2.3,
    },
    {
        title: " Resident Evil 6 ", 
        releaseDate: " Mar 2016 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 4th Quarter  ",
        value: 2.3,
    },
    {
        title: " Resident Evil 6 ", 
        releaseDate: " Mar 2016 ",
        platforms: " PS4, Xbox One, DL ",
        period: " Last FY Total ",
        value: 2.3,
    },
    {
        title: " Resident Evil 6 ", 
        releaseDate: " Mar 2016 ",
        platforms: " PS4, Xbox One, DL ",
        period: " Total at Two FYs prior ",
        value: 2.0,
    },
]

const title0: Titles[] = [
    {
        title: " Resident Evil 5: Gold Edition ", 
        releaseDate: " Feb 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 1st Quarter  ",
        value: 2.3,
    },
    {
        title: " Resident Evil 5: Gold Edition ", 
        releaseDate: " Feb 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 2nd Quarter  ",
        value: 2.3,
    },
    {
        title: " Resident Evil 5: Gold Edition ", 
        releaseDate: " Feb 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 3rd Quarter  ",
        value: 2.3,
    },
    {
        title: " Resident Evil 5: Gold Edition ", 
        releaseDate: " Feb 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 4th Quarter  ",
        value: 2.3,
    },
    {
        title: " Resident Evil 5: Gold Edition ", 
        releaseDate: " Feb 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Last FY Total ",
        value: 2.3,
    },
    {
        title: " Resident Evil 5: Gold Edition ", 
        releaseDate: " Feb 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Total at Two FYs prior ",
        value: 2.3,
    },
]

const title0: Titles[] = [
    {
        title: " Dragon’s Dogma: Dark Arisen ", 
        releaseDate: " Apr 2013 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 1st Quarter  ",
        value: 2.2,
    },
    {
        title: " Dragon’s Dogma: Dark Arisen ", 
        releaseDate: " Apr 2013 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 2nd Quarter  ",
        value: 2.2,
    },
    {
        title: " Dragon’s Dogma: Dark Arisen ", 
        releaseDate: " Apr 2013 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 3rd Quarter  ",
        value: 2.2,
    },
    {
        title: " Dragon’s Dogma: Dark Arisen ", 
        releaseDate: " Apr 2013 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 4th Quarter  ",
        value: 2.3,
    },
    {
        title: " Dragon’s Dogma: Dark Arisen ", 
        releaseDate: " Apr 2013 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Last FY Total ",
        value: 2.1,
    },
    {
        title: " Dragon’s Dogma: Dark Arisen ", 
        releaseDate: " Apr 2013 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Total at Two FYs prior ",
        value: 2.1,
    },
]

const title0: Titles[] = [
    {
        title: " Marvel vs. Capcom 3: Fate of Two Worlds ", 
        releaseDate: " Feb 2011 ",
        platforms: " PS3, Xbox 360 ",
        period: " 1st Quarter  ",
        value: 2.2,
    },
    {
        title: " Marvel vs. Capcom 3: Fate of Two Worlds ", 
        releaseDate: " Feb 2011 ",
        platforms: " PS3, Xbox 360 ",
        period: " 2nd Quarter  ",
        value: 2.2,
    },
    {
        title: " Marvel vs. Capcom 3: Fate of Two Worlds ", 
        releaseDate: " Feb 2011 ",
        platforms: " PS3, Xbox 360 ",
        period: " 3rd Quarter  ",
        value: 2.2,
    },
    {
        title: " Marvel vs. Capcom 3: Fate of Two Worlds ", 
        releaseDate: " Feb 2011 ",
        platforms: " PS3, Xbox 360 ",
        period: " 4th Quarter  ",
        value: 2.2,
    },
    {
        title: " Marvel vs. Capcom 3: Fate of Two Worlds ", 
        releaseDate: " Feb 2011 ",
        platforms: " PS3, Xbox 360 ",
        period: " Last FY Total ",
        value: 2.2,
    },
    {
        title: " Marvel vs. Capcom 3: Fate of Two Worlds ", 
        releaseDate: " Feb 2011 ",
        platforms: " PS3, Xbox 360 ",
        period: " Total at Two FYs prior ",
        value: 2.2,
    },
]

const title0: Titles[] = [
    {
        title: " Resident Evil Revelations ", 
        releaseDate: " May 2013 ",
        platforms: " PS3, Xbox 360, Wii U, PC, DL ",
        period: " 1st Quarter  ",
        value: 2.1,
    },
    {
        title: " Resident Evil Revelations ", 
        releaseDate: " May 2013 ",
        platforms: " PS3, Xbox 360, Wii U, PC, DL ",
        period: " 2nd Quarter  ",
        value: 2.1,
    },
    {
        title: " Resident Evil Revelations ", 
        releaseDate: " May 2013 ",
        platforms: " PS3, Xbox 360, Wii U, PC, DL ",
        period: " 3rd Quarter  ",
        value: 2.2,
    },
    {
        title: " Resident Evil Revelations ", 
        releaseDate: " May 2013 ",
        platforms: " PS3, Xbox 360, Wii U, PC, DL ",
        period: " 4th Quarter  ",
        value: 2.2,
    },
    {
        title: " Resident Evil Revelations ", 
        releaseDate: " May 2013 ",
        platforms: " PS3, Xbox 360, Wii U, PC, DL ",
        period: " Last FY Total ",
        value: 2.1,
    },
    {
        title: " Resident Evil Revelations ", 
        releaseDate: " May 2013 ",
        platforms: " PS3, Xbox 360, Wii U, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 2.0,
    },
]

const title0: Titles[] = [
    {
        title: " Street Fighter 30th Anniversary Collection ", 
        releaseDate: " May 2018 ",
        platforms: " PS4, Xbox One, NSW, PC, DL ",
        period: " 1st Quarter  ",
        value: 1.9,
    },
    {
        title: " Street Fighter 30th Anniversary Collection ", 
        releaseDate: " May 2018 ",
        platforms: " PS4, Xbox One, NSW, PC, DL ",
        period: " 2nd Quarter  ",
        value: 2.0,
    },
    {
        title: " Street Fighter 30th Anniversary Collection ", 
        releaseDate: " May 2018 ",
        platforms: " PS4, Xbox One, NSW, PC, DL ",
        period: " 3rd Quarter  ",
        value: 2.1,
    },
    {
        title: " Street Fighter 30th Anniversary Collection ", 
        releaseDate: " May 2018 ",
        platforms: " PS4, Xbox One, NSW, PC, DL ",
        period: " 4th Quarter  ",
        value: 2.2,
    },
    {
        title: " Street Fighter 30th Anniversary Collection ", 
        releaseDate: " May 2018 ",
        platforms: " PS4, Xbox One, NSW, PC, DL ",
        period: " Last FY Total ",
        value: 1.8,
    },
    {
        title: " Street Fighter 30th Anniversary Collection ", 
        releaseDate: " May 2018 ",
        platforms: " PS4, Xbox One, NSW, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 1.2,
    },
]

const title0: Titles[] = [
    {
        title: " Lost Planet 2 ", 
        releaseDate: " May 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 1st Quarter  ",
        value: 2.1,
    },
    {
        title: " Lost Planet 2 ", 
        releaseDate: " May 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 2nd Quarter  ",
        value: 2.1,
    },
    {
        title: " Lost Planet 2 ", 
        releaseDate: " May 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 3rd Quarter  ",
        value: 2.1,
    },
    {
        title: " Lost Planet 2 ", 
        releaseDate: " May 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 4th Quarter  ",
        value: 2.1,
    },
    {
        title: " Lost Planet 2 ", 
        releaseDate: " May 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Last FY Total ",
        value: 2.0,
    },
    {
        title: " Lost Planet 2 ", 
        releaseDate: " May 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Total at Two FYs prior ",
        value: 2.0,
    },
]

const title0: Titles[] = [
    {
        title: " Resident Evil 4 Wii edition ",
        releaseDate: " May 2007 ",
        platforms: " Wii, DL ",
        period: " 1st Quarter  ",
        value: 2.0,
    },
    {
        title: " Resident Evil 4 Wii edition ",
        releaseDate: " May 2007 ",
        platforms: " Wii, DL ",
        period: " 2nd Quarter  ",
        value: 2.0,
    },
    {
        title: " Resident Evil 4 Wii edition ",
        releaseDate: " May 2007 ",
        platforms: " Wii, DL ",
        period: " 3rd Quarter  ",
        value: 2.0,
    },
    {
        title: " Resident Evil 4 Wii edition ",
        releaseDate: " May 2007 ",
        platforms: " Wii, DL ",
        period: " 4th Quarter  ",
        value: 2.0,
    },
    {
        title: " Resident Evil 4 Wii edition ",
        releaseDate: " May 2007 ",
        platforms: " Wii, DL ",
        period: " Last FY Total ",
        value: 2.0,
    },
    {
        title: " Resident Evil 4 Wii edition ",
        releaseDate: " May 2007 ",
        platforms: " Wii, DL ",
        period: " Total at Two FYs prior ",
        value: 2.0,
    },
]

const title0: Titles[] = [
    {
        title: " Super Street Fighter IV ", 
        releaseDate: " Apr 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 1st Quarter  ",
        value: 1.9,
    },
    {
        title: " Super Street Fighter IV ", 
        releaseDate: " Apr 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 2nd Quarter  ",
        value: 1.9,
    },
    {
        title: " Super Street Fighter IV ", 
        releaseDate: " Apr 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 3rd Quarter  ",
        value: 1.9,
    },
    {
        title: " Super Street Fighter IV ", 
        releaseDate: " Apr 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 4th Quarter  ",
        value: 1.9,
    },
    {
        title: " Super Street Fighter IV ", 
        releaseDate: " Apr 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Last FY Total ",
        value: 1.9,
    },
    {
        title: " Super Street Fighter IV ", 
        releaseDate: " Apr 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Total at Two FYs prior ",
        value: 1.9,
    },
]

const title0: Titles[] = [
    {
        title: " Street Fighter X Tekken ", 
        releaseDate: " Mar 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 1st Quarter  ",
        value: 1.9,
    },
    {
        title: " Street Fighter X Tekken ", 
        releaseDate: " Mar 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 2nd Quarter  ",
        value: 1.9,
    },
    {
        title: " Street Fighter X Tekken ", 
        releaseDate: " Mar 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 3rd Quarter  ",
        value: 1.9,
    },
    {
        title: " Street Fighter X Tekken ", 
        releaseDate: " Mar 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 4th Quarter  ",
        value: 1.9,
    },
    {
        title: " Street Fighter X Tekken ", 
        releaseDate: " Mar 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Last FY Total ",
        value: 1.8,
    },
    {
        title: " Street Fighter X Tekken ", 
        releaseDate: " Mar 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Total at Two FYs prior ",
        value: 1.8,
    },
]

const title0: Titles[] = [
    {
        title: " Dead Rising ", 
        releaseDate: " Aug 2006 ",
        platforms: " Xbox 360, DL ",
        period: " 1st Quarter  ",
        value: 1.8,
    },
    {
        title: " Dead Rising ", 
        releaseDate: " Aug 2006 ",
        platforms: " Xbox 360, DL ",
        period: " 2nd Quarter  ",
        value: 1.8,
    },
    {
        title: " Dead Rising ", 
        releaseDate: " Aug 2006 ",
        platforms: " Xbox 360, DL ",
        period: " 3rd Quarter  ",
        value: 1.8,
    },
    {
        title: " Dead Rising ", 
        releaseDate: " Aug 2006 ",
        platforms: " Xbox 360, DL ",
        period: " 4th Quarter  ",
        value: 1.8,
    },
    {
        title: " Dead Rising ", 
        releaseDate: " Aug 2006 ",
        platforms: " Xbox 360, DL ",
        period: " Last FY Total ",
        value: 1.8,
    },
    {
        title: " Dead Rising ", 
        releaseDate: " Aug 2006 ",
        platforms: " Xbox 360, DL ",
        period: " Total at Two FYs prior ",
        value: 1.8,
    },
]

const title0: Titles[] = [
    {
        title: " Devil May Cry 4 Special Edition ", 
        releaseDate: " Jun 2015 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 1st Quarter  ",
        value: 1.7,
    },
    {
        title: " Devil May Cry 4 Special Edition ", 
        releaseDate: " Jun 2015 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 2nd Quarter  ",
        value: 1.8,
    },
    {
        title: " Devil May Cry 4 Special Edition ", 
        releaseDate: " Jun 2015 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 3rd Quarter  ",
        value: 1.8,
    },
    {
        title: " Devil May Cry 4 Special Edition ", 
        releaseDate: " Jun 2015 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 4th Quarter  ",
        value: 1.9,
    },
    {
        title: " Devil May Cry 4 Special Edition ", 
        releaseDate: " Jun 2015 ",
        platforms: " PS4, Xbox One, DL ",
        period: " Last FY Total ",
        value: 1.6,
    },
    {
        title: " Devil May Cry 4 Special Edition ", 
        releaseDate: " Jun 2015 ",
        platforms: " PS4, Xbox One, DL ",
        period: " Total at Two FYs prior ",
        value: 1.5,
    },
]

const title0: Titles[] = [
    {
        title: " Marvel vs. Capcom: Infinite ", 
        releaseDate: " Sep 2017 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 1.7,
    },
    {
        title: " Marvel vs. Capcom: Infinite ", 
        releaseDate: " Sep 2017 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 2nd Quarter  ",
        value: 1.7,
    },
    {
        title: " Marvel vs. Capcom: Infinite ", 
        releaseDate: " Sep 2017 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 3rd Quarter  ",
        value: 1.8,
    },
    {
        title: " Marvel vs. Capcom: Infinite ", 
        releaseDate: " Sep 2017 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 4th Quarter  ",
        value: 1.9,
    },
    {
        title: " Marvel vs. Capcom: Infinite ", 
        releaseDate: " Sep 2017 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Last FY Total ",
        value: 1.7,
    },
    {
        title: " Marvel vs. Capcom: Infinite ", 
        releaseDate: " Sep 2017 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 1.4,
    },
]

const title0: Titles[] = [
    {
        title: " Okami HD ", 
        releaseDate: " Dec 2017 ",
        platforms: " PS4, Xbox One, NSW, DL ",
        period: " 1st Quarter  ",
        value: 1.7,
    },
    {
        title: " Okami HD ", 
        releaseDate: " Dec 2017 ",
        platforms: " PS4, Xbox One, NSW, DL ",
        period: " 2nd Quarter  ",
        value: 1.7,
    },
    {
        title: " Okami HD ", 
        releaseDate: " Dec 2017 ",
        platforms: " PS4, Xbox One, NSW, DL ",
        period: " 3rd Quarter  ",
        value: 1.8,
    },
    {
        title: " Okami HD ", 
        releaseDate: " Dec 2017 ",
        platforms: " PS4, Xbox One, NSW, DL ",
        period: " 4th Quarter  ",
        value: 1.9,
    },
    {
        title: " Okami HD ", 
        releaseDate: " Dec 2017 ",
        platforms: " PS4, Xbox One, NSW, DL ",
        period: " Last FY Total ",
        value: 1.6,
    },
    {
        title: " Okami HD ", 
        releaseDate: " Dec 2017 ",
        platforms: " PS4, Xbox One, NSW, DL ",
        period: " Total at Two FYs prior ",
        value: 1.2,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
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
        value: 0,
    },
]
