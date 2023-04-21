import { useEffect, useState } from "react";
import { Code, SegmentedControl, Select, TextInput } from "@mantine/core";
import { useSelector } from "react-redux";
import { segaSoftwareUnitsList, segaSoftwareUnitsGraphList } from "../data/sega/software_units_sega"
import { softwareSalesList, softwareSalesGraphList } from "../data/sega/software_sales_sega";
import { annualReportList } from "../data/sega/annual_report_sega";
import { segaConsolidatedEarningsList, segaConsolidatedEarningsGraphList } from "../data/generalTables/consolidated_earnings_general";
import { segaLinks } from "../data/generalTables/data_sources_general";
import type { searchTitles } from "../data/capcom/platinum_titles_Capcom";
import type { titleSet } from "../data/capcom/game_series_sales_capcom_cml_data";

import GRAPH_SOFTWARE_SALES from "../data/generalGraphs/GRAPH_SOFTWARE_SALES";
import GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE from "../data/nintendo/Graphs/GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE";
import GRAPH_CONSOLIDATED_EARNINGS from "../data/generalGraphs/GRAPH_CONSOLIDATED_EARNINGS";

import {cite, citeCopy} from "../utils/copySetCitation";

export default function SEGA_COMPONENT(props: {setIndex: number; yearLength: number}) {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    const [titleValue, setTitleValue] = useState("");
    const [titlesLength, setTitlesLength] = useState(0);
    const [platformValue, setPlatformValue] = useState<string | null>("All" ?? "All");

    let annualReportListFiltered = Array.from({length:annualReportList.length},(v,i) => {
    // due to altering the list later, the list is offset by +1, apply props.setIndex-1 
        return (i === props.setIndex-1)
            ? annualReportList[i].titleData.filter(elem => {
                if (platformValue === "All") {
                    return elem
                } else if (platformValue === elem.platforms) {
                    return elem
                }
            })
            : annualReportList[i].titleData
    })

    function filterTitles<T extends searchTitles | titleSet>(input: T[]) {

        return input.filter(elem => (titleValue === "") ? elem : elem.title.toLowerCase().includes(titleValue.toLowerCase()))
    }

    let annualReportIPTypes = new Set<string>();

    // due to altering the list later, the list is offset by +1, apply props.setIndex-1 
    annualReportList?.[props.setIndex-1]?.titleData.map(elem => annualReportIPTypes.add(elem.platforms));

    let annualReportTitlesFilter = annualReportListFiltered.map(elem => filterTitles<searchTitles>(elem))

    let annualReportReduce = annualReportTitlesFilter.map(elem => elem.reduce((acc,next) => acc + next.table,""));

    let completeAnnualReportList = annualReportReduce.map((elem, index) => annualReportList[index].header + elem);

    const annualReportListAltered = [""].concat(completeAnnualReportList); // to manage keeping the index values the same with softwareSalesList

    const textInputValues = [
        {
           value: "Software Units",
           placeholder: "Search specific titles or game series",
           label: `Title/Series Search - Number of Titles/Series shown: ${titlesLength}`,
           description: "Clear field to show all titles of the selected platform", 
        },
        {
           value: "FY Series IP",
           placeholder: "Search specific series",
           label: `Series Search - Number of game series shown: ${titlesLength}`,
           description: "Clear field to show all game series listed.", 
        },
    ].filter(elem => elem.value === value);

    useEffect(() => {

        switch (value) {
            case "FY Series IP":
                // due to altering the list later, the list is offset by +1, apply props.setIndex-1 
                setTitlesLength(annualReportTitlesFilter?.[props.setIndex-1]?.length ?? 0)
                break;

            case "Software Units":
                // setTitlesLength(annualReportTitlesFilter?.[props.setIndex]?.length ?? 0)
                break;
        
            default:
                break;
        }

    }, [value, titleValue, platformValue])

    const componentListNew = Array.from({length: props.yearLength}, (elem, index) => {

        return [
            { 
                name: "Data Sources",
                value: segaLinks?.[index],
            },
            {
                name: "Consolidated Operating Results",
                value: segaConsolidatedEarningsList?.[index],
                graph: <GRAPH_CONSOLIDATED_EARNINGS setData={segaConsolidatedEarningsGraphList[index]} />
            },
            {
                name: "Software Sales",
                value: softwareSalesList?.[index],
                graph: <GRAPH_SOFTWARE_SALES setData={softwareSalesGraphList[index]} />
            },
            {
                name: "Software Units",
                value: segaSoftwareUnitsList?.[index],
                graph: <GRAPH_NINTENDO_GLOBAL_HARDWARE_SOFTWARE_MOBILE setData={segaSoftwareUnitsGraphList[index]} />
            },
            {
                name: "FY Series IP",
                value: annualReportListAltered[index] ? annualReportListAltered[index] : undefined, // can't use optional chaining on falsy values i.e. ""
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
                        {(value === "FY Series IP")
                            ? <Select
                                data={[
                                 "All",
                             ].concat([...annualReportIPTypes])}
                            defaultValue={"All"} 
                            label="Select all or one IP Type:"
                            radius="xl"
                            value={platformValue}
                            onChange={setPlatformValue}
                          /> 
                            : undefined
                        }
                        {(value === "FY Series IP" || value === "Software Units")
                            ? <TextInput
                            placeholder={textInputValues[0].placeholder}
                            label={textInputValues[0].label}
                            description={textInputValues[0].description}
                            radius="xl"
                            value={titleValue}
                            onChange={e => {
                                setTitleValue(e.target.value)
                            }}
                            />  
                            : undefined
                        }
                        {selectData(value)}
                    </Code>
            }
            {selectGraph(value)}
        </div>
        
    );
}
