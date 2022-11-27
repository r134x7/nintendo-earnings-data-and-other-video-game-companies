import { 
    Titles,
    Header,
    quarterlyCalculation,
    printHead,
    printBody,
} from "../../utils/top_selling_titles_logic";

import topSellingTitlesSwitch2023 from "./Top_Selling_Titles/switch_top_selling_titles_fy3_2023.json";
import topSellingTitlesSwitch2022 from "./Top_Selling_Titles/switch_top_selling_titles_fy3_2022.json";
import topSellingTitlesSwitch2021 from "./Top_Selling_Titles/switch_top_selling_titles_fy3_2021.json";
import topSellingTitlesSwitch2020 from "./Top_Selling_Titles/switch_top_selling_titles_fy3_2020.json";
import topSellingTitlesSwitch2019 from "./Top_Selling_Titles/switch_top_selling_titles_fy3_2019.json";
import topSellingTitlesSwitch2018 from "./Top_Selling_Titles/switch_top_selling_titles_fy3_2018.json";
import topSellingTitlesSwitch2017 from "./Top_Selling_Titles/switch_top_selling_titles_fy3_2017.json";

const collection = [
    topSellingTitlesSwitch2023,
    topSellingTitlesSwitch2022,
    topSellingTitlesSwitch2021,
    topSellingTitlesSwitch2020,
    topSellingTitlesSwitch2019,
    topSellingTitlesSwitch2018,
    topSellingTitlesSwitch2017,
] as const;

const titlesMake = (obj: {
    name: string,
    Q1CmlValue: number,
    Q2CmlValue: number,
    Q3CmlValue: number,
    Q4CmlValue: number,
    valueLastFY: number,
    miscellaneous?: string, 
}): Titles[] => {
    // ensure the keys are spelled correctly in the JSON.
    let title: Titles[] = [
        {
            title: obj.name,
            period: " 1st Quarter         ",
            value: obj.Q1CmlValue,
            miscellaneous: obj.miscellaneous,
        },
        {
            title: obj.name,
            period: " 2nd Quarter         ",
            value: obj.Q2CmlValue,
            miscellaneous: obj.miscellaneous,
        },
        {
            title: obj.name,
            period: " 3rd Quarter         ",
            value: obj.Q3CmlValue,
            miscellaneous: obj.miscellaneous,
        },
        {
            title: obj.name,
            period: " 4th Quarter         ",
            value: obj.Q4CmlValue,
            miscellaneous: obj.miscellaneous,
        },
        {
            title: obj.name,
            period: " Q4 Last FY ",
            value: obj.valueLastFY, // must check correct keys used
            miscellaneous: obj.miscellaneous,
        },
    ]

    return title
};

export const topSellingTitlesList: string[] = collection.map((elem, index, array) => {

    let currentQuarter: number = elem.currentQuarter;

    let header: Header = {
    switchHeader: "| Switch - Top Selling Titles    |",
    units: "| Units                          |",
    fiscalYear: elem.fiscalYear,
    };

    let titlesList: Titles[][] = elem.titles.map(value => titlesMake(value))

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
        
    let printOne = printHead(header)
        
    let inputArrays = Array.from({length: differenceTitles.length}, (v, i) => {

        return {
            quarter: differenceTitles[i],
            fiscalYearCml: differenceTitles[i], // I forget why this is done twice
            LTD: sortedCollection[i],
            header: header,
            currentQuarter: currentQuarter,
        }
    });

    let endLine: string = "###"; 

    let printRest = inputArrays.map(elem => {

        return printBody(elem.quarter, elem.fiscalYearCml, elem.LTD, elem.header, elem.currentQuarter)
    }).concat(endLine);

    let printAll = [printOne].concat(printRest);  

    return printAll.reduce((prev, next) => prev + "\n" + next);
});

export const topSellingTitlesGraphList = collection.map((elem, index, array) => {

    let currentQuarter: number = elem.currentQuarter;

    let titlesList: Titles[][] = elem.titles.map(value => titlesMake(value))

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
        
    let thisFY: string = elem.fiscalYear.slice(2, -13);
    let lastFY: string = thisFY.slice(0, 4) + (Number(thisFY.slice(-4)) - 1).toString();

    let marchThisFY: string = "March " + thisFY.slice(4);
    let marchLastFY: string = "March " + lastFY.slice(4);

    const graphMake = {
        thisFY: thisFY,
        lastFY: lastFY,
        marchThisFY: marchThisFY,
        marchLastFY: marchLastFY,
        quarterTitleValuesThisFY: differenceTitles,
        cumulativeTitleValuesThisFY: sortedCollection,
    };

    return graphMake
});