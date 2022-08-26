import { collection as fy3_17_collection } from "../data/nintendo/Nintendo-FY3-2017/mst-fy3-17";
import { collection as fy3_18_collection } from "../data/nintendo/Nintendo-FY3-2018/mst-fy3-18";
import { collection as fy3_19_collection } from "../data/nintendo/Nintendo-FY3-2019/mst-fy3-19";
import { collection as fy3_20_collection } from "../data/nintendo/Nintendo-FY3-2020/mst-fy3-20";
import { collection as fy3_21_collection } from "../data/nintendo/Nintendo-FY3-2021/mst-fy3-21";
import { collection as fy3_22_collection } from "../data/nintendo/Nintendo-FY3-2022/mst-fy3-22";

    const totalCollection = [
        fy3_17_collection,
        fy3_18_collection,
        fy3_19_collection,
        fy3_20_collection,
        fy3_21_collection,
        fy3_22_collection,
    ] as const;

test("mapping and filtering one title...", () => {

    // const filteredCollection = totalCollection.map((elem, index, array) => {
    //     return elem.map((secondElem, secondIndex, secondArray) => {
            
    //         return secondElem.filter((thirdElem, thirdIndex, thirdArray) => {
    //         return thirdElem.title === " Super Mario Party "
    //         })
    //     })
    // }).filter((elem, index) => elem.length !== 0)

    const flatCollection = totalCollection.flatMap((elem) => elem).map((elem) => {
        return elem.filter((secondElem, index, array) => {
            return secondElem.valueC !== 0 && secondElem.period === " 4th Quarter  "
        })
    }).filter((elem) => elem.length !== 0)

    // console.log(flatCollection);
    
})

test("filtering to a title with the same name and then reduce...", () => {

    const flatCollection = totalCollection.flatMap((elem) => elem).map((elem) => {
        return elem.filter((secondElem, index, array) => {
            return secondElem.valueC !== 0 && secondElem.period === " 4th Quarter  "
        })
    }).filter((elem) => elem.length !== 0)

    const title1 = flatCollection.map((elem, index) => {
        return elem.filter((secondElem, secondIndex) => {
            return secondElem.title === " Super Mario Party "
        })
    }).filter((elem) => elem.length !== 0)

    // const flatTitle1 = title1.reduce((prev, next, index, array) => {
    //     // console.log(next);
        
    //                             return {
                                    
    //                                 ...prev, ...next
    //                                     // valueA: next.valueA
    //                                     // this isn't working...
    //                                 }
    //                          })

    // const flatTitle1 = title1.flatMap((flat) => flat).map((elem, index, array) => {
    //     console.log(elem);
        
    //     return (index !== array.length-1)
    //             ? {
    //                 ...elem,
    //                 valueA: [array[index].valueA]
    //                 }
    //             : elem
    // })

    const flatTitle1 = title1.map((elem, index, array) => {
        return elem[0].valueA
    }).reduce((prev, next) => prev + next)

    console.log(flatTitle1);
    // console.log(title1);
    // valueA sum: 122 + 62 + 61 + 33 = 278
        
})