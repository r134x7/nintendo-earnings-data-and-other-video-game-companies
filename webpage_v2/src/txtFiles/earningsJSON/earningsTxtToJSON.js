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

    return Array.from({length:(newQuarterLocal.length/3)}, (v,i) => {

        let searchTitle = (!currentDataLocal) ? [undefined] : currentDataLocal.filter((elem,index,array) => (elem.name.trim() === newQuarterLocal[(i*3)].trim())); // searching by name

        let latestForecasts = {
            netSalesForecast: (Number.isNaN(Number(newQuarterLocal[2])) === true) ? null : Number(newQuarterLocal[2]),
            operatingIncomeForecast: (Number.isNaN(Number(newQuarterLocal[5])) === true) ? null : Number(newQuarterLocal[5]),
            netIncomeForecast: (Number.isNaN(Number(newQuarterLocal[8])) === true) ? null : Number(newQuarterLocal[8]),
        };

        console.log(latestForecasts);

        let searchForecasts = (!currentDataLocal)  
            ? [undefined]
            : [
                {
                    value1: currentDataLocal[0].forecastThisFY,
                    value2: currentDataLocal[1].forecastThisFY,
                    value3: currentDataLocal[2].forecastThisFY,
                },
                {
                    value1: currentDataLocal[0].forecastRevision1,
                    value2: currentDataLocal[1].forecastRevision1,
                    value3: currentDataLocal[2].forecastRevision1,
                },
                {
                    value1: currentDataLocal[0].forecastRevision2,
                    value2: currentDataLocal[1].forecastRevision2,
                    value3: currentDataLocal[2].forecastRevision2,
                }
            ].flatMap((elem,index) => {
                // There is the issue where some fiscal years don't have forecasts for operating income hence only checking the net sales forecast
                if (elem.value1 === null) {
                    console.log(elem);
                    return []
                } else if (elem.value1 === latestForecasts.netSalesForecast && elem.value2 === latestForecasts.operatingIncomeForecast && elem.value3 === latestForecasts.netIncomeForecast) {
                    // wondering about when operating income forecast is a null value...
                    console.log(elem);
                    console.log("stop");
                    console.log(latestForecasts);
                    return []
                } else {
                    // I can only assume this won't return one value so the true value picked must be from the end of the array
                    console.log(elem);
                    return true
                };
            });

            console.log(searchForecasts);
            console.log(searchForecasts.length);

        return (!searchTitle[0])
            ? {
                name: newQuarterLocal[(i*3)].trim(),
                Q1CmlValue: (currentQuarterLocal > 1) ? 0 : Number(newQuarterLocal[(i*3)+1]),
                Q2CmlValue: (currentQuarterLocal > 2) ? 0 : Number(newQuarterLocal[(i*3)+1]),
                Q3CmlValue: (currentQuarterLocal > 3) ? 0 : Number(newQuarterLocal[(i*3)+1]),
                Q4CmlValue: Number(newQuarterLocal[(i*3)+1]),
                forecastThisFY: (currentQuarterLocal === 4) ? null : Number(newQuarterLocal[(i*3)+2]),
                forecastRevision1: null,
                forecastRevision2: null,
                forecastRevision3: null,
                forecastNextFY: (currentQuarterLocal !== 4) ? null : Number(newQuarterLocal[(i*3)+2]),
            } 
            : {
                name: newQuarterLocal[(i*3)].trim(),
                Q1CmlValue: searchTitle[0].Q1CmlValue,
                Q2CmlValue: (currentQuarterLocal === 2) ? Number(newQuarterLocal[(i*3)+1]) : searchTitle[0].Q2CmlValue,
                Q3CmlValue: (currentQuarterLocal === 2 || currentQuarterLocal === 3) ? Number(newQuarterLocal[(i*3)+1]) : searchTitle[0].Q3CmlValue,
                Q4CmlValue: Number(newQuarterLocal[(i*3)+1]),
                forecastThisFY: (searchTitle[0].forecastThisFY !== null) 
                        ? searchTitle[0].forecastThisFY
                        : Number(newQuarterLocal[(i*3)+2]),
                forecastRevision1: (searchTitle[0].forecastRevision1 !== null)
                         ? searchTitle[0].forecastRevision1
                         : (searchForecasts.at(-1) === true)
                         ? Number(newQuarterLocal[(i*3)+2])
                         : null,
                        //  : (currentQuarter < 4 && searchTitle[0].forecastThisFY !== Number(newQuarterLocal[(i*3)+2]) && searchTitle[0].forecastThisFY !== null) 
                        //      ? Number(newQuarterLocal[(i*3)+2])
                        //      : null,
                forecastRevision2: (searchTitle[0].forecastRevision2 !== null)
                         ? searchTitle[0].forecastRevision2
                         : (searchForecasts.at(-1) === true)
                         ? Number(newQuarterLocal[(i*3)+2])
                         : null,
                        // (searchTitle[0].forecastRevision2 !== null)
                        // ? searchTitle[0].forecastRevision2
                        // : (currentQuarter < 4 && searchTitle[0].forecastThisFY !== Number(newQuarterLocal[(i*3)+2]) && searchTitle[0].forecastRevision1 !== Number(newQuarterLocal[(i*3)+2]) && searchTitle[0].forecastRevision1 !== null) 
                        //     ? Number(newQuarterLocal[(i*3)+2]) 
                        //     : null,
                forecastRevision3: (searchTitle[0].forecastRevision3 !== null)
                         ? searchTitle[0].forecastRevision3
                         : (searchForecasts.at(-1) === true)
                         ? Number(newQuarterLocal[(i*3)+2])
                         : null,
                        // (searchTitle[0].forecastRevision3 !== null)
                        // ? searchTitle[0].forecastRevision3
                        // : (currentQuarter < 4 && searchTitle[0].forecastThisFY !== Number(newQuarterLocal[(i*3)+2]) && searchTitle[0].forecastRevision1 !== Number(newQuarterLocal[(i*3)+2]) && searchTitle[0].forecastRevision1 !== null && searchTitle[0].forecastRevision2 !== Number(newQuarterLocal[(i*3)+2]) && searchTitle[0].forecastRevision2 !== null) 
                        //     ? Number(newQuarterLocal[(i*3)+2])
                        //     : null,
                forecastNextFY: (currentQuarterLocal === 4) ? Number(newQuarterLocal[(i*3)+2]) : null,
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

let newArrayStringify = JSON.stringify(newArray);

writeFile("earnings_data_test.json", newArrayStringify, (err) =>
  err ? console.error(err) : console.log('json? JSSSOOONNNNNN!')
);