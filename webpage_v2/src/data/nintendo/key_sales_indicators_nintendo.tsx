import {
    Header,
    Footer,
    printHead,
    printBody,
    KPDIndicators,
    quarterlyCalculation,
    yearOnYearCalculation,
} from "../../utils/kpi_logic";

import keySalesIndicators2023 from "./Key_Sales_Indicators/ksi_fy3_2023.json";
import keySalesIndicators2022 from "./Key_Sales_Indicators/ksi_fy3_2022.json";
import keySalesIndicators2021 from "./Key_Sales_Indicators/ksi_fy3_2021.json";
import keySalesIndicators2020 from "./Key_Sales_Indicators/ksi_fy3_2020.json";
import keySalesIndicators2019 from "./Key_Sales_Indicators/ksi_fy3_2019.json";
import keySalesIndicators2018 from "./Key_Sales_Indicators/ksi_fy3_2018.json";
import keySalesIndicators2017 from "./Key_Sales_Indicators/ksi_fy3_2017.json";

const collection = [
    keySalesIndicators2023,
    keySalesIndicators2022,
    keySalesIndicators2021,
    keySalesIndicators2020,
    keySalesIndicators2019,
    keySalesIndicators2018,
    keySalesIndicators2017,
] as const;

// need to...
// take total sales x proportion of overseas sales % = total overseas sales /done
// take total dedicated video game platform sales x proportion of hardware sales % = total hardware sales /done 
// take total dedicated video game platform sales x (1 - proportion of hardware sales %) = total software sales /done
// take total software sales x proportion of first-party software sales % = total first-party software sales 
// take digital sales and provide YoY data and everything else that uses currency
// take proportion of digital sales % x total software sales = total digital sales 
// take proportion of downloadable versions of packaged software sales % x digital sales = sales of downloadable versions of packaged software

const keySalesQuarterMake = (indicators: KPDIndicators[][], consolidatedSales: KPDIndicators[][]): KPDIndicators[][] => {

    let softwareSalesMake: KPDIndicators[][] = indicators.filter(elem => elem[0].name === "Proportion of Hardware Sales").map(elem => {
        return elem.map((value, indexValue) => {
            return {
                ...value,
                name: "Proportion of Software Sales",
                value: Number(((1 - (value.value / 100)) * consolidatedSales[1][indexValue].value).toFixed(2)) // total software sales, 
            }
        })
    })

    let digitalSalesMake: KPDIndicators[][] = indicators.filter(elem => elem[0].name === "Digital Sales");


    let indicatorsMake: KPDIndicators[][] = indicators.map((elem, index) => {
        return elem.map((value, indexValue) => {
            return (value.name === "Proportion of Overseas Sales")
                ? {
                    ...value,
                    value: Number(((value.value / 100) * consolidatedSales[0][indexValue].value).toFixed(2)) // total overseas sales 
                  }
                : (value.name === "Proportion of Hardware Sales")
                ? {
                    ...value,
                    value: Number(((value.value / 100) * consolidatedSales[1][indexValue].value).toFixed(2)) // total hardware sales
                  }
                : (value.name === "Proportion of First Party Software Sales")
                ? {
                    ...value,
                    value: Number(((value.value / 100) * softwareSalesMake[0][indexValue].value).toFixed(2)) // total first-party software sales 
                  }
                : (value.name === "Proportion of Digital Sales")
                ? {
                    ...value,
                    value: Number(((value.value / 100) * softwareSalesMake[0][indexValue].value).toFixed(2)) // total digital sales 
                }
                : (value.name === "Proportion of Download version of Packaged Software")
                ? {
                    ...value,
                    value: Number(((value.value / 100) * digitalSalesMake[0][indexValue].value).toFixed(2)) // total digital sales 
                }
                : {
                    ...value
                }
        })
    });


    return indicatorsMake
};

const consolidatedSalesQuartersMake = (obj: undefined | {
    name: string,
    Q1Value: number,
    Q2Value: number,
    Q3Value: number,
    Q4Value: number 
}): KPDIndicators[] => {
    // values are cumulative and need to go through quarterly calc
    let cmlValues: KPDIndicators[] = [
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "quarterly",
            units: (obj === undefined) ? "NaN" : "currency",
            quarter: " 1st Quarter       ",
            value: (!obj) ? 0 : obj.Q1Value,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "quarterly",
            units: (obj === undefined) ? "NaN" : "currency",
            quarter: " 2nd Quarter       ",
            value: (!obj) ? 0 : obj.Q2Value,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "quarterly",
            units: (obj === undefined) ? "NaN" : "currency",
            quarter: " 3rd Quarter       ",
            value: (!obj) ? 0 : obj.Q3Value,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "quarterly",
            units: (obj === undefined) ? "NaN" : "currency",
            quarter: " 4th Quarter       ",
            value: (!obj) ? 0 : obj.Q4Value,
        },
    ];
    // quarterly calculation taken care of
    let quarterValues = quarterlyCalculation(cmlValues);

    return quarterValues
};

