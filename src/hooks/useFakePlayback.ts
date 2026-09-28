import { useEffect, useState } from "react";
import { flightData } from "../data/fakeFlight";

function useFakePlayback(){
    const [index, setIndex] = useState(0);
    
        useEffect(() => {
            const intervalID = setInterval(() => {
                setIndex((i) => i < flightData.length - 1 ? i + 1 : i)
            }, 1000);
            
        
            return() => clearInterval(intervalID);
        }, []);
        const point = flightData[index]

        return {
        H: point.H,
        V: point.V,
        F: point.F,
        angle: Math.atan2(point.D[0], point.D[1]) * (180 / Math.PI),
        distance: 0
        }
        
        
}
export default useFakePlayback;