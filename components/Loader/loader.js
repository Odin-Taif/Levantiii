import React from "react";
import style from "./loader.module.scss";
function Loader() {
  return (
    <div className={style.lds}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader;
