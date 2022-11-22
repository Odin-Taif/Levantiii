import style from "./footer.module.scss";
import { MdQrCode } from "react-icons/md";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <span>
        LEVANTI
        <MdQrCode style={{ fontSize: "1.4rem" }} />
        IIII
      </span>
      ©{new Date().getUTCFullYear()} | ALL RIGHTS RESERVED.
    </footer>
  );
};

export default Footer;
