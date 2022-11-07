import { 
    Header,
    Series,
    printHead,
    printSeriesOutput,
} from "../../../utils/bandai_namco_annual_report_logic";

const series1: Series = 
{
    title: "Final Fantasy",
    releaseDate: " December 1987 ",
    fyEndMonth: " March 2010*",
    value: 97,
    valueLastFY: 0,
    valueLastTwoFYs: 0,
}; 
// reference for fy3/10: https://www.hd.square-enix.com/eng/ir/pdf/11q1release.pdf

const series2: Series = 
{
    title: "Dragon Quest",
    releaseDate: " May 1986 ",
    fyEndMonth: " March 2010*",
    value: 54, 
    valueLastFY: 0,
    valueLastTwoFYs: 0,
};

const series3: Series = 
{
    title: "Tomb Raider",
    releaseDate: " October 1996 ",
    fyEndMonth: " March 2010*",
    value: 35,
    valueLastFY: 0,
    valueLastTwoFYs: 0,
};

const header: Header = {
bandaiNamcoHeader: "| Square Enix  - IP Series Data  |",
secondHeader: "| First appearance to recent FY  |",
thirdHeader: "| Rank                           |",
fourthHeader: "| Units                          |",
ltd: "| Life-To-Date       |",
fiscalYear:  "| FY3/10 Cumulative  |",
fiscalYearYoY: "| FY3/10 Cml. YoY%   |",
summaryHeader: " Placeholder ",
}

export const collection = [
series1,
series2,
series3,
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

let notes =  
`+----------------------------------------+
|*Annual Report 2010 gives no sales      | 
|numbers. Data used here is taken        |
|from Q1 FY3/11 Press Release assuming   |
|data is as of March, 2010. Cannot verify|
|whether it is accurate.                 |
+----------------------------------------+`;

export const printSeriesFY =
`${printOne}
${printedSeries}
${notes}`;