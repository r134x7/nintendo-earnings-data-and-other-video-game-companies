import softwareSales2023 from "./Software_Sales/software_sales_fy3_2023.json";
import softwareSales2022 from "./Software_Sales/software_sales_fy3_2022.json";
import softwareSales2021 from "./Software_Sales/software_sales_fy3_2021.json";
import softwareSales2020 from "./Software_Sales/software_sales_fy3_2020.json";
import { salesOrUnitsJSON } from "../bandaiNamco/software_sales_bandai_namco";
import type { EarningsJSONV2, EarningsMakeV2 } from "../generalTables/consolidated_earnings_general";
import { generalSalesPerSoftwareUnitListV2Map } from "../../utils/segment_data_logic";

export type collectionJSON = {
    fiscalYear: string,
    currentQuarter: number,
    hdGamesSales: salesOrUnitsJSON,
    mmoSales: salesOrUnitsJSON,
    hdGamesAndMMOUnits: salesOrUnitsJSON,
};

// const collection: collectionJSON[] = [
//     softwareSales2023,
//     softwareSales2022,
//     softwareSales2021,
//     softwareSales2020,
//     undefinedData,
// ];

const collectionV2 = new Map<number, EarningsJSONV2>();

collectionV2.set(collectionV2.size, softwareSales2023)
collectionV2.set(collectionV2.size, softwareSales2022)
collectionV2.set(collectionV2.size, softwareSales2021)
collectionV2.set(collectionV2.size, softwareSales2020)

export const notes2021 = "\n" +
`+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
| From Outline of Results Briefing held    | 
| on May 13, 2021 (for FY3/2021):          |
| We have also made a change to how we     |
| disclose our units sold. Whereas the     |
| download sales we disclosed previously   |
| only included titles launched in the     |
| past two years, we now include all sales |
| made during the relevant fiscal year,    |
| regardless of when a title may have been |
| released.                                |
|                                          |
| This change was prompted primarily by    |
| the fact that we are making many more    |
| sales from our back catalog than we had  |
| in the past.                             |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+`;

export const softwareSalesList = new Map<number, string>();

export const softwareSalesGraphList = new Map();

collectionV2.forEach((value, key, map) => {

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
            42,
            "Billion",
            "One Thousand",
            (index === 0) ? false : true
        ))

    }
})

// collectionV2.forEach((value, key, map) => {

//     for (let index = 0; index < value.data.length; index++) {

//         softwareSalesList.set(key,
//         (softwareSalesList.get(key) ?? "") +
//         generalSalesPerSoftwareUnitListV2Map(
//             {
//                 ...value,
//                 data: (index !== 2) 
//                         ? [map.get(key)?.data[index] as EarningsMakeV2] 
//                         : [ 
//                             combineData([
//                                 map.get(key)?.data[0] as EarningsMakeV2, 
//                                 map.get(key)?.data[1] as EarningsMakeV2, 
//                             ]), 
//                             map.get(key)?.data[index] as EarningsMakeV2,
//                         ] as EarningsMakeV2[]
//             } satisfies EarningsJSONV2,
//             (map.get(key+1) === undefined)
//             ? undefined
//             : {
//                 companyName: map.get(key+1)?.companyName ?? "Error",
//                 currentQuarter: map.get(key+1)?.currentQuarter ?? 0,
//                 fiscalYear: map.get(key+1)?.fiscalYear ?? "Error",
//                 data: (index !== 2) 
//                         ? [map.get(key+1)?.data[index] as EarningsMakeV2] 
//                         : [ 
//                             combineData([
//                                 map.get(key+1)?.data[0] as EarningsMakeV2, 
//                                 map.get(key+1)?.data[1] as EarningsMakeV2, 
//                             ]), 
//                             map.get(key+1)?.data[index] as EarningsMakeV2,
//                         ] as EarningsMakeV2[]
//             } satisfies EarningsJSONV2,
//             42,
//             "Billion",
//             "One Thousand",
//             (index === 0) ? false : true,
//             (index === 2) ? false : true,
//         ) + (value.fiscalYear === "FY3/2021" && index === 2 ? notes2021 : "")
//         )

//     }
// })

collectionV2.clear();

function combineData(sales: EarningsMakeV2[]): EarningsMakeV2 {
    return {
        name: sales.reduce((acc, next, index, array) => acc + next.name + (array[index] === array.at(-1) ? "" : " & ") ,""),
        units: "currency",
        Q1CmlValue:sales.reduce((acc, next) => acc + ((Number.isNaN(Number(next.Q1CmlValue))) ? 0 : Number(next.Q1CmlValue)), 0),
        Q2CmlValue:sales.reduce((acc, next) => acc + ((Number.isNaN(Number(next.Q2CmlValue))) ? 0 : Number(next.Q2CmlValue)), 0),
        Q3CmlValue:sales.reduce((acc, next) => acc + ((Number.isNaN(Number(next.Q3CmlValue))) ? 0 : Number(next.Q3CmlValue)), 0),
        Q4CmlValue:sales.reduce((acc, next) => acc + ((Number.isNaN(Number(next.Q4CmlValue))) ? 0 : Number(next.Q4CmlValue)), 0),
        // forecastThisFY:sales.reduce((acc, next) => acc + ((Number.isNaN(Number(next.forecastThisFY))) ? 0 : Number(next.forecastThisFY)), 0),
        // forecastRevision1:sales.reduce((acc, next) => acc + ((Number.isNaN(Number(next.forecastRevision1))) ? 0 : Number(next.forecastRevision1)), 0),
        // forecastRevision2:sales.reduce((acc, next) => acc + ((Number.isNaN(Number(next.forecastRevision2))) ? 0 : Number(next.forecastRevision2)), 0),
        // forecastRevision3:sales.reduce((acc, next) => acc + ((Number.isNaN(Number(next.forecastRevision3))) ? 0 : Number(next.forecastRevision3)), 0),
        // forecastNextFY:sales.reduce((acc, next) => acc + ((Number.isNaN(Number(next.forecastNextFY))) ? 0 : Number(next.forecastNextFY)), 0),
        footnotes: sales.reduce((acc, next) => acc + next.footnotes + " ", ""),
    } satisfies EarningsMakeV2 
}
