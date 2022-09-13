import { collection as fy3_17_collection } from "../Nintendo-FY3-2017/mst-fy3-17";
import { collection as fy3_18_collection } from "../Nintendo-FY3-2018/mst-fy3-18";
import { collection as fy3_19_collection } from "../Nintendo-FY3-2019/mst-fy3-19";
import { collection as fy3_20_collection } from "../Nintendo-FY3-2020/mst-fy3-20";
import { collection as fy3_21_collection } from "../Nintendo-FY3-2021/mst-fy3-21";
import { collection as fy3_22_collection } from "../Nintendo-FY3-2022/mst-fy3-22";
import { collection as fy3_23_collection } from "../Nintendo-FY3-2023/mst-fy3-23";

import { Header, Titles, decimateCalculation, printHead } from "../../../utils/fy-million-seller-titles-logic"

    const totalCollection = [
        fy3_17_collection,
        fy3_18_collection,
        fy3_19_collection,
        fy3_20_collection,
        fy3_21_collection,
        fy3_22_collection,
        fy3_23_collection,
    ] as const;

    // latestFYcollection is where the latest FY collection needs to be placed.
    const latestFYcollection = fy3_23_collection.map((elem, index) => {
        
        return sortingArrays(index)
    })

    const dateLabel = "| Latest data as of June 30th, 2022        |\n+" + "-".repeat(42) + "+"

    const header: Header = {
    switchHeader: "| Nintendo Switch FY Million-Seller Titles |",
    secondHeader: "| Title and Rank                           |",
    thirdHeader: "| Units                                    |",
    areaHeader: "| Area         |   Japan | Overseas|",
    globalHeader: "| Global       |   WW FY |  WW LTD |",
    fiscalYear: " FY3/23 ",
    switchSummaryHeader: "| Nintendo Switch FY    |\n| Million-Seller Titles |\n",
    japanSummaryHeader: "| Japan                           |",
    overseasSummaryHeader: "| Overseas                        |",
    globalFYSummaryHeader: "| Global FY                       |",
    globalLTDSummaryHeader: "| Global LTD                      |",
    }

    function sortingArrays(titleCount: number) {

        const testTitle1 = totalCollection.map((elem, index) => {
            
            return (elem[titleCount] === undefined)
                ? []
                : elem[titleCount]
    
        }).filter((elem) => elem.length !== 0)

        const filterTitle1 = testTitle1.map((elem) => {
            return elem.filter((secondElem, index, array) => {
                return secondElem.valueC !== 0 && secondElem.period === " 4th Quarter  "
            })
        }).filter((elem) => elem.length !== 0) 
        
        return filterTitle1.flat() // return was deeply nested
    }
    
    function accumulate(title: Titles[]) {

        const japanTitle1 = title.map((elem, index, array) => {
            // return elem[0].valueA
            return elem.valueA
        }).reduce((prev, next) => prev + next)
    
        
        const overseasTitle1 = title.map((elem, index, array) => {
            // return elem[0].valueB
            return elem.valueB
        }).reduce((prev, next) => prev + next)
        
        
        const title1Flat = title.flatMap((flat) => flat).reduce((prev, next) => {
            return {...prev, ...next}
        })
    
        return {
                ...title1Flat, 
                valueA: japanTitle1, 
                valueB: overseasTitle1, 
                valueC: 0
            }
    } 


    const printTitlesGlobal = (titles: Titles[]) => {

        const globalRank = titles.map((elem, index, array) => {

            let printRank: string = ` Rank ${elem.rank} `
            let printRankFixed: string = (printRank.length >= 9)
                    ? printRank
                    : printRank + " ".repeat(9 - printRank.length);
    
            let printTitleName: string = (elem.title.length > 32)
            ? elem.title.split(" ").reduce((prev, next, index, array) => {
    
                let nextCheck = prev + next + " ";
                
                if (nextCheck.length > 31 && prev.length <= 31) {
                    return prev + " ".repeat(32 - prev.length) + `|         |\n| ` + next
                } else if (index === array.length-1) {
                    return prev + next + " ".repeat(77 - prev.length)
                } else {
                    return prev + " " + next
                }
            })
            : (elem.title.length < 32)
            ? elem.title + " ".repeat(32 - elem.title.length) 
            : elem.title
    
            let printTitleNameFixed: string = "+"+"-".repeat(42)+"+\n|" + printTitleName + "|" + printRankFixed + "|\n+"+"-".repeat(42)+"+"
            
            let printValueD: string = `${elem.valueD}M ` 
            let printValueDFixed: string = (printValueD.length >= 9)
                ? printValueD
                : " ".repeat(9 - printValueD.length) + printValueD;

            let printValueDRow: string = (elem.miscellaneous)
                ? "| Global - Life-To-Date (Units)  |" + printValueDFixed + "|\n+" + "-".repeat(42) + "+\n|" + elem.miscellaneous + "\n+" + "-".repeat(elem.miscellaneous.length-1) + "+"
                : "| Global - Life-To-Date (Units)  |" + printValueDFixed + "|\n+" + "-".repeat(42) + "+"

            return printTitleNameFixed + "\n" + printValueDRow

        }).reduce((prev, next) => {
            return prev + "\n" + next
        })

        return globalRank

    }

    const printTitlesOverseas = (titles: Titles[]) => {

        const overseasRank = titles.map((elem, index, array) => {

            let printRank: string = ` Rank ${elem.rank} `
            let printRankFixed: string = (printRank.length >= 9)
                    ? printRank
                    : printRank + " ".repeat(9 - printRank.length);
    
            let printTitleName: string = (elem.title.length > 32)
            ? elem.title.split(" ").reduce((prev, next, index, array) => {
    
                let nextCheck = prev + next + " ";
                
                if (nextCheck.length > 31 && prev.length <= 31) {
                    return prev + " ".repeat(32 - prev.length) + `|         |\n| ` + next
                } else if (index === array.length-1) {
                    return prev + next + " ".repeat(77 - prev.length)
                } else {
                    return prev + " " + next
                }
            })
            : (elem.title.length < 32)
            ? elem.title + " ".repeat(32 - elem.title.length) 
            : elem.title
    
            let printTitleNameFixed: string = "+"+"-".repeat(42)+"+\n|" + printTitleName + "|" + printRankFixed + "|\n+"+"-".repeat(42)+"+"
            
            let printValueB: string = `${elem.valueB}M ` 
            let printValueBFixed: string = (printValueB.length >= 9)
                ? printValueB
                : " ".repeat(9 - printValueB.length) + printValueB;

            let printValueBRow: string = (elem.miscellaneous)
                ? "| Overseas - Life-To-Date (Units)|" + printValueBFixed + "|\n+" + "-".repeat(42) + "+\n|" + elem.miscellaneous + "\n+" + "-".repeat(elem.miscellaneous.length-1) + "+"
                : "| Overseas - Life-To-Date (Units)|" + printValueBFixed + "|\n+" + "-".repeat(42) + "+"

            return printTitleNameFixed + "\n" + printValueBRow

        }).reduce((prev, next) => {
            return prev + "\n" + next
        })

        return overseasRank

    }

    const printTitlesJapan = (titles: Titles[]) => {

        const japanRank = titles.map((elem, index, array) => {

            let printRank: string = ` Rank ${elem.rank} `
            let printRankFixed: string = (printRank.length >= 9)
                    ? printRank
                    : printRank + " ".repeat(9 - printRank.length);
    
            let printTitleName: string = (elem.title.length > 32)
            ? elem.title.split(" ").reduce((prev, next, index, array) => {
    
                let nextCheck = prev + next + " ";
                
                if (nextCheck.length > 31 && prev.length <= 31) {
                    return prev + " ".repeat(32 - prev.length) + `|         |\n| ` + next
                } else if (index === array.length-1) {
                    return prev + next + " ".repeat(77 - prev.length)
                } else {
                    return prev + " " + next
                }
            })
            : (elem.title.length < 32)
            ? elem.title + " ".repeat(32 - elem.title.length) 
            : elem.title
    
            let printTitleNameFixed: string = "+"+"-".repeat(42)+"+\n|" + printTitleName + "|" + printRankFixed + "|\n+"+"-".repeat(42)+"+"
            
            let printValueA: string = `${elem.valueA}M ` 
            let printValueAFixed: string = (printValueA.length >= 9)
                ? printValueA
                : " ".repeat(9 - printValueA.length) + printValueA;

            let printValueARow: string = "| Japan - Life-To-Date (Units)   |" + printValueAFixed + "|\n+" + "-".repeat(42) + "+"
            
            return printTitleNameFixed + "\n" + printValueARow
        }).reduce((prev, next) => {
            return prev + "\n" + next
        })

        return japanRank

    }

    const reducedArrays = latestFYcollection.map((elem) => {

        return accumulate(elem)
    })
    
    const sortedJapanCollection = reducedArrays.map((elem, index, array) => {
            return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
    }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
        return (a.valueA > b.valueA)
            ? 1
            : (a.valueA < b.valueA)
            ? -1
            : 0 // 4th quarter WW FY is index 11
    }).map((elem, index) => {
        // x is a nested map so that the actual elements of the array can be accessed, the level above is arrays being the elements since it is a collection of arrays
        // const x: Titles[] = [...elem].map((elemTwo) => {
        //     return {...elemTwo, rank: index+1} 
        // })
        return {...elem, rank: index+1} // x which is the returned array is now returned to the array of arrays
    }).filter((elem) => {
        return elem.valueA !== 0
    }) // for filtering out games not published by Nintendo in Japan

    const sortedOverseasCollection = reducedArrays.map((elem, index, array) => {
            return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
    }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
        return (a.valueB > b.valueB)
            ? 1
            : (a.valueB < b.valueB)
            ? -1
            : 0 // 4th quarter WW FY is index 11
    }).map((elem, index) => {
        // x is a nested map so that the actual elements of the array can be accessed, the level above is arrays being the elements since it is a collection of arrays
        // const x: Titles[] = [...elem].map((elemTwo) => {
        //     return {...elemTwo, rank: index+1} 
        // })
        return {...elem, rank: index+1} // x which is the returned array is now returned to the array of arrays
    })

    const sortedWWLTDCollection = reducedArrays.map((elem, index, array) => {
            return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
    }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
        return (a.valueD > b.valueD)
            ? 1
            : (a.valueD < b.valueD)
            ? -1
            : 0 // 4th quarter WW FY is index 11
    }).map((elem, index) => {
        // x is a nested map so that the actual elements of the array can be accessed, the level above is arrays being the elements since it is a collection of arrays
        // const x: Titles[] = [...elem].map((elemTwo) => {
        //     return {...elemTwo, rank: index+1} 
        // })
        return {...elem, rank: index+1} // x which is the returned array is now returned to the array of arrays
    }) 


const printOne = printHead(header)

const divideSortedJapanCollection = decimateCalculation(sortedJapanCollection)
const printTwo = printTitlesJapan(divideSortedJapanCollection)

const divideSortedOverseasCollection = decimateCalculation(sortedOverseasCollection)
const printThree = printTitlesOverseas(divideSortedOverseasCollection)

const divideSortedGlobalCollection = decimateCalculation(sortedWWLTDCollection)
const printFour = printTitlesGlobal(divideSortedGlobalCollection)

export const printJapan =
`${printOne}
${dateLabel}
${printTwo}`;

export const printOverseas = 
`${printOne}
${dateLabel}
${printThree}`;

export const printGlobal = 
`${printOne}
${dateLabel}
${printFour}`;