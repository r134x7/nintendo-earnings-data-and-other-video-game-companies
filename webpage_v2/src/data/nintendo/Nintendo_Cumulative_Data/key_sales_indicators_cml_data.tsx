import { keySalesIndicatorsListCml } from "../key_sales_indicators_nintendo";

import { dateLabel, liner, spacer, border, borderV2 } from "../../../utils/table_design_logic";

import {
    Header,
    Footer,
    KPDIndicators,
    quarterlyCalculation,
    yearOnYearCalculation,
    printNewBody,
} from "../../../utils/kpi_logic";

type KeySalesIndicatorOutput = {
    header: Header,
    footer: Footer,
    quarterValuesProportion: KPDIndicators[],
    cumulativeValuesProportion: KPDIndicators[],
    quarterValuesSales: KPDIndicators[],
    cumulativeValuesSales: KPDIndicators[],
    // quarterYoY: KPDIndicators[],
    // cumulativeYoY: KPDIndicators[],
    currentQuarter: number,
    title: string,
}

type KeySalesIndicatorValues = {
    header: Header,
    footer: Footer,
    proportion: KPDIndicators,
    sales: KPDIndicators,
    currentQuarter: number,
    title: string,
}

const makeDateLabel = dateLabel(keySalesIndicatorsListCml[0].at(-1)?.header.fiscalYear ?? "N/A", keySalesIndicatorsListCml[0].at(-1)?.currentQuarter ?? 4);

const printTitle = liner(border([spacer("Nintendo Co., Ltd.", 25, "left")]), "−", "top", "newLine") + liner(border([spacer("Key Sales Indicators", 25, "left")]), "−", "top", "newLine")

const combinedTitle = printTitle + liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]), "−", "both", "newLine") + "\n";
// export const getLengthLatestData = keySalesIndicatorsListCml[0].length; // assuming its the longest length
const getLengthLatestData = keySalesIndicatorsListCml[0].map((elem) => elem.quarterValuesProportion[0].ID).filter((elem) => elem !== "4");; // assuming its the longest length and, removed digital sales as it is already given in proportion of digital sales


// export const x = console.log(keySalesIndicatorsListCml.length);
// export const x = keySalesIndicatorsListCml.map((elem, index, array) => elem[0]).reverse();

// need to add ID to each data because I need to categorise everything first before reversing the years as some data is occurring in the wrong

const ascendingList = keySalesIndicatorsListCml.reverse(); // careful, reverse isn't making a copy so it's referencing the same memory...

// console.log(ascendingList)

const sortCategories = new Map<string, KeySalesIndicatorOutput[]>();

for (let index = 0; index < getLengthLatestData.length; index++) {
    
    sortCategories.set(getLengthLatestData[index], []);
}

// console.log(ascendingList.length)
// console.log(sortCategories.size)
// console.log(getLengthLatestData)
// data now sorted by category
sortCategories.forEach((value, key, map) => {

    // yMap.set(key, (yMap.get(key) ?? []).concat(value))
    for (let index = 0; index < ascendingList.length /*sortCategories.size*/; index++) {
        
        let x = ascendingList[index].filter((elem) => elem.quarterValuesProportion[0].ID === key)
        // sortCategories.set(key, (sortCategories.get(key) ?? []).concat(ascendingList[index][key]))
        sortCategories.set(key, (sortCategories.get(key) ?? []).concat(x))
    }
    // yMap.set(key, (yMap.get(key) ?? []).concat(ascendingList[key][key]))
})

// console.log(sortCategories)
//data sorted by period, each index will contain all the data for one period of one category
const sortPeriod = new Map<number, KeySalesIndicatorValues[]>([
    [0, []],
    [1, []],
    [2, []],
    [3, []],
    [4, []],
    [5, []],
    [6, []],
])

function periodSetter(data: KeySalesIndicatorOutput[], quarter: "None" | "1" | "2" | "3" | "4", cumulative: "None" | "first half" | "1st 3 Quarters" | "FY Cumulative"): KeySalesIndicatorValues[] {

    if (quarter === "None" && cumulative === "None") {
        return [{
            currentQuarter: 0,
            footer: {section: "None"},
            header: {companyName: "None", fiscalYear: "None", section: "None", title: "None"},
            title: "None",
            proportion: {category: "cumulative", ID: "N/A", name: "None", quarter: "0", units: "NaN", value: 0},
            sales: {category: "cumulative", ID: "N/A", name: "None", quarter: "0", units:"NaN", value: 0},
        }]
    }

    if (Number.isNaN(Number(quarter)) === false) {

        let getIndex = (quarter === "1")
            ? 0
            : (quarter === "2")
                ? 1
                : (quarter === "3")
                    ? 2
                    : 3


        let q1: KeySalesIndicatorValues[] = data.map((elem, index, array) => {
            return {
                currentQuarter: elem.currentQuarter,
                footer: elem.footer,
                header: elem.header,
                title: elem.title,
                proportion: elem.quarterValuesProportion[getIndex],
                sales: elem.quarterValuesSales[getIndex],
            }
        })

        return q1
    } else //if (cumulative !== "None") 
        {

        let period = (cumulative === "first half")
            ? 0
            : (cumulative === "1st 3 Quarters")
                ? 1
                : 2

        let c1: KeySalesIndicatorValues[] = data.map((elem, index, array) => {
            return {
                currentQuarter: elem.currentQuarter,
                footer: elem.footer,
                header: elem.header,
                title: elem.title,
                proportion: elem.cumulativeValuesProportion[period],
                sales: elem.cumulativeValuesSales[period],
            }
        })

        return c1
    }

}