const consolidatedSalesCmlMake = (obj: undefined | {
    name: string,
    Q1Value: number,
    Q2Value: number,
    Q3Value: number,
    Q4Value: number 
}, cmlName: string): KPDIndicators[] => {
    // values are cumulative and need to go through quarterly calc
    let cmlValues: KPDIndicators[] = [
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "cumulative",
            units: (obj === undefined) ? "NaN" : "currency",
            quarter: " 1st Half          ",
            value: (!obj) ? 0 : obj.Q2Value,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "cumulative",
            units: (obj === undefined) ? "NaN" : "currency",
            quarter: " 1st Three Quarters",
            value: (!obj) ? 0 : obj.Q3Value,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "cumulative",
            units: (obj === undefined) ? "NaN" : "currency",
            quarter: cmlName,
            value: (!obj) ? 0 : obj.Q4Value,
        },
    ];
    // quarterly calculation taken care of
    let quarterValues = quarterlyCalculation(cmlValues);

    return quarterValues
};

const quarterValuesMake = (obj: undefined | {
    name: string,
    units: string,
    Q1Value: number,
    Q2Value: number,
    Q3Value: number,
    Q4Value: number,
    Q2CmlValue: number,
    Q3CmlValue: number,
    Q4CmlValue: number,
}): KPDIndicators[] => {


    let quarterValues: KPDIndicators[] = [
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "quarterly",
            units: (obj === undefined || obj.units === "percentage") ? "percentage" : "currency",
            quarter: " 1st Quarter       ",
            value: (!obj) ? 0 : obj.Q1Value,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "quarterly",
            units: (obj === undefined || obj.units === "percentage") ? "percentage" : "currency",
            quarter: " 2nd Quarter       ",
            value: (!obj) ? 0 : obj.Q2Value,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "quarterly",
            units: (obj === undefined || obj.units === "percentage") ? "percentage" : "currency",
            quarter: " 3rd Quarter       ",
            value: (!obj) ? 0 : obj.Q3Value,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "quarterly",
            units: (obj === undefined || obj.units === "percentage") ? "percentage" : "currency",
            quarter: " 4th Quarter       ",
            value: (!obj) ? 0 : obj.Q4Value,
        },
    ]

    return quarterValues
};

const cmlValuesMake = (obj: undefined | {
    name: string,
    units: string,
    Q1Value: number,
    Q2Value: number,
    Q3Value: number,
    Q4Value: number,
    Q2CmlValue: number,
    Q3CmlValue: number,
    Q4CmlValue: number,
}, cmlName: string): KPDIndicators[] => {

    let cmlValues: KPDIndicators[] = [
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "cumulative",
            units: (obj === undefined || obj.units === "percentage") ? "percentage" : "currency",
            quarter: " 1st Half          ",
            value: (!obj) ? 0 : obj.Q2CmlValue,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "cumulative",
            units: (obj === undefined || obj.units === "percentage") ? "percentage" : "currency",
            quarter: " 1st Three Quarters",
            value: (!obj) ? 0 : obj.Q3CmlValue,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "cumulative",
            units: (obj === undefined || obj.units === "percentage") ? "percentage" : "currency",
            quarter: cmlName,
            value: (!obj) ? 0 : obj.Q4CmlValue,
        },
    ];

    return cmlValues
};

