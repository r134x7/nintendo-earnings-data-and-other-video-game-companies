import { useState } from "react";
import { Code, SegmentedControl, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { otherTest } from "../data/squareEnix/Square_Enix_FY3_2023/software_sales_fy3_2023";
import { 
    Data_Sources_FY3_2010,
    Data_Sources_FY3_2011,
    Data_Sources_FY3_2012,
    Data_Sources_FY3_2013,
    Data_Sources_FY3_2014,
    Data_Sources_FY3_2015,
    Data_Sources_FY3_2016,
    Data_Sources_FY3_2017,
    Data_Sources_FY3_2018,
    Data_Sources_FY3_2019,
    Data_Sources_FY3_2020,
    Data_Sources_FY3_2021,
    Data_Sources_FY3_2022,
    Data_Sources_FY3_2023,
} from "../data/squareEnix/Data_Sources/data_sources_full_list";

export default function SQUARE_ENIX_COMPONENT(props: {setIndex: number}) {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    const componentList = [
        [
            {
                name: "Data Sources",
                value: Data_Sources_FY3_2023,
            },
            {
                name: "Software Sales",
                value: otherTest[0],
            },
        ],
        [
            {
                name: "Data Sources",
                value: Data_Sources_FY3_2022,
            },
            {
                name: "Software Sales",
                value: otherTest[1],
            },
        ],
        [
            {
                name: "Data Sources",
                value: Data_Sources_FY3_2021,
            },
            {
                name: "Software Sales",
                value: otherTest[2],
            },
        ],
        [
            {
                name: "Data Sources",
                value: Data_Sources_FY3_2020,
            },
            {
                name: "Software Sales",
                value: otherTest[3],
            },
        ],
        [
            {
                name: "Data Sources",
                value: Data_Sources_FY3_2019,
            },
            // {
            //     name: "Software Sales",
            //     value: otherTest[4],
            // },
        ],
        [
            {
                name: "Data Sources",
                value: Data_Sources_FY3_2018,
            },
            // {
            //     name: "Software Sales",
            //     value: otherTest[4],
            // },
        ],
        [
            {
                name: "Data Sources",
                value: Data_Sources_FY3_2017,
            },
            // {
            //     name: "Software Sales",
            //     value: otherTest[4],
            // },
        ],
        [
            {
                name: "Data Sources",
                value: Data_Sources_FY3_2016,
            },
            // {
            //     name: "Software Sales",
            //     value: otherTest[4],
            // },
        ],
        [
            {
                name: "Data Sources",
                value: Data_Sources_FY3_2015,
            },
            // {
            //     name: "Software Sales",
            //     value: otherTest[4],
            // },
        ],
        [
            {
                name: "Data Sources",
                value: Data_Sources_FY3_2014,
            },
            // {
            //     name: "Software Sales",
            //     value: otherTest[4],
            // },
        ],
        [
            {
                name: "Data Sources",
                value: Data_Sources_FY3_2013,
            },
            // {
            //     name: "Software Sales",
            //     value: otherTest[4],
            // },
        ],
        [
            {
                name: "Data Sources",
                value: Data_Sources_FY3_2012,
            },
            // {
            //     name: "Software Sales",
            //     value: otherTest[4],
            // },
        ],
        [
            {
                name: "Data Sources",
                value: Data_Sources_FY3_2011,
            },
            // {
            //     name: "Software Sales",
            //     value: otherTest[4],
            // },
        ],
        [
            {
                name: "Data Sources",
                value: Data_Sources_FY3_2010,
            },
            // {
            //     name: "Software Sales",
            //     value: otherTest[4],
            // },
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
