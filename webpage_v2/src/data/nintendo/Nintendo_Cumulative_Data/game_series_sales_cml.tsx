import { titlesMake, collectionJSON } from "../fy_million_seller_titles_nintendo";
import { printTextBlock, border, liner, spacer, headerPrint, dateLabel, globImport } from "../../../utils/table_design_logic";

import { Header, Titles, decimateCalculation } from "../../../utils/fy_million_seller_titles_logic"
import { searchTitles } from "../../capcom/platinum_titles_Capcom";
import { EarningsValue } from "../../../utils/general_earnings_logic";

const totalCollection: collectionJSON[] = [...globImport(new Map<number, collectionJSON>, import.meta.glob("../FY_Million_Seller_Titles/*.json", { import: "default", eager: true }), "Ascending").values()]

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