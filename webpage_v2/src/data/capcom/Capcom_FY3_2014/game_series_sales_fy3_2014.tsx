import { 
    Header,
    Series,
    printHead,
    printSeriesOutput,
} from "../../../utils/capcom_game_series_logic";

const series1: Series =
{
    title: "1942",
    numberOfTitles: 3,
    releaseDate: " November 1984 ",
    value: 1.4,
    valueLastFY: 1.2,
    valueLastTwoFYs: 1.2,
};

const series2: Series =
{
    title: "Commando",
    numberOfTitles: 2,
    releaseDate: " April 1985 ",
    value: 1.2,
    valueLastFY: 1.2,
    valueLastTwoFYs: 1.2,
};

const series3: Series =
{
    title: "Ghosts'n Goblins",
    numberOfTitles: 14,
    releaseDate: " July 1985 ",
    value: 4.1,
    valueLastFY: 4.1,
    valueLastTwoFYs: 4.1,
};

const series4: Series = 
{
    title: "Mega Man",
    numberOfTitles: 131,
    releaseDate: " December 1987 ",
    value: 30.0,
    valueLastFY: 29.0,
    valueLastTwoFYs: 29.0,
};

const series5: Series = 
{
    title: "Street Fighter",
    numberOfTitles: 77,
    releaseDate: " August 1987 ",
    value: 35.0,
    valueLastFY: 34.0,
    valueLastTwoFYs: 31.0,
};

const series6: Series = 
{
    title: "Final Fight",
    numberOfTitles: 10,
    releaseDate: " November 1989 ",
    value: 3.2,
    valueLastFY: 3.2,
    valueLastTwoFYs: 3.2,
};

const series7: Series = 
{
    title: "Breath of Fire",
    numberOfTitles: 15,
    releaseDate: " April 1993 ",
    value: 3.1,
    valueLastFY: 3.0,
    valueLastTwoFYs: 3.0,
};

const series8: Series = 
{
    title: "Resident Evil",
    numberOfTitles: 89,
    releaseDate: " March 1996 ",
    value: 61.0,
    valueLastFY: 56.0,
    valueLastTwoFYs: 46.0,
};

const series9: Series = 
{
    title: "Dino Crisis",
    numberOfTitles: 13,
    releaseDate: " July 1999 ",
    value: 4.4,
    valueLastFY: 4.4,
    valueLastTwoFYs: 4.4,
};

const series10: Series = 
{
    title: "Onimusha",
    numberOfTitles: 12,
    releaseDate: " January 2001 ",
    value: 8.0,
    valueLastFY: 7.9,
    valueLastTwoFYs: 7.9,
};

const series11: Series = 
{
    title: "Devil May Cry",
    numberOfTitles: 19,
    releaseDate: " August 2001 ",
    value: 13.0,
    valueLastFY: 12.0,
    valueLastTwoFYs: 10.0,
};

const series12: Series = 
{
    title: "Ace Attorney",
    numberOfTitles: 17,
    releaseDate: " August 2001 ",
    value: 5.1,
    valueLastFY: 4.4,
    valueLastTwoFYs: 4.2,
};

const series13: Series = 
{
    title: "Monster Hunter",
    numberOfTitles: 28,
    releaseDate: " March 2004 ",
    value: 28.0,
    valueLastFY: 23.0,
    valueLastTwoFYs: 19.0,
};

const series14: Series = 
{
    title: "Sengoku Basara",
    numberOfTitles: 26,
    releaseDate: " July 2005 ",
    value: 3.6,
    valueLastFY: 3.3,
    valueLastTwoFYs: 2.8,
};

const series15: Series = 
{
    title: "Lost Planet",
    numberOfTitles: 17,
    releaseDate: " December 2006 ",
    value: 5.6,
    valueLastFY: 4.9,
    valueLastTwoFYs: 4.7,
};

const series16: Series = 
{
    title: "Dead Rising",
    numberOfTitles: 12,
    releaseDate: " August 2006 ",
    value: 7.4,
    valueLastFY: 5.4,
    valueLastTwoFYs: 4.5,
};

const series17: Series = 
{
    title: "Marvel vs. Capcom",
    numberOfTitles: 10,
    releaseDate: " January 1998 ",
    value: 6.9,
    valueLastFY: 0,
    valueLastTwoFYs: 0,
};

const series18: Series = 
{
    title: "Dragon's Dogma",
    numberOfTitles: 6,
    releaseDate: " May 2012 ",
    value: 2.1,
    valueLastFY: 0,
    valueLastTwoFYs: 0,
};

const header: Header = {
capcomHeader: "| Capcom - Game Series Data  |",
secondHeader: "| First Appearance and Rank      |",
thirdHeader: "|Number of Titles by Hardware SKU|",
fourthHeader: "| Units                          |",
ltd: "| Life-To-Date       |",
fiscalYear:  "| FY3/14 Cumulative  |",
fiscalYearYoY: "| FY3/14 Cml. YoY%   |",
summaryHeader: " Placeholder ",
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
series17,
series18,
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
    return printSeriesOutput(elem)(header)(42)(11)(32);
}).reduce((prev, next) => prev + "\n" + next)

let printOne = printHead(header);

export const printSeriesFY =
`${printOne}
${printedSeries}`;
