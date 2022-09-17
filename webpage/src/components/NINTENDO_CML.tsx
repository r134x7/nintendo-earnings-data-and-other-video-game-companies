import { useState, useEffect } from "react";
import { Code, SegmentedControl, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { printJapan, printGlobal, printOverseas } from "../data/nintendo/Nintendo_Cumulative_Data/mst_cml_data";

export default function NINTENDO_CML() {

    const [data, setData] = useState("");
    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    useEffect(() => {
        (value === "Nintendo Switch FY Million-Seller Titles - Japan")
            ? setData(fyMillionSellersJapan)
            : (value === "Nintendo Switch FY Million-Seller Titles - Overseas")
            ? setData(fyMillionSellersOverseas)
            : (value === "Nintendo Switch FY Million-Seller Titles - Global")
            ? setData(fyMillionSellersGlobal)
            : setData("");

    }, [value])

    const fyMillionSellersJapan = printJapan;

    const fyMillionSellersOverseas = printOverseas;

    const fyMillionSellersGlobal = printGlobal;


    return (

        <div>  
            <SegmentedControl
                    fullWidth 
                    orientation="vertical"
                    value={value}
                    onChange={setValue}
                    data={[ "Nintendo Switch FY Million-Seller Titles - Japan", 
                            "Nintendo Switch FY Million-Seller Titles - Overseas", 
                            "Nintendo Switch FY Million-Seller Titles - Global",]}
            />
            
            <Code style={{backgroundColor: `${state.colour}`}} block>{data}</Code>
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
    );
}
