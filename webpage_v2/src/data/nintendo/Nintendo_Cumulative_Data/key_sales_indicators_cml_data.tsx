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

export const getLengthLatestData = keySalesIndicatorsListCml[0].length;
// export const x = console.log(keySalesIndicatorsListCml.length);
// export const x = keySalesIndicatorsListCml.map((elem, index, array) => elem[0]).reverse();

const ascendingList = keySalesIndicatorsListCml.reverse(); // careful, reverse isn't making a copy so it's referencing the same memory...

const yMap = new Map<number, KeySalesIndicatorOutput[]>();

for (let index = 0; index < getLengthLatestData; index++) {
    
    yMap.set(yMap.size, []);
}

yMap.forEach((value, key, map) => {

    // yMap.set(key, (yMap.get(key) ?? []).concat(value))
    for (let index = 0; index < yMap.size; index++) {
        
        yMap.set(key, (yMap.get(key) ?? []).concat(ascendingList[index][key]))
    }
    // yMap.set(key, (yMap.get(key) ?? []).concat(ascendingList[key][key]))
})

export const x = console.log(yMap);
// keySalesIndicatorsListCml.map((elem, index, array) => {


// })
// 
//
//

// export const x = keySalesIndicatorsListCml[0][0]