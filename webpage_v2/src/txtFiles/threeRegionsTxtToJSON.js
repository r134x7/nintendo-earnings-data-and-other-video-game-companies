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

    // let one = readQuarterLocal.replaceAll(",", "");
    // let two = one.replaceAll(/Japan\d+/g, "\r\nJapan");
    // let four = two.replaceAll(/The Americas\d+/g, "\r\nThe Americas");
    // let five = four.replaceAll(/Other\d+/g, "\r\nOther");
    // let six = five.replaceAll(/Total\d+/g, "\r\nTotal");
    // let seven = six.replaceAll(/New titles(.*)/g, "");

    // let eight = seven.match(/Japan\s\d+|The Americas\s\d+|Other\s\d+|Europe\s\d+|Total\s\d+|Nintendo Switch (Hardware \(Total\)|OLED Model|Lite)|Nintendo Switch|Switch Software/g);
    // let eight = six.match(/.+/g)
    let eight = readQuarterLocal.match(/.+/g);

    return eight 
};

const makeArray = (newQuarterLocal, currentDataLocal, currentQuarterLocal) => {
    if (newQuarterLocal === null) {
        return null
    };

    return Array.from({length:(newQuarterLocal.length/13)}, (v,i) => {

        let searchTitle = (!currentDataLocal) ? [undefined] : currentDataLocal.filter((elem,index,array) => (elem.name === newQuarterLocal[(i*13)].trim())); // searching by name

        return (!searchTitle[0])
            ? {
                name: newQuarterLocal[(i*13)].trim(),
                regionA: "Global",
                Q1CmlValueA: (currentQuarterLocal > 1) ? 0 : Number(newQuarterLocal[(i*13)+11]),
                Q2CmlValueA: (currentQuarterLocal > 2) ? 0 : Number(newQuarterLocal[(i*13)+11]),
                Q3CmlValueA: (currentQuarterLocal > 3) ? 0 : Number(newQuarterLocal[(i*13)+11]),
                Q4CmlValueA: Number(newQuarterLocal[(i*13)+11]),
                valueALastFY: Number(newQuarterLocal[(i*13)+12]) - Number(newQuarterLocal[(i*13)+11]),
                regionB: "Japan",
                Q1CmlValueB: (currentQuarterLocal > 1) ? 0 : Number(newQuarterLocal[(i*13)+2]),
                Q2CmlValueB: (currentQuarterLocal > 2) ? 0 : Number(newQuarterLocal[(i*13)+2]),
                Q3CmlValueB: (currentQuarterLocal > 3) ? 0 : Number(newQuarterLocal[(i*13)+2]),
                Q4CmlValueB: Number(newQuarterLocal[(i*13)+2]),
                valueBLastFY: Number(newQuarterLocal[(i*13)+3]) - Number(newQuarterLocal[(i*13)+2]),
                regionC: "The Americas",
                Q1CmlValueC: (currentQuarterLocal > 1) ? 0 : Number(newQuarterLocal[(i*13)+5]),
                Q2CmlValueC: (currentQuarterLocal > 2) ? 0 : Number(newQuarterLocal[(i*13)+5]),
                Q3CmlValueC: (currentQuarterLocal > 3) ? 0 : Number(newQuarterLocal[(i*13)+5]),
                Q4CmlValueC: Number(newQuarterLocal[(i*13)+5]),
                valueCLastFY: Number(newQuarterLocal[(i*13)+6]) - Number(newQuarterLocal[(i*13)+5]),
                regionD: "Other",
                Q1CmlValueD: (currentQuarterLocal > 1) ? 0 : Number(newQuarterLocal[(i*13)+8]),
                Q2CmlValueD: (currentQuarterLocal > 2) ? 0 : Number(newQuarterLocal[(i*13)+8]),
                Q3CmlValueD: (currentQuarterLocal > 3) ? 0 : Number(newQuarterLocal[(i*13)+8]),
                Q4CmlValueD: Number(newQuarterLocal[(i*13)+8]),
                valueDLastFY: Number(newQuarterLocal[(i*13)+9]) - Number(newQuarterLocal[(i*13)+8]),
                regionE: "Other",
                Q1CmlValueE: 0,
                Q2CmlValueE: 0,
                Q3CmlValueE: 0,
                Q4CmlValueE: 0,
                valueELastFY: 0,
            } 
            : {
                name: newQuarterLocal[(i*13)].trim(),
                regionA: "Global",
                Q1CmlValueA: searchTitle[0].Q1CmlValueA,
                Q2CmlValueA: (currentQuarterLocal === 2) ? Number(newQuarterLocal[(i*13)+11]) : searchTitle[0].Q2CmlValueA,
                Q3CmlValueA: (currentQuarterLocal === 2 || currentQuarterLocal === 3) ? Number(newQuarterLocal[(i*13)+11]) : searchTitle[0].Q3CmlValueA,
                Q4CmlValueA: Number(newQuarterLocal[(i*13)+11]),
                valueALastFY: Number(newQuarterLocal[(i*13)+12]) - Number(newQuarterLocal[(i*13)+11]),
                regionB: "Japan",
                Q1CmlValueB: searchTitle[0].Q1CmlValueB,
                Q2CmlValueB: (currentQuarterLocal === 2) ? Number(newQuarterLocal[(i*13)+2]) : searchTitle[0].Q2CmlValueB,
                Q3CmlValueB: (currentQuarterLocal === 2 || currentQuarterLocal === 3) ? Number(newQuarterLocal[(i*13)+2]) : searchTitle[0].Q3CmlValueB,
                Q4CmlValueB: Number(newQuarterLocal[(i*13)+2]),
                valueBLastFY: Number(newQuarterLocal[(i*13)+3]) - Number(newQuarterLocal[(i*13)+2]),
                regionC: "The Americas",
                Q1CmlValueC: searchTitle[0].Q1CmlValueC,
                Q2CmlValueC: (currentQuarterLocal === 2) ? Number(newQuarterLocal[(i*13)+5]) : searchTitle[0].Q2CmlValueC,
                Q3CmlValueC: (currentQuarterLocal === 2 || currentQuarterLocal === 3) ? Number(newQuarterLocal[(i*13)+5]) : searchTitle[0].Q3CmlValueC,
                Q4CmlValueC: Number(newQuarterLocal[(i*13)+5]),
                valueCLastFY: Number(newQuarterLocal[(i*13)+6]) - Number(newQuarterLocal[(i*13)+5]),
                regionD: "Other",
                Q1CmlValueD: searchTitle[0].Q1CmlValueD,
                Q2CmlValueD: (currentQuarterLocal === 2) ? Number(newQuarterLocal[(i*13)+8]) : searchTitle[0].Q2CmlValueD,
                Q3CmlValueD: (currentQuarterLocal === 2 || currentQuarterLocal === 3) ? Number(newQuarterLocal[(i*13)+8]) : searchTitle[0].Q3CmlValueD,
                Q4CmlValueD: Number(newQuarterLocal[(i*13)+8]),
                valueDLastFY: Number(newQuarterLocal[(i*13)+9]) - Number(newQuarterLocal[(i*13)+8]),
                regionE: "Other",
                Q1CmlValueE: 0,
                Q2CmlValueE: 0,
                Q3CmlValueE: 0,
                Q4CmlValueE: 0,
                valueELastFY: 0,
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
  err ? console.error(err) : console.log('three regions')
);