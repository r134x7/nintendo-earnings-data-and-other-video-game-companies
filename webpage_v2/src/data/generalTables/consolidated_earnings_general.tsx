import {
    Earnings,
    Header,
    printOpMargin,
    operatingMarginCalculation,
    quarterlyCalculation,
    printAll,
    // new functions
    EarningsV2,
    forecastOutput,
    operatingMarginCalculationV2,
    printForecastValuesV2,
    printQuarterValuesV2,
    printCumulativeValuesV2,
    printReduceSection,
    printYoYV2,
    qtrOrCmlOutput,
    printSectionHeaderV2,
    quarterlyCalculationV2,
    yearOnYearCalculationV2,
    EarningsValue,
} from "../../utils/general_earnings_logic";
import { headerPrint, dateLabel, liner, border, spacer } from "../../utils/table_design_logic";

import nintendoConsolidatedEarnings2023 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2023.json";
import nintendoConsolidatedEarnings2022 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2022.json";
import nintendoConsolidatedEarnings2021 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2021.json";
import nintendoConsolidatedEarnings2020 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2020.json";
import nintendoConsolidatedEarnings2019 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2019.json";
import nintendoConsolidatedEarnings2018 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2018.json";
import nintendoConsolidatedEarnings2017 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2017.json";
import nintendoConsolidatedEarnings2016 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2016.json";
import nintendoConsolidatedEarnings2015 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2015.json";
import nintendoConsolidatedEarnings2014 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2014.json";
import nintendoConsolidatedEarnings2013 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2013.json";
import nintendoConsolidatedEarnings2012 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2012.json";
import nintendoConsolidatedEarnings2011 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2011.json";
import nintendoConsolidatedEarnings2010 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2010.json";
import nintendoConsolidatedEarnings2009 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2009.json";
import nintendoConsolidatedEarnings2008 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2008.json";
import nintendoConsolidatedEarnings2007 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2007.json";
import nintendoConsolidatedEarnings2006 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2006.json";
import nintendoConsolidatedEarnings2005 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2005.json";
import nintendoConsolidatedEarnings2004 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2004.json";

import capcomEarnings2023 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2023.json";
import capcomEarnings2022 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2022.json";
import capcomEarnings2021 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2021.json";
import capcomEarnings2020 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2020.json";
import capcomEarnings2019 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2019.json";
import capcomEarnings2018 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2018.json";
import capcomEarnings2017 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2017.json";
import capcomEarnings2016 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2016.json";
import capcomEarnings2015 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2015.json";
import capcomEarnings2014 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2014.json";
import capcomEarnings2013 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2013.json";
import capcomEarnings2012 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2012.json";
import capcomEarnings2011 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2011.json";
import capcomEarnings2010 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2010.json";
import capcomEarnings2009 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2009.json";
import capcomEarnings2008 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2008.json";
import capcomEarnings2007 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2007.json";
import capcomEarnings2006 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2006.json";
import capcomEarnings2005 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2005.json";
import capcomEarnings2004 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2004.json";

import bandaiNamco2023 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2023.json";
import bandaiNamco2022 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2022.json";
import bandaiNamco2021 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2021.json";
import bandaiNamco2020 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2020.json";
import bandaiNamco2019 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2019.json";
import bandaiNamco2018 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2018.json";
import bandaiNamco2017 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2017.json";
import bandaiNamco2016 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2016.json";
import bandaiNamco2015 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2015.json";
import bandaiNamco2014 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2014.json";
import bandaiNamco2013 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2013.json";
import bandaiNamco2012 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2012.json";
import bandaiNamco2011 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2011.json";
import bandaiNamco2010 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2010.json";
import bandaiNamco2009 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2009.json";
import bandaiNamco2008 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2008.json";
import bandaiNamco2007 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2007.json";
import bandaiNamco2006 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2006.json";

import sega2023 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2023.json";
import sega2022 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2022.json";
import sega2021 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2021.json";
import sega2020 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2020.json";
import sega2019 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2019.json";
import sega2018 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2018.json";
import sega2017 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2017.json";
import sega2016 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2016.json";
import sega2015 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2015.json";
import sega2014 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2014.json";
import sega2013 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2013.json";
import sega2012 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2012.json";
import sega2011 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2011.json";
import sega2010 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2010.json";
import sega2009 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2009.json";
import sega2008 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2008.json";
import sega2007 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2007.json";
import sega2006 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2006.json";
import sega2005 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2005.json";

import koeiTecmo2023 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2023.json";
import koeiTecmo2022 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2022.json";
import koeiTecmo2021 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2021.json";
import koeiTecmo2020 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2020.json";
import koeiTecmo2019 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2019.json";
import koeiTecmo2018 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2018.json";
import koeiTecmo2017 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2017.json";
import koeiTecmo2016 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2016.json";
import koeiTecmo2015 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2015.json";
import koeiTecmo2014 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2014.json";
import koeiTecmo2013 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2013.json";
import koeiTecmo2012 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2012.json";
import koeiTecmo2011 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2011.json";
import koeiTecmo2010 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2010.json";

import squareEnix2023 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2023.json";
import squareEnix2022 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2022.json";
import squareEnix2021 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2021.json";
import squareEnix2020 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2020.json";
import squareEnix2019 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2019.json";
import squareEnix2018 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2018.json";
import squareEnix2017 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2017.json";
import squareEnix2016 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2016.json";
import squareEnix2015 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2015.json";
import squareEnix2014 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2014.json";
import squareEnix2013 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2013.json";
import squareEnix2012 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2012.json";
import squareEnix2011 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2011.json";
import squareEnix2010 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2010.json";
import squareEnix2009 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2009.json";
import squareEnix2008 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2008.json";
import squareEnix2007 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2007.json";
import squareEnix2006 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2006.json";
import squareEnix2005 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2005.json";
import squareEnix2004 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2004.json";

export type EarningsJSON = {
    currentQuarter: number,
    companyName: string,
    fiscalYear: string,
    data: EarningsMake[],
};

export type EarningsJSONV2 = {
    currentQuarter: number,
    companyName: string,
    fiscalYear: string,
    data: EarningsMakeV2[],
};

type EarningsMake = {
        name: string,
        Q1CmlValue: number,
        Q2CmlValue: number,
        Q3CmlValue: number,
        Q4CmlValue: number,
        forecastThisFY?: number | null,
        forecastRevision1?: number | null,
        forecastRevision2?: number | null,
        forecastRevision3?: number | null,
        forecastNextFY?: number | null, 
}; 

