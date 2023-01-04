import { collectionJSON, titlesJSON, titlesMake } from "../top_selling_titles_nintendo";
import { printTextBlock } from "../../../utils/bandai_namco_annual_report_logic";

import topSellingTitles2023 from "../Top_Selling_Titles/top_selling_titles_fy3_2023.json";
import topSellingTitles2022 from "../Top_Selling_Titles/top_selling_titles_fy3_2022.json";
import topSellingTitles2021 from "../Top_Selling_Titles/top_selling_titles_fy3_2021.json";
import topSellingTitles2020 from "../Top_Selling_Titles/top_selling_titles_fy3_2020.json";
import topSellingTitles2019 from "../Top_Selling_Titles/top_selling_titles_fy3_2019.json";
import topSellingTitles2018 from "../Top_Selling_Titles/top_selling_titles_fy3_2018.json";
import topSellingTitles2017 from "../Top_Selling_Titles/top_selling_titles_fy3_2017.json";
import topSellingTitles2016 from "../Top_Selling_Titles/top_selling_titles_fy3_2016.json";
import topSellingTitles2015 from "../Top_Selling_Titles/top_selling_titles_fy3_2015.json";
import topSellingTitles2014 from "../Top_Selling_Titles/top_selling_titles_fy3_2014.json";
import topSellingTitles2013 from "../Top_Selling_Titles/top_selling_titles_fy3_2013.json";
import topSellingTitles2012 from "../Top_Selling_Titles/top_selling_titles_fy3_2012.json";

// avoid having empty lists [] in your collections from preparing for the next earnings
import { Titles, Header, quarterlyCalculation, printHead } from "../../../utils/top_selling_titles_logic";

    const totalCollection: collectionJSON[] = [
        topSellingTitles2012,
        topSellingTitles2013,
        topSellingTitles2014,
        topSellingTitles2015,
        topSellingTitles2016,
        topSellingTitles2017,
        topSellingTitles2018,
        topSellingTitles2019,
        topSellingTitles2020,
        topSellingTitles2021,
        topSellingTitles2022,
        topSellingTitles2023,
    ]
    
    let totalCollectionSet: Titles[][][] = totalCollection.map(elem => {

        let flatList = elem.titles.flat();

        return flatList.map(value => titlesMake(value, undefined)).map(value => value.map(secondValue => { return { ...secondValue, fiscalYear: elem.fiscalYear}}))
    });

    // latestFYcollection is where the latest FY collection needs to be placed.
    // const latestFYcollection = fy3_2023_collection.map((elem, index) => {
    // const latestFYcollection = totalCollectionSet[totalCollectionSet.length-1].map((elem, index) => {
    //     // takes the latest data in the collection, maps it because it contains all the titles up to that date, 
    //     return sortingArrays(index)
    // })

    const flatCollection = totalCollectionSet.map((value) => value.map((secondValue) => secondValue.filter((thirdValue, thirdIndex) => thirdIndex === 3))).flat(2);

    const flatTitles = totalCollectionSet.map((value) => value.map((secondValue) => secondValue.filter((thirdValue, thirdIndex) => thirdIndex === 3))).flat(2).map(value => { return { title: value.title, platform: value.platform}})

    let filteredCollection = flatTitles.filter((elem, index, array) =>
    index === array.findIndex((value) => (
      value.title === elem.title && value.platform === elem.platform
    ))) // source for solution after Set wouldn't work: https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects

    function sortingTitles(titles: {title: string, platform: string}[]) {

        const setTitles: Titles[][] = titles.map((elem, index, array) => {

            let searchTitle = flatCollection.filter((value) => value.title === elem.title && value.platform === elem.platform)

            return searchTitle 
        })

        return setTitles
    };

    const latestFYcollection = sortingTitles(filteredCollection);

    const dateLabel = "| Latest data as of September 30th, 2022   |\n+" + "-".repeat(42) + "+"

    const header: Header = {
        fiscalYear: "placeholder",
        mainHeader: "| Nintendo Co., Ltd.             |",
        platform: "| Platform                       |",
        platformHeader: "| Top Selling Titles - Historical Data |",
        titles: "| Title                          |",
        units: "| Units                          |"
    }
    
    function accumulate(title: Titles[]): Titles[] {

        const title1Flat = title.flatMap((flat) => flat).reduce((prev, next) => {
            return {...prev, ...next}
        })
        
        return title.concat({
                ...title1Flat, 
            })
    };

    const printTitlesGlobal = (titles: Titles[][]) => {

        const regionRank = titles.map((elem, index, array) => {
            
            let printRank: string = ` Rank ${elem[0].rank} `
            let printRankFixed: string = (printRank.length >= 11)
                    ? printRank
                    : printRank + " ".repeat(11 - printRank.length);

            let printTitleName = printTextBlock(elem[0].title)(42)

            let printPlatformFixed: string = (elem[0].platform.length >= 30)
                ? elem[0].platform
                : " " + elem[0].platform + " ".repeat(29 - elem[0].platform.length)


            let printTitleNameFixed: string = "+"+"-".repeat(42)+"+\n" + printTitleName + "\n+" + "-".repeat(42) + "+\n|" + printPlatformFixed  + "|" + printRankFixed + "|\n+"+"-".repeat(42)+"+"

            let yearValues: string[] = elem.filter((value, index) => { return value.value !== 0}).map((value, valueIndex, valueArray) => {

               let printValue: string = `${value.value}M ` 
               let printValueFixed: string = (printValue.length >= 11)
                   ? printValue
                   : " ".repeat(11 - printValue.length) + printValue;

               let printPeriodFixed: string = (value.fiscalYear === undefined) 
                       ? "|" + value.period + " ".repeat(6) + "|"
                       : "| " + value.fiscalYear + " Cumulative          |"

               return  printPeriodFixed + printValueFixed + "|"
            }).filter((value, index) => index !== elem.length-1 );
                

        let printValue: string = `${elem[elem.length-1].value}M ` 
        
        let printValueFixed: string = (printValue.length >= 11)
            ? printValue
            : " ".repeat(11 - printValue.length) + printValue;

        let printLine: string = "+" + "-".repeat(42) + "+";

        let printLTD = printLine + "\n| Life-To-Date (Units)         |" + printValueFixed + "|\n" + printLine;

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

    const reducedArrays: Titles[][] = latestFYcollection.map((elem) => {

        return accumulate(elem)
    })
    
    const sortedWWLTDCollection: Titles[][] = reducedArrays.map((elem, index, array) => {
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

const printOneWW = printHead(header)

// const divideSortedJapanCollection = decimateCalculation(sortedJapanCollection)
// console.log(sortedJapanCollection);
console.log(sortedWWLTDCollection);

// const divideSortedGlobalCollection = sortedWWLTDCollection.map(elem => quarterlyCalculation(elem))
const divideSortedGlobalCollection = sortedWWLTDCollection.map(elem => {
    return elem.map((secondElem, index, array) => {
        return (index === 0 || index === array.length-1)
            ? secondElem 
            : { ...secondElem, value: Number((secondElem.value - array[index-1].value).toFixed(2))}
    })
});
const printFour = printTitlesGlobal(divideSortedGlobalCollection)

export const printTopSellingTitles = 
`${printOneWW}
${dateLabel}
${printFour}
###`;