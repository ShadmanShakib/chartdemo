import React from 'react';
import Chart from 'react-apexcharts'

function Barchart() {
    const data={
        series:[{
            name:"series 1",
            data:[49,98,58,39,57,96,72,52,23,84]
        }],
        options:{
            id:'3',
            xaxis:{
                categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}
        }
    }
    return (
        <div>
          <Chart
          width={500}
          series={data.series}
          options={data.options}
          type="bar"
          />  
        </div>
    )
}

export default Barchart
