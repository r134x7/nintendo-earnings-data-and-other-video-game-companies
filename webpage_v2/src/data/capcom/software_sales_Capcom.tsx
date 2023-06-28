import { Header, Section, CapcomPrint, salesPerSoftwareUnitForecast, CapcomPrintPhysical, CapcomPrintDigital, graphMake } from "../../utils/segment_data_logic";
import softwareSales2023 from "./Software_Sales/software_sales_fy3_2023.json";
import softwareSales2022 from "./Software_Sales/software_sales_fy3_2022.json";
import softwareSales2021 from "./Software_Sales/software_sales_fy3_2021.json";
import { salesOrUnitsJSON } from "../bandaiNamco/software_sales_bandai_namco";
import { generalSalesPerSoftwareUnitListV2Map } from "../../utils/segment_data_logic";
import type { EarningsJSONV2, EarningsMakeV2 } from "../generalTables/consolidated_earnings_general";

export type collectionJSON = {
    fiscalYear: string,
    currentQuarter: number,
    digitalContentsSales: salesOrUnitsJSON,
    digitalContentsUnits: salesOrUnitsJSON,
    packageSales: salesOrUnitsJSON,
    packageUnits: salesOrUnitsJSON,
    digitalSales: salesOrUnitsJSON,
    digitalUnits: salesOrUnitsJSON,
}

// const collection: collectionJSON[] = [
//     softwareSales2023,
//     softwareSales2022,
//     softwareSales2021,
//     undefinedData,
// ];

const collectionV2 = new Map<number, EarningsJSONV2>();

collectionV2.set(collectionV2.size, softwareSales2023)
collectionV2.set(collectionV2.size, softwareSales2022)
collectionV2.set(collectionV2.size, softwareSales2021)

export const softwareSalesList = new Map<number, string>();

export const softwareSalesGraphList = new Map();

collectionV2.forEach((value, key, map) => {

    for (let index = 0; index < value.data.length; index+= 2) {
        
        softwareSalesList.set(key,
        (softwareSalesList.get(key) ?? "") +
        generalSalesPerSoftwareUnitListV2Map(
            {
                ...value,
                data: [
                    map.get(key)?.data[index],
                    map.get(key)?.data[index+1],
                ] as EarningsMakeV2[]
            } satisfies EarningsJSONV2,
            {
                companyName: map.get(key+1)?.companyName ?? "Error",
                currentQuarter: map.get(key+1)?.currentQuarter ?? 0,
                fiscalYear: map.get(key+1)?.fiscalYear ?? "Error",
                data: [
                    map.get(key+1)?.data[index],
                    map.get(key+1)?.data[index+1],
                ] as EarningsMakeV2[]
            } satisfies EarningsJSONV2,
            38,
            "Billion",
            "One Thousand",
            (index === 0) ? false : true
        ))

    }
})

collectionV2.clear();

const forecastsMake = (obj: salesOrUnitsJSON, units: string): Section[] => {

    // had to use different type assertion due to issue with keys not being recognised...
    let forecasts: Section[] = [
        {
            name: obj.name,
            region: "Group Total",
            units: (units === "units") ? "units" : "currency",
            period: "Forecast", 
            cmlPeriod: "1st Quarter",
            value: obj?.forecastThisFY,
            notes: obj?.notes,
        } as Section,
        {
            name: obj.name,
            region: "Group Total",
            units: (units === "units") ? "units" : "currency",
            period: "FCST Revision 1",
            cmlPeriod: "First Half",
            value: obj?.forecastRevision1,
            notes: obj?.notes,
        } as Section,
        {
            name: obj.name,
            region: "Group Total",
            units: (units === "units") ? "units" : "currency",
            period: "FCST Revision 2",
            cmlPeriod: "1st 3 Qtrs",
            value: obj?.forecastRevision2,
            notes: obj?.notes,
        } as Section,
        {
            name: obj.name,
            region: "Group Total",
            units: (units === "units") ? "units" : "currency",
            period: "FCST Revision 3",
            cmlPeriod: "1st 3 Qtrs",
            value: obj?.forecastRevision3,
            notes: obj?.notes,
        } as Section,
        {
            name: obj.name,
            region: "Group Total",
            units: (units === "units") ? "units" : "currency",
            period: "Forecast",
            cmlPeriod: "Cml.",
            value: obj?.forecastNextFY,
            notes: obj?.notes,
        } as Section,
    ].filter(elem => elem.value !== undefined)

    return forecasts
};

