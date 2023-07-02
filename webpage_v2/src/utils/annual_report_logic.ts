import { printTextBlock, border, liner, spacer} from "./table_design_logic";

export type AnnualReportValue =
    | { 
        kind: "Annual Report", 
        units: "units" | "currency" | "percentage",
        value: number
      } 
    | { kind: "Nothing" }

export type AnnualReportMake = 
    | { kind: "General",
        title: string,
        releaseDate: string,
        fyEndMonth: string,
        value: AnnualReportValue,
        valueLastFY: AnnualReportValue,
        valueLastTwoFYs: AnnualReportValue,
        rank?: number,
        footnotes?: string,
        fiscalYear?: string,
      }
    | { kind: "Sega",
        title: string,
        releaseDate: string,
        platforms: string,
        totalEditions: number,
        value: AnnualReportValue,
        valueLastFY: AnnualReportValue,
        valueLastTwoFYs: AnnualReportValue,
        ipType: "Acquired IP" | "Developed in-house IP" | "Licensed third party IP" | "Undefined",
        rank?: number,
        miscellaneous1?: string,
        miscellaneous2?: string,
        fiscalYear?: string,
      }