type EarningsMakeV2 = {
        name: string,
        Q1CmlValue: number | string,
        Q2CmlValue: number | string,
        Q3CmlValue: number | string,
        Q4CmlValue: number | string,
        forecastThisFY?: number | null | string,
        forecastRevision1?: number | null,
        forecastRevision2?: number | null,
        forecastRevision3?: number | null,
        forecastNextFY?: number | null | string, 
}; 

function nothingCheck(
    value: number | string | null | undefined, 
    kind: "Quarter" | "Cumulative" | "Forecast",
    units: "units" | "currency" | "percentage",
    qtrPeriod: "1st Quarter" | "2nd Quarter" | "3rd Quarter" | "4th Quarter",
    cmlPeriod: "1st Quarter" | "First Half" | "First Three Quarters" | "FY Cumulative", 
    forecastPeriod: "Current FY FCST" | "FCST Revision 1" | "FCST Revision 2" | "FCST Revision 3" | "Next FY FCST", 
    thisFY: string | undefined,
    ): EarningsValue {

    switch (typeof value) {
        case ("number"):
            
            if (kind === "Cumulative") {
                return {
                    kind: "Cumulative",
                    period: cmlPeriod, 
                    thisFY: thisFY + " Cml.",
                    units: units,
                    value: value as number
                } satisfies EarningsValue 
            } else if (kind === "Forecast") {
                return {
                    kind: "Forecast",
                    period: forecastPeriod,
                    units: units,
                    thisFY: thisFY + " Forecast",
                    nextFY: thisFY?.slice(0,4) + (Number(thisFY?.slice(-4)) + 1).toString() + " Forecast",
                    value: value as number
                } satisfies EarningsValue
            } else {
                return {
                    kind: "Quarter",
                    period: qtrPeriod,
                    units: units,
                    value: value as number
                } satisfies EarningsValue
            }
            

        default:
            // all types that are not a number
            return { kind: "Nothing" };
    }
}

const collectionNintendo: EarningsJSON[] = [
    nintendoConsolidatedEarnings2023,
    nintendoConsolidatedEarnings2022,
    nintendoConsolidatedEarnings2021,
    nintendoConsolidatedEarnings2020,
    nintendoConsolidatedEarnings2019,
    nintendoConsolidatedEarnings2018,
    nintendoConsolidatedEarnings2017,
    nintendoConsolidatedEarnings2016,
    nintendoConsolidatedEarnings2015,
    nintendoConsolidatedEarnings2014,
    nintendoConsolidatedEarnings2013,
    nintendoConsolidatedEarnings2012,
    nintendoConsolidatedEarnings2011,
    nintendoConsolidatedEarnings2010,
    nintendoConsolidatedEarnings2009,
    nintendoConsolidatedEarnings2008,
    nintendoConsolidatedEarnings2007,
    nintendoConsolidatedEarnings2006,
    nintendoConsolidatedEarnings2005,
    nintendoConsolidatedEarnings2004,
];

const collectionNintendoV2: EarningsJSONV2[] = [
    nintendoConsolidatedEarnings2023,
    nintendoConsolidatedEarnings2022,
    nintendoConsolidatedEarnings2021,
    nintendoConsolidatedEarnings2020,
    nintendoConsolidatedEarnings2019,
    nintendoConsolidatedEarnings2018,
    nintendoConsolidatedEarnings2017,
    nintendoConsolidatedEarnings2016,
    nintendoConsolidatedEarnings2015,
    nintendoConsolidatedEarnings2014,
    nintendoConsolidatedEarnings2013,
    nintendoConsolidatedEarnings2012,
    nintendoConsolidatedEarnings2011,
    nintendoConsolidatedEarnings2010,
    nintendoConsolidatedEarnings2009,
    nintendoConsolidatedEarnings2008,
    nintendoConsolidatedEarnings2007,
    nintendoConsolidatedEarnings2006,
    nintendoConsolidatedEarnings2005,
    nintendoConsolidatedEarnings2004,
];

const collectionCapcom: EarningsJSON[] = [
    capcomEarnings2023,
    capcomEarnings2022,
    capcomEarnings2021,
    capcomEarnings2020,
    capcomEarnings2019,
    capcomEarnings2018,
    capcomEarnings2017,
    capcomEarnings2016,
    capcomEarnings2015,
    capcomEarnings2014,
    capcomEarnings2013,
    capcomEarnings2012,
    capcomEarnings2011,
    capcomEarnings2010,
    capcomEarnings2009,
    capcomEarnings2008,
    capcomEarnings2007,
    capcomEarnings2006,
    capcomEarnings2005,
    // capcomEarnings2004,
];

const collectionCapcomV2: EarningsJSONV2[] = [
    capcomEarnings2023,
    capcomEarnings2022,
    capcomEarnings2021,
    capcomEarnings2020,
    capcomEarnings2019,
    capcomEarnings2018,
    capcomEarnings2017,
    capcomEarnings2016,
    capcomEarnings2015,
    capcomEarnings2014,
    capcomEarnings2013,
    capcomEarnings2012,
    capcomEarnings2011,
    capcomEarnings2010,
    capcomEarnings2009,
    capcomEarnings2008,
    capcomEarnings2007,
    capcomEarnings2006,
    capcomEarnings2005,
    capcomEarnings2004,
];

const collectionBandaiNamco: EarningsJSON[] = [
    bandaiNamco2023,
    bandaiNamco2022,
    bandaiNamco2021,
    bandaiNamco2020,
    bandaiNamco2019,
    bandaiNamco2018,
    bandaiNamco2017,
    bandaiNamco2016,
    bandaiNamco2015,
    bandaiNamco2014,
    bandaiNamco2013,
    bandaiNamco2012,
    bandaiNamco2011,
    bandaiNamco2010,
    bandaiNamco2009,
    bandaiNamco2008,
    bandaiNamco2007,
    // bandaiNamco2006,
];

const collectionBandaiNamcoV2: EarningsJSONV2[] = [
    bandaiNamco2023,
    bandaiNamco2022,
    bandaiNamco2021,
    bandaiNamco2020,
    bandaiNamco2019,
    bandaiNamco2018,
    bandaiNamco2017,
    bandaiNamco2016,
    bandaiNamco2015,
    bandaiNamco2014,
    bandaiNamco2013,
    bandaiNamco2012,
    bandaiNamco2011,
    bandaiNamco2010,
    bandaiNamco2009,
    bandaiNamco2008,
    bandaiNamco2007,
    bandaiNamco2006,
];

const collectionSegaSammy: EarningsJSON[] = [
    sega2023,
    sega2022,
    sega2021,
    sega2020,
    sega2019,
    sega2018,
    sega2017,
    sega2016,
    sega2015,
    sega2014,
    sega2013,
    sega2012,
    sega2011,
    sega2010,
    sega2009,
    sega2008,
    sega2007,
    sega2006,
    // sega2005,
];

