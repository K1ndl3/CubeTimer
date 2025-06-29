import { useState } from "react"
import './Stats.css'
function Stats(){
    const [extended, setExtended] = useState(false);
    
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

            </div>
            <div className="solve-history">
            </div>
        </div>
    </>)
}

export default Stats