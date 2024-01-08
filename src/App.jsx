import "./App.css";
import History from "./components/history";
import Entry from "./components/entry";
import Graph from "./components/graph";

import data from "./Data";
import { useState } from "react";

function App() {
  const [list, setList] = useState(data);

  function addlist(newlist) {
    console.log(newlist);
    setList([...list, newlist]);
  }

  return (
    <div>
      <h1 className="main-title">Expense Tracker</h1>
      <div className="section">
        <Graph />
        <Entry addlist={addlist} />
        <div className="history-list">
          <h1 className="title">History</h1>
          {list.map((item, index) => {
            return <History list={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
