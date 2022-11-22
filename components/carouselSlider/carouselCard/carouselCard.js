import React from "react";
import Image from "next/image";
import style from "./carouselCard.module.scss";

const CarouselCard = ({ cardIcon, cardH1, descir }) => {
  return (
    <div className={style.serivcesCard}>
      <div className={style.serivcesIcon}>
        <Image
          width="70px"
          height="70px"
          layout="responsive"
          className={style.serivcesIcon}
          src={cardIcon}
          draggable={false}
          alt="Levantisk card"
        />
      </div>
      <h1 className={style.servicesH1}> {cardH1}</h1>
      <p className={style.servicesP}>{descir}</p>
    </div>
  );
};

export default CarouselCard;
