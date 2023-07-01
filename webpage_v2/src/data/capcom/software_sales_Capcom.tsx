import softwareSales2023 from "./Software_Sales/software_sales_fy3_2023.json";
import softwareSales2022 from "./Software_Sales/software_sales_fy3_2022.json";
import softwareSales2021 from "./Software_Sales/software_sales_fy3_2021.json";
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

// const collection: collectionJSON[] = [
//     softwareSales2023,
//     softwareSales2022,
//     softwareSales2021,
//     undefinedData,
// ];

const collectionV2 = new Map<number, EarningsJSONV2>();

collectionV2.set(collectionV2.size, softwareSales2023)
collectionV2.set(collectionV2.size, softwareSales2022)
collectionV2.set(collectionV2.size, softwareSales2021)

export const softwareSalesList = new Map<number, string>();

export const softwareSalesGraphList = new Map();

collectionV2.forEach((value, key, map) => {

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
        "Billion",
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
            "Billion",
            "One Thousand",
            (index === 0) ? false : true
        ))

    }
})

collectionV2.clear();

// export const softwareSalesGraphList = collection.flatMap((elem, index, array) => {
//     if (array[index] === array.at(-1)) {
//         return [] // for undefinedData in collection only
//     }

//     let salesThisFY: Section[] = digitalContentsSalesMake(elem);
//     let salesLastFY: Section[] = digitalContentsSalesMake(array[index+1]);

//     let unitsThisFY: Section[] = digitalContentsUnitsMake(elem);
//     let unitsLastFY: Section[] = digitalContentsUnitsMake(array[index+1]);

//     return graphMake(salesThisFY, salesLastFY, unitsThisFY, unitsLastFY, elem.digitalContentsSales.name, elem.fiscalYear, elem.currentQuarter)
// });
