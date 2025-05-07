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

let getCurrentData = getJSON("test.json");

let parseCurrentData = (!getCurrentData) ? undefined : JSON.parse(getCurrentData); // converts JSON to an object because JSON and JS objects don't work the same... e.g. JSON only uses null and not undefined when undefined is normally used in JS

// console.log(parseCurrentData);

// console.log(parseCurrentData.data);

if (currentDataType == "consolidated earnings") {
    const dataOutput = consolidatedEarningsRows(parseCurrentData)
    console.log(dataOutput);
    
    writeCSV(dataOutput)
}

function consolidatedEarningsRows(data) {

    const headers = [Object.keys(data.data[0]).toString()] // [] to avoid nested rows
    
    const getRows = data.data.map((value, index, array) => {
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


function writeCSV(finishedData) {

    // let formatData = finishedData.map((elem) => {

    // })

    let newArrayStringify = JSON.stringify(finishedData, undefined)

    console.log(newArrayStringify);
    


    // writeFile("output.csv", newArrayStringify, "utf8", (err) =>
    //   err ? console.error(err) : console.log('json? JSSSOOONNNNNN!')
    // );
}

