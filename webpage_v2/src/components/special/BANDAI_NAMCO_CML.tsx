import { useState } from "react";
import { Code, SegmentedControl, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { bandaiNamcoSalesPerSoftwareUnitCml } from "../../data/generalTables/sales_per_software_unit_cml";

import {cite, citeCopy} from "../../utils/copySetCitation";

export default function BANDAI_NAMCO_CML() {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    const componentList = [
        {
            name: "Bandai Namco Sales Per Software Unit - Cumulative",
            value: bandaiNamcoSalesPerSoftwareUnitCml
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
