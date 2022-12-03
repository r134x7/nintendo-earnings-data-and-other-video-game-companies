export type Earnings = {
    category: "quarter" | "cumulative" | "forecast",
    period: "1st Quarter" | "2nd Quarter" | "3rd Quarter" | "4th Quarter"
    units: "currency" | "percentage" | "NaN",
    name: "Net Sales" | "Operating Income" | "Operating Margin" | "Net Income",
    value: number,
    footnotes?: string,
};

export type Header = {
    companyName: string,
    fiscalYear: string,
};

function quarterlyCalculation(quarters: Earnings[]): Earnings[] {
       
    const calc: Earnings[] = quarters.map((elem, index, array) => {
        return (index === 0) 
                ? {...elem, category: "quarter"}
                : {...elem, category: "quarter", value: elem.value - array[index-1].value}
    })
    
    return calc
};

function yearOnYearCalculation(thisFY: Earnings[], lastFY: Earnings[]): Earnings[] {

        const calc: Earnings[] = thisFY.map((elem, index) => {

            return (lastFY[index].value < 0)
                    ? {...elem, units: "percentage", value: Number(
                        ((((elem.value / lastFY[index].value) -1)* -1) * 100).toFixed(2)
                        )
                      }
                    : {...elem, units: "percentage", value: Number(
                        (((elem.value / lastFY[index].value) -1) * 100).toFixed(2)
                        )
                      }; // .toFixed(2) to round the number by two decimal places. Number will output a string, string has to be wrapped in Number() typing.  
        })

       return calc
    };

function operatingMarginCalculation(netSalesLocal: Earnings[], opIncomeLocal: Earnings[]) {

    const calc: Earnings[] = opIncomeLocal.map((elem, index) => {
        return (netSalesLocal[index].value !== 0) 
                  ? {...elem, units: "percentage", value: Number(
                        (((elem.value / netSalesLocal[index].value)) * 100).toFixed(2)
                     )}  
                  : {...elem, units: "NaN", value: 0} 
    });
   
   return calc
};

function printQuarterValues(quarterValues: Earnings[],  currentQuarter: number) {
    return (quarterPrintLength: number) =>  {

        let quarters = quarterValues.filter((elem, index) => index < currentQuarter).map((elem, index) => {

            let valueString: string = (elem.units === "currency")
                        ? `¥${elem.value.toLocaleString("en")}M `
                        : (elem.units === "percentage")
                        ? `${elem.value}% `
                        : `NaN`;

            let valueFixed: string = (valueString.length === quarterPrintLength)
                                  ? valueString 
                                  : " ".repeat(quarterPrintLength - valueString.length) + valueString;
            
            return valueFixed
        });

        return quarters
    };
};

function printQuarterYoY(yoyValues: Earnings[], currentQuarter: number) {
    return (yoyPrintLength: number): string[] => {

        let quarters = yoyValues.filter((elem, index) => index < currentQuarter).map((elem, index) => {

            let yoy: string = (elem.value > 0) 
                                ? `+${elem.value}% `
                                : `${elem.value}% `;
            
            let yoyFixed: string = (yoy.length >= yoyPrintLength)
                                ? yoy 
                                : " ".repeat(yoyPrintLength - yoy.length) +yoy 

            return yoyFixed
        });

        return quarters
    };
};

