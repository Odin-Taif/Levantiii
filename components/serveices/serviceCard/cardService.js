import React from "react";
import Image from "next/image";
import style from "./serviceCard.module.scss";

const ServiCard = ({ cardIcon, cardH1, descir }) => {
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
          alt="services"
        />
      </div>
      <h1 className={style.servicesH1}> {cardH1}</h1>
      <p className={style.servicesP}>{descir}</p>
    </div>
  );
};

export default ServiCard;
