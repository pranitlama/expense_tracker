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
          data: [],

          backgroundColor: [],
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

  function addlist(entr, color, data) {
    // console.log(entr, color, data);
    setList((prevChartData) => {
      return {
        data: {
          datasets: [
            {
              transaction: [
                ...prevChartData.data.datasets[0].transaction,
                entr,
              ],
              data: [...prevChartData.data.datasets[0].data, data],
              backgroundColor: [
                ...prevChartData.data.datasets[0].backgroundColor,
                color,
              ],
            },
          ],
        },
      };
    });
  }

  return (
    <div>
      <h1 className="main-title">Expense Tracker</h1>
      <div className="section">
        <Graph data={list} />
        <Entry addlist={addlist} />
        <div className="history-list">
          <h1 className="title">History</h1>
          {list.data.datasets[0].transaction.map((item, index) => {
            return <History list={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
