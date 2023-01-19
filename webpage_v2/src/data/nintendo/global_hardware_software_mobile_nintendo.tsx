import {
    Section,
    Header,
    printSections,
    printSalesHardware,
    quarterlyCalculation,
    yearOnYearCalculation
} from "../../utils/hardware_software_units_logic";
import { headerPrint } from "../../utils/table_design_logic";

import globalHardwareSoftwareMobile2023 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2023.json";
import globalHardwareSoftwareMobile2022 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2022.json";
import globalHardwareSoftwareMobile2021 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2021.json";
import globalHardwareSoftwareMobile2020 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2020.json";
import globalHardwareSoftwareMobile2019 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2019.json";
import globalHardwareSoftwareMobile2018 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2018.json";
import globalHardwareSoftwareMobile2017 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2017.json";
import globalHardwareSoftwareMobile2016 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2016.json";
import globalHardwareSoftwareMobile2015 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2015.json";
import globalHardwareSoftwareMobile2014 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2014.json";
import globalHardwareSoftwareMobile2013 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2013.json";
import globalHardwareSoftwareMobile2012 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2012.json";
import globalHardwareSoftwareMobile2011 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2011.json";
import globalHardwareSoftwareMobile2010 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2010.json";
import globalHardwareSoftwareMobile2009 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2009.json";
import globalHardwareSoftwareMobile2008 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2008.json";
import globalHardwareSoftwareMobile2007 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2007.json";
import globalHardwareSoftwareMobile2006 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2006.json";
import globalHardwareSoftwareMobile2005 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2005.json";
import globalHardwareSoftwareMobile2004 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2004.json";

export type collectionJSON = {
    currentQuarter: number,
    fiscalYear: string,
    platformCmlSales: platformCumulativeSalesType[],
    platformUnitSales: platformUnitSalesType[],
    platformForecastSales: platformForecastSalesType[],
};

type platformCumulativeSalesType = {
    name: string,
    units: string,
    Q1CmlValue: number,
    Q2CmlValue: number,
    Q3CmlValue: number,
    Q4CmlValue: number,
    cmlValueLastFY: number,
    hardwareReference?: string[],
};

export type platformUnitSalesType = {
    name: string,
    units: string,
    Q1CmlValue: number,
    Q2CmlValue: number,
    Q3CmlValue: number,
    Q4CmlValue: number,
    cmlValueLastFY: number, 
    footnote?: string,
};

type platformForecastSalesType = {
    name: string,
    forecastThisFY?: number,
    forecastRevision1?: number,
    forecastRevision2?: number,
    forecastRevision3?: number,
    forecastNextFY?: number,
    footnote?: string,
};

const collection: collectionJSON[] = [
    globalHardwareSoftwareMobile2023,
    globalHardwareSoftwareMobile2022,
    globalHardwareSoftwareMobile2021,
    globalHardwareSoftwareMobile2020,
    globalHardwareSoftwareMobile2019,
    globalHardwareSoftwareMobile2018,
    globalHardwareSoftwareMobile2017,
    globalHardwareSoftwareMobile2016,
    globalHardwareSoftwareMobile2015,
    globalHardwareSoftwareMobile2014,
    globalHardwareSoftwareMobile2013,
    globalHardwareSoftwareMobile2012,
    globalHardwareSoftwareMobile2011,
    globalHardwareSoftwareMobile2010,
    globalHardwareSoftwareMobile2009,
    globalHardwareSoftwareMobile2008,
    globalHardwareSoftwareMobile2007,
    globalHardwareSoftwareMobile2006,
    globalHardwareSoftwareMobile2005,
    globalHardwareSoftwareMobile2004,
];

