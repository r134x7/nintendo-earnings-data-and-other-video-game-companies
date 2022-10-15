import { 
        Header,
        Series,
        printHead,
        printSeriesOutput,
    } from "../../../utils/bandai_namco_annual_report_logic";

const series1: Series = 
    {
        title: "Super Robot Wars",
        releaseDate: " April 1991 ",
        fyEndMonth: " March 2019 ",
        value: 18.77,
        valueLastFY: 0,
        valueLastTwoFYs: 0,
    };

const series2: Series = 
    {
        title: "Tekken",
        releaseDate: " March 1995 ",
        fyEndMonth: " March 2019 ",
        value: 48.39,
        valueLastFY: 0,
        valueLastTwoFYs: 0,
    };

const series3: Series = 
    {
        title: "Tales... of",
        releaseDate: " December 1995 ",
        fyEndMonth: " March 2019 ",
        value: 21.60,
        valueLastFY: 0,
        valueLastTwoFYs: 0,
    };

const series4: Series = 
    {
        title: "Ultimate Ninja Storm",
        releaseDate: " January 2009 ",
        fyEndMonth: " March 2019 ",
        value: 13.95,
        valueLastFY: 0,
        valueLastTwoFYs: 0,
    };

const series5: Series = 
    {
        title: "Dark Souls",
        releaseDate: " September 2011 ",
        fyEndMonth: " March 2019 ",
        value: 22.19,
        valueLastFY: 0,
        valueLastTwoFYs: 0,
        miscellaneous: "Note: Total for overseas sales for which BANDAI NAMCO Entertainment Inc. was the original seller (excluding domestic sales by FromSoftware, Inc.)",
    };

const header: Header = {
    bandaiNamcoHeader: "| Bandai Namco - IP Series Data  |",
    secondHeader: "| First appearance to recent FY  |",
    thirdHeader: "| Rank                           |",
    fourthHeader: "| Units                          |",
    ltd: "| Life-To-Date       |",
    fiscalYear:  "| FY3/19 Cumulative  |",
    fiscalYearYoY: "| FY3/19 Cml. YoY%   |",
    summaryHeader: " Placeholder ",
}

export const collection = [
    series1,
    series2,
    series3,
    series4,
    series5,
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
