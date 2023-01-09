import {
    Titles,
    Header,
    decimateCalculation,
    quarterlyCalculation,
    labelTitles,
    printHead,
    printTitles,
    printSummary,
    printSummaryHead,
} from "../../utils/fy_million_seller_titles_logic";

import fyMillionSellerTitles2023 from "./FY_Million_Seller_Titles/million_seller_titles_fy3_2023.json";
import fyMillionSellerTitles2022 from "./FY_Million_Seller_Titles/million_seller_titles_fy3_2022.json";
import fyMillionSellerTitles2021 from "./FY_Million_Seller_Titles/million_seller_titles_fy3_2021.json";
import fyMillionSellerTitles2020 from "./FY_Million_Seller_Titles/million_seller_titles_fy3_2020.json";
import fyMillionSellerTitles2019 from "./FY_Million_Seller_Titles/million_seller_titles_fy3_2019.json";
import fyMillionSellerTitles2018 from "./FY_Million_Seller_Titles/million_seller_titles_fy3_2018.json";
import fyMillionSellerTitles2017 from "./FY_Million_Seller_Titles/million_seller_titles_fy3_2017.json";
import fyMillionSellerTitles2016 from "./FY_Million_Seller_Titles/million_seller_titles_fy3_2016.json";
import fyMillionSellerTitles2015 from "./FY_Million_Seller_Titles/million_seller_titles_fy3_2015.json";
import fyMillionSellerTitles2014 from "./FY_Million_Seller_Titles/million_seller_titles_fy3_2014.json";
import fyMillionSellerTitles2013 from "./FY_Million_Seller_Titles/million_seller_titles_fy3_2013.json";
import fyMillionSellerTitles2012 from "./FY_Million_Seller_Titles/million_seller_titles_fy3_2012.json";
import fyMillionSellerTitles2011 from "./FY_Million_Seller_Titles/million_seller_titles_fy3_2011.json";
import fyMillionSellerTitles2010 from "./FY_Million_Seller_Titles/million_seller_titles_fy3_2010.json";
import fyMillionSellerTitles2009 from "./FY_Million_Seller_Titles/million_seller_titles_fy3_2009.json";
import fyMillionSellerTitles2008 from "./FY_Million_Seller_Titles/million_seller_titles_fy3_2008.json";
import fyMillionSellerTitles2007 from "./FY_Million_Seller_Titles/million_seller_titles_fy3_2007.json";
import fyMillionSellerTitles2006 from "./FY_Million_Seller_Titles/million_seller_titles_fy3_2006.json";
import fyMillionSellerTitles2005 from "./FY_Million_Seller_Titles/million_seller_titles_fy3_2005.json";
import fyMillionSellerTitles2004 from "./FY_Million_Seller_Titles/million_seller_titles_fy3_2004.json";

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

const collection: collectionJSON[] = [
    fyMillionSellerTitles2023,
    fyMillionSellerTitles2022,
    fyMillionSellerTitles2021,
    fyMillionSellerTitles2020,
    fyMillionSellerTitles2019,
    fyMillionSellerTitles2018,
    fyMillionSellerTitles2017,
    fyMillionSellerTitles2016,
    fyMillionSellerTitles2015,
    fyMillionSellerTitles2014,
    fyMillionSellerTitles2013,
    fyMillionSellerTitles2012,
    fyMillionSellerTitles2011,
    fyMillionSellerTitles2010,
    fyMillionSellerTitles2009,
    fyMillionSellerTitles2008,
    fyMillionSellerTitles2007,
    fyMillionSellerTitles2006,
    fyMillionSellerTitles2005,
    fyMillionSellerTitles2004,
] //as const;

