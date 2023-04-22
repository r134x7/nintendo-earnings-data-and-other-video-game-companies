import { useEffect, useState } from "react";
import { Code, SegmentedControl, Space, TextInput, Select, Button } from "@mantine/core";
import { useSelector } from "react-redux";
import { segaSammySalesPerSoftwareUnitCml } from "../../data/generalTables/sales_per_software_unit_cml";
import { cumulativeEarningsListSegaSammy } from "../../data/generalTables/consolidated_earnings_cml_data";
import { fyTitlesSegaSammy } from "../../data/sega/annual_report_cml_sega_data";
import { softwareCumulativeSegaSammy } from "../../data/sega/software_units_sega_cml_data";
import type { searchTitles } from "../../data/capcom/platinum_titles_Capcom";
import type { titleSet } from "../../data/capcom/game_series_sales_capcom_cml_data";
import { filterTitles } from "../../utils/table_design_logic";
import { printTextBlock, liner } from "../../utils/table_design_logic";

import {cite, citeCopy} from "../../utils/copySetCitation";

export default function SEGA_CML() {

    const [value, setValue] = useState("");

    const [titleValue, setTitleValue] = useState("");
    const [titlesLength, setTitlesLength] = useState(0)
    const [platformValue, setPlatformValue] = useState<string | null>("All" ?? "All");

    const state: any = useSelector(state => state);

    let filteredIPType = fyTitlesSegaSammy.titleData.filter(elem => {
        if (platformValue === "All") {
            return elem
        } else if (platformValue === elem.platforms) {
            return elem
        }
    })

    let filterSoftwareCumulative = filterTitles<titleSet>(softwareCumulativeSegaSammy.titleList, titleValue);

    let filterIPTypeTitles = filterTitles<searchTitles>(filteredIPType, titleValue);

    let predictText = new Set<string>();

    if (titleValue.length !== 0 && value === "Sega Sammy Software Units - Cumulative") {
        filterSoftwareCumulative.map(elem => [...elem.title.toLowerCase().matchAll(new RegExp(`(?=\\w*${titleValue})\\w+`,"g"))].flat().map(setValue => predictText.add(setValue)))
    } else if (titleValue.length !== 0 && value === "Sega Sammy FY Series IP - Cumulative") {
        filterIPTypeTitles.map(elem => [...elem.title.toLowerCase().matchAll(new RegExp(`(?=\\w*${titleValue})\\w+`,"g"))].flat().map(setValue => predictText.add(setValue)))
    }

    let softwareCumulativeReduce = filterSoftwareCumulative.reduce((acc, next) => acc + next.table,"");

    let softwareCumulativeList = softwareCumulativeSegaSammy.header + softwareCumulativeReduce;

    let IPTypeReduce = filterIPTypeTitles.reduce((acc, next) => acc + next.table,"");

    let IPTypeList = fyTitlesSegaSammy.header + IPTypeReduce;

    const textInputValues = [
        {
           value: "Sega Sammy Software Units - Cumulative",
           placeholder: "Search specific titles or game series",
           label: `Title/Series Search - Number of Titles/Series shown: ${titlesLength}`,
           description: "Clear field to show all titles of the selected platform", 
        },
        {
           value: "Sega Sammy FY Series IP - Cumulative",
           placeholder: "Search specific series",
           label: `Series Search - Number of game series shown: ${titlesLength}`,
           description: "Clear field to show all game series listed.", 
        },
    ].filter(elem => elem.value === value);
    
    useEffect(() => {

        switch (value) {
            case "Sega Sammy Software Units - Cumulative":
                setTitlesLength(filterSoftwareCumulative.length)
                break;

            case "Sega Sammy FY Series IP - Cumulative":
                setTitlesLength(filterIPTypeTitles.length)
                break;
        
            default:
                break;
        }

    }, [titleValue, value, platformValue])

    const componentList = [
        {
            name: "Sega Sammy Consolidated Operating Results - Cumulative",
            value: cumulativeEarningsListSegaSammy
        },
        {
            name: "Sega Sammy Sales Per Software Unit - Cumulative",
            value: segaSammySalesPerSoftwareUnitCml 
        },
        {
            name: "Sega Sammy Software Units - Cumulative",
            // value: softwareCumulativeSegaSammy
            value: softwareCumulativeList
        },
        {
            name: "Sega Sammy FY Series IP - Cumulative",
            // value: fyTitlesSegaSammy
            value: IPTypeList
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
            
            <Code onCopy={e => citeCopy(e, cite)} style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
                {(value === "Sega Sammy FY Series IP - Cumulative")
                    ? <Select
                        data={[
                         "All",
                         "Developed in-house IP",
                         "Acquired IP",
                         "Licensed third party IP",
                     ]}
                    defaultValue={"All"} 
                    label="Select all or one IP Type:"
                    radius="xl"
                    value={platformValue}
                    onChange={setPlatformValue}
                  /> 
                    : undefined
                }
                {(value === "Sega Sammy Software Units - Cumulative" || value === "Sega Sammy FY Series IP - Cumulative")
                    ? <>
                    <TextInput
                    placeholder={textInputValues[0].placeholder}
                    label={textInputValues[0].label}
                    description={textInputValues[0].description}
                    radius="xl"
                    value={titleValue}
                    onChange={e => {
                        setTitleValue(e.target.value)
                    }}
                    />  
                    {(predictText.size > 0 && titleValue !== predictText.values().next().value) ? liner(printTextBlock("Nearest single word search: (To use, click on a word)",40),"−","both",true,40) : undefined }
                    { (predictText.size > 0 && titleValue !== predictText.values().next().value)
                    ? [...predictText].flatMap((elem, index) => {
                        if (index > 4) {
                            return []
                        } else {
                            return <Button 
                            key={elem}
                            onClick={() => setTitleValue(elem)}
                            radius={"xl"}
                            ml={"sm"} mb={"sm"} variant="subtle" compact>
                                <Code style={{border:"solid", borderWidth:"1px", borderRadius:"16px", backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} >
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
                                <Code style={{border:"solid", borderWidth:"1px", borderRadius:"16px", backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} >
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
