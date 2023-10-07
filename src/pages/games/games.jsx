import { useEffect } from "react"
import Nav from "../../components/navigation/navigation"
import './games.css'

function Games() {

    useEffect(() => {
        console.log("pass")
    })

    return (
        <>
            <main id='games_main'>
                <h1 id='games_main-h1'>Games</h1>
            </main>
        </>)
}

export default Games