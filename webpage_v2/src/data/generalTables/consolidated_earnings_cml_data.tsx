import { EarningsJSONV2, getData } from "./consolidated_earnings_general"
import { EarningsValue, EarningsV2, numberType, printValuePrimitive } from "../../utils/general_earnings_logic"
import { liner, spacer, border, dateLabel, globImport } from "../../utils/table_design_logic"

const totalCollectionNintendo = globImport(new Map<number, EarningsJSONV2>(), import.meta.glob("../nintendo/Consolidated_Earnings/*.json", { import: "default", eager: true }), "YearAsceSort");

const totalCollectionBandaiNamco = globImport(new Map<number, EarningsJSONV2>(), import.meta.glob("../bandaiNamco/Consolidated_Earnings/*.json", { import: "default", eager: true }), "Ascending");

const totalCollectionCapcom = globImport(new Map<number, EarningsJSONV2>(), import.meta.glob("../capcom/Consolidated_Earnings/*.json", { import: "default", eager: true }), "Ascending");

const totalCollectionKoeiTecmo = globImport(new Map<number, EarningsJSONV2>(), import.meta.glob("../koeiTecmo/Consolidated_Earnings/*.json", { import: "default", eager: true }), "Ascending");

const totalCollectionSegaSammy = globImport(new Map<number, EarningsJSONV2>(), import.meta.glob("../sega/Consolidated_Earnings/*.json", { import: "default", eager: true }), "Ascending");

const totalCollectionSquareEnix = globImport(new Map<number, EarningsJSONV2>(), import.meta.glob("../squareEnix/Consolidated_Earnings/*.json", { import: "default", eager: true }), "Ascending");

function labelMaker (collection: EarningsJSONV2): string {

    // const makeDateLabel = dateLabel(collection.at(-1)?.fiscalYear ?? "N/A", collection.at(-1)?.currentQuarter ?? 4);
    const makeDateLabel = dateLabel(collection?.fiscalYear ?? "N/A", collection?.currentQuarter ?? 4);

    return liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "bottom",true)
}

function headerMaker(collection: EarningsJSONV2): string {
    // let subHeader = (collection.companyName === "CAPCOM Co., Ltd." || collection.companyName === "SQUARE ENIX HOLDINGS CO., LTD.") ? "Consolidated Financial Results" : "Consolidated Operating Results";

    let subHeader = "";

    switch (collection.companyName) {
        case "CAPCOM Co., Ltd.":
            subHeader = "Consolidated Financial Results";
            break;

        case "SQUARE ENIX HOLDINGS CO., LTD.":
            subHeader = "Consolidated Financial Results";
            break;
    
        default:
            subHeader = "Consolidated Operating Results";
            break;
    }

    let headerMake = liner(border([
        spacer(collection.companyName, collection.companyName.length+1, "left")
        ]),"−","top",true) +
        liner(border([
            spacer(subHeader, subHeader.length+2, "left")
        ]), "−", "both",true)

    return headerMake
}

function operatingResultsMakerV2(completeCollection: Map<number, EarningsJSONV2>): string[] {

    const makeData = new Map<number, EarningsV2[]>();
    completeCollection.forEach((value, key, map) => makeData.set(key, [...getData(value, value.data.length).values()]))

    const netSales = new Map<number, EarningsV2>();
    const operatingIncome = new Map<number, EarningsV2>();
    const netIncome = new Map<number, EarningsV2>();

    makeData.forEach((value, key, map) => {
        netSales.set(key, value[0])
        operatingIncome.set(key, value[1])
        netIncome.set(key, value[2])
    })

    let titleHeader = headerMaker(completeCollection.get(completeCollection.size -1) as EarningsJSONV2)

    let dateHeader = labelMaker(completeCollection.get(completeCollection.size -1) as EarningsJSONV2)

    let completeHeader = titleHeader + dateHeader;
    
    let get1 = printAllValues(netSales).map(elem => completeHeader + elem);

    let get2 = printAllValues(operatingIncome);

    let get3 = printAllValues(netIncome);

    let combine = get1.map((elem, index) => elem + get2[index] + get3[index])

    return combine
}

