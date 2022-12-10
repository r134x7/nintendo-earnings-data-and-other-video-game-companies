import { Titles } from "../utils/capcom_platinum_titles_logic";
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

const makeValues: collectionData[] = totalCollection.map(elem => {
    return {
        ...elem,
        createdTitles: titlesMake(elem.titles, undefined, undefined)
    }
});

// created titles for each fiscal year...
// need to filter through each titles and get the Q4 value and the fiscal year date... end up with a 

function accumulateValues(getCollection: collectionData[]) {

    let x = getCollection[0].titles[0];
    console.log(x);
    
};


test("accumualateValues", async () => {

    console.log(accumulateValues(makeValues));
    
    
});
