import { readFileSync, writeFile } from "fs";

// Enter 1 to 4 on the command line
let currentQuarter = Number(process.argv[2]);

const readQuarter = (currentQuarterLocal) => {

    return (currentQuarterLocal === 1)
            ? readFileSync("q1data.txt", "utf-8")
            : (currentQuarterLocal === 2)
                ? readFileSync("q2data.txt", "utf-8") 
                : (currentQuarterLocal === 3)
                    ? readFileSync("q3data.txt", "utf-8")
                    : readFileSync("q4data.txt", "utf-8");
};

// . matches any character (except for line terminators e.g. \n)
// + matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
// g modifier: global. All matches (don't return after first match)
const checkMatch = (readingQuarter) => {
    return readingQuarter.match(/.+/g)
};


const makeArray = (newQuarterLocal, currentDataLocal, currentQuarterLocal) => {
    if (newQuarterLocal === null) {
        return null
    };

    /* object structure:
        {
            name: string, // segment name
            units: string, // because of YoY calculations and may include operating margin
            type: "Net Sales" | "Operating Profit", // maybe
            ID: string, // segment name can change so it would be easier tying to ID than to name which has become problematic in some other data
            Q1CmlValue: {} number | string, // nothing type
            Q2CmlValue: {} number | string,
            Q3CmlValue: {} number | string,
            Q4CmlValue: {} number | string,
            forecastThisFY?: {} number | null | string,
            forecastRevision1?: {} number | null,
            forecastRevision2?: {} number | null,
            forecastRevision3?: {} number | null,
            forecastNextFY?: {} number | null | string, 
            footnotes?: string,
        }
    */

    /*
        example txt for a quarter
        name
        net sales
        net sales forecast
        operating profit
        operating profit forecast
    */

    // /5 is referring to the above 
    return Array.from({length: newQuarterLocal.length/5}, (v, i) => {

        let searchTitle = (!currentDataLocal) ? [undefined] : currentDataLocal.filter((elem,index,array) => (elem.name === newQuarterLocal[(i*5)])); // searching by name

        return (!searchTitle[0])
            ? {
                name: newQuarterLocal[(i*5)],
                units: "currency",
                ID: (i+1).toString(),
                Q1CmlValue: (currentQuarterLocal > 1) 
                    ? {netSales: 0, operatingIncome: 0} 
                    : {netSales: Number(newQuarterLocal[(i*5)+1]), operatingIncome: Number(newQuarterLocal[(i*5)+3])},
                Q2CmlValue: (currentQuarterLocal > 2) 
                    ? {netSales: 0, operatingIncome: 0} 
                    : {netSales: Number(newQuarterLocal[(i*5)+1]), operatingIncome: Number(newQuarterLocal[(i*5)+3])},
                Q3CmlValue: (currentQuarterLocal > 3) 
                    ? {netSales: 0, operatingIncome: 0} 
                    : {netSales: Number(newQuarterLocal[(i*5)+1]), operatingIncome: Number(newQuarterLocal[(i*5)+3])},
                Q4CmlValue: {netSales: Number(newQuarterLocal[(i*5)+1]), operatingIncome: Number(newQuarterLocal[(i*5)+3])},
                forecastThisFY: (currentQuarterLocal === 4) 
                    ? {netSales: null, operatingIncome: null} 
                    : {netSales: Number(newQuarterLocal[(i*3)+2]), operatingIncome: Number(newQuarterLocal[(i*3)+4])},
                forecastRevision1: {netSales: null, operatingIncome: null},
                forecastRevision2: {netSales: null, operatingIncome: null},
                forecastRevision3: {netSales: null, operatingIncome: null},
                forecastNextFY: (currentQuarterLocal !== 4) 
                    ? {netSales: null, operatingIncome: null} 
                    : {netSales: Number(newQuarterLocal[(i*3)+2]), operatingIncome: Number(newQuarterLocal[(i*3)+4])},
            }
            : {
                name: newQuarterLocal[(i*5)],
                platform: platformLocal,
                regionA: "Japan",
                Q1CmlValueA: searchTitle[0].Q1CmlValueA,
                Q2CmlValueA: (currentQuarterLocal === 2) ? Number(newQuarterLocal[(i*5)+2]) : searchTitle[0].Q2CmlValueA,
                Q3CmlValueA: (currentQuarterLocal === 2 || currentQuarterLocal === 3) ? Number(newQuarterLocal[(i*5)+2]) : searchTitle[0].Q3CmlValueA,
                Q4CmlValueA: Number(newQuarterLocal[(i*5)+2]),
                regionB: "Overseas",
                Q1CmlValueB: searchTitle[0].Q1CmlValueB,
                Q2CmlValueB: (currentQuarterLocal === 2) ? Number(newQuarterLocal[(i*5)+3]) : searchTitle[0].Q2CmlValueB,
                Q3CmlValueB: (currentQuarterLocal === 2 || currentQuarterLocal === 3) ? Number(newQuarterLocal[(i*5)+3]) : searchTitle[0].Q3CmlValueB,
                Q4CmlValueB: Number(newQuarterLocal[(i*5)+3]),
                regionC: "WW FY",
                Q1CmlValueC: searchTitle[0].Q1CmlValueC,
                Q2CmlValueC: (currentQuarterLocal === 2) ? Number(newQuarterLocal[(i*5)+1]) : searchTitle[0].Q2CmlValueC,
                Q3CmlValueC: (currentQuarterLocal === 2 || currentQuarterLocal === 3) ? Number(newQuarterLocal[(i*5)+1]) : searchTitle[0].Q3CmlValueC,
                Q4CmlValueC: Number(newQuarterLocal[(i*5)+1]),
                regionD: "WW LTD",
                Q1CmlValueD: searchTitle[0].Q1CmlValueD,
                Q2CmlValueD: (currentQuarterLocal === 2) ? Number(newQuarterLocal[(i*5)+4]) : searchTitle[0].Q2CmlValueD,
                Q3CmlValueD: (currentQuarterLocal === 2 || currentQuarterLocal === 3) ? Number(newQuarterLocal[(i*5)+4]) : searchTitle[0].Q3CmlValueD,
                Q4CmlValueD: Number(newQuarterLocal[(i*5)+4]),
            }
    })
}





// to read the json output if not beginning of FY
const getJSON = (jsonLocal, currentQuarterLocal) => {

    return (currentQuarterLocal > 1)
        ? readFileSync(jsonLocal, "utf-8")
        : undefined
}; 

let readNewestQuarter = readQuarter(currentQuarter);
let extractNQ = checkMatch(readNewestQuarter);
console.log(extractNQ);

let getCurrentData = getJSON("data_output.json", currentQuarter);
let parseCurrentData = (!getCurrentData) ? undefined : JSON.parse(getCurrentData); // converts JSON to an object because JSON and JS objects don't work the same... e.g. JSON only uses null and not undefined when undefined is normally used in JS

let newArray = makeArray(extractNQ, parseCurrentData, currentQuarter);

let newArrayStringify = JSON.stringify(newArray); // convert the object to JSON

writeFile("data_output.json", newArrayStringify, (err) =>
  err ? console.error(err) : console.log('json? JSSSOOONNNNNN!')
);