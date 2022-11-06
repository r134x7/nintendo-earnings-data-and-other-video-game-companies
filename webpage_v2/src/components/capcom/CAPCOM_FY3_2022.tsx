import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Space, Card } from "@mantine/core";
import { useSelector } from "react-redux";
import { printFYPlatinumTitles, printAllPlatinumTitles } from "../../data/capcom/Capcom_FY3_2022/platinum_titles_fy3_22";
import { printSeriesFY } from "../../data/capcom/Capcom_FY3_2022/game_series_sales_fy3_2022";
import { printSalesPerSoftwareUnit } from "../../data/capcom/Capcom_FY3_2022/software_sales_fy3_2022";
import { printSoftwareShipments } from "../../data/capcom/Capcom_FY3_2022/software_shipments_platform_fy3_2022";

export default function CAPCOM_FY3_2022() {

    const softwareSales = printSalesPerSoftwareUnit; 

    const platinumTitlesFY = printFYPlatinumTitles;

    const platinumTitlesAll = printAllPlatinumTitles;

    const gameSeriesSales = printSeriesFY;

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
            name: "FY Platinum Titles", 
            value: platinumTitlesFY
        },
        {
            name: "All Platinum Titles", 
            value: platinumTitlesAll
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
        // (value === "FY Platinum Titles")
        //     ? setData(platinumTitlesFY)
        //     : (value === "All Platinum Titles")
        //     ? setData(platinumTitlesAll)
        //     : setData("");

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
                    <Anchor mb="sm" href="https://www.capcom.co.jp/ir/english/data/pdf/explanation/2021/1st/explanation_2021_1st_01.pdf" target="_blank" >
                        https://www.capcom.co.jp/ir/english/data/pdf/explanation/2021/1st/explanation_2021_1st_01.pdf
                    </Anchor>
                        2nd Quarter Financial Results Presentation: 
                    <Anchor mb="sm" href="https://www.capcom.co.jp/ir/english/data/pdf/explanation/2021/2nd/explanation_2021_2nd_01.pdf" target="_blank" >
                        https://www.capcom.co.jp/ir/english/data/pdf/explanation/2021/2nd/explanation_2021_2nd_01.pdf
                    </Anchor>
                        3rd Quarter Financial Results Presentation: 
                    <Anchor mb="sm" href="https://www.capcom.co.jp/ir/english/data/pdf/explanation/2021/3rd/explanation_2021_3rd_01.pdf" target="_blank" >
                        https://www.capcom.co.jp/ir/english/data/pdf/explanation/2021/3rd/explanation_2021_3rd_01.pdf
                    </Anchor>
                        4th Quarter Financial Results Presentation: 
                    <Anchor mb="sm" href="https://www.capcom.co.jp/ir/english/data/pdf/explanation/2021/full/explanation_2021_full_01.pdf" target="_blank" >
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
                        Capcom Fact Book 2022:
                    <Anchor mb="sm" href="https://www.capcom.co.jp/ir/data/pdf/annual/2022/annual_2022_07.pdf" target="_blank" >
                        https://www.capcom.co.jp/ir/data/pdf/annual/2022/annual_2022_07.pdf
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
