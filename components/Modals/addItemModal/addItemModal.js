import { useEffect } from "react";
import style from "./addItemModal.module.scss";

import { MdClose } from "react-icons/md";

function AddItemModal(props) {
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanUp() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  });
  if (!props.show) {
    return null;
  }
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };
  return (
    <div className={style.modal}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={style.modalBtn} onClick={props.onClose}>
          <MdClose />
        </button>
      </div>
    </div>
  );
}

export default AddItemModal;
