import { Chart, ArcElement } from "chart.js";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
Chart.register(ArcElement);

export default function graph(props) {
  const arrsum = (arrs) => {
    return arrs.reduce((x, y) => x + y.amt, 0);
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

    console.log(arr);
    return ans;
  };

  return (
    <div className="graph">
      <div className="gitem">
        <div className="chart">
          <Doughnut {...props.data} />

          <h3 className="tamt title">
            Total
            <span className="amtspan">Rs:{arrsum(props.list)}</span>
          </h3>
        </div>
        <div className="glabel">
          <span>Total expense: Rs {cheker(props.list, "exp")}</span>
          <span>Total Income: Rs {cheker(props.list, "inc")}</span>
        </div>
      </div>
    </div>
  );
}
