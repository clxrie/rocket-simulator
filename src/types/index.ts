interface TelemetryData {
  type: "telemetry";
  timestamp_ms: number;
  H: number;        // altitude in meters
  V: number;        // velocity in m/s
  D: [number, number, number];  // direction vector [x, y, z]
  F: number;        // fuel mass in kg
}