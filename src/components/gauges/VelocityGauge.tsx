function VelocityGauge({V} : {V: number}){

    return(
        <div className="border border-[#1a2e1a] bg-[#111811] p-4">
            <p className="text-[9px] text-[#6a8a6a] tracking-[0.1em] mb-1">VELOCITY</p>
            <p className="text-3xl font-bold text-[#66ff99]">
            {V.toLocaleString(undefined, {maximumFractionDigits: 0})}
            <span className="text-sm font-normal text-[#6a8a6a] ml-1">m/s</span>
            </p>
        </div>
    );
}
export default VelocityGauge