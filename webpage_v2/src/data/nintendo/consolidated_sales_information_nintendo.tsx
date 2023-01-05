import {
    Section,
    Header,
    printHead,
    printSections,
    quarterlyCalculation,
    yearOnYearCalculation
} from "../../utils/hardware_software_units_logic";

import consolidatedSalesInfo2023 from "./Consolidated_Sales_Information/consolidated_sales_information_fy3_2023.json";
import consolidatedSalesInfo2022 from "./Consolidated_Sales_Information/consolidated_sales_information_fy3_2022.json";
import consolidatedSalesInfo2021 from "./Consolidated_Sales_Information/consolidated_sales_information_fy3_2021.json";
import consolidatedSalesInfo2020 from "./Consolidated_Sales_Information/consolidated_sales_information_fy3_2020.json";
import consolidatedSalesInfo2019 from "./Consolidated_Sales_Information/consolidated_sales_information_fy3_2019.json";
import consolidatedSalesInfo2018 from "./Consolidated_Sales_Information/consolidated_sales_information_fy3_2018.json";
import consolidatedSalesInfo2017 from "./Consolidated_Sales_Information/consolidated_sales_information_fy3_2017.json";
import consolidatedSalesInfo2016 from "./Consolidated_Sales_Information/consolidated_sales_information_fy3_2016.json";
import consolidatedSalesInfo2015 from "./Consolidated_Sales_Information/consolidated_sales_information_fy3_2015.json";
import consolidatedSalesInfo2014 from "./Consolidated_Sales_Information/consolidated_sales_information_fy3_2014.json";
import consolidatedSalesInfo2013 from "./Consolidated_Sales_Information/consolidated_sales_information_fy3_2013.json";
import consolidatedSalesInfo2012 from "./Consolidated_Sales_Information/consolidated_sales_information_fy3_2012.json";
import consolidatedSalesInfo2011 from "./Consolidated_Sales_Information/consolidated_sales_information_fy3_2011.json";
import consolidatedSalesInfo2010 from "./Consolidated_Sales_Information/consolidated_sales_information_fy3_2010.json";
import consolidatedSalesInfo2009 from "./Consolidated_Sales_Information/consolidated_sales_information_fy3_2009.json";
import consolidatedSalesInfo2008 from "./Consolidated_Sales_Information/consolidated_sales_information_fy3_2008.json";
import consolidatedSalesInfo2007 from "./Consolidated_Sales_Information/consolidated_sales_information_fy3_2007.json";
import consolidatedSalesInfo2006 from "./Consolidated_Sales_Information/consolidated_sales_information_fy3_2006.json";
import consolidatedSalesInfo2005 from "./Consolidated_Sales_Information/consolidated_sales_information_fy3_2005.json";
import consolidatedSalesInfo2004 from "./Consolidated_Sales_Information/consolidated_sales_information_fy3_2004.json";

export type collectionJSON = {
    currentQuarter: number,
    fiscalYear: string,
    platformSales: platformSalesType[],
};

export type platformSalesType = {
    name: string,
    units: string,
    Q1CmlValue: number,
    Q2CmlValue: number,
    Q3CmlValue: number,
    Q4CmlValue: number,
    cmlValueLastFY: number, 
};

const collection: collectionJSON[] = [
    consolidatedSalesInfo2023,
    consolidatedSalesInfo2022,
    consolidatedSalesInfo2021,
    consolidatedSalesInfo2020,
    consolidatedSalesInfo2019,
    consolidatedSalesInfo2018,
    consolidatedSalesInfo2017,
    consolidatedSalesInfo2016,
    consolidatedSalesInfo2015,
    consolidatedSalesInfo2014,
    consolidatedSalesInfo2013,
    consolidatedSalesInfo2012,
    consolidatedSalesInfo2011,
    consolidatedSalesInfo2010,
    consolidatedSalesInfo2009,
    consolidatedSalesInfo2008,
    consolidatedSalesInfo2007,
    consolidatedSalesInfo2006,
    consolidatedSalesInfo2005,
    consolidatedSalesInfo2004,
];

export const platformSalesMake = (obj: undefined | platformSalesType): Section[] => {

    let unitSales: Section[] = [
        {
            name: (!obj) ? "N/A" : obj.name,
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: (obj !== undefined && obj.units === "currency")
                    ? "currency"
                    : "NaN",
            value: (!obj) ? 0 : obj.Q1CmlValue
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: (obj !== undefined && obj.units === "currency")
                    ? "currency"
                    : "NaN",
            value: (!obj) ? 0 : obj.Q2CmlValue
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: (obj !== undefined && obj.units === "currency")
                    ? "currency"
                    : "NaN",
            value: (!obj) ? 0 : obj.Q3CmlValue
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            period: " 4th Quarter ",
            cmlPeriod: "Cml.",
            units: (obj !== undefined && obj.units === "currency")
                    ? "currency"
                    : "NaN",
            value: (!obj) ? 0 : obj.Q4CmlValue
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            period: " Last FY Cumulative ",
            cmlPeriod: "Cml.",
            units: (obj !== undefined && obj.units === "currency")
                    ? "currency"
                    : "NaN",
            value: 0
        },
    ];

    return unitSales 

};

