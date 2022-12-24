import { readFileSync, writeFile } from "fs";

let currentQuarter = 4;

const readQuarter = (currentQuarterLocal) => {

    return (currentQuarterLocal === 1)
            ? readFileSync("firstQuarter.txt", "utf-8")
            : (currentQuarterLocal === 2)
            ? readFileSync("secondQuarter.txt", "utf-8") 
            : (currentQuarterLocal === 3)
            ? readFileSync("thirdQuarter.txt", "utf-8")
            : readFileSync("fourthQuarter.txt", "utf-8");
};

const getTotals = (readQuarterLocal) => {

    let getMatch = readQuarterLocal.match(/.+(?=\nJapan)|Total\n\d+\n\d+/g)

    return getMatch
};

