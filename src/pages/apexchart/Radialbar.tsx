import React from 'react';
import Chart from 'react-apexcharts'

function Radialbar() {
    const data={
          
        series: [44, 55, 67, 83],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: true,
                  label: 'Total',
                  formatter: function (w:any) {
                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                    return 249
                  }
                }
              }
            }
          },
          labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        },
      
      
      };
    return (
        <div className="bg-white p-10 rounded-md shadow-lg">
            <Chart
            type='radialBar'
            options={data.options}
            series={data.series}
            width="500"
             />
        </div>
    )
}

export default Radialbar
