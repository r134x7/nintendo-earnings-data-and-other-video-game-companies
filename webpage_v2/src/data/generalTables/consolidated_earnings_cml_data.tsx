import { EarningsJSON } from "./consolidated_earnings_general"
import { liner, spacer, border, dateLabel } from "../../utils/table_design_logic"

import consolidatedEarningsNintendo1981 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1981.json" 
import consolidatedEarningsNintendo1982 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1982.json" 
import consolidatedEarningsNintendo1983 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1983.json" 
import consolidatedEarningsNintendo1984 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1984.json" 
import consolidatedEarningsNintendo1985 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1985.json" 
import consolidatedEarningsNintendo1986 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1986.json" 
import consolidatedEarningsNintendo1987 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1987.json" 
import consolidatedEarningsNintendo1988 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1988.json" 
import consolidatedEarningsNintendo1989 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1989.json" 
import consolidatedEarningsNintendo1990 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1990.json" 
import consolidatedEarningsNintendo1991 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1991.json" 
import consolidatedEarningsNintendo1992 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1992.json" 
import consolidatedEarningsNintendo1993 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1993.json" 
import consolidatedEarningsNintendo1994 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1994.json" 
import consolidatedEarningsNintendo1995 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1995.json" 
import consolidatedEarningsNintendo1996 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1996.json" 
import consolidatedEarningsNintendo1997 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1997.json" 
import consolidatedEarningsNintendo1998 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1998.json" 
import consolidatedEarningsNintendo1999 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1999.json" 
import consolidatedEarningsNintendo2000 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2000.json" 
import consolidatedEarningsNintendo2001 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2001.json" 
import consolidatedEarningsNintendo2002 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2002.json" 
import consolidatedEarningsNintendo2003 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2003.json" 
import consolidatedEarningsNintendo2004 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2004.json" 
import consolidatedEarningsNintendo2005 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2005.json" 
import consolidatedEarningsNintendo2006 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2006.json" 
import consolidatedEarningsNintendo2007 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2007.json" 
import consolidatedEarningsNintendo2008 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2008.json" 
import consolidatedEarningsNintendo2009 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2009.json" 
import consolidatedEarningsNintendo2010 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2010.json" 
import consolidatedEarningsNintendo2011 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2011.json" 
import consolidatedEarningsNintendo2012 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2012.json" 
import consolidatedEarningsNintendo2013 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2013.json" 
import consolidatedEarningsNintendo2014 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2014.json" 
import consolidatedEarningsNintendo2015 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2015.json" 
import consolidatedEarningsNintendo2016 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2016.json" 
import consolidatedEarningsNintendo2017 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2017.json" 
import consolidatedEarningsNintendo2018 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2018.json" 
import consolidatedEarningsNintendo2019 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2019.json" 
import consolidatedEarningsNintendo2020 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2020.json" 
import consolidatedEarningsNintendo2021 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2021.json" 
import consolidatedEarningsNintendo2022 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2022.json" 
import consolidatedEarningsNintendo2023 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2023.json"

import consolidatedEarningsBandaiNamco2006 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2006.json";
import consolidatedEarningsBandaiNamco2007 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2007.json";
import consolidatedEarningsBandaiNamco2008 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2008.json";
import consolidatedEarningsBandaiNamco2009 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2009.json";
import consolidatedEarningsBandaiNamco2010 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2010.json";
import consolidatedEarningsBandaiNamco2011 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2011.json";
import consolidatedEarningsBandaiNamco2012 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2012.json";
import consolidatedEarningsBandaiNamco2013 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2013.json";
import consolidatedEarningsBandaiNamco2014 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2014.json";
import consolidatedEarningsBandaiNamco2015 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2015.json";
import consolidatedEarningsBandaiNamco2016 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2016.json";
import consolidatedEarningsBandaiNamco2017 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2017.json";
import consolidatedEarningsBandaiNamco2018 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2018.json"
import consolidatedEarningsBandaiNamco2019 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2019.json"
import consolidatedEarningsBandaiNamco2020 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2020.json"
import consolidatedEarningsBandaiNamco2021 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2021.json"
import consolidatedEarningsBandaiNamco2022 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2022.json"
import consolidatedEarningsBandaiNamco2023 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2023.json"

