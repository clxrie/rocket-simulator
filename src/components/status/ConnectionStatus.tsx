function ConnectionStatus({connected}: {connected: boolean}) {
  return (
    <div className="flex items-center gap-2 text-[10px] text-[#6a8a6a] tracking-[0.1em]">
      <div className={`w-1.5 h-1.5 rounded-full ${connected ? "bg-[#3ddc84] shadow-[0_0_8px_#3ddc84]" : "bg-red-500 shadow-[0_0_8px_#ff4444]"}`} />
      {connected ? "CONNECTED" : "DISCONNECTED"}
    </div>
  )
}

export default ConnectionStatus