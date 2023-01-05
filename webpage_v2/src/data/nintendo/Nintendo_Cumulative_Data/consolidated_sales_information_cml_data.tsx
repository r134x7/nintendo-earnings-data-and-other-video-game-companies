import { platformSalesMake, collectionJSON, platformSalesType } from "../consolidated_sales_information_nintendo";
import { printTextBlock } from "../../../utils/bandai_namco_annual_report_logic";

import consolidatedSalesInfo2023 from "../Consolidated_Sales_Information/consolidated_sales_information_fy3_2023.json";
import consolidatedSalesInfo2022 from "../Consolidated_Sales_Information/consolidated_sales_information_fy3_2022.json";
import consolidatedSalesInfo2021 from "../Consolidated_Sales_Information/consolidated_sales_information_fy3_2021.json";
import consolidatedSalesInfo2020 from "../Consolidated_Sales_Information/consolidated_sales_information_fy3_2020.json";
import consolidatedSalesInfo2019 from "../Consolidated_Sales_Information/consolidated_sales_information_fy3_2019.json";
import consolidatedSalesInfo2018 from "../Consolidated_Sales_Information/consolidated_sales_information_fy3_2018.json";
import consolidatedSalesInfo2017 from "../Consolidated_Sales_Information/consolidated_sales_information_fy3_2017.json";
import consolidatedSalesInfo2016 from "../Consolidated_Sales_Information/consolidated_sales_information_fy3_2016.json";
import consolidatedSalesInfo2015 from "../Consolidated_Sales_Information/consolidated_sales_information_fy3_2015.json";
import consolidatedSalesInfo2014 from "../Consolidated_Sales_Information/consolidated_sales_information_fy3_2014.json";
import consolidatedSalesInfo2013 from "../Consolidated_Sales_Information/consolidated_sales_information_fy3_2013.json";
import consolidatedSalesInfo2012 from "../Consolidated_Sales_Information/consolidated_sales_information_fy3_2012.json";
import consolidatedSalesInfo2011 from "../Consolidated_Sales_Information/consolidated_sales_information_fy3_2011.json";
import consolidatedSalesInfo2010 from "../Consolidated_Sales_Information/consolidated_sales_information_fy3_2010.json";
import consolidatedSalesInfo2009 from "../Consolidated_Sales_Information/consolidated_sales_information_fy3_2009.json";
import consolidatedSalesInfo2008 from "../Consolidated_Sales_Information/consolidated_sales_information_fy3_2008.json";
import consolidatedSalesInfo2007 from "../Consolidated_Sales_Information/consolidated_sales_information_fy3_2007.json";
import consolidatedSalesInfo2006 from "../Consolidated_Sales_Information/consolidated_sales_information_fy3_2006.json";
import consolidatedSalesInfo2005 from "../Consolidated_Sales_Information/consolidated_sales_information_fy3_2005.json";
import consolidatedSalesInfo2004 from "../Consolidated_Sales_Information/consolidated_sales_information_fy3_2004.json";

