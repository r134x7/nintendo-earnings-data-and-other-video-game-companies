export type Earnings = {
    category: "quarter" | "cumulative" | "forecast",
    period: "1st Quarter" | "2nd Quarter" | "3rd Quarter" | "4th Quarter"
    units: "currency" | "percentage" | "NaN",
    name: "Net Sales" | "Operating Income" | "Operating Margin" | "Net Income",
    value: number,
    forecastPeriod?: string,
    footnotes?: string,
};

export type Header = {
    companyName: string,
    fiscalYear: string,
    title: "Consolidated Operating Results",
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

export function operatingMarginCalculation(netSalesLocal: Earnings[], opIncomeLocal: Earnings[]) {

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
    return (quarterPrintLength: number): string[] =>  {

        let quartercalc = quarterlyCalculation(quarterValues);

        let quarters = quartercalc.filter((elem, index) => index < currentQuarter).map((elem) => {

            let valueString: string = (elem.units === "currency")
                        ? `¥${elem.value.toLocaleString("en")}M `
                        : (elem.units === "percentage")
                        ? `${elem.value}% `
                        : `NaN`;

            let valueFixed: string = (valueString.length === quarterPrintLength)
                                  ? valueString 
                                  : " ".repeat(quarterPrintLength - valueString.length) + valueString;
            
            return `| ${elem.period} | ${valueFixed} |`;
        });

        return quarters
    };
};

function printCumulativeValues(cmlValues: Earnings[], fiscalYear: string, currentQuarter: number) {
    return (cmlPrintLength: number): string[] =>  {

        let cmlPeriod = [
            "1st Half",
            "1st 3/4",
            `${fiscalYear} Cml.`
        ];

        let cumulatives = cmlValues.filter((elem, index) => currentQuarter >= 2 && index < currentQuarter -1).map((elem, index) => {

            let valueString: string = (elem.units === "currency")
                        ? `¥${elem.value.toLocaleString("en")}M `
                        : (elem.units === "percentage")
                        ? `${elem.value}% `
                        : `NaN`;

            let valueFixed: string = (valueString.length === cmlPrintLength)
                                  ? valueString 
                                  : " ".repeat(cmlPrintLength - valueString.length) + valueString;
            
            return `| ${cmlPeriod[index]} | ${valueFixed} |`;
        });

        return cumulatives 
    };
};

function printYoY(valuesThisFY: Earnings[], valuesLastFY: Earnings[], currentQuarter: number) {
    return (yoyPrintLength: number): string[] => {

        let yoyCalc = yearOnYearCalculation(valuesThisFY, valuesLastFY);

        let yoyValues = yoyCalc.filter((elem, index) => {
        return (elem.category === "quarter")
                ? index < currentQuarter
                : (elem.category === "cumulative")
                ? currentQuarter >= 2 && index < currentQuarter -1
                : elem // forecasts
    }).map((elem) => {

            let yoy: string = (elem.value > 0) 
                                ? `+${elem.value}% `
                                : (elem.units === "NaN")
                                ? "N/A "
                                : `${elem.value}% `;
            
            let yoyFixed: string = (yoy.length >= yoyPrintLength)
                                ? yoy 
                                : " ".repeat(yoyPrintLength - yoy.length) +yoy 

            return `${yoyFixed}|`
        });

        return yoyValues 
    };
};

function printForecastValues(forecastValues: Earnings[]) {
    return (forecastPrintLength: number): string[] => {

        let forecastPeriods = forecastValues.map(elem => {

            let forecastString: string = (elem.units === "currency")
                            ? `¥${elem.value.toLocaleString("en")}M `
                            : (elem.units === "percentage")
                            ? `${elem.value}% `
                            : `NaN`;
            
            let forecastFixed: string = (forecastString.length === forecastPrintLength)
                                      ? forecastString 
                                      : " ".repeat(forecastPrintLength - forecastString.length) + forecastString;

            return `| ${elem.forecastPeriod} | ${forecastFixed} |`
        });

        return forecastPeriods
    };
};

const printLine = (lineLength: number) => "+" + "-".repeat(lineLength) + "+"; 

const printDoubleLine = (lineLength: number) => "+" + "=".repeat(lineLength) + "+";

const printSection = (valuesThisFY: Earnings[]) => (lineLength: number) => (yoyLength: number) => {
    let yoyHeader = "YoY%"

    return printLine(lineLength) + "\n| " + valuesThisFY[0].name + " |" + " ".repeat(yoyLength - yoyHeader.length) + yoyHeader + " |";
};

export const printHead = (header: Header)  => (lineLength: number): string => {
    return printLine(lineLength) + "\n| " + header.companyName + " | " + header.fiscalYear + " |\n" + printLine(lineLength) + "\n| " + header.title + " |\n" + printLine(lineLength)
};

export const printAll = (header: Header, valuesThisFY: Earnings[], valuesLastFY: Earnings[], forecastValues: Earnings[], currentQuarter: number) => (valueLength: number) => (yoyLength: number) => (lineLength: number): string => {

    let sectionHeader: string = printSection(valuesThisFY)(valueLength)(yoyLength)

    let quartersThisFY: string[] = printQuarterValues(valuesThisFY, currentQuarter)(valueLength);

    let quartersYoY: string[] = printYoY(quarterlyCalculation(valuesThisFY), quarterlyCalculation(valuesLastFY), currentQuarter)(yoyLength);

    let quartersJoin: string[] = quartersThisFY.map((elem, index) => elem + quartersYoY[index]);

    let cumulativesThisFY: string[] = printCumulativeValues(valuesThisFY, header.fiscalYear, currentQuarter)(valueLength);

    let cumulativesYoY: string[] = printYoY(valuesThisFY, valuesLastFY, currentQuarter)(yoyLength);

    let cumulativesJoin: string[] = cumulativesThisFY.map((elem, index) => elem + cumulativesYoY[index]);

    let forecasting: string[] = printForecastValues(forecastValues)(valueLength);

    let printing: string = [sectionHeader, ...quartersJoin, ...cumulativesJoin, ...forecasting, "###"].reduce((acc, next) => {
        return acc + "\n" + (printLine(lineLength)) + "\n" + next
    })

    return printing

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

// export const printHead = (header: Header) => 
// `+${"-".repeat(34)}+
// |${header.companyName}|    ${header.fiscalYear} |
// +${"-".repeat(34)}+
// |${header.title}|
// +${"-".repeat(34)}+`;

export const printBody = (header: Header, quarter: Earnings[], quarterYoY: Earnings[], cumulative: Earnings[], cumulativeYoY: Earnings[], forecasts: Earnings[], currentQuarter: number) => 
`+${"-".repeat(header.borderLineLengthBody)}+
${header.section}${header.yearOnYearPercentage}
+${"-".repeat(header.borderLineLengthBody)}+
${printSections(quarter, quarterYoY, currentQuarter)}
+${(currentQuarter > 1) 
    ? "=".repeat(header.borderLineLengthBody)+"+\n" + printSections(cumulative, cumulativeYoY, currentQuarter) 
    : "=".repeat(header.borderLineLengthBody)+"+" }${(currentQuarter === 2) 
    ? `\n+${"-".repeat(header.borderLineLengthBody)}+\n` + printSections(forecasts, [], currentQuarter) : (currentQuarter === 1) 
    ? `\n` + printSections(forecasts, [], currentQuarter) 
    : printSections(forecasts, [], currentQuarter) }
+${"-".repeat(header.borderLineLengthFooter)}+`;
