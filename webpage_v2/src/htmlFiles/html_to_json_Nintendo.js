import { readFileSync, writeFile } from "fs";
// compile to javaScript using npx tsc (filename)

const currentQuarter = 4;
// let currentPlatform = "Nintendo Switch";
// let currentPlatform = "Wii U";
let currentPlatform = "Nintendo 3DS";
// let currentPlatform = "Wii";
// let currentPlatform = "Nintendo DS";

const readQuarter = (currentQuarterLocal) => {
    return (currentQuarterLocal === 1)
        ? readFileSync("nintendo_top_selling_titles_data/nintendo_top_selling_titles_fy3_2012/nintendo_3ds/firstQuarter.html", "utf-8")
        : (currentQuarterLocal === 2)
            ? readFileSync("nintendo_top_selling_titles_data/nintendo_top_selling_titles_fy3_2012/nintendo_3ds/secondQuarter.html", "utf-8")
            : (currentQuarterLocal === 3)
                ? readFileSync("nintendo_top_selling_titles_data/nintendo_top_selling_titles_fy3_2012/nintendo_3ds/thirdQuarter.html", "utf-8")
                : readFileSync("nintendo_top_selling_titles_data/nintendo_top_selling_titles_fy3_2012/nintendo_3ds/fourthQuarter.html", "utf-8");
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

    return Array.from({ length: (newQuarterLocal.length / 2) }, (v, i) => {

        const searchTitle = (!currentDataLocal) ? [undefined] : currentDataLocal.filter((elem, index, array) => { return (elem.name === newQuarterLocal[(i * 2)]); }); // searching by title name and release date should only match one title

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
    });
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