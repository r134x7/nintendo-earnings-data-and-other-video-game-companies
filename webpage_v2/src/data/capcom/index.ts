import type { EarningsJSONV2 } from "../generalTables/consolidated_earnings_general";

export const softwareSalesCollectionCapcom = await importJSON(new Map<number, EarningsJSONV2>(), 2024, 2021);

async function importJSON<T>(toMap: Map<number, T> , currentFiscalYear: number, firstFiscalYear: number) {

    const yearRange = currentFiscalYear - firstFiscalYear;

    // dynamic imports create a module object where import data needed is kept in the default key!
    await Promise.all<{ default: T }>(
            Array.from({length: yearRange + 1}, (value, index) => {
                return import(`./Software_Sales/software_sales_fy3_${currentFiscalYear - index}.json`)
            })
        ).then((values) => {
            values.forEach((elem) => toMap.set(toMap.size, elem.default))
    })

    return toMap
};
