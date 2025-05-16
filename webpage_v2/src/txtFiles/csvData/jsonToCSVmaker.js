import { readFileSync, writeFile } from "fs";

let dataType = process.argv[2];

function dataMake(dataInputLocal) {

    switch (dataInputLocal) {
        case "1": {
            // headers
            // name, Q1CmlValue, Q2CmlValue, Q3CmlValue, Q4CmlValue
            console.log("consolidated earnings");
            return "consolidated earnings";
        }
        case "2": {
            console.log("top selling titles nintendo");
            return "top selling titles nintendo"
        }
        default: {
        let currentData = "N/A";
        console.log(currentData);
            break;
        }
    }
};

let currentDataType = dataMake(dataType);

const getJSON = (jsonLocal) => {

    return (jsonLocal == undefined)
        ? undefined
        : readFileSync(jsonLocal, "utf-8")
}

// let getCurrentData = getJSON("test.json");
let getCurrentData = getJSON("../../data/nintendo/Top_Selling_Titles/top_selling_titles_fy3_2017.json");

let parseCurrentData = (!getCurrentData) ? undefined : JSON.parse(getCurrentData); // converts JSON to an object because JSON and JS objects don't work the same... e.g. JSON only uses null and not undefined when undefined is normally used in JS

// console.log(parseCurrentData);

// console.log(parseCurrentData.data);

if (currentDataType == "consolidated earnings") {
    const dataOutput = consolidatedEarningsRows(parseCurrentData)
    console.log(dataOutput);
    
    writeCSV(dataOutput)
}

if (currentDataType == "top selling titles nintendo") {
    const dataOutput = topSellingTitlesNintendoFY(parseCurrentData)
    console.log(dataOutput);
    
    writeCSV(dataOutput)
}

function consolidatedEarningsRows(data) {

    const headers = [Object.keys(data.data[0]).toString()] // [] to avoid nested rows
    
    const getRows = data.data.map((value, index, array) => {
        console.log(value);
        
        return Object.values(value).toString()
    })

    // const stringValues = getRows.map((value) => value.map(elem => {
    //     return (elem == null)
    //         ? "null"
    //         : elem.toString()
    // }))

    const columnsRows = headers.concat(getRows)
    // console.log(columnsRows);

    return columnsRows;
    
}

function topSellingTitlesNintendoFY(data) {
    const headers = [["name", data["fiscalYear"]]]

    const filterRows = data.titles.flat().filter(value => value.platform == "Nintendo Switch")

    const getRows = filterRows.map(value => {
        return [value.name, value.Q4CmlValue.toString()]
    })

    const columnsRows = headers.concat(getRows)

    return columnsRows
}

function writeCSV(finishedData) {

    // let formatData = finishedData.map((elem) => {

    // })
    // console.log(finishedData);
    

    let newArrayStringify = JSON.stringify(finishedData, undefined)

    // console.log(newArrayStringify);
    


    writeFile("output.csv", newArrayStringify, "utf8", (err) =>
      err ? console.error(err) : console.log('json? JSSSOOONNNNNN!')
    );
}

