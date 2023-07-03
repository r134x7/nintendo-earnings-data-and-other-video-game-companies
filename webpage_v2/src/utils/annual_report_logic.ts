import { printTextBlock, border, liner, spacer, borderV2} from "./table_design_logic";
import { printValuePrimitive, numberType } from "./general_earnings_logic";

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

export function printCumulativeValue(series: AnnualReportTitle, textLength: number): string {

    if (series.valueThisFY.kind === "Annual Report") {

        const getFY = series.valueThisFY.fiscalYear + " Cumulative";

        const getFixed: number = Number(series.valueThisFY.value.toFixed(2))

        return border([
            spacer(getFY, getFY.length+1, "left"),
            spacer(printValuePrimitive(getFixed,numberType("Million"),"None"), textLength, "right")
        ]);
    } else {
        return "ERROR";
    }
}