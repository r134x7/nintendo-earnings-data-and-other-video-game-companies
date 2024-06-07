import {
    Header,
    Footer,
    KPDIndicators,
    quarterlyCalculation,
    yearOnYearCalculation,
    printNewBody,
} from "../../utils/kpi_logic";

import { headerPrint, printTextBlock, border, liner, spacer, dateLabel, type titleSet, globImport } from "../../utils/table_design_logic";

type keySalesIndicatorsCollection = {
    currentQuarter: number,
    fiscalYear: string,
    kpi: {
            name: string,
            units: string,
            ID: string,
            Q1Value: number,
            Q2Value: number,
            Q3Value: number,
            Q4Value: number,
            Q2CmlValue: number,
            Q3CmlValue: number,
            Q4CmlValue: number,
            footnote?: string,
    }[],
    consolidatedSales: {
            name: string,
            units: string,
            Q1Value: number,
            Q2Value: number,
            Q3Value: number,
            Q4Value: number 
    }[]
}

const collection: keySalesIndicatorsCollection[] = [...globImport(new Map<number, keySalesIndicatorsCollection>, import.meta.glob("./Key_Sales_Indicators/*.json", { import: "default", eager: true }), "Descending").values()]

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
                    ID: "900",
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
                ID: "901",
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

    let digitalSalesMake: KPDIndicators[][] = indicators.filter(elem => elem[0].name === "Digital Sales in dedicated video game platform").map(elem => elem.map(value => {
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

            return (value.name === "Proportion of Overseas Sales" || value.name === "Proportion of Sales Outside of Japan")
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
                : (value.name === "Proportion of Downloadable Versions of Packaged Software Sales")
                ? {
                    ...value,
                    units: "currency",
                    value: Number(((value.value / 100) * digitalSalesMake[0][indexValue].value).toFixed(0)) 
                }
                : (value.name === "Digital Sales in dedicated video game platform")
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
    ID?: string,
    Q1Value: number,
    Q2Value: number,
    Q3Value: number,
    Q4Value: number, 
    footnote?: string,
}): KPDIndicators[] => {
    // values are cumulative and need to go through quarterly calc
    let cmlValues: KPDIndicators[] = [
        {
            name: obj?.name ?? "N/A",
            ID: obj?.ID ?? "N/A",
            category: "quarterly",
            units: (!obj) ? "NaN" : "currency",
            quarter: "1st Quarter",
            value: obj?.Q1Value ?? 0,
            footnote: obj?.footnote,
        },
        {
            name: obj?.name ?? "N/A",
            ID: obj?.ID ?? "N/A",
            category: "quarterly",
            units: (!obj) ? "NaN" : "currency",
            quarter: "2nd Quarter",
            value: obj?.Q2Value ?? 0,
            footnote: obj?.footnote,
        },
        {
            name: obj?.name ?? "N/A",
            ID: obj?.ID ?? "N/A",
            category: "quarterly",
            units: (!obj) ? "NaN" : "currency",
            quarter: "3rd Quarter",
            value: obj?.Q3Value ?? 0,
            footnote: obj?.footnote,
        },
        {
            name: obj?.name ?? "N/A",
            ID: obj?.ID ?? "N/A",
            category: "quarterly",
            units: (!obj) ? "NaN" : "currency",
            quarter: "4th Quarter",
            value: obj?.Q4Value ?? 0,
            footnote: obj?.footnote,
        },
    ];
    // quarterly calculation taken care of
    let quarterValues = quarterlyCalculation(cmlValues);

    return quarterValues
};

const consolidatedSalesCmlMake = (obj: undefined | {
    name: string,
    ID?: string,
    Q1Value: number,
    Q2Value: number,
    Q3Value: number,
    Q4Value: number, 
    footnote?: string,
}, cmlName: string): KPDIndicators[] => {
    // values are cumulative and need to go through quarterly calc
    let cmlValues: KPDIndicators[] = [
        {
            name: obj?.name ?? "N/A",
            ID: obj?.ID ?? "N/A",
            category: "cumulative",
            units: (!obj) ? "NaN" : "currency",
            quarter: "1st Half",
            value: obj?.Q2Value ?? 0,
            footnote: obj?.footnote,
        },
        {
            name: obj?.name ?? "N/A",
            ID: obj?.ID ?? "N/A",
            category: "cumulative",
            units: (!obj) ? "NaN" : "currency",
            quarter: "1st 3/4",
            value: obj?.Q3Value ?? 0,
            footnote: obj?.footnote,
        },
        {
            name: obj?.name ?? "N/A",
            ID: obj?.ID ?? "N/A",
            category: "cumulative",
            units: (!obj) ? "NaN" : "currency",
            quarter: cmlName,
            value: obj?.Q4Value ?? 0,
            footnote: obj?.footnote,
        },
    ];

    return cmlValues
};

const quarterValuesMake = (obj: undefined | {
    name: string,
    units: string,
    ID: string,
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
            name: obj?.name ?? "N/A",
            ID: obj?.ID ?? "N/A",
            category: "quarterly",
            units: (obj?.units === "currency") ? "currency" : "percentage",
            quarter: "1st Quarter",
            value: obj?.Q1Value ?? 0,
        },
        {
            name: obj?.name ?? "N/A",
            ID: obj?.ID ?? "N/A",
            category: "quarterly",
            units: (obj?.units === "currency") ? "currency" : "percentage",
            quarter: "2nd Quarter",
            value: obj?.Q2Value ?? 0,
        },
        {
            name: obj?.name ?? "N/A",
            ID: obj?.ID ?? "N/A",
            category: "quarterly",
            units: (obj?.units === "currency") ? "currency" : "percentage",
            quarter: "3rd Quarter",
            value: obj?.Q3Value ?? 0,
        },
        {
            name: obj?.name ?? "N/A",
            ID: obj?.ID ?? "N/A",
            category: "quarterly",
            units: (obj?.units === "currency") ? "currency" : "percentage",
            quarter: "4th Quarter",
            value: obj?.Q4Value ?? 0,
        },
    ]

    return quarterValues
};

