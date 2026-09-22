function MissionStatus({V, F}: {V: number, F: number}) {
  function getPhase() {
    if (F > 0) return "ASCENT — POWERED"
    if (V > 0) return "ASCENT — COASTING"
    return "DESCENT"
  }

  return (
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-[#3ddc84] animate-pulse" />
      <span className="text-[11px] text-[#3ddc84] tracking-[0.05em] font-medium">{getPhase()}</span>
    </div>
  )
}

export default MissionStatus;