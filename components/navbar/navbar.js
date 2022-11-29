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

  // console.log(authUser);

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
          <Link href={"/"}>
            <li className={style.navLinks}>Home</li>
          </Link>
          <Link href={"/"}>
            <li className={style.navLinks}>About</li>
          </Link>
          <Link href={"/"}>
            <li className={style.navLinks}>Contact</li>
          </Link>
        </div>
        {authUser && <Profile />}
      </nav>
    </>
  );
};
export default Nav;
