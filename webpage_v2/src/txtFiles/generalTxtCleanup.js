import { readFileSync, writeFile } from "fs";

// Enter 1 to 4 on the command line
let currentQuarter = Number(process.argv[2]);

let filePathReadCheck = (process.argv[3] === "reg") ? "regionalJSON/" : "million_sellers_JSON/"

const readQuarter = (currentQuarterLocal) => {

    return (currentQuarterLocal === 1)
            ? readFileSync(filePathReadCheck + "firstQuarter.txt", "utf-8")
            : (currentQuarterLocal === 2)
            ? readFileSync(filePathReadCheck + "secondQuarter.txt", "utf-8") 
            : (currentQuarterLocal === 3)
            ? readFileSync(filePathReadCheck + "thirdQuarter.txt", "utf-8")
            : readFileSync(filePathReadCheck + "fourthQuarter.txt", "utf-8");
};

const removeCommas = (readQuarterLocal) => {

    let one = readQuarterLocal.replaceAll(",", "");
    // let two = one.replaceAll(/(?<=\d+)\s/g,",")
    let two = one.replaceAll(/(?<=\d+)\s|(?<=[A-Za-z])\s(?=\d)/g, "\r\n")

    return two
};

let readNewestQuarter = readQuarter(currentQuarter);
let extractNQ = removeCommas(readNewestQuarter);
console.log(extractNQ);

const writeQuarter = (extractNQLocal, currentQuarterLocal) => {

    return (currentQuarterLocal === 1)
            ? writeFile(filePathReadCheck + "firstQuarter.txt", extractNQLocal, (err) =>
                err ? console.error(err) : console.log('No commas?'))
            : (currentQuarterLocal === 2)
            ? writeFile(filePathReadCheck + "secondQuarter.txt", extractNQLocal, (err) =>
                err ? console.error(err) : console.log('No commas?')) 
            : (currentQuarterLocal === 3)
            ? writeFile(filePathReadCheck + "thirdQuarter.txt", extractNQLocal, (err) =>
                err ? console.error(err) : console.log('No commas?'))
            : writeFile(filePathReadCheck + "fourthQuarter.txt", extractNQLocal, (err) =>
                err ? console.error(err) : console.log('No commas?'));
};

writeQuarter(extractNQ, currentQuarter);
// writeFile("testData.txt", extractNQ, (err) =>
//   err ? console.error(err) : console.log('No commas?')
// );