const collectionSegaSammyV2: EarningsJSONV2[] = [
    sega2023,
    sega2022,
    sega2021,
    sega2020,
    sega2019,
    sega2018,
    sega2017,
    sega2016,
    sega2015,
    sega2014,
    sega2013,
    sega2012,
    sega2011,
    sega2010,
    sega2009,
    sega2008,
    sega2007,
    sega2006,
    sega2005,
];

const collectionKoeiTecmo: EarningsJSON[] = [
    koeiTecmo2023,
    koeiTecmo2022,
    koeiTecmo2021,
    koeiTecmo2020,
    koeiTecmo2019,
    koeiTecmo2018,
    koeiTecmo2017,
    koeiTecmo2016,
    koeiTecmo2015,
    koeiTecmo2014,
    koeiTecmo2013,
    koeiTecmo2012,
    koeiTecmo2011,
    koeiTecmo2010,
];

const collectionKoeiTecmoV2: EarningsJSONV2[] = [
    koeiTecmo2023,
    koeiTecmo2022,
    koeiTecmo2021,
    koeiTecmo2020,
    koeiTecmo2019,
    koeiTecmo2018,
    koeiTecmo2017,
    koeiTecmo2016,
    koeiTecmo2015,
    koeiTecmo2014,
    koeiTecmo2013,
    koeiTecmo2012,
    koeiTecmo2011,
    koeiTecmo2010,
];

const collectionSquareEnix: EarningsJSON[] = [
    squareEnix2023,
    squareEnix2022,
    squareEnix2021,
    squareEnix2020,
    squareEnix2019,
    squareEnix2018,
    squareEnix2017,
    squareEnix2016,
    squareEnix2015,
    squareEnix2014,
    squareEnix2013,
    squareEnix2012,
    squareEnix2011,
    squareEnix2010,
    squareEnix2009,
    squareEnix2008,
    squareEnix2007,
    squareEnix2006,
    squareEnix2005,
    squareEnix2004,
];

const collectionSquareEnixV2: EarningsJSONV2[] = [
    squareEnix2023,
    squareEnix2022,
    squareEnix2021,
    squareEnix2020,
    squareEnix2019,
    squareEnix2018,
    squareEnix2017,
    squareEnix2016,
    squareEnix2015,
    squareEnix2014,
    squareEnix2013,
    squareEnix2012,
    squareEnix2011,
    squareEnix2010,
    squareEnix2009,
    squareEnix2008,
    squareEnix2007,
    squareEnix2006,
    squareEnix2005,
    squareEnix2004,
];

const valuesMake = (obj: undefined | EarningsMake): Earnings[] => {

    let values: Earnings[] = [
        {
            name: obj?.name ?? "N/A",
            category: "cumulative",
            units: "currency",
            period: "1st Quarter",
            value: obj?.Q1CmlValue ?? 0,
        },
        {
            name: obj?.name ?? "N/A",
            category: "cumulative",
            units: "currency",
            period: "2nd Quarter",
            value: obj?.Q2CmlValue ?? 0, 
        },
        {
            name: obj?.name ?? "N/A",
            category: "cumulative",
            units: "currency", 
            period: "3rd Quarter",
            value: obj?.Q3CmlValue ?? 0, 
        },
        {
            name: obj?.name ?? "N/A",
            category: "cumulative",
            units: "currency", 
            period: "4th Quarter",
            value: obj?.Q4CmlValue ?? 0, 
        },
    ];

    return values 
};

