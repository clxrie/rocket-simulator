function FuelBar({ percent }: { percent: number }) {
  const percentage = Math.min(100, Math.max(0, percent))

  const barColor = percentage < 20 
    ? "bg-red-500 shadow-[0_0_6px_#ff4444]" 
    : percentage < 50 
    ? "bg-amber-400 shadow-[0_0_6px_#ffb300]" 
    : "bg-[#3ddc84] shadow-[0_0_6px_#3ddc84]"

  return (
    <div className="border border-[#1a2e1a] bg-[#111811] p-4">
      <p className="text-[9px] text-[#6a8a6a] tracking-[0.1em] mb-1">FUEL MASS</p>
      <p className="text-3xl font-bold text-[#66ff99]">
        {percentage.toFixed(0)}
        <span className="text-sm font-normal text-[#6a8a6a] ml-1">%</span>
      </p>
      <div className="w-full h-1.5 bg-[#0a0e0a] border border-[#1a2e1a] mt-2">
        <div 
          className={`h-full transition-all duration-700 ${barColor}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
export default FuelBar