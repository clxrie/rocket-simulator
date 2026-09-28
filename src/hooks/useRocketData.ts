import { useState, useEffect } from 'react'

type TelemetryData = {
  H: number
  V: number
  F: number
  angle: number
  distance: number
}

export default function useRocketData() {
  const [data, setData] = useState<TelemetryData | null>(null)
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    const socket = new WebSocket("ws://10.80.49.23:5555")

    socket.onopen = () => {
      socket.send("TELEMETRY")
      setConnected(true)
    }

    socket.onmessage = (event) => {
      try {
        const raw = JSON.parse(event.data)
        console.log(raw)
        setData({
          H: raw.altitude,
          V: raw.velocity,
          F: raw.mass,
          angle: raw.angle,
          distance: raw.distance,
        })
      } catch (err) {
        console.error("Bad message from Pi:", event.data, err)
      }
    }

    socket.onerror = (err) => {
      console.error("WebSocket error:", err)
    }

    socket.onclose = () => {
      setConnected(false)
    }

    return () => socket.close()
  }, [])

  return { data, connected }
}