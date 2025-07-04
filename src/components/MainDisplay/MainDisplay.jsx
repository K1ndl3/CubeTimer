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
                                                   { solveTime: 10.88, scramble: "B U2 R F2", time: "1:11:00" },
                                                   { solveTime: 11.22, scramble: "R U2 R' U2", time: "1:11:45" },
                                                   { solveTime: 12.56, scramble: "L' D2 L U'", time: "1:12:10" },
                                                   { solveTime: 9.84, scramble: "F' U R2 D", time: "1:12:35" },
                                                   { solveTime: 13.42, scramble: "D2 F2 L2 R'", time: "1:13:02" },
                                                   { solveTime: 10.73, scramble: "B L' B' U2", time: "1:13:26" },
                                                   { solveTime: 14.01, scramble: "R2 D' F2 B'", time: "1:13:51" },
                                                   { solveTime: 8.65, scramble: "U F U' R2", time: "1:14:10" },
                                                   { solveTime: 9.56, scramble: "D R' B2 U", time: "1:14:35" },
                                                   { solveTime: 12.88, scramble: "L U' F2 D'", time: "1:15:02" },
                                                   { solveTime: 11.34, scramble: "B' U2 D2 R", time: "1:15:25" },
                                                   { solveTime: 13.90, scramble: "F L2 B' D'", time: "1:15:51" },
                                                   { solveTime: 10.01, scramble: "R' D2 U' L", time: "1:16:16" },
                                                   { solveTime: 9.27, scramble: "U2 F' L' B", time: "1:16:40" },
                                                   { solveTime: 8.91, scramble: "L' F R D2", time: "1:17:02" },
                                                   { solveTime: 12.03, scramble: "R2 U F' L'", time: "1:17:29" },
                                                   { solveTime: 13.66, scramble: "B' R2 U2 D", time: "1:17:52" },
                                                   { solveTime: 11.78, scramble: "D F2 U R", time: "1:18:14" },
                                                   { solveTime: 10.45, scramble: "F' D L' R2", time: "1:18:39" },
                                                   { solveTime: 9.88, scramble: "U R2 B' D'", time: "1:19:01" },
                                                   { solveTime: 14.23, scramble: "L U2 F D2", time: "1:19:28" }]);

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