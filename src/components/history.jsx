import React from "react";

function history({ data, deleteList }) {
  // console.log("rendering history", list);
  let style = {
    borderLeft: `10px solid ${data.type == "income" ? "#00A878" : "#A30015"}`,
  };

  return (
    <div className="item" style={style}>
      <span className="list-amt">{data.amt}</span>
      <span className="list-type">{data.des} </span>
      <span className="list-date">{data.date}</span>
      <a className="delbtn" onClick={() => deleteList(data.id)}>
        Delete
      </a>
    </div>
  );
}

export default history;
