import { platformSalesMake, collectionJSON } from "../consolidated_sales_information_nintendo";
import { printTextBlock, border, liner, spacer, dateLabel, type titleSet, globImport } from "../../../utils/table_design_logic";

// avoid having empty lists [] in your collections from preparing for the next earnings
import { Section, Header } from "../../../utils/hardware_software_units_logic";

const totalCollection: collectionJSON[] = [...globImport(new Map<number, collectionJSON>, import.meta.glob("../Consolidated_Sales_Information/*.json", { import: "default", eager: true }), "Ascending").values()];
    
    let totalCollectionSet: Section[][][] = totalCollection.map(elem => {

        let flatList = elem.platformSales.flat();
        
        return flatList.map(value => platformSalesMake(value)).map(value => value.map(secondValue => { return { ...secondValue, fiscalYear: elem.fiscalYear}}))

        // return flatList.map(value => platformUnitSalesMake(value)).map(value => value.map(secondValue => { return { ...secondValue, fiscalYear: elem.fiscalYear}}))

    });

    const flatCollection = totalCollectionSet.map((value) => value.map((secondValue) => secondValue.filter((thirdValue, thirdIndex) => thirdIndex === 3))).flat(2);

    const flatTitles = totalCollectionSet.map((value) => value.map((secondValue) => secondValue.filter((thirdValue, thirdIndex) => thirdIndex === 3))).flat(2).map(value => { return  value.name })

    const filteredCollection = [...new Set(flatTitles)];


    function sortingTitles(titles: string[]) {

        const setTitles: Section[][] = titles.map((elem, index, array) => {

            let searchTitle: Section[] = flatCollection.filter((value) => value.name === elem)

            return searchTitle
        })

        return setTitles
    };

    const latestFYcollection = sortingTitles(filteredCollection);

    const makeDateLabel = dateLabel(totalCollection.at(-1)?.fiscalYear ?? "N/A", totalCollection.at(-1)?.currentQuarter ?? 4);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "bottom",true)

    const header: Header = {
        firstHeader: "Global Hardware and Software",
        fiscalYear: "placeholder",
        nextFiscalYearShort: "place",
        secondHeader: "Sales Units and Forecasts",
        switchHeader: "Nintendo Co., Ltd.",
    };

    function accumulate(title: Section[]): Section[] {

        const sumTitle = title.map((elem, index, array) => {
            return elem.value
        }).reduce((prev, next) => prev + next);

        let newTitle = title.concat({
            ...title[0],
            value: sumTitle
        });
        
        return newTitle
    };


    const printTitlesGlobal = (titles: Section[][], returnObject?: boolean) => {

        const regionRank = titles.map((elem, index, array) => {
            
            let printTitleName = liner(printTextBlock(elem[0].name, 42),"−","both",true,42);

            let yearValues: string[] = elem.filter((value, index) => value.value !== 0).map((value, valueIndex, valueArray) => {

               return border([
                    spacer(value.fiscalYear + " Cumulative",24,"left"),
                    spacer(`¥${value.value.toLocaleString("en")}M`,15,"right") 
               ],true);
            }).filter((secondValue, index) => index !== elem.length-1) // will not work using secondValue;

        let printSum: string = border([
            spacer("Sum",24,"left"),
            spacer(`¥${elem[elem.length-1].value.toLocaleString("en")}M`,15,"right"),
        ],true);

        let printAverage: string = border([
            spacer("Average",24,"left"),
            spacer(`¥${Number((elem[elem.length-1].value / yearValues.length).toFixed(0)).toLocaleString("en")}M`,15,"right")
        ],true);

        let valuesMedian = elem.filter((value, index) => value.value !== 0 && index !== elem.length-1);

        let sortValuesMedian = sortList(valuesMedian);

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

        let printCount: string = border([
            spacer("Count",24,"left"),
            spacer(`${sortValuesMedian.length}`,15,"right"),
        ],true); 

        let printMedian: string = ((sortValuesMedian.length % 2) !== 0) // odd number
            // median formula source: https://en.wikipedia.org/wiki/Median
            // odd number median(x) = x(n+1)/2 => index version => median(x) = (x(n+1)/2)-1
            ? `¥${sortValuesMedian[((sortValuesMedian.length + 1)/2) -1].value.toLocaleString("en")}M`
            // even number median(x) = (x(n/2) + x((n/2) + 1)) /2 => index version median(x) = (x((n/2)-1) + x((n/2))) /2
            : `¥${Number(((sortValuesMedian[(sortValuesMedian.length/2) -1].value + sortValuesMedian[(sortValuesMedian.length/2)].value)/2).toFixed(0)).toLocaleString("en")}M`;

        let printMedianFixed:string = border([
            spacer("Median",24,"left"),
            spacer(printMedian,15,"right"),
        ],true);

        let printMinimum: string = border([
            spacer("Minimum",24,"left"),
            spacer(`¥${sortValuesMedian[0].value.toLocaleString("en")}M`,15,"right")
        ],true);

        let printMaximum: string = border([
            spacer("Maximum",24,"left"),
            spacer(`¥${sortValuesMedian[sortValuesMedian.length-1].value.toLocaleString("en")}M`,15,"right")
        ]);
         
        let printStats = liner(printCount +  printSum + printAverage + printMedianFixed + printMinimum + printMaximum,"−","both",true,42);

            return (!returnObject) 
            ? [
                printTitleName,
                ...yearValues,
                printStats,
            ].reduce((prev, next) => {
                return prev + next
            })
            : {
                title: elem.at(-1)?.name ?? "ERROR",
                table: [
                printTitleName,
                ...yearValues,
                printStats,
                ].reduce((prev, next) => {
                return prev + next
            })
            } 
        })
        // .filter(value => value !== "N/A").reduce((prev, next) => {
        //         return prev + next
        // });

        return (!returnObject) 
            ? regionRank.filter(value => value !== "N/A").reduce((acc, next) => (typeof next === "string") ? acc + next : next,"")
            : regionRank.filter(value => value !== "N/A")
    }

    const reducedArrays: Section[][] = latestFYcollection.map((elem) => {

        return accumulate(elem)
    })
    
    const sortedArrays: Section[][] = reducedArrays.map((elem, index, array) => {
            return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
    }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
        return (a[a.length-1].value > b[b.length-1].value)
            ? 1
            : (a[a.length-1].value < b[b.length-1].value)
            ? -1
            : 0 
    })

const printOneWW = 
`+−−−−−−−−−−−−−−−−−−−−+
| Nintendo Co., Ltd. |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
| Consolidated Sales Information     |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n`;

// const divideSortedGlobalCollection = reducedArrays.map(elem => elem.map(section => {
//     return {
//         ...section,
//         value: Number((section.value / 100).toFixed(2)),
//     }}))

// const printFour = printTitlesGlobal(divideSortedGlobalCollection)
const printFour = printTitlesGlobal(sortedArrays,true) as titleSet[];

let dataSource = "Source: https://www.nintendo.co.jp/ir/en/finance/historical_data/index.html"

// export const printConsolidatedSalesInfo = 
// `${printOneWW}
// ${printDateLabel}
// ${printFour}
// ###
// ${dataSource}`;

export const printConsolidatedSalesInfo = {
    header: printOneWW,
    date: printDateLabel,
    titleList: printFour,
    footer: dataSource,
}