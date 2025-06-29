import AppTitle from "./AppTitle/AppTitle"
import Stats from "./Stats/Stats"
import Timer from "./Timer/Timer"
import Scramble from "./Scramble/Scramble"

import './MainDisplay.css'
function MainDisplay() {

    return (
        <>
            <div className="page-wrapper">
                <AppTitle></AppTitle>
                <div className="timer-wrapper">
                    <Stats></Stats>
                    <Timer></Timer>
                    <Scramble></Scramble>
                </div>
            </div>
        </>
    )
}

export default MainDisplay