export type Series = {
    title: string,
    releaseDate: string,
    fyPeriod: string,
    value: number,
    valueLastFY: number,
    valueLastTwoFYs: number,
    rank?: number,
    miscellaneous?: string,
}

export type Header = {
    bandaiNamcoHeader: "| Bandai Namco - IP Series Data  |",
    secondHeader: "| First Appearance to recent FY |",
    thirdHeader: "| Rank                           |",
    fourthHeader: "| Units                          |",
    fiscalYear: string,
    fiscalYearYoY: string,
    ltd: "| Life-To-Date       |",
    summaryHeader: string,
}

export const printHead = (header: Header) =>
`+${"-".repeat(32)}+
${header.bandaiNamcoHeader}
+${"-".repeat(32)}+
${header.secondHeader}
+${"-".repeat(32)}+
${header.thirdHeader}
+${"-".repeat(32)}+
${header.fourthHeader}
+${"-".repeat(32)}+`;

