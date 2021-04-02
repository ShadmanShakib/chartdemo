import React from "react"
import { Polar } from "react-chartjs-2"

function PolarChartjs() {
  
    const data = {
      datasets: [
        {
          data: [11, 16, 7, 18],
          backgroundColor: ["#f46a6a", "#34c38f", "#f1b44c", "#556ee6"],
          label: "My dataset", // for legend
          hoverBorderColor: "#fff",
        },
      ],
      labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
    }

    return (
      <React.Fragment>
          <div style={{width:'600'}} className="bg-white p-10 rounded-md shadow-lg">

        <Polar width={474} height={300} data={data} />
          </div>
      </React.Fragment>
    )
  
}

export default PolarChartjs
