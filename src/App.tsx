import AltitudeGauge from "./components/gauges/AltitudeGauge"
import VelocityGauge from "./components/gauges/VelocityGauge"
import FuelBar from "./components/gauges/FuelBar"
import AngleDisplay from "./components/gauges/AngleDisplay"
import FlightChart from "./components/charts/FlightChart"
import ConnectionStatus from "./components/status/ConnectionStatus"
import MissionTimer from "./components/status/MissionTimer"
import MissionStatus from "./components/status/MissionStatus"
import useFakePlayback from "./hooks/useFakePlayback"

export default function App() {
  const currentData = useFakePlayback()
  return (
    <div className="min-h-screen bg-[#0a0e0a] text-[#d4e8d4] p-4">


  <div className="flex justify-between items-center pb-3 mb-3 border-b border-[#1a2e1a]">
    <div>
      <span className="text-4xl tracking-[0.15em] text-white">ROCKETSIM</span>
    </div>
    <ConnectionStatus connected={true} />
    <MissionTimer />
  </div>

  
  <div className="grid grid-cols-4 gap-3">
    <div className="col-span-3 border border-[#1a2e1a] bg-[#0d120d] p-4">
      <FlightChart />
    </div>
    <div className="flex flex-col gap-3">
      <AltitudeGauge H={currentData.H} />
      <VelocityGauge V={currentData.V} />
      <FuelBar F={currentData.F} />
      <AngleDisplay D={currentData.D} />
    </div>
  </div>

  
  <div className="mt-3 pt-3 border-t border-[#1a2e1a]">
    <MissionStatus V={currentData.V} F={currentData.F} />
  </div>

</div>
  )
}