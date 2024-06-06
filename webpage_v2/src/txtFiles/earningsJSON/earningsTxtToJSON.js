import { readFileSync, writeFile } from "fs";

// Enter 1 to 4 on the command line
let currentQuarter = Number(process.argv[2]);

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

const makeArray = (newQuarterLocal, currentDataLocal, currentQuarterLocal) => {
    if (newQuarterLocal === null) {
        return null
    };


    function minusCheck(value) {
        // checks negative values using () as -
        if (value.includes("(") || value.includes(")")) {
            return Number("-" + value.trim().slice(1,-1))
        } else if (value === "-") {
            return "Nothing"
        } else {
            return Number(value)
        }
    }

    return Array.from({length:(newQuarterLocal.length/3)}, (v,i) => {

        // through each iteration of Array.from, it will find Net Sales, then Operating Income and then Net Income hence the array will only have a length of 1.
        let searchTitle = (!currentDataLocal) ? [undefined] : currentDataLocal.filter((elem) => (elem.name.trim() === newQuarterLocal[(i*3)].trim()));

        // console.log(searchTitle?.[0]?.forecastRevision1);
        let latestForecasts = {
            netSalesForecast: (Number.isNaN(minusCheck(newQuarterLocal[2])) === true) 
                ? null 
                : minusCheck(newQuarterLocal[2]),
            operatingIncomeForecast: (Number.isNaN(minusCheck(newQuarterLocal[5])) === true) 
                ? null 
                : minusCheck(newQuarterLocal[5]),
            netIncomeForecast: (Number.isNaN(minusCheck(newQuarterLocal[8])) === true) 
                ? null 
                : minusCheck(newQuarterLocal[8]),
        };

        let searchForecasts = (!currentDataLocal || currentQuarterLocal > 3)  
            ? [undefined]
            : [
                {
                    value1: currentDataLocal?.[0]?.forecastThisFY,
                    value2: currentDataLocal?.[1]?.forecastThisFY,
                    value3: currentDataLocal?.[2]?.forecastThisFY,
                },
                {
                    value1: currentDataLocal?.[0]?.forecastRevision1,
                    value2: currentDataLocal?.[1]?.forecastRevision1,
                    value3: currentDataLocal?.[2]?.forecastRevision1,
                },
                {
                    value1: currentDataLocal?.[0]?.forecastRevision2,
                    value2: currentDataLocal?.[1]?.forecastRevision2,
                    value3: currentDataLocal?.[2]?.forecastRevision2,
                }
                // each object is holding values for a forecast type, need to filter out types where data is undefined.
            ].filter((elem) => elem?.value1 && elem?.value2 && elem?.value3).flatMap((elem, index ,array) => {
                // need to check values only at the end of the array, older forecast numbers do not need to be checked, hence the array should only be of length 1 when it gets to else if
                if (index !== array.length-1) {
                    return []
                } else if (elem.value1 === latestForecasts.netSalesForecast && elem.value2 === latestForecasts.operatingIncomeForecast && elem.value3 === latestForecasts.netIncomeForecast) {
                    return false
                } else {
                    return true
                };
            });

        return (!searchTitle[0])
            ? {
                name: newQuarterLocal[(i*3)].trim(),
                units:"currency",
                Q1CmlValue: (currentQuarterLocal > 1) ? 0 : minusCheck(newQuarterLocal[(i*3)+1]),
                Q2CmlValue: (currentQuarterLocal > 2) ? 0 : minusCheck(newQuarterLocal[(i*3)+1]),
                Q3CmlValue: (currentQuarterLocal > 3) ? 0 : minusCheck(newQuarterLocal[(i*3)+1]),
                Q4CmlValue: minusCheck(newQuarterLocal[(i*3)+1]),
                forecastThisFY: (currentQuarterLocal === 4) ? null : minusCheck(newQuarterLocal[(i*3)+2]),
                forecastRevision1: null,
                forecastRevision2: null,
                forecastRevision3: null,
                forecastNextFY: (currentQuarterLocal !== 4) ? null : minusCheck(newQuarterLocal[(i*3)+2]),
            } 
            : {
                name: newQuarterLocal[(i*3)].trim(),
                units:"currency",
                Q1CmlValue: searchTitle[0].Q1CmlValue,
                Q2CmlValue: (currentQuarterLocal === 2) ? minusCheck(newQuarterLocal[(i*3)+1]) : searchTitle[0].Q2CmlValue,
                Q3CmlValue: (currentQuarterLocal === 2 || currentQuarterLocal === 3) ? minusCheck(newQuarterLocal[(i*3)+1]) : searchTitle[0].Q3CmlValue,
                Q4CmlValue: minusCheck(newQuarterLocal[(i*3)+1]),
                forecastThisFY: searchTitle?.[0]?.forecastThisFY ?? minusCheck(newQuarterLocal[(i*3)+2]),
                // cannot chain ?. ?? with ternary operator because ternary operator is not chainable and will override ?? operators.
                forecastRevision1: (searchTitle?.[0]?.forecastRevision1) 
                        ? searchTitle[0].forecastRevision1
                        : (searchForecasts?.at(-1) === true)
                            ? minusCheck(newQuarterLocal[(i*3)+2])
                            : null,
                forecastRevision2: (searchTitle?.[0]?.forecastRevision2) 
                        ? searchTitle[0].forecastRevision2
                        : (searchForecasts?.at(-1) === true && searchTitle?.[0]?.forecastRevision1)
                            ? minusCheck(newQuarterLocal[(i*3)+2])
                            : null,
                forecastRevision3: (searchTitle?.[0]?.forecastRevision3) 
                        ? searchTitle[0].forecastRevision3
                        : (searchForecasts?.at(-1) === true && searchTitle?.[0]?.forecastRevision2)
                            ? minusCheck(newQuarterLocal[(i*3)+2])
                            : null,
                forecastNextFY: (currentQuarterLocal === 4) ? minusCheck(newQuarterLocal[(i*3)+2]) : null,
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

let newArray = makeArray(extractNQ, parseCurrentData, currentQuarter);

let newArrayStringify = JSON.stringify(newArray, undefined, 4);

writeFile("earnings_data_test.json", newArrayStringify, (err) =>
  err ? console.error(err) : console.log('json? JSSSOOONNNNNN!')
);