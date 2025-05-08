import { useState, useEffect } from "react";
import { Code, SegmentedControl, Space, Select, TextInput, Button } from "@mantine/core";
import { useSelector } from "react-redux";
import { cumulativeSegmentListKonami } from "../../data/generalTables/segment_earnings_general_cml_data";
import { cumulativeEarningsListKonami } from "../../data/generalTables/consolidated_earnings_cml_data";
import { konamiAnnualReportCml } from "../../data/generalTables/annual_report_cumulative";
import { printTextBlock, liner, type titleSet } from "../../utils/table_design_logic";
import type { BackgroundColours } from "../../features/backgroundReducer";

import {cite, citeCopy} from "../../utils/copySetCitation";
import { filterTitles } from "../../utils/table_design_logic";

export default function KONAMI_CML() {

    const [value, setValue] = useState("");

    const stateColour = useSelector((state: BackgroundColours) => state.colour);
    const stateFontColor = useSelector((state: BackgroundColours) => state.fontColor);

    const [titleValue, setTitleValue] = useState("");
    const [titlesLength, setTitlesLength] = useState(0)

    const [timePeriod, setTimePeriod] = useState(6);
    const [timePeriodValue, setTimePeriodValue] = useState<string | null>("FY Cumulative" ?? "FY Cumulative");

    let filterAnnualReportTitles = filterTitles<titleSet>(konamiAnnualReportCml.titleList, titleValue);

    let predictText = new Set<string>();

    if (titleValue.length !== 0 && value === "Konami FY Series IP - Cumulative") {
            filterAnnualReportTitles.map(elem => [...elem.title.toLowerCase().matchAll(new RegExp(`(?=\\w*${titleValue})\\w+`,"g"))].flat().map(setValue => predictText.add(setValue)))
    }

    let annualReportTitlesReduce = filterAnnualReportTitles.reduce((acc, next) => acc + next.table,"");

    let completeAnnualReportList = konamiAnnualReportCml.header + annualReportTitlesReduce + konamiAnnualReportCml.footnotes;

    console.log(konamiAnnualReportCml.footnotes);
    

    const textInputValues = [
        {
           value: "Konami FY Series IP - Cumulative",
           placeholder: "Search specific series",
           label: `Series Search - Number of game series shown: ${titlesLength}`,
           description: "Clear field to show all game series listed.", 
        },
    ].filter(elem => elem.value === value);

    useEffect(() => {

        switch (value) {
            case "Konami Consolidated Operating Results - Cumulative":
                if (timePeriodValue === "1st Quarter") {
                    setTimePeriod(0)
                } else if (timePeriodValue === "2nd Quarter") {
                    setTimePeriod(1)
                } else if (timePeriodValue === "3rd Quarter") {
                    setTimePeriod(2)
                } else if (timePeriodValue === "4th Quarter") {
                    setTimePeriod(3)
                } else if (timePeriodValue === "First Half") {
                    setTimePeriod(4)
                } else if (timePeriodValue === "First Three Quarters") {
                    setTimePeriod(5)
                } else if (timePeriodValue === "FY Cumulative") {
                    setTimePeriod(6)
                } else {
                    setTimePeriod(6)
                }
                break;

            case "Konami Segment Information - Cumulative":
                if (timePeriodValue === "1st Quarter") {
                    setTimePeriod(0)
                } else if (timePeriodValue === "2nd Quarter") {
                    setTimePeriod(1)
                } else if (timePeriodValue === "3rd Quarter") {
                    setTimePeriod(2)
                } else if (timePeriodValue === "4th Quarter") {
                    setTimePeriod(3)
                } else if (timePeriodValue === "First Half") {
                    setTimePeriod(4)
                } else if (timePeriodValue === "First Three Quarters") {
                    setTimePeriod(5)
                } else if (timePeriodValue === "FY Cumulative") {
                    setTimePeriod(6)
                } else {
                    setTimePeriod(6)
                }
                break;

            case "Konami FY Series IP - Cumulative":
                setTitlesLength(filterAnnualReportTitles.length)
                break;

            default:
                break;
        }

    }, [titleValue, value, timePeriodValue])

    const componentList = [
        {
            name: "Konami Consolidated Operating Results - Cumulative",
            value: cumulativeEarningsListKonami[timePeriod]
        },
        {
            name: "Konami Segment Information - Cumulative",
            value: cumulativeSegmentListKonami[timePeriod]
        },
        {
            name: "Konami FY Series IP - Cumulative",
            value: completeAnnualReportList
        },
    ];

    const dataList = componentList.map(elem => elem.name);

    const selectDataComponent = (objList: {name: string, value: string}[]) =>
    (dataUsed: string): string => {

        let [dataSelected] = objList.filter(elem => dataUsed === elem.name)

        return (dataSelected) ? dataSelected.value : ""
    };

    const selectData = selectDataComponent(componentList);

    return (

        <div>  
            <SegmentedControl
                    fullWidth 
                    orientation="vertical"
                    value={value}
                    onChange={setValue}
                    data={dataList}
            />
            
            <Code onCopy={e => citeCopy(e, cite)} style={{backgroundColor:`${stateColour}`, color:(stateFontColor === "dark") ? "#fff" : "#000000"}} block>
                {(value === "Konami Consolidated Operating Results - Cumulative" || value === "Konami Segment Information - Cumulative")
                    ? <Select
                        data={[
                         "1st Quarter",
                         "2nd Quarter",
                         "3rd Quarter",
                         "4th Quarter",
                         "First Half",
                         "First Three Quarters",
                         "FY Cumulative",
                     ]}
                    defaultValue={"FY Cumulative"} 
                    label="Select a time period:"
                    radius="xl"
                    value={timePeriodValue}
                    onChange={setTimePeriodValue}
                  /> 
                    : undefined
                }
                {(value === "Konami FY Series IP - Cumulative")
                    ? <> 
                    <TextInput
                    placeholder={textInputValues[0].placeholder}
                    label={textInputValues[0].label}
                    description={textInputValues[0].description}
                    radius="xl"
                    value={titleValue}
                    onChange={e => {
                        setTitleValue(e.target.value.toLowerCase())
                    }}
                    />  
                    {(predictText.size > 0 && titleValue !== predictText.values().next().value) ? liner(printTextBlock("Nearest single word search: (To use, click on a word)",40),"−","both",true,40) : undefined }
                    { (predictText.size > 0 && titleValue !== predictText.values().next().value)
                    ? [...predictText].flatMap((elem, index) => {
                        if (index > 3) {
                            return []
                        } else {
                            return <Button 
                            key={elem}
                            onClick={() => setTitleValue(elem)}
                            radius={"xl"}
                            ml={"sm"} mb={"sm"} variant="subtle" compact>
                                <Code style={{border:"solid", borderWidth:"1px", borderRadius:"16px", backgroundColor:`${stateColour}`, color:(stateFontColor === "dark") ? "#fff" : "#000000"}} >
                                    {elem}
                                </Code>
                            </Button>
                        }
                        })
                    : (titleValue === predictText.values().next().value || titlesLength === 0) 
                    ? <Button 
                            onClick={() => setTitleValue("")}
                            radius={"xl"}
                            m={"sm"} variant="subtle" compact>
                                <Code style={{border:"solid", borderWidth:"1px", borderRadius:"16px", backgroundColor:`${stateColour}`, color:(stateFontColor === "dark") ? "#fff" : "#000000"}} >
                                    {"Clear Search"}
                                </Code>
                            </Button> 
                    : undefined
                    }
                    <br/>
                    </>  
                    : undefined
                }
                {selectData(value)}
                </Code>
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
    );
}
