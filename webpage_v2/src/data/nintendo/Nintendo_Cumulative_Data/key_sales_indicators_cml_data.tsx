import { keySalesIndicatorsListCml } from "../key_sales_indicators_nintendo";

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

// export const getLengthLatestData = keySalesIndicatorsListCml[0].length; // assuming its the longest length
const getLengthLatestData = keySalesIndicatorsListCml[0].map((elem) => elem.quarterValuesProportion[0].ID); // assuming its the longest length

// export const x = console.log(keySalesIndicatorsListCml.length);
// export const x = keySalesIndicatorsListCml.map((elem, index, array) => elem[0]).reverse();

// need to add ID to each data because I need to categorise everything first before reversing the years as some data is occurring in the wrong

const ascendingList = keySalesIndicatorsListCml.reverse(); // careful, reverse isn't making a copy so it's referencing the same memory...

console.log(ascendingList)

const sortCategories = new Map<string, KeySalesIndicatorOutput[]>();

for (let index = 0; index < getLengthLatestData.length; index++) {
    
    sortCategories.set(getLengthLatestData[index], []);
}

console.log(ascendingList.length)
console.log(sortCategories.size)
// data now sorted by category
sortCategories.forEach((value, key, map) => {

    // yMap.set(key, (yMap.get(key) ?? []).concat(value))
    for (let index = 0; index < sortCategories.size; index++) {
        
        let x = ascendingList[index].filter((elem) => elem.quarterValuesProportion[0].ID === key)
        // sortCategories.set(key, (sortCategories.get(key) ?? []).concat(ascendingList[index][key]))
        sortCategories.set(key, (sortCategories.get(key) ?? []).concat(x))
    }
    // yMap.set(key, (yMap.get(key) ?? []).concat(ascendingList[key][key]))
})

console.log(sortCategories)
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

// sortPeriod.forEach((value, key, map) => {

    // loops through each year
    sortCategories.forEach((v, k, m) => {

        // inverting loop again
        // sortPeriod.set(key, (sortPeriod.get(key) ?? []).concat(ascendingList[index][key]))

        let setFilter = sortCategories.get(k) as KeySalesIndicatorOutput[];

        // console.log(setFilter)
        // let q1: KeySalesIndicatorValues[] = setFilter?.map((elem, index, array) => {

        //     return {
        //         currentQuarter: elem.currentQuarter,
        //         footer: elem.footer,
        //         header: elem.header,
        //         title: elem.title,
        //         proportion: elem.quarterValuesProportion[0],
        //         sales: elem.quarterValuesSales[0],
        //     }
        // })

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

// export const x = console.log("");
export const x = console.log(sortPeriod);

