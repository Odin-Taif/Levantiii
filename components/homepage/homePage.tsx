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
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";

import { signOut } from "firebase/auth";
import { actionType } from "../../context/reducer";
import { useStateValue } from "../../context/stateProvider";

export default function HomePage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { signInEmailPass } = useAuth();
  const [{ user, existedUser }, dispatch] = useStateValue();
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
