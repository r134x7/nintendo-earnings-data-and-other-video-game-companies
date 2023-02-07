import { liner, border, spacer, printTextBlock, dateLabel } from "../../utils/table_design_logic";
import { Series } from "../../utils/capcom_factbook_logic";

import factBookCapcom2011 from "./Fact_Book/software_shipments_platform_fy3_2011.json";
import factBookCapcom2012 from "./Fact_Book/software_shipments_platform_fy3_2012.json";
import factBookCapcom2013 from "./Fact_Book/software_shipments_platform_fy3_2013.json";
import factBookCapcom2014 from "./Fact_Book/software_shipments_platform_fy3_2014.json";
import factBookCapcom2015 from "./Fact_Book/software_shipments_platform_fy3_2015.json";
import factBookCapcom2016 from "./Fact_Book/software_shipments_platform_fy3_2016.json";
import factBookCapcom2017 from "./Fact_Book/software_shipments_platform_fy3_2017.json";
import factBookCapcom2018 from "./Fact_Book/software_shipments_platform_fy3_2018.json";
import factBookCapcom2019 from "./Fact_Book/software_shipments_platform_fy3_2019.json";
import factBookCapcom2020 from "./Fact_Book/software_shipments_platform_fy3_2020.json";
import factBookCapcom2021 from "./Fact_Book/software_shipments_platform_fy3_2021.json";
import factBookCapcom2022 from "./Fact_Book/software_shipments_platform_fy3_2022.json";

type factBook = {
    fiscalYear: string,
    platforms: {
            title: string,
            skuNumber: number,
            value: number,
            valueLastFY: number,
            miscellaneous?: string,
        }[]
};

const collectionCapcom: factBook[] = [
    factBookCapcom2011,
    factBookCapcom2012,
    factBookCapcom2013,
    factBookCapcom2014,
    factBookCapcom2015,
    factBookCapcom2016,
    factBookCapcom2017,
    factBookCapcom2018,
    factBookCapcom2019,
    factBookCapcom2020,
    factBookCapcom2021,
    factBookCapcom2022,
];

const makeDateLabel = dateLabel(collectionCapcom.at(-1)?.fiscalYear ?? "N/A", 4);
const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "bottom",true)

function shipmentsMaker (collection: factBook[], companyName: string, dateLabelLocal: string) {

    let headerMake: string = liner(border([
        spacer(companyName, companyName.length+1, "left")
        ]),"−","top",true) +
        liner(border([
            spacer("Fact Book Data", "Fact Book Data".length+14, "left")
        ]), "−", "both",true) + dateLabelLocal + liner(border([
            spacer("Units shipped by Platform",32,"left"),
        ]),"−","top",true) + liner(border([
            spacer("SKU and Rank",32,"left"),
        ]),"−","top",true) + liner(border([
            spacer("Units",32,"left"),
        ]),"−","both",true)

    let totalCollectionSet: Series[][] = collection.map(elem => {

        let flatList: Series[] = elem.platforms;

        let fiscalYearGet = elem.fiscalYear;

        return flatList.map(value => {
            return  {
                ...value, fiscalYear: fiscalYearGet,
            }
        })
    });

    let flatCollectionSet: Series[] = totalCollectionSet.flat();

   let titlesList = totalCollectionSet.flat().map(value => value.title);

   const filteredCollection = [...new Set(titlesList)];

   function sortTitles(titles: string[]): Series[][] {
        return titles.map((elem, index, array) => {

            let searchTitle: Series[] = flatCollectionSet.filter((value) => value.title === elem)

            return searchTitle
        });
   };

   let titleList: Series[][] = sortTitles(filteredCollection)

   let rankTitles: Series[][] = titleList.map((elem, index, array) => {
            return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
    }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order

        let aSum = a.reduce((acc, next) => acc + next.value,0);

        let bSum = b.reduce((acc, next) => acc + next.value,0);

        return (aSum > bSum)
            ? 1
            : (aSum < bSum)
            ? -1
            : 0 
    }).map((elem, index) => {
        let rankGet = index+1
        return elem.map(value => {
            return {...value, rank: rankGet} 
        }) //{...elem, rank: index+1} // x which is the returned array is now returned to the array of arrays
    })

   return {
        header: headerMake,
        titles: rankTitles,
   }
}

function printShipments(header: string, titles: Series[][]) {

    const titleList = titles.map((elem, index, array) => {

        let printTitleName = liner(printTextBlock(elem[0].title, 42),"−","both",true,42);

        let sumSKUs = elem.reduce((acc, next) => acc + next.skuNumber, 0); 

        let printRankAndSKU = border([
            spacer(`SKU sum: ${sumSKUs}`,30,"left"),
            spacer(`Rank ${elem[elem.length-1].rank}`,9,"left")
        ])

        let rankSKUandMisc: string = liner(printRankAndSKU,"−","bottom",true,42) + liner(printTextBlock(elem.at(-1)?.miscellaneous,42),"=","bottom",true,42)

        let yearValues: string[] = elem.flatMap(value => {
            if (value.value === 0) {
                return []
            }

            return border([
                 spacer(value.fiscalYear + " Cumulative",30,"left"),
                 spacer(`${value.value}M`,9,"right")
            ],true);
        });

       let sumUnits: string = elem.reduce((acc, next) => acc + next.value, 0).toFixed(2); 

        let printLTD: string = liner(border([
            spacer("Sum (Units)",30,"left"),
            spacer(`${sumUnits}M`,9,"right")
        ]),"−","both",true) 

        return [
            printTitleName,
            rankSKUandMisc,
            ...yearValues,
            printLTD,
        ].reduce((prev, next) => {
            return prev + next
        });
    }).reduce((prev, next) => prev + next);

    return [
        header,
        titleList,
    ].reduce((acc, next) => acc + next)
};

const softwareShipmentsCapcom = shipmentsMaker(collectionCapcom, "Capcom", printDateLabel);

export const factBookCapcom = printShipments(softwareShipmentsCapcom.header, softwareShipmentsCapcom.titles);
