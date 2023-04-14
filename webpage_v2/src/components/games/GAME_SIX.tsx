import { Code, SimpleGrid } from "@mantine/core";
import { useSingleMessage } from "../../utils/table_design_logic";
import { usePrompt } from "../../utils/game_design_logic";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useInterval, useHotkeys } from "@mantine/hooks";
import { spacer } from "../../utils/table_design_logic";
import { UnitTypeTwo } from "../../classes/UnitsTypeTwo";

// type unitType = {
//     name: string,
//     body: string,
//     xPosition: number,
//     yPosition: number,
//     hp: number,
//     attack: number,
// }



const player = new Map<number, UnitTypeTwo>([
    [0, new UnitTypeTwo("player","x",0,0,10,3)]
])

const enemies = new Map<number, UnitTypeTwo>([
    [0, new UnitTypeTwo("some guy","\(-_-)/",39,0,5,1)]
])

const stage = new Map<number, string>([
    [0, "_".repeat(40)]
])

export default function GAME_SIX() {
    
    const state: any = useSelector(state => state);


    return (
        <div>
            <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
            </Code>
            <SimpleGrid mt={"lg"} verticalSpacing={"xl"} cols={2}>
            </SimpleGrid>
        </div>
    )
}

//putting specific game logic into the same file this time but separate function
export function useTimedStageGameSix (level: string, milliseconds: number) {

    useHotkeys([
        // ["ArrowDown", () => down()],
        // ["ArrowUp", () => up()],
        ["ArrowLeft", () => player.get(0)?.setXLeft()],
        ["ArrowRight", () => player.get(0)?.setXRight()],
        ["Space", () => jump()],
        // ["d", () => strikeThrough()],
    ]);

    const [field, setField] = useState("");
    const [seconds, setSeconds] = useState(0);

    const interval = useInterval(() => setSeconds((s) => s + 1), milliseconds);

    function screenDisplay(): string {

        
        //probably reuse Game Five yField 
        // need to use the method to put both player and enemies on the same x position.
        return Array.from({length: 12}, (v,i) => {

            let allUnits: UnitTypeTwo[] = [];

            enemies.forEach((value, key) => allUnits.push(value))

            player.forEach((value, key) => allUnits.push(value))

            // 0, 3, 6, 9
            // 11 - i should solve the upside down display...
            let reduceAllUnits: string = allUnits.reduce((acc, next) => {
                if (next.getY() === Math.floor(11 - i)) {

                        if (acc.length === 0) {
                          return  acc + (" ".repeat(next.getX()) + next.getBody())
                        } else {
                            return acc + (" ".repeat((next.getX() - acc.length < 0) ? 1 : next.getX() - acc.length) + next.getBody)
                        }
                } else {
                    return acc
                }
            }, "")

            return (reduceAllUnits.length === 0)
                ? spacer(" ", 40,"left")
                : spacer(reduceAllUnits, 40, "left")
        }).reduce((acc, next) => acc + "\n" + next);
    }

    const getField = screenDisplay();

    function jump() {

        // need to... have a pretty high field 
        // y position has to go from 0 to 5 to 0
        // should have it increase by 1 per increment
        if ((player.get(0)?.getY() ?? 0) < 11) {
            player.get(0)?.setYUp();
        }

        setTimeout(() => {
            if ((player.get(0)?.getY() ?? 0) > 0) {
                player.get(0)?.setYDown();
            }
        }, 100);
    }

    useEffect(() => {

        interval.start()

        setField(getField);
    })
} 
