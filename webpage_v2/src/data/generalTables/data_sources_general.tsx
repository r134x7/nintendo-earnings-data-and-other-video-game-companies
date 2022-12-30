import { Anchor, Text, Stack, Card } from "@mantine/core";
//import json

type jsonData = {
    fiscalYear: string,
    data: linkData[] 
};

type linkData = {
    name: string,
    link: string,
};

const dataSourcesLogic = (dataLocal: linkData[]) => {

    

    return dataLocal.map((elem) => {
(
        <Card shadow="sm" p="sm" radius="md" withBorder  style={{margin: "1em"}}>
            <Text size={"md"} style={{overflowWrap: "anywhere"}}>
                <Stack align="center">
                    {elem.name}
                    <Anchor mb="sm" href={elem.link} target="_blank" >
                       {elem.link} 
                    </Anchor>
                </Stack>  
            </Text> 
        </Card>
        )
    });
};