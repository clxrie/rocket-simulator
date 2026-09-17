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
                {formatTime()}
            </div>
    );
}

export default MissionTimer;