import {
    Series,
    Header,
    printHead,
    printSeries,
} from "../../../utils/sega_annual_report_logic";

const series1: Series = 
    {
        title: " Shin Megami Tensei ",
        firstReleaseYear: " 1992 ",
        platforms: "Pachislot and Pachinko Machines, Consumer Games, Pictures, Toys, etc.",
        totalEditions: 32,
        ipType: " Acquired IP ",
        units: "(Units and downloads*)",
        value: 19.0,
        valueLastFY: 17.7,
        valueLastTwoFYs: 17.4,
        miscellaneous1: "(Full games and F2P total)",
        miscellaneous2: "*Including downloads of free-to-play titles ",
    };

const series2: Series = 
    {
        title: " Persona ",
        firstReleaseYear: " 1996 ",
        platforms: "Pachislot and Pachinko Machines, Consumer Games, Pictures, Toys, etc.",
        totalEditions: 18,
        ipType: " Acquired IP ",
        units: "(Units and downloads)",
        value: 15.5,
        valueLastFY: 15.0, 
        valueLastTwoFYs: 13.1,
        miscellaneous1: "(Full games and F2P total)",
    };

const series3: Series = 
    {
        title: " Total War ",
        firstReleaseYear: " 2000 ",
        platforms: "Consumer Games ",
        totalEditions: 0,
        ipType: " Acquired IP ",
        units: "(Units and downloads)",
        value: 40.4,
        valueLastFY: 37.8, 
        valueLastTwoFYs: 34.3, 
    };

const series4: Series = 
    {
        title: " Football Manager ",
        firstReleaseYear: " 2004 ",
        platforms: "Consumer Games ",
        totalEditions: 0,
        ipType: " Acquired IP ",
        units: "(Units and downloads)",
        value: 25.0,
        valueLastFY: 24.0,
        valueLastTwoFYs: 22.0,
    };

const series5: Series = 
    {
        title: " Sonic the Hedgehog ",
        firstReleaseYear: " 1991 ",
        platforms: "Pachislot and Pachinko Machines, Consumer Games, Pictures, Amusement Machines, Toys, etc.",
        totalEditions: 0,
        ipType: " Developed in-house IP ",
        units: "(Units and downloads*)",
        value: 1510.0,
        valueLastFY: 1380.0, 
        valueLastTwoFYs: 1140.0, 
        miscellaneous1: "(Full games and F2P total)",
        miscellaneous2: "*Including downloads of free-to-play titles ",
    };

const series6: Series = 
    {
        title: " Puyo Puyo ",
        firstReleaseYear: " 1991** ",
        platforms: "Pachislot and Pachinko Machines, Consumer Games, Pictures, Amusement Machines, Toys, etc.",
        totalEditions: 0,
        ipType: " Developed in-house IP ",
        units: "(Units and downloads*/IDs/users)",
        value: 37.7,
        valueLastFY: 35.0,
        valueLastTwoFYs: 32.0,
        miscellaneous1: "*Including downloads of free-to-play titles",
        miscellaneous2: "(Full games and F2P, Amusement Machines-registered IDs total (Total for registrations after IP acquisition)), **SEGA CORPORATION acquired the rights in 1998. Figures for cumulative unit sales are the totals for titles that SEGA sold after acquiring the rights.",
    };

const series7: Series = 
    {
        title: " Sakura Wars ",
        firstReleaseYear: " 1996 ",
        platforms: "Pachislot and Pachinko Machines, Consumer Games, Pictures, Amusement Machines",
        totalEditions: 0,
        ipType: " Developed in-house IP ",
        units: "(Units and downloads)",
        value: 5.8,
        valueLastFY: 5.7,
        valueLastTwoFYs: 4.1,
        miscellaneous1: "(Full games and F2P total)",
    };

const series8: Series = 
    {
        title: " Ryu ga Gotoku ",
        firstReleaseYear: " 2005 ",
        platforms: "Pachislot and Pachinko Machines, Consumer Games, Pictures, Toys, etc.",
        totalEditions: 167,
        ipType: " Developed in-house IP ",
        units: "(units)",
        value: 19.8,
        valueLastFY: 17.0,
        valueLastTwoFYs: 14.0,
        miscellaneous1: "(Full games total)",
    };

const series9: Series = 
    {
        title: " Virtua Fighter ",
        firstReleaseYear: " 1993 ",
        platforms: "Pachislot and Pachinko Machines, Consumer Games, Pictures, Amusement Machines, Toys, etc.",
        totalEditions: 0,
        ipType: " Developed in-house IP ",
        units: "(Units and downloads/IDs)",
        value: 18.8,
        valueLastFY: 18.0,
        valueLastTwoFYs: 0.0,
        miscellaneous1: "(Full games and F2P total. Total number of IDs in Amusement Machines.)",
    };

const series10: Series = 
    {
        title: " ALADDIN ",
        firstReleaseYear: " 1989 ",
        platforms: "Pachislot and Pachinko Machines, Consumer Games, Toys, etc.",
        totalEditions: 15,
        ipType: " Developed in-house IP ",
        units: "(units)",
        value: 0.58,
        valueLastFY: 0.56,
        valueLastTwoFYs: 0.56,
        miscellaneous1: "(pachislot and pachinko machines and amusement machines total)",
    };

