function AltitudeGauge({H} : {H:number}){
    return(
        <div className="bg-gray-800 rounded-lg p-4">
            <label>Altitude: {H.toLocaleString()}m</label>
        </div>

    );

}
export default AltitudeGauge