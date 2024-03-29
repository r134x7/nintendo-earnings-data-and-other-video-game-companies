import GAME_ONE from "../components/games/GAME_ONE";
import GAME_TWO from "../components/games/GAME_TWO";
import GAME_THREE from "../components/games/GAME_THREE";
import GAME_FOUR from "../components/games/GAME_FOUR";
import GAME_FIVE from "../components/games/GAME_FIVE";
import GAME_SIX from "../components/games/GAME_SIX";
import { Button } from "@mantine/core"
import { useState } from "react"
import { useSingleMessage } from "../utils/table_design_logic";
import { Stack, Code } from "@mantine/core";
import { useSelector } from "react-redux";
import type { BackgroundColours } from "../features/backgroundReducer";

export default function Games() {

    const stateColour = useSelector((state: BackgroundColours) => state.colour);
    const stateFontColor = useSelector((state: BackgroundColours) => state.fontColor);

    const [openGame, setOpenGame] = useState(999);

    const gamesList = [
        <GAME_ONE />,
        <GAME_TWO />,
        <GAME_THREE />,
        <GAME_FOUR />,
        <GAME_FIVE />,
        <GAME_SIX />,
    ];

    const messageOne = "When playing a game, use either the button controls or the arrow keys on your keyboard.";
    
    const messageTwo = "To go back to the Games page, click Home and then click Games. If that doesn't work, refresh the page.";

    const messageThree = "Tech Demo Plus keyboard controls: Right Key = Next, Down Key = Draw Card!";

    const makeTextOne = useSingleMessage(messageOne, 40, "−", 80);

    const makeTextTwo =  useSingleMessage(messageTwo, 40, "=", 80);

    const makeTextThree =  useSingleMessage(messageThree, 40, "=", 80);

    return (
        (openGame === 999)
        ?
        <div>
            <Stack mb="md" align="center">
            <Code style={{backgroundColor:`${stateColour}`, color:(stateFontColor === "dark") ? "#fff" : "#000000"}} block>
                {makeTextOne}
                {makeTextTwo}
                {makeTextThree}
            </Code>
            </Stack>
            <Button aria-label='Play game one' radius="lg" fullWidth onClick={() => setOpenGame(0)} variant="outline" color="cyan">Game One</Button>
                <br />
            <Button aria-label='Play game two' radius="lg" fullWidth onClick={() => setOpenGame(1)} variant="outline" color="cyan">Game Two</Button>
                <br />
            <Button aria-label='Play game one plus' radius="lg" fullWidth onClick={() => setOpenGame(2)} variant="outline" color="cyan">Game One Plus</Button>
                <br />
            <Button aria-label='Tech demo plus' radius="lg" fullWidth onClick={() => setOpenGame(3)} variant="outline" color="cyan">Tech Demo Plus</Button>
                <br />
            <Button aria-label='Game Three' radius="lg" fullWidth onClick={() => setOpenGame(4)} variant="outline" color="cyan">Game Three Plus</Button>
                <br />
            <Button aria-label='Game Four' radius="lg" fullWidth onClick={() => setOpenGame(5)} variant="outline" color="cyan">Game Four</Button>

        </div>
        : gamesList[openGame]
    )
}
