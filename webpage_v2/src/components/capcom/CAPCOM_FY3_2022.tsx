import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { printFYPlatinumTitles, printAllPlatinumTitles } from "../../data/capcom/Capcom_FY3_2022/platinum_titles_fy3_22";
import { printSeriesFY } from "../../data/capcom/Capcom_FY3_2022/game_series_sales_fy3_2022"

export default function CAPCOM_FY3_2022() {

    const platinumTitlesFY = printFYPlatinumTitles;

    const platinumTitlesAll = printAllPlatinumTitles;

    const gameSeriesSales = printSeriesFY;

    const [data, setData] = useState("");
    const [value, setValue] = useState("");
    const [sources, setSources] = useState(<></>)

    const state: any = useSelector(state => state);

    const dataList = [ 
        "Data Sources",
        "FY Platinum Titles",
        "All Platinum Titles",
        "FY Game Series",
        ];

    const componentList = [
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
            <Text>
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
                {/* {data} */}
                {selectData(value)}
                </Code>
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
        
    );
}
