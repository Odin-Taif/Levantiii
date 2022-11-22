import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import style from "./businessCard.module.scss";
// import { socialMediaData } from "../dataHub";
import { SociaMediaLink } from "../reusableComponents/reuseableHub.ts";
import { useStateValue } from "../../context/stateProvider";
import { actionType } from "../../context/reducer";

import defaultImage from "../../public/Assets/user.webp";
// import { Qrcode } from "./qrModal/qrModal";
import { useState } from "react";
import { useRouter } from "next/router";
//-=-=-=- ICons import-=-=-=-=-=-=-=-=-||||||||||
import { FiShare } from "react-icons/fi";
import { MdQrCode, MdSaveAlt } from "react-icons/md";
import { BiAddToQueue } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import QrModal from "./qrModal/qrModal";

const BusinessCardLoginIn = ({
  displayName,
  email,
  imageAsset,
  userID,
  socialMediaData,
}) => {
  const [showQr, setshowQr] = useState(false);
  const [{ user, users }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);

  // This will determine what kind of image we will be displaying
  const imageSrc = imageAsset ? imageAsset : defaultImage;

  const myFunc = () => {
    myFunc = function () {}; // kill it as soon as it was called
    console.log("call once and never again!"); // your stuff here
  };
  const router = useRouter();

  const logout = async () => {
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
    router.push("/");
  };
  const addSocialLink = () => {
    socialMediaData.push(user.email);
    console.log(socialMediaData);
  };

  return (
    <>
      <QrModal
        onClose={() => setshowQr(false)}
        showQr={showQr}
        userID={userID}
      />
      <section className={style.businessCard}>
        <article className={style.profile}>
          <Link href="/">
            <a style={{ margin: "auto" }}>
              <Image
                width="100px"
                height="100px"
                src={imageSrc}
                priority={true}
                draggable={"false"}
                alt={"This is the image!"}
              />
            </a>
          </Link>
          <div className={style.funcContianer}>
            <motion.div whileTap={{ scale: 1.2 }}>
              <FiShare style={{ cursor: "pointer" }} />
            </motion.div>
            <motion.div whileTap={{ scale: 1.2 }}>
              <MdSaveAlt style={{ cursor: "pointer" }} />
            </motion.div>
            <motion.div whileTap={{ scale: 1.2 }}>
              <FiEdit style={{ cursor: "pointer" }} />
            </motion.div>
            <motion.div whileTap={{ scale: 1.2 }}>
              <MdQrCode
                style={{ cursor: "pointer" }}
                onClick={() => setshowQr(!showQr)}
              />
            </motion.div>
            <motion.div whileTap={{ scale: 1.2 }}>
              <FiLogOut style={{ cursor: "pointer" }} onClick={logout} />
            </motion.div>
          </div>
        </article>

        <div className={style.intro}>
          {/* <h2>{displayName}</h2> */}
          {/* <h1> {jobtitle}</h1> */}
        </div>
        {/* 
        <div className={style.linkContainer}>
          <BiAddToQueue size={30} color={"white"} onClick={addSocialLink} />
          {socialMediaData &&
            socialMediaData.map((item, index) => (
              <SociaMediaLink item={item} key={index} />
            ))}
        </div> */}
      </section>
    </>
  );
};

export default BusinessCardLoginIn;
