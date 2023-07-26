import softwareSales2024 from "./Software_Sales/software_sales_fy3_2024.json";
import softwareSales2023 from "./Software_Sales/software_sales_fy3_2023.json";
import softwareSales2022 from "./Software_Sales/software_sales_fy3_2022.json";
import softwareSales2021 from "./Software_Sales/software_sales_fy3_2021.json";
import { softwareSalesCollectionCapcom } from ".";

import { salesOrUnitsJSON } from "../bandaiNamco/software_sales_bandai_namco";
import { generalSalesPerSoftwareUnitListV2Map, graphMakeV2 } from "../../utils/segment_data_logic";
import type { EarningsJSONV2, EarningsMakeV2 } from "../generalTables/consolidated_earnings_general";

export type collectionJSON = {
    fiscalYear: string,
    currentQuarter: number,
    digitalContentsSales: salesOrUnitsJSON,
    digitalContentsUnits: salesOrUnitsJSON,
    packageSales: salesOrUnitsJSON,
    packageUnits: salesOrUnitsJSON,
    digitalSales: salesOrUnitsJSON,
    digitalUnits: salesOrUnitsJSON,
}

const collectionV2 = new Map<number, EarningsJSONV2>();
// const collectionV2 = importJSON(new Map<number, EarningsJSONV2>, 2024, 2021).then(values => values)

console.log(softwareSalesCollectionCapcom.then(values => values));

const currentFiscalYear = 2024
const yearRange = currentFiscalYear - 2021;

// async function importJSON(toMap: Map<number, EarningsJSONV2>, currentFiscalYear: number, firstFiscalYear: number) {

//     const yearRange = currentFiscalYear - firstFiscalYear;

//     await Promise.all<EarningsJSONV2>(
//         Array.from({length: yearRange + 1}, (value, index) => {
//             return import(`./Software_Sales/software_sales_fy3_${currentFiscalYear - index}.json`)
//             // return softwareSales2024
//         })
//     // ).then((values) => values.forEach((elem) => collectionV2.set(collectionV2.size, elem)))
//     ).then((values) => {
//         values.forEach((elem) => {
//             console.log("well");
            
//             return toMap.set(toMap.size, {
//                 companyName: elem.companyName,
//                 currentQuarter: elem.currentQuarter,
//                 data: elem.data,
//                 fiscalYear: elem.fiscalYear
//             } satisfies EarningsJSONV2)
//         } )
//     } )

//     return console.log("what");
    
// };

// importJSON(collectionV2, 2024, 2021)

// console.log(collectionV2.size);

// console.log("test");

// const module = import(`./Consolidated_Earnings/consolidated_earnings_fy3_${currentFiscalYear}.json`).then((value) => value)
// console.log(module);

// const unwrapModule = module.then(value => {
//     console.log(value);
//     return value
// })
// console.log(unwrapModule);

// Promise.all<EarningsJSONV2>(
//     Array.from({length: yearRange + 1}, (value, index) => {
//         return import(`./Software_Sales/software_sales_fy3_${currentFiscalYear - index}.json`)
//         // return softwareSales2024
//     })
// // ).then((values) => values.forEach((elem) => collectionV2.set(collectionV2.size, elem)))
// ).then((values) => {
//     values.forEach((elem) => {
//         // console.log(collectionV2);
        
//         console.log("that");
        
//         return collectionV2.set(collectionV2.size, {
//             companyName: elem.companyName,
//             currentQuarter: elem.currentQuarter,
//             data: elem.data,
//             fiscalYear: elem.fiscalYear
//         } satisfies EarningsJSONV2)
//     } )
// } )

// console.log("this");

// console.log(collectionV2);

// const testMods = import.meta.glob("./Software_Sales/*.json", { import: "default" })
// // console.log(testMods);
// for (const path in testMods) {
//     testMods[path]().then((mod) => {
//         collectionV2.set(collectionV2.size, mod as EarningsJSONV2)
//     })
//   }

// const testPROMISE = new Promise.all<EarningsJSONV2>(
//     Array.from({length: yearRange + 1}, (value, index) => {
//         return import(`./Software_Sales/software_sales_fy3_${currentFiscalYear - index}.json`)
//     })
// ).then((values) => {
//     console.log(values);
//     return values
// }).catch((error) => error)
// console.log(testPROMISE);
// console.log(typeof testPROMISE);



// console.log(collectionV2);
// console.log(collectionV2.get(0));
// console.log(collectionV2.size);

// console.log(collectionV2.get(0));

// async function importJSON<T>(toMap: Map<number, EarningsJSONV2>, currentFiscalYear: number, firstFiscalYear: number): Map<number, EarningsJSONV2> {

//     const yearRange = currentFiscalYear - firstFiscalYear

//     for (let index = 0; index < yearRange + 1; index++) {
//     //    toMap.set(toMap.size, await import(`./Software_Sales/software_sales_fy3_${currentFiscalYear - index}.json`)) 
//        toMap.set(toMap.size, await import(`./Software_Sales/software_sales_fy3_2024.json`)) 
//     }

//     return toMap
// }
    // collectionV2.set(collectionV2.size, softwareSales2024)
    // collectionV2.set(collectionV2.size, softwareSales2023)
    // collectionV2.set(collectionV2.size, softwareSales2022)
    // collectionV2.set(collectionV2.size, softwareSales2021)

// const modulesTest: Record<string, EarningsJSONV2> = import.meta.glob("./Software_Sales/*.json", { import: "default", eager: true })
// // console.log(modulesTest);

// for (const key in modulesTest) {
//     collectionV2.set(collectionV2.size, modulesTest[key])
// }


export const softwareSalesList = new Map<number, string>();

export const softwareSalesGraphList = new Map();

collectionV2.forEach((value, key, map) => {

    console.log(value);
    
    softwareSalesGraphList.set(key, graphMakeV2(
        {
            ...value,
            data: [
                map.get(key)?.data[0],
                map.get(key)?.data[1],
            ] as EarningsMakeV2[]
        } satisfies EarningsJSONV2,
        {
            ...value,
            data: [
                map.get(key+1)?.data[0],
                map.get(key+1)?.data[1],
            ] as EarningsMakeV2[]
        } satisfies EarningsJSONV2,
        "Hundred Million",
        "One Thousand"
    ))

    for (let index = 0; index < value.data.length; index+= 2) {
        
        softwareSalesList.set(key,
        (softwareSalesList.get(key) ?? "") +
        generalSalesPerSoftwareUnitListV2Map(
            {
                ...value,
                data: [
                    map.get(key)?.data[index],
                    map.get(key)?.data[index+1],
                ] as EarningsMakeV2[]
            } satisfies EarningsJSONV2,
            {
                companyName: map.get(key+1)?.companyName ?? "Error",
                currentQuarter: map.get(key+1)?.currentQuarter ?? 0,
                fiscalYear: map.get(key+1)?.fiscalYear ?? "Error",
                data: [
                    map.get(key+1)?.data[index],
                    map.get(key+1)?.data[index+1],
                ] as EarningsMakeV2[]
            } satisfies EarningsJSONV2,
            38,
            "Hundred Million",
            "One Thousand",
            (index === 0) ? false : true
        ))

    }
})

// collectionV2.clear();

console.log(softwareSalesList);

console.log(softwareSalesList.size);
console.log(collectionV2.size);
console.log(collectionV2);


