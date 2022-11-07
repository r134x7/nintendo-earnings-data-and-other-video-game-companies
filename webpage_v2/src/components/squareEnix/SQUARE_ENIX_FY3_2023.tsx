import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Space, Card } from "@mantine/core";
import { useSelector } from "react-redux";
import { printSalesPerSoftwareUnit } from "../../data/squareEnix/Square_Enix_FY3_2023/software_sales_fy3_2023";

export default function SQUARE_ENIX_FY3_2023() {

    const softwareSales = printSalesPerSoftwareUnit; 
    // const fySeriesSales = printSeriesFY;

    const [value, setValue] = useState("");
    const [sources, setSources] = useState(<></>)

    const state: any = useSelector(state => state);

    const componentList = [
        {
            name: "Software Sales",
            value: softwareSales,
        },
        // {
        //     name: "FY Series IP",
        //     value: fySeriesSales,
        // },
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
                    <Anchor mb="sm" href="https://www.hd.square-enix.com/eng/ir/library/pdf/23q1slides.pdf" target="_blank" >
                        https://www.hd.square-enix.com/eng/ir/library/pdf/23q1slides.pdf
                    </Anchor>
                        2nd Quarter Financial Results Presentation: 
                    <Anchor mb="sm" href="https://www.hd.square-enix.com/eng/ir/library/pdf/23q2slides.pdf" target="_blank" >
                        https://www.hd.square-enix.com/eng/ir/library/pdf/23q2slides.pdf
                    </Anchor>
                        {/* 3rd Quarter Financial Results Presentation: 
                    <Anchor mb="sm" href="https://www.hd.square-enix.com/eng/ir/library/pdf/23q3slides.pdf" target="_blank" >
                        https://www.hd.square-enix.com/eng/ir/library/pdf/23q3slides.pdf
                    </Anchor> */}
                        {/* 4th Quarter Financial Results Presentation: 
                    <Anchor mb="sm" href="https://www.hd.square-enix.com/eng/ir/library/pdf/23q4slides.pdf" target="_blank" >
                        https://www.hd.square-enix.com/eng/ir/library/pdf/23q4slides.pdf
                    </Anchor> */}
                        {/* Annual Report 2022: 
                    <Anchor mb="sm" href="https://www.hd.square-enix.com/eng/ir/library/pdf/ar_2022en.pdf" target="_blank" >
                        https://www.hd.square-enix.com/eng/ir/library/pdf/ar_2022en.pdf
                    </Anchor> */}
                        {/* Press Release for Q4 Fiscal Year Ending March 2022: 
                    <Anchor mb="sm" href="https://www.hd.square-enix.com/eng/ir/pdf/23q4release.pdf" target="_blank" >
                        https://www.hd.square-enix.com/eng/ir/pdf/23q4release.pdf
                    </Anchor> */}
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