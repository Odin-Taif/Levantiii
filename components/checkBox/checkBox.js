import React from "react";
import style from "./checkBox.module.scss";

function CheckBox({ value, label }) {
  return (
    <div className={style.checkBox}>
      <input
        type="checkbox"
        id="vehicle1"
        name="vehicle1"
        value={value}
        className={style.input}
      />
      <label htmlFor="vehicle1" className={style.label}>
        {label}
      </label>
      <br></br>
    </div>
  );
}

export default CheckBox;
