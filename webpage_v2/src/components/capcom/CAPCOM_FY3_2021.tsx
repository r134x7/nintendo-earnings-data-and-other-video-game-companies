import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Space, Card } from "@mantine/core";
import { useSelector } from "react-redux";
import { printSeriesFY } from "../../data/capcom/Capcom_FY3_2021/game_series_sales_fy3_2021"
import { printSoftwareShipments } from "../../data/capcom/Capcom_FY3_2021/software_shipments_platform_fy3_2021";
import { printSalesPerSoftwareUnit } from "../../data/capcom/Capcom_FY3_2021/software_sales_fy3_2021";

export default function CAPCOM_FY3_2021() {

    const gameSeriesSales = printSeriesFY;

    const softwareSales = printSalesPerSoftwareUnit; 

    const softwareShipments = printSoftwareShipments;

    const [value, setValue] = useState("");
    const [sources, setSources] = useState(<></>)

    const state: any = useSelector(state => state);

    const componentList = [
        {
            name: "Software Sales",
            value: softwareSales,
        },
        {
            name: "Software Platform Shipments", 
            value: softwareShipments, 
        },
        {
            name: "FY Game Series", 
            value: gameSeriesSales
        },
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
        <Card shadow="sm" p="sm" radius="md" withBorder  style={{margin: "1em"}}>
            <Text style={{overflowWrap: "anywhere"}}>
                <Stack align="center">
                        1st Quarter Financial Results Presentation: 
                    <Anchor mb="sm" href="https://www.capcom.co.jp/ir/english/data/pdf/explanation/2020/1st/explanation_2020_1st_01.pdf" target="_blank" >
                        https://www.capcom.co.jp/ir/english/data/pdf/explanation/2020/1st/explanation_2020_1st_01.pdf
                    </Anchor>
                        2nd Quarter Financial Results Presentation: 
                    <Anchor mb="sm" href="https://www.capcom.co.jp/ir/english/data/pdf/explanation/2020/2nd/explanation_2020_2nd_01.pdf" target="_blank" >
                        https://www.capcom.co.jp/ir/english/data/pdf/explanation/2020/2nd/explanation_2020_2nd_01.pdf
                    </Anchor>
                        3rd Quarter Financial Results Presentation: 
                    <Anchor mb="sm" href="https://www.capcom.co.jp/ir/english/data/pdf/explanation/2020/3rd/explanation_2020_3rd_02.pdf" target="_blank" >
                        https://www.capcom.co.jp/ir/english/data/pdf/explanation/2020/3rd/explanation_2020_3rd_02.pdf
                    </Anchor>
                        4th Quarter Financial Results Presentation: 
                    <Anchor mb="sm" href="https://www.capcom.co.jp/ir/english/data/pdf/explanation/2020/full/explanation_2020_full_01.pdf" target="_blank" >
                        https://www.capcom.co.jp/ir/english/data/pdf/explanation/2021/full/explanation_2021_full_01.pdf
                    </Anchor>
                        Capcom Platinum Titles Page: 
                    <Anchor mb="sm" href="https://www.capcom.co.jp/ir/english/business/million.html" target="_blank" >
                        https://www.capcom.co.jp/ir/english/business/million.html
                    </Anchor>
                        Capcom Game Series Sales Page:
                    <Anchor mb="sm" href="https://www.capcom.co.jp/ir/english/business/salesdata.html" target="_blank" >
                        https://www.capcom.co.jp/ir/english/business/salesdata.html
                    </Anchor>
                        Capcom Fact Book 2021:
                    <Anchor mb="sm" href="https://www.capcom.co.jp/ir/english/data/pdf/annual/2021/annual_2021_08.pdf" target="_blank" >
                        https://www.capcom.co.jp/ir/english/data/pdf/annual/2021/annual_2021_08.pdf
                    </Anchor>
                </Stack>  
            </Text> 
        </Card>
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
