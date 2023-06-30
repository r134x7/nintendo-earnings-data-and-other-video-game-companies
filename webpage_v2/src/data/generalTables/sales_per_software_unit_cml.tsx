import { printTextBlock, border, liner, spacer, dateLabel, headerPrint } from "../../utils/table_design_logic";
import { 
    type EarningsJSONV2, 
    type EarningsMakeV2, 
    getData, 
} from "./consolidated_earnings_general";
import { type EarningsV2, 
    printQuarterValuesV2, 
    printCumulativeValuesV2,
    EarningsValue,
} from "../../utils/general_earnings_logic";
import { generalSalesHeaderV2, salesPerSoftwareUnitCalculation, millionFix } from "../../utils/segment_data_logic";
import { 
    getConcat,
    getCount,
    getSum,
    printAverage,
    printCount,
    printMaximum,
    printMedian,
    printMininum,
    printStats,
    printSum, 
} from "./consolidated_earnings_cml_data";

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

function extractValue(value: EarningsValue): number | never[] {
    switch (value.kind) {
        case "Quarter":
           return  value.value
        
        case "Cumulative":
            return value.value
        
        case "Forecast":
            return value.value
        
        case "Nothing":
            return []
    
        default:
            // not the best default
            return [] 
    }
}
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

export const bandaiNamcoSalesPerSoftwareUnitCml = setMakerV2(bandaiNamcoCollection, 38,"Billion","One Thousand");

export const segaSammySalesPerSoftwareUnitCml = setMakerV2(segaCollection, 38, "Billion", "One Thousand");

export const koeiTecmoSalesPerSoftwareUnitCml = setMakerV2(koeiTecmoCollection, 38, "Million","One Thousand");

export const CapcomSalesPerSoftwareUnitCml = setMakerV2(capcomCollection, 38, "Billion", "One Thousand");

bandaiNamcoCollection.clear();
segaCollection.clear();
koeiTecmoCollection.clear();
capcomCollection.clear();

