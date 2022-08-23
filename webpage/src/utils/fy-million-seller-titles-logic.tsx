export type Titles = {
    title: string,
    period: " 1st Quarter  " | " 2nd Quarter  " | " 3rd Quarter  " | " 4th Quarter  " | " Last FY Total " | " WW LTD for FY before Last FY Total ",
    region: "   Japan " | " Overseas" | " WW FY   " | " WW LTD  ",
    value: number,
    rank?: number,
    label?: "+Infinity%" | "New!", 
}

export type Header = {
    switchHeader: "| Nintendo Switch FY Million-Seller Titles |",
    secondHeader: "| Title and Rank                           |",
    thirdHeader: "| Units                                    |",
    fiscalYear: string,
    areaHeader: "| Area         |   Japan | Overseas|",
    globalHeader: "| Global       | WW FY   | WW LTD  |",
}