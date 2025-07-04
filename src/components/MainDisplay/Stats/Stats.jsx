import { useContext, useState } from "react"
import './Stats.css'
import arrayContext from "../../SolveContext";
function Stats(){
    const [extended, setExtended] = useState(false);
    const {statsArray, setStatsArray} = useContext(arrayContext);
    
    const extendStatsBar = () => {
        setExtended(prev => (!prev));
    }

    const statsHeight = (extended ? '600px' : '300px');
    return (<>
        <div className="stats-wrapper" style={{height: statsHeight}}>
            <div className="button-wrapper">
                <button className="extend-button" onClick={() => extendStatsBar()}>
                    ☰
                </button>
            </div>

            <div className="main-stats" style={{height: '200px', width: '280px', border: 'solid', marginLeft:'7px'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officia distinctio deserunt totam vel! Autem iusto soluta vitae praesentium! Nisi incidunt voluptate laboriosam quo ea reiciendis culpa quae qui vel?
            </div>

            <div className="solve-history">
                {statsArray.map((timeObj, timeIndex) => {
                    return (
                        <button key={timeIndex}>{timeObj.solveTime}</button>
                    )
                })}
            </div>
        </div>
    </>)
}

export default Stats