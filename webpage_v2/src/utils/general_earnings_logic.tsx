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

export type QuarterValue = { kind:"Quarter", 
        period:"1st Quarter" | "2nd Quarter" | "3rd Quarter" | "4th Quarter", 
        units: "units" | "currency" | "percentage",
        value: number};

export type CumulativeValue = { kind:"Cumulative", 
        period:"1st Quarter" | "First Half" | "First Three Quarters" | "FY Cumulative", 
        units: "units" | "currency" | "percentage",
        thisFY: string,
        value: number}; 

export type ForecastValue = { kind:"Forecast", 
        period:"Current FY FCST" | "FCST Revision 1" | "FCST Revision 2" | "FCST Revision 3" | "Next FY FCST", 
        units: "units" | "currency" | "percentage",
        thisFY: string,
        nextFY: string,
        value: number};

export type Nothing = { kind:"Nothing" };

export type EarningsValue = 
    | ForecastValue
    | QuarterValue
    | CumulativeValue
    | Nothing

type Just<T> = { kind:"Just", value: T }

type Maybe<T> =
    | Just<T>
    | Nothing

export type Header = {
    companyName: string,
    fiscalYear: string,
    title: string,
};

export function quarterlyCalculationV2(thisQuarterValue: EarningsValue, lastQuarterValue: EarningsValue, lastHalfValue?: EarningsValue): EarningsValue {
    
    return (thisQuarterValue.kind === "Quarter" && lastQuarterValue.kind === "Quarter")
        ? {
            kind:"Quarter",
            units: thisQuarterValue.units,
            period: thisQuarterValue.period,
            value: (Number.isInteger(thisQuarterValue.value - lastQuarterValue.value))
                ? thisQuarterValue.value - lastQuarterValue.value
                : Number((thisQuarterValue.value - lastQuarterValue.value).toFixed(2))
        }  // explicit condition for half yearly calculation, lastHalfValue is only needed for Fourth Quarter
        : (thisQuarterValue.kind === "Quarter" && lastQuarterValue.kind === "Nothing" && (lastHalfValue !== undefined && lastHalfValue.kind === "Quarter"))
            ? {
                kind:"Quarter",
                units: thisQuarterValue.units,
                period: thisQuarterValue.period,
                value: (Number.isInteger(thisQuarterValue.value - lastHalfValue.value)) 
                    ? thisQuarterValue.value - lastHalfValue.value 
                    : Number((thisQuarterValue.value - lastHalfValue.value).toFixed(2))
            }
            : thisQuarterValue
}

export function quickYoYCalculate(numerator: number, divisor: number, fixedLength: number): number {

    return (divisor < 0)
        ? Number((((
                    (numerator / divisor) -1)* -1) * 100).toFixed(fixedLength))
        : Number(((
                    (numerator / divisor) -1) * 100).toFixed(fixedLength))
}

export function quickRatio(relativeValue: number, absoluteValue: number, fixedLength: number): number {

    return Number(((relativeValue / absoluteValue) * 100).toFixed(fixedLength))
}

export function yearOnYearCalculationV2(valueThisFY: EarningsValue, valueLastFY: EarningsValue, kind: "Quarter" | "Cumulative" | "Forecast"): EarningsValue {

    if ((valueThisFY.kind === kind && valueLastFY.kind === kind) && (valueThisFY.period === valueLastFY.period)) {

        return (valueLastFY.value < 0)
            ? {
                ...valueThisFY,
                units: "percentage", 
                value: Number((((
                    (valueThisFY.value / valueLastFY.value) -1)* -1) * 100).toFixed(2))
            }
            : {
                ...valueThisFY,
                units: "percentage",
                value: Number(((
                    (valueThisFY.value / valueLastFY.value) -1) * 100).toFixed(2))
            } // .toFixed(2) to round the number by two decimal places. Number will output a string, string has to be wrapped in Number() typing.
    } else {
        return { kind: "Nothing" }
    }
}

export function operatingMarginCalculationV2(
    netSalesThisFY: EarningsValue,
    operatingIncomeThisFY: EarningsValue,
    kind: "Quarter" | "Cumulative" | "Forecast"
): EarningsValue {

    if ((netSalesThisFY.kind === kind && operatingIncomeThisFY.kind === kind) && (netSalesThisFY.period === operatingIncomeThisFY.period)) {

        return {
            ...operatingIncomeThisFY,
            units: "percentage",
            value: Number(((
                (operatingIncomeThisFY.value / netSalesThisFY.value)) * 100).toFixed(2))
        }
    } else {
        return { kind: "Nothing" }
    }
}

export function numberType(value: "Billion" | "Million" | "Thousand" | "None" | undefined): string {

    switch (value) {
        case "Billion":
            return "B"        

        case "Million":
            return "M"

        case "Thousand":
            return "k"

        case "None":
            return ""
    
        default:
            return "M"
    }
}

export function printValuePrimitive(value: number, numberTypeInput: string, units: "¥" | "%" | "+%" | "None" | undefined): string {

    return (units === "%")
        ? `${value}${units}`
        : (units === "+%")
        ? `${value > 0 ? `+${value}` : value}%`
        : (units === "¥")
            ? `${units}${value.toLocaleString("en")}${numberTypeInput}`
            : `${value}${numberTypeInput}`
}

