//=========importing elements from next and react.
import { useState, useEffect } from "react";
import Link from "next/link";
//-=-=-=-=-=- componentes import-=-=-=-=-=-=-||
import { LevantiskLogo } from "../reusableComponents/reuseableHub";
import Profile from "../profile/profile";
import { useAuth } from "../../context/authUserContext";
//============importing styles.
import style from "./navbar.module.scss";
import { useStateValue } from "../../context/stateProvider";
import { useRouter } from "next/router";
const Nav = () => {
  const { authUser, loading, signOutAndClear } = useAuth();
  const router = useRouter();
  // console.log(user);
  useEffect(() => {
    if (!loading && !authUser) router.push("/");
  }, [authUser, loading]);

  //===============Smooth scrollin section.
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 60) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    console.log("Hello");
    // scroll.scrollToTop();
  };
  return (
    <>
      <nav className={scrollNav ? style.scrollNavTrans : style.scrollNavBlack}>
        <LevantiskLogo toggleHome={toggleHome} />
        <div className={style.navBarContainer}>
          <li className={style.navLinks}>
            <Link href={"/"}>Home</Link>
          </li>
          <li className={style.navLinks}>
            <Link href={"/"}>About</Link>
          </li>
          <li className={style.navLinks}>
            <Link href={"/"}>Contact</Link>
          </li>
        </div>
        {authUser && <Profile />}
      </nav>
    </>
  );
};
export default Nav;
