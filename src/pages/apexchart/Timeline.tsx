import React from 'react';
import Chart from 'react-apexcharts';

function Timeline() {
    const data={
          
        series: [
          {
            data: [
              {
                x: 'Code',
                y: [
                  new Date('2019-03-02').getTime(),
                  new Date('2019-03-04').getTime()
                ]
              },
              {
                x: 'Test',
                y: [
                  new Date('2019-03-04').getTime(),
                  new Date('2019-03-08').getTime()
                ]
              },
              {
                x: 'Validation',
                y: [
                  new Date('2019-03-08').getTime(),
                  new Date('2019-03-12').getTime()
                ]
              },
              {
                x: 'Deployment',
                y: [
                  new Date('2019-03-12').getTime(),
                  new Date('2019-03-18').getTime()
                ]
              }
            ]
          }
        ],
        options: {
          chart: {
            height: 350,
            type: 'rangeBar'
          },
          plotOptions: {
            bar: {
              horizontal: true
            }
          },
          xaxis: {
            type: 'datetime'
          }
        },
      
      
      };
    return (
        <div>
            <Chart
            options={data.options}
            series={data.series}
            width={500}
            type="rangeBar"
            />
        </div>
    )
}

export default Timeline