export const platformSalesMake = (obj: undefined | platformCumulativeSalesType ): Section[] => {

    let sales: Section[] = [
        {
            name: (!obj) ? "N/A" : obj.name,
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: (obj !== undefined && obj.units === "currency") ? "currency" : "NaN",
            value: (!obj) ? 0 : obj.Q1CmlValue,
            hardwareReference: (!obj) ? undefined : obj.hardwareReference,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            period: "2nd Quarter",
            cmlPeriod: "First Half",
            units: (obj !== undefined && obj.units === "currency") ? "currency" : "NaN",
            value: (!obj) ? 0 : obj.Q2CmlValue,
            hardwareReference: (!obj) ? undefined : obj.hardwareReference,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            period: "3rd Quarter",
            cmlPeriod: "1st 3 Qtrs",
            units: (obj !== undefined && obj.units === "currency") ? "currency" : "NaN",
            value: (!obj) ? 0 : obj.Q3CmlValue,
            hardwareReference: (!obj) ? undefined : obj.hardwareReference,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: (obj !== undefined && obj.units === "currency") ? "currency" : "NaN",
            value: (!obj) ? 0 : obj.Q4CmlValue,
            hardwareReference: (!obj) ? undefined : obj.hardwareReference,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            period: "Last FY Cumulative",
            cmlPeriod: "Cml.",
            units: (obj !== undefined && obj.units === "currency") ? "currency" : "NaN",
            value: (!obj) ? 0 : obj.cmlValueLastFY,
            hardwareReference: (!obj) ? undefined : obj.hardwareReference,
        },
    ];

    return sales

};

export const platformUnitSalesMake = (obj: undefined | platformUnitSalesType): Section[] => {

    let unitSales: Section[] = [
        {
            name: (!obj) ? "N/A" : obj.name,
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: (obj !== undefined && obj.units === "units") 
                    ? "units"
                    : (obj !== undefined && obj.units === "currency")
                    ? "currency"
                    : "NaN",
            value: (!obj) ? 0 : obj.Q1CmlValue,
            footnote: obj?.footnote,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            period: "2nd Quarter",
            cmlPeriod: "First Half",
            units: (obj !== undefined && obj.units === "units") 
                    ? "units"
                    : (obj !== undefined && obj.units === "currency")
                    ? "currency"
                    : "NaN",
            value: (!obj) ? 0 : obj.Q2CmlValue,
            footnote: obj?.footnote,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            period: "3rd Quarter",
            cmlPeriod: "1st 3 Qtrs",
            units: (obj !== undefined && obj.units === "units") 
                    ? "units"
                    : (obj !== undefined && obj.units === "currency")
                    ? "currency"
                    : "NaN",
            value: (!obj) ? 0 : obj.Q3CmlValue,
            footnote: obj?.footnote,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: (obj !== undefined && obj.units === "units") 
                    ? "units"
                    : (obj !== undefined && obj.units === "currency")
                    ? "currency"
                    : "NaN",
            value: (!obj) ? 0 : obj.Q4CmlValue,
            footnote: obj?.footnote,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            period: "Last FY Cumulative",
            cmlPeriod: "Cml.",
            units: (obj !== undefined && obj.units === "units") 
                    ? "units"
                    : (obj !== undefined && obj.units === "currency")
                    ? "currency"
                    : "NaN",
            value: (!obj) ? 0 : obj.cmlValueLastFY,
            footnote: obj?.footnote,
        },
    ];

    return unitSales 

};

const platformForecastsMake = (obj: platformForecastSalesType): Section[] => {

    // had to use different type assertion due to issue with keys not being recognised...
    let forecasts: Section[] = [
        {
            name: obj.name,
            units: "units",
            period: "Forecast", 
            cmlPeriod: "1st Quarter",
            value: obj?.forecastThisFY,
            footnote: obj?.footnote,
        } as Section,
        {
            name: obj.name,
            units: "units",
            period: "FCST Revision 1",
            cmlPeriod: "First Half",
            value: obj?.forecastRevision1,
            footnote: obj?.footnote,
        } as Section,
        {
            name: obj.name,
            units: "units",
            period: "FCST Revision 2",
            cmlPeriod: "1st 3 Qtrs",
            value: obj?.forecastRevision2,
            footnote: obj?.footnote,
        } as Section,
        {
            name: obj.name,
            units: "units",
            period: "FCST Revision 3",
            cmlPeriod: "1st 3 Qtrs",
            value: obj?.forecastRevision3,
            footnote: obj?.footnote,
        } as Section,
        {
            name: obj.name,
            units: "units",
            period: "Forecast",
            cmlPeriod: "Cml.",
            value: obj?.forecastNextFY,
            footnote: obj?.footnote,
        } as Section,
    ].filter(elem => elem.value !== undefined)

    return forecasts
};

