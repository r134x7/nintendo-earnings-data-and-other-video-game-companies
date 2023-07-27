import { platformUnitsMake, jsonData } from "../regional_hardware_software_nintendo";
import { printTextBlock, border, liner, spacer, dateLabel, infiniteCheck, type titleSet, globImport } from "../../../utils/table_design_logic";

// avoid having empty lists [] in your collections from preparing for the next earnings
import { Section } from "../../../utils/regional_hw_sw_logic";

const totalCollection: jsonData[] = [...globImport(new Map<number, jsonData>, import.meta.glob("../Regional_Hardware_Software/*.json", { import: "default", eager: true }), "Ascending").values()]

const valueCheck = (value: number) => {
    return (value === Infinity)
                    ? `< 0.01M`
                    : (value === -Infinity)
                        ? `< −0.01M`
                        : `${value}M`;
}
    
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

    const makeDateLabel = dateLabel(totalCollection.at(-1)?.fiscalYear ?? "N/A", totalCollection.at(-1)?.currentQuarter ?? 4);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "bottom",true)

    function accumulate(title: Section[]): Section[] {

        const title1Flat = {
            ...title[title.length-1],
            valueA: infiniteCheck(title[title.length-1].valueA) + infiniteCheck(title[title.length-2].valueA),
            valueB: infiniteCheck(title[title.length-1].valueB) + infiniteCheck(title[title.length-2].valueB),
            valueC: infiniteCheck(title[title.length-1].valueC) + infiniteCheck(title[title.length-2].valueC),
            valueD: infiniteCheck(title[title.length-1].valueD) + infiniteCheck(title[title.length-2].valueD),
            valueE: infiniteCheck(title[title.length-1].valueE) + infiniteCheck(title[title.length-2].valueE),
        };

        const removeLast = title.filter((elem, index, array) => index !== array.length-1)

        let newTitle = removeLast.concat(title1Flat);
        
        return newTitle
    };

    const printTitlesJapan = (titles: Section[][], returnObject?: boolean) => {
        
        const regionRank = titles.map((elem, index, array) => {
            
            let printTitleName = liner(printTextBlock(elem[0].name, 43),"−","both",true,43);

            // need to check regarding || conditions in filter because it's not working...
            let yearValues: string[] = elem.filter(value => value.valueB !== 0).filter(value => value.period !== "Last FY Cumulative").map((value, valueIndex, valueArray) => {
               return border([
                    spacer(value.fiscalYear + " Cumulative",29,"left"),
                    spacer(valueCheck(value.valueB),11,"right")
               ],true);
            });

            let printLTD: string = liner(border([
                spacer("Japan - Life-To-Date (Units)",29,"left"),
                spacer(`${elem[elem.length-1].valueB}M`,11,"right"),
            ]),"=","both",true);

            // return [
            //     printTitleName,
            //     ...yearValues,
            //     printLTD,
            // ].reduce((prev, next) => {
            //     return prev + next
            // });
            return (!returnObject) 
            ? [
                printTitleName,
                ...yearValues,
                printLTD,
            ].reduce((prev, next) => {
                return prev + next
            })
            : {
                title: elem.at(-1)?.name ?? "ERROR",
                table: [
                printTitleName,
                ...yearValues,
                printLTD,
                ].reduce((prev, next) => {
                return prev + next
            })
            }
        })
        // .filter(value => value !== "N/A").reduce((prev, next) => {
        //         return prev + next
        // });

        // return regionRank
        return (!returnObject) 
            ? regionRank.filter(value => value !== "N/A").reduce((acc, next) => (typeof next === "string") ? acc + next : next,"")
            : regionRank.filter(value => value !== "N/A")
    };

    const printTitlesAmericas = (titles: Section[][], returnObject?: boolean) => {
        
        const regionRank = titles.map((elem, index, array) => {
            
            let printTitleName = liner(printTextBlock(elem[0].name, 43),"−","both",true,43);

            // need to check regarding || conditions in filter because it's not working...
            let yearValues: string[] = elem.filter(value => value.valueC !== 0).filter(value => value.regionC !== "Overseas").filter(value => value.period !== "Last FY Cumulative").map((value, valueIndex, valueArray) => {
               return border([
                    spacer(value.fiscalYear + " Cumulative",29,"left"),
                    spacer(valueCheck(value.valueC),11,"right")
               ],true);
            })//.filter((secondValue, index) => index !== elem.length-1) 

            let printLTD: string = liner(border([
                spacer("The Americas - LTD (Units)",29,"left"),
                spacer(`${elem[elem.length-1].valueC}M`,11,"right"),
            ]),"=","both",true);

            // return [
            //     printTitleName,
            //     ...yearValues,
            //     printLTD,
            // ].reduce((prev, next) => {
            //     return prev + next
            // });
            return (!returnObject) 
            ? [
                printTitleName,
                ...yearValues,
                printLTD,
            ].reduce((prev, next) => {
                return prev + next
            })
            : {
                title: elem.at(-1)?.name ?? "ERROR",
                table: [
                printTitleName,
                ...yearValues,
                printLTD,
                ].reduce((prev, next) => {
                return prev + next
            })
            }
        })
        // .filter(value => value !== "N/A").reduce((prev, next) => {
        //         return prev + next
        // });

        // return regionRank
        return (!returnObject) 
            ? regionRank.filter(value => value !== "N/A").reduce((acc, next) => (typeof next === "string") ? acc + next : next,"")
            : regionRank.filter(value => value !== "N/A")
    };

    const printTitlesEurope = (titles: Section[][],returnObject?: boolean) => {
        
        const regionRank = titles.map((elem, index, array) => {
            
            let printTitleName = liner(printTextBlock(elem[0].name, 43),"−","both",true,43);

            // need to check regarding || conditions in filter because it's not working...
            let yearValues: string[] = elem.filter(value => value.valueD !== 0).filter(value => value.regionD !== "Other").filter(value => value.period !== "Last FY Cumulative").map((value, valueIndex, valueArray) => {
               return border([
                    spacer(value.fiscalYear + " Cumulative",29,"left"),
                    spacer(valueCheck(value.valueD),11,"right")
               ],true);
            })//.filter((secondValue, index) => index !== elem.length-1) 

            let printLTD: string = liner(border([
                spacer(" Europe - Life-To-Date (Units)",29,"left"),
                spacer(`${elem[elem.length-1].valueD}M`,11,"right"),
            ]),"=","both",true);

            // return (yearValues.length === 0) ? "N/A" : [
            //     printTitleName,
            //     ...yearValues,
            //     printLTD,
            // ].reduce((prev, next) => {
            //     return prev + next
            // });
            return (yearValues.length === 0) 
            ? "N/A" // should probably consider using a flatMap...
            : (!returnObject) 
                ? [
                    printTitleName,
                    ...yearValues,
                    printLTD,
                ].reduce((prev, next) => {
                    return prev + next
                })
                : {
                    title: elem.at(-1)?.name ?? "ERROR",
                    table: [
                    printTitleName,
                    ...yearValues,
                    printLTD,
                    ].reduce((prev, next) => {
                    return prev + next
                })
                }
        })
        // .filter(value => value !== "N/A").reduce((prev, next) => {
        //         return prev + next
        // });

        // return regionRank
        return (!returnObject) 
            ? regionRank.filter(value => value !== "N/A").reduce((acc, next) => (typeof next === "string") ? acc + next : next,"")
            : regionRank.filter(value => value !== "N/A")
    };

    const printTitlesOther = (titles: Section[][], returnObject?: boolean) => {
        
        const regionRank = titles.map((elem, index, array) => {
            
            let printTitleName = liner(printTextBlock(elem[0].name, 43),"−","both",true,43);

            let yearValuesOtherD: string[] = elem.filter(value => {
                return (value.valueD !== 0 && value.regionD === "Other")
            }).filter(value => value.period !== "Last FY Cumulative").map((value, valueIndex, valueArray) => {
            //    let findOtherValue = (value.valueE === 0 && value.regionD !== "Europe") 
            //         ? value.valueD
            //         : value.valueE 

               return border([
                    spacer(value.fiscalYear + " Cumulative",29,"left"),
                    spacer(valueCheck(value.valueD),11,"right")
               ],true);
            })//.filter((secondValue, index) => index !== elem.length-1) 

            let yearValuesOtherE: string[] = elem.filter(value => {
                return (value.valueE !== 0 && value.regionD === "Europe")
            }).filter(value => value.period !== "Last FY Cumulative").map((value, valueIndex, valueArray) => {
                
            //    let findOtherValue = (value.valueE === 0 && value.regionD !== "Europe") 
            //         ? value.valueD
            //         : value.valueE 

               return border([
                    spacer(value.fiscalYear + " Cumulative",29,"left"),
                    spacer(`${value.valueE}M`,11,"right")
               ],true);
            })//.filter((secondValue, index) => index !== elem.length-1) 

        let yearValues: string[] = yearValuesOtherD.concat(yearValuesOtherE);

        let findOtherLTDValue = (elem[elem.length-1].valueE === 0 && elem[elem.length-1].regionD !== "Europe") 
                    ? elem[elem.length-1].valueD
                    : elem[elem.length-1].valueE 

        let printLTD: string = liner(border([
            spacer("Other - Life-To-Date (Units)",29,"left"),
            spacer(`${findOtherLTDValue}M`,11,"right"),
        ]),"=","both",true);
    
            // return (yearValues.length === 0) ? "N/A" : [
            //     printTitleName,
            //     ...yearValues,
            //     printLTD,
            // ].reduce((prev, next) => {
            //     return prev + next
            // });
            return (yearValues.length === 0) 
            ? "N/A"
            : (!returnObject) 
                ? [
                    printTitleName,
                    ...yearValues,
                    printLTD,
                ].reduce((prev, next) => {
                    return prev + next
                })
                : {
                    title: elem.at(-1)?.name ?? "ERROR",
                    table: [
                    printTitleName,
                    ...yearValues,
                    printLTD,
                    ].reduce((prev, next) => {
                    return prev + next
                })
            }
        })
        // .filter(value => value !== "N/A").reduce((prev, next) => {
        //         return prev + next
        // });

        // return regionRank
        return (!returnObject) 
            ? regionRank.filter(value => value !== "N/A").reduce((acc, next) => (typeof next === "string") ? acc + next : next,"")
            : regionRank.filter(value => value !== "N/A")
    };

    const reducedArrays: Section[][] = latestFYcollection.map((elem) => {

        return accumulate(elem)
    })
    
