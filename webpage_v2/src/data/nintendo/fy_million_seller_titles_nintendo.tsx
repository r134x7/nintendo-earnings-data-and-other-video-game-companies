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

const collection = [
    fyMillionSellerTitles2023,
    fyMillionSellerTitles2022,
    fyMillionSellerTitles2021,
    fyMillionSellerTitles2020,
    fyMillionSellerTitles2019,
    fyMillionSellerTitles2018,
    fyMillionSellerTitles2017,
] as const;

const titlesMake = (obj: {
    name: string,
    regionA: string,
    Q1CmlValueA: number,
    Q2CmlValueA: number,
    Q3CmlValueA: number,
    Q4CmlValueA: number,
    valueALastFY: number,
    regionB: string,
    Q1CmlValueB: number,
    Q2CmlValueB: number,
    Q3CmlValueB: number,
    Q4CmlValueB: number,
    valueBLastFY: number,
    regionC: string,
    Q1CmlValueC: number,
    Q2CmlValueC: number,
    Q3CmlValueC: number,
    Q4CmlValueC: number,
    valueCLastFY: number,
    regionD: string,
    Q1CmlValueD: number,
    Q2CmlValueD: number,
    Q3CmlValueD: number,
    Q4CmlValueD: number,
    valueDLastFY: number,
    miscellaneous?: string,
}): Titles[] => {

    let title: Titles[] = [
        {
            title: obj.name,
            period: " 1st Quarter  ",
            regionA: "   Japan ",
            valueA: obj.Q1CmlValueA,
            regionB: " Overseas",
            valueB: obj.Q1CmlValueB,
            regionC: "   WW FY ",
            valueC: obj.Q1CmlValueC,
            regionD: "  WW LTD ",
            valueD: obj.Q1CmlValueD,
            miscellaneous: obj.miscellaneous,
        },
        {
            title: obj.name,
            period: " 2nd Quarter  ",
            regionA: "   Japan ",
            valueA: obj.Q2CmlValueA,
            regionB: " Overseas",
            valueB: obj.Q2CmlValueB,
            regionC: "   WW FY ",
            valueC: obj.Q2CmlValueC,
            regionD: "  WW LTD ",
            valueD: obj.Q2CmlValueD,
            miscellaneous: obj.miscellaneous,
        },
        {
            title: obj.name,
            period: " 3rd Quarter  ",
            regionA: "   Japan ",
            valueA: obj.Q3CmlValueA,
            regionB: " Overseas",
            valueB: obj.Q3CmlValueB,
            regionC: "   WW FY ",
            valueC: obj.Q3CmlValueC,
            regionD: "  WW LTD ",
            valueD: obj.Q3CmlValueD,
            miscellaneous: obj.miscellaneous,
        },
        {
            title: obj.name,
            period: " 4th Quarter  ",
            regionA: "   Japan ",
            valueA: obj.Q4CmlValueA,
            regionB: " Overseas",
            valueB: obj.Q4CmlValueB,
            regionC: "   WW FY ",
            valueC: obj.Q4CmlValueC,
            regionD: "  WW LTD ",
            valueD: obj.Q4CmlValueD,
            miscellaneous: obj.miscellaneous,
        },
        {
            title: obj.name,
            period: " Last FY Total ",
            regionA: "   Japan ",
            valueA: obj.valueALastFY,
            regionB: " Overseas",
            valueB: obj.valueBLastFY, 
            regionC: "   WW FY ",
            valueC: obj.valueCLastFY,
            regionD: "  WW LTD ",
            valueD: obj.valueDLastFY,
            miscellaneous: obj.miscellaneous,
        },
    ]

    return title

};

export const fyMillionSellerTitlesList: string[] = collection.map((elem, index, array) => {

    let currentQuarter: number = elem.currentQuarter;

    let header: Header = {
        switchHeader: "| Nintendo Switch FY Million-Seller Titles |",
        secondHeader: "| Title and Rank                           |",
        thirdHeader: "| Units                                    |",
        areaHeader: "| Area         |   Japan | Overseas|",
        globalHeader: "| Global       |   WW FY |  WW LTD |",
        fiscalYear: elem.fiscalYear,
        switchSummaryHeader: "| Nintendo Switch FY    |\n| Million-Seller Titles |\n",
        japanSummaryHeader: "| Japan                           |",
        overseasSummaryHeader: "| Overseas                        |",
        globalFYSummaryHeader: "| Global FY                       |",
        globalLTDSummaryHeader: "| Global LTD                      |",
    };

    let titlesList: Titles[][] = elem.titles.map(value => titlesMake(value));


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
                return secondElem.label === " New! "
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


    let printOne = printHead(header)

    let printListedTitles = differenceTitles.map((elem, index) => {
        return printTitles(header, elem, sortedTitles[index], currentQuarter)
    }) as string[];

    let printSummaryOne = printSummaryHead(header, newCollection, recurringCollection)

    let printSummaryTwo = printSummary(header, newSummary, recurringSummary)

    let printFYMillionSellerTitles = (currentQuarter !== 4) // can't use !== 4 for one condition only or else it assumes condition is always true (this issue occurred with hardcoded currentQuarter)
        ? [printOne, ...printListedTitles ].reduce((prev, next) => prev + "\n" + next )
        : [printOne, ...printListedTitles, printSummaryOne, printSummaryTwo].reduce((prev, next) => prev + "\n" + next )

    return printFYMillionSellerTitles

});