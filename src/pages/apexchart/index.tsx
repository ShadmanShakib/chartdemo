import { RouteComponentProps } from '@reach/router';
import React from 'react';
import Areachart from './Areachart';
import Barchart from './Barchart';
import CandleStick from './CandleStick';
import Column from './Column';
import Mixed from './Mixed';
import SimpleLine from './SimpleLine'
import Timeline from './Timeline';
import Pie from './Pie'
import Box from './Box';
import Radar from './Radar';
import PolarArea from './PolarArea';
import Radialbar from './Radialbar';

function LineChartPg(props:RouteComponentProps) {
    return (
        <div className="grid bg-gray-200 xl:grid-cols-2 justify-items-center gap-y-10 pt-10 pb-20">
            <div className="bg-white p-10 shadow-lg rounded-md"><SimpleLine/></div>
            <div className="bg-white p-10 shadow-lg rounded-md"><Barchart/></div>
            <div className="bg-white p-10 shadow-lg rounded-md">   <Column/></div>
            <div className="bg-white p-10 shadow-lg rounded-md"><Areachart/></div>
            <div className="bg-white p-10 shadow-lg rounded-md">   <Mixed/></div>
            <div className="bg-white p-10 shadow-lg rounded-md"><Timeline/></div>
            <div className="bg-white p-10 shadow-lg rounded-md"><CandleStick/></div>
            <div className="bg-white p-10 shadow-lg rounded-md"><Pie/></div>
            <div className="bg-white p-10 shadow-lg rounded-md"><Box/></div>
            <Radar/>
            <PolarArea/>
            <Radialbar/>

        </div>
    )
}

export default LineChartPg;
