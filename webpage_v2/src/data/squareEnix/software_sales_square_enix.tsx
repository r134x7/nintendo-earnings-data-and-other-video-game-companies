import { Header, Section, SquareEnixPrint } from "../../utils/segment_data_logic";
import softwareSales2023 from "./Software_Sales/software_sales_fy3_2023.json";
import softwareSales2022 from "./Software_Sales/software_sales_fy3_2022.json";
import softwareSales2021 from "./Software_Sales/software_sales_fy3_2021.json";
import softwareSales2020 from "./Software_Sales/software_sales_fy3_2020.json";
import { salesOrUnitsJSON } from "../bandaiNamco/software_sales_bandai_namco";
import type { EarningsJSONV2, EarningsMakeV2 } from "../generalTables/consolidated_earnings_general";
import { generalSalesPerSoftwareUnitListV2Map } from "../../utils/segment_data_logic";

export type collectionJSON = {
    fiscalYear: string,
    currentQuarter: number,
    hdGamesSales: salesOrUnitsJSON,
    mmoSales: salesOrUnitsJSON,
    hdGamesAndMMOUnits: salesOrUnitsJSON,
};

// const collection: collectionJSON[] = [
//     softwareSales2023,
//     softwareSales2022,
//     softwareSales2021,
//     softwareSales2020,
//     undefinedData,
// ];

const collectionV2 = new Map<number, EarningsJSONV2>();

collectionV2.set(collectionV2.size, softwareSales2023)
collectionV2.set(collectionV2.size, softwareSales2022)
collectionV2.set(collectionV2.size, softwareSales2021)
collectionV2.set(collectionV2.size, softwareSales2020)

export const notes2021 = "\n" +
`+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
| From Outline of Results Briefing held    | 
| on May 13, 2021 (for FY3/2021):          |
| We have also made a change to how we     |
| disclose our units sold. Whereas the     |
| download sales we disclosed previously   |
| only included titles launched in the     |
| past two years, we now include all sales |
| made during the relevant fiscal year,    |
| regardless of when a title may have been |
| released.                                |
|                                          |
| This change was prompted primarily by    |
| the fact that we are making many more    |
| sales from our back catalog than we had  |
| in the past.                             |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+`;

export const softwareSalesList = new Map<number, string>();

export const softwareSalesGraphList = new Map();

collectionV2.forEach((value, key, map) => {

    for (let index = 0; index < value.data.length; index++) {

        softwareSalesList.set(key,
        (softwareSalesList.get(key) ?? "") +
        generalSalesPerSoftwareUnitListV2Map(
            {
                ...value,
                data: (index !== 2) 
                        ? [map.get(key)?.data[index] as EarningsMakeV2] 
                        : [ 
                            combineData([
                                map.get(key)?.data[0] as EarningsMakeV2, 
                                map.get(key)?.data[1] as EarningsMakeV2, 
                            ]), 
                            map.get(key)?.data[index] as EarningsMakeV2,
                        ] as EarningsMakeV2[]
            } satisfies EarningsJSONV2,
            (map.get(key+1) === undefined)
            ? undefined
            : {
                companyName: map.get(key+1)?.companyName ?? "Error",
                currentQuarter: map.get(key+1)?.currentQuarter ?? 0,
                fiscalYear: map.get(key+1)?.fiscalYear ?? "Error",
                data: (index !== 2) 
                        ? [map.get(key+1)?.data[index] as EarningsMakeV2] 
                        : [ 
                            combineData([
                                map.get(key+1)?.data[0] as EarningsMakeV2, 
                                map.get(key+1)?.data[1] as EarningsMakeV2, 
                            ]), 
                            map.get(key+1)?.data[index] as EarningsMakeV2,
                        ] as EarningsMakeV2[]
            } satisfies EarningsJSONV2,
            42,
            "Billion",
            "One Thousand",
            (index === 0) ? false : true,
            (index === 2) ? false : true,
        ) + (value.fiscalYear === "FY3/2021" && index === 2 ? notes2021 : "")
        )

    }
})

collectionV2.clear();