import consolidatedEarningsCapcom1998 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_1998.json"
import consolidatedEarningsCapcom1999 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_1999.json"
import consolidatedEarningsCapcom2000 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2000.json"
import consolidatedEarningsCapcom2001 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2001.json"
import consolidatedEarningsCapcom2002 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2002.json"
import consolidatedEarningsCapcom2003 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2003.json"
import consolidatedEarningsCapcom2004 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2004.json"
import consolidatedEarningsCapcom2005 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2005.json"
import consolidatedEarningsCapcom2006 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2006.json"
import consolidatedEarningsCapcom2007 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2007.json"
import consolidatedEarningsCapcom2008 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2008.json"
import consolidatedEarningsCapcom2009 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2009.json"
import consolidatedEarningsCapcom2010 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2010.json"
import consolidatedEarningsCapcom2011 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2011.json"
import consolidatedEarningsCapcom2012 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2012.json"
import consolidatedEarningsCapcom2013 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2013.json"
import consolidatedEarningsCapcom2014 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2014.json"
import consolidatedEarningsCapcom2015 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2015.json"
import consolidatedEarningsCapcom2016 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2016.json"
import consolidatedEarningsCapcom2017 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2017.json"
import consolidatedEarningsCapcom2018 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2018.json"
import consolidatedEarningsCapcom2019 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2019.json"
import consolidatedEarningsCapcom2020 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2020.json"
import consolidatedEarningsCapcom2021 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2021.json"
import consolidatedEarningsCapcom2022 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2022.json"
import consolidatedEarningsCapcom2023 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2023.json"

import consolidatedEarningsKoeiTecmo2010 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2010.json"
import consolidatedEarningsKoeiTecmo2011 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2011.json"
import consolidatedEarningsKoeiTecmo2012 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2012.json"
import consolidatedEarningsKoeiTecmo2013 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2013.json"
import consolidatedEarningsKoeiTecmo2014 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2014.json"
import consolidatedEarningsKoeiTecmo2015 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2015.json"
import consolidatedEarningsKoeiTecmo2016 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2016.json"
import consolidatedEarningsKoeiTecmo2017 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2017.json"
import consolidatedEarningsKoeiTecmo2018 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2018.json"
import consolidatedEarningsKoeiTecmo2019 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2019.json"
import consolidatedEarningsKoeiTecmo2020 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2020.json"
import consolidatedEarningsKoeiTecmo2021 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2021.json"
import consolidatedEarningsKoeiTecmo2022 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2022.json"
import consolidatedEarningsKoeiTecmo2023 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2023.json"

import consolidatedEarningsSegaSammy2005 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2005.json"
import consolidatedEarningsSegaSammy2006 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2006.json"
import consolidatedEarningsSegaSammy2007 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2007.json"
import consolidatedEarningsSegaSammy2008 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2008.json"
import consolidatedEarningsSegaSammy2009 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2009.json"
import consolidatedEarningsSegaSammy2010 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2010.json"
import consolidatedEarningsSegaSammy2011 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2011.json"
import consolidatedEarningsSegaSammy2012 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2012.json"
import consolidatedEarningsSegaSammy2013 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2013.json"
import consolidatedEarningsSegaSammy2014 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2014.json"
import consolidatedEarningsSegaSammy2015 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2015.json"
import consolidatedEarningsSegaSammy2016 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2016.json"
import consolidatedEarningsSegaSammy2017 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2017.json"
import consolidatedEarningsSegaSammy2018 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2018.json"
import consolidatedEarningsSegaSammy2019 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2019.json"
import consolidatedEarningsSegaSammy2020 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2020.json"
import consolidatedEarningsSegaSammy2021 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2021.json"
import consolidatedEarningsSegaSammy2022 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2022.json"
import consolidatedEarningsSegaSammy2023 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2023.json"

