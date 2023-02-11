import {
    Header,
    Section,
    printSection,
    quarterlyCalculation,
    yearOnYearCalculation,
} from "../../utils/regional_hw_sw_logic";

import regionalHardwareSoftware2023 from "./Regional_Hardware_Software/regional_hw_sw_fy3_2023.json";
import regionalHardwareSoftware2022 from "./Regional_Hardware_Software/regional_hw_sw_fy3_2022.json";
import regionalHardwareSoftware2021 from "./Regional_Hardware_Software/regional_hw_sw_fy3_2021.json";
import regionalHardwareSoftware2020 from "./Regional_Hardware_Software/regional_hw_sw_fy3_2020.json";
import regionalHardwareSoftware2019 from "./Regional_Hardware_Software/regional_hw_sw_fy3_2019.json";
import regionalHardwareSoftware2018 from "./Regional_Hardware_Software/regional_hw_sw_fy3_2018.json";
import regionalHardwareSoftware2017 from "./Regional_Hardware_Software/regional_hw_sw_fy3_2017.json";
import regionalHardwareSoftware2016 from "./Regional_Hardware_Software/regional_hw_sw_fy3_2016.json";
import regionalHardwareSoftware2015 from "./Regional_Hardware_Software/regional_hw_sw_fy3_2015.json";
import regionalHardwareSoftware2014 from "./Regional_Hardware_Software/regional_hw_sw_fy3_2014.json";
import regionalHardwareSoftware2013 from "./Regional_Hardware_Software/regional_hw_sw_fy3_2013.json";
import regionalHardwareSoftware2012 from "./Regional_Hardware_Software/regional_hw_sw_fy3_2012.json";
import regionalHardwareSoftware2011 from "./Regional_Hardware_Software/regional_hw_sw_fy3_2011.json";
import regionalHardwareSoftware2010 from "./Regional_Hardware_Software/regional_hw_sw_fy3_2010.json";
import regionalHardwareSoftware2009 from "./Regional_Hardware_Software/regional_hw_sw_fy3_2009.json";
import regionalHardwareSoftware2008 from "./Regional_Hardware_Software/regional_hw_sw_fy3_2008.json";
import regionalHardwareSoftware2007 from "./Regional_Hardware_Software/regional_hw_sw_fy3_2007.json";
import regionalHardwareSoftware2006 from "./Regional_Hardware_Software/regional_hw_sw_fy3_2006.json";
import regionalHardwareSoftware2005 from "./Regional_Hardware_Software/regional_hw_sw_fy3_2005.json";
import regionalHardwareSoftware2004 from "./Regional_Hardware_Software/regional_hw_sw_fy3_2004.json";
import { headerPrint, dateLabel, liner, border, spacer } from "../../utils/table_design_logic";

export type jsonData = {
    currentQuarter: number,
    fiscalYear: string,
    regions: regionData[]
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
    regionE: string,
    Q1CmlValueE: RoundedZero,
    Q2CmlValueE: RoundedZero, 
    Q3CmlValueE: RoundedZero, 
    Q4CmlValueE: RoundedZero,
    valueELastFY: RoundedZero,
    dataShift?: boolean, 
}

const collection: jsonData[] = [
    regionalHardwareSoftware2023,
    regionalHardwareSoftware2022,
    regionalHardwareSoftware2021,
    regionalHardwareSoftware2020,
    regionalHardwareSoftware2019,
    regionalHardwareSoftware2018,
    regionalHardwareSoftware2017,
    regionalHardwareSoftware2016,
    regionalHardwareSoftware2015,
    regionalHardwareSoftware2014,
    regionalHardwareSoftware2013,
    regionalHardwareSoftware2012,
    regionalHardwareSoftware2011,
    regionalHardwareSoftware2010,
    regionalHardwareSoftware2009,
    regionalHardwareSoftware2008,
    regionalHardwareSoftware2007,
    regionalHardwareSoftware2006,
    regionalHardwareSoftware2005,
    regionalHardwareSoftware2004,
];

