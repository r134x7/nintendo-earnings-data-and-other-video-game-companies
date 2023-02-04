import GAME_ONE from "../components/games/GAME_ONE";
import GAME_TWO from "../components/games/GAME_TWO";
import GAME_THREE from "../components/games/GAME_THREE";
import GAME_FOUR from "../components/games/GAME_FOUR";
import GAME_FIVE from "../components/games/GAME_FIVE";
import { Button } from "@mantine/core"
import { useState } from "react"
import { useSingleMessage } from "../utils/table_design_logic";
import { Stack, Code } from "@mantine/core";
import { useSelector } from "react-redux";

export default function Games() {

    const state: any = useSelector(state => state);

    const [openGame, setOpenGame] = useState(999);

    const gamesList = [
        <GAME_ONE />,
        <GAME_TWO />,
        <GAME_THREE />,
        <GAME_FOUR />,
        <GAME_FIVE />,
    ];

    const messageOne = "When playing a game, use either the button controls or the arrow keys on your keyboard.";
    
    const messageTwo = "To go back to the Games page, click Home and then click Games. If that doesn't work, refresh the page.";

    const makeTextOne = useSingleMessage(messageOne, 40, "−", 80);

    const makeTextTwo =  useSingleMessage(messageTwo, 40, "=", 80);

    return (
        (openGame === 999)
        ?
        <div>
            <Stack mb="md" align="center">
            <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
                {makeTextOne}
                {makeTextTwo}
            </Code>
            </Stack>
            <Button aria-label='Play game one' radius="lg" fullWidth onClick={() => setOpenGame(0)} variant="outline" color="cyan">Game One</Button>
                <br />
            <Button aria-label='Play game two' radius="lg" fullWidth onClick={() => setOpenGame(1)} variant="outline" color="cyan">Game Two</Button>
                <br />
            <Button aria-label='Play game one plus' radius="lg" fullWidth onClick={() => setOpenGame(2)} variant="outline" color="cyan">Game One Plus</Button>
                <br />
            <Button aria-label='Play game one plus' radius="lg" fullWidth onClick={() => setOpenGame(3)} variant="outline" color="cyan">Tech Demo</Button>
                <br />
            <Button aria-label='Play game one plus' radius="lg" fullWidth onClick={() => setOpenGame(4)} variant="outline" color="cyan">Game Three</Button>

        </div>
        : gamesList[openGame]
    )
}
