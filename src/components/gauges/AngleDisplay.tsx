function AngleDisplay({D} : {D: [number, number, number];}){
    const angle = Math.atan2(D[0], D[1]) * (180 / Math.PI)
    return(
            <div className="bg-gray-800 rounded-lg p-4">
            <label>Tilt Angle:</label>
            <p>{angle.toFixed(0)}°</p>
            <div className="w-full h-4 bg-gray-700 rounded-full">
                <div className="h-full rounded-full bg-green-500" style={{ width: `${angle}°` }}>

                </div>
                
            </div>
        </div>
    );

}
export default AngleDisplay