function printAllValues(list: Map<number, EarningsV2>): string[] {

    function sectionHeader(name: string | undefined, textLength: number): string {
        return liner(border([
        spacer(name ?? "Error", textLength,"left"),
    ]),"−","both",true)
    } 

    let toReturn = new Map<number, string[]>([
        [0, [sectionHeader(list.get(0)?.name, 35)]],
        [1, [sectionHeader(list.get(0)?.name, 35)]],
        [2, [sectionHeader(list.get(0)?.name, 35)]],
        [3, [sectionHeader(list.get(0)?.name, 35)]],
        [4, [sectionHeader(list.get(0)?.name, 34)]],
        [5, [sectionHeader(list.get(0)?.name, 44)]],
        [6, [sectionHeader(list.get(0)?.name, 37)]],
    ]); 

    let getValues = new Map<number, number[]>([
        [0, []],
        [1, []],
        [2, []],
        [3, []],
        [4, []],
        [5, []],
        [6, []],
    ])

    function valueMake(value: EarningsValue, fiscalYear: string): string {
        
        return (value.kind === "Quarter" || value.kind === "Cumulative")
            ? border([
                spacer(fiscalYear.slice(0, -4) + value.period,(10+value.period.length),"left"),
                spacer(`¥${value.value.toLocaleString("en")}M`,12,"right")
             ],true) 
            : ""
    }

    list.forEach((value, key, map) => {
        // needed to cover the beginning of a new FY and the end FY
        let thisFY = (value.Q4CmlValue.kind === "Cumulative") 
            ? value.Q4CmlValue.thisFY 
            : (value.Q1CmlValue.kind === "Cumulative")
                ? value.Q1CmlValue.thisFY
                : "Error: thisFY did not get year from Q4 or Q1 CmlValue because it is not there.";
        // toReturn.set(0, (toReturn.get(0) ?? "") + valueMake(value.Q1QtrValue))
        toReturn.set(0, (toReturn.get(0) ?? []).concat(valueMake(value.Q1QtrValue, thisFY)))
        toReturn.set(1, (toReturn.get(1) ?? []).concat(valueMake(value.Q2QtrValue, thisFY)))
        toReturn.set(2, (toReturn.get(2) ?? []).concat(valueMake(value.Q3QtrValue, thisFY)))
        toReturn.set(3, (toReturn.get(3) ?? []).concat(valueMake(value.Q4QtrValue, thisFY)))
        toReturn.set(4, (toReturn.get(4) ?? []).concat(valueMake(value.Q2CmlValue, thisFY)))
        toReturn.set(5, (toReturn.get(5) ?? []).concat(valueMake(value.Q3CmlValue, thisFY)))
        toReturn.set(6, (toReturn.get(6) ?? []).concat(valueMake(value.Q4CmlValue, thisFY)))

        getValues.set(0, (getValues.get(0) ?? []).concat(value.Q1QtrValue.kind === "Quarter" ? value.Q1QtrValue.value : []))
        getValues.set(1, (getValues.get(1) ?? []).concat(value.Q2QtrValue.kind === "Quarter" ? value.Q2QtrValue.value : []))
        getValues.set(2, (getValues.get(2) ?? []).concat(value.Q3QtrValue.kind === "Quarter" ? value.Q3QtrValue.value : []))
        getValues.set(3, (getValues.get(3) ?? []).concat(value.Q4QtrValue.kind === "Quarter" ? value.Q4QtrValue.value : []))
        getValues.set(4, (getValues.get(4) ?? []).concat(value.Q2CmlValue.kind === "Cumulative" ? value.Q2CmlValue.value : []))
        getValues.set(5, (getValues.get(5) ?? []).concat(value.Q3CmlValue.kind === "Cumulative" ? value.Q3CmlValue.value : []))
        getValues.set(6, (getValues.get(6) ?? []).concat(value.Q4CmlValue.kind === "Cumulative" ? value.Q4CmlValue.value : []))

    })

    toReturn.forEach((value, key, map) => {

        let getTextLength = (offset: number) => (map.get(key)?.at(-2)?.length === undefined)
            ? 0
            : (map.get(key)?.at(-2)?.length as number) - offset 
        
        map.set(key, (toReturn.get(key) ?? []).concat(
            printStats(
                printCount(getValues.get(key) ?? [0], getTextLength(21),15,true).concat(
                    printSum(getValues.get(key) ?? [0], getTextLength(21),15,"Million","¥",0,true),
                    printAverage(getValues.get(key) ?? [0], getTextLength(21), 15,"Million","¥",0,true),
                    printMedian(getValues.get(key) ?? [0], getTextLength(21), 15,"Million","¥",0,true),
                    printMininum(getValues.get(key) ?? [0], getTextLength(21), 15,"Million","¥",true),
                    printMaximum(getValues.get(key) ?? [0], getTextLength(21), 15,"Million","¥",true),
                )
            , getTextLength(3) ?? 0),
        ))
    })

    return [
        getConcat(toReturn.get(0)),
        getConcat(toReturn.get(1)),
        getConcat(toReturn.get(2)),
        getConcat(toReturn.get(3)),
        getConcat(toReturn.get(4)),
        getConcat(toReturn.get(5)),
        getConcat(toReturn.get(6)),
    ]
    
}

