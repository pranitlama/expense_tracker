export default function entry() {
  return (
    <div className="entry">
      <h1 className="title">Transaction</h1>
      <form action="">
        <div className="entryform">
          <div className="input-group">
            <input
              type="text"
              name=""
              id=""
              className="form-input"
              placeholder="type"
            />
          </div>
          <select name="" id="" className="form-input">
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
          <div className="input-group">
            <input
              type="text"
              className="form-input"
              name=""
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
