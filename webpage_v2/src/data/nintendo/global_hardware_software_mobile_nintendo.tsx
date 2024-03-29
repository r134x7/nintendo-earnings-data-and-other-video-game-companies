import {
    Section,
    Header,
    printSections,
    printSalesHardware,
    quarterlyCalculation,
    yearOnYearCalculation
} from "../../utils/hardware_software_units_logic";
import { headerPrint, dateLabel, liner, border, spacer, valueLimit, globImport } from "../../utils/table_design_logic";
import type { searchTitles } from "../capcom/platinum_titles_Capcom";

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
    Q1CmlValue: number | string,
    Q2CmlValue: number | string,
    Q3CmlValue: number | string,
    Q4CmlValue: number | string,
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

const collection: collectionJSON[] = [...globImport(new Map<number, collectionJSON>, import.meta.glob("./Global_Hardware_Software_Mobile/*.json", { import: "default", eager: true }), "Descending").values()]

export const platformSalesMake = (obj: undefined | platformCumulativeSalesType ): Section[] => {

    let sales: Section[] = [
        {
            name: obj?.name ?? "N/A",
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: (obj?.units === "currency") ? "currency" : "NaN",
            value: obj?.Q1CmlValue ?? 0,
            hardwareReference: obj?.hardwareReference,
        },
        {
            name: obj?.name ?? "N/A",
            period: "2nd Quarter",
            cmlPeriod: "First Half",
            units: (obj?.units === "currency") ? "currency" : "NaN",
            value: obj?.Q2CmlValue ?? 0,
            hardwareReference: obj?.hardwareReference,
        },
        {
            name: obj?.name ?? "N/A",
            period: "3rd Quarter",
            cmlPeriod: "1st 3 Qtrs",
            units: (obj?.units === "currency") ? "currency" : "NaN",
            value: obj?.Q3CmlValue ?? 0,
            hardwareReference: obj?.hardwareReference,
        },
        {
            name: obj?.name ?? "N/A",
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: (obj?.units === "currency") ? "currency" : "NaN",
            value: obj?.Q4CmlValue ?? 0,
            hardwareReference: obj?.hardwareReference,
        },
        {
            name: obj?.name ?? "N/A",
            period: "Last FY Cumulative",
            cmlPeriod: "Cml.",
            units: (obj?.units === "currency") ? "currency" : "NaN",
            value: obj?.cmlValueLastFY ?? 0,
            hardwareReference: obj?.hardwareReference,
        },
    ];

    return sales
};

