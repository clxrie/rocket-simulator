function AltitudeGauge({H} : {H:number}){
    return(
        <div className="border border-[#1a2e1a] bg-[#111811] p-4">
            <p className="text-[9px] text-[#6a8a6a] tracking-[0.1em] mb-1">ALTITUDE</p>
            <p className="text-3xl font-bold text-[#66ff99]">
            {H.toLocaleString(undefined, {maximumFractionDigits: 0})}
            <span className="text-sm font-normal text-[#6a8a6a] ml-1">m</span>
            </p>
        </div>

    );

}
export default AltitudeGauge