function setMakerV2(
    completeCollection: Map<number, EarningsJSONV2>, 
    headerLength: number,
    salesRoundtoMillion: "Billion" | "Million" | "Hundred Thousand" | "Ten Thousand" | "One Thousand",
    unitsRoundtoMillion: "Billion" | "Million" | "Hundred Thousand" | "Ten Thousand" | "One Thousand",
    ): string[] {

    const currentQuarter = completeCollection.get(completeCollection.size-1)?.currentQuarter ?? 4;

    const makeData = new Map<number, EarningsV2[]>();
    // completeCollection.forEach((value, key, map) => makeData.set(key, [...getData(value, value.data.length).values()]));

    completeCollection.forEach((value, key, map) => {
        if (value.data.length > 2) {
            for (let index = 0; index < value.data.length; index+= 2) {
                makeData.set(key, (makeData.get(key) ?? []).concat(
                    [...getData(
                        {
                            ...value,
                            data: [
                                map.get(key)?.data[index],
                                map.get(key)?.data[index+1],
                            ] as EarningsMakeV2[]
                        },
                        0
                    ).values()]
                ))
            }
        } else {
            makeData.set(key, [...getData(value, value.data.length).values()])
        }
    });

    const makeDateLabel = dateLabel(completeCollection.get(completeCollection.size-1)?.fiscalYear ?? "ERROR", currentQuarter);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

    const printOne = headerPrint([
            completeCollection.get(completeCollection.size-1)?.companyName ?? "ERROR",
            "Segment Information - Software Sales"
        ],headerLength) + "\n" + printDateLabel

    const printFootnotes = liner(printTextBlock(completeCollection.get(completeCollection.size-1)?.data[0].footnotes,50),"−","bottom",true,50)

    const millionFixData = new Map<number, EarningsV2[]>();

    makeData.forEach((value, key, map) => {

        for (let index = 0; index < value.length; index++) {
            
            console.log(value.length);
            

            millionFixData.set(key, 
                (millionFixData.get(key) ?? [])
                .concat(
                    {
                        ...value[index],
                    Q1QtrValue: millionFix(value[index].Q1QtrValue,(index % 2 === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    Q2QtrValue: millionFix(value[index].Q2QtrValue,(index % 2 === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    Q3QtrValue: millionFix(value[index].Q3QtrValue,(index % 2 === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    Q4QtrValue: millionFix(value[index].Q4QtrValue,(index % 2 === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    Q1CmlValue: millionFix(value[index].Q1CmlValue,(index % 2 === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    Q2CmlValue: millionFix(value[index].Q2CmlValue,(index % 2 === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    Q3CmlValue: millionFix(value[index].Q3CmlValue,(index % 2 === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    Q4CmlValue: millionFix(value[index].Q4CmlValue,(index % 2 === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    forecastThisFY: millionFix(value[index].forecastThisFY,(index % 2 === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    forecastRevision1: millionFix(value[index].forecastRevision1,(index % 2 === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    forecastRevision2: millionFix(value[index].forecastRevision2,(index % 2 === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    forecastRevision3: millionFix(value[index].forecastRevision3,(index % 2 === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    forecastNextFY: millionFix(value[index].forecastNextFY,(index % 2 === 0) ? salesRoundtoMillion : unitsRoundtoMillion),
                    } satisfies EarningsV2
                )
            )
        }
    })

    millionFixData.forEach((value, key, map) => {

        for (let index = 0; index < value.length; index+= 2) {

            map.set(key, (map.get(key) ?? []).concat( {
                name: value[index].name + " Sales Per Software Unit",
                Q1QtrValue: salesPerSoftwareUnitCalculation(value[index].Q1QtrValue, value[index+1].Q1QtrValue),
                Q2QtrValue: salesPerSoftwareUnitCalculation(value[index].Q2QtrValue, value[index+1].Q2QtrValue),
                Q3QtrValue: salesPerSoftwareUnitCalculation(value[index].Q3QtrValue, value[index+1].Q3QtrValue),
                Q4QtrValue: salesPerSoftwareUnitCalculation(value[index].Q4QtrValue, value[index+1].Q4QtrValue),
                Q1CmlValue: salesPerSoftwareUnitCalculation(value[index].Q1CmlValue, value[index+1].Q1CmlValue),
                Q2CmlValue: salesPerSoftwareUnitCalculation(value[index].Q2CmlValue, value[index+1].Q2CmlValue),
                Q3CmlValue: salesPerSoftwareUnitCalculation(value[index].Q3CmlValue, value[index+1].Q3CmlValue),
                Q4CmlValue: salesPerSoftwareUnitCalculation(value[index].Q4CmlValue, value[index+1].Q4CmlValue),
                forecastThisFY: salesPerSoftwareUnitCalculation(value[index].forecastThisFY, value[index+1].forecastThisFY),
                forecastRevision1: salesPerSoftwareUnitCalculation(value[index].forecastRevision1, value[index+1].forecastRevision1),
                forecastRevision2: salesPerSoftwareUnitCalculation(value[index].forecastRevision2, value[index+1].forecastRevision2),
                forecastRevision3: salesPerSoftwareUnitCalculation(value[index].forecastRevision3, value[index+1].forecastRevision3),
                forecastNextFY: salesPerSoftwareUnitCalculation(value[index].forecastNextFY, value[index+1].forecastNextFY),
                footnotes: value[index].footnotes
            } satisfies EarningsV2));

        }

        // map.set(key, value.concat( {
        //     name: "Sales Per Software Unit",
        //     Q1QtrValue: salesPerSoftwareUnitCalculation(value[0].Q1QtrValue, value[1].Q1QtrValue),
        //     Q2QtrValue: salesPerSoftwareUnitCalculation(value[0].Q2QtrValue, value[1].Q2QtrValue),
        //     Q3QtrValue: salesPerSoftwareUnitCalculation(value[0].Q3QtrValue, value[1].Q3QtrValue),
        //     Q4QtrValue: salesPerSoftwareUnitCalculation(value[0].Q4QtrValue, value[1].Q4QtrValue),
        //     Q1CmlValue: salesPerSoftwareUnitCalculation(value[0].Q1CmlValue, value[1].Q1CmlValue),
        //     Q2CmlValue: salesPerSoftwareUnitCalculation(value[0].Q2CmlValue, value[1].Q2CmlValue),
        //     Q3CmlValue: salesPerSoftwareUnitCalculation(value[0].Q3CmlValue, value[1].Q3CmlValue),
        //     Q4CmlValue: salesPerSoftwareUnitCalculation(value[0].Q4CmlValue, value[1].Q4CmlValue),
        //     forecastThisFY: salesPerSoftwareUnitCalculation(value[0].forecastThisFY, value[1].forecastThisFY),
        //     forecastRevision1: salesPerSoftwareUnitCalculation(value[0].forecastRevision1, value[1].forecastRevision1),
        //     forecastRevision2: salesPerSoftwareUnitCalculation(value[0].forecastRevision2, value[1].forecastRevision2),
        //     forecastRevision3: salesPerSoftwareUnitCalculation(value[0].forecastRevision3, value[1].forecastRevision3),
        //     forecastNextFY: salesPerSoftwareUnitCalculation(value[0].forecastNextFY, value[1].forecastNextFY),
        //     footnotes: value[0].footnotes
        // } satisfies EarningsV2));
    })
    
    millionFixData.forEach((value, key, map) => {
       if (value.length > 3) {

        let x = [...value.values()]
        /*
            0, 1, 6,    1, 2, 7 
            2, 3, 7,    3, 4, 8
            4, 5, 8     5, 6, 9
9 / 3 = 3
0, 1, (2x3 + 1) = 
            0 + 6
            1 + 6 = 7
            2 + 6 = 8
            3 + 6 = 9
            0, 1, 6,    2x3 = 6 - 0
            2, 3, 7,    2x3 = 
            4, 5, 8     5, 6, 9

            0 + 8
            1 + 8 = 9
            2 + 8 = 10
            3 + 8 = 11
            2x4 = 8
            0, 1, 8
            2, 3, 9
            4, 5, 10
            6, 7, 11

            length was 6
            now it's 9
            6 / 2 = 3

            n, (n+1) = (n + (n+1)) * length
            0 + 1 = 5
            2 + 3 = 2
            4 + 5 = -1

            0, 1, 2

            0, 1, 4,
            2, 3, 5
        */
        // map.set(key, )
        
       } 
    })
    

    const mainBody = printAllValues(millionFixData);

    const mapBody = mainBody.map(elem => printOne + elem + printFootnotes);

    return mapBody
}

function printAllValues(list: Map<number, EarningsV2[]>): string[] {


        function sectionHeader(name: string | undefined, textLength: number): string {
            return liner(border([
            spacer(name ?? "Error", textLength,"left"),
            ]),"−","top", true);
        } 

        const toReturn = new Map<number, string[]>([
            [0, [sectionHeader(list.get(0)?.[0]?.name, 35) + generalSalesHeaderV2(21,12,9,10,7)]],
            [1, [sectionHeader(list.get(0)?.[0]?.name, 35) + generalSalesHeaderV2(21,12,9,10,7)]],
            [2, [sectionHeader(list.get(0)?.[0]?.name, 35) + generalSalesHeaderV2(21,12,9,10,7)]],
            [3, [sectionHeader(list.get(0)?.[0]?.name, 35) + generalSalesHeaderV2(21,12,9,10,7)]],
            [4, [sectionHeader(list.get(0)?.[0]?.name, 34) + generalSalesHeaderV2(18,12,9,10,7)]],
            [5, [sectionHeader(list.get(0)?.[0]?.name, 44) + generalSalesHeaderV2(17,12,9,10,7)]],
            [6, [sectionHeader(list.get(0)?.[0]?.name, 37) + generalSalesHeaderV2(17,12,9,10,7)]],
        ])

        const totalTextLength = new Map<number, number>([
            [0, 59],
            [1, 59],
            [2, 59],
            [3, 59],
            [4, 56],
            [5, 55],
            [6, 55],
        ]);

        const getValues = new Map<number, number[]>();

        list.forEach((value, key, map) => {

            const getFiscalYear = (value[0].Q4CmlValue.kind === "Cumulative") ? value[0].Q4CmlValue.thisFY.slice(0, -4) : "ERROR" 

            for (let index = 0; index < value.length; index++) {

                const getTextLength = (index === 0) ? 12 : (index === 1) ? 11 : 11;

                const newLine = (index === 2) ? "\n" : ""

                toReturn.set(0, (toReturn.get(0) ?? []).concat(
                    (value[index].Q1QtrValue.kind === "Nothing")
                    ? []
                    : printQuarterValuesV2(
                        value[index].Q1QtrValue, 
                        0, 
                        getTextLength,
                        (index === 0) ? false : true, 
                        (index === 2 ? "None" : undefined),
                        getFiscalYear) + newLine
                      )
                ) 

                toReturn.set(1, (toReturn.get(1) ?? []).concat(
                    (value[index].Q2QtrValue.kind === "Nothing")
                    ? []
                    : printQuarterValuesV2(value[index].Q2QtrValue, 0, getTextLength,(index === 0) ? false : true, (index === 2 ? "None" : undefined),getFiscalYear) + newLine
                    )
                ) 

                toReturn.set(2, (toReturn.get(2) ?? []).concat(
                    (value[index].Q3QtrValue.kind === "Nothing")
                    ? []
                    : printQuarterValuesV2(value[index].Q3QtrValue, 0, getTextLength,(index === 0) ? false : true, (index === 2 ? "None" : undefined),getFiscalYear) + newLine
                    )
                ) 

                toReturn.set(3, (toReturn.get(3) ?? []).concat(
                    (value[index].Q4QtrValue.kind === "Nothing")
                    ? []
                    : printQuarterValuesV2(value[index].Q4QtrValue, 0, getTextLength,(index === 0) ? false : true, (index === 2 ? "None" : undefined),getFiscalYear) + newLine
                    )
                ) 

                toReturn.set(4, (toReturn.get(4) ?? []).concat(
                    (value[index].Q2CmlValue.kind === "Nothing")
                    ? []
                    : printCumulativeValuesV2(value[index].Q2CmlValue, 0, getTextLength,(index === 0) ? false : true, (index === 2 ? "None" : undefined),getFiscalYear) + newLine
                    )
                ) 

                toReturn.set(5, (toReturn.get(5) ?? []).concat(
                    (value[index].Q3CmlValue.kind === "Nothing")
                    ? []
                    : printCumulativeValuesV2(value[index].Q3CmlValue, 0, getTextLength,(index === 0) ? false : true, (index === 2 ? "None" : undefined),getFiscalYear) + newLine
                    )
                ) 

                toReturn.set(6, (toReturn.get(6) ?? []).concat(
                    (value[index].Q4CmlValue.kind === "Nothing")
                    ? []
                    : printCumulativeValuesV2(value[index].Q4CmlValue, 0, getTextLength,(index === 0) ? false : true, (index === 2 ? "None" : undefined),getFiscalYear) + newLine
                    )
                ) 

                // sales, units, sales per software unit. key + (index * 7)
                getValues.set(0 + (index * 7), (getValues.get(0 + (index * 7)) ?? []).concat(extractValue(value[index].Q1QtrValue)))
                getValues.set(1 + (index * 7), (getValues.get(1 + (index * 7)) ?? []).concat(extractValue(value[index].Q2QtrValue)))
                getValues.set(2 + (index * 7), (getValues.get(2 + (index * 7)) ?? []).concat(extractValue(value[index].Q3QtrValue)))
                getValues.set(3 + (index * 7), (getValues.get(3 + (index * 7)) ?? []).concat(extractValue(value[index].Q4QtrValue)))
                getValues.set(4 + (index * 7), (getValues.get(4 + (index * 7)) ?? []).concat(extractValue(value[index].Q2CmlValue)))
                getValues.set(5 + (index * 7), (getValues.get(5 + (index * 7)) ?? []).concat(extractValue(value[index].Q3CmlValue)))
                getValues.set(6 + (index * 7), (getValues.get(6 + (index * 7)) ?? []).concat(extractValue(value[index].Q4CmlValue)))

            }

        })

        const getTextLength = new Map<number, number>([
            [0,21],
            [1,21],
            [2,21],
            [3,21],
            [4,18],
            [5,17],
            [6,17],
        ]);

        toReturn.forEach((value, key, map) => {
            // console.log(value.length);
            // toReturnTextLength = value.length;
            // let nextLineCheck = (key === map.size -1) ? "" : "\n";
            // console.log(value);
            // const keyCheck = -3
            // console.log(value);
            
            // getTextLength.set(key, value[1].length + value[3].length + value[5].length)
            // getTextLength.set(key, value[1].slice(0, -17).length)
            // totalTextLength.set(key, value[1].length + value[3].length + value[5].length + keyCheck);
            // console.log(value);
            
                       
            toReturn.set(key, [value.reduce((acc, next, index, array) => acc + next) /*+ nextLineCheck*/])
        })

        
        
    toReturn.forEach((value, key, map) => {
    // list.forEach((value, key, map) => {

        // let getTextLength = (offset: number) => (map.get(key)?.at(-2)?.length === undefined)
        // let getTextLength = (offset: number) => (toReturnTextLength === undefined)
        //     ? 0
        //     : (toReturnTextLength) - offset 
        
            // console.log(map.get(key));
            
        // let getTextLength = (x: number) => x
        // const [sales, units, salesPerSoftwareUnit] = getValues.get(key) ?? [0, 0, 0];
        // console.log(getValues.get(key));
        // (key + (index * 7))
        
        // console.log(value.length);
        // console.log([...value].length);

        map.set(key, (map.get(key) ?? []).concat(
                printStats(
                    // [printCount([sales], getTextLength(21),12,false,false)]
                    [
                        printCount(getValues.get(key) ?? [0], getTextLength.get(key) ?? 10,12,false,false),
                        printCount(getValues.get(key + (1 * 7)) ?? [0], getTextLength.get(key) ?? 10,11,false,true),
                        printCount(getValues.get(key + (2 * 7)) ?? [0], getTextLength.get(key) ?? 10,11,true,true),
                        printSum(getValues.get(key) ?? [0],  getTextLength.get(key) ?? 10, 12,"Million","¥",0,false,false),
                        printSum(getValues.get(key + (1 * 7)) ?? [0],  getTextLength.get(key) ?? 10, 11,"Million","None",2,false,true),
                        printSum(getValues.get(key + (2 * 7)) ?? [0],  getTextLength.get(key) ?? 10, 11,"None","¥",0,true,true),
                        printAverage(getValues.get(key) ?? [0],  getTextLength.get(key) ?? 10,12,"Million","¥",0,false,false),
                        printAverage(getValues.get(key + (1 * 7)) ?? [0],  getTextLength.get(key) ?? 10,11,"Million","None",2,false,true),
                        printAverage(getValues.get(key + (2 * 7)) ?? [0],  getTextLength.get(key) ?? 10,11,"None","¥",0,true,true),
                        printMedian(getValues.get(key) ?? [0],  getTextLength.get(key) ?? 10,12,"Million","¥",0,false,false),
                        printMedian(getValues.get(key + (1 * 7)) ?? [0],  getTextLength.get(key) ?? 10,11,"Million","None",2,false,true),
                        printMedian(getValues.get(key + (2 * 7)) ?? [0],  getTextLength.get(key) ?? 10,11,"None","¥",0,true,true),
                        printMininum(getValues.get(key) ?? [0],  getTextLength.get(key) ?? 10,12,"Million","¥",false,false),
                        printMininum(getValues.get(key + (1 * 7)) ?? [0],  getTextLength.get(key) ?? 10,11,"Million","None",false,true),
                        printMininum(getValues.get(key + (2 * 7)) ?? [0],  getTextLength.get(key) ?? 10,11,"None","¥",true,true),
                        printMaximum(getValues.get(key) ?? [0],  getTextLength.get(key) ?? 10,12,"Million","¥",false,false),
                        printMaximum(getValues.get(key + (1 * 7)) ?? [0],  getTextLength.get(key) ?? 10,11,"Million","None",false,true),
                        printMaximum(getValues.get(key + (2 * 7)) ?? [0],  getTextLength.get(key) ?? 10,11,"None","¥",false,true),
                    ].flat()
                // , getTextLength(-24) ?? 0),
                , totalTextLength.get(key) ?? 60),
        ))
        
        
        // for (let index = 0; index < 3; index++) {

        //     let indexCheck = (index !== 1) ? 11 : 12; 
        //     let columnCheck = (index !== 0) ? true : false;

        //     toReturn.set(key, (toReturn.get(key) ?? []).concat(
        //         // printStats(
        //             printCount(getValues.get(key + (index * 7)) ?? [0], getTextLength(21),indexCheck,false,columnCheck).concat(
        //                 printSum(getValues.get(key + (index * 7)) ?? [0], getTextLength(21),indexCheck,
        //                 (index !== 2) ? "Million" : "None", (index !== 1) ? "¥" : "None",false,columnCheck 
        //                 ),
        //                 printAverage(getValues.get(key + (index * 7)) ?? [0], getTextLength(21),indexCheck,
        //                 (index !== 2) ? "Million" : "None", (index !== 1) ? "¥" : "None", 
        //                 (index !== 1) ? 0 : 2,false,columnCheck
        //                 ),
        //                 printMinMedianMax(getValues.get(key + (index * 7)) ?? [0], getTextLength(21),indexCheck,
        //                 (index !== 2) ? "Million" : "None", (index !== 1) ? "¥" : "None", 
        //                 (index !== 1) ? 0 : 2,false,columnCheck
        //                 ),
        //             )
        //         // , getTextLength(3) ?? 0),
        //     ))
            
            // console.log(
            //     printStats(
            //         printCount(getValues.get(key + (index * 7)) ?? [0], getTextLength(21)).concat(
            //             printSum(getValues.get(key + (index * 7)) ?? [0], getTextLength(21)),
            //             printAverage(getValues.get(key + (index * 7)) ?? [0], getTextLength(21)),
            //             printMinMedianMax(getValues.get(key + (index * 7)) ?? [0], getTextLength(21)),
            //         )
            //     , getTextLength(3) ?? 0),
            // );
            
        // }
    })

    // console.log(toReturn);
    

    return [
        getConcat(toReturn.get(0)),
        getConcat(toReturn.get(1)),
        getConcat(toReturn.get(2)),
        getConcat(toReturn.get(3)),
        getConcat(toReturn.get(4)),
        getConcat(toReturn.get(5)),
        getConcat(toReturn.get(6)),
    ]

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
