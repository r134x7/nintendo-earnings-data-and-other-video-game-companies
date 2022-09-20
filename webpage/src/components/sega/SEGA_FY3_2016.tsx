import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { printSeriesFY } from "../../data/sega/Sega_FY3_2016/sega_annual_report_fy3_16";

export default function SEGA_FY3_2016() {

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
                        Sega Sammy Integrated Report 2016: 
                    <Anchor mb="sm" href="https://www.segasammy.co.jp/english/ir/library/pdf/printing_annual/2016/all_ar2016_e.pdf" target="_blank" >
                        https://www.segasammy.co.jp/english/ir/library/pdf/printing_annual/2016/all_ar2016_e.pdf
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