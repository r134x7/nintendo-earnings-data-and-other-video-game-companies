import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Space, Card } from "@mantine/core";
import { useSelector } from "react-redux";
import { printSeriesFY } from "../../data/capcom/Capcom_FY3_2011/game_series_sales_fy3_2011"

export default function CAPCOM_FY3_2011() {

    const gameSeriesSales = printSeriesFY;

    const [value, setValue] = useState("");
    const [sources, setSources] = useState(<></>)

    const state: any = useSelector(state => state);

    const componentList = [
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
                        Capcom Platinum Titles Page: 
                    <Anchor mb="sm" href="https://www.capcom.co.jp/ir/english/business/million.html" target="_blank" >
                        https://www.capcom.co.jp/ir/english/business/million.html
                    </Anchor>
                        Capcom Game Series Sales Page:
                    <Anchor mb="sm" href="https://www.capcom.co.jp/ir/english/business/salesdata.html" target="_blank" >
                        https://www.capcom.co.jp/ir/english/business/salesdata.html
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
