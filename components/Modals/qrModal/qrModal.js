import { useEffect } from "react";
import Image from "next/image";
import style from "./qrModal.module.scss";
import QrImage from "../../../public/Assets/qrcode.webp";

function QrModal(props) {
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
    <div className={style.modal} onClick={props.onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={style.modalBody}>
          <Image
            priority={true}
            width="400px"
            height="400px"
            src={QrImage}
            alt={"QR CODE"}
            draggable={false}
            className={style.modalQr}
          />
        </div>
        <div className={style.modalFooter}>
          <button className={style.modalBtn} onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default QrModal;
