import { readFileSync, writeFile } from "fs";

let currentQuarter = 2;

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
    // let two = one.replaceAll(/(?<=\d+)\s/g, ",")
    let two = one.replaceAll(/(?<=\d+)\s|(?<=[A-Za-z])\s(?=\d)/g, "\r\n")

    return two
};

let readNewestQuarter = readQuarter(currentQuarter);
let extractNQ = removeCommas(readNewestQuarter);
console.log(extractNQ);

const writeQuarter = (extractNQLocal, currentQuarterLocal) => {

    return (currentQuarterLocal === 1)
            ? writeFile("firstQuarter.txt", extractNQLocal, (err) =>
                err ? console.error(err) : console.log('No commas?'))
            : (currentQuarterLocal === 2)
            ? writeFile("secondQuarter.txt", extractNQLocal, (err) =>
                err ? console.error(err) : console.log('No commas?')) 
            : (currentQuarterLocal === 3)
            ? writeFile("thirdQuarter.txt", extractNQLocal, (err) =>
                err ? console.error(err) : console.log('No commas?'))
            : writeFile("fourthQuarter.txt", extractNQLocal, (err) =>
                err ? console.error(err) : console.log('No commas?'));
};

writeQuarter(extractNQ, currentQuarter);
// writeFile("testData.txt", extractNQ, (err) =>
//   err ? console.error(err) : console.log('No commas?')
// );