function MissionStatus({V,F} : {V:number, F: number}){
    
    function missionstat(){
        if( F>0 ){
            return "Ascending";
        }
        else if(F === 0 && V > 0){
            return "Coasting";
        }
        else if(V <= 0){
            return "Descending";
        }
    }
    
    return(
                <div>
                    {missionstat()}
                </div>
            );
}

export default MissionStatus;