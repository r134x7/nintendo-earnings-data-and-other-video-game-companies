import { Field } from "../../classes/Field";
import { Unit } from "../../classes/Unit";
import { useState, useEffect } from "react";
import { Code } from "@mantine/core";


export default function GAME_ONE() {

    const field = new Field(2,2);
    const playerOne = new Unit(field, 0, 0, 100, 10);
    const playerTwo = new Unit(field, field.getX, field.getY, 100, 10);

    // need to think how to set up a field visually...

const visualField = `
------------------------------
|         |         |        |
------------------------------
|         |         |        |
------------------------------
|         |         |        |
------------------------------`;

    const [playerField, setPlayerField] = useState(visualField);

    return (
        <div>
            <Code >{playerField}</Code>
        </div>
    )
}