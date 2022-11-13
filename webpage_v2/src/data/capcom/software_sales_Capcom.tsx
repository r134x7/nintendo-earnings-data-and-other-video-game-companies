import { Header, Section, CapcomPrint, CapcomPrintPhysical, CapcomPrintDigital } from "../../utils/segment_data_logic";
import softwareSales2022 from "./Software_Sales/software_sales_fy3_2022.json";
import softwareSales2021 from "./Software_Sales/software_sales_fy3_2021.json";
import undefinedData from "./Software_Sales/undefinedData.json";

const collection = [
    softwareSales2022,
    softwareSales2021,
    undefinedData,
] as const;

const digitalContentsSalesMake = (obj: {"digitalContentsSales": {
    name: string;
    units: string;
    Q1CmlValue: number;
    Q2CmlValue: number;
    Q3CmlValue: number;
    Q4CmlValue: number;
}}): Section[] => {

    let sales: Section[] = [
        {
            name: obj.digitalContentsSales.name,
            region: " Group Total ",
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: (obj.digitalContentsSales.units === "NaN") ? "NaN" : "currency",
            value: obj.digitalContentsSales.Q1CmlValue // billion yen
        },
        {
            name: obj.digitalContentsSales.name,
            region: " Group Total ",
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: (obj.digitalContentsSales.units === "NaN") ? "NaN" : "currency",
            value: obj.digitalContentsSales.Q2CmlValue // billion yen
        },
        {
            name: obj.digitalContentsSales.name,
            region: " Group Total ",
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: (obj.digitalContentsSales.units === "NaN") ? "NaN" : "currency",
            value: obj.digitalContentsSales.Q3CmlValue // billion yen
        },
        {
            name: obj.digitalContentsSales.name,
            region: " Group Total ",
            period: " 4th Quarter ",
            cmlPeriod: "Cml. ",
            units: (obj.digitalContentsSales.units === "NaN") ? "NaN" : "currency",
            value: obj.digitalContentsSales.Q4CmlValue // billion yen
        },
    ];

    return sales
};

const digitalContentsUnitsMake = (obj: {"digitalContentsUnits": {
    name: string;
    units: string;
    Q1CmlValue: number;
    Q2CmlValue: number;
    Q3CmlValue: number;
    Q4CmlValue: number;
}}): Section[] => {

    let units: Section[] = [
        {
            name: obj.digitalContentsUnits.name,
            region: " Group Total ",
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: (obj.digitalContentsUnits.units === "NaN") ? "NaN" : "units",
            value: obj.digitalContentsUnits.Q1CmlValue // billion yen
        },
        {
            name: obj.digitalContentsUnits.name,
            region: " Group Total ",
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: (obj.digitalContentsUnits.units === "NaN") ? "NaN" : "units",
            value: obj.digitalContentsUnits.Q2CmlValue // billion yen
        },
        {
            name: obj.digitalContentsUnits.name,
            region: " Group Total ",
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: (obj.digitalContentsUnits.units === "NaN") ? "NaN" : "units",
            value: obj.digitalContentsUnits.Q3CmlValue // billion yen
        },
        {
            name: obj.digitalContentsUnits.name,
            region: " Group Total ",
            period: " 4th Quarter ",
            cmlPeriod: "Cml. ",
            units: (obj.digitalContentsUnits.units === "NaN") ? "NaN" : "units",
            value: obj.digitalContentsUnits.Q4CmlValue // billion yen
        },
    ];

    return units 
};

const packageSalesMake = (obj: {"packageSales": {
    name: string;
    units: string;
    Q1CmlValue: number;
    Q2CmlValue: number;
    Q3CmlValue: number;
    Q4CmlValue: number;
}}): Section[] => {

    let sales: Section[] = [
        {
            name: obj.packageSales.name,
            region: " Group Total ",
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: (obj.packageSales.units === "NaN") ? "NaN" : "currency",
            value: obj.packageSales.Q1CmlValue // billion yen
        },
        {
            name: obj.packageSales.name,
            region: " Group Total ",
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: (obj.packageSales.units === "NaN") ? "NaN" : "currency",
            value: obj.packageSales.Q2CmlValue // billion yen
        },
        {
            name: obj.packageSales.name,
            region: " Group Total ",
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: (obj.packageSales.units === "NaN") ? "NaN" : "currency",
            value: obj.packageSales.Q3CmlValue // billion yen
        },
        {
            name: obj.packageSales.name,
            region: " Group Total ",
            period: " 4th Quarter ",
            cmlPeriod: "Cml. ",
            units: (obj.packageSales.units === "NaN") ? "NaN" : "currency",
            value: obj.packageSales.Q4CmlValue // billion yen
        },
    ];

    return sales
};

