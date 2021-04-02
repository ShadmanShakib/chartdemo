import React from 'react'
import { PieChart, Tooltip, Pie } from 'recharts'
import { data } from './data'

function PieCharts() {
    return (
        <div className="bg-white rounded-md shadow-lg p-10">
          <PieChart width={500 } height={350}>
  <Tooltip/>
  <Pie data={data} dataKey="value 1" nameKey="name" cx='50%' cy="50%" outerRadius={50} fill="blue" />
  <Pie data={data} dataKey="value 2" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>  
        </div>
    )
}

export default PieCharts
