import AppTitle from "./AppTitle/AppTitle"
import Stats from "./Stats/Stats"
import Timer from "./Timer/Timer"
import Scramble from "./Scramble/Scramble"
import arrayContext from "../SolveContext"

import './MainDisplay.css'
import { useContext, useState } from "react"
function MainDisplay() {

    const [statsArray, setStatsArray] = useState( [{ solveTime: 12.34, scramble: "R U R' U'", time: "1:05:32" },
                                                   { solveTime: 8.76, scramble: "L D L' U'", time: "1:06:10" },
                                                   { solveTime: 10.29, scramble: "F R' D2 B", time: "1:06:58" },
                                                   { solveTime: 9.87, scramble: "B2 U' F L", time: "1:07:20" },
                                                   { solveTime: 11.45, scramble: "R2 U2 F2", time: "1:07:59" },
                                                   { solveTime: 13.67, scramble: "U R U' L D", time: "1:08:22" },
                                                   { solveTime: 7.92, scramble: "D' L' B R'", time: "1:09:04" },
                                                   { solveTime: 14.38, scramble: "F' R' U2 D", time: "1:09:40" },
                                                   { solveTime: 9.15, scramble: "U D' L2 F'", time: "1:10:18" },
                                                   { solveTime: 10.88, scramble: "B U2 R F2", time: "1:11:00" }]);

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