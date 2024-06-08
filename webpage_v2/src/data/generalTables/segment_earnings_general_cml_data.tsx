import {
    type EarningsValue,
} from "../../utils/general_earnings_logic";

import { 
    printStats, 
    getConcat, 
    printAverage, 
    printCount,
    printMaximum,
    printMedian,
    printMininum,
    printSum
} from "./consolidated_earnings_cml_data";

import { dateLabel, liner, border, spacer, globImport, printTextBlock } from "../../utils/table_design_logic";

import { SegmentJSON, SegmentValue, getSegmentData } from "./segment_earnings_general";

const collectionBandaiNamcoCml = globImport(new Map<number, SegmentJSON>(), import.meta.glob("../bandaiNamco/Segment_Earnings/*.json", { import: "default", eager: true }), "Ascending");

const collectionKonamiCml = globImport(new Map<number, SegmentJSON>(), import.meta.glob("../konami/Segment_Earnings/*.json", { import: "default", eager: true }), "Ascending");

const collectionCyberAgentCml = globImport(new Map<number, SegmentJSON>(), import.meta.glob("../cyberAgent/Segment_Earnings/*.json", { import: "default", eager: true }), "Ascending");

const collectionKadokawaCml = globImport(new Map<number, SegmentJSON>(), import.meta.glob("../kadokawa/Segment_Earnings/*.json", { import: "default", eager: true }), "Ascending");

function labelMaker (collection: SegmentJSON): string {

    // const makeDateLabel = dateLabel(collection.at(-1)?.fiscalYear ?? "N/A", collection.at(-1)?.currentQuarter ?? 4);
    const makeDateLabel = dateLabel(collection?.fiscalYear ?? "N/A", collection?.currentQuarter ?? 4);

    return liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "bottom",true)
}

function headerMaker(collection: SegmentJSON): string {

    let subHeader = "Segment Information";

    let headerMake = liner(border([
        spacer(collection.companyName, collection.companyName.length+6, "left")
        ]),"−","top",true) +
        liner(border([
            spacer(subHeader, collection.companyName.length+6, "left")
        ]), "−", "both",true)

    return headerMake
}

// collectionBandaiNamco.clear();

export function maxLengthMAP<T>(mapData: Map<number, T[]>): number {
    let max = 0;
    mapData.forEach((value) => {
        if (value.length > max) {
            max = value.length
        }
    })
    return max
};

function segmentResultsMaker(completeCollection: Map<number, SegmentJSON>): string[] {

    const makeData = new Map<number, SegmentValue[]>();
    completeCollection.forEach((value, key, map) => makeData.set(key, [...getSegmentData(value, value.data.length).values()]))

    // it assumes the latest data has the longest length, it would be better to just search for the list with the longest length
    // in case a consolidation of segments occurs
    // const segmentCount = makeData.get(makeData.size-1)?.length; 

    const getIDs = new Set<string>();

    makeData.forEach((value) => value.map(elem => getIDs.add(elem.ID)))

    // console.log(getIDs);

    let IDlist = [...getIDs.values()]

    const segmentList = Array.from({length: maxLengthMAP(makeData) ?? 0}, (v,i) => new Map<number, SegmentValue>())

    // console.log(getIDs.size)
    // console.log(segmentList.length)
    // the segmentList and getIDs are the same size

    makeData.forEach((value, key, map) => {
        // console.log(value);
        
        // looping through the year of data containing the categories
        // they're being placed by index when they should only be placed by ID
        // now that the IDs are listed, we now filter by ID
        for (let index = 0; index < value.length; index++) {

            let filterID = value.filter(elem => elem.ID === IDlist[index]) // unique ID, index is either empty or one index

            // undefined values slipped through from the loop condition
            // the fix is either the below or to stop the loop
            if (filterID[0] !== undefined) {
                segmentList[index].set(key, filterID[0]); 
            }
        }
    })

    // console.log(segmentList) // the segments are not being grouped correctly being they need to match ID before being grouped.

    let titleHeader = headerMaker(completeCollection.get(completeCollection.size -1) as SegmentJSON)

    let dateHeader = labelMaker(completeCollection.get(completeCollection.size -1) as SegmentJSON)

    let completeHeader = titleHeader + dateHeader;

    let getCompanyName = completeCollection.get(completeCollection.size -1)?.companyName ?? "N/A";

    let printSegments = segmentList.map(elem => printAllValues(elem, getCompanyName))

    // console.log(printSegments)

    let sortPrints = Array.from({length: 7}, (v, i) => {

        return printSegments.map((elem, index, array) => elem[i])
    }).map(elem => completeHeader + elem.reduce((acc, next) => acc + next))    

    // console.log(sortPrints)

    return sortPrints
}

