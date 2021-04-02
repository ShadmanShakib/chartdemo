import React from 'react'
import { FunnelChart, Tooltip, Funnel, LabelList } from 'recharts'

const data = [
    {
      "value": 100,
      "name": "Value 1",
      "fill": "#8884d8"
    },
    {
      "value": 80,
      "name": "Value 2",
      "fill": "#83a6ed"
    },
    {
      "value": 50,
      "name": "Value 3",
      "fill": "#8dd1e1"
    },
    {
      "value": 40,
      "name": "Value 4",
      "fill": "#82ca9d"
    },
    {
      "value": 26,
      "name": "Value 5",
      "fill": "#a4de6c"
    }
  ]

function FunnelCharts() {
    return (
        <div className="bg-white p-10 rounded-md shadow-lg">
            <FunnelChart width={500} height={350}>
              <Tooltip />
             <Funnel
              dataKey="value"
               data={data}
               isAnimationActive
               >
             <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
              </Funnel>
           </FunnelChart>
        </div>
    )
}

export default FunnelCharts
