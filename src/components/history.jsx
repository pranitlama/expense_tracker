export default function history({ list, del }) {
  let style = {
    background: list.type == "expense" ? "#A30015" : "#00A878",
  };

  return (
    <div className="item" style={style}>
      <span className="list-amt">Rs.{list.amt}</span>
      <span className="list-type">{list.des} </span>
      <span className="list-date">{list.date}</span>
      <a className="delbtn" onClick={() => del(list.id, list.amt, list.type)}>
        Delete
      </a>
    </div>
  );
}
