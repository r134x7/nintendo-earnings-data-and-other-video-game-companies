export type Section = {
    units: "units" | "percentage" | "currency" | "NaN" ,
    period: " 1st Quarter " | " 2nd Quarter " | " 3rd Quarter " | " 4th Quarter " | " Last FY Cumulative " | "Forecast " | " FCST Revision 1 " | " FCST Revision 2 " | " FCST Revision 3 "
    cmlPeriod: " 1st Quarter " | " First Half  " | " 1st 3 Qtrs  " | "Cml. ",
    name: string,
    value: number,
}

export type Header = {
    switchHeader: "| Nintendo Switch   |",
    secondHeader: "| Sales Units and Forecast     |",
    fiscalYear: string,
    nextFiscalYearShort: string,
}

export function quarterlyCalculation(quarters: Section[]) {
        
    const calc: Section[] = quarters.map((elem, index, array) => {
        return (index === 0 || quarters[index].period === " Last FY Cumulative ") // 1st Quarter or last FY number
                ? elem
                : {...elem, value: elem.value - array[index-1].value}
    })
    
    return calc
}

export function yearOnYearCalculation(thisFY: Section[], lastFY: Section[]) {

        const calc: Section[] = thisFY.map((elem, index) => {

            return (lastFY[index].value < 0)
                    ? {...elem, units: "percentage", value: Number(
                        ((((elem.value / lastFY[index].value) -1)* -1) * 100).toFixed(2)
                        )
                      }
                    : (lastFY[index].value === 0)
                    ? {...elem, units: "NaN", value: 0}
                    :{...elem, units: "percentage", value: Number(
                        (((elem.value / lastFY[index].value) -1) * 100).toFixed(2)
                        )
                      }; // .toFixed(2) to round the number by two decimal points regardless of Number will output a string, whole thing needs to be wrapped in Number to change type back from string to number  
        })

       return calc
    }

export const printHead = (header: Header) => 
`+${"-".repeat(30)}+
${header.switchHeader}${header.fiscalYear}|
+${"-".repeat(30)}+
${header.secondHeader}
+${"-".repeat(30)}+`;


