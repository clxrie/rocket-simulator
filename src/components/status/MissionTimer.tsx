import { useEffect, useState } from "react";

function MissionTimer(){
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setSeconds((s) => s + 1);
        }, 1000);

        return() => clearInterval(intervalID);
    }, []);
    
    function formatTime(){
        const minutes = Math.floor(seconds/60).toString().padStart(2, '0')
        const remaining = (seconds % 60).toString().padStart(2, '0'); 
        return `${minutes}:${remaining}`;
    }

    return(
            <div>
                <p className="text-[9px] text-[#3a5a3a] text-right tracking-[0.1em]">MISSION ELAPSED</p>
                <p className="text-3xl font-light text-[#66ff99] tracking-wider">{formatTime()}</p>
            </div>
    );
}

export default MissionTimer;