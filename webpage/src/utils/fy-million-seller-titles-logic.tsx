export type Titles = {
    title: string,
    period: " 1st Quarter  " | " 2nd Quarter  " | " 3rd Quarter  " | " 4th Quarter  " | " Last FY Total ",
    regionA: "   Japan ", 
    valueA: number,
    regionB: " Overseas",
    valueB: number,
    regionC: " WW FY   ",
    valueC: number,
    regionD: " WW LTD  ",
    valueD: number,
    rank?: number, 
}

export type Header = {
    switchHeader: "| Nintendo Switch FY Million-Seller Titles |",
    secondHeader: "| Title and Rank                           |",
    thirdHeader: "| Units                                    |",
    fiscalYear: string
    areaHeader: "| Area         |   Japan | Overseas|",
    globalHeader: "| Global       | WW FY   | WW LTD  |",
}

//| Area         |   Japan | Overseas|
//