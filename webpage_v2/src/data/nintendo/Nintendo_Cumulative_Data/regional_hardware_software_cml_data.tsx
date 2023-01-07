import { platformUnitsMake, jsonData, regionData } from "../regional_hardware_software_nintendo";
import { printTextBlock } from "../../../utils/bandai_namco_annual_report_logic";

import regionalHardwareSoftware2023 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2023.json";
import regionalHardwareSoftware2022 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2022.json";
import regionalHardwareSoftware2021 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2021.json";
import regionalHardwareSoftware2020 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2020.json";
import regionalHardwareSoftware2019 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2019.json";
import regionalHardwareSoftware2018 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2018_new.json";
import regionalHardwareSoftware2017 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2017_new.json";
import regionalHardwareSoftware2016 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2016.json";
import regionalHardwareSoftware2015 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2015.json";
import regionalHardwareSoftware2014 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2014.json";
import regionalHardwareSoftware2013 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2013.json";
import regionalHardwareSoftware2012 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2012.json";
import regionalHardwareSoftware2011 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2011.json";
import regionalHardwareSoftware2010 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2010.json";
import regionalHardwareSoftware2009 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2009.json";
import regionalHardwareSoftware2008 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2008.json";
import regionalHardwareSoftware2007 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2007.json";
import regionalHardwareSoftware2006 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2006.json";
import regionalHardwareSoftware2005 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2005.json";
import regionalHardwareSoftware2004 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2004.json";
import regionalHardwareSoftware2003 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2003.json";
import regionalHardwareSoftware2002 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2002.json";
import regionalHardwareSoftware2001 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2001.json";
import regionalHardwareSoftware2000 from "../Regional_Hardware_Software/regional_hw_sw_fy3_2000.json";
import regionalHardwareSoftware1999 from "../Regional_Hardware_Software/regional_hw_sw_fy3_1999.json";
import regionalHardwareSoftware1998 from "../Regional_Hardware_Software/regional_hw_sw_fy3_1998.json";
import regionalHardwareSoftware1997 from "../Regional_Hardware_Software/regional_hw_sw_fy3_1997.json";

