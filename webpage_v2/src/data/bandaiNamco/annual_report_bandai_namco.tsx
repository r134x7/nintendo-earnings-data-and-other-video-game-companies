import { Header, Series, printSeriesOutput } from "../../utils/bandai_namco_annual_report_logic";
import { headerPrint, liner, border, spacer, dateLabel } from "../../utils/table_design_logic";

import annualReport2022 from "./Annual_Report/annual_report_fy3_2022.json";
import annualReport2021 from "./Annual_Report/annual_report_fy3_2021.json";
import annualReport2020 from "./Annual_Report/annual_report_fy3_2020.json";
import annualReport2019 from "./Annual_Report/annual_report_fy3_2019.json";

import type { titleSet } from "../capcom/game_series_sales_capcom_cml_data";

const collection = [
    annualReport2022,
    annualReport2021,
    annualReport2020,
    annualReport2019,
] as const;

export const seriesMake = (obj: {
    "series": {
        title: string,
        releaseDate: string,
        fyEndMonth: string, 
        value: number,
        valueLastFY: number,
        valueLastTwoFYs: number,
        miscellaneous?: string,
    }[]
}): Series[] => {
    
    let series: Series[] = obj.series.map(elem => {

        return  {
                    title: elem.title,
                    releaseDate: elem.releaseDate,
                    fyEndMonth: elem.fyEndMonth,
                    value: elem.value,
                    valueLastFY: elem.valueLastFY,
                    valueLastTwoFYs: elem.valueLastTwoFYs,
                    miscellaneous: elem.miscellaneous,
                }

    }) 

    return series
};

export const annualReportList = collection.map((elem, index, array) => {

    let header: Header = {
        bandaiNamcoHeader: "Bandai Namco - IP Series Data",
        secondHeader: "First appearance to recent FY",
        thirdHeader: "Rank",
        fourthHeader: "Units",
        ltd: "Life-To-Date",
        summaryHeader: " Placeholder",
        fiscalYear: elem.fiscalYear,
        fiscalYearYoY: elem.fiscalYear + " Cml. YoY%",
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
        return {
            title: elem.title,
            table: printSeriesOutput(elem, header, 42, 11)
        }
    }) as titleSet[];
    //.reduce((prev, next) => prev + "\n" + next)

    const makeDateLabel = dateLabel(elem.fiscalYear ?? "N/A", 4);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

    let printOne = headerPrint([
        header.bandaiNamcoHeader,
        header.secondHeader,
        header.thirdHeader,
        header.fourthHeader,
    ], 32) + "\n" + printDateLabel; 

    // return printOne + "\n" + printedSeries
    return {
        header: printOne,
        titleList: printedSeries,
    }
})