const printOneJapan = 
`+−−−−−−−−−−−−−−−−−−−−+
| Nintendo Co., Ltd. |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
| Hardware and Software Units - Japan |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n`;

const printOneAmericas = 
`+−−−−−−−−−−−−−−−−−−−−+
| Nintendo Co., Ltd. |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
| Hardware and Software Units - The Americas |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n`;

const printOneEurope = 
`+−−−−−−−−−−−−−−−−−−−−+
| Nintendo Co., Ltd. |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
| Hardware and Software Units - Europe |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n`;

const printOneOther = 
`+−−−−−−−−−−−−−−−−−−−−+
| Nintendo Co., Ltd. |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
| Regional Hardware and Software Units - Other |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n`;

const divideSortedGlobalCollection = reducedArrays.map(elem => elem.map(section => {
    return {
        ...section,
        valueA: Number((section.valueA / 100).toFixed(2)),
        valueB: Number((section.valueB / 100).toFixed(2)),
        valueC: Number((section.valueC / 100).toFixed(2)),
        valueD: Number((section.valueD / 100).toFixed(2)),
        valueE: Number((section.valueE / 100).toFixed(2)),
    }}))

const printFour = printTitlesJapan(divideSortedGlobalCollection, true) as titleSet[];

const printFive = printTitlesAmericas(divideSortedGlobalCollection, true) as titleSet[];

