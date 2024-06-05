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
            type: "Net Sales" | "Operating Profit",
            ID: string, // segment name can change so it would be easier tying to ID than to name which has become problematic in some other data
            Q1CmlValue: number | string, // nothing type
            Q2CmlValue: number | string,
            Q3CmlValue: number | string,
            Q4CmlValue: number | string,
            forecastThisFY?: number | null | string,
            forecastRevision1?: number | null,
            forecastRevision2?: number | null,
            forecastRevision3?: number | null,
            forecastNextFY?: number | null | string, 
            footnotes?: string,
        }
    */


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