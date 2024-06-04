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

export const getLengthLatestData = keySalesIndicatorsListCml[0].length;
// export const x = console.log(keySalesIndicatorsListCml.length);
// export const x = keySalesIndicatorsListCml.map((elem, index, array) => elem[0]).reverse();

// need to add ID to each data because I need to categorise everything first before reversing the years as some data is occurring in the wrong

const ascendingList = keySalesIndicatorsListCml.reverse(); // careful, reverse isn't making a copy so it's referencing the same memory...

console.log(ascendingList)

const sortCategories = new Map<number, KeySalesIndicatorOutput[]>();

for (let index = 0; index < getLengthLatestData; index++) {
    
    sortCategories.set(sortCategories.size, []);
}

// data now sorted by category
sortCategories.forEach((value, key, map) => {

    // yMap.set(key, (yMap.get(key) ?? []).concat(value))
    for (let index = 0; index < sortCategories.size; index++) {
        
        sortCategories.set(key, (sortCategories.get(key) ?? []).concat(ascendingList[index][key]))
    }
    // yMap.set(key, (yMap.get(key) ?? []).concat(ascendingList[key][key]))
})

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
            proportion: {category: "cumulative", name: "None", quarter: "0", units: "NaN", value: 0},
            sales: {category: "cumulative", name: "None", quarter: "0", units:"NaN", value: 0},
        }]
    }

    if (Number.isNaN(Number(quarter)) === false) {

        let q1: KeySalesIndicatorValues[] = data.map((elem, index, array) => {
            return {
                currentQuarter: elem.currentQuarter,
                footer: elem.footer,
                header: elem.header,
                title: elem.title,
                proportion: elem.quarterValuesProportion[Number(quarter)],
                sales: elem.quarterValuesSales[Number(quarter)],
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
                proportion: elem.quarterValuesProportion[period],
                sales: elem.quarterValuesSales[period],
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

        let setFilter = sortCategories.get(k)?.filter((elem) => elem !== undefined) as KeySalesIndicatorOutput[];

        console.log(setFilter)
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

        sortPeriod.set(0, periodSetter(setFilter, "1", "None"))
        // sortPeriod.set(0, (sortPeriod.get(0) ?? []).concat(sortCategories.get()))
        sortPeriod.set(1, periodSetter(setFilter, "2", "None"))
        sortPeriod.set(2, periodSetter(setFilter, "3", "None"))
        sortPeriod.set(3, periodSetter(setFilter, "4", "None"))
        sortPeriod.set(4, periodSetter(setFilter, "None", "first half"))
        sortPeriod.set(5, periodSetter(setFilter, "None", "1st 3 Quarters"))
        sortPeriod.set(6, periodSetter(setFilter, "None", "FY Cumulative"))
    })
// })

// export const x = console.log(sortCategories);
export const x = console.log(sortPeriod);

