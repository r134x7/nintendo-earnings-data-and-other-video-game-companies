import { useState } from "react";
import { Code, SegmentedControl, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { printSpecialList } from "../../data/capcom/platinum_titles_Capcom";
import { CapcomSalesPerSoftwareUnitCml } from "../../data/generalTables/sales_per_software_unit_cml";
import { cumulativeEarningsListCapcom } from "../../data/generalTables/consolidated_earnings_cml_data";
import { fyTitlesCapcom } from "../../data/capcom/game_series_sales_capcom_cml_data";
import { factBookCapcom } from "../../data/capcom/software_shipments_capcom_cml_data";

import {cite, citeCopy} from "../../utils/copySetCitation";

export default function CAPCOM_CML() {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    const componentList = [
        {
            name: "Capcom Consolidated Financial Results - Cumulative",
            value: cumulativeEarningsListCapcom
        },
        {
            name: "Capcom Platinum Titles - Cumulative",
            value: printSpecialList 
        },
        {
            name: "Capcom Sales Per Software Unit - Cumulative",
            value: CapcomSalesPerSoftwareUnitCml
        },
        {
            name: "Capcom Software Platform Shipments - Cumulative",
            value: factBookCapcom 
        },
        {
            name: "Capcom FY Game Series - Cumulative",
            value: fyTitlesCapcom
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
            
            <Code onCopy={e => citeCopy(e, cite)} style={{backgroundColor: `${state.colour}`}} block>
                {selectData(value)}
                </Code>
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
    );
}
