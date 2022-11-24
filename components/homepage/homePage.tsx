//-=-=-=-=-=-=---=-=-=-=-=-=-=components import
import SocialMediaBar from "../socialMediaBar/SocialMediaBar";
import Header from "../header/Header";
//-=-=-=-=-=-=-=-=-=-=- style  import s-=-=-=-=-=
import style from "./homePage.module.scss";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../../context/authUserContext";
import { auth } from "../../Firebase/firebase.config";

import { actionType } from "../../context/reducer";
import { useStateValue } from "../../context/stateProvider";

export default function HomePage() {
  const { signInEmailPass } = useAuth();
  // const [{ user, existedUser }, dispatch] = useStateValue();
  //-=-=-=-=-=

  return (
    <>
      <div className={style.homeContainer}>
        <div className={style.socialMediaBar}>
          <SocialMediaBar />
        </div>
        <div>
          <Header />
        </div>
      </div>
    </>
  );
}
