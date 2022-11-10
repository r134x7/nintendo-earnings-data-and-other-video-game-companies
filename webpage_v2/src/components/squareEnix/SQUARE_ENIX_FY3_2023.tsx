import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Space, Card } from "@mantine/core";
import { useSelector } from "react-redux";
import { otherTest } from "../../data/squareEnix/Square_Enix_FY3_2023/software_sales_fy3_2023";

export default function SQUARE_ENIX_FY3_2023() {


    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    const dataSources = (
        <Card shadow="sm" p="sm" radius="md" withBorder  style={{margin: "1em"}}>
            <Text size={"md"} style={{overflowWrap: "anywhere"}}>
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
        );

    const componentList = [
        {
            name: "Data Sources",
            value: dataSources,
        },
        {
            name: "Software Sales",
            value: otherTest[0],
        },
        // {
        //     name: "FY Series IP",
        //     value: fySeriesSales,
        // },
    ]

    const dataList = componentList.map(elem => elem.name);

    const selectDataComponent = (objList: {name: string, value: string | JSX.Element}[]) =>
    (dataUsed: string): string | JSX.Element => {

        let [dataSelected] = objList.filter(elem => dataUsed === elem.name)

        return (dataSelected) ? dataSelected.value : ""
    };

    const selectData = selectDataComponent(componentList);

    return (

        <div>  
            <SegmentedControl
                    fullWidth 
                    orientation="vertical"
                    value={value}
                    onChange={setValue}
                    data={dataList}
            />
            
            <Code style={{backgroundColor: `${state.colour}`}} block>{selectData(value)}</Code>
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
        
    );
}
