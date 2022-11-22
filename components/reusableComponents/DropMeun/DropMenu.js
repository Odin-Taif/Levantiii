import Link from "next/link";
import style from "./DropMenu.module.scss";
const DropMenu = () => {
  let languages = ["Deutsch", "العربية", "Svenska", "English"];
  return (
    <div className={style.dropdown}>
      <div className={style.dropdownContent}>
        {languages.map((item, index) => {
          return (
            <li className={style.langItem} key={index}>
              <Link href="/">
                <a className={style.langLink}>{item}</a>
              </Link>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default DropMenu;
