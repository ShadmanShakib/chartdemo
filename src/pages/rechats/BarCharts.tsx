import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import { data } from './data'

function BarCharts() {
    return (
        <div className="bg-white p-10 rounded-md shadow-lg">
            <BarChart width={500} height={350} data={data}>
                <CartesianGrid strokeDasharray="4 4"/>
                <XAxis dataKey='name'/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey='value 1' fill="#8884d8"/>
                <Bar dataKey="value 2" fill="red"/>
            </BarChart>
        </div>
    )
}

export default BarCharts
