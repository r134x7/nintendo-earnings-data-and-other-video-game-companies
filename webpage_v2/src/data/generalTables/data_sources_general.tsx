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

import segaDataSources2023 from "../sega/Data_Sources/data_sources_fy3_2023.json";
import segaDataSources2022 from "../sega/Data_Sources/data_sources_fy3_2022.json";
import segaDataSources2021 from "../sega/Data_Sources/data_sources_fy3_2021.json";
import segaDataSources2020 from "../sega/Data_Sources/data_sources_fy3_2020.json";
import segaDataSources2019 from "../sega/Data_Sources/data_sources_fy3_2019.json";
import segaDataSources2018 from "../sega/Data_Sources/data_sources_fy3_2018.json";
import segaDataSources2017 from "../sega/Data_Sources/data_sources_fy3_2017.json";
import segaDataSources2016 from "../sega/Data_Sources/data_sources_fy3_2016.json";
import segaDataSources2015 from "../sega/Data_Sources/data_sources_fy3_2015.json";
import segaDataSources2014 from "../sega/Data_Sources/data_sources_fy3_2014.json";
import segaDataSources2013 from "../sega/Data_Sources/data_sources_fy3_2013.json";

import capcomDataSources2023 from "../capcom/Data_Sources/data_sources_fy3_2023.json";
import capcomDataSources2022 from "../capcom/Data_Sources/data_sources_fy3_2022.json";
import capcomDataSources2021 from "../capcom/Data_Sources/data_sources_fy3_2021.json";
import capcomDataSources2020 from "../capcom/Data_Sources/data_sources_fy3_2020.json";
import capcomDataSources2019 from "../capcom/Data_Sources/data_sources_fy3_2019.json";
import capcomDataSources2018 from "../capcom/Data_Sources/data_sources_fy3_2018.json";
import capcomDataSources2017 from "../capcom/Data_Sources/data_sources_fy3_2017.json";

import bandaiNamcoDataSources2023 from "../bandaiNamco/Data_Sources/data_sources_fy3_2023.json";
import bandaiNamcoDataSources2022 from "../bandaiNamco/Data_Sources/data_sources_fy3_2022.json";
import bandaiNamcoDataSources2021 from "../bandaiNamco/Data_Sources/data_sources_fy3_2021.json";
import bandaiNamcoDataSources2020 from "../bandaiNamco/Data_Sources/data_sources_fy3_2020.json";
import bandaiNamcoDataSources2019 from "../bandaiNamco/Data_Sources/data_sources_fy3_2019.json";

import koeiTecmoDataSources2023 from "../koeiTecmo/Data_Sources/data_sources_fy3_2023.json";
import koeiTecmoDataSources2022 from "../koeiTecmo/Data_Sources/data_sources_fy3_2022.json";
import koeiTecmoDataSources2021 from "../koeiTecmo/Data_Sources/data_sources_fy3_2021.json";
import koeiTecmoDataSources2020 from "../koeiTecmo/Data_Sources/data_sources_fy3_2020.json";
import koeiTecmoDataSources2019 from "../koeiTecmo/Data_Sources/data_sources_fy3_2019.json";

import squareEnixDataSources2023 from "../squareEnix/Data_Sources/data_sources_fy3_2023.json";
import squareEnixDataSources2022 from "../squareEnix/Data_Sources/data_sources_fy3_2022.json";
import squareEnixDataSources2021 from "../squareEnix/Data_Sources/data_sources_fy3_2021.json";
import squareEnixDataSources2020 from "../squareEnix/Data_Sources/data_sources_fy3_2020.json";
import squareEnixDataSources2019 from "../squareEnix/Data_Sources/data_sources_fy3_2019.json";
import squareEnixDataSources2018 from "../squareEnix/Data_Sources/data_sources_fy3_2018.json";
import squareEnixDataSources2017 from "../squareEnix/Data_Sources/data_sources_fy3_2017.json";
import squareEnixDataSources2016 from "../squareEnix/Data_Sources/data_sources_fy3_2016.json";
import squareEnixDataSources2015 from "../squareEnix/Data_Sources/data_sources_fy3_2015.json";
import squareEnixDataSources2014 from "../squareEnix/Data_Sources/data_sources_fy3_2014.json";
import squareEnixDataSources2013 from "../squareEnix/Data_Sources/data_sources_fy3_2013.json";
import squareEnixDataSources2012 from "../squareEnix/Data_Sources/data_sources_fy3_2012.json";
import squareEnixDataSources2011 from "../squareEnix/Data_Sources/data_sources_fy3_2011.json";
import squareEnixDataSources2010 from "../squareEnix/Data_Sources/data_sources_fy3_2010.json";


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
];

