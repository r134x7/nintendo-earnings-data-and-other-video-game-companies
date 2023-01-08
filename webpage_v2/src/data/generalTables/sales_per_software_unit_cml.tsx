import { printTextBlock, border, liner, spacer } from "../../utils/table_design_logic";
import { Section } from "../../utils/segment_data_logic";

import { unitsMake, salesHomeVideoGameMake, collectionJSON, salesOrUnitsJSON } from "../bandaiNamco/software_sales_bandai_namco";

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

const dateLabel = "| Data as of September 30th, 2022   |\n+" + "-".repeat(35) + "+"

const bandaiNamcoCollection: collectionJSON[] = [
    bandaiNamcoSoftwareSales2019,
    bandaiNamcoSoftwareSales2020,
    bandaiNamcoSoftwareSales2021,
    bandaiNamcoSoftwareSales2022,
    bandaiNamcoSoftwareSales2023,
];

const capcomCollection = [
    capcomSoftwareSales2021,
    capcomSoftwareSales2022,
    capcomSoftwareSales2023,
];

const segaCollection = [
    segaSammySoftwareSales2020,
    segaSammySoftwareSales2021,
    segaSammySoftwareSales2022,
    segaSammySoftwareSales2023,
];

const koeiTecmoCollection = [
    koeiTecmoSoftwareSales2019,
    koeiTecmoSoftwareSales2020,
    koeiTecmoSoftwareSales2021,
    koeiTecmoSoftwareSales2022,
    koeiTecmoSoftwareSales2023,
];

const squareEnixCollection = [
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

const bandaiNamcoSales: Section[] = setMaker(bandaiNamcoCollection, salesHomeVideoGameMake);

const bandaiNamcoUnits: Section[] = setMaker(bandaiNamcoCollection, unitsMake);

function headerMaker(companyName: string) {

    let company = liner(border([spacer(companyName, companyName.length+1, "left")]), "-", "top")

    let subHeaderName = "Segment Information - Cumulative"

    let subHeader = liner(border([spacer(subHeaderName, subHeaderName.length+1, "left")]), "-", "both");

    return [company, subHeader].reduce((acc, next) => acc + "\n" + next)

};

function setMaker(collection: collectionJSON[], objectMaker: Function): Section[] {

    return collection.map((elem) => {

        let list: Section[] = objectMaker(elem);

        return list.map(value => {
            return { ...value, fiscalYear: elem.fiscalYear}
        })
    }).flatMap(elem => elem.filter((value, valueIndex) => valueIndex > 2)); 
};

const printSalesPerSoftwareUnitCumulative = (salesArray: Section[], softwareArray: Section[]): string => {

    let printLine = (length: number) => `+${"-".repeat(length)}+`;

    let printName = printLine(salesArray[0].name.length+2) + "\n" + printTextBlock(salesArray[0].name)(salesArray[0].name.length+2); 

    let salesPerSoftwareUnit = salesArray.map((elem, index, array) => {

        let printSales: string = `¥${(elem.value * 1000).toLocaleString("en")}M `;

        let printSalesFixed: string = (printSales.length >= 13)
            ? printSales
            : " ".repeat(13 - printSales.length) + printSales;
        
        
        let calculateSalesPerSoftware: number = Number(((elem.value * 1000) / (softwareArray[index].value / 1000)).toFixed(0));

        let printsegmentSalesPerSoftware: string = `¥${calculateSalesPerSoftware.toLocaleString("en")} `

        let printsegmentSalesPerSoftwareFixed: string = (printsegmentSalesPerSoftware.length >= 11)
                ? printsegmentSalesPerSoftware
                : " ".repeat(11 - printsegmentSalesPerSoftware.length) + printsegmentSalesPerSoftware;
            
        let printSoftwareUnits: string = `${softwareArray[index].value / 1000}M `

        
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

    // let sortedSales = sortList(salesArray);

    // let sortedUnits = sortList(softwareArray);

    // let sortedSalesSum = ((sortedSales.map(value => value.value).reduce((acc, next) => acc + next)) * 1000);

    // let sortedUnitsSum = ((sortedUnits.map(value => value.value).reduce((acc, next) => acc + next)) / 1000);

    // let sortedSalesPerSoftwareSum = sortedSalesSum / sortedUnitsSum;

    // let printAverageSales: string = `¥${Number(( sortedSalesSum / sortedSales.length).toFixed(0)).toLocaleString("en")}M`;

    // let printAverageUnits: string = `${( sortedUnitsSum / sortedUnits.length).toFixed(3)}M`; 

    // let printAverageSalesPerSoftware: string = `¥${Number(( sortedSalesPerSoftwareSum ).toFixed(0)).toLocaleString("en")}`; 

    // need to fix issue with sales per software unit average...
    
    // let printCountRow: string = border([
    //     spacer("Count", 13, "left"),
    //     spacer(`${salesArray.length}`, 12, "right"),
    //     spacer("", 9, "left"),
    //     spacer("", 10, "left"),
    // ]);

    // let printAverageRow: string =  border([
    //     spacer("Average", 13, "left"),
    //     spacer(printAverageSales, 12, "right"),
    //     spacer(printAverageUnits, 9, "right"),
    //     spacer(printAverageSalesPerSoftware, 10, "right")
    // ]);

    return [
        printName,
        generalSalesHeader,
        ...salesPerSoftwareUnit, 
        printLine(51),
        // printCountRow,
        // printAverageRow,
    ].reduce((acc, next) => acc + "\n" + next);
};

export const bandaiNamcoSalesPerSoftwareUnitCml = [
    headerMaker("Bandai Namco"),
    printSalesPerSoftwareUnitCumulative(bandaiNamcoSales, bandaiNamcoUnits)
].reduce((acc, next) => acc + "\n" + next);  
        