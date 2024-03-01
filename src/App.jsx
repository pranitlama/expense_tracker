import "./App.css";
import History from "./components/history";
import Entry from "./components/entry";
import Graph from "./components/graph";

import data from "./Data";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);

  const config = {
    data: {
      datasets: [
        {
          data: list.map((item) => item.amt),
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
          borderRadius: 30,
          spacing: 5,
        },
      ],
    },
    options: {
      cutout: 115,
    },
  };

  function addList(entr) {
    setList((prev) => {
      return [...prev, entr];
    });
  }

  function deleteList(id) {
    let ans = list.filter((item) => item.id !== id);
    setList(ans);
  }

  return (
    <div>
      <h1 className="main-title">Expense Tracker</h1>
      <div className="section">
        <Graph data={config} list={list} />

        <Entry addList={addList} />
        <div className="history-list">
          <h1 className="title">History</h1>

          {list.map((item) => {
            return (
              <History data={item} key={item.id} deleteList={deleteList} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
