import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
Chart.register(ArcElement);

// const config = {
//   data: {
//     datasets: [
//       {
//         label: "My First Dataset",
//         data: [300, 50, 100],
//         backgroundColor: ["black", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
//         hoverOffset: 4,
//         borderRadius: 20,
//         spacing: 5,
//       },
//     ],
//   },
//   options: {
//     cutout: 115,
//   },
// };

const arrsum = (arr) => {
  return arr.reduce((x, y) => x + y, 0);
};
export default function graph(props) {
  return (
    <div className="graph">
      <div className="gitem">
        <div className="chart">
          <Doughnut {...props.data} />

          <h3 className="tamt title">
            Total
            <span className="amtspan">
              Rs{arrsum(props.data.data.datasets[0].data)}
            </span>
          </h3>
        </div>
        <div className="glabel"></div>
      </div>
    </div>
  );
}
