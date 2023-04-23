import { 
    Titles,
    Header,
    quarterlyCalculation,
    printBody,
} from "../../utils/top_selling_titles_logic";

import type { searchTitles } from "../capcom/platinum_titles_Capcom";

import topSellingTitles2023 from "./Top_Selling_Titles/top_selling_titles_fy3_2023.json";
import topSellingTitles2022 from "./Top_Selling_Titles/top_selling_titles_fy3_2022.json";
import topSellingTitles2021 from "./Top_Selling_Titles/top_selling_titles_fy3_2021.json";
import topSellingTitles2020 from "./Top_Selling_Titles/top_selling_titles_fy3_2020.json";
import topSellingTitles2019 from "./Top_Selling_Titles/top_selling_titles_fy3_2019.json";
import topSellingTitles2018 from "./Top_Selling_Titles/top_selling_titles_fy3_2018.json";
import topSellingTitles2017 from "./Top_Selling_Titles/top_selling_titles_fy3_2017.json";
import topSellingTitles2016 from "./Top_Selling_Titles/top_selling_titles_fy3_2016.json";
import topSellingTitles2015 from "./Top_Selling_Titles/top_selling_titles_fy3_2015.json";
import topSellingTitles2014 from "./Top_Selling_Titles/top_selling_titles_fy3_2014.json";
import topSellingTitles2013 from "./Top_Selling_Titles/top_selling_titles_fy3_2013.json";
import topSellingTitles2012 from "./Top_Selling_Titles/top_selling_titles_fy3_2012.json";
import { headerPrint, dateLabel, liner, border, spacer } from "../../utils/table_design_logic";

export type collectionJSON = {
    currentQuarter: number,
    fiscalYear: string,
    titles: titlesJSON[][],
};

export type titlesJSON = {
    name: string,
    platform: string,
    Q1CmlValue: number,
    Q2CmlValue: number,
    Q3CmlValue: number,
    Q4CmlValue: number,
    valueLastFY?: number,
    miscellaneous?: string, 
};

const collection: collectionJSON[] = [
    topSellingTitles2023,
    topSellingTitles2022,
    topSellingTitles2021,
    topSellingTitles2020,
    topSellingTitles2019,
    topSellingTitles2018,
    topSellingTitles2017,
    topSellingTitles2016,
    topSellingTitles2015,
    topSellingTitles2014,
    topSellingTitles2013,
    topSellingTitles2012,
];

export const titlesMake = (obj: titlesJSON, prevFY: titlesJSON[][] | undefined): Titles[] => {
    // will find the first instance of the title and platform which by year is in descending order
    let searchPrevFY = (!prevFY)
            ? [undefined]
            : prevFY.map((elem) => elem.filter((value) => value.platform === obj.platform && value.name === obj.name)).flat()

    let title: Titles[] = [
        {
            title: obj.name,
            platform: obj.platform,
            period: "1st Quarter",
            value: (obj.Q1CmlValue === 0 && searchPrevFY[0] !== undefined)
                                    ? searchPrevFY[0].Q4CmlValue
                                    : obj.Q1CmlValue,
            miscellaneous: obj.miscellaneous,
        },
        {
            title: obj.name,
            platform: obj.platform,
            period: "2nd Quarter",
            value: (obj.Q2CmlValue === 0 && searchPrevFY[0] !== undefined)
                                    ? searchPrevFY[0].Q4CmlValue
                                    : obj.Q2CmlValue,
            miscellaneous: obj.miscellaneous,
        },
        {
            title: obj.name,
            platform: obj.platform,
            period: "3rd Quarter",
            value: (obj.Q3CmlValue === 0 && searchPrevFY[0] !== undefined)
                                    ? searchPrevFY[0].Q4CmlValue
                                    : obj.Q3CmlValue,
            miscellaneous: obj.miscellaneous,
        },
        {
            title: obj.name,
            platform: obj.platform,
            period: "4th Quarter",
            value: obj.Q4CmlValue,
            miscellaneous: obj.miscellaneous,
        },
        {
            title: obj.name,
            platform: obj.platform,
            period: "Q4 Last FY",
            value: (obj.valueLastFY !== undefined) 
                                ? obj.valueLastFY 
                                : (searchPrevFY[0] !== undefined)
                                    ? searchPrevFY[0].Q4CmlValue
                                    : 0, 
            miscellaneous: obj.miscellaneous,
        },
    ]

    return title
};