// avoid having empty lists [] in your collections from preparing for the next earnings
import {
    Section,
    Header,
    printHead,
    printSections,
    printSalesHardware,
    quarterlyCalculation,
    yearOnYearCalculation
} from "../../../utils/hardware_software_units_logic";

    const totalCollection = [
        consolidatedSalesInfo2004,
        consolidatedSalesInfo2005,
        consolidatedSalesInfo2006,
        consolidatedSalesInfo2007,
        consolidatedSalesInfo2008,
        consolidatedSalesInfo2009,
        consolidatedSalesInfo2010,
        consolidatedSalesInfo2011,
        consolidatedSalesInfo2012,
        consolidatedSalesInfo2013,
        consolidatedSalesInfo2014,
        consolidatedSalesInfo2015,
        consolidatedSalesInfo2016,
        consolidatedSalesInfo2017,
        consolidatedSalesInfo2018,
        consolidatedSalesInfo2019,
        consolidatedSalesInfo2020,
        consolidatedSalesInfo2021,
        consolidatedSalesInfo2022,
        consolidatedSalesInfo2023,
    ]
    
    let totalCollectionSet: Section[][][] = totalCollection.map(elem => {

        let flatList = elem.platformSales.flat();
        
        return flatList.map(value => platformSalesMake(value)).map(value => value.map(secondValue => { return { ...secondValue, fiscalYear: elem.fiscalYear}}))

        // return flatList.map(value => platformUnitSalesMake(value)).map(value => value.map(secondValue => { return { ...secondValue, fiscalYear: elem.fiscalYear}}))

    });

    const flatCollection = totalCollectionSet.map((value) => value.map((secondValue) => secondValue.filter((thirdValue, thirdIndex) => thirdIndex === 3))).flat(2);

    const flatTitles = totalCollectionSet.map((value) => value.map((secondValue) => secondValue.filter((thirdValue, thirdIndex) => thirdIndex === 3))).flat(2).map(value => { return  value.name })

    const filteredCollection = [...new Set(flatTitles)];


    function sortingTitles(titles: string[]) {

        const setTitles: Section[][] = titles.map((elem, index, array) => {

            let searchTitle: Section[] = flatCollection.filter((value) => value.name === elem)

            return searchTitle
        })

        return setTitles
    };

    const latestFYcollection = sortingTitles(filteredCollection);

    // console.log(latestFYcollection);
    

    const dateLabel = "| Latest data as of September 30th, 2022   |\n+" + "-".repeat(42) + "+"

    const header: Header = {
        firstHeader: "| Global Hardware and Software  |",
        fiscalYear: "placeholder",
        nextFiscalYearShort: "place",
        secondHeader: "| Sales Units and Forecasts     |",
        switchHeader: "| Nintendo Co., Ltd. |",
    };

    function accumulate(title: Section[]): Section[] {

        const sumTitle = title.map((elem, index, array) => {
            return elem.value
        }).reduce((prev, next) => prev + next);

        let newTitle = title.concat({
            ...title[0],
            value: sumTitle
        });
        
        return newTitle
    };


    const printTitlesGlobal = (titles: Section[][]) => {

        const regionRank = titles.map((elem, index, array) => {
            
            // let printRank: string = ` Rank ${elem[0].rank} `
            // let printRankFixed: string = (printRank.length >= 11)
            //         ? printRank
            //         : printRank + " ".repeat(11 - printRank.length);

            let printTitleName = printTextBlock(elem[0].name)(42)

            // let printPlatformFixed: string = (elem[0].platform.length >= 30)
            //     ? elem[0].platform
            //     : " " + elem[0].platform + " ".repeat(29 - elem[0].platform.length)


            // let printTitleNameFixed: string = "+"+"-".repeat(42)+"+\n" + printTitleName + "\n+" + "-".repeat(42) + "+\n|" + printPlatformFixed  + "|" + printRankFixed + "|\n+"+"-".repeat(42)+"+"
            let printTitleNameFixed: string = "+"+"-".repeat(42)+"+\n" + printTitleName + "\n+" + "-".repeat(42) + "+"// + "+"+"-".repeat(42)+"+"

            let yearValues: string[] = elem.filter((value, index) => value.value !== 0).map((value, valueIndex, valueArray) => {

               let printValue: string = `¥${value.value.toLocaleString("en")}M ` 
               let printValueFixed: string = (printValue.length >= 15)
                   ? printValue
                   : " ".repeat(15 - printValue.length) + printValue;

               let printPeriodFixed: string = (value.fiscalYear === undefined) 
                       ? "|" + value.period + " ".repeat(6) + "|"
                       : "| " + value.fiscalYear + " Cumulative      |"

               return  printPeriodFixed + printValueFixed + "|"
            }).filter((secondValue, index) => index !== elem.length-1) // will not work using secondValue;

        let printValue: string = `¥${elem[elem.length-1].value.toLocaleString("en")}M ` 
        
        let printValueFixed: string = (printValue.length >= 15)
            ? printValue
            : " ".repeat(15 - printValue.length) + printValue;

        let printLine: string = "+" + "-".repeat(42) + "+";

        let printLTD = printLine + "\n| Cumulative Sum           |" + printValueFixed + "|\n" + printLine;

            return [
                printTitleNameFixed,
                ...yearValues,
                printLTD,
            ].reduce((prev, next) => {
                return prev + "\n" + next
            });

        }).filter(value => value !== "N/A").reduce((prev, next) => {
                return prev + "\n" + next
        });

        return regionRank
    }

    const reducedArrays: Section[][] = latestFYcollection.map((elem) => {

        return accumulate(elem)
    })
    
    // const sortedWWLTDCollection: Section[][] = reducedArrays.map((elem, index, array) => {
    //         return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
    // }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
    //     return (a[a.length-1].value > b[b.length-1].value)
    //         ? 1
    //         : (a[a.length-1].value < b[b.length-1].value)
    //         ? -1
    //         : 0 
    // })

const printOneWW = 
`+--------------------+
| Nintendo Co., Ltd. |
+------------------------------------+
| Consolidated Sales Information     |
+------------------------------------------+`;

// const divideSortedGlobalCollection = reducedArrays.map(elem => elem.map(section => {
//     return {
//         ...section,
//         value: Number((section.value / 100).toFixed(2)),
//     }}))

// const printFour = printTitlesGlobal(divideSortedGlobalCollection)
const printFour = printTitlesGlobal(reducedArrays)

let dataSource = "Source: https://www.nintendo.co.jp/ir/en/finance/historical_data/index.html"

export const printConsolidatedSalesInfo = 
`${printOneWW}
${dateLabel}
${printFour}
###
${dataSource}`;