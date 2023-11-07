import { readFileSync, writeFile } from "fs";
// compile to javaScript using npx tsc (filename)

// Enter 1 to 4 on the command line
let currentQuarter = Number(process.argv[2]);

let platformInput = process.argv[3];

// let filePathRead = "nintendo_top_selling_titles_data/nintendo_top_selling_titles_fy3_2024/nintendo_switch/"
let filePathRead = "nintendo_top_selling_titles_data/nintendo_top_selling_titles_fy3_2024/wii_u/"

function platformMake (platformInputLocal) {

    switch (platformInputLocal) {
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

const readQuarter = (currentQuarterLocal) => {
    return (currentQuarterLocal === 1)
        ? readFileSync(filePathRead + "firstQuarter.html", "utf-8")
        : (currentQuarterLocal === 2)
            ? readFileSync(filePathRead + "secondQuarter.html", "utf-8")
            : (currentQuarterLocal === 3)
                ? readFileSync(filePathRead + "thirdQuarter.html", "utf-8")
                : readFileSync(filePathRead + "fourthQuarter.html", "utf-8");
};

const extractData = (readQuarterLocal) => {
    return readQuarterLocal.match(/(?<=p\s+class="sales_title">)(.+?)(?=<\/p>)|(?<=p\s+class="sales_value"><span>)(.+?)(?=<\/span>.*<\/p>)/g); // regex taken from: https://www.octoparse.com/blog/using-regular-expression-to-match-html#regex3
};

const getJSON = (jsonLocal, currentQuarterLocal) => {

    return (currentQuarterLocal > 1)
        ? readFileSync(jsonLocal, "utf-8")
        : undefined;
};

const makeArray = (newQuarterLocal, currentDataLocal, currentQuarterLocal, platformLocal) => {
    if (newQuarterLocal === null) {
        return null;
    };

    // console.log(`currentData Length: ${currentDataLocal?.length ?? 0}, newData Length: ${newQuarterLocal.length / 2}`);
    // was a bad idea to check length of currentData and newData as a condition...
    let removedTitles = (!currentDataLocal)
            ? [] 
            : currentDataLocal.filter((elem, index, array) => {
                let searchNewTitles = newQuarterLocal.filter((value, secondIndex, secondArray) => {
                    // will go through every name and number and should only find one matching name.
                    // if it doesnt't find anything then the array will be empty [].
                    return elem.name === value
                });
                
                // if it found a match, then we don't want to return it, if newTitles is empty [], then we return the old title because it did not appear in new list.
                return (searchNewTitles?.[0])
                    ? !elem
                    : elem;
            });
    
    return Array.from({ length: (newQuarterLocal.length / 2) }, (v, i) => {

        const searchTitle = (!currentDataLocal) ? [undefined] : currentDataLocal.filter((elem, index, array) => { return (elem.name === newQuarterLocal[(i * 2)]); }); // searching by title name should only match one title

        return (!searchTitle[0])
            ? {
                name: newQuarterLocal[(i * 2)],
                platform: platformLocal,
                Q1CmlValue: (currentQuarterLocal > 1) ? 0 : Number(newQuarterLocal[(i * 2) + 1]),
                Q2CmlValue: (currentQuarterLocal > 2) ? 0 : Number(newQuarterLocal[(i * 2) + 1]),
                Q3CmlValue: (currentQuarterLocal > 3) ? 0 : Number(newQuarterLocal[(i * 2) + 1]),
                Q4CmlValue: Number(newQuarterLocal[(i * 2) + 1])
            }
            : {
                name: newQuarterLocal[(i * 2)],
                platform: platformLocal,
                Q1CmlValue: searchTitle[0].Q1CmlValue,
                Q2CmlValue: (currentQuarterLocal === 2) ? Number(newQuarterLocal[(i * 2) + 1]) : searchTitle[0].Q2CmlValue,
                Q3CmlValue: (currentQuarterLocal === 2 || currentQuarterLocal === 3) ? Number(newQuarterLocal[(i * 2) + 1]) : searchTitle[0].Q3CmlValue,
                Q4CmlValue: Number(newQuarterLocal[(i * 2) + 1])
            };
    }).concat(removedTitles).flat();
};

const readNewestQuarter = readQuarter(currentQuarter);
const extractNQ = extractData(readNewestQuarter);
console.log(extractNQ);

const getCurrentData = getJSON("nintendo_titles_test.json", currentQuarter);
const parseCurrentData = (!getCurrentData) ? undefined : JSON.parse(getCurrentData);

const newArray = makeArray(extractNQ, parseCurrentData, currentQuarter, currentPlatform);
const newArrayStringify = JSON.stringify(newArray);

writeFile("nintendo_titles_test.json", newArrayStringify, (err) => {
    return err ? console.error(err) : console.log("something!");
});