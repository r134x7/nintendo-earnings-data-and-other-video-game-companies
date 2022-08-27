import { Header, Section } from "../utils/hardware-software-units-logic";

const header: Header = {
    switchHeader: "| Nintendo Switch   |",
    secondHeader:  "| Sales Units and Forecast     |",
    fiscalYear: " FY3/2022 ",
}

// you need... cumulative quarters 1-4, ltd at end of last fy...
// and last fy numbers: quarters 1-4 check earnings logic for reference

const switchOriginal: Section[] = [
    {
        name: " Switch ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 331,
    },
    {
        name: " Switch ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 645,
    },
    {
        name: " Switch ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 1179,
    },
    {
        name: " Switch ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 1356,
    },
    {
        name: " Switch ",
        period: " Last FY Cumulative ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 6989,
    },
]

const switchOriginalLastFY: Section[] = [
    {
        name: " Switch ",
        period: " 1st Quarter ",
        cmlPeriod: " 1st Quarter ",
        units: "units",
        value: 305,
    },
    {
        name: " Switch ",
        period: " 2nd Quarter ",
        cmlPeriod: " First Half  ",
        units: "units",
        value: 836,
    },
    {
        name: " Switch ",
        period: " 3rd Quarter ",
        cmlPeriod: " 1st 3 Qtrs  ",
        units: "units",
        value: 1677,
    },
    {
        name: " Switch ",
        period: " 4th Quarter ",
        cmlPeriod: "Cml. ",
        units: "units",
        value: 2032,
    },
] 

const headerToMatch = 
`+------------------------------+
| Nintendo Switch   | FY3/2022 |
+------------------------------+
| Sales Units and Forecast     |
+------------------------------+`;

const switchToMatch = 
`+---------------------------------+
| Switch      |   Units |    YoY% |
+---------------------------------+
| 1st Quarter |   3.31M |  +8.52% |
+---------------------------------+
| 2nd Quarter |   3.14M | -40.87% |
+---------------------------------+
| 3rd Quarter |   5.34M |  -36.5% |
+---------------------------------+
| 4th Quarter |   1.77M | -50.14% |
+=================================+
| First Half  |   6.45M | -22.85% |
+---------------------------------+
| 1st 3 Qtrs  |  11.79M |  -29.7% |
+---------------------------------+
| FY3/22 Cml. |  13.56M | -33.27% |
+---------------------------------+
| Life-To-Date|  83.45M |
+-----------------------+`;

function quarterlyCalculation(quarters: Section[]) {
        
    const calc: Section[] = quarters.map((elem, index, array) => {
        return (index === 0 || quarters[index].period === " Last FY Cumulative ") // 1st Quarter or last FY number
                ? elem
                : {...elem, value: elem.value - array[index-1].value}
    })
    
    return calc
}

function yearOnYearCalculation(thisFY: Section[], lastFY: Section[]) {

        const calc: Section[] = thisFY.map((elem, index) => {

            return (lastFY[index].value < 0)
                    ? {...elem, units: "percentage", value: Number(
                        ((((elem.value / lastFY[index].value) -1)* -1) * 100).toFixed(2)
                        )
                      }
                    : (lastFY[index].value === 0)
                    ? {...elem, units: "NaN", value: 0}
                    :{...elem, units: "percentage", value: Number(
                        (((elem.value / lastFY[index].value) -1) * 100).toFixed(2)
                        )
                      }; // .toFixed(2) to round the number by two decimal points regardless of Number will output a string, whole thing needs to be wrapped in Number to change type back from string to number  
        })

       return calc
    }

const printHead = (header: Header) => 
`+${"-".repeat(30)}+
${header.switchHeader}${header.fiscalYear}|
+${"-".repeat(30)}+
${header.secondHeader}
+${"-".repeat(30)}+`;

test("test to match header...", () => {

    expect(printHead(header)).toMatch(headerToMatch);
})

test("test quarterly calculation...", () => {

    const quarterly = quarterlyCalculation(switchOriginal)

    // console.log(quarterly);
    
})

test("test year on year calculation for quarters...", () => {

    const quarterly = quarterlyCalculation(switchOriginal).filter((elem, index, array) => index !== array.length-1)

    const quarterlyLastFY = quarterlyCalculation(switchOriginalLastFY)

    const quarterlyYoY = yearOnYearCalculation(quarterly, quarterlyLastFY)
    
    console.log(quarterlyYoY);
    
})

test("test year on year calculation for cumulative...", () => {

    const switchOriginalFiltered = switchOriginal.filter((elem, index, array) => index !== array.length-1)

    const cumulativeYoY = yearOnYearCalculation(switchOriginalFiltered, switchOriginalLastFY).filter((elem, index) => index !== 0)

    console.log(cumulativeYoY);
    
})

