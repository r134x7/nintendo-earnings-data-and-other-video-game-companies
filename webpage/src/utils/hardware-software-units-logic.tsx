export type Section = {
    units: "units" | "percentage" | "currency" | "NaN" ,
    period: " 1st Quarter " | " 2nd Quarter " | " 3rd Quarter " | " 4th Quarter " | " Last FY Cumulative " | "Forecast " | " FCST Revision 1 " | " FCST Revision 2 " | " FCST Revision 3 "
    cmlPeriod: " 1st Quarter " | " First Half  " | " 1st 3 Qtrs  " | "Cml. ",
    name: string,
    value: number,
}

export type Header = {
    switchHeader: "| Nintendo Switch   |",
    secondHeader: "| Sales Units and Forecast     |",
    fiscalYear: string,
    nextFiscalYearShort: string,
}