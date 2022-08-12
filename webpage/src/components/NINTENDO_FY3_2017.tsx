import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Pagination, Group, Space, Switch } from "@mantine/core";
import { useSelector } from "react-redux";

import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js'; // required to actually get chart.js with react-chartjs-2 to work
Chart.register(...registerables); // to get the package working, source: https://www.chartjs.org/docs/next/getting-started/integration.html

export default function NINTENDO_FY3_17() {

    interface Quarter {
        quarter: number,
    }
    
    interface Forecasts {
        forecast: number,
    }

    const netSales: Quarter[] = [
        {quarter: 307460},  // first quarter
        {quarter: 624272},  // second quarter
        {quarter: 1320219}, // third quarter
        {quarter: 1695344}, // fourth quarter
    ]

    const netSalesLastFy: Quarter[] = [
        {quarter: 322647}, // first quarter
        {quarter: 769524}, // second quarter
        {quarter: 1404463}, // third quarter
        {quarter: 1758910}, // fourth quarter
    ]
    
    const netSalesForecasts: Forecasts[] = [ // any forecast revisions need to be placed between current and next
        {forecast: 1600000}, // current Fiscal Year Forecast
        {forecast: 1620000}, // first forecast revision
        {forecast: 1650000}, // second forecast revision
        {forecast: 1700000}, // next Fiscal Year Forecast
    ]

    const operatingIncome: Quarter[] = [
        {quarter: 101647}, // first quarter
        {quarter: 219959}, // second quarter
        {quarter: 472551}, // third quarter
        {quarter: 592760}, // fourth quarter
    ]
      
    const operatingIncomeLastFY: Quarter[] = [
          {quarter: 144737}, // first quarter
          {quarter: 246687}, // second quarter
          {quarter: 329684}, // third quarter
          {quarter: 419526}, // fourth quarter
    ]
      
    const operatingIncomeForecasts: Forecasts[] = [ // forecast revisions need to be placed between current and next
          {forecast: 500000}, // current Fiscal Year Forecast
          {forecast : 520000}, // first forecast revision
          {forecast: 560000}, // second forecast revision
          {forecast: 600000}, // next Fiscal Year Forecast
    ]

    const netIncome: Quarter[] = [
        {quarter: 151647}, // first quarter
        {quarter: 239959}, // second quarter
        {quarter: 322551}, // third quarter
        {quarter: 452760}, // fourth quarter
    ]
      
    const netIncomeLastFY: Quarter[] = [
          {quarter: 144737}, // first quarter
          {quarter: 246687}, // second quarter
          {quarter: 329684}, // third quarter
          {quarter: 419526}, // fourth quarter
    ]
      
    const netIncomeForecasts: Forecasts[] = [ // forecast revisions need to be placed between current and next
            {forecast: 340000}, // current Fiscal Year Forecast
            {forecast: 350000}, // first forecast revision
            {forecast: 400000}, // second forecast revision
            {forecast: 420000}, // next Fiscal Year Forecast
    ]

    const [data, setData] = useState("");
    const [value, setValue] = useState("");
    const [sources, setSources] = useState(<></>)

    const state: any = useSelector(state => state);

    const [activePage, setPage] = useState(1);
    const [secondDataRef, setSecondDataRef] = useState(2)
    const [checked, setChecked] = useState(false);
    const [barChecked, setBarChecked] = useState(false);

    

    useEffect(() => {
        (value === "Consolidated Operating Results")
            ? setData(consolidatedOperatingResults)
            : (value === "WW Hardware/Software units, Mobile/IP related income")
            ? setData(nintendoHardwareSoftwareMobile)
            : (value === "Key/Digital Sales Indicator")
            ? setData(keyIndicators)
            : (value === "FY Million-Seller Titles")
            ? setData(fyMillionSellers)
            : (value === "Regional Hardware/Software units")
            ? setData(regionalHWSW)
            : (value === "Top Selling Titles")
            ? setData(topSellingTitles)
            : setData("");

        (value === "Data Sources")
            ? setSources(DATA_SOURCES)
            : setSources(<></>)

    }, [value])

    function DATA_SOURCES() {

        return (
            <Text>
                <Stack align="center">
                        1st Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2016/160727e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2016/160727e.pdf
                    </Anchor>
                
                        2nd Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2016/161026e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2016/161026e.pdf
                    </Anchor>
                
                        3rd Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2017/170131e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2017/170131e.pdf
                    </Anchor>
                
                        4th Quarter Earnings Release: 
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2017/170427e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2017/170427e.pdf
                    </Anchor>
                        4th Quarter Supplementary Information:
                    <Anchor mb="sm" href="https://www.nintendo.co.jp/ir/pdf/2017/170427_6e.pdf" target="_blank" >
                        https://www.nintendo.co.jp/ir/pdf/2017/170427_6e.pdf
                    </Anchor>
                </Stack>  
            </Text> 
        )
    };

    const consolidatedOperatingResults = "no data here at this time";

    const nintendoHardwareSoftwareMobile = "no data here at this time";
    
    const keyIndicators = "no data here at this time";

    const fyMillionSellers = "no data here at this time";

    const regionalHWSW = "no data here at this time";

    const topSellingTitles = "no data here at this time";

    return (

        <div>  
            <SegmentedControl
                    fullWidth 
                    orientation="vertical"
                    value={value}
                    onChange={setValue}
                    data={[ "Data Sources",
                            "Consolidated Operating Results", 
                            "WW Hardware/Software units, Mobile/IP related income", 
                            "Key/Digital Sales Indicator", 
                            "FY Million-Seller Titles", 
                            "Regional Hardware/Software units", 
                            "Top Selling Titles",]}
            />
            
            {sources}
            <Code style={{backgroundColor: `${state.colour}`}} block>{data}</Code>
        </div>
        
    );
}
