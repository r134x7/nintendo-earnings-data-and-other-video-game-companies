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

const collectionNintendoV2 = new Map<number, EarningsJSONV2>([
    [0, nintendoConsolidatedEarnings2023],
    [1, nintendoConsolidatedEarnings2022],
    [2, nintendoConsolidatedEarnings2021],
    [3, nintendoConsolidatedEarnings2020],
    [4, nintendoConsolidatedEarnings2019],
    [5, nintendoConsolidatedEarnings2018],
    [6, nintendoConsolidatedEarnings2017],
    [7, nintendoConsolidatedEarnings2016],
    [8, nintendoConsolidatedEarnings2015],
    [9, nintendoConsolidatedEarnings2014],
    [10, nintendoConsolidatedEarnings2013],
    [11, nintendoConsolidatedEarnings2012],
    [12, nintendoConsolidatedEarnings2011],
    [13, nintendoConsolidatedEarnings2010],
    [14, nintendoConsolidatedEarnings2009],
    [15, nintendoConsolidatedEarnings2008],
    [16, nintendoConsolidatedEarnings2007],
    [17, nintendoConsolidatedEarnings2006],
    [18, nintendoConsolidatedEarnings2005],
    [19, nintendoConsolidatedEarnings2004],
]);

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

const collectionCapcomV2 = new Map<number, EarningsJSONV2>([
    [0, capcomEarnings2023],
    [1, capcomEarnings2022],
    [2, capcomEarnings2021],
    [3, capcomEarnings2020],
    [4, capcomEarnings2019],
    [5, capcomEarnings2018],
    [6, capcomEarnings2017],
    [7, capcomEarnings2016],
    [8, capcomEarnings2015],
    [9, capcomEarnings2014],
    [10, capcomEarnings2013],
    [11, capcomEarnings2012],
    [12, capcomEarnings2011],
    [13, capcomEarnings2010],
    [14, capcomEarnings2009],
    [15, capcomEarnings2008],
    [16, capcomEarnings2007],
    [17, capcomEarnings2006],
    [18, capcomEarnings2005],
    [19, capcomEarnings2004],
]);

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

const collectionBandaiNamcoV2 = new Map<number, EarningsJSONV2>([
    [0, bandaiNamco2023],
    [1, bandaiNamco2022],
    [2, bandaiNamco2021],
    [3, bandaiNamco2020],
    [4, bandaiNamco2019],
    [5, bandaiNamco2018],
    [6, bandaiNamco2017],
    [7, bandaiNamco2016],
    [8, bandaiNamco2015],
    [9, bandaiNamco2014],
    [10, bandaiNamco2013],
    [11, bandaiNamco2012],
    [12, bandaiNamco2011],
    [13, bandaiNamco2010],
    [14, bandaiNamco2009],
    [15, bandaiNamco2008],
    [16, bandaiNamco2007],
    [17, bandaiNamco2006],
]);

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

const collectionSegaSammyV2 = new Map<number, EarningsJSONV2>([
    [0, sega2023],
    [1, sega2022],
    [2, sega2021],
    [3, sega2020],
    [4, sega2019],
    [5, sega2018],
    [6, sega2017],
    [7, sega2016],
    [8, sega2015],
    [9, sega2014],
    [10, sega2013],
    [11, sega2012],
    [12, sega2011],
    [13, sega2010],
    [14, sega2009],
    [15, sega2008],
    [16, sega2007],
    [17, sega2006],
    [18, sega2005],
]);

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

const collectionKoeiTecmoV2 = new Map<number, EarningsJSONV2>([
    [0, koeiTecmo2023],
    [1, koeiTecmo2022],
    [2, koeiTecmo2021],
    [3, koeiTecmo2020],
    [4, koeiTecmo2019],
    [5, koeiTecmo2018],
    [6, koeiTecmo2017],
    [7, koeiTecmo2016],
    [8, koeiTecmo2015],
    [9, koeiTecmo2014],
    [10, koeiTecmo2013],
    [11, koeiTecmo2012],
    [12, koeiTecmo2011],
    [13, koeiTecmo2010],
]);

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

const collectionSquareEnixV2 = new Map<number, EarningsJSONV2>([
    [0, squareEnix2023],
    [1, squareEnix2022],
    [2, squareEnix2021],
    [3, squareEnix2020],
    [4, squareEnix2019],
    [5, squareEnix2018],
    [6, squareEnix2017],
    [7, squareEnix2016],
    [8, squareEnix2015],
    [9, squareEnix2014],
    [10, squareEnix2013],
    [11, squareEnix2012],
    [12, squareEnix2011],
    [13, squareEnix2010],
    [14, squareEnix2009],
    [15, squareEnix2008],
    [16, squareEnix2007],
    [17, squareEnix2006],
    [18, squareEnix2005],
    [19, squareEnix2004],
]);

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

