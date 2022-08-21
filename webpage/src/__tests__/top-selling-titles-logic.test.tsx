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
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 1st Quarter ",
        value: 23.20,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 2nd Quarter ",
        value: 24.13,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 3rd Quarter ",
        value: 25.80,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 4th Quarter ",
        value: 26.55,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " Q4 Last FY ",
        value: 22.28,
    },
]

const collection = [
    title1,
    title2,
] as const;

// printing...
// must check length of title
// split title if length longer than 31
// figure out the rest...
// usual formatting, reference earnings logic
// 

// for using .sort and not mutating the original arrays use mapping sort method, source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

test("Arrays are sorted in descending order using current quarter as reference", () => {

    let currentQuarter = 4;


    const testCollection = collection.map((elem, index, array) => {
            return elem // we need to create a new array that is identical to the original due to sort's mutating properties.
    }).sort((b, a) => { // (b,a) is descending order, (a,b) sorts in ascending order
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
    
    // console.log(testCollection)
})

test("quarterly calculation for arrays", () => {

 function quarterlyCalculation(quarters: Titles[]) {
        
    // calc needs to be defined as earnings to retain its type when making any changes
    const calc: Titles[] = quarters.map((elem, index, array) => {
        return (index === 0) 
                ? {...elem, value: Number((elem.value - array[4].value).toFixed(2))
                } // to subtract from the LTD figure last FY
                : (index !== 4 && index !== 0)
                ? {...elem, value: Number((elem.value - array[index-1].value).toFixed(2))}
                : elem // no changes to LTD figure last FY
    })
    
    return calc
 }

 const [testOne, testTwo] = collection.map((elem) => {
    return quarterlyCalculation(elem)
 })

//  console.log(testOne);
//  console.log(testTwo);
 

})

test("printing...", () => {
    let currentQuarter = 4;

    const printTitles = (titleDifference: Titles[], currentQuarter: number) => {
        
        return titleDifference.filter((elem, index) => {
            return index < currentQuarter
        }).map((elem, index) => {

            let printTitleName = (elem.title.length > 31)
            ? elem.title.split("")
            : elem.title

            console.log(printTitleName);
            

            // let printTitleNameFixed
            // need to reduce the first line of the title up to length 30 and then new line... so see if acc gives length
        })
    }

    const [testOne, testTwo] = collection.map((elem) => {
        return printTitles(elem, currentQuarter)
    })

})