import { printSections, Earnings, Header } from "../utils/earnings-logic";

const netSales: Earnings[] = [
    {
        category: "quarter",
        units: "currency",
        name: " 1st Quarter ",
        value: 61969
    },
    {
        category: "quarter",
        units: "currency",
        name: " 2nd Quarter ",
        cmlName: " First Half  ",
        value: 136812
    },
    {
        category: "quarter",
        units: "currency", 
        cmlName: " 1st 3 Qtrs  ",          
        name: " 3rd Quarter ",
        value: 311121
    },
    {
        category: "quarter",
        units: "currency", 
        cmlName: " FY3/17 Cml. ",         
        name: " 4th Quarter ",
        value: 489095
    },
]

const netSalesLastFy: Earnings[] = [
    {
        category: "quarter",
        units: "currency",
        name: " 1st Quarter ",
        value: 90223
    },
    {
        category: "quarter",
        units: "currency",
        name: " 2nd Quarter ",
        value: 204182
    },
    {
        category: "quarter",
        units: "currency",
        name: " 3rd Quarter ",
        value: 425664
    },
    {
        category: "quarter",
        units: "currency",
        name: " 4th Quarter ",
        value: 504459
    },
]

const netSalesForecasts: Earnings[] = [
    {
        category: "forecast",
        units: "currency",
        name: " FY3/17 Forecast ",
        value: 500000
    },
    {
        category: "forecast",
        units: "currency",
        name: " FCST Revision 1 ",
        value: 470000
    },
    {
        category: "forecast",
        units: "currency",
        name: " FCST Revision 2 ",
        value: 470000
    },
    {
        category: "forecast",
        units: "currency",
        name: " FY3/18 Forecast ",
        value: 750000
    },
]

const header: Header = {
        companyName: " Nintendo Co., Ltd.",
        netSales: " Net Sales ",
        operatingIncome: " Operating Income ",
        operatingMargin: " Operating Margin ",
        netIncome: " Net Income ",
        yearOnYearPercentage: "    YoY% ",
        fiscalYear: "FY3/2017 ",
        title: " Consolidated Operating Results   ",
    }
