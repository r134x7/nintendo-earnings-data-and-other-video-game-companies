export type Section = {
    units: "units" | "percentage" | "currency",
    period: string,
    name: string,
    value: number,
}

export type Header = {
    switchHeader: "| Nintendo Switch   |",
    secondHeader: "| Sales Units and Forecast     |",
    fiscalYear: string,
}