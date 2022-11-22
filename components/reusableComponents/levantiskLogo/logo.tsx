import Link from "next/link";
import style from "./logo.module.scss";
import { MdQrCode } from "react-icons/md";
interface Props {
  toggleHome: () => void;
}
function LevantiskLogo({ toggleHome }: Props) {
  return (
    <Link href={"/"}>
      <div className={style.navLogo}>
        LEVANTI
        <MdQrCode style={{ fontSize: "1.4rem" }} />
        IIII
      </div>
    </Link>
  );
}

export default LevantiskLogo;
