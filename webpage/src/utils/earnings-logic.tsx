
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

const netSalesForecasts: Forecasts = {
    currentFiscalYearForecast: 1600000,
    nextFiscalYearForecast: 0,
}

// need to avoid using for loops...
// try using array.map.filter.reduce
// rest pararmeters and spread syntax where needed
// template literals
const netSales2: Quarters = quarterlyCalculation(netSales);

export function quarterlyCalculation(quarters: Quarters) {

    const keys: string[] = Object.keys(quarters)
    const values: number[] = Object.values(quarters)

    const quarterDifference = Object.values(quarters).map((x, i) => {
      if (i === 0) {
        return x
      } else {
        let y = x - values[i-1] // you need to copy the array to do this since you cannot reference an element's index...
        return y
      }
    })

    const reshape = keys.map((x, i) => {
        return {
          [x]: quarterDifference[i] 
        }
    }).reduce((acc, cur) => ({...acc, ...cur}), {}); // source for solution, but typescript won't let me assert Quarter to it... https://stackoverflow.com/questions/43957032/spread-syntax-not-working-as-expected-with-array-of-objects#:~:text=When%20spreading%20into%20an%20Object%2C%20the%20value%20of,each%20property%20is%20its%20index%20in%20the%20array.

    return reshape as Quarters

  // alternative method which is much less complicated than the above solution, doesn't require type assertion and is only okay for objects that don't increase in count.
//   const quarterDifference: Quarters = {
//     firstQuarter: quarters.firstQuarter,
//     secondQuarter: quarters.secondQuarter - quarters.firstQuarter,
//     thirdQuarter: quarters.thirdQuarter - quarters.secondQuarter,
//     fourthQuarter: quarters.fourthQuarter - quarters.thirdQuarter,
//   }

//   const mergeQuarters: Quarters = { ...quarters, ...quarterDifference}

}