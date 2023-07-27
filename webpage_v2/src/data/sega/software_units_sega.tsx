import {
    Section,
    Header,
    printSoftwareGeneral,
    quarterlyCalculation,
    yearOnYearCalculation,
} from "../../utils/general_quarterly_software_units_logic";

import { headerPrint, dateLabel, liner, border, spacer, type titleSet, type titleSetHeader, globImport } from "../../utils/table_design_logic";

import type { segaSoftwareSales } from "../generalTables/annual_report_general";

export const softwareUnitsCollection: segaSoftwareSales[] = [...globImport(new Map<number, segaSoftwareSales>, import.meta.glob("./Software_Units/*.json", { import: "default", eager: true }), "Descending").values()];

export const platformUnitSalesMake = (obj: undefined | {
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
            name: obj?.name ?? "N/A",
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: "units",
            value: (!obj) ? 0 : obj?.Q1CmlValue / 10,
            miscellaneous: obj?.miscellaneous,
        },
        {
            name: obj?.name ?? "N/A",
            period: "2nd Quarter",
            cmlPeriod: "First Half",
            units: "units",
            value: (!obj) ? 0 : obj?.Q2CmlValue / 10,
            miscellaneous: obj?.miscellaneous,
        },
        {
            name: obj?.name ?? "N/A",
            period: "3rd Quarter",
            cmlPeriod: "1st 3 Qtrs",
            units: "units",
            value: (!obj) ? 0 : obj?.Q3CmlValue / 10,
            miscellaneous: obj?.miscellaneous,
        },
        {
            name: obj?.name ?? "N/A",
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: "units",
            value: (!obj) ? 0 : obj?.Q4CmlValue / 10,
            miscellaneous: obj?.miscellaneous,
        },
        {
            name: obj?.name ?? "N/A",
            period: "Last FY Cumulative",
            cmlPeriod: "Cml.",
            units: "units",
            value: (obj?.cmlValueLastFY) ? obj.cmlValueLastFY / 10 : 0,
            miscellaneous: obj?.miscellaneous,
        },
    ];

    return unitSales 
};

export const segaSoftwareUnitsList: titleSetHeader[] = softwareUnitsCollection.map((elem, index, array) => {

    let currentQuarter: number = elem.currentQuarter;

    let header: Header = {
        fiscalYear: elem.fiscalYear,
        firstHeader: "Sega Sammy",
        secondHeader: "Full Game Software Unit Sales",
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
        // filters out last fy cumulative index
        return quarterlyCalculation(elem).filter((elem, index, array) => index !== array.length-1) 
    });

    const platformUnitSalesThisFY = platformUnitSalesThisFYList.map((elem) => {
        // filtering out the last FY cml index
        return elem.filter((value, index, array) => index !== array.length-1) 
    });

    const platformUnitSalesLastFY = platformUnitSalesLastFYList.map((elem) => {
        // filtering out the last FY cml index
        return elem.filter((value, index, array) => index !== array.length-1) 
    });

    const platformUnitSalesYoY = Array.from({length: platformUnitSalesThisFY.length}, (v, i) => {

        return yearOnYearCalculation(platformUnitSalesThisFY[i], platformUnitSalesLastFY[i])
    });

    const quarterlyPlatformUnitSalesYoY = Array.from({length: quarterlyPlatformUnitSalesThisFY.length}, (v, i) => {

        return yearOnYearCalculation(quarterlyPlatformUnitSalesThisFY[i], quarterlyPlatformUnitSalesLastFY[i])
    });

    const cmlPlatformUnitSalesThisFY = platformUnitSalesThisFYList.map(elem => {
        return elem.filter((value, index) => {
            // filter out the first quarters
            return index !== 0 
        });
    });

    const makeDateLabel = dateLabel(elem.fiscalYear ?? "N/A", elem?.currentQuarter ?? 4);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

    const printOne: string = headerPrint([
        header.firstHeader + " | " + header.fiscalYear,
        header.secondHeader,
    ],32) + "\n" + printDateLabel;

    const printPlatformUnitSales: titleSet[] = Array.from({length: platformUnitSalesThisFY.length}, (v, i) => {

        return {
            title: quarterlyPlatformUnitSalesThisFY[i][0].name,
            table: printSoftwareGeneral(
            header, 
            quarterlyPlatformUnitSalesThisFY[i],
            quarterlyPlatformUnitSalesYoY[i],
            cmlPlatformUnitSalesThisFY[i],
            platformUnitSalesYoY[i],
            currentQuarter
            ),
        } 
    })//.concat("###");

    // let printAll: string[] = [printOne].concat(printPlatformUnitSales);

    // return printAll.reduce((prev, next) => prev + next);

    return {
        header: printOne,
        titleList: printPlatformUnitSales,
    }
});

export const segaSoftwareUnitsGraphList = softwareUnitsCollection.map((elem, index, array) => {

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

    let thisFY: string = elem.fiscalYear;
    let lastFY: string = thisFY.slice(0,4) + (Number(thisFY.slice(-4)) - 1).toString();

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