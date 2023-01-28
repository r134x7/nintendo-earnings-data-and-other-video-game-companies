import { Code, Space } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import { useState, useEffect } from "react";
import { liner, spacer, printTextBlock } from "../../utils/table_design_logic";

export default function GAME_FIVE() {

    return (
        <div>
            <Code style={{backgroundColor: `rgba(75, 0, 130, .20)`}} block>
            </Code>
            <Space h="xl" />
        </div>
    )
}