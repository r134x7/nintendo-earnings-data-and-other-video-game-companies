import { Field } from "../../classes/Field";
import { Unit } from "../../classes/Unit";
import { useState, useEffect } from "react";
import { Code } from "@mantine/core";

export default function GAME_ONE() {

    const field = new Field(2,2);
    const playerOne = new Unit(field, 0, 0, 100, 10, "X");
    const playerTwo = new Unit(field, field.getX, field.getY, 100, 10, "O");

    // need to think how to set up a field visually...
    // need to think how to put the players on the field...

    // const ifPlayerOnePosition = ()

const visualField = 
`------------------------------
|         |         |        |
|         |         |        |
------------------------------
|         |         |        |
|         |         |        |
------------------------------
|         |         |        |
|         |         |        |
------------------------------`;

    const [playerField, setPlayerField] = useState(visualField);

    return (
        <div>
            <Code block>{playerField}</Code>
        </div>
    )
}