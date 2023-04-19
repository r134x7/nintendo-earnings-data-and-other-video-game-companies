import { useState } from "react";
import { Code, SegmentedControl } from "@mantine/core";
import { useSelector } from "react-redux";
import { allPlatinumTitlesList, filteringFyTitles, fyPlatinumTitlesList, searchTitles } from "../data/capcom/platinum_titles_Capcom";
import { gameSeriesList } from "../data/capcom/game_series_sales_Capcom";
import { softwareSalesList, softwareSalesGraphList } from "../data/capcom/software_sales_Capcom";
import { annualReportList } from "../data/capcom/software_shipments_platform_Capcom";
import { capcomConsolidatedEarningsList, capcomConsolidatedEarningsGraphList } from "../data/generalTables/consolidated_earnings_general";
import { capcomLinks } from "../data/generalTables/data_sources_general";

import GRAPH_SOFTWARE_SALES from "../data/generalGraphs/GRAPH_SOFTWARE_SALES";
import GRAPH_CONSOLIDATED_EARNINGS from "../data/generalGraphs/GRAPH_CONSOLIDATED_EARNINGS";

import {cite, citeCopy} from "../utils/copySetCitation";

let titleListCheck = 0;
let seriesListCheck = 0;
let softwareShipmentsListCheck = 0;

export default function CAPCOM_COMPONENT(props: {setIndex: number; yearLength: number}) {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    const [titleValue, setTitleValue] = useState("");
    const [platformValue, setPlatformValue] = useState<string | null>("All" ?? "All");

    function filterPlatforms<T extends searchTitles>(input: T[]) {

        return input.filter(elem => {

            if (platformValue === "All") {
                return elem
            } else if (platformValue === elem.platforms) {
                return elem
            } else if ([...elem.platforms.matchAll(/\w+\s?\w+/g)].flat().filter(value => value === platformValue).length > 0) {
                return elem
            }

        })
    }

    // let allTitlesPlatformsFiltered = filterPlatforms(allPlatinumTitlesList.) 

    const annualReportListAltered = [""].concat(annualReportList); // to manage keeping the index values the same with softwareSalesList

    const gameSeriesListAltered = [""].concat(gameSeriesList); // to manage keeping the index values the same with softwareSalesList

    const componentListNew = Array.from({length: props.yearLength}, (elem, index) => {

        return [
            { 
                name: "Data Sources",
                value: capcomLinks?.[index],
            },
            {
                name: "Consolidated Financial Results",
                value: capcomConsolidatedEarningsList?.[index],
                graph: <GRAPH_CONSOLIDATED_EARNINGS setData={capcomConsolidatedEarningsGraphList[index]} />
            },
            {
                name: "Software Sales",
                value: softwareSalesList?.[index],
                graph: <GRAPH_SOFTWARE_SALES setData={softwareSalesGraphList[index]} />
            },
            {
                name: "Software Platform Shipments", 
                value: annualReportListAltered[index] ? annualReportListAltered[index] : undefined, // can't use optional chaining on falsy values i.e. ""
            },
            {
                name: "FY Platinum Titles", 
                value: fyPlatinumTitlesList?.[index],
            },
            {
                name: "All Platinum Titles", 
                value: allPlatinumTitlesList?.[index],
            },
            {
                name: "FY Game Series", 
                value: gameSeriesListAltered[index] ? gameSeriesListAltered[index] : undefined, // can't use optional chaining on falsy values i.e. ""
            },
        ].filter(elem => elem.value !== undefined);
    })

    const dataList = componentListNew[props.setIndex].map(elem => elem.name);

    const selectDataComponent = (objList: {name: string, value: string | JSX.Element | undefined}[]) =>
    (dataUsed: string): string | JSX.Element | undefined => {

        let [dataSelected] = objList.filter(elem => dataUsed === elem.name)

        return dataSelected?.value || ""
    };

    const selectGraphComponent = (objList: {name: string, value: string | JSX.Element | undefined, graph?: JSX.Element | undefined}[]) =>
    (dataUsed: string): JSX.Element | undefined => {

        let [dataSelected] = objList.filter(elem => dataUsed === elem.name)

        return dataSelected?.graph
    };

    const selectGraph = selectGraphComponent(componentListNew[props.setIndex]);
    const selectData = selectDataComponent(componentListNew[props.setIndex]);


    return (

        <div>  
            <SegmentedControl
                    fullWidth 
                    orientation="vertical"
                    value={value}
                    onChange={setValue}
                    data={dataList}
            />
            
            {
                (value === "Data Sources")
                    ? selectData(value)
                    : <Code onCopy={e => citeCopy(e, cite)} style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
                        
                        {selectData(value)}
                    </Code>
            }
            {selectGraph(value)}
        </div>
        
    );
}
