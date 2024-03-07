import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeCurrency = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  return (
    <div
      className="btn"
      style={{ backgroundColor: "lightgreen", color: "white" }}
    >
      Currency
      <select
        className="currency"
        name="currency"
        id="currency"
        style={{ background: "lightgreen", color: "white", border: 0 }}
        onChange={(event) => changeCurrency(event.target.value)}
      >
        <option value="£">£ Pounds</option>
        <option value="$">$ Dollar</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>
    </div>
  );
};

export default Currency;
