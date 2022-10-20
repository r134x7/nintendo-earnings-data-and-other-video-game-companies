import {
    Series,
    Header,
    printHead,
    printSeries,
} from "../../../utils/sega_annual_report_logic";

const series5: Series = 
    {
        title: " Sonic the Hedgehog ",
        firstReleaseYear: " 1991 ",
        platforms: "Pachislot and Pachinko Machines, Digital Games, Packaged Games, Amusement Machines, Toys",
        totalEditions: 0,
        ipType: " Developed in-house IP ",
        units: "(units)",
        value: 70.0,
        valueLastFY: 0,
        valueLastTwoFYs: 0,
    };

const series8: Series = 
    {
        title: " Ryu ga Gotoku ",
        firstReleaseYear: " 2005 ",
        platforms: "Pachislot and Pachinko Machines, Digital Games, Packaged Games, Toys",
        totalEditions: 33,
        ipType: " Developed in-house IP ",
        units: "(units)",
        value: 6.0,
        valueLastFY: 0,
        valueLastTwoFYs: 0,
    };

const series12: Series = 
    {
        title: " Phantasy Star ",
        firstReleaseYear: " 1987 ",
        platforms: "Digital Games, Packaged Games, Toys, etc.",
        totalEditions: 0,
        ipType: " Developed in-house IP ",
        units: "(users)",
        value: 3.0,
        valueLastFY: 0,
        valueLastTwoFYs: 0,
        miscellaneous1: "(cumulative total for registered IDs)",
        miscellaneous2: "Total for PHANTASY STAR ONLINE 2",
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
    fiscalYear:  "| FY3/13 Cumulative  |", 
    fiscalYearYoY: "| FY3/13 Cml. YoY%   |",
    ltd: "| Life-To-Date       |",
}

export const collection = [
    series5,
    series8,
    series12,
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