import consolidatedEarningsSquareEnix2004 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2004.json"
import consolidatedEarningsSquareEnix2005 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2005.json"
import consolidatedEarningsSquareEnix2006 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2006.json"
import consolidatedEarningsSquareEnix2007 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2007.json"
import consolidatedEarningsSquareEnix2008 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2008.json"
import consolidatedEarningsSquareEnix2009 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2009.json"
import consolidatedEarningsSquareEnix2010 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2010.json"
import consolidatedEarningsSquareEnix2011 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2011.json"
import consolidatedEarningsSquareEnix2012 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2012.json"
import consolidatedEarningsSquareEnix2013 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2013.json"
import consolidatedEarningsSquareEnix2014 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2014.json"
import consolidatedEarningsSquareEnix2015 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2015.json"
import consolidatedEarningsSquareEnix2016 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2016.json"
import consolidatedEarningsSquareEnix2017 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2017.json"
import consolidatedEarningsSquareEnix2018 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2018.json"
import consolidatedEarningsSquareEnix2019 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2019.json"
import consolidatedEarningsSquareEnix2020 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2020.json"
import consolidatedEarningsSquareEnix2021 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2021.json"
import consolidatedEarningsSquareEnix2022 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2022.json"
import consolidatedEarningsSquareEnix2023 from "../squareEnix/Consolidated_Earnings/consolidated_earnings_fy3_2023.json"

const totalCollectionNintendo: EarningsJSON[] = [
    consolidatedEarningsNintendo1981,
    consolidatedEarningsNintendo1982,
    consolidatedEarningsNintendo1983,
    consolidatedEarningsNintendo1984,
    consolidatedEarningsNintendo1985,
    consolidatedEarningsNintendo1986,
    consolidatedEarningsNintendo1987,
    consolidatedEarningsNintendo1988,
    consolidatedEarningsNintendo1989,
    consolidatedEarningsNintendo1990,
    consolidatedEarningsNintendo1991,
    consolidatedEarningsNintendo1992,
    consolidatedEarningsNintendo1993,
    consolidatedEarningsNintendo1994,
    consolidatedEarningsNintendo1995,
    consolidatedEarningsNintendo1996,
    consolidatedEarningsNintendo1997,
    consolidatedEarningsNintendo1998,
    consolidatedEarningsNintendo1999,
    consolidatedEarningsNintendo2000,
    consolidatedEarningsNintendo2001,
    consolidatedEarningsNintendo2002,
    consolidatedEarningsNintendo2003,
    consolidatedEarningsNintendo2004,
    consolidatedEarningsNintendo2005,
    consolidatedEarningsNintendo2006,
    consolidatedEarningsNintendo2007,
    consolidatedEarningsNintendo2008,
    consolidatedEarningsNintendo2009,
    consolidatedEarningsNintendo2010,
    consolidatedEarningsNintendo2011,
    consolidatedEarningsNintendo2012,
    consolidatedEarningsNintendo2013,
    consolidatedEarningsNintendo2014,
    consolidatedEarningsNintendo2015,
    consolidatedEarningsNintendo2016,
    consolidatedEarningsNintendo2017,
    consolidatedEarningsNintendo2018,
    consolidatedEarningsNintendo2019,
    consolidatedEarningsNintendo2020,
    consolidatedEarningsNintendo2021,
    consolidatedEarningsNintendo2022,
    consolidatedEarningsNintendo2023,
];

const totalCollectionBandaiNamco: EarningsJSON[] = [
    consolidatedEarningsBandaiNamco2006,
    consolidatedEarningsBandaiNamco2007,
    consolidatedEarningsBandaiNamco2008,
    consolidatedEarningsBandaiNamco2009,
    consolidatedEarningsBandaiNamco2010,
    consolidatedEarningsBandaiNamco2011,
    consolidatedEarningsBandaiNamco2012,
    consolidatedEarningsBandaiNamco2013,
    consolidatedEarningsBandaiNamco2014,
    consolidatedEarningsBandaiNamco2015,
    consolidatedEarningsBandaiNamco2016,
    consolidatedEarningsBandaiNamco2017,
    consolidatedEarningsBandaiNamco2018,
    consolidatedEarningsBandaiNamco2019,
    consolidatedEarningsBandaiNamco2020,
    consolidatedEarningsBandaiNamco2021,
    consolidatedEarningsBandaiNamco2022,
    consolidatedEarningsBandaiNamco2023,
];

