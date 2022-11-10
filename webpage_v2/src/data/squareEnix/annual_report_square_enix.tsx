import { 
    Header,
    Series,
    printHead,
    printSeriesOutput,
} from "../../utils/bandai_namco_annual_report_logic";
import annualReport2022 from "./Annual_Report/annual_report_fy3_2022.json";
import annualReport2021 from "./Annual_Report/annual_report_fy3_2021.json";
import annualReport2020 from "./Annual_Report/annual_report_fy3_2020.json";
import annualReport2019 from "./Annual_Report/annual_report_fy3_2019.json";
import annualReport2018 from "./Annual_Report/annual_report_fy3_2018.json";
import annualReport2017 from "./Annual_Report/annual_report_fy3_2017.json";
import annualReport2016 from "./Annual_Report/annual_report_fy3_2016.json";
import annualReport2015 from "./Annual_Report/annual_report_fy3_2015.json";
import annualReport2014 from "./Annual_Report/annual_report_fy3_2014.json";
import annualReport2013 from "./Annual_Report/annual_report_fy3_2013.json";
import annualReport2012 from "./Annual_Report/annual_report_fy3_2012.json";
import annualReport2011 from "./Annual_Report/annual_report_fy3_2011.json";
import annualReport2010 from "./Annual_Report/annual_report_fy3_2010.json";

const collection = [
    annualReport2022,
    annualReport2021,
    annualReport2020,
    annualReport2019,
    annualReport2018,
    annualReport2017,
    annualReport2016,
    annualReport2015,
    annualReport2014,
    annualReport2013,
    annualReport2012,
    annualReport2011,
    annualReport2010,
] as const;

const seriesMake = (obj: {
    fyEndMonth: string; 
    "series": {
        title: string;
        releaseDate: string;
        value: number;
        valueLastFY: number;
        valueLastTwoFYs: number;
    }[]
}): Series[] => {
    
    let series: Series[] = obj.series.map(elem => {

        return {
            title: elem.title,
            fyEndMonth: obj.fyEndMonth,
            releaseDate: elem.releaseDate,
            value: elem.value,
            valueLastFY: elem.valueLastFY,
            valueLastTwoFYs: elem.valueLastTwoFYs,
        };
    }) 

    return series
};

export const endList: string[] = collection.map((elem, index, array) => {

    let header: Header = {
        bandaiNamcoHeader: "| Square Enix  - IP Series Data  |",
        secondHeader: "| First appearance to recent FY  |",
        thirdHeader: "| Rank                           |",
        fourthHeader: "| Units                          |",
        ltd: "| Life-To-Date       |",
        summaryHeader: " Placeholder ",
        fiscalYear: elem.fiscalYearCml,
        fiscalYearYoY: elem.fiscalYearYoY,
    };

    let seriesList: Series[] = seriesMake(elem)

    let sortedList = seriesList.filter((elem, index, array) => {
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

    let printedSeries = sortedList.map((elem) => {
        return printSeriesOutput(elem)(header)(42)(11)(32);
    }).reduce((prev, next) => prev + "\n" + next)

    let printOne = printHead(header);

    return printOne + "\n" + printedSeries
})


// const series1: Series = 
// {
//     title: "Final Fantasy",
//     releaseDate: " December 1987 ",
//     fyEndMonth: " March 2022 ",
//     value: 173,
//     valueLastFY: 164,
//     valueLastTwoFYs: 154,
// };

// const series2: Series = 
// {
//     title: "Dragon Quest",
//     releaseDate: " May 1986 ",
//     fyEndMonth: " March 2022 ",
//     value: 85,
//     valueLastFY: 83,
//     valueLastTwoFYs: 82,

// };

// const series3: Series = 
// {
//     title: "Kingdom Hearts",
//     releaseDate: " March 2002 ",
//     fyEndMonth: " March 2022 ",
//     value: 36,
//     valueLastFY: 0,
//     valueLastTwoFYs: 0,
// };

// const series4: Series = 
// {
//     title: "Tomb Raider",
//     releaseDate: " October 1996 ",
//     fyEndMonth: " March 2022 ",
//     value: 88,
//     valueLastFY: 82,
//     valueLastTwoFYs: 77,
// };

// const header: Header = {
// bandaiNamcoHeader: "| Square Enix  - IP Series Data  |",
// secondHeader: "| First appearance to recent FY  |",
// thirdHeader: "| Rank                           |",
// fourthHeader: "| Units                          |",
// ltd: "| Life-To-Date       |",
// fiscalYear:  "| FY3/22 Cumulative  |",
// fiscalYearYoY: "| FY3/22 Cml. YoY%   |",
// summaryHeader: " Placeholder ",
// }

// export const collection = [
// series1,
// series2,
// series3,
// series4,
// ] as const;

// const sortedFYCollection: Series[] = collection.filter((elem, index, array) => {
//         // return elem.value - elem.valueLastFY !== 0 // probably shouldn't make two separate tables for FY and ALL...
//         return elem // forgetting filter doesn't do anything here...
//         // we need to create a new array that is identical to the original due to sort's mutating properties. filter titles that sold units this FY
// }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
//     return (a.value - a.valueLastFY > b.value - b.valueLastFY)
//         ? 1
//         : (a.value - a.valueLastFY < b.value - b.valueLastFY)
//         ? -1
//         : 0
// }).map((elem, index) => {
//     return {...elem, rank: index+1}
// })

// let printedSeries = sortedFYCollection.map((elem) => {
//     return printSeriesOutput(elem)(header)(42)(11)(32);
// }).reduce((prev, next) => prev + "\n" + next)

// let printOne = printHead(header);

// export const printSeriesFY =
// `${printOne}
// ${printedSeries}`;
