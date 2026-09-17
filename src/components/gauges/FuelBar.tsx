function FuelBar({F} : {F: number}){
    const percentage = (F / 393260) * 100
    return(
        <div className="bg-gray-800 rounded-lg p-4">
            <label>Fuel:</label>
            <p>{percentage.toFixed(0)}%</p>
            <div className="w-full h-4 bg-gray-700 rounded-full">
                <div className="h-full rounded-full bg-green-500" style={{ width: `${percentage}%` }}>

                </div>
                
            </div>
        </div>
    );
}
export default FuelBar