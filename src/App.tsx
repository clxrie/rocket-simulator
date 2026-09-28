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
  if (currentData) {
    setFlightLog(prev => [...prev, currentData])
    }
  }, [currentData])

  function downloadLog() {
  const blob = new Blob([JSON.stringify(flightLog)], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url
  a.download = `flight-log-${Date.now()}.json`
  a.click()
}
  return (
    <div className="min-h-screen bg-[#0a0e0a] text-[#d4e8d4] p-4">


  <div className="flex justify-between items-center pb-3 mb-3 border-b border-[#1a2e1a]">
    <div>
      <span className="text-4xl tracking-[0.15em] text-white">ROCKETSIM</span>
    </div>
    <ConnectionStatus connected={live.connected} />
    <MissionTimer />
  </div>

  
  <div className="grid grid-cols-4 gap-3">
    <div className="col-span-3 border border-[#1a2e1a] bg-[#0d120d] p-4">
      <FlightChart history={flightLog} />
    </div>
    <div className="flex flex-col gap-3">
      <AltitudeGauge H={currentData.H} />
      <VelocityGauge V={currentData.V} />
      <FuelBar F={currentData.F} />
      <AngleDisplay angle={currentData.angle} />
    </div>
  </div>
    <button 
  onClick={downloadLog}
  className="border border-[#2a4a2a] text-[#3ddc84] text-[10px] tracking-[0.1em] px-3 py-1 hover:bg-[#1a2e1a]"
>
  DOWNLOAD FLIGHT LOG
</button>
  
  <div className="mt-3 pt-3 border-t border-[#1a2e1a]">
    <MissionStatus V={currentData.V} F={currentData.F} />
  </div>

</div>
  )
}