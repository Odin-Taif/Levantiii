//-=-=-=-=-=-=---=-=-=-=-=-=-=components import
import SocialMediaBar from "../socialMediaBar/SocialMediaBar";
import Header from "../header/Header";
//-=-=-=-=-=-=-=-=-=-=- style  import s-=-=-=-=-=
import style from "./homePage.module.scss";
export default function HomePage() {
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
