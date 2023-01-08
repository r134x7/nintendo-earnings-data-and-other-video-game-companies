import { platformSalesMake, collectionJSON, platformSalesType } from "../consolidated_sales_information_nintendo";
import { printTextBlock, border, liner, spacer } from "../../../utils/table_design_logic";


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
import consolidatedSalesInfo2003 from "../Consolidated_Sales_Information/consolidated_sales_information_fy3_2003.json";
import consolidatedSalesInfo2002 from "../Consolidated_Sales_Information/consolidated_sales_information_fy3_2002.json";
import consolidatedSalesInfo2001 from "../Consolidated_Sales_Information/consolidated_sales_information_fy3_2001.json";

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
        consolidatedSalesInfo2001,
        consolidatedSalesInfo2002,
        consolidatedSalesInfo2003,
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
    

    const dateLabel = "| Data as of September 30th, 2022    |\n+" + "-".repeat(36) + "+"

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
        

        let printSum: string = `¥${elem[elem.length-1].value.toLocaleString("en")}M ` 
        
        let printSumFixed: string = (printSum.length >= 15)
            ? printSum
            : " ".repeat(15 - printSum.length) + printSum;


        let printAverage: string = `¥${Number((elem[elem.length-1].value / yearValues.length).toFixed(0)).toLocaleString("en")}M `; 

        let printAverageFixed: string = (printAverage.length >= 15)
            ? printAverage
            : " ".repeat(15 - printAverage.length) + printAverage;

        let valuesMedian = elem.filter((value, index) => value.value !== 0 && index !== elem.length-1);

        let sortValuesMedian = sortList(valuesMedian);

        function sortList(list: Section[]) {

            const sortList = list.map((elem, index, array) => {
                    return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
            }).sort((a, b) => { // (b,a) is descending order, (a,b) sorts in ascending order
                return (a.value > b.value)
                    ? 1
                    : (a.value < b.value)
                    ? -1
                    : 0 
            });

            return sortList
        };

        let printCount: string = `${sortValuesMedian.length} `;

        let printCountFixed: string = (printCount.length >= 15)
            ? printCount
            : " ".repeat(15 - printCount.length) + printCount;

        let printMedian: string = ((sortValuesMedian.length % 2) !== 0) // odd number
            // median formula source: https://en.wikipedia.org/wiki/Median
            // odd number median(x) = x(n+1)/2 => index version => median(x) = (x(n+1)/2)-1
            ? `¥${sortValuesMedian[((sortValuesMedian.length + 1)/2) -1].value.toLocaleString("en")}M `
            // even number median(x) = (x(n/2) + x((n/2) + 1)) /2 => index version median(x) = (x((n/2)-1) + x((n/2))) /2
            : `¥${Number(((sortValuesMedian[(sortValuesMedian.length/2) -1].value + sortValuesMedian[(sortValuesMedian.length/2)].value)/2).toFixed(0)).toLocaleString("en")}M `;

        let printMedianFixed: string = (printMedian.length >= 15)
            ? printMedian
            : " ".repeat(15 - printMedian.length) + printMedian;

        let printMin: string = `¥${sortValuesMedian[0].value.toLocaleString("en")}M `;

        let printMinFixed: string = (printMin.length >= 15)
            ? printMin
            : " ".repeat(15 - printMin.length) + printMin;

        let printMax: string = `¥${sortValuesMedian[sortValuesMedian.length-1].value.toLocaleString("en")}M ` 

        let printMaxFixed: string = (printMax.length >= 15)
            ? printMax
            : " ".repeat(15 - printMax.length) + printMax;
        
        let printLine: string = "+" + "-".repeat(42) + "+";

        let printCountRow = "| Count                    |" + printCountFixed + "|";

        let printSumRow = "| Sum                      |" + printSumFixed + "|";

        let printAverageRow = "| Average                  |" + printAverageFixed + "|";

        let printMedianRow: string = "| Median                   |" + printMedianFixed + "|"

        let printMinimumRow: string = "| Minimum                  |" + printMinFixed + "|"

        let printMaximumRow: string = "| Maximum                  |" + printMaxFixed + "|"

        let printStats = printLine + "\n" + printCountRow + "\n" +  printSumRow + "\n" + printAverageRow + "\n" + printMedianRow + "\n" + printMinimumRow + "\n" + printMaximumRow + "\n" + printLine;

            return [
                printTitleNameFixed,
                ...yearValues,
                printStats,
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
    
    const sortedArrays: Section[][] = reducedArrays.map((elem, index, array) => {
            return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
    }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
        return (a[a.length-1].value > b[b.length-1].value)
            ? 1
            : (a[a.length-1].value < b[b.length-1].value)
            ? -1
            : 0 
    })

const printOneWW = 
`+--------------------+
| Nintendo Co., Ltd. |
+------------------------------------+
| Consolidated Sales Information     |
+------------------------------------+`;

// const divideSortedGlobalCollection = reducedArrays.map(elem => elem.map(section => {
//     return {
//         ...section,
//         value: Number((section.value / 100).toFixed(2)),
//     }}))

// const printFour = printTitlesGlobal(divideSortedGlobalCollection)
const printFour = printTitlesGlobal(sortedArrays)

let dataSource = "Source: https://www.nintendo.co.jp/ir/en/finance/historical_data/index.html"

export const printConsolidatedSalesInfo = 
`${printOneWW}
${dateLabel}
${printFour}
###
${dataSource}`;