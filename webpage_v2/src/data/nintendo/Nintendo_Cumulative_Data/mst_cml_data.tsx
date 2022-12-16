import { titlesMake, titlesJSON, collectionJSON } from "../fy_million_seller_titles_nintendo";
import { printTextBlock } from "../../../utils/bandai_namco_annual_report_logic";

import fyMillionSellerTitles2023 from "../FY_Million_Seller_Titles/million_seller_titles_fy3_2023.json";
import fyMillionSellerTitles2022 from "../FY_Million_Seller_Titles/million_seller_titles_fy3_2022.json";
import fyMillionSellerTitles2021 from "../FY_Million_Seller_Titles/million_seller_titles_fy3_2021.json";
import fyMillionSellerTitles2020 from "../FY_Million_Seller_Titles/million_seller_titles_fy3_2020.json";
import fyMillionSellerTitles2019 from "../FY_Million_Seller_Titles/million_seller_titles_fy3_2019.json";
import fyMillionSellerTitles2018 from "../FY_Million_Seller_Titles/million_seller_titles_fy3_2018.json";
import fyMillionSellerTitles2017 from "../FY_Million_Seller_Titles/million_seller_titles_fy3_2017.json";
import fyMillionSellerTitles2016 from "../FY_Million_Seller_Titles/million_seller_titles_fy3_2016.json";
import fyMillionSellerTitles2015 from "../FY_Million_Seller_Titles/million_seller_titles_fy3_2015.json";
import fyMillionSellerTitles2014 from "../FY_Million_Seller_Titles/million_seller_titles_fy3_2014.json";
import fyMillionSellerTitles2013 from "../FY_Million_Seller_Titles/million_seller_titles_fy3_2013.json";
import fyMillionSellerTitles2012 from "../FY_Million_Seller_Titles/million_seller_titles_fy3_2012.json";
import fyMillionSellerTitles2011 from "../FY_Million_Seller_Titles/million_seller_titles_fy3_2011.json";
import fyMillionSellerTitles2010 from "../FY_Million_Seller_Titles/million_seller_titles_fy3_2010.json";
import fyMillionSellerTitles2009 from "../FY_Million_Seller_Titles/million_seller_titles_fy3_2009.json";
import fyMillionSellerTitles2008 from "../FY_Million_Seller_Titles/million_seller_titles_fy3_2008.json";
import fyMillionSellerTitles2007 from "../FY_Million_Seller_Titles/million_seller_titles_fy3_2007.json";
import fyMillionSellerTitles2006 from "../FY_Million_Seller_Titles/million_seller_titles_fy3_2006.json";
import fyMillionSellerTitles2005 from "../FY_Million_Seller_Titles/million_seller_titles_fy3_2005.json";
import fyMillionSellerTitles2004 from "../FY_Million_Seller_Titles/million_seller_titles_fy3_2004.json";

