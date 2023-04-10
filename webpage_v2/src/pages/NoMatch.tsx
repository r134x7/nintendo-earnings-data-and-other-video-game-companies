import { Text, Stack, Paper, Anchor, Code } from '@mantine/core';
import "../App.css"

import { useSingleMessage } from "../utils/table_design_logic";
import LOADING_SCREEN from '../components/LOADING_SCREEN';

const NoMatch = () => {

    const message = "There is no page here, or is there?...";

    const makeText = useSingleMessage(message, 40, "=", 80);

    return (
        <div className="clamps">
            <Stack mb="md" align="center">
            <Code style={{backgroundColor: `rgba(0, 255, 255,0.2)`}} block>
                {makeText}
            </Code>
            </Stack>
            <Paper shadow="sm" radius="xl" p="md" withBorder>
            <Stack align="center">
                <Text className="fade" mt="md" style={{textAlign: "center"}} size="lg">Also visit Install Base, it's a place to discuss and elaborate on the business side of the game industry.</Text>
                    <Anchor className="fade" style={{textAlign: "center"}} mb="sm" href="https://www.installbaseforum.com/" target="_blank" >
                        https://www.installbaseforum.com/
                    </Anchor>
            </Stack>
            </Paper>
        </div>
    );
};

export default NoMatch;