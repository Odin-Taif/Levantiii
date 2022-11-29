import Image from "next/image";
import userImgAvatar from "../../public/Assets/user.webp";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../context/authUserContext";

import { useStateValue } from "../../context/stateProvider";
import { actionType } from "../../context/reducer";
import MuiDrawer from "../drawer/drawer.js";
// import { LevantiksButton } from "../ReusableComponents/reuseableHub.ts";
import style from "./profile.module.scss";

const Profile = () => {
  const [{ user, existedUser }, dispatch] = useStateValue();
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  //-=-=-=-=-=-=-user Effect -=-=-=-=-=-=

  //-=-=-=-=-=-=-=-=-=-=-=-=Login-=-=-=-=-=-

  return (
    <div className={style.avatarContainer}>
      {existedUser && (
        <motion.div whileTap={{ scale: 1.1 }}>
          <Image
            width={"50px"}
            height={"50px"}
            alt="Levantisk icon"
            layout="fixed"
            src={
              existedUser.imgUploaded ? existedUser.imgUploaded : userImgAvatar
            }
            className={style.avatarImage}
            draggable={"false"}
            onClick={() => setDrawerOpen(!drawerOpen)}
          />
          <MuiDrawer
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            onHover={onHover}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Profile;