export const nintendoConsolidatedEarningsList = new Map<number, string>();

collectionNintendoV2.forEach((value, key, map) => {
    nintendoConsolidatedEarningsList.set(key,consolidatedEarningsListV2Map(value, map.get(key+1),35))
});

export const nintendoConsolidatedEarningsGraphList = consolidatedEarningsGraphList(collectionNintendo);

export const capcomConsolidatedEarningsList = new Map<number, string>();

collectionCapcomV2.forEach((value, key, map) => capcomConsolidatedEarningsList.set(key, consolidatedEarningsListV2Map(value, map.get(key+1), 35)))

export const capcomConsolidatedEarningsGraphList = consolidatedEarningsGraphList(collectionCapcom);

export const bandaiNamcoConsolidatedEarningsList = new Map<number, string>();

collectionBandaiNamcoV2.forEach((value, key, map) => bandaiNamcoConsolidatedEarningsList.set(key, consolidatedEarningsListV2Map(value, map.get(key+1), 38)))

export const bandaiNamcoConsolidatedEarningsGraphList = consolidatedEarningsGraphList(collectionBandaiNamco);

export const koeiTecmoConsolidatedEarningsList = new Map<number, string>();

collectionKoeiTecmoV2.forEach((value, key, map) => koeiTecmoConsolidatedEarningsList.set(key, consolidatedEarningsListV2Map(value, map.get(key+1), 42)))

export const koeiTecmoConsolidatedEarningsGraphList = consolidatedEarningsGraphList(collectionKoeiTecmo);

export const segaConsolidatedEarningsList = new Map<number, string>();

collectionSegaSammyV2.forEach((value, key, map) => segaConsolidatedEarningsList.set(key, consolidatedEarningsListV2Map(value, map.get(key+1), 38)))

export const segaConsolidatedEarningsGraphList = consolidatedEarningsGraphList(collectionSegaSammy);

export const squareEnixConsolidatedEarningsList = new Map<number, string>();

collectionSquareEnixV2.forEach((value, key, map) => squareEnixConsolidatedEarningsList.set(key, consolidatedEarningsListV2Map(value, map.get(key+1), 42)))

export const squareEnixConsolidatedEarningsGraphList = consolidatedEarningsGraphList(collectionSquareEnix);

