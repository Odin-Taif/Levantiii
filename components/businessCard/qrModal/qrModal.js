import { useEffect, useState } from "react";
import Image from "next/image";
import style from "./qrModal.module.scss";
import QrImage from "../../../public/Assets/qrcode.webp";
import QRCode from "qrcode";

function QrModal({ id, onClose, showQr }) {
  const [url, setUrl] = useState(`http://localhost:3000/${id}`);
  const [qr, setQr] = useState("");

  useEffect(() => {
    const GenerateQRCode = () => {
      QRCode.toDataURL(
        url,
        {
          width: 800,
          margin: 2,
          color: {
            // dark: '#335383FF',
            // light: '#EEEEEEFF'
          },
        },
        (err, url) => {
          if (err) return console.error(err);

          setQr(url);
        }
      );
    };
    GenerateQRCode();

    //-=-=-=-=-=-=-=-=-=-=-=-=-EvernListener
    const closeOnEscapeKeyDown = (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
      }
    };
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanUp() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  if (!showQr) {
    return null;
  }

  return (
    <div className={style.modal} onClick={onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={style.modalBody}>
          {qr && (
            <>
              <Image
                src={qr}
                priority={true}
                width="400px"
                height="400px"
                alt={"QR CODE"}
                draggable={false}
              />
            </>
          )}
        </div>
        <div className={style.modalFooter}>
          <button className={style.modalBtn} onClick={onClose}>
            Close
          </button>
          <button className={style.modalBtn} onClick={onClose}>
            <a
              variant="contained"
              color="success"
              href={qr}
              download="qrcode.png"
              className={style.modalFooter}
            >
              Download
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default QrModal;