export const globalHardwareSoftwareMobileList: string[] = collection.map((elem, index, array) => {

    let currentQuarter: number = elem.currentQuarter;
    
    let nextFiscalYear: string = elem.fiscalYear.slice(0,4) + (Number(elem.fiscalYear.slice(4)) + 1).toString()

    let header: Header = {
        fiscalYear: elem.fiscalYear,
        nextFiscalYearShort: nextFiscalYear,
        switchHeader: "Nintendo Co., Ltd.",
        firstHeader: "Global Hardware and Software",
        secondHeader: "Sales Units and Forecasts",
    };

    let platformSalesList: Section[][] = elem.platformCmlSales.map(value => platformSalesMake(value));

    let platformUnitSalesThisFYList: Section[][] = elem.platformUnitSales.filter(value => !Object.hasOwn(value, "dataShift")).map(value => platformUnitSalesMake(value)); 
    // applying the filter on both ThisFYList and LastFYList will work correctly 
    
    let platformUnitSalesLastFYList: Section[][] = elem.platformUnitSales.filter(value => !Object.hasOwn(value, "dataShift")).map((value) => {
        // array[index+1] is checking the collection index of the previous fiscal year
        let nameSearch = (!array[index+1]) ? undefined : array[index+1].platformUnitSales.filter(findName => value.name === findName.name); // it should only find one match
        
        return (!nameSearch) 
                ? platformUnitSalesMake(undefined)
                : platformUnitSalesMake(nameSearch[0]);
    })

    let platformForecastsList: Section[][] = elem.platformForecastSales.map(value => platformForecastsMake(value));

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


    const printOne: string = headerPrint([
        header.switchHeader + " | " + header.fiscalYear,
        header.firstHeader,
        header.secondHeader,
    ],30)

    // "N/A" avoids crashing when no data...
    const printPlatformCmlSales: string[] = (platformSalesList[0][0].name === "N/A") ? [""] : Array.from({length: platformSalesList.length}, (v, i) => {

        let platformHardware: Section[] = platformUnitSalesThisFYList.flatMap((elem, index) => {

                return elem.filter(findName => {
                    return platformSalesList[i][0].hardwareReference?.includes(findName.name)
                })
        })
        // console.log(platformHardware);
        
        // let platformHardwareFixed: Section[] = (platformHardware.length === 1)
        //         ? platformHardware.flat()
        //         : Array.from({length:5}, (v, iSecond) => {
                    
        //             let reduceQuarters: number = (iSecond === 4)
        //             ? platformHardware[0][iSecond].value
        //             : platformHardware.map((elem, index, array) => {
        //                 // goes through each array of arrays and gets the value from the relevant quarter i.e. all quarter one values
        //                 return elem[iSecond].value
        //             }).reduce((acc, next) => acc + next)

        //             return {
        //                 ...platformHardware[0][iSecond],
        //                 value: reduceQuarters,
        //             }
        //         })
        
        return printSalesHardware(
            header,
            platformSalesList[i],
            platformHardware,
            currentQuarter
        ) 
    })

    const printPlatformUnitSales = Array.from({length: platformUnitSalesThisFY.length}, (v, i) => {

        // let forecast = (cmlPlatformUnitSalesThisFY[i][0].name === "Nintendo Switch Software Total")
        //     ? platformForecastsList[1] // software
        //     : platformForecastsList[0] // hardware
        let forecast: Section[] = platformForecastsList.map(value => 
            {
                return value.filter(findName => findName.name === cmlPlatformUnitSalesThisFY[i][0].name) // should only find one match
            }).flat()

        return printSections(
            header, 
            quarterlyPlatformUnitSalesThisFY[i],
            quarterlyPlatformUnitSalesYoY[i],
            cmlPlatformUnitSalesThisFY[i],
            platformUnitSalesYoY[i],
            forecast,
            currentQuarter
            )
    }).concat("###") as string[];

    let printAll = [printOne].concat(printPlatformCmlSales, printPlatformUnitSales);

    return printAll.reduce((prev, next) => prev + "\n" + next);

});

export const globalHardwareSoftwareMobileGraphList = collection.map((elem, index, array) => {

    let currentQuarter: number = elem.currentQuarter;

    let platformUnitSalesThisFYList: Section[][] = elem.platformUnitSales.filter(value => !Object.hasOwn(value, "dataShift")).map(value => platformUnitSalesMake(value)); 
    // applying the filter on both ThisFYList and LastFYList will work correctly 

    let platformUnitSalesLastFYList: Section[][] = elem.platformUnitSales.filter(value => !Object.hasOwn(value, "dataShift")).map((value) => {
        // array[index+1] is checking the collection index of the previous fiscal year
        let nameSearch = (!array[index+1]) ? undefined : array[index+1].platformUnitSales.filter(findName => value.name === findName.name); // it should only find one match
        
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