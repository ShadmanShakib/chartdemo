import React from 'react'
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Area, Bar, Line } from 'recharts'
import { data } from './data'

function Composed() {
    return (
        <div className="bg-white p-10 rounded-md shadow-lg">
           <ComposedChart width={500} height={250} data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
  <Bar dataKey="value 2" barSize={20} fill="#413ea0" />
  <Line type="monotone" dataKey="value 1" stroke="#ff7300" />
</ComposedChart> 
        </div>
    )
}

export default Composed
