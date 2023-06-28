import { printTextBlock, border, liner, spacer, dateLabel, headerPrint } from "../../utils/table_design_logic";
import { 
    type EarningsJSONV2, 
    type EarningsMakeV2, 
    getData, 
} from "./consolidated_earnings_general";
import { type EarningsV2, } from "../../utils/general_earnings_logic";
import { generalSalesHeaderV2, salesPerSoftwareUnitCalculation, millionFix } from "../../utils/segment_data_logic";

import bandaiNamcoSoftwareSales2023 from "../bandaiNamco/Software_Sales/software_sales_fy3_2023.json";
import bandaiNamcoSoftwareSales2022 from "../bandaiNamco/Software_Sales/software_sales_fy3_2022.json";
import bandaiNamcoSoftwareSales2021 from "../bandaiNamco/Software_Sales/software_sales_fy3_2021.json";
import bandaiNamcoSoftwareSales2020 from "../bandaiNamco/Software_Sales/software_sales_fy3_2020.json";
import bandaiNamcoSoftwareSales2019 from "../bandaiNamco/Software_Sales/software_sales_fy3_2019.json";

import capcomSoftwareSales2023 from "../capcom/Software_Sales/software_sales_fy3_2023.json";
import capcomSoftwareSales2022 from "../capcom/Software_Sales/software_sales_fy3_2022.json";
import capcomSoftwareSales2021 from "../capcom/Software_Sales/software_sales_fy3_2021.json";

import segaSammySoftwareSales2023 from "../sega/Software_Sales/software_sales_fy3_2023.json";
import segaSammySoftwareSales2022 from "../sega/Software_Sales/software_sales_fy3_2022.json";
import segaSammySoftwareSales2021 from "../sega/Software_Sales/software_sales_fy3_2021.json";
import segaSammySoftwareSales2020 from "../sega/Software_Sales/software_sales_fy3_2020.json";

import koeiTecmoSoftwareSales2023 from "../koeiTecmo/Software_Sales/software_sales_fy3_2023.json";
import koeiTecmoSoftwareSales2022 from "../koeiTecmo/Software_Sales/software_sales_fy3_2022.json";
import koeiTecmoSoftwareSales2021 from "../koeiTecmo/Software_Sales/software_sales_fy3_2021.json";
import koeiTecmoSoftwareSales2020 from "../koeiTecmo/Software_Sales/software_sales_fy3_2020.json";
import koeiTecmoSoftwareSales2019 from "../koeiTecmo/Software_Sales/software_sales_fy3_2019.json";

import squareEnixSoftwareSales2023 from "../squareEnix/Software_Sales/software_sales_fy3_2023.json";
import squareEnixSoftwareSales2022 from "../squareEnix/Software_Sales/software_sales_fy3_2022.json";
import squareEnixSoftwareSales2021 from "../squareEnix/Software_Sales/software_sales_fy3_2021.json";
import squareEnixSoftwareSales2020 from "../squareEnix/Software_Sales/software_sales_fy3_2020.json";

// type Dates = {
//     fiscalYear: string,
//     currentQuarter: number,
// };
// // finally made use of a generic to deal with a complex problem.
// function labelMaker <T extends Dates>(collection: T[]) {

//     const makeDateLabel = dateLabel(collection.at(-1)?.fiscalYear ?? "N/A", collection.at(-1)?.currentQuarter ?? 4);

//     return liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "bottom",true)
// }

const bandaiNamcoCollection = new Map<number, EarningsJSONV2>();
    bandaiNamcoCollection.set(bandaiNamcoCollection.size,bandaiNamcoSoftwareSales2019);
    bandaiNamcoCollection.set(bandaiNamcoCollection.size,bandaiNamcoSoftwareSales2020);
    bandaiNamcoCollection.set(bandaiNamcoCollection.size,bandaiNamcoSoftwareSales2021);
    bandaiNamcoCollection.set(bandaiNamcoCollection.size,bandaiNamcoSoftwareSales2022);
    bandaiNamcoCollection.set(bandaiNamcoCollection.size,bandaiNamcoSoftwareSales2023);

