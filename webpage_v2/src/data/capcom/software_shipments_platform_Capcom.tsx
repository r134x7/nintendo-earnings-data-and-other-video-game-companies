import { Header, Series, printSeriesOutput } from "../../utils/capcom_factbook_logic";
import { headerPrint } from "../../utils/table_design_logic";

import softwareShipmentsPlatform2022 from "./Fact_Book/software_shipments_platform_fy3_2022.json";
import softwareShipmentsPlatform2021 from "./Fact_Book/software_shipments_platform_fy3_2021.json";
import softwareShipmentsPlatform2020 from "./Fact_Book/software_shipments_platform_fy3_2020.json";
import softwareShipmentsPlatform2019 from "./Fact_Book/software_shipments_platform_fy3_2019.json";

const collection = [
    softwareShipmentsPlatform2022,
    softwareShipmentsPlatform2021,
    softwareShipmentsPlatform2020,
    softwareShipmentsPlatform2019,
] as const;

const platformsMake = (obj: {
    "platforms": {
        title: string;
        skuNumber: number;
        value: number;
        valueLastFY: number;
    }[]
}): Series[] => {
    
    let series: Series[] = obj.platforms.map(elem => {

        return {
                    title: elem.title,
                    skuNumber: elem.skuNumber,
                    value: elem.value,
                    valueLastFY: elem.valueLastFY,
                }
    }) 

    return series
};

export const annualReportList: string[] = collection.map((elem, index, array) => {

    let header: Header = {
    firstHeader: "Capcom - Fact Book Data",
    secondHeader: "Units shipped by Platform",
    thirdHeader: "SKU and Rank",
    fourthHeader: "Units",
    fiscalYear: elem.fiscalYear,
    fiscalYearYoY: elem.fiscalYearYoY,
    };

    let seriesList: Series[] = platformsMake(elem)

    let sortedList = seriesList.filter((elem, index, array) => {
        // return elem.value - elem.valueLastFY !== 0 // probably shouldn't make two separate tables for FY and ALL...
        return elem // forgetting filter doesn't do anything here...
        // we need to create a new array that is identical to the original due to sort's mutating properties. filter titles that sold units this FY
    }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
        return (a.value > b.value)
            ? 1
            : (a.value < b.value)
            ? -1
            : 0
    }).map((elem, index) => {
        return {...elem, rank: index+1}
    })

    let printedSeries = sortedList.map((elem) => {
        return printSeriesOutput(elem, header, 32, 11);
    }).reduce((prev, next) => prev + "\n" + next)

    let printOne = headerPrint([
        header.firstHeader,
        header.secondHeader,
        header.thirdHeader,
        header.fourthHeader,
    ], 32);

    return printOne + "\n" + printedSeries
})
