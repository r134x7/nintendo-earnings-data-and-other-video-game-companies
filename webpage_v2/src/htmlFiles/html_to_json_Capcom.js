import { readFileSync, writeFile } from "fs";
// compile to javaScript using npx tsc (filename)

// Enter 1 to 4 on the command line
let currentQuarter = Number(process.argv[2]);

const readQuarter = (currentQuarterLocal) => {
    return (currentQuarterLocal === 1)
        ? readFileSync("firstQuarter.html", "utf-8")
        : (currentQuarterLocal === 2)
            ? readFileSync("secondQuarter.html", "utf-8")
            : (currentQuarterLocal === 3)
                ? readFileSync("thirdQuarter.html", "utf-8")
                : readFileSync("fourthQuarter.html", "utf-8");
};

const extractData = (readQuarterLocal) => {
    return readQuarterLocal.match(/(?<=td>)(.+?)(?=<\/td>)/g); // regex taken from: https://www.octoparse.com/blog/using-regular-expression-to-match-html#regex3
};

const getJSON = (jsonLocal, currentQuarterLocal) => {

    return (currentQuarterLocal > 1)
        ? readFileSync(jsonLocal, "utf-8")
        : undefined;
};

const makeArray = (newQuarterLocal, currentDataLocal, currentQuarterLocal) => {
    if (newQuarterLocal === null) {
        return null;
    };

    return Array.from({ length: (newQuarterLocal.length / 4) }, (v, i) => {
        const searchTitle = (!currentDataLocal) ? [undefined] : currentDataLocal.filter((elem, index, array) => { return (elem.title === newQuarterLocal[(i * 4) + 1]) && (elem.releaseDate === newQuarterLocal[i * 4]); }); // searching by title name and release date should only match one title

        return (!searchTitle[0])
            ? {
                title: newQuarterLocal[(i * 4) + 1],
                releaseDate: newQuarterLocal[i * 4],
                platforms: newQuarterLocal[(i * 4) + 2],
                Q1CmlValue: (currentQuarterLocal > 1) ? 0 : Number(newQuarterLocal[(i * 4) + 3]),
                Q2CmlValue: (currentQuarterLocal > 2) ? 0 : Number(newQuarterLocal[(i * 4) + 3]),
                Q3CmlValue: (currentQuarterLocal > 3) ? 0 : Number(newQuarterLocal[(i * 4) + 3]),
                Q4CmlValue: Number(newQuarterLocal[(i * 4) + 3])
            }
            : {
                title: newQuarterLocal[(i * 4) + 1],
                releaseDate: newQuarterLocal[i * 4],
                platforms: newQuarterLocal[(i * 4) + 2],
                Q1CmlValue: searchTitle[0].Q1CmlValue,
                Q2CmlValue: (currentQuarterLocal === 2) ? Number(newQuarterLocal[(i * 4) + 3]) : searchTitle[0].Q2CmlValue,
                Q3CmlValue: (currentQuarterLocal === 2 || currentQuarterLocal === 3) ? Number(newQuarterLocal[(i * 4) + 3]) : searchTitle[0].Q3CmlValue,
                Q4CmlValue: Number(newQuarterLocal[(i * 4) + 3])
            };
    });
};
const readNewestQuarter = readQuarter(currentQuarter);
const extractNQ = extractData(readNewestQuarter);
console.log(extractNQ);

const getCurrentData = getJSON("platinum_titles_test.json", currentQuarter);
const parseCurrentData = (!getCurrentData) ? undefined : JSON.parse(getCurrentData);

const newArray = makeArray(extractNQ, parseCurrentData, currentQuarter);
const newArrayStringify = JSON.stringify(newArray);

writeFile('platinum_titles_test.json', newArrayStringify, (err) => {
    return err ? console.error(err) : console.log('Capcom is back!');
});
// const dataReadFirstQuarter = fs.readFileSync("firstQuarter.html", "utf-8")
// let dataMatch = dataReadFirstQuarter.match(/(?<=td>)(.+?)(?=<\/td>)/g); // regex taken from: https://www.octoparse.com/blog/using-regular-expression-to-match-html#regex3
// let testArray = Array.from({length:(dataMatch.length/4)}, (v,i) => {
//     // if current quarter = 1
//     return {
//         title: dataMatch[(i*4)+1],
//         releaseDate: dataMatch[i*4],
//         platforms: dataMatch[(i*4)+2],
//         Q1CmlValue: Number(dataMatch[(i*4)+3]),
//         Q2CmlValue: Number(dataMatch[(i*4)+3]),
//         Q3CmlValue: Number(dataMatch[(i*4)+3]),
//         Q4CmlValue: Number(dataMatch[(i*4)+3]),
//     }
// });
// need to read from the JSON file
// const jsonRead = fs.readFileSync("platinum_titles_fy3_2021_test.json", "utf-8")
// const jsonParse = JSON.parse(jsonRead)
// const dataReadSecondQuarter = fs.readFileSync("secondQuarter.html", "utf-8")
// let dataMatchSecondQuarter = dataReadSecondQuarter.match(/(?<=td>)(.+?)(?=<\/td>)/g); // regex taken from: https://www.octoparse.com/blog/using-regular-expression-to-match-html#regex3
// let arraySecondQuarter = Array.from({length:(dataMatchSecondQuarter.length/4)}, (v,i) => {
//     // if current quarter = 2
//     let searchTitle = jsonParse.filter((elem,index,array) => (elem.title === dataMatchSecondQuarter[(i*4)+1]) && (elem.releaseDate === dataMatchSecondQuarter[i*4])); // searching by title name and release date should only match one title
//     return (!searchTitle[0]) 
//     ? {
//         title: dataMatchSecondQuarter[(i*4)+1],
//         releaseDate: dataMatchSecondQuarter[i*4],
//         platforms: dataMatchSecondQuarter[(i*4)+2],
//         Q1CmlValue: 0,
//         Q2CmlValue: Number(dataMatchSecondQuarter[(i*4)+3]),
//         Q3CmlValue: Number(dataMatchSecondQuarter[(i*4)+3]),
//         Q4CmlValue: Number(dataMatchSecondQuarter[(i*4)+3]),
//     }
//     : {
//         title: dataMatchSecondQuarter[(i*4)+1],
//         releaseDate: dataMatchSecondQuarter[i*4],
//         platforms: dataMatchSecondQuarter[(i*4)+2],
//         Q1CmlValue: searchTitle[0].Q1CmlValue,
//         Q2CmlValue: Number(dataMatchSecondQuarter[(i*4)+3]),
//         Q3CmlValue: Number(dataMatchSecondQuarter[(i*4)+3]),
//         Q4CmlValue: Number(dataMatchSecondQuarter[(i*4)+3]),
//     }
// });
// // console.log(JSON.stringify(testArray));
// fs.writeFile('platinum_titles_fy3_2021_test.json', JSON.stringify(arraySecondQuarter), (err) =>
//   err ? console.error(err) : console.log('Success!')
// );