export const topSellingTitlesList = collection.map((elem, index, array) => {

    let currentQuarter: number = elem.currentQuarter;

    let header: Header = {
    mainHeader: "Top Selling Titles",
    platformHeader: "||",
    titles: "Title",
    platform: "Platform",
    units: "Units",
    fiscalYear: elem.fiscalYear,
    };

    // let prevFYTitles: titlesJSON[][] | undefined = (array[index+1] === undefined)
    //     ? undefined
    //     : array[index+1].titles;

    // changed method due to fiscal years where the previous FY data for a title is not there, all remaining fiscal years are taken and then filtered in titlesMake.
    let prevFYTitles: titlesJSON[][] | undefined = (array[index+1] === undefined)
        ? undefined
        : array.filter((value, secondIndex, secondArray) => {
            return secondIndex > index
        }).flatMap(value => value.titles);

    function makeTitlesList(titleValues: titlesJSON[], prevFYTitlesLocal: titlesJSON[][] | undefined, headerValues: Header, currentQuarter: number, returnObject?: boolean) {

        let headerValuesFixed = {
            ...headerValues,
            platformHeader: titleValues[0].platform
        }

        let titlesList: Titles[][] = titleValues.map(value => titlesMake(value, prevFYTitlesLocal));

        let sortedCollection = titlesList.map((elem, index, array) => {
                    return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
            }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
                return (a[currentQuarter-1].value > b[currentQuarter-1].value)
                    ? 1
                    : (a[currentQuarter-1].value < b[currentQuarter-1].value)
                    ? -1
                    : 0
            }).map((elem, index) => {
                // x is a nested map so that the actual elements of the array can be accessed, the level above is arrays being the elements since it is a collection of arrays
                const x: Titles[] = [...elem].map((elemTwo) => {
                    return {...elemTwo, rank: index+1} 
                })
                return x // x which is the returned array is now returned to the array of arrays
            });

        let differenceTitles: Titles[][] = sortedCollection.map(elem => quarterlyCalculation(elem));

    const makeDateLabel = dateLabel(elem.fiscalYear ?? "N/A", elem?.currentQuarter ?? 4);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

        let printOne = headerPrint([
            headerValuesFixed.mainHeader,
            headerValuesFixed.platformHeader,
        ],32) + "\n" + headerPrint([
            headerValuesFixed.titles,
            headerValuesFixed.platform,
            headerValuesFixed.units,
        ],20) + "\n" + printDateLabel;

        let inputArrays = Array.from({length: differenceTitles.length}, (v, i) => {

            return {
                quarter: differenceTitles[i],
                fiscalYearCml: differenceTitles[i], // I forget why this is done twice
                LTD: sortedCollection[i],
                header: headerValuesFixed,
                currentQuarter: currentQuarter,
            }
        });

        let endLine: string = "###"; 

        // let printRest = inputArrays.map(elem => {
        //     return printBody(elem.quarter, elem.fiscalYearCml, elem.LTD, elem.header, elem.currentQuarter)
        // }).concat(endLine);

        let printRest = inputArrays.map(elem => {
            return (!returnObject)
                ? printBody(elem.quarter, elem.fiscalYearCml, elem.LTD, elem.header, elem.currentQuarter) as string
                : {
                    title: elem.quarter[0].title,
                    platforms: elem.quarter[0].platform,
                    table: printBody(elem.quarter, elem.fiscalYearCml, elem.LTD, elem.header, elem.currentQuarter),
                } as searchTitles
        })

        // console.log(printRest)

        if (!returnObject) {
            let printAll = [printOne].concat(printRest as string[]) as string[];  

            return printAll.reduce((prev, next) => prev + "\n" + next);
        } else {
            return {
                header: printOne,
                titleList: printRest,
            }
        }

    };

    // let platformList: string = elem.titles.map(value => makeTitlesList(value, prevFYTitles, header, elem.currentQuarter)).reduce((prev,next) => prev + "\n" + next);

    let platformList = elem.titles.map(value => makeTitlesList(value, prevFYTitles, header, elem.currentQuarter, true));
    // console.log(platformList);
    

    return platformList as {
        header: string,
        titleList: searchTitles[],
    }[]

});

export const topSellingTitlesGraphList = collection.map((elem, index, array) => {

    let currentQuarter: number = elem.currentQuarter;

    function makeGraphList(titleValues: titlesJSON[], currentQuarter: number) {

        let titlesList: Titles[][] = titleValues.map(value => titlesMake(value, undefined));


        let sortedCollection = titlesList.map((elem, index, array) => {
                    return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
            }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
                return (a[currentQuarter-1].value > b[currentQuarter-1].value)
                    ? 1
                    : (a[currentQuarter-1].value < b[currentQuarter-1].value)
                    ? -1
                    : 0
            }).map((elem, index) => {
                // x is a nested map so that the actual elements of the array can be accessed, the level above is arrays being the elements since it is a collection of arrays
                const x: Titles[] = [...elem].map((elemTwo) => {
                    return {...elemTwo, rank: index+1} 
                })
                return x // x which is the returned array is now returned to the array of arrays
            });
        
        let differenceTitles: Titles[][] = sortedCollection.map(elem => quarterlyCalculation(elem));


        return {
            quarters: differenceTitles,
            cumulative: sortedCollection,
        }
    };

    let platformList = elem.titles.map(value => makeGraphList(value, elem.currentQuarter)
    );

    let differenceTitlesList = platformList.map(value => value.quarters
    ).flat() as Titles[][];

    let cumulativeTitlesList = platformList.map(value => value.cumulative
    ).flat() as Titles[][];
        
    let thisFY: string = elem.fiscalYear.slice(2, -13);
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