export const platformUnitsMake = (obj: undefined | regionData ): Section[] => {

    let sales: Section[] = [
        {
            name: obj?.name ?? "None",
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: "units",
            regionA: "Global",
            // valueA: obj?.Q1CmlValueA ?? 0,
            valueA: (obj?.Q1CmlValueA === "-0") 
                        ? -Infinity 
                        : (obj?.Q1CmlValueA === "+0")
                            ? Infinity
                            : (typeof obj?.Q1CmlValueA === "number")
                                ? obj.Q1CmlValueA
                                : 0,
            regionB: "Japan", 
            valueB: obj?.Q1CmlValueB ?? 0,
            regionC: (obj?.regionC === "The Americas") ? "The Americas" : "Overseas", 
            valueC: obj?.Q1CmlValueC ?? 0,
            regionD: (obj?.regionD === "Europe") ? "Europe" : "Other", 
            valueD: obj?.Q1CmlValueD ?? 0,
            regionE: "Other",
            valueE: obj?.Q1CmlValueE ?? 0,
        },
        {
            name: obj?.name ?? "None",
            period: "2nd Quarter", 
            cmlPeriod: "First Half",
            units: "units",
            regionA: "Global",
            valueA: obj?.Q2CmlValueA ?? 0,
            regionB: "Japan", 
            valueB: obj?.Q2CmlValueB ?? 0,
            regionC: (obj?.regionC === "The Americas") ? "The Americas" : "Overseas", 
            valueC: obj?.Q2CmlValueC ?? 0,
            regionD: (obj?.regionD === "Europe") ? "Europe" : "Other", 
            valueD: obj?.Q2CmlValueD ?? 0,
            regionE: "Other",
            valueE: obj?.Q2CmlValueE ?? 0,
        },
        {
            name: obj?.name ?? "None",
            period: "3rd Quarter",
            cmlPeriod: "First Three Quarters",
            units: "units",
            regionA: "Global",
            valueA: obj?.Q3CmlValueA ?? 0,
            regionB: "Japan", 
            valueB: obj?.Q3CmlValueB ?? 0,
            regionC: (obj?.regionC === "The Americas") ? "The Americas" : "Overseas", 
            valueC: obj?.Q3CmlValueC ?? 0,
            regionD: (obj?.regionD === "Europe") ? "Europe" : "Other", 
            valueD: obj?.Q3CmlValueD ?? 0,
            regionE: "Other",
            valueE: obj?.Q3CmlValueE ?? 0,
        },
        {
            name: obj?.name ?? "None",
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: "units",
            regionA: "Global",
            valueA: obj?.Q4CmlValueA ?? 0,
            regionB: "Japan", 
            valueB: obj?.Q4CmlValueB ?? 0,
            regionC: (obj?.regionC === "The Americas") ? "The Americas" : "Overseas", 
            valueC: obj?.Q4CmlValueC ?? 0,
            regionD: (obj?.regionD === "Europe") ? "Europe" : "Other", 
            valueD: obj?.Q4CmlValueD ?? 0,
            regionE: "Other",
            valueE: obj?.Q4CmlValueE ?? 0,
        },
        {
            name: obj?.name ?? "None",
            period: "Last FY Cumulative",
            cmlPeriod: "Cml.",
            units: "units",
            regionA: "Global",
            valueA: obj?.valueALastFY ?? 0,
            regionB: "Japan", 
            valueB: obj?.valueBLastFY ?? 0,
            regionC: (obj?.regionC === "The Americas") ? "The Americas" : "Overseas", 
            valueC: obj?.valueCLastFY ?? 0,
            regionD: (obj?.regionD === "Europe") ? "Europe" : "Other", 
            valueD: obj?.valueDLastFY ?? 0,
            regionE: "Other",
            valueE: obj?.valueELastFY ?? 0,
        },
    ];

    return sales
};

export const regionalHardwareSoftwareList: string[] = collection.map((elem, index, array) => {

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

    const printRegionalUnitSales: string[] = Array.from({length: regionalUnitsThisFYList.length}, (v, i) => {

        return printSection(
            header, 
            quarterlyRegionalUnitsThisFY[i],
            quarterlyRegionalUnitSalesYoY[i],
            cmlRegionalUnitSalesThisFY[i],
            regionalUnitSalesYoY[i],
            currentQuarter
            )
    })

    let printAll: string[] = [printOne].concat(printRegionalUnitSales);

    return printAll.reduce((prev, next) => prev + "\n" + next);
}) 