import {
    Titles,
    Header,
    decimateCalculation,
    quarterlyCalculation,
    labelTitles,
    printTitles,
    printSummary,
    printSummaryHead,
} from "../../utils/fy_million_seller_titles_logic";
import type { searchTitles } from "../capcom/platinum_titles_Capcom";

import { headerPrint, dateLabel, liner, border, spacer, globImport } from "../../utils/table_design_logic";

export type collectionJSON = {
    currentQuarter: number,
    footnote?: string,
    fiscalYear: string,
    titles: titlesJSON[][],
};

export type titlesJSON = {
    name: string,
    platform: string,
    regionA: string,
    Q1CmlValueA: number,
    Q2CmlValueA: number,
    Q3CmlValueA: number,
    Q4CmlValueA: number,
    valueALastFY?: number,
    regionB: string,
    Q1CmlValueB: number,
    Q2CmlValueB: number,
    Q3CmlValueB: number,
    Q4CmlValueB: number,
    valueBLastFY?: number,
    regionC: string,
    Q1CmlValueC: number,
    Q2CmlValueC: number,
    Q3CmlValueC: number,
    Q4CmlValueC: number,
    valueCLastFY?: number,
    regionD: string,
    Q1CmlValueD: number,
    Q2CmlValueD: number,
    Q3CmlValueD: number,
    Q4CmlValueD: number,
    valueDLastFY?: number,
    miscellaneous?: string,
};

const collection: collectionJSON[] = [...globImport(new Map<number, collectionJSON>, import.meta.glob("./FY_Million_Seller_Titles/*.json", { import: "default", eager: true }), "Descending").values()]

export const titlesMake = (obj: titlesJSON, prevFY: titlesJSON[][] | undefined): Titles[] => {

    let searchPrevFY = (!prevFY)
            ? [undefined]
            : prevFY.map((elem) => elem.filter((value) => value.platform === obj.platform && value.name === obj.name)).flat()

    let title: Titles[] = [
        {
            title: obj.name,
            platform: obj.platform,
            period: "1st Quarter",
            regionA: "Japan",
            valueA: obj.Q1CmlValueA,
            regionB: "Overseas",
            valueB: obj.Q1CmlValueB,
            regionC: "WW FY",
            valueC: obj.Q1CmlValueC,
            regionD: "WW LTD",
            valueD: obj.Q1CmlValueD,
            miscellaneous: obj.miscellaneous,
        },
        {
            title: obj.name,
            platform: obj.platform,
            period: "2nd Quarter",
            regionA: "Japan",
            valueA: obj.Q2CmlValueA,
            regionB: "Overseas",
            valueB: obj.Q2CmlValueB,
            regionC: "WW FY",
            valueC: obj.Q2CmlValueC,
            regionD: "WW LTD",
            valueD: obj.Q2CmlValueD,
            miscellaneous: obj.miscellaneous,
        },
        {
            title: obj.name,
            platform: obj.platform,
            period: "3rd Quarter",
            regionA: "Japan",
            valueA: obj.Q3CmlValueA,
            regionB: "Overseas",
            valueB: obj.Q3CmlValueB,
            regionC: "WW FY",
            valueC: obj.Q3CmlValueC,
            regionD: "WW LTD",
            valueD: obj.Q3CmlValueD,
            miscellaneous: obj.miscellaneous,
        },
        {
            title: obj.name,
            platform: obj.platform,
            period: "4th Quarter",
            regionA: "Japan",
            valueA: obj.Q4CmlValueA,
            regionB: "Overseas",
            valueB: obj.Q4CmlValueB,
            regionC: "WW FY",
            valueC: obj.Q4CmlValueC,
            regionD: "WW LTD",
            valueD: obj.Q4CmlValueD,
            miscellaneous: obj.miscellaneous,
        },
        {
            title: obj.name,
            platform: obj.platform,
            period: "Last FY Total",
            regionA: "Japan",
            valueA: obj?.valueALastFY ?? searchPrevFY?.[0]?.Q4CmlValueA ?? 0, 
            regionB: "Overseas",
            valueB: obj?.valueBLastFY ?? searchPrevFY?.[0]?.Q4CmlValueB ?? 0, 
            regionC: "WW FY",
            valueC: obj?.valueCLastFY ?? searchPrevFY?.[0]?.Q4CmlValueC ?? 0, 
            regionD: "WW LTD",
            valueD: obj?.valueDLastFY ?? searchPrevFY?.[0]?.Q4CmlValueD ?? 0,
            miscellaneous: obj.miscellaneous,
        },
    ]

    return title
};

