import { EarningsJSON } from "./consolidated_earnings_general"
import { liner, spacer, border } from "../../utils/table_design_logic"

import consolidatedEarnings1981 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1981.json" 
import consolidatedEarnings1982 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1982.json" 
import consolidatedEarnings1983 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1983.json" 
import consolidatedEarnings1984 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1984.json" 
import consolidatedEarnings1985 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1985.json" 
import consolidatedEarnings1986 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1986.json" 
import consolidatedEarnings1987 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1987.json" 
import consolidatedEarnings1988 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1988.json" 
import consolidatedEarnings1989 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy8_1989.json" 
import consolidatedEarnings1990 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1990.json" 
import consolidatedEarnings1991 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1991.json" 
import consolidatedEarnings1992 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1992.json" 
import consolidatedEarnings1993 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1993.json" 
import consolidatedEarnings1994 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1994.json" 
import consolidatedEarnings1995 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1995.json" 
import consolidatedEarnings1996 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1996.json" 
import consolidatedEarnings1997 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1997.json" 
import consolidatedEarnings1998 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1998.json" 
import consolidatedEarnings1999 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_1999.json" 
import consolidatedEarnings2000 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2000.json" 
import consolidatedEarnings2001 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2001.json" 
import consolidatedEarnings2002 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2002.json" 
import consolidatedEarnings2003 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2003.json" 
import consolidatedEarnings2004 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2004.json" 
import consolidatedEarnings2005 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2005.json" 
import consolidatedEarnings2006 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2006.json" 
import consolidatedEarnings2007 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2007.json" 
import consolidatedEarnings2008 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2008.json" 
import consolidatedEarnings2009 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2009.json" 
import consolidatedEarnings2010 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2010.json" 
import consolidatedEarnings2011 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2011.json" 
import consolidatedEarnings2012 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2012.json" 
import consolidatedEarnings2013 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2013.json" 
import consolidatedEarnings2014 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2014.json" 
import consolidatedEarnings2015 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2015.json" 
import consolidatedEarnings2016 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2016.json" 
import consolidatedEarnings2017 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2017.json" 
import consolidatedEarnings2018 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2018.json" 
import consolidatedEarnings2019 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2019.json" 
import consolidatedEarnings2020 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2020.json" 
import consolidatedEarnings2021 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2021.json" 
import consolidatedEarnings2022 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2022.json" 
import consolidatedEarnings2023 from "../nintendo/Consolidated_Earnings/consolidated_earnings_fy3_2023.json" 

const totalCollectionNintendo: EarningsJSON[] = [
    consolidatedEarnings1981,
    consolidatedEarnings1982,
    consolidatedEarnings1983,
    consolidatedEarnings1984,
    consolidatedEarnings1985,
    consolidatedEarnings1986,
    consolidatedEarnings1987,
    consolidatedEarnings1988,
    consolidatedEarnings1989,
    consolidatedEarnings1990,
    consolidatedEarnings1991,
    consolidatedEarnings1992,
    consolidatedEarnings1993,
    consolidatedEarnings1994,
    consolidatedEarnings1995,
    consolidatedEarnings1996,
    consolidatedEarnings1997,
    consolidatedEarnings1998,
    consolidatedEarnings1999,
    consolidatedEarnings2000,
    consolidatedEarnings2001,
    consolidatedEarnings2002,
    consolidatedEarnings2003,
    consolidatedEarnings2004,
    consolidatedEarnings2005,
    consolidatedEarnings2006,
    consolidatedEarnings2007,
    consolidatedEarnings2008,
    consolidatedEarnings2009,
    consolidatedEarnings2010,
    consolidatedEarnings2011,
    consolidatedEarnings2012,
    consolidatedEarnings2013,
    consolidatedEarnings2014,
    consolidatedEarnings2015,
    consolidatedEarnings2016,
    consolidatedEarnings2017,
    consolidatedEarnings2018,
    consolidatedEarnings2019,
    consolidatedEarnings2020,
    consolidatedEarnings2021,
    consolidatedEarnings2022,
    consolidatedEarnings2023,
];

const dateLabel = liner(border([spacer("Data as of September 30th, 2022", "Data as of September 30th, 2022".length+1, "left")]),"−", "bottom",true)

let netSalesSet = totalCollectionNintendo.map(elem => {
    return {
        fiscalYear: elem.fiscalYear,
        value: elem.data[0].Q4CmlValue
    };
});

let operatingIncomeSet = totalCollectionNintendo.map(elem => {
    return {
        fiscalYear: elem.fiscalYear,
        value: elem.data[1].Q4CmlValue
    };
});

let netIncomeSet = totalCollectionNintendo.map(elem => {
    return {
        fiscalYear: elem.fiscalYear,
        value: elem.data[2].Q4CmlValue
    };
});

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

const sortedNetSales = sortList(netSalesSet);
const sortedOperatingIncome = sortList(operatingIncomeSet);
const sortedNetIncome = sortList(netIncomeSet);

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

const printNetSales = printCumulativeValues(netSalesSet, sortedNetSales, "Net Sales");

const printOperatingIncome = printCumulativeValues(operatingIncomeSet, sortedOperatingIncome, "Operating Income");

const printNetIncome = printCumulativeValues(netIncomeSet, sortedNetIncome, "Net Income");

let dataSourceNintendo = "Source: https://www.nintendo.co.jp/ir/en/finance/historical_data/index.html"

export const cumulativeEarningsListNintendo = [
    headerNintendo,
    dateLabel,
    ...printNetSales,
    ...printOperatingIncome,
    ...printNetIncome,
    "###\n",
    dataSourceNintendo,
].reduce((prev, next) => prev + next);