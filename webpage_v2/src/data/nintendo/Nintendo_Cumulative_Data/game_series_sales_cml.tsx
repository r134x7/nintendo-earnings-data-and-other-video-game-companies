import { titlesMake, collectionJSON } from "../fy_million_seller_titles_nintendo";
import { printTextBlock, border, liner, spacer, headerPrint, dateLabel, globImport } from "../../../utils/table_design_logic";

import { Header, Titles, decimateCalculation } from "../../../utils/fy_million_seller_titles_logic"
import { searchTitles } from "../../capcom/platinum_titles_Capcom";
import { EarningsValue, quarterlyCalculationV2 } from "../../../utils/general_earnings_logic";
import { nothingCheck } from "../../generalTables/consolidated_earnings_general";

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

    obj.titles.flat().map((elem, index, array) => {

        titles.set(titles.size, {
            title: elem.name,
            platform: elem.platform,
            fiscalYear: obj.fiscalYear,
            footnote: elem.miscellaneous,
            regionData: [
              {
                region: elem.regionA,
                Q1QtrValue: nothingCheck(elem.Q1CmlValueA,"Quarter","units","1st Quarter","1st Quarter","Current FY FCST",obj.fiscalYear),
                Q2QtrValue: quarterlyCalculationV2(
                    nothingCheck(elem.Q2CmlValueA, "Quarter", "units", "2nd Quarter", "First Half", "Current FY FCST", obj.fiscalYear),
                    nothingCheck(elem.Q1CmlValueA, "Quarter", "units", "1st Quarter", "1st Quarter", "Current FY FCST", obj.fiscalYear)),
                Q3QtrValue: quarterlyCalculationV2(
                    nothingCheck(elem.Q3CmlValueA, "Quarter", "units", "3rd Quarter", "First Three Quarters", "Current FY FCST", obj.fiscalYear),
                    nothingCheck(elem.Q2CmlValueA, "Quarter", "units", "2nd Quarter", "First Half", "Current FY FCST", obj.fiscalYear)),
                Q4QtrValue: quarterlyCalculationV2(
                    nothingCheck(elem.Q4CmlValueA, "Quarter", "units", "4th Quarter", "FY Cumulative", "Current FY FCST", obj.fiscalYear),
                    nothingCheck(elem.Q3CmlValueA, "Quarter", "units", "3rd Quarter", "First Three Quarters", "Current FY FCST", obj.fiscalYear),
                    nothingCheck(elem.Q2CmlValueA, "Quarter", "units", "2nd Quarter", "First Half", "Current FY FCST", obj.fiscalYear)),
                Q1CmlValue: nothingCheck(elem.Q1CmlValueA,"Cumulative","units","1st Quarter","1st Quarter","Current FY FCST",obj.fiscalYear),
                Q2CmlValue: nothingCheck(elem.Q2CmlValueA,"Cumulative","units","2nd Quarter","First Half","Current FY FCST",obj.fiscalYear),
                Q3CmlValue: nothingCheck(elem.Q3CmlValueA,"Cumulative","units","3rd Quarter","First Three Quarters","Current FY FCST",obj.fiscalYear),
                Q4CmlValue: nothingCheck(elem.Q4CmlValueA,"Cumulative","units","4th Quarter","FY Cumulative","Current FY FCST",obj.fiscalYear),
              } satisfies TitleRegionData  
            ],
        } satisfies FiscalYearMillionSellersTitle)
    })
}

function gameSeriesSalesMaker(completeCollection: Map<number, collectionJSON>) {

    const makeData = new Map<number, FiscalYearMillionSellersTitle[]>();
    // completeCollection.forEach((value, key, map) => makeData.set(key, ))

}