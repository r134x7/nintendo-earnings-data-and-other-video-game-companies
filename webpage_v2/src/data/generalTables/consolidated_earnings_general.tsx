import {
    Header,
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
import nintendoConsolidatedEarnings2003 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2003.json";
import nintendoConsolidatedEarnings2002 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2002.json";
import nintendoConsolidatedEarnings2001 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2001.json";
import nintendoConsolidatedEarnings2000 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2000.json";
import nintendoConsolidatedEarnings1999 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1999.json";
import nintendoConsolidatedEarnings1998 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1998.json";
import nintendoConsolidatedEarnings1997 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1997.json";
import nintendoConsolidatedEarnings1996 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1996.json";
import nintendoConsolidatedEarnings1995 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1995.json";
import nintendoConsolidatedEarnings1994 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1994.json";
import nintendoConsolidatedEarnings1993 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1993.json";
import nintendoConsolidatedEarnings1992 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1992.json";
import nintendoConsolidatedEarnings1991 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1991.json";
import nintendoConsolidatedEarnings1990 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1990.json";
import nintendoConsolidatedEarnings1989 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1989.json";
import nintendoConsolidatedEarnings1988 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1988.json";
import nintendoConsolidatedEarnings1987 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1987.json";
import nintendoConsolidatedEarnings1986 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1986.json";
import nintendoConsolidatedEarnings1985 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1985.json";
import nintendoConsolidatedEarnings1984 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1984.json";
import nintendoConsolidatedEarnings1983 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1983.json";
import nintendoConsolidatedEarnings1982 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1982.json";
import nintendoConsolidatedEarnings1981 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1981.json";

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
import capcomEarnings2003 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2003.json";
import capcomEarnings2002 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2002.json";
import capcomEarnings2001 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2001.json";
import capcomEarnings2000 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2000.json";
import capcomEarnings1999 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_1999.json";
import capcomEarnings1998 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_1998.json";

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

export type EarningsJSONV2 = {
    currentQuarter: number,
    companyName: string,
    fiscalYear: string,
    data: EarningsMakeV2[],
};

export type EarningsMakeV2 = {
        name: string,
        units: string,
        Q1CmlValue: number | string,
        Q2CmlValue: number | string,
        Q3CmlValue: number | string,
        Q4CmlValue: number | string,
        forecastThisFY?: number | null | string,
        forecastRevision1?: number | null,
        forecastRevision2?: number | null,
        forecastRevision3?: number | null,
        forecastNextFY?: number | null | string, 
        footnotes?: string,
}; 

export function nothingCheck(
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

const nintendoYearRange = 2023 - 1981;
const nintendoKeys = Array.from({length: nintendoYearRange + 1},(v, i) => nintendoYearRange - i);

const collectionNintendoV2 = new Map<number, EarningsJSONV2>([
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2023],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2022],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2021],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2020],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2019],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2018],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2017],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2016],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2015],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2014],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2013],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2012],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2011],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2010],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2009],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2008],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2007],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2006],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2005],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2004],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2003],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2002],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2001],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings2000],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings1999],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings1998],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings1997],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings1996],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings1995],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings1994],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings1993],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings1992],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings1991],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings1990],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings1989],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings1988],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings1987],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings1986],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings1985],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings1984],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings1983],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings1982],
    [nintendoKeys.pop() ?? 0, nintendoConsolidatedEarnings1981],
]);

const capcomYearRange = 2023 - 1998;
const capcomKeys = Array.from({length: capcomYearRange + 1},(v, i) => capcomYearRange - i);

