import { useState } from "react";
import { Code, SegmentedControl, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { segaSammySalesPerSoftwareUnitCml } from "../../data/generalTables/sales_per_software_unit_cml";
import { cumulativeEarningsListSegaSammy } from "../../data/generalTables/consolidated_earnings_cml_data";
import { fyTitlesSegaSammy } from "../../data/sega/annual_report_cml_sega_data";
import { softwareCumulativeSegaSammy } from "../../data/sega/software_units_sega_cml_data";

import {cite, citeCopy} from "../../utils/copySetCitation";

export default function SEGA_CML() {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

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
            value: softwareCumulativeSegaSammy
        },
        {
            name: "Sega Sammy FY Series IP - Cumulative",
            value: fyTitlesSegaSammy
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
            
            <Code onCopy={e => citeCopy(e, cite)} style={{backgroundColor: `${state.colour}`, fontFamily: "monospace"}} block>
                {selectData(value)}
                </Code>
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
    );
}
