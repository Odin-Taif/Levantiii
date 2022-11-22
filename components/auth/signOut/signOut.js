import style from "./signout.module.scss";
import { MdLogout } from "react-icons/md";
const SignOut = ({ logout }) => {
  return (
    <div className={style.signoutContainer} onClick={() => logout()}>
      <span>
        Log Out <MdLogout />
      </span>
    </div>
  );
};

export default SignOut;