function consolidatedEarningsListV2Map(collection: EarningsJSONV2, lastFYCollection: EarningsJSONV2 | undefined, headerLength: number): string {

        const currentQuarter = collection.currentQuarter;

        const makeDateLabel = dateLabel(collection?.fiscalYear ?? "N/A", collection?.currentQuarter ?? 4);

        const none: EarningsValue = { kind:"Nothing" };

        const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

        const header: Header = {
            companyName: collection.companyName,
            fiscalYear: collection.fiscalYear,
            title: (collection.companyName === "CAPCOM Co., Ltd." || collection.companyName === "SQUARE ENIX HOLDINGS CO., LTD.") ? "Consolidated Financial Results" : "Consolidated Operating Results",
        };

        const dataThisFY = getData(collection, collection.data.length);

        const dataLastFY = getData(lastFYCollection, collection.data.length);

        const percentagesThisFY = new Map<number, EarningsV2>(); 
        dataThisFY.forEach((value, key, map) => {
            percentagesThisFY.set(key, {
                ...value,
                Q1QtrValue: yearOnYearCalculationV2(value.Q1QtrValue, dataLastFY.get(key)?.Q1QtrValue ?? none, "Quarter"),
                Q2QtrValue: yearOnYearCalculationV2(value.Q2QtrValue, dataLastFY.get(key)?.Q2QtrValue ?? none, "Quarter"),
                Q3QtrValue: yearOnYearCalculationV2(value.Q3QtrValue, dataLastFY.get(key)?.Q3QtrValue ?? none, "Quarter"),
                Q4QtrValue: yearOnYearCalculationV2(value.Q4QtrValue, dataLastFY.get(key)?.Q4QtrValue ?? none, "Quarter"),
                Q1CmlValue: yearOnYearCalculationV2(value.Q1CmlValue, dataLastFY.get(key)?.Q1CmlValue ?? none, "Cumulative"),
                Q2CmlValue: yearOnYearCalculationV2(value.Q2CmlValue, dataLastFY.get(key)?.Q2CmlValue ?? none, "Cumulative"),
                Q3CmlValue: yearOnYearCalculationV2(value.Q3CmlValue, dataLastFY.get(key)?.Q3CmlValue ?? none, "Cumulative"),
                Q4CmlValue: yearOnYearCalculationV2(value.Q4CmlValue, dataLastFY.get(key)?.Q4CmlValue ?? none, "Cumulative"),
                forecastThisFY: yearOnYearCalculationV2(value.forecastThisFY, dataLastFY.get(key)?.forecastThisFY ?? none, "Forecast"),
                forecastRevision1: yearOnYearCalculationV2(value.forecastRevision1, dataLastFY.get(key)?.forecastRevision1 ?? none, "Forecast"),
                forecastRevision2: yearOnYearCalculationV2(value.forecastRevision2, dataLastFY.get(key)?.forecastRevision2 ?? none, "Forecast"),
                forecastRevision3: yearOnYearCalculationV2(value.forecastRevision3, dataLastFY.get(key)?.forecastRevision3 ?? none, "Forecast"),
                forecastNextFY: yearOnYearCalculationV2(value.forecastNextFY, dataLastFY.get(key)?.forecastNextFY ?? none, "Forecast"),
            } satisfies EarningsV2
            )
        });

        const printOne = headerPrint([
            header.companyName + " | " + header.fiscalYear,
            header.title
        ],headerLength) + "\n" + printDateLabel;

        const opMargin = new Map<number, EarningsV2>([
            [0,
                {
                    ...dataThisFY.get(1),
                    name: "Operating Margin",
                    Q1QtrValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q1QtrValue ?? none, dataThisFY.get(1)?.Q1QtrValue ?? none, "Quarter"),
                    Q2QtrValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q2QtrValue ?? none, dataThisFY.get(1)?.Q2QtrValue ?? none, "Quarter"),
                    Q3QtrValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q3QtrValue ?? none, dataThisFY.get(1)?.Q3QtrValue ?? none, "Quarter"),
                    Q4QtrValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q4QtrValue ?? none, dataThisFY.get(1)?.Q4QtrValue ?? none, "Quarter"),
                    Q1CmlValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q1CmlValue ?? none, dataThisFY.get(1)?.Q1CmlValue ?? none, "Cumulative"),
                    Q2CmlValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q2CmlValue ?? none, dataThisFY.get(1)?.Q2CmlValue ?? none, "Cumulative"),
                    Q3CmlValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q3CmlValue ?? none, dataThisFY.get(1)?.Q3CmlValue ?? none, "Cumulative"),
                    Q4CmlValue: operatingMarginCalculationV2(dataThisFY.get(0)?.Q4CmlValue ?? none, dataThisFY.get(1)?.Q4CmlValue ?? none, "Cumulative"),
                    forecastThisFY: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastThisFY ?? none, dataThisFY.get(1)?.forecastThisFY ?? none, "Forecast"), 
                    forecastRevision1: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastRevision1 ?? none, dataThisFY.get(1)?.forecastRevision1 ?? none, "Forecast"), 
                    forecastRevision2: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastRevision2 ?? none, dataThisFY.get(1)?.forecastRevision2 ?? none, "Forecast"), 
                    forecastRevision3: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastRevision3 ?? none, dataThisFY.get(1)?.forecastRevision3 ?? none, "Forecast"), 
                    forecastNextFY: operatingMarginCalculationV2(dataThisFY.get(0)?.forecastNextFY ?? none, dataThisFY.get(1)?.forecastNextFY ?? none, "Forecast"), 
                } satisfies EarningsV2
            ]
        ]);

        const printEach = new Map<number, string>([
            [0, ""],
            [1, ""],
            [2, ""],
            [3, ""],
        ]);

        printEach.forEach((value, key, map) => {

            if (key === 2) {

                let sectionHeader = printSectionHeaderV2(opMargin.get(0) as EarningsV2, false);

                let quarters = [
                    printQuarterValuesV2(opMargin.get(0)?.Q1QtrValue ?? none, currentQuarter, 13),
                    printQuarterValuesV2(opMargin.get(0)?.Q2QtrValue ?? none, currentQuarter, 13),
                    printQuarterValuesV2(opMargin.get(0)?.Q3QtrValue ?? none, currentQuarter, 13),
                    printQuarterValuesV2(opMargin.get(0)?.Q4QtrValue ?? none, currentQuarter, 13),
                ];
                
                let cumulatives = [
                    printCumulativeValuesV2(opMargin.get(0)?.Q1CmlValue ?? none, currentQuarter, 13),
                    printCumulativeValuesV2(opMargin.get(0)?.Q2CmlValue ?? none, currentQuarter, 13),
                    printCumulativeValuesV2(opMargin.get(0)?.Q3CmlValue ?? none, currentQuarter, 13),
                    printCumulativeValuesV2(opMargin.get(0)?.Q4CmlValue ?? none, currentQuarter, 13),
                ];

                let forecasts = [
                    printForecastValuesV2(opMargin.get(0)?.forecastThisFY ?? none, 13),
                    printForecastValuesV2(opMargin.get(0)?.forecastRevision1 ?? none, 13),
                    printForecastValuesV2(opMargin.get(0)?.forecastRevision2 ?? none, 13),
                    printForecastValuesV2(opMargin.get(0)?.forecastRevision3 ?? none, 13),
                    printForecastValuesV2(opMargin.get(0)?.forecastNextFY ?? none, 13),
                ];

                let output = printReduceSection(
                    sectionHeader,
                    qtrOrCmlOutput(quarters,[],true),
                    qtrOrCmlOutput(cumulatives,[],true),
                    forecastOutput(forecasts),
                )

                map.set(key, output)
            } else if (key > 2) {

                let sectionHeader = printSectionHeaderV2(dataThisFY.get(key-1) as EarningsV2, true)

                let quarters = [
                    printQuarterValuesV2(dataThisFY.get(key-1)?.Q1QtrValue ?? none, currentQuarter, 13),
                    printQuarterValuesV2(dataThisFY.get(key-1)?.Q2QtrValue ?? none, currentQuarter, 13),
                    printQuarterValuesV2(dataThisFY.get(key-1)?.Q3QtrValue ?? none, currentQuarter, 13),
                    printQuarterValuesV2(dataThisFY.get(key-1)?.Q4QtrValue ?? none, currentQuarter, 13),
                ];

                let quarterPercentages = [
                    printYoYV2(percentagesThisFY.get(key-1)?.Q1QtrValue ?? none, currentQuarter, 12),
                    printYoYV2(percentagesThisFY.get(key-1)?.Q2QtrValue ?? none, currentQuarter, 12),
                    printYoYV2(percentagesThisFY.get(key-1)?.Q3QtrValue ?? none, currentQuarter, 12),
                    printYoYV2(percentagesThisFY.get(key-1)?.Q4QtrValue ?? none, currentQuarter, 12),
                ];

                let cumulatives = [
                    printCumulativeValuesV2(dataThisFY.get(key-1)?.Q1CmlValue ?? none, currentQuarter, 13),
                    printCumulativeValuesV2(dataThisFY.get(key-1)?.Q2CmlValue ?? none, currentQuarter, 13),
                    printCumulativeValuesV2(dataThisFY.get(key-1)?.Q3CmlValue ?? none, currentQuarter, 13),
                    printCumulativeValuesV2(dataThisFY.get(key-1)?.Q4CmlValue ?? none, currentQuarter, 13),
                ];

                let cumulativePercentages = [
                    printYoYV2(percentagesThisFY.get(key-1)?.Q1CmlValue ?? none, currentQuarter, 12),
                    printYoYV2(percentagesThisFY.get(key-1)?.Q2CmlValue ?? none, currentQuarter, 12),
                    printYoYV2(percentagesThisFY.get(key-1)?.Q3CmlValue ?? none, currentQuarter, 12),
                    printYoYV2(percentagesThisFY.get(key-1)?.Q4CmlValue ?? none, currentQuarter, 12),
                ];

                let forecasts = [
                    printForecastValuesV2(dataThisFY.get(key-1)?.forecastThisFY ?? none, 13),
                    printForecastValuesV2(dataThisFY.get(key-1)?.forecastRevision1 ?? none, 13),
                    printForecastValuesV2(dataThisFY.get(key-1)?.forecastRevision2 ?? none, 13),
                    printForecastValuesV2(dataThisFY.get(key-1)?.forecastRevision3 ?? none, 13),
                    printForecastValuesV2(dataThisFY.get(key-1)?.forecastNextFY ?? none, 13),
                ];

                let output = printReduceSection(
                    sectionHeader,
                    qtrOrCmlOutput(quarters,quarterPercentages,false),
                    qtrOrCmlOutput(cumulatives,cumulativePercentages,false),
                    forecastOutput(forecasts),
                )

                map.set(key, output)
            } else {

                let sectionHeader = printSectionHeaderV2(dataThisFY.get(key) as EarningsV2, true);

                let quarters = printQuarterSection(
                    dataThisFY.get(key)?.Q1QtrValue ?? none,
                    dataThisFY.get(key)?.Q2QtrValue ?? none,
                    dataThisFY.get(key)?.Q3QtrValue ?? none,
                    dataThisFY.get(key)?.Q4QtrValue ?? none,
                    currentQuarter,
                    13
                ); 

                let quarterPercentages = printQuarterYoYSection(
                    percentagesThisFY.get(key)?.Q1QtrValue ?? none,
                    percentagesThisFY.get(key)?.Q2QtrValue ?? none,
                    percentagesThisFY.get(key)?.Q3QtrValue ?? none,
                    percentagesThisFY.get(key)?.Q4QtrValue ?? none, currentQuarter, 
                    12
                );

                let cumulatives = printCmlSection(
                    dataThisFY.get(key)?.Q2CmlValue ?? none,
                    dataThisFY.get(key)?.Q3CmlValue ?? none,
                    dataThisFY.get(key)?.Q4CmlValue ?? none,
                    currentQuarter,
                    13
                );

                let cumulativePercentages = printCmlYoYSection(
                    percentagesThisFY.get(key)?.Q2CmlValue ?? none,
                    percentagesThisFY.get(key)?.Q3CmlValue ?? none,
                    percentagesThisFY.get(key)?.Q4CmlValue ?? none,
                    currentQuarter,
                    12
                ); 

                let forecasts = [
                    printForecastValuesV2(dataThisFY.get(key)?.forecastThisFY ?? none, 13),
                    printForecastValuesV2(dataThisFY.get(key)?.forecastRevision1 ?? none, 13),
                    printForecastValuesV2(dataThisFY.get(key)?.forecastRevision2 ?? none, 13),
                    printForecastValuesV2(dataThisFY.get(key)?.forecastRevision3 ?? none, 13),
                    printForecastValuesV2(dataThisFY.get(key)?.forecastNextFY ?? none, 13),
                ];

                let output = printReduceSection(
                    sectionHeader,
                    qtrOrCmlOutput(quarters,quarterPercentages,false),
                    qtrOrCmlOutput(cumulatives,cumulativePercentages,false),
                    forecastOutput(forecasts),
                )

                map.set(key, output)
            }
        })

        return [printOne, ...printEach.values()].reduce((acc, next) => acc + "\n" + next)
};

