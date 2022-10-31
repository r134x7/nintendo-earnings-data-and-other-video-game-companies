export type Section = {
    region: " Group Total " | " Japan " | " Americas " | " Europe ",
    units: "units" | "percentage" | "currency" | "NaN" ,
    period: " 1st Quarter " | " 2nd Quarter " | " 3rd Quarter " | " 4th Quarter " | " Last FY Cumulative " | "Forecast " | " FCST Revision 1 " | " FCST Revision 2 " | " FCST Revision 3 "
    cmlPeriod: " 1st Quarter " | " First Half  " | " 1st 3 Qtrs  " | "Cml. ",
    name: string,
    value: number,
}

export type Header = {
    firstHeader: "| Bandai Namco   |",
    secondHeader: "| Segment Information |",
    fiscalYear: string,
}

const printHead = (header: Header) => 
`+${"-".repeat(27)}+
${header.firstHeader}${header.fiscalYear}|
+${"-".repeat(27)}+
${header.secondHeader}
+${"-".repeat(21)}+`;

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


const printSalesHeader = (): string => {

let x =
`+-------------+
| Home        |-------------+
| Video Game  |    Sales    |
+---------------------------+`
    return x
};

const printSalesPerUnitHeader = (): string => {

let x =
`+====================================+
| Home        | Sales Per | Software |
| Video Game  |  Software |    Units |
| Group Total | Unit Cml. |Cumulative|
+------------------------------------+`

    return x
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

            let printPeriod: string = elem.period;

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

    let printSection: string = (yoy.value > 0)
            ? `+${(yoy.value)}% `
            : `${(yoy.value)}% `

    let printSectionFixed: string = (printSection.length >= 13)
        ? printSection
        : " ".repeat(13 - printSection.length) + printSection;
            
    let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX

    // let printPeriod: string = `${shortFY}${yoy.cmlPeriod}`

    let printPeriod: string = ` ${yoy.cmlPeriod}YoY%   `;
            
    let printLine: string = "\n+" + "-".repeat(27) + "+";

    return "|" + printPeriod + "|" + printSectionFixed + "|" + printLine  

};

const printQtrSalesPerSWUnit = (segmentSales: Section[], segmentUnits: Section[], header: Header, currentQuarter: number): string[] => {

    const salesQuarters = quarterlyCalculation(segmentSales);
    const salesUnits = quarterlyCalculation(segmentUnits); 

        const salesPerSoftwareUnit = salesQuarters.filter((elem, index, array) => {
            return index < currentQuarter && array[index].value !== 0
        }).map((elem, index, array) => { 
            // sales has to be converted from billion yen to million yen. units has to be converted from thousands to millions
            let calculateSalesPerSoftware: number = Number(((elem.value * 1000) / (salesUnits[index].value / 1000)).toFixed(0))

            let printsegmentSalesPerSoftware: string = `¥${calculateSalesPerSoftware.toLocaleString("en")} `
            
            let printsegmentSalesPerSoftwareFixed: string = (printsegmentSalesPerSoftware.length >= 11)
                ? printsegmentSalesPerSoftware
                : " ".repeat(11 - printsegmentSalesPerSoftware.length) + printsegmentSalesPerSoftware;
            
            let printSoftwareUnits: string = `${salesUnits[index].value / 1000}M `

            // let printSoftwareUnits: string = `${segmentUnits[index].value.toLocaleString("en")}k `
            let printSoftwareUnitsFixed: string = (printSoftwareUnits.length >= 10)
                    ? printSoftwareUnits
                    : " ".repeat(10 - printSoftwareUnits.length) + printSoftwareUnits 

            let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX

            let printPeriod: string = elem.period;

           let printLine: string = (array[index] === array.at(-1))
                ? "\n+" + "=".repeat(36) + "+"
                : "\n+" + "-".repeat(36) + "+"

            return "|" + printPeriod + "|" + printsegmentSalesPerSoftwareFixed + "|" + printSoftwareUnitsFixed + "|" + printLine
        })

        return salesPerSoftwareUnit
}


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
};

const printYoYSalesPerSoftwareUnit = (segmentSales: Section[], segmentUnits: Section[], header: Header, currentQuarter: number): string => {

    const filterUnits = segmentUnits.filter(elem => elem.cmlPeriod === "Cml. ");

    const filterSales: Section[] = segmentSales.filter(elem => elem.cmlPeriod === "Cml. ").map((elem, index, array) => {

        return {...elem, value: Number(((elem.value * 1000) / (filterUnits[index].value / 1000)).toFixed(0))} 
    });

    const yoySalesPerUnit = yearOnYearCalculation(filterSales);  

    const yoyUnits = yearOnYearCalculation(filterUnits);


    let printSalesPerUnitYoY: string = (yoySalesPerUnit.value > 0)
            ? `+${(yoySalesPerUnit.value)}% `
            : `${(yoySalesPerUnit.value)}% `

    let printUnitsYoY: string = (yoyUnits.value > 0)
            ? `+${(yoyUnits.value)}% `
            : `${(yoyUnits.value)}% `

    let printSalesFixed: string = (printSalesPerUnitYoY.length >= 11)
        ? printSalesPerUnitYoY 
        : " ".repeat(11 - printSalesPerUnitYoY.length) + printSalesPerUnitYoY;

    let printUnitsFixed: string = (printUnitsYoY.length >= 10)
        ? printUnitsYoY 
        : " ".repeat(10 - printUnitsYoY.length) + printUnitsYoY;

    let printLine: string = "\n+" + "-".repeat(36) + "+";

    let printPeriod: string = ` ${yoySalesPerUnit.cmlPeriod}YoY%   `;

    return "|" + printPeriod + "|" + printSalesFixed + "|" + printUnitsFixed + "|" + printLine
 
}