export const digitalContentsSalesMake = (obj: {"digitalContentsSales": salesOrUnitsJSON}, forecast?: boolean): Section[] => {
    if (forecast === true) {
        return forecastsMake(obj.digitalContentsSales,"currency")
    }

    let sales: Section[] = [
        {
            name: obj.digitalContentsSales.name,
            region: "Group Total",
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: (obj.digitalContentsSales.units === "NaN") ? "NaN" : "currency",
            value: obj.digitalContentsSales.Q1CmlValue, // billion yen
            notes: obj.digitalContentsSales.notes
        },
        {
            name: obj.digitalContentsSales.name,
            region: "Group Total",
            period: "2nd Quarter",
            cmlPeriod: "First Half",
            units: (obj.digitalContentsSales.units === "NaN") ? "NaN" : "currency",
            value: obj.digitalContentsSales.Q2CmlValue, // billion yen
            notes: obj.digitalContentsSales.notes
        },
        {
            name: obj.digitalContentsSales.name,
            region: "Group Total",
            period: "3rd Quarter",
            cmlPeriod: "1st 3 Qtrs",
            units: (obj.digitalContentsSales.units === "NaN") ? "NaN" : "currency",
            value: obj.digitalContentsSales.Q3CmlValue, // billion yen
            notes: obj.digitalContentsSales.notes
        },
        {
            name: obj.digitalContentsSales.name,
            region: "Group Total",
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: (obj.digitalContentsSales.units === "NaN") ? "NaN" : "currency",
            value: obj.digitalContentsSales.Q4CmlValue, // billion yen
            notes: obj.digitalContentsSales.notes
        },
    ];

    return sales
};

export const digitalContentsUnitsMake = (obj: {"digitalContentsUnits": salesOrUnitsJSON}, forecast?: boolean): Section[] => {
    if (forecast === true) {
        return forecastsMake(obj.digitalContentsUnits,"units")
    }

    let units: Section[] = [
        {
            name: obj.digitalContentsUnits.name,
            region: "Group Total",
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: (obj.digitalContentsUnits.units === "NaN") ? "NaN" : "units",
            value: obj.digitalContentsUnits.Q1CmlValue // billion yen
        },
        {
            name: obj.digitalContentsUnits.name,
            region: "Group Total",
            period: "2nd Quarter",
            cmlPeriod: "First Half",
            units: (obj.digitalContentsUnits.units === "NaN") ? "NaN" : "units",
            value: obj.digitalContentsUnits.Q2CmlValue // billion yen
        },
        {
            name: obj.digitalContentsUnits.name,
            region: "Group Total",
            period: "3rd Quarter",
            cmlPeriod: "1st 3 Qtrs",
            units: (obj.digitalContentsUnits.units === "NaN") ? "NaN" : "units",
            value: obj.digitalContentsUnits.Q3CmlValue // billion yen
        },
        {
            name: obj.digitalContentsUnits.name,
            region: "Group Total",
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: (obj.digitalContentsUnits.units === "NaN") ? "NaN" : "units",
            value: obj.digitalContentsUnits.Q4CmlValue // billion yen
        },
    ];

    return units 
};

export const packageSalesMake = (obj: {"packageSales": salesOrUnitsJSON}, forecast?: boolean): Section[] => {
    if (forecast === true) {
        return forecastsMake(obj.packageSales,"currency")
    }

    let sales: Section[] = [
        {
            name: obj.packageSales.name,
            region: "Group Total",
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: (obj.packageSales.units === "NaN") ? "NaN" : "currency",
            value: obj.packageSales.Q1CmlValue // billion yen
        },
        {
            name: obj.packageSales.name,
            region: "Group Total",
            period: "2nd Quarter",
            cmlPeriod: "First Half",
            units: (obj.packageSales.units === "NaN") ? "NaN" : "currency",
            value: obj.packageSales.Q2CmlValue // billion yen
        },
        {
            name: obj.packageSales.name,
            region: "Group Total",
            period: "3rd Quarter",
            cmlPeriod: "1st 3 Qtrs",
            units: (obj.packageSales.units === "NaN") ? "NaN" : "currency",
            value: obj.packageSales.Q3CmlValue // billion yen
        },
        {
            name: obj.packageSales.name,
            region: "Group Total",
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: (obj.packageSales.units === "NaN") ? "NaN" : "currency",
            value: obj.packageSales.Q4CmlValue // billion yen
        },
    ];

    return sales
};

