import { printTextBlock } from "../../utils/bandai_namco_annual_report_logic"
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

const bandaiNamcoSales: Section[] = setMaker(bandaiNamcoCollection, salesHomeVideoGameMake);

const bandaiNamcoUnits: Section[] = setMaker(bandaiNamcoCollection, unitsMake);

function setMaker(collection: collectionJSON[], objectMaker: Function): Section[] {

    return collection.map((elem) => {

        let list: Section[] = objectMaker(elem);

        return list.map(value => {
            return { ...value, fiscalYear: elem.fiscalYear}
        })
    }).flatMap(elem => elem.filter((value, valueIndex) => valueIndex > 2)); 
};

const printSalesPerSoftwareUnitCumulative = (salesArray: Section[], softwareArray: Section[]): string => {

    let printName = printTextBlock(salesArray[0].name)(50);

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
        
        return "|" + elem.fiscalYear + " Cml.|" + printSalesFixed + "|" + printSoftwareUnitsFixed + "|" + printsegmentSalesPerSoftwareFixed + "|"; 
    });

    return [printName, ...salesPerSoftwareUnit].reduce((acc, next) => acc + "\n" + next);
};

export const bandaiNamcoSalesPerSoftwareUnitCml = printSalesPerSoftwareUnitCumulative(bandaiNamcoSales, bandaiNamcoUnits);