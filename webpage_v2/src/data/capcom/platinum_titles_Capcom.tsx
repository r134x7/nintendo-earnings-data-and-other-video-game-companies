import {
    Header,
    Titles,
    labelTitles,
    printSummary,
    printSummaryHead,
    printHead,
    printTitles,
    quarterlyCalculation,
} from "../../utils/capcom_platinum_titles_logic";

import platinumTitles2023 from "./Platinum_Titles/platinum_titles_fy3_2023.json";
import platinumTitles2022 from "./Platinum_Titles/platinum_titles_fy3_2022.json";
import platinumTitles2021 from "./Platinum_Titles/platinum_titles_fy3_2021.json";
import platinumTitles2020 from "./Platinum_Titles/platinum_titles_fy3_2020.json";
import platinumTitles2019 from "./Platinum_Titles/platinum_titles_fy3_2019.json";

const collection = [
    platinumTitles2023,
    platinumTitles2022,
    platinumTitles2021,
    platinumTitles2020,
    platinumTitles2019,
] as const;

type getTitles = {
    title: string;
    releaseDate: string;
    platforms: string;
    Q1CmlValue: number;
    Q2CmlValue: number;
    Q3CmlValue: number;
    Q4CmlValue: number;
    valueLastFY?: number;
    valueLastTwoFYs?: number;
    miscellaneous?: string;
}

const titlesMake = (obj: getTitles[], prevFY: getTitles[] | undefined, prev2FYs: getTitles[] | undefined): Titles[][] => {
    
    let title: Titles[][] = obj.map(elem => {

        //need to search for title in previous fy years.
        let searchPrevFY = (!prevFY)
                ? [undefined]
                : prevFY.filter((value) => (elem.title === value.title) && (elem.releaseDate === value.releaseDate)); // searching by title name and release date should only match one title;
        
        let searchPrev2FYs = (!prev2FYs)
                ? [undefined]
                : prev2FYs.filter((value) => (elem.title === value.title) && (elem.releaseDate === value.releaseDate)); 

        return  [
                    {
                        title: elem.title,
                        releaseDate: elem.releaseDate,
                        platforms: elem.platforms,
                        period: " 1st Quarter  ",
                        value: elem.Q1CmlValue,
                        miscellaneous: (!elem.miscellaneous) ? undefined : elem.miscellaneous,
                    },
                    {
                        title: elem.title,
                        releaseDate: elem.releaseDate,
                        platforms: elem.platforms,
                        period: " 2nd Quarter  ",
                        value: elem.Q2CmlValue,
                        miscellaneous: (!elem.miscellaneous) ? undefined : elem.miscellaneous,
                    },
                    {
                        title: elem.title,
                        releaseDate: elem.releaseDate,
                        platforms: elem.platforms,
                        period: " 3rd Quarter  ",
                        value: elem.Q3CmlValue,
                        miscellaneous: (!elem.miscellaneous) ? undefined : elem.miscellaneous,
                    },
                    {
                        title: elem.title,
                        releaseDate: elem.releaseDate,
                        platforms: elem.platforms,
                        period: " 4th Quarter  ",
                        value: elem.Q4CmlValue,
                        miscellaneous: (!elem.miscellaneous) ? undefined : elem.miscellaneous,
                    },
                    {
                        title: elem.title,
                        releaseDate: elem.releaseDate,
                        platforms: elem.platforms,
                        period: " Last FY Total ",
                        value: (searchPrevFY[0] !== undefined) 
                                ? searchPrevFY[0].Q4CmlValue 
                                : (elem.valueLastFY === undefined)
                                ? 0
                                : elem.valueLastFY,
                        miscellaneous: (!elem.miscellaneous) ? undefined : elem.miscellaneous,
                    },
                    {
                        title: elem.title,
                        releaseDate: elem.releaseDate,
                        platforms: elem.platforms,
                        period: " Total at Two FYs prior ", 
                        value: (searchPrev2FYs[0] !== undefined) 
                                ? searchPrev2FYs[0].Q4CmlValue 
                                : (elem.valueLastTwoFYs === undefined)
                                ? 0
                                : elem.valueLastTwoFYs,
                        miscellaneous: (!elem.miscellaneous) ? undefined : elem.miscellaneous,
                    },
                ]
            }) 

    return title 
};

