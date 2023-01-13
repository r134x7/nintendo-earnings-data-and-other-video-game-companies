import { liner, border, spacer, printTextBlock } from "./table_design_logic";

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
                    : (lastFY[index].value === 0)
                    ? {...elem, units: "NaN", value: 0}
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

function printQuarterValues(quarterValues: Earnings[],  currentQuarter: number, quarterValueLength: number): string[] {

        let quartercalc = (quarterValues[0].name === "Operating Margin") ? quarterValues : quarterlyCalculation(quarterValues);

        let quarters = quartercalc.filter((elem, index) => index < currentQuarter).map((elem) => {

            let valueString: string = (elem.units === "currency")
                        ? `¥${elem.value.toLocaleString("en")}M`
                        : (elem.units === "percentage")
                        ? `${elem.value}%`
                        : `NaN`;

            return border([
                spacer(elem.period,12,"left"),
                spacer(valueString,quarterValueLength,"right")
            ])
        });

        return quarters
};

function printCumulativeValues(cmlValues: Earnings[], fiscalYear: string, currentQuarter: number, cmlValueLength: number): string[] {

        let cmlPeriod = [
            "1st Half",
            "1st 3/4",
            `${fiscalYear} Cml.`
        ];
        
        let cumulatives = cmlValues.filter((elem, index) => currentQuarter >= 2 && index < currentQuarter && index !== 0).map((elem, index) => {

            let valueString: string = (elem.units === "currency")
                        ? `¥${elem.value.toLocaleString("en")}M`
                        : (elem.units === "percentage")
                        ? `${elem.value}%`
                        : `NaN`;

            return border([
                spacer(cmlPeriod[index],12,"left"),
                spacer(valueString,cmlValueLength,"right")
            ])
        });

        return cumulatives 
};

function printYoY(valuesThisFY: Earnings[], valuesLastFY: Earnings[], currentQuarter: number): string[] {

        let yoyCalc = yearOnYearCalculation(valuesThisFY, valuesLastFY);
        
        let yoyValues = yoyCalc.filter((elem, index) => {
        return (elem.category === "quarter")
                ? index < currentQuarter
                : (elem.category === "cumulative")
                ? currentQuarter >= 2 && index < currentQuarter && index !== 0
                : elem // forecasts
        }).map((elem) => {

            let yoy: string = (elem.value > 0) 
                                ? `+${elem.value}%`
                                : (elem.units === "NaN")
                                ? "N/A"
                                : `${elem.value}%`;
            
            let yoyFixed: string = spacer(yoy + " |",12,"right")

            return yoyFixed
        });

        return yoyValues 
};

function printForecastValues(forecastValues: Earnings[], forecastValueLength: number): string[] {

        if (!forecastValues[0]) {
            return ["| See Earnings Release for forecast info. |"]
        }

        let forecastPeriods = forecastValues.map(elem => {

            let forecastString: string = (elem.units === "currency")
                            ? `¥${elem.value.toLocaleString("en")}M`
                            : (elem.units === "percentage")
                            ? `${elem.value}%`
                            : `NaN`;
            
            return border([
                spacer((elem.forecastPeriod === undefined) ? "?" : elem.forecastPeriod,16,"left"),
                spacer(forecastString,forecastValueLength,"right")
            ])
        });

        return forecastPeriods
};

const printSection = (valuesThisFY: Earnings[], yoyLength: number) => {
    let yoyHeader = spacer("YoY% |",12,"right")
    // have to deal with these hardcoded values later
    return (yoyLength === 0) 
        ? liner(printTextBlock(valuesThisFY[0].name,28),"−","both",true)
        : liner(printTextBlock(valuesThisFY[0].name,28) + yoyHeader,"−","both",true,40) 
};