const collectionCapcomV2 = new Map<number, EarningsJSONV2>([
    [capcomKeys.pop() ?? 0, capcomEarnings2023],
    [capcomKeys.pop() ?? 0, capcomEarnings2022],
    [capcomKeys.pop() ?? 0, capcomEarnings2021],
    [capcomKeys.pop() ?? 0, capcomEarnings2020],
    [capcomKeys.pop() ?? 0, capcomEarnings2019],
    [capcomKeys.pop() ?? 0, capcomEarnings2018],
    [capcomKeys.pop() ?? 0, capcomEarnings2017],
    [capcomKeys.pop() ?? 0, capcomEarnings2016],
    [capcomKeys.pop() ?? 0, capcomEarnings2015],
    [capcomKeys.pop() ?? 0, capcomEarnings2014],
    [capcomKeys.pop() ?? 0, capcomEarnings2013],
    [capcomKeys.pop() ?? 0, capcomEarnings2012],
    [capcomKeys.pop() ?? 0, capcomEarnings2011],
    [capcomKeys.pop() ?? 0, capcomEarnings2010],
    [capcomKeys.pop() ?? 0, capcomEarnings2009],
    [capcomKeys.pop() ?? 0, capcomEarnings2008],
    [capcomKeys.pop() ?? 0, capcomEarnings2007],
    [capcomKeys.pop() ?? 0, capcomEarnings2006],
    [capcomKeys.pop() ?? 0, capcomEarnings2005],
    [capcomKeys.pop() ?? 0, capcomEarnings2004],
    [capcomKeys.pop() ?? 0, capcomEarnings2003],
    [capcomKeys.pop() ?? 0, capcomEarnings2002],
    [capcomKeys.pop() ?? 0, capcomEarnings2001],
    [capcomKeys.pop() ?? 0, capcomEarnings2000],
    [capcomKeys.pop() ?? 0, capcomEarnings1999],
    [capcomKeys.pop() ?? 0, capcomEarnings1998],
]);

const bandaiNamcoYearRange = 2023 - 2006;
const bandaiNamcoKeys = Array.from({length: bandaiNamcoYearRange + 1},(v, i) => bandaiNamcoYearRange - i);

const collectionBandaiNamcoV2 = new Map<number, EarningsJSONV2>([
    [bandaiNamcoKeys.pop() ?? 0, bandaiNamco2023],
    [bandaiNamcoKeys.pop() ?? 0, bandaiNamco2022],
    [bandaiNamcoKeys.pop() ?? 0, bandaiNamco2021],
    [bandaiNamcoKeys.pop() ?? 0, bandaiNamco2020],
    [bandaiNamcoKeys.pop() ?? 0, bandaiNamco2019],
    [bandaiNamcoKeys.pop() ?? 0, bandaiNamco2018],
    [bandaiNamcoKeys.pop() ?? 0, bandaiNamco2017],
    [bandaiNamcoKeys.pop() ?? 0, bandaiNamco2016],
    [bandaiNamcoKeys.pop() ?? 0, bandaiNamco2015],
    [bandaiNamcoKeys.pop() ?? 0, bandaiNamco2014],
    [bandaiNamcoKeys.pop() ?? 0, bandaiNamco2013],
    [bandaiNamcoKeys.pop() ?? 0, bandaiNamco2012],
    [bandaiNamcoKeys.pop() ?? 0, bandaiNamco2011],
    [bandaiNamcoKeys.pop() ?? 0, bandaiNamco2010],
    [bandaiNamcoKeys.pop() ?? 0, bandaiNamco2009],
    [bandaiNamcoKeys.pop() ?? 0, bandaiNamco2008],
    [bandaiNamcoKeys.pop() ?? 0, bandaiNamco2007],
    [bandaiNamcoKeys.pop() ?? 0, bandaiNamco2006],
]);

const segaYearRange = 2023 - 2005;
const segaKeys = Array.from({length: segaYearRange + 1},(v, i) => segaYearRange - i);

const collectionSegaSammyV2 = new Map<number, EarningsJSONV2>([
    [segaKeys.pop() ?? 0, sega2023],
    [segaKeys.pop() ?? 0, sega2022],
    [segaKeys.pop() ?? 0, sega2021],
    [segaKeys.pop() ?? 0, sega2020],
    [segaKeys.pop() ?? 0, sega2019],
    [segaKeys.pop() ?? 0, sega2018],
    [segaKeys.pop() ?? 0, sega2017],
    [segaKeys.pop() ?? 0, sega2016],
    [segaKeys.pop() ?? 0, sega2015],
    [segaKeys.pop() ?? 0, sega2014],
    [segaKeys.pop() ?? 0, sega2013],
    [segaKeys.pop() ?? 0, sega2012],
    [segaKeys.pop() ?? 0, sega2011],
    [segaKeys.pop() ?? 0, sega2010],
    [segaKeys.pop() ?? 0, sega2009],
    [segaKeys.pop() ?? 0, sega2008],
    [segaKeys.pop() ?? 0, sega2007],
    [segaKeys.pop() ?? 0, sega2006],
    [segaKeys.pop() ?? 0, sega2005],
]);

