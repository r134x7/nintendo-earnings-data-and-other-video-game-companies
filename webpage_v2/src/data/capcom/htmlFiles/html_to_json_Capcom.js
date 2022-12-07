// need fs
// need to read html files
// need to write files in json
// need to make a function to filter titles by name and release date to add values to the correct title

import fs from "fs";


// fs.readFile("fourthQuarter.html", "utf-8", (error, data) => error ? console.error(error) : testData = data.toString());
// run file using node command not npm
// starting with FY3/2021

let x = 0;

const testData = fs.readFileSync("fourthQuarter.html", "utf-8")

// console.log(testData);

let testData1 = testData.match(/(?<=td>)(.+?)(?=<\/td>)/g); // regex taken from: https://www.octoparse.com/blog/using-regular-expression-to-match-html#regex3

console.log(x);

console.log(testData1);