function printAllValues(list: Map<number, SegmentValue>, company: string): string[] {

    function sectionHeader(name: string | undefined, textLength: number): string {
        return liner(border([
        spacer(name ?? "Error", textLength,"left"),
    ]),"−","both",true)
    } 

    // have to repeat toReturn and getValues for netSales and operatingIncome
    const salesType = (company.includes("KONAMI"))
            ? "Revenue"
            : (company.includes("Else"))
                ? "Sales"
                : "Net Sales"

    const profitType = (company.includes("KONAMI"))
            ? "Business Profit"
            : (company.includes("CyberAgent"))
                ? "Segment Income"
                : "Operating Income"

    const finalName = [...list.keys()].at(-1) ?? 0; // getting the last key in the list

    // Q1, Q2, Q3, Q4, First Half, 1st 3 Quarters, FY Cml
    // I forgot that this is based off the consolidated sales data which has fixed names, error is occurring because
    // I am not accessing the correct key
    let toReturnNetSales = new Map<number, string[]>([
        [0, [liner(printTextBlock(salesType, 36), "−", "top", "newLine") + sectionHeader(list.get(finalName)?.name, 35)]],
        [1, [liner(printTextBlock(salesType, 36), "−", "top", "newLine") + sectionHeader(list.get(finalName)?.name, 35)]],
        [2, [liner(printTextBlock(salesType, 36), "−", "top", "newLine") + sectionHeader(list.get(finalName)?.name, 35)]],
        [3, [liner(printTextBlock(salesType, 36), "−", "top", "newLine") + sectionHeader(list.get(finalName)?.name, 35)]],
        [4, [liner(printTextBlock(salesType, 35), "−", "top", "newLine") + sectionHeader(list.get(finalName)?.name, 34)]],
        [5, [liner(printTextBlock(salesType, 45), "−", "top", "newLine") + sectionHeader(list.get(finalName)?.name, 44)]],
        [6, [liner(printTextBlock(salesType, 38), "−", "top", "newLine") + sectionHeader(list.get(finalName)?.name, 37)]],
    ]); 

    // to do statistics calculations
    let getValuesNetSales = new Map<number, number[]>([
        [0, []],
        [1, []],
        [2, []],
        [3, []],
        [4, []],
        [5, []],
        [6, []],
    ])

    // Q1, Q2, Q3, Q4, First Half, 1st 3 Quarters, FY Cml
    let toReturnOperatingIncome = new Map<number, string[]>([
        [0, [liner(printTextBlock(profitType, 36), "−", "top", "newLine") + sectionHeader(list.get(finalName)?.name, 35)]],
        [1, [liner(printTextBlock(profitType, 36), "−", "top", "newLine") + sectionHeader(list.get(finalName)?.name, 35)]],
        [2, [liner(printTextBlock(profitType, 36), "−", "top", "newLine") + sectionHeader(list.get(finalName)?.name, 35)]],
        [3, [liner(printTextBlock(profitType, 36), "−", "top", "newLine") + sectionHeader(list.get(finalName)?.name, 35)]],
        [4, [liner(printTextBlock(profitType, 35), "−", "top", "newLine") + sectionHeader(list.get(finalName)?.name, 34)]],
        [5, [liner(printTextBlock(profitType, 45), "−", "top", "newLine") + sectionHeader(list.get(finalName)?.name, 44)]],
        [6, [liner(printTextBlock(profitType, 38), "−", "top", "newLine") + sectionHeader(list.get(finalName)?.name, 37)]],
    ]); 

    // to do statistics calculations
    let getValuesOperatingIncome = new Map<number, number[]>([
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
        // console.log(value); // an undefined value slipped through
        
        // needed to cover the beginning of a new FY and the end FY
        let thisFY = (value.Q4CmlValue.netSales.kind === "Cumulative") 
            ? value.Q4CmlValue.netSales.thisFY
            : (value.Q1CmlValue.netSales.kind === "Cumulative")
                ? value.Q1CmlValue.netSales.thisFY
                : (value.Q4CmlValue.operatingIncome.kind === "Cumulative")
                    ? value.Q4CmlValue.operatingIncome.thisFY
                    : "Error: thisFY did not get year from Q4 or Q1 CmlValue because it is not there.";
        // toReturn.set(0, (toReturn.get(0) ?? "") + valueMake(value.Q1QtrValue))
        toReturnNetSales.set(0, (toReturnNetSales.get(0) ?? []).concat(valueMake(value.Q1QtrValue.netSales, thisFY)))
        toReturnNetSales.set(1, (toReturnNetSales.get(1) ?? []).concat(valueMake(value.Q2QtrValue.netSales, thisFY)))
        toReturnNetSales.set(2, (toReturnNetSales.get(2) ?? []).concat(valueMake(value.Q3QtrValue.netSales, thisFY)))
        toReturnNetSales.set(3, (toReturnNetSales.get(3) ?? []).concat(valueMake(value.Q4QtrValue.netSales, thisFY)))
        toReturnNetSales.set(4, (toReturnNetSales.get(4) ?? []).concat(valueMake(value.Q2CmlValue.netSales, thisFY)))
        toReturnNetSales.set(5, (toReturnNetSales.get(5) ?? []).concat(valueMake(value.Q3CmlValue.netSales, thisFY)))
        toReturnNetSales.set(6, (toReturnNetSales.get(6) ?? []).concat(valueMake(value.Q4CmlValue.netSales, thisFY)))

        getValuesNetSales.set(0, (getValuesNetSales.get(0) ?? []).concat(value.Q1QtrValue.netSales.kind === "Quarter" ? value.Q1QtrValue.netSales.value : []))
        getValuesNetSales.set(1, (getValuesNetSales.get(1) ?? []).concat(value.Q2QtrValue.netSales.kind === "Quarter" ? value.Q2QtrValue.netSales.value : []))
        getValuesNetSales.set(2, (getValuesNetSales.get(2) ?? []).concat(value.Q3QtrValue.netSales.kind === "Quarter" ? value.Q3QtrValue.netSales.value : []))
        getValuesNetSales.set(3, (getValuesNetSales.get(3) ?? []).concat(value.Q4QtrValue.netSales.kind === "Quarter" ? value.Q4QtrValue.netSales.value : []))
        getValuesNetSales.set(4, (getValuesNetSales.get(4) ?? []).concat(value.Q2CmlValue.netSales.kind === "Cumulative" ? value.Q2CmlValue.netSales.value : []))
        getValuesNetSales.set(5, (getValuesNetSales.get(5) ?? []).concat(value.Q3CmlValue.netSales.kind === "Cumulative" ? value.Q3CmlValue.netSales.value : []))
        getValuesNetSales.set(6, (getValuesNetSales.get(6) ?? []).concat(value.Q4CmlValue.netSales.kind === "Cumulative" ? value.Q4CmlValue.netSales.value : []))

        toReturnOperatingIncome.set(0, (toReturnOperatingIncome.get(0) ?? []).concat(valueMake(value.Q1QtrValue.operatingIncome, thisFY)))
        toReturnOperatingIncome.set(1, (toReturnOperatingIncome.get(1) ?? []).concat(valueMake(value.Q2QtrValue.operatingIncome, thisFY)))
        toReturnOperatingIncome.set(2, (toReturnOperatingIncome.get(2) ?? []).concat(valueMake(value.Q3QtrValue.operatingIncome, thisFY)))
        toReturnOperatingIncome.set(3, (toReturnOperatingIncome.get(3) ?? []).concat(valueMake(value.Q4QtrValue.operatingIncome, thisFY)))
        toReturnOperatingIncome.set(4, (toReturnOperatingIncome.get(4) ?? []).concat(valueMake(value.Q2CmlValue.operatingIncome, thisFY)))
        toReturnOperatingIncome.set(5, (toReturnOperatingIncome.get(5) ?? []).concat(valueMake(value.Q3CmlValue.operatingIncome, thisFY)))
        toReturnOperatingIncome.set(6, (toReturnOperatingIncome.get(6) ?? []).concat(valueMake(value.Q4CmlValue.operatingIncome, thisFY)))

        getValuesOperatingIncome.set(0, (getValuesOperatingIncome.get(0) ?? []).concat(value.Q1QtrValue.operatingIncome.kind === "Quarter" ? value.Q1QtrValue.operatingIncome.value : []))
        getValuesOperatingIncome.set(1, (getValuesOperatingIncome.get(1) ?? []).concat(value.Q2QtrValue.operatingIncome.kind === "Quarter" ? value.Q2QtrValue.operatingIncome.value : []))
        getValuesOperatingIncome.set(2, (getValuesOperatingIncome.get(2) ?? []).concat(value.Q3QtrValue.operatingIncome.kind === "Quarter" ? value.Q3QtrValue.operatingIncome.value : []))
        getValuesOperatingIncome.set(3, (getValuesOperatingIncome.get(3) ?? []).concat(value.Q4QtrValue.operatingIncome.kind === "Quarter" ? value.Q4QtrValue.operatingIncome.value : []))
        getValuesOperatingIncome.set(4, (getValuesOperatingIncome.get(4) ?? []).concat(value.Q2CmlValue.operatingIncome.kind === "Cumulative" ? value.Q2CmlValue.operatingIncome.value : []))
        getValuesOperatingIncome.set(5, (getValuesOperatingIncome.get(5) ?? []).concat(value.Q3CmlValue.operatingIncome.kind === "Cumulative" ? value.Q3CmlValue.operatingIncome.value : []))
        getValuesOperatingIncome.set(6, (getValuesOperatingIncome.get(6) ?? []).concat(value.Q4CmlValue.operatingIncome.kind === "Cumulative" ? value.Q4CmlValue.operatingIncome.value : []))
    })

    toReturnNetSales.forEach((value, key, map) => {

        let getTextLength = (offset: number) => (map.get(key)?.at(-2)?.length === undefined)
            ? 0
            : (map.get(key)?.at(-2)?.length as number) - offset 
        
        let getLength = getValuesNetSales.get(key)?.length ?? 0; // you cannot put an optional chain with nullish operator inside an if condition. you have to store the result in a variable first and then put the variable in an if condition. 
            
        if (getLength > 1) {
            map.set(key, (toReturnNetSales.get(key) ?? []).concat(
                printStats(
                    printCount(getValuesNetSales.get(key) ?? [0], getTextLength(21),15,true).concat(
                        printSum(getValuesNetSales.get(key) ?? [0], getTextLength(21),15,"Million","¥",0,true),
                        printAverage(getValuesNetSales.get(key) ?? [0], getTextLength(21), 15,"Million","¥",0,true),
                        printMedian(getValuesNetSales.get(key) ?? [0], getTextLength(21), 15,"Million","¥",0,true),
                        printMininum(getValuesNetSales.get(key) ?? [0], getTextLength(21), 15,"Million","¥",true),
                        printMaximum(getValuesNetSales.get(key) ?? [0], getTextLength(21), 15,"Million","¥",true),
                    )
                , getTextLength(3) ?? 0),
            ))
        }
    })

    toReturnOperatingIncome.forEach((value, key, map) => {

        let getTextLength = (offset: number) => (map.get(key)?.at(-2)?.length === undefined)
            ? 0
            : (map.get(key)?.at(-2)?.length as number) - offset 
        
        let getLength = getValuesOperatingIncome.get(key)?.length ?? 0; // you cannot put an optional chain with nullish operator inside an if condition. you have to store the result in a variable first and then put the variable in an if condition. 
            
        if (getLength > 1) {
            map.set(key, (toReturnOperatingIncome.get(key) ?? []).concat(
                printStats(
                    printCount(getValuesOperatingIncome.get(key) ?? [0], getTextLength(21),15,true).concat(
                        printSum(getValuesOperatingIncome.get(key) ?? [0], getTextLength(21),15,"Million","¥",0,true),
                        printAverage(getValuesOperatingIncome.get(key) ?? [0], getTextLength(21), 15,"Million","¥",0,true),
                        printMedian(getValuesOperatingIncome.get(key) ?? [0], getTextLength(21), 15,"Million","¥",0,true),
                        printMininum(getValuesOperatingIncome.get(key) ?? [0], getTextLength(21), 15,"Million","¥",true),
                        printMaximum(getValuesOperatingIncome.get(key) ?? [0], getTextLength(21), 15,"Million","¥",true),
                    )
                , getTextLength(3) ?? 0),
            ))
        }
    })

    return [
        getConcat(toReturnNetSales.get(0)) + getConcat(toReturnOperatingIncome.get(0)),
        getConcat(toReturnNetSales.get(1)) + getConcat(toReturnOperatingIncome.get(1)),
        getConcat(toReturnNetSales.get(2)) + getConcat(toReturnOperatingIncome.get(2)),
        getConcat(toReturnNetSales.get(3)) + getConcat(toReturnOperatingIncome.get(3)),
        getConcat(toReturnNetSales.get(4)) + getConcat(toReturnOperatingIncome.get(4)),
        getConcat(toReturnNetSales.get(5)) + getConcat(toReturnOperatingIncome.get(5)),
        getConcat(toReturnNetSales.get(6)) + getConcat(toReturnOperatingIncome.get(6)),
    ]
    
}

// export const cumulativeSegmentListBandaiNamco = segmentResultsMaker(collectionBandaiNamcoCml); 

// export const cumulativeSegmentListKonami = segmentResultsMaker(collectionKonamiCml); 

export const cumulativeSegmentListCyberAgent = segmentResultsMaker(collectionCyberAgentCml); 

// export const cumulativeSegmentListKadokawa = segmentResultsMaker(collectionKadokawaCml); 