export function printValueQtrOrCml(value: EarningsValue, numberTypeInput?: string): string {

    if ((value.kind === "Quarter" || value.kind === "Cumulative" || value.kind === "Forecast")) {
        return (value.units === "currency")
            ? `¥${value.value.toLocaleString("en")}${numberTypeInput !== undefined ? numberTypeInput : "M"}`
            : `${value.value}${value.units === "percentage" ? "%" : `${numberTypeInput !== undefined ? numberTypeInput : "M"}`}`
    } else {
        return "Error";
    }
}

export function printQuarterValuesV2(quarterValue: EarningsValue, currentQuarter: number, textLength: number, singleColumn?: boolean, numberTypeCall?: "Billion" | "Million" | "Thousand" | "None", specialPagePeriod?: string): string {

    if (quarterValue.kind === "Quarter") {

        let valueString = printValueQtrOrCml(quarterValue,numberType(numberTypeCall));
        
        return (!singleColumn)
            ? border([
            spacer((!specialPagePeriod) ? quarterValue.period : specialPagePeriod + quarterValue.period, (!specialPagePeriod) ? 12 : specialPagePeriod.length + quarterValue.period.length + 1, "left"),
            spacer(valueString, textLength, "right")
            ])
            : spacer(valueString + " |", textLength, "right")
    } else {
        return "";
    }
}

export function printCumulativeValuesV2(cmlValue: EarningsValue, currentQuarter: number, textLength: number, singleColumn?: boolean, numberTypeCall?: "Billion" | "Million" | "Thousand" | "None", specialPagePeriod?: string): string {

    if (cmlValue.kind === "Cumulative" && cmlValue.period !== "1st Quarter") {

        let cmlPeriod = (cmlValue.kind === "Cumulative" && cmlValue.period === "First Half") 
            ? "1st Half"
            : (cmlValue.kind === "Cumulative" && cmlValue.period === "First Three Quarters")
                ? "1st 3/4" 
                : `${cmlValue.kind === "Cumulative" ? (!specialPagePeriod ? cmlValue.thisFY : "FY Cml.") : "Error"}`

        let valueString = printValueQtrOrCml(cmlValue, numberType(numberTypeCall));

        return (!singleColumn) 
            ? border([
                spacer((!specialPagePeriod) ? cmlPeriod : specialPagePeriod + cmlPeriod, (!specialPagePeriod) ? 12 : specialPagePeriod.length + cmlPeriod.length + 1,"left"),
                spacer(valueString, textLength,"right")
            ])
            : spacer(valueString + " |", textLength,"right")
    } else {
        return "";
    }
}

export function printYoYV2(percentageValues: EarningsValue, currentQuarter: number, textLength: number, newRow?: boolean): string {

    if ((percentageValues.kind === "Quarter" || percentageValues.kind === "Cumulative") && percentageValues.units === "percentage") {

        let yoyValue = `${percentageValues.value > 0 ? "+" : ""}${percentageValues.value}%` 

        return (!newRow)
            ? spacer(yoyValue + " |", textLength,"right")
            : border([
                spacer("YoY%", 12,"right"),
                spacer(yoyValue, textLength,"right")
            ])
    } else {
        return ""
    }
}

export function printForecastValuesV2(forecastValue: EarningsValue, textLength: number, singleColumn?: boolean, numberTypeCall?: "Billion" | "Million" | "Thousand" | "None"): string {

    if (forecastValue.kind === "Forecast") {

        let forecastString = printValueQtrOrCml(forecastValue, numberType(numberTypeCall));

        let forecastPeriod = (forecastValue.period === "Current FY FCST")
            ? forecastValue.thisFY
            : (forecastValue.period === "Next FY FCST")
                ? forecastValue.nextFY
                : forecastValue.period


        return (!singleColumn)
            ? border([
                spacer(forecastPeriod, 16,"left"),
                spacer(forecastString, textLength,"right")
            ])
            : spacer(forecastString + " |", textLength,"right")
    } else {
        return "";
    } 
} 

export function printSectionHeaderV2 (value: EarningsV2, useYoY: boolean): string {

    let yoyHeader = spacer("YoY% |",12,"right");

    return (!useYoY)
        ? liner(printTextBlock(value.name,28),"−","both",true)
        : liner(printTextBlock(value.name,28) + yoyHeader,"−","both",true,40) 
}

export function qtrOrCmlOutput(values: string[], yoyValues: string[], opMargin: boolean): string[] {

    return values.flatMap((elem, index, array) => {

        let lineCheck = index === array.length-1; 

        if (elem.length === 0) {
            return [];
        } else if (opMargin === true) {
            return liner(elem,(index === array.length-1) ? "=" : "−", "bottom",true,elem.length-2)
        } else {
            return liner(elem + yoyValues[index],(lineCheck) ? "=" : "−","bottom",true,((elem.length - 2) + ((yoyValues[index].length !== 0) ? yoyValues[index].length - 1 : 0)))
        }
    }) 
}

export function forecastOutput(values: string[]): string[] {
    // this might result in an error...
    return values.filter(elem => elem.length !== 0).map((elem, index, array) => liner(elem,"−",(index === array.length-1) ? "both" : "top" ,true))

    // return values.flatMap((elem, index, array) => {

    //     if (elem.length === 0) {
    //         return [];
    //     } else {
    //         return liner(elem,"−",(index === array.length-1) ? "both" : "top" ,true);
    //     }
    // })
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
