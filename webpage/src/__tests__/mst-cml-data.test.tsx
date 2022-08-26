import { collection as fy3_17_collection } from "../data/nintendo/Nintendo-FY3-2017/mst-fy3-17";
import { collection as fy3_18_collection } from "../data/nintendo/Nintendo-FY3-2018/mst-fy3-18";
import { collection as fy3_19_collection } from "../data/nintendo/Nintendo-FY3-2019/mst-fy3-19";
import { collection as fy3_20_collection } from "../data/nintendo/Nintendo-FY3-2020/mst-fy3-20";
import { collection as fy3_21_collection } from "../data/nintendo/Nintendo-FY3-2021/mst-fy3-21";
import { collection as fy3_22_collection } from "../data/nintendo/Nintendo-FY3-2022/mst-fy3-22";

import { Titles } from "../utils/fy-million-seller-titles-logic"

    const totalCollection = [
        fy3_17_collection,
        fy3_18_collection,
        fy3_19_collection,
        fy3_20_collection,
        fy3_21_collection,
        fy3_22_collection,
    ] as const;

    function accumulate(title: Titles[][]) {

        const japanTitle1 = title.map((elem, index, array) => {
            return elem[0].valueA
        }).reduce((prev, next) => prev + next)
    
        
        const overseasTitle1 = title.map((elem, index, array) => {
            return elem[0].valueB
        }).reduce((prev, next) => prev + next)
        
        
        const title1Flat = title.flatMap((flat) => flat).reduce((prev, next) => {
            return {...prev, ...next}
        })
    
        return {
                ...title1Flat, 
                valueA: japanTitle1, 
                valueB: overseasTitle1, 
                valueC: 0
            }
    } 

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

    const japanTitle1 = title1.map((elem, index, array) => {
        return elem[0].valueA
    }).reduce((prev, next) => prev + next)

    
    const overseasTitle1 = title1.map((elem, index, array) => {
        return elem[0].valueB
    }).reduce((prev, next) => prev + next)
    
    
    const title1Flat = title1.flatMap((flat) => flat).reduce((prev, next) => {
        return {...prev, ...next}
    })

    const title1Fixed = {...title1Flat, valueA: japanTitle1, valueB: overseasTitle1, valueC: 0}
    // .map((elem) => {
    //     return {...elem, valueA: japanTitle1, valueB: overseasTitle1}
    // })

    // console.log(japanTitle1);
    // console.log(overseasTitle1);
    // console.log(title1Fixed);
    
    
    // console.log(title1);
    // valueA sum: 122 + 62 + 61 + 33 = 278
        
})

test("combine methods into one function", () => {

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

    function accumulate(title: Titles[][]) {

        const japanTitle1 = title.map((elem, index, array) => {
            return elem[0].valueA
        }).reduce((prev, next) => prev + next)
    
        
        const overseasTitle1 = title.map((elem, index, array) => {
            return elem[0].valueB
        }).reduce((prev, next) => prev + next)
        
        
        const title1Flat = title.flatMap((flat) => flat).reduce((prev, next) => {
            return {...prev, ...next}
        })
    
        return {
                ...title1Flat, 
                valueA: japanTitle1, 
                valueB: overseasTitle1, 
                valueC: 0
            }
    } 

    // console.log(accumulate(title1));
    

})

test("sort the titles into separate arrays...", () => {

    // const flatCollection = totalCollection.flatMap((elem) => elem).map((elem) => {
    //     return elem.filter((secondElem, index, array) => {
    //         return secondElem.valueC !== 0 && secondElem.period === " 4th Quarter  "
    //     })
    // }).filter((elem) => elem.length !== 0)

    // console.log(flatCollection);

    // console.log(totalCollection);

    // console.log(totalCollection[1][0]);

    const testTitle1 = totalCollection.map((elem, index) => {
        // console.log(elem[0]);
        
        return (elem[2] === undefined)
            ? []
            : elem[2]

    }).filter((elem) => elem.length !== 0)

    console.log(testTitle1);

    const filterTitle1 = testTitle1.map((elem) => {
        return elem.filter((secondElem, index, array) => {
            return secondElem.valueC !== 0 && secondElem.period === " 4th Quarter  "
        })
    }).filter((elem) => elem.length !== 0)

    console.log(filterTitle1);
    
    // console.log(accumulate(filterTitle1));
    
    // console.log(fy3_22_collection.length);

    function sortingArrays(titleCount: number) {

        const testTitle1 = totalCollection.map((elem, index) => {
            
            return (elem[titleCount] === undefined)
                ? []
                : elem[titleCount]
    
        }).filter((elem) => elem.length !== 0)

        // console.log(testTitle1);
    
        const filterTitle1 = testTitle1.map((elem) => {
            return elem.filter((secondElem, index, array) => {
                return secondElem.valueC !== 0 && secondElem.period === " 4th Quarter  "
            })
        }).filter((elem) => elem.length !== 0) 

        // console.log(filterTitle1);
        

        return filterTitle1.flat() // return was deeply nested
    }
    
    const [one, ...testingFunction] = fy3_22_collection.map((elem, index) => {
        console.log(index);
        
        return sortingArrays(index)
    })

    console.log(testingFunction);
    
    
})