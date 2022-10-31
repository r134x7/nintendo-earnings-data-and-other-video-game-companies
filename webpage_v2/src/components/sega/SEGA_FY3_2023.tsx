import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { printSalesPerSoftwareUnit } from "../../data/sega/Sega_FY3_2023/software_sales_fy3_2023";

export default function SEGA_FY3_2023() {

    const [data, setData] = useState("");
    const [value, setValue] = useState("");
    const [sources, setSources] = useState(<></>)

    const state: any = useSelector(state => state);

    useEffect(() => {
            (value === "Software Sales")
            ? setData(printSalesPerSoftwareUnit)
            : setData("");

        (value === "Data Sources")
            ? setSources(DATA_SOURCES)
            : setSources(<></>)

    }, [value])

    function DATA_SOURCES() {

        return (
            <Text>
                <Stack align="center">
                        1st Quarter Data Appendix: 
                    <Anchor mb="sm" href="https://www.segasammy.co.jp/english/ir/library/pdf/settlement/2023/20220804_appendix_e_final.pdf" target="_blank" >
                        https://www.segasammy.co.jp/english/ir/library/pdf/settlement/2023/20220804_appendix_e_final.pdf
                    </Anchor>
                        2nd Quarter Data Appendix: 
                    <Anchor mb="sm" href="https://www.segasammy.co.jp/english/ir/library/pdf/settlement/2023/20221031_appendix_e_final.pdf" target="_blank" >
                        https://www.segasammy.co.jp/english/ir/library/pdf/settlement/2023/20221031_appendix_e_final.pdf
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
                    data={[ "Data Sources",
                            "Software Sales",
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
