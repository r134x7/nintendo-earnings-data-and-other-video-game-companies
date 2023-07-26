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

import capcomSoftwareSales2024 from "../capcom/Software_Sales/software_sales_fy3_2024.json";
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
import { notes2021 } from "../squareEnix/software_sales_square_enix";

export function extractValue(value: EarningsValue): number | never[] {
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
    capcomCollection.set(capcomCollection.size,capcomSoftwareSales2024);

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


export const bandaiNamcoSalesPerSoftwareUnitCml = setMakerV2(bandaiNamcoCollection, 38,"Billion","One Thousand");

export const segaSammySalesPerSoftwareUnitCml = setMakerV2(segaCollection, 38, "Billion", "One Thousand");

export const koeiTecmoSalesPerSoftwareUnitCml = setMakerV2(koeiTecmoCollection, 38, "Million","One Thousand");

export const CapcomSalesPerSoftwareUnitCml = setMakerV2(capcomCollection, 38, "Hundred Million", "One Thousand");

export const squareEnixSalesPerSoftwareUnitCml = setMakerV2(squareEnixCollection, 38, "Billion", "One Thousand").map(elem => elem + notes2021);

bandaiNamcoCollection.clear();
segaCollection.clear();
koeiTecmoCollection.clear();
capcomCollection.clear();
squareEnixCollection.clear();

function setMakerV2(
    completeCollection: Map<number, EarningsJSONV2>, 
    headerLength: number,
    salesRoundtoMillion: "Billion" | "Hundred Million" | "Million" | "Hundred Thousand" | "Ten Thousand" | "One Thousand",
    unitsRoundtoMillion: "Billion" | "Hundred Million" | "Million" | "Hundred Thousand" | "Ten Thousand" | "One Thousand",
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

    const millionFixData = new Map<number, EarningsV2[]>();

    makeData.forEach((value, key, map) => {

        for (let index = 0; index < value.length; index++) {
            
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
    })

    let multipleData = 1;
    
    millionFixData.forEach((value, key, map) => {
       if (value.length > 3) {

        const allValues = [...value.values()];
        
        const dataTypesCount = 3;

        const n = allValues.length / dataTypesCount;

        multipleData = n;

        let xIncrement = 0;

        for (let index = 0; index < 2*n; index+= 2) {
            if (index === 0) {
                map.set(key, [allValues[index], allValues[index+1], allValues[(index + (2*n))]])
            } else {
                map.set(key, (map.get(key) ?? []).concat(
                    [allValues[index], allValues[index+1], allValues[(xIncrement + (2*n))]]
                ))
            }
            xIncrement++;
        }
        
        /*
        (2 * n) = 2n
        n = length of all data / 3 where 3 is [sales, units, salesPerSoftwareUnit]
        2x3 = 6
        extracting third piece of data needed
        increment x = 0
        index 0, 1, (0+6) x++ -> 0, 1, 6,    
        index 2, 3, (1+6) x++ -> 2, 3, 7,    
        index 4, 5, (2+6) x++ -> 4, 5, 8     
        */
       } 
    })
    
    const mainBody = printAllValues(millionFixData, multipleData);

    const mapBody = mainBody.map(elem => printOne + elem);

    return mapBody
}

function printAllValues(list: Map<number, EarningsV2[]>, loops: number): string[] {

    const dataToReturn = new Map<number, string[]>();

  for (let theta = 0; theta < loops; theta++) {
            
        function sectionHeader(name: string | undefined, textLength: number): string {
            return liner(border([
            spacer(name ?? "Error", textLength,"left"),
            ]),"−","top", true);
        } 

        const getFootnotes = liner(printTextBlock(list.get(0)?.[theta * 3].footnotes,54),"−","bottom",true,54);

            // sets the segment's header
            dataToReturn.set(0, (dataToReturn.get(0) ?? []).concat([sectionHeader(list.get(0)?.[/*0*/theta * 3]?.name, 58) + generalSalesHeaderV2(21,12,9,10,7)]))
            dataToReturn.set(1, (dataToReturn.get(1) ?? []).concat([sectionHeader(list.get(0)?.[/*0*/theta * 3]?.name, 58) + generalSalesHeaderV2(21,12,9,10,7)]))
            dataToReturn.set(2, (dataToReturn.get(2) ?? []).concat([sectionHeader(list.get(0)?.[/*0*/theta * 3]?.name, 58) + generalSalesHeaderV2(21,12,9,10,7)]))
            dataToReturn.set(3, (dataToReturn.get(3) ?? []).concat([sectionHeader(list.get(0)?.[/*0*/theta * 3]?.name, 58) + generalSalesHeaderV2(21,12,9,10,7)]))
            dataToReturn.set(4, (dataToReturn.get(4) ?? []).concat([sectionHeader(list.get(0)?.[/*0*/theta * 3]?.name, 55) + generalSalesHeaderV2(18,12,9,10,7)]))
            dataToReturn.set(5, (dataToReturn.get(5) ?? []).concat([sectionHeader(list.get(0)?.[/*0*/theta * 3]?.name, 54) + generalSalesHeaderV2(17,12,9,10,7)]))
            dataToReturn.set(6, (dataToReturn.get(6) ?? []).concat([sectionHeader(list.get(0)?.[/*0*/theta * 3]?.name, 54) + generalSalesHeaderV2(17,12,9,10,7)]))

        const toReturn = new Map<number, string[]>();

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

            const valueConstraint = (theta * 3) + 3; 

            for (let index = theta*3; index < valueConstraint; index++) {

                const getTextLength = (index % 3 === 0) ? 12 : (index % 3 === 1) ? 11 : 11;

                toReturn.set(0, (toReturn.get(0) ?? []).concat(
                    (value[index].Q1QtrValue.kind === "Nothing")
                    ? []
                    : printQuarterValuesV2(
                        value[index].Q1QtrValue, 
                        0, 
                        getTextLength,
                        (index % 3 === 0) ? false : true, 
                        (index % 3 === 2 ? "None" : undefined),
                        getFiscalYear),
                    ).concat((index % 3 === 2 && (toReturn.get(0)?.length ?? -1) > 0) ? "\n" : []),
                ) 

                toReturn.set(1, (toReturn.get(1) ?? []).concat(
                    (value[index].Q2QtrValue.kind === "Nothing")
                    ? []
                    : printQuarterValuesV2(value[index].Q2QtrValue, 0, getTextLength,(index % 3 === 0) ? false : true, (index % 3 === 2 ? "None" : undefined),getFiscalYear)
                    ).concat((index % 3 === 2 && (toReturn.get(1)?.length ?? -1) > 0) ? "\n" : [])
                ) 

                toReturn.set(2, (toReturn.get(2) ?? []).concat(
                    (value[index].Q3QtrValue.kind === "Nothing")
                    ? []
                    : printQuarterValuesV2(value[index].Q3QtrValue, 0, getTextLength,(index % 3 === 0) ? false : true, (index % 3 === 2 ? "None" : undefined),getFiscalYear)).concat((index % 3 === 2 && (toReturn.get(2)?.length ?? -1) > 0) ? "\n" : [])
                ) 

                toReturn.set(3, (toReturn.get(3) ?? []).concat(
                    (value[index].Q4QtrValue.kind === "Nothing")
                    ? []
                    : printQuarterValuesV2(value[index].Q4QtrValue, 0, getTextLength,(index % 3 === 0) ? false : true, (index % 3 === 2 ? "None" : undefined),getFiscalYear)).concat((index % 3 === 2 && (toReturn.get(3)?.length ?? -1) > 0) ? "\n" : [])
                ) 

                toReturn.set(4, (toReturn.get(4) ?? []).concat(
                    (value[index].Q2CmlValue.kind === "Nothing")
                    ? []
                    : printCumulativeValuesV2(value[index].Q2CmlValue, 0, getTextLength,(index % 3 === 0) ? false : true, (index % 3 === 2 ? "None" : undefined),getFiscalYear)).concat((index % 3 === 2 && (toReturn.get(4)?.length ?? -1) > 0) ? "\n" : [])
                ) 

                toReturn.set(5, (toReturn.get(5) ?? []).concat(
                    (value[index].Q3CmlValue.kind === "Nothing")
                    ? []
                    : printCumulativeValuesV2(value[index].Q3CmlValue, 0, getTextLength,(index % 3 === 0) ? false : true, (index % 3 === 2 ? "None" : undefined),getFiscalYear)).concat((index % 3 === 2 && (toReturn.get(5)?.length ?? -1) > 0) ? "\n" : [])
                ) 

                toReturn.set(6, (toReturn.get(6) ?? []).concat(
                    (value[index].Q4CmlValue.kind === "Nothing")
                    ? []
                    : printCumulativeValuesV2(value[index].Q4CmlValue, 0, getTextLength,(index % 3 === 0) ? false : true, (index % 3 === 2 ? "None" : undefined),getFiscalYear)).concat((index % 3 === 2 && (toReturn.get(6)?.length ?? -1) > 0) ? "\n" : [])
                ) 

                let getCorrectIndex = index % 3;
                // sales, units, sales per software unit. key + (index * 7)
                getValues.set(0 + (getCorrectIndex * 7), (getValues.get(0 + (getCorrectIndex * 7)) ?? []).concat(extractValue(value[index].Q1QtrValue)))
                getValues.set(1 + (getCorrectIndex * 7), (getValues.get(1 + (getCorrectIndex * 7)) ?? []).concat(extractValue(value[index].Q2QtrValue)))
                getValues.set(2 + (getCorrectIndex * 7), (getValues.get(2 + (getCorrectIndex * 7)) ?? []).concat(extractValue(value[index].Q3QtrValue)))
                getValues.set(3 + (getCorrectIndex * 7), (getValues.get(3 + (getCorrectIndex * 7)) ?? []).concat(extractValue(value[index].Q4QtrValue)))
                getValues.set(4 + (getCorrectIndex * 7), (getValues.get(4 + (getCorrectIndex * 7)) ?? []).concat(extractValue(value[index].Q2CmlValue)))
                getValues.set(5 + (getCorrectIndex * 7), (getValues.get(5 + (getCorrectIndex * 7)) ?? []).concat(extractValue(value[index].Q3CmlValue)))
                getValues.set(6 + (getCorrectIndex * 7), (getValues.get(6 + (getCorrectIndex * 7)) ?? []).concat(extractValue(value[index].Q4CmlValue)))

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
                       
            toReturn.set(key, [value.reduce((acc, next, index, array) => acc + next)])
        })

    toReturn.forEach((value, key, map) => {

        map.set(key, (map.get(key) ?? []).concat(
                printStats(
                    [
                     (getValues.get(key)?.length !== 0) ? printCount(getValues.get(key) ?? [0], getTextLength.get(key) ?? 10,12,false,false) : "",
                     (getValues.get(key + (1 * 7))?.length !== 0) ? printCount(getValues.get(key + (1 * 7)) ?? [0], getTextLength.get(key) ?? 10,11,false,true) : "",
                     (getValues.get(key + (2 * 7))?.length !== 0) ? printCount(getValues.get(key + (2 * 7)) ?? [0], getTextLength.get(key) ?? 10,11,true,true) : "\n",
                     (getValues.get(key)?.length !== 0) ? printSum(getValues.get(key) ?? [0],  getTextLength.get(key) ?? 10, 12,"Million","¥",0,false,false) : "",
                     (getValues.get(key + (1 * 7))?.length !== 0) ? printSum(getValues.get(key + (1 * 7)) ?? [0],  getTextLength.get(key) ?? 10, 11,"Million","None",2,false,true) : "",
                     (getValues.get(key + (2 * 7))?.length !== 0) ? printSum(getValues.get(key + (2 * 7)) ?? [0],  getTextLength.get(key) ?? 10, 11,"None","¥",0,true,true) : "\n",
                     (getValues.get(key)?.length !== 0) ? printAverage(getValues.get(key) ?? [0],  getTextLength.get(key) ?? 10,12,"Million","¥",0,false,false) : "",
                     (getValues.get(key + (1 * 7))?.length !== 0) ? printAverage(getValues.get(key + (1 * 7)) ?? [0],  getTextLength.get(key) ?? 10,11,"Million","None",2,false,true) : "",
                     (getValues.get(key + (2 * 7))?.length !== 0) ? printAverage(getValues.get(key + (2 * 7)) ?? [0],  getTextLength.get(key) ?? 10,11,"None","¥",0,true,true) : "\n",
                     (getValues.get(key)?.length !== 0) ? printMedian(getValues.get(key) ?? [0],  getTextLength.get(key) ?? 10,12,"Million","¥",0,false,false) : "",
                     (getValues.get(key + (1 * 7))?.length !== 0) ? printMedian(getValues.get(key + (1 * 7)) ?? [0],  getTextLength.get(key) ?? 10,11,"Million","None",2,false,true) : "",
                     (getValues.get(key + (2 * 7))?.length !== 0) ? printMedian(getValues.get(key + (2 * 7)) ?? [0],  getTextLength.get(key) ?? 10,11,"None","¥",0,true,true) : "\n",
                     (getValues.get(key)?.length !== 0) ? printMininum(getValues.get(key) ?? [0],  getTextLength.get(key) ?? 10,12,"Million","¥",false,false) : "",
                     (getValues.get(key + (1 * 7))?.length !== 0) ? printMininum(getValues.get(key + (1 * 7)) ?? [0],  getTextLength.get(key) ?? 10,11,"Million","None",false,true) : "",
                     (getValues.get(key + (2 * 7))?.length !== 0) ? printMininum(getValues.get(key + (2 * 7)) ?? [0],  getTextLength.get(key) ?? 10,11,"None","¥",true,true) : "\n",
                     (getValues.get(key)?.length !== 0) ? printMaximum(getValues.get(key) ?? [0],  getTextLength.get(key) ?? 10,12,"Million","¥",false,false) : "",
                     (getValues.get(key + (1 * 7))?.length !== 0) ? printMaximum(getValues.get(key + (1 * 7)) ?? [0],  getTextLength.get(key) ?? 10,11,"Million","None",false,true) : "",
                     (getValues.get(key + (2 * 7))?.length !== 0) ? printMaximum(getValues.get(key + (2 * 7)) ?? [0],  getTextLength.get(key) ?? 10,11,"None","¥",false,true) : "",
                    ].flat()
                , totalTextLength.get(key) ?? 60),
                getFootnotes
        ))
    })

    dataToReturn.set(0, (dataToReturn.get(0) ?? []).concat(getConcat(toReturn.get(0))))
    dataToReturn.set(1, (dataToReturn.get(1) ?? []).concat(getConcat(toReturn.get(1))))
    dataToReturn.set(2, (dataToReturn.get(2) ?? []).concat(getConcat(toReturn.get(2))))
    dataToReturn.set(3, (dataToReturn.get(3) ?? []).concat(getConcat(toReturn.get(3))))
    dataToReturn.set(4, (dataToReturn.get(4) ?? []).concat(getConcat(toReturn.get(4))))
    dataToReturn.set(5, (dataToReturn.get(5) ?? []).concat(getConcat(toReturn.get(5))))
    dataToReturn.set(6, (dataToReturn.get(6) ?? []).concat(getConcat(toReturn.get(6))))

  }

    dataToReturn.forEach((value, key, map) => {
        
        map.set(key, [value.reduce((acc, next) => acc + next)])
    })
    return [...dataToReturn.values()].flat()
}
