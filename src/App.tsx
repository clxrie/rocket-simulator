import { flightData } from "./data/fakeFlight"
import AltitudeGauge from "./components/gauges/AltitudeGauge"
import VelocityGauge from "./components/gauges/VelocityGauge"
import FuelBar from "./components/gauges/FuelBar"
import AngleDisplay from "./components/gauges/AngleDisplay"
import FlightChart from "./components/charts/FlightChart"
import ConnectionStatus from "./components/status/ConnectionStatus"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold">Mission Control</h1>
      <AltitudeGauge H={flightData[300].H} />
      <VelocityGauge V={flightData[300].V} />
      <FuelBar F = {flightData[300].F}/>
      <AngleDisplay D={flightData[150].D} />
      <FlightChart />
      <ConnectionStatus connected={true} />
    </div>
  )
}