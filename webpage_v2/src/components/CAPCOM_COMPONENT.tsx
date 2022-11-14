import { useState } from "react";
import { Code, SegmentedControl, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { dataSourcesList } from "../data/capcom/Data_Sources/data_sources_full_list"
import { allPlatinumTitlesList, fyPlatinumTitlesList } from "../data/capcom/platinum_titles_Capcom";
import { gameSeriesList } from "../data/capcom/game_series_sales_Capcom";
import { softwareSalesList } from "../data/capcom/software_sales_Capcom";
import { annualReportList } from "../data/capcom/software_shipments_platform_Capcom";

export default function CAPCOM_COMPONENT(props: {setIndex: number; yearLength: number}) {

    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    const annualReportListAltered = ["0 index === FY3/2023"].concat(annualReportList); // to manage keeping the index values the same with softwareSalesList

    const gameSeriesListAltered = ["0 index === FY3/2023"].concat(gameSeriesList); // to manage keeping the index values the same with softwareSalesList

    const componentListNew = Array.from({length: props.yearLength}, (elem, index) => {

        return [
            { 
                name: "Data Sources",
                value: dataSourcesList[index]? dataSourcesList[index] : undefined,
            },
            {
                name: "Software Sales",
                value: softwareSalesList[index]? softwareSalesList[index] : undefined,
            },
            {
                name: "Software Platform Shipments", 
                value: annualReportListAltered[index]? annualReportListAltered[index] : undefined, 
            },
            {
                name: "FY Platinum Titles", 
                value: fyPlatinumTitlesList[index]? fyPlatinumTitlesList[index] : undefined,
            },
            {
                name: "All Platinum Titles", 
                value: allPlatinumTitlesList[index]? allPlatinumTitlesList[index] : undefined,
            },
            {
                name: "FY Game Series", 
                value: gameSeriesListAltered[index]? gameSeriesListAltered[index] : undefined,
            },
        ].filter(elem => elem.value !== undefined);
    })

    const dataList = componentListNew[props.setIndex].map(elem => elem.name);

    const selectDataComponent = (objList: {name: string, value: string | JSX.Element | undefined}[]) =>
    (dataUsed: string): string | JSX.Element | undefined => {

        let [dataSelected] = objList.filter(elem => dataUsed === elem.name)

        return (dataSelected) ? dataSelected.value : ""
    };

    const selectData = selectDataComponent(componentListNew[props.setIndex]);


    return (

        <div>  
            <SegmentedControl
                    fullWidth 
                    orientation="vertical"
                    value={value}
                    onChange={setValue}
                    data={dataList}
            />
            
            {
                (value === "Data Sources")
                    ? selectData(value)
                    : <Code style={{backgroundColor: `${state.colour}`}} block>{selectData(value)}</Code>
            }
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
        
    );
}
