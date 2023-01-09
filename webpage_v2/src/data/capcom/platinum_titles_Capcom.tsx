import {
    Header,
    Titles,
    labelTitles,
    printSummary,
    printSummaryHead,
    printHead,
    printTitles,
    quarterlyCalculation,
    yearlyCalculation,
} from "../../utils/capcom_platinum_titles_logic";

import platinumTitles2023 from "./Platinum_Titles/platinum_titles_fy3_2023.json";
import platinumTitles2022 from "./Platinum_Titles/platinum_titles_fy3_2022.json";
import platinumTitles2021 from "./Platinum_Titles/platinum_titles_fy3_2021.json";
import platinumTitles2020 from "./Platinum_Titles/platinum_titles_fy3_2020.json";
import platinumTitles2019 from "./Platinum_Titles/platinum_titles_fy3_2019.json";
import platinumTitles2018 from "./Platinum_Titles/platinum_titles_fy3_2018.json";
import platinumTitles2017 from "./Platinum_Titles/platinum_titles_fy3_2017.json";
import platinumTitles2016 from "./Platinum_Titles/platinum_titles_fy3_2016.json";
import platinumTitles2015 from "./Platinum_Titles/platinum_titles_fy3_2015.json";
import platinumTitles2014 from "./Platinum_Titles/platinum_titles_fy3_2014.json";
import platinumTitles2013 from "./Platinum_Titles/platinum_titles_fy3_2013.json";
import platinumTitles2012 from "./Platinum_Titles/platinum_titles_fy3_2012.json";
import platinumTitles2011 from "./Platinum_Titles/platinum_titles_fy3_2011.json";
import platinumTitles2010 from "./Platinum_Titles/platinum_titles_fy3_2010.json";
import platinumTitles2009 from "./Platinum_Titles/platinum_titles_fy3_2009.json";
import platinumTitles2008 from "./Platinum_Titles/platinum_titles_fy3_2008.json";
import platinumTitles2007 from "./Platinum_Titles/platinum_titles_fy3_2007.json";
import platinumTitles2006 from "./Platinum_Titles/platinum_titles_fy3_2006.json";

export type getTitles = {
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

export type collectionData = {
    currentQuarter: number,
    footnotes?: string,
    fiscalYear: string,
    titles: getTitles[],
    delistedTitles?: getTitles[],
}

const collection: collectionData[] = [
    platinumTitles2023,
    platinumTitles2022,
    platinumTitles2021,
    platinumTitles2020,
    platinumTitles2019,
    platinumTitles2018,
    platinumTitles2017,
    platinumTitles2016,
    platinumTitles2015,
    platinumTitles2014,
    platinumTitles2013,
    platinumTitles2012,
    platinumTitles2011,
    platinumTitles2010,
    platinumTitles2009,
    platinumTitles2008,
    platinumTitles2007,
    platinumTitles2006,
];

const reverseCollection: collectionData[] = [      
    platinumTitles2006,        
    platinumTitles2007,        
    platinumTitles2008,        
    platinumTitles2009,        
    platinumTitles2010,        
    platinumTitles2011,        
    platinumTitles2012,        
    platinumTitles2013,        
    platinumTitles2014,        
    platinumTitles2015,        
    platinumTitles2016,        
    platinumTitles2017,        
    platinumTitles2018,        
    platinumTitles2019,        
    platinumTitles2020,        
    platinumTitles2021,        
    platinumTitles2022,        
    platinumTitles2023,    
];

export const titlesMake = (obj: getTitles[], prevFY: getTitles[] | undefined, prev2FYs: getTitles[] | undefined): Titles[][] => {
    
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
                        value: (elem.valueLastFY !== undefined) 
                                ? elem.valueLastFY 
                                : (searchPrevFY[0] !== undefined)
                                    ? searchPrevFY[0].Q4CmlValue
                                    : 0,
                        miscellaneous: (!elem.miscellaneous) ? undefined : elem.miscellaneous,
                    },
                    {
                        title: elem.title,
                        releaseDate: elem.releaseDate,
                        platforms: elem.platforms,
                        period: " Total at Two FYs prior ", 
                        value: (elem.valueLastTwoFYs !== undefined) 
                                ? elem.valueLastTwoFYs 
                                : (searchPrev2FYs[0] !== undefined)
                                    ? searchPrev2FYs[0].Q4CmlValue
                                    : 0,
                        miscellaneous: (!elem.miscellaneous) ? undefined : elem.miscellaneous,
                    },
                ]
            }) 

    return title 
};