function valuesMakeV2(obj: undefined | EarningsMakeV2, fiscalYear: string): EarningsV2 {

    let values: EarningsV2 = {
        name: obj?.name ?? "N/A",
        Q1QtrValue: nothingCheck(obj?.Q1CmlValue, "Quarter", "currency", "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
        Q2QtrValue: quarterlyCalculationV2(
            nothingCheck(obj?.Q2CmlValue, "Quarter", "currency", "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q1CmlValue, "Quarter", "currency", "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear)
        ),
        Q3QtrValue: quarterlyCalculationV2(
            nothingCheck(obj?.Q3CmlValue, "Quarter", "currency", "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q2CmlValue, "Quarter", "currency", "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
        ),
        Q4QtrValue: quarterlyCalculationV2(
            nothingCheck(obj?.Q4CmlValue, "Quarter", "currency", "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q3CmlValue, "Quarter", "currency", "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
        ),
        Q1CmlValue: nothingCheck(obj?.Q1CmlValue, "Cumulative", "currency", "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
        Q2CmlValue: nothingCheck(obj?.Q2CmlValue, "Cumulative", "currency", "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
        Q3CmlValue: nothingCheck(obj?.Q3CmlValue, "Cumulative", "currency", "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
        Q4CmlValue: nothingCheck(obj?.Q4CmlValue, "Cumulative", "currency", "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear),
        forecastThisFY: nothingCheck(obj?.forecastThisFY, "Forecast", "currency", "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
        forecastRevision1: nothingCheck(obj?.forecastRevision1, "Forecast", "currency", "1st Quarter", "1st Quarter", "FCST Revision 1", fiscalYear),
        forecastRevision2: nothingCheck(obj?.forecastRevision2, "Forecast", "currency", "1st Quarter", "1st Quarter", "FCST Revision 2", fiscalYear),
        forecastRevision3: nothingCheck(obj?.forecastRevision3, "Forecast", "currency", "1st Quarter", "1st Quarter", "FCST Revision 3", fiscalYear),
        forecastNextFY: nothingCheck(obj?.forecastNextFY, "Forecast", "currency", "1st Quarter", "1st Quarter", "Next FY FCST", fiscalYear),
    }

    return values
}

const forecastMake = (obj: EarningsMake, forecastLabelThisFY: string, forecastLabelNextFY: string): Earnings[] => {

    let forecasts: Earnings[] = [
        {
            name: obj.name,
            forecastPeriod: forecastLabelThisFY,
            value: obj?.forecastThisFY,
        },
        {
            name: obj.name,
            forecastPeriod: "FCST Revision 1",
            value: obj?.forecastRevision1,
        },
        {
            name: obj.name,
            forecastPeriod: "FCST Revision 2",
            value: obj?.forecastRevision2,
        },
        {
            name: obj.name,
            forecastPeriod: "FCST Revision 3",
            value: obj?.forecastRevision3,
        },
        {
            name: obj.name,
            forecastPeriod: forecastLabelNextFY,
            value: obj?.forecastNextFY,
        },
    ].flatMap(elem => {
        if(elem.value === undefined || elem.value === null) {
            return []
        }

        return elem;
    }).map(elem => {

        return {
            category: "forecast",
            units: "currency",
            name: elem.name,
            period: "1st Quarter",
            forecastPeriod: elem.forecastPeriod, 
            value: elem.value as number, // type assertion, filter has already removed undefined values.
        };
    });
    
    return forecasts
};

const consolidatedEarningsList = (collection: EarningsJSON[], headerLength: number): string[] => { 

return collection.map((elem, index, array) => {

    // if (index === array.length-1) {
    //     return ""
    // };

    let currentQuarter: number = elem.currentQuarter;

    const makeDateLabel = dateLabel(elem?.fiscalYear ?? "N/A", elem?.currentQuarter ?? 4);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

    let header: Header = {
        companyName: elem.companyName,
        fiscalYear: elem.fiscalYear,
        title: (elem.companyName === "CAPCOM Co., Ltd." || elem.companyName === "SQUARE ENIX HOLDINGS CO., LTD.") ? "Consolidated Financial Results" : "Consolidated Operating Results",
    };


    let nextFY: string = (Number(elem.fiscalYear.slice(-4)) + 1).toString();

    let forecastNameThisFY : string = elem.fiscalYear + " Forecast";

    let forecastNameNextFY: string = elem.fiscalYear.slice(0,4) + nextFY + " Forecast";

    let dataThisFY: Earnings[][] = elem.data.map(value => valuesMake(value));

    let dataLastFY: Earnings[][] = (!array[index+1]) ? elem.data.map(value => valuesMake(undefined)) : array[index+1].data.map(value => valuesMake(value));

    let forecastData: Earnings[][] = elem.data.map(value => forecastMake(value, forecastNameThisFY, forecastNameNextFY));

    const printOne = headerPrint([
        header.companyName + " | " + header.fiscalYear,
        header.title
    ],headerLength) + "\n" + printDateLabel;
    
    // const opMarginSet = printOpMargin(header, dataThisFY[0], dataThisFY[1], forecastData[0], forecastData[1], currentQuarter);

    const printEach = Array.from({length: dataThisFY.length + 1}, (v, i) => {
        
        return (i === 2) 
                ? printOpMargin(header, dataThisFY[0], dataThisFY[1], forecastData[0], forecastData[1], currentQuarter,13)
                :(i > 2)
                ? printAll(header, dataThisFY[i-1], dataLastFY[i-1], forecastData[i-1], currentQuarter, 13)
                : printAll(header, dataThisFY[i], dataLastFY[i], forecastData[i], currentQuarter, 13);
    });

    return [printOne, ...printEach].reduce((acc, next) => acc + "\n" + next)

    }).filter(elem => elem !== "");
};

const consolidatedEarningsGraphList = (collection: EarningsJSON[]) => {
    
return collection.map((elem, index, array) => {

    // if (index === array.length-1) {
    //     return undefined
    // }

    let dataThisFY: Earnings[][] = elem.data.map(value => valuesMake(value));

    let dataLastFY: Earnings[][] = (!array[index+1]) ? elem.data.map(value => valuesMake(undefined)) : array[index+1].data.map(value => valuesMake(value));

    let quartersDataThisFY: Earnings[][] = dataThisFY.map(value => quarterlyCalculation(value));

    let quartersDataLastFY: Earnings[][] = dataLastFY.map(value => quarterlyCalculation(value));

    let quartersOpMarginsThisAndLastFY: Earnings[][] = [ operatingMarginCalculation(quartersDataThisFY[0], quartersDataThisFY[1]), operatingMarginCalculation(quartersDataLastFY[0], quartersDataLastFY[1])];
    
    let cumulativeOpMarginsThisAndLastFY: Earnings[][] = [
        operatingMarginCalculation(dataThisFY[0], dataThisFY[1]), operatingMarginCalculation(dataLastFY[0], dataLastFY[1])
    ];

    let thisFY: string = elem.fiscalYear;
    let lastFY: string = thisFY.slice(0, 4) + (Number(thisFY.slice(-4)) - 1).toString();

    let marchThisFY: string = "March " + thisFY.slice(4);
    let marchLastFY: string = "March " + lastFY.slice(4);
    // this will need a refactoring...
    const graphMake = {
        thisFY: thisFY,
        lastFY: lastFY,
        marchThisFY: marchThisFY,
        marchLastFY: marchLastFY,
        qtrNetSalesThisFY: quartersDataThisFY[0],
        qtrOperatingIncomeThisFY: quartersDataThisFY[1],
        qtrOpMarginThisFY: quartersOpMarginsThisAndLastFY[0],
        qtrNetIncomeThisFY: quartersDataThisFY[2],
        cmlNetSalesThisFY: dataThisFY[0],
        cmlOperatingIncomeThisFY: dataThisFY[1],
        cmlOpMarginThisFY: cumulativeOpMarginsThisAndLastFY[0],
        cmlNetIncomeThisFY: dataThisFY[2],
        qtrNetSalesLastFY: quartersDataLastFY[0],
        qtrOperatingIncomeLastFY: quartersDataLastFY[1],
        qtrOpMarginLastFY: quartersOpMarginsThisAndLastFY[1],
        qtrNetIncomeLastFY: quartersDataLastFY[2],
        cmlNetSalesLastFY: dataLastFY[0],
        cmlOperatingIncomeLastFY: dataLastFY[1],
        cmlOpMarginLastFY: cumulativeOpMarginsThisAndLastFY[1],
        cmlNetIncomeLastFY: dataLastFY[2],
    };

    return graphMake
    }).filter(elem => elem !== undefined)
};

// export const nintendoConsolidatedEarningsList = consolidatedEarningsList(collectionNintendo, 35);
let averageTimeMapOverObject = 0;
for (let i = 0; i < 100; i++) {
   const t0 = performance.now(); 
    const testingLoop = consolidatedEarningsListV2Array(collectionNintendoV2, 35);
   const t1 = performance.now();
   averageTimeMapOverObject = averageTimeMapOverObject + (t1 - t0); 
}
console.log("Array Object:");
console.log(`Loops: ${100}, Time per loop: ${averageTimeMapOverObject / 100} milliseconds, Total Time: ${averageTimeMapOverObject / 1000} seconds.`)

// export const nintendoConsolidatedEarningsList = consolidatedEarningsListV2Array(collectionNintendoV2, 35);

export const nintendoConsolidatedEarningsGraphList = consolidatedEarningsGraphList(collectionNintendo);

// export const capcomConsolidatedEarningsList = consolidatedEarningsList(collectionCapcom, 35);
export const capcomConsolidatedEarningsList = consolidatedEarningsListV2Array(collectionCapcomV2, 35);

export const capcomConsolidatedEarningsGraphList = consolidatedEarningsGraphList(collectionCapcom);

// export const bandaiNamcoConsolidatedEarningsList = consolidatedEarningsList(collectionBandaiNamco, 38);
export const bandaiNamcoConsolidatedEarningsList = consolidatedEarningsListV2Array(collectionBandaiNamcoV2, 38);

export const bandaiNamcoConsolidatedEarningsGraphList = consolidatedEarningsGraphList(collectionBandaiNamco);

// export const koeiTecmoConsolidatedEarningsList = consolidatedEarningsList(collectionKoeiTecmo, 42);
export const koeiTecmoConsolidatedEarningsList = consolidatedEarningsListV2Array(collectionKoeiTecmoV2, 42);

export const koeiTecmoConsolidatedEarningsGraphList = consolidatedEarningsGraphList(collectionKoeiTecmo);

// export const segaConsolidatedEarningsList = consolidatedEarningsList(collectionSegaSammy, 38);
export const segaConsolidatedEarningsList = consolidatedEarningsListV2Array(collectionSegaSammyV2, 38);

export const segaConsolidatedEarningsGraphList = consolidatedEarningsGraphList(collectionSegaSammy);

// export const squareEnixConsolidatedEarningsList = consolidatedEarningsList(collectionSquareEnix, 42);
export const squareEnixConsolidatedEarningsList = consolidatedEarningsListV2Array(collectionSquareEnixV2, 42);

export const squareEnixConsolidatedEarningsGraphList = consolidatedEarningsGraphList(collectionSquareEnix);

// const 

function consolidatedEarningsListV2Array(collection: EarningsJSONV2[], headerLength: number): string[] {

    return collection.map((elem, index, array) => {

        const currentQuarter = elem.currentQuarter;

        const makeDateLabel = dateLabel(elem?.fiscalYear ?? "N/A", elem?.currentQuarter ?? 4);


        const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)


        const header: Header = {
            companyName: elem.companyName,
            fiscalYear: elem.fiscalYear,
            title: (elem.companyName === "CAPCOM Co., Ltd." || elem.companyName === "SQUARE ENIX HOLDINGS CO., LTD.") ? "Consolidated Financial Results" : "Consolidated Operating Results",
        };


        const dataThisFY: EarningsV2[] = elem.data.map(value => valuesMakeV2(value, elem.fiscalYear));

        const dataLastFY: EarningsV2[] = (!array[index+1]) 
            ? elem.data.map(value => valuesMakeV2(undefined, elem.fiscalYear)) 
            : array[index+1].data.map(value => valuesMakeV2(value, elem.fiscalYear));

        const percentagesThisFY: EarningsV2[] = dataThisFY.map((elem, index) => {
            return {
                ...elem,
                Q1QtrValue: yearOnYearCalculationV2(elem.Q1QtrValue, dataLastFY[index].Q1QtrValue, "Quarter"),
                Q2QtrValue: yearOnYearCalculationV2(elem.Q2QtrValue, dataLastFY[index].Q2QtrValue, "Quarter"),
                Q3QtrValue: yearOnYearCalculationV2(elem.Q3QtrValue, dataLastFY[index].Q3QtrValue, "Quarter"),
                Q4QtrValue: yearOnYearCalculationV2(elem.Q4QtrValue, dataLastFY[index].Q4QtrValue, "Quarter"),
                Q1CmlValue: yearOnYearCalculationV2(elem.Q1CmlValue, dataLastFY[index].Q1CmlValue, "Cumulative"),
                Q2CmlValue: yearOnYearCalculationV2(elem.Q2CmlValue, dataLastFY[index].Q2CmlValue, "Cumulative"),
                Q3CmlValue: yearOnYearCalculationV2(elem.Q3CmlValue, dataLastFY[index].Q3CmlValue, "Cumulative"),
                Q4CmlValue: yearOnYearCalculationV2(elem.Q4CmlValue, dataLastFY[index].Q4CmlValue, "Cumulative"),
                forecastThisFY: yearOnYearCalculationV2(elem.forecastThisFY, dataLastFY[index].forecastThisFY, "Forecast"),
                forecastRevision1: yearOnYearCalculationV2(elem.forecastRevision1, dataLastFY[index].forecastRevision1, "Forecast"),
                forecastRevision2: yearOnYearCalculationV2(elem.forecastRevision2, dataLastFY[index].forecastRevision2, "Forecast"),
                forecastRevision3: yearOnYearCalculationV2(elem.forecastRevision3, dataLastFY[index].forecastRevision3, "Forecast"),
                forecastNextFY: yearOnYearCalculationV2(elem.forecastNextFY, dataLastFY[index].forecastNextFY, "Forecast"),
            } satisfies EarningsV2
        })

        const printOne = headerPrint([
            header.companyName + " | " + header.fiscalYear,
            header.title
        ],headerLength) + "\n" + printDateLabel;

        const printEach = Array.from({length: dataThisFY.length + 1}, (v, i) => {

            if (i === 2) {

                let toOpMargin = {
                    ...dataThisFY[1],
                    name: "Operating Margin",
                    Q1QtrValue: operatingMarginCalculationV2(dataThisFY[0].Q1QtrValue, dataThisFY[1].Q1QtrValue, "Quarter"),
                    Q2QtrValue: operatingMarginCalculationV2(dataThisFY[0].Q2QtrValue, dataThisFY[1].Q2QtrValue, "Quarter"),
                    Q3QtrValue: operatingMarginCalculationV2(dataThisFY[0].Q3QtrValue, dataThisFY[1].Q3QtrValue, "Quarter"),
                    Q4QtrValue: operatingMarginCalculationV2(dataThisFY[0].Q4QtrValue, dataThisFY[1].Q4QtrValue, "Quarter"),
                    Q1CmlValue: operatingMarginCalculationV2(dataThisFY[0].Q1CmlValue, dataThisFY[1].Q1CmlValue, "Cumulative"),
                    Q2CmlValue: operatingMarginCalculationV2(dataThisFY[0].Q2CmlValue, dataThisFY[1].Q2CmlValue, "Cumulative"),
                    Q3CmlValue: operatingMarginCalculationV2(dataThisFY[0].Q3CmlValue, dataThisFY[1].Q3CmlValue, "Cumulative"),
                    Q4CmlValue: operatingMarginCalculationV2(dataThisFY[0].Q4CmlValue, dataThisFY[1].Q4CmlValue, "Cumulative"),
                    forecastThisFY: operatingMarginCalculationV2(dataThisFY[0].forecastThisFY, dataThisFY[1].forecastThisFY, "Forecast"), 
                    forecastRevision1: operatingMarginCalculationV2(dataThisFY[0].forecastRevision1, dataThisFY[1].forecastRevision1, "Forecast"), 
                    forecastRevision2: operatingMarginCalculationV2(dataThisFY[0].forecastRevision2, dataThisFY[1].forecastRevision2, "Forecast"), 
                    forecastRevision3: operatingMarginCalculationV2(dataThisFY[0].forecastRevision3, dataThisFY[1].forecastRevision3, "Forecast"), 
                    forecastNextFY: operatingMarginCalculationV2(dataThisFY[0].forecastNextFY, dataThisFY[1].forecastNextFY, "Forecast"), 
                } satisfies EarningsV2

                let sectionHeader = printSectionHeaderV2(toOpMargin, false);

                let quarters = [
                    printQuarterValuesV2(toOpMargin.Q1QtrValue, currentQuarter, 13),
                    printQuarterValuesV2(toOpMargin.Q2QtrValue, currentQuarter, 13),
                    printQuarterValuesV2(toOpMargin.Q3QtrValue, currentQuarter, 13),
                    printQuarterValuesV2(toOpMargin.Q4QtrValue, currentQuarter, 13),
                ];
                
                let cumulatives = [
                    printCumulativeValuesV2(toOpMargin.Q1CmlValue, currentQuarter, 13),
                    printCumulativeValuesV2(toOpMargin.Q2CmlValue, currentQuarter, 13),
                    printCumulativeValuesV2(toOpMargin.Q3CmlValue, currentQuarter, 13),
                    printCumulativeValuesV2(toOpMargin.Q4CmlValue, currentQuarter, 13),
                ];

                let forecasts = [
                    printForecastValuesV2(toOpMargin.forecastThisFY, 13),
                    printForecastValuesV2(toOpMargin.forecastRevision1, 13),
                    printForecastValuesV2(toOpMargin.forecastRevision2, 13),
                    printForecastValuesV2(toOpMargin.forecastRevision3, 13),
                    printForecastValuesV2(toOpMargin.forecastNextFY, 13),
                ];

                let output = printReduceSection(
                    sectionHeader,
                    qtrOrCmlOutput(quarters,[],true),
                    qtrOrCmlOutput(cumulatives,[],true),
                    forecastOutput(forecasts),
                )

                return output
            } else if (i > 2) {

                let sectionHeader = printSectionHeaderV2(dataThisFY[i-1], true)

                let quarters = [
                    printQuarterValuesV2(dataThisFY[i-1].Q1QtrValue, currentQuarter, 13),
                    printQuarterValuesV2(dataThisFY[i-1].Q2QtrValue, currentQuarter, 13),
                    printQuarterValuesV2(dataThisFY[i-1].Q3QtrValue, currentQuarter, 13),
                    printQuarterValuesV2(dataThisFY[i-1].Q4QtrValue, currentQuarter, 13),
                ];

                let quarterPercentages = [
                    printYoYV2(percentagesThisFY[i-1].Q1QtrValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i-1].Q2QtrValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i-1].Q3QtrValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i-1].Q4QtrValue, currentQuarter, 12),
                ];

                let cumulatives = [
                    printCumulativeValuesV2(dataThisFY[i-1].Q1CmlValue, currentQuarter, 13),
                    printCumulativeValuesV2(dataThisFY[i-1].Q2CmlValue, currentQuarter, 13),
                    printCumulativeValuesV2(dataThisFY[i-1].Q3CmlValue, currentQuarter, 13),
                    printCumulativeValuesV2(dataThisFY[i-1].Q4CmlValue, currentQuarter, 13),
                ];

                let cumulativePercentages = [
                    printYoYV2(percentagesThisFY[i-1].Q1CmlValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i-1].Q2CmlValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i-1].Q3CmlValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i-1].Q4CmlValue, currentQuarter, 12),
                ];

                let forecasts = [
                    printForecastValuesV2(dataThisFY[i-1].forecastThisFY, 13),
                    printForecastValuesV2(dataThisFY[i-1].forecastRevision1, 13),
                    printForecastValuesV2(dataThisFY[i-1].forecastRevision2, 13),
                    printForecastValuesV2(dataThisFY[i-1].forecastRevision3, 13),
                    printForecastValuesV2(dataThisFY[i-1].forecastNextFY, 13),
                ];

                let output = printReduceSection(
                    sectionHeader,
                    qtrOrCmlOutput(quarters,quarterPercentages,false),
                    qtrOrCmlOutput(cumulatives,cumulativePercentages,false),
                    forecastOutput(forecasts),
                )

                return output
            } else {

                let sectionHeader = printSectionHeaderV2(dataThisFY[i], true)

                let quarters = [
                    printQuarterValuesV2(dataThisFY[i].Q1QtrValue, currentQuarter, 13),
                    printQuarterValuesV2(dataThisFY[i].Q2QtrValue, currentQuarter, 13),
                    printQuarterValuesV2(dataThisFY[i].Q3QtrValue, currentQuarter, 13),
                    printQuarterValuesV2(dataThisFY[i].Q4QtrValue, currentQuarter, 13),
                ];

                let quarterPercentages = [
                    printYoYV2(percentagesThisFY[i].Q1QtrValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i].Q2QtrValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i].Q3QtrValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i].Q4QtrValue, currentQuarter, 12),
                ];

                let cumulatives = [
                    printCumulativeValuesV2(dataThisFY[i].Q1CmlValue, currentQuarter, 13),
                    printCumulativeValuesV2(dataThisFY[i].Q2CmlValue, currentQuarter, 13),
                    printCumulativeValuesV2(dataThisFY[i].Q3CmlValue, currentQuarter, 13),
                    printCumulativeValuesV2(dataThisFY[i].Q4CmlValue, currentQuarter, 13),
                ];

                let cumulativePercentages = [
                    printYoYV2(percentagesThisFY[i].Q1CmlValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i].Q2CmlValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i].Q3CmlValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i].Q4CmlValue, currentQuarter, 12),
                ];

                let forecasts = [
                    printForecastValuesV2(dataThisFY[i].forecastThisFY, 13),
                    printForecastValuesV2(dataThisFY[i].forecastRevision1, 13),
                    printForecastValuesV2(dataThisFY[i].forecastRevision2, 13),
                    printForecastValuesV2(dataThisFY[i].forecastRevision3, 13),
                    printForecastValuesV2(dataThisFY[i].forecastNextFY, 13),
                ];

                let output = printReduceSection(
                    sectionHeader,
                    qtrOrCmlOutput(quarters,quarterPercentages,false),
                    qtrOrCmlOutput(cumulatives,cumulativePercentages,false),
                    forecastOutput(forecasts),
                )

                return output
            }
        })

        return [printOne, ...printEach].reduce((acc, next) => acc + "\n" + next)
    })
}

