import { liner, border, spacer, printTextBlock, dateLabel } from "../../utils/table_design_logic";
import { printReleaseDateAndRank, Series } from "../../utils/bandai_namco_annual_report_logic";
// import { seriesMake } from "../bandaiNamco/annual_report_bandai_namco";

import annualReportBandaiNamco2019 from "../bandaiNamco/Annual_Report/annual_report_fy3_2019.json";
import annualReportBandaiNamco2020 from "../bandaiNamco/Annual_Report/annual_report_fy3_2020.json";
import annualReportBandaiNamco2021 from "../bandaiNamco/Annual_Report/annual_report_fy3_2021.json";
import annualReportBandaiNamco2022 from "../bandaiNamco/Annual_Report/annual_report_fy3_2022.json";

import annualReportSquareEnix2010 from "../squareEnix/Annual_Report/annual_report_fy3_2010.json";
import annualReportSquareEnix2011 from "../squareEnix/Annual_Report/annual_report_fy3_2011.json";
import annualReportSquareEnix2012 from "../squareEnix/Annual_Report/annual_report_fy3_2012.json";
import annualReportSquareEnix2013 from "../squareEnix/Annual_Report/annual_report_fy3_2013.json";
import annualReportSquareEnix2014 from "../squareEnix/Annual_Report/annual_report_fy3_2014.json";
import annualReportSquareEnix2015 from "../squareEnix/Annual_Report/annual_report_fy3_2015.json";
import annualReportSquareEnix2016 from "../squareEnix/Annual_Report/annual_report_fy3_2016.json";
import annualReportSquareEnix2017 from "../squareEnix/Annual_Report/annual_report_fy3_2017.json";
import annualReportSquareEnix2018 from "../squareEnix/Annual_Report/annual_report_fy3_2018.json";
import annualReportSquareEnix2019 from "../squareEnix/Annual_Report/annual_report_fy3_2019.json";
import annualReportSquareEnix2020 from "../squareEnix/Annual_Report/annual_report_fy3_2020.json";
import annualReportSquareEnix2021 from "../squareEnix/Annual_Report/annual_report_fy3_2021.json";
import annualReportSquareEnix2022 from "../squareEnix/Annual_Report/annual_report_fy3_2022.json";

type annualReport = {
    fiscalYear: string,
    series: {
            title: string,
            releaseDate: string,
            fyEndMonth: string,
            value: number,
            valueLastFY: number,
            valueLastTwoFYs: number,
            miscellaneous?: string,
        }[]
};

const collectionBandaiNamco: annualReport[] = [
    annualReportBandaiNamco2019,
    annualReportBandaiNamco2020,
    annualReportBandaiNamco2021,
    annualReportBandaiNamco2022,
];

const collectionSquareEnix: annualReport[] = [
    annualReportSquareEnix2010,
    annualReportSquareEnix2011,
    annualReportSquareEnix2012,
    annualReportSquareEnix2013,
    annualReportSquareEnix2014,
    annualReportSquareEnix2015,
    annualReportSquareEnix2016,
    annualReportSquareEnix2017,
    annualReportSquareEnix2018,
    annualReportSquareEnix2019,
    annualReportSquareEnix2020,
    annualReportSquareEnix2021,
    annualReportSquareEnix2022,
];

function labelMaker (collection: annualReport[]) {

    const makeDateLabel = dateLabel(collection.at(-1)?.fiscalYear ?? "N/A", 4);

    return liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "bottom",true)
}


