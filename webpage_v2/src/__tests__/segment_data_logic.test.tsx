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
        return (index === 0 || quarters[index].period === " Last FY Cumulative ") // 1st Quarter or last FY number
                ? elem
                : {...elem, value: elem.value - array[index-1].value}
    })
    
    return calc
};

export function yearOnYearCalculation(segment: Section[]): Section {

    const [thisFY, lastFY] = segment.filter(elem => elem.cmlPeriod === "Cml. ")

    return (lastFY.value < 0)
            ? {...thisFY, units: "percentage", value: Number(
                ((((thisFY.value / lastFY.value) -1)* -1) * 100).toFixed(2)
                )}
            : (lastFY.value === 0)
            ? {...thisFY, units: "NaN", value: 0}
            :{...thisFY, units: "percentage", value: Number(
                (((thisFY.value / lastFY.value) -1) * 100).toFixed(2)
                )}; // .toFixed(2) to round the number by two decimal points regardless of Number will output a string, whole thing needs to be wrapped in Number to change type back from string to number  
}

const printQtrSales = (segmentSales: Section[], header: Header, currentQuarter: number): string[] => {

    const quarters = quarterlyCalculation(segmentSales);

        const sales = quarters.filter((elem, index, array) => {
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

const printCmlSales = (segmentSales: Section[], header: Header, currentQuarter: number): string[] => {

        const sales = segmentSales.filter((elem, index, array) => {
            return index !== 0 && index < currentQuarter && array[index].value !== 0
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

        //    let printLine: string = (array[index] === array.at(-1))
        //         ? "\n+" + "=".repeat(27) + "+"
        //         : "\n+" + "-".repeat(27) + "+"
            
           let printLine: string = "\n+" + "-".repeat(27) + "+";

            return "|" + printPeriod + "|" + printSectionFixed + "|" + printLine  
        })

        return sales

};

const printYoYSales = (segmentSales: Section[], header: Header, currentQuarter: number): string => {

    const yoy = yearOnYearCalculation(segmentSales);

    // values given are Billion yen, changing to Million yen
    let printSection: string = `${(yoy.value)}% `

    let printSectionFixed: string = (printSection.length >= 13)
        ? printSection
        : " ".repeat(13 - printSection.length) + printSection;
            
    let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX

    // let printPeriod: string = `${shortFY}${yoy.cmlPeriod}`

    let printPeriod: string = `${shortFY}${yoy.cmlPeriod}`
            
    let printLine: string = "\n+" + "-".repeat(27) + "+";

    return "|" + printPeriod + "|" + printSectionFixed + "|" + printLine  

};
const printCmlSalesPerSWUnit = (segmentSales: Section[], segmentUnits: Section[], header: Header, currentQuarter: number): string[] => {

        const salesPerSoftwareUnit = segmentSales.filter((elem, index, array) => {
            return index !== 0 && index < currentQuarter && array[index].value !== 0
        }).map((elem, index, array) => { 
            // sales has to be converted from billion yen to million yen. units has to be converted from thousands to millions
            let calculateSalesPerSoftware: number = Number(((elem.value * 1000) / (segmentUnits[index+1].value / 1000)).toFixed(0))

            let printsegmentSalesPerSoftware: string = `¥${calculateSalesPerSoftware.toLocaleString("en")} `
            
            let printsegmentSalesPerSoftwareFixed: string = (printsegmentSalesPerSoftware.length >= 11)
                ? printsegmentSalesPerSoftware
                : " ".repeat(11 - printsegmentSalesPerSoftware.length) + printsegmentSalesPerSoftware;
            
            let printSoftwareUnits: string = `${segmentUnits[index+1].value / 1000}M `

            // let printSoftwareUnits: string = `${segmentUnits[index].value.toLocaleString("en")}k `
            let printSoftwareUnitsFixed: string = (printSoftwareUnits.length >= 10)
                    ? printSoftwareUnits
                    : " ".repeat(10 - printSoftwareUnits.length) + printSoftwareUnits 

            let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX

            let printPeriod: string = (currentQuarter === 4 && array[index] === array.at(-1))
                    ? `${shortFY}${elem.cmlPeriod}`
                    : elem.cmlPeriod

        //    let printLine: string = (array[index] === array.at(-1))
        //         ? "\n+" + "=".repeat(36) + "+"
        //         : "\n+" + "-".repeat(36) + "+"
            
        let printLine: string = "\n+" + "-".repeat(36) + "+";

            return "|" + printPeriod + "|" + printsegmentSalesPerSoftwareFixed + "|" + printSoftwareUnitsFixed + "|" + printLine
        })

        return salesPerSoftwareUnit
}

test("sales print", () => {

    console.log(printCmlSales(testDataSales, header, 4).reduce((prev, next) => prev + "\n" + next));
    
})

test("sales per software unit test", () => {

    console.log(printCmlSalesPerSWUnit(testDataSales, testDataUnits, header, 4).reduce((prev, next) => prev + "\n" + next));
    
})

test("year on year calculation", () => {

    const x = yearOnYearCalculation(testDataSales);

    const y = yearOnYearCalculation(testDataUnits);

    console.log(x.value);
    console.log(y.value);
    
    
});

test("print quarter sales", () => {

    console.log(printQtrSales(testDataSales, header, 4).reduce((prev, next) => prev + "\n" + next));
    
})

test("print all sales and yoy", () => {

    const x = [...printQtrSales(testDataSales, header, 4), ...printCmlSales(testDataSales, header, 4), printYoYSales(testDataSales, header, 4)].reduce((prev, next) => prev + "\n" + next);
    
    console.log(x);
    
})