export const platformUnitSalesMake = (obj: undefined | platformUnitSalesType): Section[] => {

    let unitSales: Section[] = [
        {
            name: obj?.name ?? "N/A",
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: (obj?.units === "units") 
                    ? "units"
                    : (obj?.units === "currency")
                        ? "currency"
                        : "NaN",
            value: valueLimit(obj?.Q1CmlValue),
            footnote: obj?.footnote,
        },
        {
            name: obj?.name ?? "N/A",
            period: "2nd Quarter",
            cmlPeriod: "First Half",
            units: (obj?.units === "units") 
                    ? "units"
                    : (obj?.units === "currency")
                        ? "currency"
                        : "NaN",
            value: valueLimit(obj?.Q2CmlValue),
            footnote: obj?.footnote,
        },
        {
            name: obj?.name ?? "N/A",
            period: "3rd Quarter",
            cmlPeriod: "1st 3 Qtrs",
            units: (obj?.units === "units") 
                    ? "units"
                    : (obj?.units === "currency")
                        ? "currency"
                        : "NaN",
            value: valueLimit(obj?.Q3CmlValue),
            footnote: obj?.footnote,
        },
        {
            name: obj?.name ?? "N/A",
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: (obj?.units === "units") 
                    ? "units"
                    : (obj?.units === "currency")
                        ? "currency"
                        : "NaN",
            value: valueLimit(obj?.Q4CmlValue),
            footnote: obj?.footnote,
        },
        {
            name: obj?.name ?? "N/A",
            period: "Last FY Cumulative",
            cmlPeriod: "Cml.",
            units: (obj?.units === "units") 
                    ? "units"
                    : (obj?.units === "currency")
                        ? "currency"
                        : "NaN",
            value: valueLimit(obj?.cmlValueLastFY),
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

export const globalHardwareSoftwareList = collection.map((elem, index, array) => {

    let currentQuarter: number = elem.currentQuarter;
    
    let nextFiscalYear: string = elem.fiscalYear.slice(0,4) + (Number(elem.fiscalYear.slice(4)) + 1).toString()

    let header: Header = {
        fiscalYear: elem.fiscalYear,
        nextFiscalYearShort: nextFiscalYear,
        switchHeader: "Nintendo Co., Ltd.",
        firstHeader: "Global Hardware and Software",
        secondHeader: "Sales Units and Forecasts",
    };

    const makeDateLabel = dateLabel(elem.fiscalYear ?? "N/A", elem?.currentQuarter ?? 4);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

    let platformSalesList: Section[][] = elem.platformCmlSales.map(value => platformSalesMake(value));

    let platformUnitSalesThisFYList: Section[][] = elem.platformUnitSales.filter(value => !Object.hasOwn(value, "dataShift")).map(value => platformUnitSalesMake(value)); 
    // applying the filter on both ThisFYList and LastFYList will work correctly 
    
    let platformUnitSalesLastFYList: Section[][] = elem.platformUnitSales.filter(value => !Object.hasOwn(value, "dataShift")).map((value) => {
        // array[index+1] is checking the collection index of the previous fiscal year
        let nameSearch = (!array[index+1]) ? undefined : array[index+1].platformUnitSales.filter(findName => value.name === findName.name); // it should only find one match
        
        return platformUnitSalesMake(nameSearch?.[0]);
    })

    let platformForecastsList: Section[][] = elem.platformForecastSales.map(value => platformForecastsMake(value));

    const quarterlyPlatformUnitSalesThisFY = platformUnitSalesThisFYList.map((elem) => {
         // filters out last fy cumulative index
        return quarterlyCalculation(elem).filter((elem, index, array) => index !== array.length-1)
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

    const printOne: string = headerPrint([
        header.switchHeader + " | " + header.fiscalYear,
        header.firstHeader,
        header.secondHeader,
    ],30) + "\n" + printDateLabel;

    // "N/A" avoids crashing when no data...
    // Will look at refactoring this when a second platform occurs simultaneously with Switch
    // const printPlatformCmlSales = (platformSalesList[0][0].name === "N/A") ? [""] : Array.from({length: platformSalesList.length}, (v, i) => {
    const printPlatformCmlSales = (platformSalesList[0][0].name === "N/A") ? [{title: "###", platforms: "Sales Per Hardware Unit", table: "###\n"} as searchTitles] : Array.from({length: platformSalesList.length}, (v, i) => {

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
        
        // return printSalesHardware(
        //     header,
        //     platformSalesList[i],
        //     platformHardware,
        //     currentQuarter
        // ) 

        return {
            title: platformSalesList[i][0].name,
            platforms: "Sales Per Hardware Unit",
            table: printSalesHardware(
            header,
            platformSalesList[i],
            platformHardware,
            currentQuarter
            ),
        } as searchTitles
    }) 

    const printPlatformUnitSales = Array.from({length: platformUnitSalesThisFY.length}, (v, i) => {

        let forecast: Section[] = platformForecastsList.map(value => 
            {
                return value.filter(findName => findName.name === cmlPlatformUnitSalesThisFY[i][0].name) // should only find one match
            }).flat()

        // return printSections(
        //     header, 
        //     quarterlyPlatformUnitSalesThisFY[i],
        //     quarterlyPlatformUnitSalesYoY[i],
        //     cmlPlatformUnitSalesThisFY[i],
        //     platformUnitSalesYoY[i],
        //     forecast,
        //     currentQuarter
        //     )

        return {
            title: quarterlyPlatformUnitSalesThisFY[i][0].name,
            platforms: "Global Hardware/Software Units",
            table: printSections(
            header, 
            quarterlyPlatformUnitSalesThisFY[i],
            quarterlyPlatformUnitSalesYoY[i],
            cmlPlatformUnitSalesThisFY[i],
            platformUnitSalesYoY[i],
            forecast,
            currentQuarter
            ), 
        } as searchTitles
        
    })//.concat("###");

    // let printAll: string[] = [printOne].concat(printPlatformCmlSales, printPlatformUnitSales);

    // return printAll.reduce((prev, next) => prev + "\n" + next);

    // return {
    //     header: printOne,
    //     titleList: [printPlatformCmlSales, printPlatformUnitSales]
    // }
    return [
        {
            header: printOne,
            titleList: printPlatformCmlSales ,
        },
        {
            header: printOne,
            titleList: printPlatformUnitSales,
        }
    ] 
});

export const globalHardwareSoftwareGraphList = collection.map((elem, index, array) => {

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