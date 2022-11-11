import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Space, Card } from "@mantine/core";
import { useSelector } from "react-redux";
import { softwareSalesList } from "../data/koeiTecmo/software_sales_koei_tecmo";
import { dataSourcesList } from "../data/koeiTecmo/Data_Sources/data_sources_full_list";

export default function KOEI_TECMO_COMPONENT(props: {setIndex: number}) {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    // 0 index is the latest year of data
    const componentList = [
        [
            { 
                name: "Data Sources",
                value: dataSourcesList[0],
            },
            {
                name: "Software Sales",
                value: softwareSalesList[0],
            },
        ],
        [
            {
                name: "Data Sources",
                value: dataSourcesList[1],
            },
            {
                name: "Software Sales",
                value: softwareSalesList[1],
            },
        ],
        [
            {
                name: "Data Sources",
                value: dataSourcesList[2],
            },
            {
                name: "Software Sales",
                value: softwareSalesList[2],
            },
        ],
    ];


    const dataList = componentList[props.setIndex].map(elem => elem.name);

    const selectDataComponent = (objList: {name: string, value: string | JSX.Element}[]) =>
    (dataUsed: string): string | JSX.Element => {

        let [dataSelected] = objList.filter(elem => dataUsed === elem.name)

        return (dataSelected) ? dataSelected.value : ""
    };

    const selectData = selectDataComponent(componentList[props.setIndex]);
    return (

        <div>  
            <SegmentedControl
                    fullWidth 
                    orientation="vertical"
                    value={value}
                    onChange={setValue}
                    data={dataList}
            />
            
            <Code style={{backgroundColor: `${state.colour}`}} block>{selectData(value)}</Code>
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
        
    );
}
