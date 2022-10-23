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
        platforms: "Pachislot and Pachinko Machines, Digital Games, Packaged Games, Toys",
        totalEditions: 28,
        ipType: " Acquired IP ",
        units: "(units)",
        value: 7.0,
        valueLastFY: 7.0,
        valueLastTwoFYs: 0,
        miscellaneous1: "(packaged total)",
    };

const series2: Series = 
    {
        title: " Persona ",
        firstReleaseYear: " 1996 ",
        platforms: "Pachislot and Pachinko Machines, Digital Games, Packaged Games, Toys",
        totalEditions: 10,
        ipType: " Acquired IP ",
        units: "(units)",
        value: 6.2,
        valueLastFY: 6.2,
        valueLastTwoFYs: 0,
        miscellaneous1: "(packaged total)",
    };

const series9: Series = 
    {
        title: " Etrian Odyssey ",
        firstReleaseYear: " 2007 ",
        platforms: "Digital Games, Packaged Games, Toys",
        totalEditions: 5,
        ipType: " Acquired IP ",
        units: "(units)",
        value: 1.2,
        valueLastFY: 1.2,
        valueLastTwoFYs: 0,
        miscellaneous1: "(packaged total)",
    };

const series5: Series = 
    {
        title: " Sonic the Hedgehog ",
        firstReleaseYear: " 1991 ",
        platforms: "Pachislot and Pachinko Machines, Digital Games, Packaged Games, Amusement Machines, Toys",
        totalEditions: 0,
        ipType: " Developed in-house IP ",
        units: "(Units and downloads)",
        value: 335.0,
        valueLastFY: 150.0,
        valueLastTwoFYs: 70.0,
        miscellaneous1: "(packaged and digital total)",
    };

const series6: Series = 
    {
        title: " Puyo Puyo ",
        firstReleaseYear: " 1991** ",
        platforms: "Pachislot and Pachinko Machines, Digital Games, Packaged Games, Amusement Machines, Toys",
        totalEditions: 0,
        ipType: " Developed in-house IP ",
        units: "(Units and downloads)",
        value: 16.0,
        valueLastFY: 13.5,
        valueLastTwoFYs: 0,
        miscellaneous1: "(packaged and digital total)",
        miscellaneous2: "**SEGA CORPORATION acquired the rights in 1998. Figures for cumulative unit sales are the totals for titles that SEGA sold after acquiring the rights."
    };

const series8: Series = 
    {
        title: " Ryu ga Gotoku ",
        firstReleaseYear: " 2005 ",
        platforms: "Pachislot and Pachinko Machines, Digital Games, Packaged Games, Toys",
        totalEditions: 56,
        ipType: " Developed in-house IP ",
        units: "(units and downloads)",
        value: 8.6,
        valueLastFY: 7.8,
        valueLastTwoFYs: 6.0,
        miscellaneous1: "(packaged, digital, and mobile members total)",
    };

const series10: Series = 
    {
        title: " ALADDIN ",
        firstReleaseYear: " 1989 ",
        platforms: "Pachislot and Pachinko Machines, Digital Games, Packaged Games, Toys",
        totalEditions: 14,
        ipType: " Developed in-house IP ",
        units: "(units)",
        value: 0.57,
        valueLastFY: 0.49,
        valueLastTwoFYs: 0,
        miscellaneous1: "(pachislot and pachinko machines and amusement machines total)",
    };

const series11: Series = 
    {
        title: " Beast King ",
        firstReleaseYear: " 2001 ",
        platforms: "Pachislot and Pachinko Machines, Digital Games, Packaged Games, Toys",
        totalEditions: 13,
        ipType: " Developed in-house IP ",
        units: "(units)",
        value: 0.45,
        valueLastFY: 0.45,
        valueLastTwoFYs: 0,
        miscellaneous1: "(pachislot and pachinko machines and amusement machines total)",
    };

const series14: Series = 
    {
        title: " SEGA feat. Hatsune Miku Project ",
        firstReleaseYear: " 2009 ",
        platforms: "Digital Games, Packaged Games, Amusement Machines, Toys",
        totalEditions: 36,
        ipType: " Licensed third party IP ",
        units: "(Units and downloads)",
        value: 4.5,
        valueLastFY: 4.5,
        valueLastTwoFYs: 0,
        miscellaneous1: "(packaged and digital total)",
    };
const series15: Series = 
    {
        title: " Hokuto No Ken ",
        firstReleaseYear: " 2002 ",
        platforms: "Pachislot and Pachinko Machines, Digital Games, Packaged Games, Amusement Machines, Toys",
        totalEditions: 27,
        ipType:  " Licensed third party IP ",
        units: "(units)",
        value: 2.5,
        valueLastFY: 2.35,
        valueLastTwoFYs: 0,
        miscellaneous1: "(pachislot and pachinko machines and amusement machines total)",
    };

const series16: Series = 
    {
        title: " SOUTEN-NO-KEN ",
        firstReleaseYear: " 2009 ",
        platforms: "Pachislot and Pachinko Machines, Digital Games, Packaged Games, Toys",
        totalEditions: 8,
        ipType: " Licensed third party IP ",
        units: "(units)",
        value: 0.39,
        valueLastFY: 0.39,
        valueLastTwoFYs: 0,
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
    fiscalYear:  "| FY3/15 Cumulative  |", 
    fiscalYearYoY: "| FY3/15 Cml. YoY%   |",
    ltd: "| Life-To-Date       |",
}

export const collection = [
    series1,
    series2,
    series5,
    series6,
    series8,
    series9,
    series10,
    series11,
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