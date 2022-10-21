import GAME_ONE from "../components/games/GAME_ONE"
import { Button } from "@mantine/core"
import { useState } from "react"

export default function Games() {

    const [openGame, setOpenGame] = useState("");

    return (
        (openGame === "")
        ?
        <div>
            <Button aria-label='Play game one' radius="lg" fullWidth onClick={() => setOpenGame("Game One")} variant="outline" color="cyan">Game One</Button>
                <br />
            <Button aria-label='Play game two' radius="lg" fullWidth onClick={() => setOpenGame("Game Two")} variant="outline" color="cyan">Game Two</Button>
        </div>
        : (openGame === "Game One")
        ? <GAME_ONE />
        : null
    )
}