const packageUnitsMake = (obj: {"packageUnits": {
    name: string;
    units: string;
    Q1CmlValue: number;
    Q2CmlValue: number;
    Q3CmlValue: number;
    Q4CmlValue: number;
}}): Section[] => {

    let units: Section[] = [
        {
            name: obj.packageUnits.name,
            region: " Group Total ",
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: (obj.packageUnits.units === "NaN") ? "NaN" : "units",
            value: obj.packageUnits.Q1CmlValue // billion yen
        },
        {
            name: obj.packageUnits.name,
            region: " Group Total ",
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: (obj.packageUnits.units === "NaN") ? "NaN" : "units",
            value: obj.packageUnits.Q2CmlValue // billion yen
        },
        {
            name: obj.packageUnits.name,
            region: " Group Total ",
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: (obj.packageUnits.units === "NaN") ? "NaN" : "units",
            value: obj.packageUnits.Q3CmlValue // billion yen
        },
        {
            name: obj.packageUnits.name,
            region: " Group Total ",
            period: " 4th Quarter ",
            cmlPeriod: "Cml. ",
            units: (obj.packageUnits.units === "NaN") ? "NaN" : "units",
            value: obj.packageUnits.Q4CmlValue // billion yen
        },
    ];

    return units 
};

const digitalSalesMake = (obj: {"digitalSales": {
    name: string;
    units: string;
    Q1CmlValue: number;
    Q2CmlValue: number;
    Q3CmlValue: number;
    Q4CmlValue: number;
}}): Section[] => {

    let sales: Section[] = [
        {
            name: obj.digitalSales.name,
            region: " Group Total ",
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: (obj.digitalSales.units === "NaN") ? "NaN" : "currency",
            value: obj.digitalSales.Q1CmlValue // billion yen
        },
        {
            name: obj.digitalSales.name,
            region: " Group Total ",
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: (obj.digitalSales.units === "NaN") ? "NaN" : "currency",
            value: obj.digitalSales.Q2CmlValue // billion yen
        },
        {
            name: obj.digitalSales.name,
            region: " Group Total ",
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: (obj.digitalSales.units === "NaN") ? "NaN" : "currency",
            value: obj.digitalSales.Q3CmlValue // billion yen
        },
        {
            name: obj.digitalSales.name,
            region: " Group Total ",
            period: " 4th Quarter ",
            cmlPeriod: "Cml. ",
            units: (obj.digitalSales.units === "NaN") ? "NaN" : "currency",
            value: obj.digitalSales.Q4CmlValue // billion yen
        },
    ];

    return sales
};

const digitalUnitsMake = (obj: {"digitalUnits": {
    name: string;
    units: string;
    Q1CmlValue: number;
    Q2CmlValue: number;
    Q3CmlValue: number;
    Q4CmlValue: number;
}}): Section[] => {

    let units: Section[] = [
        {
            name: obj.digitalUnits.name,
            region: " Group Total ",
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: (obj.digitalUnits.units === "NaN") ? "NaN" : "units",
            value: obj.digitalUnits.Q1CmlValue // billion yen
        },
        {
            name: obj.digitalUnits.name,
            region: " Group Total ",
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: (obj.digitalUnits.units === "NaN") ? "NaN" : "units",
            value: obj.digitalUnits.Q2CmlValue // billion yen
        },
        {
            name: obj.digitalUnits.name,
            region: " Group Total ",
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: (obj.digitalUnits.units === "NaN") ? "NaN" : "units",
            value: obj.digitalUnits.Q3CmlValue // billion yen
        },
        {
            name: obj.digitalUnits.name,
            region: " Group Total ",
            period: " 4th Quarter ",
            cmlPeriod: "Cml. ",
            units: (obj.digitalUnits.units === "NaN") ? "NaN" : "units",
            value: obj.digitalUnits.Q4CmlValue // billion yen
        },
    ];

    return units 
};


export const softwareSalesList: string[] = collection.map((elem, index, array) => {
    if (array[index] === array.at(-1)) {
        return "undefined" // for undefinedData in collection only
    }

    let header: Header = {
        fiscalYear: elem.fiscalYear,
        secondHeader: "| Segment Information |",
        firstHeader: "| Capcom         |",
    };

    let digitalContentsSalesThisFY: Section[] = digitalContentsSalesMake(elem);
    let digitalContentsSalesLastFY: Section[] = digitalContentsSalesMake(array[index+1]);

    let digitalContentsUnitsThisFY: Section[] = digitalContentsUnitsMake(elem);
    let digitalContentsUnitsLastFY: Section[] = digitalContentsUnitsMake(array[index+1]);

    let packageSalesThisFY: Section[] = packageSalesMake(elem);
    let packageSalesLastFY: Section[] = packageSalesMake(array[index+1]);

    let packageUnitsThisFY: Section[] = packageUnitsMake(elem);
    let packageUnitsLastFY: Section[] = packageUnitsMake(array[index+1]);

    let digitalSalesThisFY: Section[] = digitalSalesMake(elem);
    let digitalSalesLastFY: Section[] = digitalSalesMake(array[index+1]);

    let digitalUnitsThisFY: Section[] = digitalUnitsMake(elem);
    let digitalUnitsLastFY: Section[] = digitalUnitsMake(array[index+1]);

    return CapcomPrint(digitalContentsSalesThisFY, digitalContentsSalesLastFY, digitalContentsUnitsThisFY, digitalContentsUnitsLastFY, header, elem.currentQuarter) + "\n" + CapcomPrintPhysical(packageSalesThisFY, packageSalesLastFY, packageUnitsThisFY, packageUnitsLastFY, header, elem.currentQuarter) + "\n" + CapcomPrintDigital(digitalSalesThisFY, digitalSalesLastFY, digitalUnitsThisFY, digitalUnitsLastFY, header, elem.currentQuarter)
}).filter(elem => elem !== "undefined")
