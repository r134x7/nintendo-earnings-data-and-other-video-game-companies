import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { printFYPlatinumTitles, printAllPlatinumTitles } from "../../data/capcom/Capcom_FY3_2023/platinum_titles_fy3_23";
import { printSalesPerSoftwareUnit } from "../../data/capcom/Capcom_FY3_2023/software_sales_fy3_2022";

export default function CAPCOM_FY3_2023() {

    const softwareSales = printSalesPerSoftwareUnit; 

    const platinumTitlesFY = printFYPlatinumTitles;

    const platinumTitlesAll = printAllPlatinumTitles;

    // const gameSeriesSales = printSeriesFY;

    const [value, setValue] = useState("");
    const [sources, setSources] = useState(<></>)

    const state: any = useSelector(state => state);

    const componentList = [
        {
            name: "Software Sales",
            value: softwareSales,
        },
        {
            name: "FY Platinum Titles", 
            value: platinumTitlesFY
        },
        {
            name: "All Platinum Titles", 
            value: platinumTitlesAll
        },
        // {
        //     name: "FY Game Series", 
        //     value: gameSeriesSales
        // },
    ]

    const dataList = ["Data Sources"].concat(componentList.map(elem => elem.name));

    const selectDataComponent = (objList: {name: string, value: string}[]) =>
    (dataUsed: string): string => {

        let [dataSelected] = objList.filter(elem => dataUsed === elem.name)

        return (dataSelected) ? dataSelected.value : ""
    };

    const selectData = selectDataComponent(componentList);

    useEffect(() => {

        (value === "Data Sources")
            ? setSources(DATA_SOURCES)
            : setSources(<></>)

    }, [value])

    function DATA_SOURCES() {

        return (
            <Text>
                <Stack align="center">
                        1st Quarter Financial Results Presentation: 
                    <Anchor mb="sm" href="https://www.capcom.co.jp/ir/english/data/pdf/explanation/2022/1st/explanation_2022_1st_01.pdf" target="_blank" >
                        https://www.capcom.co.jp/ir/english/data/pdf/explanation/2022/1st/explanation_2022_1st_01.pdf
                    </Anchor>
                        2nd Quarter Financial Results Presentation: 
                    <Anchor mb="sm" href="https://www.capcom.co.jp/ir/english/data/pdf/explanation/2022/2nd/explanation_2022_2nd_01.pdf" target="_blank" >
                        https://www.capcom.co.jp/ir/english/data/pdf/explanation/2022/2nd/explanation_2022_2nd_01.pdf
                    </Anchor>
                        Capcom Platinum Titles Page: 
                    <Anchor mb="sm" href="https://www.capcom.co.jp/ir/english/business/million.html" target="_blank" >
                        https://www.capcom.co.jp/ir/english/business/million.html
                    </Anchor>
                </Stack>  
            </Text> 
        )
    };

    return (

        <div>  
            <SegmentedControl
                    fullWidth 
                    orientation="vertical"
                    value={value}
                    onChange={setValue}
                    data={dataList}
            />
            
            {sources}
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
