function VelocityGauge({V} : {V: number}){

    return(
        <div className="bg-gray-800 rounded-lg p-4">
            <label>Altitude: {V.toLocaleString()}m</label>
        </div>
    );
}
export default VelocityGauge