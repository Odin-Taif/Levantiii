import { useState, useEffect } from "react";
import Image from "next/image";
import QrImage from "../../public/Assets/qrcode.webp";
import QrModal from "../Modals/qrModal/qrModal";
import style from "./header.module.scss";
import { motion } from "framer-motion";
import FormTabs from "../formTabs/formTabs";
import { useAuth } from "../../context/authUserContext";

const Header = () => {
  const { authUser } = useAuth();
  const [show, setShow] = useState(false);
  useEffect(() => {}, [authUser]);

  return (
    <header>
      <div className={style.headerContainer}>
        <div className={style.headerBanner}>
          <div className={style.squre}>
            <QrModal onClose={() => setShow(false)} show={show} />
            <h1 className={style.headerTitle}>LEVANTI</h1>
            <h1 className={style.headerDiscription} style={{ padding: "1rem" }}>
              LEVANTIII made connecting with others much easier. All social
              networks in one place. Phone number, Whats app, snapshot,
              instagram and the list goes on... No need to type user names
              anymore nor to reapeat numbers. Show up your QR and let people
              choese to connect with you on all major social media.
            </h1>
            <div className={style.squre}>
              <motion.div className={style.QrcodeContainer}>
                <Image
                  width="300px"
                  height="300px"
                  src={QrImage}
                  alt={"QR CODE"}
                  priority={true}
                  draggable={false}
                  className={style.qrImage}
                />
              </motion.div>
            </div>
          </div>
        </div>
        {!authUser && (
          <div className={style.signupContainer}>{<FormTabs />}</div>
        )}
      </div>
    </header>
  );
};
export default Header;
