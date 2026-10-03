import { useState, useEffect } from 'react'

const BRIDGE_URL = "ws://localhost:8080"
const START_MASS = 531170  // kg, full rocket at launch 
const DRY_MASS = 25005     // kg, empty rocket 
const RETRY_MS = 3000

export type TelemetryData = {
  H: number
  V: number
  F: number
  fuelPct: number
  angle: number
  distance: number
}

export default function useRocketData(enabled: boolean) {
  const [data, setData] = useState<TelemetryData | null>(null)
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    if (!enabled) return

    let socket: WebSocket
    let retryTimer: number
    let stopped = false

    function connect() {
      socket = new WebSocket(BRIDGE_URL)

      socket.onopen = () => {
        socket.send("TELEMETRY")
        setConnected(true)
      }

      socket.onmessage = (event) => {
        try {
          const raw = JSON.parse(event.data)
          console.log(raw)
          const fuel = raw.mass - DRY_MASS
          setData({
            H: raw.altitude,
            V: raw.velocity,
            F: fuel,
            fuelPct: (fuel / (START_MASS - DRY_MASS)) * 100,
            angle: 90 - raw.angle,
            distance: raw.distance,
          })
        } catch (err) {
          console.error("Bad message from Pi:", event.data, err)
        }
      }

      socket.onerror = (err) => console.error("WebSocket error:", err)

      socket.onclose = () => {
        setConnected(false)
        if (!stopped) retryTimer = window.setTimeout(connect, RETRY_MS)
      }
    }

    connect()

    return () => {
      stopped = true
      clearTimeout(retryTimer)
      socket.close()
    }
  }, [enabled])

  return { data, connected }
}