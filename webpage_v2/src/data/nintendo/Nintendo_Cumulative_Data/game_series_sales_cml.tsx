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

export function fyTitlesMake(obj: collectionJSON): FiscalYearMillionSellersTitle[] {

    const titles = new Map<number, FiscalYearMillionSellersTitle>();

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
              } satisfies TitleRegionData,  
              {
                region: elem.regionB,
                Q1QtrValue: nothingCheck(elem.Q1CmlValueB,"Quarter","units","1st Quarter","1st Quarter","Current FY FCST",obj.fiscalYear),
                Q2QtrValue: quarterlyCalculationV2(
                    nothingCheck(elem.Q2CmlValueB, "Quarter", "units", "2nd Quarter", "First Half", "Current FY FCST", obj.fiscalYear),
                    nothingCheck(elem.Q1CmlValueB, "Quarter", "units", "1st Quarter", "1st Quarter", "Current FY FCST", obj.fiscalYear)),
                Q3QtrValue: quarterlyCalculationV2(
                    nothingCheck(elem.Q3CmlValueB, "Quarter", "units", "3rd Quarter", "First Three Quarters", "Current FY FCST", obj.fiscalYear),
                    nothingCheck(elem.Q2CmlValueB, "Quarter", "units", "2nd Quarter", "First Half", "Current FY FCST", obj.fiscalYear)),
                Q4QtrValue: quarterlyCalculationV2(
                    nothingCheck(elem.Q4CmlValueB, "Quarter", "units", "4th Quarter", "FY Cumulative", "Current FY FCST", obj.fiscalYear),
                    nothingCheck(elem.Q3CmlValueB, "Quarter", "units", "3rd Quarter", "First Three Quarters", "Current FY FCST", obj.fiscalYear),
                    nothingCheck(elem.Q2CmlValueB, "Quarter", "units", "2nd Quarter", "First Half", "Current FY FCST", obj.fiscalYear)),
                Q1CmlValue: nothingCheck(elem.Q1CmlValueB,"Cumulative","units","1st Quarter","1st Quarter","Current FY FCST",obj.fiscalYear),
                Q2CmlValue: nothingCheck(elem.Q2CmlValueB,"Cumulative","units","2nd Quarter","First Half","Current FY FCST",obj.fiscalYear),
                Q3CmlValue: nothingCheck(elem.Q3CmlValueB,"Cumulative","units","3rd Quarter","First Three Quarters","Current FY FCST",obj.fiscalYear),
                Q4CmlValue: nothingCheck(elem.Q4CmlValueB,"Cumulative","units","4th Quarter","FY Cumulative","Current FY FCST",obj.fiscalYear),
              } satisfies TitleRegionData,  
              {
                region: elem.regionC,
                Q1QtrValue: nothingCheck(elem.Q1CmlValueC,"Quarter","units","1st Quarter","1st Quarter","Current FY FCST",obj.fiscalYear),
                Q2QtrValue: quarterlyCalculationV2(
                    nothingCheck(elem.Q2CmlValueC, "Quarter", "units", "2nd Quarter", "First Half", "Current FY FCST", obj.fiscalYear),
                    nothingCheck(elem.Q1CmlValueC, "Quarter", "units", "1st Quarter", "1st Quarter", "Current FY FCST", obj.fiscalYear)),
                Q3QtrValue: quarterlyCalculationV2(
                    nothingCheck(elem.Q3CmlValueC, "Quarter", "units", "3rd Quarter", "First Three Quarters", "Current FY FCST", obj.fiscalYear),
                    nothingCheck(elem.Q2CmlValueC, "Quarter", "units", "2nd Quarter", "First Half", "Current FY FCST", obj.fiscalYear)),
                Q4QtrValue: quarterlyCalculationV2(
                    nothingCheck(elem.Q4CmlValueC, "Quarter", "units", "4th Quarter", "FY Cumulative", "Current FY FCST", obj.fiscalYear),
                    nothingCheck(elem.Q3CmlValueC, "Quarter", "units", "3rd Quarter", "First Three Quarters", "Current FY FCST", obj.fiscalYear),
                    nothingCheck(elem.Q2CmlValueC, "Quarter", "units", "2nd Quarter", "First Half", "Current FY FCST", obj.fiscalYear)),
                Q1CmlValue: nothingCheck(elem.Q1CmlValueC,"Cumulative","units","1st Quarter","1st Quarter","Current FY FCST",obj.fiscalYear),
                Q2CmlValue: nothingCheck(elem.Q2CmlValueC,"Cumulative","units","2nd Quarter","First Half","Current FY FCST",obj.fiscalYear),
                Q3CmlValue: nothingCheck(elem.Q3CmlValueC,"Cumulative","units","3rd Quarter","First Three Quarters","Current FY FCST",obj.fiscalYear),
                Q4CmlValue: nothingCheck(elem.Q4CmlValueC,"Cumulative","units","4th Quarter","FY Cumulative","Current FY FCST",obj.fiscalYear),
              } satisfies TitleRegionData,  
              {
                region: elem.regionD,
                Q1QtrValue: nothingCheck(elem.Q1CmlValueD,"Quarter","units","1st Quarter","1st Quarter","Current FY FCST",obj.fiscalYear),
                Q2QtrValue: quarterlyCalculationV2(
                    nothingCheck(elem.Q2CmlValueD, "Quarter", "units", "2nd Quarter", "First Half", "Current FY FCST", obj.fiscalYear),
                    nothingCheck(elem.Q1CmlValueD, "Quarter", "units", "1st Quarter", "1st Quarter", "Current FY FCST", obj.fiscalYear)),
                Q3QtrValue: quarterlyCalculationV2(
                    nothingCheck(elem.Q3CmlValueD, "Quarter", "units", "3rd Quarter", "First Three Quarters", "Current FY FCST", obj.fiscalYear),
                    nothingCheck(elem.Q2CmlValueD, "Quarter", "units", "2nd Quarter", "First Half", "Current FY FCST", obj.fiscalYear)),
                Q4QtrValue: quarterlyCalculationV2(
                    nothingCheck(elem.Q4CmlValueD, "Quarter", "units", "4th Quarter", "FY Cumulative", "Current FY FCST", obj.fiscalYear),
                    nothingCheck(elem.Q3CmlValueD, "Quarter", "units", "3rd Quarter", "First Three Quarters", "Current FY FCST", obj.fiscalYear),
                    nothingCheck(elem.Q2CmlValueD, "Quarter", "units", "2nd Quarter", "First Half", "Current FY FCST", obj.fiscalYear)),
                Q1CmlValue: nothingCheck(elem.Q1CmlValueD,"Cumulative","units","1st Quarter","1st Quarter","Current FY FCST",obj.fiscalYear),
                Q2CmlValue: nothingCheck(elem.Q2CmlValueD,"Cumulative","units","2nd Quarter","First Half","Current FY FCST",obj.fiscalYear),
                Q3CmlValue: nothingCheck(elem.Q3CmlValueD,"Cumulative","units","3rd Quarter","First Three Quarters","Current FY FCST",obj.fiscalYear),
                Q4CmlValue: nothingCheck(elem.Q4CmlValueD,"Cumulative","units","4th Quarter","FY Cumulative","Current FY FCST",obj.fiscalYear),
              } satisfies TitleRegionData,  
            ],
        } satisfies FiscalYearMillionSellersTitle)
    })

    return [...titles.values()]
}

function gameSeriesSalesMaker(completeCollection: Map<number, collectionJSON>) {

    const makeData = new Map<number, FiscalYearMillionSellersTitle[]>();

    completeCollection.forEach((value, key, map) => makeData.set(key, fyTitlesMake(value)))

    makeData.forEach((value) => console.log(value))
}

const testData = gameSeriesSalesMaker(totalCollection)