export const printSections = (sectionDifference: Earnings[], sectionYoY: Earnings[], currentQuarter: number) => {
    
    return sectionDifference.filter((elem, index) => {
        return (elem.category === "quarter")
                ? index < currentQuarter
                : (elem.category === "cumulative")
                ? currentQuarter >= 2 && index < currentQuarter -1
                : elem
    }).map((elem, index) => {

        if (elem.category === "quarter" && elem.units === "currency") {
             let printSectionDifferenceYoY: string = (sectionYoY[index].value > 0) 
                                ? `+${sectionYoY[index].value}% `
                                : `${sectionYoY[index].value}% `;
        let printSectionYoYFixed: string = (printSectionDifferenceYoY.length >= 9)
                                ? printSectionDifferenceYoY
                                : " ".repeat(9 - printSectionDifferenceYoY.length) + printSectionDifferenceYoY
        //  let x = `${elem.quarter.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })}M ` // cannot use currency settings as it creates border misalignment due to ¥ becoming wider. 
        let printSection: string = `¥${elem.value.toLocaleString("en")}M `; // this setting allows use of thousands separator ","
        let printSectionFixed: string = (printSection.length === 14)
                                  ? printSection
                                  : " ".repeat(14 - printSection.length) + printSection;
        return "|" + elem.name + "|" + printSectionFixed + "|" + printSectionYoYFixed + "|" // old note, used "\n" at end here: must affix a new line \n, was also affixing tabs \t to align but realised I could adjust the template literal
        } else if (elem.category === "cumulative" && elem.units === "currency") {

            let printSectionCmlYoY: string = (sectionYoY[index].value > 0) 
                                    ? `+${sectionYoY[index].value}% `
                                    : `${sectionYoY[index].value}% `;
            let printSectionCmlYoYFixed: string = (printSectionCmlYoY.length >= 9)
                                    ? printSectionCmlYoY
                                    : " ".repeat(9 - printSectionCmlYoY.length) + printSectionCmlYoY
            let printSectionCml: string = `¥${elem.value.toLocaleString("en")}M `; 
            let printSectionCmlFixed: string = (printSectionCml.length === 14)
                                      ? printSectionCml
                                      : " ".repeat(14 - printSectionCml.length) + printSectionCml;
            return "|" + elem.cmlName + "|" + printSectionCmlFixed + "|" + printSectionCmlYoYFixed + "|"
        } else if (elem.category === "forecast" && elem.units === "currency") {
            
            let printForecast: string = `¥${elem.value.toLocaleString("en")}M `;
            let printForecastFixed: string = (printForecast.length === 14)
                                      ? printForecast
                                      : " ".repeat(14 - printForecast.length) + printForecast;

            return "|" + elem.name + "|" + printForecastFixed + "|"  
        } else if (elem.category === "quarter" && elem.units === "percentage") {

            let printSectionMarginQuarters: string = `${elem.value}% `;
          let printSectionMarginQuartersFixed: string = (printSectionMarginQuarters.length >= 9)
                                  ? printSectionMarginQuarters
                                  : " ".repeat(9 - printSectionMarginQuarters.length) + printSectionMarginQuarters

          return "|" + elem.name + "|" + printSectionMarginQuartersFixed + "|"
        } else if (elem.category === "cumulative" && elem.units === "percentage") {
            
          let printSectionMarginCumulative: string = `${elem.value}% `;
          let printSectionMarginCumulativeFixed: string = (printSectionMarginCumulative.length === 9)
                                  ? printSectionMarginCumulative
                                  : " ".repeat(9 - printSectionMarginCumulative.length) + printSectionMarginCumulative

          return "|" + elem.cmlName + "|" + printSectionMarginCumulativeFixed + "|"
        } else {
            let printForecast: string = `${elem.value}% `;
            let printForecastFixed: string = (printForecast.length === 9)
                                ? printForecast
                                : " ".repeat(9 - printForecast.length) + printForecast;
            
            return "|" + elem.name + "|" + printForecastFixed + "|"
        }
        
    
    }).reduce((prev, next, index, array) => {
        if (sectionDifference[index].category === "quarter" && sectionDifference[index].units === "currency") {

            return (array[index] === array[currentQuarter -1])
            ? prev + `\n+${"-".repeat(38)}+\n` + next
            : prev + `\n+${"-".repeat(38)}+\n` + next 
            // sources for finding methods to convert numbers to strings with currency symbol and thousands separators: https://stackoverflow.com/questions/3753483/javascript-thousand-separator-string-format?noredirect=1&lq=1
            // mdn source with more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
        } else if (sectionDifference[index].category === "cumulative" && sectionDifference[index].units === "currency") {

            return (array[index] === array[currentQuarter -2])
                ? prev + `\n+${"-".repeat(38)}+\n` + next + `\n+${"-".repeat(38)}+\n`
                : prev + `\n+${"-".repeat(38)}+\n` + next 

        } else if (sectionDifference[index].category === "forecast" && sectionDifference[index].units === "currency") {

            return (array[index] === array[currentQuarter -1])
            ? prev + `\n+${"-".repeat(32)}+\n` + next
            : prev + `\n+${"-".repeat(32)}+\n` + next
        } else if (sectionDifference[index].category === "quarter" && sectionDifference[index].units === "percentage") {

            return (array[index] === array[currentQuarter -1])
                    ? prev + `\n+${"-".repeat(23)}+\n` + next
                    : prev + `\n+${"-".repeat(23)}+\n` + next 
        } else if (sectionDifference[index].category === "cumulative" && sectionDifference[index].units === "percentage") {
            return (array[index] === array[currentQuarter -2])
                    ? prev + `\n+${"-".repeat(23)}+\n` + next + `\n+${"-".repeat(27)}+\n`
                    : prev + `\n+${"-".repeat(23)}+\n` + next 
        } else {
            
            return (array[index] === array[currentQuarter -1])
                ? prev + `\n+${"-".repeat(27)}+\n` + next
                : prev + `\n+${"-".repeat(27)}+\n` + next
        }
    })
}

export const printHead = (header: Header) => 
`+${"-".repeat(34)}+
|${header.companyName}|    ${header.fiscalYear} |
+${"-".repeat(34)}+
|${header.title}|
+${"-".repeat(34)}+`;

export const printBody = (header: Header, quarter: Earnings[], quarterYoY: Earnings[], cumulative: Earnings[], cumulativeYoY: Earnings[], forecasts: Earnings[], currentQuarter: number) => 
`+${"-".repeat(header.borderLineLengthBody)}+
${header.section}${header.yearOnYearPercentage}
+${"-".repeat(header.borderLineLengthBody)}+
${printSections(quarter, quarterYoY, currentQuarter)}
+${(currentQuarter > 1) ? "=".repeat(header.borderLineLengthBody)+"+\n" + printSections(cumulative, cumulativeYoY, currentQuarter) : "=".repeat(header.borderLineLengthBody)+"+" }${(currentQuarter === 2) ? `\n+${"-".repeat(header.borderLineLengthBody)}+\n` + printSections(forecasts, [], currentQuarter) : (currentQuarter === 1) ? `\n` + printSections(forecasts, [], currentQuarter) : printSections(forecasts, [], currentQuarter) }
+${"-".repeat(header.borderLineLengthFooter)}+`;
