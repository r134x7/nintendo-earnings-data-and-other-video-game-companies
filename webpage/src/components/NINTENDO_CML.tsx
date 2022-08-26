import { useState, useEffect } from "react";
import { Code, SegmentedControl, Anchor, Text, Stack, Space } from "@mantine/core";
import { useSelector } from "react-redux";
import { printJapan, printGlobal, printOverseas } from "../data/nintendo/Nintendo-Cumulative-Data/mst-cml-data";

export default function NINTENDO_CML() {

    const [data, setData] = useState("");
    const [value, setValue] = useState("");

    const state: any = useSelector(state => state);

    useEffect(() => {
        (value === "FY Million-Seller Titles - Japan")
            ? setData(printJapan)
            : (value === "FY Million-Seller Titles - Overseas")
            ? setData(printOverseas)
            : (value === "FY Million-Seller Titles - Global")
            ? setData(printGlobal)
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
                    data={[ "FY Million-Seller Titles - Japan", 
                            "FY Million-Seller Titles - Overseas", 
                            "FY Million-Seller Titles - Global",]}
            />
            
            <Code style={{backgroundColor: `${state.colour}`}} block>{data}</Code>
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </div>
    );
}
