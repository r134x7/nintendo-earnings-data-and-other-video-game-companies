import { collectionJSON, titlesMake } from "../top_selling_titles_nintendo";
import { printTextBlock, border, liner, spacer, headerPrint, dateLabel, globImport } from "../../../utils/table_design_logic";
import type { searchTitles } from "../../capcom/platinum_titles_Capcom";

// avoid having empty lists [] in your collections from preparing for the next earnings
import { Titles, Header } from "../../../utils/top_selling_titles_logic";

const totalCollection: collectionJSON[] = [...globImport(new Map<number, collectionJSON>, import.meta.glob("../Top_Selling_Titles/*.json", { import: "default", eager: true }), "Ascending").values()]
    
    let totalCollectionSet: Titles[][][] = totalCollection.map(elem => {

        let flatList = elem.titles.flat();

        return flatList.map(value => titlesMake(value, undefined)).map(value => value.map(secondValue => { return { ...secondValue, fiscalYear: elem.fiscalYear}}))
    });

    // latestFYcollection is where the latest FY collection needs to be placed.
    // const latestFYcollection = fy3_2023_collection.map((elem, index) => {
    // const latestFYcollection = totalCollectionSet[totalCollectionSet.length-1].map((elem, index) => {
    //     // takes the latest data in the collection, maps it because it contains all the titles up to that date, 
    //     return sortingArrays(index)
    // })

    const flatCollection = totalCollectionSet.map((value) => value.map((secondValue) => secondValue.filter((thirdValue, thirdIndex) => thirdIndex === 3))).flat(2);

    const flatTitles = totalCollectionSet.map((value) => value.map((secondValue) => secondValue.filter((thirdValue, thirdIndex) => thirdIndex === 3))).flat(2).map(value => { return { title: value.title, platform: value.platform}})

    let filteredCollection = flatTitles.filter((elem, index, array) =>
    index === array.findIndex((value) => (
      value.title === elem.title && value.platform === elem.platform
    ))) // source for solution after Set wouldn't work: https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects

    function sortingTitles(titles: {title: string, platform: string}[]) {

        const setTitles: Titles[][] = titles.map((elem, index, array) => {

            let searchTitle = flatCollection.filter((value) => value.title === elem.title && value.platform === elem.platform)

            return searchTitle 
        })

        return setTitles
    };

    const latestFYcollection = sortingTitles(filteredCollection);

    const makeDateLabel = dateLabel(totalCollection.at(-1)?.fiscalYear ?? "N/A", totalCollection.at(-1)?.currentQuarter ?? 4);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

    const header: Header = {
        fiscalYear: "placeholder",
        mainHeader: "Nintendo Co., Ltd.",
        platform: "Platform",
        platformHeader: "Top Selling Titles - Cumulative",
        titles: "Title",
        units: "Units"
    }
    
    function accumulate(title: Titles[]): Titles[] {

        const title1Flat = title.flatMap((flat) => flat).reduce((prev, next) => {
            return {...prev, ...next}
        })
        
        return title.concat({
                ...title1Flat, 
            })
    };

    const printTitlesGlobal = (titles: Titles[][], returnObject?: boolean) => {

        const regionRank = titles.map((elem, index, array) => {
            
            let printPlatformAndRank: string = liner(border([
                spacer(elem[0].platform,29,"left"),
                spacer(`Rank ${elem[0].rank}`,10,"left")
            ]),"−","bottom",true) 
            
            let printTitleName = liner(printTextBlock(elem[0].title, 42),"−","both",true,42)

            let printTitleNameFixed: string = printTitleName + printPlatformAndRank;

            let yearValues: string[] = elem.filter((value, index) => { return value.value !== 0}).map((value, valueIndex, valueArray) => {
               return border([
                    spacer(value.fiscalYear + " Cumulative",29,"left"),
                    spacer(`${value.value}M`,10,"right")
               ],true) 
            }).filter((value, index) => index !== elem.length-1 );
                
        let printLTD: string = liner(border([
            spacer("Life-To-Date (Units)",29,"left"),
            spacer(`${elem[elem.length-1].value}M`,10,"right")
        ]),"=","both",true);
        
            // return [
            //     printTitleNameFixed,
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
                title: elem.at(-1)?.title ?? "ERROR",
                platforms: elem.at(-1)?.platform ?? "ERROR",
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

    const reducedArrays: Titles[][] = latestFYcollection.map((elem) => {

        return accumulate(elem)
    })
    
    const sortedWWLTDCollection: Titles[][] = reducedArrays.map((elem, index, array) => {
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

const printOneWW = headerPrint([
    header.mainHeader,
    header.platformHeader
],32) + "\n" + headerPrint([
    header.titles,
    header.platform,
    header.units,
],24)

const divideSortedGlobalCollection = sortedWWLTDCollection.map(elem => {
    return elem.map((secondElem, index, array) => {
        return (index === 0 || index === array.length-1)
            ? secondElem 
            : { ...secondElem, value: Number((secondElem.value - array[index-1].value).toFixed(2))}
    })
});
const printFour = printTitlesGlobal(divideSortedGlobalCollection, true) as searchTitles[];

// export const printTopSellingTitles = 
// `${printOneWW}
// ${printDateLabel}
// ${printFour}
// ###`;

export const printTopSellingTitles = {
    header: printOneWW + "\n",
    date: printDateLabel,
    titleList: printFour,
} 