function getData(dataCollectionThisFY: EarningsJSONV2 | undefined, dataThisFYLengthForLastFY: number): Map<number, EarningsV2> {

    const dataMap = new Map<number, EarningsV2>();

        if (!dataCollectionThisFY) {
            for (let index = 0; index < dataThisFYLengthForLastFY; index++) {
                dataMap.set(index, valuesMakeV2(undefined, ""))
            }
        } else {
            for (let index = 0; index < dataCollectionThisFY.data.length; index++) {
                dataMap.set(index, valuesMakeV2(dataCollectionThisFY.data[index], dataCollectionThisFY.fiscalYear))
            }
        }

        return dataMap;
}

function printQuarterSection(q1: EarningsValue, q2: EarningsValue, q3: EarningsValue, q4: EarningsValue, currentQuarter: number, textLength: number): string[] {

    return [
        printQuarterValuesV2(q1, currentQuarter, textLength),
        printQuarterValuesV2(q2, currentQuarter, textLength),
        printQuarterValuesV2(q3, currentQuarter, textLength),
        printQuarterValuesV2(q4, currentQuarter, textLength),
    ]
}

function printQuarterYoYSection(q1: EarningsValue, q2: EarningsValue, q3: EarningsValue, q4: EarningsValue, currentQuarter: number, textLength: number): string[] {

    return [
        printYoYV2(q1, currentQuarter, textLength),
        printYoYV2(q2, currentQuarter, textLength),
        printYoYV2(q3, currentQuarter, textLength),
        printYoYV2(q4, currentQuarter, textLength),
    ]
}

function printCmlSection(firstHalf: EarningsValue, firstThreeQuarters: EarningsValue, fyCumulative: EarningsValue, currentQuarter: number, textLength: number): string[] {

    return [
        printCumulativeValuesV2(firstHalf, currentQuarter, textLength),
        printCumulativeValuesV2(firstThreeQuarters, currentQuarter, textLength),
        printCumulativeValuesV2(fyCumulative, currentQuarter, textLength),
    ]
}

function printCmlYoYSection(firstHalf: EarningsValue, firstThreeQuarters: EarningsValue, fyCumulative: EarningsValue, currentQuarter: number, textLength: number): string[] {

    return [
        printYoYV2(firstHalf, currentQuarter, textLength),
        printYoYV2(firstThreeQuarters, currentQuarter, textLength),
        printYoYV2(fyCumulative, currentQuarter, textLength),
    ]
}