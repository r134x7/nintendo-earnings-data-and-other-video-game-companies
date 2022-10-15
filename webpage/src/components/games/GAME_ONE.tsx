import { Field } from "../../classes/Field";
import { Unit } from "../../classes/Unit";

export default function GAME_ONE() {

    const field = new Field(2,2);
    const playerOne = new Unit(field, 0, 0, 100, 10);
    const playerTwo = new Unit(field, field.getX, field.getY, 100, 10);

    // need to think how to set up a field visually...

    return (
        <div>
            test...
        </div>
    )
}