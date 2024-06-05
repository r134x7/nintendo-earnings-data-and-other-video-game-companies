import {
    Header,
    EarningsV2,
    forecastOutput,
    operatingMarginCalculationV2,
    printForecastValuesV2,
    printQuarterValuesV2,
    printCumulativeValuesV2,
    printReduceSection,
    printYoYV2,
    qtrOrCmlOutput,
    quarterlyCalculationV2,
    yearOnYearCalculationV2,
    EarningsValue,
    printValuePrimitive,
    numberType
} from "../../utils/general_earnings_logic";

import { nothingCheck, typeReturn } from "./consolidated_earnings_general";

import { headerPrint, dateLabel, liner, border, spacer, globImport, printTextBlock } from "../../utils/table_design_logic";

import { SegmentJSON, SegmentData, SegmentValue, getSegmentData, segmentValuesMake } from "./segment_earnings_general";

const collectionBandaiNamcoCml = globImport(new Map<number, SegmentJSON>(), import.meta.glob("../bandaiNamco/Segment_Earnings/*.json", { import: "default", eager: true }), "Ascending");

export const bandaiNamcoSegmentEarningsList = new Map<number, string>();

collectionBandaiNamcoCml.forEach((value, key, map) => {

    bandaiNamcoSegmentEarningsList.set(key, segmentListMap(value, map.get(key+1), 38))
})

function labelMaker (collection: SegmentJSON): string {

    // const makeDateLabel = dateLabel(collection.at(-1)?.fiscalYear ?? "N/A", collection.at(-1)?.currentQuarter ?? 4);
    const makeDateLabel = dateLabel(collection?.fiscalYear ?? "N/A", collection?.currentQuarter ?? 4);

    return liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "bottom",true)
}

function headerMaker(collection: SegmentJSON): string {

    let subHeader = "Segment Information";

    let headerMake = liner(border([
        spacer(collection.companyName, collection.companyName.length+1, "left")
        ]),"−","top",true) +
        liner(border([
            spacer(subHeader, subHeader.length+2, "left")
        ]), "−", "both",true)

    return headerMake
}

// collectionBandaiNamco.clear();

function segmentResultsMaker(completeCollection: Map<number, SegmentJSON>): string[] {

    const makeData = new Map<number, SegmentValue[]>();
    completeCollection.forEach((value, key, map) => makeData.set(key, [...getSegmentData(value, value.data.length).values()]))

    const segmentCount = makeData.get(makeData.size-1)?.length;

    // each loop is a year
    // 13 pieces of data
    // have to sort the total pieces of data correctly...
    // make data key is year, next map is for category...

    const segmentList = Array.from({length: segmentCount ?? 0}, (v,i) => new Map<number, SegmentValue>())

    makeData.forEach((value, key, map) => {
        // netSales.set(key, value[0])
        // operatingIncome.set(key, value[1])
        // netIncome.set(key, value[2])

        for (let index = 0; index < value.length; index++) {
           segmentList[index].set(key, value[index]); 
        }
    })

    console.log(segmentList)

    let titleHeader = headerMaker(completeCollection.get(completeCollection.size -1) as SegmentJSON)

    let dateHeader = labelMaker(completeCollection.get(completeCollection.size -1) as SegmentJSON)

    let completeHeader = titleHeader + dateHeader;

    let printSegments = segmentList.map(elem => printAllValues(elem))

    console.log(printSegments)
    
    // let get1 = printAllValues(netSales).map(elem => completeHeader + elem);

    // let get2 = printAllValues(operatingIncome);

    // let get3 = printAllValues(netIncome);

    // let combine = get1.map((elem, index) => elem + get2[index] + get3[index])

    return ["test"]
}

