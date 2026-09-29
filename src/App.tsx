import { useState,useEffect } from "react"
import AltitudeGauge from "./components/gauges/AltitudeGauge"
import VelocityGauge from "./components/gauges/VelocityGauge"
import FuelBar from "./components/gauges/FuelBar"
import AngleDisplay from "./components/gauges/AngleDisplay"
import FlightChart from "./components/charts/FlightChart"
import ConnectionStatus from "./components/status/ConnectionStatus"
import MissionTimer from "./components/status/MissionTimer"
import MissionStatus from "./components/status/MissionStatus"
import useFakePlayback from "./hooks/useFakePlayback"
import useRocketData from "./hooks/useRocketData"


export default function App() {
  const [flightLog, setFlightLog] = useState<any[]>([])
  const fake = useFakePlayback();
  const live = useRocketData();
  const currentData = live.connected && live.data ? live.data : fake

  useEffect(() => {
  setFlightLog(p => [...p, { ...currentData, time: p.length }])
  }, [currentData])

  function downloadLog() {
  const blob = new Blob([JSON.stringify(flightLog)], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url
  a.download = `flight-log-${Date.now()}.json`
  a.click()
}
  const panel = "border border-[#1a2e1a] bg-[#0d120d] p-4"
  const label = "text-[10px] tracking-[0.2em] text-[#3a5a3a] mb-2"

return (
  <div className="min-h-screen bg-[#0a0e0a] text-[#d4e8d4] p-4 flex flex-col gap-3">

    {/* HEADER */}
    <header className="flex justify-between items-center pb-3 border-b border-[#1a2e1a]">
      <span className="text-4xl tracking-[0.15em] text-white">ROCKETSIM</span>
        <div className="flex items-center gap-8">
        <ConnectionStatus connected={live.connected} />
        <MissionTimer />
        <button
          onClick={downloadLog}
          className="border border-[#2a4a2a] text-[#3ddc84] text-[10px] tracking-[0.1em] px-3 py-2 hover:bg-[#1a2e1a]"
        >
          DOWNLOAD FLIGHT LOG
        </button>
      </div>
    </header>

   
    <main className="grid grid-cols-4 gap-3">
      <section className={`${panel} row-span-2 flex flex-col overflow-hidden`}>
          <p className={label}>VEHICLE</p>
          <div className="flex-1 min-h-0 flex items-center justify-center">
            <img src="/rocket.png" alt="Rocket" className="max-h-[520px] w-full object-contain opacity-90" />
          </div>
      </section>
      

      <section className={`${panel} col-span-3`}>
          <p className={label}>ALTITUDE (m)</p>
          <FlightChart history={flightLog} dataKey="H" height={260} />
      </section>

      <div className="col-span-3 grid grid-cols-2 gap-3">
        <section className={panel}>
          <p className={label}>VELOCITY (m/s)</p>
          <FlightChart history={flightLog} dataKey="V" height={160} />
        </section>
        <section className={panel}>
          <p className={label}>FUEL MASS (kg)</p>
          <FlightChart history={flightLog} dataKey="F" height={160} />
        </section>
      </div>
    </main>

    {/* all the stats */}
    <section className="grid grid-cols-4 gap-3">
      <AltitudeGauge H={currentData.H} />
      <VelocityGauge V={currentData.V} />
      <FuelBar F={currentData.F} />
      <AngleDisplay angle={currentData.angle} />
    </section>

    {/* STATUS */}
    <section className={panel}>
      <MissionStatus V={currentData.V} F={currentData.F} />
    </section>

    <section className={`${panel} h-32 overflow-hidden`}>
      <p className={label}>TELEMETRY FEED</p>
      {flightLog.slice(-5).reverse().map((point) => (
        <p key={point.time} className="text-[11px] text-[#3a5a3a] truncate">
          &gt; T+{point.time}s  ALT {point.H.toFixed(0)}m  VEL {point.V.toFixed(0)}m/s  FUEL {point.F.toFixed(0)}kg  ANG {point.angle.toFixed(1)}°
        </p>
      ))}
    </section>

  </div>
)
}