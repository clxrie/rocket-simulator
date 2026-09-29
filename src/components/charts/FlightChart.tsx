import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
type Props = {
  history: Record<string, number>[]
  dataKey: string
  height?: number
}

function FlightChart({ history, dataKey, height = 400 }: Props) {

    return(
        <ResponsiveContainer width="100%" height={height}>
  <LineChart data={history}>
    <CartesianGrid stroke="#1a2e1a" strokeWidth={0.5} />
    <XAxis
      dataKey="time"
      minTickGap={40}
      stroke="#1a2e1a"
      tick={{ fill: '#3a5a3a', fontSize: 9, fontFamily: 'JetBrains Mono' }}
  />
    <YAxis 
      stroke="#1a2e1a"
      tick={{ fill: '#3a5a3a', fontSize: 9, fontFamily: 'JetBrains Mono' }}
    />
    <Tooltip 
      contentStyle={{ 
        backgroundColor: '#111811', 
        border: '1px solid #2a4a2a',
        fontFamily: 'JetBrains Mono',
        fontSize: 11,
        color: '#66ff99'
      }}
    />
    <Line 
      dataKey={dataKey}
      stroke="#3ddc84" 
      strokeWidth={1.5}
      dot={false} 
      type="monotone"
    />
  </LineChart>
</ResponsiveContainer>
    );
}
export default FlightChart