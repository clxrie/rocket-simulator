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

        return(flightData[index]);
        
        
}
export default useFakePlayback;