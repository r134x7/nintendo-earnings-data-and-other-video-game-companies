
interface Quarter {
    quarter: number,
  }
  
const netSales: Quarter[] = [
    {quarter: 307460},
    {quarter: 624272},
    {quarter: 1320219},
    {quarter: 1695344},
]

const netSalesLastFy: Quarter[] = [
    {quarter: 358106},    
    {quarter: 769524},
    {quarter: 1404463},
    {quarter: 1758910},
]

const operatingIncome: Quarter[] = [
  {quarter: 101647}, 
  {quarter: 219959}, 
  {quarter: 472551}, 
  {quarter: 592760}, 
]
  

interface Forecasts { // this type might have to change.
    currentFiscalYearForecast: number,
    nextFiscalYearForecast: number,
    firstForecastRevision?: number,
    secondForecastRevision?: number,
    thirdForecastRevision?: number,
}

// type Consolidated = Quarters | Forecasts;

const netSalesForecasts: Forecasts = {
    currentFiscalYearForecast: 1600000,
    nextFiscalYearForecast: 0,
}

// need to avoid using for loops...
// try using array.map.filter.reduce
// rest pararmeters and spread syntax where needed
// template literals
// array or object destructuring

// const netSalesDifference: Quarter[] = quarterlyCalculation(netSales);

// const operatingIncomeDifference: Quarter[] = quarterlyCalculation(operatingIncome);

const collection = [
    netSales,
    operatingIncome,
]

const [netSalesDifference, operatingIncomeDifference] = collection.map((elem) => {
    return quarterlyCalculation(elem)
})

console.log(netSalesDifference);
console.log(operatingIncomeDifference);



const netSalesCumulative: Quarter[] = cumulativeCalculation(netSales)

export function quarterlyCalculation(quarters: Quarter[]) {
    
    const calc = quarters.map((elem, index, array) => {
         return (index === 0) ? elem : { quarter: elem.quarter - array[index-1].quarter} // Finally figured out how to do it correctly with its own parameters
      })
    
    return calc
}

export function cumulativeCalculation(quarters: Quarter[]) {

    const calc = quarters.filter((elem, index, array) => {
        return elem !== array[0]
    })

    return calc
    
}

