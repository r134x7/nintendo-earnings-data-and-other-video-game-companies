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
    valueLastFY: 1.4,
    valueLastTwoFYs: 1.4,
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
    numberOfTitles: 15,
    releaseDate: " July 1985 ",
    value: 4.3,
    valueLastFY: 4.2,
    valueLastTwoFYs: 4.2,
};

const series4: Series = 
{
    title: "Mega Man",
    numberOfTitles: 158,
    releaseDate: " December 1987 ",
    value: 36.0,
    valueLastFY: 36.0,
    valueLastTwoFYs: 35.0,
};

const series5: Series = 
{
    title: "Street Fighter",
    numberOfTitles: 93,
    releaseDate: " August 1987 ",
    value: 46.0,
    valueLastFY: 44.0,
    valueLastTwoFYs: 42.0,
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
    value: 3.2,
    valueLastFY: 3.2,
    valueLastTwoFYs: 3.2,
};

const series8: Series = 
{
    title: "Resident Evil",
    numberOfTitles: 141,
    releaseDate: " March 1996 ",
    value: 110.0,
    valueLastFY: 98.0,
    valueLastTwoFYs: 91.0,
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
    numberOfTitles: 16,
    releaseDate: " January 2001 ",
    value: 8.4,
    valueLastFY: 8.3,
    valueLastTwoFYs: 8.2,
};

const series11: Series = 
{
    title: "Devil May Cry",
    numberOfTitles: 35,
    releaseDate: " August 2001 ",
    value: 23.0,
    valueLastFY: 22.0,
    valueLastTwoFYs: 20.0,
};

const series12: Series = 
{
    title: "Ace Attorney",
    numberOfTitles: 30,
    releaseDate: " August 2001 ",
    value: 8.1,
    valueLastFY: 7.5,
    valueLastTwoFYs: 6.9,
};

const series13: Series = 
{
    title: "Monster Hunter",
    numberOfTitles: 50,
    releaseDate: " March 2004 ",
    value: 72.0,
    valueLastFY: 63.0,
    valueLastTwoFYs: 54.0,
};

const series14: Series = 
{
    title: "Sengoku Basara",
    numberOfTitles: 31,
    releaseDate: " July 2005 ",
    value: 4.0,
    valueLastFY: 4.0,
    valueLastTwoFYs: 4.0,
};

const series15: Series = 
{
    title: "Lost Planet",
    numberOfTitles: 17,
    releaseDate: " December 2006 ",
    value: 6.3,
    valueLastFY: 6.2,
    valueLastTwoFYs: 6.1,
};

const series16: Series = 
{
    title: "Dead Rising",
    numberOfTitles: 22,
    releaseDate: " August 2006 ",
    value: 14.0,
    valueLastFY: 13.0,
    valueLastTwoFYs: 13.0,
};

const series17: Series = 
{
    title: "Marvel vs. Capcom",
    numberOfTitles: 16,
    releaseDate: " January 1998 ",
    value: 9.9,
    valueLastFY: 9.4,
    valueLastTwoFYs: 9.1,
};

const series18: Series = 
{
    title: "Dragon's Dogma",
    numberOfTitles: 13,
    releaseDate: " May 2012 ",
    value: 5.7,
    valueLastFY: 5.0,
    valueLastTwoFYs: 4.4,
};

const series19: Series = 
{
    title: "Okami",
    numberOfTitles: 11,
    releaseDate: " April 2006 ",
    value: 3.4,
    valueLastFY: 3.0,
    valueLastTwoFYs: 2.6,
};

const header: Header = {
capcomHeader: "| Capcom - Game Series Data  |",
secondHeader: "| First Appearance and Rank      |",
thirdHeader: "|Number of Titles by Hardware SKU|",
fourthHeader: "| Units                          |",
ltd: "| Life-To-Date       |",
fiscalYear:  "| FY3/21 Cumulative  |",
fiscalYearYoY: "| FY3/21 Cml. YoY%   |",
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
series19,
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
