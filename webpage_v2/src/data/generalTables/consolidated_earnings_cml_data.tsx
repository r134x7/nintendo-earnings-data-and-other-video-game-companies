import { EarningsJSON } from "./consolidated_earnings_general"
import { liner, spacer, border } from "../../utils/table_design_logic"

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

import consolidatedEarningsBandaiNamco2018 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2018.json"
import consolidatedEarningsBandaiNamco2019 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2019.json"
import consolidatedEarningsBandaiNamco2020 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2020.json"
import consolidatedEarningsBandaiNamco2021 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2021.json"
import consolidatedEarningsBandaiNamco2022 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2022.json"
import consolidatedEarningsBandaiNamco2023 from "../bandaiNamco/Consolidated_Earnings/consolidated_earnings_fy3_2023.json"

import consolidatedEarningsCapcom2016 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2016.json"
import consolidatedEarningsCapcom2017 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2017.json"
import consolidatedEarningsCapcom2018 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2018.json"
import consolidatedEarningsCapcom2019 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2019.json"
import consolidatedEarningsCapcom2020 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2020.json"
import consolidatedEarningsCapcom2021 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2021.json"
import consolidatedEarningsCapcom2022 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2022.json"
import consolidatedEarningsCapcom2023 from "../capcom/Consolidated_Earnings/consolidated_earnings_fy3_2023.json"

import consolidatedEarningsKoeiTecmo2018 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2018.json"
import consolidatedEarningsKoeiTecmo2019 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2019.json"
import consolidatedEarningsKoeiTecmo2020 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2020.json"
import consolidatedEarningsKoeiTecmo2021 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2021.json"
import consolidatedEarningsKoeiTecmo2022 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2022.json"
import consolidatedEarningsKoeiTecmo2023 from "../koeiTecmo/Consolidated_Earnings/consolidated_earnings_fy3_2023.json"

import consolidatedEarningsSegaSammy2018 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2018.json"
import consolidatedEarningsSegaSammy2019 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2019.json"
import consolidatedEarningsSegaSammy2020 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2020.json"
import consolidatedEarningsSegaSammy2021 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2021.json"
import consolidatedEarningsSegaSammy2022 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2022.json"
import consolidatedEarningsSegaSammy2023 from "../sega/Consolidated_Earnings/consolidated_earnings_fy3_2023.json"

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
    consolidatedEarningsBandaiNamco2018,
    consolidatedEarningsBandaiNamco2019,
    consolidatedEarningsBandaiNamco2020,
    consolidatedEarningsBandaiNamco2021,
    consolidatedEarningsBandaiNamco2022,
    consolidatedEarningsBandaiNamco2023,
];

const totalCollectionCapcom: EarningsJSON[] = [
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
    consolidatedEarningsKoeiTecmo2018,
    consolidatedEarningsKoeiTecmo2019,
    consolidatedEarningsKoeiTecmo2020,
    consolidatedEarningsKoeiTecmo2021,
    consolidatedEarningsKoeiTecmo2022,
    consolidatedEarningsKoeiTecmo2023,
];

const totalCollectionSegaSammy: EarningsJSON[] = [
    consolidatedEarningsSegaSammy2018,
    consolidatedEarningsSegaSammy2019,
    consolidatedEarningsSegaSammy2020,
    consolidatedEarningsSegaSammy2021,
    consolidatedEarningsSegaSammy2022,
    consolidatedEarningsSegaSammy2023,
];

const totalCollectionSquareEnix: EarningsJSON[] = [
    consolidatedEarningsSquareEnix2018,
    consolidatedEarningsSquareEnix2019,
    consolidatedEarningsSquareEnix2020,
    consolidatedEarningsSquareEnix2021,
    consolidatedEarningsSquareEnix2022,
    consolidatedEarningsSquareEnix2023,
];

const dateLabel = liner(border([spacer("Data as of September 30th, 2022", "Data as of September 30th, 2022".length+1, "left")]),"−", "bottom",true)

function operatingResultsMaker (collection: EarningsJSON[]): {
    netSales: string[], operatingIncome: string[], netIncome: string[]
} {

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

let headerNintendo = liner(border([
    spacer("Nintendo Co., Ltd.", "Nintendo Co., Ltd.".length+1, "left")
    ]),"−","top",true) +
    liner(border([
        spacer("Consolidated Operating Results", "Consolidated Operating Results".length+2, "left")
    ]), "−", "both",true)

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

export const cumulativeEarningsListNintendo = [
    headerNintendo,
    dateLabel,
    ...operatingResultsNintendo.netSales,
    ...operatingResultsNintendo.operatingIncome,
    ...operatingResultsNintendo.netIncome,
    "###\n",
    dataSourceNintendo,
].reduce((prev, next) => prev + next);
