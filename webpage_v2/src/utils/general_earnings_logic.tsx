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

export type EarningsV2 = {
    name: string,
    Q1QtrValue: EarningsValue,
    Q2QtrValue: EarningsValue,
    Q3QtrValue: EarningsValue,
    Q4QtrValue: EarningsValue,
    Q1CmlValue: EarningsValue,
    Q2CmlValue: EarningsValue,
    Q3CmlValue: EarningsValue,
    Q4CmlValue: EarningsValue,
    forecastThisFY: EarningsValue,
    forecastRevision1: EarningsValue,
    forecastRevision2: EarningsValue,
    forecastRevision3: EarningsValue,
    forecastNextFY: EarningsValue,
    footnotes?: string,
}

type Nothing = { kind:"Nothing" }
type Just<T> = { kind:"Just", value: T }

type Maybe<T> =
    | Just<T>
    | Nothing

export type EarningsValue = 
    | { kind:"Forecast", 
        period:"Current FY FCST" | "FCST Revision 1" | "FCST Revision 2" | "FCST Revision 3" | "Next FY FCST", 
        units: "units" | "currency" | "percentage",
        thisFY: string,
        nextFY: string,
        value: number}
    | { kind:"Quarter", 
        period:"1st Quarter" | "2nd Quarter" | "3rd Quarter" | "4th Quarter", 
        units: "units" | "currency" | "percentage",
        value: number}
    | { kind:"Cumulative", 
        period:"1st Quarter" | "First Half" | "First Three Quarters" | "FY Cumulative", 
        units: "units" | "currency" | "percentage",
        thisFY: string,
        value: number}
    | Nothing

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

export function quarterlyCalculationV2(quarterThisFY: EarningsValue, quarterLastFY: EarningsValue): EarningsValue {

    return (quarterThisFY.kind === "Quarter" && quarterLastFY.kind === "Quarter")
        ? {
            kind:"Quarter",
            units: quarterThisFY.units,
            period: quarterThisFY.period,
            value: quarterThisFY.value - quarterLastFY.value
        }
        : quarterThisFY
}

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

export function yearOnYearCalculationV2(valueThisFY: EarningsValue, valueLastFY: EarningsValue, kind: "Quarter" | "Cumulative" | "Forecast"): EarningsValue {

    if ((valueThisFY.kind === kind && valueLastFY.kind === kind) && (valueThisFY.period === valueLastFY.period)) {

        return (valueLastFY.value < 0)
            ? {
                ...valueThisFY,
                value: Number((((
                    (valueThisFY.value / valueLastFY.value) -1)* -1) * 100).toFixed(2))
            }
            : {
                ...valueThisFY,
                value: Number(((
                    (valueThisFY.value / valueLastFY.value) -1) * 100).toFixed(2))
            } // .toFixed(2) to round the number by two decimal places. Number will output a string, string has to be wrapped in Number() typing.
    } else {
        return { kind: "Nothing" }
    }
}

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

export function operatingMarginCalculationV2(
    netSalesThisFY: EarningsValue,
    operatingIncomeThisFY: EarningsValue,
    kind: "Quarter" | "Cumulative" | "Forecast"
): EarningsValue {

    if ((netSalesThisFY.kind === kind && operatingIncomeThisFY.kind === kind) && (netSalesThisFY.period === operatingIncomeThisFY.period)) {

        return {
            ...operatingIncomeThisFY,
            value: Number(((
                (operatingIncomeThisFY.value / netSalesThisFY.value)) * 100).toFixed(2))
        }
    } else {
        return { kind: "Nothing" }
    }
}

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

const printValueQtrOrCml = (value: EarningsValue): string => {

    if ((value.kind === "Quarter" || value.kind === "Cumulative" || value.kind === "Forecast")) {
        return (value.units === "currency")
            ? `¥${value.value.toLocaleString("en")}M`
            : `${value.value}${value.units === "percentage" ? "%" : "M"}`
    } else {
        return "Error";
    }
}

export function printQuarterValuesV2(quarterValue: EarningsValue, currentQuarter: number, textLength: number): string {

    if (quarterValue.kind === "Quarter") {

        let valueString = printValueQtrOrCml(quarterValue);
        
        return border([
            spacer(quarterValue.period,12, "left"),
            spacer(valueString, textLength, "right")
        ])
    } else {
        return "";
    }
}

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

