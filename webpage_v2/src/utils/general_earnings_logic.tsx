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
    title: string,
};

export function quarterlyCalculation(quarters: Earnings[]): Earnings[] {
       
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
                  ? {...elem, name: "Operating Margin", units: "percentage", value: Number(
                        (((elem.value / netSalesLocal[index].value)) * 100).toFixed(2)
                     )}  
                  : {...elem, name: "Operating Margin", units: "NaN", value: 0} 
    });
   
   return calc
};

function printQuarterValues(quarterValues: Earnings[],  currentQuarter: number) {
    return (quarterPrintLength: number) => (periodLength: number): string[] =>  {

        let quartercalc = (quarterValues[0].name === "Operating Margin") ? quarterValues : quarterlyCalculation(quarterValues);

        let quarters = quartercalc.filter((elem, index) => index < currentQuarter).map((elem) => {

            let valueString: string = (elem.units === "currency")
                        ? `¥${elem.value.toLocaleString("en")}M `
                        : (elem.units === "percentage")
                        ? `${elem.value}% `
                        : `NaN`;

            let valueFixed: string = (valueString.length >= quarterPrintLength)
                                  ? valueString 
                                  : " ".repeat(quarterPrintLength - valueString.length) + valueString;
            
            return `| ${elem.period}${" ".repeat(periodLength-elem.period.length-1)}| ${valueFixed}|`;
        });

        return quarters
    };
};

function printCumulativeValues(cmlValues: Earnings[], fiscalYear: string, currentQuarter: number) {
    return (cmlPrintLength: number) => (periodLength: number): string[] =>  {

        let cmlPeriod = [
            "1st Half",
            "1st 3/4",
            `${fiscalYear} Cml.`
        ];
        
        let cumulatives = cmlValues.filter((elem, index) => currentQuarter >= 2 && index < currentQuarter && index !== 0).map((elem, index) => {

            let valueString: string = (elem.units === "currency")
                        ? `¥${elem.value.toLocaleString("en")}M `
                        : (elem.units === "percentage")
                        ? `${elem.value}% `
                        : `NaN`;

            let valueFixed: string = (valueString.length >= cmlPrintLength)
                                  ? valueString 
                                  : " ".repeat(cmlPrintLength - valueString.length) + valueString;

            let periodFixed: string = (cmlPeriod[index].length >= periodLength)
                ? cmlPeriod[index]
                : " " + cmlPeriod[index] + " ".repeat(periodLength-cmlPeriod[index].length-1)
            
            return `|${periodFixed}| ${valueFixed}|`;
        });

        return cumulatives 
    };
};