// avoid having empty lists [] in your collections from preparing for the next earnings
import {
    Header,
    Section,
    printHead,
    printSection,
    quarterlyCalculation,
    yearOnYearCalculation,
} from "../../../utils/regional_hw_sw_logic";

    const totalCollection = [
        regionalHardwareSoftware1997,
        regionalHardwareSoftware1998,
        regionalHardwareSoftware1999,
        regionalHardwareSoftware2000,
        regionalHardwareSoftware2001,
        regionalHardwareSoftware2002,
        regionalHardwareSoftware2003,
        regionalHardwareSoftware2004,
        regionalHardwareSoftware2005,
        regionalHardwareSoftware2006,
        regionalHardwareSoftware2007,
        regionalHardwareSoftware2008,
        regionalHardwareSoftware2009,
        regionalHardwareSoftware2010,
        regionalHardwareSoftware2011,
        regionalHardwareSoftware2012,
        regionalHardwareSoftware2013,
        regionalHardwareSoftware2014,
        regionalHardwareSoftware2015,
        regionalHardwareSoftware2016,
        regionalHardwareSoftware2017,
        regionalHardwareSoftware2018,
        regionalHardwareSoftware2019,
        regionalHardwareSoftware2020,
        regionalHardwareSoftware2021,
        regionalHardwareSoftware2022,
        regionalHardwareSoftware2023,
    ]
    
    let totalCollectionSet: Section[][][] = totalCollection.map(elem => {

        let flatList = elem.regions.flat();
        
        return flatList.map(value => platformUnitsMake(value)).map(value => value.map(secondValue => { return { ...secondValue, fiscalYear: elem.fiscalYear}}))

    });

    const flatCollection = totalCollectionSet.map((value) => value.map((secondValue) => secondValue.filter((thirdValue, thirdIndex) => thirdIndex === 3))).flat(2);

    const flatCollectionLTD = totalCollectionSet.map((value) => value.map((secondValue) => secondValue.filter((thirdValue, thirdIndex) => thirdIndex === 4))).flat(2);

    const flatTitles = totalCollectionSet.map((value) => value.map((secondValue) => secondValue.filter((thirdValue, thirdIndex) => thirdIndex === 3))).flat(2).map(value => { return  value.name })

    const filteredCollection = [...new Set(flatTitles)];


    function sortingTitles(titles: string[]) {

        const setTitles: Section[][] = titles.map((elem, index, array) => {

            let searchTitle: Section[] = flatCollection.filter((value) => value.name === elem)

            let searchLTD: Section[] = flatCollectionLTD.filter((value) => value.name === elem)

            let latestLTD = searchLTD[searchLTD.length-1];
            
            return searchTitle.concat([latestLTD]) 
        })

        return setTitles
    };

    const latestFYcollection = sortingTitles(filteredCollection);

    // console.log(latestFYcollection);
    

    const dateLabel = "| Data as of September 30th, 2022   |\n+" + "-".repeat(35) + "+"

    function accumulate(title: Section[]): Section[] {

        const title1Flat = {
            ...title[title.length-1],
            valueA: title[title.length-1].valueA + title[title.length-2].valueA,
            valueB: title[title.length-1].valueB + title[title.length-2].valueB,
            valueC: title[title.length-1].valueC + title[title.length-2].valueC,
            valueD: title[title.length-1].valueD + title[title.length-2].valueD,
            valueE: title[title.length-1].valueE + title[title.length-2].valueE,
        };

        const removeLast = title.filter((elem, index, array) => index !== array.length-1)

        let newTitle = removeLast.concat(title1Flat);
        
        return newTitle
    };

    const printTitlesJapan = (titles: Section[][]) => {
        
        const regionRank = titles.map((elem, index, array) => {
            
            let printTitleName = printTextBlock(elem[0].name)(42)

            let printTitleNameFixed: string = "+"+"-".repeat(42)+"+\n" + printTitleName + "\n+" + "-".repeat(42) + "+"// + "+"+"-".repeat(42)+"+"
            // need to check regarding || conditions in filter because it's not working...
            let yearValues: string[] = elem.filter(value => value.valueB !== 0).filter(value => value.period !== " Last FY Cumulative ").map((value, valueIndex, valueArray) => {

               let printValue: string = `${value.valueB}M ` 
               let printValueFixed: string = (printValue.length >= 11)
                   ? printValue
                   : " ".repeat(11 - printValue.length) + printValue;

               let printPeriodFixed: string = (value.fiscalYear === undefined) 
                       ? "|" + value.period + " ".repeat(6) + "|"
                       : "| " + value.fiscalYear + " Cumulative          |"

               return  printPeriodFixed + printValueFixed + "|"
            })//.filter((secondValue, index) => index !== elem.length-1) 

        let printValue: string = `${elem[elem.length-1].valueB}M ` 
        
        let printValueFixed: string = (printValue.length >= 11)
            ? printValue
            : " ".repeat(11 - printValue.length) + printValue;

        let printLine: string = "+" + "-".repeat(42) + "+";

        let printLTD = printLine + "\n| Japan - Life-To-Date (Units) |" + printValueFixed + "|\n" + printLine;

            return [
                printTitleNameFixed,
                ...yearValues,
                printLTD,
            ].reduce((prev, next) => {
                return prev + "\n" + next
            });

        }).filter(value => value !== "N/A").reduce((prev, next) => {
                return prev + "\n" + next
        });

        return regionRank
    };

    const printTitlesAmericas = (titles: Section[][]) => {
        
        const regionRank = titles.map((elem, index, array) => {
            
            let printTitleName = printTextBlock(elem[0].name)(42)

            let printTitleNameFixed: string = "+"+"-".repeat(42)+"+\n" + printTitleName + "\n+" + "-".repeat(42) + "+"// + "+"+"-".repeat(42)+"+"
            // need to check regarding || conditions in filter because it's not working...
            let yearValues: string[] = elem.filter(value => value.valueC !== 0).filter(value => value.regionC !== "Overseas").filter(value => value.period !== " Last FY Cumulative ").map((value, valueIndex, valueArray) => {

               let printValue: string = `${value.valueC}M ` 
               let printValueFixed: string = (printValue.length >= 11)
                   ? printValue
                   : " ".repeat(11 - printValue.length) + printValue;

               let printPeriodFixed: string = (value.fiscalYear === undefined) 
                       ? "|" + value.period + " ".repeat(6) + "|"
                       : "| " + value.fiscalYear + " Cumulative          |"

               return  printPeriodFixed + printValueFixed + "|"
            })//.filter((secondValue, index) => index !== elem.length-1) 

        let printValue: string = `${elem[elem.length-1].valueC}M ` 
        
        let printValueFixed: string = (printValue.length >= 11)
            ? printValue
            : " ".repeat(11 - printValue.length) + printValue;

        let printLine: string = "+" + "-".repeat(42) + "+";

        let printLTD = printLine + "\n| The Americas - LTD (Units)   |" + printValueFixed + "|\n" + printLine;

            return [
                printTitleNameFixed,
                ...yearValues,
                printLTD,
            ].reduce((prev, next) => {
                return prev + "\n" + next
            });

        }).filter(value => value !== "N/A").reduce((prev, next) => {
                return prev + "\n" + next
        });

        return regionRank
    };

    const printTitlesEurope = (titles: Section[][]) => {
        
        const regionRank = titles.map((elem, index, array) => {
            
            let printTitleName = printTextBlock(elem[0].name)(42)

            let printTitleNameFixed: string = "+"+"-".repeat(42)+"+\n" + printTitleName + "\n+" + "-".repeat(42) + "+"// + "+"+"-".repeat(42)+"+"
            // need to check regarding || conditions in filter because it's not working...
            let yearValues: string[] = elem.filter(value => value.valueD !== 0).filter(value => value.regionD !== "Other").filter(value => value.period !== " Last FY Cumulative ").map((value, valueIndex, valueArray) => {

               let printValue: string = `${value.valueD}M ` 
               let printValueFixed: string = (printValue.length >= 11)
                   ? printValue
                   : " ".repeat(11 - printValue.length) + printValue;

               let printPeriodFixed: string = (value.fiscalYear === undefined) 
                       ? "|" + value.period + " ".repeat(6) + "|"
                       : "| " + value.fiscalYear + " Cumulative          |"

               return  printPeriodFixed + printValueFixed + "|"
            })//.filter((secondValue, index) => index !== elem.length-1) 

        let printValue: string = `${elem[elem.length-1].valueD}M ` 
        
        let printValueFixed: string = (printValue.length >= 11)
            ? printValue
            : " ".repeat(11 - printValue.length) + printValue;

        let printLine: string = "+" + "-".repeat(42) + "+";

        let printLTD = printLine + "\n| Europe - Life-To-Date (Units)|" + printValueFixed + "|\n" + printLine;

            return (yearValues.length === 0) ? "N/A" : [
                printTitleNameFixed,
                ...yearValues,
                printLTD,
            ].reduce((prev, next) => {
                return prev + "\n" + next
            });

        }).filter(value => value !== "N/A").reduce((prev, next) => {
                return prev + "\n" + next
        });

        return regionRank
    };

    const printTitlesOther = (titles: Section[][]) => {
        
        const regionRank = titles.map((elem, index, array) => {
            
            let printTitleName = printTextBlock(elem[0].name)(42)

            let printTitleNameFixed: string = "+"+"-".repeat(42)+"+\n" + printTitleName + "\n+" + "-".repeat(42) + "+"// + "+"+"-".repeat(42)+"+"

            let yearValuesOtherD: string[] = elem.filter(value => {
                return (value.valueD !== 0 && value.regionD === "Other")
            }).filter(value => value.period !== " Last FY Cumulative ").map((value, valueIndex, valueArray) => {
                
            //    let findOtherValue = (value.valueE === 0 && value.regionD !== "Europe") 
            //         ? value.valueD
            //         : value.valueE 

               let printValue: string = `${value.valueD}M ` 
               let printValueFixed: string = (printValue.length >= 11)
                   ? printValue
                   : " ".repeat(11 - printValue.length) + printValue;

               let printPeriodFixed: string = (value.fiscalYear === undefined) 
                       ? "|" + value.period + " ".repeat(6) + "|"
                       : "| " + value.fiscalYear + " Cumulative          |"

               return  printPeriodFixed + printValueFixed + "|"
            })//.filter((secondValue, index) => index !== elem.length-1) 

            let yearValuesOtherE: string[] = elem.filter(value => {
                return (value.valueE !== 0 && value.regionD === "Europe")
            }).filter(value => value.period !== " Last FY Cumulative ").map((value, valueIndex, valueArray) => {
                
            //    let findOtherValue = (value.valueE === 0 && value.regionD !== "Europe") 
            //         ? value.valueD
            //         : value.valueE 

               let printValue: string = `${value.valueE}M ` 
               let printValueFixed: string = (printValue.length >= 11)
                   ? printValue
                   : " ".repeat(11 - printValue.length) + printValue;

               let printPeriodFixed: string = (value.fiscalYear === undefined) 
                       ? "|" + value.period + " ".repeat(6) + "|"
                       : "| " + value.fiscalYear + " Cumulative          |"

               return  printPeriodFixed + printValueFixed + "|"
            })//.filter((secondValue, index) => index !== elem.length-1) 

        let yearValues: string[] = yearValuesOtherD.concat(yearValuesOtherE);

        let findOtherLTDValue = (elem[elem.length-1].valueE === 0 && elem[elem.length-1].regionD !== "Europe") 
                    ? elem[elem.length-1].valueD
                    : elem[elem.length-1].valueE 

        let printValue: string = `${findOtherLTDValue}M ` 
        
        let printValueFixed: string = (printValue.length >= 11)
            ? printValue
            : " ".repeat(11 - printValue.length) + printValue;

        let printLine: string = "+" + "-".repeat(42) + "+";

        let printLTD = printLine + "\n| Other - Life-To-Date (Units) |" + printValueFixed + "|\n" + printLine;

            return (yearValues.length === 0) ? "N/A" : [
                printTitleNameFixed,
                ...yearValues,
                printLTD,
            ].reduce((prev, next) => {
                return prev + "\n" + next
            });

        }).filter(value => value !== "N/A").reduce((prev, next) => {
                return prev + "\n" + next
        });

        return regionRank
    };


    const reducedArrays: Section[][] = latestFYcollection.map((elem) => {

        return accumulate(elem)
    })
    
