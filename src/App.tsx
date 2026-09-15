import { flightData } from "./data/fakeFlight"
import AltitudeGauge from "./components/gauges/AltitudeGauge"
import VelocityGauge from "./components/gauges/VelocityGauge"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold">Mission Control</h1>
      <AltitudeGauge H={flightData[300].H} />
      <VelocityGauge V={flightData[300].V} />
    </div>
  )
}