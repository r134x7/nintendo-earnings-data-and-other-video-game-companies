import { titlesMake, collectionJSON } from "../fy_million_seller_titles_nintendo";
import { printTextBlock, border, liner, spacer, headerPrint, dateLabel } from "../../../utils/table_design_logic";

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
import { Header, Titles, decimateCalculation } from "../../../utils/fy_million_seller_titles_logic"
import { searchTitles } from "../../capcom/platinum_titles_Capcom";

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
    
    const makeDateLabel = dateLabel(totalCollection.at(-1)?.fiscalYear ?? "N/A", totalCollection.at(-1)?.currentQuarter ?? 4);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)


    const header: Header = {
    mainHeader: "Nintendo Fiscal Year Million-Seller Titles",
    platformHeader: "+============================================+",
    secondHeader: "Title",
    thirdHeader: "Platform and Rank",
    fourthHeader: "Units",
    areaHeader: "| Area         |    Japan | Overseas |",
    globalHeader: "| Global       | Global FY|Global LTD|", 
    fiscalYear: " FY3/23",
    mainSummaryHeader: "",
    secondSummaryHeader: "FY Million-Seller",
    thirdSummaryHeader: "Titles Summary",
    japanSummaryHeader: "Japan",
    overseasSummaryHeader: "Overseas",
    globalFYSummaryHeader: "Global FY",
    globalLTDSummaryHeader: "Global LTD",
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


    const printTitlesGlobal = (titles: Titles[][], returnObject?: boolean) => {

        const regionRank = titles.map((elem, index, array) => {
            
            let printPlatformAndRank: string = liner(border([
                spacer(elem[0].platform,29,"left"),
                spacer(`Rank ${elem[0].rank}`,11,"left"),
            ]),"−","bottom",true);

            let printTitleName = liner(printTextBlock(elem[0].title, 43),"−","both",true,43);

            let printTitleNameFixed: string = printTitleName + printPlatformAndRank;

            let yearValues: string[] = elem.filter((value, index) => { return value.valueC !== 0}).map((value, valueIndex, valueArray) => {

                return border([
                    spacer(value.fiscalYear + " Cumulative",29,"left"),
                    spacer(`${value.valueC}M`,11,"right"),
                ],true)
            }).filter((value, index) => index !== elem.length-1 );
                
        let printLTD: string = liner(border([
            spacer(" Global - Life-To-Date (Units)",29,"left"),
            spacer(`${elem[elem.length-1].valueD}M`,11,"right"),
        ]),"−","both",true) 
         
        let printPenultimate = [
                printTitleNameFixed,
                ...yearValues,
                printLTD,
            ];
        
        let printNote = (elem[0].miscellaneous === undefined) ? undefined : liner(printTextBlock(elem[0].miscellaneous,43),"−","bottom",true,43);

        let printFinal = (printNote === undefined)
            ? printPenultimate 
            : [...printPenultimate, printNote] 

            // return printFinal.reduce((prev, next) => {
            //     return prev + next
            // });

            return (!returnObject) 
            ? printFinal.reduce((prev, next) => prev + next)
            : {
                title: elem.at(-1)?.title ?? "ERROR",
                platforms: elem.at(-1)?.platform ?? "ERROR",
                table: printFinal.reduce((prev, next) => prev + next)
            }
        })
        // .filter(value => value !== "N/A").reduce((prev, next) => {
        //         return prev + next
        // });

        return (!returnObject) 
            ? regionRank.filter(value => value !== "N/A").reduce((acc, next) => (typeof next === "string") ? acc + next : next,"")
            : regionRank.filter(value => value !== "N/A")
    }

    const printTitlesOverseas = (titles: Titles[][], returnObject?: boolean) => {

        const regionRank = titles.map((elem, index, array) => {
            if (elem[elem.length-1].valueB === 0) {
                return "N/A"
            }
            
            let printPlatformAndRank: string = liner(border([
                spacer(elem[0].platform,29,"left"),
                spacer(`Rank ${elem[0].rank}`,11,"left"),
            ]),"−","bottom",true);

            let printTitleName = liner(printTextBlock(elem[0].title, 43),"−","both",true,43);

            let printTitleNameFixed: string = printTitleName + printPlatformAndRank;

            let yearValues: string[] = elem.filter((value, index) => { return value.valueB !== 0}).map((value, valueIndex, valueArray) => {

                return border([
                    spacer(value.fiscalYear + " Cumulative",29,"left"),
                    spacer(`${value.valueB}M`,11,"right"),
                ],true)
            }).filter((value, index) => index !== elem.length-1 );
                
        let printLTD: string = liner(border([
            spacer("Overseas - Life-To-Date(Units)",29,"left"),
            spacer(`${elem[elem.length-1].valueB}M`,11,"right"),
        ]),"−","both",true) 

        let printNote = (elem[0].miscellaneous === undefined) ? undefined : liner(printTextBlock(elem[0].miscellaneous,43),"−","bottom",true,43);

        let printPenultimate = [
                printTitleNameFixed,
                ...yearValues,
                printLTD,
            ];

        let printFinal = (printNote === undefined)
            ? printPenultimate 
            : [...printPenultimate, printNote] 

            // return printFinal.reduce((prev, next) => {
            //     return prev + next
            // });

            return (!returnObject) 
            ? printFinal.reduce((prev, next) => prev + next)
            : {
                title: elem.at(-1)?.title ?? "ERROR",
                platforms: elem.at(-1)?.platform ?? "ERROR",
                table: printFinal.reduce((prev, next) => prev + next)
            }
        })
        // .filter(value => value !== "N/A").reduce((prev, next) => {
        //         return prev + next
        // });

        return (!returnObject) 
            ? regionRank.filter(value => value !== "N/A").reduce((acc, next) => (typeof next === "string") ? acc + next : next,"")
            : regionRank.filter(value => value !== "N/A")
    }

    const printTitlesJapan = (titles: Titles[][], returnObject?: boolean) => {


        const regionRank = titles.flatMap((elem, index, array) => {
            if (elem[elem.length-1].valueA === 0) {
                // return "N/A"
                return []
            }

            let printPlatformAndRank: string = liner(border([
                spacer(elem[0].platform,29,"left"),
                spacer(`Rank ${elem[0].rank}`,11,"left"),
            ]),"−","bottom",true);

            let printTitleName = liner(printTextBlock(elem[0].title, 43),"−","both",true,43);

            let printTitleNameFixed: string = printTitleName + printPlatformAndRank;

            let yearValues: string[] = elem.filter((value, index) => { return value.valueA !== 0}).map((value, valueIndex, valueArray) => {

                return border([
                    spacer(value.fiscalYear + " Cumulative",29,"left"),
                    spacer(`${value.valueA}M`,11,"right"),
                ],true)
            }).filter((value, index) => index !== elem.length-1 );
                
        let printLTD: string = liner(border([
            spacer("Japan - Life-To-Date (Units)",29,"left"),
            spacer(`${elem[elem.length-1].valueA}M`,11,"right"),
        ]),"−","both",true) 
         
        let printPenultimate = [
                printTitleNameFixed,
                ...yearValues,
                printLTD,
            ];

        let printNote = (elem[0].miscellaneous === undefined) ? undefined : liner(printTextBlock(elem[0].miscellaneous,43),"−","bottom",true,43);

        let printFinal = (printNote === undefined)
            ? printPenultimate 
            : [...printPenultimate, printNote] 

            // return printFinal.reduce((prev, next) => {
            //     return prev + next
            // });

            return (!returnObject) 
            ? printFinal.reduce((prev, next) => prev + next) as string
            : {
                title: elem.at(-1)?.title ?? "ERROR",
                platforms: elem.at(-1)?.platform ?? "ERROR",
                table: printFinal.reduce((prev, next) => prev + next)
            } as searchTitles
        })
        // .filter(value => value !== "N/A").reduce((prev, next) => {
        //         return prev + next
        // });

        return (!returnObject) 
            ? regionRank.reduce((acc, next) => (typeof next === "string") ? acc + next : next,"")
            : regionRank
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
    platformHeader: "FY Million-Seller Titles Cml. - Japan" 
}

let overseasHeader = {
    ...header,
    platformHeader: "FY Million-Seller Titles Cml. - Overseas" 
}

let wwHeader = {
    ...header,
    platformHeader: "FY Million-Seller Titles Cml. - Global" 
}

let allHeader = {
    ...header,
    platformHeader: "FY Million-Seller Titles Cml. - All"
}

const printOneJapan = headerPrint([
    japanHeader.mainHeader,
    japanHeader.platformHeader,
],44) + "\n" + headerPrint([
    japanHeader.secondHeader,
    japanHeader.thirdHeader,
    japanHeader.fourthHeader,
],28)

const printOneOverseas = headerPrint([
    overseasHeader.mainHeader,
    overseasHeader.platformHeader,
],44) + "\n" + headerPrint([
    overseasHeader.secondHeader,
    overseasHeader.thirdHeader,
    overseasHeader.fourthHeader,
],28)

const printOneWW = headerPrint([
    wwHeader.mainHeader,
    wwHeader.platformHeader,
],44) + "\n" + headerPrint([
    wwHeader.secondHeader,
    wwHeader.thirdHeader,
    wwHeader.fourthHeader,
],28)

export const printOneAll = headerPrint([
    allHeader.mainHeader,
    allHeader.platformHeader,
],44) + "\n" + headerPrint([
    allHeader.secondHeader,
    allHeader.thirdHeader,
    allHeader.fourthHeader,
],28) + "\n"

const divideSortedJapanCollection = sortedJapanCollection.map(elem => decimateCalculation(elem)) 
const printTwo = printTitlesJapan(divideSortedJapanCollection, true) as searchTitles[];

const divideSortedOverseasCollection = sortedOverseasCollection.map(elem => decimateCalculation(elem))
const printThree = printTitlesOverseas(divideSortedOverseasCollection, true) as searchTitles[];

const divideSortedGlobalCollection = sortedWWLTDCollection.map(elem => decimateCalculation(elem))
const printFour = printTitlesGlobal(divideSortedGlobalCollection, true) as searchTitles[];

// export const printJapan =
// `${printOneJapan}
// ${printDateLabel}
// ${printTwo}
// ###`;

// export const printOverseas = 
// `${printOneOverseas}
// ${printDateLabel}
// ${printThree}
// ###`;

// export const printGlobal = 
// `${printOneWW}
// ${printDateLabel}
// ${printFour}
// ###`;

export const printJapan = {
    header: printOneJapan + "\n",
    date: printDateLabel,
    region: "Japan",
    titleList: printTwo,
}

export const printOverseas = {
    header: printOneOverseas + "\n",
    date: printDateLabel,
    region: "Overseas",
    titleList: printThree,
}

export const printGlobal = {
    header: printOneWW + "\n",
    date: printDateLabel,
    region: "Global",
    titleList: printFour,
}