export const allPlatinumTitlesList: string[] = collection.map((elem, index, array) => {

    let currentQuarter = elem.currentQuarter;

    let header: Header = {
        capcomHeader: "Capcom - Platinum Titles",
        secondHeader: "Title",
        thirdHeader: "Platform",
        fourthHeader: "Release Date and Rank",
        fifthHeader: "Units",
        fiscalYear: elem.fiscalYear,
        fiscalYearYoY: elem.fiscalYear + " Cml. YoY% |",
        ltd: "Life-To-Date",
        summaryHeader: elem.fiscalYear + " Cml.|   Units |    %    |",
    };

    let prevFYCheck = (array[index+1] === undefined) ? undefined : array[index+1].titles;
    let prev2FYsCheck = (array[index+2] === undefined) ? undefined : array[index+2].titles;

    let delistedTitlesCheck: getTitles[] = (elem.delistedTitles === undefined)
            ? elem.titles
            : elem.titles.concat(elem.delistedTitles);

    let titlesList: Titles[][] = titlesMake(delistedTitlesCheck, prevFYCheck, prev2FYsCheck);

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

    let printAllPlatinumTitles: string = (elem.footnotes === undefined) 
                ? [printOne, ...printListedTitlesAll].reduce((prev, next) => prev + "\n" + next )
                : [printOne, ...printListedTitlesAll, elem.footnotes].reduce((prev, next) => prev + "\n" + next )

    return printAllPlatinumTitles
});

export const fyPlatinumTitlesList: string[] = collection.map((elem, index, array) => {

    let currentQuarter = elem.currentQuarter;

    let header: Header = {
        capcomHeader: "Capcom - Platinum Titles",
        secondHeader: "Title",
        thirdHeader: "Platform",
        fourthHeader: "Release Date and Rank",
        fifthHeader: "Units",
        fiscalYear: elem.fiscalYear,
        fiscalYearYoY: elem.fiscalYear + " Cml. YoY% |",
        ltd: "Life-To-Date",
        summaryHeader: elem.fiscalYear + " Cml.|   Units |    %    |",
    };

    let prevFYCheck = (array[index+1] === undefined) ? undefined : array[index+1].titles;
    let prev2FYsCheck = (array[index+2] === undefined) ? undefined : array[index+2].titles; 

    let delistedTitlesCheck: getTitles[] = (elem.delistedTitles === undefined)
            ? elem.titles
            : elem.titles.concat(elem.delistedTitles);

    let titlesList: Titles[][] = titlesMake(delistedTitlesCheck, prevFYCheck, prev2FYsCheck);

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
                return secondElem.label === "New!"
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

    let printListedTitlesFYFixed: string[] = (elem.footnotes === undefined) ? printListedTitlesFY : printListedTitlesFY.concat(elem.footnotes) 

    let printFYPlatinumTitles: string = (currentQuarter !== 4)
        ? [printOne, ...printListedTitlesFYFixed].reduce((prev, next) => prev + "\n" + next )
        : [printSummaryOne, printSummaryTwo, printOne, ...printListedTitlesFYFixed,].reduce((prev, next) => prev + "\n" + next )

    return printFYPlatinumTitles
});

const specialList = (): string => {

    let header: Header = {
        capcomHeader: "Capcom - Platinum Titles",
        secondHeader: "Title",
        thirdHeader: "Platform",
        fourthHeader: "Release Date and Rank",
        fifthHeader: "Units",
        fiscalYear: "N/A",
        fiscalYearYoY: "N/A",
        ltd: "Life-To-Date",
        summaryHeader: "N/A",
    };

    const makeValues: Titles[][][] = reverseCollection.map((data, index, array) => {

        let prevFYCheck = (array[index-1] === undefined) ? undefined : array[index-1].titles;
        let prev2FYsCheck = (array[index-2] === undefined) ? undefined : array[index-2].titles;

        let delistedTitlesCheck: getTitles[] = (data.delistedTitles === undefined)
                ? data.titles
                : data.titles.concat(data.delistedTitles);

        let titlesList: Titles[][] = titlesMake(delistedTitlesCheck, prevFYCheck, prev2FYsCheck);

        return titlesList.map(elem => elem.map(value => { return { ...value, fiscalYear: data.fiscalYearCml} }))
    });


    function sortingTitles(title: Titles[])  {

        const setTitles: Titles[] = makeValues.map((elem, index) => {

            return (elem.map(value => value.filter((v, i, array) => {
                return v.releaseDate === title[0].releaseDate && v.title === title[0].title && v.period === " 4th Quarter  " && v.value !== array[4].value // checks that Q4 value isn't the same as the last FY value
            }))
            ).flat()
        }).flat();

        return setTitles
    };

    let latestTitlesList = makeValues[makeValues.length-1].map((elem, index) => {

            return sortingTitles(elem)
    });


    let filteredList = latestTitlesList.filter(elem => elem.length !== 0);

    let sortedList: Titles[][] = filteredList.map(elem => elem).sort((b, a) => {
        return (a[a.length-1].value > b[b.length-1].value)
            ? 1
            : (a[a.length-1].value < b[b.length-1].value)
            ? -1
            : 0 
    }).map((elem, index) => {    
            return elem.map((elemTitle) => {
                return {...elemTitle, rank: index+1}
            })  
    });


    let yearlyCalcList = sortedList.map(elem => yearlyCalculation(elem));

    let printAll = yearlyCalcList.map((elem, index) => {
        return printTitles(header, elem, sortedList[index], 9999)
    }) as string[];

    return printAll.reduce((acc, next) => acc + "\n" + next) 
};

export const printSpecialList = specialList();