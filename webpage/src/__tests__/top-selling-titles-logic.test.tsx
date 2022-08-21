import { validateJson } from "@mantine/core";
import { Titles } from "../utils/top-selling-titles-logic";

const title1: Titles[] = [
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 1st Quarter ",
        value: 37.08,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 2nd Quarter ",
        value: 38.74,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 3rd Quarter ",
        value: 43.35,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 4th Quarter ",
        value: 45.33,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " Q4 Last FY ",
        value: 35.39,
    },
]

const title2: Titles[] = [
    {
        title: " Super Mario Odyssey ", 
        period: " 1st Quarter ",
        value: 21.40,
    },
    {
        title: " Super Mario Odyssey ", 
        period: " 2nd Quarter ",
        value: 21.95,
    },
    {
        title: " Super Mario Odyssey ", 
        period: " 3rd Quarter ",
        value: 23.02,
    },
    {
        title: " Super Mario Odyssey ", 
        period: " 4th Quarter ",
        value: 23.50,
    },
    {
        title: " Super Mario Odyssey ", 
        period: " Q4 Last FY ",
        value: 20.83,
    },
]

// going to need to group the arrays
// going to need to sort the arrays by the fourth quarter value of the current fy
// going to need to use sort inside map??? sort mutates
// create a function to sort then
// use array destructuring for the output of the function
// add rank? to the Titles type
// map rank to each array.........
// 
// quarterly calculation...
// reference earnings logic qc
// no first halves, no first three quarters used
// consider using reduce fy cumulative figure
// 
// printing...
// must check length of title
// split title if length longer than 31
// figure out the rest...
// usual formatting, reference earnings logic
// 

// for using .sort and not mutating the original arrays use spread syntax, source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// eg const sorted = [...array].sort()
// source also has a mapping sort method

test("Arrays are sorted in descending order using 4th quarter as reference", () => {

    let currentQuarter = 4;

    let collection = [
        title1,
        title2,
    ] as const;

    const testCollection = collection.map((elem, index, array) => {
        // const [testOne, testTwo] = collection.map((elem, index, array) => {
            // let x: Titles[] = [...elem]
            return elem
        // return x[currentQuarter-1]
        // return x[index] === x[currentQuarter-1]
    }).sort((a, b) => { // descending currently
        return (a[currentQuarter-1].value > b[currentQuarter-1].value)
            ? 1
            : (a[currentQuarter-1].value < b[currentQuarter-1].value)
            ? -1
            : 0
    }).map((elem, index) => {
        // let x: Titles[] = [...elem]
        // console.log(x)
        // let y: Titles[] = [{...x, rank: index+1}]
        // })
        // return y
        // let x: Titles[] = [...elem]
        // console.log(elem)
        const y: Titles[] = [...elem].map((elemTwo, indexTwo) => {
            return {...elemTwo, rank: index+1} 
        })
        return y
    })
    
    // const testOne = title1.filter((elem, index) => {
        // return index === currentQuarter-1
    // })
    // .map((elem, index, array) => {
        // return { index, value: elem.value }
    // })


    // console.log(testOne)
    // console.log(testTwo)
    console.log(testCollection)

    
    // testCollection.sort((a, b) => { // sorts in descending order
    // testCollection.sort((b, a) => { // sorts in ascending order
    //     return (a.value > b.value) 
    //         ? 1
    //         : (a.value < b.value) 
    //         ? -1
    //         : 0
    // })

    // console.log(testCollection)


    // const result: Titles[] = testCollection.map((elem, index) => {
    //     return {...elem, rank: index+1}
    // })
    // // const result = testCollection.map((elem) => title1[elem.index])
    // console.log(result)

    // const newCollection = collection.map((elem, index, array) => {
    //     if (result[index].title === elem[currentQuarter-1].title) {
    //         return {...elem, rank: result[index].rank}
    //     } else {
    //         return elem
    //     }
    // })

    // console.log(newCollection)
})