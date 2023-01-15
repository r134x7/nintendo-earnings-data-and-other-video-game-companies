import { useState } from "react";
import { Code, SegmentedControl, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { squareEnixSalesPerSoftwareUnitCml } from "../../data/generalTables/sales_per_software_unit_cml";
import { cumulativeEarningsListSquareEnix } from "../../data/generalTables/consolidated_earnings_cml_data";
import { fyTitlesSquareEnix } from "../../data/generalTables/annual_report_cml_data";

import {cite, citeCopy} from "../../utils/copySetCitation";

export default function SQUARE_ENIX_CML() {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    const componentList = [
        {
            name: "Square Enix Consolidated Financial Results - Cumulative",
            value: cumulativeEarningsListSquareEnix 
        },
        {
            name: "Square Enix Sales Per Software Unit - Cumulative",
            value: squareEnixSalesPerSoftwareUnitCml
        },
        {
            name: "Square Enix FY Series IP - Cumulative",
            value: fyTitlesSquareEnix
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
