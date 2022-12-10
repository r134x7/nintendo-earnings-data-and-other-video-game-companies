import { Titles, Header, printTitles } from "../utils/capcom_platinum_titles_logic";
import { titlesMake, getTitles, collectionData } from "../data/capcom/platinum_titles_Capcom";

// found a source for why I need to import the JSON like this in Jest testing: https://github.com/nrwl/nx/issues/5195 
import * as platinumTitles2023 from "../data/capcom/Platinum_Titles/platinum_titles_fy3_2023.json";
import * as platinumTitles2022 from "../data/capcom/Platinum_Titles/platinum_titles_fy3_2022.json";
import * as platinumTitles2021 from "../data/capcom/Platinum_Titles/platinum_titles_fy3_2021.json";
import * as platinumTitles2020 from "../data/capcom/Platinum_Titles/platinum_titles_fy3_2020.json";
import * as platinumTitles2019 from "../data/capcom/Platinum_Titles/platinum_titles_fy3_2019.json";
import * as platinumTitles2018 from "../data/capcom/Platinum_Titles/platinum_titles_fy3_2018.json";
import * as platinumTitles2017 from "../data/capcom/Platinum_Titles/platinum_titles_fy3_2017.json";
import * as platinumTitles2016 from "../data/capcom/Platinum_Titles/platinum_titles_fy3_2016.json";
import * as platinumTitles2015 from "../data/capcom/Platinum_Titles/platinum_titles_fy3_2015.json";
import * as platinumTitles2014 from "../data/capcom/Platinum_Titles/platinum_titles_fy3_2014.json";
import * as platinumTitles2013 from "../data/capcom/Platinum_Titles/platinum_titles_fy3_2013.json";
import * as platinumTitles2012 from "../data/capcom/Platinum_Titles/platinum_titles_fy3_2012.json";
import * as platinumTitles2011 from "../data/capcom/Platinum_Titles/platinum_titles_fy3_2011.json";
import * as platinumTitles2010 from "../data/capcom/Platinum_Titles/platinum_titles_fy3_2010.json";
import * as platinumTitles2009 from "../data/capcom/Platinum_Titles/platinum_titles_fy3_2009.json";
import * as platinumTitles2008 from "../data/capcom/Platinum_Titles/platinum_titles_fy3_2008.json";
import * as platinumTitles2007 from "../data/capcom/Platinum_Titles/platinum_titles_fy3_2007.json";
import * as platinumTitles2006 from "../data/capcom/Platinum_Titles/platinum_titles_fy3_2006.json";

// avoid having empty lists [] in your collections from preparing for the next earnings

const totalCollection: collectionData[] = [      
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

function yearlyCalculation(years: Titles[]) {

   const calc: Titles[] = years.map((elem, index, array) => {
       return (index !== 0)
               ? {
                ...elem,
                value: Number((elem.value - array[index-1].value).toFixed(2))
               }
               : elem 
   })

   return calc
};


const makeValues: Titles[][][] = totalCollection.map((data, index, array) => {

    let prevFYCheck = (array[index-1] === undefined) ? undefined : array[index-1].titles;
    let prev2FYsCheck = (array[index-2] === undefined) ? undefined : array[index-2].titles;

    let makeTitles = titlesMake(data.titles, prevFYCheck, prev2FYsCheck);

    return makeTitles.map(elem => elem.map(value => { return { ...value, fiscalYear: data.fiscalYearCml} }))
});

// created titles for each fiscal year...
// need to filter through each titles and get the Q4 value and the fiscal year date... end up with a 

function sortingTitles(title: Titles[])  {

    // const testTitles = makeValues.map((elem, index) => {

    //     return (elem.map(value => value.filter(i => i.title === title[0].title && i.period === " 4th Quarter  "))).flat()
    // }).flat();
    // console.log(makeValues.length);
    
    const testTitles: Titles[] = makeValues.map((elem, index) => {

        return (elem.map(value => value.filter((v, i, array) => {
            return v.releaseDate === title[0].releaseDate && v.title === title[0].title && v.period === " 4th Quarter  " && v.value !== array[4].value // checks that Q4 value isn't the same as the last FY value
        }))
        ).flat()
    }).flat();

    return testTitles
};


test("accumualateValues", () => {

    let latestTitlesList = makeValues[makeValues.length-1].map((elem, index) => {

        return sortingTitles(elem)
    });
    // let latestTitlesList = makeValues.map((elem, index) => {

    //     return elem.map(value => {
    //         return sortingTitles(value)
    //     })
    // });

    // console.log(latestTitlesList);

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

    // console.log(sortedList);
    
    let yearlyCalcList = sortedList.map(elem => yearlyCalculation(elem));

    // console.log(yearlyCalcList);
    
    let header: Header = {
        capcomHeader: "| Capcom - Platinum Titles       |",
        secondHeader: "| Title                          |",
        thirdHeader: "| Platform                       |",
        fourthHeader: "| Release Date and Rank          |",
        fifthHeader: "| Units                          |",
        fiscalYear: "22222",
        fiscalYearYoY: "33333",
        ltd: "| Life-To-Date       |",
        summaryHeader: "444444",
    };

    let printAll = yearlyCalcList.map((elem, index) => {
        return printTitles(header, elem, sortedList[index], 9999)
    }) as string[];

    // console.log(printAll);
    

    
});
