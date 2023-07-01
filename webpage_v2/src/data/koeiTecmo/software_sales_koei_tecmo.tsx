import softwareSales2023 from "./Software_Sales/software_sales_fy3_2023.json"
import softwareSales2022 from "./Software_Sales/software_sales_fy3_2022.json";
import softwareSales2021 from "./Software_Sales/software_sales_fy3_2021.json";
import softwareSales2020 from "./Software_Sales/software_sales_fy3_2020.json";
import softwareSales2019 from "./Software_Sales/software_sales_fy3_2019.json";
import { salesOrUnitsJSON } from "../bandaiNamco/software_sales_bandai_namco";
import { EarningsJSONV2 } from "../generalTables/consolidated_earnings_general";
import { generalSalesPerSoftwareUnitListV2Map, graphMakeV2 } from "../../utils/segment_data_logic";

export type collectionJSON = {
    fiscalYear: string,
    currentQuarter: number,
    consolePackageAndDLSales: salesOrUnitsJSON,
    consolePackageAndDLUnits: salesOrUnitsJSON,
};

// const collection: collectionJSON[] = [
//     softwareSales2023,
//     softwareSales2022,
//     softwareSales2021,
//     softwareSales2020,
//     softwareSales2019,
//     undefinedData,
// ];

const collectionV2 = new Map<number, EarningsJSONV2>();

collectionV2.set(collectionV2.size, softwareSales2023)
collectionV2.set(collectionV2.size, softwareSales2022)
collectionV2.set(collectionV2.size, softwareSales2021)
collectionV2.set(collectionV2.size, softwareSales2020)
collectionV2.set(collectionV2.size, softwareSales2019)

export const softwareSalesList = new Map<number, string>();

export const softwareSalesGraphList = new Map();

collectionV2.forEach((value, key, map) => {

    softwareSalesList.set(key, generalSalesPerSoftwareUnitListV2Map(value, map.get(key+1), 41, "Million", "One Thousand"))

    softwareSalesGraphList.set(key, graphMakeV2(value, map.get(key+1),"Million","One Thousand"))
})

collectionV2.clear();

// export const softwareSalesGraphList = collection.flatMap((elem, index, array) => {
//     if (array[index] === array.at(-1)) {
//         return [] // for undefinedData in collection only
//     }

//     let salesThisFY: Section[] = salesMake(elem);
//     let salesLastFY: Section[] = salesMake(array[index+1]);

//     let unitsThisFY: Section[] = unitsMake(elem);
//     let unitsLastFY: Section[] = unitsMake(array[index+1]);

//     return graphMake(salesThisFY, salesLastFY, unitsThisFY, unitsLastFY, elem.consolePackageAndDLSales.name, elem.fiscalYear, elem.currentQuarter)
// });
