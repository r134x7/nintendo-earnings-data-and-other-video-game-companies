import { useState, useEffect } from "react";
import { Code, SegmentedControl, Space, TextInput, Button } from "@mantine/core";
import { useSelector } from "react-redux";
import { bandaiNamcoSalesPerSoftwareUnitCml } from "../../data/generalTables/sales_per_software_unit_cml";
import { cumulativeEarningsListBandaiNamco } from "../../data/generalTables/consolidated_earnings_cml_data";
import { fyTitlesBandaiNamco } from "../../data/generalTables/annual_report_cml_data";
import { printTextBlock, liner } from "../../utils/table_design_logic";

import {cite, citeCopy} from "../../utils/copySetCitation";
import { filterTitles } from "../../utils/table_design_logic";
import { titleSet } from "../../data/capcom/game_series_sales_capcom_cml_data";

export default function BANDAI_NAMCO_CML() {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    const [titleValue, setTitleValue] = useState("");
    const [titlesLength, setTitlesLength] = useState(0)

    let annualReportTitlesFilter = filterTitles<titleSet>(fyTitlesBandaiNamco.titleList,titleValue);

    let predictText = new Set<string>();

    if (titleValue.length !== 0 && value === "Bandai Namco FY Series IP - Cumulative") {
            annualReportTitlesFilter.map(elem => [...elem.title.toLowerCase().matchAll(new RegExp(`(?=\\w*${titleValue})\\w+`,"g"))].flat().map(setValue => predictText.add(setValue)))
    }

    let annualReportTitlesReduce = annualReportTitlesFilter.reduce((acc, next) => acc + next.table,"");

    let completeAnnualReportList = fyTitlesBandaiNamco.header + annualReportTitlesReduce;

    const textInputValues = [
        {
           value: "Bandai Namco FY Series IP - Cumulative",
           placeholder: "Search specific series",
           label: `Series Search - Number of game series shown: ${titlesLength}`,
           description: "Clear field to show all game series listed.", 
        },
    ].filter(elem => elem.value === value);
    
    useEffect(() => {

        switch (value) {
            case "Bandai Namco FY Series IP - Cumulative":
                setTitlesLength(annualReportTitlesFilter.length)
                break;

            default:
                break;
        }

    }, [titleValue, value])


    const componentList = [
        {
            name: "Bandai Namco Consolidated Operating Results - Cumulative",
            value: cumulativeEarningsListBandaiNamco
        },
        {
            name: "Bandai Namco Sales Per Software Unit - Cumulative",
            value: bandaiNamcoSalesPerSoftwareUnitCml
        },
        {
            name: "Bandai Namco FY Series IP - Cumulative",
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
            
            <Code  onCopy={e => citeCopy(e, cite)} style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
                {(value === "Bandai Namco FY Series IP - Cumulative")
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
