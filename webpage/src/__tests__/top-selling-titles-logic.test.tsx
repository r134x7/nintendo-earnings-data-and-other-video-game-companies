import { Header } from "../utils/earnings-logic";
import { Titles } from "../utils/top-selling-titles-logic";

const title1: Titles[] = [
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 1st Quarter         ",
        value: 37.08,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 2nd Quarter         ",
        value: 38.74,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 3rd Quarter         ",
        value: 43.35,
    },
    {
        title: " Mario Kart 8 Deluxe ",
        period: " 4th Quarter         ",
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
        period: " 1st Quarter         ",
        value: 23.20,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 2nd Quarter         ",
        value: 24.13,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 3rd Quarter         ",
        value: 25.80,
    },
    {
        title: " The Legend of Zelda: Breath of the Wild ", 
        period: " 4th Quarter         ",
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

// for using .sort and not mutating the original arrays use mapping sort method, source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

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

const printTitles = (titleDifference: Titles[], currentQuarter: number) => {
        
    return titleDifference.filter((elem, index) => {
        return index < currentQuarter
    }).map((elem, index) => {

        let printRank: string = ` Rank ${elem.rank} `
        let printRankFixed: string = (printRank.length >= 10)
                ? printRank
                : " ".repeat(10 - printRank.length) + printRank;

        let printTitleName: string = (elem.title.length > 31)
        ? elem.title.split("").reduce((prev, next, index, array) => {

            if (prev.length === 31 && next === " ") {
                return prev + `\n` + next
            } else {
                return prev + next
            }
        })
        : elem.title

        let printTitleNameFixed: string = "+"+"-".repeat(43)+"+\n|"+ printTitleName + "|" + printRankFixed + "|"

        let printValue: string = `${elem.value}M `
        let printValueFixed: string = (printValue.length >= 10)
            ? printValue
            : " ".repeat(10 - printValue.length) + printValue;
        
        // return "|" + elem.period + "|" + printValueFixed + "|"
        return (index === 0) 
                ? printTitleNameFixed + "\n|" + elem.period + "|" + printValueFixed + "|" 
                : "|" + elem.period + "|" + printValueFixed + "|"
    })
}

const printTitleLTD = (titleLTD: Titles[], currentQuarter: number) => {

    // titleLTD[currentQuarter-1]

    let printValue: string = `${titleLTD[currentQuarter-1].value}M `
    let printValueFixed: string = (printValue.length === 10)
            ? printValue
            : " ".repeat(10 - printValue.length) + printValue;

        return "| Life-To-Date        |" + printValueFixed + "|"

}

const printTitleFYCml = (titleDifference: Titles[], currentQuarter: number) => {

    return titleDifference.filter((elem, index) => {
        return index < currentQuarter
    }).reduce((prev, next) => {

        return {...prev, ...next} // reduces all objects using spread syntax, + operator can't be used.
    })

}

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

 const [testOne, testTwo] = collection.map((elem) => {
    return quarterlyCalculation(elem)
 })

//  console.log(testOne);
//  console.log(testTwo);
 

})

test("printing titles and quarterly numbers", () => {
    let currentQuarter = 4;

    
//    0.24M  l: 10
// 1st Quarter     l: 21    
    const [testOne, testTwo] = collection.map((elem) => {
        return printTitles(elem, currentQuarter)
    })

    // console.log(testOne);
    // console.log(testTwo);
    
})

test("printing fy cumulative", () => {
    let currentQuarter = 4;

    const collectionDifference = collection.map((elem) => {
        return quarterlyCalculation(elem)
    })

    
    const [testOne, testTwo] = collectionDifference.map((elem) => {
        return printTitleFYCml(elem, currentQuarter)
    })
    
    // console.log(testOne);
    // console.log(testTwo);
    
})

test("printing LTD", () => {

   let currentQuarter = 3; 

//    const testOne = collection.map((elem, index) => elem[currentQuarter-1]) // map needs to be used to filter through an array of arrays

    // const [testThree, testFour] = testOne.map((elem) => {
        // return printTitleLTD(elem)
    // })
    const [testThree, testFour] = collection.map((elem) => {
        return printTitleLTD(elem, currentQuarter)
    })

    console.log(testThree)
    console.log(testFour);
    
})

test("print body", () => {

    let currentQuarter = 4;

//line
// title | rank
// line
// quarters
// double line
// fy cml
// ltd
// no line unless last title
// looks like I'll run into the issue with titles that aren't on the ranking for four quarters...
//+-------------------------------------------+
const printBody = (quarter: Titles[], FYCml: Titles[], LTD: Titles[], currentQuarter: number) => 
`+${"-".repeat(43)}+
${printTitles(quarter, currentQuarter)}
+${"=".repeat(43)}+
${printTitleFYCml(FYCml, currentQuarter)}
${printTitleLTD(LTD, currentQuarter)}
+${"-".repeat(43)}+`;

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

   const [testOne, testTwo] = testCollection.map((elem) => {
        return quarterlyCalculation(elem)
   }) 

   const [testOneFYCml, testTwoFYCml] = [testOne, testTwo].map((elem) => {
        return printTitleFYCml(elem, currentQuarter)
   })

   const [testOneLTD, testTwoLTD] = testCollection.map((elem) => {
        return printTitleLTD(elem, currentQuarter)
   })

   const testOneArrays = [
        testOne,
        testOneFYCml,
        testOneLTD,
        currentQuarter
   ] as const;

   const testTwoArrays = [
        testTwo,
        testTwoFYCml,
        testTwoLTD,
        currentQuarter,
   ] as const;
})