const segaDataSources: jsonData[] = [
    segaDataSources2023,
    segaDataSources2022,
    segaDataSources2021,
    segaDataSources2020,
    segaDataSources2019,
    segaDataSources2018,
    segaDataSources2017,
    segaDataSources2016,
    segaDataSources2015,
    segaDataSources2014,
    segaDataSources2013,
];

const capcomDataSources: jsonData[] = [
    capcomDataSources2023,
    capcomDataSources2022,
    capcomDataSources2021,
    capcomDataSources2020,
    capcomDataSources2019,
    capcomDataSources2018,
    capcomDataSources2017,
];

const bandaiNamcoDataSources: jsonData[] = [
    bandaiNamcoDataSources2023,
    bandaiNamcoDataSources2022,
    bandaiNamcoDataSources2021,
    bandaiNamcoDataSources2020,
    bandaiNamcoDataSources2019,
];

const koeiTecmoDataSources: jsonData[] = [
    koeiTecmoDataSources2023,
    koeiTecmoDataSources2022,
    koeiTecmoDataSources2021,
    koeiTecmoDataSources2020,
    koeiTecmoDataSources2019,
];

const squareEnixDataSources: jsonData[] = [
    squareEnixDataSources2023,
    squareEnixDataSources2022,
    squareEnixDataSources2021,
    squareEnixDataSources2020,
    squareEnixDataSources2019,
    squareEnixDataSources2018,
    squareEnixDataSources2017,
    squareEnixDataSources2016,
    squareEnixDataSources2015,
    squareEnixDataSources2014,
    squareEnixDataSources2013,
    squareEnixDataSources2012,
    squareEnixDataSources2011,
    squareEnixDataSources2010,
];

const dataSourcesLogic = (dataLocal: linkData[]): JSX.Element => {

    let links = dataLocal.map((elem, index) => {
        // had to arrange things like this due to the key prop warning...
        return <Text mb={"md"} size={"md"} style={{overflowWrap: "anywhere"}} key={index}>     
                    <Stack  align="center">
                       {elem.text}
                        <Anchor mb={"md"} href={elem.link} target="_blank" >
                           {elem.link} 
                        </Anchor>
                    </Stack>
                </Text>
    })

    return (
        <Card shadow="sm" p="sm" radius="md" withBorder>
                    {links}
        </Card>
        )
    // return (
    //     <Card shadow="sm" p="sm" radius="md" withBorder  style={{margin: "1em"}}>
    //         {/* <Text size={"md"} style={{overflowWrap: "anywhere"}}> */}
    //             {/* <Stack align="center"> */}
    //                 {links}
    //             {/* </Stack>   */}
    //         {/* </Text>  */}
    //     </Card>
    //     )
};

export const nintendoLinks = nintendoDataSources.map(elem => dataSourcesLogic(elem.data));

export const segaLinks = segaDataSources.map(elem => dataSourcesLogic(elem.data));

export const capcomLinks = capcomDataSources.map(elem => dataSourcesLogic(elem.data));

export const bandaiNamcoLinks = bandaiNamcoDataSources.map(elem => dataSourcesLogic(elem.data));

export const koeiTecmoLinks = koeiTecmoDataSources.map(elem => dataSourcesLogic(elem.data));

export const squareEnixLinks = squareEnixDataSources.map(elem => dataSourcesLogic(elem.data));