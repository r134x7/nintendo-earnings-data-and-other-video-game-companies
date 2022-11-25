import {
    Header,
    Footer,
    printHead,
    printBody,
    KPDIndicators,
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

const quarterValuesMake = (obj: {
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
            category: "quarterly",
            units: (obj.units === "percentage") ? "percentage" : "currency",
            quarter: " 1st Quarter       ",
            value: obj.Q1Value,
        },
        {
            category: "quarterly",
            units: (obj.units === "percentage") ? "percentage" : "currency",
            quarter: " 2nd Quarter       ",
            value: obj.Q2Value,
        },
        {
            category: "quarterly",
            units: (obj.units === "percentage") ? "percentage" : "currency",
            quarter: " 3rd Quarter       ",
            value: obj.Q3Value,
        },
        {
            category: "quarterly",
            units: (obj.units === "percentage") ? "percentage" : "currency",
            quarter: " 4th Quarter       ",
            value: obj.Q4Value,
        },
    ]

    return quarterValues
};

const cmlValuesMake = (obj: {
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
            category: "cumulative",
            units: (obj.units === "percentage") ? "percentage" : "currency",
            quarter: " 1st Half          ",
            value: obj.Q2CmlValue,
        },
        {
            category: "cumulative",
            units: (obj.units === "percentage") ? "percentage" : "currency",
            quarter: " 1st Three Quarters",
            value: obj.Q3CmlValue,
        },
        {
            category: "cumulative",
            units: (obj.units === "percentage") ? "percentage" : "currency",
            quarter: cmlName,
            value: obj.Q4CmlValue,
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
        title: "| Key/Digital Sales Indicators |",
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

})