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
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold">Mission Control</h1>
      <AltitudeGauge H={currentData.H} />
      <VelocityGauge V={currentData.V} />
      <FuelBar F = {currentData.F}/>
      <AngleDisplay D={currentData.D} />
      <FlightChart />
      <ConnectionStatus connected={true} />
      <MissionTimer />
      <MissionStatus V={currentData.V} F={currentData.F} />
    </div>
  )
}