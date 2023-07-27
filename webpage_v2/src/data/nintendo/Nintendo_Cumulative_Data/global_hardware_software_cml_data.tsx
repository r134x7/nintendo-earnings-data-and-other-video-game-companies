import { platformUnitSalesMake, platformSalesMake, collectionJSON } from "../global_hardware_software_mobile_nintendo";
import { printTextBlock, border, liner, spacer, dateLabel, infiniteCheck, type titleSet, globImport } from "../../../utils/table_design_logic";

// avoid having empty lists [] in your collections from preparing for the next earnings
import { Section, Header } from "../../../utils/hardware_software_units_logic";

const totalCollection: collectionJSON[] = [...globImport(new Map<number, collectionJSON>, import.meta.glob("../Global_Hardware_Software_Mobile/*.json", { import: "default", eager: true }), "Ascending").values()]
    
    let totalCollectionSet: Section[][][] = totalCollection.map(elem => {

        let flatList = elem.platformUnitSales.flat();
        
        // to be used temporarily
        let filteredList = flatList.filter(value => value.units !== "currency");
        // temporary
        return filteredList.map(value => platformUnitSalesMake(value)).map(value => value.map(secondValue => { return { ...secondValue, fiscalYear: elem.fiscalYear}}))

        // return flatList.map(value => platformUnitSalesMake(value)).map(value => value.map(secondValue => { return { ...secondValue, fiscalYear: elem.fiscalYear}}))

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

        // should really note what is happening here... creating a new object that contains title.at(-1) and changing the value so that it contains the LTD number
        const title1Flat = {
            ...title[title.length-1],
            value: infiniteCheck(title[title.length-1].value) + infiniteCheck(title[title.length-2].value)
        }

        const removeLast = title.filter((elem, index, array) => index !== array.length-1)

        let newTitle = removeLast.concat(title1Flat);
        
        return newTitle
    };


    const printTitlesGlobal = (titles: Section[][], returnObject?: boolean) => {

        const regionRank = titles.map((elem, index, array) => {
            
            let printTitleName = liner(printTextBlock(elem[0].name, 42),"−","both",true,42)

            let yearValues: string[] = elem.filter((value, index) => value.value !== 0).map((value, valueIndex, valueArray) => {

                let valueCheck = (value.value === Infinity)
                    ? `< 0.01M`
                    : (value.value === -Infinity)
                        ? `< −0.01M`
                        : `${value.value}M`;

               return border([
                    spacer(value.fiscalYear + " Cumulative",30,"left"),
                    spacer(valueCheck,9,"right")
               ],true);
            }).filter((secondValue, index) => index !== elem.length-1) // will not work using secondValue;

        let printLTD: string = liner(border([
            spacer("Global - Life-To-Date (Units)",30,"left"),
            spacer(`${elem[elem.length-1].value}M`,9,"right")
        ]),"−","both",true) 
         
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
    }

    const reducedArrays: Section[][] = latestFYcollection.map((elem) => {

        return accumulate(elem)
    })
    
const printOneWW = 
`+−−−−−−−−−−−−−−−−−−−−+
| Nintendo Co., Ltd. |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
| Global Hardware and Software Units |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n`;

const printTwoWW = 
`+−−−−−−−−−−−−−−−−−−−−+
| Nintendo Co., Ltd. |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+
| Sales Per Hardware Unit            |
+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+`;

const divideSortedGlobalCollection = reducedArrays.map(elem => elem.map(section => {
    return {
        ...section,
        value: Number((section.value / 100).toFixed(2)),
    }}))

const printFour = printTitlesGlobal(divideSortedGlobalCollection, true) as titleSet[];

let dataSource = "Source: https://www.nintendo.co.jp/ir/en/finance/historical_data/index.html"

// export const printGlobalHardwareSoftware = 
// `${printOneWW}
// ${printDateLabel}
// ${printFour}
// ###
// ${dataSource}`;

export const printGlobalHardwareSoftware = {
    header: printOneWW,
    date: printDateLabel, 
    region: "Global",
    titleList: printFour,
    footer: dataSource 
}; 

// sales per hardware unit - will need to come back to this when more than one platform in a fiscal year is listed...
    let salesCollectionSet: Section[][][] = totalCollection.filter(elem => elem.platformCmlSales[0].name !== "N/A").map(elem => {

        let flatList = elem.platformCmlSales.flat();

        return flatList.map(value => platformSalesMake(value)).map(value => value.map(secondValue => {      
            return { ...secondValue, fiscalYear: elem.fiscalYear}}))
    });

    const flatSalesCollection = salesCollectionSet.map((value) => value.map((secondValue) => secondValue.filter((thirdValue, thirdIndex) => thirdIndex > 2))).flat(2);

    const flatSalesCollectionMkII = salesCollectionSet.map((value) => value.map((secondValue) => secondValue.filter((thirdValue, thirdIndex) => thirdIndex > 2))).flat(1) 

    const hardwareReferences = flatSalesCollection.flatMap(elem => elem.hardwareReference);

    const filteredHardwareReferences = [...new Set(hardwareReferences)] 

    const flatCollectionMkII = totalCollectionSet.map((value) => value.flatMap((secondValue) => secondValue.filter((thirdValue, thirdIndex) => thirdIndex > 2 && filteredHardwareReferences.includes(thirdValue.name)))).filter(elem => elem.length !== 0)//.flat(2);
    
    const printSalesPerHardwareUnitCumulative = (salesArrays: Section[][], hardwareArrays: Section[][]): string => {

        let sectionHardwareTotalFixed = hardwareArrays.map((elem) => {

            return ((elem[0].value + elem[1].value) / 100)
        });

        let printTitleName = liner(printTextBlock(salesArrays[0][0].name, 39),"−","top",true,39);

        let printHeaders: string = liner(
            border([
                spacer("",13,"left"),
                spacer("",12,"left"),
                spacer("Hardware",9,"right"),
                spacer("Sales Per",10,"right")
            ],true) +
            border([
                spacer("",13,"left"),
                spacer("Sales",12,"right"),
                spacer("Units",9,"right"),
                spacer("Hardware",10,"right")
            ],true) +
            border([
                spacer("",13,"left"),
                spacer("Cumulative",12,"right"),
                spacer("Cumulative",9,"right"),
                spacer("Unit Cml.",10,"right")
            ])
        ,"−","both",true,51) 

        const salesPrint = salesArrays.map((elem, index, array) => {

            let calculateSalesPerHardware: number = Number(((elem[0].value + elem[1].value) / sectionHardwareTotalFixed[index]).toFixed(0))

            return border([
                spacer(" " + elem[0].fiscalYear + " Cml.",13,"left"),
                spacer(`¥${(elem[0].value + elem[1].value).toLocaleString("en")}M`,12,"right"),
                spacer(`${sectionHardwareTotalFixed[index]}M`,9,"right"),
                spacer(`¥${calculateSalesPerHardware.toLocaleString("en")}`,10,"right")
            ],true)
        });

        let printLine: string = "+" + "−".repeat(51) + "+"
        
        return [
            printTitleName,
            printHeaders,
            ...salesPrint,
            printLine,
        ].reduce((acc, next) => acc + next)
    };

    const printFive = printSalesPerHardwareUnitCumulative(flatSalesCollectionMkII, flatCollectionMkII);

export const printGlobalSalesPerHardwareUnit = 
`${printTwoWW}
${printDateLabel}
${printFive}
###`;