export const packageUnitsMake = (obj: {"packageUnits": salesOrUnitsJSON}, forecast?: boolean): Section[] => {
    if (forecast === true) {
        return forecastsMake(obj.packageUnits,"units")
    }

    let units: Section[] = [
        {
            name: obj.packageUnits.name,
            region: "Group Total",
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: (obj.packageUnits.units === "NaN") ? "NaN" : "units",
            value: obj.packageUnits.Q1CmlValue // billion yen
        },
        {
            name: obj.packageUnits.name,
            region: "Group Total",
            period: "2nd Quarter",
            cmlPeriod: "First Half",
            units: (obj.packageUnits.units === "NaN") ? "NaN" : "units",
            value: obj.packageUnits.Q2CmlValue // billion yen
        },
        {
            name: obj.packageUnits.name,
            region: "Group Total",
            period: "3rd Quarter",
            cmlPeriod: "1st 3 Qtrs",
            units: (obj.packageUnits.units === "NaN") ? "NaN" : "units",
            value: obj.packageUnits.Q3CmlValue // billion yen
        },
        {
            name: obj.packageUnits.name,
            region: "Group Total",
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: (obj.packageUnits.units === "NaN") ? "NaN" : "units",
            value: obj.packageUnits.Q4CmlValue // billion yen
        },
    ];

    return units 
};

export const digitalSalesMake = (obj: {"digitalSales": salesOrUnitsJSON}, forecast?: boolean): Section[] => {
    if (forecast === true) {
        return forecastsMake(obj.digitalSales,"currency")
    }

    let sales: Section[] = [
        {
            name: obj.digitalSales.name,
            region: "Group Total",
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: (obj.digitalSales.units === "NaN") ? "NaN" : "currency",
            value: obj.digitalSales.Q1CmlValue, // billion yen
            notes: obj.digitalSales.notes
        },
        {
            name: obj.digitalSales.name,
            region: "Group Total",
            period: "2nd Quarter",
            cmlPeriod: "First Half",
            units: (obj.digitalSales.units === "NaN") ? "NaN" : "currency",
            value: obj.digitalSales.Q2CmlValue, // billion yen
            notes: obj.digitalSales.notes
        },
        {
            name: obj.digitalSales.name,
            region: "Group Total",
            period: "3rd Quarter",
            cmlPeriod: "1st 3 Qtrs",
            units: (obj.digitalSales.units === "NaN") ? "NaN" : "currency",
            value: obj.digitalSales.Q3CmlValue, // billion yen
            notes: obj.digitalSales.notes
        },
        {
            name: obj.digitalSales.name,
            region: "Group Total",
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: (obj.digitalSales.units === "NaN") ? "NaN" : "currency",
            value: obj.digitalSales.Q4CmlValue, // billion yen
            notes: obj.digitalSales.notes
        },
    ];

    return sales
};

