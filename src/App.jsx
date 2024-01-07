import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import History from "./components/history";
import Entry from "./components/entry";
import Graph from "./components/graph";

function App() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <div className="section">
        <Graph />
        <Entry />
        <History />
      </div>
    </div>
  );
}

export default App;
