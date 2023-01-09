import { printTextBlock, border, liner, spacer } from "../../utils/table_design_logic";
import { Section } from "../../utils/segment_data_logic";

import { unitsMake as bandaiNamcoUnitsMake, salesHomeVideoGameMake as bandaiNamcoSalesMake, collectionJSON as bandaiNamcoCollectionJSON} from "../bandaiNamco/software_sales_bandai_namco";
import { unitsMake as koeiTecmoUnitsMake, collectionJSON as koeiTecmoCollectionJSON, salesMake as koeiTecmoSalesMake, } from "../koeiTecmo/software_sales_koei_tecmo";
import { unitsMake as segaUnitsMake, collectionJSON as segaCollectionJSON, salesMake as segaSalesMake } from "../sega/software_sales_sega";
import { digitalContentsSalesMake, collectionJSON as capcomCollectionJSON, digitalContentsUnitsMake, digitalSalesMake, digitalUnitsMake, packageSalesMake, packageUnitsMake } from "../capcom/software_sales_Capcom";
import { notes2021, collectionJSON as squareEnixCollectionJSON, salesHDandMMOmake, unitsMake as squareEnixUnitsMake} from "../squareEnix/software_sales_square_enix";

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

const dateLabel = liner(border([spacer("Data as of September 30th, 2022", "Data as of September 30th, 2022".length+2, "left")]),"-", "bottom")

const bandaiNamcoCollection: bandaiNamcoCollectionJSON[] = [
    bandaiNamcoSoftwareSales2019,
    bandaiNamcoSoftwareSales2020,
    bandaiNamcoSoftwareSales2021,
    bandaiNamcoSoftwareSales2022,
    bandaiNamcoSoftwareSales2023,
];

const capcomCollection: capcomCollectionJSON[] = [
    capcomSoftwareSales2021,
    capcomSoftwareSales2022,
    capcomSoftwareSales2023,
];

const segaCollection: segaCollectionJSON[] = [
    segaSammySoftwareSales2020,
    segaSammySoftwareSales2021,
    segaSammySoftwareSales2022,
    segaSammySoftwareSales2023,
];

const koeiTecmoCollection: koeiTecmoCollectionJSON[] = [
    koeiTecmoSoftwareSales2019,
    koeiTecmoSoftwareSales2020,
    koeiTecmoSoftwareSales2021,
    koeiTecmoSoftwareSales2022,
    koeiTecmoSoftwareSales2023,
];

const squareEnixCollection: squareEnixCollectionJSON[] = [
    squareEnixSoftwareSales2020,
    squareEnixSoftwareSales2021,
    squareEnixSoftwareSales2022,
    squareEnixSoftwareSales2023,
];

const generalSalesHeader = 
`+---------------------------------------------------+
|              |             |          | Sales Per |
|              |             | Software |  Software |
|              |       Sales |    Units |      Unit |
+---------------------------------------------------+`;

const bandaiNamcoSales: Section[] = setMaker(bandaiNamcoCollection, bandaiNamcoSalesMake);

const bandaiNamcoUnits: Section[] = setMaker(bandaiNamcoCollection, bandaiNamcoUnitsMake);

const capcomDigitalContentsSales: Section[] = setMaker(capcomCollection, digitalContentsSalesMake);

const capcomDigitalContentsUnits: Section[] = setMaker(capcomCollection, digitalContentsUnitsMake);

const capcomPhysicalSales: Section[] = setMaker(capcomCollection, packageSalesMake);

const capcomPhysicalUnits: Section[] = setMaker(capcomCollection, packageUnitsMake);

const capcomDigitalSales: Section[] = setMaker(capcomCollection, digitalSalesMake);

const capcomDigitalUnits: Section[] = setMaker(capcomCollection, digitalUnitsMake);

const segaSales: Section[] = setMaker(segaCollection, segaSalesMake);

const segaUnits: Section[] = setMaker(segaCollection, segaUnitsMake);