const printOneJapan = 
`+--------------------+
| Nintendo Co., Ltd. |
+-------------------------------------+
| Hardware and Software Units - Japan |
+-------------------------------------+`;

const printOneAmericas = 
`+--------------------+
| Nintendo Co., Ltd. |
+--------------------------------------------+
| Hardware and Software Units - The Americas |
+--------------------------------------------+`;

const printOneEurope = 
`+--------------------+
| Nintendo Co., Ltd. |
+--------------------------------------+
| Hardware and Software Units - Europe |
+--------------------------------------+`;

const printOneOther = 
`+--------------------+
| Nintendo Co., Ltd. |
+----------------------------------------------+
| Regional Hardware and Software Units - Other |
+----------------------------------------------+`;

const divideSortedGlobalCollection = reducedArrays.map(elem => elem.map(section => {
    return {
        ...section,
        valueA: Number((section.valueA / 100).toFixed(2)),
        valueB: Number((section.valueB / 100).toFixed(2)),
        valueC: Number((section.valueC / 100).toFixed(2)),
        valueD: Number((section.valueD / 100).toFixed(2)),
        valueE: Number((section.valueE / 100).toFixed(2)),
    }}))

const printFour = printTitlesJapan(divideSortedGlobalCollection)

const printFive = printTitlesAmericas(divideSortedGlobalCollection)

const printSix = printTitlesEurope(divideSortedGlobalCollection)

const printSeven = printTitlesOther(divideSortedGlobalCollection)

let dataSource = "Source: https://www.nintendo.co.jp/ir/en/finance/historical_data/index.html"

export const printJapanHardwareSoftware = 
`${printOneJapan}
${dateLabel}
${printFour}
###
${dataSource}`;

export const printAmericasHardwareSoftware = 
`${printOneAmericas}
${dateLabel}
${printFive}
###
${dataSource}`;

export const printEuropeHardwareSoftware = 
`${printOneEurope}
${dateLabel}
${printSix}
###
${dataSource}`;

export const printOtherHardwareSoftware = 
`${printOneOther}
${dateLabel}
${printSeven}
###
${dataSource}`;
