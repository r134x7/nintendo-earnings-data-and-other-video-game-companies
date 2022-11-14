import { useState } from "react";
import { Code, SegmentedControl, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { softwareSalesList } from "../data/bandaiNamco/software_sales_bandai_namco";
import { annualReportList } from "../data/bandaiNamco/annual_report_bandai_namco";
import { dataSourcesList } from "../data/bandaiNamco/Data_Sources/data_sources_full_list";

export default function BANDAI_NAMCO_COMPONENT(props: {setIndex: number; yearLength: number}) {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    const annualReportListAltered = [""].concat(annualReportList); // to manage keeping the index values the same with softwareSalesList

    const componentListNew = Array.from({length: props.yearLength}, (elem, index) => {

        return [
            { 
                name: "Data Sources",
                value: dataSourcesList[index]? dataSourcesList[index] : undefined,
            },
            {
                name: "Software Sales",
                value: softwareSalesList[index]? softwareSalesList[index] : undefined,
            },
            {
                name: "FY Series IP",
                value: annualReportListAltered[index]? annualReportListAltered[index] : undefined,
            },
        ].filter(elem => elem.value !== undefined);
    })

    const dataList = componentListNew[props.setIndex].map(elem => elem.name);

    const selectDataComponent = (objList: {name: string, value: string | JSX.Element | undefined}[]) =>
    (dataUsed: string): string | JSX.Element | undefined => {

        let [dataSelected] = objList.filter(elem => dataUsed === elem.name)

        return (dataSelected) ? dataSelected.value : ""
    };

    const selectData = selectDataComponent(componentListNew[props.setIndex]);


    return (

        <div>  
            <SegmentedControl
                    fullWidth 
                    orientation="vertical"
                    value={value}
                    onChange={setValue}
                    data={dataList}
            />
            
            {
                (value === "Data Sources")
                    ? selectData(value)
                    : <Code style={{backgroundColor: `${state.colour}`}} block>{selectData(value)}</Code>
            }
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
        
    );
}