export const allPlatinumTitlesList: string[] = collection.map((elem, index, array) => {

    let currentQuarter = elem.currentQuarter;

    let header: Header = {
        capcomHeader: "| Capcom - Platinum Titles       |",
        secondHeader: "| Title                          |",
        thirdHeader: "| Platform                       |",
        fourthHeader: "| Release Date and Rank          |",
        fifthHeader: "| Units                          |",
        fiscalYear: elem.fiscalYearCml,
        fiscalYearYoY: elem.fiscalYearYoY,
        ltd: "| Life-To-Date       |",
        summaryHeader: elem.summaryHeader,
    };

    let prevFYCheck = (array[index+1] === undefined) ? undefined : array[index+1].titles;
    let prev2FYsCheck = (array[index+2] === undefined) ? undefined : array[index+2].titles; 

    let titlesList: Titles[][] = titlesMake(elem.titles, prevFYCheck, prev2FYsCheck);

    let sortedAllCollection = titlesList.map((elem, index, array) => {
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
        })
    
    
    let differenceAllTitles = sortedAllCollection.map((elem) => {
        return quarterlyCalculation(elem)
        })
    
    let printListedTitlesAll = differenceAllTitles.map((elem, index) => {
        return printTitles(header, elem, sortedAllCollection[index], currentQuarter)
    }) as string[];

    let printOne = printHead(header);

    let printAllPlatinumTitles = [printOne, ...printListedTitlesAll].reduce((prev, next) => prev + "\n" + next )

    return printAllPlatinumTitles
});

export const fyPlatinumTitlesList: string[] = collection.map((elem, index, array) => {

    let currentQuarter = elem.currentQuarter;

    let header: Header = {
        capcomHeader: "| Capcom - Platinum Titles       |",
        secondHeader: "| Title                          |",
        thirdHeader: "| Platform                       |",
        fourthHeader: "| Release Date and Rank          |",
        fifthHeader: "| Units                          |",
        fiscalYear: elem.fiscalYearCml,
        fiscalYearYoY: elem.fiscalYearYoY,
        ltd: "| Life-To-Date       |",
        summaryHeader: elem.summaryHeader,
    };

    let prevFYCheck = (array[index+1] === undefined) ? undefined : array[index+1].titles;
    let prev2FYsCheck = (array[index+2] === undefined) ? undefined : array[index+2].titles; 

    let titlesList: Titles[][] = titlesMake(elem.titles, prevFYCheck, prev2FYsCheck);

    let sortedFYCollection = titlesList.filter((elem, index, array) => {
            return elem[3].value - elem[4].value !== 0
            // we need to create a new array that is identical to the original due to sort's mutating properties. filter titles that sold units this FY
    }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
        return (a[currentQuarter-1].value - a[4].value > b[currentQuarter-1].value - b[4].value)
            ? 1
            : (a[currentQuarter-1].value - a[4].value < b[currentQuarter-1].value - b[4].value)
            ? -1
            : 0
    }).map((elem, index) => {
        // x is a nested map so that the actual elements of the array can be accessed, the level above is arrays being the elements since it is a collection of arrays
        const x: Titles[] = [...elem].map((elemTwo) => {
            return {...elemTwo, rank: index+1} 
        })
        return x // x which is the returned array is now returned to the array of arrays
    });

    let differenceFYTitles = sortedFYCollection.map((elem) => {
        return quarterlyCalculation(elem)
    })

    let printListedTitlesFY = differenceFYTitles.map((elem, index) => {
        return printTitles(header, elem, sortedFYCollection[index], currentQuarter)
    }) as string[];

    let newTitles = sortedFYCollection.map((elem) => {
            return labelTitles(elem)
        }).map((elem) => {
            return elem.filter((secondElem) => {
                return secondElem.label === " New! "
            })
        }).filter((elem) => elem.length !== 0 // to filter out zero length arrays
        ).map((elem) => {
        return elem[3].value // 4th quarter, new titles would not have last FY numbers, therefore can be summed up. 
        })

    let newSum = newTitles.reduce((prev, next) => prev + next, 0);        

    let recurringTitles = sortedFYCollection.map((elem) => {
            return labelTitles(elem)
        }).map((elem) => {
            return elem.filter((secondElem) => {
                return secondElem.label === " Recurring "
            })
        }).filter((elem) => elem.length !== 0 // to filter out zero length arrays
        ).map((elem) => {
            return elem[3].value - elem[4].value // to get FY cml. number
        })

    let recurringSum = recurringTitles.reduce((prev, next) => prev + next, 0)    

    let sporadicTitles = sortedFYCollection.map((elem) => {
            return labelTitles(elem)
        }).map((elem) => {
            return elem.filter((secondElem) => {
                return secondElem.label === " Sporadic " 
            })
        }).filter((elem) => elem.length !== 0 // to filter out zero length arrays
        ).map((elem) => {
            return elem[3].value - elem[4].value // to get FY cml. number
        })

    let sporadicSum = sporadicTitles.reduce((prev, next) => prev + next, 0)    


    let printOne = printHead(header);

    let printSummaryOne = printSummaryHead(header, newTitles, recurringTitles, sporadicTitles)

    let printSummaryTwo = printSummary(header, newSum, recurringSum, sporadicSum)

    let printFYPlatinumTitles: string = (currentQuarter !== 4)
        ? [printOne, ...printListedTitlesFY].reduce((prev, next) => prev + "\n" + next )
        : [printSummaryOne, printSummaryTwo, printOne, ...printListedTitlesFY,].reduce((prev, next) => prev + "\n" + next )

    return printFYPlatinumTitles
});
