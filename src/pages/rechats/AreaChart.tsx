import React from 'react';
import {Area,AreaChart,XAxis,YAxis ,CartesianGrid,Tooltip} from 'recharts';
import {data} from './data'

function AreaCharts() {
    return (
        <React.Fragment>
          <div className="bg-white p-10 shadow-lg rounded-md">
            <AreaChart width={500} height={450} data={data} 
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="value 1" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="value 2" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart >
</div>
        </React.Fragment>
    )
}

export default AreaCharts;
