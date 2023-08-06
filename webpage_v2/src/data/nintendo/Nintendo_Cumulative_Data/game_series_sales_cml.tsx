import { titlesMake, collectionJSON } from "../fy_million_seller_titles_nintendo";
import { printTextBlock, border, liner, spacer, headerPrint, dateLabel, globImport } from "../../../utils/table_design_logic";

import { Header, Titles, decimateCalculation } from "../../../utils/fy_million_seller_titles_logic"
import { searchTitles } from "../../capcom/platinum_titles_Capcom";
import { EarningsValue } from "../../../utils/general_earnings_logic";

const totalCollection: Map<number, collectionJSON> = globImport(new Map<number, collectionJSON>, import.meta.glob("../FY_Million_Seller_Titles/*.json", { import: "default", eager: true }), "Ascending")

export type FiscalYearMillionSellersTitle = {
    title: string,
    platform: string,
    regionData: TitleRegionData[],
    rank?: number,
    label?: "New!" | "Recurring",
    footnote?: string,
    yearsCount?: number,
    fiscalYear?: string
}

export type TitleRegionData = {
    region: string,
    Q1QtrValue: EarningsValue,
    Q2QtrValue: EarningsValue,
    Q3QtrValue: EarningsValue,
    Q4QtrValue: EarningsValue,
    Q1CmlValue: EarningsValue,
    Q2CmlValue: EarningsValue,
    Q3CmlValue: EarningsValue,
    Q4CmlValue: EarningsValue,
}

export type TopSellingTitles = {
    title: string,
    platform: string,
    Q1QtrValue: EarningsValue,
    Q2QtrValue: EarningsValue,
    Q3QtrValue: EarningsValue,
    Q4QtrValue: EarningsValue,
    Q1CmlValue: EarningsValue,
    Q2CmlValue: EarningsValue,
    Q3CmlValue: EarningsValue,
    Q4CmlValue: EarningsValue,
    rank?: number,
    footnote?: string,
    fiscalYear?: string
}

export function fyTitlesMake(obj: collectionJSON) {

    const titles = new Map<number, FiscalYearMillionSellersTitle>();

    const makeTitle: FiscalYearMillionSellersTitle = {
        title: "",
        platform: "",
        regionData: [],
        fiscalYear: obj.fiscalYear,
        footnote: "",
        label: undefined,
        rank: undefined,
        yearsCount: undefined,
    }
}

function gameSeriesSalesMaker(completeCollection: Map<number, collectionJSON>) {

    const makeData = new Map<number, FiscalYearMillionSellersTitle[]>();
    completeCollection.forEach((value, key, map) => makeData.set(key, ))

}