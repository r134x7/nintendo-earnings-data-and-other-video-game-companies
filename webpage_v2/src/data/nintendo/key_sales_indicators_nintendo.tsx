import {
    Header,
    Footer,
    KPDIndicators,
    quarterlyCalculation,
    yearOnYearCalculation,
    printNewBody,
} from "../../utils/kpi_logic";

import { headerPrint } from "../../utils/table_design_logic";

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

const softwareProportionMake = (proportions:  KPDIndicators[][], cmlName: string) => {

    let softwareProportionCheckValues: KPDIndicators[][] = proportions.filter(elem => elem[0].name === "Proportion of Hardware Sales");

    let softwareProportionMake: KPDIndicators[][] = (softwareProportionCheckValues.length === 0 && proportions[0][0].category === "quarterly")
        ? [quarterValuesMake(undefined)] 
        : (softwareProportionCheckValues.length === 0 && proportions[0][0].category === "cumulative")
        ? [cmlValuesMake(undefined, cmlName)]
        : softwareProportionCheckValues.map(elem => {
            return elem.map((value, indexValue) => {
                return {
                    ...value,
                    name: "Proportion of Software Sales",
                    units: "percentage",
                    value: Number((100 - value.value).toFixed(1)) 
                }
            })
        })
    
    return softwareProportionMake
}


const physicalSoftwareProportionMake = (proportions:  KPDIndicators[][], cmlName: string) => { 

   let physicalSoftwareProportionCheck: KPDIndicators[][] = proportions.filter(elem => elem[0].name === "Proportion of Digital Sales");

    let physicalSoftwareSalesMake: KPDIndicators[][] = 
    (physicalSoftwareProportionCheck.length === 0 && proportions[0][0].category === "quarterly")
        ? [quarterValuesMake(undefined)] 
        : (physicalSoftwareProportionCheck.length === 0 && proportions[0][0].category === "cumulative")
        ? [cmlValuesMake(undefined, cmlName)]
        : physicalSoftwareProportionCheck.map(elem => {
        return elem.map((value, indexValue) => {
            return {
                ...value,
                name: "Proportion of Physical Software Sales",
                units: "percentage",
                value: Number((100 - value.value).toFixed(1)) 
            }
        })
    })

    return physicalSoftwareSalesMake 
}

