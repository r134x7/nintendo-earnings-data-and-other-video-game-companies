import { Header, Section } from "../utils/segment_data_logic";

const testDataSales: Section[] = [
    {
        name: " Home video game ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "currency",
        value: 26.2 // billion yen
    },
    {
        name: " Home video game ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "currency",
        value: 55.7 // billion yen
    },
    {
        name: " Home video game ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 98.8 // billion yen
    },
    {
        name: " Home video game ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 174.4 // billion yen
    },
    {
        name: " Home video game ",
        region: " Group Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 118.1 // billion yen
    },
]

const testDataUnits: Section[] = [
    {
        name: " Home video game ",
        region: " Group Total ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 10066 // thousand
    },
    {
        name: " Home video game ",
        region: " Group Total ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 19600,
    },
    {
        name: " Home video game ",
        region: " Group Total ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "currency",
        value: 36220,
    },
    {
        name: " Home video game ",
        region: " Group Total ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 56847,
    },
    {
        name: " Home video game ",
        region: " Group Total ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "currency",
        value: 41498,
    },
]

const header: Header = {
    fiscalYear: " FY3/2022 ",
    secondHeader: "| Segment Information |",
    firstHeader: "| Bandai Namco   |",
}

function quarterlyCalculation(quarters: Section[]) {
        
    const calc: Section[] = quarters.map((elem, index, array) => {
        return (index === 0) // 1st Quarter 
                ? elem
                : {...elem, value: elem.value - array[index-1].value}
    })
    
    return calc
};

const printSales = (segmentSales: Section[], header: Header, currentQuarter: number): string[] => {

        const sales = segmentSales.filter((elem, index, array) => {
            return index < currentQuarter && array[index].value !== 0
        }).map((elem, index, array) => {
            // values given are Billion yen, changing to Million yen
            let printSection: string = `¥${(elem.value * 1000).toLocaleString("en")}M `

            let printSectionFixed: string = (printSection.length >= 13)
                ? printSection
                : " ".repeat(13 - printSection.length) + printSection;
            
            let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX

            let printPeriod: string = (currentQuarter === 4 && array[index] === array.at(-1))
                    ? `${shortFY}${elem.cmlPeriod}`
                    : elem.cmlPeriod

           let printLine: string = (array[index] === array.at(-1))
                ? "\n+" + "=".repeat(27) + "+"
                : "\n+" + "-".repeat(27) + "+"
            
            return "|" + printPeriod + "|" + printSectionFixed + "|" + printLine  
        })

        return sales

};

const printSalesPerSWUnit = (segmentSales: Section[], segmentUnits: Section[], header: Header, currentQuarter: number): string[] => {

        const salesPerSoftwareUnit = segmentSales.filter((elem, index, array) => {
            return index < currentQuarter && array[index].value !== 0
        }).map((elem, index, array) => { 
            // sales has to be converted from billion yen to million yen. units has to be converted from thousands to millions
            let calculateSalesPerSoftware: number = Number(((elem.value * 1000) / (segmentUnits[index].value / 1000)).toFixed(0))

            let printsegmentSalesPerSoftware: string = `¥${calculateSalesPerSoftware.toLocaleString("en")} `
            
            let printsegmentSalesPerSoftwareFixed: string = (printsegmentSalesPerSoftware.length >= 11)
                ? printsegmentSalesPerSoftware
                : " ".repeat(11 - printsegmentSalesPerSoftware.length) + printsegmentSalesPerSoftware;
            
            let printSoftwareUnits: string = `${segmentUnits[index].value / 1000}M `

            // let printSoftwareUnits: string = `${segmentUnits[index].value.toLocaleString("en")}k `
            let printSoftwareUnitsFixed: string = (printSoftwareUnits.length >= 10)
                    ? printSoftwareUnits
                    : " ".repeat(10 - printSoftwareUnits.length) + printSoftwareUnits 

            let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX

            let printPeriod: string = (currentQuarter === 4 && array[index] === array.at(-1))
                    ? `${shortFY}${elem.cmlPeriod}`
                    : elem.cmlPeriod

           let printLine: string = (array[index] === array.at(-1))
                ? "\n+" + "=".repeat(36) + "+"
                : "\n+" + "-".repeat(36) + "+"
            
            return "|" + printPeriod + "|" + printsegmentSalesPerSoftwareFixed + "|" + printSoftwareUnitsFixed + "|" + printLine
        })

        return salesPerSoftwareUnit
}

test("sales print", () => {

    console.log(printSales(testDataSales, header, 4).reduce((prev, next) => prev + "\n" + next));
    
})

test("sales per software unit test", () => {

    console.log(printSalesPerSWUnit(testDataSales, testDataUnits, header, 4).reduce((prev, next) => prev + "\n" + next));
    
})