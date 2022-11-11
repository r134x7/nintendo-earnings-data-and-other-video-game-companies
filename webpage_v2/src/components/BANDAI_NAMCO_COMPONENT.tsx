import { useState } from "react";
import { Code, SegmentedControl, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { softwareSalesList } from "../data/bandaiNamco/software_sales_bandai_namco";
import { annualReportList } from "../data/bandaiNamco/annual_report_bandai_namco";
import { dataSourcesList } from "../data/bandaiNamco/Data_Sources/data_sources_full_list";

export default function BANDAI_NAMCO_COMPONENT(props: {setIndex: number}) {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    const annualReportListAltered = ["0 index === FY3/2023"].concat(annualReportList); // to manage keeping the index values the same with softwareSalesList

    // 0 index is the latest year of data
    const componentList = [
        [
            { // reminder, need to index Data Sources as well to manage scale
                name: "Data Sources",
                value: dataSourcesList[0],
            },
            {
                name: "Software Sales",
                value: softwareSalesList[0],
            },
            // {
            //     name: "FY Series IP",
            //     value: annualReportListAltered[0]
            // }
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
            {
                name: "FY Series IP",
                value: annualReportListAltered[1]
            }
        ],
        [
            {
                name: "Data Sources",
                value: dataSourcesList[2],
            },
            // {
            //     name: "Software Sales",
            //     value: softwareSalesList[2],
            // },
            {
                name: "FY Series IP",
                value: annualReportListAltered[2]
            }
        ],
        [
            {
                name: "Data Sources",
                value: dataSourcesList[3],
            },
            // {
            //     name: "Software Sales",
            //     value: softwareSalesList[3],
            // },
            {
                name: "FY Series IP",
                value: annualReportListAltered[3]
            }
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
