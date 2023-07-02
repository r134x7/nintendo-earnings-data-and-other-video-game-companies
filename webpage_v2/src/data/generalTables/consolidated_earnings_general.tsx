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

const collectionNintendoV2 = new Map<number, EarningsJSONV2>();
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2023)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2022)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2021)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2020)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2019)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2018)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2017)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2016)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2015)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2014)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2013)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2012)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2011)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2010)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2009)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2008)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2007)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2006)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2005)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2004)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2003)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2002)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2001)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings2000)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings1999)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings1998)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings1997)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings1996)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings1995)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings1994)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings1993)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings1992)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings1991)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings1990)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings1989)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings1988)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings1987)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings1986)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings1985)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings1984)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings1983)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings1982)
    collectionNintendoV2.set(collectionNintendoV2.size, nintendoConsolidatedEarnings1981)

const collectionCapcomV2 = new Map<number, EarningsJSONV2>();
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2023)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2022)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2021)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2020)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2019)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2018)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2017)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2016)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2015)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2014)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2013)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2012)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2011)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2010)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2009)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2008)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2007)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2006)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2005)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2004)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2003)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2002)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2001)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings2000)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings1999)
    collectionCapcomV2.set(collectionCapcomV2.size, capcomEarnings1998)

const collectionBandaiNamcoV2 = new Map<number, EarningsJSONV2>();
    collectionBandaiNamcoV2.set(collectionBandaiNamcoV2.size, bandaiNamco2023)
    collectionBandaiNamcoV2.set(collectionBandaiNamcoV2.size, bandaiNamco2022)
    collectionBandaiNamcoV2.set(collectionBandaiNamcoV2.size, bandaiNamco2021)
    collectionBandaiNamcoV2.set(collectionBandaiNamcoV2.size, bandaiNamco2020)
    collectionBandaiNamcoV2.set(collectionBandaiNamcoV2.size, bandaiNamco2019)
    collectionBandaiNamcoV2.set(collectionBandaiNamcoV2.size, bandaiNamco2018)
    collectionBandaiNamcoV2.set(collectionBandaiNamcoV2.size, bandaiNamco2017)
    collectionBandaiNamcoV2.set(collectionBandaiNamcoV2.size, bandaiNamco2016)
    collectionBandaiNamcoV2.set(collectionBandaiNamcoV2.size, bandaiNamco2015)
    collectionBandaiNamcoV2.set(collectionBandaiNamcoV2.size, bandaiNamco2014)
    collectionBandaiNamcoV2.set(collectionBandaiNamcoV2.size, bandaiNamco2013)
    collectionBandaiNamcoV2.set(collectionBandaiNamcoV2.size, bandaiNamco2012)
    collectionBandaiNamcoV2.set(collectionBandaiNamcoV2.size, bandaiNamco2011)
    collectionBandaiNamcoV2.set(collectionBandaiNamcoV2.size, bandaiNamco2010)
    collectionBandaiNamcoV2.set(collectionBandaiNamcoV2.size, bandaiNamco2009)
    collectionBandaiNamcoV2.set(collectionBandaiNamcoV2.size, bandaiNamco2008)
    collectionBandaiNamcoV2.set(collectionBandaiNamcoV2.size, bandaiNamco2007)
    collectionBandaiNamcoV2.set(collectionBandaiNamcoV2.size, bandaiNamco2006)

const collectionSegaSammyV2 = new Map<number, EarningsJSONV2>();
    collectionSegaSammyV2.set(collectionSegaSammyV2.size, sega2023)
    collectionSegaSammyV2.set(collectionSegaSammyV2.size, sega2022)
    collectionSegaSammyV2.set(collectionSegaSammyV2.size, sega2021)
    collectionSegaSammyV2.set(collectionSegaSammyV2.size, sega2020)
    collectionSegaSammyV2.set(collectionSegaSammyV2.size, sega2019)
    collectionSegaSammyV2.set(collectionSegaSammyV2.size, sega2018)
    collectionSegaSammyV2.set(collectionSegaSammyV2.size, sega2017)
    collectionSegaSammyV2.set(collectionSegaSammyV2.size, sega2016)
    collectionSegaSammyV2.set(collectionSegaSammyV2.size, sega2015)
    collectionSegaSammyV2.set(collectionSegaSammyV2.size, sega2014)
    collectionSegaSammyV2.set(collectionSegaSammyV2.size, sega2013)
    collectionSegaSammyV2.set(collectionSegaSammyV2.size, sega2012)
    collectionSegaSammyV2.set(collectionSegaSammyV2.size, sega2011)
    collectionSegaSammyV2.set(collectionSegaSammyV2.size, sega2010)
    collectionSegaSammyV2.set(collectionSegaSammyV2.size, sega2009)
    collectionSegaSammyV2.set(collectionSegaSammyV2.size, sega2008)
    collectionSegaSammyV2.set(collectionSegaSammyV2.size, sega2007)
    collectionSegaSammyV2.set(collectionSegaSammyV2.size, sega2006)
    collectionSegaSammyV2.set(collectionSegaSammyV2.size, sega2005)

