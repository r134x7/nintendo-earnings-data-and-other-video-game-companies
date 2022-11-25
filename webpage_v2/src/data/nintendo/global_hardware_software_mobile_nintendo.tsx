import {
    Section,
    Header,
    printHead,
    printSections,
    printSalesHardware,
    quarterlyCalculation,
    yearOnYearCalculation
} from "../../utils/hardware_software_units_logic";

import globalHardwareSoftwareMobile2023 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2023.json";
import globalHardwareSoftwareMobile2022 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2022.json";
import globalHardwareSoftwareMobile2021 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2021.json";
import globalHardwareSoftwareMobile2020 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2020.json";
import globalHardwareSoftwareMobile2019 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2019.json";
import globalHardwareSoftwareMobile2018 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2018.json";
import globalHardwareSoftwareMobile2017 from "./Global_Hardware_Software_Mobile/global_hardware_software_mobile_fy3_2017.json";

const collection = [
    globalHardwareSoftwareMobile2023,
    globalHardwareSoftwareMobile2022,
    globalHardwareSoftwareMobile2021,
    globalHardwareSoftwareMobile2020,
    globalHardwareSoftwareMobile2019,
    globalHardwareSoftwareMobile2018,
    globalHardwareSoftwareMobile2017,
] as const;

const platformSalesMake = (obj: undefined | {
    name: string,
    units: string,
    Q1CmlValue: number,
    Q2CmlValue: number,
    Q3CmlValue: number,
    Q4CmlValue: number,
    cmlValueLastFY: number,
}): Section[] => {

    let sales: Section[] = [
        {
            name: (!obj) ? "Null" : obj.name,
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: (obj !== undefined && obj.units === "currency") ? "currency" : "NaN",
            value: (!obj) ? 0 : obj.Q1CmlValue
        },
        {
            name: (!obj) ? "Null" : obj.name,
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: (obj !== undefined && obj.units === "currency") ? "currency" : "NaN",
            value: (!obj) ? 0 : obj.Q2CmlValue
        },
        {
            name: (!obj) ? "Null" : obj.name,
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: (obj !== undefined && obj.units === "currency") ? "currency" : "NaN",
            value: (!obj) ? 0 : obj.Q3CmlValue
        },
        {
            name: (!obj) ? "Null" : obj.name,
            period: " 4th Quarter ",
            cmlPeriod: "Cml. ",
            units: (obj !== undefined && obj.units === "currency") ? "currency" : "NaN",
            value: (!obj) ? 0 : obj.Q4CmlValue
        },
        {
            name: (!obj) ? "Null" : obj.name,
            period: " Last FY Cumulative ",
            cmlPeriod: "Cml. ",
            units: (obj !== undefined && obj.units === "currency") ? "currency" : "NaN",
            value: (!obj) ? 0 : obj.cmlValueLastFY
        },
    ];

    return sales

};

const platformUnitSalesMake = (obj: undefined | {
    name: string,
    units: string,
    Q1CmlValue: number,
    Q2CmlValue: number,
    Q3CmlValue: number,
    Q4CmlValue: number,
    cmlValueLastFY: number,
}): Section[] => {


    let unitSales: Section[] = [
        {
            name: (!obj) ? "Null" : obj.name,
            period: " 1st Quarter ",
            cmlPeriod: " 1st Quarter ",
            units: (obj !== undefined && obj.units === "units") 
                    ? "units"
                    : (obj !== undefined && obj.units === "currency")
                    ? "currency"
                    : "NaN",
            value: (!obj) ? 0 : obj.Q1CmlValue
        },
        {
            name: (!obj) ? "Null" : obj.name,
            period: " 2nd Quarter ",
            cmlPeriod: " First Half  ",
            units: (obj !== undefined && obj.units === "units") 
                    ? "units"
                    : (obj !== undefined && obj.units === "currency")
                    ? "currency"
                    : "NaN",
            value: (!obj) ? 0 : obj.Q2CmlValue
        },
        {
            name: (!obj) ? "Null" : obj.name,
            period: " 3rd Quarter ",
            cmlPeriod: " 1st 3 Qtrs  ",
            units: (obj !== undefined && obj.units === "units") 
                    ? "units"
                    : (obj !== undefined && obj.units === "currency")
                    ? "currency"
                    : "NaN",
            value: (!obj) ? 0 : obj.Q3CmlValue
        },
        {
            name: (!obj) ? "Null" : obj.name,
            period: " 4th Quarter ",
            cmlPeriod: "Cml. ",
            units: (obj !== undefined && obj.units === "units") 
                    ? "units"
                    : (obj !== undefined && obj.units === "currency")
                    ? "currency"
                    : "NaN",
            value: (!obj) ? 0 : obj.Q4CmlValue
        },
        {
            name: (!obj) ? "Null" : obj.name,
            period: " Last FY Cumulative ",
            cmlPeriod: "Cml. ",
            units: (obj !== undefined && obj.units === "units") 
                    ? "units"
                    : (obj !== undefined && obj.units === "currency")
                    ? "currency"
                    : "NaN",
            value: (!obj) ? 0 : obj.cmlValueLastFY
        },
    ];

    return unitSales 

};

