import { liner, border, spacer, printTextBlock, dateLabel } from "../../utils/table_design_logic";
import { Series, printNumberOfTitles, printReleaseDate} from "../../utils/capcom_game_series_logic";

import gameSeries2010 from "./Game_Series/game_series_fy3_2010.json";
import gameSeries2011 from "./Game_Series/game_series_fy3_2011.json";
import gameSeries2012 from "./Game_Series/game_series_fy3_2012.json";
import gameSeries2013 from "./Game_Series/game_series_fy3_2013.json";
import gameSeries2014 from "./Game_Series/game_series_fy3_2014.json";
import gameSeries2015 from "./Game_Series/game_series_fy3_2015.json";
import gameSeries2016 from "./Game_Series/game_series_fy3_2016.json";
import gameSeries2017 from "./Game_Series/game_series_fy3_2017.json";
import gameSeries2018 from "./Game_Series/game_series_fy3_2018.json";
import gameSeries2019 from "./Game_Series/game_series_fy3_2019.json";
import gameSeries2020 from "./Game_Series/game_series_fy3_2020.json";
import gameSeries2021 from "./Game_Series/game_series_fy3_2021.json";
import gameSeries2022 from "./Game_Series/game_series_fy3_2022.json";

export type titleSet = {
    title: string,
    table: string,
}

export type titleSetHeader = {
    header: string,
    titleList: titleSet[]
}

type annualReport = {
    fiscalYear: string,
    series: {
        title: string;
        numberOfTitles: number;
        releaseDate: string;
        value: number;
        valueLastFY: number;
        valueLastTwoFYs: number;
    }[]
};

const collectionCapcom: annualReport[] = [
    gameSeries2010,
    gameSeries2011,
    gameSeries2012,
    gameSeries2013,
    gameSeries2014,
    gameSeries2015,
    gameSeries2016,
    gameSeries2017,
    gameSeries2018,
    gameSeries2019,
    gameSeries2020,
    gameSeries2021,
    gameSeries2022,
];

const makeDateLabel = dateLabel(collectionCapcom.at(-1)?.fiscalYear ?? "N/A", 4);
const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "bottom",true)

function annualReportMaker (collection: annualReport[], companyName: string, dateLabelLocal: string) {

    let headerMake: string = liner(border([
        spacer(companyName, companyName.length+1, "left")
        ]),"−","top",true) +
        liner(border([
            spacer("Game Series Data - Cumulative", "Game Series Data - Cumulative".length+2, "left")
        ]), "−", "both",true) + dateLabelLocal + liner(border([
            spacer("First Appearance and Rank",33,"left"),
        ]),"−","top",true) + liner(border([
            spacer("Number of Titles by Hardware SKU",33,"left"),
        ]),"−","top",true) + liner(border([
            spacer("Units",33,"left"),
        ]),"−","both",true)

    let totalCollectionSet: Series[][] = collection.map(elem => {

        let flatList: Series[] = elem.series;

        let fiscalYearGet = elem.fiscalYear;

        return flatList.map(value => {
            return {
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

function printTitles(header: string, titles: Series[][], returnObject?: boolean) {

    const titleList = titles.map((elem, index, array) => {

        let printTitleName = liner(printTextBlock(elem[0].title, 42),"−","both",true,42);

        let releaseDateRankAndMiscCheck = liner(printReleaseDate(elem[elem.length-1],42),"−","bottom",true,42) + liner(printNumberOfTitles(elem[elem.length-1],42),"=","bottom",true) + (liner(printTextBlock(elem.at(-1)?.miscellaneous,42),"=","bottom",true,42)) 

        let yearValues: string[] = elem.flatMap(value => {
            if (value.value - value.valueLastFY === 0) {
                return []
            }

            let valueCalculation: string = (value.value - value.valueLastFY).toFixed(2);

            return border([
                 spacer(value.fiscalYear + " Cumulative",30,"left"),
                 spacer(`${valueCalculation}M`,9,"right")
            ],true);
        });

        let printLTD: string = liner(border([
            spacer("Life-To-Date (Units)",30,"left"),
            spacer(`${elem[elem.length-1].value}M`,9,"right")
        ]),"−","both",true) 

        return (!returnObject)
            ? [
                printTitleName,
                releaseDateRankAndMiscCheck,
                ...yearValues,
                printLTD,
             ].reduce((prev, next) => {
                 return prev + next
             })
            : {
               title: elem[0].title,
               table: [
                printTitleName,
                releaseDateRankAndMiscCheck,
                ...yearValues,
                printLTD,
             ].reduce((prev, next) => {
                 return prev + next
             })
            }
        ;
    })//.reduce((prev, next) => prev + next);

    return (!returnObject)
        ? [
            header,
            titleList.reduce((acc, next) => (typeof next === "string") ? acc + next : acc ,""),
            ].reduce((acc, next) => (typeof next === "string") ? acc + next : acc ,"")
        : {
            header,
            titleList
        }
};

const annualReportCapcom = annualReportMaker(collectionCapcom, "Capcom", printDateLabel);

export const fyTitlesCapcom = printTitles(annualReportCapcom.header, annualReportCapcom.titles, true) as titleSetHeader;