import React, { useState } from "react";
//============importing compos
import DropMenu from "../DropMeun/DropMenu";

//============importing icons
import {
  MdArrowDownward,
  MdKeyboardArrowDown,
  MdLanguage,
} from "react-icons/md";
//============importing styles.
import style from "./languageDrop.module.scss";

const LanguageDrop = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div className={style.langDiv}>
      <div className={style.langBtnDiv}>
        <button
          className={style.langBtn}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
        >
          |EN <MdLanguage />
          {hover ? (
            <>
              <MdArrowDownward /> <DropMenu />
            </>
          ) : (
            <MdKeyboardArrowDown />
          )}
          <span />
        </button>
      </div>
    </div>
  );
};

export default LanguageDrop;
