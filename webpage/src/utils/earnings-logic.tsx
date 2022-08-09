
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

export function quarterlyCalculation() {

    
}