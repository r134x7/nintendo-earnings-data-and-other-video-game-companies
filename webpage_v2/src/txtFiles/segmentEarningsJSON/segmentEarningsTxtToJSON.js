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

    function minusCheck(value) {
        // checks negative values using () as -
        if (value.includes("(") || value.includes(")")) {
            return "-" + value.trim().slice(1,-1)
        } else {
            return value
        }
    }

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

        // be careful with duplicate names as it will find the first duplicate
        // output expected: [data] (length = 1)
        let searchTitle = (!currentDataLocal) ? [undefined] : currentDataLocal.filter((elem) => (elem.name === newQuarterLocal[(i*5)].trim())); // searching by name, trimming to make sure no errors
        // console.log(searchTitle);

        let getLatestForecasts = {
            netSales: (Number.isNaN(Number(minusCheck(newQuarterLocal[(i*5)+2]))) === true) 
                ? null  
                : Number(minusCheck(newQuarterLocal[(i*5)+2])), 
            operatingIncome: (Number.isNaN(Number(minusCheck(newQuarterLocal[(i*5)+4]))) === true) 
                ? null  
                : Number(minusCheck(newQuarterLocal[(i*5)+4])), 
        };

        let searchForecasts = (!currentDataLocal || currentQuarterLocal > 3)  
            ? [undefined]
            : [
                {
                    netSales: currentDataLocal?.[i]?.forecastThisFY.netSales,
                    operatingIncome: currentDataLocal?.[i]?.forecastThisFY.operatingIncome,
                },
                {
                    netSales: currentDataLocal?.[i]?.forecastRevision1.netSales,
                    operatingIncome: currentDataLocal?.[i]?.forecastRevision1.operatingIncome,
                },
                {
                    netSales: currentDataLocal?.[i]?.forecastRevision2.netSales,
                    operatingIncome: currentDataLocal?.[i]?.forecastRevision2.operatingIncome,
                },
            ].filter((elem) => elem?.netSales && elem?.operatingIncome).flatMap((elem, index, array) => {
                // if all values were true, we don't need to look at the oldest values, hence we remove them.
                if (index !== array.length-1) {
                    return []
                } else if (elem.netSales === getLatestForecasts.netSales && elem.operatingIncome === getLatestForecasts.operatingIncome) {
                    return false
                } else {
                    return true
                }
            })
            // console.log(searchForecasts);

        return (!searchTitle[0])
            ? {
                name: newQuarterLocal[(i*5)].trim(),
                units: "currency",
                ID: (i+1).toString(),
                Q1CmlValue: (currentQuarterLocal > 1) 
                    ? {netSales: 0, operatingIncome: 0} 
                    : {netSales: Number(minusCheck(newQuarterLocal[(i*5)+1])), operatingIncome: Number(minusCheck(newQuarterLocal[(i*5)+3]))},
                Q2CmlValue: (currentQuarterLocal > 2) 
                    ? {netSales: 0, operatingIncome: 0} 
                    : {netSales: Number(minusCheck(newQuarterLocal[(i*5)+1])), operatingIncome: Number(minusCheck(newQuarterLocal[(i*5)+3]))},
                Q3CmlValue: (currentQuarterLocal > 3) 
                    ? {netSales: 0, operatingIncome: 0} 
                    : {netSales: Number(minusCheck(newQuarterLocal[(i*5)+1])), operatingIncome: Number(minusCheck(newQuarterLocal[(i*5)+3]))},
                Q4CmlValue: {netSales: Number(minusCheck(newQuarterLocal[(i*5)+1])), operatingIncome: Number(minusCheck(newQuarterLocal[(i*5)+3]))},
                forecastThisFY: (currentQuarterLocal === 4) 
                    ? {netSales: null, operatingIncome: null} 
                    : {netSales: Number(minusCheck(newQuarterLocal[(i*5)+2])), operatingIncome: Number(minusCheck(newQuarterLocal[(i*5)+4]))},
                forecastRevision1: {netSales: null, operatingIncome: null},
                forecastRevision2: {netSales: null, operatingIncome: null},
                forecastRevision3: {netSales: null, operatingIncome: null},
                forecastNextFY: (currentQuarterLocal !== 4) 
                    ? {netSales: null, operatingIncome: null} 
                    : {netSales: Number(minusCheck(newQuarterLocal[(i*5)+2])), operatingIncome: Number(minusCheck(newQuarterLocal[(i*5)+4]))},
            }
            : {
                name: newQuarterLocal[(i*5)].trim(),
                units: "currency",
                ID: searchTitle[0].ID,
                Q1CmlValue: searchTitle[0].Q1CmlValue, 
                Q2CmlValue: (currentQuarterLocal === 2) 
                    ? {netSales: Number(minusCheck(newQuarterLocal[(i*5)+1])), operatingIncome: Number(minusCheck(newQuarterLocal[(i*5)+3]))} 
                    : searchTitle[0].Q2CmlValue,
                Q3CmlValue: (currentQuarterLocal === 2 || currentQuarterLocal === 3) 
                    ? {netSales: Number(minusCheck(newQuarterLocal[(i*5)+1])), operatingIncome: Number(minusCheck(newQuarterLocal[(i*5)+3]))} 
                    : searchTitle[0].Q3CmlValue,
                Q4CmlValue: {netSales: Number(minusCheck(newQuarterLocal[(i*5)+1])), operatingIncome: Number(minusCheck(newQuarterLocal[(i*5)+3]))},
                forecastThisFY: searchTitle?.[0]?.forecastThisFY ?? {netSales: Number(minusCheck(newQuarterLocal[(i*5)+2])), operatingIncome: Number(minusCheck(newQuarterLocal[(i*5)+4]))},
                forecastRevision1: (searchTitle?.[0]?.forecastRevision1) 
                    ? searchTitle[0].forecastRevision1
                    : (searchForecasts?.at(-1) === true)
                        ? {netSales: Number(minusCheck(newQuarterLocal[(i*5)+2])), operatingIncome: Number(minusCheck(newQuarterLocal[(i*5)+4]))}
                        : null,
                forecastRevision2: (searchTitle?.[0]?.forecastRevision2)
                    ? searchTitle[0].forecastRevision2
                    : (searchForecasts?.at(-1) === true)
                        ? {netSales: Number(minusCheck(newQuarterLocal[(i*5)+2])), operatingIncome: Number(minusCheck(newQuarterLocal[(i*5)+4]))}
                        : null,
                forecastRevision3: (searchTitle?.[0]?.forecastRevision3)
                    ? searchTitle[0].forecastRevision3
                    : (searchForecasts?.at(-1) === true)
                        ? {netSales: Number(minusCheck(newQuarterLocal[(i*5)+2])), operatingIncome: Number(minusCheck(newQuarterLocal[(i*5)+4]))}
                        : null,
                forecastNextFY: (currentQuarterLocal === 4) 
                    ? {netSales: Number(minusCheck(newQuarterLocal[(i*5)+2])), operatingIncome: Number(minusCheck(newQuarterLocal[(i*5)+4]))}
                    : null,
            };
    });
};

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

let newArrayStringify = JSON.stringify(newArray, undefined, 4); // convert the object to JSON, space: 4 prevents JSON being on one line
// console.log(newArrayStringify);

writeFile("data_output.json", newArrayStringify, (err) =>
  err ? console.error(err) : console.log('json? JSSSOOONNNNNN!')
);