const collectionKoeiTecmoV2 = new Map<number, EarningsJSONV2>();
    collectionKoeiTecmoV2.set(collectionKoeiTecmoV2.size, koeiTecmo2023)
    collectionKoeiTecmoV2.set(collectionKoeiTecmoV2.size, koeiTecmo2022)
    collectionKoeiTecmoV2.set(collectionKoeiTecmoV2.size, koeiTecmo2021)
    collectionKoeiTecmoV2.set(collectionKoeiTecmoV2.size, koeiTecmo2020)
    collectionKoeiTecmoV2.set(collectionKoeiTecmoV2.size, koeiTecmo2019)
    collectionKoeiTecmoV2.set(collectionKoeiTecmoV2.size, koeiTecmo2018)
    collectionKoeiTecmoV2.set(collectionKoeiTecmoV2.size, koeiTecmo2017)
    collectionKoeiTecmoV2.set(collectionKoeiTecmoV2.size, koeiTecmo2016)
    collectionKoeiTecmoV2.set(collectionKoeiTecmoV2.size, koeiTecmo2015)
    collectionKoeiTecmoV2.set(collectionKoeiTecmoV2.size, koeiTecmo2014)
    collectionKoeiTecmoV2.set(collectionKoeiTecmoV2.size, koeiTecmo2013)
    collectionKoeiTecmoV2.set(collectionKoeiTecmoV2.size, koeiTecmo2012)
    collectionKoeiTecmoV2.set(collectionKoeiTecmoV2.size, koeiTecmo2011)
    collectionKoeiTecmoV2.set(collectionKoeiTecmoV2.size, koeiTecmo2010)

const collectionSquareEnixV2 = new Map<number, EarningsJSONV2>();
    collectionSquareEnixV2.set(collectionSquareEnixV2.size, squareEnix2023)
    collectionSquareEnixV2.set(collectionSquareEnixV2.size, squareEnix2022)
    collectionSquareEnixV2.set(collectionSquareEnixV2.size, squareEnix2021)
    collectionSquareEnixV2.set(collectionSquareEnixV2.size, squareEnix2020)
    collectionSquareEnixV2.set(collectionSquareEnixV2.size, squareEnix2019)
    collectionSquareEnixV2.set(collectionSquareEnixV2.size, squareEnix2018)
    collectionSquareEnixV2.set(collectionSquareEnixV2.size, squareEnix2017)
    collectionSquareEnixV2.set(collectionSquareEnixV2.size, squareEnix2016)
    collectionSquareEnixV2.set(collectionSquareEnixV2.size, squareEnix2015)
    collectionSquareEnixV2.set(collectionSquareEnixV2.size, squareEnix2014)
    collectionSquareEnixV2.set(collectionSquareEnixV2.size, squareEnix2013)
    collectionSquareEnixV2.set(collectionSquareEnixV2.size, squareEnix2012)
    collectionSquareEnixV2.set(collectionSquareEnixV2.size, squareEnix2011)
    collectionSquareEnixV2.set(collectionSquareEnixV2.size, squareEnix2010)
    collectionSquareEnixV2.set(collectionSquareEnixV2.size, squareEnix2009)
    collectionSquareEnixV2.set(collectionSquareEnixV2.size, squareEnix2008)
    collectionSquareEnixV2.set(collectionSquareEnixV2.size, squareEnix2007)
    collectionSquareEnixV2.set(collectionSquareEnixV2.size, squareEnix2006)
    collectionSquareEnixV2.set(collectionSquareEnixV2.size, squareEnix2005)
    collectionSquareEnixV2.set(collectionSquareEnixV2.size, squareEnix2004)

