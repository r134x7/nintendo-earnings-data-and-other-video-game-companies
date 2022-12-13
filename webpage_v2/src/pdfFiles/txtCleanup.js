import { readFileSync, writeFile } from "fs";

let currentQuarter = 1;

const readQuarter = (currentQuarterLocal) => {

    return (currentQuarterLocal === 1)
            ? readFileSync("firstQuarter.txt", "utf-8")
            : (currentQuarterLocal === 2)
            ? readFileSync("secondQuarter.txt", "utf-8") 
            : (currentQuarterLocal === 3)
            ? readFileSync("thirdQuarter.txt", "utf-8")
            : readFileSync("fourthQuarter.txt", "utf-8");
};

const removeCommas = (readQuarterLocal) => {

    let one = readQuarterLocal.replaceAll(",", "");
    let two = one.replaceAll(/Japan\d+/g, "\r\nJapan");
    let three = two.replaceAll(/Americas\d+/g, "\r\nAmericas");
    let four = three.replaceAll(/Europe\d+/g, "\r\nEurope");
    let five = four.replaceAll(/Other\d+/g, "\r\nOther");
    let six = five.replaceAll(/Total\d+/g, "\r\nTotal");
    let seven = six.match(/New titles(.*)/g, "");

    let eight = seven.match(/Japan\s\d+|Americas\s\d+|Other\s\d+|Europe\s\d+|Total\s\d+|Nintendo Switch (Hardware \(Total\)|OLED Model|Lite)|Nintendo Switch|Switch Software/g);

    return eight 
};

const makeArray = (newQuarterLocal, currentDataLocal, currentQuarterLocal) => {
    if (newQuarterLocal === null) {
        return null
    };

    return Array.from({length:(newQuarterLocal.length/4)}, (v,i) => {

        let searchTitle = (!currentDataLocal) ? [undefined] : currentDataLocal.filter((elem,index,array) => (elem.title === newQuarterLocal[(i*4)+1]) && (elem.releaseDate === newQuarterLocal[i*4])); // searching by title name and release date should only match one title

        return (!searchTitle[0])
            ? {
                title: newQuarterLocal[(i*4)+1],
                releaseDate: newQuarterLocal[i*4],
                platforms: newQuarterLocal[(i*4)+2],
                Q1CmlValue: (currentQuarterLocal > 1) ? 0 : Number(newQuarterLocal[(i*4)+3]),
                Q2CmlValue: (currentQuarterLocal > 2) ? 0 : Number(newQuarterLocal[(i*4)+3]),
                Q3CmlValue: (currentQuarterLocal > 3) ? 0 : Number(newQuarterLocal[(i*4)+3]),
                Q4CmlValue: Number(newQuarterLocal[(i*4)+3]),
            } 
            : {
                title: newQuarterLocal[(i*4)+1],
                releaseDate: newQuarterLocal[i*4],
                platforms: newQuarterLocal[(i*4)+2],
                Q1CmlValue: searchTitle[0].Q1CmlValue,
                Q2CmlValue: (currentQuarterLocal === 2) ? Number(newQuarterLocal[(i*4)+3]) : searchTitle[0].Q2CmlValue,
                Q3CmlValue: (currentQuarterLocal === 3) ? Number(newQuarterLocal[(i*4)+3]) : searchTitle[0].Q3CmlValue,
                Q4CmlValue: Number(newQuarterLocal[(i*4)+3]),
            };
    });
};

const getJSON = (jsonLocal, currentQuarterLocal) => {

    return (currentQuarterLocal > 1)
        ? readFileSync(jsonLocal, "utf-8")
        : undefined
}; 

let readNewestQuarter = readQuarter(currentQuarter);
let extractNQ = removeCommas(readNewestQuarter);
console.log(extractNQ);

let getCurrentData = getJSON("regional_data_test.json", currentQuarter);
let parseCurrentData = (!getCurrentData) ? undefined : JSON.parse(getCurrentData);

let newArray = makeArray(extractNQ, parseCurrentData, currentQuarter);

let newArrayStringify = JSON.stringify(newArray);

writeFile("regional_data_test.json", newArrayStringify, (err) =>
  err ? console.error(err) : console.log('No commas?')
);