export const fyMillionSellerTitlesListAllHeaders = collection.map((elem, index, array) => {

    let header: Header = {
        mainHeader: "Nintendo Fiscal Year Million-Seller Titles",
        platformHeader: "All platforms",
        secondHeader: "Title",
        thirdHeader: "Platform and Rank",
        fourthHeader: "Units",
        areaHeader: "| Area         |    Japan | Overseas |",
        globalHeader: "| Global       | Global FY|Global LTD|",
        fiscalYear: elem.fiscalYear,
        mainSummaryHeader: "placeholder",
        secondSummaryHeader: "FY Million-Seller",
        thirdSummaryHeader: "Titles Summary",
        japanSummaryHeader: "Japan",
        overseasSummaryHeader: "Overseas",
        globalFYSummaryHeader: "Global FY",
        globalLTDSummaryHeader: "Global LTD",
    };

    const makeDateLabel = dateLabel(elem.fiscalYear ?? "N/A", elem?.currentQuarter ?? 4);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

    let footnote = elem?.footnote ?? "";

    let printOne = headerPrint([
        header.mainHeader,
        header.platformHeader,
    ],44) + "\n" + headerPrint([
        header.secondHeader,
        header.thirdHeader,
        header.fourthHeader
    ],32) + "\n" + printDateLabel;

    return {
        header: printOne,
        footnote: footnote,
    }
})