const koeiYearRange = 2023 - 2010;
const koeiKeys = Array.from({length: koeiYearRange + 1},(v, i) => koeiYearRange - i);

const collectionKoeiTecmoV2 = new Map<number, EarningsJSONV2>([
    [/*0*/ koeiKeys.pop() ?? 0, koeiTecmo2023],
    [/*1*/ koeiKeys.pop() ?? 0, koeiTecmo2022],
    [/*2*/ koeiKeys.pop() ?? 0, koeiTecmo2021],
    [/*3*/ koeiKeys.pop() ?? 0, koeiTecmo2020],
    [/*4*/ koeiKeys.pop() ?? 0, koeiTecmo2019],
    [/*5*/ koeiKeys.pop() ?? 0, koeiTecmo2018],
    [/*6*/ koeiKeys.pop() ?? 0, koeiTecmo2017],
    [/*7*/ koeiKeys.pop() ?? 0, koeiTecmo2016],
    [/*8*/ koeiKeys.pop() ?? 0, koeiTecmo2015],
    [/*9*/ koeiKeys.pop() ?? 0, koeiTecmo2014],
    [/*10*/koeiKeys.pop() ?? 0, koeiTecmo2013],
    [/*11*/koeiKeys.pop() ?? 0, koeiTecmo2012],
    [/*12*/koeiKeys.pop() ?? 0, koeiTecmo2011],
    [/*13*/koeiKeys.pop() ?? 0, koeiTecmo2010],
]);

const squareEnixYearRange = 2023 - 2004;
const squareEnixKeys = Array.from({length: squareEnixYearRange + 1},(v, i) => squareEnixYearRange - i);

const collectionSquareEnixV2 = new Map<number, EarningsJSONV2>([
    [squareEnixKeys.pop() ?? 0, squareEnix2023],
    [squareEnixKeys.pop() ?? 0, squareEnix2022],
    [squareEnixKeys.pop() ?? 0, squareEnix2021],
    [squareEnixKeys.pop() ?? 0, squareEnix2020],
    [squareEnixKeys.pop() ?? 0, squareEnix2019],
    [squareEnixKeys.pop() ?? 0, squareEnix2018],
    [squareEnixKeys.pop() ?? 0, squareEnix2017],
    [squareEnixKeys.pop() ?? 0, squareEnix2016],
    [squareEnixKeys.pop() ?? 0, squareEnix2015],
    [squareEnixKeys.pop() ?? 0, squareEnix2014],
    [squareEnixKeys.pop() ?? 0, squareEnix2013],
    [squareEnixKeys.pop() ?? 0, squareEnix2012],
    [squareEnixKeys.pop() ?? 0, squareEnix2011],
    [squareEnixKeys.pop() ?? 0, squareEnix2010],
    [squareEnixKeys.pop() ?? 0, squareEnix2009],
    [squareEnixKeys.pop() ?? 0, squareEnix2008],
    [squareEnixKeys.pop() ?? 0, squareEnix2007],
    [squareEnixKeys.pop() ?? 0, squareEnix2006],
    [squareEnixKeys.pop() ?? 0, squareEnix2005],
    [squareEnixKeys.pop() ?? 0, squareEnix2004],
]);

function typeReturn(typeValue: string | undefined): "units" | "currency" | "percentage" {

    switch (typeValue) {
        case "units":
            return "units"        
        
        case "currency":
            return "currency"

        case "percentage":
            return "percentage"
    
        default:
            console.log("ERROR");
            return "units"
    }
}