const keySalesMake = (indicators: KPDIndicators[][], consolidatedSales: KPDIndicators[][], cmlName: string): KPDIndicators[][] => {
    
    let softwareSalesCheck: KPDIndicators[][] = indicators.filter(elem => elem[0].name === "Proportion of Hardware Sales");

    let softwareSalesMake: KPDIndicators[][] = (softwareSalesCheck.length === 0 && indicators[0][0].category === "quarterly")
        ? [quarterValuesMake(undefined)] 
        : (softwareSalesCheck.length === 0 && indicators[0][0].category === "cumulative")
        ? [cmlValuesMake(undefined, cmlName)]
        : softwareSalesCheck.map(elem => {
            return elem.map((value, indexValue) => {
                return {
                    ...value,
                    name: "Proportion of Software Sales",
                    units: "currency",
                    value: Number(((1 - (value.value / 100)) * consolidatedSales[1][indexValue].value).toFixed(0)) // total software sales, 
                }
            })
        })

    let digitalSalesMake: KPDIndicators[][] = indicators.filter(elem => elem[0].name === "Digital Sales").map(elem => elem.map(value => {
        return {
            ...value,
            value: value.value * 1000
        }
    }));

   let physicalSoftwareSalesCheck: KPDIndicators[][] = indicators.filter(elem => elem[0].name === "Proportion of Digital Sales")

    let physicalSoftwareSalesMake: KPDIndicators[][] = 
    (physicalSoftwareSalesCheck.length === 0 && indicators[0][0].category === "quarterly")
        ? [quarterValuesMake(undefined)] 
        : (physicalSoftwareSalesCheck.length === 0 && indicators[0][0].category === "cumulative")
        ? [cmlValuesMake(undefined, cmlName)]
        : physicalSoftwareSalesCheck.map(elem => {
        return elem.map((value, indexValue) => {
            return {
                ...value,
                name: "Proportion of Physical Software Sales",
                units: "currency",
                value: Number(((1 - (value.value / 100)) * softwareSalesMake[0][indexValue].value).toFixed(0)) 
            }
        })
    });
 
    let indicatorsMake: KPDIndicators[][] = indicators.map((elem, index) => {
        return elem.map((value, indexValue) => {

            return (value.name === "Proportion of Overseas Sales")
                ? {
                    ...value,
                    units: "currency",
                    value: Number(((value.value / 100) * consolidatedSales[0][indexValue].value).toFixed(0)) // total overseas sales 
                  }
                : (value.name === "Proportion of Hardware Sales")
                ? {
                    ...value,
                    units: "currency",
                    value: Number(((value.value / 100) * consolidatedSales[1][indexValue].value).toFixed(0)) // total hardware sales
                  }
                : (value.name === "Proportion of First Party Software Sales")
                ? {
                    ...value,
                    units: "currency",
                    value: Number(((value.value / 100) * softwareSalesMake[0][indexValue].value).toFixed(0)) // total first-party software sales 
                  }
                : (value.name === "Proportion of Digital Sales")
                ? {
                    ...value,
                    units: "currency",
                    value: Number(((value.value / 100) * softwareSalesMake[0][indexValue].value).toFixed(0)) // total digital sales 
                }
                : (value.name === "Proportion of Download version of Packaged Software")
                ? {
                    ...value,
                    units: "currency",
                    value: Number(((value.value / 100) * digitalSalesMake[0][indexValue].value).toFixed(0)) 
                }
                : (value.name === "Digital Sales")
                ? {
                    ...value,
                    units: "currency",
                    value: Number(digitalSalesMake[0][indexValue].value.toFixed(0)) 
                }
                : {
                    ...value
                } 
        })
    });


    return indicatorsMake.concat(softwareSalesMake, physicalSoftwareSalesMake)
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
            quarter: "1st Quarter",
            value: (!obj) ? 0 : obj.Q1Value,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "quarterly",
            units: (obj === undefined) ? "NaN" : "currency",
            quarter: "2nd Quarter",
            value: (!obj) ? 0 : obj.Q2Value,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "quarterly",
            units: (obj === undefined) ? "NaN" : "currency",
            quarter: "3rd Quarter",
            value: (!obj) ? 0 : obj.Q3Value,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "quarterly",
            units: (obj === undefined) ? "NaN" : "currency",
            quarter: "4th Quarter",
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
            quarter: "1st Half",
            value: (!obj) ? 0 : obj.Q2Value,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "cumulative",
            units: (obj === undefined) ? "NaN" : "currency",
            quarter: "1st 3/4",
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

    return cmlValues
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
            quarter: "1st Quarter",
            value: (!obj) ? 0 : obj.Q1Value,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "quarterly",
            units: (obj === undefined || obj.units === "percentage") ? "percentage" : "currency",
            quarter: "2nd Quarter",
            value: (!obj) ? 0 : obj.Q2Value,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "quarterly",
            units: (obj === undefined || obj.units === "percentage") ? "percentage" : "currency",
            quarter: "3rd Quarter",
            value: (!obj) ? 0 : obj.Q3Value,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "quarterly",
            units: (obj === undefined || obj.units === "percentage") ? "percentage" : "currency",
            quarter: "4th Quarter",
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
            quarter: "1st Half",
            value: (!obj) ? 0 : obj.Q2CmlValue,
        },
        {
            name: (!obj) ? "N/A" : obj.name,
            category: "cumulative",
            units: (obj === undefined || obj.units === "percentage") ? "percentage" : "currency",
            quarter: "1st 3/4",
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

    let cmlName: string = elem.fiscalYear + " Cml.";

    let headerOne: Header = {
        companyName: "Nintendo Co., Ltd.",
        section: "| Proportion of overseas sales                     |\n+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n|              Proportion |       Sales |    YoY%  |",
        fiscalYear: elem.fiscalYear,
        title: "Key Sales Indicators",
    };
  
    let headers: Header[] = [
        {
            ...headerOne,
            section: "| Proportion of overseas sales                     |\n+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n|              Proportion |       Sales |    YoY%  |"
        },
        {
            ...headerOne,
            section: "| Proportion of hardware sales                     |\n+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n|              Proportion |       Sales |    YoY%  |"
        },
        {
            ...headerOne,
            section: "| Proportion of first party software sales         |\n+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n|              Proportion |       Sales |    YoY%  |"
        },
        {
            ...headerOne,
            section: "| Digital Sales                                    |\n+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n|                   Sales |       Sales |    YoY%  |"
        },
        {
            ...headerOne,
            section: "| Proportion of Digital Sales                      |\n+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n|              Proportion |       Sales |    YoY%  |"
        },
        {
            ...headerOne,
            section: "| Proportion of downloadable versions of Packaged  |\n| Software Sales                                   |\n+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n|              Proportion |       Sales |    YoY%  |"
        },
        {
            ...headerOne,
            section: "| Proportion of software sales                     |\n+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n|              Proportion |       Sales |    YoY%  |"
        },
        {
            ...headerOne,
            section: "| Proportion of physical software sales            |\n+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+\n|              Proportion |       Sales |    YoY%  |"
        },
    ].filter((value, indexValue, valueArray) => {
        return (elem.fiscalYear === "FY3/2018" || elem.fiscalYear === "FY3/2017")
            ? valueArray[indexValue] !== valueArray[5] 
            : value
    }) as Header[];

    const footers: Footer[] = [
        {
            section: "(* Proportion of overseas (outside of Japan) sales to total sales)"
        },
        {
            section: "(* Proportion of hardware (including accessories) sales to total dedicated video game platform sales)"
        },
        {
            section: "(* Proportion of first-party software sales to total dedicated video game software sales)" 
        },
        {
            section: "(\"* Digital sales include a) downloadable versions of packaged software, b) download-only software, c) add-on content and d) Nintendo Switch Online, etc. *\"Downloadable versions of packaged software\" indicates the downloadable version of software that is offered both physically and digitally.\")"
        },
        {
            section: "(* Proportion of digital sales to total dedicated video game software sales)" 
        },
        {
            section: "(* Proportion of downloadable versions of packaged software sales to total digital sales as indicated above: a/(a+b+c+d) )" 
        },
        {
            section: "(* Proportion of software (including digital sales) sales to total dedicated video game platform sales)"
        },
        {
            section: "(* Proportion of physical software sales to total dedicated video game platform software sales)",
        }
    ].filter((value, indexValue, valueArray) => {
        return (elem.fiscalYear === "FY3/2018" || elem.fiscalYear === "FY3/2017")
            ? valueArray[indexValue] !== valueArray[5] 
            : value
    }) as Footer[];

    let qtrValuesThisFY: KPDIndicators[][] = elem.kpi.map(elem => quarterValuesMake(elem))

    let qtrValuesThisFYPlus: KPDIndicators[][] = qtrValuesThisFY.concat(softwareProportionMake(qtrValuesThisFY, cmlName), (physicalSoftwareProportionMake(qtrValuesThisFY, cmlName)));

    let qtrValuesLastFY: KPDIndicators[][] = (!array[index+1]) 
        ? elem.kpi.map(value => quarterValuesMake(undefined)) 
        : (array[index+1].kpi.length !== elem.kpi.length)
        ? elem.kpi.map((value, indexValue) => {
            
            let nameSearchThisFY: string = value.name
            let nameSearchLastFY = array[index+1].kpi[indexValue]? array[index+1].kpi[indexValue].name : undefined;
            
            return (nameSearchThisFY === nameSearchLastFY)
                ? quarterValuesMake(array[index+1].kpi[indexValue])
                : quarterValuesMake(undefined)

            })
        : array[index+1].kpi.map(value => quarterValuesMake(value))

    // assuming this is not used because it's the percentages...
    // let qtrValuesLastFYPlus: KPDIndicators[][] = qtrValuesLastFY.concat(softwareProportionMake(qtrValuesLastFY, cmlName), (physicalSoftwareProportionMake(qtrValuesLastFY, cmlName)));

    let cmlValuesThisFY: KPDIndicators[][] = elem.kpi.map(elem => cmlValuesMake(elem, cmlName));
    
    let cmlValuesThisFYPlus: KPDIndicators[][] = cmlValuesThisFY.concat(softwareProportionMake(cmlValuesThisFY, cmlName), (physicalSoftwareProportionMake(cmlValuesThisFY, cmlName)));

    let cmlValuesLastFY: KPDIndicators[][] = (!array[index+1]) 
        ? elem.kpi.map(value => cmlValuesMake(undefined, cmlName)) 
        : (array[index+1].kpi.length !== elem.kpi.length)
        ? elem.kpi.map((value, indexValue) => {
            
            let nameSearchThisFY = value.name
            let nameSearchLastFY = array[index+1].kpi[indexValue]? array[index+1].kpi[indexValue].name : undefined;

            return (nameSearchThisFY === nameSearchLastFY)
                ? cmlValuesMake(array[index+1].kpi[indexValue], cmlName)
                : cmlValuesMake(undefined, cmlName)

            })
        : array[index+1].kpi.map(value => cmlValuesMake(value, cmlName))

    // assuming this is not used because it's the percentages...
    // let cmlValuesLastFYPlus: KPDIndicators[][] = cmlValuesLastFY.concat(softwareProportionMake(cmlValuesLastFY, cmlName), (physicalSoftwareProportionMake(cmlValuesLastFY, cmlName)));

    let qtrSalesValuesThisFY: KPDIndicators[][] = elem.consolidatedSales.map(elem => consolidatedSalesQuartersMake(elem));

    let qtrSalesValuesLastFY: KPDIndicators[][] = (!array[index+1]) 
        ? elem.consolidatedSales.map(value => consolidatedSalesQuartersMake(undefined)) 
        : (array[index+1].consolidatedSales.length !== elem.consolidatedSales.length)
        ? elem.consolidatedSales.map((value, indexValue) => {
            
            let nameSearchThisFY: string = value.name;
            let nameSearchLastFY = array[index+1].consolidatedSales[indexValue]? array[index+1].consolidatedSales[indexValue].name : undefined;

            return (nameSearchThisFY === nameSearchLastFY)
                ? consolidatedSalesQuartersMake(array[index+1].consolidatedSales[indexValue])
                : consolidatedSalesQuartersMake(undefined)

            })
        : array[index+1].consolidatedSales.map(value => consolidatedSalesQuartersMake(value))

    let cmlSalesValuesThisFY: KPDIndicators[][] = elem.consolidatedSales.map(elem => consolidatedSalesCmlMake(elem, cmlName))

    let cmlSalesValuesLastFY: KPDIndicators[][] = (!array[index+1]) 
        ? elem.consolidatedSales.map(value => consolidatedSalesCmlMake(undefined, cmlName)) 
        : (array[index+1].consolidatedSales.length !== elem.consolidatedSales.length)
        ? elem.consolidatedSales.map((value, indexValue) => {
            
            let nameSearchThisFY = value.name
            let nameSearchLastFY = array[index+1].consolidatedSales[indexValue]? array[index+1].consolidatedSales[indexValue].name : undefined;

            return (nameSearchThisFY === nameSearchLastFY)
                ? consolidatedSalesCmlMake(array[index+1].consolidatedSales[indexValue], cmlName)
                : consolidatedSalesCmlMake(undefined, cmlName)

            })
        : array[index+1].consolidatedSales.map(value => consolidatedSalesCmlMake(value, cmlName))

    // thisFY values and lastFY values are retrieved.
    // will need to make new maker that multiplies the values

    let qtrKeySalesValuesThisFY: KPDIndicators[][] = keySalesMake(qtrValuesThisFY, qtrSalesValuesThisFY, cmlName);
    let cmlKeySalesValuesThisFY: KPDIndicators[][] = keySalesMake(cmlValuesThisFY, cmlSalesValuesThisFY, cmlName);

    let qtrKeySalesValuesLastFY: KPDIndicators[][] = keySalesMake(qtrValuesLastFY, qtrSalesValuesLastFY, cmlName);
    let cmlKeySalesValuesLastFY: KPDIndicators[][] = keySalesMake(cmlValuesLastFY, cmlSalesValuesLastFY, cmlName);

    let qtrYearOnYearValues: KPDIndicators[][] = qtrKeySalesValuesThisFY.map((elem, index, array) => {
        return yearOnYearCalculation(elem, qtrKeySalesValuesLastFY[index])
    });

    let cmlYearOnYearValues: KPDIndicators[][] = cmlKeySalesValuesThisFY.map((elem, index, array) => {
        return yearOnYearCalculation(elem, cmlKeySalesValuesLastFY[index])
    });

    let inputNewArrays = Array.from({length: qtrKeySalesValuesThisFY.length}, (v, i) => { 

        return {
            header: headers[i],
            footer: footers[i],
            quarterValuesProportion: qtrValuesThisFYPlus[i],
            cumulativeValuesProportion: cmlValuesThisFYPlus[i],
            quarterValuesSales: qtrKeySalesValuesThisFY[i],
            cumulativeValuesSales: cmlKeySalesValuesThisFY[i],
            quarterYoY: qtrYearOnYearValues[i],
            cumulativeYoY: cmlYearOnYearValues[i],
            currentQuarter: currentQuarter,
        }
    })

    let endLine: string = "###"; 

    let printOne = headerPrint([
        headerOne.companyName + " | " + headerOne.fiscalYear,
        headerOne.title,
    ],30)

    let printSecondRest = inputNewArrays.map(elem => {
        return printNewBody(elem.header, elem.footer, elem.quarterValuesProportion, elem.cumulativeValuesProportion,elem.quarterValuesSales, elem.cumulativeValuesSales, elem.quarterYoY, elem.cumulativeYoY, elem.currentQuarter)
    }).concat(endLine);

    let printAll = [printOne].concat(printSecondRest);  

    return printAll.reduce((prev, next) => prev + "\n" + next);

});