export const printSections = (header: Header, sectionDifference: Section[], sectionDifferenceYoY: Section[], sectionCumulative: Section[], sectionCumulativeYoY: Section[], sectionForecasts: Section[], currentQuarter: number) => {

    const sectionHeader: string = (sectionDifference[0].name === " Hardware Total " || sectionDifference[0].name === " Software Total ")
            ? "+-------------+\n|" + sectionDifference[0].name.split("").slice(0,9).join("") + "    |-------------------+\n| Total       |   Units |    YoY% |\n+---------------------------------+" 
            : (sectionDifference[0].name === " Mobile ")
            ? `+------------------------+
            | Mobile, IP related     |---------+
            | income, etc.           |    YoY% |
            +----------------------------------+`
            : "+" + "-".repeat(33) + "+\n|" + sectionDifference[0].name + " ".repeat(13 - sectionDifference[0].name.length) + "|   Units |    YoY% |\n+" + "-".repeat(33) + "+"

     const sectionDifferenceYoYFixed = sectionDifferenceYoY.filter((elem, index, array) => {
         return index < currentQuarter && array[index].units !== "NaN"
     })

    const sectionCumulativeYoYFixed = sectionCumulativeYoY.filter((elem, index, array) => {
            return currentQuarter >= 2 && index < currentQuarter -1 && array[index].units !== "NaN"
    })
    
    const difference = sectionDifference.filter((elem, index, array) => {
        return index < currentQuarter && array[index].value !== 0
    }).map((elem, index) => {
            

            let printSectionDifferenceYoY: string = (sectionDifferenceYoYFixed.length === 0)
                ? "NaN"
                : (sectionDifferenceYoYFixed[index].value > 0)
                ? `+${sectionDifferenceYoYFixed[index].value}% `
                : `${sectionDifferenceYoYFixed[index].value}% `

            let printSectionDifferenceYoYFixed: string = (printSectionDifferenceYoY === "NaN")
                ? printSectionDifferenceYoY
                : (printSectionDifferenceYoY.length >= 9)
                ? printSectionDifferenceYoY
                : " ".repeat(9 - printSectionDifferenceYoY.length) + printSectionDifferenceYoY

            let printSection: string = (elem.units === "currency")
                ? `¥${elem.value.toLocaleString("en")}M`
                : `${(elem.value / 100).toFixed(2)}M `;

            let printSectionFixed: string = (printSection.length >= 9)
                ? printSection
                : " ".repeat(9 - printSection.length) + printSection;

            let printLine: string = (index === currentQuarter -1)
                ? "\n+" + "=".repeat(33) + "+"
                : "\n+" + "-".repeat(33) + "+"

            return (printSectionDifferenceYoYFixed === "NaN")
                    ? "|" + elem.period + "|" + printSectionFixed + "|" + printLine
                    : "|" + elem.period + "|" + printSectionFixed + "|" + printSectionDifferenceYoYFixed + "|" + printLine
            
        })

    const cumulative = (currentQuarter >= 2)
            ? sectionCumulative.filter((elem, index, array) => 
                currentQuarter >= 2 && index < currentQuarter -1 && array[index].value !== 0
            ).map((elem, index) => {
                
                let printSectionCumulativeYoY: string = (sectionCumulativeYoYFixed.length === 0)
                    ? "NaN"
                    : (sectionCumulativeYoYFixed[index].value > 0)
                    ? `+${sectionCumulativeYoYFixed[index].value}% `
                    : `${sectionCumulativeYoYFixed[index].value}% `

                let printSectionCumulativeYoYFixed: string = (printSectionCumulativeYoY === "NaN")
                    ? printSectionCumulativeYoY
                    : (printSectionCumulativeYoY.length >= 9)
                    ? printSectionCumulativeYoY
                    : " ".repeat(9 - printSectionCumulativeYoY.length) + printSectionCumulativeYoY

                let printCumulative: string = (elem.units === "currency")
                ? `¥${elem.value.toLocaleString("en")}M`
                : `${(elem.value / 100).toFixed(2)}M `;

                let printCumulativeFixed: string = (printCumulative.length >= 9)
                    ? printCumulative
                    : " ".repeat(9 - printCumulative.length) + printCumulative;

                let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX
                
                let printLine: string = "\n+" + "-".repeat(33) + "+"

                let printPeriod: string = (currentQuarter === 4 && index === currentQuarter-2)
                    ? `${shortFY}${elem.cmlPeriod}`
                    : elem.cmlPeriod

                return (printSectionCumulativeYoYFixed === "NaN")
                    ?  "|" + printPeriod + "|" + printCumulativeFixed + "|" + printLine
                    : "|" + printPeriod + "|" + printCumulativeFixed + "|" + printSectionCumulativeYoYFixed + "|" + printLine
            })
            : []

        const ltd: string = (currentQuarter === 1) 
                ? `${((sectionDifference[currentQuarter-1].value + sectionCumulative[sectionCumulative.length-1].value) / 100 ).toFixed(2)}M `
                : `${((sectionCumulative[currentQuarter-2].value + sectionCumulative[sectionCumulative.length-1].value) / 100 ).toFixed(2)}M `

        const ltdFixed: string = (ltd.length >= 9)
                ? ltd
                : " ".repeat(9 - ltd.length) + ltd
        
        const ltdPrint: string = "| Life-To-Date|" + ltdFixed + "|\n+" + "-".repeat(23) + "+"

        const forecast: string = (sectionDifference[0].name === " Hardware ")
            ? sectionForecasts.map((elem, index, array) => {

                let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX
                
                let printValue: string = `${elem.value / 100}M `
                let printValueFixed: string = (printValue.length >= 9)
                    ? printValue
                    : " ".repeat(9 - printValue.length) + printValue

                return (currentQuarter === 4 && index === array.length-1)
                    ? "|" + header.nextFiscalYearShort + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+" 
                    : (index === 0)
                    ? "+" + "-".repeat(27) + "+\n|" + shortFY + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+"
                    : "|" + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+" 
            }).reduce((prev, next) => prev + "\n" + next)
            : (sectionDifference[0].name === " Software ") 
            ? sectionForecasts.map((elem, index, array) => {

                let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX

                let printValue: string = `${elem.value / 100}M `
                let printValueFixed: string = (printValue.length >= 9)
                    ? printValue
                    : " ".repeat(9 - printValue.length) + printValue

                // let miscellaneous: string = "|(Software sales units include both\n|packaged and downloadable versions\n|of software.)"

                return (currentQuarter === 4 && index === array.length-1)
                    ? "|" + header.nextFiscalYearShort + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+" 
                    : (index === 0)
                    ? "+" + "-".repeat(27) + "+\n|" + shortFY + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+"
                    : "|" + elem.period + "|" + printValueFixed + "|\n+" + "-".repeat(27) + "+" 
            }).concat(["|(Software sales units include both\n|packaged and downloadable versions\n|of software.)"]).reduce((prev, next) => prev + "\n" + next)
            : "shrug"


        const penultimateCheck = (sectionDifference[0].name === " Hardware " || sectionDifference[0].name === " Software ")
            ? [sectionHeader, ...difference, ...cumulative, ltdPrint, forecast].filter((elem) => elem.length !== 0).reduce((prev, next) => prev + "\n" + next)
            : (sectionDifference[0].name === " Mobile ")
            ? [sectionHeader, ...difference, ...cumulative, ].filter((elem) => elem.length !== 0).reduce((prev, next) => prev + "\n" + next)
            : [sectionHeader, ...difference, ...cumulative, ltdPrint].filter((elem) => elem.length !== 0).reduce((prev, next) => prev + "\n" + next)

        return penultimateCheck 
    }
