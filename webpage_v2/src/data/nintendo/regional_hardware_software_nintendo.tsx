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
import { headerPrint } from "../../utils/table_design_logic";

export type jsonData = {
    currentQuarter: number,
    fiscalYear: string,
    regions: regionData[]
}

export type regionData = {
    name: string,
    regionA: string,
    Q1CmlValueA: number,
    Q2CmlValueA: number, 
    Q3CmlValueA: number, 
    Q4CmlValueA: number,
    valueALastFY: number,
    regionB: string,
    Q1CmlValueB: number,
    Q2CmlValueB: number, 
    Q3CmlValueB: number,
    Q4CmlValueB: number,
    valueBLastFY: number,
    regionC: string,
    Q1CmlValueC: number,
    Q2CmlValueC: number, 
    Q3CmlValueC: number, 
    Q4CmlValueC: number,
    valueCLastFY: number,
    regionD: string,
    Q1CmlValueD: number,
    Q2CmlValueD: number, 
    Q3CmlValueD: number, 
    Q4CmlValueD: number,
    valueDLastFY: number,
    regionE: string,
    Q1CmlValueE: number,
    Q2CmlValueE: number, 
    Q3CmlValueE: number, 
    Q4CmlValueE: number,
    valueELastFY: number,
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
            name: (!obj) ? "None" : obj.name,
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: "units",
            regionA: "Global",
            valueA: (!obj) ? 0 : obj.Q1CmlValueA,
            regionB: "Japan", 
            valueB: (!obj) ? 0 : obj.Q1CmlValueB,
            regionC: (obj?.regionC === "The Americas") ? "The Americas" : "Overseas", 
            valueC: (!obj) ? 0 : obj.Q1CmlValueC,
            regionD: (obj?.regionD === "Europe") ? "Europe" : "Other", 
            valueD: (!obj) ? 0 : obj.Q1CmlValueD,
            regionE: "Other",
            valueE: (!obj) ? 0 : obj.Q1CmlValueE,
        },
        {
            name: (!obj) ? "None" : obj.name,
            period: "2nd Quarter", 
            cmlPeriod: "First Half",
            units: "units",
            regionA: "Global",
            valueA: (!obj) ? 0 : obj.Q2CmlValueA,
            regionB: "Japan", 
            valueB: (!obj) ? 0 : obj.Q2CmlValueB,
            regionC: (obj?.regionC === "The Americas") ? "The Americas" : "Overseas", 
            valueC: (!obj) ? 0 : obj.Q2CmlValueC,
            regionD: (obj?.regionD === "Europe") ? "Europe" : "Other", 
            valueD: (!obj) ? 0 : obj.Q2CmlValueD,
            regionE: "Other",
            valueE: (!obj) ? 0 : obj.Q2CmlValueE,
        },
        {
            name: (!obj) ? "None" : obj.name,
            period: "3rd Quarter",
            cmlPeriod: "First Three Quarters",
            units: "units",
            regionA: "Global",
            valueA: (!obj) ? 0 : obj.Q3CmlValueA,
            regionB: "Japan", 
            valueB: (!obj) ? 0 : obj.Q3CmlValueB,
            regionC: (obj?.regionC === "The Americas") ? "The Americas" : "Overseas", 
            valueC: (!obj) ? 0 : obj.Q3CmlValueC,
            regionD: (obj?.regionD === "Europe") ? "Europe" : "Other", 
            valueD: (!obj) ? 0 : obj.Q3CmlValueD,
            regionE: "Other",
            valueE: (!obj) ? 0 : obj.Q3CmlValueE,
        },
        {
            name: (!obj) ? "None" : obj.name,
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: "units",
            regionA: "Global",
            valueA: (!obj) ? 0 : obj.Q4CmlValueA,
            regionB: "Japan", 
            valueB: (!obj) ? 0 : obj.Q4CmlValueB,
            regionC: (obj?.regionC === "The Americas") ? "The Americas" : "Overseas", 
            valueC: (!obj) ? 0 : obj.Q4CmlValueC,
            regionD: (obj?.regionD === "Europe") ? "Europe" : "Other", 
            valueD: (!obj) ? 0 : obj.Q4CmlValueD,
            regionE: "Other",
            valueE: (!obj) ? 0 : obj.Q4CmlValueE,
        },
        {
            name: (!obj) ? "None" : obj.name,
            period: "Last FY Cumulative",
            cmlPeriod: "Cml.",
            units: "units",
            regionA: "Global",
            valueA: (!obj) ? 0 : obj.valueALastFY,
            regionB: "Japan", 
            valueB: (!obj) ? 0 : obj.valueBLastFY,
            regionC: (obj?.regionC === "The Americas") ? "The Americas" : "Overseas", 
            valueC: (!obj) ? 0 : obj.valueCLastFY,
            regionD: (obj?.regionD === "Europe") ? "Europe" : "Other", 
            valueD: (!obj) ? 0 : obj.valueDLastFY,
            regionE: "Other",
            valueE: (!obj) ? 0 : obj.valueELastFY,
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

        return quarterlyCalculation(value).filter((elem, index, array) => index !== array.length-1) // filters out last fy cumulative index
    });

    let quarterlyRegionalUnitsLastFY = regionalUnitsLastFYList.map((value) => {

        return quarterlyCalculation(value).filter((elem, index, array) => index !== array.length-1) // filters out last fy cumulative index
    });

    const regionalUnitSalesThisFY = regionalUnitsThisFYList.map((value) => {
        return value.filter((elem, index) => index !== array.length-1) // filtering out the last FY cml index
    });

    const regionalUnitSalesLastFY = regionalUnitsLastFYList.map((value) => {
        return value.filter((elem, index) => index !== array.length-1) // filtering out the last FY cml index
    });

    const regionalUnitSalesYoY = Array.from({length: regionalUnitSalesThisFY.length}, (v, i) => {

        return yearOnYearCalculation(regionalUnitSalesThisFY[i], regionalUnitSalesLastFY[i])
    });

    const quarterlyRegionalUnitSalesYoY = Array.from({length: quarterlyRegionalUnitsThisFY.length}, (v, i) => {

        return yearOnYearCalculation(quarterlyRegionalUnitsThisFY[i], quarterlyRegionalUnitsLastFY[i])
    });

    const cmlRegionalUnitSalesThisFY = regionalUnitsThisFYList.map(elem => {

        return elem.filter((value, index) => {
            return index !== 0 // filter out the first quarters
        });
    });

    const printOne: string = headerPrint([
        header.switchHeader + " | " + header.fiscalYear,
    ],44)

    const printRegionalUnitSales: string[] = Array.from({length: regionalUnitsThisFYList.length}, (v, i) => {

        return printSection(
            header, 
            quarterlyRegionalUnitsThisFY[i],
            quarterlyRegionalUnitSalesYoY[i],
            cmlRegionalUnitSalesThisFY[i],
            regionalUnitSalesYoY[i],
            currentQuarter
            )
    }).concat("###");

    let printAll = [printOne].concat(printRegionalUnitSales);

    return printAll.reduce((prev, next) => prev + "\n" + next);

}) 