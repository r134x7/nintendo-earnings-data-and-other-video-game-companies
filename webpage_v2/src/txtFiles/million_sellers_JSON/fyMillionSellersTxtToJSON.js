import { readFileSync, writeFile } from "fs";

// Enter 1 to 4 on the command line
let currentQuarter = Number(process.argv[2]);

let platformInput = process.argv[3];

function platformMake (platformInputLocal) {

    switch (platformInputLocal) {
        case "ns2": {
            console.log("Nintendo Switch 2");
            return "Nintendo Switch 2";
        }
        case "nsw": {
            console.log("Nintendo Switch");
            return "Nintendo Switch";
        }
        case "wiiu": {
            console.log("Wii U");
            return "Wii U";
        }
        case "3ds": {
            console.log("Nintendo 3DS");
            return "Nintendo 3DS";
        }
        case "wii": {
            console.log("Wii");
            return "Wii";
        }
        case "ds": {
            console.log("Nintendo DS");
            return "Nintendo DS";
        }
        case "gba": {
            console.log("Game Boy Advance");
            return "Game Boy Advance";
        }
        case "gc": {
            console.log("Nintendo GameCube");
            return "Nintendo GameCube";
        }
        default: {
        let currentPlatform = "N/A";
        console.log(currentPlatform);
            break;
        }
    }
};

let currentPlatform = platformMake(platformInput);

// let currentPlatform = "Nintendo Switch";
// let currentPlatform = "Wii U";
// let currentPlatform = "Nintendo 3DS";
// let currentPlatform = "Wii";
// let currentPlatform = "Nintendo DS";
// let currentPlatform = "Game Boy Advance";
// let currentPlatform = "Nintendo GameCube";

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

    return Array.from({length:(newQuarterLocal.length/5)}, (v,i) => {

        let searchTitle = (!currentDataLocal) ? [undefined] : currentDataLocal.filter((elem,index,array) => (elem.name === newQuarterLocal[(i*5)])); // searching by name

        return (!searchTitle[0])
            ? {
                name: newQuarterLocal[(i*5)],
                platform: platformLocal,
                regionA: "Japan",
                Q1CmlValueA: (currentQuarterLocal > 1) ? 0 : Number(newQuarterLocal[(i*5)+2]),
                Q2CmlValueA: (currentQuarterLocal > 2) ? 0 : Number(newQuarterLocal[(i*5)+2]),
                Q3CmlValueA: (currentQuarterLocal > 3) ? 0 : Number(newQuarterLocal[(i*5)+2]),
                Q4CmlValueA: Number(newQuarterLocal[(i*5)+2]),
                regionB: "Overseas",
                Q1CmlValueB: (currentQuarterLocal > 1) ? 0 : Number(newQuarterLocal[(i*5)+3]),
                Q2CmlValueB: (currentQuarterLocal > 2) ? 0 : Number(newQuarterLocal[(i*5)+3]),
                Q3CmlValueB: (currentQuarterLocal > 3) ? 0 : Number(newQuarterLocal[(i*5)+3]),
                Q4CmlValueB: Number(newQuarterLocal[(i*5)+3]),
                regionC: "WW FY",
                Q1CmlValueC: (currentQuarterLocal > 1) ? 0 : Number(newQuarterLocal[(i*5)+1]),
                Q2CmlValueC: (currentQuarterLocal > 2) ? 0 : Number(newQuarterLocal[(i*5)+1]),
                Q3CmlValueC: (currentQuarterLocal > 3) ? 0 : Number(newQuarterLocal[(i*5)+1]),
                Q4CmlValueC: Number(newQuarterLocal[(i*5)+1]),
                regionD: "WW LTD",
                Q1CmlValueD: (currentQuarterLocal > 1) ? 0 : Number(newQuarterLocal[(i*5)+4]),
                Q2CmlValueD: (currentQuarterLocal > 2) ? 0 : Number(newQuarterLocal[(i*5)+4]),
                Q3CmlValueD: (currentQuarterLocal > 3) ? 0 : Number(newQuarterLocal[(i*5)+4]),
                Q4CmlValueD: Number(newQuarterLocal[(i*5)+4]),
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

let getCurrentData = getJSON("million_sellers_test.json", currentQuarter);
let parseCurrentData = (!getCurrentData) ? undefined : JSON.parse(getCurrentData);

let newArray = makeArray(extractNQ, parseCurrentData, currentQuarter, currentPlatform);

// let newArrayStringify = JSON.stringify(newArray);
let newArrayStringify = JSON.stringify(newArray, undefined, 4);

writeFile("million_sellers_test.json", newArrayStringify, (err) =>
  err ? console.error(err) : console.log('json? JSSSOOONNNNNN!')
);