export function valuesMakeV2(obj: undefined | EarningsMakeV2, fiscalYear: string): EarningsV2 {

    let values: EarningsV2 = {
        name: obj?.name ?? "N/A",
        Q1QtrValue: nothingCheck(obj?.Q1CmlValue, "Quarter", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
        Q2QtrValue: quarterlyCalculationV2(
            nothingCheck(obj?.Q2CmlValue, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q1CmlValue, "Quarter", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear)
        ),
        Q3QtrValue: quarterlyCalculationV2(
            nothingCheck(obj?.Q3CmlValue, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q2CmlValue, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
        ),
        Q4QtrValue: quarterlyCalculationV2(
            nothingCheck(obj?.Q4CmlValue, "Quarter", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q3CmlValue, "Quarter", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
            nothingCheck(obj?.Q2CmlValue, "Quarter", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
        ),
        Q1CmlValue: nothingCheck(obj?.Q1CmlValue, "Cumulative", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
        Q2CmlValue: nothingCheck(obj?.Q2CmlValue, "Cumulative", typeReturn(obj?.units), "2nd Quarter", "First Half", "Current FY FCST", fiscalYear),
        Q3CmlValue: nothingCheck(obj?.Q3CmlValue, "Cumulative", typeReturn(obj?.units), "3rd Quarter", "First Three Quarters", "Current FY FCST", fiscalYear),
        Q4CmlValue: nothingCheck(obj?.Q4CmlValue, "Cumulative", typeReturn(obj?.units), "4th Quarter", "FY Cumulative", "Current FY FCST", fiscalYear),
        forecastThisFY: nothingCheck(obj?.forecastThisFY, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Current FY FCST", fiscalYear),
        forecastRevision1: nothingCheck(obj?.forecastRevision1, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 1", fiscalYear),
        forecastRevision2: nothingCheck(obj?.forecastRevision2, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 2", fiscalYear),
        forecastRevision3: nothingCheck(obj?.forecastRevision3, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "FCST Revision 3", fiscalYear),
        forecastNextFY: nothingCheck(obj?.forecastNextFY, "Forecast", typeReturn(obj?.units), "1st Quarter", "1st Quarter", "Next FY FCST", fiscalYear),
    }

    return values
}

function consolidatedEarningsGraphListV2(collection: EarningsJSONV2, lastFYCollection: EarningsJSONV2 | undefined) {

    const none: EarningsValue = { kind:"Nothing" };

    let dataThisFY = getData(collection, collection.data.length);

    let dataLastFY = getData(lastFYCollection, collection.data.length);

    // opmargin
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
            ],
            [1,
                {
                    ...dataLastFY.get(1),
                    name: "Operating Margin",
                    Q1QtrValue: operatingMarginCalculationV2(dataLastFY.get(0)?.Q1QtrValue ?? none, dataLastFY.get(1)?.Q1QtrValue ?? none, "Quarter"),
                    Q2QtrValue: operatingMarginCalculationV2(dataLastFY.get(0)?.Q2QtrValue ?? none, dataLastFY.get(1)?.Q2QtrValue ?? none, "Quarter"),
                    Q3QtrValue: operatingMarginCalculationV2(dataLastFY.get(0)?.Q3QtrValue ?? none, dataLastFY.get(1)?.Q3QtrValue ?? none, "Quarter"),
                    Q4QtrValue: operatingMarginCalculationV2(dataLastFY.get(0)?.Q4QtrValue ?? none, dataLastFY.get(1)?.Q4QtrValue ?? none, "Quarter"),
                    Q1CmlValue: operatingMarginCalculationV2(dataLastFY.get(0)?.Q1CmlValue ?? none, dataLastFY.get(1)?.Q1CmlValue ?? none, "Cumulative"),
                    Q2CmlValue: operatingMarginCalculationV2(dataLastFY.get(0)?.Q2CmlValue ?? none, dataLastFY.get(1)?.Q2CmlValue ?? none, "Cumulative"),
                    Q3CmlValue: operatingMarginCalculationV2(dataLastFY.get(0)?.Q3CmlValue ?? none, dataLastFY.get(1)?.Q3CmlValue ?? none, "Cumulative"),
                    Q4CmlValue: operatingMarginCalculationV2(dataLastFY.get(0)?.Q4CmlValue ?? none, dataLastFY.get(1)?.Q4CmlValue ?? none, "Cumulative"),
                    forecastThisFY: operatingMarginCalculationV2(dataLastFY.get(0)?.forecastThisFY ?? none, dataLastFY.get(1)?.forecastThisFY ?? none, "Forecast"), 
                    forecastRevision1: operatingMarginCalculationV2(dataLastFY.get(0)?.forecastRevision1 ?? none, dataLastFY.get(1)?.forecastRevision1 ?? none, "Forecast"), 
                    forecastRevision2: operatingMarginCalculationV2(dataLastFY.get(0)?.forecastRevision2 ?? none, dataLastFY.get(1)?.forecastRevision2 ?? none, "Forecast"), 
                    forecastRevision3: operatingMarginCalculationV2(dataLastFY.get(0)?.forecastRevision3 ?? none, dataLastFY.get(1)?.forecastRevision3 ?? none, "Forecast"), 
                    forecastNextFY: operatingMarginCalculationV2(dataLastFY.get(0)?.forecastNextFY ?? none, dataLastFY.get(1)?.forecastNextFY ?? none, "Forecast"), 
                } satisfies EarningsV2
            ]
        ]);

    let thisFY: string = collection.fiscalYear;
    let lastFY: string = thisFY.slice(0, 4) + (Number(thisFY.slice(-4)) - 1).toString();

    let marchThisFY: string = "March " + thisFY.slice(4);
    let marchLastFY: string = "March " + lastFY.slice(4);

    return {
        thisFY: thisFY,
        lastFY: lastFY,
        marchThisFY: marchThisFY,
        marchLastFY: marchLastFY,
        qtrNetSalesThisFY: [
            dataThisFY.get(0)?.Q1QtrValue,
            dataThisFY.get(0)?.Q2QtrValue,
            dataThisFY.get(0)?.Q3QtrValue,
            dataThisFY.get(0)?.Q4QtrValue,
        ],
        qtrOperatingIncomeThisFY: [
            dataThisFY.get(1)?.Q1QtrValue,
            dataThisFY.get(1)?.Q2QtrValue,
            dataThisFY.get(1)?.Q3QtrValue,
            dataThisFY.get(1)?.Q4QtrValue,
        ],
        qtrOpMarginThisFY: [
            opMargin.get(0)?.Q1QtrValue,
            opMargin.get(0)?.Q2QtrValue,
            opMargin.get(0)?.Q3QtrValue,
            opMargin.get(0)?.Q4QtrValue,
        ],
        qtrNetIncomeThisFY: [
            dataThisFY.get(2)?.Q1QtrValue,
            dataThisFY.get(2)?.Q2QtrValue,
            dataThisFY.get(2)?.Q3QtrValue,
            dataThisFY.get(2)?.Q4QtrValue,
        ],
        cmlNetSalesThisFY: [
            dataThisFY.get(0)?.Q1CmlValue,
            dataThisFY.get(0)?.Q2CmlValue,
            dataThisFY.get(0)?.Q3CmlValue,
            dataThisFY.get(0)?.Q4CmlValue,
        ],
        cmlOperatingIncomeThisFY: [
            dataThisFY.get(1)?.Q1CmlValue,
            dataThisFY.get(1)?.Q2CmlValue,
            dataThisFY.get(1)?.Q3CmlValue,
            dataThisFY.get(1)?.Q4CmlValue,
        ],
        cmlOpMarginThisFY: [
            opMargin.get(0)?.Q1CmlValue,
            opMargin.get(0)?.Q2CmlValue,
            opMargin.get(0)?.Q3CmlValue,
            opMargin.get(0)?.Q4CmlValue,
        ],
        cmlNetIncomeThisFY: [
            dataThisFY.get(2)?.Q1CmlValue,
            dataThisFY.get(2)?.Q2CmlValue,
            dataThisFY.get(2)?.Q3CmlValue,
            dataThisFY.get(2)?.Q4CmlValue,
        ],
        qtrNetSalesLastFY: [
            dataLastFY.get(0)?.Q1QtrValue,
            dataLastFY.get(0)?.Q2QtrValue,
            dataLastFY.get(0)?.Q3QtrValue,
            dataLastFY.get(0)?.Q4QtrValue,
        ],
        qtrOperatingIncomeLastFY: [
            dataLastFY.get(1)?.Q1QtrValue,
            dataLastFY.get(1)?.Q2QtrValue,
            dataLastFY.get(1)?.Q3QtrValue,
            dataLastFY.get(1)?.Q4QtrValue,
        ],
        qtrOpMarginLastFY: [
            opMargin.get(1)?.Q1QtrValue,
            opMargin.get(1)?.Q2QtrValue,
            opMargin.get(1)?.Q3QtrValue,
            opMargin.get(1)?.Q4QtrValue,
        ],
        qtrNetIncomeLastFY: [
            dataLastFY.get(2)?.Q1QtrValue,
            dataLastFY.get(2)?.Q2QtrValue,
            dataLastFY.get(2)?.Q3QtrValue,
            dataLastFY.get(2)?.Q4QtrValue,
        ],
        cmlNetSalesLastFY: [
            dataLastFY.get(0)?.Q1CmlValue,
            dataLastFY.get(0)?.Q2CmlValue,
            dataLastFY.get(0)?.Q3CmlValue,
            dataLastFY.get(0)?.Q4CmlValue,
        ],
        cmlOperatingIncomeLastFY: [
            dataLastFY.get(1)?.Q1CmlValue,
            dataLastFY.get(1)?.Q2CmlValue,
            dataLastFY.get(1)?.Q3CmlValue,
            dataLastFY.get(1)?.Q4CmlValue,
        ],
        cmlOpMarginLastFY: [
            opMargin.get(1)?.Q1CmlValue,
            opMargin.get(1)?.Q2CmlValue,
            opMargin.get(1)?.Q3CmlValue,
            opMargin.get(1)?.Q4CmlValue,
        ],
        cmlNetIncomeLastFY: [
            dataLastFY.get(2)?.Q1CmlValue,
            dataLastFY.get(2)?.Q2CmlValue,
            dataLastFY.get(2)?.Q3CmlValue,
            dataLastFY.get(2)?.Q4CmlValue,
        ],
    };
}

export const nintendoConsolidatedEarningsList = new Map<number, string>();

export const nintendoConsolidatedEarningsGraphList = new Map();

collectionNintendoV2.forEach((value, key, map) => {

    nintendoConsolidatedEarningsList.set(key,consolidatedEarningsListV2Map(value, map.get(key+1),35))

    nintendoConsolidatedEarningsGraphList.set(key, consolidatedEarningsGraphListV2(value, map.get(key+1)))
});

collectionNintendoV2.clear();

export const capcomConsolidatedEarningsList = new Map<number, string>();

export const capcomConsolidatedEarningsGraphList = new Map();

collectionCapcomV2.forEach((value, key, map) => {

    capcomConsolidatedEarningsList.set(key, consolidatedEarningsListV2Map(value, map.get(key+1), 35))

    capcomConsolidatedEarningsGraphList.set(key, consolidatedEarningsGraphListV2(value, map.get(key+1)))
});

collectionCapcomV2.clear();

export const bandaiNamcoConsolidatedEarningsList = new Map<number, string>();

export const bandaiNamcoConsolidatedEarningsGraphList = new Map();

collectionBandaiNamcoV2.forEach((value, key, map) => {

    bandaiNamcoConsolidatedEarningsList.set(key, consolidatedEarningsListV2Map(value, map.get(key+1), 38))

    bandaiNamcoConsolidatedEarningsGraphList.set(key, consolidatedEarningsGraphListV2(value, map.get(key+1)))
})

collectionBandaiNamcoV2.clear();

export const koeiTecmoConsolidatedEarningsList = new Map<number, string>();

export const koeiTecmoConsolidatedEarningsGraphList = new Map();

collectionKoeiTecmoV2.forEach((value, key, map) => {

    koeiTecmoConsolidatedEarningsList.set(key, consolidatedEarningsListV2Map(value, map.get(key+1), 42))

    koeiTecmoConsolidatedEarningsGraphList.set(key, consolidatedEarningsGraphListV2(value, map.get(key+1)))
})

// must manually garbage collect Map() when keys/values no longer needed
collectionKoeiTecmoV2.clear()

export const segaConsolidatedEarningsList = new Map<number, string>();

export const segaConsolidatedEarningsGraphList = new Map();

collectionSegaSammyV2.forEach((value, key, map) => {

    segaConsolidatedEarningsList.set(key, consolidatedEarningsListV2Map(value, map.get(key+1), 38))

    segaConsolidatedEarningsGraphList.set(key, consolidatedEarningsGraphListV2(value, map.get(key+1)))
});

collectionSegaSammyV2.clear();

export const squareEnixConsolidatedEarningsList = new Map<number, string>();

export const squareEnixConsolidatedEarningsGraphList = new Map();

collectionSquareEnixV2.forEach((value, key, map) => {

    squareEnixConsolidatedEarningsList.set(key, consolidatedEarningsListV2Map(value, map.get(key+1), 42))

    squareEnixConsolidatedEarningsGraphList.set(key, consolidatedEarningsGraphListV2(value, map.get(key+1)))
});

collectionSquareEnixV2.clear();

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

                let quarters = printQuarterSection(
                    opMargin.get(0)?.Q1QtrValue ?? none,
                    opMargin.get(0)?.Q2QtrValue ?? none,
                    opMargin.get(0)?.Q3QtrValue ?? none,
                    opMargin.get(0)?.Q4QtrValue ?? none,
                    currentQuarter,
                    13
                );
                
                let cumulatives = printCmlSection(
                    opMargin.get(0)?.Q2CmlValue ?? none,
                    opMargin.get(0)?.Q3CmlValue ?? none,
                    opMargin.get(0)?.Q4CmlValue ?? none,
                    currentQuarter, 
                    13
                );

                let forecasts = printForecastSection(
                    opMargin.get(0)?.forecastThisFY ?? none,
                    opMargin.get(0)?.forecastRevision1 ?? none,
                    opMargin.get(0)?.forecastRevision2 ?? none,
                    opMargin.get(0)?.forecastRevision3 ?? none,
                    opMargin.get(0)?.forecastNextFY ?? none,
                    13
                );

                let output = printReduceSection(
                    sectionHeader,
                    qtrOrCmlOutput(quarters,[],true),
                    qtrOrCmlOutput(cumulatives,[],true),
                    forecastOutput(forecasts),
                )

                map.set(key, output)
            } else if (key > 2) {

                let sectionHeader = printSectionHeaderV2(dataThisFY.get(key-1) as EarningsV2, true)

                let quarters = printQuarterSection(
                    dataThisFY.get(key-1)?.Q1QtrValue ?? none,
                    dataThisFY.get(key-1)?.Q2QtrValue ?? none,
                    dataThisFY.get(key-1)?.Q3QtrValue ?? none,
                    dataThisFY.get(key-1)?.Q4QtrValue ?? none,
                    currentQuarter, 
                    13
                );

                let quarterPercentages = printQuarterYoYSection(
                    percentagesThisFY.get(key-1)?.Q1QtrValue ?? none,
                    percentagesThisFY.get(key-1)?.Q2QtrValue ?? none,
                    percentagesThisFY.get(key-1)?.Q3QtrValue ?? none,
                    percentagesThisFY.get(key-1)?.Q4QtrValue ?? none,
                    currentQuarter, 
                    12
                );

                let cumulatives = printCmlSection(
                    dataThisFY.get(key-1)?.Q2CmlValue ?? none,
                    dataThisFY.get(key-1)?.Q3CmlValue ?? none,
                    dataThisFY.get(key-1)?.Q4CmlValue ?? none,
                    currentQuarter, 
                    13
                );

                let cumulativePercentages = printCmlYoYSection(
                    percentagesThisFY.get(key-1)?.Q2CmlValue ?? none,
                    percentagesThisFY.get(key-1)?.Q3CmlValue ?? none,
                    percentagesThisFY.get(key-1)?.Q4CmlValue ?? none,
                    currentQuarter, 
                    12
                );

                let forecasts = printForecastSection(
                    dataThisFY.get(key-1)?.forecastThisFY ?? none,
                    dataThisFY.get(key-1)?.forecastRevision1 ?? none,
                    dataThisFY.get(key-1)?.forecastRevision2 ?? none,
                    dataThisFY.get(key-1)?.forecastRevision3 ?? none,
                    dataThisFY.get(key-1)?.forecastNextFY ?? none,
                    13
                );

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

                let forecasts = printForecastSection(
                    dataThisFY.get(key)?.forecastThisFY ?? none,
                    dataThisFY.get(key)?.forecastRevision1 ?? none,
                    dataThisFY.get(key)?.forecastRevision2 ?? none,
                    dataThisFY.get(key)?.forecastRevision3 ?? none,
                    dataThisFY.get(key)?.forecastNextFY ?? none,
                    13
                );

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

export function getData(dataCollectionThisFY: EarningsJSONV2 | undefined, dataThisFYLengthForLastFY: number): Map<number, EarningsV2> {

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

function printForecastSection(thisFY: EarningsValue, revision1: EarningsValue, revision2: EarningsValue, revision3: EarningsValue, nextFY: EarningsValue, textLength: number): string[] {

    return [
        printForecastValuesV2(thisFY, textLength),
        printForecastValuesV2(revision1, textLength),
        printForecastValuesV2(revision2, textLength),
        printForecastValuesV2(revision3, textLength),
        printForecastValuesV2(nextFY, textLength),
    ]
}