export function printStats(list: string[], textLength: number): string[] {

    let toPrint = list.reduce((acc, next) => acc + next,"")

    let toLiner = liner(toPrint, "−", "both", true, textLength)

    return [toLiner]
}

export function getCount(list: number[]): number {

    // let toFilter = list.filter(elem => elem.length !== 0)
    // let headerCount = 1;

    return (list.length)
}

export function getConcat(list: string[] | undefined): string {
    return (!list) 
        ? ""
        : list.reduce((acc, next) => acc + next, "");
}

export function getSum(list: number[], fixedLength: number): number {

    // let toReduce: number = list.reduce((acc, next) => {
    //     return (Number.isNaN(next) || next.length === 0)
    //         ? acc
    //         : acc + Number(next)
    // }, 0)

    let toReduce = list.reduce((acc, next) => acc + next, 0);
    
    return Number((toReduce).toFixed(fixedLength));
}

export function printCount(list: number[], textLength: number, valueLength: number, newLine: boolean, singleColumn?: boolean): string[] {

    let toPrint = (!singleColumn)
        ? border([
            spacer("Count",textLength,"left"),
            spacer(`${getCount(list)}`,/*15*/valueLength,"right"),
        ],newLine)
        : spacer(`${getCount(list)} |`,/*15*/valueLength,"right") + `${(!newLine) ? "" : "\n"}`;
        // : border([
        //     spacer(`${getCount(list)}`,/*15*/valueLength,"right"),
        // ],newLine)

    return [toPrint]
}

export function printSum(list: number[], textLength: number, valueLength: number, getNumberType: "Billion" | "Million" | "Thousand" | "None", getUnitsType: "¥" | "%" | "None", fixedLength: number, newLine: boolean, singleColumn?: boolean): string[] {

    const getValue = printValuePrimitive(getSum(list, fixedLength),numberType(getNumberType), getUnitsType) 

    let toPrint: string = (!singleColumn) 
    ? border([
        spacer("Sum",textLength,"left"),
        spacer(getValue,valueLength,"right"),
    ],newLine) 
    : spacer(getValue + " |",valueLength,"right") + `${(!newLine) ? "" : "\n"}`;
    // : border([
    //     spacer(getValue,/*15*/valueLength,"right"),
    // ],newLine)

    return [toPrint]
}

export function printAverage(list: number[], textLength: number, valueLength: number, getNumberType: "Billion" | "Million" | "Thousand" | "None", getUnitsType: "¥" | "%" | "None", fixedLength: number, newLine: boolean, singleColumn?: boolean): string[] {

    const calculateAverage = getSum(list, fixedLength) / getCount(list);

    const getRounding = Number(calculateAverage.toFixed(fixedLength));

    const printValue = printValuePrimitive(getRounding,numberType(getNumberType), getUnitsType) 

    let toPrint: string = (!singleColumn)
    ? border([
        spacer("Average",textLength,"left"),
        spacer(printValue,valueLength,"right"),
    ],newLine) 
    : spacer(printValue + " |",valueLength,"right") + `${(!newLine) ? "" : "\n"}`;
    // : border([
    //     spacer(printValue,valueLength,"right"),
    // ],newLine)

    return [toPrint]
}

export function printMininum(list: number[], textLength: number, valueLength: number, getNumberType: "Billion" | "Million" | "Thousand" | "None", getUnitsType: "¥" | "%" | "None", newLine: boolean, singleColumn?: boolean): string[] {

    const printValueMinimum = printValuePrimitive(Math.min(...list),numberType(getNumberType), getUnitsType) 

    let toPrint = (!singleColumn) 
    ? border([
        spacer("Minimum",textLength,"left"),
        spacer(printValueMinimum, valueLength,"right")
    ],newLine)
    : spacer(printValueMinimum + " |", valueLength,"right") + `${(!newLine) ? "" : "\n"}`;
    // : [border([
    //     spacer(printValueMinimum, valueLength,"right")
    // ],newLine)];

    return [toPrint]
}