const series11: Series = 
    {
        title: " Beast King ",
        firstReleaseYear: " 2001 ",
        platforms: "Pachislot and Pachinko Machines, Consumer Games, Toys, etc.",
        totalEditions: 16,
        ipType: " Developed in-house IP ",
        units: "(units)",
        value: 0.51,
        valueLastFY: 0.51,
        valueLastTwoFYs: 0.51,
        miscellaneous1: "(pachislot and pachinko machines and amusement machines total)",
    };

const series12: Series = 
    {
        title: " Phantasy Star ",
        firstReleaseYear: " 1987 ",
        platforms: "Pachislot and Pachinko Machines, Consumer Games, Pictures, Toys, etc.",
        totalEditions: 0,
        ipType: " Developed in-house IP ",
        units: "(users)",
        value: 9.0,
        valueLastFY: 9.0,
        valueLastTwoFYs: 5.5,
        miscellaneous1: "Total for domestic and overseas versions of PHANTASY STAR ONLINE 2 and PHANTASY STAR ONLINE 2 NEW GENESIS",
    };

const series13: Series = 
    {
        title: " Chain Chronicle ",
        firstReleaseYear: " 2013 ",
        platforms: "Pachislot and Pachinko Machines, Pictures, Consumer Games ",
        totalEditions: 3,
        ipType: " Developed in-house IP ",
        units: "(Units and downloads*)",
        value: 25.0,
        valueLastFY: 25.0,
        valueLastTwoFYs: 22.0,
        miscellaneous1: "(Full games and F2P total)",
        miscellaneous2: "*Including downloads of free-to-play titles ",
    };

const series14: Series = 
    {
        title: " SEGA feat. Hatsune Miku Project ",
        firstReleaseYear: " 2009 ",
        platforms: "Consumer Games, Amusement Machines, Toys, etc.",
        totalEditions: 67,
        ipType: " Licensed third party IP ",
        units: "(Units and downloads*)",
        value: 18.5,
        valueLastFY: 11.5,
        valueLastTwoFYs: 6.4,
        miscellaneous1: "(Full games and F2P total)",
        miscellaneous2: "*Including downloads of free-to-play titles ",
    };
const series15: Series = 
    {
        title: " Hokuto No Ken ",
        firstReleaseYear: " 2002 ",
        platforms: "Pachislot and Pachinko Machines, Consumer Games, Pictures, Amusement Machines, Toys, etc.",
        totalEditions: 38,
        ipType:  " Licensed third party IP ",
        units: "(Units and downloads)",
        value: 7.84,
        valueLastFY: 2.99,
        valueLastTwoFYs: 2.97,
        miscellaneous1: "(pachislot and pachinko machines, full games and F2P, and Amusement machines total)",
    };

const series16: Series = 
    {
        title: " SOUTEN-NO-KEN ",
        firstReleaseYear: " 2009 ",
        platforms: "Pachislot and Pachinko Machines, Consumer Games, Toys, etc.",
        totalEditions: 16,
        ipType: " Licensed third party IP ",
        units: "(units)",
        value: 0.49,
        valueLastFY: 0.48,
        valueLastTwoFYs: 0.48,
        miscellaneous1: "(pachislot and pachinko machines total)",
    };

const header: Header = {
    segaHeader: "| Sega Sammy - IP Series Data    |",
    secondHeader: "| IP Title                       |",
    thirdHeader: "| IP Type                        |",
    fourthHeader: "| Platforms                      |",
    fifthHeader: "| Total Editions                 |",
    sixthHeader: "| First Appearance and Rank      |",
    seventhHeader: "| Units                          |",
    summaryHeader: " Placeholder ",
    fiscalYear:  "| FY3/22 Cumulative  |", 
    fiscalYearYoY: "| FY3/22 Cml. YoY%   |",
    ltd: "| Life-To-Date       |",
}

export const collection = [
    series1,
    series2,
    series3,
    series4,
    series5,
    series6,
    series7,
    series8,
    series9,
    series10,
    series11,
    series12,
    series13,
    series14,
    series15,
    series16,
] as const;

const sortedFYCollection: Series[] = collection.filter((elem, index, array) => {
            // return elem.value - elem.valueLastFY !== 0 // probably shouldn't make two separate tables for FY and ALL...
            return elem // forgetting filter doesn't do anything here...
            // we need to create a new array that is identical to the original due to sort's mutating properties. filter titles that sold units this FY
    }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
        return (a.value - a.valueLastFY > b.value - b.valueLastFY)
            ? 1
            : (a.value - a.valueLastFY < b.value - b.valueLastFY)
            ? -1
            : 0
    }).map((elem, index) => {
        return {...elem, rank: index+1}
    })

    let printedSeries = sortedFYCollection.map((elem) => {
        return printSeries(header, elem)
    }).reduce((prev, next) => prev + "\n" + next)

    let printOne = printHead(header);

export const printSeriesFY =
`${printOne}
${printedSeries}`;