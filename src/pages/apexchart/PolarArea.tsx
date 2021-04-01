import React from 'react'
import Chart from 'react-apexcharts'

function PolarArea() {
    const data= {
          
        series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
        options: {
          chart: {
            type: 'polarArea',
          },
          stroke: {
            colors: ['#f2f2f2']
          },
          fill: {
            opacity: 0.8
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    return (
        <div className="bg-white p-10 rounded-md shadow-lg">
           <Chart
           width="500"
           type="polarArea"
           options={data.options}
           series={data.series}
           /> 
        </div>
    )
}

export default PolarArea