export const keySalesIndicatorsGraphList = collection.map((elem, index, array) => {

    let cmlName: string = elem.fiscalYear + " Cumulative ";

    let qtrValuesThisFY: KPDIndicators[][] = elem.kpi.map(elem => quarterValuesMake(elem));

    // assuming this is not used because it's the percentages...
    // let qtrValuesThisFYPlus: KPDIndicators[][] = qtrValuesThisFY.concat(softwareProportionMake(qtrValuesThisFY, cmlName), (physicalSoftwareProportionMake(qtrValuesThisFY, cmlName)));

    let cmlValuesThisFY: KPDIndicators[][] = elem.kpi.map(elem => cmlValuesMake(elem, cmlName));

    // assuming this is not used because it's the percentages...
    // let cmlValuesThisFYPlus: KPDIndicators[][] = cmlValuesThisFY.concat(softwareProportionMake(cmlValuesThisFY, cmlName), (physicalSoftwareProportionMake(cmlValuesThisFY, cmlName)));

    let qtrValuesLastFY: KPDIndicators[][] = (!array[index+1]) 
        ? elem.kpi.map(value => quarterValuesMake(undefined)) 
        : (array[index+1].kpi.length !== elem.kpi.length)
        ? elem.kpi.map((value, indexValue) => {
            
            let nameSearchThisFY = value.name
            let nameSearchLastFY = array[index+1].kpi[indexValue]? array[index+1].kpi[indexValue].name : undefined;
            
            return (nameSearchThisFY === nameSearchLastFY)
                ? quarterValuesMake(array[index+1].kpi[indexValue])
                : quarterValuesMake(undefined)

            })
        : array[index+1].kpi.map(value => quarterValuesMake(value))

    // assuming this is not used because it's the percentages...
    // let qtrValuesLastFYPlus: KPDIndicators[][] = qtrValuesLastFY.concat(softwareProportionMake(qtrValuesLastFY, cmlName), (physicalSoftwareProportionMake(qtrValuesLastFY, cmlName)));

    let cmlValuesLastFY: KPDIndicators[][] = (!array[index+1]) 
        ? elem.kpi.map(value => cmlValuesMake(undefined, cmlName)) 
        : (array[index+1].kpi.length !== elem.kpi.length)
        ? elem.kpi.map((value, indexValue) => {
            
            let nameSearchThisFY = value.name
            let nameSearchLastFY = array[index+1].kpi[indexValue]? array[index+1].kpi[indexValue].name : undefined;

            return (nameSearchThisFY === nameSearchLastFY)
                ? cmlValuesMake(array[index+1].kpi[indexValue], cmlName)
                : cmlValuesMake(undefined, cmlName)

            })
        : array[index+1].kpi.map(value => cmlValuesMake(value, cmlName))

    // assuming this is not used because it's the percentages...
    // let cmlValuesLastFYPlus: KPDIndicators[][] = cmlValuesLastFY.concat(softwareProportionMake(cmlValuesLastFY, cmlName), (physicalSoftwareProportionMake(cmlValuesLastFY, cmlName)));

    let thisFY: string = elem.fiscalYear;
    let lastFY: string = thisFY.slice(0, 4) + (Number(thisFY.slice(-4)) - 1).toString();

    let marchThisFY: string = "March " + thisFY.slice(4);
    let marchLastFY: string = "March " + lastFY.slice(4);

    let qtrSalesValuesThisFY: KPDIndicators[][] = elem.consolidatedSales.map(elem => consolidatedSalesQuartersMake(elem));

    let qtrSalesValuesLastFY: KPDIndicators[][] = (!array[index+1]) 
        ? elem.consolidatedSales.map(value => consolidatedSalesQuartersMake(undefined)) 
        : (array[index+1].consolidatedSales.length !== elem.consolidatedSales.length)
        ? elem.consolidatedSales.map((value, indexValue) => {
            
            let nameSearchThisFY = value.name;
            let nameSearchLastFY = array[index+1].consolidatedSales[indexValue]? array[index+1].consolidatedSales[indexValue].name : undefined;

            return (nameSearchThisFY === nameSearchLastFY)
                ? consolidatedSalesQuartersMake(array[index+1].consolidatedSales[indexValue])
                : consolidatedSalesQuartersMake(undefined)

            })
        : array[index+1].consolidatedSales.map(value => consolidatedSalesQuartersMake(value))

    let cmlSalesValuesThisFY: KPDIndicators[][] = elem.consolidatedSales.map(elem => consolidatedSalesCmlMake(elem, cmlName))

    let cmlSalesValuesLastFY: KPDIndicators[][] = (!array[index+1]) 
        ? elem.consolidatedSales.map(value => consolidatedSalesCmlMake(undefined, cmlName)) 
        : (array[index+1].consolidatedSales.length !== elem.consolidatedSales.length)
        ? elem.consolidatedSales.map((value, indexValue) => {
            
            let nameSearchThisFY = value.name
            let nameSearchLastFY = array[index+1].consolidatedSales[indexValue]? array[index+1].consolidatedSales[indexValue].name : undefined;

            return (nameSearchThisFY === nameSearchLastFY)
                ? consolidatedSalesCmlMake(array[index+1].consolidatedSales[indexValue], cmlName)
                : consolidatedSalesCmlMake(undefined, cmlName)

            })
        : array[index+1].consolidatedSales.map(value => consolidatedSalesCmlMake(value, cmlName))

    let qtrKeySalesValuesThisFY: KPDIndicators[][] = keySalesMake(qtrValuesThisFY, qtrSalesValuesThisFY, cmlName);

    let cmlKeySalesValuesThisFY: KPDIndicators[][] = keySalesMake(cmlValuesThisFY, cmlSalesValuesThisFY, cmlName);

    let qtrKeySalesValuesLastFY: KPDIndicators[][] = keySalesMake(qtrValuesLastFY, qtrSalesValuesLastFY, cmlName);

    let cmlKeySalesValuesLastFY: KPDIndicators[][] = keySalesMake(cmlValuesLastFY, cmlSalesValuesLastFY, cmlName);

    const graphMake = {
        thisFY: thisFY,
        lastFY: lastFY,
        marchThisFY: marchThisFY,
        marchLastFY: marchLastFY,
        quarterValuesThisFY: qtrValuesThisFY.concat(qtrKeySalesValuesThisFY),
        quarterValuesLastFY: qtrValuesLastFY.concat(qtrKeySalesValuesLastFY),
        cumulativeValuesThisFY: cmlValuesThisFY.concat(cmlKeySalesValuesThisFY),
        cumulativeValuesLastFY: cmlValuesLastFY.concat(cmlKeySalesValuesLastFY),
    };

    return graphMake

})
