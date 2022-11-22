import { useState, useEffect } from "react";

//-=-==-=-=-Context-=-=-=-=-=-=-=-=-=//
import { useStateValue } from "../../context/stateProvider";
import { actionType } from "../../context/reducer";
//-=-=-=-=-=-=-=-=--=-=-Components import-=-=-=-=-=-=-=-=|||
import Nav from "../navbar/navbar";
import Footer from "../footer/footer";
//-=-=-=-=-=-=-=-=-=-=- style import-=-=-=-=|||
import layoutStyle from "./layout.module.scss";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

///-=-=-=-=-=interface type-=-=-=-=-=-||
interface Props {
  children: JSX.Element[] | JSX.Element;
}
const Layout = ({ children }: Props) => {
  // const [{ user, existedUser }, dispatch] = useStateValue();
  // useEffect(() => {
  //   monitorAuthState();
  // }, []);
  // const monitorAuthState = async () => {
  //   onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       console.log("am siged in now from layout ");
  //       // console.log(user);
  //       // await fetchExistedUser(user.uid);
  //       // console.log(existedUser);
  //     } else {
  //       console.log("user is logged out from layout");
  //     }
  //   });
  // };

  return (
    <>
      <Nav />
      <div className={layoutStyle.container}>
        <main className={layoutStyle.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
