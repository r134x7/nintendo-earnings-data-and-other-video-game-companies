import { EarningsJSON } from "../../generalTables/consolidated_earnings_general"

import consolidatedEarnings1981 from "../Consolidated_Earnings/consolidated_earnings_fy8_1981.json" 
import consolidatedEarnings1982 from "../Consolidated_Earnings/consolidated_earnings_fy8_1982.json" 
import consolidatedEarnings1983 from "../Consolidated_Earnings/consolidated_earnings_fy8_1983.json" 
import consolidatedEarnings1984 from "../Consolidated_Earnings/consolidated_earnings_fy8_1984.json" 
import consolidatedEarnings1985 from "../Consolidated_Earnings/consolidated_earnings_fy8_1985.json" 
import consolidatedEarnings1986 from "../Consolidated_Earnings/consolidated_earnings_fy8_1986.json" 
import consolidatedEarnings1987 from "../Consolidated_Earnings/consolidated_earnings_fy8_1987.json" 
import consolidatedEarnings1988 from "../Consolidated_Earnings/consolidated_earnings_fy8_1988.json" 
import consolidatedEarnings1989 from "../Consolidated_Earnings/consolidated_earnings_fy8_1989.json" 
import consolidatedEarnings1990 from "../Consolidated_Earnings/consolidated_earnings_fy3_1990.json" 
import consolidatedEarnings1991 from "../Consolidated_Earnings/consolidated_earnings_fy3_1991.json" 
import consolidatedEarnings1992 from "../Consolidated_Earnings/consolidated_earnings_fy3_1992.json" 
import consolidatedEarnings1993 from "../Consolidated_Earnings/consolidated_earnings_fy3_1993.json" 
import consolidatedEarnings1994 from "../Consolidated_Earnings/consolidated_earnings_fy3_1994.json" 
import consolidatedEarnings1995 from "../Consolidated_Earnings/consolidated_earnings_fy3_1995.json" 
import consolidatedEarnings1996 from "../Consolidated_Earnings/consolidated_earnings_fy3_1996.json" 
import consolidatedEarnings1997 from "../Consolidated_Earnings/consolidated_earnings_fy3_1997.json" 
import consolidatedEarnings1998 from "../Consolidated_Earnings/consolidated_earnings_fy3_1998.json" 
import consolidatedEarnings1999 from "../Consolidated_Earnings/consolidated_earnings_fy3_1999.json" 
import consolidatedEarnings2000 from "../Consolidated_Earnings/consolidated_earnings_fy3_2000.json" 
import consolidatedEarnings2001 from "../Consolidated_Earnings/consolidated_earnings_fy3_2001.json" 
import consolidatedEarnings2002 from "../Consolidated_Earnings/consolidated_earnings_fy3_2002.json" 
import consolidatedEarnings2003 from "../Consolidated_Earnings/consolidated_earnings_fy3_2003.json" 
import consolidatedEarnings2004 from "../Consolidated_Earnings/consolidated_earnings_fy3_2004.json" 
import consolidatedEarnings2005 from "../Consolidated_Earnings/consolidated_earnings_fy3_2005.json" 
import consolidatedEarnings2006 from "../Consolidated_Earnings/consolidated_earnings_fy3_2006.json" 
import consolidatedEarnings2007 from "../Consolidated_Earnings/consolidated_earnings_fy3_2007.json" 
import consolidatedEarnings2008 from "../Consolidated_Earnings/consolidated_earnings_fy3_2008.json" 
import consolidatedEarnings2009 from "../Consolidated_Earnings/consolidated_earnings_fy3_2009.json" 
import consolidatedEarnings2010 from "../Consolidated_Earnings/consolidated_earnings_fy3_2010.json" 
import consolidatedEarnings2011 from "../Consolidated_Earnings/consolidated_earnings_fy3_2011.json" 
import consolidatedEarnings2012 from "../Consolidated_Earnings/consolidated_earnings_fy3_2012.json" 
import consolidatedEarnings2013 from "../Consolidated_Earnings/consolidated_earnings_fy3_2013.json" 
import consolidatedEarnings2014 from "../Consolidated_Earnings/consolidated_earnings_fy3_2014.json" 
import consolidatedEarnings2015 from "../Consolidated_Earnings/consolidated_earnings_fy3_2015.json" 
import consolidatedEarnings2016 from "../Consolidated_Earnings/consolidated_earnings_fy3_2016.json" 
import consolidatedEarnings2017 from "../Consolidated_Earnings/consolidated_earnings_fy3_2017.json" 
import consolidatedEarnings2018 from "../Consolidated_Earnings/consolidated_earnings_fy3_2018.json" 
import consolidatedEarnings2019 from "../Consolidated_Earnings/consolidated_earnings_fy3_2019.json" 
import consolidatedEarnings2020 from "../Consolidated_Earnings/consolidated_earnings_fy3_2020.json" 
import consolidatedEarnings2021 from "../Consolidated_Earnings/consolidated_earnings_fy3_2021.json" 
import consolidatedEarnings2022 from "../Consolidated_Earnings/consolidated_earnings_fy3_2022.json" 
import consolidatedEarnings2023 from "../Consolidated_Earnings/consolidated_earnings_fy3_2023.json" 

const totalCollection: EarningsJSON[] = [
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

let netSalesSet = totalCollection.map(elem => {
    return {
        fiscalYear: elem.fiscalYear,
        value: elem.data[0].Q4CmlValue
    };
});

let operatingIncomeSet = totalCollection.map(elem => {
    return {
        fiscalYear: elem.fiscalYear,
        value: elem.data[1].Q4CmlValue
    };
});

let netIncomeSet = totalCollection.map(elem => {
    return {
        fiscalYear: elem.fiscalYear,
        value: elem.data[2].Q4CmlValue
    };
});

function sortList(list: {fiscalYear: string, value: number}[]) {

    const sortList = list.map((elem, index, array) => {
            return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
    }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
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

let header = 
`+--------------------+
| Nintendo Co., Ltd. |
+-----------------------------------+
| Consolidated Operating Results    |
+-----------------------------------+`;

const printCumulativeValues = (sortedList: {fiscalYear: string, value: number}[], valueType: string): string[] => {

    let header = "+" + "-".repeat(35) + "+\n| " + valueType + " ".repeat(34-valueType.length) + "|\n+" + "-".repeat(35) + "+"; 

    let printList = sortedList.map(elem => {

        let valueString: string = `¥${elem.value.toLocaleString("en")}M `;

        let valueFixed: string = (valueString.length >= 12)
                              ? valueString 
                              : " ".repeat(12 - valueString.length) + valueString;

        return `| ${elem.fiscalYear} Cumulative | ${valueFixed}|`;
    });

    let printLine = "+" + "-".repeat(35) + "+";

    return [header, ...printList, printLine] 
};

const printNetSales = printCumulativeValues(sortedNetSales, "Net Sales");

const printOperatingIncome = printCumulativeValues(sortedOperatingIncome, "Operating Income");

const printNetIncome = printCumulativeValues(sortedNetIncome, "Net Income");

let dataSource = "Source: https://www.nintendo.co.jp/ir/en/finance/historical_data/index.html"

export const cumulativeEarningsList = [
    header,
    ...printNetSales,
    ...printOperatingIncome,
    ...printNetIncome,
    "###",
    dataSource,
].reduce((prev, next) => prev + "\n" + next);