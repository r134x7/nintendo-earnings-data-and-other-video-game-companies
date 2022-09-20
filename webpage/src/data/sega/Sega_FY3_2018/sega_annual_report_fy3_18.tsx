import {
    Series,
    Header,
    printHead,
    printSeries,
} from "../../../utils/sega_annual_report_logic";

const series1: Series = 
    {
        title: " Megami Tensei ",
        firstReleaseYear: " 1987 ",
        platforms: "Pachislot and Pachinko Machines, Digital Games, Packaged Games, Toys, etc.",
        totalEditions: 30,
        ipType: " Acquired IP ",
        units: "(Units and downloads*)",
        value: 12.4,
        valueLastFY: 7.2,
        valueLastTwoFYs: 7.2,
        miscellaneous1: "(packaged and digital total)",
        miscellaneous2: "*Including downloads of free-to-play titles ",
    };

const series2: Series = 
    {
        title: " Persona ",
        firstReleaseYear: " 1996 ",
        platforms: "Pachislot and Pachinko Machines, Digital Games, Packaged Games, Toys, etc.",
        totalEditions: 15,
        ipType: " Acquired IP ",
        units: "(Units and downloads)",
        value: 9.3,
        valueLastFY: 8.5,
        valueLastTwoFYs: 6.9,
    };

const series9: Series = 
    {
        title: " Etrian Odyssey ",
        firstReleaseYear: " 2007 ",
        platforms: "Digital Games, Packaged Games, Toys, etc.",
        totalEditions: 0,
        ipType: " Acquired IP ",
        units: "(Units and downloads)",
        value: 1.9,
        valueLastFY: 1.8,
        valueLastTwoFYs: 1.5,
        miscellaneous1: "(packaged and digital total)",
    };

const series3: Series = 
    {
        title: " Total War ",
        firstReleaseYear: " 2000 ",
        platforms: "Digital Games, Packaged Games",
        totalEditions: 0,
        ipType: " Acquired IP ",
        units: "(Units and downloads)",
        value: 22.0,
        valueLastFY: 0,
        valueLastTwoFYs: 0,
    };

const series4: Series = 
    {
        title: " Football Manager ",
        firstReleaseYear: " 2004 ",
        platforms: "Digital Games, Packaged Games",
        totalEditions: 0,
        ipType: " Acquired IP ",
        units: "(Units and downloads)",
        value: 18.1,
        valueLastFY: 0,
        valueLastTwoFYs: 0,
    };

const series5: Series = 
    {
        title: " Sonic the Hedgehog ",
        firstReleaseYear: " 1991 ",
        platforms: "Pachislot and Pachinko Machines, Digital Games, Packaged Games, Amusement Machines, Toys, etc.",
        totalEditions: 0,
        ipType: " Developed in-house IP ",
        units: "(Units and downloads*)",
        value: 800.0,
        valueLastFY: 360.0,
        valueLastTwoFYs: 350.0,
        miscellaneous1: "(packaged and digital total)",
        miscellaneous2: "*Including downloads of free-to-play titles ",
    };

const series6: Series = 
    {
        title: " Puyo Puyo ",
        firstReleaseYear: " 1991** ",
        platforms: "Pachislot and Pachinko Machines, Digital Games, Packaged Games, Amusement Machines, Toys, etc.",
        totalEditions: 0,
        ipType: " Developed in-house IP ",
        units: "(Units and downloads*/ID)",
        value: 27.0,
        valueLastFY: 25.0,
        valueLastTwoFYs: 22.0,
        miscellaneous1: "*Including downloads of free-to-play titles",
        miscellaneous2: "(packaged and digital, AM-registered ID total (total for registrations after IP acquisition)) **SEGA CORPORATION acquired the rights in 1998. Figures for cumulative unit sales are the totals for titles that SEGA sold after acquiring the rights.",
    };

const series8: Series = 
    {
        title: " Ryu ga Gotoku ",
        firstReleaseYear: " 2005 ",
        platforms: "Pachislot and Pachinko Machines, Digital Games, Packaged Games, Toys, etc.",
        totalEditions: 92,
        ipType: " Developed in-house IP ",
        units: "(units and downloads)",
        value: 11.0,
        valueLastFY: 10.5,
        valueLastTwoFYs: 9.3,
        miscellaneous1: "(packaged total)",
    };

