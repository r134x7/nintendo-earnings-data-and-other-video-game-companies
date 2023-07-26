import { generalSalesPerSoftwareUnitListV2Map, graphMakeV2 } from "../../utils/segment_data_logic";
import { EarningsJSONV2 } from "../generalTables/consolidated_earnings_general";
import { globImport } from "../../utils/table_design_logic";

export type collectionJSON = {
    fiscalYear: string,
    currentQuarter: number,
    softwareSales: salesOrUnitsJSON,
    softwareUnits: salesOrUnitsJSON,
};

export type salesOrUnitsJSON = {
    name: string,
    units: string,
    Q1CmlValue: number,
    Q2CmlValue: number,
    Q3CmlValue: number,
    Q4CmlValue: number,
    forecastThisFY?: number,
    forecastRevision1?: number,
    forecastRevision2?: number,
    forecastRevision3?: number,
    forecastNextFY?: number,
    notes?: string,
}

const collectionV2 = globImport(new Map<number, EarningsJSONV2>, import.meta.glob("./Software_Sales/*.json", { import: "default", eager: true }), "Descending");

export const softwareSalesList = new Map<number, string>();

export const softwareSalesGraphList = new Map();

collectionV2.forEach((value, key, map) => {

    softwareSalesList.set(key, generalSalesPerSoftwareUnitListV2Map(value, map.get(key+1), 38, "Billion", "One Thousand"))

    softwareSalesGraphList.set(key, graphMakeV2(value, map.get(key+1),"Billion","One Thousand"))
})

collectionV2.clear();
