import { useState, useEffect } from "react";
import { Code, SegmentedControl, Space, Select } from "@mantine/core";
import { useSelector } from "react-redux";
import { koeiTecmoSalesPerSoftwareUnitCml } from "../../data/generalTables/sales_per_software_unit_cml";
import { cumulativeSegmentListKoeiTecmo } from "../../data/generalTables/segment_earnings_general_cml_data";
import { cumulativeEarningsListKoeiTecmo } from "../../data/generalTables/consolidated_earnings_cml_data";
import type { BackgroundColours } from "../../features/backgroundReducer";

import {cite, citeCopy} from "../../utils/copySetCitation";

export default function KOEI_TECMO_CML() {

    const [value, setValue] = useState("");

    const [timePeriod, setTimePeriod] = useState(6);
    const [timePeriodValue, setTimePeriodValue] = useState<string | null>("FY Cumulative" ?? "FY Cumulative");

    const stateColour = useSelector((state: BackgroundColours) => state.colour);
    const stateFontColor = useSelector((state: BackgroundColours) => state.fontColor);

    useEffect(() => {

        switch (value) {
            case "Koei Tecmo Consolidated Operating Results - Cumulative":
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

            case "Koei Tecmo Segment Information - Cumulative":
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

            case "Koei Tecmo Sales Per Software Unit - Cumulative":
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

            default:
                break;
        }

    }, [value, timePeriodValue])

    const componentList = [
        {
            name: "Koei Tecmo Consolidated Operating Results - Cumulative",
            value: cumulativeEarningsListKoeiTecmo[timePeriod]
        },
        {
            name: "Koei Tecmo Segment Information - Cumulative",
            value: cumulativeSegmentListKoeiTecmo[timePeriod]
        },
        {
            name: "Koei Tecmo Sales Per Software Unit - Cumulative",
            value: koeiTecmoSalesPerSoftwareUnitCml[timePeriod] 
            // value: "Nothing"
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
                {(value === "Koei Tecmo Consolidated Operating Results - Cumulative" || value === "Koei Tecmo Sales Per Software Unit - Cumulative" || value === "Koei Tecmo Segment Information - Cumulative")
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
                {selectData(value)}
                </Code>
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
    );
}
