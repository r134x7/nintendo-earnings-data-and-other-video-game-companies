import { printTextBlock, liner, spacer, borderV2} from "./table_design_logic";
import { printValuePrimitive, numberType, quickYoYCalculate } from "./general_earnings_logic";

export type AnnualReportValue =
    | { 
        kind: "Annual Report", 
        units: "units" | "currency" | "percentage",
        fiscalYear: string,
        value: number
      } 
    | { kind: "Nothing" }

export type AnnualReportTitle = 
    | { kind: "General",
        title: string,
        releaseDate: string,
        fyEndMonth: string,
        valueLTD: AnnualReportValue,
        valueThisFY: AnnualReportValue,
        valueLastFY: AnnualReportValue,
        valueLastTwoFYs: AnnualReportValue,
        rank?: number,
        footnotes?: string,
      }
    | { kind: "Sega",
        title: string,
        releaseDate: string,
        platforms: string,
        totalEditions: number,
        valueLTD: AnnualReportValue,
        valueThisFY: AnnualReportValue,
        valueLastFY: AnnualReportValue,
        valueLastTwoFYs: AnnualReportValue,
        ipType: "Acquired IP" | "Developed in-house IP" | "Licensed third party IP" | "Undefined",
        rank?: number,
        footnotes?: string,
      }

export function printReleaseDate(series: AnnualReportTitle, textLength: number) {

    const releaseDate = (series.kind === "General")
        ? series.releaseDate + " to " + series.fyEndMonth
        : series.kind === "Sega"
            ? "First Release Year: " + series.releaseDate
            : ""
    
    return borderV2([
        spacer(releaseDate, textLength, "left")
    ],"both","noNewLine")
}

export function printRank(series: AnnualReportTitle, textLength: number) {

    const ranking = `Rank ${series.rank}`;

    return borderV2([
        spacer(ranking, textLength, "right")
    ],"right","newLine")
}

export function printAnnualReportValue(series: AnnualReportTitle, textLength: number, valueLength: number, kind: "Cumulative" | "LTD", newLine: "newLine" | "noNewLine" | "newLineOnEachElement" ): string {

    if (series.valueThisFY.kind === "Annual Report" && kind === "Cumulative") {

        const getFY = series.valueThisFY.fiscalYear + " Cumulative";

        const getFixed: number = Number(series.valueThisFY.value.toFixed(2))

        return borderV2([
            spacer(getFY, textLength, "left"),
            spacer(printValuePrimitive(getFixed,numberType("Million"),"None"), valueLength, "right")
        ],"both",newLine);
    } else if (series.valueLTD.kind === "Annual Report" && kind === "LTD") {

        const getFixed: number = Number(series.valueLTD.value.toFixed(2));

        return borderV2([
            spacer("Life-To-Date", textLength, "left"),
            spacer(printValuePrimitive(getFixed,numberType("Million"),"None"), valueLength, "right")
        ], "both",newLine);
    } else {
        return "ERROR";
    }
}

export function printCumulativeYoY(series: AnnualReportTitle, textLength: number, valueLength: number) {

    const getFY = (series.valueLTD.kind === "Annual Report") ? series.valueLTD.fiscalYear : "ERROR"

    const getValue = (seriesLocal: AnnualReportTitle): string => {

        if (seriesLocal.valueLTD.kind === "Annual Report" && seriesLocal.valueLastFY.kind === "Annual Report" && seriesLocal.valueLastTwoFYs.kind === "Annual Report") {

            const firstNegate = seriesLocal.valueLTD.value - seriesLocal.valueLastFY.value;

            const secondNegate = seriesLocal.valueLastFY.value - seriesLocal.valueLastTwoFYs.value;

            return (firstNegate === 0 && secondNegate === 0)
                ? "N/A"
                : (firstNegate >= secondNegate)
                    ? `+${quickYoYCalculate(firstNegate, secondNegate, 2)}%`
                    : `${quickYoYCalculate(firstNegate, secondNegate, 2)}%`
        } else if (series.valueLastFY.kind === "Nothing") {
            return "New!"
        } else {
            return "ERROR"
        }
    }

    return borderV2([
        spacer(getFY + " Cml. YoY%", textLength, "left"),
        spacer(getValue(series),valueLength,"right"),
    ],"both","noNewLine")
}

export function printSeriesName(series: AnnualReportTitle, textLength: number) {

    return liner(
        printTextBlock(series.title, textLength)
    ,"−","both","newLine") 
}

export function thisFYCalculation(thisFYLTD: AnnualReportValue, lastFYLTD: AnnualReportValue): AnnualReportValue {

    return (thisFYLTD.kind === "Annual Report" && lastFYLTD.kind === "Annual Report")
        ? {
            kind: "Annual Report",
            units: thisFYLTD.units,
            fiscalYear: thisFYLTD.fiscalYear,
            value: thisFYLTD.value - lastFYLTD.value,
        }
        : thisFYLTD;
}