const platformForecastsMake = (obj: {
    name: string,
    forecastThisFY?: number,
    forecastRevision1?: number,
    forecastRevision2?: number,
    forecastRevision3?: number,
    forecastNextFY?: number,
}): Section[] => {

    // had to use different type assertion due to issue with keys not being recognised...
    let forecasts: Section[] = [
        {
            name: obj.name,
            units: "units",
            period: "Forecast ", 
            cmlPeriod: " 1st Quarter ",
            value: obj?.forecastThisFY,
        } as Section,
        {
            name: obj.name,
            units: "units",
            period: " FCST Revision 1 ",
            cmlPeriod: " First Half  ",
            value: obj?.forecastRevision1,
        } as Section,
        {
            name: obj.name,
            units: "units",
            period: " FCST Revision 2 ",
            cmlPeriod: " 1st 3 Qtrs  ",
            value: obj?.forecastRevision2,
        } as Section,
        {
            name: obj.name,
            units: "units",
            period: " FCST Revision 3 ",
            cmlPeriod: " 1st 3 Qtrs  ",
            value: obj?.forecastRevision3,
        } as Section,
        {
            name: obj.name,
            units: "units",
            period: "Forecast ",
            cmlPeriod: "Cml. ",
            value: obj?.forecastNextFY,
        } as Section,
    ].filter(elem => elem.value !== undefined)

    return forecasts
};

export const globalHardwareSoftwareMobileList: string[] = collection.map((elem, index, array) => {

    let currentQuarter: number = elem.currentQuarter;

    let header: Header = {
        fiscalYear: elem.fiscalYear,
        nextFiscalYearShort: elem.nextFiscalYearShort,
        switchHeader: "| Nintendo Switch   |",
        secondHeader: "| Sales Units and Forecast     |",
    };

    let platformSalesList: Section[][] = elem.platformCmlSales.map(value => platformSalesMake(value));

    let platformUnitSalesThisFYList: Section[][] = elem.platformUnitSales.map(value => platformUnitSalesMake(value));

    let platformUnitSalesLastFYList: Section[][] = elem.platformUnitSales.map((value) => {

        let nameSearch = (!array[index+1]) ? undefined : array[index+1].platformUnitSales.filter(findName => value.name === findName.name); // it should only find one match

        return (!nameSearch) 
                ? platformUnitSalesMake(undefined)
                : platformUnitSalesMake(nameSearch[0]);
    })

    let platformForecastsList: Section[][] = elem.platformForecastSales.map(value => platformForecastsMake(value));

    const quarterlyPlatformUnitSalesThisFY = platformUnitSalesThisFYList.map((elem) => {

        return quarterlyCalculation(elem).filter((elem, index, array) => index !== array.length-1) // filters out last fy cumulative index
    });
    console.log(quarterlyPlatformUnitSalesThisFY);
    

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
    console.log(platformUnitSalesYoY);
    

    const quarterlyPlatformUnitSalesYoY = Array.from({length: quarterlyPlatformUnitSalesThisFY.length}, (v, i) => {

        return yearOnYearCalculation(quarterlyPlatformUnitSalesThisFY[i], quarterlyPlatformUnitSalesLastFY[i])
    });

    console.log(quarterlyPlatformUnitSalesYoY);

    const cmlPlatformUnitSalesThisFY = platformUnitSalesThisFYList.map(elem => {

        return elem.filter((value, index) => {
            return index !== 0 // filter out the first quarters
        });
    });


    const printOne: string = printHead(header)

    const printPlatformCmlSales: string[] = Array.from({length: platformSalesList.length}, (v, i) => {

        let switchHardware: Section[][] = platformUnitSalesThisFYList.map((elem, index) => {
            
            return elem.filter(value => value.name === " Hardware Total ")
        }).filter(elem => elem.length !== 0);

        return printSalesHardware(
            header,
            platformSalesList[i],
            switchHardware[0],
            currentQuarter
        ) 
    })

    const printPlatformUnitSales: string[] = Array.from({length: platformUnitSalesThisFY.length}, (v, i) => {

        let forecast = (cmlPlatformUnitSalesThisFY[i][0].name === " Software Total ")
            ? platformForecastsList[1] // software
            : platformForecastsList[0] // hardware

        return printSections(
            header, 
            quarterlyPlatformUnitSalesThisFY[i],
            quarterlyPlatformUnitSalesYoY[i],
            cmlPlatformUnitSalesThisFY[i],
            platformUnitSalesYoY[i],
            forecast,
            currentQuarter
            )
    }).concat("###");

    let printAll = [printOne].concat(printPlatformCmlSales, printPlatformUnitSales);

    return printAll.reduce((prev, next) => prev + "\n" + next);

});