function annualReportMaker (collection: annualReport[], companyName: string, dateLabelLocal: string) {

    let headerMake: string = liner(border([
        spacer(companyName, companyName.length+1, "left")
        ]),"−","top",true) +
        liner(border([
            spacer("IP Series Data - Cumulative", "IP Series Data - Cumulative".length+2, "left")
        ]), "−", "both",true) + dateLabelLocal + liner(border([
            spacer("First appearance to recent FY",32,"left"),
        ]),"−","top",true) + liner(border([
            spacer("Rank",32,"left"),
        ]),"−","top",true) + liner(border([
            spacer("Units",32,"left"),
        ]),"−","both",true)

    let totalCollectionSet: Series[][] = collection.map(elem => {

        let flatList: Series[] = elem.series;

        let fiscalYearGet = elem.fiscalYear;

        return flatList.map(value => {
            return (value.title === "Ultimate Ninja Storm") ? {
                ...value,
                title: "Naruto-related",
                fiscalYear: fiscalYearGet,
            }
            : {
                ...value, fiscalYear: fiscalYearGet,
            }
        })
    });

    let flatCollectionSet: Series[] = totalCollectionSet.flat();

   let titlesList = totalCollectionSet.flat().map(value => value.title);

   const filteredCollection = [...new Set(titlesList)];

   function sortTitles(titles: string[]): Series[][] {
        return titles.map((elem, index, array) => {

            let searchTitle: Series[] = flatCollectionSet.filter((value) => value.title === elem)

            return searchTitle
        });
   };

   let titleList: Series[][] = sortTitles(filteredCollection)

   let rankTitles: Series[][] = titleList.map((elem, index, array) => {
            return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
    }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
        return (a[a.length-1].value > b[b.length-1].value)
            ? 1
            : (a[a.length-1].value < b[b.length-1].value)
            ? -1
            : 0 
    }).map((elem, index) => {
        let rankGet = index+1
        return elem.map(value => {
            return {...value, rank: rankGet} 
        }) //{...elem, rank: index+1} // x which is the returned array is now returned to the array of arrays
    })

   return {
        header: headerMake,
        titles: rankTitles,
   }
}

function printTitles(header: string, titles: Series[][]) {

    const titleList = titles.map((elem, index, array) => {

        let printTitleName = liner(printTextBlock(elem[0].title, 42),"−","both",true,42);

        let miscellaneousCheck: string | undefined = (elem[elem.length-1].miscellaneous === undefined)
            ? undefined
            : elem[elem.length-1].miscellaneous;

        let releaseDateAndRank = (miscellaneousCheck === undefined) 
            ? liner(printReleaseDateAndRank(elem[elem.length-1],42),"=","bottom",true,42)
            : liner(printReleaseDateAndRank(elem[elem.length-1],42),"−","bottom",true,42) + liner(printTextBlock(miscellaneousCheck,42),"=","bottom",true,42) 

        let yearValues: string[] = elem.flatMap(value => {
            if (value.value - value.valueLastFY === 0) {
                return []
            }

            let valueCalculation: string = (value.value - value.valueLastFY).toFixed(2);

            return border([
                 spacer(value.fiscalYear + " Cumlative",30,"left"),
                 spacer(`${valueCalculation}M`,9,"right")
            ],true);
        });

        let printLTD: string = liner(border([
            spacer("Life-To-Date (Units)",30,"left"),
            spacer(`${elem[elem.length-1].value}M`,9,"right")
        ]),"−","both",true) 

        return [
            printTitleName,
            releaseDateAndRank,
            ...yearValues,
            printLTD,
        ].reduce((prev, next) => {
            return prev + next
        });
    }).reduce((prev, next) => prev + next);

    return [
        header,
        titleList,
    ].reduce((acc, next) => acc + next)
};

const annualReportBandaiNamco = annualReportMaker(collectionBandaiNamco, "Bandai Namco", labelMaker(collectionBandaiNamco));

export const fyTitlesBandaiNamco = printTitles(annualReportBandaiNamco.header, annualReportBandaiNamco.titles);

const annualReportSquareEnix = annualReportMaker(collectionSquareEnix, "Square Enix", labelMaker(collectionSquareEnix));

let squareEnixNote = "For the numbers shown from FY3/2010 to FY3/2019, go to the FY Series IP section of the relevant fiscal year and check the footnotes regarding the accuracy of those numbers." 

export const fyTitlesSquareEnix = [
    printTitles(annualReportSquareEnix.header, annualReportSquareEnix.titles),
    liner(printTextBlock(squareEnixNote,42),"−","both",true,42)
].reduce((acc, next) => acc + next); 