// loops through each year
sortCategories.forEach((v, k, m) => {

        let setFilter = sortCategories.get(k) as KeySalesIndicatorOutput[];

        sortPeriod.set(0, (sortPeriod.get(0) ?? []).concat( periodSetter(setFilter, "1", "None")))
        // sortPeriod.set(0, (sortPeriod.get(0) ?? []).concat(sortCategories.get()))
        sortPeriod.set(1, (sortPeriod.get(1) ?? []).concat( periodSetter(setFilter, "2", "None")))
        sortPeriod.set(2, (sortPeriod.get(2) ?? []).concat( periodSetter(setFilter, "3", "None")))
        sortPeriod.set(3, (sortPeriod.get(3) ?? []).concat( periodSetter(setFilter, "4", "None")))
        sortPeriod.set(4, (sortPeriod.get(4) ?? []).concat( periodSetter(setFilter, "None", "first half")))
        sortPeriod.set(5, (sortPeriod.get(5) ?? []).concat( periodSetter(setFilter, "None", "1st 3 Quarters")))
        sortPeriod.set(6, (sortPeriod.get(6) ?? []).concat( periodSetter(setFilter, "None", "FY Cumulative")))
})
// })

const combineCategories = new Map<number, KeySalesIndicatorValues[][]>();
// now to concat the categories again
sortPeriod.forEach((value, key, map) => {

    let toFilter = Array.from({length: getLengthLatestData.length}, (v,i) => {

        let getValues = sortPeriod.get(key) as KeySalesIndicatorValues[];

        return getValues.filter((elem) => elem.proportion.ID === getLengthLatestData[i])
    }) 

    combineCategories.set(key, toFilter)
})

function printAllValues(list: Map<number, KeySalesIndicatorValues[][]>): string[] {

    function sectionHeader(name: string | undefined, textLength: number): string {
        return liner(border([
        spacer(name ?? "Error", textLength,"left"),
    ]),"−","both",true)
    } 

    // Q1, Q2, Q3, Q4, First Half, 1st 3 Quarters, FY Cml
    let toReturn = new Map<number, string>([
        [0, ""],
        [1, ""],
        [2, ""],
        [3, ""],
        [4, ""],
        [5, ""],
        [6, ""],
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

    function valueMake(value: KPDIndicators, fiscalYear: string, type: "%" | "¥"): string {
        
        return (type === "¥")
            ? //border([
                // spacer(fiscalYear.slice(0, -4) + value.quarter,(10+value.quarter.length),"left"),
                borderV2([
                    spacer(`¥${value.value.toLocaleString("en")}M`,12,"right")
                ], "right", "noNewLine")
             //],true) 
            : border([
                spacer(fiscalYear/*.slice(0, -4)*/ + " " + (value.quarter.includes("Cml.") ? "FY Cumulative" : value.quarter),(10+value.quarter.length),"left"),
                spacer(`${value.value}%`,8,"right")
             ], undefined)
    }

    list.forEach((value, key, map) => {

        // need to get the header and then the data
        // each loop is a quarter/period
        
        let x = value.map((elem, index, array) => elem.map((elem2, index2, array2) => {

            // array2 is retrieving the newest title header for sectionHeader
            if (index2 === 0) {
                return sectionHeader(array2[array2.length-1].proportion.name, 47) + valueMake(elem2.proportion, elem2.header.fiscalYear, "%") + (valueMake(elem2.sales, elem2.header.fiscalYear, "¥")) + "\n"
            } else if (index2 === array2.length-1) {
                
                let checkFootnote = (elem2.footer.section)

                // return liner(valueMake(elem2.proportion, elem2.header.fiscalYear, "%") + (valueMake(elem2.sales, elem2.header.fiscalYear, "¥")), "−", "bottom", "noNewLine") + checkFootnote

                return valueMake(elem2.proportion, elem2.header.fiscalYear, "%") + (valueMake(elem2.sales, elem2.header.fiscalYear, "¥")) + "\n" + checkFootnote
            } else {
                return valueMake(elem2.proportion, elem2.header.fiscalYear, "%") + (valueMake(elem2.sales, elem2.header.fiscalYear, "¥")) + "\n"
            }

        }).reduce((acc, next) => acc + next))

        // console.log(x)
        toReturn.set(key, x.reduce((acc, next) => acc + "\n" + next))

    })

    let toReturnValues = [...toReturn.values()]

        return [
            combinedTitle + toReturnValues[0],
            combinedTitle + toReturnValues[1],
            combinedTitle + toReturnValues[2],
            combinedTitle + toReturnValues[3],
            combinedTitle + toReturnValues[4],
            combinedTitle + toReturnValues[5],
            combinedTitle + toReturnValues[6],
            // toReturn.get(0),
            // toReturn.get(1),
            // toReturn.get(2),
            // toReturn.get(3),
            // toReturn.get(4),
            // toReturn.get(5),
            // toReturn.get(6),
        ]
}


export const keySalesIndicatorsCml = printAllValues(combineCategories);

sortCategories.clear();
sortPeriod.clear();
// combineCategories.clear();