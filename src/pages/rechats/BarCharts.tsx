import React from 'react'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import { data } from './data'

function BarCharts() {
    return (
        <div className="bg-white p-10 rounded-md shadow-lg">
            <BarChart width={500} height={250} data={data}>
                <CartesianGrid strokeDasharray="4 4"/>
                <XAxis dataKey='name'/>
                <YAxis/>
                <Tooltip/>
                <Bar dataKey='value 1' fill="#8884d8"/>
                <Bar dataKey="value 2" fill="red"/>
            </BarChart>
        </div>
    )
}

export default BarCharts
