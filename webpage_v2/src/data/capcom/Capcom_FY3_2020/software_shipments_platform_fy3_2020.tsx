import {
    Header,
    Series,
    printHead,
    printSeriesOutput,
} from "../../../utils/capcom_factbook_logic";

const platform1: Series = 
{
    title: "PlayStation 3, PlayStation 4",
    skuNumber: 8,
    value: 3.3,
    valueLastFY: 6.5,
};

const platform2: Series = 
{
    title: "Wii, Wii U, Nintendo Switch",
    skuNumber: 8,
    value: 1.15,
    valueLastFY: 1.95,
};

const platform3: Series = 
{
    title: "Xbox 360, Xbox One",
    skuNumber: 2,
    value: 0.3,
    valueLastFY: 1.2,
};

const platform4: Series = 
{
    title: "PC Other",
    skuNumber: 0,
    value: 0.2,
    valueLastFY: 0.3,
};

const platform5: Series = 
{
    title: "Package Total",
    skuNumber: 19,
    value: 4.95,
    valueLastFY: 10.0,
};

const platform6: Series = 
{
    title: "Full-game download",
    skuNumber: 16,
    value: 20.55,
    valueLastFY: 15.3,
};

const platform7: Series = 
{
    title: "Total",
    skuNumber: 35,
    value: 25.5,
    valueLastFY: 25.3,
};

const header: Header = {
    firstHeader: "| Capcom - Fact Book Data        |",
    secondHeader: "| Units shipped by Platform      |",
    thirdHeader: "| SKU and Rank                   |",
    fourthHeader: "| Units                          |",
    fiscalYear:  "| FY3/20 Cumulative  |",
    fiscalYearYoY: "| FY3/20 Cml. YoY%   |",
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
