export type Earnings = {
    category: "quarter" | "cumulative" | "forecast",
    period: "1st Quarter" | "2nd Quarter" | "3rd Quarter" | "4th Quarter"
    units: "currency" | "percentage" | "NaN",
    name: string,
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

function operatingMarginCalculation(netSalesLocal: Earnings[], opIncomeLocal: Earnings[]) {

    const calc: Earnings[] = opIncomeLocal.map((elem, index) => {
        return (netSalesLocal[index].value !== 0) 
                  ? {...elem, name: "Operating Margin", units: "percentage", value: Number(
                        (((elem.value / netSalesLocal[index].value)) * 100).toFixed(2)
                     )}  
                  : {...elem, name: "Operating Margin", units: "NaN", value: 0} 
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

    return (yoyLength === 0) 
        ? printLine(lineLength) + "\n| " + valuesThisFY[0].name + " |"
        : printLine(lineLength) + "\n| " + valuesThisFY[0].name + " |" + " ".repeat(yoyLength - yoyHeader.length) + yoyHeader + " |";
};

export const printHead = (header: Header)  => (lineLength: number): string => {
    return printLine(lineLength) + "\n| " + header.companyName + " | " + header.fiscalYear + " |\n" + printLine(lineLength) + "\n| " + header.title + " |\n" + printLine(lineLength)
};

export const printOpMargin = (header: Header, netSalesThisFY: Earnings[], operatingIncomeThisFY: Earnings[], netSalesForecast: Earnings[], operatingIncomeForecast: Earnings[], currentQuarter: number) => (valueLength: number) => (lineLength: number): string => {

    let quartersNetSalesThisFY: Earnings[] = quarterlyCalculation(netSalesThisFY);

    let quartersOperatingIncomeThisFY: Earnings[] = quarterlyCalculation(operatingIncomeThisFY);

    let quartersOpMarginThisFY: string[] = printQuarterValues(operatingMarginCalculation(quartersNetSalesThisFY, quartersOperatingIncomeThisFY), currentQuarter)(valueLength);

    let quartersJoin: string[] = quartersOpMarginThisFY.map((elem, index, array) => elem + "\n" + (index === array.length-1) ? printDoubleLine(lineLength) : printLine(lineLength));

    let cumulativesOpMarginThisFY: string[] = printCumulativeValues(operatingMarginCalculation(netSalesThisFY, operatingIncomeThisFY), header.fiscalYear, currentQuarter)(valueLength); 

    let cumulativesJoin: string[] = cumulativesOpMarginThisFY.map((elem) => elem + "\n" + printLine(lineLength));

    let forecasting: string[] = printForecastValues(operatingMarginCalculation(netSalesForecast, operatingIncomeForecast))(valueLength);

    let forecastingJoin: string[] = forecasting.map(elem => elem + "\n" + printLine(lineLength));

    let sectionHeader: string = printSection(quartersNetSalesThisFY)(valueLength)(0)

    let printing: string = [sectionHeader, ...quartersJoin, ...cumulativesJoin, ...forecastingJoin, "###"].reduce((acc, next) => {
        return acc + "\n" + next
    });

    return printing
}; 


export const printAll = (header: Header, valuesThisFY: Earnings[], valuesLastFY: Earnings[], forecastValues: Earnings[], currentQuarter: number) => (valueLength: number) => (yoyLength: number) => (lineLength: number): string => {

    let sectionHeader: string = printSection(valuesThisFY)(valueLength)(yoyLength)

    let quartersThisFY: string[] = printQuarterValues(valuesThisFY, currentQuarter)(valueLength);

    let quartersYoY: string[] = printYoY(quarterlyCalculation(valuesThisFY), quarterlyCalculation(valuesLastFY), currentQuarter)(yoyLength);

    let quartersJoin: string[] = quartersThisFY.map((elem, index, array) => elem + quartersYoY[index] + "\n" + (index === array.length-1) ? printDoubleLine(lineLength) : printLine(lineLength));

    let cumulativesThisFY: string[] = printCumulativeValues(valuesThisFY, header.fiscalYear, currentQuarter)(valueLength);

    let cumulativesYoY: string[] = printYoY(valuesThisFY, valuesLastFY, currentQuarter)(yoyLength);

    let cumulativesJoin: string[] = cumulativesThisFY.map((elem, index) => elem + cumulativesYoY[index] + "\n" + printLine(lineLength));

    let forecasting: string[] = printForecastValues(forecastValues)(valueLength);

    let forecastingJoin: string[] = forecasting.map(elem => elem + "\n" + printLine(lineLength));

    let printing: string = [sectionHeader, ...quartersJoin, ...cumulativesJoin, ...forecastingJoin, "###"].reduce((acc, next) => {
        return acc + "\n" + next
    });

    return printing

}; 
