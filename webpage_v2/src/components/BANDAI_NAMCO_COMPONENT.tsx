import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Space, Card } from "@mantine/core";
import { useSelector } from "react-redux";
import { softwareSalesList } from "../data/bandaiNamco/software_sales_bandai_namco";
import { annualReportList } from "../data/bandaiNamco/annual_report_bandai_namco";
import { dataSourcesList } from "../data/bandaiNamco/Data_Sources/data_sources_full_list";

export default function BANDAI_NAMCO_COMPONENT(props: {setIndex: number}) {

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
                        1st Quarter Financial Hightlights: 
                    <Anchor mb="sm" href="https://www.bandainamco.co.jp/files/ir/financialstatements/pdf/en_20210805_Report.pdf" target="_blank" >
                        https://www.bandainamco.co.jp/files/ir/financialstatements/pdf/en_20210805_Report.pdf
                    </Anchor>
                        2nd Quarter Financial Hightlights: 
                    <Anchor mb="sm" href="https://www.bandainamco.co.jp/files/ir/financialstatements/pdf/en_20211109_Report.pdf" target="_blank" >
                        https://www.bandainamco.co.jp/files/ir/financialstatements/pdf/en_20211109_Report.pdf
                    </Anchor>
                        3rd Quarter Financial Hightlights: 
                    <Anchor mb="sm" href="https://www.bandainamco.co.jp/files/ir/financialstatements/pdf/en_20220208_Report.pdf" target="_blank" >
                        https://www.bandainamco.co.jp/files/ir/financialstatements/pdf/en_20220208_Report.pdf
                    </Anchor>
                        4th Quarter Financial Hightlights: 
                    <Anchor mb="sm" href="https://www.bandainamco.co.jp/files/ir/financialstatements/pdf/20220511_en_Report1.pdf" target="_blank" >
                        https://www.bandainamco.co.jp/files/ir/financialstatements/pdf/20220511_en_Report1.pdf
                    </Anchor>
                        Bandai Namco Group Fact Book 2022: 
                    <Anchor mb="sm" href="https://www.bandainamco.co.jp/files/ir/integrated/pdf/2022EN_fact.pdf" target="_blank" >
                        https://www.bandainamco.co.jp/files/ir/integrated/pdf/2022EN_fact.pdf
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