function combineData(sales: EarningsMakeV2[]): EarningsMakeV2 {
    return {
        name: sales.reduce((acc, next, index, array) => acc + next.name + (array[index] === array.at(-1) ? "" : " & ") ,""),
        units: "currency",
        Q1CmlValue:sales.reduce((acc, next) => acc + ((Number.isNaN(Number(next.Q1CmlValue))) ? 0 : Number(next.Q1CmlValue)), 0),
        Q2CmlValue:sales.reduce((acc, next) => acc + ((Number.isNaN(Number(next.Q2CmlValue))) ? 0 : Number(next.Q2CmlValue)), 0),
        Q3CmlValue:sales.reduce((acc, next) => acc + ((Number.isNaN(Number(next.Q3CmlValue))) ? 0 : Number(next.Q3CmlValue)), 0),
        Q4CmlValue:sales.reduce((acc, next) => acc + ((Number.isNaN(Number(next.Q4CmlValue))) ? 0 : Number(next.Q4CmlValue)), 0),
        // forecastThisFY:sales.reduce((acc, next) => acc + ((Number.isNaN(Number(next.forecastThisFY))) ? 0 : Number(next.forecastThisFY)), 0),
        // forecastRevision1:sales.reduce((acc, next) => acc + ((Number.isNaN(Number(next.forecastRevision1))) ? 0 : Number(next.forecastRevision1)), 0),
        // forecastRevision2:sales.reduce((acc, next) => acc + ((Number.isNaN(Number(next.forecastRevision2))) ? 0 : Number(next.forecastRevision2)), 0),
        // forecastRevision3:sales.reduce((acc, next) => acc + ((Number.isNaN(Number(next.forecastRevision3))) ? 0 : Number(next.forecastRevision3)), 0),
        // forecastNextFY:sales.reduce((acc, next) => acc + ((Number.isNaN(Number(next.forecastNextFY))) ? 0 : Number(next.forecastNextFY)), 0),
        footnotes: sales.reduce((acc, next) => acc + next.footnotes + " ", ""),
    } satisfies EarningsMakeV2 
}


const salesHDmake = (obj: {"hdGamesSales": salesOrUnitsJSON}): Section[] => {

    let salesHD: Section[] = [
        {
            name: obj.hdGamesSales.name,
            region: "Group Total",
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: (obj.hdGamesSales.units === "NaN") ? "NaN" : "currency",
            value: obj.hdGamesSales.Q1CmlValue, // billion yen
            notes: obj.hdGamesSales.notes
        },
        {
            name: obj.hdGamesSales.name,
            region: "Group Total",
            period: "2nd Quarter",
            cmlPeriod: "First Half",
            units: (obj.hdGamesSales.units === "NaN") ? "NaN" : "currency",
            value: obj.hdGamesSales.Q2CmlValue, // billion yen
            notes: obj.hdGamesSales.notes
        },
        {
            name: obj.hdGamesSales.name,
            region: "Group Total",
            period: "3rd Quarter",
            cmlPeriod: "1st 3 Qtrs",
            units: (obj.hdGamesSales.units === "NaN") ? "NaN" : "currency",
            value: obj.hdGamesSales.Q3CmlValue, // billion yen
            notes: obj.hdGamesSales.notes
        },
        {
            name: obj.hdGamesSales.name,
            region: "Group Total",
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: (obj.hdGamesSales.units === "NaN") ? "NaN" : "currency",
            value: obj.hdGamesSales.Q4CmlValue, // billion yen
            notes: obj.hdGamesSales.notes
        },
    ];

    return salesHD
};


const salesMMOmake = (obj: {"mmoSales": salesOrUnitsJSON}): Section[] => {

    let salesMMO: Section[] = [
        {
            name: obj.mmoSales.name,
            region: "Group Total",
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: (obj.mmoSales.units === "NaN") ? "NaN" : "currency",
            value: obj.mmoSales.Q1CmlValue, // billion yen
            notes: obj.mmoSales.notes
        },
        {
            name: obj.mmoSales.name,
            region: "Group Total",
            period: "2nd Quarter",
            cmlPeriod: "First Half",
            units: (obj.mmoSales.units === "NaN") ? "NaN" : "currency",
            value: obj.mmoSales.Q2CmlValue, // billion yen
            notes: obj.mmoSales.notes
        },
        {
            name: obj.mmoSales.name,
            region: "Group Total",
            period: "3rd Quarter",
            cmlPeriod: "1st 3 Qtrs",
            units: (obj.mmoSales.units === "NaN") ? "NaN" : "currency",
            value: obj.mmoSales.Q3CmlValue, // billion yen
            notes: obj.mmoSales.notes
        },
        {
            name: obj.mmoSales.name,
            region: "Group Total",
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: (obj.mmoSales.units === "NaN") ? "NaN" : "currency",
            value: obj.mmoSales.Q4CmlValue, // billion yen
            notes: obj.mmoSales.notes
        },
    ];

    return salesMMO
};