const series10: Series = 
    {
        title: " ALADDIN ",
        firstReleaseYear: " 1989 ",
        platforms: "Pachislot and Pachinko Machines, Digital Games, Packaged Games, Toys, etc.",
        totalEditions: 14,
        ipType: " Developed in-house IP ",
        units: "(units)",
        value: 0.57,
        valueLastFY: 0.57,
        valueLastTwoFYs: 0.57,
        miscellaneous1: "(pachislot and pachinko machines and amusement machines total)",
    };

const series11: Series = 
    {
        title: " Beast King ",
        firstReleaseYear: " 2001 ",
        platforms: "Pachislot and Pachinko Machines, Digital Games, Packaged Games, Toys, etc.",
        totalEditions: 15,
        ipType: " Developed in-house IP ",
        units: "(units)",
        value: 0.49,
        valueLastFY: 0.49,
        valueLastTwoFYs: 0.49,
        miscellaneous1: "(pachislot and pachinko machines and amusement machines total)",
    };

const series12: Series = 
    {
        title: " Phantasy Star ",
        firstReleaseYear: " 1987 ",
        platforms: "Pachislot and Pachinko Machines, Digital Games, Packaged Games, Toys, etc.",
        totalEditions: 0,
        ipType: " Developed in-house IP ",
        units: "(users)",
        value: 5.0,
        valueLastFY: 4.5,
        valueLastTwoFYs: 4.5,
        miscellaneous1: "(cumulative total for registered IDs)",
        miscellaneous2: "Total for PHANTASY STAR ONLINE 2",
    };

const series13: Series = 
    {
        title: " Chain Chronicle ",
        firstReleaseYear: " 2013 ",
        platforms: "Pachislot and Pachinko Machines, Digital Games, Packaged Games",
        totalEditions: 3,
        ipType: " Developed in-house IP ",
        units: "(Units and downloads*)",
        value: 15.0,
        valueLastFY: 10.0,
        valueLastTwoFYs: 5.0,
        miscellaneous1: "(packaged and digital total)",
        miscellaneous2: "*Including downloads of free-to-play titles ",
    };

const series14: Series = 
    {
        title: " SEGA feat. Hatsune Miku Project ",
        firstReleaseYear: " 2009 ",
        platforms: "Digital Games, Packaged Games, Amusement Machines, Toys, etc.",
        totalEditions: 61,
        ipType: " Licensed third party IP ",
        units: "(Units and downloads)",
        value: 6.0,
        valueLastFY: 5.5,
        valueLastTwoFYs: 5.3,
        miscellaneous1: "(packaged and digital total)",
    };
const series15: Series = 
    {
        title: " Hokuto No Ken ",
        firstReleaseYear: " 2002 ",
        platforms: "Pachislot and Pachinko Machines, Digital Games, Packaged Games, Amusement Machines, Toys, etc.",
        totalEditions: 33,
        ipType:  " Licensed third party IP ",
        units: "(units)",
        value: 2.74,
        valueLastFY: 2.74,
        valueLastTwoFYs: 2.64,
        miscellaneous1: "(pachislot and pachinko machines and amusement machines total)",
    };

const series16: Series = 
    {
        title: " SOUTEN-NO-KEN ",
        firstReleaseYear: " 2009 ",
        platforms: "Pachislot and Pachinko Machines, Digital Games, Packaged Games, Toys, etc.",
        totalEditions: 12,
        ipType: " Licensed third party IP ",
        units: "(units)",
        value: 0.44,
        valueLastFY: 0.44,
        valueLastTwoFYs: 0.39,
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
    fiscalYear:  "| FY3/18 Cumulative  |", 
    fiscalYearYoY: "| FY3/18 Cml. YoY%   |",
    ltd: "| Life-To-Date       |",
}

export const collection = [
    series1,
    series2,
    series3,
    series4,
    series5,
    series6,
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