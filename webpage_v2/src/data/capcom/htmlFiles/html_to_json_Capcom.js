// need fs
// need to read html files
// need to write files in json
// need to make a function to filter titles by name and release date to add values to the correct title

import fs from "fs";


// fs.readFile("fourthQuarter.html", "utf-8", (error, data) => error ? console.error(error) : testData = data.toString());
// run file using node command not npm
// starting with FY3/2021

const testData = fs.readFileSync("fourthQuarter.html", "utf-8")

let testData1 = testData.match(/(?<=td>)(.+?)(?=<\/td>)/g); // regex taken from: https://www.octoparse.com/blog/using-regular-expression-to-match-html#regex3

console.log(testData1);

let testData2 = {
    date: testData1[0],
    title: testData1[1],
    platforms: testData1[2],
    value: testData1[3],
};

let testArray = Array.from({length:(testData1.length/4)}, (v,i) => {

    return {
        title: testData1[(i*4)+1],
        releaseDate: testData1[i*4],
        platforms: testData1[(i*4)+2],
        value: Number(testData1[(i*4)+3]),
    }
})

console.log(JSON.stringify(testArray));