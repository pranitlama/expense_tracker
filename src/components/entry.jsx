import { useState } from "react";

export default function entry({ addlist }) {
  const [amt, setAmt] = useState("");
  const [typeopt, setTypeopt] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [opt, setOpt] = useState([]);
  const [id, setId] = useState(0);

  const options = [
    {
      name: "expense",
      types: [
        {
          name: "utilities",
        },
        {
          name: "Housing",
        },
        {
          name: "Transportation",
        },
        {
          name: "Groceries",
        },
        {
          name: "Health",
        },
        {
          name: "Entertainment",
        },
        {
          name: "Education",
        },
        {
          name: "debts",
        },
        {
          name: "personal care",
        },
        {
          name: "miscellaneous",
        },
      ],
    },

    {
      name: "income",
      types: [
        {
          name: "salary",
        },
        {
          name: "freelancing",
        },
        {
          name: "business income",
        },
        {
          name: "rental income",
        },
        {
          name: "investment income",
        },
        {
          name: "royalties",
        },
        {
          name: "gifts",
        },
        {
          name: "bonus or commission",
        },
      ],
    },
  ];

  function onchange(e, name) {
    switch (name) {
      case "type":
        setType(e.target.value);
        setOpt(options.find((opt) => opt.name == e.target.value).types);
        break;
      case "typeopt":
        setTypeopt(e.target.value);
        break;
      case "amt":
        setAmt(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    let entr = {
      id: id,
      type: type,
      des: typeopt,
      amt: amt,
      date: date == "" ? new Date().toLocaleDateString() : date,
    };

    let data = type == "expense" ? -amt : +amt;

    addlist(entr, data);
    setId((prev) => prev + 1);
    setAmt("");
    setDate("");
  }
  return (
    <div className="entry">
      <h1 className="title">Transaction</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="entryform">
          {/* <div className="input-group">
            <input
              type="text"
              name="des"
              onChange={(e) => onchange(e, "des")}
              id=""
              value={des}
              className="form-input"
              placeholder="type"
            />
          </div> */}
          <select
            name="type"
            id=""
            value={type}
            onChange={(e) => onchange(e, "type")}
            className="form-input"
          >
            <option defaultChecked>--Select--</option>
            {options.map((opt, index) => {
              return (
                <option value={opt.name} key={index}>
                  {opt.name}
                </option>
              );
            })}
          </select>

          <select
            name="typeopt"
            id=""
            className="form-input"
            value={typeopt}
            onChange={(e) => onchange(e, "typeopt")}
          >
            <option>--Select--</option>
            {opt.map((op, index) => {
              return (
                <option value={op.name} key={index}>
                  {op.name}
                </option>
              );
            })}
          </select>
          <div className="input-group">
            <input
              type="number"
              className="form-input"
              onChange={(e) => onchange(e, "amt")}
              name="amt"
              value={amt}
              id=""
              placeholder="Amount"
            />
          </div>
          <div className="input-group">
            <input
              type="date"
              className="form-input"
              onChange={(e) => onchange(e, "date")}
              name="amt"
              value={date}
              id=""
              placeholder="Amount"
            />
          </div>
          <div className="submit-btn">
            <button className="btn">Make Transaction</button>
          </div>
        </div>
      </form>
    </div>
  );
}
