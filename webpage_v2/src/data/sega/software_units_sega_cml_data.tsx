import { Section } from "../../utils/general_quarterly_software_units_logic";
import { platformUnitSalesMake } from "./software_units_sega";
import { liner, border, printTextBlock, spacer, dateLabel } from "../../utils/table_design_logic";


import softwareUnitsSegaSammy2021 from "./Software_Units/software_units_fy3_2021.json"
import softwareUnitsSegaSammy2022 from "./Software_Units/software_units_fy3_2022.json"
import softwareUnitsSegaSammy2023 from "./Software_Units/software_units_fy3_2023.json"

type softwareUnits = {
    fiscalYear: string,
    currentQuarter: number,
    softwareUnits: {
            name: string,
            ip: string,
            Q1CmlValue: number,
            Q2CmlValue: number,
            Q3CmlValue: number,
            Q4CmlValue: number,
            miscellaneous?: string,
        }[],
};

const collectionSegaSammy: softwareUnits[] = [
    softwareUnitsSegaSammy2021,
    softwareUnitsSegaSammy2022,
    softwareUnitsSegaSammy2023,
];

    const makeDateLabel = dateLabel(collectionSegaSammy.at(-1)?.fiscalYear ?? "N/A", collectionSegaSammy.at(-1)?.currentQuarter ?? 4);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "bottom",true)

function softwareUnitsMaker (collection: softwareUnits[], companyName: string, dateLabelLocal: string) {

    let headerMake: string = liner(border([
        spacer(companyName, companyName.length+1, "left")
        ]),"−","top",true) +
        liner(border([
            spacer("Full Game Software Unit Sales - Cumulative", "Full Game Software Unit Sales - Cumulative".length+1, "left")
        ]), "−", "both",true) + dateLabelLocal 

    let totalCollectionSet: Section[][] = collection.map(elem => {

        let flatList: Section[] = elem.softwareUnits.flatMap(value => platformUnitSalesMake(value));

        let fiscalYearGet = elem.fiscalYear;

        return flatList.map(value => {
            return {
                ...value, fiscalYear: fiscalYearGet,
            }
        })
    });

    let flatCollectionSet: Section[] = totalCollectionSet.flat().filter(value => value.period === "4th Quarter");

   let titlesList = totalCollectionSet.flat().map(value => value.name);

   const filteredCollection = [...new Set(titlesList)];

   function sortTitles(titles: string[]): Section[][] {
        return titles.map((elem, index, array) => {

            let searchTitle: Section[] = flatCollectionSet.filter((value) => value.name === elem)

            return searchTitle
        });
   };

   let titleList: Section[][] = sortTitles(filteredCollection)

   let rankTitles: Section[][] = titleList.map((elem, index, array) => {
            return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
    }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
        return (a[a.length-1].value > b[b.length-1].value)
            ? 1
            : (a[a.length-1].value < b[b.length-1].value)
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
};

function printTitles(header: string, titles: Section[][]) {

    const titleList = titles.map((elem, index, array) => {

        let printTitleName = liner(printTextBlock(elem[0].name, 42),"−","both",true,42);

        let miscellaneousCheck: string | undefined = (elem[elem.length-1].miscellaneous === undefined)
            ? undefined
            : elem[elem.length-1].miscellaneous;

        let yearValues: string[] = elem.flatMap(value => {
            return border([
                 spacer(value.fiscalYear + " Cumulative",30,"left"),
                 spacer(`${value.value / 100}M`,9,"right")
            ],true);
        });

       let sum = Number(elem.reduce((acc, next) => acc + next.value, 0) / 100).toFixed(2); 

        let printSum: string = (miscellaneousCheck === undefined) 
            ? liner(border([
                spacer("Sum (Units)",30,"left"),
                spacer(`${sum}M`,9,"right")
            ]),"−","both",true) 
            : liner(border([
                spacer("Sum",30,"left"),
                spacer(`${sum}M`,9,"right")
            ]),"−","both",true) + liner(printTextBlock(miscellaneousCheck,42),"−","bottom",true,42)

        return [
            printTitleName,
            ...yearValues,
            printSum,
        ].reduce((prev, next) => {
            return prev + next
        });
    }).reduce((prev, next) => prev + next);

    return [
        header,
        titleList,
    ].reduce((acc, next) => acc + next)
};

const softwareUnitsSegaSammy = softwareUnitsMaker(collectionSegaSammy, "Sega Sammy", printDateLabel);

export const softwareCumulativeSegaSammy = printTitles(softwareUnitsSegaSammy.header, softwareUnitsSegaSammy.titles);