import { printSections, Earnings, Header, cumulativeCalculation, yearOnYearCalculation } from "../utils/earnings-logic";

const netSales: Earnings[] = [
    {
        category: "quarter",
        units: "currency",
        name: " 1st Quarter ",
        value: 61969
    },
    {
        category: "quarter",
        units: "currency",
        name: " 2nd Quarter ",
        cmlName: " First Half  ",
        value: 136812
    },
    {
        category: "quarter",
        units: "currency", 
        cmlName: " 1st 3 Qtrs  ",          
        name: " 3rd Quarter ",
        value: 311121
    },
    {
        category: "quarter",
        units: "currency", 
        cmlName: " FY3/17 Cml. ",         
        name: " 4th Quarter ",
        value: 489095
    },
]

const netSalesLastFy: Earnings[] = [
    {
        category: "quarter",
        units: "currency",
        name: " 1st Quarter ",
        value: 90223
    },
    {
        category: "quarter",
        units: "currency",
        name: " 2nd Quarter ",
        value: 204182
    },
    {
        category: "quarter",
        units: "currency",
        name: " 3rd Quarter ",
        value: 425664
    },
    {
        category: "quarter",
        units: "currency",
        name: " 4th Quarter ",
        value: 504459
    },
]

const netSalesForecasts: Earnings[] = [
    {
        category: "forecast",
        units: "currency",
        name: " FY3/17 Forecast ",
        value: 500000
    },
    {
        category: "forecast",
        units: "currency",
        name: " FCST Revision 1 ",
        value: 470000
    },
    {
        category: "forecast",
        units: "currency",
        name: " FCST Revision 2 ",
        value: 470000
    },
    {
        category: "forecast",
        units: "currency",
        name: " FY3/18 Forecast ",
        value: 750000
    },
]

const header: Header = {
        companyName: " Nintendo Co., Ltd.",
        netSales: " Net Sales ",
        operatingIncome: " Operating Income ",
        operatingMargin: " Operating Margin ",
        netIncome: " Net Income ",
        yearOnYearPercentage: "    YoY% ",
        fiscalYear: "FY3/2017 ",
        title: " Consolidated Operating Results   ",
    }

    function quarterlyCalculation(quarters: Earnings[]) {
        
        const calc = quarters.map((elem, index, array) => {
            return (index === 0) 
                    ? elem
                    : {...elem, value: elem.value - array[index-1].value}
        })
        
        return calc
    }

    const collection = [
        netSales,
        netSalesLastFy,
    ]

test("Quarterly Calculation returns type and not number", () => {
   const [netSalesDifference, netSalesLastFYDifference] = collection.map((elem) => {
        return quarterlyCalculation(elem)
    }) 

    console.log(netSalesDifference);
    console.log(netSalesLastFYDifference);

    let netSalesDifferenceExpected = [
        {
          category: 'quarter',  
          units: 'currency',    
          name: ' 1st Quarter ',
          value: 61969
        },
        {
          category: 'quarter',  
          units: 'currency',    
          name: ' 2nd Quarter ',
          cmlName: ' First Half  ',
          value: 74843
        },
        {
          category: 'quarter',
          units: 'currency',
          cmlName: ' 1st 3 Qtrs  ',
          name: ' 3rd Quarter ',
          value: 174309
        },
        {
          category: 'quarter',
          units: 'currency',
          cmlName: ' FY3/17 Cml. ',
          name: ' 4th Quarter ',
          value: 177974
        }
      ]

      let netSalesLastFYDifferenceExpected = [
        {
          category: 'quarter',
          units: 'currency',
          name: ' 1st Quarter ',
          value: 90223
        },
        {
          category: 'quarter',
          units: 'currency',
          name: ' 2nd Quarter ',
          value: 113959
        },
        {
          category: 'quarter',
          units: 'currency',
          name: ' 3rd Quarter ',
          value: 221482
        },
        {
          category: 'quarter',
          units: 'currency',
          name: ' 4th Quarter ',
          value: 78795
        }
      ]

      expect(netSalesDifference).toEqual(netSalesDifferenceExpected)
      expect(netSalesLastFYDifference).toEqual(netSalesLastFYDifferenceExpected)
    
})

// test("Print Section Net Sales Quarter 4", () => {
//     let currentQuarter = 4;

//     const [netSalesDifference, netSalesLastFYDifference] = collection.map((elem) => {
//         return quarterlyCalculation(elem)
//     })
//     const [netSalesCumulative, netSalesLastFYCumulative] = collection.map((elem) => {
//         return cumulativeCalculation(elem)
//     })

//     const yearOnYearCollection = [
//         netSalesDifference,
//         netSalesLastFYDifference,
//         netSalesCumulative,
//         netSalesLastFYCumulative
//     ]

//     // const [netSalesDifferenceYoy, netSalesCumulativeYoy] = yearOnYearCollection.map((elem, index, array) => {
//     //     return (index % 2 === 0)
//     //             ? yearOnYearCalculation(array[index], array[index+1])
//     //             : []
//     // }).filter((elem) => elem.length !== 0)

//     // const typeA = printSections() 
// })