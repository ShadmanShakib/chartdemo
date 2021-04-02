import React from "react"
import { Pie } from "react-chartjs-2"

function PieChartjs()  {
  
    const data = {
      labels: ["Desktops", "Tablets"],
      datasets: [
        {
          data: [300, 180],
          backgroundColor: ["#34c38f", "#ebeff2"],
          hoverBackgroundColor: ["#34c38f", "#ebeff2"],
          hoverBorderColor: "#fff",
        },
      ],
    }

    return (
      <React.Fragment>
          <div style={{width:'600',}} className="bg-white p-10 rounded-md shadow-lg">

        <Pie width={474} height={260} data={data} />
          </div>
      </React.Fragment>
    )
  
}

export default PieChartjs
