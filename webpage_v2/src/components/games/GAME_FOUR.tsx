import { Code, Button, SimpleGrid, Space } from "@mantine/core";
import { useHotkeys, useInterval } from "@mantine/hooks";
import { useState, useEffect } from "react";
import { Field } from "../../classes/Field";
import { Unit } from "../../classes/Unit";
import { liner, border, spacer, printTextBlock } from "../../utils/table_design_logic";


export default function GAME_FOUR() {

const gameOverOne = 
`--------------------------------
| You struggled and lost.      |
|                              |
| Game Over                    |
--------------------------------`; 


    return (
        <div>
            <Code block>
            </Code>
            <Space h="xl" />
            <Code block>
            </Code>
        </div>
    )
}