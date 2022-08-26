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


    function sortingArrays(titleCount: number) {

        const testTitle1 = totalCollection.map((elem, index) => {
            
            return (elem[titleCount] === undefined)
                ? []
                : elem[titleCount]
    
        }).filter((elem) => elem.length !== 0)

        const filterTitle1 = testTitle1.map((elem) => {
            return elem.filter((secondElem, index, array) => {
                return secondElem.valueC !== 0 && secondElem.period === " 4th Quarter  "
            })
        }).filter((elem) => elem.length !== 0) 
        
        return filterTitle1.flat() // return was deeply nested
    }
    

    // function accumulate(title: Titles[][]) {
    function accumulate(title: Titles[]) {

        const japanTitle1 = title.map((elem, index, array) => {
            // return elem[0].valueA
            return elem.valueA
        }).reduce((prev, next) => prev + next)
    
        
        const overseasTitle1 = title.map((elem, index, array) => {
            // return elem[0].valueB
            return elem.valueB
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

    const testingFunction = fy3_22_collection.map((elem, index) => {
        // console.log(index);
        
        return sortingArrays(index)
    })

    // console.log(testingFunction);
    
    
})

test("combining all of the above so far...", () => {


    const testingFunction = fy3_22_collection.map((elem, index) => {
        
        return sortingArrays(index)
    })

    const [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, ...fifteen] = testingFunction

    // console.log(fourteen);
    
    // console.log(accumulate(fourteen));

    const reducedArrays = testingFunction.map((elem) => {

        // return accumulate(testingFunction) // accidentally put the whole array of arrays in but... it gave me the totals for Japan and Overseas // only worked on old function version

        return accumulate(elem)
    })

    // console.log(reducedArrays);
    
})

test("now to rank the titles by each region...", () => {

    
    const testingFunction = fy3_22_collection.map((elem, index) => {
        
        return sortingArrays(index)
    })

    const reducedArrays = testingFunction.map((elem) => {

        return accumulate(elem)
    })

    
    const sortedJapanCollection = reducedArrays.map((elem, index, array) => {
            return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
    }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
        return (a.valueA > b.valueA)
            ? 1
            : (a.valueA < b.valueA)
            ? -1
            : 0 // 4th quarter WW FY is index 11
    }).map((elem, index) => {
        // x is a nested map so that the actual elements of the array can be accessed, the level above is arrays being the elements since it is a collection of arrays
        // const x: Titles[] = [...elem].map((elemTwo) => {
        //     return {...elemTwo, rank: index+1} 
        // })
        return {...elem, rank: index+1} // x which is the returned array is now returned to the array of arrays
    }).filter((elem) => {
        return elem.valueA !== 0
    }) // for filtering out games not published by Nintendo in Japan

    console.log(sortedJapanCollection);
    

})