function printYoY(valuesThisFY: Earnings[], valuesLastFY: Earnings[], currentQuarter: number) {
    return (yoyPrintLength: number): string[] => {

        let yoyCalc = yearOnYearCalculation(valuesThisFY, valuesLastFY);
        console.log(yoyCalc);
        
        let yoyValues = yoyCalc.filter((elem, index) => {
        return (elem.category === "quarter")
                ? index < currentQuarter
                : (elem.category === "cumulative")
                ? currentQuarter >= 2 && index < currentQuarter && index !== 0
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

        let forecastLengthFixed: number = (forecastValues[0].forecastPeriod === undefined) 
            ? 1
            : (forecastValues[0].forecastPeriod?.length)

        let forecastPeriods = forecastValues.map(elem => {


            let forecastLength: number = (elem.forecastPeriod === undefined) 
                ? 1
                : (elem.forecastPeriod?.length)

            let forecastString: string = (elem.units === "currency")
                            ? `¥${elem.value.toLocaleString("en")}M `
                            : (elem.units === "percentage")
                            ? `${elem.value}% `
                            : `NaN`;
            
            let forecastFixed: string = (forecastString.length >= forecastPrintLength)
                                      ? forecastString 
                                      : " ".repeat(forecastPrintLength - forecastString.length) + forecastString;
            
            let forecastTitle: string | undefined = (forecastLength >= forecastLengthFixed)
                ? elem.forecastPeriod
                : elem.forecastPeriod + " ".repeat(forecastLengthFixed-forecastLength)

            return `|${forecastTitle}| ${forecastFixed}|`
        });

        return forecastPeriods
    };
};

const printLine = (lineLength: number) => "+" + "-".repeat(lineLength) + "+"; 

const printDoubleLine = (lineLength: number) => "+" + "=".repeat(lineLength) + "+";

const printSection = (valuesThisFY: Earnings[]) => (lineLength: number) => (yoyLength: number) => {
    let yoyHeader = "YoY%"
    // have to deal with these hardcoded values later
    return (yoyLength === 0) 
        ? printLine(lineLength) + "\n| " + valuesThisFY[0].name + " ".repeat(lineLength-valuesThisFY[0].name.length-1) + "|\n" + printLine(lineLength)
        : printLine(lineLength) + "\n| " + valuesThisFY[0].name + " ".repeat(lineLength-valuesThisFY[0].name.length-1-yoyLength-1) + "|" + " ".repeat(yoyLength - yoyHeader.length-1) + yoyHeader + " |\n" + printLine(lineLength);
};

export const printHead = (header: Header)  => (lineLength: number): string => {

    let companyNameFixed: string = (header.companyName.length >= (lineLength-header.fiscalYear.length))
        ? header.companyName
        : " " + header.companyName + " ".repeat(lineLength-header.companyName.length-header.fiscalYear.length-4);
    
    let titleFixed: string = (header.title.length >= (lineLength))
        ? header.title
        : " " + header.title + " ".repeat(lineLength-header.title.length-1)

    return printLine(lineLength) + "\n|" + companyNameFixed + "| " + header.fiscalYear + " |\n" + printLine(lineLength) + "\n|" + titleFixed + "|\n" + printLine(lineLength)
};

export const printOpMargin = (header: Header, netSalesThisFY: Earnings[], operatingIncomeThisFY: Earnings[], netSalesForecast: Earnings[], operatingIncomeForecast: Earnings[], currentQuarter: number) => (valueLength: number) => (lineLength: number) => (periodLength: number): string => {

    let quartersNetSalesThisFY: Earnings[] = quarterlyCalculation(netSalesThisFY);

    let quartersOperatingIncomeThisFY: Earnings[] = quarterlyCalculation(operatingIncomeThisFY);

    let quartersOpMarginThisFY: string[] = printQuarterValues(operatingMarginCalculation(quartersNetSalesThisFY, quartersOperatingIncomeThisFY), currentQuarter)(valueLength)(periodLength);

    let quartersJoin: string[] = quartersOpMarginThisFY.map((elem, index, array) => {
        let lineCheck = (index === array.length-1) ? printDoubleLine(lineLength-9) : printLine(lineLength-9); 

        return elem + "\n" + lineCheck 
    });

    let cumulativesOpMarginThisFY: string[] = printCumulativeValues(operatingMarginCalculation(netSalesThisFY, operatingIncomeThisFY), header.fiscalYear, currentQuarter)(valueLength)(periodLength); 

    let cumulativesJoin: string[] = cumulativesOpMarginThisFY.map((elem, index, array) => elem + "\n" + printLine((index === array.length-1) ? lineLength-5 : lineLength-9));

    let forecasting: string[] = printForecastValues(operatingMarginCalculation(netSalesForecast, operatingIncomeForecast))(valueLength);

    let forecastingJoin: string[] = forecasting.map(elem => elem + "\n" + printLine(lineLength-5));

    let sectionHeader: string = printSection(operatingMarginCalculation(quartersNetSalesThisFY, quartersOperatingIncomeThisFY))(lineLength-9)(0)

    let printing: string = [sectionHeader, ...quartersJoin, ...cumulativesJoin, ...forecastingJoin, "###"].reduce((acc, next) => {
        return acc + "\n" + next
    });

    return printing
}; 


export const printAll = (header: Header, valuesThisFY: Earnings[], valuesLastFY: Earnings[], forecastValues: Earnings[], currentQuarter: number) => (valueLength: number) => (yoyLength: number) => (lineLength: number) => (periodLength: number): string => {

    let sectionHeader: string = printSection(valuesThisFY)(lineLength)(yoyLength)

    let quartersThisFY: string[] = printQuarterValues(valuesThisFY, currentQuarter)(valueLength)(periodLength);

    let quartersYoY: string[] = printYoY(quarterlyCalculation(valuesThisFY), quarterlyCalculation(valuesLastFY), currentQuarter)(yoyLength);

    let quartersJoin: string[] = quartersThisFY.map((elem, index, array) => {
        let lineCheck = (index === array.length-1) ? printDoubleLine(lineLength) : printLine(lineLength); 

        return elem + quartersYoY[index] + "\n" + lineCheck 
    });

    let cumulativesThisFY: string[] = printCumulativeValues(valuesThisFY, header.fiscalYear, currentQuarter)(valueLength)(periodLength);

    let cumulativesYoY: string[] = printYoY(valuesThisFY, valuesLastFY, currentQuarter)(yoyLength);

    let cumulativesJoin: string[] = cumulativesThisFY.map((elem, index) => elem + cumulativesYoY[index] + "\n" + printLine(lineLength));

    let forecasting: string[] = printForecastValues(forecastValues)(valueLength);

    let forecastingJoin: string[] = forecasting.map(elem => elem + "\n" + printLine(lineLength-7));

    let printing: string = [sectionHeader, ...quartersJoin, ...cumulativesJoin, ...forecastingJoin, "###"].reduce((acc, next) => {
        return acc + "\n" + next
    });

    return printing

}; 
