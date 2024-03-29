import {
    Section,
    Header,
    printSections,
    quarterlyCalculation,
    yearOnYearCalculation
} from "../../utils/hardware_software_units_logic";

import { headerPrint, dateLabel, liner, border, spacer, type titleSet, globImport } from "../../utils/table_design_logic";

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
    footnote?: string,
};


const collection: collectionJSON[] = [...globImport(new Map<number, collectionJSON>, import.meta.glob("./Consolidated_Sales_Information/*.json", { import: "default", eager: true }), "Descending").values()];

export const platformSalesMake = (obj: undefined | platformSalesType): Section[] => {

    let unitSales: Section[] = [
        {
            name: obj?.name ?? "N/A",
            period: "1st Quarter",
            cmlPeriod: "1st Quarter",
            units: (obj?.units === "currency")
                    ? "currency"
                    : "NaN",
            value: obj?.Q1CmlValue ?? 0,
            footnote: obj?.footnote,
        },
        {
            name: obj?.name ?? "N/A",
            period: "2nd Quarter",
            cmlPeriod: "First Half",
            units: (obj?.units === "currency")
                    ? "currency"
                    : "NaN",
            value: obj?.Q2CmlValue ?? 0,
            footnote: obj?.footnote,
        },
        {
            name: obj?.name ?? "N/A",
            period: "3rd Quarter",
            cmlPeriod: "1st 3 Qtrs",
            units: (obj?.units === "currency")
                    ? "currency"
                    : "NaN",
            value: obj?.Q3CmlValue ?? 0,
            footnote: obj?.footnote,
        },
        {
            name: obj?.name ?? "N/A",
            period: "4th Quarter",
            cmlPeriod: "Cml.",
            units: (obj?.units === "currency")
                    ? "currency"
                    : "NaN",
            value: obj?.Q4CmlValue ?? 0,
            footnote: obj?.footnote,
        },
        {
            name: obj?.name ?? "N/A",
            period: "Last FY Cumulative",
            cmlPeriod: "Cml.",
            units: (obj?.units === "currency")
                    ? "currency"
                    : "NaN",
            value: 0,
            footnote: obj?.footnote,
        },
    ];

    return unitSales 
};

export const consolidatedSalesInformationList  = collection.map((elem, index, array) => {

    let currentQuarter: number = elem.currentQuarter;
    
    let nextFiscalYear: string = elem.fiscalYear.slice(0,4) + (Number(elem.fiscalYear.slice(4)) + 1).toString()

    let header: Header = {
        fiscalYear: elem.fiscalYear,
        nextFiscalYearShort: nextFiscalYear,
        switchHeader: "Nintendo Co., Ltd.",
        firstHeader: "Consolidated",
        secondHeader: "Sales Information",
    };

    const makeDateLabel = dateLabel(elem.fiscalYear ?? "N/A", elem?.currentQuarter ?? 4);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

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


    const printOne: string = headerPrint([
        header.switchHeader + " | " + header.fiscalYear,
        header.firstHeader,
        header.secondHeader,
    ],30) + "\n" + printDateLabel;

    const printPlatformSales = Array.from({length: platformSalesThisFY.length}, (v, i) => {

        let forecast: Section[] = [
            {
                name: "N/A",
                units: "units",
                period: "Forecast", 
                cmlPeriod: "1st Quarter",
                value: 0
            }
        ]

        // return printSections(
        //     header, 
        //     quarterlyPlatformSalesThisFY[i],
        //     quarterlyPlatformUnitSalesYoY[i],
        //     cmlPlatformUnitSalesThisFY[i],
        //     platformUnitSalesYoY[i],
        //     forecast,
        //     currentQuarter
        //     )
        return {
            title: quarterlyPlatformSalesThisFY[i][0].name,
            table: printSections(
            header, 
            quarterlyPlatformSalesThisFY[i],
            quarterlyPlatformUnitSalesYoY[i],
            cmlPlatformUnitSalesThisFY[i],
            platformUnitSalesYoY[i],
            forecast,
            currentQuarter
            ),
        } as titleSet 
    })
    // .concat("###") as string[];
    // let printAll = [printOne].concat(printPlatformSales);

    // return printAll.reduce((prev, next) => prev + "\n" + next);
    return {
        header: printOne,
        titleList: printPlatformSales
    }
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