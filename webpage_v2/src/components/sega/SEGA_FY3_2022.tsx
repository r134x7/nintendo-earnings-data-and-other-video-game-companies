import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Space, Card } from "@mantine/core";
import { useSelector } from "react-redux";
import { printSeriesFY } from "../../data/sega/Sega_FY3_2022/sega_annual_report_fy3_22";
import { printSalesPerSoftwareUnit } from "../../data/sega/Sega_FY3_2022/software_sales_fy3_2022";

export default function SEGA_FY3_2022() {

    const [data, setData] = useState("");
    const [value, setValue] = useState("");
    const [sources, setSources] = useState(<></>)

    const state: any = useSelector(state => state);

    useEffect(() => {
        (value === "FY Series IP")
            ? setData(SeriesFY)
            : (value === "Software Sales")
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
                    <Anchor mb="sm" href="https://www.segasammy.co.jp/english/ir/library/pdf/settlement/2022/20210806_appendix_e_final.pdf" target="_blank" >
                        https://www.segasammy.co.jp/english/ir/library/pdf/settlement/2022/20210806_appendix_e_final.pdf
                    </Anchor>
                        2nd Quarter Data Appendix: 
                    <Anchor mb="sm" href="https://www.segasammy.co.jp/english/ir/library/pdf/settlement/2022/20211108_appendix_e_final.pdf" target="_blank" >
                        https://www.segasammy.co.jp/english/ir/library/pdf/settlement/2022/20211108_appendix_e_final.pdf
                    </Anchor>
                        3rd Quarter Data Appendix: 
                    <Anchor mb="sm" href="https://www.segasammy.co.jp/english/ir/library/pdf/settlement/2022/20220210_appendix_e_final_.pdf" target="_blank" >
                        https://www.segasammy.co.jp/english/ir/library/pdf/settlement/2022/20220210_appendix_e_final_.pdf
                    </Anchor>
                        4th Quarter Data Appendix: 
                    <Anchor mb="sm" href="https://www.segasammy.co.jp/english/ir/library/pdf/settlement/2022/20220513_appendix_en_final_.pdf" target="_blank" >
                        https://www.segasammy.co.jp/english/ir/library/pdf/settlement/2022/20220513_appendix_en_final_.pdf
                    </Anchor>
                        Sega Sammy Integrated Report 2022: 
                    <Anchor mb="sm" href="https://www.segasammy.co.jp/english/ir/library/pdf/printing_annual/2022/ir_2022_web_all_e.pdf" target="_blank" >
                        https://www.segasammy.co.jp/english/ir/library/pdf/printing_annual/2022/ir_2022_web_all_e.pdf
                    </Anchor>
                </Stack>  
            </Text> 
        </Card>
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
                            "Software Sales",
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
