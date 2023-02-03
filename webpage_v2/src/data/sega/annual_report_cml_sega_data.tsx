import { liner, border, spacer, printTextBlock, dateLabel } from "../../utils/table_design_logic";
import { Series } from "../../utils/sega_annual_report_logic";
import { seriesType, seriesMake, fullGameRatio } from "./annual_report_sega";
// import { collection as softwareUnitsCollection } from "./software_units_sega"; // so the function is working without having to import the software units collection...

import annualReportSegaSammy2013 from "./Annual_Report/annual_report_fy3_2013.json";
import annualReportSegaSammy2014 from "./Annual_Report/annual_report_fy3_2014.json";
import annualReportSegaSammy2015 from "./Annual_Report/annual_report_fy3_2015.json";
import annualReportSegaSammy2016 from "./Annual_Report/annual_report_fy3_2016.json";
import annualReportSegaSammy2017 from "./Annual_Report/annual_report_fy3_2017.json";
import annualReportSegaSammy2018 from "./Annual_Report/annual_report_fy3_2018.json";
import annualReportSegaSammy2019 from "./Annual_Report/annual_report_fy3_2019.json";
import annualReportSegaSammy2020 from "./Annual_Report/annual_report_fy3_2020.json";
import annualReportSegaSammy2021 from "./Annual_Report/annual_report_fy3_2021.json";
import annualReportSegaSammy2022 from "./Annual_Report/annual_report_fy3_2022.json";

type annualReport = {
    fiscalYear: string,
    series: seriesType[]
};

const collectionSegaSammy: annualReport[] = [
    annualReportSegaSammy2013,
    annualReportSegaSammy2014,
    annualReportSegaSammy2015,
    annualReportSegaSammy2016,
    annualReportSegaSammy2017,
    annualReportSegaSammy2018,
    annualReportSegaSammy2019,
    annualReportSegaSammy2020,
    annualReportSegaSammy2021,
    annualReportSegaSammy2022,
];

    const makeDateLabel = dateLabel(collectionSegaSammy.at(-1)?.fiscalYear ?? "N/A", 4);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "bottom",true)

function annualReportMaker (collection: annualReport[], companyName: string, dateLabelLocal: string) {

    let headerMake: string = liner(border([
        spacer(companyName, companyName.length+1, "left")
        ]),"−","top",true) +
        liner(border([
            spacer("IP Series Data - Cumulative", "IP Series Data - Cumulative".length+2, "left")
        ]), "−", "both",true) + dateLabelLocal + liner(border([
            spacer("IP Title",28,"left"),
        ]),"−","top",true) + liner(border([
            spacer("IP Type",28,"left"),
        ]),"−","top",true) + liner(border([
            spacer("Platforms",28,"left"),
        ]),"−","top",true) + liner(border([
            spacer("Total Editions",28,"left"),
        ]),"−","top",true) + liner(border([
            spacer("First Appearance and Rank",28,"left"),
        ]),"−","top",true) + liner(border([
            spacer("Units",28,"left"),
        ]),"−","both",true)

    let totalCollectionSet: Series[][] = collection.map(elem => {

        let flatList: Series[] = seriesMake(elem);

        let fiscalYearGet = elem.fiscalYear;

        return flatList.map(value => {
            return (value.title === "Megami Tensei") ? {
                ...value,
                title: "Shin Megami Tensei",
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

        let printTitleName = liner(printTextBlock(elem[0].title, 44),"−","both",true,44);

        let printPlatforms: string = liner(printTextBlock(elem[elem.length-1].platforms, 44), "−", "bottom", true, 44);

        let printIPType: string = liner(border([spacer(elem[0].ipType, 43, "left")]),"−", "bottom", true)

        let printFirstYearAndRankAndEditions: string = (elem[elem.length-1].totalEditions === 0) 
            ? liner(border([
                spacer("First Year: " + elem[elem.length-1].firstReleaseYear, 30, "left"),
                spacer(`Rank ${elem[elem.length-1].rank}`, 11, "left"),
            ]), "=", "bottom", true, 44)
            : liner(border([
                spacer("Total Editions: " + elem[elem.length-1].totalEditions, 43, "left")
            ]), "−", "bottom", true) + liner(border([
                spacer("First Year: " + elem[elem.length-1].firstReleaseYear, 30, "left"),
                spacer(`Rank ${elem[elem.length-1].rank}`, 11, "left"),
            ]), "=", "bottom", true, 44);

        let printMisc1: string | undefined = printTextBlock(elem.at(-1)?.miscellaneous1, 44);
            
        let printMisc2: string | undefined = printTextBlock(elem.at(-1)?.miscellaneous2, 44)

        let printUnits: string = liner(printTextBlock(elem.at(-1)?.units,44),"=","bottom",(!printMisc1 && !printMisc2) ? true : undefined,44)

        let printMiscFlatFilter: string = [printMisc1, printMisc2].flatMap((value, index, array) => {
            // do not use value over array in return statement else it gets first value in string...
            return array?.[index] ?? []; 
        }).reduce((acc, next) => acc + "\n" + next, "");

        let printMiscCheck = (!printMisc1 && !printMisc2) 
            ? "" 
            : liner(printMiscFlatFilter,"=","bottom",true,44)

        let releaseDateAndRankAndNotes: string = printFirstYearAndRankAndEditions + printUnits + printMiscCheck  

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

        let ratioList: string = elem.flatMap(value => {
            let fiscalYearCheck = (value.fiscalYear === undefined) 
                ? "N/A"
                : value.fiscalYear
            
            return fullGameRatio(value,fiscalYearCheck,true)
        }).reduce((acc, next, index, array) => {
            return (index === 0)    
                ? acc + next
                : acc + "\n" + next
        },"");

        let ratioListFixed = (ratioList === "")
            ? "" 
            : liner(ratioList,"=","both",undefined,45) + "\n###\n"

        return [
            printTitleName,
            printIPType,
            printPlatforms,
            releaseDateAndRankAndNotes,
            ...yearValues,
            printLTD,
            ratioListFixed,
        ].reduce((prev, next) => {
            return prev + next
        });
    }).reduce((prev, next) => prev + next);

    return [
        header,
        titleList,
    ].reduce((acc, next) => acc + next)
};

const annualReportSegaSammy = annualReportMaker(collectionSegaSammy, "Sega Sammy", printDateLabel);

export const fyTitlesSegaSammy = printTitles(annualReportSegaSammy.header, annualReportSegaSammy.titles); 