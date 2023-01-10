import { liner, border, spacer, printTextBlock } from "./table_design_logic"
export type KPDIndicators = {
    name: string,
    category: "quarterly" | "cumulative", 
    units: "percentage" | "currency" | "NaN",
    quarter: string,
    value: number,
    miscellaneous?: string,
}

export type Header = {
    companyName: string,
    section: "| Proportion of overseas sales                     |\n+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n|              Proportion |       Sales |    YoY%  |" | 
    "| Proportion of hardware sales                     |\n+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n|              Proportion |       Sales |    YoY%  |" | 
    "| Proportion of first party software sales         |\n+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n|              Proportion |       Sales |    YoY%  |" | 
    "| Digital Sales                                    |\n+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n|                   Sales |       Sales |    YoY%  |" | 
    "| Proportion of Digital Sales                      |\n+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n|              Proportion |       Sales |    YoY%  |" | 
    "| Proportion of downloadable versions of Packaged  |\n| Software Sales                                   |\n+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n|              Proportion |       Sales |    YoY%  |" | 
    "| Proportion of software sales                     |\n+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n|              Proportion |       Sales |    YoY%  |" | 
    "| Proportion of physical software sales            |\n+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n|              Proportion |       Sales |    YoY%  |",
    fiscalYear: string,
    title: string,
}

export type Footer = {
   section: "(* Proportion of overseas (outside of Japan) sales to total sales)" | "(* Proportion of hardware (including accessories) sales to total dedicated video game platform sales)" | "(* Proportion of first-party software sales to total dedicated video game software sales)" | "(\"* Digital sales include a) downloadable versions of packaged software, b) download-only software, c) add-on content and d) Nintendo Switch Online, etc. *\"Downloadable versions of packaged software\" indicates the downloadable version of software that is offered both physically and digitally.\")" | "(* Proportion of digital sales to total dedicated video game software sales)" | "(* Proportion of downloadable versions of packaged software sales to total digital sales as indicated above: a/(a+b+c+d) )" | "(* Proportion of software (including digital sales) sales to total dedicated video game platform sales)" |  "(* Proportion of physical software sales to total dedicated video game platform software sales)", 
};

export function quarterlyCalculation(quarters: KPDIndicators[]) {
        
    const calc: KPDIndicators[] = quarters.map((elem, index, array) => {
        return (index === 0) // 1st Quarter 
                ? elem
                : {...elem, value: elem.value - array[index-1].value}
    })
    
    return calc
}

export function yearOnYearCalculation(thisFY: KPDIndicators[], lastFY: KPDIndicators[]) {

        const calc: KPDIndicators[] = thisFY.map((elem, index) => {

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
                      };
        })

       return calc
    }

const printNewSections = (proportionDifference: KPDIndicators[], sectionDifference: KPDIndicators[], yearOnYearValues: KPDIndicators[], currentQuarter: number): string => {

    let yoyPrint = yearOnYearValues.filter((elem, index) => { 
            return (elem.category === "quarterly")
                ? index < currentQuarter
                : currentQuarter >= 2 && index < currentQuarter -1         
    }).map((elem, index) => {

        if (elem.category === "quarterly") {
            
            let printSection: string = (elem.units === "NaN")
                                        ? "N/A"
                                        : `${elem.value}%`; 

            let printSectionFixed: string = spacer(printSection,9,"right") 

            let objectReturn: {period: string, value: string} = {
                period: elem.quarter,
                value: printSectionFixed,
            }

            return objectReturn
        } else {

            let printSectionCml: string = (elem.units === "NaN")
                                        ? "N/A"
                                        : `${elem.value}%`; 
    
            let printSectionCmlFixed: string = spacer(printSectionCml,9,"right")

            let objectReturn = {
                period: elem.quarter,
                value: printSectionCmlFixed
            }

            return objectReturn
        }
    })

    let salesPrint = sectionDifference.filter((elem, index) => { 
            return (elem.category === "quarterly")
                ? index < currentQuarter
                : currentQuarter >= 2 && index < currentQuarter -1         
    }).map((elem, index) => {

        if (elem.category === "quarterly") {
            // need to change any billions to millions
            
            let printSection: string = (elem.units === "currency") 
                ? `¥${elem.value.toLocaleString("en")}M`
                : `${elem.value}%`; 

            let printSectionFixed: string = spacer(printSection,12,"right");

            let objectReturn: {period: string, value: string} = {
                period: elem.quarter,
                value: printSectionFixed,
            }

            return objectReturn
        } else {

            let printSectionCml: string = (elem.units === "currency") 
                ? `¥${elem.value.toLocaleString("en")}M`
                : `${elem.value}%`; 
    
            let printSectionCmlFixed: string = spacer(printSectionCml,12,"right"); 

            let objectReturn = {
                period: elem.quarter,
                value: printSectionCmlFixed
            }

            return objectReturn
        }
    })

    let proportionPrint = proportionDifference.filter((elem, index) => { 
            return (elem.category === "quarterly")
                ? index < currentQuarter
                : currentQuarter >= 2 && index < currentQuarter -1         
    }).map((elem, index) => {

        if (elem.category === "quarterly") {
            
            let printSection: string = (elem.units === "currency") 
                ? `¥${elem.value}B`
                : `${elem.value}%`; 

            let printSectionFixed: string = spacer(printSection,8,"right");
            
            let objectReturn: {period: string, value: string} = {
                period: elem.quarter,
                value: printSectionFixed
            }

            return objectReturn
        } else {

            let printSectionCml: string = (elem.units === "currency") 
                ? `¥${elem.value}B`
                : `${elem.value}%`; 
    
            let printSectionCmlFixed: string = spacer(printSectionCml,8,"right");             

            let objectReturn: {period: string, value: string} = {
                period: elem.quarter,
                value: printSectionCmlFixed
            }

            return objectReturn
        }
    })

    let printAll = Array.from({length: salesPrint.length}, (v, i) => {

        let text = border([
            spacer(salesPrint[i].period,14,"left"),
            salesPrint[i].value,
            yoyPrint[i].value,
        ],(i === salesPrint.length-1)? undefined : true)

        return (!proportionPrint[i]) 
            ? text
            : border([
                spacer(salesPrint[i].period,14,"left"),
                proportionPrint[i].value,
                salesPrint[i].value,
                yoyPrint[i].value,
            ],(i === salesPrint.length-1)? undefined : true)
    });

    let printAllReduce = printAll.reduce((prev, next, index, array) => {

        if (sectionDifference[index].category === "quarterly" ) {
            
            return (array[index] === array[currentQuarter -1])
                      ? prev + next
                      : prev + next 
        } else {

            return (array[index] === array[currentQuarter -2])
                    ? prev + next 
                    : prev + next 
        }
    })
    
    return printAllReduce

};

export const printNewBody = (header: Header, footer: Footer, quarterProportion: KPDIndicators[], cumulativeProportion: KPDIndicators[], quarterSales: KPDIndicators[], cumulativeSales: KPDIndicators[], quarterYoY: KPDIndicators[], cumulativeYoY: KPDIndicators[], currentQuarter: number) => {

    let text = liner(header.section,"−","both",true,50) + liner(printNewSections(quarterProportion, quarterSales, quarterYoY, currentQuarter),"=","bottom",true,50)

    let quarterOne = (currentQuarter > 1)
        ? printNewSections(cumulativeProportion, cumulativeSales, cumulativeYoY, currentQuarter)
        : "=".repeat(50)+"+";

    return text + quarterOne + "\n" + liner(printTextBlock(footer.section,50),"−","both",true,50) 
};