const cmlValuesMake = (obj: undefined | {
    name: string,
    units: string,
    ID: string,
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
            name: obj?.name ?? "N/A",
            ID: obj?.ID ?? "N/A",
            category: "cumulative",
            units: (obj?.units === "currency") ? "currency" : "percentage",
            quarter: "1st Half",
            value: obj?.Q2CmlValue ?? 0,
        },
        {
            name: obj?.name ?? "N/A",
            ID: obj?.ID ?? "N/A",
            category: "cumulative",
            units: (obj?.units === "currency") ? "currency" : "percentage",
            quarter: "1st 3/4",
            value: obj?.Q3CmlValue ?? 0,
        },
        {
            name: obj?.name ?? "N/A",
            ID: obj?.ID ?? "N/A",
            category: "cumulative",
            units: (obj?.units === "currency") ? "currency" : "percentage",
            quarter: cmlName,
            value: obj?.Q4CmlValue ?? 0,
        },
    ];

    return cmlValues
};

export const keySalesIndicatorsList = collection.map((elem, index, array) => {

    let currentQuarter: number = elem.currentQuarter;

    let cmlName: string = elem.fiscalYear + " Cml.";

    let headerOne: Header = {
        companyName: "Nintendo Co., Ltd.",
        section: " Proportion |       Sales |    YoY%  |",
        fiscalYear: elem.fiscalYear,
        title: "Key Sales Indicators",
    };

    let otherHeaders: Header[] = [
        {
            ...headerOne,
            section: liner(printTextBlock("Proportion of software sales",50),"−","both",true,50) + liner(border([
                spacer("Proportion", 24,"right"),
                spacer("Sales", 12,"right"),
                spacer("YoY%", 9,"right"),
            ]),"−","bottom",true,50),
        },
        {
            ...headerOne,
            section: liner(printTextBlock("Proportion of physical software sales",50),"−","both",true,50) + liner(border([
                spacer("Proportion", 24,"right"),
                spacer("Sales", 12,"right"),
                spacer("YoY%", 9,"right"),
            ]),"−","bottom",true,50),
        },
    ]
  
    let headers: Header[] = elem.kpi.map((value => {
        return {
            ...headerOne,
            section: liner(printTextBlock(value.name,50),"−","both",true,50) + liner(border([
                spacer((value.units === "currency") ? "Sales" : "Proportion", 24,"right"),
                spacer("Sales", 12,"right"),
                spacer("YoY%", 9,"right"),
            ]),"−","bottom",true,50),
        }
    })).concat(otherHeaders)

    let otherFooters: Footer[] = [
        {
            section: liner(printTextBlock("*Proportion of software (including digital sales) sales to total dedicated video game platform sales",50),"−","both",true,50) 
        },
        {
            section: liner(printTextBlock("*Proportion of physical software sales to total dedicated video game platform software sales",50),"−","both",true,50) 
        }
    ]

    let footers: Footer[] = elem.kpi.map((value => {

        let footnoteCheck = value?.footnote ?? "N/A";

        return {
            section: liner(printTextBlock(footnoteCheck,50),"−","both",true,50) 
        }
    })).concat(otherFooters) 

    let qtrValuesThisFY: KPDIndicators[][] = elem.kpi.map(elem => quarterValuesMake(elem))

    let qtrValuesThisFYPlus: KPDIndicators[][] = qtrValuesThisFY.concat(softwareProportionMake(qtrValuesThisFY, cmlName), (physicalSoftwareProportionMake(qtrValuesThisFY, cmlName)));

    let qtrValuesLastFY: KPDIndicators[][] = (!array[index+1]) 
        ? elem.kpi.map(value => quarterValuesMake(undefined)) 
        // : (array[index+1].kpi.length !== elem.kpi.length)
        // ? elem.kpi.map((value, indexValue) => {
        : elem.kpi.map((value, indexValue) => {
            
            // let nameSearchThisFY: string = value.name
            let nameSearchThisFY: string = value.ID // should search correctly when name changes over time 
            // let nameSearchLastFY = array[index+1].kpi[indexValue]? array[index+1].kpi[indexValue].name : undefined;
            let nameSearchLastFY = array[index+1].kpi.filter((elem) => nameSearchThisFY === elem.ID); // ID is supposed to be unique, therefore only one result
            
            return (nameSearchThisFY === nameSearchLastFY[0].ID)
                // ? quarterValuesMake(array[index+1].kpi[indexValue])
                ? quarterValuesMake(nameSearchLastFY[0])
                : quarterValuesMake(undefined)

            })
        // : array[index+1].kpi.map(value => quarterValuesMake(value))

    // assuming this is not used because it's the percentages...
    // let qtrValuesLastFYPlus: KPDIndicators[][] = qtrValuesLastFY.concat(softwareProportionMake(qtrValuesLastFY, cmlName), (physicalSoftwareProportionMake(qtrValuesLastFY, cmlName)));

    let cmlValuesThisFY: KPDIndicators[][] = elem.kpi.map(elem => cmlValuesMake(elem, cmlName));
    
    let cmlValuesThisFYPlus: KPDIndicators[][] = cmlValuesThisFY.concat(softwareProportionMake(cmlValuesThisFY, cmlName), (physicalSoftwareProportionMake(cmlValuesThisFY, cmlName)));

    let cmlValuesLastFY: KPDIndicators[][] = (!array[index+1]) 
        ? elem.kpi.map(value => cmlValuesMake(undefined, cmlName)) 
        // : (array[index+1].kpi.length !== elem.kpi.length)
        // ? elem.kpi.map((value, indexValue) => {
        : elem.kpi.map((value, indexValue) => {
            
            // let nameSearchThisFY: string = value.name
            let nameSearchThisFY: string = value.ID // should search correctly when name changes over time 
            // let nameSearchLastFY = array[index+1].kpi[indexValue]? array[index+1].kpi[indexValue].ID : undefined;
            let nameSearchLastFY = array[index+1].kpi.filter((elem) => nameSearchThisFY === elem.ID); // ID is supposed to be unique, therefore only one result

            return (nameSearchThisFY === nameSearchLastFY[0].ID)
                // ? cmlValuesMake(array[index+1].kpi[indexValue], cmlName)
                ? cmlValuesMake(nameSearchLastFY[0], cmlName)
                : cmlValuesMake(undefined, cmlName)

            })
        // : array[index+1].kpi.map(value => cmlValuesMake(value, cmlName))

    // assuming this is not used because it's the percentages...
    // let cmlValuesLastFYPlus: KPDIndicators[][] = cmlValuesLastFY.concat(softwareProportionMake(cmlValuesLastFY, cmlName), (physicalSoftwareProportionMake(cmlValuesLastFY, cmlName)));

    let qtrSalesValuesThisFY: KPDIndicators[][] = elem.consolidatedSales.map(elem => consolidatedSalesQuartersMake(elem));

    let qtrSalesValuesLastFY: KPDIndicators[][] = (!array[index+1]) 
        ? elem.consolidatedSales.map(value => consolidatedSalesQuartersMake(undefined)) 
        : (array[index+1].consolidatedSales.length !== elem.consolidatedSales.length)
        ? elem.consolidatedSales.map((value, indexValue) => {
            
            // consider implementing IDs on consolidatedSales key in case the names on the category changes and data becomes out of order
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
            title: qtrValuesThisFYPlus[i][0].name,
        }
    })

    let endLine: string = "###"; 

    const makeDateLabel = dateLabel(elem.fiscalYear ?? "N/A", elem?.currentQuarter ?? 4);

    const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

    let printOne = headerPrint([
        headerOne.companyName + " | " + headerOne.fiscalYear,
        headerOne.title,
    ],30) + "\n" + printDateLabel;

    let printSecondRest = inputNewArrays.map(elem => {
        // return printNewBody(elem.header, elem.footer, elem.quarterValuesProportion, elem.cumulativeValuesProportion,elem.quarterValuesSales, elem.cumulativeValuesSales, elem.quarterYoY, elem.cumulativeYoY, elem.currentQuarter)

        return {
            title: elem.title,
            table: printNewBody(elem.header, elem.footer, elem.quarterValuesProportion, elem.cumulativeValuesProportion,elem.quarterValuesSales, elem.cumulativeValuesSales, elem.quarterYoY, elem.cumulativeYoY, elem.currentQuarter),
        } as titleSet 
    })

    // let printAll = [printOne].concat(printSecondRest);  

    // return printAll.reduce((prev, next) => prev + "\n" + next);
    return {
        header: printOne,
        titleList: printSecondRest,
    }
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
        // : (array[index+1].kpi.length !== elem.kpi.length)
        // ? elem.kpi.map((value, indexValue) => {
        : elem.kpi.map((value, indexValue) => {
            
            // let nameSearchThisFY: string = value.name
            let nameSearchThisFY: string = value.ID // should search correctly when name changes over time 
            // let nameSearchLastFY = array[index+1].kpi[indexValue]? array[index+1].kpi[indexValue].name : undefined;
            let nameSearchLastFY = array[index+1].kpi.filter((elem) => nameSearchThisFY === elem.ID); // ID is supposed to be unique, therefore only one result
            
            // return (nameSearchThisFY === nameSearchLastFY)
            return (nameSearchThisFY === nameSearchLastFY[0].ID)
                // ? quarterValuesMake(array[index+1].kpi[indexValue])
                ? quarterValuesMake(nameSearchLastFY[0])
                : quarterValuesMake(undefined)

            })
        // : array[index+1].kpi.map(value => quarterValuesMake(value)) // I don't think this is needed any more now

    // assuming this is not used because it's the percentages...
    // let qtrValuesLastFYPlus: KPDIndicators[][] = qtrValuesLastFY.concat(softwareProportionMake(qtrValuesLastFY, cmlName), (physicalSoftwareProportionMake(qtrValuesLastFY, cmlName)));

    let cmlValuesLastFY: KPDIndicators[][] = (!array[index+1]) 
        ? elem.kpi.map(value => cmlValuesMake(undefined, cmlName)) 
        // : (array[index+1].kpi.length !== elem.kpi.length)
        : elem.kpi.map((value, indexValue) => {
            
            // let nameSearchThisFY: string = value.name
            let nameSearchThisFY: string = value.ID // should search correctly when name changes over time 
            // let nameSearchLastFY = array[index+1].kpi[indexValue]? array[index+1].kpi[indexValue].name : undefined;
            let nameSearchLastFY = array[index+1].kpi.filter((elem) => nameSearchThisFY === elem.ID); // ID is supposed to be unique, therefore only one result

            // return (nameSearchThisFY === nameSearchLastFY)
            return (nameSearchThisFY === nameSearchLastFY[0].ID)
                // ? cmlValuesMake(array[index+1].kpi[indexValue], cmlName)
                ? cmlValuesMake(nameSearchLastFY[0], cmlName)
                : cmlValuesMake(undefined, cmlName)

            })
        // : array[index+1].kpi.map(value => cmlValuesMake(value, cmlName))

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
            
            let nameSearchThisFY: string = value.name
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

export const keySalesIndicatorsListCml = collection.map((elem, index, array) => {

    let currentQuarter: number = elem.currentQuarter;

    let cmlName: string = elem.fiscalYear + " Cml.";

    let headerOne: Header = {
        companyName: "Nintendo Co., Ltd.",
        section: " Proportion |       Sales |    YoY%  |",
        fiscalYear: elem.fiscalYear,
        title: "Key Sales Indicators",
    };

    let otherHeaders: Header[] = [
        {
            ...headerOne,
            section: liner(printTextBlock("Proportion of software sales",50),"−","both",true,50) + liner(border([
                spacer("Proportion", 24,"right"),
                spacer("Sales", 12,"right"),
                spacer("YoY%", 9,"right"),
            ]),"−","bottom",true,50),
        },
        {
            ...headerOne,
            section: liner(printTextBlock("Proportion of physical software sales",50),"−","both",true,50) + liner(border([
                spacer("Proportion", 24,"right"),
                spacer("Sales", 12,"right"),
                spacer("YoY%", 9,"right"),
            ]),"−","bottom",true,50),
        },
    ]
  
    let headers: Header[] = elem.kpi.map((value => {
        return {
            ...headerOne,
            section: liner(printTextBlock(value.name,50),"−","both",true,50) + liner(border([
                spacer((value.units === "currency") ? "Sales" : "Proportion", 24,"right"),
                spacer("Sales", 12,"right"),
                spacer("YoY%", 9,"right"),
            ]),"−","bottom",true,50),
        }
    })).concat(otherHeaders)

    let otherFooters: Footer[] = [
        {
            section: liner(printTextBlock("*Proportion of software (including digital sales) sales to total dedicated video game platform sales",50),"−","both",true,50) 
        },
        {
            section: liner(printTextBlock("*Proportion of physical software sales to total dedicated video game platform software sales",50),"−","both",true,50) 
        }
    ]

    let footers: Footer[] = elem.kpi.map((value => {

        let footnoteCheck = value?.footnote ?? "N/A";

        return {
            section: liner(printTextBlock(footnoteCheck,50),"−","both",true,50) 
        }
    })).concat(otherFooters) 

    let qtrValuesThisFY: KPDIndicators[][] = elem.kpi.map(elem => quarterValuesMake(elem))

    let qtrValuesThisFYPlus: KPDIndicators[][] = qtrValuesThisFY.concat(softwareProportionMake(qtrValuesThisFY, cmlName), (physicalSoftwareProportionMake(qtrValuesThisFY, cmlName)));

    let qtrValuesLastFY: KPDIndicators[][] = (!array[index+1]) 
        ? elem.kpi.map(value => quarterValuesMake(undefined)) 
        // : (array[index+1].kpi.length !== elem.kpi.length)
        : elem.kpi.map((value, indexValue) => {
            
            // let nameSearchThisFY: string = value.name
            let nameSearchThisFY: string = value.ID // should search correctly when name changes over time 
            // let nameSearchLastFY = array[index+1].kpi[indexValue]? array[index+1].kpi[indexValue].name : undefined;
            let nameSearchLastFY = array[index+1].kpi.filter((elem) => nameSearchThisFY === elem.ID); // ID is supposed to be unique, therefore only one result
            
            return (nameSearchThisFY === nameSearchLastFY[0].ID)
                ? quarterValuesMake(nameSearchLastFY[0])
                : quarterValuesMake(undefined)

            })
        // : array[index+1].kpi.map(value => quarterValuesMake(value))

    // assuming this is not used because it's the percentages...
    // let qtrValuesLastFYPlus: KPDIndicators[][] = qtrValuesLastFY.concat(softwareProportionMake(qtrValuesLastFY, cmlName), (physicalSoftwareProportionMake(qtrValuesLastFY, cmlName)));

    let cmlValuesThisFY: KPDIndicators[][] = elem.kpi.map(elem => cmlValuesMake(elem, cmlName));
    
    let cmlValuesThisFYPlus: KPDIndicators[][] = cmlValuesThisFY.concat(softwareProportionMake(cmlValuesThisFY, cmlName), (physicalSoftwareProportionMake(cmlValuesThisFY, cmlName)));

    let cmlValuesLastFY: KPDIndicators[][] = (!array[index+1]) 
        ? elem.kpi.map(value => cmlValuesMake(undefined, cmlName)) 
        // : (array[index+1].kpi.length !== elem.kpi.length)
        : elem.kpi.map((value, indexValue) => {
            
            // let nameSearchThisFY: string = value.name
            let nameSearchThisFY: string = value.ID // should search correctly when name changes over time 
            // let nameSearchLastFY = array[index+1].kpi[indexValue]? array[index+1].kpi[indexValue].name : undefined;
            let nameSearchLastFY = array[index+1].kpi.filter((elem) => nameSearchThisFY === elem.ID); // ID is supposed to be unique, therefore only one result

            return (nameSearchThisFY === nameSearchLastFY[0].ID)
                ? cmlValuesMake(nameSearchLastFY[0], cmlName)
                : cmlValuesMake(undefined, cmlName)

            })
        // : array[index+1].kpi.map(value => cmlValuesMake(value, cmlName))

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
            currentQuarter: currentQuarter,
            title: qtrValuesThisFYPlus[i][0].name,
        }
    })
    
    return inputNewArrays

    // let endLine: string = "###"; 

    // const makeDateLabel = dateLabel(elem.fiscalYear ?? "N/A", elem?.currentQuarter ?? 4);

    // const printDateLabel = liner(border([spacer(makeDateLabel, makeDateLabel.length+1, "left")]),"−", "both",true)

    // let printOne = headerPrint([
    //     headerOne.companyName + " | " + headerOne.fiscalYear,
    //     headerOne.title,
    // ],30) + "\n" + printDateLabel;

    // let printSecondRest = inputNewArrays.map(elem => {
    //     // return printNewBody(elem.header, elem.footer, elem.quarterValuesProportion, elem.cumulativeValuesProportion,elem.quarterValuesSales, elem.cumulativeValuesSales, elem.quarterYoY, elem.cumulativeYoY, elem.currentQuarter)

    //     return {
    //         title: elem.title,
    //         table: printNewBody(elem.header, elem.footer, elem.quarterValuesProportion, elem.cumulativeValuesProportion,elem.quarterValuesSales, elem.cumulativeValuesSales, elem.quarterYoY, elem.cumulativeYoY, elem.currentQuarter),
    //     } as titleSet 
    // })

    // // let printAll = [printOne].concat(printSecondRest);  

    // // return printAll.reduce((prev, next) => prev + "\n" + next);
    // return {
    //     header: printOne,
    //     titleList: printSecondRest,
    // }
});