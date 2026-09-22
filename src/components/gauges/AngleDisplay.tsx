function AngleDisplay({D}: {D: [number, number, number]}) {
  const angle = Math.atan2(D[0], D[1]) * (180 / Math.PI)

  return (
    <div className="border border-[#1a2e1a] bg-[#111811] p-4">
      <p className="text-[9px] text-[#6a8a6a] tracking-[0.1em] mb-1">TILT ANGLE</p>
      <div className="flex items-center gap-4">
        {/* Circle with needle */}
        <div className="w-12 h-12 rounded-full border border-[#2a4a2a] relative flex-shrink-0">
          <div 
            className="absolute bottom-1/2 left-1/2 w-0.5 h-4 bg-[#3ddc84] rounded-sm origin-bottom"
            style={{ 
              transform: `translateX(-50%) rotate(${angle}deg)`,
              boxShadow: '0 0 4px #3ddc84'
            }}
          />
        </div>
        {/* Number */}
        <p className="text-3xl font-bold text-[#66ff99]">
          {angle.toFixed(1)}
          <span className="text-sm font-normal text-[#6a8a6a] ml-1">°</span>
        </p>
      </div>
    </div>
  )
}
export default AngleDisplay