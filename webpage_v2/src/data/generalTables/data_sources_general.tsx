import { Anchor, Text, Stack, Card } from "@mantine/core";
//import json
import nintendoDataSources2023 from "../nintendo/Data_Sources/data_sources_fy3_2023.json"
import nintendoDataSources2022 from "../nintendo/Data_Sources/data_sources_fy3_2022.json"
import nintendoDataSources2021 from "../nintendo/Data_Sources/data_sources_fy3_2021.json"
import nintendoDataSources2020 from "../nintendo/Data_Sources/data_sources_fy3_2020.json"
import nintendoDataSources2019 from "../nintendo/Data_Sources/data_sources_fy3_2019.json"
import nintendoDataSources2018 from "../nintendo/Data_Sources/data_sources_fy3_2018.json"
import nintendoDataSources2017 from "../nintendo/Data_Sources/data_sources_fy3_2017.json"
import nintendoDataSources2016 from "../nintendo/Data_Sources/data_sources_fy3_2016.json"
import nintendoDataSources2015 from "../nintendo/Data_Sources/data_sources_fy3_2015.json"
import nintendoDataSources2014 from "../nintendo/Data_Sources/data_sources_fy3_2014.json"
import nintendoDataSources2013 from "../nintendo/Data_Sources/data_sources_fy3_2013.json"
import nintendoDataSources2012 from "../nintendo/Data_Sources/data_sources_fy3_2012.json"
import nintendoDataSources2011 from "../nintendo/Data_Sources/data_sources_fy3_2011.json"
import nintendoDataSources2010 from "../nintendo/Data_Sources/data_sources_fy3_2010.json"
import nintendoDataSources2009 from "../nintendo/Data_Sources/data_sources_fy3_2009.json"
import nintendoDataSources2008 from "../nintendo/Data_Sources/data_sources_fy3_2008.json"
import nintendoDataSources2007 from "../nintendo/Data_Sources/data_sources_fy3_2007.json"
import nintendoDataSources2006 from "../nintendo/Data_Sources/data_sources_fy3_2006.json"
import nintendoDataSources2005 from "../nintendo/Data_Sources/data_sources_fy3_2005.json"
import nintendoDataSources2004 from "../nintendo/Data_Sources/data_sources_fy3_2004.json"

type jsonData = {
    fiscalYear: string,
    data: linkData[] 
};

type linkData = {
    text: string,
    link: string,
};

const nintendoDataSources: jsonData[] = [
    nintendoDataSources2023,
    nintendoDataSources2022,
    nintendoDataSources2021,
    nintendoDataSources2020,
    nintendoDataSources2019,
    nintendoDataSources2018,
    nintendoDataSources2017,
    nintendoDataSources2016,
    nintendoDataSources2015,
    nintendoDataSources2014,
    nintendoDataSources2013,
    nintendoDataSources2012,
    nintendoDataSources2011,
    nintendoDataSources2010,
    nintendoDataSources2009,
    nintendoDataSources2008,
    nintendoDataSources2007,
    nintendoDataSources2006,
    nintendoDataSources2005,
    nintendoDataSources2004,
]

const dataSourcesLogic = (dataLocal: linkData[]): JSX.Element => {

    let links = dataLocal.map(elem => {
        return <>     {elem.text}
                    <Anchor mb="sm" href={elem.link} target="_blank" >
                       {elem.link} 
                    </Anchor>
                </>
    })

    return (
        <Card shadow="sm" p="sm" radius="md" withBorder  style={{margin: "1em"}}>
            <Text size={"md"} style={{overflowWrap: "anywhere"}}>
                <Stack align="center">
                    {links}
                </Stack>  
            </Text> 
        </Card>
        )
};

export const nintendoLinks = nintendoDataSources.map(elem => dataSourcesLogic(elem.data))