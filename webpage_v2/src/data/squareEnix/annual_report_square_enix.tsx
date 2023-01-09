import { Header, Series, printSeriesOutput } from "../../utils/bandai_namco_annual_report_logic";
import { headerPrint } from "../../utils/table_design_logic";

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
    "series": {
        title: string;
        releaseDate: string;
        fyEndMonth: string; 
        value: number;
        valueLastFY: number;
        valueLastTwoFYs: number;
    }[]
}): Series[] => {
    
    let series: Series[] = obj.series.map(elem => {

        return {
            title: elem.title,
            releaseDate: elem.releaseDate,
            fyEndMonth: elem.fyEndMonth,
            value: elem.value,
            valueLastFY: elem.valueLastFY,
            valueLastTwoFYs: elem.valueLastTwoFYs,
        };
    });

    return series
};

export const annualReportList: string[] = collection.map((elem, index, array) => {

    let header: Header = {
        bandaiNamcoHeader: "Square Enix  - IP Series Data",
        secondHeader: "First appearance to recent FY",
        thirdHeader: "Rank",
        fourthHeader: "Units",
        ltd: "Life-To-Date",
        summaryHeader: " Placeholder ",
        fiscalYear: elem.fiscalYearCml,
        fiscalYearYoY: elem.fiscalYearYoY,
    };

    let seriesList: Series[] = seriesMake(elem);

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
    });

    let printedSeries = sortedList.map((elem) => {
        return printSeriesOutput(elem, header, 42, 11);
    }).reduce((prev, next) => prev + "\n" + next);

    let printOne = headerPrint([
            header.bandaiNamcoHeader,
            header.secondHeader,
            header.thirdHeader,
            header.fourthHeader,
    ], 32)

    let notePrint = (elem.notes[0] === "") 
                    ? undefined
                    : elem.notes.reduce((prev, next) => prev + "\n" + next);

    return (notePrint === undefined) 
            ? printOne + "\n" + printedSeries
            : printOne + "\n" + printedSeries + "\n" + notePrint
});