const capcomCollection = new Map<number, EarningsJSONV2>();
    capcomCollection.set(capcomCollection.size,capcomSoftwareSales2021);
    capcomCollection.set(capcomCollection.size,capcomSoftwareSales2022);
    capcomCollection.set(capcomCollection.size,capcomSoftwareSales2023);

const segaCollection = new Map<number, EarningsJSONV2>();
    segaCollection.set(segaCollection.size, segaSammySoftwareSales2020);
    segaCollection.set(segaCollection.size, segaSammySoftwareSales2021);
    segaCollection.set(segaCollection.size, segaSammySoftwareSales2022);
    segaCollection.set(segaCollection.size, segaSammySoftwareSales2023);

const koeiTecmoCollection = new Map<number, EarningsJSONV2>();
    koeiTecmoCollection.set(koeiTecmoCollection.size, koeiTecmoSoftwareSales2019);
    koeiTecmoCollection.set(koeiTecmoCollection.size, koeiTecmoSoftwareSales2020);
    koeiTecmoCollection.set(koeiTecmoCollection.size, koeiTecmoSoftwareSales2021);
    koeiTecmoCollection.set(koeiTecmoCollection.size, koeiTecmoSoftwareSales2022);
    koeiTecmoCollection.set(koeiTecmoCollection.size, koeiTecmoSoftwareSales2023);

const squareEnixCollection = new Map<number, EarningsJSONV2>();
    squareEnixCollection.set(squareEnixCollection.size, squareEnixSoftwareSales2020);
    squareEnixCollection.set(squareEnixCollection.size, squareEnixSoftwareSales2021);
    squareEnixCollection.set(squareEnixCollection.size, squareEnixSoftwareSales2022);
    squareEnixCollection.set(squareEnixCollection.size, squareEnixSoftwareSales2023);


const generalSalesHeader = 
`+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
|              |             |          | Sales Per |
|              |             | Software |  Software |
|              |       Sales |    Units |      Unit |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+`;


