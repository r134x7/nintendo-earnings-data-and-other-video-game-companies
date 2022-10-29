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
    numberOfTitles: 14,
    releaseDate: " July 1985 ",
    value: 4.2,
    valueLastFY: 4.2,
    valueLastTwoFYs: 4.2,
};

const series4: Series = 
{
    title: "Mega Man",
    numberOfTitles: 158,
    releaseDate: " December 1987 ",
    value: 36.0,
    valueLastFY: 35.0,
    valueLastTwoFYs: 32.0,
};

const series5: Series = 
{
    title: "Street Fighter",
    numberOfTitles: 93,
    releaseDate: " August 1987 ",
    value: 44.0,
    valueLastFY: 42.0,
    valueLastTwoFYs: 40.0,
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
    numberOfTitles: 135,
    releaseDate: " March 1996 ",
    value: 98.0,
    valueLastFY: 91.0,
    valueLastTwoFYs: 83.0,
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
    value: 8.3,
    valueLastFY: 8.2,
    valueLastTwoFYs: 8.0,
};

const series11: Series = 
{
    title: "Devil May Cry",
    numberOfTitles: 33,
    releaseDate: " August 2001 ",
    value: 22.0,
    valueLastFY: 20.0,
    valueLastTwoFYs: 16.0,
};

const series12: Series = 
{
    title: "Ace Attorney",
    numberOfTitles: 30,
    releaseDate: " August 2001 ",
    value: 7.5,
    valueLastFY: 6.9,
    valueLastTwoFYs: 6.7,
};

const series13: Series = 
{
    title: "Monster Hunter",
    numberOfTitles: 49,
    releaseDate: " March 2004 ",
    value: 63.0,
    valueLastFY: 54.0,
    valueLastTwoFYs: 48.0,
};

const series14: Series = 
{
    title: "Sengoku Basara",
    numberOfTitles: 30,
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
    value: 6.2,
    valueLastFY: 6.1,
    valueLastTwoFYs: 6.1,
};

const series16: Series = 
{
    title: "Dead Rising",
    numberOfTitles: 22,
    releaseDate: " August 2006 ",
    value: 13.0,
    valueLastFY: 13.0,
    valueLastTwoFYs: 12.0,
};

const series17: Series = 
{
    title: "Marvel vs. Capcom",
    numberOfTitles: 16,
    releaseDate: " January 1998 ",
    value: 9.4,
    valueLastFY: 9.1,
    valueLastTwoFYs: 8.7,
};

const series18: Series = 
{
    title: "Dragon's Dogma",
    numberOfTitles: 13,
    releaseDate: " May 2012 ",
    value: 5.0,
    valueLastFY: 4.4,
    valueLastTwoFYs: 4.0,
};

const series19: Series = 
{
    title: "Okami",
    numberOfTitles: 11,
    releaseDate: " April 2006 ",
    value: 3.0,
    valueLastFY: 2.6,
    valueLastTwoFYs: 2.1,
};

const header: Header = {
capcomHeader: "| Capcom - Game Series Data      |",
secondHeader: "| First Appearance and Rank      |",
thirdHeader: "|Number of Titles by Hardware SKU|",
fourthHeader: "| Units                          |",
ltd: "| Life-To-Date       |",
fiscalYear:  "| FY3/20 Cumulative  |",
fiscalYearYoY: "| FY3/20 Cml. YoY%   |",
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