// avoid having empty lists [] in your collections from preparing for the next earnings
import { Header, Titles, decimateCalculation, printHead } from "../../../utils/fy_million_seller_titles_logic"

    const totalCollection: collectionJSON[] = [
        fyMillionSellerTitles2004,
        fyMillionSellerTitles2005,
        fyMillionSellerTitles2006,
        fyMillionSellerTitles2007,
        fyMillionSellerTitles2008,
        fyMillionSellerTitles2009,
        fyMillionSellerTitles2010,
        fyMillionSellerTitles2011,
        fyMillionSellerTitles2012,
        fyMillionSellerTitles2013,
        fyMillionSellerTitles2014,
        fyMillionSellerTitles2015,
        fyMillionSellerTitles2016,
        fyMillionSellerTitles2017,
        fyMillionSellerTitles2018,
        fyMillionSellerTitles2019,
        fyMillionSellerTitles2020,
        fyMillionSellerTitles2021,
        fyMillionSellerTitles2022,
        fyMillionSellerTitles2023,
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

    // console.log(latestFYcollection);
    

    const dateLabel = "| Latest data as of September 30th, 2022   |\n+" + "-".repeat(42) + "+"

    const header: Header = {
    mainHeader: "| Nintendo Fiscal Year Million-Seller Titles |",
    platformHeader: "+============================================+",
    secondHeader: "| Title                                    |",
    thirdHeader: "| Platform and Rank                        |",
    fourthHeader: "| Units                                    |",
    areaHeader: "| Area         |   Japan | Overseas|",
    globalHeader: "| Global       |   WW FY |  WW LTD |",
    fiscalYear: " FY3/23 ",
    mainSummaryHeader: "",
    secondSummaryHeader: "| FY Million-Seller      |",
    thirdSummaryHeader: "| Titles Summary         |",
    japanSummaryHeader: "| Japan                           |",
    overseasSummaryHeader: "| Overseas                        |",
    globalFYSummaryHeader: "| Global FY                       |",
    globalLTDSummaryHeader: "| Global LTD                      |",
    }

    // function sortingArrays(titleCount: number): Titles[] {

    //     const testTitle1: Titles[][] = totalCollectionSet.map((elem, index) => {
            
    //         return (elem[titleCount] === undefined)
    //             ? []
    //             : elem[titleCount]
    
    //     }).filter((elem) => elem.length !== 0)

    //     const filterTitle1: Titles[][] = testTitle1.map((elem) => {
    //         return elem.filter((secondElem, index, array) => {
    //             return secondElem.valueC !== 0 && secondElem.period === " 4th Quarter  "
    //         })
    //     }).filter((elem) => elem.length !== 0) 
    //     // returns Titles[]
    //     return filterTitle1.flat() // return was deeply nested
    // }
    
    function accumulate(title: Titles[]): Titles[] {

        const japanTitle1 = title.map((elem, index, array) => {
            return elem.valueA
        }).reduce((prev, next) => prev + next)
    
        
        const overseasTitle1 = title.map((elem, index, array) => {
            // return elem[0].valueB
            return elem.valueB
        }).reduce((prev, next) => prev + next)
        
        
        const title1Flat = title.flatMap((flat) => flat).reduce((prev, next) => {
            return {...prev, ...next}
        })
        
        return title.concat({
                ...title1Flat, 
                valueA: japanTitle1, 
                valueB: overseasTitle1, 
                valueC: 0,
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

            let yearValues: string[] = elem.filter((value, index) => { return value.valueC !== 0}).map((value, valueIndex, valueArray) => {

               let printValue: string = `${value.valueC}M ` 
               let printValueFixed: string = (printValue.length >= 11)
                   ? printValue
                   : " ".repeat(11 - printValue.length) + printValue;

               let printPeriodFixed: string = (value.fiscalYear === undefined) 
                       ? "|" + value.period + " ".repeat(6) + "|"
                       : "| " + value.fiscalYear + " Cumulative          |"

               return  printPeriodFixed + printValueFixed + "|"
            }).filter((value, index) => index !== elem.length-1 );
                

        let printValue: string = `${elem[elem.length-1].valueD}M ` 
        
        let printValueFixed: string = (printValue.length >= 11)
            ? printValue
            : " ".repeat(11 - printValue.length) + printValue;

        let printLine: string = "+" + "-".repeat(42) + "+";

        let printLTD = printLine + "\n| Global - Life-To-Date (Units)|" + printValueFixed + "|\n" + printLine;

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
        // const globalRank = titles.map((elem, index, array) => {

        //     let printRank: string = ` Rank ${elem.rank} `
        //     let printRankFixed: string = (printRank.length >= 9)
        //             ? printRank
        //             : printRank + " ".repeat(9 - printRank.length);

                    
        //     let printPlatformFixed: string = (elem.platform.length >= 32)
        //             ? elem.platform
        //             : " " + elem.platform + " ".repeat(31 - elem.platform.length)

        //     let printTitleName = printTextBlock(elem.title)(42)

        //     let printTitleNameFixed: string = "+"+"-".repeat(42)+"+\n" + printTitleName + "\n+" + "-".repeat(42) + "+\n|" + printPlatformFixed  + "|" + printRankFixed + "|\n+"+"-".repeat(42)+"+"
            
        //     let printValueD: string = `${elem.valueD}M ` 
        //     let printValueDFixed: string = (printValueD.length >= 9)
        //         ? printValueD
        //         : " ".repeat(9 - printValueD.length) + printValueD;

        //     let printValueDRow: string = (elem.miscellaneous)
        //         ? "| Global - Life-To-Date (Units)  |" + printValueDFixed + "|\n+" + "-".repeat(42) + "+\n|" + elem.miscellaneous + "\n+" + "-".repeat(elem.miscellaneous.length-1) + "+"
        //         : "| Global - Life-To-Date (Units)  |" + printValueDFixed + "|\n+" + "-".repeat(42) + "+";

        //     return printTitleNameFixed + "\n" + printValueDRow

        // }).reduce((prev, next) => {
        //     return prev + "\n" + next
        // })

        // return globalRank

    }

    const printTitlesOverseas = (titles: Titles[][]) => {

        const regionRank = titles.map((elem, index, array) => {
            if (elem[elem.length-1].valueB === 0) {
                return "N/A"
            }
            
            let printRank: string = ` Rank ${elem[0].rank} `
            let printRankFixed: string = (printRank.length >= 11)
                    ? printRank
                    : printRank + " ".repeat(11 - printRank.length);

            let printTitleName = printTextBlock(elem[0].title)(42)

            let printPlatformFixed: string = (elem[0].platform.length >= 30)
                ? elem[0].platform
                : " " + elem[0].platform + " ".repeat(29 - elem[0].platform.length)


            let printTitleNameFixed: string = "+"+"-".repeat(42)+"+\n" + printTitleName + "\n+" + "-".repeat(42) + "+\n|" + printPlatformFixed  + "|" + printRankFixed + "|\n+"+"-".repeat(42)+"+"

            let yearValues: string[] = elem.filter((value, index) => { return value.valueB !== 0}).map((value, valueIndex, valueArray) => {

               let printValue: string = `${value.valueB}M ` 
               let printValueFixed: string = (printValue.length >= 11)
                   ? printValue
                   : " ".repeat(11 - printValue.length) + printValue;

               let printPeriodFixed: string = (value.fiscalYear === undefined) 
                       ? "|" + value.period + " ".repeat(6) + "|"
                       : "| " + value.fiscalYear + " Cumulative          |"

               return  printPeriodFixed + printValueFixed + "|"
            }).filter((value, index) => index !== elem.length-1 );
                

        let printValue: string = `${elem[elem.length-1].valueB}M ` 
        
        let printValueFixed: string = (printValue.length >= 11)
            ? printValue
            : " ".repeat(11 - printValue.length) + printValue;

        let printLine: string = "+" + "-".repeat(42) + "+";

        let printLTD = printLine + "\n|Overseas - Life-To-Date(Units)|" + printValueFixed + "|\n" + printLine;

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

    const printTitlesJapan = (titles: Titles[][]): string => {


        const japanRank = titles.map((elem, index, array) => {
            if (elem[elem.length-1].valueA === 0) {
                return "N/A"
            }
            
            let printRank: string = ` Rank ${elem[0].rank} `
            let printRankFixed: string = (printRank.length >= 11)
                    ? printRank
                    : printRank + " ".repeat(11 - printRank.length);

            let printTitleName = printTextBlock(elem[0].title)(42)

            let printPlatformFixed: string = (elem[0].platform.length >= 30)
                ? elem[0].platform
                : " " + elem[0].platform + " ".repeat(29 - elem[0].platform.length)


            let printTitleNameFixed: string = "+"+"-".repeat(42)+"+\n" + printTitleName + "\n+" + "-".repeat(42) + "+\n|" + printPlatformFixed  + "|" + printRankFixed + "|\n+"+"-".repeat(42)+"+"

            let yearValues: string[] = elem.filter((value, index) => { return value.valueA !== 0}).map((value, valueIndex, valueArray) => {

               let printValue: string = `${value.valueA}M ` 
               let printValueFixed: string = (printValue.length >= 11)
                   ? printValue
                   : " ".repeat(11 - printValue.length) + printValue;

               let printPeriodFixed: string = (value.fiscalYear === undefined) 
                       ? "|" + value.period + " ".repeat(6) + "|"
                       : "| " + value.fiscalYear + " Cumulative          |"

               return  printPeriodFixed + printValueFixed + "|"
            }).filter((value, index) => index !== elem.length-1 );
                

        let printValue: string = `${elem[elem.length-1].valueA}M ` 
        
        let printValueFixed: string = (printValue.length >= 11)
            ? printValue
            : " ".repeat(11 - printValue.length) + printValue;

        let printLine: string = "+" + "-".repeat(42) + "+";

        let printLTD = printLine + "\n| Japan - Life-To-Date (Units) |" + printValueFixed + "|\n" + printLine;

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

        return japanRank
    }

    const reducedArrays: Titles[][] = latestFYcollection.map((elem) => {

        return accumulate(elem)
    })
    
    const sortedJapanCollection: Titles[][] = reducedArrays.map((elem, index, array) => {
            return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
    }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
        return (a[a.length-1].valueA > b[b.length-1].valueA)
            ? 1
            : (a[a.length-1].valueA < b[b.length-1].valueA)
            ? -1
            : 0 
    }).map((elem, index) => {
        let rankGet = index+1
        return elem.map(value => {
            return {...value, rank: rankGet} 
        }) //{...elem, rank: index+1} // x which is the returned array is now returned to the array of arrays
    })
    // .filter((elem) => {
    //     return elem.valueA !== 0
    // }) // for filtering out games not published by Nintendo in Japan

    const sortedOverseasCollection: Titles[][] = reducedArrays.map((elem, index, array) => {
            return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
    }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
        return (a[a.length-1].valueB > b[b.length-1].valueB)
            ? 1
            : (a[a.length-1].valueB < b[b.length-1].valueB)
            ? -1
            : 0 
    }).map((elem, index) => {
        let rankGet = index+1
        return elem.map(value => {
            return {...value, rank: rankGet} 
        }) //{...elem, rank: index+1} // x which is the returned array is now returned to the array of arrays
    })

    const sortedWWLTDCollection: Titles[][] = reducedArrays.map((elem, index, array) => {
            return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
    }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
        return (a[a.length-1].valueD > b[b.length-1].valueD)
            ? 1
            : (a[a.length-1].valueD < b[b.length-1].valueD)
            ? -1
            : 0 
    }).map((elem, index) => {
        let rankGet = index+1
        return elem.map(value => {
            return {...value, rank: rankGet} 
        }) //{...elem, rank: index+1} // x which is the returned array is now returned to the array of arrays
    }) 

let japanHeader = {
    ...header,
    platformHeader: "| Japan - Million-Seller Titles              |" 
}

let overseasHeader = {
    ...header,
    platformHeader: "| Overseas - Million-Seller Titles           |" 
}

let wwHeader = {
    ...header,
    platformHeader: "| Global - Million-Seller Titles             |" 
}
const printOneJapan = printHead(japanHeader)

const printOneOverseas = printHead(overseasHeader)

const printOneWW = printHead(wwHeader)

// const divideSortedJapanCollection = decimateCalculation(sortedJapanCollection)
// console.log(sortedJapanCollection);

const divideSortedJapanCollection = sortedJapanCollection.map(elem => decimateCalculation(elem)) 
const printTwo = printTitlesJapan(divideSortedJapanCollection)

const divideSortedOverseasCollection = sortedOverseasCollection.map(elem => decimateCalculation(elem))
const printThree = printTitlesOverseas(divideSortedOverseasCollection)

const divideSortedGlobalCollection = sortedWWLTDCollection.map(elem => decimateCalculation(elem))
const printFour = printTitlesGlobal(divideSortedGlobalCollection)

export const printJapan =
`${printOneJapan}
${dateLabel}
${printTwo}
###`;

export const printOverseas = 
`${printOneOverseas}
${dateLabel}
${printThree}
###`;

export const printGlobal = 
`${printOneWW}
${dateLabel}
${printFour}
###`;