export const keySalesIndicatorsList: string[] = collection.map((elem, index, array) => {

    let currentQuarter: number = elem.currentQuarter;

    let cmlName: string = elem.fiscalYear.slice(1,6) + elem.fiscalYear.slice(-4,-1) + "Cumulative ";

    let headerOne: Header = {
        companyName: " Nintendo Co., Ltd.",
        section: "| Proportion of overseas sales |",
        fiscalYear: elem.fiscalYear,
        title: "| Key Sales Indicators         |",
    };

    let headers: Header[] = [
        {
            ...headerOne,
            section: "| Proportion of overseas sales |",
        },
        {
            ...headerOne,
            section: "| Proportion of hardware sales |"
        },
        {
            ...headerOne,
            section: "| Proportion of first party    |\n| software sales               |"
        },
        {
            ...headerOne,
            section: "| Digital Sales                |"
        },
        {
            ...headerOne,
            section: "| Proportion of Digital Sales  |"
        },
        {
            ...headerOne,
            section: "| Proportion of downloadable   |\n| versions of Packaged         |\n| Software Sales               |"
        }
    ];

    const footers: Footer[] = [
        {
            section: "|(※ Proportion of overseas (outside of Japan)\n| sales to total sales)"
        },
        {
            section: "|(※ Proportion of hardware\n|(including accessories) sales to total\n| dedicated video game platform sales)"
        },
        {
            section: "|(※ Proportion of first-party software sales\n| to total dedicated video game software sales)" 
        },
        {
            section: "|(\"※ Digital sales include a) downloadable\n| versions of packaged software,\n|b) download-only software,\n|c) add-on content and\n|d) Nintendo Switch Online, etc.\n|＊\"Downloadable versions of packaged software\"\n| indicates the downloadable version of\n| software that is offered both physically\n| and digitally.\")"
        },
        {
            section: "|(※ Proportion of digital sales to total\n| dedicated video game software sales )" 
        },
        {
            section: "|(※ Proportion of downloadable versions of\n| packaged software sales to total digital\n| sales as indicated above: a/(a+b+c+d) )" 
        }
    ];

    let qtrValues: KPDIndicators[][] = elem.kpi.map(elem => quarterValuesMake(elem))

    let cmlValues: KPDIndicators[][] = elem.kpi.map(elem => cmlValuesMake(elem, cmlName));

    let qtrValuesLastFY: KPDIndicators[][] = (!array[index+1]) ? elem.kpi.map(elem => quarterValuesMake(undefined)) : array[index+1].kpi.map(elem => quarterValuesMake(elem));

    let cmlValuesLastFY: KPDIndicators[][] = (!array[index+1]) ? elem.kpi.map(elem => cmlValuesMake(undefined, cmlName)) : array[index+1].kpi.map(elem => cmlValuesMake(elem, cmlName));

    let qtrSalesValuesThisFY: KPDIndicators[][] = elem.consolidatedSales.map(elem => consolidatedSalesQuartersMake(elem));

    let qtrSalesValuesLastFY: KPDIndicators[][] = (!array[index+1]) ? elem.consolidatedSales.map(value => consolidatedSalesQuartersMake(undefined)) 
    : array[index+1].consolidatedSales.map(value => consolidatedSalesQuartersMake(value)); 

    let cmlSalesValuesThisFY: KPDIndicators[][] = elem.consolidatedSales.map(elem => consolidatedSalesCmlMake(elem, cmlName))

    let cmlSalesValuesLastFY: KPDIndicators[][] = (!array[index+1]) ? elem.consolidatedSales.map(value => consolidatedSalesCmlMake(undefined, cmlName)) 
    : array[index+1].consolidatedSales.map(value => consolidatedSalesCmlMake(value, cmlName)); 

    // thisFY values and lastFY values are retrieved.
    // will need to make new maker that multiplies the values

    let filterKeySalesIndicatorsQuarters = qtrValues.filter((elem, index) => {
        return elem[0].units !== "currency"  
        // return elem.filter(value => value.units !== "currency")
    });





    let inputArrays = Array.from({length: qtrValues.length}, (v, i) => {

        return {
            header: headers[i],
            footer: footers[i],
            quarterValues: qtrValues[i],
            cumulativeValues: cmlValues[i],
            currentQuarter: currentQuarter,
        }
    });

    let endLine: string = "+" + "-".repeat(30) + "+" + "\n" + "###"; 

    let printOne = printHead(headerOne);

    let printRest = inputArrays.map(elem => {

        return printBody(elem.header, elem.footer, elem.quarterValues, elem.cumulativeValues, elem.currentQuarter)
    }).concat(endLine);

    let printAll = [printOne].concat(printRest);  

    return printAll.reduce((prev, next) => prev + "\n" + next);

});

export const keySalesIndicatorsGraphList = collection.map((elem, index, array) => {

    let cmlName: string = elem.fiscalYear.slice(1,6) + elem.fiscalYear.slice(-4,-1) + "Cumulative ";

    let qtrValuesThisFY: KPDIndicators[][] = elem.kpi.map(elem => quarterValuesMake(elem));

    let cmlValuesThisFY: KPDIndicators[][] = elem.kpi.map(elem => cmlValuesMake(elem, cmlName));

    let qtrValuesLastFY: KPDIndicators[][] = (!array[index+1]) ? elem.kpi.map(elem => quarterValuesMake(undefined)) : array[index+1].kpi.map(elem => quarterValuesMake(elem));

    let cmlValuesLastFY: KPDIndicators[][] = (!array[index+1]) ? elem.kpi.map(elem => cmlValuesMake(undefined, cmlName)) : array[index+1].kpi.map(elem => cmlValuesMake(elem, cmlName));

    let thisFY: string = elem.fiscalYear.slice(2, -2);
    let lastFY: string = thisFY.slice(0, 4) + (Number(thisFY.slice(-4)) - 1).toString();

    let marchThisFY: string = "March " + thisFY.slice(4);
    let marchLastFY: string = "March " + lastFY.slice(4);


    const graphMake = {
        thisFY: thisFY,
        lastFY: lastFY,
        marchThisFY: marchThisFY,
        marchLastFY: marchLastFY,
        quarterValuesThisFY: qtrValuesThisFY,
        quarterValuesLastFY: qtrValuesLastFY,
        cumulativeValuesThisFY: cmlValuesThisFY,
        cumulativeValuesLastFY: cmlValuesLastFY,
    };

    return graphMake

})
