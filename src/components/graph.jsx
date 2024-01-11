import { Chart, ArcElement } from "chart.js";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
Chart.register(ArcElement);

const arrsum = (arr) => {
  return arr.reduce((x, y) => x + y, 0);
};

const cheker = (arr, type) => {
  let ans;
  type == "exp"
    ? (ans = arr
        .filter((item) => item.type === "expense")
        .reduce(
          (accumulator, currentValue) => accumulator + +currentValue.amt,
          0
        ))
    : (ans = arr
        .filter((item) => item.type === "income")

        .reduce(
          (accumulator, currentValue) => accumulator + +currentValue.amt,
          0
        ));

  return ans;
};
export default function graph(props) {
  console.log(props.data.data.datasets[0].data);
  return (
    <div className="graph">
      <div className="gitem">
        <div className="chart">
          <Doughnut {...props.data} />

          <h3 className="tamt title">
            Total
            <span className="amtspan">
              Rs:{arrsum(props.data.data.datasets[0].data)}
            </span>
          </h3>
        </div>
        <div className="glabel">
          <span>
            Total expense: Rs{" "}
            {cheker(props.data.data.datasets[0].transaction, "exp")}
          </span>
          <span>
            Total Income: Rs{" "}
            {cheker(props.data.data.datasets[0].transaction, "inc")}
          </span>
        </div>
      </div>
    </div>
  );
}
