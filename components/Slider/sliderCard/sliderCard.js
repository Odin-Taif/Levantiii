import React from "react";
import Image from "next/image";
import style from "./sliderCard.module.scss";

const SliderCard = ({ title, calories, category, imageURL, price }) => {
  return (
    <div className={style.serivcesCard}>
      <div className={style.serivcesIcon}>
        <Image
          width="100px"
          height="100px"
          layout="fixed"
          className={style.serivcesIcon}
          src={imageURL}
          draggable={false}
          alt="Item Card"
          priority={true}
        />
      </div>
      <h1 className={style.servicesH1}>{title}</h1>
      <h1 className={style.servicesH1}>{category}</h1>
      <p className={style.servicesP}>{calories}</p>
      <p className={style.servicesP}>{price}</p>
    </div>
  );
};

export default SliderCard;
