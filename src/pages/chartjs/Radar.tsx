import React from 'react'
import { Radar as RadarChart } from "react-chartjs-2"
function Radar() {
    const data = {
        labels: [
          "Eating",
          "Drinking",
          "Sleeping",
          "Designing",
          "Coding",
          "Cycling",
          "Running",
        ],
        datasets: [
          {
            label: "Desktops",
            backgroundColor: "rgba(52, 195, 143, 0.2)",
            borderColor: "#34c38f",
            pointBackgroundColor: "#34c38f",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#34c38f",
            data: [65, 59, 90, 81, 56, 55, 40],
          },
          {
            label: "Tablets",
            backgroundColor: "rgba(85, 110, 230, 0.2)",
            borderColor: "#556ee6",
            pointBackgroundColor: "#556ee6",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#556ee6",
            data: [28, 48, 40, 19, 96, 27, 100],
          },
        ],
      }
  
    return (
        <div style={{width:"600px"}} className="bg-white p-10 rounded-md shadow-lg  ">
           <RadarChart width={474} height={300} data={data} />  
        </div>
    )
}

export default Radar
