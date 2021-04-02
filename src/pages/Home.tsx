import React from 'react'
import { RouteComponentProps } from '@reach/router'; 
import Chart from 'react-apexcharts'   




function Home(props:RouteComponentProps) {

    return (
        <React.Fragment>
            <div className="text-3xl text-center pt-10">
                This is chart demo project build by <a target="_blank" rel="noreferrer" href="https://shadmanshakib.vecel.app" className="text-blue-800 font-bold hover:text-pink-600 transition duration-300     ">Shadman Shakib</a>
                <h1 className="my-3">Here three types of chart are used by me</h1>
                <h1 className="text-blue-800">
                    <a target="_blank" rel="noreferrer" className="text-blue-800" href="https://recharts.org/en-US/">Rechart</a>, 
                    <a target="_blank" rel="noreferrer" href="https://chartjs.org"> Chart JS</a> and
                    <a target="_blank" rel="noreferrer" href="https://apexcharts.com"> ApexCharts</a>
                </h1>
            </div>
        </React.Fragment>
    )
}

export default Home