export function printMaximum(list: number[], textLength: number, valueLength: number, getNumberType: "Billion" | "Million" | "Thousand" | "None", getUnitsType: "¥" | "%" | "None", newLine: boolean, singleColumn?: boolean): string[] {

    const printValueMax = printValuePrimitive(Math.max(...list),numberType(getNumberType), getUnitsType) 

    const toPrint = (!singleColumn) 
    ? border([
        spacer("Maximum",textLength,"left"),
        spacer(printValueMax, valueLength,"right"),
    ])
    : spacer(printValueMax + " |", valueLength,"right") + `${(!newLine) ? "" : "\n"}`;
    // : border([
    //     spacer(printValueMax, valueLength,"right")
    // ],newLine);

    return [toPrint]
}

export function printMedian(list: number[], textLength: number, valueLength: number, getNumberType: "Billion" | "Million" | "Thousand" | "None", getUnitsType: "¥" | "%" | "None", fixedLength: number, newLine: boolean, singleColumn?: boolean): string[] {

    const sortedList = list.sort((a, b) => {
        return a > b
            ? 1
            : a < b
                ? -1
                : 0
    })

    // const printValueMinimum = printValuePrimitive(sortedList[0],numberType(getNumberType), getUnitsType) 
    
    // const printValueMax = printValuePrimitive(sortedList[sortedList.length-1],numberType(getNumberType), getUnitsType) 

    // const printMininum = (!singleColumn) 
    // ? border([
    //     spacer("Minimum",textLength,"left"),
    //     spacer(printValueMinimum, valueLength,"right")
    // ],newLine)
    // : border([
    //     spacer(printValueMinimum, valueLength,"right")
    // ],newLine);

    // const printMaximum = (!singleColumn) 
    // ? border([
    //     spacer("Maximum",textLength,"left"),
    //     spacer(printValueMax, valueLength,"right"),
    // ])
    // : border([
    //     spacer(printValueMax, valueLength,"right")
    // ],newLine);

    let printMedian: string = ((sortedList.length % 2) !== 0) // odd number
            // median formula source: https://en.wikipedia.org/wiki/Median
            // odd number median(x) = x(n+1)/2 => index version => median(x) = (x(n+1)/2)-1
            ? printValuePrimitive(sortedList[((sortedList.length + 1)/2) -1],numberType(getNumberType), getUnitsType)
            // even number median(x) = (x(n/2) + x((n/2) + 1)) /2 => index version median(x) = (x((n/2)-1) + x((n/2))) /2
            : printValuePrimitive(
                Number(((sortedList[(sortedList.length/2) -1] + sortedList[(sortedList.length/2)])/2).toFixed(fixedLength))
                ,numberType(getNumberType), getUnitsType) // not fixed to 0 can lead to .5 values if not using decimals 

    let printMedianFixed: string = (!singleColumn) 
    ? border([
        spacer("Median",textLength,"left"),
        spacer(printMedian,valueLength,"right")
    ],newLine)
    : spacer(printMedian + " |", valueLength,"right") + `${(!newLine) ? "" : "\n"}`;
    // : border([
    //     spacer(printMedian, valueLength,"right")
    // ],newLine);

    return [
        printMedianFixed,
        // printMininum,
        // printMaximum,
    ]
}

// have to remember to put this in somehow... via footnotes most likely
let dataSourceNintendo = "Source: https://www.nintendo.co.jp/ir/en/finance/historical_data/index.html"

export const cumulativeEarningsListNintendo = operatingResultsMakerV2(totalCollectionNintendo).map(elem => elem + dataSourceNintendo);

export const cumulativeEarningsListBandaiNamco = operatingResultsMakerV2(totalCollectionBandaiNamco); 

export const cumulativeEarningsListCapcom = operatingResultsMakerV2(totalCollectionCapcom); 

export const cumulativeEarningsListKoeiTecmo = operatingResultsMakerV2(totalCollectionKoeiTecmo); 

export const cumulativeEarningsListSegaSammy = operatingResultsMakerV2(totalCollectionSegaSammy);

export const cumulativeEarningsListSquareEnix = operatingResultsMakerV2(totalCollectionSquareEnix)