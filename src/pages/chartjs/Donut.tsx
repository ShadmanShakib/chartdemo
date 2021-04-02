import React from 'react';
import { Doughnut } from "react-chartjs-2"

function Donut() {
    const data = {
        labels: ["Desktops", "Tablets"],
        datasets: [
          {
            data: [300, 210],
            backgroundColor: ["#556ee6", "#ebeff2"],
            hoverBackgroundColor: ["#556ee6", "#ebeff2"],
            hoverBorderColor: "#fff",
          },
        ],
      }
    return (
        <div style={{width:'600'}} className="bg-white p-10 rounded-md shadow-md">
            <Doughnut width={474} height={260} data={data} /> 
        </div>
    )
}

export default Donut