const koeiTecmoSales: Section[] = setMaker(koeiTecmoCollection, koeiTecmoSalesMake);

const koeiTecmoUnits: Section[] = setMaker(koeiTecmoCollection, koeiTecmoUnitsMake);

const squareEnixSales: Section[] = setMaker(squareEnixCollection, salesHDandMMOmake);

const squareEnixUnits: Section[] = setMaker(squareEnixCollection, squareEnixUnitsMake);

function headerMaker(companyName: string) {

    let company = liner(border([spacer(companyName, companyName.length+1, "left")]), "-", "top")

    let subHeaderName = "Segment Information - Cumulative"

    let subHeader = liner(border([spacer(subHeaderName, subHeaderName.length+1, "left")]), "-", "both");

    return [company, subHeader].reduce((acc, next) => acc + "\n" + next)

};

function setMaker(collection: bandaiNamcoCollectionJSON[] | koeiTecmoCollectionJSON[] | capcomCollectionJSON[] | squareEnixCollectionJSON[] | segaCollectionJSON[], objectMaker: Function): Section[] {

    return collection.map((elem) => {

        let list: Section[] = objectMaker(elem);

        return list.map(value => {
            return { ...value, fiscalYear: elem.fiscalYear}
        })
    }).flatMap(elem => elem.filter((value, valueIndex) => valueIndex > 2)); 
};

