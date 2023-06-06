import { Header, Series, printSeriesOutput } from "../../utils/capcom_game_series_logic";
import { spacer, border, liner, headerPrint, dateLabel, printTextBlock } from "../../utils/table_design_logic";

import gameSeries2023 from "./Game_Series/game_series_fy3_2023.json";
import gameSeries2022 from "./Game_Series/game_series_fy3_2022.json";
import gameSeries2021 from "./Game_Series/game_series_fy3_2021.json";
import gameSeries2020 from "./Game_Series/game_series_fy3_2020.json";
import gameSeries2019 from "./Game_Series/game_series_fy3_2019.json";
import gameSeries2018 from "./Game_Series/game_series_fy3_2018.json";
import gameSeries2017 from "./Game_Series/game_series_fy3_2017.json";
import gameSeries2016 from "./Game_Series/game_series_fy3_2016.json";
import gameSeries2015 from "./Game_Series/game_series_fy3_2015.json";
import gameSeries2014 from "./Game_Series/game_series_fy3_2014.json";
import gameSeries2013 from "./Game_Series/game_series_fy3_2013.json";
import gameSeries2012 from "./Game_Series/game_series_fy3_2012.json";
import gameSeries2011 from "./Game_Series/game_series_fy3_2011.json";
import gameSeries2010 from "./Game_Series/game_series_fy3_2010.json";

import type { titleSetHeader, titleSet } from "./game_series_sales_capcom_cml_data";

const collection = [
    gameSeries2023,
    gameSeries2022,
    gameSeries2021,
    gameSeries2020,
    gameSeries2019,
    gameSeries2018,
    gameSeries2017,
    gameSeries2016,
    gameSeries2015,
    gameSeries2014,
    gameSeries2013,
    gameSeries2012,
    gameSeries2011,
    gameSeries2010,
] as const;

const seriesMake = (obj: {
    "series": {
        title: string;
        numberOfTitles: number;
        releaseDate: string;
        value: number;
        valueLastFY: number;
        valueLastTwoFYs: number;
    }[]
}): Series[] => {
    
    let series: Series[] = obj.series.map(elem => {

        return {
                    title: elem.title,
                    numberOfTitles: elem.numberOfTitles,
                    releaseDate: elem.releaseDate,
                    value: elem.value,
                    valueLastFY: elem.valueLastFY,
                    valueLastTwoFYs: elem.valueLastTwoFYs,
                }
    }) 

    return series
};

export const gameSeriesList: titleSetHeader[] = collection.map((elem, index, array) => {

    let header: Header = {
    capcomHeader: "Capcom - Game Series Data",
    secondHeader: "First Appearance and Rank",
    thirdHeader: "Number of Titles by Hardware SKU",
    fourthHeader: "Units",
    ltd: "Life-To-Date",
    fiscalYear: elem.fiscalYear,
    fiscalYearYoY: elem.fiscalYear + " Cml. YoY%",
    summaryHeader: "Placeholder",
    }

    let seriesList: Series[] = seriesMake(elem)

    let sortedList = seriesList.filter((elem, index, array) => {
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
        return printSeriesOutput(elem, header, 42, 11, true);
    }) as titleSet[];
    //.reduce((prev, next) => prev + "\n" + next)
    
    const makeDateLabel = dateLabel(elem.fiscalYear ?? "N/A", 4);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

    let printOne = headerPrint([
        header.capcomHeader,
        header.secondHeader,
        header.thirdHeader,
        header.fourthHeader,
    ], 33) + "\n" + printDateLabel;

    // return printOne + "\n" + printedSeries

    let summary = liner(printTextBlock("Game Series unit sales numbers are rounded down by 100k units when a series is less than 10M units or, unit sales numbers are rounded down by 1M units when a series is 10M units or greater.",42),"−","both",true,42)

    return {
        header: printOne,
        titleList: printedSeries,
        summary: summary,
    }
})
