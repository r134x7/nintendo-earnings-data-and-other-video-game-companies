import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { printSeriesFY } from "../../data/bandaiNamco/Bandai_Namco_FY3_2021/bandai_namco_annual_report_fy3_21" 

export default function BANDAI_NAMCO_FY3_2021() {

    const [data, setData] = useState("");
    const [value, setValue] = useState("");
    const [sources, setSources] = useState(<></>)

    const state: any = useSelector(state => state);

    useEffect(() => {
        (value === "FY Series IP")
            ? setData(SeriesFY)
            : setData("");

        (value === "Data Sources")
            ? setSources(DATA_SOURCES)
            : setSources(<></>)

    }, [value])

    function DATA_SOURCES() {

        return (
            <Text>
                <Stack align="center">
                        Bandai Namco Group Fact Book 2021: 
                    <Anchor mb="sm" href="https://www.bandainamco.co.jp/files/ir/integrated/pdf/2021EN_fact1.pdf" target="_blank" >
                        https://www.bandainamco.co.jp/files/ir/integrated/pdf/2021EN_fact1.pdf
                    </Anchor>
                </Stack>  
            </Text> 
        )
    };

    const SeriesFY = printSeriesFY;

    return (

        <div>  
            <SegmentedControl
                    fullWidth 
                    orientation="vertical"
                    value={value}
                    onChange={setValue}
                    data={[ "Data Sources",
                            "FY Series IP",
                        ]}
            />
            
            {sources}
            <Code style={{backgroundColor: `${state.colour}`}} block>{data}</Code>
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
        
    );
}
