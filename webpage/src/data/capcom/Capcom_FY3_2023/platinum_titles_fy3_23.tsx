import {
    Header,
    Titles,
    labelTitles,
    printSummary,
    printSummaryHead,
    printHead,
    printTitles,
    quarterlyCalculation,
} from "../../../utils/capcom_platinum_titles_logic";

import {
   legacyCollection, 
} from "../Capcom_Cumulative_Data/platinum_legacy_titles"

const currentQuarter = 1;

const title1: Titles[] = [
    {
        title: " Monster Hunter: World ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 18.3,
        miscellaneous: "|(* Excludes shipments of \n|Monster Hunter World: \n|Iceborne Master Edition)",
    },
    {
        title: " Monster Hunter: World ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 2nd Quarter  ",
        value: 17.5,
        miscellaneous: "|(* Excludes shipments of \n|Monster Hunter World: \n|Iceborne Master Edition)",
    },
    {
        title: " Monster Hunter: World ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 3rd Quarter  ",
        value: 17.8,
        miscellaneous: "|(* Excludes shipments of \n|Monster Hunter World: \n|Iceborne Master Edition)",
    },
    {
        title: " Monster Hunter: World ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 4th Quarter  ",
        value: 18.0,
        miscellaneous: "|(* Excludes shipments of \n|Monster Hunter World: \n|Iceborne Master Edition)",
    },
    {
        title: " Monster Hunter: World ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Last FY Total ",
        value: 18.0,
        miscellaneous: "|(* Excludes shipments of \n|Monster Hunter World: \n|Iceborne Master Edition)",
    },
    {
        title: " Monster Hunter: World ",
        releaseDate: " Jan 2018 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 17.1,
        miscellaneous: "|(* Excludes shipments of \n|Monster Hunter World: \n|Iceborne Master Edition)",
    },
]

const title2: Titles[] = [
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jan 2017 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 11.0,
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
        value: 10.8,
    },
    {
        title: " RESIDENT EVIL 7 biohazard ",
        releaseDate: " Jan 2017 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 9.0,
    },
]

const title3: Titles[] = [
    {
        title: " Resident Evil 2 ",
        releaseDate: " Jan 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 9.8,
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
        value: 9.6,
    },
    {
        title: " Resident Evil 2 ",
        releaseDate: " Jan 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 8.1,
    },
]

const title4: Titles[] = [
    {
        title: " Monster Hunter World: Iceborne ", 
        releaseDate: " Sep 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 9.5,
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
        value: 9.2,
    },
    {
        title: " Monster Hunter World: Iceborne ", 
        releaseDate: " Sep 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 7.7,
    },
]

const title5: Titles[] = [
    {
        title: " Resident Evil 5 ", 
        releaseDate: " Mar 2009 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 1st Quarter  ",
        value: 8.3,
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
        value: 8.2,
    },
    {
        title: " Resident Evil 5 ", 
        releaseDate: " Mar 2009 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Total at Two FYs prior ",
        value: 7.8,
    },
]

const title6: Titles[] = [
    {
        title: " Resident Evil 6 ", 
        releaseDate: " Oct 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 1st Quarter  ",
        value: 8.3,
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
        value: 8.2,
    },
    {
        title: " Resident Evil 6 ", 
        releaseDate: " Oct 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Total at Two FYs prior ",
        value: 7.8,
    },
]

const title7: Titles[] = [
    {
        title: " Monster Hunter Rise ", 
        releaseDate: " Mar 2021 ",
        platforms: " NSW, PC, DL ",
        period: " 1st Quarter  ",
        value: 10.3,
    },
    {
        title: " Monster Hunter Rise ", 
        releaseDate: " Mar 2021 ",
        platforms: " NSW, PC, DL ",
        period: " 2nd Quarter  ",
        value: 7.5,
    },
    {
        title: " Monster Hunter Rise ", 
        releaseDate: " Mar 2021 ",
        platforms: " NSW, PC, DL ",
        period: " 3rd Quarter  ",
        value: 7.7,
    },
    {
        title: " Monster Hunter Rise ", 
        releaseDate: " Mar 2021 ",
        platforms: " NSW, PC, DL ",
        period: " 4th Quarter  ",
        value: 9.0,
    },
    {
        title: " Monster Hunter Rise ", 
        releaseDate: " Mar 2021 ",
        platforms: " NSW, PC, DL ",
        period: " Last FY Total ",
        value: 9.0,
    },
    {
        title: " Monster Hunter Rise ", 
        releaseDate: " Mar 2021 ",
        platforms: " NSW, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 4.8,
    },
]

const title9: Titles[] = [
    {
        title: " Street Fighter V ", 
        releaseDate: " Feb 2016 ",
        platforms: " PS4, PC, DL ",
        period: " 1st Quarter  ",
        value: 6.6,
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
        value: 6.2,
    },
    {
        title: " Street Fighter V ", 
        releaseDate: " Feb 2016 ",
        platforms: " PS4, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 5.5,
    },
]

const title10: Titles[] = [
    {
        title: " Resident Evil Village ", 
        releaseDate: " May 2021 ",
        platforms: " PS4, PS5, Xbox One, XSX, PC, DL ",
        period: " 1st Quarter  ",
        value: 6.4,
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
        value: 6.1,
    },
    {
        title: " Resident Evil Village ", 
        releaseDate: " May 2021 ",
        platforms: " PS4, PS5, Xbox One, XSX, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 0,
    },
]

const title12: Titles[] = [
    {
        title: " Resident Evil 3 ", 
        releaseDate: " Apr 2020 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 5.4,
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
        value: 5.2,
    },
    {
        title: " Resident Evil 3 ", 
        releaseDate: " Apr 2020 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 4.0,
    },
]