const totalCollectionCapcom: EarningsJSON[] = [
    consolidatedEarningsCapcom1998,
    consolidatedEarningsCapcom1999,
    consolidatedEarningsCapcom2000,
    consolidatedEarningsCapcom2001,
    consolidatedEarningsCapcom2002,
    consolidatedEarningsCapcom2003,
    consolidatedEarningsCapcom2004,
    consolidatedEarningsCapcom2005,
    consolidatedEarningsCapcom2006,
    consolidatedEarningsCapcom2007,
    consolidatedEarningsCapcom2008,
    consolidatedEarningsCapcom2009,
    consolidatedEarningsCapcom2010,
    consolidatedEarningsCapcom2011,
    consolidatedEarningsCapcom2012,
    consolidatedEarningsCapcom2013,
    consolidatedEarningsCapcom2014,
    consolidatedEarningsCapcom2015,
    consolidatedEarningsCapcom2016,
    consolidatedEarningsCapcom2017,
    consolidatedEarningsCapcom2018,
    consolidatedEarningsCapcom2019,
    consolidatedEarningsCapcom2020,
    consolidatedEarningsCapcom2021,
    consolidatedEarningsCapcom2022,
    consolidatedEarningsCapcom2023,
];

const totalCollectionKoeiTecmo: EarningsJSON[] = [
    consolidatedEarningsKoeiTecmo2010,
    consolidatedEarningsKoeiTecmo2011,
    consolidatedEarningsKoeiTecmo2012,
    consolidatedEarningsKoeiTecmo2013,
    consolidatedEarningsKoeiTecmo2014,
    consolidatedEarningsKoeiTecmo2015,
    consolidatedEarningsKoeiTecmo2016,
    consolidatedEarningsKoeiTecmo2017,
    consolidatedEarningsKoeiTecmo2018,
    consolidatedEarningsKoeiTecmo2019,
    consolidatedEarningsKoeiTecmo2020,
    consolidatedEarningsKoeiTecmo2021,
    consolidatedEarningsKoeiTecmo2022,
    consolidatedEarningsKoeiTecmo2023,
];

const totalCollectionSegaSammy: EarningsJSON[] = [
    consolidatedEarningsSegaSammy2005,
    consolidatedEarningsSegaSammy2006,
    consolidatedEarningsSegaSammy2007,
    consolidatedEarningsSegaSammy2008,
    consolidatedEarningsSegaSammy2009,
    consolidatedEarningsSegaSammy2010,
    consolidatedEarningsSegaSammy2011,
    consolidatedEarningsSegaSammy2012,
    consolidatedEarningsSegaSammy2013,
    consolidatedEarningsSegaSammy2014,
    consolidatedEarningsSegaSammy2015,
    consolidatedEarningsSegaSammy2016,
    consolidatedEarningsSegaSammy2017,
    consolidatedEarningsSegaSammy2018,
    consolidatedEarningsSegaSammy2019,
    consolidatedEarningsSegaSammy2020,
    consolidatedEarningsSegaSammy2021,
    consolidatedEarningsSegaSammy2022,
    consolidatedEarningsSegaSammy2023,
];

const totalCollectionSquareEnix: EarningsJSON[] = [
    consolidatedEarningsSquareEnix2004,
    consolidatedEarningsSquareEnix2005,
    consolidatedEarningsSquareEnix2006,
    consolidatedEarningsSquareEnix2007,
    consolidatedEarningsSquareEnix2008,
    consolidatedEarningsSquareEnix2009,
    consolidatedEarningsSquareEnix2010,
    consolidatedEarningsSquareEnix2011,
    consolidatedEarningsSquareEnix2012,
    consolidatedEarningsSquareEnix2013,
    consolidatedEarningsSquareEnix2014,
    consolidatedEarningsSquareEnix2015,
    consolidatedEarningsSquareEnix2016,
    consolidatedEarningsSquareEnix2017,
    consolidatedEarningsSquareEnix2018,
    consolidatedEarningsSquareEnix2019,
    consolidatedEarningsSquareEnix2020,
    consolidatedEarningsSquareEnix2021,
    consolidatedEarningsSquareEnix2022,
    consolidatedEarningsSquareEnix2023,
];

function labelMaker (collection: EarningsJSON[]) {

    const makeDateLabel = dateLabel(collection.at(-1)?.fiscalYear ?? "N/A", collection.at(-1)?.currentQuarter ?? 4);

    return liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "bottom",true)
}