export const consolidatedSalesInformationList: string[] = collection.map((elem, index, array) => {

    let currentQuarter: number = elem.currentQuarter;
    
    let nextFiscalYear: string = elem.fiscalYear.slice(0,4) + (Number(elem.fiscalYear.slice(4)) + 1).toString()

    let header: Header = {
        fiscalYear: elem.fiscalYear,
        nextFiscalYearShort: nextFiscalYear,
        switchHeader: "| Nintendo Co., Ltd. |",
        firstHeader: "| Consolidated                  |",
        secondHeader: "| Sales Information             |",
    };

    let platformSalesThisFYList: Section[][] = elem.platformSales.map(value => platformSalesMake(value)); 
    // applying the filter on both ThisFYList and LastFYList will work correctly 
    
    let platformSalesLastFYList: Section[][] = elem.platformSales.map((value) => {
        // array[index+1] is checking the collection index of the previous fiscal year
        let nameSearch = (!array[index+1]) ? undefined : array[index+1].platformSales.filter(findName => value.name === findName.name); // it should only find one match
        
        return (!nameSearch) 
                ? platformSalesMake(undefined)
                : platformSalesMake(nameSearch[0]);
    })

    const quarterlyPlatformSalesThisFY = platformSalesThisFYList.map((elem) => {

        return quarterlyCalculation(elem).filter((elem, index, array) => index !== array.length-1) // filters out last fy cumulative index
    });
    
    const quarterlyPlatformSalesLastFY = platformSalesLastFYList.map((elem) => {

        return quarterlyCalculation(elem).filter((elem, index, array) => index !== array.length-1) // filters out last fy cumulative index
    });

    const platformSalesThisFY = platformSalesThisFYList.map((elem) => {
        return elem.filter((value, index, array) => index !== array.length-1) // filtering out the last FY cml index
    });

    const platformSalesLastFY = platformSalesLastFYList.map((elem) => {
        return elem.filter((value, index, array) => index !== array.length-1) // filtering out the last FY cml index
    });

    const platformUnitSalesYoY = Array.from({length: platformSalesThisFY.length}, (v, i) => {

        return yearOnYearCalculation(platformSalesThisFY[i], platformSalesLastFY[i])
    });

    const quarterlyPlatformUnitSalesYoY = Array.from({length: quarterlyPlatformSalesThisFY.length}, (v, i) => {

        return yearOnYearCalculation(quarterlyPlatformSalesThisFY[i], quarterlyPlatformSalesLastFY[i])
    });

    const cmlPlatformUnitSalesThisFY = platformSalesThisFYList.map(elem => {

        return elem.filter((value, index) => {
            return index !== 0 // filter out the first quarters
        });
    });


    const printOne: string = printHead(header)

    const printPlatformSales = Array.from({length: platformSalesThisFY.length}, (v, i) => {

        let forecast: Section[] = [
            {
                name: "N/A",
                units: "units",
                period: "Forecast", 
                cmlPeriod: " 1st Quarter ",
                value: 0
            }
        ]

        return printSections(
            header, 
            quarterlyPlatformSalesThisFY[i],
            quarterlyPlatformUnitSalesYoY[i],
            cmlPlatformUnitSalesThisFY[i],
            platformUnitSalesYoY[i],
            forecast,
            currentQuarter
            )
    }).concat("###") as string[];

    let printAll = [printOne].concat(printPlatformSales);

    return printAll.reduce((prev, next) => prev + "\n" + next);
});

export const consolidatedSalesInformationGraphList = collection.map((elem, index, array) => {

    let currentQuarter: number = elem.currentQuarter;

    let platformSalesThisFYList: Section[][] = elem.platformSales.filter(value => !Object.hasOwn(value, "dataShift")).map(value => platformSalesMake(value)); 
    // applying the filter on both ThisFYList and LastFYList will work correctly 

    let platformSalesLastFYList: Section[][] = elem.platformSales.filter(value => !Object.hasOwn(value, "dataShift")).map((value) => {
        // array[index+1] is checking the collection index of the previous fiscal year
        let nameSearch = (!array[index+1]) ? undefined : array[index+1].platformSales.filter(findName => value.name === findName.name); // it should only find one match
        
        return (!nameSearch) 
                ? platformSalesMake(undefined)
                : platformSalesMake(nameSearch[0]);
    })

    const quarterlyPlatformSalesThisFY = platformSalesThisFYList.map((elem) => {

        return quarterlyCalculation(elem).filter((elem, index, array) => index !== array.length-1) // filters out last fy cumulative index
    });
    
    const quarterlyPlatformSalesLastFY = platformSalesLastFYList.map((elem) => {

        return quarterlyCalculation(elem).filter((elem, index, array) => index !== array.length-1) // filters out last fy cumulative index
    });

    const platformSalesThisFY = platformSalesThisFYList.map((elem) => {
        return elem.filter((value, index, array) => index !== array.length-1) // filtering out the last FY cml index
    });

    const platformSalesLastFY = platformSalesLastFYList.map((elem) => {
        return elem.filter((value, index, array) => index !== array.length-1) // filtering out the last FY cml index
    });

    let thisFY: string = elem.fiscalYear;
    let lastFY: string = thisFY.slice(0, 4) + (Number(thisFY.slice(-4)) - 1).toString();

    let marchThisFY: string = "March " + thisFY.slice(4);
    let marchLastFY: string = "March " + lastFY.slice(4);

    const graphMake = {
        thisFY: thisFY,
        lastFY: lastFY,
        marchThisFY: marchThisFY,
        marchLastFY: marchLastFY,
        quarterValuesThisFY: quarterlyPlatformSalesThisFY,
        quarterValuesLastFY: quarterlyPlatformSalesLastFY,
        cumulativeValuesThisFY: platformSalesThisFY,
        cumulativeValuesLastFY: platformSalesLastFY,
    };

    return graphMake

});