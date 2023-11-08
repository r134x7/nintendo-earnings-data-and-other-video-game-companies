import {
    Header,
    Section,
    printSection,
    quarterlyCalculation,
    yearOnYearCalculation,
} from "../../utils/regional_hw_sw_logic";

import { headerPrint, dateLabel, liner, border, spacer, valueLimit, type titleSet, globImport } from "../../utils/table_design_logic";

export type jsonData = {
    currentQuarter: number,
    fiscalYear: string,
    regions: regionData[],
    duplicateWithExtraData?: boolean,
}

export type RoundedZero = number | string; 

export type regionData = {
    name: string,
    regionA: string,
    Q1CmlValueA: RoundedZero,
    Q2CmlValueA: RoundedZero, 
    Q3CmlValueA: RoundedZero, 
    Q4CmlValueA: RoundedZero,
    valueALastFY: RoundedZero,
    regionB: string,
    Q1CmlValueB: RoundedZero,
    Q2CmlValueB: RoundedZero, 
    Q3CmlValueB: RoundedZero,
    Q4CmlValueB: RoundedZero,
    valueBLastFY: RoundedZero,
    regionC: string,
    Q1CmlValueC: RoundedZero,
    Q2CmlValueC: RoundedZero, 
    Q3CmlValueC: RoundedZero, 
    Q4CmlValueC: RoundedZero,
    valueCLastFY: RoundedZero,
    regionD: string,
    Q1CmlValueD: RoundedZero,
    Q2CmlValueD: RoundedZero, 
    Q3CmlValueD: RoundedZero, 
    Q4CmlValueD: RoundedZero,
    valueDLastFY: RoundedZero,
    regionE?: string,
    Q1CmlValueE?: RoundedZero,
    Q2CmlValueE?: RoundedZero, 
    Q3CmlValueE?: RoundedZero, 
    Q4CmlValueE?: RoundedZero,
    valueELastFY?: RoundedZero,
    dataShift?: boolean, 
}

const collection: jsonData[] = [...globImport(new Map<number, jsonData>, import.meta.glob("./Regional_Hardware_Software/*.json", { import: "default", eager: true }), "Descending").values()]

collection.filter((value, index, array) => value.duplicateWithExtraData === false ?? undefined)

export const platformUnitsMake = (obj: undefined | regionData ): Section[] => {

    let sales: Section[] = [
        {
            name: obj?.name ?? "None",
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: "units",
            regionA: "Global",
            // valueA: obj?.Q1CmlValueA ?? 0,
            valueA: valueLimit(obj?.Q1CmlValueA),
            regionB: "Japan", 
            valueB: valueLimit(obj?.Q1CmlValueB),
            regionC: (obj?.regionC === "The Americas") ? "The Americas" : "Overseas", 
            valueC: valueLimit(obj?.Q1CmlValueC),
            regionD: (obj?.regionD === "Europe") ? "Europe" : "Other", 
            valueD: valueLimit(obj?.Q1CmlValueD),
            regionE: "Other",
            valueE: valueLimit(obj?.Q1CmlValueE),
        },
        {
            name: obj?.name ?? "None",
            period: "2nd Quarter", 
            cmlPeriod: "First Half",
            units: "units",
            regionA: "Global",
            valueA: valueLimit(obj?.Q2CmlValueA),
            regionB: "Japan", 
            valueB: valueLimit(obj?.Q2CmlValueB),
            regionC: (obj?.regionC === "The Americas") ? "The Americas" : "Overseas", 
            valueC: valueLimit(obj?.Q2CmlValueC),
            regionD: (obj?.regionD === "Europe") ? "Europe" : "Other", 
            valueD: valueLimit(obj?.Q2CmlValueD),
            regionE: "Other",
            valueE: valueLimit(obj?.Q2CmlValueE),
        },
        {
            name: obj?.name ?? "None",
            period: "3rd Quarter",
            cmlPeriod: "First Three Quarters",
            units: "units",
            regionA: "Global",
            valueA: valueLimit(obj?.Q3CmlValueA),
            regionB: "Japan", 
            valueB: valueLimit(obj?.Q3CmlValueB),
            regionC: (obj?.regionC === "The Americas") ? "The Americas" : "Overseas", 
            valueC: valueLimit(obj?.Q3CmlValueC),
            regionD: (obj?.regionD === "Europe") ? "Europe" : "Other", 
            valueD: valueLimit(obj?.Q3CmlValueD),
            regionE: "Other",
            valueE: valueLimit(obj?.Q3CmlValueE),
        },
        {
            name: obj?.name ?? "None",
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: "units",
            regionA: "Global",
            valueA: valueLimit(obj?.Q4CmlValueA),
            regionB: "Japan", 
            valueB: valueLimit(obj?.Q4CmlValueB),
            regionC: (obj?.regionC === "The Americas") ? "The Americas" : "Overseas", 
            valueC: valueLimit(obj?.Q4CmlValueC),
            regionD: (obj?.regionD === "Europe") ? "Europe" : "Other", 
            valueD: valueLimit(obj?.Q4CmlValueD),
            regionE: "Other",
            valueE: valueLimit(obj?.Q4CmlValueE),
        },
        {
            name: obj?.name ?? "None",
            period: "Last FY Cumulative",
            cmlPeriod: "Cml.",
            units: "units",
            regionA: "Global",
            valueA: valueLimit(obj?.valueALastFY),
            regionB: "Japan", 
            valueB: valueLimit(obj?.valueBLastFY),
            regionC: (obj?.regionC === "The Americas") ? "The Americas" : "Overseas", 
            valueC: valueLimit(obj?.valueCLastFY),
            regionD: (obj?.regionD === "Europe") ? "Europe" : "Other", 
            valueD: valueLimit(obj?.valueDLastFY),
            regionE: "Other",
            valueE: valueLimit(obj?.valueELastFY),
        },
    ];

    return sales
};

