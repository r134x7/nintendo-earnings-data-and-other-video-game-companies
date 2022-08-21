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

// for using .sort and not mutating the original arrays use mapping sort method, source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

test("Arrays are sorted in descending order using current quarter as reference", () => {

    let currentQuarter = 4;

    let collection = [
        title1,
        title2,
    ] as const;

    const testCollection = collection.map((elem, index, array) => {
            return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
    }).sort((b, a) => { // (b,a) is ascending order, (a,b) sorts in descending order
        return (a[currentQuarter-1].value > b[currentQuarter-1].value)
            ? 1
            : (a[currentQuarter-1].value < b[currentQuarter-1].value)
            ? -1
            : 0
    }).map((elem, index) => {
        // x is a nested map so that the actual elements of the array can be accessed, the level above is arrays being the elements since it is a collection of arrays
        const x: Titles[] = [...elem].map((elemTwo) => {
            return {...elemTwo, rank: index+1} 
        })
        return x // x which is the returned array is now returned to the array of arrays
    })
    
    console.log(testCollection)
})