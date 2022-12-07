// need fs
// need to read html files
// need to write files in json
// need to make a function to filter titles by name and release date to add values to the correct title

import fs from "fs";

// run file using node command not npm
// starting with FY3/2021

const dataRead = fs.readFileSync("firstQuarter.html", "utf-8")

let dataMatch = dataRead.match(/(?<=td>)(.+?)(?=<\/td>)/g); // regex taken from: https://www.octoparse.com/blog/using-regular-expression-to-match-html#regex3

let testArray = Array.from({length:(dataMatch.length/4)}, (v,i) => {
    // if current quarter = 1
    return {
        title: dataMatch[(i*4)+1],
        releaseDate: dataMatch[i*4],
        platforms: dataMatch[(i*4)+2],
        Q1CmlValue: Number(dataMatch[(i*4)+3]),
        Q2CmlValue: Number(dataMatch[(i*4)+3]),
        Q3CmlValue: Number(dataMatch[(i*4)+3]),
        Q4CmlValue: Number(dataMatch[(i*4)+3]),
    }
});

// need to read from the JSON file
// const jsonRead = fs.readFileSync("platinum_titles_fy3_2021_test.json", "utf-8")

// console.log(JSON.parse(jsonRead));

// console.log(JSON.stringify(testArray));

fs.writeFile('platinum_titles_fy3_2021_test.json', JSON.stringify(testArray), (err) =>
  err ? console.error(err) : console.log('Success!')
);
