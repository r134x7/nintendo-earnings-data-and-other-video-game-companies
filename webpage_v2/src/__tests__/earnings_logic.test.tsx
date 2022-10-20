import { printSections, Earnings, Header, cumulativeCalculation } from "../utils/earnings_logic";

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
        
        // calc needs to be defined as earnings to retain its type when making any changes
        const calc: Earnings[] = quarters.map((elem, index, array) => {
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

    function yearOnYearCalculation(thisFY: Earnings[], lastFY: Earnings[]) {

        // calc needs to be defined as earnings to retain its type when making any changes
        const calc: Earnings[] = thisFY.map((elem, index) => {

            return (lastFY[index].value < 0)
                    ? {...elem, units: "percentage", value: Number(
                        ((((elem.value / lastFY[index].value) -1)* -1) * 100).toFixed(2)
                        )
                      }
                    : {...elem, units: "percentage", value: Number(
                        (((elem.value / lastFY[index].value) -1) * 100).toFixed(2)
                        )
                      }; // .toFixed(2) to round the number by two decimal points regardless of Number will output a string, whole thing needs to be wrapped in Number to change type back from string to number  
        })

       return calc
    }

const printNetSales = (header: Header, netSalesDifference: Earnings[], netSalesDifferenceYoy: Earnings[], netSalesCumulative: Earnings[], netSalesCumulativeYoy: Earnings[], netSalesForecasts: Earnings[], currentQuarter: number) =>
`+${"-".repeat(38)}+
|${header.netSales}                 |${header.yearOnYearPercentage}|
+${"-".repeat(38)}+
${printSections(netSalesDifference, netSalesDifferenceYoy, currentQuarter)}
+${(currentQuarter > 1) ? "=".repeat(38)+"+\n" + printSections(netSalesCumulative, netSalesCumulativeYoy, currentQuarter) : "=".repeat(38)+"+" }${(currentQuarter === 2) ? `\n+${"-".repeat(38)}+\n` + printSections(netSalesForecasts, [], currentQuarter) : (currentQuarter === 1) ? `\n` + printSections(netSalesForecasts, [], currentQuarter) : printSections(netSalesForecasts, [], currentQuarter) }
+${"-".repeat(32)}+`;

test("Quarterly Calculation returns type and not number", () => {
   const [netSalesDifference, netSalesLastFYDifference] = collection.map((elem) => {
        return quarterlyCalculation(elem)
    }) 

    // console.log(netSalesDifference);
    // console.log(netSalesLastFYDifference);

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


test("Year on Year calculation returns type and not number", () => {

    const [netSalesDifference, netSalesLastFYDifference] = collection.map((elem) => {
        return quarterlyCalculation(elem)
    })
    const [netSalesCumulative, netSalesLastFYCumulative] = collection.map((elem) => {
        return cumulativeCalculation(elem)
    })
    const yearOnYearCollection = [
        netSalesDifference,
        netSalesLastFYDifference,
        netSalesCumulative,
        netSalesLastFYCumulative
    ]

    const [netSalesDifferenceYoy, netSalesCumulativeYoy] = yearOnYearCollection.map((elem, index, array) => {
        // console.log(elem);
        
        return (index % 2 === 0)
                ? yearOnYearCalculation(array[index], array[index+1])
                : []
    }).filter((elem) => elem.length !== 0)

    // console.log(netSalesDifferenceYoy);
    // console.log(netSalesCumulativeYoy);
    
    let netSalesDifferenceYoyExpected = [
        {
          category: 'quarter',
          units: 'percentage',
          name: ' 1st Quarter ',
          value: -31.32
        },
        {
          category: 'quarter',
          units: 'percentage',
          name: ' 2nd Quarter ',
          cmlName: ' First Half  ',
          value: -34.32
        },
        {
          category: 'quarter',
          units: 'percentage',
          cmlName: ' 1st 3 Qtrs  ',
          name: ' 3rd Quarter ',
          value: -21.3
        },
        {
          category: 'quarter',
          units: 'percentage',
          cmlName: ' FY3/17 Cml. ',
          name: ' 4th Quarter ',
          value: 125.87
        }
      ]
    
    let netSalesCumulativeYoyExpected =  [
        {
          category: 'cumulative',
          units: 'percentage',
          name: ' 2nd Quarter ',
          cmlName: ' First Half  ',
          value: -33
        },
        {
          category: 'cumulative',
          units: 'percentage',
          cmlName: ' 1st 3 Qtrs  ',
          name: ' 3rd Quarter ',
          value: -26.91
        },
        {
          category: 'cumulative',
          units: 'percentage',
          cmlName: ' FY3/17 Cml. ',
          name: ' 4th Quarter ',
          value: -3.05
        }
      ]
      
      expect(netSalesDifferenceYoy).toEqual(netSalesDifferenceYoyExpected)
      expect(netSalesCumulativeYoy).toEqual(netSalesCumulativeYoyExpected) 
})

test("Print Section Net Sales Quarters Quarter 4", () => {
    let currentQuarter = 4;

    const [netSalesDifference, netSalesLastFYDifference] = collection.map((elem) => {
        return quarterlyCalculation(elem)
    })
    const [netSalesCumulative, netSalesLastFYCumulative] = collection.map((elem) => {
        return cumulativeCalculation(elem)
    })

    const yearOnYearCollection = [
        netSalesDifference,
        netSalesLastFYDifference,
        netSalesCumulative,
        netSalesLastFYCumulative
    ]

    const [netSalesDifferenceYoy, netSalesCumulativeYoy] = yearOnYearCollection.map((elem, index, array) => {
        return (index % 2 === 0)
                ? yearOnYearCalculation(array[index], array[index+1])
                : []
    }).filter((elem) => elem.length !== 0)

    const typeA = printSections(netSalesDifference, netSalesDifferenceYoy, currentQuarter) 

    // console.log(typeA);
    
})

test("print section all of Net Sales Quarter 4", () => {
    let currentQuarter = 4;

    const [netSalesDifference, netSalesLastFYDifference] = collection.map((elem) => {
        return quarterlyCalculation(elem)
    })
    const [netSalesCumulative, netSalesLastFYCumulative] = collection.map((elem) => {
        return cumulativeCalculation(elem)
    })

    const yearOnYearCollection = [
        netSalesDifference,
        netSalesLastFYDifference,
        netSalesCumulative,
        netSalesLastFYCumulative
    ]

    const [netSalesDifferenceYoy, netSalesCumulativeYoy] = yearOnYearCollection.map((elem, index, array) => {
        return (index % 2 === 0)
                ? yearOnYearCalculation(array[index], array[index+1])
                : []
    }).filter((elem) => elem.length !== 0) 

    const typeB = printNetSales(header, netSalesDifference, netSalesDifferenceYoy, netSalesCumulative, netSalesCumulativeYoy, netSalesForecasts, currentQuarter)
    
    // console.log(typeB)
})