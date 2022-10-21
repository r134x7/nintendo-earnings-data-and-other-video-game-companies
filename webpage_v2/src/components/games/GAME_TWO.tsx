import { Code, Button, SimpleGrid } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { Field } from "../../classes/Field";
import { Unit } from "../../classes/Unit";

// need to try making a function here that spawns objects...

const field = new Field(3,0);
const playerOne = new Unit(field, 0, 0, 3, 1, "X=----=O")

export default function GAME_TWO() {

    const right = () => {
        // if (playerOne.getHitPoints <= 0 || playerTwo.getHitPoints <= 0) {
        //     return
        // }

            // playerOne.incrementPositionXPlus()
            // setPlayerField(visualField)
            // setHitPoints(displayHP);
    }

    const left = () => {
        // if (playerOne.getHitPoints <= 0 || playerTwo.getHitPoints <= 0) {
        //     return
        // }

        //     playerOne.incrementPositionXMinus()
        //     setPlayerField(visualField)
        //     setHitPoints(displayHP);
    }

    useHotkeys([
        ["ArrowLeft", () => left()],
        ["ArrowRight", () => right()],
    ]);

    return (
        <div>
            <Code block>
                something
            </Code>
            <SimpleGrid cols={2}>
                <Button variant="outline" radius={"lg"} color="red"  fullWidth>
                   Left 
                </Button>
                <Button variant="outline" radius={"lg"} color="red"  fullWidth>
                    Right
                </Button>
            </SimpleGrid>
        </div>
    )
}