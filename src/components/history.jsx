export default function history({ list }) {
  let style = {
    background: list.type == "expense" ? "#A30015" : "#00A878",
  };
  // console.log(list);
  return (
    <div className="item" style={style}>
      <span className="list-amt">Rs.{list.amt}</span>
      <span className="list-type">{list.des} </span>
      <span className="list-date">{list.date}</span>
    </div>
  );
}
