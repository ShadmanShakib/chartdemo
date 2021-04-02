import React from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import { data } from './data';


function LineCharts() {
    return (
        <div className="bg-white p-10 rounded-md shadow-lg ">
           
            <LineChart width={500} height={350} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value 2" stroke="#8884d8" />
                <Line type="monotone" dataKey="value 1" stroke="#82ca9d" />
            </LineChart>
        </div>
    )
}

export default LineCharts
