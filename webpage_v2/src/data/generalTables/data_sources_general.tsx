import { Anchor, Text, Stack, Card } from "@mantine/core";
import { globImport } from "../../utils/table_design_logic";

type jsonData = {
    fiscalYear: string,
    data: linkData[] 
};

type linkData = {
    text: string,
    link: string,
};

const nintendoDataSources = globImport(new Map<number, jsonData>, import.meta.glob("../nintendo/Data_Sources/*.json", { import: "default", eager: true }), "Descending"); 

const segaDataSources = globImport(new Map<number, jsonData>, import.meta.glob("../sega/Data_Sources/*.json", { import: "default", eager: true }), "Descending");

const capcomDataSources = globImport(new Map<number, jsonData>, import.meta.glob("../capcom/Data_Sources/*.json", { import: "default", eager: true }), "Descending");

const bandaiNamcoDataSources = globImport(new Map<number, jsonData>, import.meta.glob("../bandaiNamco/Data_Sources/*.json", { import: "default", eager: true }), "Descending");

const koeiTecmoDataSources = globImport(new Map<number, jsonData>, import.meta.glob("../koeiTecmo/Data_Sources/*.json", { import: "default", eager: true }), "Descending");

const squareEnixDataSources = globImport(new Map<number, jsonData>, import.meta.glob("../squareEnix/Data_Sources/*.json", { import: "default", eager: true }), "Descending");

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

export const nintendoLinks = new Map<number, JSX.Element>(); 

nintendoDataSources.forEach((value, key, map) => nintendoLinks.set(nintendoLinks.size, dataSourcesLogic(value.data)));

export const segaLinks = new Map<number, JSX.Element>();

segaDataSources.forEach((value, key, map) => segaLinks.set(segaLinks.size, dataSourcesLogic(value.data)));

export const capcomLinks = new Map<number, JSX.Element>();

capcomDataSources.forEach((value, key, map) => capcomLinks.set(capcomLinks.size, dataSourcesLogic(value.data)));

export const bandaiNamcoLinks = new Map<number, JSX.Element>();

bandaiNamcoDataSources.forEach((value, key, map) => bandaiNamcoLinks.set(bandaiNamcoLinks.size, dataSourcesLogic(value.data)));

export const koeiTecmoLinks = new Map<number, JSX.Element>();

koeiTecmoDataSources.forEach((value, key, map) => koeiTecmoLinks.set(koeiTecmoLinks.size, dataSourcesLogic(value.data)));

export const squareEnixLinks = new Map<number, JSX.Element>(); 

squareEnixDataSources.forEach((value, key, map) => squareEnixLinks.set(squareEnixLinks.size, dataSourcesLogic(value.data)));

nintendoDataSources.clear();
capcomDataSources.clear();
segaDataSources.clear();
bandaiNamcoDataSources.clear();
koeiTecmoDataSources.clear()
squareEnixDataSources.clear();
