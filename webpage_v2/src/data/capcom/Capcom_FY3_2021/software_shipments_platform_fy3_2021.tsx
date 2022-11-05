import {
    Header,
    Series,
    printHead,
    printSeriesOutput,
} from "../../../utils/capcom_factbook_logic";

const platform1: Series = 
{
    title: "PlayStation 3, PlayStation 4, PlayStation 5",
    skuNumber: 4,
    value: 2.75,
    valueLastFY: 3.3,
};

const platform2: Series = 
{
    title: "Wii, Wii U, Nintendo Switch",
    skuNumber: 1,
    value: 3.65,
    valueLastFY: 1.15,
};

const platform3: Series = 
{
    title: "Xbox 360, Xbox One, Xbox Series X|S",
    skuNumber: 2,
    value: 0.4,
    valueLastFY: 0.3,
};

const platform4: Series = 
{
    title: "PC Other",
    skuNumber: 0,
    value: 0.15,
    valueLastFY: 0.2,
};

const platform5: Series = 
{
    title: "Package Total",
    skuNumber: 7,
    value: 6.95,
    valueLastFY: 4.95,
};

const platform6: Series = 
{
    title: "Full-game download",
    skuNumber: 7,
    value: 23.15,
    valueLastFY: 20.55,
};

const platform7: Series = 
{
    title: "Total",
    skuNumber: 14,
    value: 30.1,
    valueLastFY: 25.5,
};

const header: Header = {
    firstHeader: "| Capcom - Fact Book Data        |",
    secondHeader: "| Units shipped by Platform      |",
    thirdHeader: "| SKU and Rank                   |",
    fourthHeader: "| Units                          |",
    fiscalYear:  "| FY3/21 Cumulative  |",
    fiscalYearYoY: "| FY3/21 Cml. YoY%   |",
}

export const collection = [
    platform1,
    platform2,
    platform3,
    platform4,
    platform5,
    platform6,
    platform7,
] as const;

const sortedFYCollection: Series[] = collection.filter((elem, index, array) => {
        // return elem.value - elem.valueLastFY !== 0 // probably shouldn't make two separate tables for FY and ALL...
        return elem // forgetting filter doesn't do anything here...
        // we need to create a new array that is identical to the original due to sort's mutating properties. filter titles that sold units this FY
}).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
    return (a.value > b.value)
        ? 1
        : (a.value < b.value)
        ? -1
        : 0
}).map((elem, index) => {
    return {...elem, rank: index+1}
})

let printedSeries = sortedFYCollection.map((elem) => {
    return printSeriesOutput(elem)(header)(32)(11)(32);
}).reduce((prev, next) => prev + "\n" + next)

let printOne = printHead(header);

export const printSoftwareShipments =
`${printOne}
${printedSeries}`;
