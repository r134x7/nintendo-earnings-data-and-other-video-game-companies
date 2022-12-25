import { readFileSync, writeFile } from "fs";

let currentQuarter = 4;

const readQuarter = (currentQuarterLocal) => {

    return (currentQuarterLocal === 1)
            ? readFileSync("regional_data/wii_fy3_2014/firstQuarter.txt", "utf-8")
            : (currentQuarterLocal === 2)
            ? readFileSync("regional_data/wii_fy3_2014/secondQuarter.txt", "utf-8") 
            : (currentQuarterLocal === 3)
            ? readFileSync("regional_data/wii_fy3_2014/thirdQuarter.txt", "utf-8")
            : readFileSync("regional_data/wii_fy3_2014/fourthQuarter.txt", "utf-8");
};

const getTotals = (readQuarterLocal) => {

    let getMatch = readQuarterLocal.match(/.+(?=\r\nJapan)|Total|(?<=Total\r\n)\d+|(?<=Total\r\n\d+\r\n)\d+/g) // had to construct like this to avoid making one long match with escape characters e.g. Total\r\n111\r\n222

    return getMatch
};

const makeArray = (newQuarterLocal, currentDataLocal, currentQuarterLocal) => {
    if (newQuarterLocal === null) {
        return null
    };

    return Array.from({length:(newQuarterLocal.length/4)}, (v,i) => {

        let searchTitle = (!currentDataLocal) ? [undefined] : currentDataLocal.filter((elem,index,array) => (elem.name === newQuarterLocal[(i*4)].trim())); // searching by name

        return (!searchTitle[0])
            ? {
                name: newQuarterLocal[(i*4)].trim(),
                units: "units",
                Q1CmlValue: (currentQuarterLocal > 1) ? 0 : Number(newQuarterLocal[(i*4)+2]),
                Q2CmlValue: (currentQuarterLocal > 2) ? 0 : Number(newQuarterLocal[(i*4)+2]),
                Q3CmlValue: (currentQuarterLocal > 3) ? 0 : Number(newQuarterLocal[(i*4)+2]),
                Q4CmlValue: Number(newQuarterLocal[(i*4)+2]),
                cmlValueLastFY: Number(newQuarterLocal[(i*4)+3]) - Number(newQuarterLocal[(i*4)+2]),
            } 
            : {
                name: newQuarterLocal[(i*4)].trim(),
                units: "units",
                Q1CmlValue: searchTitle[0].Q1CmlValue,
                Q2CmlValue: (currentQuarterLocal === 2) ? Number(newQuarterLocal[(i*4)+2]) : searchTitle[0].Q2CmlValue,
                Q3CmlValue: (currentQuarterLocal === 2 || currentQuarterLocal === 3) ? Number(newQuarterLocal[(i*4)+2]) : searchTitle[0].Q3CmlValue,
                Q4CmlValue: Number(newQuarterLocal[(i*4)+2]),
                cmlValueLastFY: Number(newQuarterLocal[(i*4)+3]) - Number(newQuarterLocal[(i*4)+2]),
            };
    });
};

const getJSON = (jsonLocal, currentQuarterLocal) => {

    return (currentQuarterLocal > 1)
        ? readFileSync(jsonLocal, "utf-8")
        : undefined
}; 

let readNewestQuarter = readQuarter(currentQuarter);
let extractNQ = getTotals(readNewestQuarter);
console.log(extractNQ);

let getCurrentData = getJSON("global_data_test.json", currentQuarter);
let parseCurrentData = (!getCurrentData) ? undefined : JSON.parse(getCurrentData);

let newArray = makeArray(extractNQ, parseCurrentData, currentQuarter);

let newArrayStringify = JSON.stringify(newArray);

writeFile("global_data_test.json", newArrayStringify, (err) =>
  err ? console.error(err) : console.log('totals done')
);