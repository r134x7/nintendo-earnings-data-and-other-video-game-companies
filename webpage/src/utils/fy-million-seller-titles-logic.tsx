export type Titles = {
    title: string,
    period: " 1st Quarter  " | " 2nd Quarter  " | " 3rd Quarter  " | " 4th Quarter  ",
    region: "   Japan " | " Overseas" | " WW FY   " | " WW LTD  ",
    value: number,
    rank?: number,
}

export type Header = {
    switchHeader: string,
    secondaryHeader: string,
    fiscalYear: string,
    areaHeader: "| Area         |   Japan | Overseas|",
    globalHeader: "| Global       | WW FY   | WW LTD  |",
}