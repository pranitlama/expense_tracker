import "./App.css";
import History from "./components/history";
import Entry from "./components/entry";
import Graph from "./components/graph";

import data from "./Data";
import { useState } from "react";

function App() {
  const config = {
    data: {
      datasets: [
        {
          transaction: [],
          data: [0, 0],

          backgroundColor: ["#00A878", "#A30015"],

          hoverOffset: 4,
          borderRadius: 20,
          spacing: 5,
        },
      ],
    },
    options: {
      cutout: 115,
    },
  };

  const [list, setList] = useState(config);

  function addlist(entr, data) {
    let temp;
    setList((prevChartData) => {
      temp = prevChartData.data.datasets[0].data;
      data > 0 ? (temp[0] += data) : (temp[1] += data);
      return {
        data: {
          datasets: [
            {
              transaction: [
                ...prevChartData.data.datasets[0].transaction,
                entr,
              ],
              data: temp,
            },
          ],
        },
      };
    });
  }

  function deletelist(id, data, type) {
    let ans;
    let temp;
    ans = list.data.datasets[0].transaction.filter((item) => item.id !== id);
    console.log(type);
    setList((prevChartData) => {
      temp = prevChartData.data.datasets[0].data;
      console.log(temp, "before");
      type == "expense"
        ? (temp[1] = temp[1] + +data)
        : (temp[0] = temp[0] - data);
      console.log(temp, "after");
      return {
        data: {
          datasets: [
            {
              transaction: ans,
              data: temp,
            },
          ],
        },
      };
    });
  }
  // console.log(list);
  return (
    <div>
      <h1 className="main-title">Expense Tracker</h1>
      <div className="section">
        <Graph data={list} />
        <Entry addlist={addlist} />
        <div className="history-list">
          <h1 className="title">History</h1>

          {list.data.datasets[0].transaction.length > 0 ? (
            list.data.datasets[0].transaction.map((item, index) => {
              return <History list={item} key={index} del={deletelist} />;
            })
          ) : (
            <h1>No history</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