export const regionalHardwareSoftwareList = collection.map((elem, index, array) => {

    let currentQuarter: number = elem.currentQuarter;

    let header: Header = {
        switchHeader: "Nintendo Co., Ltd. Regional Data",
        fiscalYear: elem.fiscalYear,
        fiscalYearCml: elem.fiscalYear + " Cumulative",
        globalPercentage: "| Global%|",
        units: "| Units  |",
        yearOnYear: "| YoY%   |",
        ltd: "Life-To-Date",
    };

    let regionalUnitsThisFYList: Section[][] = elem.regions.filter(value => !Object.hasOwn(value, "dataShift")).map(value => platformUnitsMake(value));

    // applying the filter on both ThisFYList and LastFYList will work correctly 
    let regionalUnitsLastFYList: Section[][] = elem.regions.filter(value => !Object.hasOwn(value, "dataShift")).map((value) => {

        let nameSearch = (!array[index+1]) ? undefined : array[index+1].regions.filter(findName => value.name === findName.name); // should find only one match

        return (!nameSearch)
                ? platformUnitsMake(undefined)
                : platformUnitsMake(nameSearch[0]);
    });
    
    let quarterlyRegionalUnitsThisFY = regionalUnitsThisFYList.map((value) => {
        // filters out last fy cumulative index
        return quarterlyCalculation(value).filter((elem, index, array) => index !== array.length-1)
    });

    let quarterlyRegionalUnitsLastFY = regionalUnitsLastFYList.map((value) => {
        // filters out last fy cumulative index
        return quarterlyCalculation(value).filter((elem, index, array) => index !== array.length-1)
    });

    const regionalUnitSalesThisFY = regionalUnitsThisFYList.map((value) => {
        // filtering out the last FY cml index
        return value.filter((elem, index) => index !== array.length-1) 
    });

    const regionalUnitSalesLastFY = regionalUnitsLastFYList.map((value) => {
        // filtering out the last FY cml index
        return value.filter((elem, index) => index !== array.length-1) 
    });

    const regionalUnitSalesYoY = Array.from({length: regionalUnitSalesThisFY.length}, (v, i) => {

        return yearOnYearCalculation(regionalUnitSalesThisFY[i], regionalUnitSalesLastFY[i])
    });

    const quarterlyRegionalUnitSalesYoY = Array.from({length: quarterlyRegionalUnitsThisFY.length}, (v, i) => {

        return yearOnYearCalculation(quarterlyRegionalUnitsThisFY[i], quarterlyRegionalUnitsLastFY[i])
    });

    const cmlRegionalUnitSalesThisFY = regionalUnitsThisFYList.map(elem => {
        return elem.filter((value, index) => {
            // filter out the first quarters
            return index !== 0 
        });
    });

    const makeDateLabel = dateLabel(elem.fiscalYear ?? "N/A", elem?.currentQuarter ?? 4);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

    const printOne: string = headerPrint([
        header.switchHeader + " | " + header.fiscalYear,
    ],44) + "\n" + printDateLabel;

    const printRegionalUnitSales = Array.from({length: regionalUnitsThisFYList.length}, (v, i) => {

        return {
            title: quarterlyRegionalUnitsThisFY[i][0].name,
            table: printSection(
            header, 
            quarterlyRegionalUnitsThisFY[i],
            quarterlyRegionalUnitSalesYoY[i],
            cmlRegionalUnitSalesThisFY[i],
            regionalUnitSalesYoY[i],
            currentQuarter
            ),
        } as titleSet
    })

    // let printAll: string[] = [printOne].concat(printRegionalUnitSales);

    // return printAll.reduce((prev, next) => prev + "\n" + next);

    return {
        header: printOne,
        titleList: printRegionalUnitSales,
    }
}) 