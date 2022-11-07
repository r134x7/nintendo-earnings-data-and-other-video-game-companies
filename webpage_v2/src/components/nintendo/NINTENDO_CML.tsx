import { useState } from "react";
import { Code, SegmentedControl, Space } from "@mantine/core";
import { useSelector } from "react-redux";
// import { printJapan, printGlobal, printOverseas } from "../../data/nintendo/Nintendo_Cumulative_Data/mst_cml_data";

export default function NINTENDO_CML() {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    // const fyMillionSellersJapan = printJapan;
    // const fyMillionSellersOverseas = printOverseas;
    // const fyMillionSellersGlobal = printGlobal;

    const printJapan = "Data unavailable at this time";
    const printOverseas = "Data unavailable at this time";
    const printGlobal = "Data unavailable at this time";

    const componentList = [
        {
            name: "Nintendo Switch FY Million-Seller Titles - Japan",
            value: printJapan 
        },
        {
            name: "Nintendo Switch FY Million-Seller Titles - Overseas",
            value: printOverseas, 
        },
        {
            name: "Nintendo Switch FY Million-Seller Titles - Global",
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