function operatingResultsMaker (collection: EarningsJSON[]): {
    header: string, netSales: string[], operatingIncome: string[], netIncome: string[]
} {

    let subHeader = (collection[0].companyName === "CAPCOM Co., Ltd." || collection[0].companyName === "SQUARE ENIX HOLDINGS CO., LTD.") ? "Consolidated Financial Results" : "Consolidated Operating Results";

    let headerMake = liner(border([
        spacer(collection[0].companyName, collection[0].companyName.length+1, "left")
        ]),"−","top",true) +
        liner(border([
            spacer(subHeader, subHeader.length+2, "left")
        ]), "−", "both",true)

    let netSalesSet = collection.map(elem => {
        return {
            fiscalYear: elem.fiscalYear,
            value: elem.data[0].Q4CmlValue
        };
    });

    let operatingIncomeSet = collection.map(elem => {
        return {
            fiscalYear: elem.fiscalYear,
            value: elem.data[1].Q4CmlValue
        };
    });

    let netIncomeSet = collection.map(elem => {
        return {
            fiscalYear: elem.fiscalYear,
            value: elem.data[2].Q4CmlValue
        };
    });

    const sortedNetSales = sortList(netSalesSet);
    const sortedOperatingIncome = sortList(operatingIncomeSet);
    const sortedNetIncome = sortList(netIncomeSet);

    const printNetSales = printCumulativeValues(netSalesSet, sortedNetSales, "Net Sales");

    const printOperatingIncome = printCumulativeValues(operatingIncomeSet, sortedOperatingIncome, "Operating Income");

    const printNetIncome = printCumulativeValues(netIncomeSet, sortedNetIncome, "Net Income");

    return {
        header: headerMake,
        netSales: printNetSales,
        operatingIncome: printOperatingIncome,
        netIncome: printNetIncome,
    }
};

// let netSalesSet = totalCollectionNintendo.map(elem => {
//     return {
//         fiscalYear: elem.fiscalYear,
//         value: elem.data[0].Q4CmlValue
//     };
// });

// let operatingIncomeSet = totalCollectionNintendo.map(elem => {
//     return {
//         fiscalYear: elem.fiscalYear,
//         value: elem.data[1].Q4CmlValue
//     };
// });

// let netIncomeSet = totalCollectionNintendo.map(elem => {
//     return {
//         fiscalYear: elem.fiscalYear,
//         value: elem.data[2].Q4CmlValue
//     };
// });

function sortList(list: {fiscalYear: string, value: number}[]) {

    const sortList = list.map((elem, index, array) => {
            return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
    }).sort((a, b) => { // (b,a) is descending order, (a,b) sorts in ascending order
        return (a.value > b.value)
            ? 1
            : (a.value < b.value)
            ? -1
            : 0 
    });

    return sortList
};

// const sortedNetSales = sortList(netSalesSet);
// const sortedOperatingIncome = sortList(operatingIncomeSet);
// const sortedNetIncome = sortList(netIncomeSet);


const printCumulativeValues = (list: {fiscalYear: string, value: number}[], sortedList: {fiscalYear: string, value: number}[], valueType: string): string[] => {

    let header = liner(border([
        spacer(valueType,34,"left"),
    ]),"−","both",true)

    let printList = list.map(elem => {
        return border([
            spacer(elem.fiscalYear + " Cumulative",20,"left"),
            spacer(`¥${elem.value.toLocaleString("en")}M`,12,"right")
        ],true) 
    });

    let printCount: string = border([
        spacer("Count",17,"left"),
        spacer(`${sortedList.length}`,15,"right"),
    ],true);

    let printSum: string = border([
        spacer("Sum",17,"left"),
        spacer(`¥${(sortedList.map(value => value.value).reduce((acc, next) => acc + next)).toLocaleString("en")}M`,15,"right"),
    ],true) 
     
    let printAverage: string = border([
        spacer("Average",17,"left"),
        spacer(`¥${Number(((sortedList.map(value => value.value).reduce((acc, next) => acc + next)) / sortedList.length).toFixed(0)).toLocaleString("en")}M`,15,"right"),
    ],true) 

    let printMedian: string = ((sortedList.length % 2) !== 0) // odd number
            // median formula source: https://en.wikipedia.org/wiki/Median
            // odd number median(x) = x(n+1)/2 => index version => median(x) = (x(n+1)/2)-1
            ? `¥${sortedList[((sortedList.length + 1)/2) -1].value.toLocaleString("en")}M`
            // even number median(x) = (x(n/2) + x((n/2) + 1)) /2 => index version median(x) = (x((n/2)-1) + x((n/2))) /2
            : `¥${Number(((sortedList[(sortedList.length/2) -1].value + sortedList[(sortedList.length/2)].value)/2).toFixed(0)).toLocaleString("en")}M`;

    let printMedianFixed: string = border([
        spacer("Median",17,"left"),
        spacer(printMedian,15,"right")
    ],true);

    let printMinimum: string = border([
        spacer("Minimum",17,"left"),
        spacer(`¥${sortedList[0].value.toLocaleString("en")}M`,15,"right")
    ],true);

    let printMaximum: string = border([
        spacer("Maximum",17,"left"),
        spacer(`¥${sortedList[sortedList.length-1].value.toLocaleString("en")}M`,15,"right"),
    ]);

    let printStats = liner(
        printCount + printSum + printAverage + printMedianFixed + printMinimum + printMaximum, "−", "both",true,35);
     
    return [
        header, 
        ...printList, 
        printStats
    ] 
};

