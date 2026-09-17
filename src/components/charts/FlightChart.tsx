import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { flightData } from '../../data/fakeFlight'

function FlightChart(){

    return(
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={flightData}>
                <XAxis dataKey="time"/>
                <YAxis />
                <CartesianGrid />
                <Tooltip />
                <Line dataKey="H" stroke="#22c55e" dot={false} />
            </LineChart>
        </ResponsiveContainer>
    );
}
export default FlightChart