const title13: Titles[] = [
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

const title14: Titles[] = [
    {
        title: " Devil May Cry 5 ", 
        releaseDate: " Mar 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 5.7,
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
        value: 5.0,
    },
    {
        title: " Devil May Cry 5 ", 
        releaseDate: " Mar 2019 ",
        platforms: " PS4, Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 4.3,
    },
]

const title15: Titles[] = [
    {
        title: " Monster Hunter Generations Ultimate ", 
        releaseDate: " Mar 2017 ",
        platforms: " 3DS, NSW, DL ",
        period: " 1st Quarter  ",
        value: 4.5,
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
        value: 4.4,
    },
    {
        title: " Monster Hunter Generations Ultimate ", 
        releaseDate: " Mar 2017 ",
        platforms: " 3DS, NSW, DL ",
        period: " Total at Two FYs prior ",
        value: 4.3,
    },
]

const title16: Titles[] = [
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

const title17: Titles[] = [
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

const title18: Titles[] = [
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

const title20: Titles[] = [
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

const title22: Titles[] = [
    {
        title: " Street Fighter IV ", 
        releaseDate: " Feb 2009 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 1st Quarter  ",
        value: 3.4,
    },
    {
        title: " Street Fighter IV ", 
        releaseDate: " Feb 2009 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 2nd Quarter  ",
        value: 3.4,
    },
    {
        title: " Street Fighter IV ", 
        releaseDate: " Feb 2009 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 3rd Quarter  ",
        value: 3.4,
    },
    {
        title: " Street Fighter IV ", 
        releaseDate: " Feb 2009 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 4th Quarter  ",
        value: 3.4,
    },
    {
        title: " Street Fighter IV ", 
        releaseDate: " Feb 2009 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Last FY Total ",
        value: 3.4,
    },
    {
        title: " Street Fighter IV ", 
        releaseDate: " Feb 2009 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Total at Two FYs prior ",
        value: 3.4,
    },
]

const title23: Titles[] = [
    {
        title: " Resident Evil ", 
        releaseDate: " Nov 2014 ",
        platforms: " PS3, DL ",
        period: " 1st Quarter  ",
        value: 3.5,
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
        value: 3.4,
    },
    {
        title: " Resident Evil ", 
        releaseDate: " Nov 2014 ",
        platforms: " PS3, DL ",
        period: " Total at Two FYs prior ",
        value: 3.0,
    },
]

const title24: Titles[] = [
    {
        title: " Resident Evil 0: HD Remaster ", 
        releaseDate: " Jan 2016 ",
        platforms: " PS3, PS4, Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 3.4,
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
        value: 3.3,
    },
    {
        title: " Resident Evil 0: HD Remaster ", 
        releaseDate: " Jan 2016 ",
        platforms: " PS3, PS4, Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 2.9,
    },
]

const title25: Titles[] = [
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

const title26: Titles[] = [
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

const title27: Titles[] = [
    {
        title: " Dead Rising 3 ", 
        releaseDate: " Nov 2013 ",
        platforms: " Xbox One, DL ",
        period: " 1st Quarter  ",
        value: 3.1,
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
        value: 3.0,
    },
    {
        title: " Dead Rising 3 ", 
        releaseDate: " Nov 2013 ",
        platforms: " Xbox One, DL ",
        period: " Total at Two FYs prior ",
        value: 2.9,
    },
]

const title28: Titles[] = [
    {
        title: " Resident Evil Relevations 2 ", 
        releaseDate: " Mar 2015 ",
        platforms: " PS3, PS4, Xbox 360, Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 2.9,
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
        value: 2.9,
    },
    {
        title: " Resident Evil Relevations 2 ", 
        releaseDate: " Mar 2015 ",
        platforms: " PS3, PS4, Xbox 360, Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 2.7,
    },
]

const title30: Titles[] = [
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

const title31: Titles[] = [
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

const title32: Titles[] = [
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

const title33: Titles[] = [
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

const title35: Titles[] = [
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

const title37: Titles[] = [
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

const title38: Titles[] = [
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

const title40: Titles[] = [
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

const title41: Titles[] = [
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

const title42: Titles[] = [
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

const title45: Titles[] = [
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

const title46: Titles[] = [
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

const title48: Titles[] = [
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

const title51: Titles[] = [
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

const title52: Titles[] = [
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

const title53: Titles[] = [
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

const title54: Titles[] = [
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

const title55: Titles[] = [
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

const title56: Titles[] = [
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

const title57: Titles[] = [
    {
        title: " Resident Evil 4: Ultimate HD Edition ", 
        releaseDate: " Feb 2014 ",
        platforms: " PC, DL ",
        period: " 1st Quarter  ",
        value: 1.6,
    },
    {
        title: " Resident Evil 4: Ultimate HD Edition ", 
        releaseDate: " Feb 2014 ",
        platforms: " PC, DL ",
        period: " 2nd Quarter  ",
        value: 1.7,
    },
    {
        title: " Resident Evil 4: Ultimate HD Edition ", 
        releaseDate: " Feb 2014 ",
        platforms: " PC, DL ",
        period: " 3rd Quarter  ",
        value: 1.8,
    },
    {
        title: " Resident Evil 4: Ultimate HD Edition ", 
        releaseDate: " Feb 2014 ",
        platforms: " PC, DL ",
        period: " 4th Quarter  ",
        value: 1.9,
    },
    {
        title: " Resident Evil 4: Ultimate HD Edition ", 
        releaseDate: " Feb 2014 ",
        platforms: " PC, DL ",
        period: " Last FY Total ",
        value: 1.4,
    },
    {
        title: " Resident Evil 4: Ultimate HD Edition ", 
        releaseDate: " Feb 2014 ",
        platforms: " PC, DL ",
        period: " Total at Two FYs prior ",
        value: 1.1,
    },
]

const title58: Titles[] = [
    {
        title: " Dragon’s Dogma: Dark Arisen ", 
        releaseDate: " Oct 2017 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 1st Quarter  ",
        value: 1.6,
    },
    {
        title: " Dragon’s Dogma: Dark Arisen ", 
        releaseDate: " Oct 2017 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 2nd Quarter  ",
        value: 1.6,
    },
    {
        title: " Dragon’s Dogma: Dark Arisen ", 
        releaseDate: " Oct 2017 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 3rd Quarter  ",
        value: 1.7,
    },
    {
        title: " Dragon’s Dogma: Dark Arisen ", 
        releaseDate: " Oct 2017 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 4th Quarter  ",
        value: 1.7,
    },
    {
        title: " Dragon’s Dogma: Dark Arisen ", 
        releaseDate: " Oct 2017 ",
        platforms: " PS4, Xbox One, DL ",
        period: " Last FY Total ",
        value: 1.6,
    },
    {
        title: " Dragon’s Dogma: Dark Arisen ", 
        releaseDate: " Oct 2017 ",
        platforms: " PS4, Xbox One, DL ",
        period: " Total at Two FYs prior ",
        value: 1.0,
    },
]

const title62: Titles[] = [
    {
        title: " Lost Planet Extreme Condition ", 
        releaseDate: " Dec 2006 ",
        platforms: " Xbox 360, DL ",
        period: " 1st Quarter  ",
        value: 1.6,
    },
    {
        title: " Lost Planet Extreme Condition ", 
        releaseDate: " Dec 2006 ",
        platforms: " Xbox 360, DL ",
        period: " 2nd Quarter  ",
        value: 1.6,
    },
    {
        title: " Lost Planet Extreme Condition ", 
        releaseDate: " Dec 2006 ",
        platforms: " Xbox 360, DL ",
        period: " 3rd Quarter  ",
        value: 1.6,
    },
    {
        title: " Lost Planet Extreme Condition ", 
        releaseDate: " Dec 2006 ",
        platforms: " Xbox 360, DL ",
        period: " 4th Quarter  ",
        value: 1.7,
    },
    {
        title: " Lost Planet Extreme Condition ", 
        releaseDate: " Dec 2006 ",
        platforms: " Xbox 360, DL ",
        period: " Last FY Total ",
        value: 1.6,
    },
    {
        title: " Lost Planet Extreme Condition ", 
        releaseDate: " Dec 2006 ",
        platforms: " Xbox 360, DL ",
        period: " Total at Two FYs prior ",
        value: 1.6,
    },
]

const title66: Titles[] = [
    {
        title: " Ultra Street Fighter IV ", 
        releaseDate: " Aug 2014 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " 1st Quarter  ",
        value: 1.5,
    },
    {
        title: " Ultra Street Fighter IV ", 
        releaseDate: " Aug 2014 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " 2nd Quarter  ",
        value: 1.5,
    },
    {
        title: " Ultra Street Fighter IV ", 
        releaseDate: " Aug 2014 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " 3rd Quarter  ",
        value: 1.5,
    },
    {
        title: " Ultra Street Fighter IV ", 
        releaseDate: " Aug 2014 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " 4th Quarter  ",
        value: 1.6,
    },
    {
        title: " Ultra Street Fighter IV ", 
        releaseDate: " Aug 2014 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " Last FY Total ",
        value: 1.5,
    },
    {
        title: " Ultra Street Fighter IV ", 
        releaseDate: " Aug 2014 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 1.4,
    },
]

const title67: Titles[] = [
    {
        title: " DuckTales: Remastered ", 
        releaseDate: " Nov 2013 ", 
        platforms: " PS3, Xbox 360, Wii U, DL ",
        period: " 1st Quarter  ",
        value: 1.4,
    },
    {
        title: " DuckTales: Remastered ", 
        releaseDate: " Nov 2013 ", 
        platforms: " PS3, Xbox 360, Wii U, DL ",
        period: " 2nd Quarter  ",
        value: 1.4,
    },
    {
        title: " DuckTales: Remastered ", 
        releaseDate: " Nov 2013 ", 
        platforms: " PS3, Xbox 360, Wii U, DL ",
        period: " 3rd Quarter  ",
        value: 1.5,
    },
    {
        title: " DuckTales: Remastered ", 
        releaseDate: " Nov 2013 ", 
        platforms: " PS3, Xbox 360, Wii U, DL ",
        period: " 4th Quarter  ",
        value: 1.5,
    },
    {
        title: " DuckTales: Remastered ", 
        releaseDate: " Nov 2013 ", 
        platforms: " PS3, Xbox 360, Wii U, DL ",
        period: " Last FY Total ",
        value: 1.4,
    },
    {
        title: " DuckTales: Remastered ", 
        releaseDate: " Nov 2013 ", 
        platforms: " PS3, Xbox 360, Wii U, DL ",
        period: " Total at Two FYs prior ",
        value: 1.4,
    },
]

const title70: Titles[] = [
    {
        title: " Monster Hunter Stories 2: Wings of Ruin ", 
        releaseDate: " Jul 2021 ",
        platforms: " NSW, PC, DL ",
        period: " 1st Quarter  ",
        value: 0,
    },
    {
        title: " Monster Hunter Stories 2: Wings of Ruin ", 
        releaseDate: " Jul 2021 ",
        platforms: " NSW, PC, DL ",
        period: " 2nd Quarter  ",
        value: 1.3,
    },
    {
        title: " Monster Hunter Stories 2: Wings of Ruin ", 
        releaseDate: " Jul 2021 ",
        platforms: " NSW, PC, DL ",
        period: " 3rd Quarter  ",
        value: 1.4,
    },
    {
        title: " Monster Hunter Stories 2: Wings of Ruin ", 
        releaseDate: " Jul 2021 ",
        platforms: " NSW, PC, DL ",
        period: " 4th Quarter  ",
        value: 1.5,
    },
    {
        title: " Monster Hunter Stories 2: Wings of Ruin ", 
        releaseDate: " Jul 2021 ",
        platforms: " NSW, PC, DL ",
        period: " Last FY Total ",
        value: 0,
    },
    {
        title: " Monster Hunter Stories 2: Wings of Ruin ", 
        releaseDate: " Jul 2021 ",
        platforms: " NSW, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 0,
    },
]

const title71: Titles[] = [
    {
        title: " Dead Rising 2 Off The Record ", 
        releaseDate: " Oct 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 1st Quarter  ",
        value: 1.4,
    },
    {
        title: " Dead Rising 2 Off The Record ", 
        releaseDate: " Oct 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 2nd Quarter  ",
        value: 1.4,
    },
    {
        title: " Dead Rising 2 Off The Record ", 
        releaseDate: " Oct 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 3rd Quarter  ",
        value: 1.4,
    },
    {
        title: " Dead Rising 2 Off The Record ", 
        releaseDate: " Oct 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 4th Quarter  ",
        value: 1.4,
    },
    {
        title: " Dead Rising 2 Off The Record ", 
        releaseDate: " Oct 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Last FY Total ",
        value: 1.4,
    },
    {
        title: " Dead Rising 2 Off The Record ", 
        releaseDate: " Oct 2010 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Total at Two FYs prior ",
        value: 1.4,
    },
]

const title72: Titles[] = [
    {
        title: " Mega Man 11 ", 
        releaseDate: " Oct 2018 ",
        platforms: " PS4, Xbox One, NSW, DL ",
        period: " 1st Quarter  ",
        value: 1.3,
    },
    {
        title: " Mega Man 11 ", 
        releaseDate: " Oct 2018 ",
        platforms: " PS4, Xbox One, NSW, DL ",
        period: " 2nd Quarter  ",
        value: 1.4,
    },
    {
        title: " Mega Man 11 ", 
        releaseDate: " Oct 2018 ",
        platforms: " PS4, Xbox One, NSW, DL ",
        period: " 3rd Quarter  ",
        value: 1.4,
    },
    {
        title: " Mega Man 11 ", 
        releaseDate: " Oct 2018 ",
        platforms: " PS4, Xbox One, NSW, DL ",
        period: " 4th Quarter  ",
        value: 1.5,
    },
    {
        title: " Mega Man 11 ", 
        releaseDate: " Oct 2018 ",
        platforms: " PS4, Xbox One, NSW, DL ",
        period: " Last FY Total ",
        value: 1.3,
    },
    {
        title: " Mega Man 11 ", 
        releaseDate: " Oct 2018 ",
        platforms: " PS4, Xbox One, NSW, DL ",
        period: " Total at Two FYs prior ",
        value: 1.2,
    },
]

const title73: Titles[] = [
    {
        title: " Phoenix Wright: Ace Attorney Trilogy ", 
        releaseDate: " Feb 2019 ",
        platforms: " PS4, NSW, DL ",
        period: " 1st Quarter  ",
        value: 1.2,
    },
    {
        title: " Phoenix Wright: Ace Attorney Trilogy ", 
        releaseDate: " Feb 2019 ",
        platforms: " PS4, NSW, DL ",
        period: " 2nd Quarter  ",
        value: 1.3,
    },
    {
        title: " Phoenix Wright: Ace Attorney Trilogy ", 
        releaseDate: " Feb 2019 ",
        platforms: " PS4, NSW, DL ",
        period: " 3rd Quarter  ",
        value: 1.4,
    },
    {
        title: " Phoenix Wright: Ace Attorney Trilogy ", 
        releaseDate: " Feb 2019 ",
        platforms: " PS4, NSW, DL ",
        period: " 4th Quarter  ",
        value: 1.6,
    },
    {
        title: " Phoenix Wright: Ace Attorney Trilogy ", 
        releaseDate: " Feb 2019 ",
        platforms: " PS4, NSW, DL ",
        period: " Last FY Total ",
        value: 1.1,
    },
    {
        title: " Phoenix Wright: Ace Attorney Trilogy ", 
        releaseDate: " Feb 2019 ",
        platforms: " PS4, NSW, DL ",
        period: " Total at Two FYs prior ",
        value: 0,
    },
]

const title74: Titles[] = [
    {
        title: " Marvel vs. Capcom 2: New Age Of Heroes ", 
        releaseDate: " Jul 2009 ",
        platforms: " DL (PS3, Xbox 360) ",
        period: " 1st Quarter  ",
        value: 1.4,
    },
    {
        title: " Marvel vs. Capcom 2: New Age Of Heroes ", 
        releaseDate: " Jul 2009 ",
        platforms: " DL (PS3, Xbox 360) ",
        period: " 2nd Quarter  ",
        value: 1.4,
    },
    {
        title: " Marvel vs. Capcom 2: New Age Of Heroes ", 
        releaseDate: " Jul 2009 ",
        platforms: " DL (PS3, Xbox 360) ",
        period: " 3rd Quarter  ",
        value: 1.4,
    },
    {
        title: " Marvel vs. Capcom 2: New Age Of Heroes ", 
        releaseDate: " Jul 2009 ",
        platforms: " DL (PS3, Xbox 360) ",
        period: " 4th Quarter  ",
        value: 1.4,
    },
    {
        title: " Marvel vs. Capcom 2: New Age Of Heroes ", 
        releaseDate: " Jul 2009 ",
        platforms: " DL (PS3, Xbox 360) ",
        period: " Last FY Total ",
        value: 1.4,
    },
    {
        title: " Marvel vs. Capcom 2: New Age Of Heroes ", 
        releaseDate: " Jul 2009 ",
        platforms: " DL (PS3, Xbox 360) ",
        period: " Total at Two FYs prior ",
        value: 1.4,
    },
]

const title79: Titles[] = [
    {
        title: " Monster Hunter Freedom ", 
        releaseDate: " Dec 2005 ",
        platforms: " PSP, DL ",
        period: " 1st Quarter  ",
        value: 1.3,
    },
    {
        title: " Monster Hunter Freedom ", 
        releaseDate: " Dec 2005 ",
        platforms: " PSP, DL ",
        period: " 2nd Quarter  ",
        value: 1.3,
    },
    {
        title: " Monster Hunter Freedom ", 
        releaseDate: " Dec 2005 ",
        platforms: " PSP, DL ",
        period: " 3rd Quarter  ",
        value: 1.3,
    },
    {
        title: " Monster Hunter Freedom ", 
        releaseDate: " Dec 2005 ",
        platforms: " PSP, DL ",
        period: " 4th Quarter  ",
        value: 1.3,
    },
    {
        title: " Monster Hunter Freedom ", 
        releaseDate: " Dec 2005 ",
        platforms: " PSP, DL ",
        period: " Last FY Total ",
        value: 1.3,
    },
    {
        title: " Monster Hunter Freedom ", 
        releaseDate: " Dec 2005 ",
        platforms: " PSP, DL ",
        period: " Total at Two FYs prior ",
        value: 1.3,
    },
]

const title80: Titles[] = [
    {
        title: " Remember Me ", 
        releaseDate: " Jun 2013 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " 1st Quarter  ",
        value: 1.3,
    },
    {
        title: " Remember Me ", 
        releaseDate: " Jun 2013 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " 2nd Quarter  ",
        value: 1.3,
    },
    {
        title: " Remember Me ", 
        releaseDate: " Jun 2013 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " 3rd Quarter  ",
        value: 1.3,
    },
    {
        title: " Remember Me ", 
        releaseDate: " Jun 2013 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " 4th Quarter  ",
        value: 1.3,
    },
    {
        title: " Remember Me ", 
        releaseDate: " Jun 2013 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " Last FY Total ",
        value: 1.3,
    },
    {
        title: " Remember Me ", 
        releaseDate: " Jun 2013 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 1.2,
    },
]

const title81: Titles[] = [
    {
        title: " Super Street Fighter IV 3D ", 
        releaseDate: " Feb 2011 ",
        platforms: " 3DS, DL ",
        period: " 1st Quarter  ",
        value: 1.3,
    },
    {
        title: " Super Street Fighter IV 3D ", 
        releaseDate: " Feb 2011 ",
        platforms: " 3DS, DL ",
        period: " 2nd Quarter  ",
        value: 1.3,
    },
    {
        title: " Super Street Fighter IV 3D ", 
        releaseDate: " Feb 2011 ",
        platforms: " 3DS, DL ",
        period: " 3rd Quarter  ",
        value: 1.3,
    },
    {
        title: " Super Street Fighter IV 3D ", 
        releaseDate: " Feb 2011 ",
        platforms: " 3DS, DL ",
        period: " 4th Quarter  ",
        value: 1.3,
    },
    {
        title: " Super Street Fighter IV 3D ", 
        releaseDate: " Feb 2011 ",
        platforms: " 3DS, DL ",
        period: " Last FY Total ",
        value: 1.3,
    },
    {
        title: " Super Street Fighter IV 3D ", 
        releaseDate: " Feb 2011 ",
        platforms: " 3DS, DL ",
        period: " Total at Two FYs prior ",
        value: 1.3,
    },
]

const title83: Titles[] = [
    {
        title: " Ultimate Marvel vs. Capcom 3 ", 
        releaseDate: " Mar 2017 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 1st Quarter  ",
        value: 1.2,
    },
    {
        title: " Ultimate Marvel vs. Capcom 3 ", 
        releaseDate: " Mar 2017 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 2nd Quarter  ",
        value: 1.2,
    },
    {
        title: " Ultimate Marvel vs. Capcom 3 ", 
        releaseDate: " Mar 2017 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 3rd Quarter  ",
        value: 1.3,
    },
    {
        title: " Ultimate Marvel vs. Capcom 3 ", 
        releaseDate: " Mar 2017 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 4th Quarter  ",
        value: 1.3,
    },
    {
        title: " Ultimate Marvel vs. Capcom 3 ", 
        releaseDate: " Mar 2017 ",
        platforms: " PS4, Xbox One, DL ",
        period: " Last FY Total ",
        value: 1.1,
    },
    {
        title: " Ultimate Marvel vs. Capcom 3 ", 
        releaseDate: " Mar 2017 ",
        platforms: " PS4, Xbox One, DL ",
        period: " Total at Two FYs prior ",
        value: 0,
    },
]

const title86: Titles[] = [
    {
        title: " Dead Rising 4 ", 
        releaseDate: " Dec 2016 ",
        platforms: " Xbox One, PC, DL ",
        period: " 1st Quarter  ",
        value: 1.2,
    },
    {
        title: " Dead Rising 4 ", 
        releaseDate: " Dec 2016 ",
        platforms: " Xbox One, PC, DL ",
        period: " 2nd Quarter  ",
        value: 1.2,
    },
    {
        title: " Dead Rising 4 ", 
        releaseDate: " Dec 2016 ",
        platforms: " Xbox One, PC, DL ",
        period: " 3rd Quarter  ",
        value: 1.2,
    },
    {
        title: " Dead Rising 4 ", 
        releaseDate: " Dec 2016 ",
        platforms: " Xbox One, PC, DL ",
        period: " 4th Quarter  ",
        value: 1.3,
    },
    {
        title: " Dead Rising 4 ", 
        releaseDate: " Dec 2016 ",
        platforms: " Xbox One, PC, DL ",
        period: " Last FY Total ",
        value: 1.2,
    },
    {
        title: " Dead Rising 4 ", 
        releaseDate: " Dec 2016 ",
        platforms: " Xbox One, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 1.0,
    },
]

const title87: Titles[] = [
    {
        title: " Resident Evil 4 ", 
        releaseDate: " Mar 2012 ",
        platforms: " DL (PS3, Xbox 360) ",
        period: " 1st Quarter  ",
        value: 1.2,
    },
    {
        title: " Resident Evil 4 ", 
        releaseDate: " Mar 2012 ",
        platforms: " DL (PS3, Xbox 360) ",
        period: " 2nd Quarter  ",
        value: 1.2,
    },
    {
        title: " Resident Evil 4 ", 
        releaseDate: " Mar 2012 ",
        platforms: " DL (PS3, Xbox 360) ",
        period: " 3rd Quarter  ",
        value: 1.2,
    },
    {
        title: " Resident Evil 4 ", 
        releaseDate: " Mar 2012 ",
        platforms: " DL (PS3, Xbox 360) ",
        period: " 4th Quarter  ",
        value: 1.2,
    },
    {
        title: " Resident Evil 4 ", 
        releaseDate: " Mar 2012 ",
        platforms: " DL (PS3, Xbox 360) ",
        period: " Last FY Total ",
        value: 1.2,
    },
    {
        title: " Resident Evil 4 ", 
        releaseDate: " Mar 2012 ",
        platforms: " DL (PS3, Xbox 360) ",
        period: " Total at Two FYs prior ",
        value: 0,
    },
]

const title88: Titles[] = [
    {
        title: " Mega Man Legacy Collection ", 
        releaseDate: " Aug 2015 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 1st Quarter  ",
        value: 1.2,
    },
    {
        title: " Mega Man Legacy Collection ", 
        releaseDate: " Aug 2015 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 2nd Quarter  ",
        value: 1.2,
    },
    {
        title: " Mega Man Legacy Collection ", 
        releaseDate: " Aug 2015 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 3rd Quarter  ",
        value: 1.2,
    },
    {
        title: " Mega Man Legacy Collection ", 
        releaseDate: " Aug 2015 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 4th Quarter  ",
        value: 1.2,
    },
    {
        title: " Mega Man Legacy Collection ", 
        releaseDate: " Aug 2015 ",
        platforms: " PS4, Xbox One, DL ",
        period: " Last FY Total ",
        value: 1.2,
    },
    {
        title: " Mega Man Legacy Collection ", 
        releaseDate: " Aug 2015 ",
        platforms: " PS4, Xbox One, DL ",
        period: " Total at Two FYs prior ",
        value: 1.1,
    },
]

const title90: Titles[] = [
    {
        title: " Ultimate Marvel vs. Capcom 3 ", 
        releaseDate: " Nov 2011 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 1st Quarter  ",
        value: 1.2,
    },
    {
        title: " Ultimate Marvel vs. Capcom 3 ", 
        releaseDate: " Nov 2011 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 2nd Quarter  ",
        value: 1.2,
    },
    {
        title: " Ultimate Marvel vs. Capcom 3 ", 
        releaseDate: " Nov 2011 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 3rd Quarter  ",
        value: 1.2,
    },
    {
        title: " Ultimate Marvel vs. Capcom 3 ", 
        releaseDate: " Nov 2011 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 4th Quarter  ",
        value: 1.2,
    },
    {
        title: " Ultimate Marvel vs. Capcom 3 ", 
        releaseDate: " Nov 2011 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Last FY Total ",
        value: 1.2,
    },
    {
        title: " Ultimate Marvel vs. Capcom 3 ", 
        releaseDate: " Nov 2011 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Total at Two FYs prior ",
        value: 1.2,
    },
]

const title91: Titles[] = [
    {
        title: " Dead Rising ", 
        releaseDate: " Sep 2016 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 1st Quarter  ",
        value: 1.2,
    },
    {
        title: " Dead Rising ", 
        releaseDate: " Sep 2016 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 2nd Quarter  ",
        value: 1.2,
    },
    {
        title: " Dead Rising ", 
        releaseDate: " Sep 2016 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 3rd Quarter  ",
        value: 1.2,
    },
    {
        title: " Dead Rising ", 
        releaseDate: " Sep 2016 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 4th Quarter  ",
        value: 1.2,
    },
    {
        title: " Dead Rising ", 
        releaseDate: " Sep 2016 ",
        platforms: " PS4, Xbox One, DL ",
        period: " Last FY Total ",
        value: 1.1,
    },
    {
        title: " Dead Rising ", 
        releaseDate: " Sep 2016 ",
        platforms: " PS4, Xbox One, DL ",
        period: " Total at Two FYs prior ",
        value: 0,
    },
]

const title92: Titles[] = [
    {
        title: " DMC Devil May Cry Definitive Edition ", 
        releaseDate: " Mar 2015 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 1st Quarter  ",
        value: 1.2,
    },
    {
        title: " DMC Devil May Cry Definitive Edition ", 
        releaseDate: " Mar 2015 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 2nd Quarter  ",
        value: 1.2,
    },
    {
        title: " DMC Devil May Cry Definitive Edition ", 
        releaseDate: " Mar 2015 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 3rd Quarter  ",
        value: 1.2,
    },
    {
        title: " DMC Devil May Cry Definitive Edition ", 
        releaseDate: " Mar 2015 ",
        platforms: " PS4, Xbox One, DL ",
        period: " 4th Quarter  ",
        value: 1.2,
    },
    {
        title: " DMC Devil May Cry Definitive Edition ", 
        releaseDate: " Mar 2015 ",
        platforms: " PS4, Xbox One, DL ",
        period: " Last FY Total ",
        value: 1.1,
    },
    {
        title: " DMC Devil May Cry Definitive Edition ", 
        releaseDate: " Mar 2015 ",
        platforms: " PS4, Xbox One, DL ",
        period: " Total at Two FYs prior ",
        value: 0,
    },
]

const title93: Titles[] = [
    {
        title: " Devil May Cry HD Collection ", 
        releaseDate: " Mar 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 1st Quarter  ",
        value: 1.2,
    },
    {
        title: " Devil May Cry HD Collection ", 
        releaseDate: " Mar 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 2nd Quarter  ",
        value: 1.2,
    },
    {
        title: " Devil May Cry HD Collection ", 
        releaseDate: " Mar 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 3rd Quarter  ",
        value: 1.2,
    },
    {
        title: " Devil May Cry HD Collection ", 
        releaseDate: " Mar 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 4th Quarter  ",
        value: 1.2,
    },
    {
        title: " Devil May Cry HD Collection ", 
        releaseDate: " Mar 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Last FY Total ",
        value: 1.2,
    },
    {
        title: " Devil May Cry HD Collection ", 
        releaseDate: " Mar 2012 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Total at Two FYs prior ",
        value: 1.2,
    },
]

const title99: Titles[] = [
    {
        title: " Super Street Fighter IV Arcade Edition ", 
        releaseDate: " Jun 2011 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 1st Quarter  ",
        value: 1.1,
    },
    {
        title: " Super Street Fighter IV Arcade Edition ", 
        releaseDate: " Jun 2011 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 2nd Quarter  ",
        value: 1.1,
    },
    {
        title: " Super Street Fighter IV Arcade Edition ", 
        releaseDate: " Jun 2011 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 3rd Quarter  ",
        value: 1.1,
    },
    {
        title: " Super Street Fighter IV Arcade Edition ", 
        releaseDate: " Jun 2011 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " 4th Quarter  ",
        value: 1.1,
    },
    {
        title: " Super Street Fighter IV Arcade Edition ", 
        releaseDate: " Jun 2011 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Last FY Total ",
        value: 1.1,
    },
    {
        title: " Super Street Fighter IV Arcade Edition ", 
        releaseDate: " Jun 2011 ",
        platforms: " PS3, Xbox 360, DL ",
        period: " Total at Two FYs prior ",
        value: 1.1,
    },
]

const title100: Titles[] = [
    {
        title: " Bionic Commando ", 
        releaseDate: " Jun 2009 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " 1st Quarter  ",
        value: 1.1,
    },
    {
        title: " Bionic Commando ", 
        releaseDate: " Jun 2009 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " 2nd Quarter  ",
        value: 1.1,
    },
    {
        title: " Bionic Commando ", 
        releaseDate: " Jun 2009 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " 3rd Quarter  ",
        value: 1.1,
    },
    {
        title: " Bionic Commando ", 
        releaseDate: " Jun 2009 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " 4th Quarter  ",
        value: 1.1,
    },
    {
        title: " Bionic Commando ", 
        releaseDate: " Jun 2009 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " Last FY Total ",
        value: 1.1,
    },
    {
        title: " Bionic Commando ", 
        releaseDate: " Jun 2009 ",
        platforms: " PS3, Xbox 360, PC, DL ",
        period: " Total at Two FYs prior ",
        value: 1.1,
    },
]

const title101: Titles[] = [
    {
        title: " Resident Evil Revelations Collection ", 
        releaseDate: " Nov 2017 ",
        platforms: " NSW, DL ",
        period: " 1st Quarter  ",
        value: 1.0,
    },
    {
        title: " Resident Evil Revelations Collection ", 
        releaseDate: " Nov 2017 ",
        platforms: " NSW, DL ",
        period: " 2nd Quarter  ",
        value: 1.0,
    },
    {
        title: " Resident Evil Revelations Collection ", 
        releaseDate: " Nov 2017 ",
        platforms: " NSW, DL ",
        period: " 3rd Quarter  ",
        value: 1.1,
    },
    {
        title: " Resident Evil Revelations Collection ", 
        releaseDate: " Nov 2017 ",
        platforms: " NSW, DL ",
        period: " 4th Quarter  ",
        value: 1.1,
    },
    {
        title: " Resident Evil Revelations Collection ", 
        releaseDate: " Nov 2017 ",
        platforms: " NSW, DL ",
        period: " Last FY Total ",
        value: 0,
    },
    {
        title: " Resident Evil Revelations Collection ", 
        releaseDate: " Nov 2017 ",
        platforms: " NSW, DL ",
        period: " Total at Two FYs prior ",
        value: 0,
    },
]

const title105: Titles[] = [
    {
        title: " Strider ", 
        releaseDate: " Feb 2014 ",
        platforms: " DL (PS3, PS4, Xbox 360, Xbox One, PC) ",
        period: " 1st Quarter  ",
        value: 1.0,
    },
    {
        title: " Strider ", 
        releaseDate: " Feb 2014 ",
        platforms: " DL (PS3, PS4, Xbox 360, Xbox One, PC) ",
        period: " 2nd Quarter  ",
        value: 1.0,
    },
    {
        title: " Strider ", 
        releaseDate: " Feb 2014 ",
        platforms: " DL (PS3, PS4, Xbox 360, Xbox One, PC) ",
        period: " 3rd Quarter  ",
        value: 1.0,
    },
    {
        title: " Strider ", 
        releaseDate: " Feb 2014 ",
        platforms: " DL (PS3, PS4, Xbox 360, Xbox One, PC) ",
        period: " 4th Quarter  ",
        value: 1.1,
    },
    {
        title: " Strider ", 
        releaseDate: " Feb 2014 ",
        platforms: " DL (PS3, PS4, Xbox 360, Xbox One, PC) ",
        period: " Last FY Total ",
        value: 1.0,
    },
    {
        title: " Strider ", 
        releaseDate: " Feb 2014 ",
        platforms: " DL (PS3, PS4, Xbox 360, Xbox One, PC) ",
        period: " Total at Two FYs prior ",
        value: 0,
    },
]

// const title0: Titles[] = [
//     {
//         title: "", 
//         releaseDate: "",
//         platforms: "",
//         period: " 1st Quarter  ",
//         value: 0,
//     },
//     {
//         title: "", 
//         releaseDate: "",
//         platforms: "",
//         period: " 2nd Quarter  ",
//         value: 0,
//     },
//     {
//         title: "", 
//         releaseDate: "",
//         platforms: "",
//         period: " 3rd Quarter  ",
//         value: 0,
//     },
//     {
//         title: "", 
//         releaseDate: "",
//         platforms: "",
//         period: " 4th Quarter  ",
//         value: 0,
//     },
//     {
//         title: "", 
//         releaseDate: "",
//         platforms: "",
//         period: " Last FY Total ",
//         value: 0,
//     },
//     {
//         title: "", 
//         releaseDate: "",
//         platforms: "",
//         period: " Total at Two FYs prior ",
//         value: 0,
//     },
// ]

const header: Header = {
    capcomHeader: "| Capcom - Platinum Titles       |",
    secondHeader: "| Title                          |",
    thirdHeader: "| Platform                       |",
    fourthHeader: "| Release Date and Rank          |",
    fifthHeader: "| Units                          |",
    fiscalYear: "| FY3/22 Cumulative  |",
    fiscalYearYoY: "| FY3/22 Cml. YoY%   |",
    ltd: "| Life-To-Date       |",
    summaryHeader: "| FY3/22 Cml. |   Units |    %    |",
}

const collection = [
    title1,
    title2,
    title3,
    title4,
    title5,
    title6,
    title7,
    title9,
    title10,
    title12,
    title13,
    title14,
    title15,
    title16,
    title17,
    title18,
    title20,
    title22,
    title23,
    title24,
    title25,
    title26,
    title27,
    title28,
    title30,
    title31,
    title32,
    title33,
    title35,
    title37,
    title38,
    title40,
    title41,
    title42,
    title45,
    title46,
    title48,
    title51,
    title52,
    title53,
    title54,
    title55,
    title56,
    title57,
    title58,
    title62,
    title66,
    title67,
    title70,
    title71,
    title72,
    title73,
    title74,
    title79,
    title80,
    title81,
    title83,
    title86,
    title87,
    title88,
    title90,
    title91,
    title92,
    title93,
    title99,
    title100,
    title101,
    title105,
] as const;

export const sortedCollection = collection.filter((elem, index, array) => {
            return elem[3].value - elem[4].value !== 0
            // we need to create a new array that is identical to the original due to sort's mutating properties. filter titles that sold units this FY
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

// export const sortedCollection = collection.map((elem, index, array) => {
//             return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
//     }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
//         return (a[currentQuarter-1].value > b[currentQuarter-1].value)
//             ? 1
//             : (a[currentQuarter-1].value < b[currentQuarter-1].value)
//             ? -1
//             : 0
//     }).map((elem, index) => {
//         // x is a nested map so that the actual elements of the array can be accessed, the level above is arrays being the elements since it is a collection of arrays
//         const x: Titles[] = [...elem].map((elemTwo) => {
//             return {...elemTwo, rank: index+1} 
//         })
//         return x // x which is the returned array is now returned to the array of arrays
//     })

const differenceTitles = sortedCollection.map((elem) => {
        return quarterlyCalculation(elem)
    })

const printListedTitlesFY = differenceTitles.map((elem, index) => {
        return printTitles(header, elem, sortedCollection[index], currentQuarter)
    }) as string[];


const newTitles = sortedCollection.map((elem) => {
        return labelTitles(elem)
    }).map((elem) => {
        return elem.filter((secondElem) => {
            return secondElem.label === " New! "
        })
    }).filter((elem) => elem.length !== 0 // to filter out zero length arrays
    ).map((elem) => {
    return elem[3].value // 4th quarter, new titles would not have last FY numbers, therefore can be summed up. 
    })

const newSum = newTitles.reduce((prev, next) => prev + next, 0);        

const recurringTitles = sortedCollection.map((elem) => {
        return labelTitles(elem)
    }).map((elem) => {
        return elem.filter((secondElem) => {
            return secondElem.label === " Recurring "
        })
    }).filter((elem) => elem.length !== 0 // to filter out zero length arrays
    ).map((elem) => {
        return elem[3].value - elem[4].value // to get FY cml. number
    })

const recurringSum = recurringTitles.reduce((prev, next) => prev + next, 0)    

const sporadicTitles = sortedCollection.map((elem) => {
        return labelTitles(elem)
    }).map((elem) => {
        return elem.filter((secondElem) => {
            return secondElem.label === " Sporadic " 
        })
    }).filter((elem) => elem.length !== 0 // to filter out zero length arrays
    ).map((elem) => {
        return elem[3].value - elem[4].value // to get FY cml. number
    })

const sporadicSum = sporadicTitles.reduce((prev, next) => prev + next, 0)    


const printOne = printHead(header);

const printSummaryOne = printSummaryHead(header, newTitles, recurringTitles, sporadicTitles)

const printSummaryTwo = printSummary(header, newSum, recurringSum, sporadicSum)

export const printPlatinumTitles = (currentQuarter !== 4)
    ? [printOne, ...printListedTitlesFY].reduce((prev, next) => prev + "\n" + next )
    : [printOne, ...printListedTitlesFY, printSummaryOne, printSummaryTwo].reduce((prev, next) => prev + "\n" + next )