export const digitalUnitsMake = (obj: {"digitalUnits": salesOrUnitsJSON}, forecast?: boolean): Section[] => {
    if (forecast === true) {
        return forecastsMake(obj.digitalUnits,"units")
    }

    let units: Section[] = [
        {
            name: obj.digitalUnits.name,
            region: "Group Total",
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: (obj.digitalUnits.units === "NaN") ? "NaN" : "units",
            value: obj.digitalUnits.Q1CmlValue // billion yen
        },
        {
            name: obj.digitalUnits.name,
            region: "Group Total",
            period: "2nd Quarter",
            cmlPeriod: "First Half",
            units: (obj.digitalUnits.units === "NaN") ? "NaN" : "units",
            value: obj.digitalUnits.Q2CmlValue // billion yen
        },
        {
            name: obj.digitalUnits.name,
            region: "Group Total",
            period: "3rd Quarter",
            cmlPeriod: "1st 3 Qtrs",
            units: (obj.digitalUnits.units === "NaN") ? "NaN" : "units",
            value: obj.digitalUnits.Q3CmlValue // billion yen
        },
        {
            name: obj.digitalUnits.name,
            region: "Group Total",
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: (obj.digitalUnits.units === "NaN") ? "NaN" : "units",
            value: obj.digitalUnits.Q4CmlValue // billion yen
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
//         firstHeader: "| Capcom         |",
//     };

//     let digitalContentsSalesThisFY: Section[] = digitalContentsSalesMake(elem);
//     let digitalContentsSalesLastFY: Section[] = digitalContentsSalesMake(array[index+1]);
//     let digitalContentsSalesForecast: Section[] = digitalContentsSalesMake(elem,true);

//     let digitalContentsUnitsThisFY: Section[] = digitalContentsUnitsMake(elem);
//     let digitalContentsUnitsLastFY: Section[] = digitalContentsUnitsMake(array[index+1]);
//     let digitalContentsUnitsForecast: Section[] = digitalContentsUnitsMake(elem,true);

//     let packageSalesThisFY: Section[] = packageSalesMake(elem);
//     let packageSalesLastFY: Section[] = packageSalesMake(array[index+1]);
//     let packageSalesForecast: Section[] = packageSalesMake(elem,true);

//     let packageUnitsThisFY: Section[] = packageUnitsMake(elem);
//     let packageUnitsLastFY: Section[] = packageUnitsMake(array[index+1]);
//     let packageUnitsForecast: Section[] = packageUnitsMake(elem,true);

//     let digitalSalesThisFY: Section[] = digitalSalesMake(elem);
//     let digitalSalesLastFY: Section[] = digitalSalesMake(array[index+1]);
//     let digitalSalesForecast: Section[] = digitalSalesMake(elem,true);

//     let digitalUnitsThisFY: Section[] = digitalUnitsMake(elem);
//     let digitalUnitsLastFY: Section[] = digitalUnitsMake(array[index+1]);
//     let digitalUnitsForecast: Section[] = digitalUnitsMake(elem,true);

//     let capcomList: string = [
//         CapcomPrint(digitalContentsSalesThisFY, digitalContentsSalesLastFY, digitalContentsUnitsThisFY, digitalContentsUnitsLastFY, header, elem.currentQuarter),
//         salesPerSoftwareUnitForecast(digitalContentsSalesForecast, digitalContentsUnitsForecast, header, elem.currentQuarter),
//         CapcomPrintPhysical(packageSalesThisFY, packageSalesLastFY, packageUnitsThisFY, packageUnitsLastFY, header, elem.currentQuarter),
//         salesPerSoftwareUnitForecast(packageSalesForecast, packageUnitsForecast, header, elem.currentQuarter),
//         CapcomPrintDigital(digitalSalesThisFY, digitalSalesLastFY, digitalUnitsThisFY, digitalUnitsLastFY, header, elem.currentQuarter),
//         salesPerSoftwareUnitForecast(digitalSalesForecast, digitalUnitsForecast, header, elem.currentQuarter),
//     ].reduce((acc, next) => acc + "\n" + next);

//     return capcomList

//     // return CapcomPrint(digitalContentsSalesThisFY, digitalContentsSalesLastFY, digitalContentsUnitsThisFY, digitalContentsUnitsLastFY, header, elem.currentQuarter) + "\n" + CapcomPrintPhysical(packageSalesThisFY, packageSalesLastFY, packageUnitsThisFY, packageUnitsLastFY, header, elem.currentQuarter) + "\n" + CapcomPrintDigital(digitalSalesThisFY, digitalSalesLastFY, digitalUnitsThisFY, digitalUnitsLastFY, header, elem.currentQuarter)
// });

// export const softwareSalesGraphList = collection.flatMap((elem, index, array) => {
//     if (array[index] === array.at(-1)) {
//         return [] // for undefinedData in collection only
//     }

//     let salesThisFY: Section[] = digitalContentsSalesMake(elem);
//     let salesLastFY: Section[] = digitalContentsSalesMake(array[index+1]);

//     let unitsThisFY: Section[] = digitalContentsUnitsMake(elem);
//     let unitsLastFY: Section[] = digitalContentsUnitsMake(array[index+1]);

//     return graphMake(salesThisFY, salesLastFY, unitsThisFY, unitsLastFY, elem.digitalContentsSales.name, elem.fiscalYear, elem.currentQuarter)
// });
