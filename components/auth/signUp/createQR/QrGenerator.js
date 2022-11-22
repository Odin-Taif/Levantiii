import QRCode from "qrcode";
import { useState } from "react";
import Image from "next/image";
import style from "./QR.module.scss";
const Qrcode = () => {
  const [url, setUrl] = useState(userID);
  const [qr, setQr] = useState("");

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
        console.log(url);
        setQr(url);
      }
    );
  };

  return (
    <div className={style.container}>
      <main className={style.QrContainer}>
        <div className={style.QrinputContainer}>
          <input
            className={style.QrInput}
            type="text"
            placeholder="e.g. https://website.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="btn" variant="contained" onClick={GenerateQRCode}>
            Generate
          </button>
        </div>

        {qr && (
          <>
            <Image
              src={qr}
              width={"70px"}
              height={"70px"}
              draggable={"false"}
              alt={"image"}
              className={style.QrImg}
            />

            <a
              variant="contained"
              color="success"
              href={qr}
              download="qrcode.png"
            >
              Download
            </a>
          </>
        )}
      </main>
    </div>
  );
};

export default Qrcode;
