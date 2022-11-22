import { MdAdd } from "react-icons/md";
import style from "./userProfile.module.scss";

const UserProfile = ({ existedUser }) => {
  const signOut = () => {
    logout();
    onHover();
  };
  return (
    <div className={style.container}>
      <div>
        <span> Signed in as {existedUser.name}</span>
        <ul>
          <Link href={`/${existedUser.id}`}>
            <li className={style.linkWrapper} onClick={onHover}>
              Your profile
            </li>
          </Link>
          <Link href={`/${existedUser.id}`}>
            <li className={style.linkWrapper} onClick={onHover}>
              Upgrade
            </li>
          </Link>
          <Link href={`/${existedUser.id}`}>
            <li className={style.linkWrapper} onClick={onHover}>
              Help
            </li>
          </Link>
          <li className={style.linkWrapper} onClick={signOut}>
            Sign out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