export const fyMillionSellerTitlesList = collection.map((elem, index, array) => {

    let header: Header = {
        mainHeader: "Nintendo Fiscal Year Million-Seller Titles",
        platformHeader: "Nintendo Switch",
        secondHeader: "Title",
        thirdHeader: "Platform and Rank",
        fourthHeader: "Units",
        areaHeader: "| Area         |    Japan | Overseas |",
        globalHeader: "| Global       | Global FY|Global LTD|",
        fiscalYear: elem.fiscalYear,
        mainSummaryHeader: "placeholder",
        secondSummaryHeader: "FY Million-Seller",
        thirdSummaryHeader: "Titles Summary",
        japanSummaryHeader: "Japan",
        overseasSummaryHeader: "Overseas",
        globalFYSummaryHeader: "Global FY",
        globalLTDSummaryHeader: "Global LTD",
    };

    const makeDateLabel = dateLabel(elem.fiscalYear ?? "N/A", elem?.currentQuarter ?? 4);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

    let prevFYTitles: titlesJSON[][] | undefined = array?.[index+1]?.titles;

    function makeTitlesList(titleValues: titlesJSON[], prevFYTitlesLocal: titlesJSON[][] | undefined, headerValues: Header, currentQuarter: number) {

        let titlesList: Titles[][] = titleValues.map(value => titlesMake(value, prevFYTitlesLocal));

        let filteredCollection = titlesList.filter((elem, index, array) => {
            return array[index][3].valueC !== 0
        }) // to make sure things are accurate and that it works, all titles that sold units this FY must not have zero units for the remaining quarters. (ignore Last FY Cml.) Tried using [currentQuarter -1] and not [3] but bugs occurred, oh well.

        let sortedCollection = filteredCollection.map((elem, index, array) => {
                    return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
            }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
                return (a[currentQuarter-1].valueC > b[currentQuarter-1].valueC)
                    ? 1
                    : (a[currentQuarter-1].valueC < b[currentQuarter-1].valueC)
                    ? -1
                    : 0 // 4th quarter WW FY is index 11
            }).map((elem, index) => {
                // x is a nested map so that the actual elements of the array can be accessed, the level above is arrays being the elements since it is a collection of arrays
                let x: Titles[] = [...elem].map((elemTwo) => {
                    return {...elemTwo, rank: index+1} 
                })
                return x // x which is the returned array is now returned to the array of arrays
            })

        let sortedTitles = sortedCollection.map((elem) => {
                return decimateCalculation(elem)
            })

        let differenceTitles = sortedCollection.map((elem) => {
            return decimateCalculation(elem)
        }).map((elem) => {
            return quarterlyCalculation(elem)
        })

        let newCollection = sortedTitles.map((elem) => {
                return labelTitles(elem)
            }).map((elem) => {
                return elem.filter((secondElem) => {
                    return secondElem.label === "New!"
                })
            }).filter((elem) => elem.length !== 0 // to filter out zero length arrays
            ).map((elem) => {
                return elem[3] // 4th quarter, I can't remember but I assume I just wanted only that quarter with cumulative data...
            })

        let recurringCollection = sortedTitles.map((elem) => {
                return labelTitles(elem)
            }).map((elem) => {
                return elem.filter((secondElem) => {
                    return secondElem.label === "Recurring"
                })
            }).filter((elem) => elem.length !== 0 // to filter out zero length arrays
            ).map((elem) => {
                return elem[3] // 4th quarter
            })    

        let newSummary = [newCollection, newCollection, newCollection, newCollection].map((elem, index, array) =>  {
            if (elem.length === 0) {
                return 0 // so that's why this isn't a never type...
            }
           // I really should have left notes here... I am guessing that I am putting all the values into the array and then I reduce it to get the summation of that region... 
                return elem.map((secondElem) => {
                    return (index === 0)
                        ? secondElem.valueA
                        : (index === 1)
                        ? secondElem.valueB
                        : (index === 2)
                        ? secondElem.valueC
                        : secondElem.valueD
                }).reduce((prev, next) => prev + next)
            })

        let recurringSummary = [recurringCollection, recurringCollection, recurringCollection, recurringCollection].map((elem, index, array) =>  {
            if (elem.length === 0) {
                return 0
            }

           // I really should have left notes here... I am guessing that I am putting all the values into the array and then I reduce it to get the summation of that region... 
                return elem.map((secondElem) => {
                    return (index === 0)
                        ? secondElem.valueA
                        : (index === 1)
                        ? secondElem.valueB
                        : (index === 2)
                        ? secondElem.valueC
                        : secondElem.valueD
                }).reduce((prev, next) => prev + next)
            })

        let headerFixed = {
            ...headerValues,
            platformHeader: sortedCollection[0][0].platform,
            mainSummaryHeader: sortedCollection[0][0].platform
        }

        let printOne = headerPrint([
            headerFixed.mainHeader,
            headerFixed.platformHeader,
        ],44) + "\n" + headerPrint([
            headerFixed.secondHeader,
            headerFixed.thirdHeader,
            headerFixed.fourthHeader
        ],32) + "\n" + printDateLabel;

        let printListedTitles = differenceTitles.map((elem, index) => {
            // return printTitles(headerFixed, elem, sortedTitles[index], currentQuarter)
            return {
               title: elem[0].title,
               platforms: elem[0].platform,
               table: printTitles(headerFixed, elem, sortedTitles[index], currentQuarter),  
            } as searchTitles 
        })

        let printSummaryOne = printSummaryHead(headerFixed, newCollection, recurringCollection)

        let printSummaryTwo = printSummary(headerFixed, newSummary, recurringSummary)

        // let printFYMillionSellerTitles = (currentQuarter !== 4) // can't use !== 4 for one condition only or else it assumes condition is always true (this issue occurred with hardcoded currentQuarter)
        //     ? [printOne, ...printListedTitles ].reduce((prev, next) => prev + "\n" + next )
        //     : [printOne, ...printListedTitles, printSummaryOne, printSummaryTwo].reduce((prev, next) => prev + "\n" + next )

        // return printFYMillionSellerTitles

        let printFYMillionSellerTitles = (currentQuarter !== 4) // can't use !== 4 for one condition only or else it assumes condition is always true (this issue occurred with hardcoded currentQuarter)
            ? {
                header: printOne,
                summary: "",
                titleList: printListedTitles,
            }
            : {
                header: printOne,
                summary: printSummaryOne + "\n" + printSummaryTwo, 
                titleList: printListedTitles,
            } 

        return printFYMillionSellerTitles
    };

    // let footnote = elem?.footnote ?? "###";

    // now that it is a function, when I want to add titles of another platform, then I can reduce it
    // let platformList = makeTitlesList(elem.titles, header, elem.currentQuarter);
    let platformList = elem.titles.map(value => makeTitlesList(value, prevFYTitles, header, elem.currentQuarter)
    )
    // .concat(footnote).reduce((prev,next) => prev + "\n" + next);

    // console.log(platformList);
    

    return platformList
});

