
interface Quarter {
    quarter: number,
  }
  
  const netSales: Quarter[] = [
      {quarter: 307460},
      {quarter: 624272},
      {quarter: 1320219},
      {quarter: 1695344},
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

const netSalesDifference: Quarter[] = quarterlyCalculation(netSales)

export function quarterlyCalculation(quarters: Quarter[]) {
    
    const calc = quarters.map((x,i, array) => {
         return (i === 0) ? x : { quarter: x.quarter - array[i-1].quarter} // Finally figured out how to do it correctly with its own parameters
      })
    
    return calc
}