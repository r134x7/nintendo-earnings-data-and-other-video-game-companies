import { Header, Series, printSeries } from "../../utils/sega_annual_report_logic";
import { headerPrint, border, liner, spacer } from "../../utils/table_design_logic";

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

import { collection as softwareUnitsCollection } from "./software_units_sega";

type collectionJSON = {
    fiscalYear: string,
    series: seriesType[]
};

export type seriesType = {
    title: string;
    firstReleaseYear: string;
    platforms: string;
    totalEditions: number;
    ipType: string;
    units: string;
    value: number;
    valueLastFY: number;
    valueLastTwoFYs: number;
    miscellaneous1?: string;
    miscellaneous2?: string;
};

const collection: collectionJSON[] = [
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
];

export const seriesMake = (obj: {
    "series": seriesType[]
}): Series[] => {
    
    let series: Series[] = obj.series.map(elem => {

        var ipTypeCheck: "Acquired IP" | "Developed in-house IP" | "Licensed third party IP" | "Undefined" = "Undefined"; // default

        switch (elem.ipType) {
            case "Acquired IP":
                ipTypeCheck = "Acquired IP"
                break;
            case "Developed in-house IP":
                ipTypeCheck = "Developed in-house IP"
                break;
            case "Licensed third party IP":
                ipTypeCheck = "Licensed third party IP"
                break;
            default:
                // ipTypeCheck is already "undefined"
                break;
        }

        return {
                    title: elem.title,
                    firstReleaseYear: elem.firstReleaseYear,
                    platforms: elem.platforms,
                    totalEditions: elem.totalEditions,
                    ipType: ipTypeCheck,
                    units: elem.units,
                    value: elem.value,
                    valueLastFY: elem.valueLastFY,
                    valueLastTwoFYs: elem.valueLastTwoFYs,
                    miscellaneous1: (elem.miscellaneous1 === undefined) ? undefined : elem.miscellaneous1,
                    miscellaneous2: (elem.miscellaneous2 === undefined) ? undefined : elem.miscellaneous2,
                }
    }) 

    return series
};

export const fullGameRatio = (ip: Series, fiscalYear: string, cumulative: boolean): string | never[] => {

    let nameSearch = softwareUnitsCollection.filter((elem) => {
        // match by fiscalYear key
        // then go to software units and get Q4CmlValue
        // (full game units / ip series units ) * 100).toFixed(2)%

        return elem.fiscalYear === fiscalYear
    }).map((elem, index, array) => {

        let ipMatch = elem.softwareUnits.filter(value => value.ip === ip.title); // Should only have one match
        
        return ipMatch
    }).flat();
    
    if (nameSearch.length === 0) {
        return []
    } else {
        
        let calc: string = `${(((nameSearch[0].Q4CmlValue / 1000) / (ip.value - ip.valueLastFY)) * 100).toFixed(2)}%`

        let calcRow: string = border([
            spacer(fiscalYear + " Full Game / IP Series %", 33, "left"),
            spacer(calc, 9, "right"),
        ])

        let calcPrint: string = liner(border([
            spacer(fiscalYear + " Full Game / IP Series %", 33, "left"),
            spacer(calc, 9, "right"),
        ]),"=","both",true) + "###"

        return (cumulative === true)
            ? calcRow 
            : calcPrint
    };

};

export const annualReportList: string[] = collection.map((elem, index, array) => {

    let fiscalYear = elem.fiscalYear;

    let header: Header = {
        segaHeader: "Sega Sammy - IP Series Data",
        secondHeader: "IP Title",
        thirdHeader: "IP Type",
        fourthHeader: "Platforms",
        fifthHeader: "Total Editions",
        ltd: "Life-To-Date",
        seventhHeader: "Units",
        sixthHeader: "First Appearance and Rank",
        summaryHeader: "Placeholder",
        fiscalYear: elem.fiscalYear,
        fiscalYearYoY: elem.fiscalYear + " Cml. YoY%",
    };

    let seriesList: Series[] = seriesMake(elem)

    let sortedList: Series[] = seriesList.filter((elem, index, array) => {
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
        
        let printRatio: string[] = [fullGameRatio(elem, fiscalYear,false)].flat()        
        
        return (printRatio.length === 0) 
                ? printSeries(header, elem)
                : printSeries(header, elem).concat(printRatio[0])
    }).reduce((prev, next) => prev + "\n" + next)

    let printOne = headerPrint([
        header.segaHeader,
        header.secondHeader,
        header.thirdHeader,
        header.fourthHeader,
        header.fifthHeader,
        header.sixthHeader,
        header.seventhHeader
    ], 32)

    return printOne + "\n" + printedSeries
})
