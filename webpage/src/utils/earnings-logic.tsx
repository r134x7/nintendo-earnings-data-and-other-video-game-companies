
// need to make test data 

// net_sales_1 = [ 
//     # input cumulative figures:
//     307460, # [0] Q1
//     624272, # [1] Q2
//     1320219, # [2] Q3
//     1695344, # [3] Q4
//     1600000, # [4] current fiscal year forecast
//     0, # [5] next fiscal year forecast (you wouldn't expect to use this until Q4 results)
//     0, # [6] 1st forecast revision
//     0, # [7] 2nd forecast revision
//     0 # [8] 3rd forecast revision (unlikely but there just in case)
//     ]

interface Quarters {
    firstQuarter: number,
    secondQuarter: number,
    thirdQuarter: number,
    fourthQuarter: number,
}

interface Forecasts {
    currentFiscalYearForecast: number,
    nextFiscalYearForecast: number,
    firstForecastRevision?: number,
    secondForecastRevision?: number,
    thirdForecastRevision?: number,
}

type Consolidated = Quarters | Forecasts;

const netSales: Quarters = {
    firstQuarter: 307460,
    secondQuarter: 624272,
    thirdQuarter: 1320219,
    fourthQuarter: 1695344,
};

const netSalesForecasts: Forecasts[] = [{
    currentFiscalYearForecast: 1600000,
    nextFiscalYearForecast: 0,
}]

// need to avoid using for loops...
// try using array.map.filter.reduce
// rest pararmeters and spread syntax where needed
// template literals
quarterlyCalculation(netSales);

const yearsList: any = []; // empty array 
Array.from({length: 6}, (v, i) => i).map(x => x = 1).reduce((acc, curr) => yearsList.push("FY3/" + (acc + curr + 2016).toString()), 0) // yearsList gets an array containing years from 2017 to 2022

export function quarterlyCalculation(quarters: Quarters) {
    // let test = quarters.map((quarter, index) => {
    //     return (index === 1) 
    //             ? quarter.secondQuarter - quarter.firstQuarter
    //             : (index === 2)
    //             ? quarter.thirdQuarter - quarter.secondQuarter
    //             : (index === 3)
    //             ? quarter.fourthQuarter - quarter.thirdQuarter
    //             : quarter.firstQuarter // do nothing
    // // })
    // const y = [];
    // const test = Object.values(quarters)
    
    const y: number[] = [];
    // const test = Object.values(quarters).reduce((acc: number, curr: number, index) => (index === 0) ? y.push(acc) : y.push(curr - acc))

    const test = Object.values(quarters).reduce((acc: number, curr: number, index) => 
          y.push(acc + curr) )
// const test = Object.values(quarters).reduce((acc, curr) => acc + curr, 0)
// const test = Object.values(quarters).map((x: number[], index) => x )

  // const test2 = 
  const quarterDifference: Quarters = {
    firstQuarter: quarters.firstQuarter,
    secondQuarter: quarters.secondQuarter - quarters.firstQuarter,
    thirdQuarter: quarters.thirdQuarter - quarters.secondQuarter,
    fourthQuarter: quarters.fourthQuarter - quarters.thirdQuarter,
  }

  const mergeQuarters: Quarters = { ...quarters, ...quarterDifference}

    console.log(mergeQuarters)
    console.log(y)
    console.log(quarters)
    
    


    return console.log(test);

    
    
}