const printSalesPerSoftwareUnitCumulative = (salesArray: Section[], softwareArray: Section[]): string => {

    let printLine = (length: number) => `+${"−".repeat(length)}+`;

    let printName = printLine(salesArray[0].name.length+2) + "\n" + printTextBlock(salesArray[0].name)(salesArray[0].name.length+2); 


    let salesPerSoftwareUnit = salesArray.map((elem, index, array) => {

        let printSales: string = `¥${(elem.value * 1000).toLocaleString("en")}M`;

        let printSalesFixed: string = (printSales.length >= 13)
            ? printSales
            : " ".repeat(13 - printSales.length) + printSales;
        
        
        let calculateSalesPerSoftware: number = Number(((elem.value * 1000) / (softwareArray[index].value / 1000)).toFixed(0));

        let printsegmentSalesPerSoftware: string = `¥${calculateSalesPerSoftware.toLocaleString("en")} `

        let printsegmentSalesPerSoftwareFixed: string = (printsegmentSalesPerSoftware.length >= 11)
                ? printsegmentSalesPerSoftware
                : " ".repeat(11 - printsegmentSalesPerSoftware.length) + printsegmentSalesPerSoftware;
            
        let printSoftwareUnits: string = `${softwareArray[index].value / 1000}M`

        
        let printSoftwareUnitsFixed: string = (printSoftwareUnits.length >= 10)
                ? printSoftwareUnits
                : " ".repeat(10 - printSoftwareUnits.length) + printSoftwareUnits;
        
        return "| " + elem.fiscalYear + " Cml.|" + printSalesFixed + "|" + printSoftwareUnitsFixed + "|" + printsegmentSalesPerSoftwareFixed + "|"; 
    });

    function sortList(list: Section[]) {

        const sortList = list.map((elem, index, array) => {
                return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
        }).sort((a, b) => { // (b,a) is descending order, (a,b) sorts in ascending order
            return (a.value > b.value)
                ? 1
                : (a.value < b.value)
                ? -1
                : 0 
        });

        return sortList
    };

    function sortValues(list: number[]) {

        const sortList = list.map((elem, index, array) => {
                return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
        }).sort((a, b) => { // (b,a) is descending order, (a,b) sorts in ascending order
            return (a > b)
                ? 1
                : (a < b)
                ? -1
                : 0 
        });

        return sortList
    };

    let sortedSales = sortList(salesArray);

    let sortedUnits = sortList(softwareArray);

    let sortedSalesSum = ((sortedSales.map(value => value.value).reduce((acc, next) => acc + next)) * 1000);

    let sortedUnitsSum = ((sortedUnits.map(value => value.value).reduce((acc, next) => acc + next)) / 1000);

    let salesPerSoftwareUnitUnsorted = salesArray.map((elem, index) => {
        return  Number(((elem.value * 1000) / (softwareArray[index].value / 1000)).toFixed(0));
    });

    let salesPerSoftwareUnitSorted = sortValues(salesPerSoftwareUnitUnsorted);

    let salesPerSoftwareUnitSum = salesPerSoftwareUnitUnsorted.reduce((acc, next) => acc + next); 

    let salesPerSoftwareUnitAverage = salesPerSoftwareUnitSum / salesArray.length;

    let printSalesSum: string = `¥${Number((sortedSalesSum).toFixed(0)).toLocaleString("en")}M`;

    let printUnitsSum: string = `${(sortedUnitsSum)}M`;
    
    let printSalesPerSoftwareUnitSum = `¥${Number((salesPerSoftwareUnitSum).toFixed(0)).toLocaleString("en")}`;

    let printAverageSales: string = `¥${Number(( sortedSalesSum / sortedSales.length).toFixed(0)).toLocaleString("en")}M`;

    let printAverageUnits: string = `${( sortedUnitsSum / sortedUnits.length).toFixed(2)}M`; 

    let printAverageSalesPerSoftware: string = `¥${Number(( salesPerSoftwareUnitAverage).toFixed(0)).toLocaleString("en")}`; 

    let printMedianSales: string = ((sortedSales.length % 2) !== 0) // odd number
            // median formula source: https://en.wikipedia.org/wiki/Median
            // odd number median(x) = x(n+1)/2 => index version => median(x) = (x(n+1)/2)-1
            ? `¥${((sortedSales[((sortedSales.length + 1)/2) -1].value) * 1000).toLocaleString("en")}M`
            // even number median(x) = (x(n/2) + x((n/2) + 1)) /2 => index version median(x) = (x((n/2)-1) + x((n/2))) /2
            : `¥${Number((((sortedSales[(sortedSales.length/2) -1].value + sortedSales[(sortedSales.length/2)].value)/2) * 1000).toFixed(0)).toLocaleString("en")}M`;
    
    
    let printMedianUnits: string = ((sortedUnits.length % 2) !== 0) // odd number
            ? `${(sortedUnits[((sortedUnits.length + 1)/2) -1].value / 1000).toFixed(2)}M`
            : `${Number((((sortedUnits[(sortedUnits.length/2) -1].value + sortedUnits[(sortedUnits.length/2)].value)/2) / 1000).toFixed(2))}M`;

    let printMedianSalesPerSoftwareUnit: string = ((salesPerSoftwareUnitSorted.length % 2) !== 0) // odd number
            ? `¥${salesPerSoftwareUnitSorted[((salesPerSoftwareUnitSorted.length + 1)/2) -1].toLocaleString("en")}`
            : `¥${Number(((salesPerSoftwareUnitSorted[(salesPerSoftwareUnitSorted.length/2) -1] + salesPerSoftwareUnitSorted[(salesPerSoftwareUnitSorted.length/2)])/2).toFixed(0)).toLocaleString("en")}`;

    let printMinSales: string = `¥${(sortedSales[0].value * 1000).toLocaleString("en")}M`;

    let printMinUnits: string = `${(sortedUnits[0].value / 1000)}M`;

    let printMinSalesPerSoftwareUnit: string = `¥${(salesPerSoftwareUnitSorted[0]).toLocaleString("en")}`;

    let printMaxSales: string = `¥${(sortedSales[sortedSales.length-1].value * 1000).toLocaleString("en")}M`;

    let printMaxUnits: string = `${(sortedUnits[sortedUnits.length-1].value / 1000)}M`;

    let printMaxSalesPerSoftwareUnit: string = `¥${(salesPerSoftwareUnitSorted[salesPerSoftwareUnitSorted.length-1]).toLocaleString("en")}`;


    let printCountRow: string = border([
        spacer("Count", 13, "left"),
        spacer(`${salesArray.length}`, 12, "right"),
        spacer("", 9, "left"),
        spacer("", 10, "left"),
    ]);

    let printSumRow: string = border([
        spacer("Sum", 13, "left"),
        spacer(printSalesSum, 12, "right"),
        spacer(printUnitsSum, 9, "right"),
        spacer(printSalesPerSoftwareUnitSum, 10, "right"),
    ]);

    let printAverageRow: string = border([
        spacer("Average", 13, "left"),
        spacer(printAverageSales, 12, "right"),
        spacer(printAverageUnits, 9, "right"),
        spacer(printAverageSalesPerSoftware, 10, "right")
    ]);

    let printMedianRow: string = border([
        spacer("Median", 13, "left"),
        spacer(printMedianSales, 12, "right"),
        spacer(printMedianUnits, 9, "right"),
        spacer(printMedianSalesPerSoftwareUnit, 10, "right")
    ]);

    let printMinRow: string = border([
        spacer("Minimum", 13, "left"),
        spacer(printMinSales, 12, "right"),
        spacer(printMinUnits, 9, "right"),
        spacer(printMinSalesPerSoftwareUnit, 10, "right")
    ]);

    let printMaxRow: string = liner(border([
        spacer("Maximum", 13, "left"),
        spacer(printMaxSales, 12, "right"),
        spacer(printMaxUnits, 9, "right"),
        spacer(printMaxSalesPerSoftwareUnit, 10, "right")
    ]),"-", "bottom");


    return [
        printName,
        generalSalesHeader,
        ...salesPerSoftwareUnit, 
        printLine(51),
        printCountRow,
        printSumRow,
        printAverageRow,
        printMedianRow,
        printMinRow,
        printMaxRow,
        (salesArray[0].notes === undefined) ? [] : printTextBlock(salesArray[0].notes)(51) + "\n" + printLine(51),
    ].flat().reduce((acc, next) => acc + "\n" + next);
};