test("print Section", () => {

    const currentQuarter = 4;

    const printSections = (sectionDifference: Section[], sectionDifferenceYoY: Section[], sectionCumulative: Section[], sectionCumulativeYoY: Section[], currentQuarter: number) => {

        const sectionHeader: string = "+" + "-".repeat(33) + "+\n|" + sectionDifference[0].name + " ".repeat(13 - sectionDifference[0].name.length) + "|   Units |    YoY% |\n+" + "-".repeat(33) + "+"

        const sectionDifferenceYoYFixed = sectionDifferenceYoY.filter((elem, index, array) => {
            return index < currentQuarter && array[index].units !== "NaN"
        })

        const sectionCumulativeYoYFixed = sectionCumulativeYoY.filter((elem, index, array) => {
                return currentQuarter >= 2 && index < currentQuarter -1 && array[index].units !== "NaN"
        })

        const difference = sectionDifference.filter((elem, index, array) => {
            return index < currentQuarter && array[index].value !== 0
        }).map((elem, index) => {
            

            let printSectionDifferenceYoY: string = (sectionDifferenceYoYFixed.length === 0)
                ? "NaN"
                : (sectionDifferenceYoYFixed[index].value > 0)
                ? `+${sectionDifferenceYoYFixed[index].value}% `
                : `${sectionDifferenceYoYFixed[index].value}% `

            let printSectionDifferenceYoYFixed: string = (printSectionDifferenceYoY === "NaN")
                ? printSectionDifferenceYoY
                : (printSectionDifferenceYoY.length >= 9)
                ? printSectionDifferenceYoY
                : " ".repeat(9 - printSectionDifferenceYoY.length) + printSectionDifferenceYoY

            let printSection: string = `${(elem.value / 100).toFixed(2)}M `;

            let printSectionFixed: string = (printSection.length >= 9)
                ? printSection
                : " ".repeat(9 - printSection.length) + printSection;

            let printLine: string = (index === currentQuarter -1)
                ? "\n+" + "=".repeat(33) + "+"
                : "\n+" + "-".repeat(33) + "+"

            return (printSectionDifferenceYoYFixed === "NaN")
                    ? "|" + elem.period + "|" + printSectionFixed + "|" + printLine
                    : "|" + elem.period + "|" + printSectionFixed + "|" + printSectionDifferenceYoYFixed + "|" + printLine
            
        })

        const cumulative = (currentQuarter >= 2)
            ? sectionCumulative.filter((elem, index, array) => 
                currentQuarter >= 2 && index < currentQuarter -1 && array[index].value !== 0
            ).map((elem, index) => {
                
                let printSectionCumulativeYoY: string = (sectionCumulativeYoYFixed.length === 0)
                    ? "NaN"
                    : (sectionCumulativeYoYFixed[index].value > 0)
                    ? `+${sectionCumulativeYoYFixed[index].value}% `
                    : `${sectionCumulativeYoYFixed[index].value}% `

                let printSectionCumulativeYoYFixed: string = (printSectionCumulativeYoY === "NaN")
                    ? printSectionCumulativeYoY
                    : (printSectionCumulativeYoY.length >= 9)
                    ? printSectionCumulativeYoY
                    : " ".repeat(9 - printSectionCumulativeYoY.length) + printSectionCumulativeYoY

                let printCumulative: string = `${(elem.value / 100).toFixed(2)}M `;

                let printCumulativeFixed: string = (printCumulative.length >= 9)
                    ? printCumulative
                    : " ".repeat(9 - printCumulative.length) + printCumulative;

                let shortFY: string = header.fiscalYear.split("").slice(0, 5).concat(header.fiscalYear.split("").slice(7)).reduce((prev, next) => prev + next) // FY3/XX
                
                let printLine: string = "\n+" + "-".repeat(33) + "+"

                let printPeriod: string = (currentQuarter === 4 && index === currentQuarter-2)
                    ? `${shortFY}${elem.cmlPeriod}`
                    : elem.cmlPeriod

                return (printSectionCumulativeYoYFixed === "NaN")
                    ?  "|" + printPeriod + "|" + printCumulativeFixed + "|" + printLine
                    : "|" + printPeriod + "|" + printCumulativeFixed + "|" + printSectionCumulativeYoYFixed + "|" + printLine
            })
            : []

        const ltd: string = (currentQuarter === 1) 
                ? `${((sectionDifference[currentQuarter-1].value + sectionCumulative[sectionCumulative.length-1].value) / 100 ).toFixed(2)}M `
                : `${((sectionCumulative[currentQuarter-2].value + sectionCumulative[sectionCumulative.length-1].value) / 100 ).toFixed(2)}M `

        const ltdFixed: string = (ltd.length >= 9)
                ? ltd
                : " ".repeat(9 - ltd.length) + ltd
        
        const ltdPrint: string = "| Life-To-Date|" + ltdFixed + "|\n+" + "-".repeat(23) + "+"

        const penultimateCheck = [sectionHeader, ...difference, ...cumulative, ltdPrint].filter((elem) => elem.length !== 0).reduce((prev, next) => prev + "\n" + next)

        return penultimateCheck // not done yet...
    }

    const quarterly = quarterlyCalculation(switchOriginal).filter((elem, index, array) => index !== array.length-1)

    const quarterlyLastFY = quarterlyCalculation(switchOriginalLastFY)

    const quarterlyYoY = yearOnYearCalculation(quarterly, quarterlyLastFY) 

    const switchOriginalFiltered = switchOriginal.filter((elem, index, array) => index !== array.length-1)

    const cumulativeYoY = yearOnYearCalculation(switchOriginalFiltered, switchOriginalLastFY).filter((elem, index) => index !== 0)

    const switchOriginalCml = switchOriginal.filter((elem, index, array) => index !== 0)

    const testRun = printSections(quarterly, quarterlyYoY, switchOriginalCml, cumulativeYoY, currentQuarter)

    // console.log(testRun);

    // console.log(switchOriginal);
    // console.log(switchOriginalFiltered);
    // console.log(cumulativeYoY);
    // console.log(switchOriginalCml);
    
    
    expect(testRun).toMatch(switchToMatch)
})