// const printNetSales = printCumulativeValues(netSalesSet, sortedNetSales, "Net Sales");

// const printOperatingIncome = printCumulativeValues(operatingIncomeSet, sortedOperatingIncome, "Operating Income");

// const printNetIncome = printCumulativeValues(netIncomeSet, sortedNetIncome, "Net Income");

let dataSourceNintendo = "Source: https://www.nintendo.co.jp/ir/en/finance/historical_data/index.html"

const operatingResultsNintendo = operatingResultsMaker(totalCollectionNintendo);

const operatingResultsBandaiNamco = operatingResultsMaker(totalCollectionBandaiNamco);

const operatingResultsSquareEnix = operatingResultsMaker(totalCollectionSquareEnix);

const operatingResultsSegaSammy = operatingResultsMaker(totalCollectionSegaSammy);

const operatingResultsCapcom = operatingResultsMaker(totalCollectionCapcom);

const operatingResultsKoeiTecmo = operatingResultsMaker(totalCollectionKoeiTecmo);

export const cumulativeEarningsListNintendo = [
    operatingResultsNintendo.header,
    labelMaker(totalCollectionNintendo),
    ...operatingResultsNintendo.netSales,
    ...operatingResultsNintendo.operatingIncome,
    ...operatingResultsNintendo.netIncome,
    "###\n",
    dataSourceNintendo,
].reduce((prev, next) => prev + next);

export const cumulativeEarningsListBandaiNamco = [
    operatingResultsBandaiNamco.header,
    labelMaker(totalCollectionBandaiNamco),
    ...operatingResultsBandaiNamco.netSales,
    ...operatingResultsBandaiNamco.operatingIncome,
    ...operatingResultsBandaiNamco.netIncome,
    "###\n",
].reduce((prev, next) => prev + next);

export const cumulativeEarningsListSquareEnix = [
    operatingResultsSquareEnix.header,
    labelMaker(totalCollectionSquareEnix),
    ...operatingResultsSquareEnix.netSales,
    ...operatingResultsSquareEnix.operatingIncome,
    ...operatingResultsSquareEnix.netIncome,
    "###\n",
].reduce((prev, next) => prev + next);

export const cumulativeEarningsListSegaSammy = [
    operatingResultsSegaSammy.header,
    labelMaker(totalCollectionSegaSammy),
    ...operatingResultsSegaSammy.netSales,
    ...operatingResultsSegaSammy.operatingIncome,
    ...operatingResultsSegaSammy.netIncome,
    "###\n",
].reduce((prev, next) => prev + next);

export const cumulativeEarningsListCapcom = [
    operatingResultsCapcom.header,
    labelMaker(totalCollectionCapcom),
    ...operatingResultsCapcom.netSales,
    ...operatingResultsCapcom.operatingIncome,
    ...operatingResultsCapcom.netIncome,
    "###\n",
].reduce((prev, next) => prev + next);

export const cumulativeEarningsListKoeiTecmo = [
    operatingResultsKoeiTecmo.header,
    labelMaker(totalCollectionKoeiTecmo),
    ...operatingResultsKoeiTecmo.netSales,
    ...operatingResultsKoeiTecmo.operatingIncome,
    ...operatingResultsKoeiTecmo.netIncome,
    "###\n",
].reduce((prev, next) => prev + next);