function printAllValues(list: Map<number, SegmentValue>): string[] {

    function sectionHeader(name: string | undefined, textLength: number): string {
        return liner(border([
        spacer(name ?? "Error", textLength,"left"),
    ]),"−","both",true)
    } 

    // have to repeat toReturn and getValues for netSales and operatingIncome

    // Q1, Q2, Q3, Q4, First Half, 1st 3 Quarters, FY Cml
    let toReturn = new Map<number, string[]>([
        [0, [sectionHeader(list.get(0)?.name, 35)]],
        [1, [sectionHeader(list.get(0)?.name, 35)]],
        [2, [sectionHeader(list.get(0)?.name, 35)]],
        [3, [sectionHeader(list.get(0)?.name, 35)]],
        [4, [sectionHeader(list.get(0)?.name, 34)]],
        [5, [sectionHeader(list.get(0)?.name, 44)]],
        [6, [sectionHeader(list.get(0)?.name, 37)]],
    ]); 

    // to do statistics calculations
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

// let dataSourceNintendo = "Source: https://www.nintendo.co.jp/ir/en/finance/historical_data/index.html"

export const cumulativeSegmentListBandaiNamco = segmentResultsMaker(collectionBandaiNamcoCml); 

// export const cumulativeSegmentListCapcom = operatingResultsMakerV2(totalCollectionCapcom); 

// export const cumulativeSegmentListKoeiTecmo = operatingResultsMakerV2(totalCollectionKoeiTecmo); 

// export const cumulativeSegmentListSegaSammy = operatingResultsMakerV2(totalCollectionSegaSammy);

// export const cumulativeSegmentListSquareEnix = operatingResultsMakerV2(totalCollectionSquareEnix)


function segmentListMap(collection: SegmentJSON, lastFYCollection: SegmentJSON | undefined, headerLength: number): string {

        const currentQuarter = collection.currentQuarter;

        const makeDateLabel = dateLabel(collection?.fiscalYear ?? "N/A", collection?.currentQuarter ?? 4);

        const none: EarningsValue = { kind:"Nothing" };

        const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

        const header: Header = {
            companyName: collection.companyName,
            fiscalYear: collection.fiscalYear,
            title: "Segment Information",
        };

        const salesType = (header.companyName.includes("Something"))
            ? "Revenue"
            : (header.companyName.includes("Else"))
             ? "Sales"
             : "Net Sales"

        const dataThisFY = getSegmentData(collection, collection.data.length);

        const dataLastFY = getSegmentData(lastFYCollection, collection.data.length);

        const percentagesThisFY = new Map<number, SegmentValue>(); 
        dataThisFY.forEach((value, key, map) => {
            percentagesThisFY.set(key, {
                ...value,
                Q1QtrValue: {
                    netSales: yearOnYearCalculationV2(value.Q1QtrValue.netSales, dataLastFY.get(key)?.Q1QtrValue?.netSales ?? none, "Quarter"),
                    operatingIncome: yearOnYearCalculationV2(value.Q1QtrValue.operatingIncome, dataLastFY.get(key)?.Q1QtrValue.operatingIncome ?? none, "Quarter"),
                    operatingMargin: none,
                },
                Q2QtrValue: {
                    netSales: yearOnYearCalculationV2(value.Q2QtrValue.netSales, dataLastFY.get(key)?.Q2QtrValue.netSales ?? none, "Quarter"),
                    operatingIncome: yearOnYearCalculationV2(value.Q2QtrValue.operatingIncome, dataLastFY.get(key)?.Q2QtrValue.operatingIncome ?? none, "Quarter"),
                    operatingMargin: none,
                },
                Q3QtrValue: {
                    netSales: yearOnYearCalculationV2(value.Q3QtrValue.netSales, dataLastFY.get(key)?.Q3QtrValue.netSales ?? none, "Quarter"),
                    operatingIncome: yearOnYearCalculationV2(value.Q3QtrValue.operatingIncome, dataLastFY.get(key)?.Q3QtrValue.operatingIncome ?? none, "Quarter"),
                    operatingMargin: none,
                }, 
                Q4QtrValue: {
                    netSales: yearOnYearCalculationV2(value.Q4QtrValue.netSales, dataLastFY.get(key)?.Q4QtrValue.netSales ?? none, "Quarter"),
                    operatingIncome: yearOnYearCalculationV2(value.Q4QtrValue.operatingIncome, dataLastFY.get(key)?.Q4QtrValue.operatingIncome ?? none, "Quarter"),
                    operatingMargin: none,
                },
                Q1CmlValue: {
                    netSales: yearOnYearCalculationV2(value.Q1CmlValue.netSales, dataLastFY.get(key)?.Q1CmlValue.netSales ?? none, "Cumulative"),
                    operatingIncome: yearOnYearCalculationV2(value.Q1CmlValue.operatingIncome, dataLastFY.get(key)?.Q1CmlValue.operatingIncome ?? none, "Cumulative"),
                    operatingMargin: none,
                },
                Q2CmlValue: {
                    netSales: yearOnYearCalculationV2(value.Q2CmlValue.netSales, dataLastFY.get(key)?.Q2CmlValue.netSales ?? none, "Cumulative"),
                    operatingIncome: yearOnYearCalculationV2(value.Q2CmlValue.operatingIncome, dataLastFY.get(key)?.Q2CmlValue.operatingIncome ?? none, "Cumulative"),
                    operatingMargin: none,
                },
                Q3CmlValue: {
                    netSales: yearOnYearCalculationV2(value.Q3CmlValue.netSales, dataLastFY.get(key)?.Q3CmlValue.netSales ?? none, "Cumulative"),
                    operatingIncome: yearOnYearCalculationV2(value.Q3CmlValue.operatingIncome, dataLastFY.get(key)?.Q3CmlValue.operatingIncome ?? none, "Cumulative"),
                    operatingMargin: none,
                },
                Q4CmlValue: {
                    netSales: yearOnYearCalculationV2(value.Q4CmlValue.netSales, dataLastFY.get(key)?.Q4CmlValue.netSales ?? none, "Cumulative"),
                    operatingIncome: yearOnYearCalculationV2(value.Q4CmlValue.operatingIncome, dataLastFY.get(key)?.Q4CmlValue.operatingIncome ?? none, "Cumulative"),
                    operatingMargin: none,
                },
                forecastThisFY: {
                    netSales: yearOnYearCalculationV2(value.forecastThisFY?.netSales ?? none, dataLastFY.get(key)?.forecastThisFY?.netSales ?? none, "Forecast"),
                    operatingIncome: yearOnYearCalculationV2(value.forecastThisFY?.operatingIncome ?? none, dataLastFY.get(key)?.forecastThisFY?.operatingIncome ?? none, "Forecast"),
                    operatingMargin: none,
                },
                forecastRevision1: {
                    netSales: yearOnYearCalculationV2(value.forecastRevision1?.netSales ?? none, dataLastFY.get(key)?.forecastRevision1?.netSales ?? none, "Forecast"),
                    operatingIncome: yearOnYearCalculationV2(value.forecastRevision1?.operatingIncome ?? none, dataLastFY.get(key)?.forecastRevision1?.operatingIncome ?? none, "Forecast"),
                    operatingMargin: none,
                },
                forecastRevision2: {
                    netSales: yearOnYearCalculationV2(value.forecastRevision2?.netSales ?? none, dataLastFY.get(key)?.forecastRevision2?.netSales ?? none, "Forecast"),
                    operatingIncome: yearOnYearCalculationV2(value.forecastRevision2?.operatingIncome ?? none, dataLastFY.get(key)?.forecastRevision2?.operatingIncome ?? none, "Forecast"),
                    operatingMargin: none,
                },
                forecastRevision3: {
                    netSales: yearOnYearCalculationV2(value.forecastRevision3?.netSales ?? none, dataLastFY.get(key)?.forecastRevision3?.netSales?? none, "Forecast"),
                    operatingIncome: yearOnYearCalculationV2(value.forecastRevision3?.netSales ?? none, dataLastFY.get(key)?.forecastRevision3?.operatingIncome ?? none, "Forecast"),
                    operatingMargin: none,
                },
                forecastNextFY: {
                    netSales: yearOnYearCalculationV2(value.forecastNextFY?.netSales ?? none, dataLastFY.get(key)?.forecastNextFY?.netSales ?? none, "Forecast"),
                    operatingIncome: yearOnYearCalculationV2(value.forecastNextFY?.operatingIncome ?? none, dataLastFY.get(key)?.forecastNextFY?.operatingIncome ?? none, "Forecast"),
                    operatingMargin: none,
                } 
            } //satisfies SegmentValue 
            )
        });

        const printOne = headerPrint([
            header.companyName + " | " + header.fiscalYear,
            header.title
        ],headerLength) + "\n" + printDateLabel;

        const printEach = new Map<number, string>();

        // printEach.forEach((value, key, map) => {
        dataThisFY.forEach((value, key, map) => {

            // if (key === 2) {

            //     map.set(key, getPrintOpMarginOutput(opMargin, 0, false, currentQuarter))

            // } else if (key > 2) {

            //     map.set(key, getPrintOutput(dataThisFY, percentagesThisFY, key-1, true, currentQuarter))

            // } else {

            printEach.set(key, getSegmentPrintOutput(dataThisFY, percentagesThisFY, key, true, currentQuarter, "netSales", salesType)
            + getSegmentPrintOutput(dataThisFY, percentagesThisFY, key, true, currentQuarter, "operatingIncome") 
            + getSegmentPrintOutput(dataThisFY, percentagesThisFY, key, false, currentQuarter, "operatingMargin")
            )
            // }
        })

        return [printOne, ...printEach.values()].reduce((acc, next) => acc + "\n" + next)
};

function printSegmentHeader (value: EarningsV2 | SegmentValue, useYoY: boolean): string {

    let yoyHeader = spacer("YoY% |",12,"right");

    return (!useYoY)
        ? liner(printTextBlock(value.name,28),"−","both",true, 28)
        : liner(printTextBlock(value.name,28) + yoyHeader,"−","both",true,40) 
}

function getSegmentPrintOutput(values: Map<number, SegmentValue>, yoyValues: Map<number, SegmentValue>, key: number, useYoYHeader: boolean, currentQuarter: number, salesKey: "netSales" | "operatingIncome" | "operatingMargin", salesTitle?: string): string {

    const none: EarningsValue = { kind:"Nothing" };

    let salesType = liner(printTextBlock((salesKey === "netSales")
        ? salesTitle
        : (salesKey === "operatingIncome")
            ? "Operating Income"
            : "Operating Margin"
    , (useYoYHeader) ? 40 : 28), "−", "top", "newLine")

    // let sectionHeader = printSegmentHeader(values.get(key) as SegmentValue, useYoYHeader);
    let sectionHeader = salesType + printSegmentHeader(values.get(key) as SegmentValue, useYoYHeader);

    let quarters = [
        values.get(key)?.Q1QtrValue[salesKey] ?? none,
        values.get(key)?.Q2QtrValue[salesKey] ?? none,
        values.get(key)?.Q3QtrValue[salesKey] ?? none,
        values.get(key)?.Q4QtrValue[salesKey] ?? none,
    ].map(elem => printQuarterValuesV2(elem, currentQuarter, 13)); 

    let quarterPercentages = [
        yoyValues.get(key)?.Q1QtrValue[salesKey] ?? none,
        yoyValues.get(key)?.Q2QtrValue[salesKey] ?? none,
        yoyValues.get(key)?.Q3QtrValue[salesKey] ?? none,
        yoyValues.get(key)?.Q4QtrValue[salesKey] ?? none, 
    ].map(elem => printYoYV2(elem, currentQuarter, 12)); 

    let cumulatives = [
        values.get(key)?.Q2CmlValue[salesKey] ?? none,
        values.get(key)?.Q3CmlValue[salesKey] ?? none,
        values.get(key)?.Q4CmlValue[salesKey] ?? none,
    ].map(elem => printCumulativeValuesV2(elem, currentQuarter, 13)); 

    let cumulativePercentages = [
        yoyValues.get(key)?.Q2CmlValue[salesKey] ?? none,
        yoyValues.get(key)?.Q3CmlValue[salesKey] ?? none,
        yoyValues.get(key)?.Q4CmlValue[salesKey] ?? none,
    ].map(elem => printYoYV2(elem, currentQuarter, 12));

    let forecasts = [
        values.get(key)?.forecastThisFY?.[salesKey] ?? none,
        values.get(key)?.forecastRevision1?.[salesKey] ?? none,
        values.get(key)?.forecastRevision2?.[salesKey] ?? none,
        values.get(key)?.forecastRevision3?.[salesKey] ?? none,
        values.get(key)?.forecastNextFY?.[salesKey] ?? none,
    ].map(elem => printForecastValuesV2(elem, 13)); 

    return printReduceSection(
        sectionHeader,
        qtrOrCmlOutput(quarters,quarterPercentages,false),
        qtrOrCmlOutput(cumulatives,cumulativePercentages,false),
        forecastOutput(forecasts),
    ) + "\n"
}
