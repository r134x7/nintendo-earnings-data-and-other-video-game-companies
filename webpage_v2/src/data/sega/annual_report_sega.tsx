import { 
    Header,
    Series,
    printHead,
    printSeries,
} from "../../utils/sega_annual_report_logic";
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
] as const;

const seriesMake = (obj: {
    "series": {
        title: string;
        firstReleaseYear: string;
        platforms: string;
        totalEditions: number;
        ipType: " Acquired IP " | " Developed in-house IP " | " Licensed third party IP "; 
        units: string;
        value: number;
        valueLastFY: number;
        valueLastTwoFYs: number;
        miscellaneous1?: string | undefined;
        miscellaneous2?: string | undefined;
    }[]
}): Series[] => {
    
    let series: Series[] = obj.series.map(elem => {

        return (!elem.miscellaneous1 && !elem.miscellaneous2)
                ? {
                    title: elem.title,
                    firstReleaseYear: elem.firstReleaseYear,
                    platforms: elem.platforms,
                    totalEditions: elem.totalEditions,
                    ipType: elem.ipType,
                    units: elem.units,
                    value: elem.value,
                    valueLastFY: elem.valueLastFY,
                    valueLastTwoFYs: elem.valueLastTwoFYs,
                }
                : (!elem.miscellaneous2)
                ? {
                    title: elem.title,
                    firstReleaseYear: elem.firstReleaseYear,
                    platforms: elem.platforms,
                    totalEditions: elem.totalEditions,
                    ipType: elem.ipType,
                    units: elem.units,
                    value: elem.value,
                    valueLastFY: elem.valueLastFY,
                    valueLastTwoFYs: elem.valueLastTwoFYs,
                    miscellaneous1: elem.miscellaneous1,
                }
                : {
                    title: elem.title,
                    firstReleaseYear: elem.firstReleaseYear,
                    platforms: elem.platforms,
                    totalEditions: elem.totalEditions,
                    ipType: elem.ipType,
                    units: elem.units,
                    value: elem.value,
                    valueLastFY: elem.valueLastFY,
                    valueLastTwoFYs: elem.valueLastTwoFYs,
                    miscellaneous1: elem.miscellaneous1,
                    miscellaneous2: elem.miscellaneous2,
                }

    }) 

    return series
};

export const annualReportList: string[] = collection.map((elem, index, array) => {

    let header: Header = {
        segaHeader: "| Sega Sammy - IP Series Data    |",
        secondHeader: "| IP Title                       |",
        thirdHeader: "| IP Type                        |",
        fourthHeader: "| Platforms                      |",
        fifthHeader: "| Total Editions                 |",
        ltd: "| Life-To-Date       |",
        seventhHeader: "| Units                          |",
        sixthHeader: "| First Appearance and Rank      |",
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
        return printSeries(header, elem)
    }).reduce((prev, next) => prev + "\n" + next)

    let printOne = printHead(header);

    return printOne + "\n" + printedSeries
})

