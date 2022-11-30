import {
    Section,
    Header,
    printHead,
    printSoftwareGeneral,
    quarterlyCalculation,
    yearOnYearCalculation,
} from "../../utils/general_quarterly_software_units_logic";

import seriesSoftwareUnits2023 from "./Software_Units/software_units_fy3_2023.json";
import seriesSoftwareUnits2022 from "./Software_Units/software_units_fy3_2022.json";
import seriesSoftwareUnits2021 from "./Software_Units/software_units_fy3_2021.json";

export const collection = [
    seriesSoftwareUnits2023,
    seriesSoftwareUnits2022,
    seriesSoftwareUnits2021,
] as const;

const platformUnitSalesMake = (obj: undefined | {
    name: string,
    Q1CmlValue: number,
    Q2CmlValue: number,
    Q3CmlValue: number,
    Q4CmlValue: number,
    cmlValueLastFY?: number,
    miscellaneous?: string,
}): Section[] => {

    let unitSales: Section[] = [
        {
            name: (!obj) ? "N/A" : obj.name,
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: "units",
            value: (!obj) ? 0 : obj.Q1CmlValue / 10,
            miscellaneous: obj?.miscellaneous,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: "units",
            value: (!obj) ? 0 : obj.Q2CmlValue / 10,
            miscellaneous: obj?.miscellaneous,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: "units",
            value: (!obj) ? 0 : obj.Q3CmlValue / 10,
            miscellaneous: obj?.miscellaneous,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            period: " 4th Quarter ",
            cmlPeriod: "Cml. ",
            units: "units",
            value: (!obj) ? 0 : obj.Q4CmlValue / 10,
            miscellaneous: obj?.miscellaneous,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            period: " Last FY Cumulative ",
            cmlPeriod: "Cml. ",
            units: "units",
            value: (!obj || !obj.cmlValueLastFY) ? 0 : obj.cmlValueLastFY / 10,
            miscellaneous: obj?.miscellaneous,
        },
    ];

    return unitSales 

};

export const segaSoftwareUnitsList: string[] = collection.map((elem, index, array) => {

    let currentQuarter: number = elem.currentQuarter;

    let header: Header = {
        fiscalYear: elem.fiscalYear,
        firstHeader: "| Sega Sammy        |",
        secondHeader: "| Full Game Software Unit Sales|",
    };

    let platformUnitSalesThisFYList: Section[][] = elem.softwareUnits.map(value => platformUnitSalesMake(value)); 
    
    let platformUnitSalesLastFYList: Section[][] = elem.softwareUnits.map((value) => {
        // array[index+1] is checking the collection index of the previous fiscal year
        let nameSearch = (!array[index+1]) ? undefined : array[index+1].softwareUnits.filter(findName => value.name === findName.name); // it should only find one match
        
        return (!nameSearch) 
                ? platformUnitSalesMake(undefined)
                : platformUnitSalesMake(nameSearch[0]);
    })

    const quarterlyPlatformUnitSalesThisFY = platformUnitSalesThisFYList.map((elem) => {

        return quarterlyCalculation(elem).filter((elem, index, array) => index !== array.length-1) // filters out last fy cumulative index
    });
    
    const quarterlyPlatformUnitSalesLastFY = platformUnitSalesLastFYList.map((elem) => {

        return quarterlyCalculation(elem).filter((elem, index, array) => index !== array.length-1) // filters out last fy cumulative index
    });

    const platformUnitSalesThisFY = platformUnitSalesThisFYList.map((elem) => {
        return elem.filter((value, index, array) => index !== array.length-1) // filtering out the last FY cml index
    });

    const platformUnitSalesLastFY = platformUnitSalesLastFYList.map((elem) => {
        return elem.filter((value, index, array) => index !== array.length-1) // filtering out the last FY cml index
    });

    const platformUnitSalesYoY = Array.from({length: platformUnitSalesThisFY.length}, (v, i) => {

        return yearOnYearCalculation(platformUnitSalesThisFY[i], platformUnitSalesLastFY[i])
    });

    const quarterlyPlatformUnitSalesYoY = Array.from({length: quarterlyPlatformUnitSalesThisFY.length}, (v, i) => {

        return yearOnYearCalculation(quarterlyPlatformUnitSalesThisFY[i], quarterlyPlatformUnitSalesLastFY[i])
    });

    const cmlPlatformUnitSalesThisFY = platformUnitSalesThisFYList.map(elem => {

        return elem.filter((value, index) => {
            return index !== 0 // filter out the first quarters
        });
    });


    const printOne: string = printHead(header)

    const printPlatformUnitSales: string[] = Array.from({length: platformUnitSalesThisFY.length}, (v, i) => {

        return printSoftwareGeneral(
            header, 
            quarterlyPlatformUnitSalesThisFY[i],
            quarterlyPlatformUnitSalesYoY[i],
            cmlPlatformUnitSalesThisFY[i],
            platformUnitSalesYoY[i],
            currentQuarter
            )
    }).concat("###");

    let printAll = [printOne].concat(printPlatformUnitSales);

    return printAll.reduce((prev, next) => prev + "\n" + next);

});

export const segaSoftwareUnitsGraphList = collection.map((elem, index, array) => {

    let currentQuarter: number = elem.currentQuarter;

    let platformUnitSalesThisFYList: Section[][] = elem.softwareUnits.map(value => platformUnitSalesMake(value)); 

    let platformUnitSalesLastFYList: Section[][] = elem.softwareUnits.map((value) => {
        // array[index+1] is checking the collection index of the previous fiscal year
        let nameSearch = (!array[index+1]) ? undefined : array[index+1].softwareUnits.filter(findName => value.name === findName.name); // it should only find one match
        
        return (!nameSearch) 
                ? platformUnitSalesMake(undefined)
                : platformUnitSalesMake(nameSearch[0]);
    })

    const quarterlyPlatformUnitSalesThisFY = platformUnitSalesThisFYList.map((elem) => {

        return quarterlyCalculation(elem).filter((elem, index, array) => index !== array.length-1) // filters out last fy cumulative index
    });
    
    const quarterlyPlatformUnitSalesLastFY = platformUnitSalesLastFYList.map((elem) => {

        return quarterlyCalculation(elem).filter((elem, index, array) => index !== array.length-1) // filters out last fy cumulative index
    });

    const platformUnitSalesThisFY = platformUnitSalesThisFYList.map((elem) => {
        return elem.filter((value, index, array) => index !== array.length-1) // filtering out the last FY cml index
    });

    const platformUnitSalesLastFY = platformUnitSalesLastFYList.map((elem) => {
        return elem.filter((value, index, array) => index !== array.length-1) // filtering out the last FY cml index
    });

    let thisFY: string = elem.fiscalYear.slice(1, -1);
    let lastFY: string = thisFY.slice(0, 4) + (Number(thisFY.slice(-4)) - 1).toString();

    let marchThisFY: string = "March " + thisFY.slice(4);
    let marchLastFY: string = "March " + lastFY.slice(4);

    const graphMake = {
        thisFY: thisFY,
        lastFY: lastFY,
        marchThisFY: marchThisFY,
        marchLastFY: marchLastFY,
        quarterValuesThisFY: quarterlyPlatformUnitSalesThisFY,
        quarterValuesLastFY: quarterlyPlatformUnitSalesLastFY,
        cumulativeValuesThisFY: platformUnitSalesThisFY,
        cumulativeValuesLastFY: platformUnitSalesLastFY,
    };

    return graphMake

});