export function printCumulativeValuesV2(cmlValue: EarningsValue, currentQuarter: number, textLength: number): string {

    if (cmlValue.kind === "Cumulative") {

        let cmlPeriod = (cmlValue.kind === "Cumulative" && cmlValue.period === "First Half") 
            ? "1st Half"
            : (cmlValue.kind === "Cumulative" && cmlValue.period === "First Three Quarters")
                ? "1st 3/4" 
                : `${cmlValue.kind === "Cumulative" ? cmlValue.thisFY : "Error"} Cml.`

        let valueString = printValueQtrOrCml(cmlValue);

        return border([
            spacer(cmlPeriod, 12,"left"),
            spacer(valueString, textLength,"right")
        ])
    } else {
        return "";
    }
}

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

function printYoYV2(percentageValues: EarningsValue, currentQuarter: number): string {

    if (percentageValues.kind === "Quarter" || percentageValues.kind === "Cumulative") {

        let yoyValue = `${percentageValues.value > 0 ? "+" : ""}${percentageValues.value}%` 

        return spacer(yoyValue + " |",12,"right")

    } else {
        return ""
    }
}

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
                spacer(elem?.forecastPeriod ?? "N/A",16,"left"),
                spacer(forecastString,forecastValueLength,"right")
            ])
        });

        return forecastPeriods
};

export function printForecastValuesV2(forecastValue: EarningsValue, textLength: number): string {

    if (forecastValue.kind === "Forecast") {

        let forecastString = printValueQtrOrCml(forecastValue);

        let forecastPeriod = (forecastValue.period === "Current FY FCST")
            ? forecastValue.thisFY
            : (forecastValue.period === "Next FY FCST")
                ? forecastValue.nextFY
                : forecastValue.period


        return border([
            spacer(forecastPeriod, 16,"left"),
            spacer(forecastString, textLength,"right")
        ])
    } else {
        return "";
    } 
} 

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

    let capcomCheck = (header.companyName === "CAPCOM Co., Ltd." && header.fiscalYear === "FY3/2004") ? true : false;

    let quartersNetSalesThisFY: Earnings[] = quarterlyCalculation(netSalesThisFY);

    let quartersOperatingIncomeThisFY: Earnings[] = quarterlyCalculation(operatingIncomeThisFY);

    let quartersOpMarginThisFY: string[] = printQuarterValues(operatingMarginCalculation(quartersNetSalesThisFY, quartersOperatingIncomeThisFY), currentQuarter, valueLength);

    let quartersJoin: string[] = quartersOpMarginThisFY.flatMap((elem, index, array) => {
        if (bandaiNamcoCheck === true && index === 0) {
            return []
        } else if (segaCheck === true && index < 2) {
            return []
        } else if (capcomCheck === true && index === 0) {
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

    let capcomCheck = (header.companyName === "CAPCOM Co., Ltd." && header.fiscalYear === "FY3/2004") ? true : false;

    let sectionHeader: string = printSection(valuesThisFY, valueLength);

    let quartersThisFY: string[] = printQuarterValues(valuesThisFY, currentQuarter, valueLength);

    let quartersYoY: string[] = printYoY(quarterlyCalculation(valuesThisFY), quarterlyCalculation(valuesLastFY), currentQuarter);

    let quartersJoin: string[] = quartersThisFY.flatMap((elem, index, array) => {
        if (bandaiNamcoCheck === true && index === 0) {
            return []
        } else if (segaCheck === true && index < 2) {
            return []
        } else if (capcomCheck === true && index === 0) {
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

export function printSectionHeaderV2 (value: EarningsV2, useYoY: boolean): string {

    let yoyHeader = spacer("YoY% |",12,"right");

    return (useYoY)
        ? liner(printTextBlock(value.name,28),"−","both",true)
        : liner(printTextBlock(value.name,28) + yoyHeader,"−","both",true,40) 
}

export function qtrOrCmlOutput(values: string[], yoyValues: string[], opMargin: boolean) {

    return values.flatMap((elem, index, array) => {

        if (elem.length === 0) {
            return [];
        } else {

            let lineCheck = index === array.length-1; 

            return (!opMargin) 
                ? liner(elem + yoyValues[index],(lineCheck) ? "=" : "−","bottom",true,(elem.length + yoyValues[index].length - 3)) 
                : liner(elem,(index === array.length-1) ? "=" : "−", "bottom",true,elem.length-2)
        }
    }) 
}

export function forecastOutput(values: string[]) {

    return values.flatMap((elem, index, array) => {

        if (elem.length === 0) {
            return [];
        } else {
            return liner(elem,"−",(index === array.length-1) ? "both" : "top" ,true);
        }
    })
}

export function printReduceSection(
    sectionHeader: string, 
    quarters: string[],
    cumulatives: string[],
    forecasts: string[],
    ): string {

        return [
            sectionHeader,
            ...quarters,
            ...cumulatives,
            ...forecasts,
            "###"
        ].reduce((acc, next) => {
            return acc + next
        })
}
