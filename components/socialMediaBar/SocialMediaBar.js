import {
  BsGithub,
  BsLinkedin,
  BsSpotify,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { SiCodewars } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import sociaStyle from "./socialMediaBar.module.scss";

const SocialMediaBar = () => {
  return (
    <div className={sociaStyle.socialContainer}>
      <a
        href="https://www.linkedin.com/company/83024503/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>

      <a
        href="https://www.instagram.com/levantisk2022/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
      <a href="tel:0046739871260" target="_blank" rel="noreferrer" alt="Call">
        <BiPhoneCall />
      </a>
      <a href="mailto:mjd.thif@icloud.com" target="_blank" rel="noreferrer">
        <MdOutlineMailOutline />
      </a>
    </div>
  );
};

export default SocialMediaBar;
