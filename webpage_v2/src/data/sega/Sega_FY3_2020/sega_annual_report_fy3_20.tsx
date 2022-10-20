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
        platforms: "Pachislot and Pachinko Machines, Consumer Games, Toys, etc.",
        totalEditions: 30,
        ipType: " Acquired IP ",
        units: "(Units and downloads*)",
        value: 17.4,
        valueLastFY: 17.4,
        valueLastTwoFYs: 12.4,
        miscellaneous1: "(Full games and F2P total)",
        miscellaneous2: "*Including downloads of free-to-play titles ",
    };

const series2: Series = 
    {
        title: " Persona ",
        firstReleaseYear: " 1996 ",
        platforms: "Pachislot and Pachinko Machines, Consumer Games, Toys, etc.",
        totalEditions: 18,
        ipType: " Acquired IP ",
        units: "(Units and downloads)",
        value: 13.1,
        valueLastFY: 10.2,
        valueLastTwoFYs: 9.3,
    };

const series3: Series = 
    {
        title: " Total War ",
        firstReleaseYear: " 2000 ",
        platforms: "Consumer Games ",
        totalEditions: 0,
        ipType: " Acquired IP ",
        units: "(Units and downloads)",
        value: 34.3,
        valueLastFY: 27.6,
        valueLastTwoFYs: 22.0,
    };

const series4: Series = 
    {
        title: " Football Manager ",
        firstReleaseYear: " 2004 ",
        platforms: "Consumer Games ",
        totalEditions: 0,
        ipType: " Acquired IP ",
        units: "(Units and downloads)",
        value: 22.0,
        valueLastFY: 20.0,
        valueLastTwoFYs: 18.1,
    };

const series5: Series = 
    {
        title: " Sonic the Hedgehog ",
        firstReleaseYear: " 1991 ",
        platforms: "Pachislot and Pachinko Machines, Consumer Games, Amusement Machines, Toys, etc.",
        totalEditions: 0,
        ipType: " Developed in-house IP ",
        units: "(Units and downloads*)",
        value: 1140.0,
        valueLastFY: 920.0,
        valueLastTwoFYs: 800.0,
        miscellaneous1: "(Full games and F2P total)",
        miscellaneous2: "*Including downloads of free-to-play titles ",
    };

const series6: Series = 
    {
        title: " Puyo Puyo ",
        firstReleaseYear: " 1991** ",
        platforms: "Pachislot and Pachinko Machines, Consumer Games, Amusement Machines, Toys, etc.",
        totalEditions: 0,
        ipType: " Developed in-house IP ",
        units: "(Units and downloads*/IDs)",
        value: 32.0,
        valueLastFY: 29.0,
        valueLastTwoFYs: 27.0,
        miscellaneous1: "*Including downloads of free-to-play titles",
        miscellaneous2: "(Full games and F2P, AM-registered IDs total (Total for registrations after IP acquisition)) **SEGA CORPORATION acquired the rights in 1998. Figures for cumulative unit sales are the totals for titles that SEGA sold after acquiring the rights.",
    };

const series7: Series = 
    {
        title: " Sakura Wars ",
        firstReleaseYear: " 1996 ",
        platforms: "Pachislot and Pachinko Machines, Consumer Games, Amusement Machines",
        totalEditions: 0,
        ipType: " Developed in-house IP ",
        units: "(Units and downloads)",
        value: 4.1,
        valueLastFY: 3.8,
        valueLastTwoFYs: 0,
        miscellaneous1: "(Full games and F2P total)",
    };

const series8: Series = 
    {
        title: " Ryu ga Gotoku ",
        firstReleaseYear: " 2005 ",
        platforms: "Pachislot and Pachinko Machines, Consumer Games, Toys, etc.",
        totalEditions: 115,
        ipType: " Developed in-house IP ",
        units: "(units)",
        value: 14.0,
        valueLastFY: 12.0,
        valueLastTwoFYs: 11.0,
        miscellaneous1: "(Full games total)",
    };

const series10: Series = 
    {
        title: " ALADDIN ",
        firstReleaseYear: " 1989 ",
        platforms: "Pachislot and Pachinko Machines, Consumer Games, Toys, etc.",
        totalEditions: 14,
        ipType: " Developed in-house IP ",
        units: "(units)",
        value: 0.56,
        valueLastFY: 0.57,
        valueLastTwoFYs: 0.57,
        miscellaneous1: "(pachislot and pachinko machines and amusement machines total)",
    };

const series11: Series = 
    {
        title: " Beast King ",
        firstReleaseYear: " 2001 ",
        platforms: "Pachislot and Pachinko Machines, Consumer Games, Toys, etc.",
        totalEditions: 15,
        ipType: " Developed in-house IP ",
        units: "(units)",
        value: 0.51,
        valueLastFY: 0.50,
        valueLastTwoFYs: 0.49,
        miscellaneous1: "(pachislot and pachinko machines and amusement machines total)",
    };

const series12: Series = 
    {
        title: " Phantasy Star ",
        firstReleaseYear: " 1987 ",
        platforms: "Pachislot and Pachinko Machines, Consumer Games, Toys, etc.",
        totalEditions: 0,
        ipType: " Developed in-house IP ",
        units: "(users)",
        value: 5.5,
        valueLastFY: 5.5,
        valueLastTwoFYs: 5.0,
        miscellaneous1: "Domestic total for PHANTASY STAR ONLINE 2",
    };

const series13: Series = 
    {
        title: " Chain Chronicle ",
        firstReleaseYear: " 2013 ",
        platforms: "Pachislot and Pachinko Machines, Consumer Games ",
        totalEditions: 3,
        ipType: " Developed in-house IP ",
        units: "(Units and downloads*)",
        value: 22.0,
        valueLastFY: 19.0,
        valueLastTwoFYs: 15.0,
        miscellaneous1: "(Full games and F2P total)",
        miscellaneous2: "*Including downloads of free-to-play titles ",
    };

const series14: Series = 
    {
        title: " SEGA feat. Hatsune Miku Project ",
        firstReleaseYear: " 2009 ",
        platforms: "Consumer Games, Amusement Machines, Toys, etc.",
        totalEditions: 64,
        ipType: " Licensed third party IP ",
        units: "(Units and downloads)",
        value:  6.4,
        valueLastFY: 6.1,
        valueLastTwoFYs: 6.0,
        miscellaneous1: "(Full games and F2P total)",
    };
const series15: Series = 
    {
        title: " Hokuto No Ken ",
        firstReleaseYear: " 2002 ",
        platforms: "Pachislot and Pachinko Machines, Consumer Games, Amusement Machines, Toys, etc.",
        totalEditions: 34,
        ipType:  " Licensed third party IP ",
        units: "(units)",
        value: 2.97,
        valueLastFY: 2.88,
        valueLastTwoFYs: 2.74,
        miscellaneous1: "(pachislot and pachinko machines total)",
    };

const series16: Series = 
    {
        title: " SOUTEN-NO-KEN ",
        firstReleaseYear: " 2009 ",
        platforms: "Pachislot and Pachinko Machines, Consumer Games, Toys, etc.",
        totalEditions: 13,
        ipType: " Licensed third party IP ",
        units: "(units)",
        value: 0.48,
        valueLastFY: 0.47,
        valueLastTwoFYs: 0.44,
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
    fiscalYear:  "| FY3/20 Cumulative  |", 
    fiscalYearYoY: "| FY3/20 Cml. YoY%   |",
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
    series10,
    series11,
    series12,
    series13,
    series14,
    series15,
    series16,
] as const;

const sortedFYCollection: Series[] = collection.filter((elem, index, array) => {
            return elem 
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