export const bandaiNamcoSalesPerSoftwareUnitCml = [
    headerMaker("Bandai Namco"),
    dateLabel,
    printSalesPerSoftwareUnitCumulative(bandaiNamcoSales, bandaiNamcoUnits)
].reduce((acc, next) => acc + "\n" + next);

export const CapcomSalesPerSoftwareUnitCml = [
    headerMaker("Capcom"),
    dateLabel,
    printSalesPerSoftwareUnitCumulative(capcomDigitalContentsSales, capcomDigitalContentsUnits),
    printSalesPerSoftwareUnitCumulative(capcomDigitalSales, capcomDigitalUnits),
    printSalesPerSoftwareUnitCumulative(capcomPhysicalSales, capcomPhysicalUnits),
].reduce((acc, next) => acc + "\n" + next);

export const segaSammySalesPerSoftwareUnitCml = [
    headerMaker("Sega Sammy"),
    dateLabel,
    printSalesPerSoftwareUnitCumulative(segaSales, segaUnits)
].reduce((acc, next) => acc + "\n" + next);

export const koeiTecmoSalesPerSoftwareUnitCml = [
    headerMaker("Koei Tecmo"),
    dateLabel,
    printSalesPerSoftwareUnitCumulative(koeiTecmoSales, koeiTecmoUnits)
].reduce((acc, next) => acc + "\n" + next);

export const squareEnixSalesPerSoftwareUnitCml = [
    headerMaker("Square Enix"),
    dateLabel,
    printSalesPerSoftwareUnitCumulative(squareEnixSales, squareEnixUnits),
    notes2021,
    liner(border([spacer("See \"Data by Fiscal Year\" for HD Games and MMO sales splits", 60, "left")]),"-","both"),
].reduce((acc, next) => acc + "\n" + next);