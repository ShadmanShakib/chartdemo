import { RouteComponentProps } from '@reach/router'
import React from 'react';
import BarChart from './Barchart'
import Donut from './Donut';
import LineChartjs from './LineChartjs';
import PieChartjs from './PieChartjs';
import PolarChartjs from './PolarChartjs';
import Radar from './Radar';

function Chartjs(props:RouteComponentProps) {
    return (
        <div className="grid justify-items-center xl:grid-cols-2 gap-y-10 py-20 bg-gray-200">
            <BarChart/>
            <Donut/>
            <LineChartjs/>
            <PieChartjs/>
            <PolarChartjs/>
            <Radar/>
        </div>
    )
}

export default Chartjs
