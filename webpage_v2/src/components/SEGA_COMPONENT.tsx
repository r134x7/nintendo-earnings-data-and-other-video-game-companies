import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Space, Card } from "@mantine/core";
import { useSelector } from "react-redux";

export default function SEGA_COMPONENT() {

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
        <Card shadow="sm" p="sm" radius="md" withBorder  style={{margin: "1em"}}>
            <Text style={{overflowWrap: "anywhere"}}>
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