const printSix = printTitlesEurope(divideSortedGlobalCollection, true) as titleSet[];

const printSeven = printTitlesOther(divideSortedGlobalCollection, true) as titleSet[];

let dataSource = "Source: https://www.nintendo.co.jp/ir/en/finance/historical_data/index.html"

// export const printJapanHardwareSoftware = 
// `${printOneJapan}
// ${printDateLabel}
// ${printFour}
// ###
// ${dataSource}`;

// export const printAmericasHardwareSoftware = 
// `${printOneAmericas}
// ${printDateLabel}
// ${printFive}
// ###
// ${dataSource}`;

// export const printEuropeHardwareSoftware = 
// `${printOneEurope}
// ${printDateLabel}
// ${printSix}
// ###
// ${dataSource}`;

// export const printOtherHardwareSoftware = 
// `${printOneOther}
// ${printDateLabel}
// ${printSeven}
// ###
// ${dataSource}`;

export const printJapanHardwareSoftware = {
    header: printOneJapan,
    date: printDateLabel, 
    region: "Japan",
    titleList: printFour,
    footer: dataSource 
};

export const printAmericasHardwareSoftware = {
    header: printOneAmericas,
    date: printDateLabel,
    region: "The Americas",
    titleList: printFive,
    footer: dataSource,
};

export const printEuropeHardwareSoftware = {
    header: printOneEurope,
    date: printDateLabel,
    region: "Europe",
    titleList: printSix,
    footer: dataSource,
};

export const printOtherHardwareSoftware = {
    header: printOneOther,
    date: printDateLabel,
    region: "Other",
    titleList: printSeven,
    footer: dataSource,
};