export const nintendoConsolidatedEarningsList = new Map<number, EarningsJSONV2 | string>()

for (let i = 0; i < collectionNintendoV2.length; i++) {
    nintendoConsolidatedEarningsList.set(i, collectionNintendoV2[i])
}

// collectionNintendoV2.map((elem, index) => nintendoMap.set(index, elem))

nintendoConsolidatedEarningsList.forEach((value, key, map) => {
    map.set(key,consolidatedEarningsListV2Map(value as EarningsJSONV2, map.get(key+1) as EarningsJSONV2 | undefined,35))
})

nintendoConsolidatedEarningsList.forEach((value, key, map) => {
    console.log(value)
})

// export const nintendoConsolidatedEarningsList = consolidatedEarningsListV2Array(collectionNintendoV2, 35);

function consolidatedEarningsListV2Map(collection: EarningsJSONV2, lastFYCollection: EarningsJSONV2 | undefined, headerLength: number): string {

        const currentQuarter = collection.currentQuarter;

        const makeDateLabel = dateLabel(collection?.fiscalYear ?? "N/A", collection?.currentQuarter ?? 4);


        const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)


        const header: Header = {
            companyName: collection.companyName,
            fiscalYear: collection.fiscalYear,
            title: (collection.companyName === "CAPCOM Co., Ltd." || collection.companyName === "SQUARE ENIX HOLDINGS CO., LTD.") ? "Consolidated Financial Results" : "Consolidated Operating Results",
        };


        const dataThisFY: EarningsV2[] = collection.data.map(value => valuesMakeV2(value, collection.fiscalYear));

        const dataLastFY: EarningsV2[] = (!lastFYCollection) 
            ? collection.data.map(value => valuesMakeV2(undefined, collection.fiscalYear)) 
            : lastFYCollection.data.map(value => valuesMakeV2(value, lastFYCollection.fiscalYear));

        const percentagesThisFY: EarningsV2[] = dataThisFY.map((elem, index) => {
            return {
                ...elem,
                Q1QtrValue: yearOnYearCalculationV2(elem.Q1QtrValue, dataLastFY[index].Q1QtrValue, "Quarter"),
                Q2QtrValue: yearOnYearCalculationV2(elem.Q2QtrValue, dataLastFY[index].Q2QtrValue, "Quarter"),
                Q3QtrValue: yearOnYearCalculationV2(elem.Q3QtrValue, dataLastFY[index].Q3QtrValue, "Quarter"),
                Q4QtrValue: yearOnYearCalculationV2(elem.Q4QtrValue, dataLastFY[index].Q4QtrValue, "Quarter"),
                Q1CmlValue: yearOnYearCalculationV2(elem.Q1CmlValue, dataLastFY[index].Q1CmlValue, "Cumulative"),
                Q2CmlValue: yearOnYearCalculationV2(elem.Q2CmlValue, dataLastFY[index].Q2CmlValue, "Cumulative"),
                Q3CmlValue: yearOnYearCalculationV2(elem.Q3CmlValue, dataLastFY[index].Q3CmlValue, "Cumulative"),
                Q4CmlValue: yearOnYearCalculationV2(elem.Q4CmlValue, dataLastFY[index].Q4CmlValue, "Cumulative"),
                forecastThisFY: yearOnYearCalculationV2(elem.forecastThisFY, dataLastFY[index].forecastThisFY, "Forecast"),
                forecastRevision1: yearOnYearCalculationV2(elem.forecastRevision1, dataLastFY[index].forecastRevision1, "Forecast"),
                forecastRevision2: yearOnYearCalculationV2(elem.forecastRevision2, dataLastFY[index].forecastRevision2, "Forecast"),
                forecastRevision3: yearOnYearCalculationV2(elem.forecastRevision3, dataLastFY[index].forecastRevision3, "Forecast"),
                forecastNextFY: yearOnYearCalculationV2(elem.forecastNextFY, dataLastFY[index].forecastNextFY, "Forecast"),
            } satisfies EarningsV2
        })

        const printOne = headerPrint([
            header.companyName + " | " + header.fiscalYear,
            header.title
        ],headerLength) + "\n" + printDateLabel;

        const printEach = Array.from({length: dataThisFY.length + 1}, (v, i) => {

            if (i === 2) {

                let toOpMargin = {
                    ...dataThisFY[1],
                    name: "Operating Margin",
                    Q1QtrValue: operatingMarginCalculationV2(dataThisFY[0].Q1QtrValue, dataThisFY[1].Q1QtrValue, "Quarter"),
                    Q2QtrValue: operatingMarginCalculationV2(dataThisFY[0].Q2QtrValue, dataThisFY[1].Q2QtrValue, "Quarter"),
                    Q3QtrValue: operatingMarginCalculationV2(dataThisFY[0].Q3QtrValue, dataThisFY[1].Q3QtrValue, "Quarter"),
                    Q4QtrValue: operatingMarginCalculationV2(dataThisFY[0].Q4QtrValue, dataThisFY[1].Q4QtrValue, "Quarter"),
                    Q1CmlValue: operatingMarginCalculationV2(dataThisFY[0].Q1CmlValue, dataThisFY[1].Q1CmlValue, "Cumulative"),
                    Q2CmlValue: operatingMarginCalculationV2(dataThisFY[0].Q2CmlValue, dataThisFY[1].Q2CmlValue, "Cumulative"),
                    Q3CmlValue: operatingMarginCalculationV2(dataThisFY[0].Q3CmlValue, dataThisFY[1].Q3CmlValue, "Cumulative"),
                    Q4CmlValue: operatingMarginCalculationV2(dataThisFY[0].Q4CmlValue, dataThisFY[1].Q4CmlValue, "Cumulative"),
                    forecastThisFY: operatingMarginCalculationV2(dataThisFY[0].forecastThisFY, dataThisFY[1].forecastThisFY, "Forecast"), 
                    forecastRevision1: operatingMarginCalculationV2(dataThisFY[0].forecastRevision1, dataThisFY[1].forecastRevision1, "Forecast"), 
                    forecastRevision2: operatingMarginCalculationV2(dataThisFY[0].forecastRevision2, dataThisFY[1].forecastRevision2, "Forecast"), 
                    forecastRevision3: operatingMarginCalculationV2(dataThisFY[0].forecastRevision3, dataThisFY[1].forecastRevision3, "Forecast"), 
                    forecastNextFY: operatingMarginCalculationV2(dataThisFY[0].forecastNextFY, dataThisFY[1].forecastNextFY, "Forecast"), 
                } satisfies EarningsV2

                let sectionHeader = printSectionHeaderV2(toOpMargin, false);

                let quarters = [
                    printQuarterValuesV2(toOpMargin.Q1QtrValue, currentQuarter, 13),
                    printQuarterValuesV2(toOpMargin.Q2QtrValue, currentQuarter, 13),
                    printQuarterValuesV2(toOpMargin.Q3QtrValue, currentQuarter, 13),
                    printQuarterValuesV2(toOpMargin.Q4QtrValue, currentQuarter, 13),
                ];
                
                let cumulatives = [
                    printCumulativeValuesV2(toOpMargin.Q1CmlValue, currentQuarter, 13),
                    printCumulativeValuesV2(toOpMargin.Q2CmlValue, currentQuarter, 13),
                    printCumulativeValuesV2(toOpMargin.Q3CmlValue, currentQuarter, 13),
                    printCumulativeValuesV2(toOpMargin.Q4CmlValue, currentQuarter, 13),
                ];

                let forecasts = [
                    printForecastValuesV2(toOpMargin.forecastThisFY, 13),
                    printForecastValuesV2(toOpMargin.forecastRevision1, 13),
                    printForecastValuesV2(toOpMargin.forecastRevision2, 13),
                    printForecastValuesV2(toOpMargin.forecastRevision3, 13),
                    printForecastValuesV2(toOpMargin.forecastNextFY, 13),
                ];

                let output = printReduceSection(
                    sectionHeader,
                    qtrOrCmlOutput(quarters,[],true),
                    qtrOrCmlOutput(cumulatives,[],true),
                    forecastOutput(forecasts),
                )

                return output
            } else if (i > 2) {

                let sectionHeader = printSectionHeaderV2(dataThisFY[i-1], true)

                let quarters = [
                    printQuarterValuesV2(dataThisFY[i-1].Q1QtrValue, currentQuarter, 13),
                    printQuarterValuesV2(dataThisFY[i-1].Q2QtrValue, currentQuarter, 13),
                    printQuarterValuesV2(dataThisFY[i-1].Q3QtrValue, currentQuarter, 13),
                    printQuarterValuesV2(dataThisFY[i-1].Q4QtrValue, currentQuarter, 13),
                ];

                let quarterPercentages = [
                    printYoYV2(percentagesThisFY[i-1].Q1QtrValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i-1].Q2QtrValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i-1].Q3QtrValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i-1].Q4QtrValue, currentQuarter, 12),
                ];

                let cumulatives = [
                    printCumulativeValuesV2(dataThisFY[i-1].Q1CmlValue, currentQuarter, 13),
                    printCumulativeValuesV2(dataThisFY[i-1].Q2CmlValue, currentQuarter, 13),
                    printCumulativeValuesV2(dataThisFY[i-1].Q3CmlValue, currentQuarter, 13),
                    printCumulativeValuesV2(dataThisFY[i-1].Q4CmlValue, currentQuarter, 13),
                ];

                let cumulativePercentages = [
                    printYoYV2(percentagesThisFY[i-1].Q1CmlValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i-1].Q2CmlValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i-1].Q3CmlValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i-1].Q4CmlValue, currentQuarter, 12),
                ];

                let forecasts = [
                    printForecastValuesV2(dataThisFY[i-1].forecastThisFY, 13),
                    printForecastValuesV2(dataThisFY[i-1].forecastRevision1, 13),
                    printForecastValuesV2(dataThisFY[i-1].forecastRevision2, 13),
                    printForecastValuesV2(dataThisFY[i-1].forecastRevision3, 13),
                    printForecastValuesV2(dataThisFY[i-1].forecastNextFY, 13),
                ];

                let output = printReduceSection(
                    sectionHeader,
                    qtrOrCmlOutput(quarters,quarterPercentages,false),
                    qtrOrCmlOutput(cumulatives,cumulativePercentages,false),
                    forecastOutput(forecasts),
                )

                return output
            } else {

                let sectionHeader = printSectionHeaderV2(dataThisFY[i], true)

                let quarters = [
                    printQuarterValuesV2(dataThisFY[i].Q1QtrValue, currentQuarter, 13),
                    printQuarterValuesV2(dataThisFY[i].Q2QtrValue, currentQuarter, 13),
                    printQuarterValuesV2(dataThisFY[i].Q3QtrValue, currentQuarter, 13),
                    printQuarterValuesV2(dataThisFY[i].Q4QtrValue, currentQuarter, 13),
                ];

                let quarterPercentages = [
                    printYoYV2(percentagesThisFY[i].Q1QtrValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i].Q2QtrValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i].Q3QtrValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i].Q4QtrValue, currentQuarter, 12),
                ];

                let cumulatives = [
                    printCumulativeValuesV2(dataThisFY[i].Q1CmlValue, currentQuarter, 13),
                    printCumulativeValuesV2(dataThisFY[i].Q2CmlValue, currentQuarter, 13),
                    printCumulativeValuesV2(dataThisFY[i].Q3CmlValue, currentQuarter, 13),
                    printCumulativeValuesV2(dataThisFY[i].Q4CmlValue, currentQuarter, 13),
                ];

                let cumulativePercentages = [
                    printYoYV2(percentagesThisFY[i].Q1CmlValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i].Q2CmlValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i].Q3CmlValue, currentQuarter, 12),
                    printYoYV2(percentagesThisFY[i].Q4CmlValue, currentQuarter, 12),
                ];

                let forecasts = [
                    printForecastValuesV2(dataThisFY[i].forecastThisFY, 13),
                    printForecastValuesV2(dataThisFY[i].forecastRevision1, 13),
                    printForecastValuesV2(dataThisFY[i].forecastRevision2, 13),
                    printForecastValuesV2(dataThisFY[i].forecastRevision3, 13),
                    printForecastValuesV2(dataThisFY[i].forecastNextFY, 13),
                ];

                let output = printReduceSection(
                    sectionHeader,
                    qtrOrCmlOutput(quarters,quarterPercentages,false),
                    qtrOrCmlOutput(cumulatives,cumulativePercentages,false),
                    forecastOutput(forecasts),
                )

                return output
            }
        })

        return [printOne, ...printEach].reduce((acc, next) => acc + "\n" + next)
}