// Definition of the components : social media link. You can feed it with specifid variables.
import style from "./socialMediaLink.module.scss";
// href, target, name, icon

const SociaMediaLink = ({ linkName }: SocialMedialLink) => {
  return (
    <div className={style.linkWrapper}>
      {/* <a href={href} target={target} className={style.cardLinks} alt={name}>
        {icon} */}
      <h1>{linkName}</h1>
      {/* </a> */}
    </div>
  );
};

export default SociaMediaLink;
