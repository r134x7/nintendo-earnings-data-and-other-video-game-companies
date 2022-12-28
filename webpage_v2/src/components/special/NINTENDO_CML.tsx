import { useState } from "react";
import { Code, SegmentedControl, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { printJapan, printGlobal, printOverseas } from "../../data/nintendo/Nintendo_Cumulative_Data/mst_cml_data";
import { cumulativeEarningsList } from "../../data/nintendo/Nintendo_Cumulative_Data/consolidated_earnings_cml_data";
import { printGlobalHardwareSoftware } from "../../data/nintendo/Nintendo_Cumulative_Data/global_hardware_software_cml_data";
import { printJapanHardwareSoftware, printAmericasHardwareSoftware, printEuropeHardwareSoftware, printOtherHardwareSoftware } from "../../data/nintendo/Nintendo_Cumulative_Data/regional_hardware_software_cml_data";

export default function NINTENDO_CML() {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    const componentList = [
        {
            name: "Nintendo Consolidated Operating Results - Historical Data",
            value: cumulativeEarningsList
        },
        {
            name: "Nintendo Hardware/Software Historical Data - Global",
            value: printGlobalHardwareSoftware
        },
        {
            name: "Nintendo Hardware/Software Historical Data - Japan",
            value: printJapanHardwareSoftware
        },
        {
            name: "Nintendo Hardware/Software Historical Data - The Americas",
            value: printAmericasHardwareSoftware
        },
        {
            name: "Nintendo Hardware/Software Historical Data - Europe",
            value: printEuropeHardwareSoftware 
        },
        {
            name: "Nintendo Hardware/Software Historical Data - Other",
            value: printOtherHardwareSoftware 
        },
        {
            name: "Nintendo FY Million-Seller Titles - Japan",
            value: printJapan 
        },
        {
            name: "Nintendo FY Million-Seller Titles - Overseas",
            value: printOverseas, 
        },
        {
            name: "Nintendo FY Million-Seller Titles - Global",
            value: printGlobal,
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
            
            <Code style={{backgroundColor: `${state.colour}`}} block>
                {selectData(value)}
                </Code>
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
    );
}