export const printOpMargin = (header: Header, netSalesThisFY: Earnings[], operatingIncomeThisFY: Earnings[], netSalesForecast: Earnings[], operatingIncomeForecast: Earnings[], currentQuarter: number, valueLength: number): string => {

    let bandaiNamcoCheck = ((header.companyName === "Bandai Namco Holdings Inc." && header.fiscalYear === "FY3/2006")) ? true : false;

    let segaCheck = (header.companyName === "SEGA SAMMY HOLDINGS INC." && header.fiscalYear === "FY3/2005") ? true : false;

    let quartersNetSalesThisFY: Earnings[] = quarterlyCalculation(netSalesThisFY);

    let quartersOperatingIncomeThisFY: Earnings[] = quarterlyCalculation(operatingIncomeThisFY);

    let quartersOpMarginThisFY: string[] = printQuarterValues(operatingMarginCalculation(quartersNetSalesThisFY, quartersOperatingIncomeThisFY), currentQuarter, valueLength);

    let quartersJoin: string[] = quartersOpMarginThisFY.flatMap((elem, index, array) => {
        if (bandaiNamcoCheck === true && index === 0) {
            return []
        } else if (segaCheck === true && index < 2) {
            return []
        }       

        return liner(elem,(index === array.length-1) ? "=" : "−", "bottom",true,elem.length-2)
    });

    let cumulativesOpMarginThisFY: string[] = printCumulativeValues(operatingMarginCalculation(netSalesThisFY, operatingIncomeThisFY), header.fiscalYear, currentQuarter, valueLength); 

    let cumulativesJoin: string[] = cumulativesOpMarginThisFY.flatMap((elem, index, array) => {
        if (segaCheck === true && index === 0) {
            return []
        }       

        return liner(elem,"−","bottom",true,elem.length-2)
    })

    let forecasting: string[] = printForecastValues(operatingMarginCalculation(netSalesForecast, operatingIncomeForecast), valueLength);

    let forecastingJoin: string[] = forecasting.map((elem,index,array) => liner(elem,"−",(index === array.length-1) ? "both" : "top" ,true));

    let sectionHeader: string = printSection(operatingMarginCalculation(quartersNetSalesThisFY, quartersOperatingIncomeThisFY), 0)

    let printing: string = [sectionHeader, ...quartersJoin, ...cumulativesJoin, ...forecastingJoin, "###"].reduce((acc, next) => {
        return acc + next
    });

    return printing
}; 

export const printAll = (header: Header, valuesThisFY: Earnings[], valuesLastFY: Earnings[], forecastValues: Earnings[], currentQuarter: number, valueLength: number): string => {
    
    let bandaiNamcoCheck = (header.companyName === "Bandai Namco Holdings Inc." && header.fiscalYear === "FY3/2006") ? true : false;

    let segaCheck = (header.companyName === "SEGA SAMMY HOLDINGS INC." && header.fiscalYear === "FY3/2005") ? true : false;

    let sectionHeader: string = printSection(valuesThisFY, valueLength);

    let quartersThisFY: string[] = printQuarterValues(valuesThisFY, currentQuarter, valueLength);

    let quartersYoY: string[] = printYoY(quarterlyCalculation(valuesThisFY), quarterlyCalculation(valuesLastFY), currentQuarter);

    let quartersJoin: string[] = quartersThisFY.flatMap((elem, index, array) => {
        if (bandaiNamcoCheck === true && index === 0) {
            return []
        } else if (segaCheck === true && index < 2) {
            return []
        }       

        let lineCheck = index === array.length-1; 

        return liner(elem + quartersYoY[index],(lineCheck) ? "=" : "−","bottom",true,(elem.length + quartersYoY[index].length - 3)) 
    });

    let cumulativesThisFY: string[] = printCumulativeValues(valuesThisFY, header.fiscalYear, currentQuarter, valueLength);

    let cumulativesYoY: string[] = printYoY(valuesThisFY, valuesLastFY, currentQuarter);

    let cumulativesJoin: string[] = cumulativesThisFY.flatMap((elem, index) => {
        if (segaCheck === true && index === 0) {
            return []
        }       

       return liner(elem + cumulativesYoY[index],"−","bottom",true,(elem.length + cumulativesYoY[index].length - 3))
    }); 

    let forecasting: string[] = printForecastValues(forecastValues, valueLength);

    let forecastingJoin: string[] = forecasting.map((elem,index,array) => liner(elem,"−",(index === array.length-1) ? "both" : "top" ,true));

    let printing: string = [sectionHeader, ...quartersJoin, ...cumulativesJoin, ...forecastingJoin, "###"].reduce((acc, next) => {
        return acc + next
    });

    return printing
}; 
