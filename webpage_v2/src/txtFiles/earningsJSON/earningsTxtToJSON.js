import { readFileSync, writeFile } from "fs";

let currentQuarter = 1;

const readQuarter = (currentQuarterLocal) => {

    return (currentQuarterLocal === 1)
            ? readFileSync("firstQuarter.txt", "utf-8")
            : (currentQuarterLocal === 2)
            ? readFileSync("secondQuarter.txt", "utf-8") 
            : (currentQuarterLocal === 3)
            ? readFileSync("thirdQuarter.txt", "utf-8")
            : readFileSync("fourthQuarter.txt", "utf-8");
};

const checkMatch = (readingQuarter) => {

    return readingQuarter.match(/.+/g)
};

const makeArray = (newQuarterLocal, currentDataLocal, currentQuarterLocal, platformLocal) => {
    if (newQuarterLocal === null) {
        return null
    };

    return Array.from({length:(newQuarterLocal.length/3)}, (v,i) => {

        let searchTitle = (!currentDataLocal) ? [undefined] : currentDataLocal.filter((elem,index,array) => (elem.name.trim() === newQuarterLocal[(i*3)].trim())); // searching by name

        return (!searchTitle[0])
            ? {
                name: newQuarterLocal[(i*3)].trim(),
                Q1CmlValue: (currentQuarterLocal > 1) ? 0 : Number(newQuarterLocal[(i*3)+1]),
                Q2CmlValue: (currentQuarterLocal > 2) ? 0 : Number(newQuarterLocal[(i*3)+1]),
                Q3CmlValue: (currentQuarterLocal > 3) ? 0 : Number(newQuarterLocal[(i*3)+1]),
                Q4CmlValue: Number(newQuarterLocal[(i*3)+1]),
                forecastThisFY: (currentQuarterLocal > 1) ? null : Number(newQuarterLocal[(i*3)+2]),
                forecastRevision1: null,
                forecastRevision2: null,
                forecastRevision3: null,
                forecastNextFY: (currentQuarterLocal === 4) ? null : Number(newQuarterLocal[(i*3)+2]),
            } 
            : {
                name: newQuarterLocal[(i*3)].trim(),
                Q1CmlValue: searchTitle[0].Q1CmlValue,
                Q2CmlValue: (currentQuarterLocal === 2) ? Number(newQuarterLocal[(i*3)+1]) : searchTitle[0].Q2CmlValue,
                Q3CmlValue: (currentQuarterLocal === 2 || currentQuarterLocal === 3) ? Number(newQuarterLocal[(i*3)+1]) : searchTitle[0].Q3CmlValue,
                Q4CmlValue: Number(newQuarterLocal[(i*3)+1]),
                forecastThisFY: searchTitle[0].forecastThisFY,
                forecastRevision1: (searchTitle[0].forecastThisFY === Number(newQuarterLocal[(i*3)+2])) ? null : Number(newQuarterLocal[(i*3)+2]),
                forecastRevision2: (searchTitle[0].forecastRevision1 === Number(newQuarterLocal[(i*3)+2])) ? null : Number(newQuarterLocal[(i*3)+2]),
                forecastRevision3: (searchTitle[0].forecastRevision2 === Number(newQuarterLocal[(i*3)+2])) ? null : Number(newQuarterLocal[(i*3)+2]),
                forecastNextFY: (currentQuarterLocal === 4) ? null : Number(newQuarterLocal[(i*3)+2]),
            };
    });
};

const getJSON = (jsonLocal, currentQuarterLocal) => {

    return (currentQuarterLocal > 1)
        ? readFileSync(jsonLocal, "utf-8")
        : undefined
}; 

let readNewestQuarter = readQuarter(currentQuarter);
let extractNQ = checkMatch(readNewestQuarter);
console.log(extractNQ);

let getCurrentData = getJSON("earnings_data_test.json", currentQuarter);
let parseCurrentData = (!getCurrentData) ? undefined : JSON.parse(getCurrentData);

let newArray = makeArray(extractNQ, parseCurrentData, currentQuarter, currentPlatform);

let newArrayStringify = JSON.stringify(newArray);

writeFile("earnings_data_test.json", newArrayStringify, (err) =>
  err ? console.error(err) : console.log('json? JSSSOOONNNNNN!')
);