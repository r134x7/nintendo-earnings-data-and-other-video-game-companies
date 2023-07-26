import type { EarningsJSONV2 } from "../generalTables/consolidated_earnings_general";

export const softwareSalesCollectionCapcom = await importJSON(2024, 2021).then(values => values);

async function importJSON(currentFiscalYear: number, firstFiscalYear: number): Promise<Map<any, any>> {

    const yearRange = currentFiscalYear - firstFiscalYear;

    const toMap = new Map();

    await Promise.all<EarningsJSONV2>(
            Array.from({length: yearRange + 1}, (value, index) => {
                return import(`./Software_Sales/software_sales_fy3_${currentFiscalYear - index}.json`)
            })
        ).then((values) => {
            values.forEach((elem) => {
                return toMap.set(toMap.size, {
                    companyName: elem.companyName,
                    currentQuarter: elem.currentQuarter,
                    data: elem.data,
                    fiscalYear: elem.fiscalYear
                } satisfies EarningsJSONV2)
            })
        } )

    return toMap
};