export const fyMillionSellerTitlesGraphList = collection.map((elem, index, array) => {

    function makeGraphList(titleValues: titlesJSON[], currentQuarter: number) {

        let titlesList: Titles[][] = titleValues.map(value => titlesMake(value, undefined));

        let filteredCollection = titlesList.filter((elem, index, array) => {
            return array[index][3].valueC !== 0
        }) // to make sure things are accurate and that it works, all titles that sold units this FY must not have zero units for the remaining quarters. (ignore Last FY Cml.) Tried using [currentQuarter -1] and not [3] but bugs occurred, oh well.

        let sortedCollection = filteredCollection.map((elem, index, array) => {
                    return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
            }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
                return (a[currentQuarter-1].valueC > b[currentQuarter-1].valueC)
                    ? 1
                    : (a[currentQuarter-1].valueC < b[currentQuarter-1].valueC)
                    ? -1
                    : 0 // 4th quarter WW FY is index 11
            }).map((elem, index) => {
                // x is a nested map so that the actual elements of the array can be accessed, the level above is arrays being the elements since it is a collection of arrays
                let x: Titles[] = [...elem].map((elemTwo) => {
                    return {...elemTwo, rank: index+1} 
                })
                return x // x which is the returned array is now returned to the array of arrays
            })

        let sortedTitles = sortedCollection.map((elem) => {
                return decimateCalculation(elem)
            })

        let differenceTitles = sortedCollection.map((elem) => {
            return decimateCalculation(elem)
        }).map((elem) => {
            return quarterlyCalculation(elem)
        })

        return {
            quarters: differenceTitles,
            cumulative: sortedTitles,
        }
    };

    let platformList = elem.titles.map(value => makeGraphList(value, elem.currentQuarter)
    );

    let differenceTitlesList = platformList.map(value => value.quarters
    ).flat() as Titles[][];

    let cumulativeTitlesList = platformList.map(value => value.cumulative
    ).flat() as Titles[][];

    let thisFY: string = elem.fiscalYear;
    let lastFY: string = thisFY.slice(0, 4) + (Number(thisFY.slice(-4)) - 1).toString();

    let marchThisFY: string = "March " + thisFY.slice(4);
    let marchLastFY: string = "March " + lastFY.slice(4);

    const graphMake = {
        thisFY: thisFY,
        lastFY: lastFY,
        marchThisFY: marchThisFY,
        marchLastFY: marchLastFY,
        quarterTitleValuesThisFY: differenceTitlesList,
        cumulativeTitleValuesThisFY: cumulativeTitlesList,
    };

    return graphMake
});