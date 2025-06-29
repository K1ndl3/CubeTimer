import AppTitle from "./AppTitle/AppTitle"
import Stats from "./Stats/Stats"
import Timer from "./Timer/Timer"
import Scramble from "./Scramble/Scramble"
import arrayContext from "../SolveContext"

import './MainDisplay.css'
import { useContext, useState } from "react"
function MainDisplay() {

    const [statsArray, setStatsArray] = useState( [{solveTime: 10.12, scramble: "R U D", time: "1:23:45"}, 
                                                   {solveTime: 9.11, scramble: "R' U' D'", time: "1:23:45"}, 
                                                   {solveTime: 11.12, scramble: "B U D", time: "1:23:45"}])

    return (
        <>
            <arrayContext.Provider value={{statsArray, setStatsArray}}>
            <div className="page-wrapper">
                <AppTitle></AppTitle>
                <div className="timer-wrapper">
                    <Stats></Stats>
                    <Timer></Timer>
                    <Scramble></Scramble>
                </div>
            </div>
            </arrayContext.Provider>
        </>
    )
}

export default MainDisplay