export const titlesMake = (obj: titlesJSON, prevFY: titlesJSON[][] | undefined): Titles[] => {

    let searchPrevFY = (!prevFY)
            ? [undefined]
            : prevFY.map((elem) => elem.filter((value) => value.platform === obj.platform && value.name === obj.name)).flat()

    let title: Titles[] = [
        {
            title: obj.name,
            platform: obj.platform,
            period: " 1st Quarter  ",
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
            period: " 2nd Quarter  ",
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
            period: " 3rd Quarter  ",
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
            period: " 4th Quarter  ",
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
            period: " Last FY Total ",
            regionA: "Japan",
            valueA: (obj.valueALastFY !== undefined) 
                                ? obj.valueALastFY 
                                : (searchPrevFY[0] !== undefined)
                                    ? searchPrevFY[0].Q4CmlValueA
                                    : 0, 
            // (obj.valueALastFY === undefined) ? 0 : obj.valueALastFY,
            regionB: "Overseas",
            valueB: (obj.valueBLastFY !== undefined) 
                                ? obj.valueBLastFY 
                                : (searchPrevFY[0] !== undefined)
                                    ? searchPrevFY[0].Q4CmlValueB
                                    : 0,
            regionC: "WW FY",
            valueC: (obj.valueCLastFY !== undefined) 
                                ? obj.valueCLastFY 
                                : (searchPrevFY[0] !== undefined)
                                    ? searchPrevFY[0].Q4CmlValueC
                                    : 0,
            regionD: "WW LTD",
            valueD: (obj.valueDLastFY !== undefined) 
                                ? obj.valueDLastFY 
                                : (searchPrevFY[0] !== undefined)
                                    ? searchPrevFY[0].Q4CmlValueD
                                    : 0,
            miscellaneous: obj.miscellaneous,
        },
    ]

    return title

};

export const fyMillionSellerTitlesList: string[] = collection.map((elem, index, array) => {

    let header: Header = {
        mainHeader: "| Nintendo Fiscal Year Million-Seller Titles |",
        platformHeader: "| Nintendo Switch                   |",
        secondHeader: "| Title                                    |",
        thirdHeader: "| Platform and Rank                        |",
        fourthHeader: "| Units                                    |",
        areaHeader: "| Area         |   Japan | Overseas|",
        globalHeader: "| Global       |   WW FY |  WW LTD |",
        fiscalYear: elem.fiscalYear,
        mainSummaryHeader: "placeholder",
        secondSummaryHeader: "| FY Million-Seller      |",
        thirdSummaryHeader: "| Titles Summary         |",
        japanSummaryHeader: "| Japan                           |",
        overseasSummaryHeader: "| Overseas                        |",
        globalFYSummaryHeader: "| Global FY                       |",
        globalLTDSummaryHeader: "| Global LTD                      |",
    };

    let prevFYTitles: titlesJSON[][] | undefined = (array[index+1] === undefined)
        ? undefined
        : array[index+1].titles;

    function makeTitlesList(titleValues: titlesJSON[], prevFYTitlesLocal: titlesJSON[][] | undefined, headerValues: Header, currentQuarter: number): string {

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
                    return secondElem.label === " Recurring "
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

        let platformLength = " ".repeat(44 - sortedCollection[0][0].platform.length-1)

        let summaryLength = " ".repeat(24 - sortedCollection[0][0].platform.length-1)

        let headerFixed = {
            ...headerValues,
            platformHeader: "| " + sortedCollection[0][0].platform + platformLength + "|",
            mainSummaryHeader: "| " + sortedCollection[0][0].platform + summaryLength + "|"
        }

        let printOne = printHead(headerFixed)

        let printListedTitles = differenceTitles.map((elem, index) => {
            return printTitles(headerFixed, elem, sortedTitles[index], currentQuarter)
        }) as string[];

        let printSummaryOne = printSummaryHead(headerFixed, newCollection, recurringCollection)

        let printSummaryTwo = printSummary(headerFixed, newSummary, recurringSummary)

        let printFYMillionSellerTitles = (currentQuarter !== 4) // can't use !== 4 for one condition only or else it assumes condition is always true (this issue occurred with hardcoded currentQuarter)
            ? [printOne, ...printListedTitles ].reduce((prev, next) => prev + "\n" + next )
            : [printOne, ...printListedTitles, printSummaryOne, printSummaryTwo].reduce((prev, next) => prev + "\n" + next )

        return printFYMillionSellerTitles
    };

    let footnote = (elem.footnote === undefined) ? "###" : elem.footnote;

    // now that it is a function, when I want to add titles of another platform, then I can reduce it
    // let platformList = makeTitlesList(elem.titles, header, elem.currentQuarter);
    let platformList: string = elem.titles.map(value => makeTitlesList(value, prevFYTitles, header, elem.currentQuarter)
    ).concat(footnote).reduce((prev,next) => prev + "\n" + next);

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