export function typeReturn(typeValue: string | undefined): "units" | "currency" | "percentage" {

    switch (typeValue) {
        case "units":
            return "units"        
        
        case "currency":
            return "currency"

        case "percentage":
            return "percentage"
    
        default:
            // console.log("undefined typeValue");
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
        footnotes: obj?.footnotes,
    }

    return values
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

                map.set(key, getPrintOpMarginOutput(opMargin, 0, false, currentQuarter))

            } else if (key > 2) {

                map.set(key, getPrintOutput(dataThisFY, percentagesThisFY, key-1, true, currentQuarter))

            } else {

                map.set(key, getPrintOutput(dataThisFY, percentagesThisFY, key, true, currentQuarter))
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

function getPrintOutput(values: Map<number, EarningsV2>, yoyValues: Map<number, EarningsV2>, key: number, useYoYHeader: boolean, currentQuarter: number): string {

    const none: EarningsValue = { kind:"Nothing" };

    let sectionHeader = printSectionHeaderV2(values.get(key) as EarningsV2, useYoYHeader);

    let quarters = [
        values.get(key)?.Q1QtrValue ?? none,
        values.get(key)?.Q2QtrValue ?? none,
        values.get(key)?.Q3QtrValue ?? none,
        values.get(key)?.Q4QtrValue ?? none,
    ].map(elem => printQuarterValuesV2(elem, currentQuarter, 13)); 

    let quarterPercentages = [
        yoyValues.get(key)?.Q1QtrValue ?? none,
        yoyValues.get(key)?.Q2QtrValue ?? none,
        yoyValues.get(key)?.Q3QtrValue ?? none,
        yoyValues.get(key)?.Q4QtrValue ?? none, 
    ].map(elem => printYoYV2(elem, currentQuarter, 12)); 

    let cumulatives = [
        values.get(key)?.Q2CmlValue ?? none,
        values.get(key)?.Q3CmlValue ?? none,
        values.get(key)?.Q4CmlValue ?? none,
    ].map(elem => printCumulativeValuesV2(elem, currentQuarter, 13)); 

    let cumulativePercentages = [
        yoyValues.get(key)?.Q2CmlValue ?? none,
        yoyValues.get(key)?.Q3CmlValue ?? none,
        yoyValues.get(key)?.Q4CmlValue ?? none,
    ].map(elem => printYoYV2(elem, currentQuarter, 12));

    let forecasts = [
        values.get(key)?.forecastThisFY ?? none,
        values.get(key)?.forecastRevision1 ?? none,
        values.get(key)?.forecastRevision2 ?? none,
        values.get(key)?.forecastRevision3 ?? none,
        values.get(key)?.forecastNextFY ?? none,
    ].map(elem => printForecastValuesV2(elem, 13)); 

    return printReduceSection(
        sectionHeader,
        qtrOrCmlOutput(quarters,quarterPercentages,false),
        qtrOrCmlOutput(cumulatives,cumulativePercentages,false),
        forecastOutput(forecasts),
    )
}

function getPrintOpMarginOutput(value: Map<number, EarningsV2>, key: number, useYoYHeader: boolean, currentQuarter: number): string {

    const none: EarningsValue = { kind:"Nothing" };

    let sectionHeader = printSectionHeaderV2(value.get(key) as EarningsV2, useYoYHeader);

    let quarters = [
        value.get(key)?.Q1QtrValue ?? none,
        value.get(key)?.Q2QtrValue ?? none,
        value.get(key)?.Q3QtrValue ?? none,
        value.get(key)?.Q4QtrValue ?? none,
    ].map(elem => printQuarterValuesV2(elem, currentQuarter, 13)); 
                
    let cumulatives = [
        value.get(key)?.Q2CmlValue ?? none,
        value.get(key)?.Q3CmlValue ?? none,
        value.get(key)?.Q4CmlValue ?? none,
    ].map(elem => printCumulativeValuesV2(elem, currentQuarter, 13));

    let forecasts = [
        value.get(key)?.forecastThisFY ?? none,
        value.get(key)?.forecastRevision1 ?? none,
        value.get(key)?.forecastRevision2 ?? none,
        value.get(key)?.forecastRevision3 ?? none,
        value.get(key)?.forecastNextFY ?? none,
    ].map(elem => printForecastValuesV2(elem, 13))

    return printReduceSection(
        sectionHeader,
        qtrOrCmlOutput(quarters,[],true),
        qtrOrCmlOutput(cumulatives,[],true),
        forecastOutput(forecasts),
    )
}

    // function takeMapGetValue(inputValue: Map<number, EarningsV2>): Map<number, EarningsV2> {

    //     const atomicMap = new Map<string, EarningsValue | string | undefined>();

    //     // Use Object.entries to create key-value pairs [key, value] i.e. a tuple!
    //     Object.entries(inputValue.get(1) as EarningsV2).map(elem => atomicMap.set(elem[0], elem[1]))

    //     atomicMap.forEach((value, key, map) => {
            
    //     })

    // }

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