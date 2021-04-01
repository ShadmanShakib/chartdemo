import React from 'react'
import Chart from 'react-apexcharts'
function SimpleLine() {
    const data={
      series:[
        {
          type:'line',
          name:"Series 1",
          data:[10,30,75,97,29,28,48,70]
        },
    
      ],
   
     
      // Options
      options:{
        id:'1',
        xaxis:{
          categories:['Jan',"Feb","Mar","Apr",'May',"Jun",'Jul','Aug',"Sep",'Oct',"Nov",'Dec']
        },

        // annotations
     annotations:{
       points:[
         {
           y:23,
           x:"Mar",
           borderColor:'red',
           label:{
             borderColor:'green',
             style:{
               color:'#000',
               backgraound:'#222'
             },
             text:'23',
           },
         }
       ]
     },
        // datalavels
        dataLabels: {
          enabled: true,
        },
      }
    };
    return (
        <div>
             <Chart
           options={data.options}
           series={data.series} 
           width="500"
           type="line"
           />  
          
        </div>

    )
}

export default SimpleLine
