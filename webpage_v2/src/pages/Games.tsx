import GAME_ONE from "../components/games/GAME_ONE";
import GAME_TWO from "../components/games/GAME_TWO";
import GAME_THREE from "../components/games/GAME_THREE";
import { Button, Text } from "@mantine/core"
import { useState } from "react"

export default function Games() {

    const [openGame, setOpenGame] = useState(999);

    const gamesList = [
        <GAME_ONE />,
        <GAME_TWO />,
        <GAME_THREE />,
    ];

    return (
        (openGame === 999)
        ?
        <div>
            <Text>When playing a game, use either the button controls or the arrow keys on your keyboard.</Text>
                <br />
            <Text>Refresh the page to play again.</Text>
                <br />
            <Button aria-label='Play game one' radius="lg" fullWidth onClick={() => setOpenGame(0)} variant="outline" color="cyan">Game One</Button>
                <br />
            <Button aria-label='Play game two' radius="lg" fullWidth onClick={() => setOpenGame(1)} variant="outline" color="cyan">Game Two</Button>
                <br />
            <Button aria-label='Play game three' radius="lg" fullWidth onClick={() => setOpenGame(2)} variant="outline" color="cyan">Game Three</Button>

        </div>
        : gamesList[openGame]
    )
}