function setMakerV2(
    completeCollection: Map<number, EarningsJSONV2>, 
    headerLength: number,
    salesRoundtoMillion: "Billion" | "Million" | "Hundred Thousand" | "Ten Thousand" | "One Thousand",
    unitsRoundtoMillion: "Billion" | "Million" | "Hundred Thousand" | "Ten Thousand" | "One Thousand",
    ): string[] {

    const currentQuarter = completeCollection.get(completeCollection.size-1)?.currentQuarter ?? 4;

    const makeData = new Map<number, EarningsV2[]>();
    completeCollection.forEach((value, key, map) => makeData.set(key, [...getData(value, value.data.length).values()]));

    const makeDateLabel = dateLabel(completeCollection.get(completeCollection.size-1)?.fiscalYear ?? "ERROR", currentQuarter);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

    const printOne = headerPrint([
            completeCollection.get(completeCollection.size-1)?.companyName ?? "ERROR",
            "Segment Information - Software Sales"
        ],headerLength) + "\n" + printDateLabel

    const millionFixData = new Map<number, EarningsV2[]>();

    makeData.forEach((value, key, map) => {

        for (let index = 0; index < value.length; index++) {
            

            millionFixData.set(key, 
                (millionFixData.get(key) ?? [])
                .concat(
                    {
                        ...value[index],
                    Q1QtrValue: millionFix(value[index].Q1QtrValue,(index === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    Q2QtrValue: millionFix(value[index].Q2QtrValue,(index === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    Q3QtrValue: millionFix(value[index].Q3QtrValue,(index === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    Q4QtrValue: millionFix(value[index].Q4QtrValue,(index === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    Q1CmlValue: millionFix(value[index].Q1CmlValue,(index === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    Q2CmlValue: millionFix(value[index].Q2CmlValue,(index === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    Q3CmlValue: millionFix(value[index].Q3CmlValue,(index === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    Q4CmlValue: millionFix(value[index].Q4CmlValue,(index === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    forecastThisFY: millionFix(value[index].forecastThisFY,(index === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    forecastRevision1: millionFix(value[index].forecastRevision1,(index === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    forecastRevision2: millionFix(value[index].forecastRevision2,(index === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    forecastRevision3: millionFix(value[index].forecastRevision3,(index === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    forecastNextFY: millionFix(value[index].forecastNextFY,(index === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    } satisfies EarningsV2
                )
            )
        }
    })

    millionFixData.forEach((value, key, map) => {

        map.set(key, value.concat( {
            name: "Sales Per Software Unit",
            Q1QtrValue: salesPerSoftwareUnitCalculation(value[0].Q1QtrValue, value[1].Q1QtrValue),
            Q2QtrValue: salesPerSoftwareUnitCalculation(value[0].Q2QtrValue, value[1].Q2QtrValue),
            Q3QtrValue: salesPerSoftwareUnitCalculation(value[0].Q3QtrValue, value[1].Q3QtrValue),
            Q4QtrValue: salesPerSoftwareUnitCalculation(value[0].Q4QtrValue, value[1].Q4QtrValue),
            Q1CmlValue: salesPerSoftwareUnitCalculation(value[0].Q1CmlValue, value[1].Q1CmlValue),
            Q2CmlValue: salesPerSoftwareUnitCalculation(value[0].Q2CmlValue, value[1].Q2CmlValue),
            Q3CmlValue: salesPerSoftwareUnitCalculation(value[0].Q3CmlValue, value[1].Q3CmlValue),
            Q4CmlValue: salesPerSoftwareUnitCalculation(value[0].Q4CmlValue, value[1].Q4CmlValue),
            forecastThisFY: salesPerSoftwareUnitCalculation(value[0].forecastThisFY, value[1].forecastThisFY),
            forecastRevision1: salesPerSoftwareUnitCalculation(value[0].forecastRevision1, value[1].forecastRevision1),
            forecastRevision2: salesPerSoftwareUnitCalculation(value[0].forecastRevision2, value[1].forecastRevision2),
            forecastRevision3: salesPerSoftwareUnitCalculation(value[0].forecastRevision3, value[1].forecastRevision3),
            forecastNextFY: salesPerSoftwareUnitCalculation(value[0].forecastNextFY, value[1].forecastNextFY),
            footnotes: value[0].footnotes
        } satisfies EarningsV2));
    })

}


// const bandaiNamcoSales: Section[] = setMaker(bandaiNamcoCollection, bandaiNamcoSalesMake);

// const bandaiNamcoUnits: Section[] = setMaker(bandaiNamcoCollection, bandaiNamcoUnitsMake);

// const capcomDigitalContentsSales: Section[] = setMaker(capcomCollection, digitalContentsSalesMake);

// const capcomDigitalContentsUnits: Section[] = setMaker(capcomCollection, digitalContentsUnitsMake);

// const capcomPhysicalSales: Section[] = setMaker(capcomCollection, packageSalesMake);

// const capcomPhysicalUnits: Section[] = setMaker(capcomCollection, packageUnitsMake);

// const capcomDigitalSales: Section[] = setMaker(capcomCollection, digitalSalesMake);

// const capcomDigitalUnits: Section[] = setMaker(capcomCollection, digitalUnitsMake);

// const segaSales: Section[] = setMaker(segaCollection, segaSalesMake);

// const segaUnits: Section[] = setMaker(segaCollection, segaUnitsMake);

// const koeiTecmoSales: Section[] = setMaker(koeiTecmoCollection, koeiTecmoSalesMake);

// const koeiTecmoUnits: Section[] = setMaker(koeiTecmoCollection, koeiTecmoUnitsMake);

// const squareEnixSales: Section[] = setMaker(squareEnixCollection, salesHDandMMOmake);

// const squareEnixUnits: Section[] = setMaker(squareEnixCollection, squareEnixUnitsMake);

// function headerMaker(companyName: string) {

//     let company = liner(border([spacer(companyName, companyName.length+1, "left")]), "−", "top")

//     let subHeaderName = "Segment Information - Cumulative"

//     let subHeader = liner(border([spacer(subHeaderName, subHeaderName.length+1, "left")]), "−", "both");

//     return [company, subHeader].reduce((acc, next) => acc + "\n" + next)

// };

// function setMaker(collection: koeiTecmoCollectionJSON[] | capcomCollectionJSON[] | squareEnixCollectionJSON[] | segaCollectionJSON[], objectMaker: Function): Section[] {

//     return collection.map((elem) => {

//         let list: Section[] = objectMaker(elem);

//         return list.map(value => {
//             return { ...value, fiscalYear: elem.fiscalYear}
//         })
//     }).flatMap(elem => elem.filter((value, valueIndex) => valueIndex > 2)); 
// };

// const printSalesPerSoftwareUnitCumulative = (salesArray: Section[], softwareArray: Section[]): string => {

//     let printLine = (length: number) => `+${"−".repeat(length)}+`;

//     let printName = printLine(salesArray[0].name.length+2) + "\n" + printTextBlock(salesArray[0].name, salesArray[0].name.length+2); 


//     let salesPerSoftwareUnit = salesArray.map((elem, index, array) => {

//         let printSales: string = `¥${(elem.value * 1000).toLocaleString("en")}M`;

//         let printSalesFixed: string = (printSales.length >= 13)
//             ? printSales
//             : " ".repeat(13 - printSales.length) + printSales;
        
        
//         let calculateSalesPerSoftware: number = Number(((elem.value * 1000) / (softwareArray[index].value / 1000)).toFixed(0));

//         let printsegmentSalesPerSoftware: string = `¥${calculateSalesPerSoftware.toLocaleString("en")} `

//         let printsegmentSalesPerSoftwareFixed: string = (printsegmentSalesPerSoftware.length >= 11)
//                 ? printsegmentSalesPerSoftware
//                 : " ".repeat(11 - printsegmentSalesPerSoftware.length) + printsegmentSalesPerSoftware;
            
//         let printSoftwareUnits: string = `${softwareArray[index].value / 1000}M`

        
//         let printSoftwareUnitsFixed: string = (printSoftwareUnits.length >= 10)
//                 ? printSoftwareUnits
//                 : " ".repeat(10 - printSoftwareUnits.length) + printSoftwareUnits;
        
//         return "| " + elem.fiscalYear + " Cml.|" + printSalesFixed + "|" + printSoftwareUnitsFixed + "|" + printsegmentSalesPerSoftwareFixed + "|"; 
//     });

//     function sortList(list: Section[]) {

//         const sortList = list.map((elem, index, array) => {
//                 return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
//         }).sort((a, b) => { // (b,a) is descending order, (a,b) sorts in ascending order
//             return (a.value > b.value)
//                 ? 1
//                 : (a.value < b.value)
//                 ? -1
//                 : 0 
//         });

//         return sortList
//     };

//     function sortValues(list: number[]) {

//         const sortList = list.map((elem, index, array) => {
//                 return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
//         }).sort((a, b) => { // (b,a) is descending order, (a,b) sorts in ascending order
//             return (a > b)
//                 ? 1
//                 : (a < b)
//                 ? -1
//                 : 0 
//         });

//         return sortList
//     };

//     let sortedSales = sortList(salesArray);

//     let sortedUnits = sortList(softwareArray);

//     let sortedSalesSum = ((sortedSales.map(value => value.value).reduce((acc, next) => acc + next)) * 1000);

//     let sortedUnitsSum = ((sortedUnits.map(value => value.value).reduce((acc, next) => acc + next)) / 1000);

//     let salesPerSoftwareUnitUnsorted = salesArray.map((elem, index) => {
//         return  Number(((elem.value * 1000) / (softwareArray[index].value / 1000)).toFixed(0));
//     });

//     let salesPerSoftwareUnitSorted = sortValues(salesPerSoftwareUnitUnsorted);

//     let salesPerSoftwareUnitSum = salesPerSoftwareUnitUnsorted.reduce((acc, next) => acc + next); 

//     let salesPerSoftwareUnitAverage = salesPerSoftwareUnitSum / salesArray.length;

//     let printSalesSum: string = `¥${Number((sortedSalesSum).toFixed(0)).toLocaleString("en")}M`;

//     let printUnitsSum: string = `${(sortedUnitsSum)}M`;
    
//     let printSalesPerSoftwareUnitSum = `¥${Number((salesPerSoftwareUnitSum).toFixed(0)).toLocaleString("en")}`;

//     let printAverageSales: string = `¥${Number(( sortedSalesSum / sortedSales.length).toFixed(0)).toLocaleString("en")}M`;

//     let printAverageUnits: string = `${( sortedUnitsSum / sortedUnits.length).toFixed(2)}M`; 

//     let printAverageSalesPerSoftware: string = `¥${Number(( salesPerSoftwareUnitAverage).toFixed(0)).toLocaleString("en")}`; 

//     let printMedianSales: string = ((sortedSales.length % 2) !== 0) // odd number
//             // median formula source: https://en.wikipedia.org/wiki/Median
//             // odd number median(x) = x(n+1)/2 => index version => median(x) = (x(n+1)/2)-1
//             ? `¥${((sortedSales[((sortedSales.length + 1)/2) -1].value) * 1000).toLocaleString("en")}M`
//             // even number median(x) = (x(n/2) + x((n/2) + 1)) /2 => index version median(x) = (x((n/2)-1) + x((n/2))) /2
//             : `¥${Number((((sortedSales[(sortedSales.length/2) -1].value + sortedSales[(sortedSales.length/2)].value)/2) * 1000).toFixed(0)).toLocaleString("en")}M`;
    
    
//     let printMedianUnits: string = ((sortedUnits.length % 2) !== 0) // odd number
//             ? `${(sortedUnits[((sortedUnits.length + 1)/2) -1].value / 1000).toFixed(2)}M`
//             : `${Number((((sortedUnits[(sortedUnits.length/2) -1].value + sortedUnits[(sortedUnits.length/2)].value)/2) / 1000).toFixed(2))}M`;

//     let printMedianSalesPerSoftwareUnit: string = ((salesPerSoftwareUnitSorted.length % 2) !== 0) // odd number
//             ? `¥${salesPerSoftwareUnitSorted[((salesPerSoftwareUnitSorted.length + 1)/2) -1].toLocaleString("en")}`
//             : `¥${Number(((salesPerSoftwareUnitSorted[(salesPerSoftwareUnitSorted.length/2) -1] + salesPerSoftwareUnitSorted[(salesPerSoftwareUnitSorted.length/2)])/2).toFixed(0)).toLocaleString("en")}`;

//     let printMinSales: string = `¥${(sortedSales[0].value * 1000).toLocaleString("en")}M`;

//     let printMinUnits: string = `${(sortedUnits[0].value / 1000)}M`;

//     let printMinSalesPerSoftwareUnit: string = `¥${(salesPerSoftwareUnitSorted[0]).toLocaleString("en")}`;

//     let printMaxSales: string = `¥${(sortedSales[sortedSales.length-1].value * 1000).toLocaleString("en")}M`;

//     let printMaxUnits: string = `${(sortedUnits[sortedUnits.length-1].value / 1000)}M`;

//     let printMaxSalesPerSoftwareUnit: string = `¥${(salesPerSoftwareUnitSorted[salesPerSoftwareUnitSorted.length-1]).toLocaleString("en")}`;


//     let printCountRow: string = border([
//         spacer("Count", 13, "left"),
//         spacer(`${salesArray.length}`, 12, "right"),
//         spacer("", 9, "left"),
//         spacer("", 10, "left"),
//     ]);

//     let printSumRow: string = border([
//         spacer("Sum", 13, "left"),
//         spacer(printSalesSum, 12, "right"),
//         spacer(printUnitsSum, 9, "right"),
//         spacer(printSalesPerSoftwareUnitSum, 10, "right"),
//     ]);

//     let printAverageRow: string = border([
//         spacer("Average", 13, "left"),
//         spacer(printAverageSales, 12, "right"),
//         spacer(printAverageUnits, 9, "right"),
//         spacer(printAverageSalesPerSoftware, 10, "right")
//     ]);

//     let printMedianRow: string = border([
//         spacer("Median", 13, "left"),
//         spacer(printMedianSales, 12, "right"),
//         spacer(printMedianUnits, 9, "right"),
//         spacer(printMedianSalesPerSoftwareUnit, 10, "right")
//     ]);

//     let printMinRow: string = border([
//         spacer("Minimum", 13, "left"),
//         spacer(printMinSales, 12, "right"),
//         spacer(printMinUnits, 9, "right"),
//         spacer(printMinSalesPerSoftwareUnit, 10, "right")
//     ]);

//     let printMaxRow: string = liner(border([
//         spacer("Maximum", 13, "left"),
//         spacer(printMaxSales, 12, "right"),
//         spacer(printMaxUnits, 9, "right"),
//         spacer(printMaxSalesPerSoftwareUnit, 10, "right")
//     ]),"−", "bottom");


//     return [
//         printName,
//         generalSalesHeader,
//         ...salesPerSoftwareUnit, 
//         printLine(51),
//         printCountRow,
//         printSumRow,
//         printAverageRow,
//         printMedianRow,
//         printMinRow,
//         printMaxRow,
//         (salesArray[0].notes === undefined) ? [] : printTextBlock(salesArray[0].notes, 51) + "\n" + printLine(51),
//     ].flat().reduce((acc, next) => acc + "\n" + next);
// };

// export const bandaiNamcoSalesPerSoftwareUnitCml = [
//     headerMaker("Bandai Namco"),
//     labelMaker(bandaiNamcoCollection),
//     printSalesPerSoftwareUnitCumulative(bandaiNamcoSales, bandaiNamcoUnits)
// ].reduce((acc, next) => acc + "\n" + next);

// export const CapcomSalesPerSoftwareUnitCml = [
//     headerMaker("Capcom"),
//     labelMaker(capcomCollection),
//     printSalesPerSoftwareUnitCumulative(capcomDigitalContentsSales, capcomDigitalContentsUnits),
//     printSalesPerSoftwareUnitCumulative(capcomDigitalSales, capcomDigitalUnits),
//     printSalesPerSoftwareUnitCumulative(capcomPhysicalSales, capcomPhysicalUnits),
// ].reduce((acc, next) => acc + "\n" + next);

// export const segaSammySalesPerSoftwareUnitCml = [
//     headerMaker("Sega Sammy"),
//     labelMaker(segaCollection),
//     printSalesPerSoftwareUnitCumulative(segaSales, segaUnits)
// ].reduce((acc, next) => acc + "\n" + next);

// export const koeiTecmoSalesPerSoftwareUnitCml = [
//     headerMaker("Koei Tecmo"),
//     labelMaker(koeiTecmoCollection),
//     printSalesPerSoftwareUnitCumulative(koeiTecmoSales, koeiTecmoUnits)
// ].reduce((acc, next) => acc + "\n" + next);

// export const squareEnixSalesPerSoftwareUnitCml = [
//     headerMaker("Square Enix"),
//     labelMaker(squareEnixCollection),
//     printSalesPerSoftwareUnitCumulative(squareEnixSales, squareEnixUnits),
//     notes2021,
//     liner(border([spacer("See \"Data by Fiscal Year\" for HD Games and MMO sales splits", 60, "left")]),"−","both"),
// ].reduce((acc, next) => acc + "\n" + next);