export const salesHDandMMOmake= (obj: {"hdGamesSales": salesOrUnitsJSON, "mmoSales": salesOrUnitsJSON}): Section[] => {

    let salesHDandMMO: Section[] = [
        {
            name: "HD Games & MMO Sales",
            region: "Group Total",
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: (obj.hdGamesSales.units === "NaN") ? "NaN" : "currency",
            value: Number((obj.hdGamesSales.Q1CmlValue + obj.mmoSales.Q1CmlValue).toFixed(1)), // billion yen
            notes: `${obj.hdGamesSales.notes} ${obj.mmoSales.notes}`
        },
        {
            name: "HD Games & MMO Sales",
            region: "Group Total",
            period: "2nd Quarter",
            cmlPeriod: "First Half",
            units: (obj.hdGamesSales.units === "NaN") ? "NaN" : "currency",
            value: Number((obj.hdGamesSales.Q2CmlValue + obj.mmoSales.Q2CmlValue).toFixed(1)), // billion yen
            notes: `${obj.hdGamesSales.notes} ${obj.mmoSales.notes}`
        },
        {
            name: "HD Games & MMO Sales",
            region: "Group Total",
            period: "3rd Quarter",
            cmlPeriod: "1st 3 Qtrs",
            units: (obj.hdGamesSales.units === "NaN") ? "NaN" : "currency",
            value: Number((obj.hdGamesSales.Q3CmlValue + obj.mmoSales.Q3CmlValue).toFixed(1)), // billion yen
            notes: `${obj.hdGamesSales.notes} ${obj.mmoSales.notes}`
        },
        {
            name: "HD Games & MMO Sales",
            region: "Group Total",
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: (obj.hdGamesSales.units === "NaN") ? "NaN" : "currency",
            value: Number((obj.hdGamesSales.Q4CmlValue + obj.mmoSales.Q4CmlValue).toFixed(1)), // billion yen
            notes: `${obj.hdGamesSales.notes} ${obj.mmoSales.notes}`
        },
    ];

    return salesHDandMMO
};

export const unitsMake = (obj: {"hdGamesAndMMOUnits": salesOrUnitsJSON}): Section[] => {

    let units: Section[] = [
        {
            name: obj.hdGamesAndMMOUnits.name,
            region: "Group Total",
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: (obj.hdGamesAndMMOUnits.units === "NaN") ? "NaN" : "units",
            value: obj.hdGamesAndMMOUnits.Q1CmlValue // billion yen
        },
        {
            name: obj.hdGamesAndMMOUnits.name,
            region: "Group Total",
            period: "2nd Quarter",
            cmlPeriod: "First Half",
            units: (obj.hdGamesAndMMOUnits.units === "NaN") ? "NaN" : "units",
            value: obj.hdGamesAndMMOUnits.Q2CmlValue // billion yen
        },
        {
            name: obj.hdGamesAndMMOUnits.name,
            region: "Group Total",
            period: "3rd Quarter",
            cmlPeriod: "1st 3 Qtrs",
            units: (obj.hdGamesAndMMOUnits.units === "NaN") ? "NaN" : "units",
            value: obj.hdGamesAndMMOUnits.Q3CmlValue // billion yen
        },
        {
            name: obj.hdGamesAndMMOUnits.name,
            region: "Group Total",
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: (obj.hdGamesAndMMOUnits.units === "NaN") ? "NaN" : "units",
            value: obj.hdGamesAndMMOUnits.Q4CmlValue // billion yen
        },
    ];

    return units 
};

// export const softwareSalesList: string[] = collection.flatMap((elem, index, array) => {
//     if (array[index] === array.at(-1)) {
//         return [] // for undefinedData in collection only
//     }

//     let header: Header = {
//         fiscalYear: elem.fiscalYear,
//         secondHeader: "| Segment Information |",
//         firstHeader: "| Square Enix    |", 
//     };

//     let salesHDThisFY: Section[] = salesHDmake(elem);
//     let salesHDLastFY: Section[] = salesHDmake(array[index+1]);

//     let salesMMOThisFY: Section[] = salesMMOmake(elem);
//     let salesMMOLastFY: Section[] = salesMMOmake(array[index+1]);

//     let salesHDandMMOThisFY: Section[] = salesHDandMMOmake(elem);
//     let salesHDandMMOLastFY: Section[] = salesHDandMMOmake(array[index+1]);

//     let unitsThisFY: Section[] = unitsMake(elem);
//     let unitsLastFY: Section[] = unitsMake(array[index+1]);

//     return (elem.fiscalYear === "FY3/2021")  
//             ? SquareEnixPrint(salesHDThisFY, salesHDLastFY, salesMMOThisFY, salesMMOLastFY, salesHDandMMOThisFY, salesHDandMMOLastFY, unitsThisFY, unitsLastFY, header, elem.currentQuarter).concat(notes2021)
//             : SquareEnixPrint(salesHDThisFY, salesHDLastFY, salesMMOThisFY, salesMMOLastFY, salesHDandMMOThisFY, salesHDandMMOLastFY, unitsThisFY, unitsLastFY, header, elem.currentQuarter)
// });
