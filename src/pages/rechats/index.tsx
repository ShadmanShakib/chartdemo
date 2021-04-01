import React from 'react'
import { RouteComponentProps } from '@reach/router'
import AreaCharts from './AreaChart'
import BarCharts from './BarCharts'
import LineCharts from './LineCharts'
import Composed from './Composed'
import PieCharts from './PieCharts'
import RadarCharts from './RadarCharts'
import ReadialBarCharts from './ReadialBarCharts'
import ScatterCharts from './ScatterCharts'
import FunnelCharts from './FunnelCharts';



function Recharts(props:RouteComponentProps) {
    return (
        <React.Fragment>
            <div className="bg-gray-200 ">
            <h1 className="py-5 px-10 font-semibold text-2xl">Recharts</h1>
            <div className="grid justify-items-center xl:grid-cols-2 gap-y-10">
           <AreaCharts/> 
           <BarCharts/>
           <LineCharts/>
           <Composed/>
           <PieCharts/>
           <RadarCharts/>
           <ReadialBarCharts/>
           <ScatterCharts/>
           <FunnelCharts/>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Recharts
